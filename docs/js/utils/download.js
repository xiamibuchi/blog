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
