var NHKSNS=function () {
  "use strict";
  function e(e) {
    e=e || {}
    ;
    var i,
    r,
    l,
    c,
    p,
    u,
    d= {}
    ,
    g=!1;
    i=t(),
    r="",
    b.SNS.resources.facebook.redirects=e["facebook-redirects"] || b.SNS.resources.facebook.redirects;
    var m=document.createElement("style");
    try {
      m.innerHTML=f
    }
    catch (e) {
      m.setAttribute("type", "text/css"),
      m.styleSheet.cssText=f
    }
    for (document.getElementsByTagName("head")[0].appendChild(m), document.documentMode && document.documentMode <=10 && (!window.external || "undefined"==typeof window.external.msActiveXFilteringEnabled && "unknown" !=typeof window.external.msActiveXFilteringEnabled || window.external.msActiveXFilteringEnabled()===!1 && (g=!0)), l=0;
    l < i.length;
    l++)if (!g) {
      for (var h in b.separatableOptions) {
        var k=i[l].getAttribute("data-nhksns-" + h);
        switch (h) {
          case "url": k=k || e.url || s("og:url") || s("shorturl") || a();
          break;
          case "title": k=k || e.title || s("og:title") || s("title") || document.title || "";
          break;
          case "description": k=k || e.description || s("og:description") || s("description") || "";
          break;
          case "image": k=k || e.image || s("og:image") || "";
          break;
          default: k=k || e[h]
        }
        k && o(h, k) ? d[h]=k: d[h]=b.defaultOptions[h] || ""
      }
      if (g) return;
      c=new RegExp(/^(https?:)?\/\/([^\/.]+\.)*nhk1s\.jp\/.*/),
      p=new RegExp(/^(https?:)?\/\/([^\/.]+\.)*nhk-ondemand\.jp\/.*/),
      u=new RegExp(/^(https?:)?\/\/([^\/.]+\.)*nhk(\.or)?\.jp\/.*/),
      d.url.match(c) || d.url.match(p) || d.url.match(u) || (d.url=b.defaultUrl, d.title=b.defaultTitle, d.description=b.defaultDesciption),
      d.title=encodeURIComponent(d.title),
      d.description=encodeURIComponent(d.description),
      i[l].innerHTML=n(i[l], d)
    }
  }
  function t() {
    var e,
    t,
    n;
    if (document.getElementsByClassName) return document.getElementsByClassName(b.needleClassName);
    for (e=document.getElementsByTagName("div"), t=[], n=0;
    n < e.length;
    n++)e[n].hasAttribute(b.needleClassName) && t.push(e[n]);
    return t
  }
  function n(e, t) {
    var n,
    l,
    s,
    a="";
    for (n=t.lang, c(t) && (a +='<p class="nhksns-guide" style="display: block;">' + b.guides[n] + i("help", t) + "</p>"), p(t) && (a +='<p class="nhksns-guide" style="display: inline-block; margin-right: 12px;">' + b.guides[n] + i("help", t) + "</p>"), e.attributes.class.value +=" nhksns-icon-" + t.iconsize, a +='<ul class="nhksns">', l=0;
    l < b.SNS.defaults.length;
    l++)s=b.SNS.defaults[l],
    "line"==s && r() || t.disable.match(new RegExp(s)) && o("disable", s) || (a +=i(s, t));
    return a+="</ul>",
    u(t) && (a +='<p class="nhksns-guide">' + b.guides[n] + i("help", t) + "</p>"),
    d(t) && (a +='<p class="nhksns-guide" style="display:inline-block; margin-left: 12px;">' + b.guides[n] + i("help", t) + "</p>"),
    a
  }
  function i(e, t) {
    var n="",
    i='<li class="nhksns-{name}"><a href="{href}" {sendMetrics} target="_blank"><img  src="{img}" alt="{name}"></img></a>',
    r=b.SNS.resources[e];
    switch (e) {
      case "twitter": return g(i, {
        href: g(r.link, {
          url: t.url, text: t.title, description: t.description
        }
        ), name: e, img: r.image, sendMetrics: l(e)
      }
      );
      case "facebook": return g(i, {
        href: g(r.link, {
          app_id: r.appId, url: t.url, description: t.description, text: t.title, image: t.image, redirects: r.redirects
        }
        ), name: e, img: r.image, sendMetrics: l(e)
      }
      );
      case "google": return g(i, {
        href: g(r.link, {
          url: t.url
        }
        ), name: e, img: r.image, sendMetrics: l(e)
      }
      );
      case "line": return g(i, {
        href: g(r.link, {
          url: t.url, text: t.title
        }
        ), name: e, img: r.image, sendMetrics: l(e)
      }
      );
      case "help": var o='<a class="nhksns-help" href="{href}" target="_blank"><img src="{img}" alt="help"></img></a>';
      return g(o, {
        href: r.link[t.lang], img: r.image
      }
      )
    }
    return n
  }
  function r() {
    return "function" !=typeof h || "iphone" !==h()[1] && "androidmobile" !==h()[1]
  }
  function o(e, t) {
    var n,
    i=b.separatableOptions[e];
    if (void 0===i) return !1;
    if (null===i) return !0;
    if ("function"==typeof Array.prototype.indexOf) return i.indexOf(t) !=-1;
    for (n=0;
    n < i.length;
    n++)if (i[n]===t) return !0;
    return !1
  }
  function l(e) {
    return "function"==typeof _tc_onClick ? g("onClick=\"_tc_onClick(s_omni,{},'SNS_Button_{service}')\"", {
      service: e
    }
    ): ""
  }
  function s(e) {
    for (var t=document.getElementsByTagName("meta"), n=0;
    n < t.length;
    n++) {
      if (t[n].hasAttribute("property") && t[n].attributes.property.value==e) return t[n].content;
      if (t[n].hasAttribute("name") && t[n].attributes.name.value==e) return t[n].content
    }
  }
  function a() {
    var e=new RegExp("[\\\\|\"|'|>|<]", "g"),
    t=[],
    n=[],
    i="",
    r=[],
    o=[],
    l=location.protocol,
    s=location.host.replace(e, ""),
    a=location.pathname.replace(e, ""),
    c=decodeURIComponent(location.search),
    p=decodeURIComponent(location.hash),
    u=l+"//"+s+a;
    if (!(l && s && a)) return b.defaultUrl;
    if (u && u.length > 255 || c && c.length > 255 || p && p.length > 255) return b.defaultUrl;
    if (c) {
      c=c.replace(/^\?/, ""),
      t=c.split("&");
      for (var d=0;
      d < t.length;
      d++)if (r=t[d].split("="), o=[], r.length > 0) {
        i=r[0].replace(e, "")+"=";
        for (var g=1;
        g < r.length;
        g++)r[g] && o.push(encodeURIComponent(r[g]));
        n.push(i + o.join("="))
      }
      c="?"+n.join("&")
    }
    else c="";
    return p=p ? "#"+encodeURIComponent(p.replace(/^#/, "")): "",
    u+c+p
  }
  function c(e) {
    return "nothing" !==e.guidepos && !(!e.guidepos || "top" !=e.guidepos)
  }
  function p(e) {
    return "nothing" !==e.guidepos && !((!e.guidepos || "left" !=e.guidepos) && o("guidepos", e.guidepos))
  }
  function u(e) {
    return "nothing" !==e.guidepos && !(!e.guidepos || "bottom" !=e.guidepos)
  }
  function d(e) {
    return "nothing" !==e.guidepos && !(!e.guidepos || "right" !=e.guidepos)
  }
  function g(e, t) {
    for (var n in t) {
      if ("object"==typeof t[n]) throw new TypeError("param is not to be Object");
      var i=new RegExp("{" + n + "}", "g");
      e=e.replace(i, t[n])
    }
    return e
  }
  function m(t) {
    window.addEventListener("DOMContentLoaded", function () {
      e(t)
    }
    )
  }
  var h,
  f=".nhk-snsbtn { margin-bottom: 15px; } ul.nhksns { list-style:none; display: inline; padding-left: 0; } ul.nhksns > li { display: inline-block; vertical-align: middle; margin: 0.2em; } .nhksns-icon-s img { width:24px; } .nhksns-icon-m img { width: 32px; } .nhksns-icon-l img { width:40px; } .nhksns-help img { margin-left:6px; width: 18px; border: 1px solid #999; vertical-align: middle; }  img { border: none; } .nhksns-guide { vertical-align:middle; margin: 0 0 6px 0; font-weight: bold; } .nhksns img { border: none; }",
  b= {}
  ;
  return window.addEventListener("DOMContentLoaded", function () {
    h=window.nol_getDeviceType || null
  }
  , !0),
  b.baseDir=g("{protocol}//www.nhk.or.jp/common/sns/", {
    protocol: location.protocol
  }
  ),
  b.needleClassName="nhk-snsbtn",
  b.baseClaasName="nhk-snsbtn",
  b.SNS= {}
  ,
  b.SNS.resources= {
    twitter: {
      link: "https://twitter.com/intent/tweet?text={text}%20{description}&url={url}",
      image: b.baseDir + "img/twitter.png"
    }
    ,
    facebook: {
      link: "https://www.facebook.com/dialog/share?app_id={app_id}&display=popup&href={url}&redirect_uri={redirects}",
      image: b.baseDir + "img/facebook.png", appId: "1491428781178288", redirects: "https://www.facebook.com"
    }
    ,
    line: {
      link: "line://msg/text/{text}%20{url}",
      image: b.baseDir + "img/line.png"
    }
    ,
    google: {
      link: "https://plus.google.com/share?url={url}",
      image: b.baseDir + "img/google.png"
    }
    ,
    help: {
      link: {
        ja: b.baseDir + "help.html", en: b.baseDir + "help_en.html"
      }
      ,
      image: b.baseDir+"img/help.png"
    }
  }
  ,
  b.SNS.defaults=["twitter",
  "facebook",
  "google",
  "line"],
  b.guides= {
    ja: "シェアする", en: "Share"
  }
  ,
  b.separatableOptions= {
    disable: ["google", "line", "google line"], lang: ["ja", "en"], guidepos: ["left", "bottom", "right", "top", "nothing"], iconsize: ["s", "m", "l"], description: null, title: null, url: null
  }
  ,
  b.defaultOptions= {
    lang: "ja", iconsize: "m"
  }
  ,
  b.satisfiedOptions= {}
  ,
  b.defaultUrl="http://www.nhk.or.jp/",
  b.defaultTitle="NHKオンライン",
  b.defaultDesciption="",
  {
    initSNSOnLoad: m, initSNS: e
  }
}

();