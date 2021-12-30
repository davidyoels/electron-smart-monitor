function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  var s = x.getSeconds();
  var m = x.getMinutes();
  var h = x.getHours();
  var textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
  // document.getElementById("time").innerHTML = textContent;
  // display_c();
}

function initialPageSetup() {
  display_ct();
}
