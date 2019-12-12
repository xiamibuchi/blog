<template>
  <div>
    <p>支持任意格式色值，包括颜色关键字。</p>
    <form id="form" class="filter-form">
      <p>
        <span class="filter-input-tips">原始色</span
        ><el-input
          id="start"
          ref="start"
          class="filter-input"
          placeholder="原始色值"
          v-model.trim="startColor"
          name="start"
          autocomplete="off"
          required=""
          autofocus=""
          :style="{
            color: startInputColor
          }"
        />
      </p>

      <p>
        <span class="filter-input-tips">目标色</span
        ><el-input
          id="end"
          ref="end"
          class="filter-input"
          placeholder="呈现色值"
          name="end"
          v-model="endColor"
          autocomplete="off"
          required=""
          :style="{
            color: endInputColor
          }"
        />
      </p>

      <el-button class="filter-submit" @click="getFilterRules">转换</el-button>
    </form>
    <div class="filter-block">
      <div id="colorReal" class="filter-span" style="background-color:#ff0033;">
        <span>真背景色</span>
      </div>
      <div
        id="colorFilter"
        class="filter-span"
        style="filter: invert(17%) sepia(100%) saturate(6399%) hue-rotate(342deg) brightness(97%) contrast(110%); background-color: rgb(0, 0, 0);"
      >
        <span>滤镜呈现</span>
      </div>
    </div>
    <p id="show" class="filter-show">
      filter: invert(17%) sepia(100%) saturate(6399%) hue-rotate(342deg)
      brightness(97%) contrast(110%);
    </p>
    <p id="lossDetail" class="filter-loss">
      滤镜色值：{{ filterColor }}，误差：{{ errorValue }}。{{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "color-change-filter",
  data() {
    return {
      startColor: "#000000",
      endColor: "#ff0033",
      startInputColor: "#000000",
      endInputColor: "#ff0033",
      filterColor: "",
      errorValue: 0,
      errorMessage: "",
      Color: {},
      Solver: {}
    };
  },
  methods: {
    clamp(num) {
      if (num > 255) {
        num = 255;
      } else {
        if (num < 0) {
          num = 0;
        }
      }
      return num;
    },
    _createClass(constructor, propertyList) {
      function defineProperties(obj, propertyList) {
        propertyList.forEach(property => {
          property.enumerable = property.enumerable || false;
          property.configurable = true;
          if ("value" in property) {
            property.writable = true;
          }
          Object.defineProperty(obj, property.key, property);
        });
      }

      if (propertyList) {
        defineProperties(constructor.prototype, propertyList);
      }
      return constructor;
    },
    getFilterRules() {
      let self = this;
      var _classCallCheck = (a, b) => {
        if (!(a instanceof b)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      canvas.width = 10;
      canvas.height = 10;

      let start = this.$refs.start.$el;
      let end = this.$refs.end.$el;
      let startColor = this.startColor;
      let endColor = this.endColor;
      this.startInputColor = startColor;
      this.endInputColor = endColor;
      // 将输入的颜色转换为rgb格式
      var startRgbColor = window.getComputedStyle(start).color;
      var endRgbColor = window.getComputedStyle(end).color;
      var startRgbColorList = startRgbColor
        .replace(/\s|[A-Za-z\(\)]/g, "")
        .split(",");
      var endRgbColorList = endRgbColor
        .replace(/\s|[A-Za-z\(\)]/g, "")
        .split(",");
      var n = new self.Color(
        endRgbColorList[0],
        endRgbColorList[1],
        endRgbColorList[2]
      );
      var t = new self.Solver(n);
      t.reusedColor = new self.Color(
        startRgbColorList[0],
        startRgbColorList[1],
        startRgbColorList[2]
      );
      var f = t.solve();
      colorReal.style.backgroundColor = endColor;
      colorFilter.setAttribute("style", f.filter);
      colorFilter.style.backgroundColor = startColor;
      show.innerHTML = f.filter;
      var img = new Image();
      img.onload = function() {
        context.drawImage(this, 0, 0);
        var z = context.getImageData(5, 5, 1, 1);
        var w = z.data[0];
        var s = z.data[1];
        var h = z.data[2];
        var y = Math.sqrt(
          (endRgbColorList[0] - w) * (endRgbColorList[0] - w) +
            (endRgbColorList[1] - s) * (endRgbColorList[1] - s) +
            (endRgbColorList[2] - h) * (endRgbColorList[2] - h)
        );
        var errorMessage = "";
        if (y == 0) {
          errorMessage = "完美！";
        } else if (y < 2) {
          errorMessage = "几乎完美！";
        } else if (y < 5) {
          errorMessage = "颜色很接近了。";
        } else if (y < 15) {
          errorMessage = "颜色有些许出入，试试重新转换下。";
        } else {
          errorMessage = "颜色出入较大，请重新再转一遍。";
        }
        self.filterColor = self.colorHex(`rgb(${[w, s, h].join()})`);
        self.errorValue = y;
        self.errorMessage = errorMessage;
      };
      img.src =
        'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><foreignObject width="10" height="10"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;width:10px;height:10px;background-color:' +
        startColor.replace("#", "%23") +
        ";" +
        f.filter +
        '"></body></foreignObject></svg>';
    },
    colorHex(rgbColor) {
      var h = rgbColor;
      var f = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if (/^(rgb|RGB)/.test(h)) {
        var b = h.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var a = "#";
        for (var c = 0; c < b.length; c++) {
          var g = Number(b[c]).toString(16);
          if (g.length < 2) {
            g = "0" + g;
          }
          a += g;
        }
        if (a.length !== 7) {
          a = h;
        }
        return a;
      } else {
        if (f.test(h)) {
          var e = h.replace(/#/, "").split("");
          if (e.length === 6) {
            return h;
          } else {
            if (e.length === 3) {
              var d = "#";
              for (var c = 0; c < e.length; c += 1) {
                d += e[c] + e[c];
              }
              return d;
            }
          }
        }
      }
      return h;
    },
    init() {
      let self = this;
      var _classCallCheck = (a, b) => {
        if (!(a instanceof b)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      this.Color = (function() {
        function b(q, p, o) {
          _classCallCheck(this, b);
          this.set(q, p, o);
        }
        self._createClass(b, [
          {
            key: "toString",
            value: function f() {
              return (
                "rgb(" +
                Math.round(this.r) +
                ", " +
                Math.round(this.g) +
                ", " +
                Math.round(this.b) +
                ")"
              );
            }
          },
          {
            key: "set",
            value: function m(q, p, o) {
              this.r = self.clamp(q);
              this.g = self.clamp(p);
              this.b = self.clamp(o);
            }
          },
          {
            key: "hueRotate",
            value: function i() {
              var q =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 0;
              q = (q / 180) * Math.PI;
              var o = Math.sin(q);
              var p = Math.cos(q);
              this.multiply([
                0.213 + p * 0.787 - o * 0.213,
                0.715 - p * 0.715 - o * 0.715,
                0.072 - p * 0.072 + o * 0.928,
                0.213 - p * 0.213 + o * 0.143,
                0.715 + p * 0.285 + o * 0.14,
                0.072 - p * 0.072 - o * 0.283,
                0.213 - p * 0.213 - o * 0.787,
                0.715 - p * 0.715 + o * 0.715,
                0.072 + p * 0.928 + o * 0.072
              ]);
            }
          },
          {
            key: "grayscale",
            value: function c() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              this.multiply([
                0.2126 + 0.7874 * (1 - o),
                0.7152 - 0.7152 * (1 - o),
                0.0722 - 0.0722 * (1 - o),
                0.2126 - 0.2126 * (1 - o),
                0.7152 + 0.2848 * (1 - o),
                0.0722 - 0.0722 * (1 - o),
                0.2126 - 0.2126 * (1 - o),
                0.7152 - 0.7152 * (1 - o),
                0.0722 + 0.9278 * (1 - o)
              ]);
            }
          },
          {
            key: "sepia",
            value: function g() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              this.multiply([
                0.393 + 0.607 * (1 - o),
                0.769 - 0.769 * (1 - o),
                0.189 - 0.189 * (1 - o),
                0.349 - 0.349 * (1 - o),
                0.686 + 0.314 * (1 - o),
                0.168 - 0.168 * (1 - o),
                0.272 - 0.272 * (1 - o),
                0.534 - 0.534 * (1 - o),
                0.131 + 0.869 * (1 - o)
              ]);
            }
          },
          {
            key: "saturate",
            value: function e() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              this.multiply([
                0.213 + 0.787 * o,
                0.715 - 0.715 * o,
                0.072 - 0.072 * o,
                0.213 - 0.213 * o,
                0.715 + 0.285 * o,
                0.072 - 0.072 * o,
                0.213 - 0.213 * o,
                0.715 - 0.715 * o,
                0.072 + 0.928 * o
              ]);
            }
          },
          {
            key: "multiply",
            value: function d(o) {
              var q = self.clamp(this.r * o[0] + this.g * o[1] + this.b * o[2]);
              var p = self.clamp(this.r * o[3] + this.g * o[4] + this.b * o[5]);
              var r = self.clamp(this.r * o[6] + this.g * o[7] + this.b * o[8]);
              this.r = q;
              this.g = p;
              this.b = r;
            }
          },
          {
            key: "brightness",
            value: function l() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              this.linear(o);
            }
          },
          {
            key: "contrast",
            value: function h() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              this.linear(o, -(0.5 * o) + 0.5);
            }
          },
          {
            key: "linear",
            value: function k() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              var p =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : 0;
              this.r = self.clamp(this.r * o + p * 255);
              this.g = self.clamp(this.g * o + p * 255);
              this.b = self.clamp(this.b * o + p * 255);
            }
          },
          {
            key: "invert",
            value: function a() {
              var o =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 1;
              this.r = self.clamp((o + (this.r / 255) * (1 - 2 * o)) * 255);
              this.g = self.clamp((o + (this.g / 255) * (1 - 2 * o)) * 255);
              this.b = self.clamp((o + (this.b / 255) * (1 - 2 * o)) * 255);
            }
          },
          {
            key: "hsl",
            value: function n() {
              var o = this.r / 255;
              var u = this.g / 255;
              var w = this.b / 255;
              var x = Math.max(o, u, w);
              var q = Math.min(o, u, w);
              var t = void 0,
                y = void 0,
                p = (x + q) / 2;
              if (x === q) {
                t = y = 0;
              } else {
                var v = x - q;
                y = p > 0.5 ? v / (2 - x - q) : v / (x + q);
                switch (x) {
                  case o:
                    t = (u - w) / v + (u < w ? 6 : 0);
                    break;
                  case u:
                    t = (w - o) / v + 2;
                    break;
                  case w:
                    t = (o - u) / v + 4;
                    break;
                }
                t /= 6;
              }
              return { h: t * 100, s: y * 100, l: p * 100 };
            }
          }
        ]);
        return b;
      })();
      this.Solver = (function() {
        function e(h, i) {
          _classCallCheck(this, e);
          this.target = h;
          this.targetHSL = h.hsl();
          this.reusedColor = new self.Color(0, 0, 0);
        }
        self._createClass(e, [
          {
            key: "solve",
            value: function c() {
              var h = this.solveNarrow(this.solveWide());
              return {
                values: h.values,
                loss: h.loss,
                filter: this.css(h.values)
              };
            }
          },
          {
            key: "solveWide",
            value: function b() {
              var j = 5;
              var o = 15;
              var k = [60, 180, 18000, 600, 1.2, 1.2];
              var n = { loss: Infinity };
              for (var m = 0; n.loss > 25 && m < 3; m++) {
                var l = [50, 20, 3750, 50, 100, 100];
                var h = this.spsa(j, k, o, l, 1000);
                if (h.loss < n.loss) {
                  n = h;
                }
              }
              return n;
            }
          },
          {
            key: "solveNarrow",
            value: function g(k) {
              var h = k.loss;
              var l = 2;
              var j = h + 1;
              var i = [0.25 * j, 0.25 * j, j, 0.25 * j, 0.2 * j, 0.2 * j];
              return this.spsa(h, i, l, k.values, 500);
            }
          },
          {
            key: "spsa",
            value: function f(w, E, C, j, q) {
              var o = 1;
              var r = 0.16666666666666666;
              var m = null;
              var h = Infinity;
              var s = new Array(6);
              var p = new Array(6);
              var D = new Array(6);
              for (var x = 0; x < q; x++) {
                var t = C / Math.pow(x + 1, r);
                for (var z = 0; z < 6; z++) {
                  s[z] = Math.random() > 0.5 ? 1 : -1;
                  p[z] = j[z] + t * s[z];
                  D[z] = j[z] - t * s[z];
                }
                var u = this.loss(p) - this.loss(D);
                for (var l = 0; l < 6; l++) {
                  var B = (u / (2 * t)) * s[l];
                  var y = E[l] / Math.pow(w + x + 1, o);
                  j[l] = v(j[l] - y * B, l);
                }
                var n = this.loss(j);
                if (n < h) {
                  m = j.slice(0);
                  h = n;
                }
              }
              return { values: m, loss: h };
              function v(A, k) {
                var i = 100;
                if (k === 2) {
                  i = 7500;
                } else {
                  if (k === 4 || k === 5) {
                    i = 200;
                  }
                }
                if (k === 3) {
                  if (A > i) {
                    A %= i;
                  } else {
                    if (A < 0) {
                      A = i + (A % i);
                    }
                  }
                } else {
                  if (A < 0) {
                    A = 0;
                  } else {
                    if (A > i) {
                      A = i;
                    }
                  }
                }
                return A;
              }
            }
          },
          {
            key: "loss",
            value: function d(i) {
              var h = this.reusedColor;
              h.set(0, 0, 0);
              h.invert(i[0] / 100);
              h.sepia(i[1] / 100);
              h.saturate(i[2] / 100);
              h.hueRotate(i[3] * 3.6);
              h.brightness(i[4] / 100);
              h.contrast(i[5] / 100);
              var j = h.hsl();
              return (
                Math.abs(h.r - this.target.r) +
                Math.abs(h.g - this.target.g) +
                Math.abs(h.b - this.target.b) +
                Math.abs(j.h - this.targetHSL.h) +
                Math.abs(j.s - this.targetHSL.s) +
                Math.abs(j.l - this.targetHSL.l)
              );
            }
          },
          {
            key: "css",
            value: function a(i) {
              function h(j) {
                var k =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : 1;
                return Math.round(i[j] * k);
              }
              return (
                "filter: invert(" +
                h(0) +
                "%) sepia(" +
                h(1) +
                "%) saturate(" +
                h(2) +
                "%) hue-rotate(" +
                h(3, 3.6) +
                "deg) brightness(" +
                h(4) +
                "%) contrast(" +
                h(5) +
                "%);"
              );
            }
          }
        ]);
        return e;
      })();
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
body,
input {
  font-family: "Pingfang SC", "Microsoft Yahei";
}

.filter-form {
  max-width: 300px;
  margin: 0 auto;
  font-size: 150%;
}

.filter-input {
  width: 100%;
  padding: 15px 20px;
  font-size: 100%;
  box-sizing: border-box;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}

.filter-submit {
  display: block;
  width: 100%;
  height: 60px;
  font-size: 100%;
}

.filter-show {
  text-align: center;
  margin: 1em 16px;
  font-size: 150%;
}

.filter-block {
  display: flex;
  max-width: 300px;
  margin: 3em auto 1em;
  justify-content: space-between;
}

.filter-span {
  width: 140px;
  height: 140px;
  color: gray;
  outline: 1px dotted;
  outline-offset: 2px;
}

.filter-span span {
  position: absolute;
  margin-top: -30px;
  font-size: 14px;
}

.filter-loss {
  text-align: center;
  padding: 10px 16px;
  background-color: #333;
  color: #fff;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
