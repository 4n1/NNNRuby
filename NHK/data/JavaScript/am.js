/**
 * VisitorAPI.js
 */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.8.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(q, v) {
    if (!q) throw "Visitor requires Adobe Marketing Cloud Org ID";
    var a = this;
    a.version = "1.8.0";
    var m = window,
        l = m.Visitor;
    l.version = a.version;
    m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
    a._c = "Visitor";
    a._il = m.s_c_il;
    a._in = m.s_c_in;
    a._il[a._in] = a;
    m.s_c_in++;
    a.la = {
        Ha: []
    };
    var s = m.document,
        i = l.Db;
    i || (i = null);
    var D = l.Eb;
    D || (D = void 0);
    var k = l.Pa;
    k || (k = !0);
    var j = l.Na;
    j || (j = !1);
    a.ha = function (a) {
        var c = 0,
            b, e;
        if (a)
            for (b = 0; b < a.length; b++) e = a.charCodeAt(b), c = (c << 5) - c + e, c &=
                c;
        return c
    };
    a.r = function (a, c) {
        var b = "0123456789",
            e = "",
            f = "",
            g, h, i = 8,
            j = 10,
            l = 10;
        c === n && (w.isClientSideMarketingCloudVisitorID = k);
        if (1 == a) {
            b += "ABCDEF";
            for (g = 0; 16 > g; g++) h = Math.floor(Math.random() * i), e += b.substring(
                h, h + 1), h = Math.floor(Math.random() * i), f += b.substring(h, h + 1),
                i = 16;
            return e + "-" + f
        }
        for (g = 0; 19 > g; g++) h = Math.floor(Math.random() * j), e += b.substring(
            h, h + 1), 0 == g && 9 == h ? j = 3 : (1 == g || 2 == g) && 10 != j && 2 >
                h ? j = 10 : 2 < g && (j = 10), h = Math.floor(Math.random() * l), f += b.substring(
                    h, h + 1), 0 == g && 9 == h ? l = 3 : (1 == g || 2 == g) && 10 != l && 2 >
                        h ? l = 10 : 2 < g && (l = 10);
        return e + f
    };
    a.Ta = function () {
        var a;
        !a && m.location && (a = m.location.hostname);
        if (a)
            if (/^[0-9.]+$/.test(a)) a = "";
            else {
                var c = a.split("."),
                    b = c.length - 1,
                    e = b - 1;
                1 < b && 2 >= c[b].length && (2 == c[b - 1].length || 0 >
                    ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,"
                        .indexOf("," + c[b] + ",")) && e--;
                if (0 < e)
                    for (a = ""; b >= e;) a = c[b] + (a ? "." : "") + a, b--
            }
        return a
    };
    a.cookieRead = function (a) {
        var a = encodeURIComponent(a),
            c = (";" + s.cookie).split(" ").join(";"),
            b = c.indexOf(";" + a + "="),
            e = 0 > b ? b : c.indexOf(";", b + 1);
        return 0 > b ? "" : decodeURIComponent(c.substring(b + 2 + a.length, 0 > e ?
            c.length : e))
    };
    a.cookieWrite = function (d, c, b) {
        var e = a.cookieLifetime,
            f, c = "" + c,
            e = e ? ("" + e).toUpperCase() : "";
        b && "SESSION" != e && "NONE" != e ? (f = "" != c ? parseInt(e ? e : 0, 10) :
            -60) ? (b = new Date, b.setTime(b.getTime() + 1E3 * f)) : 1 == b && (b =
                new Date, f = b.getYear(), b.setYear(f + 2 + (1900 > f ? 1900 : 0))) : b =
            0;
        return d && "NONE" != e ? (s.cookie = encodeURIComponent(d) + "=" +
            encodeURIComponent(c) + "; path=/;" + (b ? " expires=" + b.toGMTString() +
                ";" : "") + (a.cookieDomain ? " domain=" + a.cookieDomain + ";" : ""), a.cookieRead(
                    d) == c) : 0
    };
    a.h = i;
    a.L = function (a, c) {
        try {
            "function" == typeof a ? a.apply(m, c) : a[1].apply(a[0], c)
        } catch (b) { }
    };
    a.Ya = function (d, c) {
        c && (a.h == i && (a.h = {}), a.h[d] == D && (a.h[d] = []), a.h[d].push(c))
    };
    a.q = function (d, c) {
        if (a.h != i) {
            var b = a.h[d];
            if (b)
                for (; 0 < b.length;) a.L(b.shift(), c)
        }
    };
    a.w = function (a, c, b, e) {
        b = encodeURIComponent(c) + "=" + encodeURIComponent(b);
        c = x.wb(a);
        a = x.ob(a);
        if (-1 === a.indexOf("?")) return a + "?" + b + c;
        var f = a.split("?"),
            a = f[0] + "?",
            e = x.ab(f[1], b, e);
        return a + e + c
    };
    a.Sa = function (a, c) {
        var b = RegExp("[\\?&#]" + c + "=([^&#]*)").exec(a);
        if (b && b.length) return decodeURIComponent(b[1])
    };
    a.Xa = function () {
        var d = i,
            c = m.location.href;
        try {
            var b = a.Sa(c, r.ba);
            if (b)
                for (var d = {}, e = b.split("|"), c = 0, f = e.length; c < f; c++) {
                    var g = e[c].split("=");
                    d[g[0]] = decodeURIComponent(g[1])
                }
            return d
        } catch (h) { }
    };
    a.Qa = function () {
        var d = a.Xa();
        if (d) {
            var c = d[n],
                b = a.setMarketingCloudVisitorID;
            c && c.match(r.v) && b(c);
            a.j(t, -1);
            d = d[p];
            c = a.setAnalyticsVisitorID;
            d && d.match(r.v) && c(d)
        }
    };
    a.l = i;
    a.Va = function (d, c, b, e) {
        c = a.w(c, "d_fieldgroup", d, 1);
        e.url = a.w(e.url, "d_fieldgroup", d, 1);
        e.m = a.w(e.m, "d_fieldgroup", d, 1);
        w.c[d] = k;
        e === Object(e) && e.m && "XMLHttpRequest" === a.na.F.G ? a.na.kb(e, b, d) :
            a.useCORSOnly || a.ka(d, c, b)
    };
    a.ka = function (d, c, b) {
        var e = 0,
            f = 0,
            g;
        if (c && s) {
            for (g = 0; !e && 2 > g;) {
                try {
                    e = (e = s.getElementsByTagName(0 < g ? "HEAD" : "head")) && 0 < e.length ?
                        e[0] : 0
                } catch (h) {
                    e = 0
                }
                g++
            }
            if (!e) try {
                s.body && (e = s.body)
            } catch (j) {
                e = 0
            }
            if (e)
                for (g = 0; !f && 2 > g;) {
                    try {
                        f = s.createElement(0 < g ? "SCRIPT" : "script")
                    } catch (l) {
                        f = 0
                    }
                    g++
                }
        } !c || !e || !f ? b && b() : (f.type = "text/javascript", f.src = c, e.firstChild ?
            e.insertBefore(f, e.firstChild) : e.appendChild(f), e = a.loadTimeout, o.c[
            d] = {
                requestStart: o.o(),
                url: c,
                wa: e,
                ua: o.Aa(),
                va: 0
            }, b && (a.l == i && (a.l = {}), a.l[d] = setTimeout(function () {
                b(k)
            }, e)), a.la.Ha.push(c))
    };
    a.Ra = function (d) {
        a.l != i && a.l[d] && (clearTimeout(a.l[d]), a.l[d] = 0)
    };
    a.ia = j;
    a.ja = j;
    a.isAllowed = function () {
        if (!a.ia && (a.ia = k, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName,
            "T", 1))) a.ja = k;
        return a.ja
    };
    a.b = i;
    a.e = i;
    var E = l.Vb;
    E || (E = "MC");
    var n = l.ac;
    n || (n = "MCMID");
    var G = l.Wb;
    G || (G = "MCCIDH");
    var J = l.Zb;
    J || (J = "MCSYNCS");
    var H = l.$b;
    H || (H = "MCSYNCSOP");
    var I = l.Xb;
    I || (I = "MCIDTS");
    var z = l.Yb;
    z || (z = "MCOPTOUT");
    var C = l.Tb;
    C || (C = "A");
    var p = l.Qb;
    p || (p = "MCAID");
    var A = l.Ub;
    A || (A = "AAM");
    var B = l.Sb;
    B || (B = "MCAAMLH");
    var t = l.Rb;
    t || (t = "MCAAMB");
    var u = l.bc;
    u || (u = "NONE");
    a.N = 0;
    a.ga = function () {
        if (!a.N) {
            var d = a.version;
            a.audienceManagerServer && (d += "|" + a.audienceManagerServer);
            a.audienceManagerServerSecure && (d += "|" + a.audienceManagerServerSecure);
            a.N = a.ha(d)
        }
        return a.N
    };
    a.ma = j;
    a.f = function () {
        if (!a.ma) {
            a.ma = k;
            var d = a.ga(),
                c = j,
                b = a.cookieRead(a.cookieName),
                e, f, g, h, l = new Date;
            a.b == i && (a.b = {});
            if (b && "T" != b) {
                b = b.split("|");
                b[0].match(/^[\-0-9]+$/) && (parseInt(b[0], 10) != d && (c = k), b.shift());
                1 == b.length % 2 && b.pop();
                for (d = 0; d < b.length; d += 2)
                    if (e = b[d].split("-"), f = e[0], g = b[d + 1], 1 < e.length ? (h =
                        parseInt(e[1], 10), e = 0 < e[1].indexOf("s")) : (h = 0, e = j), c && (
                            f == G && (g = ""), 0 < h && (h = l.getTime() / 1E3 - 60)), f && g && (
                                a.d(f, g, 1), 0 < h && (a.b["expire" + f] = h + (e ? "s" : ""), l.getTime() >=
                                    1E3 * h || e && !a.cookieRead(a.sessionCookieName)))) a.e || (a.e = {}),
                                        a.e[f] = k
            }
            if (!a.a(p) && (b = a.cookieRead("s_vi"))) b = b.split("|"), 1 < b.length &&
                0 <= b[0].indexOf("v1") && (g = b[1], d = g.indexOf("["), 0 <= d && (g = g
                    .substring(0, d)), g && g.match(r.v) && a.d(p, g))
        }
    };
    a.$a = function () {
        var d = a.ga(),
            c, b;
        for (c in a.b) !Object.prototype[c] && a.b[c] && "expire" != c.substring(0,
            6) && (b = a.b[c], d += (d ? "|" : "") + c + (a.b["expire" + c] ? "-" + a.b[
                "expire" + c] : "") + "|" + b);
        a.cookieWrite(a.cookieName, d, 1)
    };
    a.a = function (d, c) {
        return a.b != i && (c || !a.e || !a.e[d]) ? a.b[d] : i
    };
    a.d = function (d, c, b) {
        a.b == i && (a.b = {});
        a.b[d] = c;
        b || a.$a()
    };
    a.Ua = function (d, c) {
        var b = a.a(d, c);
        return b ? b.split("*") : i
    };
    a.Za = function (d, c, b) {
        a.d(d, c ? c.join("*") : "", b)
    };
    a.Kb = function (d, c) {
        var b = a.Ua(d, c);
        if (b) {
            var e = {},
                f;
            for (f = 0; f < b.length; f += 2) e[b[f]] = b[f + 1];
            return e
        }
        return i
    };
    a.Mb = function (d, c, b) {
        var e = i,
            f;
        if (c)
            for (f in e = [], c) Object.prototype[f] || (e.push(f), e.push(c[f]));
        a.Za(d, e, b)
    };
    a.j = function (d, c, b) {
        var e = new Date;
        e.setTime(e.getTime() + 1E3 * c);
        a.b == i && (a.b = {});
        a.b["expire" + d] = Math.floor(e.getTime() / 1E3) + (b ? "s" : "");
        0 > c ? (a.e || (a.e = {}), a.e[d] = k) : a.e && (a.e[d] = j);
        b && (a.cookieRead(a.sessionCookieName) || a.cookieWrite(a.sessionCookieName,
            "1"))
    };
    a.fa = function (a) {
        if (a && ("object" == typeof a && (a = a.d_mid ? a.d_mid : a.visitorID ? a.visitorID :
            a.id ? a.id : a.uuid ? a.uuid : "" + a), a && (a = a.toUpperCase(),
                "NOTARGET" == a && (a = u)), !a || a != u && !a.match(r.v))) a = "";
        return a
    };
    a.k = function (d, c) {
        a.Ra(d);
        a.i != i && (a.i[d] = j);
        o.c[d] && (o.c[d].Bb = o.o(), o.K(d));
        w.c[d] && w.Ja(d, j);
        if (d == E) {
            w.isClientSideMarketingCloudVisitorID !== k && (w.isClientSideMarketingCloudVisitorID =
                j);
            var b = a.a(n);
            if (!b) {
                b = "object" == typeof c && c.mid ? c.mid : a.fa(c);
                if (!b) {
                    if (a.D) {
                        a.getAnalyticsVisitorID(i, j, k);
                        return
                    }
                    b = a.r(0, n)
                }
                a.d(n, b)
            }
            if (!b || b == u) b = "";
            "object" == typeof c && ((c.d_region || c.dcs_region || c.d_blob || c.blob) &&
                a.k(A, c), a.D && c.mid && a.k(C, {
                    id: c.id
                }));
            a.q(n, [b])
        }
        if (d == A && "object" == typeof c) {
            b = 604800;
            c.id_sync_ttl != D && c.id_sync_ttl && (b = parseInt(c.id_sync_ttl, 10));
            var e = a.a(B);
            e || ((e = c.d_region) || (e = c.dcs_region), e && (a.j(B, b), a.d(B, e)));
            e || (e = "");
            a.q(B, [e]);
            e = a.a(t);
            if (c.d_blob || c.blob) (e = c.d_blob) || (e = c.blob), a.j(t, b), a.d(t, e);
            e || (e = "");
            a.q(t, [e]);
            !c.error_msg && a.B && a.d(G, a.B)
        }
        if (d == C) {
            b = a.a(p);
            b || ((b = a.fa(c)) ? b !== u && a.j(t, -1) : b = u, a.d(p, b));
            if (!b || b == u) b = "";
            a.q(p, [b])
        }
        a.idSyncDisableSyncs ? y.Ba = k : (y.Ba = j, b = {}, b.ibs = c.ibs, b.subdomain =
            c.subdomain, y.xb(b));
        if (c === Object(c)) {
            var f;
            a.isAllowed() && (f = a.a(z));
            f || (f = u, c.d_optout && c.d_optout instanceof Array && (f = c.d_optout.join(
                ",")), b = parseInt(c.d_ottl, 10), isNaN(b) && (b = 7200), a.j(z, b, k),
                a.d(z, f));
            a.q(z, [f])
        }
    };
    a.i = i;
    a.s = function (d, c, b, e, f) {
        var g = "",
            h, j = x.qb(d);
        if (a.isAllowed() && (a.f(), g = a.a(d), a.disableThirdPartyCalls && !g && (
            d === n ? (g = a.r(0, n), a.setMarketingCloudVisitorID(g)) : d === p && !
                j && (g = "", a.setAnalyticsVisitorID(g))), !g && (!a.disableThirdPartyCalls ||
                    j)))
            if (d == n || d == z ? h = E : d == B || d == t ? h = A : d == p && (h = C),
                h) {
                if (c && (a.i == i || !a.i[h])) a.i == i && (a.i = {}), a.i[h] = k, a.Va(h,
                    c,
                    function (b, c) {
                        if (!a.a(d))
                            if (o.c[h] && (o.c[h].timeout = o.o(), o.c[h].pb = !!b, o.K(h)), c ===
                                Object(c) && !a.useCORSOnly) a.ka(h, c.url, c.I);
                            else {
                                b && w.Ja(h, k);
                                var e = "";
                                d == n ? e = a.r(0, n) : h == A && (e = {
                                    error_msg: "timeout"
                                });
                                a.k(h, e)
                            }
                    }, f);
                a.Ya(d, b);
                c || a.k(h, {
                    id: u
                });
                return ""
            }
        if ((d == n || d == p) && g == u) g = "", e = k;
        b && e && a.L(b, [g]);
        return g
    };
    a._setMarketingCloudFields = function (d) {
        a.f();
        a.k(E, d)
    };
    a.setMarketingCloudVisitorID = function (d) {
        a._setMarketingCloudFields(d)
    };
    a.D = j;
    a.getMarketingCloudVisitorID = function (d, c) {
        if (a.isAllowed()) {
            a.marketingCloudServer && 0 > a.marketingCloudServer.indexOf(".demdex.net") &&
                (a.D = k);
            var b = a.A("_setMarketingCloudFields");
            return a.s(n, b.url, d, c, b)
        }
        return ""
    };
    a.Wa = function () {
        a.getAudienceManagerBlob()
    };
    l.AuthState = {
        UNKNOWN: 0,
        AUTHENTICATED: 1,
        LOGGED_OUT: 2
    };
    a.z = {};
    a.ea = j;
    a.B = "";
    a.setCustomerIDs = function (d) {
        if (a.isAllowed() && d) {
            a.f();
            var c, b;
            for (c in d)
                if (!Object.prototype[c] && (b = d[c]))
                    if ("object" == typeof b) {
                        var e = {};
                        b.id && (e.id = b.id);
                        b.authState != D && (e.authState = b.authState);
                        a.z[c] = e
                    } else a.z[c] = {
                        id: b
                    };
            var d = a.getCustomerIDs(),
                e = a.a(G),
                f = "";
            e || (e = 0);
            for (c in d) Object.prototype[c] || (b = d[c], f += (f ? "|" : "") + c +
                "|" + (b.id ? b.id : "") + (b.authState ? b.authState : ""));
            a.B = a.ha(f);
            a.B != e && (a.ea = k, a.Wa())
        }
    };
    a.getCustomerIDs = function () {
        a.f();
        var d = {},
            c, b;
        for (c in a.z) Object.prototype[c] || (b = a.z[c], d[c] || (d[c] = {}), b.id &&
            (d[c].id = b.id), d[c].authState = b.authState != D ? b.authState : l.AuthState
                .UNKNOWN);
        return d
    };
    a._setAnalyticsFields = function (d) {
        a.f();
        a.k(C, d)
    };
    a.setAnalyticsVisitorID = function (d) {
        a._setAnalyticsFields(d)
    };
    a.getAnalyticsVisitorID = function (d, c, b) {
        if (a.isAllowed()) {
            var e = "";
            b || (e = a.getMarketingCloudVisitorID(function () {
                a.getAnalyticsVisitorID(d, k)
            }));
            if (e || b) {
                var f = b ? a.marketingCloudServer : a.trackingServer,
                    g = "";
                a.loadSSL && (b ? a.marketingCloudServerSecure && (f = a.marketingCloudServerSecure) :
                    a.trackingServerSecure && (f = a.trackingServerSecure));
                var h = {};
                if (f) {
                    var f = "http" + (a.loadSSL ? "s" : "") + "://" + f + "/id",
                        e = "d_visid_ver=" + a.version + "&mcorgid=" + encodeURIComponent(a.marketingCloudOrgID) +
                            (e ? "&mid=" + encodeURIComponent(e) : "") + (a.idSyncDisable3rdPartySyncing ?
                                "&d_coppa=true" : ""),
                        i = ["s_c_il", a._in, "_set" + (b ? "MarketingCloud" : "Analytics") +
                            "Fields"
                        ],
                        g = f + "?" + e + "&callback=s_c_il%5B" + a._in + "%5D._set" + (b ?
                            "MarketingCloud" : "Analytics") + "Fields";
                    h.m = f + "?" + e;
                    h.ra = i
                }
                h.url = g;
                return a.s(b ? n : p, g, d, c, h)
            }
        }
        return ""
    };
    a._setAudienceManagerFields = function (d) {
        a.f();
        a.k(A, d)
    };
    a.A = function (d) {
        var c = a.audienceManagerServer,
            b = "",
            e = a.a(n),
            f = a.a(t, k),
            g = a.a(p),
            g = g && g != u ? "&d_cid_ic=AVID%01" + encodeURIComponent(g) : "";
        a.loadSSL && a.audienceManagerServerSecure && (c = a.audienceManagerServerSecure);
        if (c) {
            var b = a.getCustomerIDs(),
                h, i;
            if (b)
                for (h in b) Object.prototype[h] || (i = b[h], g += "&d_cid_ic=" +
                    encodeURIComponent(h) + "%01" + encodeURIComponent(i.id ? i.id : "") + (
                        i.authState ? "%01" + i.authState : ""));
            d || (d = "_setAudienceManagerFields");
            c = "http" + (a.loadSSL ? "s" : "") + "://" + c + "/id";
            e = "d_visid_ver=" + a.version + "&d_rtbd=json&d_ver=2" + (!e && a.D ?
                "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(a.marketingCloudOrgID) +
                "&d_nsid=" + (a.idSyncContainerID || 0) + (e ? "&d_mid=" +
                    encodeURIComponent(e) : "") + (a.idSyncDisable3rdPartySyncing ?
                        "&d_coppa=true" : "") + (f ? "&d_blob=" + encodeURIComponent(f) : "") + g;
            f = ["s_c_il", a._in, d];
            b = c + "?" + e + "&d_cb=s_c_il%5B" + a._in + "%5D." + d;
            return {
                url: b,
                m: c + "?" + e,
                ra: f
            }
        }
        return {
            url: b
        }
    };
    a.getAudienceManagerLocationHint = function (d, c) {
        if (a.isAllowed() && a.getMarketingCloudVisitorID(function () {
            a.getAudienceManagerLocationHint(d, k)
        })) {
            var b = a.a(p);
            b || (b = a.getAnalyticsVisitorID(function () {
                a.getAudienceManagerLocationHint(d, k)
            }));
            if (b) return b = a.A(), a.s(B, b.url, d, c, b)
        }
        return ""
    };
    a.getAudienceManagerBlob = function (d, c) {
        if (a.isAllowed() && a.getMarketingCloudVisitorID(function () {
            a.getAudienceManagerBlob(d, k)
        })) {
            var b = a.a(p);
            b || (b = a.getAnalyticsVisitorID(function () {
                a.getAudienceManagerBlob(d, k)
            }));
            if (b) {
                var b = a.A(),
                    e = b.url;
                a.ea && a.j(t, -1);
                return a.s(t, e, d, c, b)
            }
        }
        return ""
    };
    a.t = "";
    a.C = {};
    a.O = "";
    a.P = {};
    a.getSupplementalDataID = function (d, c) {
        !a.t && !c && (a.t = a.r(1));
        var b = a.t;
        a.O && !a.P[d] ? (b = a.O, a.P[d] = k) : b && (a.C[d] && (a.O = a.t, a.P = a
            .C, a.t = b = !c ? a.r(1) : "", a.C = {}), b && (a.C[d] = k));
        return b
    };
    l.OptOut = {
        GLOBAL: "global"
    };
    a.getOptOut = function (d, c) {
        if (a.isAllowed()) {
            var b = a.A("_setMarketingCloudFields");
            return a.s(z, b.url, d, c, b)
        }
        return ""
    };
    a.isOptedOut = function (d, c, b) {
        return a.isAllowed() ? (c || (c = l.OptOut.GLOBAL), (b = a.getOptOut(
            function (b) {
                a.L(d, [b == l.OptOut.GLOBAL || 0 <= b.indexOf(c)])
            }, b)) ? b == l.OptOut.GLOBAL || 0 <= b.indexOf(c) : i) : j
    };
    a.appendVisitorIDsTo = function (d) {
        for (var c = r.ba, b = [
            [n, a.a(n)],
            [p, a.a(p)]
        ], e = "", f = 0, g = b.length; f < g; f++) {
            var h = b[f],
                j = h[0],
                h = h[1];
            h != i && h !== u && (e = e ? e += "|" : e, e += j + "=" +
                encodeURIComponent(h))
        }
        try {
            return a.w(d, c, e)
        } catch (k) {
            return d
        }
    };
    var r = {
        p: !!m.postMessage,
        Ma: 1,
        da: 864E5,
        ba: "adobe_mc",
        v: /^[0-9a-fA-F\-]+$/
    };
    a.Fb = r;
    a.pa = {
        postMessage: function (a, c, b) {
            var e = 1;
            c && (r.p ? b.postMessage(a, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c &&
                (b.location = c.replace(/#.*$/, "") + "#" + +new Date + e++ + "&" + a))
        },
        X: function (a, c) {
            var b;
            try {
                if (r.p)
                    if (a && (b = function (b) {
                        if ("string" === typeof c && b.origin !== c || "[object Function]" ===
                            Object.prototype.toString.call(c) && !1 === c(b.origin)) return !1;
                        a(b)
                    }), window.addEventListener) window[a ? "addEventListener" :
                        "removeEventListener"]("message", b, !1);
                    else window[a ? "attachEvent" : "detachEvent"]("onmessage", b)
            } catch (e) { }
        }
    };
    var x = {
        Q: function () {
            if (s.addEventListener) return function (a, c, b) {
                a.addEventListener(c, function (a) {
                    "function" === typeof b && b(a)
                }, j)
            };
            if (s.attachEvent) return function (a, c, b) {
                a.attachEvent("on" + c, function (a) {
                    "function" === typeof b && b(a)
                })
            }
        }(),
        map: function (a, c) {
            if (Array.prototype.map) return a.map(c);
            if (void 0 === a || a === i) throw new TypeError;
            var b = Object(a),
                e = b.length >>> 0;
            if ("function" !== typeof c) throw new TypeError;
            for (var f = Array(e), g = 0; g < e; g++) g in b && (f[g] = c.call(c, b[g],
                g, b));
            return f
        },
        jb: function (a, c) {
            return this.map(a, function (a) {
                return encodeURIComponent(a)
            }).join(c)
        },
        wb: function (a) {
            var c = a.indexOf("#");
            return 0 < c ? a.substr(c) : ""
        },
        ob: function (a) {
            var c = a.indexOf("#");
            return 0 < c ? a.substr(0, c) : a
        },
        ab: function (a, c, b) {
            a = a.split("&");
            b = b != i ? b : a.length;
            a.splice(b, 0, c);
            return a.join("&")
        },
        qb: function (d, c, b) {
            if (d !== p) return j;
            c || (c = a.trackingServer);
            b || (b = a.trackingServerSecure);
            d = a.loadSSL ? b : c;
            return "string" === typeof d && d.length ? 0 > d.indexOf("2o7.net") && 0 >
                d.indexOf("omtrdc.net") : j
        }
    };
    a.Lb = x;
    var K = {
        F: function () {
            var a = "none",
                c = k;
            "undefined" !== typeof XMLHttpRequest && XMLHttpRequest === Object(
                XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? a =
                    "XMLHttpRequest" : (new Function(
                        "/*@cc_on return /^10/.test(@_jscript_version) @*/"))() ? a =
                        "XMLHttpRequest" : "undefined" !== typeof XDomainRequest &&
                        XDomainRequest === Object(XDomainRequest) && (c = j), 0 < Object.prototype
                            .toString.call(window.Cb).indexOf("Constructor") && (c = j));
            return {
                G: a,
                Ob: c
            }
        }(),
        lb: function () {
            return "none" === this.F.G ? i : new window[this.F.G]
        },
        kb: function (d, c, b) {
            var e = this;
            c && (d.I = c);
            try {
                var f = this.lb();
                f.open("get", d.m + "&ts=" + (new Date).getTime(), k);
                "XMLHttpRequest" === this.F.G && (f.withCredentials = k, f.timeout = a.loadTimeout,
                    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    f.onreadystatechange = function () {
                        if (4 === this.readyState && 200 === this.status) a: {
                            var a;
                            try {
                                if (a = JSON.parse(this.responseText), a !== Object(a)) {
                                    e.n(d, i, "Response is not JSON");
                                    break a
                                }
                            } catch (b) {
                                e.n(d, b, "Error parsing response as JSON");
                                break a
                            }
                            try {
                                for (var c = d.ra, f = window, g = 0; g < c.length; g++) f = f[c[g]];
                                f(a)
                            } catch (j) {
                                e.n(d, j, "Error forming callback function")
                            }
                        }
                    });
                f.onerror = function (a) {
                    e.n(d, a, "onerror")
                };
                f.ontimeout = function (a) {
                    e.n(d, a, "ontimeout")
                };
                f.send();
                o.c[b] = {
                    requestStart: o.o(),
                    url: d.m,
                    wa: f.timeout,
                    ua: o.Aa(),
                    va: 1
                };
                a.la.Ha.push(d.m)
            } catch (g) {
                this.n(d, g, "try-catch")
            }
        },
        n: function (d, c, b) {
            a.CORSErrors.push({
                Pb: d,
                error: c,
                description: b
            });
            d.I && ("ontimeout" === b ? d.I(k) : d.I(j, d))
        }
    };
    a.na = K;
    var y = {
        Oa: 3E4,
        ca: 649,
        La: j,
        id: i,
        W: [],
        T: i,
        za: function (a) {
            if ("string" === typeof a) return a = a.split("/"), a[0] + "//" + a[2]
        },
        g: i,
        url: i,
        mb: function () {
            var d = "http://fast.",
                c = "?d_nsid=" + a.idSyncContainerID + "#" + encodeURIComponent(s.location
                    .href);
            this.g || (this.g = "nosubdomainreturned");
            a.loadSSL && (d = a.idSyncSSLUseAkamai ? "https://fast." : "https://");
            d = d + this.g + ".demdex.net/dest5.html" + c;
            this.T = this.za(d);
            this.id = "destination_publishing_iframe_" + this.g + "_" + a.idSyncContainerID;
            return d
        },
        eb: function () {
            var d = "?d_nsid=" + a.idSyncContainerID + "#" + encodeURIComponent(s.location
                .href);
            "string" === typeof a.M && a.M.length && (this.id =
                "destination_publishing_iframe_" + (new Date).getTime() + "_" + a.idSyncContainerID,
                this.T = this.za(a.M), this.url = a.M + d)
        },
        Ba: i,
        xa: j,
        Z: j,
        H: i,
        cc: i,
        vb: i,
        dc: i,
        Y: j,
        J: [],
        tb: [],
        ub: [],
        Da: r.p ? 15 : 100,
        U: [],
        rb: [],
        sa: k,
        Ga: j,
        Fa: function () {
            return !a.idSyncDisable3rdPartySyncing && (this.xa || a.Hb) && this.g &&
                "nosubdomainreturned" !== this.g && this.url && !this.Z
        },
        R: function () {
            function a() {
                e = document.createElement("iframe");
                e.sandbox = "allow-scripts allow-same-origin";
                e.title = "Adobe ID Syncing iFrame";
                e.id = b.id;
                e.style.cssText = "display: none; width: 0; height: 0;";
                e.src = b.url;
                b.vb = k;
                c();
                document.body.appendChild(e)
            }

            function c() {
                x.Q(e, "load", function () {
                    e.className = "aamIframeLoaded";
                    b.H = k;
                    b.u()
                })
            }
            this.Z = k;
            var b = this,
                e = document.getElementById(this.id);
            e ? "IFRAME" !== e.nodeName ? (this.id += "_2", a()) : "aamIframeLoaded" !==
                e.className ? c() : (this.H = k, this.Ca = e, this.u()) : a();
            this.Ca = e
        },
        u: function (d) {
            var c = this;
            d === Object(d) && (this.U.push(d), this.yb(d));
            if ((this.Ga || !r.p || this.H) && this.U.length) this.K(this.U.shift()),
                this.u();
            !a.idSyncDisableSyncs && this.H && this.J.length && !this.Y && (this.La ||
                (this.La = k, setTimeout(function () {
                    c.Da = r.p ? 15 : 150
                }, this.Oa)), this.Y = k, this.Ia())
        },
        yb: function (a) {
            var c, b, e;
            if ((c = a.ibs) && c instanceof Array && (b = c.length))
                for (a = 0; a < b; a++) e = c[a], e.syncOnPage && this.ta(e, "",
                    "syncOnPage")
        },
        K: function (a) {
            var c = encodeURIComponent,
                b, e, f, g, h;
            if ((b = a.ibs) && b instanceof Array && (e = b.length))
                for (f = 0; f < e; f++) g = b[f], h = [c("ibs"), c(g.id || ""), c(g.tag ||
                    ""), x.jb(g.url || [], ","), c(g.ttl || ""), "", "", g.fireURLSync ?
                    "true" : "false"
                ], g.syncOnPage || (this.sa ? this.qa(h.join("|")) : g.fireURLSync &&
                    this.ta(g, h.join("|")));
            this.rb.push(a)
        },
        ta: function (d, c, b) {
            var e = (b = "syncOnPage" === b ? k : j) ? H : J;
            a.f();
            var f = a.a(e),
                g = j,
                h = j,
                i = Math.ceil((new Date).getTime() / r.da);
            f ? (f = f.split("*"), h = this.zb(f, d.id, i), g = h.hb, h = h.ib, (!g ||
                !h) && this.ya(b, d, c, f, e, i)) : (f = [], this.ya(b, d, c, f, e, i))
        },
        zb: function (a, c, b) {
            var e = j,
                f = j,
                g, h, i;
            for (h = 0; h < a.length; h++) g = a[h], i = parseInt(g.split("-")[1], 10),
                g.match("^" + c + "-") ? (e = k, b < i ? f = k : (a.splice(h, 1), h--)) :
                    b >= i && (a.splice(h, 1), h--);
            return {
                hb: e,
                ib: f
            }
        },
        sb: function (a) {
            if (a.join("*").length > this.ca)
                for (a.sort(function (a, b) {
                    return parseInt(a.split("-")[1], 10) - parseInt(b.split("-")[1], 10)
                }); a.join("*").length > this.ca;) a.shift()
        },
        ya: function (d, c, b, e, f, g) {
            var h = this;
            if (d) {
                if ("img" === c.tag) {
                    var d = c.url,
                        b = a.loadSSL ? "https:" : "http:",
                        j, k, l;
                    for (e = 0, j = d.length; e < j; e++) {
                        k = d[e];
                        l = /^\/\//.test(k);
                        var m = new Image;
                        x.Q(m, "load", function (b, c, d, e) {
                            return function () {
                                h.W[b] = i;
                                a.f();
                                var g = a.a(f),
                                    j = [];
                                if (g) {
                                    var g = g.split("*"),
                                        k, l, m;
                                    for (k = 0, l = g.length; k < l; k++) m = g[k], m.match("^" + c.id +
                                        "-") || j.push(m)
                                }
                                h.Ka(j, c, d, e)
                            }
                        }(this.W.length, c, f, g));
                        m.src = (l ? b : "") + k;
                        this.W.push(m)
                    }
                }
            } else this.qa(b), this.Ka(e, c, f, g)
        },
        qa: function (d) {
            var c = encodeURIComponent;
            this.J.push((a.Ib ? c("---destpub-debug---") : c("---destpub---")) + d)
        },
        Ka: function (d, c, b, e) {
            d.push(c.id + "-" + (e + Math.ceil(c.ttl / 60 / 24)));
            this.sb(d);
            a.d(b, d.join("*"))
        },
        Ia: function () {
            var d = this,
                c;
            this.J.length ? (c = this.J.shift(), a.pa.postMessage(c, this.url, this.Ca
                .contentWindow), this.tb.push(c), setTimeout(function () {
                    d.Ia()
                }, this.Da)) : this.Y = j
        },
        X: function (a) {
            var c = /^---destpub-to-parent---/;
            "string" === typeof a && c.test(a) && (c = a.replace(c, "").split("|"),
                "canSetThirdPartyCookies" === c[0] && (this.sa = "true" === c[1] ? k : j,
                    this.Ga = k, this.u()), this.ub.push(a))
        },
        xb: function (d) {
            if (this.url === i || d.subdomain && "nosubdomainreturned" === this.g) this
                .g = "string" === typeof a.oa && a.oa.length ? a.oa : d.subdomain || "",
                this.url = this.mb();
            d.ibs instanceof Array && d.ibs.length && (this.xa = k);
            this.Fa() && (a.idSyncAttachIframeOnWindowLoad ? (l.aa || "complete" === s
                .readyState || "loaded" === s.readyState) && this.R() : this.bb());
            "function" === typeof a.idSyncIDCallResult ? a.idSyncIDCallResult(d) :
                this.u(d);
            "function" === typeof a.idSyncAfterIDCallResult && a.idSyncAfterIDCallResult(
                d)
        },
        cb: function (d, c) {
            return a.Jb || !d || c - d > r.Ma
        },
        bb: function () {
            function a() {
                c.Z || (document.body ? c.R() : setTimeout(a, 30))
            }
            var c = this;
            a()
        }
    };
    a.Gb = y;
    a.timeoutMetricsLog = [];
    var o = {
        gb: window.performance && window.performance.timing ? 1 : 0,
        Ea: window.performance && window.performance.timing ? window.performance.timing : i,
        $: i,
        S: i,
        c: {},
        V: [],
        send: function (d) {
            if (a.takeTimeoutMetrics && d === Object(d)) {
                var c = [],
                    b = encodeURIComponent,
                    e;
                for (e in d) d.hasOwnProperty(e) && c.push(b(e) + "=" + b(d[e]));
                d = "http" + (a.loadSSL ? "s" : "") +
                    "://dpm.demdex.net/event?d_visid_ver=" + a.version +
                    "&d_visid_stg_timeout=" + a.loadTimeout + "&" + c.join("&") +
                    "&d_orgid=" + b(a.marketingCloudOrgID) + "&d_timingapi=" + this.gb +
                    "&d_winload=" + this.nb() + "&d_ld=" + this.o();
                (new Image).src = d;
                a.timeoutMetricsLog.push(d)
            }
        },
        nb: function () {
            this.S === i && (this.S = this.Ea ? this.$ - this.Ea.navigationStart :
                this.$ - l.fb);
            return this.S
        },
        o: function () {
            return (new Date).getTime()
        },
        K: function (a) {
            var c = this.c[a],
                b = {};
            b.d_visid_stg_timeout_captured = c.wa;
            b.d_visid_cors = c.va;
            b.d_fieldgroup = a;
            b.d_settimeout_overriden = c.ua;
            c.timeout ? c.pb ? (b.d_visid_timedout = 1, b.d_visid_timeout = c.timeout -
                c.requestStart, b.d_visid_response = -1) : (b.d_visid_timedout = "n/a",
                    b.d_visid_timeout = "n/a", b.d_visid_response = "n/a") : (b.d_visid_timedout =
                        0, b.d_visid_timeout = -1, b.d_visid_response = c.Bb - c.requestStart);
            b.d_visid_url = c.url;
            l.aa ? this.send(b) : this.V.push(b);
            delete this.c[a]
        },
        Ab: function () {
            for (var a = 0, c = this.V.length; a < c; a++) this.send(this.V[a])
        },
        Aa: function () {
            return "function" === typeof setTimeout.toString ? -1 < setTimeout.toString()
                .indexOf("[native code]") ? 0 : 1 : -1
        }
    };
    a.Nb = o;
    var w = {
        isClientSideMarketingCloudVisitorID: i,
        MCIDCallTimedOut: i,
        AnalyticsIDCallTimedOut: i,
        AAMIDCallTimedOut: i,
        c: {},
        Ja: function (a, c) {
            switch (a) {
                case E:
                    c === j ? this.MCIDCallTimedOut !== k && (this.MCIDCallTimedOut = j) :
                        this.MCIDCallTimedOut = c;
                    break;
                case C:
                    c === j ? this.AnalyticsIDCallTimedOut !== k && (this.AnalyticsIDCallTimedOut =
                        j) : this.AnalyticsIDCallTimedOut = c;
                    break;
                case A:
                    c === j ? this.AAMIDCallTimedOut !== k && (this.AAMIDCallTimedOut = j) :
                        this.AAMIDCallTimedOut = c
            }
        }
    };
    a.isClientSideMarketingCloudVisitorID = function () {
        return w.isClientSideMarketingCloudVisitorID
    };
    a.MCIDCallTimedOut = function () {
        return w.MCIDCallTimedOut
    };
    a.AnalyticsIDCallTimedOut = function () {
        return w.AnalyticsIDCallTimedOut
    };
    a.AAMIDCallTimedOut = function () {
        return w.AAMIDCallTimedOut
    };
    a.idSyncGetOnPageSyncInfo = function () {
        a.f();
        return a.a(H)
    };
    0 > q.indexOf("@") && (q += "@AdobeOrg");
    a.marketingCloudOrgID = q;
    a.cookieName = "AMCV_" + q;
    a.sessionCookieName = "AMCVS_" + q;
    a.cookieDomain = a.Ta();
    a.cookieDomain == m.location.hostname && (a.cookieDomain = "");
    a.loadSSL = 0 <= m.location.protocol.toLowerCase().indexOf("https");
    a.loadTimeout = 3E4;
    a.CORSErrors = [];
    a.marketingCloudServer = a.audienceManagerServer = "dpm.demdex.net";
    a.Qa();
    if (v && "object" == typeof v) {
        for (var F in v) !Object.prototype[F] && (a[F] = v[F]);
        a.idSyncContainerID = a.idSyncContainerID || 0;
        a.f();
        K = a.a(I);
        F = Math.ceil((new Date).getTime() / r.da);
        !a.idSyncDisableSyncs && y.cb(K, F) && (a.j(t, -1), a.d(I, F));
        a.getMarketingCloudVisitorID();
        a.getAudienceManagerLocationHint();
        a.getAudienceManagerBlob()
    }
    if (!a.idSyncDisableSyncs) {
        y.eb();
        x.Q(window, "load", function () {
            l.aa = k;
            o.$ = o.o();
            o.Ab();
            var a = y;
            a.Fa() && a.R()
        });
        try {
            a.pa.X(function (a) {
                y.X(a.data)
            }, y.T)
        } catch (L) { }
    }
}
Visitor.getInstance = function (q, v) {
    var a, m = window.s_c_il,
        l;
    0 > q.indexOf("@") && (q += "@AdobeOrg");
    if (m)
        for (l = 0; l < m.length; l++)
            if ((a = m[l]) && "Visitor" == a._c && a.marketingCloudOrgID == q) return a;
    return new Visitor(q, v)
};
(function () {
    function q() {
        v.aa = a
    }
    var v = window.Visitor,
        a = v.Pa,
        m = v.Na;
    a || (a = !0);
    m || (m = !1);
    window.addEventListener ? window.addEventListener("load", q) : window.attachEvent &&
        window.attachEvent("onload", q);
    v.fb = (new Date).getTime()
})();
var visitor = new Visitor("02C51F6A550AFE4E0A4C98A7@AdobeOrg");
visitor.trackingServer = "mtc.nhk.or.jp"; // same as s.trackingServer
visitor.trackingServerSecure = "mtcs.nhk.or.jp"; //same as s.trackingServerSecure
// To enable CNAME support, add the following configuration variables
// If you are not using CNAME, DO NOT include these variables
visitor.marketingCloudServer = "mtc.nhk.or.jp"; // same as s.trackingServer
visitor.marketingCloudServerSecure = "mtcs.nhk.or.jp"; //same as s.trackingServerSecure
s_omni = new AppMeasurement();
s_omni.account = "nhkonlinedev";
//var s_omni=s_gi(s_account);
s_omni.trackDownloadLinks = true;
s_omni.trackExternalLinks = true;
s_omni.trackInlineStats = false;
s_omni.linkDownloadFileTypes =
    "exe,zip,wav,aac,mp3,mp4,m3u8,f4m,mov,mpg,mpeg,avi,asx,asf,wma,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,xml,rss,rdf";
s_omni.linkInternalFilters = "javascript:,nhk.or.jp,nhk.jp";
s_omni.linkLeaveQueryString = false;
s_omni.linkTrackVars = "";
s_omni.linkTrackEvents = "None";
s_omni.cookieDomainPeriods = "3";
s_omni.fpCookieDomainPeriods = "3";
s_omni.ssl = true;
s_omni.useForcedLinkTracking = true;
s_omni.useragent_lower = window.navigator.userAgent.toLowerCase();
if (s_omni.useragent_lower.indexOf("firefox") != -1) {
    s_omni.useForcedLinkTracking = false;
}
s_omni.forcedLinkTrackingTimeout = 500;
switch (location.hostname) {
    case "www.nhk.or.jp":
    case "www1.nhk.or.jp":
    case "www2.nhk.or.jp":
    case "www3.nhk.or.jp":
    case "www3r.nhk.or.jp":
    case "www4.nhk.or.jp":
    case "www5.nhk.or.jp":
    case "www6.nhk.or.jp":
    case "www9.nhk.or.jp":
    case "www9r.nhk.or.jp":
    case "cgi2.nhk.or.jp":
    case "cgi4.nhk.or.jp":
    case "toukou.nhk.or.jp":
    case "hc.nhk.or.jp":
    case "pid.nhk.or.jp":
    case "bh.pid.nhk.or.jp":
    case "hh.pid.nhk.or.jp":
    case "tv.pid.nhk.or.jp":
    case "pidbh.nhk.jp":
    case "pidhh.nhk.jp":
    case "credit-s.nhk.or.jp":
    case "credit-tk.nhk.or.jp":
    case "sports.nhk.or.jp":
    case "scoopbox.nhk.or.jp":
    case "emb3.nhk.or.jp":
    case "www.douji.nhk.or.jp":
        s_omni.account = "nhkonlineprd";
        break;
    default:
}
if (location.hostname && !location.hostname.match(/nhk\.or\.jp$/)) {
    s_omni.linkInternalFilters = s_omni.linkInternalFilters + "," + location.hostname;
}
// for heartbeat 1.4
// sports.nhk.or.jp/olympic use heartbeat 1.4, but heartbeat 1.4 is not support ssl tracking.
if (location.hostname && location.hostname == "sports.nhk.or.jp") {
    s_omni.ssl = false;
}
// check is tracking (iframe page)
s_omni.isPageTrackingFlag = false;
if (typeof _tc_isPageTracking != "function" || _tc_isPageTracking()) {
    s_omni.isPageTrackingFlag = true;
}
s_omni.usePlugins = true;

function s_omni_doPlugins(s_omni) {
    //------------------------------------------
    // for Heartbeat Video Tracking
    //------------------------------------------
    // live: doPlugins is not executed.
    if (s_omni.pev3 == 'video' && !s_omni.contextData['a.media.segment'] && !
        s_omni.contextData['a.media.segmentNum'] && typeof s_omni.contextData[
        'a.media.friendlyName'] !== "undefined" && s_omni.contextData[
        'a.media.friendlyName']) {
        s_omni.linkTrackVars = "";
    }
    //------------------------------------------
    // Before Adobe gets tracking data
    //------------------------------------------
    if (typeof _tc_sc_preFunc == "function") {
        _tc_sc_preFunc(s_omni);
    }
    if (typeof _tc_sc_preFuncs != "undefined") {
        for (var i = 0, end = _tc_sc_preFuncs.length; i < end; i++) {
            try {
                _tc_sc_preFuncs[i](s_omni);
            } catch (e) { }
        }
    }
    //-------------------------------------------
    // Main process starts
    //-------------------------------------------
    // campaign
    s_omni.campaign = s_omni.Util.getQueryParam('cid');
    // Page Name
    s_omni.pageName = s_omni.getPageName();
    // Page Name (in 100 byte)
    s_omni.pageName = s_omni.getStrInMaxBytes(s_omni.pageName, 100);
    // Channel : host name
    s_omni.channel = location.hostname.split(".")[0];
    s_omni.eVar39 = s_omni.channel;
    // Server
    s_omni.server = location.hostname;
    s_omni.eVar40 = s_omni.server;
    // Scroll rate (cookie:s_ppv_nol)
    // s_omni.prop2 = s_omni.getPercentPageViewed_nol(s_omni.pageName);
    var ppvArray = s_omni.getPercentPageViewed_nol(s_omni.pageName);
    if (!ppvArray || ppvArray == 'no value' || !ppvArray[0]) {
        s_omni.prop2 = '';
    } else {
        s_omni.prop2 = ppvArray[0] + "," + ppvArray[1];
    }
    // Page Loading time
    s_omni.prop3 = s_omni.getLoadTime();
    if (s_omni.pageName) {
        // 1st Directory
        if (s_omni.pageName.split(":")[0]) {
            s_omni.prop4 = s_omni.pageName.split(":")[0];
            s_omni.eVar4 = "D=c4";
        }
        // 2nd Directory
        if (s_omni.pageName.split(":")[1]) {
            s_omni.prop5 = s_omni.pageName.split(":")[0] + ":" + s_omni.pageName.split(
                ":")[1];
            s_omni.eVar5 = "D=c5";
        } else {
            s_omni.prop5 = s_omni.eVar5 = "D=c4";
        }
        // 3rd Directory
        if (s_omni.pageName.split(":")[1] && s_omni.pageName.split(":")[2]) {
            s_omni.prop6 = s_omni.pageName.split(":")[0] + ":" + s_omni.pageName.split(
                ":")[1] + ":" + s_omni.pageName.split(":")[2];
            s_omni.eVar6 = "D=c6";
        } else if (s_omni.pageName.split(":")[1]) {
            s_omni.prop6 = s_omni.eVar6 = "D=c5";
        } else {
            s_omni.prop6 = s_omni.eVar6 = "D=c4";
        }
        // 4th Directory
        if (s_omni.pageName.split(":")[1] && s_omni.pageName.split(":")[2] && s_omni.pageName
            .split(":")[3]) {
            s_omni.prop15 = s_omni.pageName.split(":")[0] + ":" + s_omni.pageName.split(
                ":")[1] + ":" + s_omni.pageName.split(":")[2] + ":" + s_omni.pageName.split(
                    ":")[3];
            s_omni.eVar15 = "D=c15";
        } else if (s_omni.pageName.split(":")[1] && s_omni.pageName.split(":")[2]) {
            s_omni.prop15 = s_omni.eVar15 = "D=c6";
        } else if (s_omni.pageName.split(":")[1]) {
            s_omni.prop15 = s_omni.eVar15 = "D=c5";
        } else {
            s_omni.prop15 = s_omni.eVar15 = "D=c4";
        }
    }
    // Category(1st Directory) viewed
    if (s_omni.prop4) {
        var catViewedObj = new Object();
        // cookie : s_catvwd_nol
        s_omni.categoryViewed(s_omni.prop4, "s_catvwd_nol", 365, catViewedObj);
        if (catViewedObj.cats != 0) {
            s_omni.eVar7 = catViewedObj.cats;
            s_omni.eVar8 = catViewedObj.catList;
        }
    }
    // Page title
    s_omni.prop7 = document.title;
    // Contents view event
    s_omni.events = s_omni.apl(s_omni.events, 'event3', ',', 2);
    // Internal Search Keyword
    s_omni.eVar1 = s_omni.Util.getQueryParam('qt');
    if (s_omni.eVar1) {
        // replace \s or \r or \n to space
        s_omni.eVar1 = s_omni.eVar1.replace(/[\s|\r|\n]+/g, ' ');
        s_omni.prop1 = "D=v1";
        s_omni.events = s_omni.apl(s_omni.events, 'event1', ',', 2);
    }
    // New/Repeat visitor (cookie:s_nr_nol)
    s_omni.eVar13 = s_omni.getNewRepeat(365, "s_nr_nol");
    // Date and time
    s_omni.eVar14 = s_omni.getTimeParting("s", "+9");
    if (s_omni.eVar14.slice(0, 3) == '12:' && s_omni.eVar14.match(/ AM\|| PM\|/)) {
        s_omni.eVar14 = '0' + s_omni.eVar14.slice(2);
    }
    // URL
    s_omni.prop31 = location.href;
    // URL without parameters
    s_omni.prop32 = location.protocol + "//" + location.host + location.pathname;
    // referrer
    s_omni.prop33 = document.referrer;
    // Adobe s_code version
    s_omni.prop36 = s_omni.version;
    // NHK s_code version
    s_omni.prop37 = s_omni.n_version = "v4.4.0.0";
    // 1st dir difference
    var tmp = s_omni.previous_dir1();
    if (tmp && s_omni.prop4 != "index" && s_omni.prop4 != tmp) {
        s_omni.eVar10 = tmp;
        s_omni.events = s_omni.apl(s_omni.events, 'event5', ',', 2);
    }
    // exit Link handler
    if (s_omni.linkType === "e") {
        s_omni.linkTrackVars = "prop36,prop37";
        s_omni.linkTrackEvents = "None";
        // transition to "nhk on demand"
        if (s_omni.linkURL.match(/\.nhk-ondemand\.jp\//) || s_omni.linkURL.match(
            /:\/\/nhk\.jp\/(P2067|nod)/)) {
            s_omni.events = "event6";
            s_omni.linkTrackVars += ",events";
            s_omni.linkTrackEvents = "event6";
        }
        // set evars for Exit Link Tracking
        s_omni.set_evars_for_exitlink();
    }
    //------------------------------------------
    // After Adobe gets tracking data
    //------------------------------------------
    if (typeof _tc_sc_postFunc == "function") {
        _tc_sc_postFunc(s_omni);
    }
    if (typeof _tc_sc_postFuncs != "undefined") {
        for (var i = 0, end = _tc_sc_postFuncs.length; i < end; i++) {
            try {
                _tc_sc_postFuncs[i](s_omni);
            } catch (e) { }
        }
    }
    // check variable bytes check
    for (var i_prop = 1; i_prop <= 75; i_prop++) {
        if (typeof s_omni["prop" + i_prop] === "undefined" || s_omni["prop" + i_prop] ==
            "" || s_omni["prop" + i_prop] == null || s_omni["prop" + i_prop] == "N/A") {
            continue;
        }
        s_omni["prop" + i_prop] = s_omni.getStrInMaxBytes(s_omni["prop" + i_prop],
            100);
    }
    for (var i_evar = 1; i_evar <= 75; i_evar++) {
        if (typeof s_omni["eVar" + i_evar] === "undefined" || s_omni["eVar" + i_evar] ==
            "" || s_omni["eVar" + i_evar] == null || s_omni["eVar" + i_evar] == "N/A") {
            continue;
        }
        s_omni["eVar" + i_evar] = s_omni.getStrInMaxBytes(s_omni["eVar" + i_evar],
            255);
    }
    // replace dynamic parameter to value (eVar)
    if (s_omni.linkType === "o" || s_omni.linkType === "e" || s_omni.linkType ===
        "d") {
        s_omni.setRealValue_eVar(s_omni, "D");
    }
}
s_omni.doPlugins = s_omni_doPlugins;
s_omni.visitorNamespace = "nhkonline";
s_omni.trackingServer = "mtc.nhk.or.jp";
s_omni.trackingServerSecure = "mtcs.nhk.or.jp";
s_omni.visitor = Visitor.getInstance("02C51F6A550AFE4E0A4C98A7@AdobeOrg");
/*
 * Plugins set_evars_for_exitlink : set evars for exitlink, trackRealState
 */
s_omni.set_evars_for_exitlink = function () {
    var s = this;
    var trackEvars = ['eVar4', 'eVar5', 'eVar6', 'eVar7', 'eVar8', 'eVar9',
        'eVar13', 'eVar14', 'eVar15', 'eVar39', 'eVar40', 'eVar41', 'eVar42',
        'eVar43', 'eVar44', 'eVar45', 'eVar46', 'eVar47', 'eVar48'
    ];
    // set pagename for Exit Link
    if (!s.eVar9) s.eVar9 = "D=pageName";
    var n = trackEvars.length;
    for (var i = 0; i < n; i++) {
        if (typeof s[trackEvars[i]] !== "undefined") {
            // convert dynamic variable to value
            s[trackEvars[i]] = s.convert_dynamic_to_value(s[trackEvars[i]]);
            if (!s.linkTrackVars || s.linkTrackVars == 'None') {
                s.linkTrackVars = trackEvars[i];
            } else {
                s.linkTrackVars = s.apl(s.linkTrackVars, trackEvars[i], ',', 1);
            }
        }
    }
};
/*
 * Plugins convert_dynamic_to_value : convert dynamic variable to value
 */
s_omni.convert_dynamic_to_value = function (val) {
    var t = typeof val || '';
    if (t == "undefined" || t === "null" || !t) {
        return "";
    }
    var s = this;
    var variable_map_array = {
        'v0': 'campaign',
        'ch': 'channel',
        'vid': 'visitorID',
        'g': 'pageURL'
    };
    if (val.match(/D=([^=]+)/)) {
        var target = RegExp.$1;
        var vname = "";
        if (typeof variable_map_array[target] !== "undefined") {
            vname = variable_map_array[target];
        } else if (target.match(/^(c|v|l|h)([0-9]+)$/)) {
            switch (RegExp.$1) {
                case "c":
                    vname = "prop";
                    break;
                case "v":
                    vname = "eVar";
                    break;
                case "l":
                    vname = "list";
                    break;
                case "h":
                    vname = "hier";
                    break;
            }
            vname += RegExp.$2;
        } else {
            vname = target;
        }
        if (vname && typeof s[vname] !== "undefined" && s[vname]) {
            return s[vname];
        } else {
            return "";
        }
    }
    return val;
}
// Real TimeOnSite tracking
/**
 * Real TimeOnSite tracking
 */
s_omni.trackRealTimeOnSite = function (str_evar, str_events, max_seconds) {
    var s = this;
    // Real page stay time traker(create timer object)
    s.date_pageLoadTimer = new Date();
    var num_max_seconds = max_seconds || 1790; //max 29 min 50 seconds.
    var func_trackRealTimeOnSite = function () {
        // calculation time spents
        var date_pageleave = new Date();
        var num_pagestay = null;
        if (s.date_pageLoadTimer) {
            num_pagestay = (date_pageleave.getTime() - s.date_pageLoadTimer.getTime()) /
                1000;
            num_pagestay = Math.round(num_pagestay);
        }
        // exception (exit)
        if (!isFinite(num_pagestay) || num_pagestay < 0) {
            return;
        }
        // exception (validation)
        if (num_pagestay > num_max_seconds) {
            num_pagestay = num_max_seconds;
        }
        // track page stay time if num_pagestay variable is exist.
        if (num_pagestay) {
            s.events = str_events + "=" + num_pagestay;
            s.linkTrackVars = str_evar + ',prop36,prop37,events';
            s.linkTrackEvents = str_events;
            s[str_evar] = s.pageName;
            // at movie page(Heartbeat) , maybe values are cleard ...
            if (!s.prop36 && s.version) s.prop36 = s.version;
            if (!s.prop37 && s.n_version) s.prop37 = s.n_version;
            // add evars
            // Update Date and time
            s.eVar14 = s_omni.getTimeParting("s", "+9");
            if (s.eVar14.slice(0, 3) == '12:' && s.eVar14.match(/ AM\|| PM\|/)) {
                s.eVar14 = '0' + s.eVar14.slice(2);
            }
            // set evars for trackrealstate
            s.set_evars_for_exitlink();
            // NHK customize
            var func_pluginCall = s.usePlugins;
            s.usePlugins = false;
            s.v = 0;
            s.tl(true, 'o', 'track_RealTimeOnSite', null, 'navigate');
            s.v = 0;
            s.usePlugins = func_pluginCall;
            s.linkTrackVars = null;
            s.linkTrackEvents = null;
            s[str_evar] = null;
            s.events = s.rfl(s.events, str_events);
        }
    };
    // IE8 > Setting
    if (document.addEventListener) {
        window.addEventListener("pagehide", func_trackRealTimeOnSite);
    } else {
        window.attachEvent("onpagehide", func_trackRealTimeOnSite, false);
    }
}; // end of plugin
// spoil tracking if iframe page
if (s_omni.isPageTrackingFlag) {
    s_omni.trackRealTimeOnSite("eVar9", "event4", 1790);
}
/*
   check if the specified category has been viewed.
*/
s_omni.categoryViewed = function (catval, cookiename, expiredDays, pObj) {
    var bViewed = false;
    var e = new Date();
    var nCat = 0;
    var ct = e.getTime();
    e.setTime(ct + expiredDays * 24 * 60 * 60 * 1000);
    var cval = s_omni.c_r(cookiename);
    if (cval.length == 0) {
        cval = catval;
        nCat = 1;
    } else {
        var a = cval.split(">");
        for (var i = 0; i < a.length; i++) {
            if (catval == a[i]) {
                bViewed = true;
            }
        }
        var limit = 30;
        if (bViewed == false) {
            a.push(catval);
            var n = a.length;
            if (n > limit) {
                n = n - limit;
                for (var i = 0; i < n; i++) {
                    a.shift();
                }
            }
            cval = a.join(">");
            nCat = a.length;
        }
    }
    // Write/Update cookie
    s_omni.c_w(cookiename, cval, e);
    // return object
    pObj.catList = cval;
    pObj.cats = nCat;
};
/*
 * get Hour:Time Per 15 Minutes
 */
s_omni.getHourTimePer15min = function () {
    var _now = new Date();
    var _hour = _now.getHours();
    var _hh = ("0" + _hour).slice(-2);
    var _min = _now.getMinutes();
    var _mm = "00";
    if (0 <= _min && _min < 15) {
        _mm = "00";
    } else if (15 <= _min && _min < 30) {
        _mm = "15";
    } else if (30 <= _min && _min < 45) {
        _mm = "30";
    } else {
        _mm = "45";
    }
    return _hh + ":" + _mm;
};
/*
 * Media tracking
 */
s_omni.loadModule("Media");
s_omni.Media.onLoad = function (s, m) {
    s_omni.Media.autoTrack = false;
    s_omni.Media.trackVars = "contextData";
    s_omni.Media.trackEvents = "";
    s_omni.Media.segmentByMilestones = false;
    s_omni.Media.trackMilestones = '25,50,75';
    s_omni.Media.trackSeconds = 10;
    s_omni.Media.trackUsingContextData = true;
}
/*
 * Utility: AppMeasurement Compatibility v1.1 for NHK version
 * Define deprecated H-code s properties and methods used by legacy plugins
 */
s_omni.wd = window;
s_omni.fl = new Function("x", "l", "" + "return x?(''+x).substring(0,l):x");
s_omni.pt = new Function("x", "d", "f", "a", "" +
    "var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l" +
    "]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs" +
    "tring(z,x[l]);t=z<x[l]?t:''}return''");
s_omni.rep = new Function("x", "o", "n", "" +
    "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(" +
    "i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){" +
    "j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i" +
    ">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi" +
    "n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x");
s_omni.ape = new Function("x", "" +
    "var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y" +
    "='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp" +
    "onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf(" +
    "n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}" +
    "else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub" +
    "string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=" +
    "h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='" +
    "+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2" +
    "B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)" +
    "{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst" +
    "ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst" +
    "ring(i);i=x.indexOf('%',i)}}}return x");
s_omni.epa = new Function("x", "" +
    "var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu" +
    "nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape" +
    "(x)}return y');return tcf(x)}else return unescape(x)}return y");
s_omni.parseUri = new Function("u", "" +
    "if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')" +
    "==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr" +
    "eateElement('a'),l=['href','protocol','host','hostname','port','pat" +
    "hname','search','hash'],p,r={href:u,toString:function(){return this" +
    ".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p" +
    "]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam" +
    "e='/'+p;return r");
s_omni.gtfs = new Function("" +
    "var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot" +
    "ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?" +
    "d.referrer:d.location;return{location:s.parseUri(u)}");
/*
 * Plugin: getLoadTime
 */
s_omni.getLoadTime = function () {
    if (!window.s_loadT) {
        var b = new Date().getTime(),
            o = window.performance ? performance.timing : 0,
            a = o ? o.requestStart : window.inHeadTS || 0;
        s_loadT = a ? (Math.round((b - a) / 100) / 10) : ''
    }
    return s_loadT
};
s_omni.getPageName = new Function("u", "siteID", "pathConcatDelim",
    "pathExcludeDelim", "pathExcludeList", "defaultPage", "" +
    "var pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexO" +
    "f(d);y=y<0?t.length:y;t=t.substring(0,y);var x1=t.indexOf('=');if(a" +
    ".toLowerCase()==t.substring(0,x1<0?t.length:x1).toLowerCase()){r=t;" +
    "}else{r=0;}if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=" +
    "z<x.length?t:'';}return'';};var s=this,pathExcludeList=pathExcludeL" +
    "ist||'cgi-bin',v=u?u:''+location.href,x=v.indexOf(':'),y=v.indexOf(" +
    "'/',x+4),z=v.indexOf('?'),c=pathConcatDelim||':',e=pathExcludeDelim" +
    "||'.',g='',d=siteID?siteID:'',dp=defaultPage||'index',n=d?d:'',q=z<" +
    "0?'':v.substring(z+1),p=v.substring(y+1,q?z:v.length);z=p.indexOf('" +
    "#');p=z<0?p:(p?(''+p).substring(0,z):p);x=e?p.indexOf(e):-1;p=x<0?p" +
    ":(p?(''+p).substring(0,x):p);p+=!p||p.charAt(p.length-1)=='/'?dp:''" +
    ";y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=(p?(''+p).s" +
    "ubstring(0,x):p);if(!pt(pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p" +
    ".substring(x+1);}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length" +
    ":x;z=(g?(''+g).substring(0,x):g);z=pt(q,'&','p_c',z);if(z){n+=n?y+z" +
    ":z;y=c?c:'&'}g=g.substring(x+1)}return n");
/*
 * Plugin: getPercentPageViewed v1.74 : NHK version
 * Comment : Changed cookie name to "s_ppv_nol"
 */
s_omni.getPercentPageViewed_nol = new Function("n", "" +
    "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load" +
    "','unload','scroll','resize','zoom','keyup','mouseup','touchend','o" +
    "rientationchange','pan'],K='s_ppv_nol',P=K+'l',I=n||s.pageName||documen" +
    "t.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){" +
    "var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a" +
    "[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a" +
    "[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9" +
    "]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w(" +
    "K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=wind" +
    "ow,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen|" +
    "|{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWi" +
    "dth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W" +
    ".s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e" +
    "=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s" +
    "&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho" +
    "],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight|" +
    "|E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePi" +
    "xelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.r" +
    "ound(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(O)%180:Y>X?0:90,a=s" +
    ".s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v" +
    "!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iP" +
    "od|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')" +
    "&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if" +
    "(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+" +
    "V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':" +
    "o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)" +
    "};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);" +
    "else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!argument" +
    "s.length||n=='-'?a[1]:a");
/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s_omni.getNewRepeat = new Function("d", "cn", "" +
    "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" +
    "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" +
    "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" +
    "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" +
    "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
/*
 * Plugin: getTimeParting 3.4
 */
s_omni.getTimeParting = new Function("h", "z", "" +
    "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont" +
    "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['" +
    "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" +
    "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp" +
    "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea" +
    "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)" +
    "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT" +
    "imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d" +
    ".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P" +
    "M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s_omni.split = new Function("l", "d", "" +
    "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
    "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin Utility: apl v1.2
 */
s_omni.apl = new Function("l", "v", "d", "u", "" +
    "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.le" +
    "ngth;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase(" +
    ")));}}if(!m)l=l?l+d+v:v;return l");
/*
 * s.join: 1.0 - Joins an array into a string
 */
s_omni.join = new Function("v", "p", "" +
    "var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'" +
    "';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x" +
    "<v.length;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else s" +
    "tr+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
/*
 * Plugin Utility - RFL (remove from list) 1.0
 */
s_omni.rfl = new Function("l", "v", "d1", "d2", "ku", "" +
    "var s=this,R=new Array(),C='',d1=!d1?',':d1,d2=!d2?',':d2,ku=!ku?0:" +
    "1;if(!l)return'';L=l.split(d1);for(i=0;i<L.length;i++){if(L[i].inde" +
    "xOf(':')>-1){C=L[i].split(':');C[1]=C[0]+':'+C[1];L[i]=C[0];}if(L[i" +
    "].indexOf('=')>-1){C=L[i].split('=');C[1]=C[0]+'='+C[1];L[i]=C[0];}" +
    "if(L[i]!=v&&C)R.push(C[1]);else if(L[i]!=v)R.push(L[i]);else if(L[i" +
    "]==v&&ku){ku=0;if(C)R.push(C[1]);else R.push(L[i]);}C='';}return s." +
    "join(R,{delim:d2})");
/*
 * check referrer 1st dir
 */
s_omni.previous_dir1 = function () {
    if (!document.referrer) return '';
    if (document.referrer.match(/\.nhk\.or\.jp\/([^\/]+)\//)) {
        return RegExp.$1;
    }
    if (document.referrer.match(/\.nhk\.or\.jp\/([^\/]*)$/)) {
        return "index";
    }
    return '';
};
/*
 * substr string in max byte
 */
s_omni.getStrInMaxBytes = function (str, maxByte) {
    try {
        var _ret = '';
        if (typeof str === "undefined" || str == null || str == "") {
            return _ret;
        }
        if (!maxByte || !isFinite(maxByte)) maxByte = 100;
        var ESCAPECHAR = ";,/?:@&=+$ ";
        var ESCAPEDLEN_TABLE = [0, 1, 1, 1, 2, 3, 2, 3, 4, 3];
        var size = 0;
        str = String(str);
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (ESCAPECHAR.indexOf(c) >= 0) {
                size++;
            } else {
                size += ESCAPEDLEN_TABLE[encodeURI(c).length];
            }
            if (size > maxByte) {
                break;
            }
            _ret += c;
        }
        return _ret;
    } catch (e) {
        return str;
    };
}
/*
 * replace dynamic parameter to value (eVar)
 */
s_omni.setRealValue_eVar = function (appm, dinamicParamPrefix) {
    var EVAR_PREFIX = "appm.eVar";
    var EVAR_DINAMIC_PREFIX = "c";
    var PROP_PREFIX = "appm.prop";
    var PROP_DINAMIC_PREFIX = "v";
    var DINAMIC_PARAM_PREFIX = dinamicParamPrefix + "=";
    var evarName = "";
    var evarValue = "";
    var dinamicParamValue = "";
    var dinamicParamPrefix = "";
    var dinamicParamNumber = "";
    var dinamicRepraceValue = "";
    for (i = 1; i <= 250; i++) {
        evarName = EVAR_PREFIX + i;
        evarValue = eval(evarName);
        if (!evarValue || evarValue.indexOf(DINAMIC_PARAM_PREFIX) != 0) {
            continue;
        }
        dinamicParamValue = evarValue.substr(2);
        if (dinamicParamValue.length < 2) {
            continue;
        }
        dinamicParamPrefix = dinamicParamValue.substr(0, 1);
        dinamicParamNumber = dinamicParamValue.substr(1);
        if (dinamicParamPrefix == EVAR_DINAMIC_PREFIX) {
            dinamicRepraceValue = eval(PROP_PREFIX + dinamicParamNumber)
        } else if (dinamicParamPrefix == PROP_DINAMIC_PREFIX) {
            dinamicRepraceValue = eval(EVAR_PREFIX + dinamicParamNumber);
        } else {
            continue;
        }
        if (dinamicRepraceValue == null) {
            dinamicRepraceValue = null;
        }
        eval(evarName + "='" + dinamicRepraceValue + "'");
    }
}
/****************************** MODULES *****************************/
/* Module: Media */
function AppMeasurement_Module_Media(q) {
    var b = this;
    b.s = q;
    q = window;
    q.s_c_in || (q.s_c_il = [], q.s_c_in = 0);
    b._il = q.s_c_il;
    b._in = q.s_c_in;
    b._il[b._in] = b;
    q.s_c_in++;
    b._c = "s_m";
    b.list = [];
    b.open = function (d, c, e, k) {
        var f = {},
            a = new Date,
            l = "",
            g;
        c || (c = -1);
        if (d && e) {
            b.list || (b.list = {});
            b.list[d] && b.close(d);
            k && k.id && (l = k.id);
            if (l)
                for (g in b.list) !Object.prototype[g] && b.list[g] && b.list[g].R == l &&
                    b.close(b.list[g].name);
            f.name = d;
            f.length = c;
            f.offset = 0;
            f.e = 0;
            f.playerName = b.playerName ? b.playerName : e;
            f.R = l;
            f.C = 0;
            f.a = 0;
            f.timestamp = Math.floor(a.getTime() / 1E3);
            f.k = 0;
            f.u = f.timestamp;
            f.c = -1;
            f.n = "";
            f.g = -1;
            f.D = 0;
            f.I = {};
            f.G = 0;
            f.m = 0;
            f.f = "";
            f.B = 0;
            f.L = 0;
            f.A = 0;
            f.F = 0;
            f.l = !1;
            f.v = "";
            f.J = "";
            f.K = 0;
            f.r = !1;
            f.H = "";
            f.complete = 0;
            f.Q = 0;
            f.p = 0;
            f.q = 0;
            b.list[d] = f
        }
    };
    b.openAd = function (d, c, e, k, f, a, l, g) {
        var h = {};
        b.open(d, c, e, g);
        if (h = b.list[d]) h.l = !0, h.v = k, h.J = f, h.K = a, h.H = l
    };
    b.M = function (d) {
        var c = b.list[d];
        b.list[d] = 0;
        c && c.monitor && clearTimeout(c.monitor.interval)
    };
    b.close = function (d) {
        b.i(d, 0, -1)
    };
    b.play = function (d, c, e, k) {
        var f = b.i(d, 1, c, e, k);
        f && !f.monitor && (f.monitor = {}, f.monitor.update = function () {
            1 == f.k && b.i(f.name, 3, -1);
            f.monitor.interval = setTimeout(f.monitor.update, 1E3)
        }, f.monitor.update())
    };
    b.click = function (d, c) {
        b.i(d, 7, c)
    };
    b.complete = function (d, c) {
        b.i(d, 5, c)
    };
    b.stop = function (d, c) {
        b.i(d, 2, c)
    };
    b.track = function (d) {
        b.i(d, 4, -1)
    };
    b.P = function (d, c) {
        var e = "a.media.",
            k = d.linkTrackVars,
            f = d.linkTrackEvents,
            a = "m_i",
            l, g = d.contextData,
            h;
        c.l && (e += "ad.", c.v && (g["a.media.name"] = c.v, g[e + "pod"] = c.J, g[e +
            "podPosition"] = c.K), c.G || (g[e + "CPM"] = c.H));
        c.r && (g[e + "clicked"] = !0, c.r = !1);
        g["a.contentType"] = "video" + (c.l ? "Ad" : "");
        g["a.media.channel"] = b.channel;
        g[e + "name"] = c.name;
        g[e + "playerName"] = c.playerName;
        0 < c.length && (g[e + "length"] = c.length);
        g[e + "timePlayed"] = Math.floor(c.a);
        0 < Math.floor(c.a) && (g[e + "timePlayed"] = Math.floor(c.a));
        c.G || (g[e + "view"] = !0, a = "m_s", b.Heartbeat && b.Heartbeat.enabled &&
            (a = c.l ? b.__primetime ? "mspa_s" : "msa_s" : b.__primetime ? "msp_s" :
                "ms_s"), c.G = 1);
        c.f && (g[e + "segmentNum"] = c.m, g[e + "segment"] = c.f, 0 < c.B && (g[e +
            "segmentLength"] = c.B), c.A && 0 < c.a && (g[e + "segmentView"] = !0));
        !c.Q && c.complete && (g[e + "complete"] = !0, c.S = 1);
        0 < c.p && (g[e + "milestone"] = c.p);
        0 < c.q && (g[e + "offsetMilestone"] = c.q);
        if (k)
            for (h in g) Object.prototype[h] || (k += ",contextData." + h);
        l = g["a.contentType"];
        d.pe = a;
        d.pev3 = l;
        var q, s;
        if (b.contextDataMapping)
            for (h in d.events2 || (d.events2 = ""), k && (k += ",events"), b.contextDataMapping)
                if (!Object.prototype[h]) {
                    a = h.length > e.length && h.substring(0, e.length) == e ? h.substring(e.length) :
                        "";
                    l = b.contextDataMapping[h];
                    if ("string" == typeof l)
                        for (q = l.split(","), s = 0; s < q.length; s++) l = q[s],
                            "a.contentType" == h ? (k && (k += "," + l), d[l] = g[h]) : "view" == a ||
                                "segmentView" == a || "clicked" == a || "complete" == a || "timePlayed" ==
                                a || "CPM" == a ? (f && (f += "," + l), "timePlayed" == a || "CPM" == a ?
                                    g[h] && (d.events2 += (d.events2 ? "," : "") + l + "=" + g[h]) : g[h] &&
                                    (d.events2 += (d.events2 ? "," : "") + l)) : "segment" == a && g[h +
                                        "Num"] ? (k && (k += "," + l), d[l] = g[h + "Num"] + ":" + g[h]) : (k &&
                                            (k += "," + l), d[l] = g[h]);
                    else if ("milestones" == a || "offsetMilestones" == a) h = h.substring(0,
                        h.length - 1), g[h] && b.contextDataMapping[h + "s"][g[h]] && (f && (f +=
                            "," + b.contextDataMapping[h + "s"][g[h]]), d.events2 += (d.events2 ?
                                "," : "") + b.contextDataMapping[h + "s"][g[h]]);
                    g[h] && (g[h] = 0);
                    "segment" == a && g[h + "Num"] && (g[h + "Num"] = 0)
                }
        d.linkTrackVars = k;
        d.linkTrackEvents = f
    };
    b.i = function (d, c, e, k, f) {
        var a = {},
            l = (new Date).getTime() / 1E3,
            g, h, q = b.trackVars,
            s = b.trackEvents,
            t = b.trackSeconds,
            u = b.trackMilestones,
            v = b.trackOffsetMilestones,
            w = b.segmentByMilestones,
            x = b.segmentByOffsetMilestones,
            p, n, r = 1,
            m = {},
            y;
        b.channel || (b.channel = b.s.w.location.hostname);
        if (a = d && b.list && b.list[d] ? b.list[d] : 0)
            if (a.l && (t = b.adTrackSeconds, u = b.adTrackMilestones, v = b.adTrackOffsetMilestones,
                w = b.adSegmentByMilestones, x = b.adSegmentByOffsetMilestones), 0 > e &&
                (e = 1 == a.k && 0 < a.u ? l - a.u + a.c : a.c), 0 < a.length && (e = e <
                    a.length ? e : a.length), 0 > e && (e = 0), a.offset = e, 0 < a.length &&
                (a.e = a.offset / a.length * 100, a.e = 100 < a.e ? 100 : a.e), 0 > a.c &&
                (a.c = e), y = a.D, m.name = d, m.ad = a.l, m.length = a.length, m.openTime =
                new Date, m.openTime.setTime(1E3 * a.timestamp), m.offset = a.offset, m.percent =
                a.e, m.playerName = a.playerName, m.mediaEvent = 0 > a.g ? "OPEN" : 1 == c ?
                    "PLAY" : 2 == c ? "STOP" : 3 == c ? "MONITOR" : 4 == c ? "TRACK" : 5 == c ?
                        "COMPLETE" : 7 == c ? "CLICK" : "CLOSE", 2 < c || c != a.k && (2 != c || 1 ==
                            a.k)) {
                f || (k = a.m, f = a.f);
                if (c) {
                    1 == c && (a.c = e);
                    if ((3 >= c || 5 <= c) && 0 <= a.g && (r = !1, q = s = "None", a.g != e)) {
                        h = a.g;
                        h > e && (h = a.c, h > e && (h = e));
                        p = u ? u.split(",") : 0;
                        if (0 < a.length && p && e >= h)
                            for (n = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) &&
                                h / a.length * 100 < g && a.e >= g && (r = !0, n = p.length, m.mediaEvent =
                                    "MILESTONE", a.p = m.milestone = g);
                        if ((p = v ? v.split(",") : 0) && e >= h)
                            for (n = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) &&
                                h < g && e >= g && (r = !0, n = p.length, m.mediaEvent =
                                    "OFFSET_MILESTONE", a.q = m.offsetMilestone = g)
                    }
                    if (a.L || !f) {
                        if (w && u && 0 < a.length) {
                            if (p = u.split(","))
                                for (p.push("100"), n = h = 0; n < p.length; n++)
                                    if (g = p[n] ? parseFloat("" + p[n]) : 0) a.e < g && (k = n + 1, f =
                                        "M:" + h + "-" + g, n = p.length), h = g
                        } else if (x && v && (p = v.split(",")))
                            for (p.push("" + (0 < a.length ? a.length : "E")), n = h = 0; n < p.length; n++)
                                if ((g = p[n] ? parseFloat("" + p[n]) : 0) || "E" == p[n]) {
                                    if (e < g || "E" == p[n]) k = n + 1, f = "O:" + h + "-" + g, n = p.length;
                                    h = g
                                }
                        f && (a.L = !0)
                    } (f || a.f) && f != a.f && (a.F = !0, a.f || (a.m = k, a.f = f), 0 <= a.g &&
                        (r = !0));
                    (2 <= c || 100 <= a.e) && a.c < e && (a.C += e - a.c, a.a += e - a.c);
                    if (2 >= c || 3 == c && !a.k) a.n += (1 == c || 3 == c ? "S" : "E") +
                        Math.floor(e), a.k = 3 == c ? 1 : c;
                    !r && 0 <= a.g && 3 >= c && (t = t ? t : 0) && a.a >= t && (r = !0, m.mediaEvent =
                        "SECONDS");
                    a.u = l;
                    a.c = e
                }
                if (!c || 3 >= c && 100 <= a.e) 2 != a.k && (a.n += "E" + Math.floor(e)),
                    c = 0, q = s = "None", m.mediaEvent = "CLOSE";
                7 == c && (r = m.clicked = a.r = !0);
                if (5 == c || b.completeByCloseOffset && (!c || 100 <= a.e) && 0 < a.length &&
                    e >= a.length - b.completeCloseOffsetThreshold) r = m.complete = a.complete = !
                        0;
                l = m.mediaEvent;
                "MILESTONE" == l ? l += "_" + m.milestone : "OFFSET_MILESTONE" == l && (l +=
                    "_" + m.offsetMilestone);
                a.I[l] ? m.eventFirstTime = !1 : (m.eventFirstTime = !0, a.I[l] = 1);
                m.event = m.mediaEvent;
                m.timePlayed = a.C;
                m.segmentNum = a.m;
                m.segment = a.f;
                m.segmentLength = a.B;
                b.monitor && 4 != c && b.monitor(b.s, m);
                b.Heartbeat && b.Heartbeat.enabled && 0 <= a.g && (r = !1);
                0 == c && b.M(d);
                r && a.D == y && (d = {
                    contextData: {}
                }, d.linkTrackVars = q, d.linkTrackEvents = s, d.linkTrackVars || (d.linkTrackVars =
                    ""), d.linkTrackEvents || (d.linkTrackEvents = ""), b.P(d, a), d.linkTrackVars ||
                    (d["!linkTrackVars"] = 1), d.linkTrackEvents || (d["!linkTrackEvents"] =
                        1), b.s.track(d), a.F ? (a.m = k, a.f = f, a.A = !0, a.F = !1) : 0 < a.a &&
                            (a.A = !1), a.n = "", a.p = a.q = 0, a.a -= Math.floor(a.a), a.g = e, a.D++
                )
            }
        return a
    };
    b.O = function (d, c, e, k, f) {
        var a = 0;
        if (d && (!b.autoTrackMediaLengthRequired || c && 0 < c)) {
            if (b.list && b.list[d]) a = 1;
            else if (1 == e || 3 == e) b.open(d, c, "HTML5 Video", f), a = 1;
            a && b.i(d, e, k, -1, 0)
        }
    };
    b.attach = function (d) {
        var c, e, k;
        d && d.tagName && "VIDEO" == d.tagName.toUpperCase() && (b.o || (b.o =
            function (c, a, d) {
                var e, h;
                b.autoTrack && (e = c.currentSrc, (h = c.duration) || (h = -1), 0 > d &&
                    (d = c.currentTime), b.O(e, h, a, d, c))
            }), c = function () {
                b.o(d, 1, -1)
            }, e = function () {
                b.o(d, 1, -1)
            }, b.j(d, "play", c), b.j(d, "pause", e), b.j(d, "seeking", e), b.j(d,
                "seeked", c), b.j(d, "ended", function () {
                    b.o(d, 0, -1)
                }), b.j(d, "timeupdate", c), k = function () {
                    d.paused || d.ended || d.seeking || b.o(d, 3, -1);
                    setTimeout(k, 1E3)
                }, k())
    };
    b.j = function (b, c, e) {
        b.attachEvent ? b.attachEvent("on" + c, e) : b.addEventListener && b.addEventListener(
            c, e, !1)
    };
    void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1);
    void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold =
        1);
    b.Heartbeat = {};
    b.N = function () {
        var d, c;
        if (b.autoTrack && (d = b.s.d.getElementsByTagName("VIDEO")))
            for (c = 0; c < d.length; c++) b.attach(d[c])
    };
    b.j(q, "load", b.N)
}
/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f) {
    function g(a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(","))))
            for (n = 0; n < b.length && (c = b[n++]);)
                if (-1 < a.indexOf(c)) return null;
        p = 1;
        return a
    }

    function q(a, d, b, c, e) {
        var g, h;
        if (a.dataset && (h = a.dataset[d])) g = h;
        else if (a.getAttribute)
            if (h = a.getAttribute("data-" + b)) g = h;
            else if (h = a.getAttribute(b)) g = h;
        if (!g && f.useForcedLinkTracking && e && (g = "", d = a.onclick ? "" + a.onclick :
            "")) {
            b = d.indexOf(c);
            var l, k;
            if (0 <= b) {
                for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b));) b++;
                if (b < d.length) {
                    h = b;
                    for (l = k = 0; h < d.length && (";" != d.charAt(h) || l);) l ? d.charAt(h) !=
                        l || k ? k = "\\" == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h), '"' !=
                            l && "'" != l && (l = 0)), h++;
                    if (d = d.substring(b, h)) a.e = new Function("s", "var e;try{s.w." + c +
                        "=" + d + "}catch(e){}"), a.e(f)
                }
            }
        }
        return g || e && f.w[c]
    }

    function r(a, d, b) {
        var c;
        return (c = e[d](a, b)) && (p ? (p = 0, c) : g(k(c), e[d + "Exclusions"]))
    }

    function s(a, d, b) {
        var c;
        if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) &&
            t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a ||
                b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (
                    c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() &&
                    (c = a.getAttribute("src") || a.src) && (b.s = c)), (c = a.childNodes) &&
                c.length))
            for (a = 0; a < c.length; a++) s(c[a], d, b)
    }

    function k(a) {
        if (null == a || void 0 == a) return a;
        try {
            return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r   ᠎ -    　﻿] + ", "
				mg "), "
				").replace(RegExp(" [\\s\\ n\\ f\\ r\\ t\ t - \r  ᠎  -     　﻿] + $ ", "
				mg "), "
				").replace(RegExp(" [\\s\\ n\\ f\\ r\\ t\ t - \r  ᠎  -     　﻿] {
					1,
				}
				", "
				mg "), "
				").substring(0, 254)
			} catch (d) {}
                    
                r e = this;
		e.s = f;
		var m = window;
		m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
		e._il = m.s_c_ il;
    e._in = m.s_c_in;
    e._il[e._in] = e;
    m.s_c_in++;
    e._c = "s_m";
    e.c = {};
    var p = 0,
    	t = {
    		SCRIPT: 1,
    		STYLE: 1,
    		LINK: 1,
    		CANVAS: 1
    	};
        ._g = function() {
            ar a, d, b, c = f.contextData,
            e = f.linkObject;
            a = f.pageName || f.pageURL) && (d = r(e, "link", f.linkName)) && (b = r(e,
            "region")) && (c["a.activitymap.page"] = a.substring(0, 255), c[
        	"a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, c[
    		"a.activityma p.region"] = 127 < b.length ? b.substring(0, 127) : b, c[
        	"a.activitymap.pageIDType"] = f.pageName ? 1 : 0)
            
        .link = function(a, d) {
            ar b;
                f (d) b = g(k(d), e.linkExclusions);
                lse if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
                var c, f;
    		(f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [],
    			b = { 
        			a: void 0,
        			t: void 0,
        			s: void 0
            	}), (f = g(k(c.join("")))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s :
            	void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() :
                "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = g(k(a.value)) :
                    IMAGE" == c && a.src && (f = g(k(a.src)))));
                    = f
                    
                turn b
                    
                        egion = function(a) {
                            r (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode);) {
            if (d = q(a, b, b, b)) return d;
        	if ("BODY" == a.nodeName) return "BODY"
        }
    }
     
         End ActivityMap Module */
            
            ============ DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============
        
    ppMeasurement for JavaScript version: 1.7.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
 unction AppMeasurement() {
		var a = this;
	a.version = "1.7.0";
	var k = window;
	k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
	a._il = k.s_c_il;
	a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var q = k.AppMeasurement.Jb;
    q || (q = null);
    var r = k,
    	n, t;
    try {
    	for (n = r.parent, t = r.location; n && n.location && t && "" + n.location !=
    		"" + t && r.location && "" + n.location != "" + r.location && n.location.host ==
    		t.host;) r = n, n = r.parent
    } catch (u) {}
        .yb = function(a) {
    	try {
        	console.log(a)
             catch (b) {}
            
    a.Ha = functi on(a) {
    	return "" + pa rseInt(a) == "" + a
        ;
            replace = function(a, b, d) {
        return !a ||  0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = func tion(c) {
        var b, d;
    	if (!c) return c;
    	c = encodeURICompon ent(c);
        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) &&
    		(c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
    	return c 
        ;
        .unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
            ry {
        	return decodeURIComponent(c)
    	} catch (b) {}
    	return unescape(c) 
        ;
        .pb = function() {
        var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
        	d; 
        b || (b = a.cookieDomainPeriods);
    	if (c && !a.cookieDomain && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) :
    			2, b = 2 < b  ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
        	for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
            
        return a.cookieDomain
        ;
            _r = a.cookieRead = function(c) {
             = a.escape(c);
            ar b = " " + a.d.cookie,
        	d = b.indexOf(" " + c + "="),
        	f = 0 > d ? d : b.indexOf(";", d);
    	c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length :
    		f)); 
        return "[[B]]" != c ? c : ""
        ;
            c_w = a.cookieWrite = function(c, b, d) {
            ar f = a.pb(),
        	e = a.cookieLifetime,
            g;
        b = "" + b;
    	e = e ? ("" + e).toUpperCase() : "";
    	d && "SESSION" != e && "NONE" ! = e && ((g = "" != b ? parseInt(e ? e : 0) :
        	-60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d =
            new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
            eturn c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" !=
        	b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() +
        	";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
        ;
            K = [];
                ha = function(c, b, d) {
        if (a.Aa) return 0;
            .maxDelay || (a.maxDelay = 250);
                ar f = 0,
    		e = (new Date).getTime() + a.maxDelay,
    		g = a.d.visibilityState,
    		m = ["webkitv isibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
        	if (!a.ia)
            	for (a.ia = 1, d = 0; d < m.length; d++) a.d.addEventListener(m[d],
            		function() {
            			var b = a.d.visibilityState;
        				b || (b = a.d.webkitVisibilityState);
        				"visible" == b && (a.ia = 0, a.delayReady())
            		});
                 = 1;
                    = 0 
                        se d || a.p("_d") && (f = 1);
                         (a.K.push({
                        c,
                     b,
            t: e
            ), a.ia || setTimeout(a.delayReady, a.maxDelay));
        return f
        ;
            delayReady = function() {
            ar c = (new Date).getTime(),
            b = 0,
        	d;
        for (a.p("_d") ? b = 1 : a.va(); 0 < a.K.length;) {
    		d = a.K.shift();
    		if (b && !d.t && d.t  > c) {
        		a.K.unshift(d);
            	setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
            	break
        	}
            a.Aa = 1;
            a[d.m].apply(a, d.a);
                .Aa = 0
                
                
            setAccount = a.sa = function(c) {
            ar b, d;
            f (!a.ha("setAccount", arguments))
            if (a.account = c, a.allAccounts)
        		for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(),
    				d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(
    				b[d]); 
        	else a.allAccounts = c.split(",")
        ;
            foreachVar = function(c, b) {
                r d, f, e, g, m = "";
                     f = "";
                        (a.lightProfileID) d = a.O, (m = a.lightTrackVars) && (m = "," + m + "," +
            a.ma.join(",") + ",");
    	else {
    		d = a.g; 
        	if (a.pe || a.linkType) m = a.linkTrackVars, f = a.linkTrackEvents, a.pe &&
        		(e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (m =
        			a[e].Hb, f = a[e].Gb));
            m && (m = "," + m + "," + a.G.join(",") + ",");
        	f && m && (m += ",events,")
            
             && (b = "," + b + ",");
                r (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!m || 0 <= m.indexOf(
                    " + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
            
            r = function(c, b, d, f, e) {
        var g = "",
        	m, p, k, w, n = 0;
        "contextData" == c && (c = "c");
            f (b) {
    		for (m in b)
    			if (!(Objec t.prototype[m] || e && m.substring(0, e.length) != e) && b[m] &&
        			(!d || 0 <= d.indexOf("," + (f ? f + "." : "") + m + ","))) {
            		k = !1;
        			if (n)
        				for (p = 0; p < n.length; p++) m.substring(0, n[p].length) == n[p] && (
            				k = !0);
                	if (!k && ("" == g && (g += "&" + c + "."), p = b[m], e && (m = m.substring(
                    		e.length)), 0 < m.length))
                    	if (k = m.indexOf("."), 0 < k) p = m.substring(0, k), k = (e ? e : "") +
                    		p + ".", n || (n = []), n.push(k), g += a.r(p, b, d, f, k);
                        else if ("boolean" == typeof p && (p = p ? "true" : "false"), p) {
                            f ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (
                    		k = m.substring(0, 4), w = m.substring(4), m) {
                        case "transactionID":
                        		m = "xact";
                            	break;
                        	case "channel":
                            		m = "ch";
                                	break;
                                    case "campaign":
                                        m = "v0";
                                        break;
                                    default:
                                        a.Ha(w) && ("prop" == k ? m = "c" + w : "eVar" == k ? m = "v" + w :
                                        	"list" == k ? m = "l" + w : "hier" == k && (m = "h" + w, p = p.substring(
                                    			0, 255)))
                                        
                                        += "&" + a.escape(m) + "=" + a.escape(p)
                                    
                                        
                                             g && (g += "&." + c)
                                                
                                rn g
                            
                        ePostbacks = 0;
                b = function() {
            r c = "",
        	b, d, f, e, g, m, p, k, n = "",
        	r = "",
    		s = e = "";
    	if (a.lightProfileID) b = a.O, (n = a.lightTrackVars) && (n = "," + n + "," +
    		a.ma.join("," ) + ",");
        else {
            b = a.g;
            if (a.pe || a.linkType) n = a.linkTrackVars, r = a.linkTrackEvents, a.pe &&
            	(e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n =
        			a[e].Hb, r = a[e].Gb));
            n && (n = "," + n + "," + a.G.join(",") + ",");
        	r && (r = "," + r + ",", n && (n += ",events,"));
            a.events2 && (s += ("" != s ? "," : "") + a.events2)
            
                 (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
                    = q;
            if (g = a.visitor.getCustomerIDs())
            	for (d in g) Object.prototype[d] || (f = g[d], e || (e = {}), f.id && (e[
            		d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState));
        	e && (c += a.r("cid", e))
        }
            .AudienceManagement && a.AudienceManagement.isReady() && (c += a.r("d", a.AudienceManagement
            .getEventCallConfigParams()));
                r (d = 0; d < b.length; d++) {
                    = b[d];
            g = a[e];
        	f = e.substring(0, 4);
        	m = e.substring(4);
            !g && "events" == e && s && (g = s, s = "");
        	if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
            	switch (e) {
            		case "supplementalDataID":
            			e = "sdid";
            			break;
            		case "timestamp":
            			e = "ts";
                		break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0,
                    		255));
                        break;
                        ase "pageURLRest":
                    	e = "-g";
                        break;
                        ase "referrer":
                             = "r";
                        break;
                    case "vmk":
                        ase "visitorMigrationKey":
                        e = "vmt";
                    	break;
                        ase "visitorMigrationServer":
                        e = "vmf";
                    	a.ssl && a.visitorMigrationServerSecure && (g = "");
                    	break;
                        ase "visitorMigrationServerSecure":
                        e = "vmf";
                    	!a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                        ase "charSet":
                        e = "ce";
                    	break;
                        ase "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        s && (g += ("" != g ? "," : "") + s);
                        if (r)
                    		for (m = g.split(","), g = "", f = 0; f < m.length; f++) p = m[f], k =
                        		p.indexOf("="), 0 <= k && (p = p.substring(0, k)), k = p.indexOf(":"),
                        		0 <= k && (p = p.substring(0, k)), 0 <= r.indexOf("," + p + ",") && (
                    				g += (g ? "," : "") + m[f]);
                        break;
                        ase "events2":
                             = "";
                                eak;
                                e "contextData":
                                    = a.r("c", a[e], n, e);
                        g = "";
                    	break;
                        ase "lightProfileID":
                        e = "mtp";
                    	break;
                        ase "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                    	break;
                        ase "lightIncrementBy":
                        e = "mti";
                    	a.lightProfileID || (g = "");
                        break;
                        ase "retrieveLightProfiles":
                        e = "mtsr";
                    	break;
                        ase "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.r("mts", a[e], n, e));
                        g = "";
                    	break;
                        efault:
                        a.Ha(m) && ("prop" == f ? e = "c" + m : "eVar" == f ? e = "v" + m :
                    		"list" == f ? e = "l" + m : "hier" == f && (e = "h" + m, g = g.substring(
                        		0, 255)))
                        
                        && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
                    
                        v3" == e && a.e && (c += a.e)
                            
                                 c
                
                 = function(a) {
            ar b = a.tagName;
            f ("undefined" != "" + a.Mb || "undefined" != "" + a.Cb && "HTML" != ("" +
        		a.Cb).toUpperCase()) return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
    	"SHAPE" == b && (b = "");
    	b && (("INPUT " == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b =
        	a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
            
        .Da = function(a) {
        var b = a.href ? a.href : "",
        	d, f, e;
             = b.indexOf(":");
        f = b.indexOf("?");
    	e = b.indexOf("/");
    	b && (0 > d ||  0 <= f && d > f || 0 <= e && d > e) && (f = a.protocol && 1 <
        	a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", d = l.pathname
            .lastIndexOf("/"), b = (f ? f + "//" : "") + (a.host ? a.host : l.host ?
        		l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ?
        		0 : d) + "/" : "") + b);
        return b
        ;
            L = function(c) {
                ar b = a.D(c),
                    , f, e = "",
                         = 0;
        return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" !=
    		b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(
    			a.replace(a .replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""),
        		" ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value :
            	c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g =
            	3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Da(c), e) ? {
        	id: e.substring(0, 100),
            type: g
                : 0
                
                    b = function(c) {
                    r (var b = a.D(c), d = a.L(c); c && !d && "BODY" != b;)
                if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.D(c), d =
                	a.L(c);
            d && "BODY" != b || (c = 0);
    	c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b
    		.indexOf(".tr ackLink(")) && (c = 0);
        return c
            
                b = function() {
        var c, b, d = a.linkObject,
        	f = a.linkType,
            e = a.linkURL,
        	g, m;
    	a.na = 1;
    	d || (a.na = 0 , d = a.clickObject);
        if (d) {
            c = a.D(d);
            for (b = a.L(d); d && !b && "BODY" != c;)
            	if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.D(d), b =
        			a.L(d);
        	b && "BODY" != c || (d = 0);
        	if (d && !a.linkObject) {
            	var p = d.onclick ? "" + d.onclick : "";
            	if (0 <= p.indexOf(".tl(") || 0 <= p.indexOf(".trackLink(")) d = 0
                
                    lse a.na = 1;
            e && d && (e = a.Da(d));
             && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(
                , g)));
                 (!f && e) {
            var n = 0,
        		r = 0,
        		q;
        	if (a.trackDownloadLinks && a.linkDownloadFileTypes)
            	for (p = e.toLowerCase(), g = p.indexOf("?"), m = p.indexOf("#"), 0 <= g ?
        			0 <= m && m < g && (g = m) : g = m, 0 <= g && (p = p.substring(0, g)), g =
            		a.linkDownloadFileTypes.toLowerCase().split(","), m = 0; m < g.length; m++
                )(q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f =
                	"d");
            if (a.trackExternalLinks && !f && (p = e.toLowerCase(), a.Ga(p) && (a.linkInternalFilters ||
                	(a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ?
                    (g = a.linkExternalFilters.toLowerCase().split(","), n = 1) : a.linkInternalFilters &&
                    (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (m = 0; m < g.length; m++) q = g[m], 0 <= p.indexOf(q) && (r = 1);
                     ? n && (f = "e") : n || (f = "e")
            }
                
                    inkObject = d;
                    inkURL = e;
                linkType = f;
                 (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName,
            e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b
        		.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e =
        		"&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") +
        		"&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type :
        			"") + "&ot=" + c + (d ? "&oi=" + d : "")))
        ;
            tb = function() {
                r c = a.na,
                     = a.linkType,
                     = a.linkURL,
                        = a.linkName;
    	b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a
    		.pe = "lnk_"  + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) :
        	"", c = 1);
            .abort && (c = 0);
            f (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var b = {},
        		d = 0,
            	e = a.cookieRead("s_sq"),
                	g = e ? e.split("&") : 0,
        		m, p, k, e = 0;
        	if (g)
            	for (m = 0; m < g.length; m++) p = g[m].split("="), f = a.unescape(p[0]).split(
                		","),
                	p = a.unescape(p[1]), b[p] = f;
                 = a.account.split(",");
                 = {};
            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." ==
                k.substring(0, 14) && (m[k] = a.contextData[k], a.contextData[k] = "");
                     = a.r("c", m) + (a.e ? a.e : "");
                     (c || a.e) {
            	c && !a.e && (e = 1);
            	for (p in b)
            		if (!Object.prototype[p])
                		for (k = 0; k < f.length; k++)
            				for (e && (g = b[p].join(","), g == a.account && (a.e += ("&" != p.charAt(
            						0) ? "&" : "") + p, b[p] = [], d = 1)), m = 0; m < b[p].length; m++)
                				g = b[p][m], g == f[k] && (e && (a.e += "&u=" + a.escape(g) + ("&" !=
                					p.charAt(0) ? "&" : "") + p + "&u=0"), b[p].splice(m, 1), d = 1);
                     || (d = 1);
                         (d) {
                            = "";
                                2;
                                && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), m = 1);
                                    (p in b) !Object.prototype[p] && 0 < m && 0 < b[p].length && (e += (
                		e ? "&" : "") + a.escape(b[p].join(",")) + "=" + a.escape(p), m--);
                	a.cookieWrite("s_sq", e)
                    
                    
                    
                    urn c
                        
                     = function() {
                 (!a.Fb) {
            var c = new Date,
        		b = r.location,
        		d, f, e = f = d = "",
    			g = "",
    			m = "", 
        		k = "1.2",
            	n = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                q = "",
                s = "";
                f (c.setUTCDate && (k = "1.3", (0).toPrecision && (k = "1.5", c = [], c.forEach))) {
                k = "1.6";
                f = 0;
                d = {};
                try {
                	f = new Iterator(d), f.next && (k = "1.7", c.reduce && (k = "1.8", k.trim &&
            			(k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k =
                			"1.8.5")))))
                } catch (t) {}
                
                 = screen.width + "x" + screen.height;
                    = navigator.javaEnabled() ? "Y" : "N";
                         screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                            a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                 = a.w.innerH eight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
            	a.b.addBehavior("#default#homePage"), q = a.b.Lb(b) ? "Y" : "N"
            } catch (u) {}
            try {
            	a.b.addBehavior("#default#clientCaps"), s = a.b.connectionType
            } catch (x) {}
            a.resolution = d;
                .colorDepth = f;
            a.javascriptV ersion = k;
            a.javaEnabled = e;
                .cookiesEnabled = n;
            a.browserWidt h = g;
            a.browserHeight = m;
            a.connectionType = s;
            a.homepage = q;
            a.Fb = 1
            
            
            P = {};
            loadModule = function(c, b) {
            ar d = a.P[c];
            f (!d) {
        	d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](
    			a) : {};
    		a.P[c] = a[c] = d;
    		d.Xa = function() { 
        		return d.ab
        	};
            d.bb = function(b) {
                if (d.ab = b) a[c + "_onLoad"] = b, a.ha(c + "_onLoad", [a, d], 1) || b(
            		a, d)
            }; 
                ry {
            	Object.defineProperty ? Object.defineProperty(d, "onLoad", {
            		get: d.Xa, 
                	set: d.bb
                    ) : d._olc = 1
            } catch (f) {
            	d._olc = 1
                
                    
                    & (a[c + "_onLoad"] = b, a.ha(c + "_onLoad", [a, d], 1) || b(a, d))
                
            p = function(c) {
                r b, d;
            or (b in a.P)
        	if (!Object.prototype[b] && (d = a.P[b]) && (d._olc && d.onLoad && (d._olc =
        			0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
    	return 0
    }; 
        .wb = function() {
        var c = Math.floor(1E13 * Math.random()),
            b = a.visitorSampling,
                = a.visitorSamplingGroup,
        	d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ?
    			"_" + d : ""),
    		f = a.cookieR ead(d);
        if (b) {
            f && (f = parseInt(f));
            if (!f) {
            	if (!a.cookieWrite(d, c)) return 0;
                f = c
            }
        	if (f % 1E4 > v) return 0
            
            eturn 1
                
                 = function(c, b) {
            ar d, f, e, g, m, k;
            or (d = 0; 2 > d; d++)
        	for (f = 0 < d ? a.wa : a.g, e = 0; e < f.length; e++)
        		if (g = f[e], (m = c[g]) || c["!" + g]) {
    				if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
    					for (k in  a[g]) m[k] || (m[k] = a[g][k]);
        			a[g] = m
        		}
            
                a = function(c, b) {
                     d, f, e, g;
                        (d = 0; 2 > d; d++)
                    r (f = 0 < d ? a.wa : a.g, e = 0; e < f.length; e++) g = f[e], c[g] = a[
                g], b || c[g] || (c["!" + g] = 1)
    };
    a.ob = function (a) {
        var b, d, f, e, g, k = 0,
        	p, n = "",
            q = "";
                 (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (p = b
    			.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0,
    			"http://" ==  e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) &&
        		(f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(
            			d), b = b.substring(0, d), 0 <= e.indexOf("google") ? k =
            		",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (k =
        				",p,ei,"), k && p)))) {
            f ((a = p.split("&")) && 1 < a.length) {
            for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <=
                	k.indexOf("," + e.substring(0, d) + ",") ? n += (n ? "&" : "") + e : q +=
                    q ? "&" : "") + e;
                         && q ? p = n + "&" + q : q = ""
                            
            d = 253 - (p.length - q.length) - b.length;
                 = b + (0 < d ? g.substring(0, d) : "") + "?" + p
                    
                    urn a
                
            Wa = function(c) {
            ar b = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
    		if (c)
    			for (b = 0;  b < d.length; b++) a.d.addEventListener(d[b], function() {
        			var b = a.d.visibilityState;
            		b || (b = a.d.webkitVisibilityState);
        			"visible" == b && c()
        		});
            return !1
                 
                    urn !0
                    
                     = !1;
                 = !1;
            eb = function() {
        a.I = !0;
        a.j()
    };
    a.ba = !1;
    a.U = !1;
    a.$a = function (c) {
        a.marketingCloudVisitorID = c;
        a.U = !0;
    	a.j()
    };
    a.ea = !1;
    a.V = !1; 
        .fb = function(c) {
        a.visitorOptedOut = c;
        a.V = !0;
    	a.j()
    };
    a.Y = !1;
    a.R = !1; 
        .Sa = function(c) {
        a.analyticsVisitorID = c;
        a.R = !0;
    	a.j()
    };
    a.aa = !1;
    a.T = !1; 
        .Ua = function(c) {
        a.audienceManagerLocationHint = c;
        a.T = !0;
    	a.j()
    };
    a.Z = !1;
    a.S = !1; 
        .Ta = function(c) {
        a.audienceManagerBlob = c;
        a.S = !0;
    	a.j()
    };
    a.Va = function(c) {
    	a.maxDelay ||  (a.maxDelay = 250);
        return a.p("_d") ? (c && setTimeout(function() {
        	c()
        }, a.maxDelay), !1) : !0
    };
    a.ca = !1; 
        .H = !1;
        .va = function() { 
            .H = !0;
        a.j()
    };
    a.isReadyToTrack = function() {
    	var c = !0,
    		b = a.visitor ,
        	d, f, e;
        a.da || a.I || (a.Wa(a.eb) ? a.I = !0 : a.da = !0);
    	if (a.da && !a.I) return !1;
    	b && b.isAllowed() && (a.b a || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID ||
        	(a.ba = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a,
            	a.$a
            ]), a.marketingCloudVisitorID && (a.U = !0)), a.ea || a.visitorOptedOut ||
        	!b.isOptedOut || (a.ea = !0, a.visitorOptedOut = b.isOptedOut([a, a.fb]),
        		a.visitorOptedOut != q && (a.V = !0)), a.Y || a.analyticsVisitorID || !b
        	.getAnalyticsVisitorID || (a.Y = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID(
            	[a, a.Sa]), a.analyticsVisitorID && (a.R = !0)), a.aa || a.audienceManagerLocationHint ||
                b.getAudienceManagerLocationHint || (a.aa = !0, a.audienceManagerLocationHint =
            	b.getAudienceManagerLocationHint([a, a.Ua]), a.audienceManagerLocationHint &&
            	(a.T = !0)), a.Z || a.audienceManagerBlob || !b.getAudienceManagerBlob ||
                a.Z = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ta]), a
                    	.audienceManagerBlob && (a.S = !0)), c = a.ba && !a.U && !a.marketingCloudVisitorID,
                         = a.Y && !a.R && !a.analyticsVisitorID, d = a.aa && !a.T && !a.audienceManagerLocationHint,
                        f = a.Z && !a.S && !a.audienceManagerBlob, e = a.ea && !a.V, c = c || b ||
                             || f || e ? !1 : !0);
                            ca || a.H || (a.Va(a.va) ? a.H = !0 : a.ca = !0);
            .ca && !a.H && (c = !1);
                turn c
            
            o = q;
                u = 0;
        .callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
    	f.jb = c;
    	f.ib = b;
    	f.gb = d;
    	a.o == q && (a.o = []); 
        a.o.push(f);
        0 == a.u && (a.u = setInterval(a.j, 100))
        ;
        .j = function() {
        var c;
        if (a.isReadyToTrack() && (a.cb(), a.o != q))
        	for (; 0 < a.o.length;) c = a.o.shift(), c.ib.apply(c.jb, c.gb)
        ;
    a.cb = function() {
    	a.u && (clear Interval(a.u), a.u = 0)
        ;
        .Ya = function(c) {
            ar b, d, f = q,
    		e = q;
    	if (!a.isReady ToTrack()) {
        	b = [];
    		if (c != q)
    			for (d in f  = {}, c) f[d] = c[d];
        	e = {};
            a.Qa(e, !0);
        	b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
                eturn !0
            
            eturn !1
            
            qb = function() {
            ar c = a.cookieRead("s_fid"),
            b = "",
        	d = "",
        	f;
    	f = 8;
    	var e = 4; 
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b +=
            	"0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e),
            	d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
        	c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
            eturn c
                
                 = a.track = function(c, b) {
            ar d, f = new Date,
        	e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
        	g = f.getYear(),
        	g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g +
    				1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() +
    			" " + f.getDay() + "  " + f.getTimezoneOffset());
        a.visitor && (a.visitor.getAuthState && (a.authState = a.visitor.getAuthState()), !
            a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID =
            	a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ?
            		!1 : !0)));
                ("_s");
                Ya(c) || (b && a.Q(b), c && (d = {}, a.Qa(d, 0), a.Q(c)), a.wb() && !a.visitorOptedOut &&
        	(a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.qb()), a
            	.Bb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort ||
                	(a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() /
                    		1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f),
        				a.referrer || a.Ra || (a.referrer = r.document.referrer), a.Ra = 1, a.referrer =
        				a.ob(a.referrer), a.p("_g")), a.tb() && !a.abort && (a.ub(), g += a.sb(),
            			a.Ab(e, g), a.p("_t"), a.referrer = ""))), c && a.Q(d, 1));
                abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject =
                    clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe =
                        v1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
                        
                        = a.trackLink = function(c, b, d, f, e) {
                            nkObject = c;
        a.linkType = b;
            .linkName = d;
             && (a.l = c, a.A = e);
    	return a.track(f)
    }; 
        .trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function( ) {
        var c, b;
        for (c = 0; c < a.g.length; c++)
        	if (b = a.g[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) ||
        		"hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" ==
    			b || "events" == b || "eventList" == b || "products" == b ||
    			"productList" == b  || "purchaseID" == b || "transactionID" == b ||
        		"state" == b || "zip" == b || "campaign" == b) a[b] = void 0
        ;
            tagContainerMarker = "";
                b = function(c, b) {
                r d, f = a.trackingServer;
                = "";
                r e = a.dc,
    		g = "sc.",
    		k = a.visitorNamespace;
    	f ? a.tracking ServerSecure && a.ssl && (f = a.trackingServerSecure) : (k ||
        	(k = a.account, f = k.indexOf(","), 0 <= f && (k = k.substring(0, f)), k =
        		k.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() :
        	"d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"),
            	g = ""), f = k + "." + e + "." + g + d);
             = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
             += f + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (e ? "10" :
                1") + "/JS-" + a.version + (a.Eb ? "T" : "") + (a.tagContainerMarker ?
                    "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ?
                        callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
        a.mb(d);
        a.ja()
        ;
            Pa = /{(%?)(.*?)(%?)}/;
                Ib = RegExp(a.Pa.source, "g");
                    nb = function(c) {
        if ("object" == typeof c.dests)
        	for (var b = 0; b < c.dests.length; ++b)
    			if (o = c.dests[b], "string" == typeof o.c && "aa." == o.id.substr(0, 3))
    				for (var d = o.c.match(a.Ib), b = 0; b < d.length; ++b) {
    					match = d[b];
    					var f = ma tch.match(a.Pa),
        					e = "";
            			"%" == f[1] && "timezone_offset" == f[2] ? e = (new Date).getTimezoneOffset() :
                			"%" == f[1] && "timestampz" == f[2] && (e = a.rb());
                    	o.c = o.c.replace(match, a.escape(e))
                        
                        
                             function() {
                        c = new Date,
                            new Date(6E4 * Math.abs(c.getTimezoneOffset()));
                        rn a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(
                    , c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) +
    		":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a
    		.k(2, b.getUT CHours()) + ":" + a.k(2, b.getUTCMinutes())
        ;
            k = function(a, b) {
        return (Array(a + 1).join(0) + b).slice(-a)
            
            ra = {};
                doPostbacks = function(c) {
    	if ("object" == typeof c)
    		if (a.nb(c),  "object" == typeof a.AudienceManagement && "function" ==
        		typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() &&
    			"function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(
    			c);
    		else if ("object" == t ypeof c && "object" == typeof c.dests)
        	for (var b = 0; b < c.dests.length; ++b) dest = c.dests[b], "object" ==
            	typeof dest && "string" == typeof dest.c && "string" == typeof dest.id &&
                "aa." == dest.id.substr(0, 3) && (a.ra[dest.id] = new Image, a.ra[dest.id]
                	.alt = "", a.ra[dest.id].src = dest.c)
                    
            mb = function(c) {
                .i || a.vb();
                    i.push(c);
                    la = a.C();
                        a()
    };
    a.vb = function () {
        a.i = a.xb();
        a.i || (a.i = [])
        ;
        .xb = function() {
    	var c, b;
    	if (a.qa()) { 
        	try {
        		(b = k.localStorage.getItem(a.oa())) && (c = k.JSON.parse(b))
    		} catch (d) {}
    		return c 
        }
        ;
            qa = function() {
                r c = !0;
            .trackOffline  && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
            eturn c
        ;
    a.Ea = function() {
    	var c = 0; 
        a.i && (c = a.i.length);
        a.q && c++;
        return c
    };
    a.ja = function () {
        if (a.q && (a.B && a.B.complete && a.B.F && a.B.ua(), a.q)) return;
        a.Fa = q;
        if (a.pa) a.la > a.N && a.La(a.i), a.ta(500);
        else {
    		var c = a.hb();
    		if (0 < c) a. ta(c);
        	else if (c = a.Ba()) a.q = 1, a.zb(c), a.Db(c)
        }
        ;
        .ta = function(c) {
            .Fa || (c || (c = 0), a.Fa = setTimeout(a.ja, c))
            
            hb = function() {
        var c;
    	if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
    	c = a.C() - a. Ka;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    };
    a.Ba = function () {
        if (0 < a.i.length) return a.i.shift()
        ;
        .zb = function(c) {
        if (a.debugTracking) {
    		var b = "AppMeasurement Debug: " + c;
    		c = c.split(" &");
        	var d;
    		for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
    		a.yb(b) 
        }
            
            Za = function() {
            eturn a.marketingCloudVisitorID || a.analyticsVisitorID
            
            X = !1;
        ar s;
    try {
    	s = JSON.parse ('{"x":"y"}')
         catch (x) {
    	s = null
    }
    s && "y" == s.x ? (a.X = !0, a.W = function(a) {
    	return JSON.parse(a)
        ) : k.$ && k.$.parseJSON ? (a.W = function(a) {
    	return k.$.parseJSON(a)
        , a.X = !0) : a.W = function() {
    	return null
    }; 
        .Db = function(c) {
    	var b, d, f; 
        a.Za() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b =
    			new XMLHttpRequest, "withC redentials" in b ? d = 1 : b = 0), b ||
        	"undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2),
    		b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) &&
    		(a.X ? b.xa =  !0 : b = 0));
        !b && a.Oa && (c = c.substring(0, 2047));
        !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement &&
            a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) &&
            "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] :
            	a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"),
            	d = 3) : b = 0);
        b || (b = new Image, b.alt = "", b.abort || "undefined" === typeof k.InstallTrigger ||
        	(b.abort = function() {
            b.src = q
            }));
                za = function() {
                    ry {
        		b.F && (clearTimeout(b.F), b.F = 0)
            } catch (a) {} 
                
            .onload = b.ua = function() {
        	b.za(); 
            a.lb();
                .fa();
            a.q = 0; 
        	a.ja();
        	if (b.xa) { 
            	b.xa = !1;
            	try {
            		a.doPostbacks(a.W(b.responseText))
            	} catch (c) {}
            }
            ;
                onabort = b.onerror = b.Ca = function() {
                .za();
                    .trackOffline || a.pa) && a.q && a.i.unshift(a.kb);
                .q = 0; 
            a.la > a.N && a.La(a.i);
        	a.fa();
        	a.ta(500) 
            ;
            .onreadystatechange = function() {
            4 == b.readyState && (200 == b.status ? b.ua() : b.Ca())
            ;
            .Ka = a.C();
            f (1 == d || 2 == d) {
        	var e = c.indexOf("?");
        	f = c.substring(0, e); 
            e = c.substring(e + 1);
        	e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
        	1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f),
        		b.send(e))
             else if (b.src = c, 3 == d) {
            if (a.Ia) try {
            	f.removeChild(a.Ia)
            } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                .Ia = a.B
        }
            .F = setTimeout(function() {
                .F && (b.complete ? b.ua() : (a.trackOffline && b.abort && b.abort(), b
            	.Ca())) 
            , 5E3);
            .kb = c;
        a.B = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracki ng && a.J || a.A) a.forcedLinkTrackingTimeout || (
            a.forcedLinkTrackingTimeout = 250), a.ga = setTimeout(a.fa, a.forcedLinkTrackingTimeout)
                
        .lb = function() {
        if (a.qa() && !(a.Ja > a.N)) try {
        	k.localStorage.removeItem(a.oa()), a.Ja = a.C()
        } catch (c) {}
            
    a.La = function(c) {
    	if (a.qa()) { 
        	a.Na();
            try {
        		k.localStor age.setItem(a.oa(), k.JSON.stringify(c)), a.N = a.C()
    		} catch (b) {}
    	} 
        ;
            Na = function() {
            f (a.trackOffline) {
                f (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.i.le ngth > a.offlineLimit;) a.Ba()
        }
    };
    a.forceOffline  = function() {
        a.pa = !0
            
            forceOnline = function() {
        a.pa = !1
    };
    a.oa = function() { 
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    };
    a.C = function() { 
        return (new Date).getTime()
    };
    a.Ga = function (a) {
        a = a.toLowerCase();
    	return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf(
    		"opera:") &&  0 != a.indexOf("javascript:") ? !0 : !1
        ;
    a.setTagContainer = function(c) {
    	var b, d, f; 
        a.Eb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
    			a.Q(d);
    			if (d.lmq) 
        			for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
        		if (d.ml)
        			for (f in d.ml)
            			if (a[f])
                			for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && (
                				"function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (
                    			c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m],
                        c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) :
                            c[f.f].apply(c)));
                                d.tq)
                                     (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                    reak
                        
                            
                til = {
                    Encode: a.escape,
                lDecode: a.unescape,
                okieRead: a.cookieRead,
            ookieWrite: a.cookieWrite,
    	getQueryParam: function(c, b, d) {
    		var f;
        	b || (b = a.pageURL ? a.pageURL : k.location);
        	d || (d = "&");
        	return c && b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(
        		f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f +
        		d.length + c.length +  1), f = b.indexOf(d), 0 <= f && (b = b.substring(
            	0, f)), 0 < b.length))) ? a.unescape(b) : ""
            
            
            G =
                upplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData"
                    plit(" ");
                         = a.G.concat(
        "purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt"
    	.split(" "));
    a.ma =
        "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy"
            .split(" ");
    a.O = a.ma.slice(0);
        .wa =
            "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks AudienceManagement"
    	.split(" ");
        or (n = 0; 250 >= n; n++) 76 > n && (a.g.push("prop" + n), a.O.push("prop" +
            n)), a.g.push("eVar" + n), a.O.push("eVar" + n), 6 > n && a.g.push("hier" +
    	n), 4 > n && a.g.push("list" + n);
    n =
        "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest"
            .split(" ");
    a.g = a.g.concat(n);
        .G = a.G.concat(n);
            .ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
        .contextData = {};
            .offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Ka = 0;
    a.la = 0;
    a.N = 0;
    a.Ja = 0;
    a.linkDownloadFileTypes =
    	"exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
    	if (a.Oa = !1, navigator) {
    		var y = navigator.userAgent;
        	if ("Microsoft Internet Explorer" == navigator.appName || 0 <= y.indexOf(
    				"MSIE ") || 0 <= y.indexOf("Trident/") && 0 <= y.indexOf("Windows NT 6"))
    			a.Oa = !0
    	}
         catch (z) {}
            fa = function() {
            .ga && (k.clearTimeout(a.ga), a.ga = q);
                 && a.J && a.l.dispatchEvent(a.J);
                A && ("function" == typeof a.A ? a.A() : a.l && a.l.href && (a.d.location =
        	a.l.href));
    	a.l = a.J =  a.A = 0
    }; 
        .Ma = function() {
        a.b = a.d.body;
        a.b ? (a.v = function(c) {
            	var b, d, f, e, g;
        		if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
    				if (a.ya)
    					if (a.useF orcedLinkTracking) a.b.removeEventListener("click", a.v, !1);
        				else {
        					a.b.removeEventL istener("click", a.v, !0);
            			a.ya = a.useForcedLinkTracking = 0;
            			return
                	} else a.useForcedLinkTracking = 0;
                    .clickObject = c.srcElement ? c.srcElement : c.target;
                    ry {
                        f (!a.clickObject || a.M && a.M == a.clickObject || !(a.clickObject.tagName ||
                        	a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject =
                        0;
                    else {
                		var m = a.M = a.clickObject;
                		a.ka && (clearTimeout(a.ka), a.ka = 0);
                    	a.ka = setTimeout(function() {
                        a.M == m && (a.M = 0)
                            }, 1E4);
                    	f = a.Ea();
                        a.track();
                        if (f < a.Ea() && a.useForcedLinkTracking && c.target) {
                        	for (e = c.target; e && e  != a.b && "A" != e.tagName.toUpperCase() &&
                            	"AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                        	if (e && (g = e.href, a.Ga(g) || (g = 0), d = e.target, c.target.dispatchEvent &&
                        			g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name &&
                        				d == k.name))) {
                        		try {
                            		b = a.d.createEvent("MouseEvents")
                                } catch (n) {
                            		b = new k.MouseEvent
                                
                                     (b) {
                                	try {
                                    	b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail,
                                			c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey,
                                    		c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                	} catch (q) {
                                		b = 0
                                    }
                                         && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation &&
                                            .stopImmediatePropagation(), c.preventDefault(), a.l = c.target,
                                            .J = b)
                                    
                                        
                                    
                                    
                                        h (r) {
                                        ckObject = 0
                                
                            
                        .b && a.b.attachEvent ? a.b.attachEvent("onclick", a.v) : a.b && a.b.addEventListener &&
                    vigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent ||
                0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.ya =
                    , a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.v, !0)),
                .b.addEventListener("click", a.v, !1))) : setTimeout(a.Ma, 30)
            
        Ma();
            loadModule("ActivityMap")
                
                    
                tion s_gi(a) {
    var k, q = window.s_c_il,
    	r, n, t = a.split(","),
    	u, s, x = 0;
	if (q)
			for (r = 0; !x && r < q.length;) {
			k = q[r];
    		if ("s_c" == k._c && (k.account || k.oun))
        		if (k.account && k.account == a) x = 1;
        		else
    				for (n = k.account ? k.account : k.oun, n = k.allAccounts ? k.allAccounts :
        				n.split(","), u = 0; u < t.length; u++)
            			for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
            r++
                
                | (k = new AppMeasurement);
                    tAccount ? k.setAccount(a) : k.sa && k.sa(a);
                        n k
                        
            Measurement.getInstance = s_gi;
        ndow.s_objectID || (window.s_objectID = 0);
    
    unction s_pgicq() {
    var a = window,
		k = a.s_giq,
		q, r, n;
	if (k)
			for (q = 0; q < k.length; q++) r = k[q], n = s_gi(r.oun), n.setAccount(r.un),
			n.setTagContainer(r.tagContainerName);
    a.s_giq = 0
        
        pgicq();
    / spoil tracking if iframe page
         (s_omni.isPageTrackingFlag) {
            omni.t();
    
