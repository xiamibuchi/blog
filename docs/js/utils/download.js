function image2base64(img) {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const mime = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  const dataUrl = canvas.toDataURL("image/" + mime);
  return dataUrl;
}

function downloadByAnchor(url, name) {
  let anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  return anchor;
}

function download(value, name, type) {
  let image = new Image();
  let objectURL = null;
  switch (type) {
    case "img":
      image.setAttribute("crossOrigin", "Anonymous");
      image.src = value + "?" + new Date().getTime();
      image.onload = function() {
        const imageDataUrl = image2base64(image);
        downloadByAnchor(imageDataUrl, name);
      };
      break;
    case "binary":
      if (!("download" in document.createElement("a"))) {
        // IE10+下载
        return navigator.msSaveBlob(value, name);
      }
      objectURL = window.URL.createObjectURL(new Blob([value]));
      downloadByAnchor(objectURL, name);
      URL.revokeObjectURL(objectURL);
      break;
    case "file":
      downloadByAnchor(value, name);
      break;
    default:
      window.open(value);
  }
}

// 下载csv
function handleDownload() {
  let values = [
    {
      a: "数据1",
      b: "数据2"
    },
    {
      a: "数据3",
      b: "数据4"
    }
  ];
  // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
  let str = `1,2`;
  // 一个回车（'\n'）表示一行数据
  str += "\n";
  let valuesStr = values.reduce((result, ele) => {
    result += Object.values(ele).join(",\t") + "\n";
    return result;
  }, "");
  str += valuesStr;
  // 解决中文乱码
  let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  let link = document.createElement("a");
  link.href = uri;
  link.download = "aaa.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
