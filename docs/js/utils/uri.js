// 获取url中的参数
function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r !== null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

// 获取url中的参数
function getQueryString(name) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] === name) {
      return pair[1];
    }
  }
  return false;
}

// 获取url中的参数
function getQueryString(name) {
  const parsedUrl = new URL(window.location.href);
  return parsedUrl.searchParams.get(name);
}
