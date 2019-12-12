// 获取两个日期之间所有日期
const dayDistance = 24 * 60 * 60 * 1000;
function getAll(begin, end) {
  let ab = begin.split("-");
  let ae = end.split("-");
  let db = new Date();
  db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
  let de = new Date();
  de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
  let unixDb = db.getTime();
  let unixDe = de.getTime();
  for (var k = unixDb; k <= unixDe; ) {
    let date = new Date(parseInt(k));
    console.log(date);
    k = k + dayDistance;
  }
}

getAll("2017-02-27", "2017-03-02");

// 时间戳转换为时间
function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {
  const date = new Date(timestamp * (isMs ? 1 : 1000));
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
