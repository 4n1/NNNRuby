$(function () {
    if (document.getElementById("bcpath") && location.host.match("nhk.or.jp") && !location.host.match("www-stg")) {
        var bpathdiv = document.getElementById("bcpath");
        var bpath = bpathdiv.innerHTML + "";
        bpathdiv.innerHTML = "";
        var timg = document.createElement("img");
        bpathdiv.appendChild(timg);
        timg.src = "//bc.nhk.jp/news/html/" + bpath + "/bc.gif";
        timg.style.height = "0";
        timg.style.width = "0";
        bpathdiv.style.display = ""
    }
});
