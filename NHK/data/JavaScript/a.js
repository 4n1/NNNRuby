var _tc_isFirst = (typeof (_tc_ver) == 'undefined');
var _TC_APPMEASUREMENT_FILENAME = _TC_APPMEASUREMENT_FILENAME ||
    '//www.nhk.or.jp/common/tc/am.js';
var _TC_VIDEOLOG_FILENAME = _TC_VIDEOLOG_FILENAME ||
    '//www.nhk.or.jp/common/tc/va.js';
var _TC_VIDEOLOG_3_FILENAME = _TC_VIDEOLOG_3_FILENAME ||
    '//www.nhk.or.jp/common/tc/va3.js';
var _TC_CUSTOM_EVENT_MIN = 81;
var _TC_CUSTOM_EVENT_MAX = 85;
var _TC_CUSTOM_PROP_MIN = 56;
var _TC_CUSTOM_PROP_MAX = 65;
var _TC_MY_CUSTOM_PROP_MIN = 1;
var _TC_CUSTOM_EVAR_MIN = 56;
var _TC_CUSTOM_EVAR_MAX = 65;
var _TC_MY_CUSTOM_EVAR_MIN = 1;
var _tc_notval = 'not set';
var _tc_aa_notval = 'N/A';
var _tc_cname_m = '_n_blg';
var _tc_cname_e = 'EFSESSIONIDPID';
var _tc_ga_domain_ath = 'nhk.or.jp';
var _tc_mem_period = 60;
var _tc_jsonp_url = 'https://hh.pid.nhk.or.jp/pidh02/http/etlogin.do';
var _tc_jsonp_time = 1000;
var _tc_ver = 'v3.1.0.1';
var _tc_ga_ver = 'v2.0.0.0';
var _tc_aa_ver = 'v1.6.0.0';
var _tc_date;
var _tc_ga_val;
var _tc_mlg;
var _tc_jqPath = 'www.nhk.or.jp/common/jquery/';
var _tc_jqFile1 = 'jquery-1.11.js';
var _tc_jqFile2 = 'jquery-2.1.js';
var _tc_domain;
var _tc_mem;
var _tc_con;
var _tc_eventVars;
var _tc_dList = new Array('nhk.jp', 'nhk.or.jp');
var _tc_info;
var _TC_CUSTOM_VARIABLE_COUNT = 10;
if (_tc_isFirst) {
    _tc_domain = '';
    _tc_mem = new Object();
    _tc_con = new Object();
    _tc_eventVars = new Object();
    try {
        _tc_jqload()
    } catch (e) {
        s_omni = null
    }
}

function _tc_jqload() {
    if (!window.jQuery) {
        var a = '<!--[if lt IE 9]>' + '<script src=\"' + document.location.protocol +
            '//' + _tc_jqPath + _tc_jqFile1 + '\"><\/script>' + '<![endif]-->' +
            '<!--[if gte IE 9]><!-->' + '<script src=\"' + document.location.protocol +
            '//' + _tc_jqPath + _tc_jqFile2 + '\"><\/script>' + '<!--<![endif]-->';
        document.write(a);
        try {
            setTimeout(function () {
                if (!window.jQuery) {
                    setTimeout(arguments.callee, 100)
                } else {
                    _tc_ready()
                }
            }, 100)
        } catch (e) {
            return
        }
    } else {
        _tc_ready()
    }
}

function _tc_ready() {
    try {
        var b = _tc_needJsonp();
        if (b) {
            jQuery.ajax({
                url: _tc_jsonp_url + '?t=' + ("" + new Date().getTime()).substring(0, 11),
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                timeout: _tc_jsonp_time,
                success: function (a) {
                    _tc_sCallback(a)
                },
                error: function (a) { },
                complete: function () {
                    _tc_main()
                }
            })
        } else {
            _tc_main()
        }
    } catch (e) { }
}

function _tc_main() {
    try {
        _tc_init()
    } catch (e) { }
    try {
        _tc_sc_execute();
        _tc_ga_execute()
    } catch (e) { }
}

function _tc_needJsonp() {
    var a = false;
    var b = _tc_GetCookieStr(_tc_cname_e);
    if (b) {
        if (_tc_isExpired(b)) {
            a = true
        } else {
            var c = _tc_GetCookieStr(_tc_cname_m);
            if (!c) {
                a = true
            }
        }
    } else {
        if (!_tc_checkDomain()) {
            a = true
        }
    }
    return a
}

function _tc_sCallback(a) {
    if (!_tc_checkDomain()) {
        var b = _tc_analyzeJsonp(a);
        _tc_deleteCookie();
        if (b.status == '10000') {
            _tc_makeCookie(b)
        }
    }
}

function _tc_checkDomain() {
    var a = false;
    var b = location.hostname + ' ';
    if (b.indexOf(_tc_ga_domain_ath + ' ') !== -1) {
        a = true
    }
    return a
}

function _tc_isExpired(a) {
    var b = _tc_getLimitDate(a);
    if (!b) {
        return true
    }
    var c = new Date();
    if (c.getTime() > b.getTime()) {
        return true
    }
    return false
}

function _tc_analyzeJsonp(a) {
    var b = new Object();
    b.status = a.STATUS;
    if (a.STATUS == "10000") {
        var c = a.MEMBER_ID ? a.MEMBER_ID : "";
        var d = a.MEMBER_TYPE ? a.MEMBER_TYPE : "";
        var e = a.MEMBER_FAMILY_TYPE ? a.MEMBER_FAMILY_TYPE : "";
        if (e == '0') {
            e = '0'
        } else if (e == 'H') {
            e = '1'
        } else if (e == 'K') {
            e = '2'
        } else {
            e = ""
        }
        var f = a.GENDER ? a.GENDER : "";
        if (f == '0') {
            f = '0'
        } else if (f == 'M') {
            f = '1'
        } else if (f == 'F') {
            f = '2'
        } else {
            f = ""
        }
        var g = a.AGE ? a.AGE.toString(16) : "";
        var h = a.JIS_ADDRESS_CODE ? a.JIS_ADDRESS_CODE : "";
        if (h && h.length > 3) {
            h = h.substring(0, 2)
        }
        var i = a.CONTRACT_TYPE ? a.CONTRACT_TYPE : "";
        var j = '';
        j = j + "z=" + c + "&";
        j = j + "y=" + d + "&";
        j = j + "x=" + e + "&";
        j = j + "w=" + g + "&";
        j = j + "v=" + f + "&";
        j = j + "u=" + h + "&";
        j = j + "t=" + i;
        j = j + '';
        b.meminfo = j;
        b.date = a.AUTH_DTIME
    }
    return b
}

function _tc_deleteCookie() {
    if (_tc_GetCookieStr(_tc_cname_m)) {
        _tc_setCookie(_tc_cname_m, "", "", "/", -1, "")
    }
    if (_tc_GetCookieStr(_tc_cname_e)) {
        _tc_setCookie(_tc_cname_e, "", "", "/", -1, "")
    }
}

function _tc_makeCookie(a) {
    if (!a) {
        return
    }
    if (a.meminfo) {
        _tc_setCookie(_tc_cname_m, a.meminfo, "", "/", 0, "")
    }
    if (a.date) {
        _tc_setCookie(_tc_cname_e, a.date, "", "/", 0, "")
    }
}

function _tc_setCookie(a, b, c, d, e, f) {
    if (!a) {
        return
    }
    var g = a + "=" + encodeURIComponent(b);
    if (c) {
        if (c == 1) {
            c = location.hostname.replace(/^[^\.]*/, "")
        }
        g += "; domain=" + c
    }
    if (d) {
        if (d == 1) d = location.pathname;
        g += "; path=" + d
    }
    if (e) {
        var h = new Date().getTime();
        e = new Date(h + (60 * 60 * 24 * 1000 * e));
        e = e.toGMTString();
        g += "; expires=" + e
    }
    if (f && location.protocol == "https:") {
        g += "; secure"
    }
    this.document.cookie = g
}

function _tc_getLimitDate(a) {
    try {
        if (!a || !a.match(/^\d{14}$/)) {
            return
        } else {
            var b = a.substring(0, 4);
            var c = a.substring(4, 6) - 1;
            var d = a.substring(6, 8);
            var f = a.substring(8, 10);
            var g = a.substring(10, 12);
            var h = a.substring(12, 14);
            if (Number(c) >= 0 && Number(c) <= 11 && Number(d) >= 1 && Number(d) <= 31 &&
                Number(f) >= 0 && Number(f) <= 23 && Number(g) >= 0 && Number(g) <= 59 &&
                Number(h) >= 0 && Number(h) <= 59) {
                var i = new Date(b, c, d, f, g, h);
                if (isNaN(i)) {
                    return
                } else if (i.getFullYear() == b && i.getMonth() == c && i.getDate() == d) {
                    i = new Date(i.getTime() + (60 * 1000 * _tc_mem_period));
                    return i
                } else {
                    return
                }
            }
        }
    } catch (e) {
        return
    }
}

function _tc_init() {
    _tc_acquireDomainName();
    _tc_createCustomParam()
}

function _tc_acquireDomainName() {
    var a = location.hostname + ' ';
    for (var i = 0; i < _tc_dList.length; i++) {
        if (a.indexOf(_tc_dList[i] + ' ') !== -1) {
            _tc_domain = _tc_dList[i];
            break
        }
    }
}

function _tc_createCustomParam() {
    _tc_setCurrentTime();
    _tc_info = new _tc_initInfo();
    _tc_setGaString();
    _tc_createMemObject();
    _tc_createConObject();
    _tc_setEventVars()
}

function _tc_setCurrentTime() {
    var a = new Date();
    _tc_date = '' + a.getFullYear() + _tc_zPadding((a.getMonth() + 1), 2) +
        _tc_zPadding(a.getDate(), 2) + _tc_zPadding(a.getHours(), 2) + _tc_zPadding(a
            .getMinutes(), 2) + _tc_zPadding(a.getSeconds(), 2) + _tc_zPadding(a.getMilliseconds(),
                3)
}

function _tc_zPadding(a, b) {
    var c = '';
    for (var i = 0; i < b; i++) {
        c += '0'
    }
    c = (c + a).slice(-b);
    return c
}

function _tc_setGaString() {
    _tc_ga_val = _tc_GetCookieStr('_ga');
    if (!_tc_ga_val) {
        _tc_ga_val = _tc_createRandomStr()
    }
}

function _tc_createMemObject() {
    var a = _tc_GetCookieStr(_tc_cname_m);
    if (a) {
        _tc_mlg = '1';
        _tc_setMemVal(a)
    } else {
        _tc_mlg = '0';
        _tc_setMemNotVal()
    }
}

function _tc_setMemVal(a) {
    var b = a.replace(/\"/g, '');
    var c = _tc_GetCookieVal('z', b);
    _tc_mem.MID = c ? c : _tc_notval;
    var d = _tc_GetCookieVal('y', b);
    _tc_mem.MTP = d ? d : _tc_notval;
    var e = _tc_GetCookieVal('x', b);
    if (!e) {
        _tc_mem.MFT = _tc_notval
    } else {
        _tc_mem.MFT = e
    }
    var f = _tc_GetCookieVal('v', b);
    if (!f) {
        _tc_mem.MGD = _tc_notval
    } else {
        _tc_mem.MGD = f
    }
    var g = _tc_GetCookieVal('u', b);
    _tc_mem.MJC = g ? g : _tc_notval;
    var h = _tc_GetCookieVal('w', b);
    _tc_mem.MAG = h ? h : _tc_notval;
    var i = _tc_GetCookieVal('t', b);
    _tc_mem.CTP = i ? i : _tc_notval
}

function _tc_setMemNotVal() {
    _tc_mem.MID = _tc_notval;
    _tc_mem.MTP = _tc_notval;
    _tc_mem.MFT = _tc_notval;
    _tc_mem.MGD = _tc_notval;
    _tc_mem.MJC = _tc_notval;
    _tc_mem.MAG = _tc_notval;
    _tc_mem.CTP = _tc_notval
}

function _tc_createConObject() {
    if (typeof (_tc_container01) !== 'undefined') {
        _tc_con.c1 = _tc_container01
    } else if (typeof (_ga_container01) !== 'undefined') {
        _tc_con.c1 = _ga_container01
    } else {
        _tc_con.c1 = _tc_notval
    }
    if (typeof (_tc_container02) !== 'undefined') {
        _tc_con.c2 = _tc_container02
    } else if (typeof (_ga_container02) !== 'undefined') {
        _tc_con.c2 = _ga_container02
    } else {
        _tc_con.c2 = _tc_notval
    }
    if (typeof (_tc_container03) !== 'undefined') {
        _tc_con.c3 = _tc_container03
    } else if (typeof (_ga_container03) !== 'undefined') {
        _tc_con.c3 = _ga_container03
    } else {
        _tc_con.c3 = _tc_notval
    }
    if (typeof (_tc_container04) !== 'undefined') {
        _tc_con.c4 = _tc_container04
    } else if (typeof (_ga_container04) !== 'undefined') {
        _tc_con.c4 = _ga_container04
    } else {
        _tc_con.c4 = _tc_notval
    }
    if (typeof (_tc_container05) !== 'undefined') {
        _tc_con.c5 = _tc_container05
    } else if (typeof (_ga_container05) !== 'undefined') {
        _tc_con.c5 = _ga_container05
    } else {
        _tc_con.c5 = _tc_notval
    }
    for (var i = 1; i < _TC_CUSTOM_VARIABLE_COUNT + 1; i++) {
        var a = 'container' + ('00' + i).slice(-2);
        var b = 'c' + i;
        var c = 'ce' + i;
        if ((typeof (_tc_containers) !== 'undefined') && (typeof (_tc_containers[a]) !==
            'undefined')) {
            _tc_con[b] = _tc_containers[a]
        } else if (typeof (_tc_con[b]) == 'undefined') {
            _tc_con[b] = _tc_notval
        }
        _tc_con[c] = _tc_con[b]
    }
}

function _tc_GetCookieStr(a) {
    var b = null;
    var c = a + '=';
    var d = document.cookie;
    var e = d.indexOf(c);
    if (e !== -1) {
        var f = e + c.length;
        var g = d.indexOf(';', f);
        if (g === -1) {
            g = d.length
        }
        b = decodeURIComponent(d.substring(f, g))
    }
    return b
}

function _tc_GetCookieVal(a, b) {
    var c = null;
    var d = a + '=';
    var e = b;
    var f = e.indexOf(d);
    if (f !== -1) {
        var g = f + d.length;
        var h = e.indexOf('&', g);
        if (h === -1) {
            h = e.length
        }
        c = decodeURIComponent(e.substring(g, h))
    }
    return c
}

function _tc_setEventVars() {
    if (typeof (_tc_form_events) != 'undefined') {
        var a = _tc_getValidEvents(_tc_form_events);
        if (typeof (a) != 'undefined' && a instanceof Array && a.length == 2 && a[0] &&
            a[1]) {
            _tc_eventVars.events = a[0]
        }
    }
}

function _tc_ga_execute() {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js',
        'ga');
    ga('create', 'UA-42580963-1', _tc_domain);
    var b = _tc_date + '|' + _tc_ga_val;
    ga('set', 'dimension1', _tc_ver);
    ga('set', 'dimension2', b);
    ga('set', 'dimension3', _tc_mlg);
    ga('set', 'dimension4', _tc_mem.MID);
    ga('set', 'dimension5', _tc_mem.MGD);
    ga('set', 'dimension6', _tc_mem.MAG);
    ga('set', 'dimension7', _tc_mem.MJC);
    ga('set', 'dimension8', _tc_mem.MTP);
    ga('set', 'dimension9', _tc_mem.CTP);
    ga('set', 'dimension10', _tc_mem.MFT);
    ga('set', 'dimension46', _tc_con.c1);
    ga('set', 'dimension47', _tc_con.c2);
    ga('set', 'dimension48', _tc_con.c3);
    ga('set', 'dimension49', _tc_con.c4);
    ga('set', 'dimension50', _tc_con.c5);
    if (_tc_isPageTracking() == true) {
        if (typeof (_tc_identifier) !== 'undefined') {
            ga('send', 'pageview', location.pathname + location.search + '#' +
                _tc_identifier)
        } else if (typeof (_ga_identifier) !== 'undefined') {
            ga('send', 'pageview', location.pathname + location.search + '#' +
                _ga_identifier)
        } else {
            ga('send', 'pageview')
        }
    }
}

function _tc_sc_execute() {
    (function () {
        var c = false;
        var d = document.createElement('script');
        d.type = 'text/javascript';
        d.async = true;
        d.src = _TC_APPMEASUREMENT_FILENAME;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(d, s);
        if ((typeof (_tc_va_3_flg) !== 'undefined') && (_tc_va_3_flg == true)) {
            d.onload = d.onreadystatechange = function () {
                if (!c && (!this.readyState || this.readyState === "loaded" || this.readyState ===
                    "complete")) {
                    c = true;
                    var a = document.createElement('script');
                    a.type = 'text/javascript';
                    a.async = true;
                    a.src = _TC_VIDEOLOG_3_FILENAME;
                    var b = document.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(a, b)
                }
            }
        } else if ((typeof (_tc_va_flg) !== 'undefined') && (_tc_va_flg == true)) {
            d.onload = d.onreadystatechange = function () {
                if (!c && (!this.readyState || this.readyState === "loaded" || this.readyState ===
                    "complete")) {
                    c = true;
                    var a = document.createElement('script');
                    a.type = 'text/javascript';
                    a.async = true;
                    a.src = _TC_VIDEOLOG_FILENAME;
                    var b = document.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(a, b)
                }
            }
        }
    })()
}

function _tc_sc_preFunc(a) {
    if (!a) {
        return
    }
    try {
        a.events = _tc_eventVars.events;
        a.eVar29 = _tc_info.getParentURL();
        a.eVar41 = _tc_mlg;
        a.eVar42 = (_tc_mem.MID == _tc_notval) ? _tc_aa_notval : _tc_mem.MID;
        a.eVar43 = (_tc_mem.MGD == _tc_notval) ? _tc_aa_notval : _tc_mem.MGD;
        a.eVar44 = (_tc_mem.MAG == _tc_notval) ? _tc_aa_notval : _tc_mem.MAG;
        a.eVar45 = (_tc_mem.MJC == _tc_notval) ? _tc_aa_notval : _tc_mem.MJC;
        a.eVar46 = (_tc_mem.MTP == _tc_notval) ? _tc_aa_notval : _tc_mem.MTP;
        a.eVar47 = (_tc_mem.CTP == _tc_notval) ? _tc_aa_notval : _tc_mem.CTP;
        a.eVar48 = (_tc_mem.MFT == _tc_notval) ? _tc_aa_notval : _tc_mem.MFT;
        var b = _tc_date + '|' + _tc_ga_val;
        a.prop34 = b;
        a.prop35 = _tc_ver;
        a.prop38 = _tc_aa_ver;
        a.prop39 = _tc_ga_ver;
        a.prop8 = _tc_info.getCanonicalURL();
        a.prop42 = _tc_info.getSDRver();
        for (var i = 1; i < _TC_CUSTOM_VARIABLE_COUNT + 1; i++) {
            var c = 'prop' + (55 + i);
            var d = 'eVar' + (55 + i);
            var f = 'c' + i;
            var g = 'ce' + i;
            a[c] = (_tc_con[f] == _tc_notval) ? null : _tc_con[f];
            a[d] = (_tc_con[g] == _tc_notval) ? _tc_aa_notval : _tc_con[g]
        }
    } catch (e) { }
}

function _tc_sc_postFunc(a) {
    if (typeof (a) == 'undefined' || !a) {
        return
    }
    if (typeof (a.pageName) == 'undefined' || !a.pageName) {
        return
    }
    var b;
    if (typeof (_tc_identifier) != 'undefined') {
        b = _tc_identifier
    } else if (typeof (_ga_identifier) != 'undefined') {
        b = _ga_identifier
    }
    if (typeof (b) != 'undefined' && b) {
        a.pageName = a.pageName + '#' + b
    }
}

function _tc_onClick(a, b, c) {
    if (!a) {
        return
    }
    a.linkTrackVars = _tc_aa_notval;
    a.linkTrackEvents = _tc_aa_notval;
    for (var i = 1; i < _TC_CUSTOM_VARIABLE_COUNT + 1; i++) {
        var d = 'c' + i;
        var f = 'ce' + i;
        _tc_con[d] = null;
        _tc_con[f] = _tc_notval
    }
    _tc_eventVars.events = '';
    try {
        a.linkTrackVars =
            'eVar4,eVar5,eVar6,eVar7,eVar8,eVar9,eVar12,eVar13,eVar14,eVar15,eVar29,' +
            'eVar39,eVar40,prop12,prop35,prop36,prop37,prop38,prop39,prop42,events,eVar41,eVar42,' +
            'eVar43,eVar44,eVar45,eVar46,eVar47,eVar48,' + _tc_getEvars();
        a.linkTrackEvents = 'event12';
        _tc_eventVars.events = 'event12';
        for (var g in b) {
            try {
                if (g == 'events') {
                    var h = b[g];
                    var j = _tc_getValidEvents(h);
                    if (typeof (j) != 'undefined' && j && j instanceof Array && j.length == 2 &&
                        j[0] && j[1]) {
                        a.linkTrackEvents = a.linkTrackEvents + "," + j[1];
                        _tc_eventVars.events = _tc_eventVars.events + "," + j[0]
                    }
                    continue
                }
                var k = g.substring(0, 4);
                if (k == 'prop') {
                    var l = g.substring(4, g.length);
                    if (isNaN(l)) {
                        continue
                    }
                    var m = parseInt(l);
                    if (m < _TC_CUSTOM_PROP_MIN || _TC_CUSTOM_PROP_MAX < m) {
                        conitnue
                    }
                    var h = b[g];
                    if (typeof (h) == 'undefined' || !h) {
                        continue
                    }
                    a.linkTrackVars = a.linkTrackVars + "," + g;
                    var n = _TC_MY_CUSTOM_PROP_MIN + (m - _TC_CUSTOM_PROP_MIN);
                    _tc_con['c' + n] = h;
                    continue
                }
                if (k == 'eVar') {
                    var l = g.substring(4, g.length);
                    if (isNaN(l)) {
                        continue
                    }
                    var m = parseInt(l);
                    if (m < _TC_CUSTOM_EVAR_MIN || _TC_CUSTOM_EVAR_MAX < m) {
                        conitnue
                    }
                    var h = b[g];
                    if (typeof (h) == 'undefined' || !h) {
                        continue
                    }
                    var o = _TC_MY_CUSTOM_EVAR_MIN + (m - _TC_CUSTOM_EVAR_MIN);
                    _tc_con['ce' + o] = h;
                    continue
                }
            } catch (e) { }
        }
        var p = (c) ? c : _tc_aa_notval;
        a.eVar12 = _tc_getMeasurementId(p);
        a.prop12 = _tc_getMeasurementId(p);
        a.tl(this, 'o', p)
    } catch (e) { }
}

function _tc_topDir(a) {
    return _tc_getMeasurementId(a)
}

function _tc_getMeasurementId(a) {
    var b = null;
    if (typeof (_tc_msid) == 'string' && _tc_msid !== '') {
        var c = '[' + s_omni.getStrInMaxBytes(_tc_msid, 100) + ']'
    } else {
        if (location.pathname.split('/').length > 2) {
            var c = '[' + location.pathname.split('/')[1] + ']'
        } else {
            var c = ""
        }
    }
    b = c + a;
    return b
}

function _tc_getValidEvents(a) {
    var b = new Array();
    if (typeof (a) == 'undefined') {
        return b
    }
    if (!a) {
        return b
    }
    var c = new Array();
    var d = new Array();
    var f = a.split(',');
    var g = f.length;
    for (var i = 0; i < g; ++i) {
        try {
            var h = f[i];
            var j = h.substring(0, 5);
            if (j != 'event') {
                continue
            }
            var k = h.indexOf('=');
            if (k == -1) {
                k = h.length
            }
            var l = h.substring(5, k);
            if (isNaN(l)) {
                continue
            }
            var m = parseInt(l);
            if (m < _TC_CUSTOM_EVENT_MIN || _TC_CUSTOM_EVENT_MAX < m) {
                continue
            }
            if (k != h.length) {
                var n = h.substring(k + 1, h.length);
                if (isNaN(n)) {
                    continue
                }
            }
            d.push(j + l);
            c.push(h)
        } catch (e) { }
    }
    b.push(c.join(','));
    b.push(d.join(','));
    return b
}

function _tc_shareSNS() { }

function _tc_createRandomStr() {
    var b = function () {
        var a;
        a = (Math.floor(((1 + Math.random()) * 10000000000))).toString().substring(1);
        return a
    };
    var c = (b() + b());
    if (c.length > 20) {
        c = c.substring(0, 20)
    }
    c = 'NA' + c;
    return c
}

function _tc_getEvars() {
    var a =
        'eVar56,eVar57,eVar58,eVar59,eVar60,eVar61,eVar62,eVar63,eVar64,eVar65';
    return a
}

function _tc_initInfo() {
    var d = undefined;
    var f = '7.0.0';
    var g;
    new function () {
        try {
            var a = document.getElementsByTagName("link");
            for (var i = 0; i < a.length; i++) {
                if (a[i].rel) {
                    if (a[i].rel.toLowerCase() == "canonical") {
                        d = a[i].href
                    }
                }
            }
        } catch (e) { }
        try {
            try {
                var b = window.parent.location.href;
                if ((typeof (b) == 'undefined') || (b == '')) {
                    b = document.referrer
                }
            } catch (e) {
                var b = document.referrer
            }
            var c = window.location.href;
            if (b == c) {
                g = 'N/A'
            } else {
                g = b
            }
        } catch (e) {
            g = 'ERR'
        }
    };
    this.getCanonicalURL = function () {
        try {
            if (typeof (d) !== 'undefined') {
                return d
            } else {
                return null
            }
        } catch (e) {
            return null
        }
    };
    this.getSDRver = function () {
        try {
            if (typeof (f) !== 'undefined') {
                return f
            } else {
                return null
            }
        } catch (e) {
            return null
        }
    };
    this.getParentURL = function () {
        return g
    }
}

function _tc_domainWhiteListCheck(a) {
    try {
        switch (a) {
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
                return true;
            default:
                return false
        }
    } catch (e) {
        return undefined
    }
}

function _tc_isPageTracking() {
    var a = _tc_info.getParentURL();
    try {
        if (a == 'N/A' || a == 'ERR') {
            return true
        } else {
            var b = a.match(/^[httpsfile]+:\/{2,3}([0-9a-z\.\-:]+?):?[0-9]*?\//i)[1];
            for (var i = 0; i < _tc_dList.length; i++) {
                var c = new RegExp(_tc_dList[i] + "$");
                if (b.match(c) != null) {
                    return false
                }
            }
            return true
        }
    } catch (e) {
        return true
    }
}
