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
export function hslToRgb(h, s, l) {
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
export function rgbToHsl(r, g, b) {
  console.log(r, g, b);
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

export function rgbToHsv(arr) {
  var h = 0,
    s = 0,
    v = 0;
  var r = arr[0],
    g = arr[1],
    b = arr[2];
  arr.sort(function(a, b) {
    return a - b;
  });
  var max = arr[2];
  var min = arr[0];
  v = max / 255;
  if (max === 0) {
    s = 0;
  } else {
    s = 1 - min / max;
  }
  if (max === min) {
    h = 0; //事实上，max===min的时候，h无论为多少都无所谓
  } else if (max === r && g >= b) {
    h = 60 * ((g - b) / (max - min)) + 0;
  } else if (max === r && g < b) {
    h = 60 * ((g - b) / (max - min)) + 360;
  } else if (max === g) {
    h = 60 * ((b - r) / (max - min)) + 120;
  } else if (max === b) {
    h = 60 * ((r - g) / (max - min)) + 240;
  }
  h = parseInt(h);
  s = parseInt(s * 100);
  v = parseInt(v * 100);
  return [h, s, v];
}

export function hexToRgb(c) {
  var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  c = c.replace(b, function(e, h, f, d) {
    return h + h + f + f + d + d;
  });
  var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return a
    ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
    : null;
}
