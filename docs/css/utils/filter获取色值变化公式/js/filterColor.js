/**
 * HSL颜色值转换为RGB.
 * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
 * h, s, 和 l 设定在 [0, 1] 之间
 * 返回的 r, g, 和 b 在 [0, 255]之间
 *
 * @param   Number  h       色相
 * @param   Number  s       饱和度
 * @param   Number  l       亮度
 * @return  Array           RGB色值数值
 */
function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * @description 使用滤镜实现任意颜色的转换
 * @author zhangxinxu(.com)
 * @created at 2018-11-24
 */
/**
 * RGB 颜色值转换为 HSL.
 * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
 * r, g, 和 b 需要在 [0, 255] 范围内
 * 返回的 h, s, 和 l 在 [0, 1] 之间
 *
 * @param   Number  r       红色色值
 * @param   Number  g       绿色色值
 * @param   Number  b       蓝色色值
 * @return  Array           HSL各值数组
 */
function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

String.prototype.colorHex = function() {
  var h = this;
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
};
function rgbToHsv(arr) {
  var h = 0, s = 0, v = 0;
  var r = arr[0], g = arr[1], b = arr[2];
  arr.sort(function (a, b) {
      return a - b;
  })
  var max = arr[2]
  var min = arr[0];
  v = max / 255;
  if (max === 0) {
      s = 0;
  } else {
      s = 1 - (min / max);
  }
  if (max === min) {
      h = 0;//事实上，max===min的时候，h无论为多少都无所谓
  } else if (max === r && g >= b) {
      h = 60 * ((g - b) / (max - min)) + 0;
  } else if (max === r && g < b) {
      h = 60 * ((g - b) / (max - min)) + 360
  } else if (max === g) {
      h = 60 * ((b - r) / (max - min)) + 120
  } else if (max === b) {
      h = 60 * ((r - g) / (max - min)) + 240
  }
  h = parseInt(h);
  s = parseInt(s * 100);
  v = parseInt(v * 100);
  return [h, s, v]
}

("use strict");
var _createClass = (function() {
  function a(e, c) {
    for (var b = 0; b < c.length; b++) {
      var d = c[b];
      d.enumerable = d.enumerable || false;
      d.configurable = true;
      if ("value" in d) {
        d.writable = true;
      }
      Object.defineProperty(e, d.key, d);
    }
  }
  return function(d, b, c) {
    if (b) {
      a(d.prototype, b);
    }
    if (c) {
      a(d, c);
    }
    return d;
  };
})();
function _classCallCheck(a, b) {
  if (!(a instanceof b)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Color = (function() {
  function b(q, p, o) {
    _classCallCheck(this, b);
    this.set(q, p, o);
  }
  _createClass(b, [
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
        this.r = this.clamp(q);
        this.g = this.clamp(p);
        this.b = this.clamp(o);
      }
    },
    {
      key: "hueRotate",
      value: function i() {
        var q =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
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
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
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
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
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
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
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
        var q = this.clamp(this.r * o[0] + this.g * o[1] + this.b * o[2]);
        var p = this.clamp(this.r * o[3] + this.g * o[4] + this.b * o[5]);
        var r = this.clamp(this.r * o[6] + this.g * o[7] + this.b * o[8]);
        this.r = q;
        this.g = p;
        this.b = r;
      }
    },
    {
      key: "brightness",
      value: function l() {
        var o =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.linear(o);
      }
    },
    {
      key: "contrast",
      value: function h() {
        var o =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.linear(o, -(0.5 * o) + 0.5);
      }
    },
    {
      key: "linear",
      value: function k() {
        var o =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var p =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.r = this.clamp(this.r * o + p * 255);
        this.g = this.clamp(this.g * o + p * 255);
        this.b = this.clamp(this.b * o + p * 255);
      }
    },
    {
      key: "invert",
      value: function a() {
        var o =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.r = this.clamp((o + (this.r / 255) * (1 - 2 * o)) * 255);
        this.g = this.clamp((o + (this.g / 255) * (1 - 2 * o)) * 255);
        this.b = this.clamp((o + (this.b / 255) * (1 - 2 * o)) * 255);
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
    },
    {
      key: "clamp",
      value: function j(o) {
        if (o > 255) {
          o = 255;
        } else {
          if (o < 0) {
            o = 0;
          }
        }
        return o;
      }
    }
  ]);
  return b;
})();
var Solver = (function() {
  function e(h, i) {
    _classCallCheck(this, e);
    this.target = h;
    this.targetHSL = h.hsl();
    this.reusedColor = new Color(0, 0, 0);
  }
  _createClass(e, [
    {
      key: "solve",
      value: function c() {
        var h = this.solveNarrow(this.solveWide());
        return { values: h.values, loss: h.loss, filter: this.css(h.values) };
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
function hexToRgb(c) {
  var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  c = c.replace(b, function(e, h, f, d) {
    return h + h + f + f + d + d;
  });
  var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return a
    ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
    : null;
}
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 10;
canvas.height = 10;
form.addEventListener("submit", function(o) {
  o.preventDefault();
  var l = start.value.trim();
  var i = end.value.trim();
  start.style.color = l;
  end.style.color = i;
  var a = window.getComputedStyle(start).color;
  var k = window.getComputedStyle(end).color;
  var u = a
    .replace(/\s/g, "")
    .replace(/^rgba?\((\d+\,\d+\,\d+)(?:\,?\d+)?\)$/i, function(h, b) {
      return b;
    })
    .split(",");
  var c = k
    .replace(/\s/g, "")
    .split(")")[0]
    .split("(")[1]
    .split(",")
    .slice(0, 3);
  var n = new Color(c[0], c[1], c[2]);
  var t = new Solver(n);
  t.reusedColor = new Color(u[0], u[1], u[2]);
  var f = t.solve();
  colorReal.style.backgroundColor = i;
  colorFilter.setAttribute("style", f.filter);
  colorFilter.style.backgroundColor = l;
  show.innerHTML = f.filter;
  var j = new Image();
  j.onload = function() {
    context.drawImage(this, 0, 0);
    var z = context.getImageData(5, 5, 1, 1);
    var w = z.data[0];
    var s = z.data[1];
    var h = z.data[2];
    var y = Math.sqrt(
      (c[0] - w) * (c[0] - w) +
        (c[1] - s) * (c[1] - s) +
        (c[2] - h) * (c[2] - h)
    );
    var x = 0;
    if (y == 0) {
      x = "完美！";
    } else {
      if (y < 2) {
        x = "几乎完美！";
      } else {
        if (y < 5) {
          x = "颜色很接近了。";
        } else {
          if (y < 15) {
            x = "颜色有些许出入，试试重新转换下。";
          } else {
            x = "颜色出入较大，请重新再转一遍。";
          }
        }
      }
    }
    lossDetail.innerHTML =
      "滤镜色值：" +
      ("rgb(" + [w, s, h].join() + ")").colorHex() +
      "，误差：" +
      y.toFixed(1) +
      "。<span>" +
      x +
      "</span>";
  };
  j.src =
    'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><foreignObject width="10" height="10"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;width:10px;height:10px;background-color:' +
    l.replace("#", "%23") +
    ";" +
    f.filter +
    '"></body></foreignObject></svg>';
  return;
});
