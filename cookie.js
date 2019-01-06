const cookie = {}
cookie.getItem = e
function e(i){
  let n = i + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(n) == 0) {
      return c.substring(n.length, c.length);
    }
  }
  return "";
}
cookie.setItem = t
function t(n, i, r){
  let d = new Date();
  if(r){
    d.setTime(d.getTime() + r);
  }else{
    d.setTime(d.getTime() + (24*60*60*1000))
  }
  var e = "expires=" + d.toGMTString();
  document.cookie = n + "=" + i + ";" + e + ";path=/";

}
