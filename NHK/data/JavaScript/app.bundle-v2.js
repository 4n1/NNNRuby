webpackJsonp([1], [function (e, t, i) {
    (function (e) {
        (function () {
            "use strict";
            var t = function () {
                this.$window = e(window),
                    this.$body = e("body"),
                    this.__REGEX__ = /(imjp\.co\.jp|dev\.news\.git)/,
                    this.__GA__ = "/news/parts16/js/ga.js",
                    this.ABTesting = i(98),
                    this.TestMode = !1,
                    this.TestQuery = "",
                    this.TestReferer = !1,
                    this.RenderingMode = i(16),
                    this.viewport = {
                        desktop: null,
                        mobile: null
                    },
                    this.ScrollPosReferrer = i(103),
                    this.AppsBanner = i(13),
                    this.Header = i(15),
                    this.Footer = i(99),
                    this.HeaderDateTime = i(100),
                    this.TextResizing = i(17),
                    this.textResize = {
                        desktop: null,
                        mobile: null
                    },
                    this.GlobalNav = i(14),
                    this.HeaderFixed = i(101),
                    this.SideFixed = i(105),
                    this.ShareFixed = i(104),
                    this.PageTop = i(102),
                    this.VideoPlayerResize = i(173),
                    this.NewsFlash = i(123),
                    this.HotTrends = i(115),
                    this.SiteInfo = i(143),
                    this.TsunamiInfo = i(149),
                    this.TVNews = i(146),
                    this.JustIn = i(116),
                    this.FreeSpace = i(114),
                    this.RealTimeNews = i(142),
                    this.RealTime = i(136),
                    this.RealTimeWord = i(138),
                    this.RealTimeLink = i(137),
                    this.Live = i(128),
                    this.LiveWord = i(130),
                    this.LiveLink = i(129),
                    this.NewsMain = i(133),
                    this.NewsCloseup = i(120),
                    this.NewsPickup = i(135),
                    this.NewsMovie = i(134),
                    this.NewsGenre = i(124),
                    this.NewsFeature = i(122),
                    this.Special = i(144),
                    this.NewsLocal = i(131),
                    this.NewsEasy = i(121),
                    this.ProgramInfo = i(141),
                    this.NewsBusinessMain = i(119),
                    this.NewsLocalMain = i(132),
                    this.LocalNavList = i(117),
                    this.NewsListItems = i(127),
                    this.MovieListItems = i(118),
                    this.TokushuListItems = i(148),
                    this.SpecialListItems = i(145),
                    this.CameramansEye = i(106),
                    this.TagList = i(147),
                    this.WordListItems = i(152),
                    this.NewsUp = i(139),
                    this.NewsUpListItems = i(140),
                    this.DetailText = i(113),
                    this.DetailMovie = i(110),
                    this.DetailRelated = i(112),
                    this.DetailKeyword = i(108),
                    this.DetailLink = i(109),
                    this.DetailRanking = i(111),
                    this.DetailBackLink = i(107),
                    this.NewsKeywords = i(125),
                    this.NewsLink = i(126),
                    this.NewsMainList = i(18),
                    this.ImagesLoadFailed = i(171),
                    this.ColumnResize_TypeD = i(169),
                    this.ColumnResize_TypeE = i(170),
                    this.LivePlayerResize = i(172),
                    this.Scoopbox = i(167),
                    this.EarthQuake = i(160),
                    this.WeatherDisaster = i(168),
                    this.Banner = i(159),
                    this.SDC = i(165),
                    this.Recommend = i(164),
                    this.RankingMovie = i(163),
                    this.Ranking = i(162),
                    this.NewsMainSide = i(161),
                    this.SaigaiLinks = i(166),
                    this.WeatherOverview = i(150),
                    this.WeatherTV = i(151),
                    this.DELAYTIME = 1e3,
                    this.WEBVIEWMODE = !1,
                    this.ABSOLUTEPATH = !1,
                    this.directoryName = [],
                    this.directoryList = [{
                        title: "新着ニュース一覧", url: "/news/json16/new_001.json", directory: "/news/", query: "?utm_int=news-new_contents_list-items_"
                    }
                        , {
                        title: "社会ニュース一覧", url: "/news/json16/cat01_001.json", directory: "/news/", query: "?utm_int=news-social_contents_list-items_"
                    }
                        , {
                        title: "暮らしニュース一覧", url: "/news/json16/cat02_001.json", directory: "/news/", query: "?utm_int=news-life_contents_list-items_"
                    }
                        , {
                        title: "科学・文化ニュース一覧", url: "/news/json16/cat03_001.json", directory: "/news/", query: "?utm_int=news-culture_contents_list-items_"
                    }
                        , {
                        title: "政治ニュース一覧", url: "/news/json16/cat04_001.json", directory: "/news/", query: "?utm_int=news-politics_contents_list-items_"
                    }
                        , {
                        title: "ビジネスニュース一覧", url: "/news/json16/cat05_001.json", directory: "/news/", query: "?utm_int=news-business_contents_list-items_"
                    }
                        , {
                        title: "国際ニュース一覧", url: "/news/json16/cat06_001.json", directory: "/news/", query: "?utm_int=news-international_contents_list-items_"
                    }
                        , {
                        title: "スポーツニュース一覧", url: "/news/json16/cat07_001.json", directory: "/news/", query: "?utm_int=news-sports_contents_list-items_"
                    }
                        , {
                        title: "気象・災害ニュース一覧", url: "/news/json16/cat08_001.json", directory: "/news/", query: "?utm_int=news-saigai_contents_list-items_"
                    }
                    ];
                var t = i(4);
                t.makeJQueryPlugin(e),
                    this.CheckViewport(),
                    this.Init()
            };
            t.prototype.CheckViewport = function () {
                var e, t, i = this;
                "function" == typeof window.nol_getDeviceType && (e = window.nol_getDeviceType(),
                    "androidtablet" != e[1] && (t = document.createElement("meta"),
                        t.setAttribute("name", "viewport"),
                        "tablet" == e[0] ? ("ipad" == e[1] || "other" == e[1]) && t.setAttribute("content", "width=980,shrink-to-fit=no") : "smart" == e[0] ? "iphone" == e[1] || "ipod" == e[1] ? (t.setAttribute("content", "width=device-width,initial-scale=1,shrink-to-fit=no"),
                            i.viewport.mobile = "width=device-width,initial-scale=1,shrink-to-fit=no") : (t.setAttribute("content", "width=device-width,initial-scale=1"),
                                i.viewport.mobile = "width=device-width,initial-scale=1") : "other" == e[0] && (t.setAttribute("content", "width=980"),
                                    i.viewport.desktop = "width=980"),
                        document.getElementsByTagName("head")[0].appendChild(t)))
            },
                t.prototype.Init = function () {
                    var t = this;
                    e(document).ready(function () {
                        t.__REGEX__.test(window.location.href) && t.DebugMode(t.__GA__),
                            !t.$body.hasClass("tmpl") && t.$body.is(".detail") && "true" === t.GetQueryVariables().app ? (t.WEBVIEWMODE = !0,
                                t.$body.hasClass("newsup-new") ? (t.$body.addClass("mode_apps"),
                                    t.WebViewModeDetail()) : t.DirectoryManager()) : t.$body.is(".detail.tokushu-business, .detail.tokushu-web") && "true" === t.GetQueryVariables().app ? (t.WEBVIEWMODE = !0,
                                        t.$body.addClass("mode_apps"), t.WebViewModeTokushu()) : (t.CheckAppsBanner(), t.DirectoryManager())
                    }
                    )
                },
                t.prototype.CheckReferrer = function () {
                    var e = /(t\.co|twitter\.com|news\.yahoo\.co\.jp|emergency\.news\.yahoo\.co\.jp)/;
                    return e.test(document.referrer)
                },
                t.prototype.DebugMode = function (e) {
                    var t = document.createElement("script");
                    t.async = !0, t.src = e;
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(t, i)
                },
                t.prototype.WebViewModeDetail = function () {
                    var t = this, i = e("#wrapper"), n = e("#main"), o = i[0];
                    n[0];
                    if (e("#nhkheader, #nhkfooter, #header, #footer").empty().remove(),
                        e(".module--news-flash").empty().remove(),
                        e(".share-fixed, .module--hot-trends, #side, #pagetop", o).empty().remove(),
                        n.find(".module").each(function (t) {
                            e(this).not(".module--detail").empty().remove()
                        }
                        ), "true" === t.GetQueryVariables().movie ? new t.DetailMovie(e(".module--detail"), {
                            newsup: t.$body.hasClass("newsup-new")
                        }
                        ) : new t.DetailText(e(".module--detail"), {
                            newsup: t.$body.hasClass("newsup-new")
                        }
                        ), "function" == typeof window.nol_getDeviceType) {
                        var a = window.nol_getDeviceType();
                        "ipad" == a[1] && i.css({
                            "font-size": "1.438em"
                        }
                        )
                    }
                }
                , t.prototype.WebViewModeTokushu = function () {
                    var t = this, i = e("#wrapper"), n = e("#main"), o = i[0], a = n[0];
                    e("#nhkheader, #nhkfooter, #header, #footer").empty().remove(),
                        e(".module--news-flash").empty().remove(),
                        e(".share-fixed, .module--hot-trends, #side, #pagetop", o).empty().remove(),
                        n.find(".module").each(function (t) {
                            e(this).not(".module--detail").empty().remove()
                        }
                        );
                    var s = e(".body_img, .content--journalist_a, .content--journalist_b, .content--journalist_c, .content--journalist_d, .content--journalist_e, .content--journalist_f", a);
                    if (e(".text-overlay", a).each(function (i) {
                        e(this).find("img").css("opacity", 0), new t.ImagesLoadFailed(e(this), {
                            fallback: !0
                        }
                        )
                    }
                    ), e(".module--tmpl", a).find(s).each(function (i) {
                        e(this).find("img").css("opacity", 0), new t.ImagesLoadFailed(e(this))
                    }
                    ), "function" == typeof window.nol_getDeviceType) {
                        var l = window.nol_getDeviceType();
                        "ipad" == l[1] && i.css({
                            "font-size": "1.438em"
                        }
                        )
                    }
                    new t.VideoPlayerResize
                }
                , t.prototype.CheckAppsBanner = function () {
                    var e, t, i, n = this;
                    if ("function" == typeof window.nol_getDeviceType) {
                        if (e = window.nol_getDeviceType(), t = "tablet" == e[0] ? "tablet" : "smart", "ios" == e[3]) i = "iphone";
                        else {
                            if ("android" != e[3]) return;
                            i = "android"
                        }
                        new n.AppsBanner({
                            os: i, device: t
                        }
                        )
                    }
                }
                , t.prototype.DirectoryManager = function () {
                    var e = this;
                    if ("true" === e.GetQueryVariables().movie) {
                        var t = e.$body.attr("class").replace(/\bnews-+/g, "movie-");
                        e.$body.attr("class", t)
                    }
                    e.directoryName = e.$body[0].className.split(" ");
                    for (var i = 0, n = e.directoryName.length;
                        n > i;
                        ++i)switch (e.directoryName[i]) {
                            case "index": e.TestMode = !0, e.TestQuery = "&nnw_opt=navi_", e.baseUIModules(), e.SceneIndex();
                                break;
                            case "list": e.baseUIModules(), e.SceneList();
                                break;
                            case "detail": e.$body.hasClass("tmpl") || e.CheckReferrer() && "smart" == window.nol_getDeviceType()[0] && (e.TestMode = e.$body.hasClass("newsup-new") ? !1 : !0,
                                e.TestQuery = e.TestMode ? "&nnw_opt=navi_detail_" : "",
                                e.TestReferer = e.$body.hasClass("newsup-new") ? !1 : !0),
                                e.baseUIModules(),
                                e.$body.hasClass("tmpl") || ("true" === e.GetQueryVariables().movie ? e.SceneDetailMovie() : e.SceneDetailText());
                                break;
                            case "search": e.ABSOLUTEPATH = !0, e.baseUIModules();
                                break;
                            case "news-new": e.$body.hasClass("list") && e.SceneNewsList(0);
                                break;
                            case "news-social": e.$body.hasClass("list") && e.SceneNewsList(1);
                                break;
                            case "news-weather": e.$body.hasClass("list") && (e.SceneNewsWeather(), e.SceneNewsList(8));
                                break;
                            case "news-politics": e.$body.hasClass("list") && e.SceneNewsList(4);
                                break;
                            case "news-business": e.$body.hasClass("list") && (e.SceneNewsBusiness(), e.SceneNewsList(5));
                                break;
                            case "news-international": e.$body.hasClass("list") && e.SceneNewsList(6);
                                break;
                            case "news-sports": e.$body.hasClass("list") && e.SceneNewsList(7);
                                break;
                            case "news-culture": e.$body.hasClass("list") && e.SceneNewsList(3);
                                break;
                            case "news-life": e.$body.hasClass("list") && e.SceneNewsList(2);
                                break;
                            case "news-local": e.$body.hasClass("list") && e.SceneNewsLocal();
                                break;
                            case "movie-new": e.$body.hasClass("list") && (e.SceneMovie(), e.SceneMovieList());
                                break;
                            case "newsup-new": e.$body.hasClass("list") && e.SceneNewsUpList();
                                break;
                            case "tokushu-new": e.$body.hasClass("list") && e.SceneTokushuList();
                                break;
                            case "tokushu-web": e.$body.hasClass("list") && e.SceneTokushuList("web"), e.$body.hasClass("detail") && e.SceneTokushuDetail("web");
                                break;
                            case "tokushu-business": e.SceneTokushuBusiness(),
                                e.$body.hasClass("list") && e.SceneTokushuList("business"),
                                e.$body.hasClass("detail") && e.SceneTokushuDetail("business");
                                break;
                            case "special-new": e.$body.hasClass("list") && e.SceneSpecialList();
                                break;
                            case "tmpl": e.$body.hasClass("detail") && e.SceneDetailTmpl();
                                break;
                            case "word": e.$body.hasClass("tags") && (e.baseUIModules(), e.SceneWordTags()), e.$body.hasClass("list") && e.SceneWordList();
                                break;
                            case "realtime": e.baseUIModules(), e.SceneRealTime();
                                break;
                            case "live": e.baseUIModules(), e.SceneLive()
                        }
                    e.SendScrollDepth(), e.SetScrollPosReferrer()
                }
                , t.prototype.SendScrollDepth = function () {
                    var t = this;
                    t.$window.on("load", function (t) {
                        e.scrollDepth({
                            percentage: !0, userTiming: !1, pixelDepth: !1, gaGlobal: !1, nonInteraction: !0
                        }
                        )
                    }
                    )
                }
                , t.prototype.SetScrollPosReferrer = function () {
                    var t = this;
                    e("#pagetop").find("a").addClass("no-referrer"), t.$window.on("load", function (e) {
                        var i = new Date;
                        i.setTime(i.getTime() + 18e5), new t.ScrollPosReferrer({
                            selector: "#header a,#footer a,#content-inner a,.module--nav.nav--tab li", expires: i
                        }
                        )
                    }
                    )
                }
                , t.prototype.baseUIModules = function () {
                    var t = this;
                    if (t.WEBVIEWMODE) {
                        var i = e("#wrapper")[0];
                        e("#nhkheader, #nhkfooter, #header, #footer").empty().remove(),
                            e(".module--news-flash").empty().remove(),
                            e(".share-fixed, .module--hot-trends, #pagetop", i).empty().remove(),
                            t.$window.on("load", function (i) {
                                new t.Scoopbox(e(".module_aside--scoopbox"))
                            }
                            )
                    }
                    else new t.ABTesting({
                        key: "__nABTesting", expires: 1, testing: !0
                    }
                    ), new t.Header(e("#header"), {
                        absolute: t.ABSOLUTEPATH, path: "//www3.nhk.or.jp", testing: t.TestMode, queryOption: t.TestQuery
                    }
                    ), new t.Footer(e("#footer"), {
                        absolute: t.ABSOLUTEPATH, path: "//www3.nhk.or.jp", testing: t.TestMode, queryOption: t.TestQuery
                    }
                    ), new t.NewsFlash(e(".module--news-flash"), {
                        timer: 4200, duration: 640, easing: "easeInOutQuart"
                    }
                    ), "smart" == nol_getDeviceType()[0] && new t.RenderingMode({
                        key: "__nRenderingMode", expires: 364, desktopViewport: t.viewport.desktop || "width=980", mobileViewport: t.viewport.mobile || "width=device-width,initial-scale=1,shrink-to-fit=no"
                    }
                    ), new t.GlobalNav(e("#header-gnav")), new t.GlobalNav(e("#footer-gnav")), new t.HeaderDateTime(e(".nav-date")), t.textResize.desktop = new t.TextResizing(e(".header-top").find(".nav-textresizing"), {
                        key: "__nTextResizing", expires: 364, small: "0.88em", medium: "1em", large: "1.125em"
                    }
                    ), t.textResize.mobile = new t.TextResizing(e(".header-bottom").find(".nav-textresizing"), {
                        key: "__nTextResizing", expires: 364, small: "0.88em", medium: "1em", large: "1.125em"
                    }
                    ), t.$window.on("load", function (i) {
                        var n = window.navigator.userAgent.toLowerCase(), o = {
                            Android: new RegExp(/android/i).test(n), AndroidVer: function (e) {
                                var t = e.match(/(android)(\d+(\.\d+)?)/i);
                                return t ? t[2] : null
                            }
                                (n)
                        }
                            ;
                        o.Android && o.AndroidVer <= 3.2 || (new t.HeaderFixed, new t.SideFixed, new t.PageTop), new t.Scoopbox(e(".module_aside--scoopbox")), e(".module--tmpl").find(".column_d").each(function (i) {
                            new t.ColumnResize_TypeD(e(this))
                        }
                        ), e(".module--tmpl").find(".column_e").each(function (i) {
                            new t.ColumnResize_TypeE(e(this))
                        }
                        ), new t.VideoPlayerResize
                    }
                    )
                }
                , t.prototype.SceneIndex = function () {
                    var t = this;
                    t.$window.on("load", function (n) {
                        new t.HotTrends(e(".module--hot-trends"), {
                            testing: t.TestMode
                        }
                        ), new t.SiteInfo(e(".module--site-information")), new t.TsunamiInfo(e(".module--tsunami-information")), new t.TVNews(e(".module--tv-news"), {
                            testing: t.TestMode
                        }
                        ), new t.JustIn(e(".module--just-in"), {
                            testing: t.TestMode
                        }
                        ), new t.FreeSpace(e(".module--free-space"), {
                            testing: t.TestMode
                        }
                        ), new t.RealTimeNews(e(".module--realtime-news"), {
                            testing: t.TestMode
                        }
                        ), new t.NewsMain(e(".index-main"), {
                            title: "主要ニュース", limit: 7, testing: t.TestMode
                        }
                        ), setTimeout(function () {
                            new t.NewsCloseup(e(".module--news-closeup"), {
                                testing: t.TestMode
                            }
                            ), new t.NewsPickup(e(".module--news-pickup"), {
                                template: i(20), link: "/news/pickup_news/", limit: 1
                            }
                            ), new t.NewsMovie(e(".module--news-movie"), {
                                link: "/news/movie.html", limit: 4, testing: t.TestMode
                            }
                            ), new t.NewsGenre(e(".module--news-genre"), {
                                link: "/news/", limit: 6, mobile: "smart" == nol_getDeviceType()[0] ? !0 : !1, testing: t.TestMode
                            }
                            ), new t.NewsUp(e(".module--newsup"), {
                                title: "News Up", link: "/news/netnewsup/", linkText: "News Up一覧を見る", limit: 4, testing: t.TestMode
                            }
                            ), new t.NewsFeature(e(".index-feature"), {
                                title: "特集", link: "/news/tokushu/", linkText: "特集一覧を見る", limit: 4, page: "index", mobileCard: !0, testing: t.TestMode
                            }
                            ), new t.Special(e(".module--special"), {
                                directory: "/news/", link: "/news/special/", limit: 8, page: "index", mobileCard: !0, testing: t.TestMode
                            }
                            ), new t.NewsLocal(e(".module--news-local"), {
                                key: "__nSelectedLocal", expires: 364, link: "/lnews/", limit: 7
                            }
                            ), new t.NewsEasy(e(".module--news-easy"), {
                                link: "/news/easy/", limit: 5
                            }
                            ), new t.ProgramInfo(e(".module--program-info"))
                        }
                            , t.DELAYTIME), new t.EarthQuake(e(".module_aside--earthquake"), {
                                testing: t.TestMode
                            }
                            ), new t.WeatherDisaster(e(".announce-weather")), new t.SDC(e(".announce-sdc")), new t.Recommend(e(".module_aside--recommend")), new t.Ranking(e(".ranking-social"), {
                                url: "/news/json16/twitterrank.json", template: i(8), query: "utm_int=all_side_ranking-social_", "default": 5, limit: 10, images: !0, testing: t.TestMode, queryOption: "&nnw_opt=ranking-social_"
                            }
                            ), new t.Ranking(e(".ranking-access"), {
                                url: "/news/json16/accessranking.json", template: i(6), query: "utm_int=all_side_ranking-access_", "default": 5, limit: 10, images: !0, testing: t.TestMode, queryOption: "&nnw_opt=ranking-access_"
                            }
                            )
                    }
                    )
                }
                , t.prototype.SceneDetailText = function () {
                    var t = this;
                    e(".module_aside--movie-related").remove(), e(".module_aside--movie-ranking").remove(), t.$window.on("load", function (n) {
                        new t.ShareFixed, new t.HotTrends(e(".module--hot-trends"), {
                            testing: t.TestMode, queryOption: "&nnw_opt=tag_detail_"
                        }
                        ), new t.SiteInfo(e(".module--site-information")), new t.TVNews(e(".module--tv-news"), {
                            testing: t.TestMode, queryOption: "&nnw_opt=tv-news_live_detail_"
                        }
                        ), new t.JustIn(e(".module--just-in"), {
                            testing: t.TestMode, queryOption: "&nnw_opt=just-in_detail_"
                        }
                        ), new t.RealTimeNews(e(".module--realtime-news"), {
                            testing: t.TestMode, queryOption: "&nnw_opt=realtime_detail_"
                        }
                        ), new t.DetailText(e(".module--detail"), {
                            newsup: t.$body.hasClass("newsup-new")
                        }
                        ), new t.DetailRelated(e(".module--detail-related"), {
                            query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-related_" : "utm_int=detail_contents_news-related_", testing: t.TestMode
                        }
                        ), new t.DetailKeyword(e(".module--detail-keyword"), {
                            query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-keyword_" : "utm_int=detail_contents_news-keyword_", testing: t.TestMode
                        }
                        ), new t.DetailLink(e(".module--detail-link"), {
                            query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-link_" : "utm_int=detail_contents_news-link_", testing: t.TestMode
                        }
                        ), new t.DetailBackLink(e(".module--footer.back-link", e("#main")[0]), {
                            testing: t.TestMode
                        }
                        ), new t.NewsKeywords(e(".module--news-keyword"), {
                            query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-keyword_" : "utm_int=detail_contents_news-keyword_", testing: !1, mode: "a"
                        }
                        ), new t.NewsLink(e(".module--news-link")), new t.Special(e(".module--special"), {
                            directory: "/news/", link: "/news/special/", limit: 8, page: t.$body.hasClass("newsup-new") ? "newsup-detail" : "detail", mobileCard: !0, testing: t.TestMode, queryOption: "&nnw_opt=special_detail_"
                        }
                        ), t.$body.hasClass("news-business") ? (new t.NewsFeature(e(".detail-feature"), {
                            title: "ビジネス特集", category: "business", link: "/news/business_tokushu/", linkText: "ビジネス特集一覧を見る", limit: 4, page: "detail", mobileCard: !0, testing: t.TestMode, queryOption: "&nnw_opt=tokushu_detail_"
                        }
                        ), new t.Ranking(e(".ranking-business"), {
                            url: "/news/json16/accessranking_05.json", template: i(7), query: "utm_int=all_side_business-ranking_", "default": 5, limit: 10
                        }
                        )) : new t.NewsFeature(e(".detail-feature"), {
                            title: "特集", link: "/news/tokushu/", limit: 4, page: t.$body.hasClass("newsup-new") ? "newsup-detail" : "detail", mobileCard: !0, testing: t.TestMode, queryOption: "&nnw_opt=tokushu_detail_"
                        }
                        ), new t.EarthQuake(e(".module_aside--earthquake"), {
                            testing: t.TestMode, queryOption: "&nnw_opt=jishin_detail_"
                        }
                        ), new t.WeatherDisaster(e(".announce-weather")), new t.SDC(e(".announce-sdc")), t.TestReferer && "b" == e.cookie("__nABTesting") ? (e(".ranking-social").remove(), e(".ranking-access").remove(), new t.DetailRanking(e(".detail-ranking-social"), {
                            title: "ソーシャルランキング", category: "social", url: "/news/json16/twitterrank.json", query: "utm_int=all_side_ranking-social_", "default": 5, limit: 10, images: !0, testing: t.TestMode, queryOption: "&nnw_opt=ranking-social_detail_"
                        }
                        ), new t.DetailRanking(e(".detail-ranking-access"), {
                            title: "アクセスランキング", category: "access", url: "/news/json16/accessranking.json", query: "utm_int=all_side_ranking-access_", "default": 5, limit: 10, images: !0, testing: t.TestMode, queryOption: "&nnw_opt=ranking-access_detail_"
                        }
                        )) : (e(".detail-ranking-social").remove(), e(".detail-ranking-access").remove(), new t.Ranking(e(".ranking-social"), {
                            url: "/news/json16/twitterrank.json", template: i(8), query: "utm_int=all_side_ranking-social_", "default": 5, limit: 10, images: !0, testing: t.TestMode, queryOption: "&nnw_opt=ranking-social_detail_"
                        }
                        ), new t.Ranking(e(".ranking-access"), {
                            url: "/news/json16/accessranking.json", template: i(6), query: "utm_int=all_side_ranking-access_", "default": 5, limit: 10, images: !0, testing: t.TestMode, queryOption: "&nnw_opt=ranking-access_detail_"
                        }
                        )), new t.Banner(e(".module_aside--banner"))
                    }
                    )
                }
                , t.prototype.SceneDetailMovie = function () {
                    var t = this;
                    e(".module_aside--earthquake").remove(),
                        e(".announce-weather").remove(),
                        e(".announce-sdc").remove(),
                        e(".module_aside--scoopbox").remove(),
                        e(".ranking-social").remove(),
                        e(".ranking-access").remove(),
                        e(".detail-ranking-social").remove(),
                        e(".detail-ranking-access").remove(),
                        t.$window.on("load", function (n) {
                            new t.ShareFixed,
                                new t.HotTrends(e(".module--hot-trends")),
                                new t.SiteInfo(e(".module--site-information")),
                                new t.TVNews(e(".module--tv-news")),
                                new t.JustIn(e(".module--just-in")),
                                new t.RealTimeNews(e(".module--realtime-news")),
                                new t.DetailMovie(e(".module--detail"), {
                                    newsup: t.$body.hasClass("newsup-new")
                                }
                                ), new t.DetailRelated(e(".module--detail-related"), {
                                    query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-related_" : "utm_int=detail_contents_news-related_"
                                }
                                ), new t.DetailKeyword(e(".module--detail-keyword"), {
                                    query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-keyword_" : "utm_int=detail_contents_news-keyword_"
                                }
                                ), new t.DetailLink(e(".module--detail-link"), {
                                    query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-link_" : "utm_int=detail_contents_news-link_"
                                }
                                ), new t.NewsKeywords(e(".module--news-keyword"), {
                                    query: t.$body.hasClass("newsup-new") ? "utm_int=netnewsup-detail_contents_news-keyword_" : "utm_int=detail_contents_news-keyword_", testing: !1, mode: "a"
                                }
                                ), new t.NewsLink(e(".module--news-link")), new t.Special(e(".module--special"), {
                                    directory: "/news/", link: "/news/special/", limit: 8, page: t.$body.hasClass("newsup-new") ? "newsup-detail" : "detail", mobileCard: !0
                                }
                                ), t.$body.hasClass("movie-business") ? (new t.NewsFeature(e(".detail-feature"), {
                                    title: "ビジネス特集", category: "business", link: "/news/business_tokushu/", linkText: "ビジネス特集一覧を見る", limit: 4, page: "detail", mobileCard: !0
                                }
                                ), new t.Ranking(e(".ranking-business"), {
                                    url: "/news/json16/accessranking_05.json", template: i(7), query: "utm_int=all_side_business-ranking_", "default": 5, limit: 10
                                }
                                )) : new t.NewsFeature(e(".detail-feature"), {
                                    title: "特集", link: "/news/tokushu/", limit: 4, page: t.$body.hasClass("newsup-new") ? "newsup-detail" : "detail", mobileCard: !0
                                }
                                ), new t.RankingMovie(e(".module_aside--movie-ranking"), {
                                    "default": 10, limit: 20
                                }
                                ), new t.Banner(e(".module_aside--banner"))
                        }
                        )
                }
                , t.prototype.SceneList = function () {
                    var t = this;
                    t.$window.on("load", function (n) {
                        new t.HotTrends(e(".module--hot-trends")), new t.SiteInfo(e(".module--site-information")), new t.TVNews(e(".module--tv-news")),
                            new t.JustIn(e(".module--just-in")), new t.FreeSpace(e(".module--free-space")), new t.RealTimeNews(e(".module--realtime-news")),
                            new t.EarthQuake(e(".module_aside--earthquake")), new t.WeatherDisaster(e(".announce-weather")), new t.SDC(e(".announce-sdc")), new t.Ranking(e(".ranking-social"), {
                            url: "/news/json16/twitterrank.json", template: i(8), query: "utm_int=all_side_ranking-social_", "default": 5, limit: 10, images: !0
                        }
                        ), new t.Ranking(e(".ranking-access"), {
                            url: "/news/json16/accessranking.json", template: i(6), query: "utm_int=all_side_ranking-access_", "default": 5, limit: 10, images: !0
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneNewsList = function (t) {
                    var i = this;
                    i.$window.on("load", function (n) {
                        var o = new Date;
                        o.setTime(o.getTime() + 18e5), new i.NewsListItems(e(".module--list-items"), {
                            key: "news_pl", expires: o, title: i.directoryList[t].title, url: i.directoryList[t].url, directory: i.directoryList[t].directory, query: i.directoryList[t].query
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneMovie = function () {
                    var t = this;
                    t.$window.on("load", function (n) {
                        new t.NewsPickup(e(".module--news-pickup"), {
                            template: i(66), link: "/news/pickup_news/", limit: 1
                        }
                        ), new t.CameramansEye(e(".module--cameramanseye"))
                    }
                    )
                }
                , t.prototype.SceneMovieList = function () {
                    var t = this;
                    t.$window.on("load", function (i) {
                        var n = new Date;
                        n.setTime(n.getTime() + 18e5), new t.MovieListItems(e(".module--list-items"), {
                            key: "news_pl", expires: n, title: "動画ニュース一覧", url: "/news/json16/newmovie_001.json", directory: "/news/", query: "?utm_int=movie-new_contents_list-items_"
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneNewsUpList = function () {
                    var t = this;
                    window.addEventListener("load", function (i) {
                        var n = new Date;
                        n.setTime(n.getTime() + 18e5), new t.NewsUpListItems(e(".newsup-main"), {
                            url: "/news/json16/newsup.json", key: "news_pl", expires: n, directory: "/news/",
                            title: "News Up 注目のニュース一覧", lede: "テレビでは伝えきれない、ネットの話題をいち早く掘り下げます。"
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneNewsBusiness = function () {
                    var t = this;
                    e(".module_aside--marketdata").remove(), window.addEventListener("load", function (n) {
                        new t.NewsBusinessMain(e(".business-main"), {
                            directory: "/news/", title: "ビジネスニュース", limit: 5
                        }
                        ), new t.NewsFeature(e(".business-feature"), {
                            title: "ビジネス特集", category: "business", link: "/news/business_tokushu/", limit: 4
                        }
                        ), new t.Ranking(e(".ranking-business"), {
                            url: "/news/json16/accessranking_05.json", template: i(7), query: "utm_int=all_side_business-ranking_", "default": 5, limit: 10
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneNewsWeather = function () {
                    var t = this;
                    window.addEventListener("load", function (i) {
                        new t.WeatherOverview(e(".module--weather-overview")), new t.WeatherTV(e(".module--weather-tv")), new t.SaigaiLinks(e(".saigai-weather"), {
                            url: "/news/json16/saigai_weather.json", directory: "/weather/", title: "気象情報", category: "weather"
                        }
                        ), new t.SaigaiLinks(e(".saigai-rain"), {
                            url: "/news/json16/saigai_rain.json", directory: "/weather/", title: "雨・気温・風", category: "rain"
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneNewsLocal = function () {
                    var t = this;
                    t.$window.on("load", function (i) {
                        new t.NewsLocalMain(e(".local-main"), {
                            title: "地域のニュース", limit: 10
                        }
                        ), new t.LocalNavList(e(".module--list-nav")), new t.Recommend(e(".module_aside--recommend"))
                    }
                    )
                }
                , t.prototype.SceneTokushuList = function (t) {
                    var n = this;
                    e(".module_aside--marketdata").remove(), n.$window.on("load", function (o) {
                        var a = new Date;
                        switch (a.setTime(a.getTime() + 18e5), t) {
                            case "web": new n.TokushuListItems(e(".tokushu-web-main"), {
                                url: "/news/tokushu/tokushu.xml", key: "news_pl", expires: a, directory: "/tokushu/", title: "WEB特集一覧", category: t, page: 20
                            }
                            );
                                break;
                            case "business": new n.TokushuListItems(e(".tokushu-business-main"), {
                                url: "/news/tokushu/tokushu.xml", key: "news_pl", expires: a, directory: "/tokushu/", title: "ビジネス特集一覧", category: t, page: 20
                            }
                            ), new n.Ranking(e(".ranking-business"), {
                                url: "/news/json16/accessranking_05.json", template: i(7), query: "utm_int=all_side_business-ranking_", "default": 5, limit: 10
                            }
                            );
                                break;
                            default: new n.TokushuListItems(e(".tokushu-main"), {
                                url: "/news/tokushu/tokushu.xml", key: "news_pl", expires: a, directory: "/tokushu/", title: "特集一覧", category: null
                            }
                            )
                        }
                    }
                    )
                }
                , t.prototype.SceneTokushuDetail = function (t) {
                    var n = this;
                    e(".module_aside--marketdata").remove();
                    var o = e(".content--journalist_a, .content--journalist_b, .content--journalist_c, .content--journalist_d, .content--journalist_e, .content--journalist_f");
                    e(".text-overlay").each(function (t) {
                        e(this).find("img").css("opacity", 0), new n.ImagesLoadFailed(e(this), {
                            fallback: !0
                        }
                        )
                    }
                    ), e(".module--tmpl").find(".body_img").each(function (t) {
                        e(this).find("img").css("opacity", 0), new n.ImagesLoadFailed(e(this))
                    }
                    ), e(".module--tmpl").find(o).each(function (t) {
                        e(this).find("img").css("opacity", 0), new n.ImagesLoadFailed(e(this))
                    }
                    ), n.$window.on("load", function (o) {
                        switch (t) {
                            case "web": new n.NewsFeature(e(".web-feature"), {
                                title: "このほかの特集記事", category: "web", link: "/news/web_tokushu/",
                                linkText: "WEB特集一覧を見る", limit: 8, page: "tokushu-detail", mobileCard: !0
                            }
                            );
                                break;
                            case "business": new n.NewsFeature(e(".business-feature"), {
                                title: "このほかの特集記事", category: "business", link: "/news/business_tokushu/",
                                linkText: "ビジネス特集一覧を見る", limit: 8, page: "tokushu-detail", mobileCard: !0
                            }
                            ), new n.Ranking(e(".ranking-business"), {
                                url: "/news/json16/accessranking_05.json", template: i(7), query: "utm_int=all_side_business-ranking_", "default": 5, limit: 10
                            }
                            )
                        }
                    }
                    )
                }
                , t.prototype.SceneTokushuBusiness = function (t) {
                    var i = this;
                    i.$window.on("load", function (t) {
                        new i.NewsMainSide(e(".module_aside--news-main"), {
                            url: "/news/json16/business_top.json", title: "ビジネスニュース", link: "/news/business.html",
                            linkText: "ビジネスニュース一覧を見る", limit: 7
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneSpecialList = function () {
                    var t = this;
                    t.$window.on("load", function (i) {
                        new t.SpecialListItems(e(".special-main"), {
                            url: "/news/json16/specialcontents.json", directory: "/news/", title: "スペシャルコンテンツ一覧"
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneDetailTmpl = function () {
                    var t = this;
                    t.$window.on("load", function (n) {
                        new t.ShareFixed, new t.HotTrends(e(".module--hot-trends")), new t.SiteInfo(e(".module--site-information")),
                            new t.TVNews(e(".module--tv-news")), new t.JustIn(e(".module--just-in")),
                            new t.RealTimeNews(e(".module--realtime-news")), new t.Special(e(".module--special"), {
                            directory: "/news/", link: "/news/special/", limit: 8, page: "detail", mobileCard: !0
                        }
                        ), e(".detail-feature").find(".grid--row").each(function (i) {
                            new t.ColumnResize_TypeE(e(this))
                        }
                        ), e(".detail-feature-movie").find(".grid--row").each(function (i) {
                            new t.ColumnResize_TypeE(e(this))
                        }
                        ), e(".live_player").each(function (i) {
                            new t.LivePlayerResize(e(this))
                        }
                            ), new t.EarthQuake(e(".module_aside--earthquake")), new t.WeatherDisaster(e(".announce-weather")),
                            new t.SDC(e(".announce-sdc")), new t.Ranking(e(".ranking-social"), {
                            url: "/news/json16/twitterrank.json", template: i(8), query: "utm_int=all_side_ranking-social_", "default": 5, limit: 10, images: !0
                        }
                        ), new t.Ranking(e(".ranking-access"), {
                            url: "/news/json16/accessranking.json", template: i(6), query: "utm_int=all_side_ranking-access_", "default": 5, limit: 10, images: !0
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneWordTags = function () {
                    var t = this;
                    t.$window.on("load", function (n) {
                        new t.HotTrends(e(".module--hot-trends")), new t.SiteInfo(e(".module--site-information")),
                            new t.TVNews(e(".module--tv-news")), new t.JustIn(e(".module--just-in")),
                            new t.FreeSpace(e(".module--free-space")), new t.RealTimeNews(e(".module--realtime-news")),
                            new t.TagList(e(".module--tag-list")), new t.EarthQuake(e(".module_aside--earthquake")),
                            new t.WeatherDisaster(e(".announce-weather")), new t.SDC(e(".announce-sdc")), new t.Ranking(e(".ranking-social"), {
                            url: "/news/json16/twitterrank.json", template: i(8), query: "utm_int=all_side_ranking-social_", "default": 5, limit: 10, images: !0
                        }
                        ), new t.Ranking(e(".ranking-access"), {
                            url: "/news/json16/accessranking.json", template: i(6), query: "utm_int=all_side_ranking-access_", "default": 5, limit: 10, images: !0
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneWordList = function () {
                    var t = this;
                    t.$window.on("load", function (i) {
                        var n = new Date;
                        n.setTime(n.getTime() + 18e5), new t.WordListItems(e(".word-result"), {
                            key: "news_pl", expires: n
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneRealTime = function () {
                    var t = this, i = location.pathname.match(".+/(.+?).[a-z]+([?#;].*)?$")[1];
                    t.$window.on("load", function (n) {
                        new t.HotTrends(e(".module--hot-trends")), new t.SiteInfo(e(".module--site-information")),
                            new t.JustIn(e(".module--just-in")), new t.TVNews(e(".module--tv-news")),
                            new t.RealTime(e(".module--realtime"), {
                            url: "/news/realtime/" + i + ".json"
                        }
                        ), new t.RealTimeWord(e(".module--realtime-word"), {
                            url: "/news/realtime/" + i + ".json", query: "?utm_int=realtime_contents_news-related_"
                        }
                        ), new t.RealTimeLink(e(".module--realtime-link"), {
                            url: "/news/realtime/" + i + ".json", query: "?utm_int=realtime_contents_news-link_"
                        }
                        )
                    }
                    )
                }
                , t.prototype.SceneLive = function () {
                    var t = this;
                    t.$window.on("load", function (i) {
                        new t.HotTrends(e(".module--hot-trends")), new t.SiteInfo(e(".module--site-information")),
                            new t.JustIn(e(".module--just-in")), new t.Live(e(".module--live"), {
                            url: "/news/live/live.json"
                        }
                        ), new t.LiveWord(e(".module--live-word"), {
                            url: "/news/live/live.json", query: "?utm_int=live_contents_news-related_"
                        }
                        ), new t.LiveLink(e(".module--live-link"), {
                            url: "/news/live/live.json", query: "?utm_int=live_contents_news-link_"
                        }
                        )
                    }
                    )
                }
                , t.prototype.GetQueryVariables = function () {
                    for (var e = window.location.search, t = [], i = e.slice(1).split("&"), n = i.length, o = "", a = 0;
                        n > a;
                        a++)o = i[a].split("="), t[o[0]] = o[1];
                    return t
                }
                , new t
        }
        ).call(this)
    }
    ).call(t, i(1))
}, , , 
function (e, t) {
        !function () {
            "use strict";
            e.exports = function (e, t) {
                if (Object.keys = Object.keys || function () {
                    var e = Object.prototype.hasOwnProperty, t = !{
                        toString: null
                    }
                        .propertyIsEnumerable("toString"), i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], n = i.length;
                    return function (o) {
                        if ("object" != typeof o && "function" != typeof o || null === o) throw new TypeError("Object.keys called on non-object");
                        var a = [];
                        for (var s in o) e.call(o, s) && a.push(s);
                        if (t) for (var l = 0;
                            n > l;
                            l++)e.call(o, i[l]) && a.push(i[l]);
                        return a
                    }
                }
                    (), !t || "object" != typeof t) return e;
                for (var i = Object.keys(t), n = i.length;
                    n--;
                )e[i[n]] = t[i[n]];
                return e
            }
        }
        ()
    }
, , , 
function (e, t) {e.exports = "<% if (!data) {return;} %><header class=module_aside--header><h2>アクセスランキング</h2></header><section class=module_aside--content><div class=content--items><ol class=\"content--list grid--col-ranking\"><% var __count__ = 1;%><% _.each(data.channel.item, 
function(value,key) {%><% if (!value) {return;} %><% if (__count__ > limit) {return;} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';var __code__ = ('00' + __count__).substr(-3);%><li><a href=\"<%= value.link + __pram__ + data.queryRoot + __code__ + queryOption %>\"><% if (images) {%><% if (__count__ <= 1) {%><% if (value.imgPath != '') {%><figure class=thumb><img class=is-load src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"></figure><dl><dt><i><%= __count__ %></i><dd><%= value.title %></dl><% } else {%><dl class=thumb-none><dt><i><%= __count__ %></i><dd><%= value.title %></dl><% } %><% } else {%><dl><dt><i><%= __count__ %></i><dd><figure class=thumb><img class=is-load src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"></figure><p><%= value.title %></p></dl><% } %><% } else {%><dl><dt><i><%= __count__ %></i><dd><%= value.title %></dl><% } %></a></li><% __count__++ %><% });%></ol></div></section><footer class=\"module_aside--footer button-more\"><p class=button tabindex=0 role=button onclick=\"ga('send', 'event', 'all_side', 'click', 'link_ranking-access-more')\"><i class=\"i-arrow is-down_g\"></i>もっと見る</p></footer>"}, 
function (e, t) {e.exports = "<% if (!data) {return;} %><header class=module_aside--header><h2>ビジネスニュースランキング</h2></header><section class=module_aside--content><div class=content--items><ol class=\"content--list grid--col-ranking\"><% var __count__ = 1;%><% _.each(data.channel.item, 
function(value,key) {%><% if (!value) {return;} %><% if (__count__ > limit) {return;} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';var __code__ = ('00' + __count__).substr(-3);%><li><a href=\"<%= value.link + __pram__ + data.queryRoot + __code__ %>\"><dl><dt><i><%= __count__ %></i><dd><%= value.title %></dl></a></li><% __count__++ %><% });%></ol></div></section><footer class=\"module_aside--footer button-more\"><p class=button tabindex=0 role=button onclick=\"ga('send', 'event', 'all_side', 'click', 'link_business-ranking-more')\"><i class=\"i-arrow is-down_g\"></i>もっと見る</p></footer>";}, 
function (e, t) {e.exports = "<% if (!data) {return;} %><header class=module_aside--header><h2>ソーシャルランキング</h2></header><section class=module_aside--content><div class=content--items><ol class=\"content--list grid--col-ranking\"><% var __count__ = 1;%><% _.each(data.channel.item, 
function(value,key) {%><% if (!value) {return;} %><% if (__count__ > limit) {return;} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';var __code__ = ('00' + __count__).substr(-3);%><li><a href=\"<%= value.link + __pram__ + data.queryRoot + __code__ + queryOption %>\"><% if (images) {%><% if (__count__ <= 1) {%><% if (value.imgPath != '') {%><figure class=thumb><img class=is-load src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"></figure><dl><dt><i><%= __count__ %></i><dd><%= value.title %></dl><% } else {%><dl class=thumb-none><dt><i><%= __count__ %></i><dd><%= value.title %></dl><% } %><% } else {%><dl><dt><i><%= __count__ %></i><dd><figure class=thumb><img class=is-load src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"></figure><p><%= value.title %></p></dl><% } %><% } else {%><dl><dt><i><%= __count__ %></i><dd><%= value.title %></dl><% } %></a></li><% __count__++ %><% });%></ol></div></section><footer class=\"module_aside--footer button-more\"><p class=button tabindex=0 role=button onclick=\"ga('send', 'event', 'all_side', 'click', 'link_ranking-social-more')\"><i class=\"i-arrow is-down_g\"></i>もっと見る</p></footer>"}, 
function (e, t) {e.exports = "<section id=appsbanner><% if(device == 'tablet') {%><div class=\"inner is-tablet\"><% } else {%><div class=inner><% } %><div class=apps-info><a href=\"<%= data.info.store[os] %>\" target=_blank onclick=\"ga('send', 'event', 'all_header', 'click', 'link_app')\"><dl><dt class=apps-artwork><img src=\"<%= data.info.artwork %>\"><% if(data.info.description[device].size != '') {%><dd class=apps-description style=\"font-size: <%= data.info.description[device].size %>\"><%= data.info.description[device].text %><% } else {%><dd class=apps-description><%= data.info.description[device].text %><% } %><dd class=apps-install><i class=i-install><em>インストール</em></i></dl></a></div><nav id=apps-close class=apps-close><i class=i-close></i> <em>閉じる</em></nav></div></div></section>"}, 
function (e, t) {e.exports = '<% var __query__ = \'\';if (!error) {__query__ = "all_header";} else {__query__ = "error_contents";} %><div id=overlay></div><section class=header-top><div class=inner><header><h1 class=header-logo><a class=no-referrer href="<%= path %>/news/?utm_int=<%= __query__ %>_logo_news<%= queryOption %>" title="NHKニュース｜NHK NEWS WEB トップへ移動します"><img src="<%= path %>/news/parts16/images/common/logo.png" srcset="<%= path %>/news/parts16/images/common/logo.svg 1x, <%= path %>/news/parts16/images/common/logo.svg 1.5x, <%= path %>/news/parts16/images/common/logo.svg 2x" alt="NHKニュース｜NHK NEWS WEB"></a></h1><p id=gnav-toggle class=gnav-toggle role=navigation><span><em>メニュー</em><i class="i-arrow is-down_g"></i></span></p></header><nav role=navigation><div class=nav-search role=search><form action=//www2.nhk.or.jp/news/nsearch/query.cgi id=searchform name=searchform><fieldset><input type=hidden name=col value="news"> <input type=hidden value=utf-8 name="charset"> <input type=hidden value=3 name="qi"><div class=input><input id=s name=qt class=searchInput placeholder=ニュースを検索 maxlength="2047"></div><div class=submit><button type=submit class=searchSubmit role=button onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_nsearch\')">検索</button></div></fieldset></form></div><div class=nav-textresizing><dl><dt>文字サイズ<dd><ul><li data-size=small class=btn-small><button type=button role=button onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_txt-min\')">小</button></li><li data-size=medium class="btn-medium is-active"><button type=button role=button disabled onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_txt-mid\')">中</button></li><li data-size=large class=btn-large><button type=button role=button onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_txt-max\')">大</button></li></ul></dl></div></nav><div class=nav-date></div></div></section><section class=header-bottom><nav id=header-gnav class=gnav role=navigation><div class=nav-search role=search><form action=//www2.nhk.or.jp/news/nsearch/query.cgi id=searchform name=searchform><fieldset><input type=hidden name=col value="news"> <input type=hidden value=utf-8 name="charset"> <input type=hidden value=3 name="qi"><div class=input><input id=s name=qt class=searchInput placeholder=ニュースを検索 maxlength="2047"></div><div class=submit><button type=submit class=searchSubmit role=button onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_nsearch\')">検索</button></div></fieldset></form></div><div class=nav-textresizing><dl><dt>文字サイズ変更<dd><ul><li data-size=small class=btn-small><button type=button role=button onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_txt-min\')">小</button></li><li data-size=medium class="btn-medium is-active"><button type=button role=button disabled onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_txt-mid\')">中</button></li><li data-size=large class=btn-large><button type=button role=button onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_txt-max\')">大</button></li></ul></dl></div><div class=gnav-inner><ul class=nav><li><a class="nav-top no-referrer" data-ga=btn_menu-news data-ga-loc=all_header role=tab tabindex=0 href="<%= path %>/news/?utm_int=<%= __query__ %>_menu_news<%= queryOption %>" data-category=news>ニュース<i class=i-toggle></i></a><div class=nav-bottom role=tabpanel><ul class=nav-inner><li data-category=new><a href="<%= path %>/news/catnew.html?utm_int=<%= __query__ %>_menu_news-new<%= queryOption %>">新着</a></li><li data-category=social><a href="<%= path %>/news/cat01.html?utm_int=<%= __query__ %>_menu_news-social<%= queryOption %>">社会</a></li><li data-category=weather><a href="<%= path %>/news/saigai.html?utm_int=<%= __query__ %>_menu_news-saigai<%= queryOption %>">気象・災害</a></li><li data-category=culture><a href="<%= path %>/news/cat03.html?utm_int=<%= __query__ %>_menu_news-culture<%= queryOption %>">科学・文化</a></li><li data-category=politics><a href="<%= path %>/news/cat04.html?utm_int=<%= __query__ %>_menu_news-politics<%= queryOption %>">政治</a></li><li data-category=business><a href="<%= path %>/news/business.html?utm_int=<%= __query__ %>_menu_news-business<%= queryOption %>">ビジネス</a></li><li data-category=international><a href="<%= path %>/news/cat06.html?utm_int=<%= __query__ %>_menu_news-international<%= queryOption %>">国際</a></li><li data-category=sports><a href="<%= path %>/news/cat07.html?utm_int=<%= __query__ %>_menu_news-sports<%= queryOption %>">スポーツ</a></li><li data-category=life><a href="<%= path %>/news/cat02.html?utm_int=<%= __query__ %>_menu_news-life<%= queryOption %>">暮らし</a></li><li data-category=local><a href="<%= path %>/lnews/?utm_int=<%= __query__ %>_menu_news-local<%= queryOption %>" onclick="ga(\'send\', \'event\', \'all_header\', \'click\', \'btn_lnews\')">地域</a></li></ul></div></li><li><a class=nav-top tabindex=0 href="<%= path %>/news/movie.html?utm_int=<%= __query__ %>_menu_movie<%= queryOption %>" data-category=movie>動画</a></li><li><a class=nav-top tabindex=0 href="<%= path %>/news/netnewsup/?utm_int=<%= __query__ %>_menu_netnewsup<%= queryOption %>" data-category=newsup>News Up</a></li><li><a class=nav-top data-ga=btn_menu-tokushu data-ga-loc=all_header role=tab tabindex=0 href="<%= path %>/news/tokushu/?utm_int=<%= __query__ %>_menu_tokushu<%= queryOption %>" data-category=tokushu>特集<i class=i-toggle></i></a><div class=nav-bottom role=tabpanel><ul class=nav-inner><li data-category=new><a href="<%= path %>/news/tokushu/?utm_int=<%= __query__ %>_menu_tokushu-new<%= queryOption %>">新着</a></li><li data-category=web><a href="<%= path %>/news/web_tokushu/?utm_int=<%= __query__ %>_menu_tokushu-web<%= queryOption %>">WEB特集</a></li><li data-category=business><a href="<%= path %>/news/business_tokushu/?utm_int=<%= __query__ %>_menu_tokushu-business<%= queryOption %>">ビジネス特集</a></li></ul></div></li><li><a class=nav-top tabindex=0 href="<%= path %>/news/special/?utm_int=<%= __query__ %>_menu_special<%= queryOption %>" data-category=special>スペシャルコンテンツ</a></li><li class=none-mobile><a class=nav-top tabindex=0 href="<%= path %>/news/easy/?utm_int=<%= __query__ %>_menu_easy<%= queryOption %>" data-category=easy>NEWS WEB EASY</a></li></ul></div><p id=gnav-close class=gnav-close role=navigation><span><i class="i-arrow is-up_g"></i>閉じる</span></p></nav></section>'}, 
function (e, t) {e.exports = '<div class=button--rendering-mode><p class=button tabindex=0 role=button><i class="i-arrow is-right_w"></i><span>スマートフォン版はこちら</span></p></div>'}, 
function (e, t) {e.exports = '<% if (!data) {return;} %><% var __count__ = 0;%><% if (title != \'\') {%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><div class=content--items><ul class="content--list grid--list"><% _.each(data.channel.item, 
function(value,key) {%><% if (__count__ < limit) {%><li><a href="<%= value.link + data.queryRoot + (\'00\' + (__count__+1)).substr(-3) %>"><p><em class=title><%= value.title %></em><% if (value.videoPath) {%><span class=i-items--group><% } %><% if (value.videoPath) {%><i class=i-video>動画</i><% } %><% if (value.videoPath) {%></span><% } %></p></a></li><% __count__++;%><% } %><% });%></ul></div></section><footer class=module--footer><p class=button><a href="/news/catnew.html?utm_int=error_contents_news-new_more"><i class="i-arrow is-right_g"></i><span>新着</span>のニュース一覧を見る</a></p></footer>'}
,
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                a.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            url: "/news/json16/appbanner.json", type: "json", data: null, timeout: 8e3, os: null, device: null
                        }
                        ,
                        this.options = n(this.defaults, e),
                        this.template = o.template(i(9)),
                        this.$appsbanner = null,
                        this.$appsclose = null,
                        this.parsed = null,
                        this.refreshEnabled = !1,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.options.os && e.Get()
                    }, a.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            e.parsed = e.Parse(t), "" != e.parsed.data && e.CookieManager()
                        }
                            , function (e) {
}
                            )
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            return t.refreshEnabled = "true" === e.refreshEnabled ? !0 : !1, {
                                data: e, os: t.options.os, device: t.options.device, refresh: t.refresh
                            }
                        }
                    }, a.prototype.CookieManager = function () {
                        var e = this;
                        e.refreshEnabled ? e.CookieGet(e.parsed.data.refresh.key) || e.Setup() : (e.CookieGet(e.parsed.data["default"].key) || e.Setup(),
                            e.CookieGet(e.parsed.data.refresh.key) && e.CookieRemove(e.parsed.data.refresh.key))
                    }, a.prototype.CookieGet = function (e) {
                        return t.cookie(e) || null
                    }, a.prototype.CookieSet = function (e, i) {
                        t.cookie(e, !0, {
                            expires: ~~i, path: "/", domain: "." + location.hostname
                        }
                        )
                    }, a.prototype.CookieRemove = function (e) {
                        t.cookie(e, "", {
                            expires: -1, path: "/", domain: "." + location.hostname
                        }
                        )
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.$body.prepend(e.template(e.parsed)), e.$appsbanner = t("#appsbanner"), e.$appsclose = t("#apps-close"), e.$appsclose.on("click", e, e.HideAppsBanner)
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$appsbanner.remove(), e.$appsbanner = null, e.$appsclose = null
                    }, a.prototype.HideAppsBanner = function (e) {
                        var t = e ? e.data : this;
                        t.$appsclose.off("click"), "undefined" != typeof ga && ga("send", "event", "all_header", "click", "btn_app-close"), t.$appsbanner.velocity({
                            marginTop: -1 * t.$appsbanner.outerHeight()
                        }
                            , {
                                duration: 320, easing: "easeInOutQuart", complete: function () {
                                    t.Dispose(), t.$window.trigger("resize").trigger("scroll")
                                }
                            }
                        ), t.refreshEnabled ? t.CookieSet(t.parsed.data.refresh.key, t.parsed.data.refresh.expires) : t.CookieSet(t.parsed.data["default"].key, t.parsed.data["default"].expires)
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }

    , function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = (i(2), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                n.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.$html = t("html,body"),
                        this.$body = t("body"),
                        this.$wrapper = t("#wrapper"),
                        this.$content = t("#content"),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$gnavInner = t(".gnav-inner",
                            this.element),
                        this.$nav = t(".nav",
                            this.element),
                        this.$navList = this.$nav.children("li"),
                        this.$navTop = this.$navList.find(".nav-top"),
                        this.$navBottom = this.$navList.find(".nav-bottom"),
                        this.$gnavClose = t("#gnav-close",
                            this.element),
                        this.$header = null,
                        this.$headerTop = null,
                        this.$headerBottom = null,
                        this.$gnavToggle = null,
                        this.$overlay = null,
                        this.$current = null,
                        this.SCR_POS = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.isActive = !1,
                        this.isHeader = !1,
                        this.isIndex = !1,
                        this.NAV_SPACE = 34,
                        this.Init()
                }, n.prototype.Init = function () {
                        var e = this;
                        if (e.$element.length) {
                            var i = e.$body.attr("class").match(/\b(\S+)-(\S+)/);
                            i && e.$navTop.each(function (n) {
                                t(this).data("category") == i[1] && (e.$current = t(this), e.$current.parent().addClass("is-current"), e.$current.next(".nav-bottom").find("li").each(function (n) {
                                    t(this).data("category") == i[2] && (t(this).addClass("is-current"), e.$gnavInner.css({
                                        paddingBottom: e.NAV_SPACE
                                    }
                                    ))
                                }
                                ))
                            }
                            ), e.$gnavClose.length && (e.isHeader = !0), e.$body.hasClass("index") && (e.isIndex = !0, e.$navList.eq(0).addClass("is-current"), e.$current = e.$navList.eq(0).find(".nav-top"), e.$current.next(".nav-bottom").find("li").each(function (t) {
                                e.$gnavInner.css({
                                    paddingBottom: e.NAV_SPACE
                                }
                                )
                            }
                            )), e.Setup()
                        }
                    }, n.prototype.Setup = function () {
                        var e = this;
                        e.isMobile = e.$window.width() <= e.BREAKPOINT ? !0 : !1, e.isHeader && (e.$header = t("#header"), e.$headerTop = t(".header-top", e.$header), e.$headerBottom = t(".header-bottom", e.$header), e.$gnavToggle = t("#gnav-toggle", e.$header), e.$overlay = t("#overlay", e.$header), e.isMobile && (e.$overlay.css({
                            display: "none", opacity: 0
                        }
                        ), e.$headerBottom.css({
                            display: "none"
                        }
                        ), e.$element.css({
                            height: 0
                        }
                        )), e.$gnavToggle.on("click", e, e.GnavToggleHandler), e.$gnavClose.on("click", e, e.GnavToggleHandler), e.$overlay.on("click", e, e.GnavToggleHandler)), e.isMobile && e.$gnavInner.css({
                            paddingBottom: ""
                        }
                        ), e.$navTop.each(function (i) {
                            t(this).next(".nav-bottom")[0] && t(this).on("click", e, e.AccordionMenuToggle)
                        }
                        ), e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize")
                    }, n.prototype.Dispose = function () {
}, n.prototype.AccordionMenuToggle = function (e) {
                        var i = e ? e.data : this;
                        if (i.isMobile) {
                            e.preventDefault(), i.$navList.not(t(this).parent()).removeClass("is-current");
                            var n = t(this).attr("data-ga"), o = t(this).attr("data-ga-loc");
                            t(this).parent().hasClass("is-current") ? (t(this).parent().removeClass("is-current"), n && "function" == typeof ga && ga("send", "event", o, "click", n + "-close")) : (t(this).parent().addClass("is-current"), n && "function" == typeof ga && ga("send", "event", o, "click", n + "-open")), i.$window.trigger("resize")
                        }
                    }, n.prototype.GnavToggleHandler = function (e) {
                        var i = e ? e.data : this;
                        t(this).attr("data-ga");
                        if (i.isMobile && i.isHeader) if (i.$element.hasClass("is-active")) "function" == typeof ga && (t(this).is(".gnav-close") ? ga("send", "event", "all_header", "click", "btn_menu-close-bottom") : ga("send", "event", "all_header", "click", "btn_menu-close")), i.$wrapper.prevAll().css({
                            display: ""
                        }
                        ), i.$content.removeClass("is-fixed").css({
                            position: "", top: "", zIndex: ""
                        }
                        ), i.$html.removeClass("is-fixed").css({
                            overflow: "", height: ""
                        }
                        ).prop({
                            scrollTop: i.SCR_POS
                        }
                                ), i.$overlay.velocity("stop").velocity({
                                    opacity: 0
                                }
                                    , {
                                        display: "none", duration: 320, easing: "easeInOutQuart"
                                    }
                                ), i.$header.removeClass("is-active"), i.$element.removeClass("is-active").velocity("stop").velocity({
                                    height: 0
                                }
                                    , {
                                        duration: 240, easing: "easeInOutQuart", complete: function () {
                                            i.$headerBottom.css({
                                                display: "none"
                                            }
                                            ), i.$window.trigger("resize").trigger("scroll")
                                        }
                                    }
                                ).off("scroll", i.ScrollHandler), i.$gnavToggle.find("em").text("メニュー"), i.$headerTop.removeClass("is-scroll").off(".noScroll"), i.isActive = !1;
                        else {
                            "function" == typeof ga && ga("send", "event", "all_header", "click", "btn_menu-open");
                            var n = 0;
                            i.$wrapper.prevAll().map(function (e, i) {
                                n += t(i).outerHeight()
                            }
                            ), i.$wrapper.prevAll().css({
                                display: "none"
                            }
                            ), i.SCR_POS = i.$window.scrollTop(), i.$content.addClass("is-fixed").css({
                                position: "fixed", top: -1 * (i.SCR_POS - n), zIndex: 1
                            }
                            ), i.$html.addClass("is-fixed").css({
                                overflow: "hidden", height: "100%"
                            }
                            ), i.$overlay.velocity("stop").velocity({
                                opacity: 1
                            }
                                , {
                                    display: "block", duration: 320, easing: "easeInOutQuart"
                                }
                            ), i.$header.addClass("is-active"), i.$headerBottom.css({
                                display: "block"
                            }
                            ), i.$element.addClass("is-active").velocity("stop").velocity({
                                height: "100%"
                            }
                                , {
                                    duration: 240, easing: "easeInOutQuart", complete: function () {
                                        i.$navList.removeClass("is-current"), null != i.$current ? i.$current.parent().addClass("is-current") : i.isIndex && i.$navList.eq(0).addClass("is-current"), i.$element.trigger("resize").trigger("scroll"), i.isActive = !0
                                    }
                                }
                            ).on("scroll", i, i.ScrollHandler), i.$gnavToggle.find("em").text("閉じる"), i.$headerTop.on("touchmove.noScroll", function (e) {
                                e.preventDefault()
                            }
                            ), i.$window.trigger("resize").trigger("scroll")
                        }
                    }, n.prototype.ScrollHandler = function (e) {
                        var i = e ? e.data : this;
                        0 < t(this).scrollTop() ? (i.$headerTop.addClass("is-scroll"), i.$headerBottom.addClass("is-scroll")) : (i.$headerTop.removeClass("is-scroll"), i.$headerBottom.removeClass("is-scroll"))
                    }, n.prototype.ResizeHandler = function (e) {
                        var t = e ? e.data : this;
                        t.REQEST_ID !== !1 && (clearTimeout(t.REQEST_ID), t.REQEST_ID = null), t.REQEST_ID = setTimeout(function () {
                            t.$window.width() <= t.BREAKPOINT ? (t.isMobile || (t.isHeader && (t.isActive || (t.$header.removeClass("is-active"), t.$headerBottom.css({
                                display: "none"
                            }
                            ), t.$overlay.velocity("stop").css({
                                display: "none", opacity: 0
                            }
                            ), t.$element.velocity("stop").css({
                                height: 0
                            }
                            ))), t.$navList.removeClass("is-current"), null != t.$current && t.$current.parent().addClass("is-current"), t.$gnavInner.css({
                                paddingBottom: ""
                            }
                            ), t.isActive = !1), t.isHeader && (t.isActive ? t.$element.css({
                                height: (window.innerHeight || t.$window.height()) - 60
                            }
                            ) : t.$element.css({
                                height: ""
                            }
                            )), t.isMobile = !0) : (t.isMobile && (t.isHeader && (t.$header.removeClass("is-active"), t.$headerBottom.css({
                                display: ""
                            }
                            ), t.$overlay.velocity("stop").css({
                                display: "none", opacity: 0
                            }
                            ), t.isActive && (t.$wrapper.prevAll().css({
                                display: ""
                            }
                            ), t.$content.removeClass("is-fixed").css({
                                position: "", top: "", zIndex: ""
                            }
                            ), t.$html.removeClass("is-fixed").css({
                                overflow: "", height: ""
                            }
                            ), t.$gnavToggle.find("em").text("メニュー"))), t.$element.removeClass("is-active").css({
                                overflow: "", height: ""
                            }
                            ), t.$navList.removeClass("is-current").find(".nav-bottom").css({
                                display: ""
                            }
                            ), null != t.$current && (t.$current.parent().addClass("is-current"), t.$current.next(".nav-bottom")[0] && t.$gnavInner.css({
                                paddingBottom: t.NAV_SPACE
                            }
                            )), t.isActive = !1), t.isMobile = !1)
                        }
                            , t.INTERVAL)
                    }, e.exports = n
            }
                ()
        }
        ).call(t, i(1))
    }

    , function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                a.prototype.Constructor = function (e, t) {
                    this.defaults = {
                        absolute: !1, path: "//www3.nhk.or.jp", error: !1, testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=navi_"
                    }
                        ,
                        this.options = n(this.defaults, t),
                        this.template = o.template(i(10)),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.Setup())
                    }, a.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.CookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    }, a.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.options.absolute || (e.options.path = ""), e.$element.append(e.template({
                            path: e.options.path, error: e.options.error, queryOption: e.options.queryOption
                        }
                        ))
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }

    , function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                a.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                        key: "__nRenderingMode", expires: 364, mode: null, desktopViewport: "width=980",
                        desktopText: "スマートフォン版はこちら", mobileViewport: "width=device-width,initial-scale=1", mobileText: "PC版はこちら"
                        }
                        ,
                        this.options = n(this.defaults, e),
                        this.template = o.template(i(11)),
                        this.$footer = t("#footer"),
                        this.$footerBottom = t(".footer-bottom",
                            this.$footer),
                        this.$buttonContainer = null,
                        this.$button = null,
                        this.$viewport = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(62.5),
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.$footerBottom.length && e.CookieManager()
                    }, a.prototype.CookieManager = function () {
                        var e = this;
                        t.cookie(e.options.key) ? (e.options.mode = t.cookie(e.options.key),
                            "mobile" == e.options.mode ? (t("meta[name='viewport']").attr("content", e.options.mobileViewport),
                                e.$footerBottom.prepend(e.template), e.$buttonContainer = t(".button--rendering-mode"), e.$button = t(".button", e.$buttonContainer),
                                e.$button.find("span").text(e.options.mobileText),
                                e.$body.addClass("mode_mobile")) : "desktop" == e.options.mode && (t("meta[name='viewport']").attr("content", e.options.desktopViewport),
                                    e.$body.prepend(e.template), e.$buttonContainer = t(".button--rendering-mode"), e.$button = t(".button", e.$buttonContainer),
                                    e.$button.find("span").text(e.options.desktopText), e.$body.addClass("mode_desktop")),
                            e.CookieSet()) : (t("meta[name='viewport']").attr("content", e.options.mobileViewport), e.$footerBottom.prepend(e.template),
                                e.$buttonContainer = t(".button--rendering-mode"), e.$button = t(".button", e.$buttonContainer),
                                e.$button.find("span").text(e.options.mobileText), e.$body.addClass("mode_mobile"), e.options.mode = "mobile"), e.Setup()
                    }, a.prototype.CookieSet = function () {
                        var e = this;
                        t.cookie(e.options.key, e.options.mode, {
                            domain: "." + location.hostname, path: "/news/", expires: e.options.expires
                        }
                        )
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.$button.on("click", e, e.ChangeViewMode), e.ResetResizeHandler()
                    }, a.prototype.Dispose = function () {
}, a.prototype.ChangeViewMode = function (e) {
                        var i = e ? e.data : this;
                        e && e.preventDefault(), i.$button.off("click", i.ChangeViewMode), i.$button = null, i.$buttonContainer.remove(), i.$buttonContainer = null,
                            "mobile" == i.options.mode ? ("undefined" != typeof ga && ga("send", "event", "all_footer", "click", "btn_nnw-pc"),
                                t("meta[name='viewport']").attr("content", i.options.desktopViewport), i.$body.prepend(i.template),
                                i.$buttonContainer = t(".button--rendering-mode"), i.$button = t(".button", i.$buttonContainer),
                                i.$button.find("span").text(i.options.desktopText), i.$body.removeClass("mode_mobile").addClass("mode_desktop"),
                                i.options.mode = "desktop") : "desktop" == i.options.mode && ("undefined" != typeof ga && ga("send", "event", "all_footer", "click", "btn_nnw-sp"),
                                    t("meta[name='viewport']").attr("content", i.options.mobileViewport), i.$footerBottom.prepend(i.template),
                                    i.$buttonContainer = t(".button--rendering-mode"), i.$button = t(".button", i.$buttonContainer),
                                    i.$button.find("span").text(i.options.mobileText), i.$body.removeClass("mode_desktop").addClass("mode_mobile"),
                                    i.options.mode = "mobile"), i.$button.on("click", i, i.ChangeViewMode), i.ResetResizeHandler(), i.CookieSet()
                    }, a.prototype.ResetResizeHandler = function () {
                        var e = this, i = window.chrome || "WebkitAppearance" in document.documentElement.style ? "body" : "html";
                        e.REQEST_ID !== !1 && (clearTimeout(e.REQEST_ID), e.REQEST_ID = null), e.REQEST_ID = setTimeout(function () {
                            t(i).animate({
                                scrollTop: 0
                            }
                                , 1), e.$window.trigger("orientationchange").trigger("resize").trigger("scroll")
                        }
                            , e.INTERVAL)
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }

    , function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = (i(2), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                o.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
                            key: "__nTextResizing", expires: 364, small: "0.88em", medium: "1em", large: "1.125em"
                        }
                        ,
                        this.options = n(this.defaults, i),
                        this.$element = e,
                        this.element = e.get(0),
                        this.elementClassName = e.attr("class"),
                        this.$button = {
                            small: t(".btn-small",
                                this.element), medium: t(".btn-medium",
                                    this.element), large: t(".btn-large",
                                        this.element)
                        }
                        ,
                        this.$wrapper = t("#wrapper"),
                        this.$current = null,
                        this.SIZE = null, t.cookie.json = !1,
                        this.Init()
                }, o.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.Setup()
                    }, o.prototype.CookieManager = function () {
                        var e = this;
                        t.cookie(e.options.key) ? (e.$current.removeClass("is-active").children("button").prop("disabled", !1), e.SIZE = t.cookie(e.options.key),
                            e.$current = e.$button[e.SIZE], e.$button[e.SIZE].addClass("is-active").children("button").prop("disabled", !0), e.$wrapper.css({
                            fontSize: e.options[e.SIZE]
                        }
                        )) : e.CookieSet()
                    }, o.prototype.CookieSet = function () {
                        var e = this;
                        t.cookie(e.options.key, e.SIZE, {
                            expires: e.options.expires, path: "/", domain: location.hostname
                        }
                        )
                    }, o.prototype.Setup = function () {
                        var e = this;
                        e.$current = e.$element.find(".is-active"), e.SIZE = e.$current.data("size"), e.CookieManager(), e.$button.small.on("click", e, e.ChangeTextSize),
                            e.$button.medium.on("click", e, e.ChangeTextSize), e.$button.large.on("click", e, e.ChangeTextSize)
                    }, o.prototype.Dispose = function () {
}, o.prototype.ChangeTextSize = function (e) {
                        var i = e ? e.data : this;
                        i.SIZE = t(this).data("size"), t("." + i.elementClassName).find("li").removeClass("is-active").children("button").prop("disabled", !1),
                            t("." + i.elementClassName).find(".btn-" + i.SIZE).addClass("is-active").children("button").prop("disabled", !0), i.$wrapper.css({
                            fontSize: i.options[i.SIZE]
                        }
                        ), i.CookieSet(), i.$window.trigger("resize").trigger("scroll")
                    }, e.exports = o
            }
                ()
        }
        ).call(t, i(1))
    }

    , function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                        url: "/news/json16/syuyo.json", type: "json", data: null, timeout: 8e3, directory: "/news/",
                        title: "トップニュース", limit: 7, query: ""
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(12)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemHeader = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [], a.locale("ja"),
                        this.Init()
                },
    s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.Get()
                    },
    s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }, function (t) {
                            e.Dispose()
                        })
                    },
    s.prototype.Parse = function (e) {
        if (null != e && void 0 !== e) {
            var t = this;
            if (null != e.channel.item || "" != e.channel.item) 
                for (var i = 0, n = e.channel.item.length; n > i; ++i)
                    new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "",
                        e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath),
                        "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)),
                    e.channel.item[i].link = t.options.directory + e.channel.item[i].link;
                return e.queryRoot = t.options.query,
                        {
                            data: e, 
                            directory: t.options.directory, 
                            title: t.options.title, 
                            limit: t.options.limit 
                        }
        }
    },
    s.prototype.Dispose = function () {
        var e = this;
        e.$element.remove(), 
        e.$element = null 
    },
    s.prototype.Setup = function () {
    }, 
    e.exports = s
            }()
        }).call(t, i(1))
    }, , 
    function (e, t) {
        e.exports = "<% if (!data) {return;} %><% if (data.title != '') {%><header class=module--header><% } else {%><header class=\"module--header none-title\"><% } %><h2>Pickup NEWS<% if (data.title != '') {%><span><%= data.title %></span><% } %></h2></header><section class=module--content><div class=content--header><% if (video != '') {
%><figure class=content--video><iframe class=video-player src=\"<%= video %>\" width=360 height=202 allowfullscreen></iframe></figure><% } %><div class=content--summary><% if (data.comment != '') {%><div class=content--date><p><%= data.comment %></p></div><% } %><% if (data.description != '') {
%><dl class=content--contained><dt>収録内容<dd><%= data.description %></dl><% } %></div></div></section></header>" }, function (e, t) {e.exports = "<% if (!data) {return;} %><% var __count__ = 1;
%><% _.each(data.item, function(value,key) {%><% if (!value) {
return;} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var __code__ = ('00' + __count__).substr(-3);%><li><a href=\"<%= directory + value.link + __pram__ + queryRoot + __code__ %>\"><%= value.word %><var><%= value.kijinum %></var></a></li><% __count__++;
%><% });%>" }, , , , , , , , , , function (e, t) {        e.exports = "<% if (!error) {
%><nav id=footer-gnav class=gnav role=navigation><div class=gnav-inner><ul class=nav><li><a class=\"nav-top no-referrer\" data-ga=btn_menu-news data-ga-loc=all_footer role=tab tabindex=0 href=\"<%= path %>/news/?utm_int=all_footer_menu_news<%= queryOption %>\" data-category=news>ニュース<i class=i-toggle></i></a><div class=nav-bottom role=tabpanel><ul class=nav-inner><li data-category=new><a href=\"<%= path %>/news/catnew.html?utm_int=all_footer_menu_news-new<%= queryOption %>\">新着</a></li><li data-category=social><a href=\"<%= path %>/news/cat01.html?utm_int=all_footer_menu_news-social<%= queryOption %>\">社会</a></li><li data-category=weather><a href=\"<%= path %>/news/saigai.html?utm_int=all_footer_menu_news-saigai<%= queryOption %>\">気象・災害</a></li><li data-category=culture><a href=\"<%= path %>/news/cat03.html?utm_int=all_footer_menu_news-culture<%= queryOption %>\">科学・文化</a></li><li data-category=politics><a href=\"<%= path %>/news/cat04.html?utm_int=all_footer_menu_news-politics<%= queryOption %>\">政治</a></li><li data-category=business><a href=\"<%= path %>/news/business.html?utm_int=all_footer_menu_news-business<%= queryOption %>\">ビジネス</a></li><li data-category=international><a href=\"<%= path %>/news/cat06.html?utm_int=all_footer_menu_news-international<%= queryOption %>\">国際</a></li><li data-category=sports><a href=\"<%= path %>/news/cat07.html?utm_int=all_footer_menu_news-sports<%= queryOption %>\">スポーツ</a></li><li data-category=life><a href=\"<%= path %>/news/cat02.html?utm_int=all_footer_menu_news-life<%= queryOption %>\">暮らし</a></li><li data-category=local><a href=\"<%= path %>/lnews/?utm_int=all_footer_menu_news-local<%= queryOption %>\" onclick=\"ga('send', 'event', 'all_footer', 'click', 'btn_lnews')\">地域</a></li></ul></div></li><li><a class=nav-top tabindex=0 href=\"<%= path %>/news/movie.html?utm_int=all_footer_menu_movie<%= queryOption %>\" data-category=movie>動画</a></li><li><a class=nav-top tabindex=0 href=\"<%= path %>/news/netnewsup/?utm_int=all_footer_menu_netnewsup<%= queryOption %>\" data-category=newsup>News Up</a></li><li><a class=nav-top data-ga=btn_menu-tokushu data-ga-loc=all_footer role=tab tabindex=0 href=\"<%= path %>/news/tokushu/?utm_int=all_footer_menu_tokushu<%= queryOption %>\" data-category=tokushu>特集<i class=i-toggle></i></a><div class=nav-bottom role=tabpanel><ul class=nav-inner><li data-category=new><a href=\"<%= path %>/news/tokushu/?utm_int=all_footer_menu_tokushu-new<%= queryOption %>\">新着</a></li><li data-category=web><a href=\"<%= path %>/news/web_tokushu/?utm_int=all_footer_menu_tokushu-web<%= queryOption %>\">WEB特集</a></li><li data-category=business><a href=\"<%= path %>/news/business_tokushu/?utm_int=all_footer_menu_tokushu-business<%= queryOption %>\">ビジネス特集</a></li></ul></div></li><li><a class=nav-top tabindex=0 href=\"<%= path %>/news/special/?utm_int=all_footer_menu_special<%= queryOption %>\" data-category=special>スペシャルコンテンツ</a></li><li class=none-mobile><a class=nav-top tabindex=0 href=\"<%= path %>/news/easy/?utm_int=all_footer_menu_easy<%= queryOption %>\" data-category=easy>NEWS WEB EASY</a></li></ul></div><p class=link--site-top><a href=\"<%= path %>/news/?utm_int=all_footer_back_news<%= queryOption %>\"><i class=\"i-arrow is-left_g\"></i>トップページへ戻る</a></p></nav><aside class=footer-share role=complementary><div class=inner><div class=nhk-snsbtn data-nhksns-disable=google data-nhksns-description=\" \"></div></div></aside><section class=footer-nav><div class=inner><nav class=content-nav role=navigation><section><dl><dt>公式Twitter/facebook<span>※NHKサイトを離れます</span><dd><ul><li><a href=https://www.facebook.com/nhknewsweb target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_001')\">NHK NEWSWEB(facebook)</a></li><li><a href=https://twitter.com/nhk_news target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_002')\">NHKニュース(@nhk_news)</a></li><li><a href=https://twitter.com/nhk_kabun target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_003')\">科学文化部(@nhk_kabun)</a></li><li><a href=https://twitter.com/nhk_syakaibu target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_004')\">社会部(@nhk_syakaibu)</a></li><li><a href=https://twitter.com/nhk_seikatsu target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_005')\">生活・防災(@nhk_seikatsu)</a></li><li><a href=https://twitter.com/nhk_kokusai target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_006')\">国際部(@nhk_kokusai)</a></li><li><a href=https://twitter.com/nhk_network target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_009')\">ネットワーク報道部(@nhk_network)</a></li><li><a href=https://twitter.com/nhk_nc11 target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_008')\">ニュースチェック11(@nhk_nc11)</a></li><li><a href=https://twitter.com/nhk_burakoshi target=_blank rel=nofollow onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_sns_010')\">キャスターズ Everywhere（@nhk_burakoshi）</a></li></ul></dl></section><section><article><dl><dt>テレビ<dd><ul><li><a href=http://www.nhk.or.jp/ohayou/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_001')\">おはよう日本</a></li><li><a href=http://www4.nhk.or.jp/shibu5/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_002')\">ニュース シブ5時</a></li><li><a href=http://www4.nhk.or.jp/news7/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_003')\">ニュース7</a></li><li><a href=http://www.nhk.or.jp/gendai/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_004')\">クローズアップ現代＋</a></li><li><a href=http://www4.nhk.or.jp/nw9/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_005')\">ニュースウオッチ9</a></li><li><a href=http://www4.nhk.or.jp/nc11/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_007')\">ニュースチェック11</a></li><li><a href=http://www.nhk.or.jp/fukayomi/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_008')\">週刊 ニュース深読み</a></li><li><a href=http://www4.nhk.or.jp/sekaima/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_010')\">これでわかった！世界のいま</a></li><li><a href=http://www.nhk.or.jp/shuwa/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_tv_009')\">手話ニュース</a></li></ul></dl><footer><p><a href=http://www.nhk.or.jp/toppage/navi/news.html><i class=\"i-arrow is-right_g\"></i>番組一覧はこちら</a></p></footer></article><article><dl><dt>ラジオ<dd><ul><li><a href=http://www.nhk.or.jp/radio/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_radio_001')\">らじる★らじる</a></li><li><a href=http://www.nhk.or.jp/radionews/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_radio_002')\">NHKラジオニュース</a></li><li><a href=http://www4.nhk.or.jp/hitokoto/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_radio_003')\">先読み！夕方ニュース</a></li><li><a href=http://www4.nhk.or.jp/nhkjournal/ onclick=\"ga('send', 'event', 'all_footer', 'click', 'link_radio_004')\">NHKジャーナル</a></li></ul></dl></article></section></nav></div></section><% } %><section class=footer-bottom></section>";
    }, function (e, t) {e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1;
%><% if (title != '') {
%><header class=module--header><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--summary><p><%= summary %></p></div><div class=content--items><ul class=\"content--list grid--row grid--col-mobile\"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < limit) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var __code__ = ('00' + __count__).substr(-3);
%><li><a href=\"<%= value.link + __pram__ + queryRoot + __code__ %>\"><dl><dt><div class=thumb><img src=\"<%= value.thumb %>\" alt=\"<%= value.title %>\"> <span class=date><% if (value.datetime != '') {
%><time datetime=\"<%= value.datetime %>\"><% } else {
%><time><% } %><i class=i-cameramanseye><i class=\"i-arrow is-right_w\"></i></i><%= value.date %></time></time></span></div><dd><em class=title><%= value.title %></em></dl></a></li><% __count__++;
%><% } %><% });
%></ul></div></section><% if (link != '' && linkText != '') {
%><footer class=module--footer><p class=button><a href=\"<%= link + '?' + queryRoot + 'more' %>\"><i class=\"i-arrow is-right_g\"></i><%= linkText %></a></p></footer><% } %>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><section class=module--content><% if (value.type === 'image') {
%><figure class=content--thumb><% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_contents', 'imp', 'imp_free-space_' + ('00' + (key + 1)).substr(-3), {
nonInteraction: true });
} var __pram__ = new RegExp(/\\?/).test(value.imgLink) ? '&' : '?';
%><a href=\"<%= value.imgLink + __pram__ + 'utm_int=all_contents_free-space_' + ('00' + (key + 1)).substr(-3) + queryOption %>\" target=\"<%= value.imgTarget %>\" onclick=\"ga('send', 'event', 'all_contents', 'click', '<%= 'link_free-space_' + ('00' + (key + 1)).substr(-3) %>')\"><img src=\"<%= value.imgPath %>\" alt=\"<%= value.imgAlt %>\"><dl><% if (value.imgTitle != '') {
%><dt><%= value.imgTitle %><% } %><% if (value.imgText != '') {
%><dd><%= value.imgText %><% } %></dl></a></figure><% } else if(value.type === 'html') {
%><div class=\"content--summary module--tmpl\"><%= value.html %></div><% } %></section><% });
%>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><h3>注目ワード</h3><ol class=nav-keywords role=navigation><% var __count__ = 1;
%><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var code = ('00' + __count__).substr(-3);
%><li><a href=\"<%= directory + value.link + __pram__ + queryRoot + code + queryOption %>\"><%= value.word %></a></li><% __count__++ %><% });
%></ol><p class=button><a href=\"<%= link + '?' + queryRoot + 'more' + queryOption %>\"><i class=\"i-arrow is-right_g\"></i><%= linkText %></a></p>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><div class=inner><dl><dt>JUST IN<dd><ul><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_contents', 'imp', 'imp_just-in_' + ('00' + (key + 1)).substr(-3), {
nonInteraction: true });
} %><li><a href=\"<%= directory + value.link + '?utm_int=all_contents_just-in_' + ('00' + (key + 1)).substr(-3) + queryOption %>\" onclick=\"ga('send', 'event', 'all_contents', 'click', '<%= 'link_just-in_' + ('00' + (key + 1)).substr(-3) %>')\"><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time></a></li><% });
%></ul></dl></div>"
    }, function (e, t) {
        e.exports = "<header class=module--header><h2>各地のニュースサイト</h2></header><section class=\"module--nav nav--local-list\"><ul><li class=area1><a class=nav-top href=\"/sapporo-news/\">北海道</a><div class=\"nav-bottom none-mobile\"><p><a href=/sapporo-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-sapporo')\">北海道</a></p></div></li><li class=\"content--accordion area2\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-tohoku role=tab tabindex=0>東北<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/tohoku-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-tohoku')\">宮城</a><dd><ul><li><a href=/lnews/aomori/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-aomori')\">青森</a></li><li><a href=/lnews/morioka/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-morioka')\">岩手</a></li><li><a href=/lnews/akita/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-akita')\">秋田</a></li><li><a href=/lnews/yamagata/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-yamagata')\">山形</a></li><li><a href=/lnews/fukushima/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-fukushima')\">福島</a></li></ul></dl></div></li><li class=\"content--accordion area3\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-kanto role=tab tabindex=0>関東甲信越<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/shutoken-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-shutoken')\">首都圏</a><dd><ul><li><a href=/lnews/mito/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-mito')\">茨城</a></li><li><a href=/lnews/utsunomiya/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-utsunomiya')\">栃木</a></li><li><a href=/lnews/maebashi/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-maebashi')\">群馬</a></li><li><a href=/lnews/saitama/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-saitama')\">埼玉</a></li><li><a href=/lnews/chiba/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-chiba')\">千葉</a></li><li><a href=/lnews/yokohama/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-yokohama')\">神奈川</a></li><li><a href=/lnews/niigata/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-niigata')\">新潟</a></li><li><a href=/lnews/kofu/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kofu')\">山梨</a></li><li><a href=/lnews/nagano/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-nagano')\">長野</a></li></ul></dl></div></li><li class=\"content--accordion area4\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-tokai role=tab tabindex=0>東海・北陸<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/tokai-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-tokai')\">愛知</a><dd><ul><li><a href=/lnews/toyama/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-toyama')\">富山</a></li><li><a href=/lnews/kanazawa/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kanazawa')\">石川</a></li><li><a href=/lnews/fukui/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-fukui')\">福井</a></li><li><a href=/lnews/gifu/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-gifu')\">岐阜</a></li><li><a href=/lnews/shizuoka/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-shizuoka')\">静岡</a></li><li><a href=/lnews/tsu/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-tsu')\">三重</a></li></ul></dl></div></li><li class=\"content--accordion area5\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-kinki role=tab tabindex=0>近畿<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/kansai-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kansai')\">大阪</a><dd><ul><li><a href=/lnews/otsu/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-otsu')\">滋賀</a></li><li><a href=/lnews/kyoto/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kyoto')\">京都</a></li><li><a href=/lnews/kobe/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kobe')\">兵庫</a></li><li><a href=/lnews/nara/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-nara')\">奈良</a></li><li><a href=/lnews/wakayama/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-wakayama')\">和歌山</a></li></ul></dl></div></li><li class=\"content--accordion area6\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-thugoku role=tab tabindex=0>中国<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/hiroshima-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-hiroshima')\">広島</a><dd><ul><li><a href=/lnews/tottori/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-tottori')\">鳥取</a></li><li><a href=/lnews/matsue/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-matsue')\">島根</a></li><li><a href=/lnews/okayama/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-okayama')\">岡山</a></li><li><a href=/lnews/yamaguchi/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-yamaguchi')\">山口</a></li></ul></dl></div></li><li class=\"content--accordion area7\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-shikoku role=tab tabindex=0>四国<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/matsuyama-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-matsuyama')\">愛媛</a><dd><ul><li><a href=/lnews/tokushima/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-tokushima')\">徳島</a></li><li><a href=/lnews/takamatsu/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-takamatsu')\">香川</a></li><li><a href=/lnews/kochi/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kochi')\">高知</a></li></ul></dl></div></li><li class=\"content--accordion area8\"><span class=\"nav-top nav--accordion\" data-ga=btn_local-kyusyu role=tab tabindex=0>九州・沖縄<i class=i-toggle></i></span><div class=\"nav-bottom content--list\" role=tabpanel><dl class=nav-inner><dt><a href=/fukuoka-news/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-fukuoka')\">福岡</a><dd><ul><li><a href=/lnews/kitakyushu/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kitakyushu')\">北九州</a></li><li><a href=/lnews/saga/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-saga')\">佐賀</a></li><li><a href=/lnews/nagasaki/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-nagasaki')\">長崎</a></li><li><a href=/lnews/kumamoto/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kumamoto')\">熊本</a></li><li><a href=/lnews/oita/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-oita')\">大分</a></li><li><a href=/lnews/miyazaki/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-miyazaki')\">宮崎</a></li><li><a href=/lnews/kagoshima/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-kagoshima')\">鹿児島</a></li><li><a href=/lnews/okinawa/ onclick=\"ga('send', 'event', 'local_contents', 'click', 'btn_local-okinawa')\">沖縄</a></li></ul></dl></div></li></ul></section>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var __count__ = 1 + offset;
%><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><li><a href="<%= value.link + data.queryRoot + (\'00\' + __count__).substr(-3) + \'&movie=true\' %>"><dl><dt><div class=thumb><img class=is-load src="<%= value.iconPath %>" alt="<%= value.title %>"><% if (value.videoDuration && value.videoDuration!=\'\') {
%><span class=video-duration><%= value.videoDuration %></span><% } %></div><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.new) {
%><span class=i-items--group><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.new) {
%></span><% } %></dl></a></li><% __count__++;
%><% });
%>'
    }, function (e, t) {
        e.exports = '<% if (title != \'\') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><div class=content--items><ul class="content--list grid--row-movie"></ul></div></section><footer class="module--footer button-more"><p class=button tabindex=0 role=button><i class="i-arrow is-down_g"></i>もっと見る</p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% if (data.channel.title && data.channel.title != '') {
%><header class=module--header><h2><%= data.channel.title %></h2></header><section class=module--content><% } else {
%><section class=\"module--content no-title\"><% } %><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (value.topFlg) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><div class=content--header><figure class=content--thumb><a href=\"<%= value.link + __pram__ + 'utm_int=news_contents_news-closeup_' + ('00' + (key + 1)).substr(-3) + queryOption %>\"><img class=is-load src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"></a></figure><div class=content--summary><% if (value.link && value.link != '') {
%><a href=\"<%= value.link + __pram__ + 'utm_int=news_contents_news-closeup_' + ('00' + (key + 1)).substr(-3) + queryOption %>\"><% } %><% if (value.title && value.title != '') {
%><h1 class=content--header-title><%= value.title %></h1><% } %><% if (value.comment && value.comment != '') {
%><p class=content--comment><%= value.comment %></p><% } %><% if (value.link && value.link != '') {
%></a><% } %><% if (value.relationNews.length) {
%><dl class=content--related><dt>関連ニュース<% _.each(value.relationNews, function(value2,key2) {
%><% if (key2 < 2) {
%><% var __pram2__ = new RegExp(/\\?/).test(value2.link) ? '&' : '?';
%><dd><a href=\"<%= value2.link + __pram2__ + 'utm_int=news_contents_news-closeup_' + ('00' + (key + 1)).substr(-3) + '_relation_' + ('00' + (key2 + 1)).substr(-3) + queryOption %>\"><%= value2.title %></a><% } %><% });
%></dl><% } %></div></div><% } %><% });
%></section></section>"
    }, 
    function (e, t) {
        e.exports = "<% if (!data) {return;} %>
                     <% var __count__ = 1;%>
                     <header class=module--header>
                         <h2>関連・注目ワード</h2>
                     </header>
                     <section class=module--content>
                        <div class=content--items>
                            <ul class=nav-keywords role=navigation>
                                 <% _.each(data, function(value,key) { %>
                                 <% if (!value) {return;} %>
                                 <% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';var __code__ = ('00' + __count__).substr(-3); %>
                                 <li>
                                     <a href=\"<%= directory + value.link + __pram__ + queryRoot + __code__ + queryOption %>\"><%= value.word %></a>
                                </li>
                                <% __count__++; %>
                                <% });%>
                            </ul>
                        </div>
                    </section>
                    <footer class=module--footer>
                        <p class=button>
                            <a href=\"<%= '/news/word/?' + queryRoot + 'more' + queryOption %>\">
                            <i class=\"i-arrow is-right_g\"></i>
                            注目ワード一覧を見る
                            </a>
                        </p>
                    </footer>"
    }, 
    function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1;
%><header class=module--header><h2>関連リンク</h2></header><section class=module--content><div class=content--items><ul class=\"content--list grid--list\"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var __code__ = ('00' + __count__).substr(-3);
%><li><% if (value.target && value.target != '') {
%><a href=\"<%= value.link + __pram__ + queryRoot + __code__ + queryOption %>\" target=\"<%= value.target %>\"><% } else {
%><a href=\"<%= value.link + __pram__ + queryRoot + __code__ + queryOption %>\"><% } %><% if (value.imgPath && value.imgPath != '') {
%><dl><dt><img class=is-load src=\"<%= directory + value.imgPath %>\" alt=\"<%= value.title %>\"><dd><% if (value.title && value.title != '') {
%><p class=content--title><%= value.title %></p><% } %><% if (value.description && value.description != '') {
%><p class=content--comment><%= value.description %></p><% } %></dl><% } else {
%><p><em class=title><%= value.title %></em><% if (value.datetime != '') {
%><time datetime=\"<%= value.datetime %>\"><%= value.time %></time><% } else {
%><data><%= value.time %></data><% } %></p><% } %></a></a></li><% __count__++;
%><% });
%></ul></div></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><section class=module--detail-content><% var __title__ = _.escape(data.title);
%><header class=content--detail-header><% if (data.img && data.img != '') {
%><% if (data.video && data.video != '') {
%><figure class=content--video><% } else {
%><figure class=content--thumb><% } %><% if (data.video && data.video != '') {
%><iframe class=video-player-fixed src=\"<%= data.video %>?movie=true\" allowfullscreen></iframe><% } else {
%><img src=\"<%= data.img %>\" alt=\"<%= __title__ %>\"><% } %></figure><% if (data.caption && data.caption != '') {
%><p class=thumb-caption><%= data.caption %></p><% } %><% } %><% if (__title__ != '') {
%><% if (!newsup) {
%><div class=content--detail-title><h1 class=content--title><%= __title__ %></h1><% } else {
%><div class=\"content--detail-title newsup-title\"><h1 class=content--title><span><i class=i-genre>News Up</i></span> <span><%= __title__ %></span></h1><% } %><% var __pram__;
if (data.word && data.word != '') {
__pram__ = new RegExp(/\\?/).test(data.word[0].link) ? '&' : '?';
} %><p class=content--date><time datetime=\"<%= data.datetime %>\"><%= data.date %></time><% if (data.word && data.word != '') {
%> <a href=\"<%= directory + data.word[0].link + __pram__ + 'utm_int=detail_contents_news-keyword-title_001' %>\"><i class=i-word><%= data.word[0].title %></i></a><% } %></p></div><% } %></div></figure></header><div class=\"module--share none-screen\"><div class=nhk-snsbtn data-nhksns-disable=google data-nhksns-description=\" \"></div></div><section class=content--detail-main><div class=content--detail-body><% if (data.summary && data.summary != '') {
%><% var __summary__ = data.summary;
__summary__ = __summary__.replace(/&lt;br \\/&gt;/g, '<br />');
__summary__ = __summary__.replace(/&lt;hr&gt;/g, '');
__summary__ = __summary__.replace(/&lt;b&gt;/g, '');
__summary__ = __summary__.replace(/&lt;\\/b&gt;/g, '');
%><p class=content--summary><%= __summary__ %></p><% } %><% if (data.body && data.body.length >= 1) {
%><nav class=\"module--footer button-more\"><p class=button><i class=\"i-arrow is-down_g\"></i>続きを読む</p></nav><div class=\"content--detail-more none-always\"><% if (data.related && data.related.link != '') {
%><p class=content--detail-related><a href=\"<%= directory %><%= data.related.link %>\"><em class=title><span>関連特集：</span><%= data.related.title %></em><time datetime=\"<%= data.related.datetime %>\"><%= data.related.date %></time></a></p><% } %><% if (data.more && data.more != '') {
%><% var __more__ = data.more;
__more__ = __more__.replace(/&lt;br \\/&gt;/g, '<br />');
__more__ = __more__.replace(/&lt;hr&gt;/g, '');
__more__ = __more__.replace(/&lt;b&gt;/g, '');
__more__ = __more__.replace(/&lt;\\/b&gt;/g, '');
%><p class=content--summary-more><%= __more__ %></p><% } %><% _.each(data.body, function(value,key) {
%><% if (value.textPos == 'top') {
%><section class=\"content--body type-top\"><% } else if (value.textPos == 'bottom') {
%><section class=\"content--body type-bottom\"><% } else {
%><section class=content--body><% } %><% var __h2__ = _.escape(value.title);
var __text__ = value.text;
__text__ = __text__.replace(/&lt;br \\/&gt;/g, '<br />');
__text__ = __text__.replace(/&lt;hr&gt;/g, '<hr />');
__text__ = __text__.replace(/&lt;b&gt;/g, '<b>');
__text__ = __text__.replace(/&lt;\\/b&gt;/g, '</b>');
%><% if (value.title != '') {
%><h2 class=body-title><%= __h2__ %></h2><% } %><% if (value.text != '' && value.textPos == 'top') {
%><div class=body-text><%= __text__ %></div><% } %><% if (value.video && value.video != '') {
%><% if (value.align == 'left') {
%><figure class=\"body-video is-left\"><% } else if (value.align == 'right') {
%><figure class=\"body-video is-right\"><% } else if (value.align == 'fluid') {
%><figure class=\"body-video is-fluid\"><% } else {
%><figure class=\"body-video is-center\"><% } %><div class=video-player-fixed><iframe src=\"<%= value.video %>?movie=false\" allowfullscreen></iframe></div><% if (value.caption && value.caption != '') {
%><figcaption><%= value.caption %></figcaption><% } %></figure><% } else if (value.img && value.img != '') {
%><% if (value.align == 'left') {
%><figure class=\"body-img is-left\"><% } else if (value.align == 'right') {
%><figure class=\"body-img is-right\"><% } else if (value.align == 'fluid') {
%><figure class=\"body-img is-fluid\"><% } else {
%><figure class=\"body-img is-center\"><% } %><img src=\"<%= value.img %>\" alt=\"<%= __h2__ %>\"><% if (value.caption && value.caption != '') {
%><figcaption><%= value.caption %></figcaption><% } %></figure><% } %><% if (value.text != '') {
%><% if (value.textPos == 'bottom' || value.textPos == '') {
%><div class=body-text><%= __text__ %></div><% } %><% } %></figure></figure></figure></figure></figure></figure></section><% });
%><% } %></section></section></div></div></section></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><header class=module--header><h2><%= title %></h2></header><section class=module--content><div class=content--items><ol class=\"content--list grid--col-single\"><% var __count__ = 1;
%><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (__count__ > limit) {
return;
} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var __code__ = ('00' + __count__).substr(-3);
%><li><a href=\"<%= value.link + __pram__ + data.queryRoot + __code__ + queryOption %>\"><% if (images) {
%><% if (__count__ <= 1) {
%><% if (value.imgPath != '') {
%><dl><dt><img class=is-load src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em></dl><% } else {
%><p><em class=title><%= value.title %></em></p><% } %><% } else {
%><dl><dt><img class=is-load src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em></dl><% } %><% } else {
%><p><em class=title><%= value.title %></em></p><% } %></a></li><% __count__++ %><% });
%></ol></div></section><footer class=\"module--footer button-more\"><p class=button tabindex=0 role=button onclick=\"ga('send', 'event', 'all_side', 'click', 'link_ranking-<%= category %>-more')\"><i class=\"i-arrow is-down_g\"></i>もっと見る</p></footer>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var __count__ = 1;
%><header class=module--header><h2>関連ニュース</h2></header><section class=module--content><div class=content--items><ul class="content--list grid--col-single"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? \'&\' : \'?\';
var __code__ = (\'00\' + __count__).substr(-3);
%><li><a href="<%= value.link + __pram__ + queryRoot + __code__ + queryOption %>"><dl><dt><img class=is-load src="<%= value.iconPath %>" alt="<%= value.title %>"><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.video || value.new) {
%><span class=i-items--group><% } %><% if (value.video) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.video || value.new) {
%></span><% } %></dl></a></li><% __count__++;
%><% });
%></ul></div></section>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><section class=module--detail-content><% var __title__ = _.escape(data.title);
%><header class=content--detail-header><% if (data.img && data.img != '') {
%><% if (data.video && data.video != '') {
%><figure class=content--video><% } else {
%><figure class=content--thumb><% } %><% if (data.video && data.video != '') {
%><iframe class=video-player-fixed src=\"<%= data.video %>?movie=false\" allowfullscreen></iframe><% } else {
%><img src=\"<%= data.img %>\" alt=\"<%= __title__ %>\"><% } %></figure><% if (data.caption && data.caption != '') {
%><p class=thumb-caption><%= data.caption %></p><% } %><% } %><% if (__title__ != '') {
%><% if (!newsup) {
%><div class=content--detail-title><h1 class=content--title><%= __title__ %></h1><% } else {
%><div class=\"content--detail-title newsup-title\"><h1 class=content--title><span><i class=i-genre>News Up</i></span> <span><%= __title__ %></span></h1><% } %><% var __pram__;
if (data.word && data.word != '') {
__pram__ = new RegExp(/\\?/).test(data.word[0].link) ? '&' : '?';
} %><p class=content--date><time datetime=\"<%= data.datetime %>\"><%= data.date %></time><% if (data.word && data.word != '') {
%><a href=\"<%= directory + data.word[0].link + __pram__ + 'utm_int=detail_contents_news-keyword-title_001' %>\"><i class=i-word><%= data.word[0].title %></i></a><% } %></p></div><% } %></div></figure></header><div class=\"module--share none-screen\"><div class=nhk-snsbtn data-nhksns-disable=google data-nhksns-description=\" \"></div></div><section class=content--detail-main><div class=content--detail-body><% if (data.summary && data.summary != '') {
%><% var __summary__ = data.summary;
__summary__ = __summary__.replace(/&lt;br \\/&gt;/g, '<br />');
__summary__ = __summary__.replace(/&lt;hr&gt;/g, '');
__summary__ = __summary__.replace(/&lt;b&gt;/g, '');
__summary__ = __summary__.replace(/&lt;\\/b&gt;/g, '');
%><p class=content--summary><%= __summary__ %></p><% } %><% if (data.related && data.related.link != '') {
%><p class=content--detail-related><a href=\"<%= directory %><%= data.related.link %>\"><em class=title><span>関連特集：</span><%= data.related.title %></em><time datetime=\"<%= data.related.datetime %>\"><%= data.related.date %></time></a></p><% } %><% if (data.body && data.body.length >= 1) {
%><nav class=\"module--footer button-more none-screen\"><p class=button><i class=\"i-arrow is-down_g\"></i>続きを読む</p></nav><div class=\"content--detail-more none-mobile\"><% if (data.more && data.more != '') {
%><% var __more__ = data.more;
__more__ = __more__.replace(/&lt;br \\/&gt;/g, '<br />');
__more__ = __more__.replace(/&lt;hr&gt;/g, '');
__more__ = __more__.replace(/&lt;b&gt;/g, '');
__more__ = __more__.replace(/&lt;\\/b&gt;/g, '');
%><p class=content--summary-more><%= __more__ %></p><% } %><% _.each(data.body, function(value,key) {
%><% if (value.textPos == 'top') {
%><section class=\"content--body type-top\"><% } else if (value.textPos == 'bottom') {
%><section class=\"content--body type-bottom\"><% } else {
%><section class=content--body><% } %><% var __h2__ = _.escape(value.title);
var __text__ = value.text;
__text__ = __text__.replace(/&lt;br \\/&gt;/g, '<br />');
__text__ = __text__.replace(/&lt;hr&gt;/g, '<hr />');
__text__ = __text__.replace(/&lt;b&gt;/g, '<b>');
__text__ = __text__.replace(/&lt;\\/b&gt;/g, '</b>');
%><% if (value.title != '') {
%><h2 class=body-title><%= __h2__ %></h2><% } %><% if (value.text != '' && value.textPos == 'top') {
%><div class=body-text><%= __text__ %></div><% } %><% if (value.video && value.video != '') {
%><% if (value.align == 'left') {
%><figure class=\"body-video is-left\"><% } else if (value.align == 'right') {
%><figure class=\"body-video is-right\"><% } else if (value.align == 'fluid') {
%><figure class=\"body-video is-fluid\"><% } else {
%><figure class=\"body-video is-center\"><% } %><div class=video-player-fixed><iframe src=\"<%= value.video %>?movie=false\" allowfullscreen></iframe></div><% if (value.caption && value.caption != '') {
%><figcaption><%= value.caption %></figcaption><% } %></figure><% } else if (value.img && value.img != '') {
%><% if (value.align == 'left') {
%><figure class=\"body-img is-left\"><% } else if (value.align == 'right') {
%><figure class=\"body-img is-right\"><% } else if (value.align == 'fluid') {
%><figure class=\"body-img is-fluid\"><% } else {
%><figure class=\"body-img is-center\"><% } %><img src=\"<%= value.img %>\" alt=\"<%= __h2__ %>\"><% if (value.caption && value.caption != '') {
%><figcaption><%= value.caption %></figcaption><% } %></figure><% } %><% if (value.text != '') {
%><% if (value.textPos == 'bottom' || value.textPos == '') {
%><div class=body-text><%= __text__ %></div><% } %><% } %></figure></figure></figure></figure></figure></figure></section><% });
%></section></section></div><% } %></div></section></section>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var count = 1;
%><% if (title != \'\') {
%><header class=module--header><h2><%= title %><% if (subtitle && subtitle != \'\') {
%><span><%= subtitle %></span><% } %></h2></header><% } %><section class="module--content featured-panel"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (key == 0) {
%><header class=featured-panel--header><figure class=featured-panel--thumb><a href="<%= value.link + \'?utm_int=news_contents_easy_with-image\' %>"><img src="<%= value.image_uri %>" alt="<%= value.title %>"></a></figure><div class=featured-panel--summary><h1 class=content--header-title><a href="<%= value.link + \'?utm_int=news_contents_easy_with-image\' %>"><em class=title><%= value.title_with_ruby %></em><time datetime="<%= value.datetime %>"><%= value.date %></time></a></h1></div></header><% } %><% });
%><% if (0 < data.length) {
%><section class=featured-panel--items><ul class=featured-panel--list><% _.each(data, function(value,key) {
%><% if (1 <= key && key < limit) {
%><li><a href="<%= value.link + \'?utm_int=news_contents_easy_\' + (\'00\' + count).substr(-3) %>"><p><em class=title><%= value.title_with_ruby %></em><time datetime="<%= value.datetime %>"><%= value.date %></time></p></a></li><% count++;
%><% } %><% });
%></ul></section><% } %></section><footer class=module--footer><p class=button><a href="<%= link + \'?utm_int=news_contents_easy_more\' %>"><i class="i-arrow is-right_g"></i>もっと見る</a></p></footer>'
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var __count__ = 1;
var __query__ = \'\';
switch(category) {
case \'web\': __query__ = "";
break;
case \'business\': __query__ = "?utm_int=news-business_contents_tokushu-business_";
break;
} switch(page) {
case \'index\': __query__ = "?utm_int=news_contents_tokushu_";
break;
case \'detail\': if(category == \'business\') {
__query__ = "?utm_int=detail_contents_tokushu-business_";
} else {
__query__ = "?utm_int=detail_contents_tokushu_";
} break;
case \'tokushu-detail\': if(category == \'web\') {
__query__ = "?utm_int=tokushu-web-detail_contents_tokushu-web_";
} else if(category == \'business\') {
__query__ = "?utm_int=tokushu-business-detail_contents_tokushu-business_";
} break;
case \'newsup-detail\': __query__ = "?utm_int=netnewsup-detail_contents_tokushu_";
break;
} %><% if (title != \'\') {
%><header class=module--header><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--items><ul class="content--list grid--row"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (__count__ <= limit) {
%><li><a href="<%= value.file + __query__ + (\'00\' + __count__).substr(-3) + queryOption %>"><dl><dt><img src="<%= value.thumb %>" alt="<%= value.title %>"><dd><em class=title><%= value.title %></em><time><%= value.date %></time></dl></a></li><% __count__++;
%><% } else {
%><% return false;
%><% } %><% });
%></ul></div></section><footer class=module--footer><p class=button><a href="<%= link + __query__ + \'more\' + queryOption %>"><i class="i-arrow is-right_g"></i><% if (linkText) {
%><%= linkText %><% } else if (title) {
%><%= title %>一覧を見る<% } %></a></p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var count = 1;
%><div class=inner><ul><% _.each(data, function(value,key) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_header', 'imp', 'imp_sokuho_' + ('00' + (key + 1)).substr(-3), {
nonInteraction: true });
} %><% if (!value) {
return;
} %><li class=\"<%= key %>\"><% if (value.link != '') {
%><a href=\"<%= value.link + __pram__ + 'utm_int=all_header_link_sokuho_' + ('00' + count).substr(-3) %>\" onclick=\"ga('send', 'event', 'all_header', 'click', '<%= 'link_sokuho_' + ('00' + count).substr(-3) %>')\"><%= value.line %></a><% count++ %><% } else {
%> <span><%= value.line %></span><% } %></li><% });
%></ul><p>速報</p></div>";
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var __featured__ = null;
var __count__ = 1;
%><% if (!mobile) {
%><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (selected != 4) {
%><% if (parseInt(value.cate) !== 4) {
%><% if (value.imgPath != \'\') {
__featured__ = key;
%><header class=featured-panel--header><figure class=featured-panel--thumb><a href="<%= value.link + data.queryRoot + \'with-image\' + queryOption %>"><img src="<%= value.imgPath %>" alt="<%= value.title %>"></a></figure><div class=featured-panel--summary><% if (selected == 0 && value.cate_group) {
%><p class=content--header-category><% _.each(value.cate_group, function(value_cate,key_cate) {
%><span class=i-category><%= cate[value_cate].name %></span><% });
%></p><% } %><h1 class=content--header-title><a href="<%= value.link + data.queryRoot + \'with-image\' + queryOption %>"><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></a></h1><% if (value.relationNews.length) {
%><% if (selected != 4) {
%><% if (parseInt(value.cate) !== 4) {
%><dl class=content--related><dt>関連ニュース<% _.each(value.relationNews, function(value2,key2) {
%><% if (key2 < 2) {
%><dd><a href="<%= value2.link + data.queryRoot + \'relation_\' + (\'00\' + (key2 + 1)).substr(-3) + queryOption %>"><%= value2.title %></a><% } %><% });
%></dl><% } %><% } %><% } %></div></header><% return false;
%><% } %><% } %><% } %><% });
%><% } %><% if (selected == 4) {
%><section class="featured-panel--items is-single"><% } else if (mobile) {
%><section class="featured-panel--items is-single"><% } else if (__featured__ == null) {
%><section class="featured-panel--items is-single"><% } else {
%><section class=featured-panel--items><% } %><ul class=featured-panel--list><% _.each(data.channel.item, function(value,key) {
%><% if (__featured__ != key && __count__ < limit) {
%><li><a href="<%= value.link + data.queryRoot + (\'00\' + __count__).substr(-3) + queryOption %>"><% if (selected == 0) {
%><dl><dt><% if (value.cate_group) {
%><% _.each(value.cate_group, function(value_cate,key_cate) {
%><span class=i-category><%= cate[value_cate].name %></span><% });
%><% } %><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl><% } else {
%><p><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></p><% } %></a></li><% __count__++;
%><% } %><% });
%></ul></section></section></section></section>'
    }, function (e, t) {
        e.exports = '<% if (title != \'\') {
%><header class=module--header><h2><%= title %></h2></header><% } %><nav class="module--nav nav--tab none-mobile"><ul role=group><li data-target-genre=0 class="no-referrer is-active" role=tab tabindex=0 aria-selected=true>新着</li><li data-target-genre=1 class=no-referrer role=tab tabindex=0 aria-selected=false>社会</li><li data-target-genre=8 class=no-referrer role=tab tabindex=0 aria-selected=false>気象・災害</li><li data-target-genre=3 class=no-referrer role=tab tabindex=0 aria-selected=false>科学・文化</li><li data-target-genre=4 class=no-referrer role=tab tabindex=0 aria-selected=false>政治</li><li data-target-genre=5 class=no-referrer role=tab tabindex=0 aria-selected=false>ビジネス</li><li data-target-genre=6 class=no-referrer role=tab tabindex=0 aria-selected=false>国際</li><li data-target-genre=7 class=no-referrer role=tab tabindex=0 aria-selected=false>スポーツ</li><li data-target-genre=2 class=no-referrer role=tab tabindex=0 aria-selected=false>暮らし</li><li data-target-genre=9 class=no-referrer role=tab tabindex=0 aria-selected=false>地域</li></ul></nav><section class="module--content featured-panel" role=tabpanel></section><nav class="module--nav nav--tab-select none-screen"><label class="nav--genre-select button"><select id=genre-select class=genre-select><option value=0 data-target=0 selected>新着<option value=1 data-target=1>社会<option value=8 data-target=2>気象・災害<option value=3 data-target=3>科学・文化<option value=4 data-target=4>政治<option value=5 data-target=5>ビジネス<option value=6 data-target=6>国際<option value=7 data-target=7>スポーツ<option value=2 data-target=8>暮らし<option value=9 data-target=9>地域</select></label></nav><footer class=module--footer><p class=button><a href="/news/catnew.html?utm_int=news_contents_news-genre-new_more<%= queryOption %>"><i class="i-arrow is-right_g"></i><span>新着</span>のニュース一覧を見る</a></p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1 + length;
%><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var __code__ = ('00' + __count__).substr(-3);
%><li><% if (queryOption) {
%><a href=\"<%= directory + value.link + __pram__ + data.queryRoot + __code__ + queryOption %>\"><% } else {
%><a href=\"<%= directory + value.link + __pram__ + data.queryRoot + __code__ %>\"><% } %><%= value.word %></a></a></li><% __count__++ %><% });
%>"
    }, function (e, t) {
        e.exports = "<% if (imgPath && imgPath != '') {
%><dl><dt><img src=\"/news/<%= imgPath %>\" alt=\"<%= title %>\"><dd><% if (title && title != '') {
%><p class=content--title><%= title %></p><% } %><% if (comment && comment != '') {
%><p class=content--comment><%= comment %></p><% } %></dl><% } else {
%><% if (title && title != '') {
%><p class=content--title><%= title %></p><% } %><% if (comment && comment != '') {
%><p class=content--comment><%= comment %></p><% } %><% } %>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var count = 1 + offset;
%><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><li><a href="<%= value.link + data.queryRoot + (\'00\' + count).substr(-3) %>"><dl><dt><img class=is-load src="<%= value.iconPath %>" alt="<%= value.title %>"><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></li><% count++;
%><% });
%>'
    }, function (e, t) {
        e.exports = '<% if (title != \'\') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><div class=content--items><ul class="content--list grid--col-single"></ul></div></section><footer class="module--footer button-more"><p class=button tabindex=0 role=button><i class="i-arrow is-down_g"></i>もっと見る</p></footer>'
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><article class="module module--live-free-space"><%= data.html %></article>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1;
%><header class=module--header><h2>関連リンク</h2></header><section class=module--content><div class=content--items><ul class=\"content--list grid--list\"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><li><a href=\"<%= value.link + queryRoot + ('00' + __count__).substr(-3) %>\"><% if (value.imgPath && value.imgPath != '') {
%><dl><dt><img class=is-load src=\"/news/<%= value.imgPath %>\" alt=\"<%= value.title %>\"><dd><% if (value.title && value.title != '') {
%><p class=content--title><%= value.title %></p><% } %><% if (value.description && value.description != '') {
%><p class=content--comment><%= value.description %></p><% } %></dl><% } else {
%><p><em class=title><%= value.title %></em><% if (value.datetime !== '') {
%><time datetime=\"<%= value.datetime %>\"><%= value.time %></time><% } else {
%><time><%= value.time %></time><% } %></p><% } %></a></li><% __count__++;
%><% });
%></ul></div></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1 + offset;
var __num__ = num + 1;
%><% _.each(data.channel.item, function(value,key) {
%><% if (!value) return;
%><% if (__count__ <= limit) {
%><li><% if (title != '') {
%><a href=\"<%= value.link + queryRoot + ('00' + __num__).substr(-3) + '_' + ('00' + __count__).substr(-3) + '&word_result=' + title %>\"><% } else {
%><a href=\"<%= value.link + queryRoot + ('00' + __num__).substr(-3) + '_' + ('00' + __count__).substr(-3) %>\"><% } %><dl><dt><img class=is-load src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></a></li><% } %><% __count__++;
%><% });
%>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1;
var __num__ = num + 1;
%><section class=\"module module--list-items\"><% if (title != '') {
%><header class=module--header><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--items><ul class=\"content--list grid--col-single\"><% _.each(data.channel.item, function(value,key) {
%><% if (!value) return;
%><% if (__count__ <= limit) {
%><li><% if (title != '') {
%><a href=\"<%= value.link + queryRoot + ('00' + __num__).substr(-3) + '_' + ('00' + __count__).substr(-3) + '&word_result=' + title %>\"><% } else {
%><a href=\"<%= value.link + queryRoot + ('00' + __num__).substr(-3) + '_' + ('00' + __count__).substr(-3) %>\"><% } %><dl><dt><img class=is-load src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></a></li><% } %><% __count__++;
%><% });
%></ul></div></section><footer class=module--footer><p class=button><a href=\"<%= '/news/word/' + id + '.html' + queryRoot + ('00' + __num__).substr(-3) + '_more' %>\"><i class=\"i-arrow is-right_g\" aria-hidden=true></i>もっと見る</a></p></footer></section>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% if(data.title !== "") {
%><header class=module--header><h1><%= data.title %></h1></header><% } %><% _.each(data.stream, function(value,key) {
%><% if (!value) {
return;
} %><section class=module--content><figure class=content--video><div class=video-player-fixed><iframe id="player<%= key %>" src="<%= value.videoMix %>" allowfullscreen></iframe></div></figure><% if(value.caption !== "") {
%><div class=content--summary><p><%= value.caption %></p></div><% } %><div class="module--footer button-refresh"><p class=button tabindex=0 role=button data-target="#player<%= key %>" data-video-pr="<%= value.videoPri %>" data-video-bk="<%= value.videoBuc %>" onclick="ga(\'send\', \'event\', \'live_contents\', \'click\', \'btn_switch\')">映像の復旧<i class="i-arrow is-refresh" aria-hidden=true></i></p></div></section><% });
%>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><section class=content--items><ul class=\"content--list grid--list\"><% var count = 1;
%><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < limit) {
%><li><a href=\"<%= value.link %>\" onclick=\"ga('send', 'event', 'news_contents', 'click', '<%= 'link_local-item-list_' + ('00' + count).substr(-3) %>')\"><p><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time><% if (value.video || value.new) {
%><span class=i-items--group><% } %><% if (value.video) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.video || value.new) {
%></span><% } %></p></a></li><% } %><% });
%></ul></section>"
    }, function (e, t) {
        e.exports = '<header class=module--header><h2>地域</h2></header><nav class="module--nav nav--local"><h2 class=nav--local-title><span></span>のニュース</h2><div class="nav--local-uiset none-mobile"><label class="nav--local-select button"><select id=local-select class=local-select><optgroup label=地域を選択する><optgroup label=北海道><option value=0>北海道<optgroup label=東北><option value=1>宮城<option value=2>青森<option value=3>岩手<option value=4>秋田<option value=5>山形<option value=6>福島<optgroup label=関東甲信越><option value=7>首都圏<option value=8>茨城<option value=9>栃木<option value=10>群馬<option value=11>埼玉<option value=12>千葉<option value=13>神奈川<option value=14>新潟<option value=15>山梨<option value=16>長野<optgroup label=東海・北陸><option value=17>愛知<option value=18>富山<option value=19>石川<option value=20>福井<option value=21>岐阜<option value=22>静岡<option value=23>三重<optgroup label=近畿><option value=24>大阪<option value=25>滋賀<option value=26>京都<option value=27>兵庫<option value=28>奈良<option value=29>和歌山<optgroup label=中国><option value=30>広島<option value=31>鳥取<option value=32>島根<option value=33>岡山<option value=34>山口<optgroup label=四国><option value=35>愛媛<option value=36>徳島<option value=37>香川<option value=38>高知<optgroup label=九州・沖縄><option value=39>福岡<option value=40>北九州<option value=41>佐賀<option value=42>長崎<option value=43>熊本<option value=44>大分<option value=45>宮崎<option value=46>鹿児島<option value=47>沖縄</optgroup></optgroup></optgroup></optgroup></optgroup></optgroup></optgroup></optgroup></optgroup></select></label><p class="nav--local-link button local-link none-mobile"><a href=/shutoken-news/ onclick="ga(\'send\', \'event\', \'news_contents\', \'click\', \'btn_local-area\')"><i class="i-arrow is-right_g"></i><span></span>のニュース一覧</a></p></div></nav><section class=module--content></section><nav class="module--nav nav--local none-screen"><div class=nav--local-uiset><label class="nav--local-select button"><select id=local-select class=local-select><option value=0>北海道<option value=1>宮城<option value=2>青森<option value=3>岩手<option value=4>秋田<option value=5>山形<option value=6>福島<option value=7>首都圏<option value=8>茨城<option value=9>栃木<option value=10>群馬<option value=11>埼玉<option value=12>千葉<option value=13>神奈川<option value=14>新潟<option value=15>山梨<option value=16>長野<option value=17>愛知<option value=18>富山<option value=19>石川<option value=20>福井<option value=21>岐阜<option value=22>静岡<option value=23>三重<option value=24>大阪<option value=25>滋賀<option value=26>京都<option value=27>兵庫<option value=28>奈良<option value=29>和歌山<option value=30>広島<option value=31>鳥取<option value=32>島根<option value=33>岡山<option value=34>山口<option value=35>愛媛<option value=36>徳島<option value=37>香川<option value=38>高知<option value=39>福岡<option value=40>北九州<option value=41>佐賀<option value=42>長崎<option value=43>熊本<option value=44>大分<option value=45>宮崎<option value=46>鹿児島<option value=47>沖縄</select></label></div></nav><footer class="module--footer none-screen"><p class="button local-link"><a href=/shutoken-news/ onclick="ga(\'send\', \'event\', \'news_contents\', \'click\', \'btn_local-area\')"><i class="i-arrow is-right_g"></i><span></span>のニュース一覧を見る</a></p></footer><footer class=module--footer><p class=button><a href="<%= link + \'?utm_int=news_contents_news-local_more\' %>"><i class="i-arrow is-right_g"></i>地域のニュース一覧を見る</a></p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __featured__ = null;
var __count__ = 1;
%><% if (title != '') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><div class=content--header><% if (value.imgPath && value.imgPath != '') {
%><figure class=content--thumb><a href=\"<%= value.link + '?utm_int=news-business_contents_news-main_' + ('00' + (key + 1)).substr(-3) %>\"><img src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"></a></figure><div class=content--summary><% } else {
%><div class=\"content--summary no-thumbnail\"><% } %><h1 class=content--header-title><a href=\"<%= value.link + '?utm_int=news-business_contents_news-main_' + ('00' + (key + 1)).substr(-3) %>\"><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time><% if (value.videoPath!='' || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath!='') {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath!='' || value.new) {
%></span><% } %></a></h1></div></div><% __featured__ = key;
%><% return false;
%><% });
%><% if (1 < data.length) {
%><div class=content--items><ul class=\"content--list grid--col\"><% _.each(data, function(value,key) {
%><% if (__featured__ != key && __count__ < limit) {
%><li><a href=\"<%= value.link + '?utm_int=news-business_contents_news-main_' + ('00' + (key + 1)).substr(-3) %>\"><dl><dt><img src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></li><% __count__++;
%><% } %><% });
%></ul></div><% } %></div></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __count__ = 1;
%><% if (title != '') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><div class=content--items><ul class=\"content--list grid--row-wide\"><% _.each(data.channel.item, function(value,key) {
%><% if (__count__ <= limit) {
%><% if (value.videoPath && value.videoPath != '') {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><li><a href=\"<%= value.link + __pram__ + 'utm_int=lnews_contents_news-main_' + ('00' + __count__).substr(-3) %>\"><dl><dt><img src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></li><% __count__++;
%><% } %><% } %><% });
%></ul></div></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __featured__ = null;
var __count__ = 1;
var __index__ = 1;
%><% if (title != '') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (!category || category == value.cate) {
__featured__ = key;
%><div class=content--header><% if (value.imgPath && value.imgPath != '') {
%><figure class=content--thumb><a href=\"<%= value.link + '?utm_int=news_contents_news-main_' + ('00' + (__index__)).substr(-3) + queryOption %>\"><img src=\"<%= value.imgPath %>\" alt=\"<%= value.title %>\"><% if (mode && mode == 'b' && value.videoPath) {
%><i class=\"i-media-video is-medium\"><i class=i-arrow></i></i><% } %></a></figure><div class=content--summary><% } else {
%><div class=\"content--summary no-thumbnail\"><% } %><% if (value.title && value.title != '') {
%><h1 class=content--header-title><a href=\"<%= value.link + '?utm_int=news_contents_news-main_' + ('00' + (__index__)).substr(-3) + queryOption %>\"><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time></a><% if (value.videoPath || value.new || value.word.length > 0) {
%><span class=i-items--group><% } %><% if (mode != 'b' && value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.word.length > 0) {
%><% _.each(value.word, function(value1,key1) {
%><% if (key1 < 1) {
%><% var __pram__ = new RegExp(/\\?/).test(value1.link) ? '&' : '?';
%><a href=\"<%= value1.link + __pram__ + 'utm_int=news_contents_news-main-tag_' + ('00' + (__index__)).substr(-3) + queryOption %>\"><i class=i-word><%= value1.title %></i></a><% } %><% });
%><% } %><% if (value.videoPath || value.new || value.word.length > 0) {
%></span><% } %></h1><% } %><% if (value.relationNews.length) {
%><dl class=content--related><dt>関連ニュース<% _.each(value.relationNews, function(value2,key2) {
%><% if (key2 < 2) {
%><dd><a href=\"<%= value2.link + '?utm_int=news_contents_news-main_' + ('00' + (__index__)).substr(-3) + '_relation_' + ('00' + (key2 + 1)).substr(-3) + queryOption %>\"><%= value2.title %></a><% } %><% });
%></dl><% } %></div></div><% __index__++;
%><% return false;
%><% } %><% });
%><% if (0 < data.channel.item.length) {
%><div class=content--items><ul class=\"content--list grid--col\"><% _.each(data.channel.item, function(value,key) {
%><% if (__featured__ != key && __count__ < limit) {
%><% if (!category || category == value.cate) {
%><li><dl><dt><a href=\"<%= value.link + '?utm_int=news_contents_news-main_' + ('00' + (__index__)).substr(-3) + queryOption %>\"><img src=\"<%= value.iconPath %>\" alt=\"<%= value.title %>\"><% if (mode && mode == 'b' && value.videoPath) {
%><i class=i-media-video><i class=i-arrow></i></i><% } %></a><dd><a href=\"<%= value.link + '?utm_int=news_contents_news-main_' + ('00' + (__index__)).substr(-3) + queryOption %>\"><em class=title><%= value.title %></em><time datetime=\"<%= value.datetime %>\"><%= value.date %></time></a><% if (value.videoPath || value.new || value.word.length > 0) {
%><span class=i-items--group><% } %><% if (mode != 'b' && value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.word.length > 0) {
%><% _.each(value.word, function(value1,key1) {
%><% if (key1 < 1) {
%><% var __pram__ = new RegExp(/\\?/).test(value1.link) ? '&' : '?';
%><a href=\"<%= value1.link + __pram__ + 'utm_int=news_contents_news-main-tag_' + ('00' + (__index__)).substr(-3) + queryOption %>\"><i class=i-word><%= value1.title %></i></a><% } %><% });
%><% } %><% if (value.videoPath || value.new || value.word.length > 0) {
%></span><% } %></dl></li><% __index__++ %><% __count__++;
%><% } %><% } %><% });
%></ul></div><% } %></div></section><footer class=module--footer><p class=button><a href=\"<%= link + '?utm_int=news_contents_news-main_more' + queryOption %>\"><i class=\"i-arrow is-right_g\"></i>新着ニュース一覧を見る</a></p></footer>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% if (title != \'\') {
%><header class=module--header><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--items><ul class="content--list grid--row grid--col-mobile"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < limit) {
%><li><a href="<%= value.link + \'?utm_int=news_contents_news-movie_\' + (\'00\' + (key + 1)).substr(-3) + \'&movie=true\' + queryOption %>"><dl><dt><img src="<%= value.iconPath %>" alt="<%= value.title %>"><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.new) {
%><span class=i-items--group><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.new) {
%></span><% } %></dl></a></li><% } %><% });
%></ul></div></section><footer class=module--footer><p class=button><a href="<%= link + \'?utm_int=news_contents_news-movie_more\' + queryOption %>"><i class="i-arrow is-right_g"></i>動画ニュース一覧を見る</a></p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><header class=module--header><h1>動画ニュース</h1></header><section class=module--content><div class=content--header><% if (video != '') {
%><figure class=content--video><iframe class=video-player src=\"<%= video %>\" width=360 height=202 allowfullscreen></iframe></figure><% } %><div class=content--summary><dl class=content--title><dt>Pickup NEWS<% if (data.title != '') {
%><dd><%= data.title %><% } %></dl><% if (data.comment != '') {
%><div class=content--date><p><%= data.comment %></p></div><% } %><% if (data.description != '') {
%><dl class=content--contained><dt>収録内容<dd><%= data.description %></dl><% } %></div></div></section>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><article class="module module--realtime-free-space"><%= data.html %></article>'
    }, 56, 57, 58, 59, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < 5) {
%><div class=content--header><a href="<%= value.link + data.queryRoot + (\'00\' + (key + 1)).substr(-3) %>"><figure class=content--thumb><img class=is-load src="<%= value.iconPath %>" alt="<%= value.title %>"></figure><section class=content--summary><h1 class=content--header-title><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></h1><p class=content--header-body><%= value.description %></p></section></a><footer class="module--footer back-link"><p class=button><a href="<%= value.link + data.queryRoot + (\'00\' + (key + 1)).substr(-3) + \'_more\' %>"><i class="i-arrow is-right_g"></i>続きを見る</a></p></footer></div><% } else {
%><% return false;
%><% } %><% });
%><% if (5 <= data.channel.item.length) {
%><div class=content--items><ul class="content--list grid--col-operation"><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (5 <= key) {
%><li><a href="<%= value.link + data.queryRoot + (\'00\' + (key + 1)).substr(-3) %>"><div class=list-item><p><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></p><figure class=content--thumb><img class=is-load src="<%= value.iconPath %>" alt="<%= value.title %>"></figure></div></a></li><% } %><% });
%></ul></div><% } %>'
    }, function (e, t) {
        e.exports = "<% if (title != '') {
%><header class=module--header><h1><%= title %><b class=lede><%= lede %></b></h1></header><% } %><section class=module--content></section>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% if (title != \'\') {
%><header class=module--header><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--items><ul class="content--list grid--row grid--col-mobile"><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < limit) {
%><li><a href="<%= value.link + \'?utm_int=news_contents_netnewsup_\' + (\'00\' + (key + 1)).substr(-3) + queryOption %>"><dl><dt><img src="<%= value.iconPath %>" alt="<%= value.title %>"><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></li><% } %><% });
%></ul></div></section><footer class=module--footer><p class=button><a href="<%= link + \'?utm_int=news_contents_netnewsup_more\' + queryOption %>"><i class="i-arrow is-right_g"></i><% if (linkText) {
%><%= linkText %><% } else if (title) {
%><%= title %>一覧を見る<% } %></a></p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><header class=module--header><h2>ニュース番組の見どころ</h2></header><section class=module--content><% _.each(data.list, function(value,key) {
%><% if (!value) {
return;
} %><article class=grid--col-once><a onclick=\"ga('send', 'event', 'news_contents', 'click', '<%= 'link_program-info_' + ('00' + (key + 1)).substr(-3) %>')\" href=\"<%= value.url.pc + '?utm_int=news_contents_program-info_' + ('00' + (key + 1)).substr(-3) %>\" target=_blank><figure class=\"content--thumb border\"><img src=\"<%= value.program_logo.url %>\" alt=\"<%= value.title %>\"></figure><div class=content--summary><h2 class=program--title><%= value.title %></h2><p class=program--channel><%= value.ch.name + '　' + value.time_txt %></p><p class=program--contained><%= value.subtitle %></p></div></a></article><% });
%></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_contents', 'imp', 'imp_realtime_' + ('00' + (key + 1)).substr(-3), {
nonInteraction: true });
} %><% if(value.type === \"image\") {
%> <a href=\"<%= value.link + '?' + queryRoot + ('00' + (key + 1)).substr(-3) + queryOption %>\" onclick=\"ga('send', 'event', 'all_contents', 'click', '<%= 'link_realtime_' + ('00' + (key + 1)).substr(-3) %>')\"><p class=is-image><img src=\"<%= value.imgPath %>\" alt=\"<%= value.imgAlt %>\" title=\"<%= value.imgAlt %>\"></p></a><% } else if(value.type === \"html\") {
%><%= value.html %><% } else {
%> <a class=is-default href=\"<%= value.link + '?' + queryRoot + ('00' + (key + 1)).substr(-3) + queryOption %>\" onclick=\"ga('send', 'event', 'all_contents', 'click', '<%= 'link_realtime_' + ('00' + (key + 1)).substr(-3) %>')\"><dl><dt><i class=i-kind1>LIVE</i><dd><%= value.title %></dl></a><% } %><% });
%>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><div class=inner><dl><dt><%= data.title %><dd><%= data.description %></dl></div>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% if (title != '') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < 4) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><div class=content--header><a href=\"<%= value.link + __pram__ + 'utm_int=special_contents_list-items_' + ('00' + (key + 1)).substr(-3) %>\"><figure class=content--thumb><img class=is-load src=\"<%= directory %><%= value.imgPath %>\" alt=\"<%= value.title %>\"></figure><section class=content--summary><h1 class=content--header-title><em class=title><%= value.title %></em></h1><p class=content--header-body><%= value.description %></p></section></a><footer class=\"module--footer back-link\"><p class=button><a href=\"<%= value.link + __pram__ + 'utm_int=special_contents_list-items_' + ('00' + (key + 1)).substr(-3) + '_more' %>\"><i class=\"i-arrow is-right_g\"></i>コンテンツを見る</a></p></footer></div><% } else {
%><% return false;
%><% } %><% });
%><% if (4 <= data.item.length) {
%><div class=content--items><ul class=\"content--list grid--col-operation\"><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (4 <= key) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><li><a href=\"<%= value.link + __pram__ + 'utm_int=special_contents_list-items_' + ('00' + (key + 1)).substr(-3) %>\"><div class=list-item><p><em class=title><%= value.title %></em></p><figure class=content--thumb><img class=is-load src=\"<%= directory %><%= value.imgPath %>\" alt=\"<%= value.title %>\"></figure></div></a></li><% } %><% });
%></ul></div><% } %></section>";
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var __query__ = '';
switch(page) {
case 'index': __query__ = \"utm_int=news_contents_special_\";
break;
case 'detail': __query__ = \"utm_int=detail_contents_special_\";
break;
case 'newsup-detail': __query__ = \"utm_int=netnewsup-detail_contents_special_\";
break;
default: __query__ = \"utm_int=news_contents_special_\";
break;
} %><header class=module--header><h2>スペシャルコンテンツ</h2></header><section class=module--content><div class=content--items><ul class=\"content--list grid--row\"><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < 4) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><li><a href=\"<%= value.link + __pram__ + __query__ + ('00' + (key + 1)).substr(-3) + queryOption %>\"><dl><dt><img src=\"<%= directory %><%= value.imgPath %>\" alt=\"<%= value.title %>\"><dd><em class=title><%= value.title %></em></dl></a></li><% } %><% });
%></ul><% if (4 < data.item.length) {
%><ul class=\"content--list grid--col\"><% _.each(data.item, function(value,key) {
%><% if (4 <= key && key < limit) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><li><p><a href=\"<%= value.link + __pram__ + __query__ + ('00' + (key + 1)).substr(-3) + queryOption %>\"><em class=title><%= value.title %></em></a></p></li><% } %><% });
%></ul><% } %></div></section><footer class=module--footer><p class=button><a href=\"<%= link + '?' + __query__ + 'more' + queryOption %>\"><i class=\"i-arrow is-right_g\"></i>スペシャルコンテンツ一覧を見る</a></p></footer>"
    }, function (e, t) {
        e.exports = '<% if (title != \'\') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content><nav class="module--nav nav--tab-fluid col-2"><ul><li class=sort-new role=button>新着順</li><li class=sort-num role=button>記事本数順</li></ul></nav><section class=content--items><ul class="module--nav nav--tags" role=navigation></ul></section></section>'
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var __query__ = \'\';
switch(category) {
case \'web\': __query__ = "?utm_int=tokushu-web_contents_list-items_";
break;
case \'business\': __query__ = "?utm_int=tokushu-business_contents_list-items_";
break;
default: __query__ = "?utm_int=tokushu-new_contents_list-items_";
break;
} %><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (key < 5) {
%><div class=content--header><a href="<%= value.file + __query__ + (\'00\' + (key + 1)).substr(-3) %>"><figure class=content--thumb><img class=is-load src="<%= value.thumb %>" alt="<%= value.title %>"></figure><section class=content--summary><h1 class=content--header-title><em class=title><%= value.title %></em><time><%= value.date %></time></h1><p class=content--header-body><%= value.description %></p></section></a><footer class="module--footer back-link"><p class=button><a href="<%= value.file + __query__ + (\'00\' + (key + 1)).substr(-3) + \'_more\' %>"><i class="i-arrow is-right_g"></i>続きを見る</a></p></footer></div><% } else {
%><% return false;
%><% } %><% });
%><% if (5 <= data.length) {
%><div class=content--items><ul class="content--list grid--col-operation"><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (5 <= key) {
%><li><a href="<%= value.file + __query__ + (\'00\' + (key + 1)).substr(-3) %>"><div class=list-item><p><em class=title><%= value.title %></em><time><%= value.date %></time></p><figure class=content--thumb><img class=is-load src="<%= value.thumb %>" alt="<%= value.title %>"></figure></div></a></li><% } %><% });
%></ul></div><% } %>'
    }, function (e, t) {
        e.exports = '<% if (title != \'\') {
%><header class=module--header><h1><%= title %></h1></header><% } %><section class=module--content></section><footer class="module--footer button-more"><p class=button tabindex=0 role=button><i class="i-arrow is-down_g"></i>もっと見る</p></footer>'
    }, function (e, t) {
        e.exports = "<% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'news_contents', 'imp', 'imp_sokuho-tsunami', {
nonInteraction: true });
} %><div class=inner><header><h1>津波情報</h1><p><a href=\"<%= link %>\" onclick=\"ga('send', 'event', 'news_contents', 'click', 'link_sokuho-tsunami')\"><i class=\"i-arrow is-right_g\"></i>詳しくはこちら</a></p></header><% if (imgPath) {
%><figure><a href=\"<%= link %>\" onclick=\"ga('send', 'event', 'news_contents', 'click', 'link_sokuho-tsunami')\"><img src=\"<%= imgPath %>\" alt=津波情報></a></figure><% } %><% if (title) {
%><h2><%= title %></h2><% } %><% if (desc) {
%><p><%= desc %></p><% } %></div>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_contents', 'imp', 'imp_tv-news', {
nonInteraction: true });
} %><% if(data.type === \"image\") {
%> <a href=\"<%= data.link %>?utm_int=all_contents_tv-news_live<%= queryOption %>\" onclick=\"ga('send', 'event', 'all_contents', 'click', 'link_tv-news')\"><p class=is-image><img src=\"<%= data.imgPath %>\" alt=\"<%= data.imgAlt %>\" title=\"<%= data.imgAlt %>\"></p></a><% } else if(data.type === \"html\") {
%><%= data.html %><% } else {
%> <a class=is-default href=\"<%= data.link %>?utm_int=all_contents_tv-news_live<%= queryOption %>\" onclick=\"ga('send', 'event', 'all_contents', 'click', 'link_tv-news')\"><dl><dt><i class=i-tvnews-text aria-hidden=true><% if(data.icon && data.icon != '') {
%><%= data.icon %><% } else {
%><%= icon %><% } %></i><dd><%= data.title %></dl></a><% } %>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% if (title != \'\') {
%><% if (data.tomorrow) {
%><header class=module--header><% } else {
%><header class="module--header no-tab"><% } %><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--main><% if (data.tomorrow) {
%><nav class="module--nav nav--tab-fluid col-2"><ul><li class=today role=button>きょう</li><li class=tomorrow role=button>あす</li></ul></nav><% } %><figure class="content--thumb tab-panel--thumb"><ul><% _.each(data.image, function(value,key) {
%><% if (data.maintenance) {
%><li class="maintenance border"><img src="<%= value %>" alt=データ更新中></li><% } else {
%><li><img src="<%= value %>" alt="<%= title %>"></li><% } %><% });
%></ul></figure></div><% if (data.comment) {
%><div class=content--summary><p><%= data.comment %><br>（<%= data.time %>更新）</p></div><% } %></section><% if (link != \'\') {
%><footer class=module--footer><p class=button><a href="<%= link %>" onclick="ga(\'send\', \'event\', \'saigai_contents\', \'click\', \'link_weather-overview-more\')"><i class="i-arrow is-right_g"></i><%= linkText %></a></p></footer><% } %></header>'
    }, function (e, t) {
        e.exports = "<% if (title != '') {
%><header class=module--header><h2><%= title %></h2></header><% } %><section class=module--content><div class=content--header><figure class=content--video><% if (video != '') {
%><iframe class=video-player src=\"<%= video %>\" width=360 height=202 allowfullscreen></iframe><% } %></figure><% if (description != '') {
%><div class=content--summary><p><%= description %></p></div><% } %></div></section>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var count = 1 + offset;
%><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><li><% if (title != \'\') {
%><a href="<%= value.link + data.queryRoot + (\'00\' + count).substr(-3) + \'&word_result=\' + title %>"><% } else {
%><a href="<%= value.link + data.queryRoot + (\'00\' + count).substr(-3) %>"><% } %><dl><dt><img class=is-load src="<%= value.iconPath %>" alt="<%= value.title %>"><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time><% if (value.videoPath || value.new) {
%><span class=i-items--group><% } %><% if (value.videoPath) {
%><i class=i-video>動画</i><% } %><% if (value.new) {
%><i class=i-new>NEW</i><% } %><% if (value.videoPath || value.new) {
%></span><% } %></dl></a></a></li><% count++;
%><% });
%>'
    }, function (e, t) {
        e.exports = '<header class=module--header><h1></h1></header><section class=module--content><div class=content--items><ul class="content--list grid--col-single"></ul></div></section><footer class="module--footer button-more"><p class=button tabindex=0 role=button><i class="i-arrow is-down_g"></i>もっと見る</p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% _.each(data, function(value,key) {
%><% if (!value) {
return;
} %><% if (value.img && value.enabled) {
%><% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_side', 'imp', 'imp_aside_banner_' + ('00' + (key + 1)).substr(-3), {
nonInteraction: true });
} %><section class=\"module_aside--content border\" data-cat=\"<%= value.cat %>\"><a class=button href=\"<%= value.link %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'banner_aside-banner_' + ('00' + (key + 1)).substr(-3) %>')\" target=\"<% value.another_window=='1' ? '_blank' : '_self' ;
%>\"><img src=\"<%= directory %><%= value.img %>\" alt=\"<%= value.txt %>\"></a></section><% } %><% });
%>"
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><header class=module_aside--header><h2>地震情報</h2></header><section class=module_aside--content><figure class=content_aside--thumb><a href="<%= link + query + data.items.query + queryOption %>"><img src="<%= link %><%= data.items.image %>" alt="震源地：<%= data.items.place %>"></a></figure><div class=content_aside--summary><p><%= data.recode %><%= data.items.time %>&nbsp;<%= data.items.shindo %>の地震がありました</p><p>震源地：<%= data.items.place %></p></div></section><footer class=module_aside--footer><p class=button><a href="<%= link + query + data.items.query + queryOption %>"><i class="i-arrow is-right_g"></i>詳しくはこちら</a></p></footer>'
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% if (title != \'\') {
%><header class=module_aside--header><h2><%= title %></h2></header><% } %><section class=module_aside--content><div class=content--items><ol class="content--list grid--col-news"><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><li><a href="<%= value.link + \'?utm_int=all_side_business-news_\' + (\'00\' + (key + 1)).substr(-3) %>"><dl><dt><div class=thumb><img src="<%= value.iconPath %>" alt="<%= value.title %>"></div><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time></dl></a></li><% });
%></ol></div></section><% if (link != \'\') {
%><footer class=module_aside--footer><p class=button tabindex=0 role=button><a href="<%= link + \'?utm_int=all_side_business-news_more\' %>"><i class="i-arrow is-right_g"></i><%= linkText %></a></p></footer><% } %>'
    }, function (e, t) {
        e.exports = '<% if (!data) {
return;
} %><% var __count__ = 1;
%><header class=module_aside--header><h2>動画アクセスランキング</h2></header><section class=module_aside--content><div class=content--items><ol class="content--list grid--col-movie"><% _.each(data.channel.item, function(value,key) {
%><% if (!value) {
return;
} %><% if (value.videoPath != \'\') {
%><% if (__count__ <= limit) {
%><li><a href="<%= value.link + \'?utm_int=all_side_movie-ranking_\' + (\'00\' + __count__).substr(-3) + \'&movie=true\' %>"><dl><dt><div class=thumb><img src="<%= value.iconPath %>" alt="<%= value.title %>"><% if (value.videoDuration && value.videoDuration!=\'\') {
%><span class=video-duration><%= value.videoDuration %></span><% } %></div><dd><em class=title><%= value.title %></em><time datetime="<%= value.datetime %>"><%= value.date %></time></dl></a></li><% __count__++;
%><% } else {
%><% return false;
%><% } %><% } %><% });
%></ol></div></section><footer class="module_aside--footer button-more"><p class=button tabindex=0 role=button><i class="i-arrow is-down_g"></i>もっと見る</p></footer>'
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><header class=module_aside--header><h2>おすすめコンテンツ</h2></header><section class=module_aside--content><div class=content--items><ul class=\"content--list grid--col-recommend\"><% _.each(data.item, function(value,key) {
%><% if (!value) {
return;
} %><% if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_side', 'imp', 'imp_aside-recommend_' + ('00' + (key + 1)).substr(-3), {
nonInteraction: true });
} %><li><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_aside-recommend_' + ('00' + (key + 1)).substr(-3) %>')\"><% if (value.imgPath != '') {
%><figure class=content--thumb><img src=\"<%= directory %><%= value.imgPath %>\" alt=\"<%= value.title %>\"></figure><% } %><div class=content--summary><% if (value.description != '') {
%><p class=recommend--caption><%= value.description %></p><% } %><% if (value.title != '') {
%><h3 class=recommend--title><%= value.title %></h3><% } %></div></a></li><% });
%></ul></div></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% if (title != '') {
%><header class=module_aside--header><h2><%= title %></h2></header><% } %><section class=module_aside--content><div class=\"content--items content--accordion is-current\"><nav class=\"module--nav nav--accordion none-screen\"><p class=\"nav--button button\"><span><%= title %></span><i class=i-toggle></i></p></nav><ul class=\"content--list grid--list\"><% _.each(data.item, function(value,key) {
%><li><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'saigai_side', 'click', '<%= 'link_saigai-'+ category +'_' + ('00' + (key + 1)).substr(-3) %>')\"><p><%= value.title %></p></a></li><% });
%></ul></div></section>"
    }, function (e, t) {
        e.exports = "<section class=\"module_aside--content border\"><a href=/news/news_bousai_app/ onclick=\"ga('send', 'event', 'all_side', 'click', 'banner_newsapp')\"><img src=/news/parts16/images/common/newsapp.jpg alt=ニュース・防災アプリ　最新ニュースや災害情報をいち早くお届けする公式アプリです></a></section><section class=\"module_aside--content border\"><a href=http://scoopbox.nhk.or.jp onclick=\"ga('send', 'event', 'all_side', 'click', 'banner_scoopbox')\"><img src=/news/parts16/images/common/scoopbox.jpg alt=\"NHK スクープBOX　災害、事件――みなさまが撮影した映像がニュースになります\"></a></section><section class=module_aside--content><a href=https://www3.nhk.or.jp/news/contents/newspost/ onclick=\"ga('send', 'event', 'all_side', 'click', 'banner_newspost')\"><img src=/news/parts16/images/common/newspost.jpg alt=\"NHK ニュースポスト／ニュース投稿サイト／NHK報道局が調査報道のきっかけとなる情報を求めます\"></a></section>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% var count1 = 1;
%><% _.each(data.data, function(value0, key0) {
%><% if (data.data[key0][\"midashiTitle\"] != '') {
%><header class=module_aside--header><h2><%= data.data[key0][\"midashiTitle\"] %></h2></header><% } %><section class=module_aside--content><div class=content--items><ul class=\"content--list grid--col-announce\"><% var count2 = 1;
%><% _.each(data.data[key0][\"item\"], function(value,key) {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
var code = ('00' + count1).substr(-3) + '_' + ('00' + count2).substr(-3);
if(typeof ga !== \"undefined\") {
ga('send', 'event', 'all_side', 'imp', 'imp_sdc_' + code, {
nonInteraction: true });
} %><% if (value.kind === '1') {
%><li class=announce--live><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><dt><i class=i-kind1>LIVE</i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '2') {
%><li class=\"content--announce announce--occurrence\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><dt><i class=i-kind2>特設</i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '3' || value.special === 'kakuchi') {
%><li class=\"content--announce announce--disaster\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><dt><i class=i-kind3>災害</i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '4' || value.special === 'tkeihou') {
%><li class=\"content--announce announce--tkeihou\"><a href=//www3.nhk.or.jp/weather/ target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><dt><i class=i-kind4></i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '5' || value.special === 'dosya') {
%><li class=\"content--announce announce--dosya\"><a href=//www3.nhk.or.jp/weather/dosya.html target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><dt><i class=i-kind5></i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '6' || value.special === 'tatsumaki') {
%><li class=\"content--announce announce--tatsumaki\"><a href=//www3.nhk.or.jp/weather/tatsumaki.html target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><dt><i class=i-kind6></i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '7') {
%><li class=\"content--announce announce--default\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_sdc_' + code %>')\"><dl><% if (value.iconText != '') {
%><dt><i class=i-kind7><%= value.iconText %></i><% } %><dd><%= value.title %></dl></a></li><% count2++ %><% } %><% });
%></ul></div></section><% count1++ %><% });
%>"
    }, function (e, t) {
        e.exports = "<% if (!data) {
return;
} %><% if (data.data[0][\"midashiTitle\"] != '') {
%><header class=\"module_aside--header none-screen\"><h2><%= data.data[0][\"midashiTitle\"] %></h2></header><% } %><section class=module_aside--content><div class=content--items><div class=\"content--list grid--col-announce weather-forecast\"><a class=button href=//www3.nhk.or.jp/weather/ onclick=\"ga('send', 'event', 'all_side', 'click', 'banner_weather')\"><img src=/news/parts16/images/common/weather-forecast.gif width=672 height=154 alt=全国の天気></a></div></div><div class=\"content--items content--accordion is-current\"><ul class=\"content--list grid--col-announce\"><% var count1 = 1, count2 = 1, count3 = 1, count4 = 1, count5 = 1, count6 = 1, count7 = 1;
%><% _.each(data.data[0][\"item\"], function(value,key) {
%><% if (value.special != '') {
%><% if (value.special === 'kakuchi') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_kakuchi', {
nonInteraction: true });
%><li class=\"content--announce announce--disaster\"><a href=http://www5.nhk.or.jp/saigai/index_fd.html onclick=\"ga('send', 'event', 'all_side', 'click', 'link_kakuchi')\"><dl><dt><i class=i-kind3>災害</i><dd><%= value.title %></dl></a></li><% } else if (value.special === 'tkeihou') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_tkeihou', {
nonInteraction: true });
%><li class=\"content--announce announce--tkeihou\"><a href=//www3.nhk.or.jp/weather/ onclick=\"ga('send', 'event', 'all_side', 'click', 'link_tkeihou')\"><dl><dt><i class=i-tkeihou></i><dd>特別警報</dl></a></li><% } else if (value.special === 'dosya') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_dosya', {
nonInteraction: true });
%><li class=\"content--announce announce--dosya\"><a href=//www3.nhk.or.jp/weather/dosya.html onclick=\"ga('send', 'event', 'all_side', 'click', 'link_dosya')\"><dl><dt><i class=i-dosya></i><dd>土砂災害警戒情報</dl></a></li><% } else if (value.special === 'tatsumaki') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_tatsumaki', {
nonInteraction: true });
%><li class=\"content--announce announce--tatsumaki\"><a href=//www3.nhk.or.jp/weather/tatsumaki.html onclick=\"ga('send', 'event', 'all_side', 'click', 'link_tatsumaki')\"><dl><dt><i class=i-tatsumaki></i><dd>竜巻注意情報</dl></a></li><% } else if (value.special === 'kirokuame') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_kirokuame', {
nonInteraction: true });
%><li class=\"content--announce announce--kirokuame\"><a href=//www3.nhk.or.jp/weather/kirokuame.html onclick=\"ga('send', 'event', 'all_side', 'click', 'link_kirokuame')\"><dl><dt><i class=i-kirokuame></i><dd>記録的短時間大雨情報</dl></a></li><% } else if (value.special === 'kazan') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_funka', {
nonInteraction: true });
%><li class=\"content--announce announce--funka\"><a href=//www3.nhk.or.jp/weather/funka.html onclick=\"ga('send', 'event', 'all_side', 'click', 'link_funka')\"><dl><dt><i class=i-funka></i><dd>噴火速報</dl></a></li><% } %><% } else {
%><% var __pram__ = new RegExp(/\\?/).test(value.link) ? '&' : '?';
%><% if (value.kind === '1') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_live_' + ('00' + count1).substr(-3), {
nonInteraction: true });
%><li class=announce--live><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_live_' + ('00' + count1).substr(-3) %>')\"><dl><dt><i class=i-kind1>LIVE</i><dd><%= value.title %></dl></a></li><% count1++ %><% } else if(value.kind === '2') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_tokusetsu_' + ('00' + count2).substr(-3), {
nonInteraction: true });
%><li class=\"content--announce announce--occurrence\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_tokusetsu_' + ('00' + count2).substr(-3) %>')\"><dl><dt><i class=i-kind2>特設</i><dd><%= value.title %></dl></a></li><% count2++ %><% } else if(value.kind === '3') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_saigai_' + ('00' + count3).substr(-3), {
nonInteraction: true });
%><li class=\"content--announce announce--kind3\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_saigai_' + ('00' + count3).substr(-3) %>')\"><dl><dt><i class=i-kind3>災害</i><dd><%= value.title %></dl></a></li><% count3++ %><% } else if(value.kind === '4') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_kind_004_' + ('00' + count4).substr(-3), {
nonInteraction: true });
%><li class=\"content--announce announce--kind4\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_kind_004_' + ('00' + count4).substr(-3) %>')\"><dl><dt><i class=i-kind4></i><dd><%= value.title %></dl></a></li><% count4++ %><% } else if(value.kind === '5') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_kind_005_' + ('00' + count5).substr(-3), {
nonInteraction: true });
%><li class=\"content--announce announce--kind5\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_kind_005_' + ('00' + count5).substr(-3) %>')\"><dl><dt><i class=i-kind5></i><dd><%= value.title %></dl></a></li><% count5++ %><% } else if(value.kind === '6') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_kind_006_' + ('00' + count6).substr(-3), {
nonInteraction: true });
%><li class=\"content--announce announce--kind6\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_kind_006_' + ('00' + count6).substr(-3) %>')\"><dl><dt><i class=i-kind6></i><dd><%= value.title %></dl></a></li><% count6++ %><% } else if(value.kind === '7') {
%><% if(typeof ga !== \"undefined\") ga('send', 'event', 'all_side', 'imp', 'imp_kind_007_' + ('00' + count7).substr(-3), {
nonInteraction: true });
%><% if (value.iconText === '\\u67A0') {
%><li class=\"content--announce announce--kind8\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_kind_007_' + ('00' + count7).substr(-3) %>')\"><%= value.title %></a></li><% } else {
%><li class=\"content--announce announce--default\"><a href=\"<%= value.link %>\" target=\"<%= value.target %>\" onclick=\"ga('send', 'event', 'all_side', 'click', '<%= 'link_kind_007_' + ('00' + count7).substr(-3) %>')\"><dl><% if (value.iconText != '') {
%><dt><i class=i-kind7><%= value.iconText %></i><% } %><dd><%= value.title %></dl></a></li><% } %><% count7++ %><% } %><% } %><% });
%></ul></div></section>"
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = (i(2), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                o.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            key: "__nABTesting", expires: 30, testing: !0, mode: null
                        }
                        ,
                        this.options = n(this.defaults, e),
                        this.Init()
                }, o.prototype.Init = function () {
                        var e = this;
                        e.options.testing ? e.CookieManager() : e.CookieRemove()
                    }, o.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.CookieSet();
                        else if (!e.CookieGet()) {
                            var t = Math.floor(2 * Math.random());
                            switch (t) {
                                case 0: e.options.mode = "a";
                                    break;
                                case 1: e.options.mode = "b"
                            }
                            e.CookieSet()
                        }
                    }, o.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    }, o.prototype.CookieSet = function () {
                        var e = this;
                        t.cookie(e.options.key, e.options.mode, {
                            domain: "." + location.hostname, path: "/", expires: e.options.expires
                        }
                        )
                    }, o.prototype.CookieRemove = function () {
                        var e = this;
                        t.cookie(e.options.key, "", {
                            domain: "." + location.hostname, path: "/", expires: -1
                        }
                        )
                    }, e.exports = o
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                a.prototype.Constructor = function (e, t) {
                    this.defaults = {
                        absolute: !1, path: "//www3.nhk.or.jp", error: !1, testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=navi_"
                    }
                        ,
                        this.options = n(this.defaults, t),
                        this.template = o.template(i(31)),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.Setup())
                    }, a.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.CookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    }, a.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.options.absolute || (e.options.path = ""), e.$element.append(e.template({
                            path: e.options.path, error: e.options.error, queryOption: e.options.queryOption
                        }
                        ))
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = (i(2), i(5)), a = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                a.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
                            timeout: 8e3
                        }
                        ,
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementTime = t("time",
                            this.element),
                        this.datetime = null, o.locale("ja", {
                        weekdays: ['<span class="sun">日曜日</span>', "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", '<span class="sat">土曜日</span>'],
                        weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"]
                        }
                        ),
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    }, a.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var a = n.getResponseHeader("Date"), s = e.Parse(a);
                            e.datetime = o(new Date(a)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"),
                                e.$element.html('<time datetime="' + e.datetime + '">' + s + "</time>")
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = new Date(e).getFullYear(), i = o(new Date(e)).format("YYYY年（平成" + (t - 1988) + "年）M月D日 dddd");
                            return i
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, a.prototype._getTime = function () {
                        var e = this;
                        return e.time
                    }, a.prototype.Setup = function () {
}, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var i = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                i.prototype.Constructor = function () {
                    this.$window = t(window),
                        this.$wrapper = t("#wrapper"),
                        this.$header = t("#header"),
                        this.$content = t("#content"),
                        this.prop = {
                            x: null, y: null, t: null, b: null, w: null, h: null
                        }
                        ,
                        this.stage = {
                            w: null, h: null, scr: null
                        }
                        ,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 60),
                        this.BREAKPOINT = 600,
                        this.DETECTION = 150,
                        this.isMobile = !1,
                        this.isFixed = !1,
                        this.isHidden = !1,
                        this.isWheel = !1,
                        this.Init()
                }, i.prototype.Init = function () {
                        var e = this;
                        e.$header.length && e.Setup()
                    }, i.prototype.Setup = function () {
                        var e = this;
                        e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize").on("scroll", e, e.ScrollHandler).trigger("scroll")
                    }, i.prototype._getStatus = function () {
                        var e = this;
                        return e.prop
                    }, i.prototype.Dispose = function () {
}, i.prototype.ScrollHandler = function (e) {
                        var i = e ? e.data : this;
                        i.stage.scr = 0 | t(this).scrollTop(), i.isMobile && !i.$header.hasClass("is-active") ? i.prop.t >= i.stage.scr ? i.isFixed && (i.$header.velocity("stop").removeClass("is-scroll").css({
                            position: "", top: ""
                        }
                        ), i.$content.css({
                            paddingTop: ""
                        }
                        ), i.isFixed = !1) : (i.$header.addClass("is-scroll").css({
                            position: "fixed", top: 0
                        }
                        ), i.$content.css({
                            paddingTop: i.prop.h
                        }
                        ), i.isFixed = !0) : i.isFixed && (i.$header.velocity("stop").removeClass("is-scroll").css({
                            position: "", top: ""
                        }
                        ), i.$content.css({
                            paddingTop: ""
                        }
                        ), i.isFixed = !1)
                    }, i.prototype.ResizeHandler = function (e) {
                        var i = e ? e.data : this, n = 0;
                        i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
                            i.$wrapper.prevAll().map(function (e, i) {
                                n += t(i).outerHeight()
                            }
                            ), i.isMobile = i.$window.width() <= i.BREAKPOINT ? !0 : !1, i.prop = {
                                y: 0 | i.$header.offset().top, w: i.$header.outerWidth(), h: i.$header.outerHeight(), t: 0 | n
                            }
                                , i.$window.trigger("scroll")
                        }
                            , i.INTERVAL)
                    }, e.exports = i
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var i = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                i.prototype.Constructor = function () {
                    this.$window = t(window),
                        this.$document = t(document),
                        this.$pagetop = t("#pagetop"),
                        this.$main = t("#main"),
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.isFixed = !1,
                        this.position = {
                            bottom: 51, right: -32
                        }
                        ,
                        this.Init()
                }, i.prototype.Init = function () {
                        var e = this;
                        e.$pagetop.length && e.Setup()
                    }, i.prototype.Setup = function () {
                        var e = this;
                        e.$pagetop.css({
                            opacity: 1
                        }
                        ).find("a").on("click", e, e.AnchorScroller), e.$window.on("resize orientationchange",
                            e,
                            e.ResizeHandler).trigger("resize").on("scroll", e, e.ScrollHandler).trigger("scroll")
                    }, i.prototype.Dispose = function () {
}, i.prototype.AnchorScroller = function (e) {
                        var i = e ? e.data : this;
                        e.preventDefault();
                        var n = window.chrome || "WebkitAppearance" in document.documentElement.style ? "body" : "html";
                        t(n).velocity("scroll", {
                            duration: 840, easing: "easeInOutQuart", offset: 0
                        }
                        ), i.$window.trigger("resize").trigger("scroll")
                    }, i.prototype.ScrollHandler = function (e) {
                        var i = e ? e.data : this, n = 0 | t(this).scrollTop(), o = (window.innerHeight || i.$window.height(), i.$main.offset().top);
                        if (!i.isMobile) if (n > o) {
                            if (i.isFixed) return;
                            i.$pagetop.css({
                                position: "fixed"
                            }
                            ).velocity("stop").velocity({
                                bottom: i.position.bottom, right: 0
                            }
                                , {
                                    duration: 300, easing: "easeInOutQuart"
                                }
                                ), i.isFixed = !0
                        }
                        else i.$pagetop.css({
                            position: "fixed"
                        }
                        ).velocity("stop").velocity({
                            bottom: i.position.bottom, right: i.position.right
                        }
                            , {
                                duration: 300, easing: "easeInOutQuart"
                            }
                            ), i.isFixed = !1
                    }, i.prototype.ResizeHandler = function (e) {
                        var t = e ? e.data : this;
                        t.REQEST_ID !== !1 && clearTimeout(t.REQEST_ID), t.REQEST_ID = setTimeout(function () {
                            t.isMobile = t.$window.width() <= t.BREAKPOINT ? !0 : !1, t.isMobile ? t.$pagetop.velocity("stop").css({
                                position: "", bottom: "", right: ""
                            }
                            ) : t.isFixed || t.$pagetop.velocity("stop").css({
                                position: "fixed", bottom: t.position.bottom, right: t.position.right
                            }
                            ), t.$window.trigger("scroll")
                        }
                            , t.INTERVAL)
                    }, e.exports = i
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = (i(2), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                o.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            selector: null, key: "__nScrollPos", expires: 1, diff: -100
                        }
                        ,
                        this.options = n(this.defaults, e),
                        this.noReferrerClass = "no-referrer",
                        this.cookieData = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(62.5), t.cookie.json = !1,
                        this.Init()
                }, o.prototype.Init = function () {
                        var e = this;
                        e.CookieManager()
                    }, o.prototype.CheckReferrer = function (e) {
                        var t = new RegExp(location.hostname + location.pathname, "i");
                        document.referrer;
                        return e ? e.match(t) ? !0 : !1 : void 0
                    }, o.prototype.Reloaded = function () {
                        return window.name == window.location.href ? !0 : !1
                    }, o.prototype.CookieManager = function () {
                        var e = this;
                        if (t.cookie(e.options.key)) {
                            e.cookieData = JSON.parse(t.cookie(e.options.key));
                            var i = String(e.cookieData.hostname + e.cookieData.pathname);
                            e.CheckReferrer(i) && (e.Reloaded() ? setTimeout(function () {
                                var e = window.chrome || "WebkitAppearance" in document.documentElement.style ? "body" : "html";
                                t(e).scrollTop(0)
                            }
                                , e.INTERVAL) : (e.$window.on("resize orientationchange", e, e.ResizeHandler), window.name = window.location.href))
                        }
                        e.Setup()
                    }, o.prototype.CookieSet = function () {
                        var e = this, i = {
                            hostname: location.hostname, pathname: location.pathname, scr: 0 | e.$window.scrollTop()
                        }
                            ;
                        t.cookie(e.options.key, JSON.stringify(i), {
                            domain: "." + location.hostname, path: "/", expires: e.options.expires
                        }
                        )
                    }, o.prototype.CookieRemove = function () {
                        var e = this;
                        t.cookie(e.options.key, "", {
                            domain: "." + location.hostname, path: "/", expires: -1
                        }
                        )
                    }, o.prototype.Dispose = function () {
}, o.prototype.Setup = function () {
                        var e = this;
                        e.liveClickHandler()
                    }, o.prototype.liveClickHandler = function () {
                        var e = this;
                        t(document).on("click", e.options.selector, function (i) {
                            t(this).hasClass(e.noReferrerClass) ? (e.$window.off("resize orientationchange", e.ResizeHandler),
                                e.CookieRemove(), window.name = "") : t(".index").length && (e.CookieSet(), window.name = "")
                        }
                        )
                    }, o.prototype.ResizeHandler = function (e) {
                        var i = e ? e.data : this, n = window.chrome || "WebkitAppearance" in document.documentElement.style ? "body" : "html";
                        i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
                            (0 | t(this).scrollTop()) <= i.cookieData.scr + i.options.diff ? t(n).scrollTop(i.cookieData.scr) : i.$window.off("resize orientationchange", i.ResizeHandler)
                        }
                            , i.INTERVAL)
                    }, e.exports = o
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var i = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                i.prototype.Constructor = function () {
                    this.$window = t(window),
                        this.$document = t(document),
                        this.$sharefixed = t(".share-fixed"),
                        this.$trigger = t("#trigger-share-fixed"),
                        this.$main = t("#main"),
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null,
                        this.isFixed = !1,
                        this.Init()
                }, i.prototype.Init = function () {
                        var e = this;
                        e.$sharefixed.length && e.$trigger.length && e.Setup()
                    }, i.prototype.Setup = function () {
                        var e = this;
                        e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize").on("scroll", e, e.ScrollHandler).trigger("scroll")
                    }, i.prototype.Dispose = function () {
}, i.prototype.ScrollHandler = function (e) {
                    var i = e ? e.data : this, n = 0 | t(this).scrollTop(), o = window.innerHeight || i.$window.height(),
                        a = i.$main.offset().top, s = i.isMobile ? i.$trigger.offset().top - o : i.$trigger.offset().top - o + o / 2;
                        if (n > a && s > n) {
                            if (i.isFixed) return;
                            i.isMobile || i.$sharefixed.velocity("stop").velocity({
                                left: 0
                            }
                                , {
                                    duration: 300, easing: "easeInOutQuart"
                                }
                            ), i.isFixed = !0
                        }
                        else {
                            if (!i.isFixed) return;
                            i.isMobile || i.$sharefixed.velocity("stop").velocity({
                                left: -60
                            }
                                , {
                                    duration: 300, easing: "easeInOutQuart"
                                }
                            ), i.isFixed = !1
                        }
                    }, i.prototype.ResizeHandler = function (e) {
                        var t = e ? e.data : this;
                        t.REQEST_ID !== !1 && clearTimeout(t.REQEST_ID), t.REQEST_ID = setTimeout(function () {
                            if (t.$window.width() <= t.BREAKPOINT) {
                                if (t.isMobile) return;
                                t.isMobile = !0
                            }
                            else {
                                if (!t.isMobile) return;
                                t.isMobile = !1
                            }
                            t.$window.trigger("scroll")
                        }
                            , t.INTERVAL)
                    }, e.exports = i
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var i = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                i.prototype.Constructor = function () {
                    this.$window = t(window),
                        this.$document = t(document),
                        this.$contentInner = t("#content-inner"),
                        this.$side = t("#side"),
                        this.$sideInner = t("#side-inner"),
                        this.$main = t("#main"),
                        this.$footer = t("#footer"),
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 960,
                        this.isMobile = !1,
                        this.isFixed = !1,
                        this.isAltus = !1,
                        this.UA = window.navigator.userAgent,
                        this.OS = {
                        Win: new RegExp(/win/i).test(this.UA),
                        Mac: new RegExp(/mac/i).test(this.UA),
                        iOS: new RegExp(/iphone|ipad|ipod/i).test(this.UA),
                        Android: new RegExp(/android/i).test(this.UA),
                        Silk: new RegExp(/silk/i).test(this.UA),
                        iOSVer: function (e) {
                                var t = e.match(/(iphone os)(\d+(\.\d+)?)/i);
                                return t ? t[2] : null
                            }
                                (this.UA), AndroidVer: function (e) {
                                    var t = e.match(/(android)(\d+(\.\d+)?)/i);
                                    return t ? t[2] : null
                                }
                                    (this.UA)
                        }
                        ,
                        this.isHTML5 = this.OS.AndroidVer >= 4.1 || this.OS.iOS || this.OS.Silk ? !0 : !1,
                        this.Init()
                }, i.prototype.Init = function () {
                        var e = this;
                        e.$side.length && e.Setup()
                    }, i.prototype.Setup = function () {
                        var e = this;
                        e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize").on("scroll", e, e.ScrollHandler).trigger("scroll")
                    }, i.prototype.Dispose = function () {
}, i.prototype.ScrollHandler = function (e) {
                        var i = e ? e.data : this;
                        if (i.isAltus) {
                            var n = 0 | t(this).scrollTop(), o = window.innerHeight || i.$window.height(),
                                a = ~~i.$contentInner.css("paddingBottom").slice(0, -2) || 0,
                                s = i.$side.offset().top + i.$sideInner.outerHeight() - o, l = i.$footer.offset().top - a - o;
                            i.isMobile || (s > n ? (i.$sideInner.removeClass("is-fixed").css({
                                position: "", bottom: ""
                            }
                            ), i.isFixed = !1) : n > s && l > n ? (i.$sideInner.addClass("is-fixed").css({
                                position: "fixed", bottom: 0
                            }
                            ), i.isFixed = !0) : n >= l && (i.$sideInner.addClass("is-fixed").css({
                                position: "absolute", bottom: 0
                            }
                            ), i.isFixed = !1))
                        }
                    }, i.prototype.ResizeHandler = function (e) {
                        var t = e ? e.data : this;
                        t.REQEST_ID !== !1 && clearTimeout(t.REQEST_ID), t.REQEST_ID = setTimeout(function () {
                            t.isMobile = window.innerWidth <= t.BREAKPOINT ? !0 : !1,
                                t.isAltus = t.$side.offset().top + t.$sideInner.outerHeight() < window.innerHeight ? !1 : t.$main.height() > t.$sideInner.outerHeight() ? !0 : !1,
                                t.isMobile ? (t.$sideInner.removeClass("is-fixed").css({
                                position: "", bottom: ""
                            }
                            ), t.$side.css({
                                height: ""
                            }
                            )) : (t.$sideInner.removeClass("is-fixed").css({
                                position: "", bottom: ""
                            }
                            ), t.isAltus ? t.$side.css({
                                height: t.$main.height()
                            }
                            ) : t.$side.css({
                                height: ""
                            }
                            )), t.$window.trigger("scroll")
                        }
                            , t.INTERVAL)
                    }, e.exports = i
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                        url: "/news/cameramanseye/sidenav.xml", type: "xml", data: null, timeout: 8e3,
                        directory: "/news/cameramanseye/images/", title: "Cameraman’s Eye",
                        summary: "ＮＨＫのカメラマンが、カットの一つ一つをこだわり抜いて撮影しました。", link: "/news/cameramanseye/",
                        linkText: "Cameraman’s Eyeをもっと見る", query: "utm_int=movie-new_contents_list-items_camera_", limit: 4
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(32)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var i = this, n = [];
                            return o.each(t(e).find("item"), function (e, o) {
                                var s = a(t(e).find("date").text(), "YY.M.D").tz("Asia/Tokyo"),
                                    l = a(i.globalTime).tz("Asia/Tokyo").diff(s, "day") <= 365 ? !0 : !1,
                                    r = a(t(e).find("date").text(), ["YY.M.D"], !0).isValid();
                                l && n.push({
                                    title: t(e).find("title").text(), date: r ? a(s).format("M月D日掲載") : t(e).find("date").text(),
                                    datetime: r ? a(s).tz("Asia/Tokyo").format("YYYY-MM-DD") : "",
                                    link: i.options.link + t(e).find("link").text(), thumb: i.options.directory + t(e).find("thumb").text()
                                }
                                )
                            }
                            ), {
                                data: n, directory: i.options.directory, title: i.options.title, summary: i.options.summary,
                                link: n[0].link, linkText: i.options.linkText, limit: i.options.limit, queryRoot: i.options.query
                                }
                        }
                    },
s.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    },
s.prototype.Setup = function () {
                        var e = this;
                        e.$itemContainer = t(".content--items", e.element),
                            e.$itemList = t(".content--list", e.$itemContainer),
                            o.each(e.$itemList.find("li"), function (i, n) {
                            e.$itemLists.push(t(i))
                        }
                        ), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                            i.isLoaded ? t(i.img).velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart"
                                }
                            ) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart"
                                }
                            )
                        }
                        ).fail(function () {
}
                            ).always(function () {
                                e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll")
                            }
                                )
                    },
s.prototype.ColumnResize = function (e) {
                        var i = e ? e.data : this;
                        i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
                            var e = i.$window.width() <= i.BREAKPOINT ? 2 : 4, n = 0, o = null, a = [];
                            if (e > 1) {
                                i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
                                    return t(this).outerHeight()
                                }
                                ).get(), n = o.length;
                                for (var s = 0, l = n;
                                    s < Math.ceil(l / e);
                                    ++s) {
                                    var r = s * e;
                                    a.push(Math.max.apply(null, o.slice(r, r + e)))
                                }
                                for (var u = 0;
                                    n > u;
                                    ++u)for (var c = 0;
                                        e > c;
                                        ++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1)
                            }
                            i.$window.trigger("scroll")
                        }
                            , i.INTERVAL)
                    }, e.exports = s
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = (i(2), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                o.prototype.Constructor = function (e, t) {
                    this.defaults = {
                        testing: !1, testkey: "__nABTesting", mode: null, queryOption: "nnw_opt=back_detail_"
                    }
                        ,
                        this.options = n(this.defaults, t),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementLink = null,
                        this.Init()
                }, o.prototype.Init = function () {
                        var e = this;
                        this.$element.length && (e.options.testing ? (e.TestCookieManager(), e.Setup()) : e.options.queryOption = "")
                    }, o.prototype.TestCookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.TestCookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    }, o.prototype.TestCookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.testkey) || null
                    }, o.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, o.prototype.Setup = function () {
                        var e = this;
                        if (e.$elementLink = t("a", e.element), e.$elementLink.length) {
                            var i = e.$elementLink.attr("href"), n = new RegExp(/\?/).test(i) ? "&" : "?";
                            e.$elementLink.attr("href", i + n + e.options.queryOption)
                        }
                    }, e.exports = o
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3),
                    o = i(2),
                    a = (i(5),
                        i(4),
                        function () {
                            this.Constructor.apply(this, arguments)
                        }
                    );
                a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/keyword.json",
                            type: "json",
                            data: null,
                            timeout: 8e3,
                            directory: "/news/",
                            query: "utm_int=detail_contents_news-keyword_",
                            testing: !1,
                            testkey: "__nABTesting",
                            mode: null,
                            queryOption: "&nnw_opt=news-keyword_detail_"
                        }
                        ,
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(40)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.detailProp = window.__DetailProp__ ? window.__DetailProp__ : null,
                        this.detailPropWord = null,
                        this.globalTime = null,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        this.$element.children().length || ("undefined" != typeof e.detailProp.word && e.detailProp.word.length ? (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "",
                            e.detailPropWord = e.Parse(e.detailProp.word), e.Get()) : e.Dispose())
                    }, a.prototype.TestCookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.TestCookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    }, a.prototype.TestCookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.testkey) || null
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            for (var t = this, i = 0, n = e.length;
                                n > i;
                                ++i)e[i].link = e[i].link, e[i].word = e[i].title, delete e[i].title;
                            return {
                                data: e, directory: t.options.directory, queryRoot: t.options.query, queryOption: t.options.queryOption
                            }
                        }
                    }, a.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.ParseKeyword(t);
                            e.$element.append(e.template(i))
                        }
                            , function (t) {
                                e.$element.append(e.template(e.detailPropWord))
                            }
                            )
                    }, a.prototype.ParseKeyword = function (e) {
                        if (null != e && void 0 !== e) {
                            for (var t, i = this, n = e.item, a = 0, s = i.detailPropWord.data.length;
                                s > a;
                                a++)n = o.without(n, o.findWhere(n, {
                                    word: i.detailPropWord.data[a].word
                                }
                                ));
                            return t = i.detailPropWord.data.concat(n), {
                                data: t, directory: i.options.directory, queryRoot: i.options.query, queryOption: i.options.queryOption
                            }
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, a.prototype.Setup = function () {
}, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = (i(5), i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                        url: ["/news/json16/specialcontents.json", "/news/json16/tokusetsu.json"], type: "json", data: null,
                        timeout: 8e3, directory: "/news/", query: "utm_int=detail_contents_news-link_", testing: !1,
                        testkey: "__nABTesting", mode: null, queryOption: "&nnw_opt=news-link_detail_"
                        }
                        ,
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(41)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.detailProp = window.__DetailProp__ ? window.__DetailProp__ : null,
                        this.detailPropLink = null,
                        this.globalTime = null,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        this.$element.children().length || ("undefined" != typeof e.detailProp.relationLink && e.detailProp.relationLink.length ? (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "",
                            e.detailPropLink = e.Parse(e.detailProp.relationLink), e.GetSpecial()) : e.Dispose())
                    }, a.prototype.TestCookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.TestCookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    }, a.prototype.TestCookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.testkey) || null
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            return {
                                data: e, directory: t.options.directory, queryRoot: t.options.query, queryOption: t.options.queryOption
                            }
                        }
                    }, a.prototype.GetSpecial = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url[0], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            e.ParseSpecial(t), e.GetTokusetsu()
                        }
                            , function (t) {
                                e.GetTokusetsu()
                            }
                            )
                    }, a.prototype.ParseSpecial = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this, i = [];
                            o.each(e.item, function (e, t) {
                                i[t] = {}
                                    , i[t].title = "", i[t].link = e.link.replace(/\#.*$/, "").replace(/\?.*$/, ""),
                                    i[t].imgPath = e.imgPath, i[t].description = e.description, i[t].target = e.target
                            }
                            );
                            for (var n = 0, a = i.length;
                                a > n;
                                ++n)for (var s = 0, l = t.detailPropLink.data.length;
                                    l > s;
                                    ++s)t.detailPropLink.data[s].link == i[n].link && (t.detailPropLink.data[s].imgPath = i[n].imgPath, t.detailPropLink.data[s].description = i[n].description,
                                        t.detailPropLink.data[s].target = i[n].target)
                        }
                    }, a.prototype.GetTokusetsu = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url[1], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            e.ParseTokusetsu(t), e.Setup()
                        }
                            , function (t) {
                                e.Setup()
                            }
                            )
                    }, a.prototype.ParseTokusetsu = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this, i = [];
                            o.each(e.channel.item, function (e, t) {
                                i[t] = {}
                                    , i[t].title = "", i[t].link = e.link.replace(/\#.*$/, "").replace(/\?.*$/, ""), i[t].imgPath = e.imgPath, i[t].description = e.comment
                            }
                            );
                            for (var n = 0, a = i.length;
                                a > n;
                                ++n)for (var s = 0, l = t.detailPropLink.data.length;
                                    l > s;
                                    ++s)t.detailPropLink.data[s].link == i[n].link && (t.detailPropLink.data[s].imgPath = i[n].imgPath, t.detailPropLink.data[s].description = i[n].description)
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.$element.append(e.template(e.detailPropLink)), e.$element.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                            n.isLoaded ? t(n.img).velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart", complete: function () {
                                        t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll")
                                    }
                                }
                            ) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart", complete: function () {
                                        t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll")
                                    }
                                }
                            )
                        }
                        ).fail(function () {
}
                            ).always(function () {
                                e.$window.trigger("resize").trigger("scroll")
                            }
                            )
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            directory: "/news/", newsup: !1
                        }
                        ,
                        this.options = n(this.defaults, a),
                        this.templateMovie = o.template(i(42)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementContainer = null,
                        this.$elementHeader = null,
                        this.$elementMain = null,
                        this.$itemVideoContainer = null,
                        this.$itemVideo = null,
                        this.$itemThumb = null,
                        this.$itemMore = null,
                        this.$itemMoreImg = null,
                        this.$buttonMore = null,
                        this.detailProp = window.__DetailProp__ ? window.__DetailProp__ : null,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.detailProp && e.Setup()
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.img) ? "undefined" != typeof kokunai && kokunai || (e.img = "", e.video = "") : e.img = t.options.directory + e.img,
                                "undefined" == typeof e.videoProp && (e.videoProp = {
                                width: 640, height: 360 });
                                for (var i = 0, n = e.body.length;
                                n > i;
                                ++i)
                                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.body[i].img) ? "undefined" != typeof kokunai && kokunai || (e.body[i].img = "") : e.body[i].img = t.options.directory + e.body[i].img;
                                return {
                                    data: e, directory: t.options.directory, newsup: t.options.newsup }
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null },
                    a.prototype.Setup = function () {
                        var e = this, i = e.Parse(e.detailProp);
                            e.$element.append(e.templateMovie(i)), NHKSNS.initSNS(),
                            t(".module--news-related").remove(), e.$elementContainer = t(".module--detail-content", e.element),
                            e.$elementHeader = t(".content--detail-header", e.element), e.$elementMain = t(".content--detail-main", e.element),
                            e.$itemVideoContainer = t(".content--video", e.element), e.$itemVideo = t(".video", e.element), e.$itemThumb = e.$itemVideoContainer.find("img"),
                            e.$itemMore = t(".content--detail-more", e.$elementMain), e.$itemMoreImg = t(".body-img", e.$itemMore), e.$buttonMore = t(".button-more", e.$elementMain),
                            e.$itemThumb.css("opacity", 0).imagesLoaded().progress(function (i, n) {
                                n.isLoaded ? t(n.img).velocity({
opacity: 1 },
                                    {
duration: 800, easing: "easeInOutQuart", complete: function () {
} }) : e.$itemVideoContainer.remove()
                            }).fail(function () {
e.$itemVideoContainer.remove() }).always(function () {
e.$window.trigger("resize") }),
                            e.$itemMoreImg.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                                i.isLoaded ? t(i.img).velocity({
opacity: 1 },
                                    {
duration: 800, easing: "easeInOutQuart", complete: function () {
} }) : t(i.img).parent().remove()
                            }).fail(function () {
t(this).parent().remove() }).always(function () {
e.$window.trigger("resize") }),
                            e.$buttonMore.on("click", e, e.ShowMore), e.$window.trigger("resize").trigger("scroll")
                    }, a.prototype.ShowMore = function (e) {
                        var i = e ? e.data : this;
"undefined" != typeof ga && ga("send", "event", "detail_contents", "click", "btn_contents-more"),
                            t(this).remove(), i.$itemMore.removeClass("none-always"), i.$window.trigger("resize").trigger("scroll")
                    }, e.exports = a
            }()
        }).call(t, i(1))
    }, 
    function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "", type: "json", data: null, timeout: 8e3, template: i(43), category: "", directory: "/news/",
                            query: "utm_int=all_side_ranking_", title: "", duration: 480, easing: "ease-in-out", "default": 5, limit: 10, images: !1, testing: !1,
                            testkey: "__nABTesting", mode: null, queryOption: "&nnw_opt=ranking_detail_"
                        },
                        this.options = n(this.defaults, a),
                        this.template = o.template(this.options.template),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "", e.Get()) },
                    a.prototype.TestCookieManager = function () {
                        var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.TestCookieGet()) {
                            case "a": e.options.mode = "a",
                                e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b",
                                    e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = ""
                        }
                    }, a.prototype.TestCookieGet = function () {
var e = this;
return t.cookie(e.options.testkey) || null },
                    a.prototype.Get = function () {
                        var e = this;
t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1,
                            timeout: e.options.timeout
                        }).then(function (t) {
var i = e.Parse(t);
"" != i.data && "" != i.data.channel.item ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() })
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
if (null != e.channel.item || "" != e.channel.item) for (var i = 0,
                                n = e.channel.item.length;
n > i;
++i)new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "",
                                    e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath),
                                        "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)),
                                    e.channel.item[i].link = t.options.directory + e.channel.item[i].link;
return e.queryRoot = t.options.query, {
                                        data: e, title: t.options.title,
                                        category: t.options.category, limit: t.options.limit, images: t.options.images, queryOption: t.options.queryOption
                                    }
                        }
                    }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
                    a.prototype.Setup = function () {
                        var e = this;
e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), e.$itemContainer = t(".content--items", e.element),
                            e.$itemList = t(".content--list", e.$itemContainer), e.options.images && e.$itemList.addClass("is-ranking"), o.each(e.$itemList.find("li"), function (i, n) {
                                e.$itemLists.push(t(i)),
                                e.options["default"] <= n && t(i).css({
display: "none", opacity: 0 })
                            }), e.$buttonMore = t(".button", e.$elementFooter), e.$itemLists.length <= e.options["default"] ? (e.$elementFooter.remove(),
                                e.$buttonMore.remove()) : e.$buttonMore.on("click", e, e.ShowMoreList), e.LoadImages()
                    }, a.prototype.ShowMoreList = function (e) {
                        var t = e ? e.data : this;
t.$elementFooter.remove();
                        for (var i = t.options["default"], n = t.options.limit;
n > i;
++i)t.$itemLists[i].velocity({
opacity: 1 }, {
display: "block", duration: t.options.duration, easing: t.options.easing });
                        t.$window.trigger("resize").trigger("scroll")
                    }, a.prototype.LoadImages = function () {
                        var e = this;
                        e.$itemList.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                            n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
                                duration: 800, easing: "easeInOutQuart",
                                complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") }
                            }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
                                duration: 800, easing: "easeInOutQuart",
                                complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize") }
                            })
                        }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") })
                    }, e.exports = a
            }()
        }).call(t, i(1))
    },
function \(e, t, i\) \{
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4),
                    function () {
this.Constructor.apply(this, arguments) });
                s.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            directory: "/news/",
                            query: "utm_int=detail_contents_news-related_",
                            testing: !1,
                            testkey: "__nABTesting",
                            mode: null,
                            queryOption: "&nnw_opt=news-related_detail_"
                        },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(44)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.detailProp = window.__DetailProp__ ? window.__DetailProp__ : null,
                        this.globalTime = null,
                        this.Init()
                },
s.prototype.Init = function () {
                    var e = this;
this.$element.children().length || ("undefined" != typeof e.detailProp.relationNews && e.detailProp.relationNews.length ? (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "",
                        e.GetDateTimeUTC()) : e.Dispose())
                    },
s.prototype.TestCookieManager = function () {
                    var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else
                        switch (e.TestCookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
                            default: e.options.queryOption = ""
                        }
                    },
s.prototype.TestCookieGet = function () {
                        var e = this;
return t.cookie(e.options.testkey) || null
                    },
s.prototype.GetDateTimeUTC = function () {
                    var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
                        var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Setup()
                    }, 
                    function (t, i, n) {
                        e.Dispose() })
                    },
s.prototype.Parse = function (e) {
                    if (null != e && void 0 !== e) {
                        for (var t = this, i = 0, n = e.length;
                            var o = a(e[i].datetime).format("YYYY-MM-DDTHH:mm");
                            new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e[i].imgPath = "", e[i].iconPath = "") : ("" != e[i].imgPath && (e[i].imgPath = t.options.directory + e[i].imgPath), 
                            "" != e[i].iconPath && (e[i].iconPath = t.options.directory + e[i].iconPath)), 
                            e[i].link = t.options.directory + e[i].link, 
                            e[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), 
                            e[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1
                        } return {
                            data: e, directory: t.options.directory, queryRoot: t.options.query, queryOption: t.options.queryOption }
                    }
                    },
s.prototype.Dispose = function () {
                        var e = this;
e.$element.remove(), e.$element = null
                    },
s.prototype.Setup = function () {
                    var e = this, i = e.Parse(e.detailProp.relationNews);
e.$element.append(e.template(i)), e.$element.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                        n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
                            duration: 800, easing: "easeInOutQuart", complete: function () {
                                t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll")
                            }
                        }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } })
                    }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") })
                    }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            directory: "/news/", 
                            newsup: !1 },
                        this.options = n(this.defaults, a),
                        this.templateText = o.template(i(45)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementContainer = null,
                        this.$elementHeader = null,
                        this.$elementMain = null,
                        this.$itemVideoContainer = null,
                        this.$itemVideo = null,
                        this.$itemThumb = null,
                        this.$itemMore = null,
                        this.$itemMoreImg = null,
                        this.$buttonMore = null,
                        this.detailProp = window.__DetailProp__ ? window.__DetailProp__ : null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.detailProp && e.Setup() }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.img) ? "undefined" != typeof kokunai && kokunai || (e.img = "", e.video = "") : e.img = t.options.directory + e.img, "undefined" == typeof e.videoProp && (e.videoProp = {
width: 640, height: 360 });
for (var i = 0, n = e.body.length;
n > i;
++i)new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.body[i].img) ? "undefined" != typeof kokunai && kokunai || (e.body[i].img = "") : e.body[i].img = t.options.directory + e.body[i].img;
return {
data: e, directory: t.options.directory, newsup: t.options.newsup } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this, i = e.Parse(e.detailProp);
e.$element.append(e.templateText(i)), NHKSNS.initSNS(), t(".module--news-keyword").find(".back-link").remove(), e.$elementContainer = t(".module--detail-content", e.element), e.$elementHeader = t(".content--detail-header", e.$elementContainer), e.$elementMain = t(".content--detail-main", e.$elementContainer), e.$itemVideoContainer = t(".content--thumb", e.element), e.$itemVideo = t(".video", e.element), e.$itemThumb = e.$itemVideoContainer.find("img"), e.$itemMore = t(".content--detail-more", e.$elementMain), e.$itemMoreImg = t(".body-img", e.$itemMore), e.$buttonMore = t(".button-more", e.$elementMain), e.$itemThumb.css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
} }) : e.$itemVideoContainer.remove() }).fail(function () {
e.$itemVideoContainer.remove() }).always(function () {
e.$window.trigger("resize") }), e.$itemMoreImg.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
} }) : t(i.img).parent().remove() }).fail(function () {
t(this).parent().remove() }).always(function () {
e.$window.trigger("resize") }), e.$buttonMore.on("click", e, e.ShowMore) }, a.prototype.ShowMore = function (e) {
var i = e ? e.data : this;
"undefined" != typeof ga && ga("send", "event", "detail_contents", "click", "btn_contents-more"), 
t(this).remove(), 
i.$itemMore.removeClass("none-mobile"), 
i.$window.trigger("resize").trigger("scroll") }, 
e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
url: "/news/json16/freespace.json", type: "json", data: null, 
timeout: 8e3, directory: "/news/", testing: !1, key: "__nABTesting", 
mode: null, queryOption: "&nnw_opt=free-space_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(33)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementInner = null,
                        this.$elementContainer = null,
                        this.directoryName = [],
                        this.PAGES = null,
                        this.WORD_PAGES = null,
                        this.isWord = !1,
                        this.Init()
                }, a.prototype.Init = function () {
                    var e = this;
if (e.$element.length) {
                        e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.directoryName = e.$body[0].className.split(" ");
for (var t = 0, i = e.directoryName.length;
i > t;
++t)switch (e.directoryName[t]) {
case "index": e.PAGES = "0";
break;
case "news-social": e.PAGES = "1";
break;
case "news-life": e.PAGES = "2";
break;
case "news-culture": e.PAGES = "3";
break;
case "news-politics": e.PAGES = "4";
break;
case "news-business": e.PAGES = "5";
break;
case "news-international": e.PAGES = "6";
break;
case "news-sports": e.PAGES = "7";
break;
case "news-weather": e.PAGES = "8";
break;
case "news-local": e.PAGES = "9";
break;
case "movie-new": e.PAGES = "30";
break;
case "news-new": e.PAGES = "50";
break;
case "tokushu-new": case "tokushu-web": case "tokushu-business": e.PAGES = "51";
break;
case "special-new": e.PAGES = "52";
break;
case "tags": e.PAGES = "70";
break;
case "word": e.WORD_PAGES = e.$element.data("page-id") || "", e.isWord = !0 }e.Get();
                    }
                }, a.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.CookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    }, a.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    }, a.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.isWord ? e.ParseWord(t) : e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this, i = [];
                            if (null != e.item || "" != e.item) for (var n = 0, o = e.item.length;
                                o > n;
                                ++n) {
                                e.item[n].imgPath = t.options.directory + e.item[n].imgPath;
                                for (var a = 0, s = e.item[n].page.length;
                                    s > a;
                                    ++a) {
                                    if (t.PAGES === e.item[n].page[a]) {
                                        e.item[n].enabled = !0;
                                        break
                                    }
                                    e.item[n].enabled = !1
                                }
                                e.item[n].enabled && i.push(e.item[n])
                            }
                            return {
                                data: i, queryOption: t.options.queryOption
                            }
                        }
                    }, a.prototype.ParseWord = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this, i = [];
                            if (null != e.item || "" != e.item) for (var n = 0, o = e.item.length;
                                o > n;
                                ++n) {
                                e.item[n].imgPath = t.options.directory + e.item[n].imgPath;
                                for (var a = 0, s = e.item[n]["page-word"].length;
                                    s > a;
                                    ++a) {
                                    if (t.WORD_PAGES === e.item[n]["page-word"][a]) {
                                        e.item[n].enabled = !0;
                                        break
                                    }
                                    e.item[n].enabled = !1
                                }
                                e.item[n].enabled && i.push(e.item[n])
                            }
                            return {
                                data: i, queryOption: t.options.queryOption
                            }
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.$elementContainer = t(".module--content", e.element), e.$elementContainer.find("img").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                            n.isLoaded ? t(n.img).velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart"
                                }
                            ) : e.Dispose()
                        }
                        ).fail(function () {
}
                            ).always(function () {
                                e.$window.trigger("resize").trigger("scroll")
                            }
                            )
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/keyword.json", type: "json", data: null, timeout: 8e3, 
                            directory: "/news/", link: "/news/word/", linkText: "注目ワード一覧を見る", 
                            query: "utm_int=all_header_tag_", testing: !1, key: "__nABTesting", 
                            mode: null, queryOption: "&nnw_opt=tag_"
                        }
                        ,
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(34)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementInner = null,
                        this.$elementContainer = null,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.options.testing ? e.CookieManager() : (e.options.queryOption = "", e.Get()))
                    }, a.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.CookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                        e.Get()
                    }, a.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    }, a.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            return e.queryRoot = t.options.query, {
                                data: e, directory: t.options.directory, link: t.options.link, linkText: t.options.linkText, 
                                mode: t.options.mode, queryRoot: t.options.query, queryOption: t.options.queryOption
                            }
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.$window.trigger("resize").trigger("scroll")
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            directory: "/news/", url: "/news/html/jnewslist.xml", type: "xml", data: null, timeout: 8e3, 
                            testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=just-in_"
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(35)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementInner = null,
                        this.$elementContainer = null,
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.GetDateTimeUTC())
                    },
s.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.CookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    },
s.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var i = this, n = [];
                            return o.each(t(e).find("item"), function (e, o) {
                                var s = new Date(t(e).find("pubDate").text());
                                a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "minutes") <= 30 && n.push({
                                    date: a(s).tz("Asia/Tokyo").format("M月D日 H時mm分"), datetime: a(s).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), 
                                    title: t(e).find("title").text(), link: t(e).find("link").text(), 
                                    img: t(e).find("imgPath").text(), video: t(e).find("videoPath").text()
                                }
                                )
                            }
                            ), {
                                    data: n, directory: i.options.directory, queryOption: i.options.queryOption
                                }
                        }
                    },
s.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    },
s.prototype.Setup = function () {
                        var e = this;
                        e.$window.trigger("resize").trigger("scroll")
                    }, e.exports = s
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(2), o = function () {
                    this.Constructor.apply(this, arguments)
                }
                    ;
                o.prototype.Constructor = function (e, o) {
                    this.$window = t(window),
                        this.template = n.template(i(36)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$accordionInner = null,
                        this.$accordionNav = null,
                        this.$itemContainer = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, o.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.$element.append(e.template()), e.Setup())
                    }, o.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, o.prototype.Setup = function () {
                        var e = this;
                        e.$accordionInner = t(".content--accordion", e.element), e.$accordionNav = t(".nav--accordion", e.$accordionInner), 
                        e.$itemContainer = t(".content--list", e.$accordionInner), e.$accordionNav.on("click", e, e.ToggleHandler), e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize").trigger("scroll")
                    }, o.prototype.ToggleHandler = function (e) {
                        var i = e ? e.data : this;
                        if (i.isMobile) if (t(this).parent(".content--accordion").hasClass("is-current")) {
                            var n = t(this).attr("data-ga");
                            n && "function" == typeof ga && ga("send", "event", "local_contents", "click", n + "-closed"), 
                            t(this).parent(".content--accordion").removeClass("is-current"), t(this).next(".content--list").velocity("stop").velocity({
                                height: 0
                            }
                                , {
                                    display: "none", duration: 240, easing: "easeInOutQuart"
                                }
                            )
                        }
                        else {
                            var n = t(this).attr("data-ga");
                            n && "function" == typeof ga && ga("send", "event", "local_contents", "click", n + "-open"), 
                            t(this).parent(".content--accordion").addClass("is-current"), t(this).next(".content--list").velocity("stop").velocity({
                                height: "100%"
                            }
                                , {
                                    display: "block", duration: 240, easing: "easeInOutQuart"
                                }
                            )
                        }
                    }, o.prototype.ResizeHandler = function (e) {
                        var t = e ? e.data : this;
                        t.REQEST_ID !== !1 && (clearTimeout(t.REQEST_ID), t.REQEST_ID = null), t.REQEST_ID = setTimeout(function () {
                            if (t.$window.width() <= t.BREAKPOINT) {
                                if (t.isMobile) return;
                                t.$accordionInner.removeClass("is-current"), t.$itemContainer.css({
                                    display: "none", height: 0
                                }
                                ), t.isMobile = !0
                            }
                            else {
                                if (!t.isMobile) return;
                                t.$accordionInner.addClass("is-current"), t.$itemContainer.css({
                                    display: "", height: ""
                                }
                                ), t.isMobile = !1
                            }
                        }
                            , t.INTERVAL)
                    }, e.exports = o
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            url: "/news/json16/", type: "json", data: null, timeout: 8e3, 
                            key: "__nScrollPosition", expires: 364, directory: "/news/", 
                            title: "", query: ""
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(38)),
                        this.templateItem = o.template(i(37)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.TARGET = 0,
                        this.PAGE_NOW = 0,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 60),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.isLoading = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.$element.append(e.template({
                                title: e.options.title
                            }
                            )), e.Setup()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.HashChangeHandler = function (e) {
                        var t = e ? e.data : this, 
                        i = ~~location.hash.replace(/(^#!)\/(.+)\//, "$2");
                        0 != i && i > 1 && 100 >= i && /^#!\/([0-9]+)\//.test(location.hash) ? (location.hash = "#!/" + i + "/", 
                        t.TARGET = i, 
                        t.Get(t.TARGET)) : (t.CookieRemove(), 
                        t.TARGET = 1, 
                        t.Get(t.TARGET))
                    },
s.prototype.Get = function (e) {
                        var i = this, n = e;
                        i.isLoading || i.PAGE_NOW < n && (i.isLoading = !0, i.$buttonMore.velocity("stop").velocity({opacity: 0 }, 
                        {duration: 60, easing: "easeInOutQuart" }), 
                        i.$element.addClass("loading"), 
                        i.$itemContainer.append(i.$loading), 
                        i.PAGE_NOW++ , 
                        n = i.PAGE_NOW, 
                        n = 1 == n.toString().length ? "00" + n : 2 == n.toString().length ? "0" + n : n, t.ajax({
                        type: "GET", url: i.options.url.replace(/^(.+)_([0-9]+)(\.[a-z]+)$/, "$1_" + n + "$3"), 
                        dataType: i.options.type, data: i.options.data, cache: !1, timeout: i.options.timeout }).then(function (e) {
                        var n = i.Parse(e);
                        "" != n.data && (i.$element.removeClass("loading"), i.$loading.remove(), t(".content--list", i.element).append(i.templateItem(n)), 
                        i.LoadImages(), i.PAGE_NOW < i.TARGET ? (i.isLoading = !1, i.Get(~~i.PAGE_NOW + 1)) : (i.isLoading = !1, i.CookieManager()), i.$buttonMore.velocity("stop").velocity({
                        opacity: 1 }, {
                        duration: 640, easing: "easeInOutQuart", complete: function () {
                        i.$buttonMore && i.$buttonMore.css("opacity", ""), i.$window.trigger("resize") } }), n.data.channel.hasNext || i.Clear()) }, function (e) {
                        i.Clear(!0) })) },
s.prototype.GetNewsItems = function (e) {
                        var t = e ? e.data : this;
                        t.isLoading || (location.hash = "#!/" + (t.PAGE_NOW + 1) + "/") },
s.prototype.Clear = function (e) {
                        var t = this;
                        t.$buttonMore.off("click", t.GetNewsItems), t.$buttonMore.remove(), t.$buttonMore = null, t.$element.removeClass("loading"), 
                        t.$loading.remove(), t.$loading = null, t.$elementFooter.remove(), t.$elementFooter = null, e && (t.PAGE_NOW-- , location.hash = "#!/" + t.PAGE_NOW + "/"), 
                        t.$window.trigger("resize") },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                        var t = this;
                        if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                        n > i;
                        ++i) {
                        var o = new Date(e.channel.item[i].pubDate);
                        new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", 
                        e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), 
                        "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), 
                        e.channel.item[i].link = t.options.directory + e.channel.item[i].link, 
                        e.channel.item[i].videoDuration = "" != e.channel.item[i].videoDuration ? t.toHHMMSS(e.channel.item[i].videoDuration) : "", 
                        e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return e.queryRoot = t.options.query, {
                        data: e, directory: t.options.directory, offset: 20 * (t.PAGE_NOW - 1) } } },
s.prototype.toHHMMSS = function (e) {
                        var t = parseInt(e, 10), i = Math.floor(t / 3600), n = Math.floor((t - 3600 * i) / 60), o = t - 3600 * i - 60 * n;
                        return i = 0 == i ? "" : i + ":", 10 > n && (n = "0" + n), 10 > o && (o = "0" + o), i + n + ":" + o },
s.prototype.CookieManager = function () {
                        var e = this;
                        t.cookie(e.options.key) && "undefined" !== t.cookie(e.options.key) && ~~t.cookie(e.options.key) > 0 && e.$body.velocity("stop").velocity("scroll", {
                        duration: 1e3, easing: "easeInOutQuart", offset: t.cookie(e.options.key), complete: function () {
                        e.CookieRemove(), e.$window.trigger("resize") }, mobileHA: !1 }) },
s.prototype.CookieSet = function () {
                        var e = this;
                        t.cookie(e.options.key, 0 | e.$window.scrollTop(), {
                        domain: "." + location.hostname, path: "/news/", expires: e.options.expires }) },
s.prototype.CookieRemove = function () {
                        var e = this;
                        t.cookie(e.options.key, "", {
                        domain: "." + location.hostname, path: "/news/", expires: -1 }), t.cookie(e.options.key, "", {
                        path: "/news/", expires: -1 }) },
s.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                        var e = this;
                        e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), 
                        e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), e.$buttonMore = t(".button", e.$elementFooter), 
                        e.$window.on("hashchange", e, e.HashChangeHandler).trigger("hashchange").on("resize orientationchange", e, e.ColumnResize).trigger("resize"), 
                        e.$buttonMore.on("click", e, function () {
                            e.GetNewsItems(), "undefined" != typeof ga && ga("send", "pageview", window.location.pathname + window.location.hash) 
                            }), 
                        t(document).on("click", ".content--list a, .button-more .button", function (t) {
                            e.CookieSet() }) },
s.prototype.LoadImages = function () {
                        var e = this;
                        e.$window.trigger("resize").trigger("scroll"), e.$itemList.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                            n.isLoaded ? t(n.img).velocity({
                                opacity: 1 },
                        {
                        duration: 800, easing: "easeInOutQuart", complete: function () {
                        t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
                        opacity: 1 }, {
                        duration: 800, easing: "easeInOutQuart", complete: function () {
                        t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) }).fail(function () {
                        }).always(function () {
                        e.$window.trigger("resize") }) },
s.prototype.ColumnResize = function (e) {
                        var i = e ? e.data : this;
                        i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
                        var e = i.$window.width() <= i.BREAKPOINT ? 2 : 4, n = 0, o = null, a = [];
                        if (e > 1) {
                        i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
                        return t(this).outerHeight() }).get(), n = o.length;
                        for (var s = 0, l = n;
                        s < Math.ceil(l / e);
                        ++s) {
                        var r = s * e;
                        a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
                        n > u;
                        ++u)for (var c = 0;
                        e > c;
                        ++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } else i.$element.find("li").css("height", "");
                        i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/html/toppage/xml/business_top2.xml", type: "xml", data: null, timeout: 8e3, directory: "/news/", 
                            title: "ビジネスニュース", limit: 7 },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(62)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemHeader = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    }, 
                    s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout 
                            }).then(function (t, i, n) {
                                var o = n.getResponseHeader("Date");
                                e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
                                    e.Dispose() 
                                }) 
                    }, 
                    s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                        type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                        var i = e.Parse(t);
                        "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
                        e.Dispose() }) 
                    }, 
                    s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                        var i = this, n = [];
                        return o.each(t(e).find("item"), function (e, o) {
                        var s = new Date(t(e).find("pubDate").text()), l = t(e).find("imgPath").text(), r = t(e).find("iconPath").text(), u = t(e).find("link").text();
                        new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(l) ? "undefined" != typeof kokunai && kokunai || (l = "", r = "") : ("" != l && (l = i.options.directory + l), 
                        "" != r && (r = i.options.directory + r)), u = i.options.directory + u, n.push({
                        title: t(e).find("title").text(), link: u, script: t(e).find("script").text(), imgPath: l, iconPath: r, videoPath: t(e).find("videoPath").text(), 
                        date: 0 == o || 0 != a(i.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(s).tz("Asia/Tokyo").startOf("day"), "days") ? a(s).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(s).tz("Asia/Tokyo").format("H時mm分"), 
                        datetime: a(s).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), "new": a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 }) }), {
                        data: n, directory: i.options.directory, title: i.options.title, limit: i.options.limit } } 
                    }, 
                    s.prototype.Dispose = function () {
                    var e = this;
                    e.$element.remove(), e.$element = null }, 
                    s.prototype.Setup = function () {
                        var e = this;
                        e.$itemHeader = t(".content--header", e.element), e.$itemContainer = t(".content--items", e.element), 
                        e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
                        e.$itemLists.push(t(i)) }), e.$itemHeader.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                        i.isLoaded ? t(i.img).velocity({
                        opacity: 1 }, {
                        duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
                        opacity: 1 }, {
                        duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                        }).always(function () {
                        e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }), 
                        e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                        i.isLoaded ? t(i.img).velocity({
                        opacity: 1 }, {
                        duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
                        opacity: 1 }, {
                        duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                        }).always(function () {
                        e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }) 
                    }, 
                    s.prototype.ColumnResize = function (e) {
                        var i = e ? e.data : this;
                        i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
                        var e = i.$window.width() <= i.BREAKPOINT ? 1 : 2, n = 0, o = null, a = [];
                        if (e > 1) {
                        i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
                        return t(this).outerHeight() }).get(), n = o.length;
                        for (var s = 0, l = n;
                        s < Math.ceil(l / e);
                        ++s) {
                        var r = s * e;
                        a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
                        n > u;
                        ++u)for (var c = 0;
                        e > c;
                        ++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } else i.$itemList.find("li").css("height", "");
                        i.$window.trigger("scroll") }, i.INTERVAL) 
                    }, 
                    e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/tokusetsu.json", type: "json", data: null, timeout: 8e3, testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=news-closeup_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(39)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null,
                        this.column = {
                            desktop: 4, 
                            mobile: 2, 
                            offset: 16 },
                        this.Init()
                }, 
                a.prototype.Init = function () {
                    var e = this;
                    e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.Get()) }, 
                    a.prototype.CookieManager = function () {
                    var e = this;
                    if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                    else switch (e.CookieGet()) {
                    case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                    break;
                    case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                    break;
                    default: e.options.queryOption = "" } }, 
                    a.prototype.CookieGet = function () {
                    var e = this;
                    return t.cookie(e.options.key) || null }, 
                    a.prototype.Get = function () {
                    var e = this;
                    t.ajax({
                    type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                    var i = e.Parse(t);
                    i.data && "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
                    e.Dispose() }) }, 
                    a.prototype.Parse = function (e) {
                    if (null != e && void 0 !== e) {
                    var t = this, i = [];
                    return o.each(e.channel.item, function (e, t) {
                    e.topFlg && i.push(e) }), e.channel.item = i, {
                    data: 0 < i.length ? e : null, mode: t.options.mode, queryOption: t.options.queryOption } } }, 
                    a.prototype.Dispose = function () {
                    var e = this;
                    e.$element.remove(), e.$element = null }, 
                    a.prototype.Setup = function () {
                    var e = this;
                    e.$itemContainer = t(".module--content", e.element), e.$itemContainer.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                    i.isLoaded ? t(i.img).velocity({
                    opacity: 1 }, {
                    duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
                    opacity: 1 }, {
                    duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                    }).always(function () {
                    e.$window.trigger("resize").trigger("scroll") }) }, 
                    e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/easy/top-list.json", type: "json", data: null, timeout: 8e3, directory: "/news/easy/", 
                            title: "NEWS WEB EASY", 
                            subtitle: "やさしい にほんごの ニュース", link: "/news/easy/", limit: 5 },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(46)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$panelContainer = null,
                        this.$panelThumb = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                    var e = this;
                    e.$element.length && e.Get() },
s.prototype.Get = function () {
                    var e = this;
                    t.ajax({
                    type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                    var i = e.Parse(t);
                    "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
                    e.Dispose() }) },
s.prototype.Parse = function (e) {
                    if (null != e && void 0 !== e) {
                    var t = this;
                    if (null != e) for (var i = 0, n = e.length;
                    n > i;
                    ++i)e[i].has_news_easy_image ? new RegExp(/\/\/www3r.nhk.or.jp\/news\/html\//).test(e[i].news_easy_image_uri) ? e[i].image_uri = e[i].news_easy_image_uri : e[i].image_uri = t.options.directory + e[i].news_id + "/" + e[i].news_easy_image_uri : e[i].has_news_web_image && (new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\/html\//).test(e[i].news_web_image_uri) ? e[i].image_uri = "undefined" != typeof kokunai && kokunai ? e[i].news_web_image_uri : "" : new RegExp(/\/\/www3r.nhk.or.jp\/news\/html\//).test(e[i].news_web_image_uri) ? e[i].image_uri = e[i].news_web_image_uri : e[i].image_uri = e[i].news_web_image_uri), e[i].link = t.options.directory + e[i].news_id + "/" + e[i].news_id + ".html", e[i].date = a(e[i].news_prearranged_time).tz("Asia/Tokyo").format("M月D日"), e[i].datetime = a(e[i].news_prearranged_time).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), "undefined" != typeof e[i].image_uri && null != e[i].image_uri && (e[i].image_uri = e[i].image_uri.replace(/^http:|https:/i, ""));
                    return {
                    data: e, directory: t.options.directory, title: t.options.title, subtitle: t.options.subtitle, link: t.options.link, limit: t.options.limit } } },
s.prototype.Dispose = function () {
                    var e = this;
                    e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                    var e = this;
                    e.$panelContainer = t(".featured-panel--header", e.element), e.$panelThumb = t(".featured-panel--thumb", e.$panelContainer), e.$panelThumb.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                    i.isLoaded ? t(i.img).velocity({
                    opacity: 1 }, {
                    duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
                    opacity: 1 }, {
                    duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                    }).always(function () {
                    e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/tokushu/tokushu.xml", type: "xml", data: null, timeout: 8e3, directory: "/news/", title: null, category: null, 
                            link: "/news/tokushu/", 
                            linkText: null, limit: 4, page: null, mobileCard: !1, testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=tokushu_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(47)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null,
                        this.column = {
                            desktop: 4, mobile: 1 }, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                var e = this;
                e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.GetDateTimeUTC()) },
s.prototype.CookieManager = function () {
                var e = this;
                if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                else switch (e.CookieGet()) {
                case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                break;
                case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                break;
                default: e.options.queryOption = "" } },
s.prototype.CookieGet = function () {
                var e = this;
                return t.cookie(e.options.key) || null },
s.prototype.GetDateTimeUTC = function () {
                var e = this;
                t.ajax({
                type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
                var o = n.getResponseHeader("Date");
                e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
                e.Dispose() }) },
s.prototype.Get = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                var i = e.Parse(t);
                "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
                e.Dispose() }) },
s.prototype.Parse = function (e) {
                if (null != e && void 0 !== e) {
                var i = this, n = [];
                return o.each(t(e).find("item"), function (e, o) {
                var s = a(t(e).find("year").text() + t(e).find("date").text() + t(e).find("time").text(), "YYYY年M月D日H時mm分").tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:00Z"), l = "" != t(e).find("enddate").text() ? t(e).find("enddate").text() : null, r = l && a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "day") <= l ? !0 : !1, u = t(e).find("directory").text(), c = "", p = (t(e).find("file").text(), t(e).find("thumb").text()), d = "true" == t(e).find("web").text() ? !0 : !1;
                switch (u) {
                case "web": c = "/news/web_tokushu/";
                break;
                case "business": c = "/news/business_tokushu/";
                break;
                default: c = "/news/tokushu/" }p = new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\/html\//).test(p) ? "undefined" != typeof kokunai && kokunai ? p : "" : c + "still/" + p, i.options.category ? "web" == i.options.category ? (r && ("business" == u && d ? r = a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "day") < 28 ? !0 : !1 : "business" != u || d || (r = !1)), ("" == t(e).find("enddate").text() || r) && n.push({
                directory: u, file: c + t(e).find("file").text(), title: t(e).find("title").text(), date: t(e).find("date").text(), time: t(e).find("time").text(), week: t(e).find("week").text(), description: t(e).find("description").text(), thumb: p })) : i.options.category == u && ("" == t(e).find("enddate").text() || r) && n.push({
                directory: u, file: c + t(e).find("file").text(), title: t(e).find("title").text(), date: t(e).find("date").text(), time: t(e).find("time").text(), week: t(e).find("week").text(), description: t(e).find("description").text(), thumb: p }) : ("" == t(e).find("enddate").text() || r) && n.push({
                directory: u, file: c + t(e).find("file").text(), title: t(e).find("title").text(), date: t(e).find("date").text(), time: t(e).find("time").text(), week: t(e).find("week").text(), description: t(e).find("description").text(), thumb: p }) }), {
                data: n, directory: i.options.directory, title: i.options.title, category: i.options.category, link: i.options.link, linkText: i.options.linkText, limit: i.options.limit, page: i.options.page, queryOption: i.options.queryOption } } },
s.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                var e = this;
                e.$itemContainer = t(".content--items", e.element), e.$itemList = t("li", e.$itemContainer), o.each(e.$itemContainer.find("li"), function (i, n) {
                e.$itemLists.push(t(i)) }), e.options.mobileCard && (e.$itemContainer.find(".grid--row").addClass("grid--col-mobile"), e.column.mobile = 2), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                i.isLoaded ? t(i.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                }).always(function () {
                e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }) },
s.prototype.ColumnResize = function (e) {
                var i = e ? e.data : this;
                i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
                var e = i.$window.width() <= i.BREAKPOINT ? i.column.mobile : i.column.desktop, n = 0, o = null, a = [];
                if (e > 1) {
                i.$element.find("li").css("height", ""), o = i.$element.find("li").map(function () {
                return t(this).outerHeight() }).get(), n = o.length;
                for (var s = 0, l = n;
                s < Math.ceil(l / e);
                ++s) {
                var r = s * e;
                a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
                n > u;
                ++u)for (var c = 0;
                e > c;
                ++c)i.$element.find("li").eq(u * e + c).css("height", a[u]) } else i.$element.find("li").css("height", "");
                i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(174), a = i(2), s = function () {
                    new o,
                        this.Constructor.apply(this, arguments)
                };
                s.prototype.Constructor = function (e, o) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/sokuho/news/sokuho_news.xml", type: "xml", data: null, timeout: 8e3, controller: !1, page: !1, timer: 4800, duration: 480, easing: "ease-in-out" },
                        this.options = n(this.defaults, o),
                        this.template = a.template(i(48)),
                        this.$header = t("#header"),
                        this.element = e.get(0),
                        this.$panel = e,
                        this.$panelInner = null,
                        this.$panelContainer = null,
                        this.$panelList = null,
                        this.$panelLists = [],
                        this.prop = {
                            width: null, height: null, scr: null },
                        this.$old = null,
                        this.$current = null,
                        this.TOTAL = 0,
                        this.NOW = 0,
                        this.REQEST_ID = null,
                        this.Init()
                },
s.prototype.Init = function () {
                var e = this;
                e.$panel.length && e.Get() },
s.prototype.Get = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                var i = e.Parse(t);
                "" != i.data ? (e.$panel.css({
                display: "block" }).append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
                e.Dispose() }) },
s.prototype.Parse = function (e) {
                if (null != e && void 0 !== e) {
                if ("0" == t(e).find("flashNews").attr("flag")) return {
                data: null };
                var i = [];
                return a.each(t(e).find("report"), function (e, n) {
                var o = t(e).attr("link") || "";
                a.each(t(e).find("line"), function (e, n) {
                i.push({
                id: n, line: t(e).text(), link: o }) }) }), {
                data: i } } },
s.prototype.Dispose = function () {
                var e = this;
                e.$panel.remove(), e.$panel = null },
s.prototype.Setup = function () {
                    var e = this;
                    if (e.$panelInner = t(".inner", e.element), e.$panelContainer = t("ul", e.element), e.$panelList = t("li", e.element), a.each(e.$panelContainer.find("li"), function (i, n) {
                        e.$panelLists.push(t(i))
                    }
                    ), e.TOTAL = e.$panelLists.length, 1 < e.TOTAL) {
                        for (var i = 0, n = e.TOTAL;
                            n > i;
                            ++i)i != e.NOW && e.$panelLists[i].css({
                                opacity: 0
                            }
                            ).velocity({
                                translateX: "100%"
                            }
                                , {
                                    display: "none", queue: !1, duration: 0
                                }
                                );
                        e.$current = e.$panelList.eq(e.NOW), e.$current.addClass("current"), e.SetTimer()
                    }
                    e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize").trigger("scroll")
                },
s.prototype.SetTimer = function (e) {
                        var t = e ? e.data : this;
                        null == t.REQEST_ID && (t.REQEST_ID = setTimeout(t.Loop.bind(t), t.options.timer))
                    },
s.prototype.ClearTimer = function (e) {
                        var t = e ? e.data : this;
                        null != t.REQEST_ID && (clearTimeout(t.REQEST_ID), t.REQEST_ID = null)
                    },
s.prototype.Loop = function () {
                        var e = this;
                        e.NOW = ++e.NOW % e.TOTAL, e.Update()
                    },
s.prototype.Update = function (e, i) {
                        var n = this;
                        n.ClearTimer(), n.$old = n.$current, n.$current = n.$panelList.eq(n.NOW), n.$old.velocity("stop").velocity({
                            translateX: "-100%", opacity: 0
                        }
                            , {
                                display: "none", queue: !1, duration: "undefined" == typeof e ? n.options.duration : e, easing: "undefined" == typeof i ? n.options.easing : i, complete: function (e) {
                                    t(e).velocity({
                                        translateX: "100%", opacity: 0
                                    }
                                        , {
                                            duration: 0, queue: !1, display: "none"
                                        }
                                    )
                                }
                                , mobileHA: !1
                            }
                        ), n.$current.velocity("stop").velocity({
                            translateX: 0, opacity: 1
                        }
                            , {
                                display: "block", queue: !1, duration: "undefined" == typeof e ? n.options.duration : e, easing: "undefined" == typeof i ? n.options.easing : i, complete: function (e) {
                                    n.$panelList.removeClass("current").filter(":eq(" + n.NOW + ")").addClass("current")
                                }
                                , mobileHA: !1
                            }
                        ), n.SetTimer()
                    },
s.prototype._getMaxHeight = function () {
                        var e = this, i = 0;
                        return a.each(e.$panelList, function (e, n) {
                            var o = t(e).outerHeight();
                            o > i && (i = o)
                        }
                        ), i
                    },
s.prototype.ResizeHandler = function (e) {
                        var t = e ? e.data : this, i = t._getMaxHeight();
                        t.$panel.css({
                            height: i
                        }
                        ), t.prop = {
                            width: t.$panelList.width(), height: i
                        }
                    }, e.exports = s
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            type: "json", data: null, timeout: 8e3, key: "__nSelectedGenre", expires: 364, directory: "/news/", 
                            title: "ジャンル別新着ニュース", link: "/news/", limit: 6, selected: 0, mobile: !1, categories: [{
                                name: "新着", link: "/news/catnew.html", data: "/news/json16/new_001.json", query: "news-genre-new"
                            }
                                , {
                                name: "社会", link: "/news/cat01.html", data: "/news/json16/cat01_001.json", query: "news-genre-social"
                            }
                                , {
                                name: "暮らし", link: "/news/cat02.html", data: "/news/json16/cat02_001.json", query: "news-genre-life"
                            }
                                , {
                                name: "科学・文化", link: "/news/cat03.html", data: "/news/json16/cat03_001.json", query: "news-genre-culture"
                            }
                                , {
                                name: "政治", link: "/news/cat04.html", data: "/news/json16/cat04_001.json", query: "news-genre-politics"
                            }
                                , {
                                name: "ビジネス", link: "/news/business.html", data: "/news/json16/cat05_001.json", query: "news-genre-business"
                            }
                                , {
                                name: "国際", link: "/news/cat06.html", data: "/news/json16/cat06_001.json", query: "news-genre-international"
                            }
                                , {
                                name: "スポーツ", link: "/news/cat07.html", data: "/news/json16/cat07_001.json", query: "news-genre-sports"
                            }
                                , {
                                name: "気象・災害", link: "/news/saigai.html", data: "/news/json16/cat08_001.json", query: "news-genre-saigai"
                            }
                                , {
                                name: "地域", link: "/lnews/", data: "/news/json16/cat09_001.json", query: "news-genre-local"
                            }
                            ], testing: !1, testkey: "__nABTesting", mode: null, queryOption: "&nnw_opt=news-genre_"
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(50)),
                        this.templateItem = o.template(i(49)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$panelTab = null,
                        this.$panelTabList = null,
                        this.$panelSelect = null,
                        this.$panelSelectButton = null,
                        this.$panelLink = null,
                        this.$panelLinkGenre = null,
                        this.$panelContainer = null,
                        this.$panelHeader = null,
                        this.$panelThumb = null,
                        this.globalTime = null,
                        this.isLoading = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "", e.GetDateTimeUTC())
                    },
s.prototype.TestCookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.TestCookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    },
s.prototype.TestCookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.testkey) || null
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.CookieManager()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.CookieManager = function () {
                        var e = this;
                        t.cookie(e.options.key) ? e.options.selected = t.cookie(e.options.key) : e.CookieSet(), e.Get()
                    },
s.prototype.CookieSet = function () {
                        var e = this;
                        t.cookie(e.options.key, e.options.selected, {
                            expires: e.options.expires, path: "/", domain: location.hostname
                        }
                        )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.categories[e.options.selected].data, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (i) {
                            var n = e.Parse(i);
                            "" != n.data ? (e.$element.append(e.template({
                                title: e.options.title, queryOption: e.options.queryOption
                            }
                            )), t(".featured-panel", e.element).append(e.templateItem(n)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.GetNewsItems = function (e) {
                        var i = this;
                        i.isLoading = !0, i.$panelContainer.empty().addClass("loading"), t.ajax({
                            type: "GET", url: e, dataType: i.options.type, data: i.options.data, cache: !1, timeout: i.options.timeout
                        }
                        ).then(function (e) {
                            var t = i.Parse(e);
                            i.$panelContainer.removeClass("loading").append(i.templateItem(t)), i.LoadImages(), i.isLoading = !1
                        }
                            , function (e) {
}
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                                n > i;
                                ++i) {
                                var o = new Date(e.channel.item[i].pubDate);
                                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1
                            } return e.queryRoot = "?utm_int=news_contents_" + t.options.categories[t.options.selected].query + "_", {
                        data: e, limit: t.options.limit, cate: t.options.categories, selected: t.options.selected, mobile: t.options.mobile, queryOption: t.options.queryOption }
                        }
                    },
s.prototype.Dispose = function () {
                    var e = this;
                    e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                    var e = this;
                    e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), e.$panelTab = t(".nav--tab", e.element), e.$panelTabList = e.$panelTab.find("li"), e.$panelSelect = t(".nav--tab-select", e.element), e.$panelSelectButton = t("#genre-select", e.$panelSelect), e.$panelLink = t("a", e.$elementFooter), e.$panelLinkGenre = t("span", e.$panelLink), e.$panelContainer = t(".featured-panel", e.element), e.$panelHeader = t(".featured-panel--header", e.$panelContainer), e.$panelThumb = t(".featured-panel--thumb", e.$panelContainer), e.GenrePropSet(), e.LoadImages(), e.$panelTabList.on("click", e, e.ChangeGenreTab), e.$panelSelectButton.on("change", e, e.ChangeGenreSelect) },
s.prototype.ChangeGenreTab = function (e) {
                    var i = e ? e.data : this;
                    t(this).hasClass("is-active") || i.isLoading || (i.options.selected = t(this).data("target-genre"), "undefined" != typeof ga && ga("send", "event", "news_contents", "click", "select_" + i.options.categories[i.options.selected].query), i.GetNewsItems(i.options.categories[i.options.selected].data), i.CookieSet(), i.GenrePropSet()) },
s.prototype.ChangeGenreSelect = function (e) {
                    var i = e ? e.data : this;
                    if (!i.isLoading) return i.options.selected = t(this).val(), "undefined" != typeof ga && ga("send", "event", "news_contents", "click", "select_" + i.options.categories[i.options.selected].query), i.GetNewsItems(i.options.categories[i.options.selected].data), i.CookieSet(), i.GenrePropSet(), i.AnchorScroller(), !1 },
s.prototype.GenrePropSet = function () {
                    var e = this;
                    e.$panelSelectButton.val(e.options.selected), e.$panelTabList.removeClass("is-active").attr("aria-selected", "false").eq(e.$panelSelectButton.find("option:selected").data("target")).addClass("is-active").attr("aria-selected", "true"), e.$panelLink.attr("href", e.options.categories[e.options.selected].link + "?utm_int=news_contents_" + e.options.categories[e.options.selected].query + "_more" + e.options.queryOption), e.$panelLinkGenre.text(e.options.categories[e.options.selected].name) },
s.prototype.AnchorScroller = function () {
                    var e = this;
                    e.$element.length && e.$element.velocity("scroll", {
                    duration: 480, easing: "easeInOutQuart", offset: -50, complete: function () {
                    t(window).trigger("resize") } }) },
s.prototype.LoadImages = function () {
                    var e = this;
                    e.$element.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                    i.isLoaded ? t(i.img).velocity({
                    opacity: 1 }, {
                    duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
                    opacity: 1 }, {
                    duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                    }).always(function () {
                    e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = function () {
                    this.Constructor.apply(this, arguments) };
                    a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/keyword.json", type: "json", data: null, timeout: 8e3, directory: "/news/", query: "utm_int=detail_contents_news-keyword_", testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=news-keyword_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(51)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.Init()
                }, a.prototype.Init = function () {
                var e = this;
                e.$element.length && (e.Setup(), e.options.testing ? e.CookieManager() : (e.options.queryOption = null, e.Get())) }, a.prototype.CookieManager = function () {
                var e = this;
                if (e.options.mode && "" != e.options.mode) e.$element.addClass("mode-" + e.options.mode), e.options.queryOption = null;
                else switch (e.CookieGet()) {
                case "a": e.$element.addClass("mode-a"), e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                break;
                case "b": e.$element.addClass("mode-b"), e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                break;
                default: e.options.queryOption = null }e.SetupQuery(), e.Get() }, a.prototype.CookieGet = function () {
                var e = this;
                return t.cookie(e.options.key) || null }, a.prototype.Get = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                var i = e.Parse(t);
                "" != i.data ? (e.$itemList.append(e.template(i)), "b" === e.options.mode && e.SetupHash()) : e.Dispose() }, function (t) {
                e.Dispose() }) }, a.prototype.Parse = function (e) {
                if (null != e && void 0 !== e) {
                var i = this, n = [], a = e;
                i.$itemList.find("a").each(function (e) {
                n.push(t(this).text()) });
                for (var s = 0, l = n.length;
                l > s;
                s++)a.item = o.without(a.item, o.findWhere(a.item, {
                word: n[s] }));
                return a.queryRoot = i.options.query, {
                data: a, length: n.length, directory: i.options.directory, mode: i.options.mode, queryOption: i.options.queryOption } } }, a.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
                var e = this;
                e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".nav-keywords", e.$itemContainer), e.$window.trigger("resize").trigger("scroll") }, a.prototype.SetupQuery = function () {
                var e = this;
                e.$itemList.find("a").each(function (i, n) {
                var o = t(this).attr("href");
                t(this).attr("href", o + e.options.queryOption) }) }, a.prototype.SetupHash = function () {
                var e = this;
                e.$itemList.find("a").each(function (e, i) {
                var n = t(this).text();
                t(this).text("#" + n) }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: ["/news/json16/specialcontents.json", "/news/json16/tokusetsu.json"], type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(52)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.Init()
                }, a.prototype.Init = function () {
                var e = this;
                e.$element.length && (e.Setup(), e.GetSpecial()) }, a.prototype.GetSpecial = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url[0], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                e.ParseSpecial(t), e.GetTokusetsu() }, function (t) {
                e.GetTokusetsu() }) }, a.prototype.ParseSpecial = function (e) {
                var i = this;
                (null == e || void 0 === e) && i.Dispose();
                var n = [];
                o.each(e.item, function (e, t) {
                n[t] = {}, n[t].title = "", n[t].link = e.link, n[t].imgPath = e.imgPath, n[t].comment = e.description, n[t].target = e.target }), 0 < n.length && (i.$itemList.find("li").each(function (e) {
                for (var o = t(this).find("a"), a = o.attr("href").replace(/\#.*$/, "").replace(/\?.*$/, ""), e = 0, s = n.length;
                s > e;
                ++e)a == n[e].link && (n[e].title = t(this).find(".title").text() || t(this).find(".content--title").text() || "", o.empty(), o.append(i.template(n[e]))) }), i.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                i.isLoaded ? t(i.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                }).always(function () {
                i.$window.trigger("resize").trigger("scroll") })) }, a.prototype.GetTokusetsu = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url[1], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                e.ParseTokusetsu(t) }, function (e) {
                }) }, a.prototype.ParseTokusetsu = function (e) {
                var i = this;
                (null == e || void 0 === e) && i.Dispose();
                var n = [];
                o.each(e.channel.item, function (e, t) {
                e.topFlg && n.push(e) }), 0 < n.length && (i.$itemList.find("li").each(function (e) {
                for (var o = t(this).find("a"), a = o.attr("href").replace(/\#.*$/, "").replace(/\?.*$/, ""), e = 0, s = n.length;
                s > e;
                ++e)a == n[e].link && (n[e].title = t(this).find(".title").text() || t(this).find(".content--title").text() || "", o.empty(), o.append(i.template(n[e]))) }), i.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                i.isLoaded ? t(i.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                }).always(function () {
                i.$window.trigger("resize").trigger("scroll") })) }, a.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
                var e = this;
                e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            url: "/news/json16/", type: "json", data: null, timeout: 8e3, key: "__nScrollPosition", expires: 364, directory: "/news/", title: "", query: "" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(54)),
                        this.templateItem = o.template(i(53)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.TARGET = 0,
                        this.PAGE_NOW = 0,
                        this.isLoading = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                var e = this;
                e.$element.length && e.GetDateTimeUTC() },
s.prototype.GetDateTimeUTC = function () {
                var e = this;
                t.ajax({
                type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
                var o = n.getResponseHeader("Date");
                e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.$element.append(e.template({
                title: e.options.title })), e.Setup() }, function (t, i, n) {
                e.Dispose() }) },
s.prototype.HashChangeHandler = function (e) {
                var t = e ? e.data : this, i = ~~location.hash.replace(/(^#!)\/(.+)\//, "$2");
                0 != i && i > 1 && 100 >= i && /^#!\/([0-9]+)\//.test(location.hash) ? (location.hash = "#!/" + i + "/", t.TARGET = i, t.Get(t.TARGET)) : (t.CookieRemove(), t.TARGET = 1, t.Get(t.TARGET)) },
s.prototype.Get = function (e) {
                var i = this, n = e;
                i.isLoading || i.PAGE_NOW < n && (i.isLoading = !0, i.$buttonMore.velocity("stop").velocity({
                opacity: 0 }, {
                duration: 60, easing: "easeInOutQuart" }), i.$element.addClass("loading"), i.$itemContainer.append(i.$loading), i.PAGE_NOW++ , n = i.PAGE_NOW, n = 1 == n.toString().length ? "00" + n : 2 == n.toString().length ? "0" + n : n, t.ajax({
                type: "GET", url: i.options.url.replace(/^(.+)_([0-9]+)(\.[a-z]+)$/, "$1_" + n + "$3"), dataType: i.options.type, data: i.options.data, cache: !1, timeout: i.options.timeout }).then(function (e) {
                var n = i.Parse(e);
                "" != n.data && (i.$element.removeClass("loading"), i.$loading.remove(), t(".content--list", i.element).append(i.templateItem(n)), i.LoadImages(), i.PAGE_NOW < i.TARGET ? (i.isLoading = !1, i.Get(~~i.PAGE_NOW + 1)) : (i.isLoading = !1, i.CookieManager()), i.$buttonMore.velocity("stop").velocity({
                opacity: 1 }, {
                duration: 640, easing: "easeInOutQuart", complete: function () {
                i.$buttonMore && i.$buttonMore.css("opacity", ""), i.$window.trigger("resize") } }), n.data.channel.hasNext || i.Clear()) }, function (e) {
                i.Clear(!0) })) },
s.prototype.GetNewsItems = function (e) {
                var t = e ? e.data : this;
                t.isLoading || (location.hash = "#!/" + (t.PAGE_NOW + 1) + "/") },
s.prototype.Clear = function (e) {
                var t = this;
                t.$buttonMore.off("click", t.GetNewsItems), t.$buttonMore.remove(), t.$buttonMore = null, t.$element.removeClass("loading"), t.$loading.remove(), t.$loading = null, t.$elementFooter.remove(), t.$elementFooter = null, e && (t.PAGE_NOW-- , location.hash = "#!/" + t.PAGE_NOW + "/"), t.$window.trigger("resize") },
s.prototype.Parse = function (e) {
                if (null != e && void 0 !== e) {
                var t = this;
                if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                n > i;
                ++i) {
                var o = new Date(e.channel.item[i].pubDate);
                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return e.queryRoot = t.options.query, {
                data: e, directory: t.options.directory, offset: 20 * (t.PAGE_NOW - 1) } } },
s.prototype.CookieManager = function () {
                var e = this;
                t.cookie(e.options.key) && "undefined" !== t.cookie(e.options.key) && ~~t.cookie(e.options.key) > 0 && e.$body.velocity("stop").velocity("scroll", {
                duration: 1e3, easing: "easeInOutQuart", offset: t.cookie(e.options.key), complete: function () {
                e.CookieRemove(), e.$window.trigger("resize") }, mobileHA: !1 }) },
s.prototype.CookieSet = function () {
                var e = this;
                t.cookie(e.options.key, 0 | e.$window.scrollTop(), {
                domain: "." + location.hostname, path: "/news/", expires: e.options.expires }) },
s.prototype.CookieRemove = function () {
                var e = this;
                t.cookie(e.options.key, "", {
                domain: "." + location.hostname, path: "/news/", expires: -1 }), t.cookie(e.options.key, "", {
                path: "/news/", expires: -1 }) },
s.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                var e = this;
                e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), e.$buttonMore = t(".button", e.$elementFooter), e.$window.on("hashchange", e, e.HashChangeHandler).trigger("hashchange"), e.$buttonMore.on("click", e, function () {
                e.GetNewsItems(), "undefined" != typeof ga && ga("send", "pageview", window.location.pathname + window.location.hash) }), t(document).on("click", ".content--list a, .button-more .button", function (t) {
                e.CookieSet() }) },
s.prototype.LoadImages = function () {
                var e = this;
                e.$itemList.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                n.isLoaded ? t(n.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart", complete: function () {
                t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart", complete: function () {
                t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
                }).always(function () {
                e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                        var n = i(3), o = i(2), a = function () {
                        this.Constructor.apply(this, arguments) };
                        a.prototype.Constructor = function (e, a) {
                        this.$window = t(window),
                        this.defaults = {
                            url: "/news/live/live.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(59)),
                        this.template_fs = o.template(i(55)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
                    var e = this;
                    e.$element.length && e.Get() }, a.prototype.Get = function () {
                    var e = this;
                    t.ajax({
                    type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                    var i = e.Parse(t);
                    "" != i.data ? (e.$element.append(e.template(i)), e.Setup(), i.data.freespace && e.SetupFreeSpace(i.data.freespace)) : e.Dispose() }, function (t) {
                    e.Dispose() }) }, a.prototype.Parse = function (e) {
                    if (null != e && void 0 !== e) {
                    return {
                    data: e } } }, a.prototype.Dispose = function () {
                    var e = this;
                    e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
                    var e = this;
                    o.each(e.$element.find(".button"), function (i, n) {
                    t(i).on("click", e, e.VideoRefresh) }), e.$window.trigger("resize").trigger("scroll") }, a.prototype.VideoRefresh = function (e) {
                    var i = (e ? e.data : this, t(this).data("target")), n = t(i);
                    "bk" === t(this).data("video-status") ? (n.stop().css("opacity", 0).attr("src", t(this).data("video-pr")).velocity({
                    opacity: 1 }, {
                    duration: 1200, easing: "easeInOutQuart", complete: function () {
                    n.css("opacity", "") } }), t(this).data("video-status", "pr")) : (n.stop().css("opacity", 0).attr("src", t(this).data("video-bk")).velocity({
                    opacity: 1 }, {
                    duration: 1200, easing: "easeInOutQuart", complete: function () {
                    n.css("opacity", "") } }), t(this).data("video-status", "bk")) }, a.prototype.SetupFreeSpace = function (e) {
                    var i = this;
                    switch (e.displayPos) {
                    case 1: this.$element.after(i.template_fs({
                    data: e }));
                    break;
                    case 2: t("#main").append(i.template_fs({
                    data: e }));
                    break;
                    default: return }i.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = function () {
                this.Constructor.apply(this, arguments) };
                a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/live/live.json", type: "json", data: null, timeout: 8e3, special: "/news/json16/specialcontents.json", tokusetsu: "/news/json16/tokusetsu.json", query: "?utm_int=live_contents_news-link_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(56)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.response = null,
                        this.Init()
                }, a.prototype.Init = function () {
                var e = this;
                e.$element.length && e.Get() }, a.prototype.Get = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                "" != t.relationLink ? (e.response = t.relationLink, e.GetSpecial()) : e.Dispose() }, function (t) {
                e.Dispose() }) }, a.prototype.GetSpecial = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.special, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                e.ParseSpecial(t), e.GetTokusetsu() }, function (t) {
                e.GetTokusetsu() }) }, a.prototype.ParseSpecial = function (e) {
                if (null != e && void 0 !== e) {
                var t = this, i = [];
                o.each(e.item, function (e, t) {
                i[t] = {}, i[t].title = e.title, i[t].link = e.link, i[t].imgPath = e.imgPath, i[t].target = e.target, i[t].description = e.description });
                for (var n = 0, a = t.response.length;
                a > n;
                ++n)for (var s = t.response[n].link.replace(/\#.*$/, "").replace(/\?.*$/, ""), l = 0, r = i.length;
                r > l;
                ++l)s === i[l].link && (t.response[n].imgPath = i[l].imgPath, t.response[n].description = i[l].description) } }, a.prototype.GetTokusetsu = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.tokusetsu, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                e.ParseTokusetsu(t), e.Setup() }, function (t) {
                e.Setup() }) }, a.prototype.ParseTokusetsu = function (e) {
                if (null != e && void 0 !== e) {
                var t = this, i = [];
                o.each(e.channel.item, function (e, t) {
                i[t] = {}, i[t].topFlg = e.topFlg, i[t].title = e.title, i[t].link = e.link, i[t].imgPath = e.imgPath, i[t].target = e.target, i[t].description = e.comment });
                for (var n = 0, a = t.response.length;
                a > n;
                ++n)for (var s = t.response[n].link.replace(/\#.*$/, "").replace(/\?.*$/, ""), l = 0, r = i.length;
                r > l;
                ++l)i[l].topFlg && s === i[l].link && (t.response[n].imgPath = i[l].imgPath, t.response[n].description = i[l].description) } }, a.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null }, a.prototype.Parse = function () {
                }, a.prototype.Setup = function () {
                var e = this;
                e.$element.append(e.template({
                data: e.response, queryRoot: e.options.query })), e.LoadImages(), e.$window.trigger("resize").trigger("scroll") }, a.prototype.LoadImages = function () {
                var e = this;
                e.$element.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                n.isLoaded ? t(n.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart", complete: function () {
                t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart", complete: function () {
                t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
                }).always(function () {
                e.$window.trigger("resize").trigger("scroll") }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            url: "/news/live/live.json", type: "json", data: null, timeout: 8e3, path: "/news/json16/word/", id: "0000000", suffix: ".json", query: "?utm_int=live_contents_news-related_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(58)),
                        this.templateItem = o.template(i(57)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.isLoading = !1,
                        this.response = [], a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
            var e = this;
            e.$element.length && e.GetDateTimeUTC() },
s.prototype.GetDateTimeUTC = function () {
            var e = this;
            t.ajax({
            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
            var o = n.getResponseHeader("Date");
            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
            e.Dispose() }) },
s.prototype.Get = function () {
            var e = this, i = [], n = 0;
            t.ajax({
            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (o) {
            if (o.relationTag.length > 0) {
            for (var a = 0, s = o.relationTag.length;
            s > a;
            ++a)i.push(e.GetData(o.relationTag[a].id, n, o.relationTag[a].displayNum, 1, o.relationTag[a].name, !0)), n++;
            t.when.apply(t, i).always(function () {
            for (var i = 0, n = arguments.length;
            n > i;
            ++i)arguments[i] && e.response.push(arguments[i]);
            for (var o = 0, a = e.response.length;
            a > o;
            ++o)e.$element.append(e.template(e.response[o])), e.response[o].items <= e.response[o].limit && (e.response[o].hasNext ? e.GetDataRefer(e.response[o].id, e.response[o].num, e.response[o].limit, ++e.response[o].page, e.response[o].title) : t(".module--footer", e.element).eq(e.response[o].num).remove());
            e.LoadImages() }) } else e.Dispose() }, function (t) {
            e.Dispose() }) },
s.prototype.GetData = function (e, i, n, o, a, s) {
            var l = this, r = null;
            if (s) var u = t.Deferred();
            return t.ajax({
            type: "GET", url: l.options.path + e + "_" + ("000" + o).slice(-3) + l.options.suffix, dataType: l.options.type, data: l.options.data, cache: !1, timeout: l.options.timeout }).always(function (t) {
            "undefined" != typeof t.channel && (r = l.Parse(t), r.hasNext = "undefined" != typeof t.channel.hasNext ? t.channel.hasNext : !1, r.items = t.channel.item.length, r.id = e, r.title = a, r.limit = n, r.page = o, r.num = i, r.queryRoot = l.options.query), s && u.resolve(r) }), s ? u.promise() : void 0 },
s.prototype.GetDataRefer = function (e, i, n, o, a) {
            var s = this;
            t.ajax({
            type: "GET", url: s.options.path + e + "_" + ("000" + o).slice(-3) + s.options.suffix, dataType: s.options.type, data: s.options.data, cache: !1, timeout: s.options.timeout }).done(function (l) {
            var r = s.Parse(l);
            r.hasNext = "undefined" != typeof l.channel.hasNext ? l.channel.hasNext : !1, r.offset = 20 * (o - 1), r.items = r.offset + l.channel.item.length, r.id = e, r.title = a, r.limit = n, r.page = o, r.num = i, r.queryRoot = s.options.query, t(".content--list", s.element).eq(i).append(s.templateItem(r)), s.LoadImages(), r.items <= r.limit && (r.hasNext ? s.GetDataRefer(r.id, r.num, r.limit, ++r.page, r.title) : t(".module--footer", s.element).eq(i).remove()) }).fail(function (e) {
            }) },
s.prototype.Parse = function (e) {
            if (null != e && void 0 !== e) {
            var t = this;
            if ("undefined" != typeof e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
            n > i;
            ++i) {
            var o = new Date(e.channel.item[i].pubDate);
            new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) && ("undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "")), e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return {
            data: e } } },
s.prototype.Dispose = function () {
            var e = this;
            e.$element && (e.$element.remove(), e.$element = null) },
s.prototype.Setup = function () {
            },
s.prototype.LoadImages = function () {
            var e = this;
            e.$element.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
            n.isLoaded ? t(n.img).velocity({
            opacity: 1 }, {
            duration: 800, easing: "easeInOutQuart", complete: function () {
            t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
            opacity: 1 }, {
            duration: 800, easing: "easeInOutQuart", complete: function () {
            t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
            }).always(function () {
            e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            type: "xml", data: null, timeout: 8e3, key: "__nSelectedLocal", expires: 364, link: "/lnews/", limit: 7, selected: 7, local: [{
                            name: "北海道", code: "700", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml", ga: "select_news-local-sapporo" }, {
                                name: "宮城", code: "600", link: "/tohoku-news/", data: "/tohoku-news/nhk_sendai.xml",
                                ga: "select_news-local-tohoku"
                            }
                                , {
                                name: "青森", code: "608", link: "/lnews/aomori/", data: "/lnews/aomori/nhk_aomori.xml", ga: "select_news-local-aomori"
                            }
                                , {
                                name: "岩手", code: "604", link: "/lnews/morioka/", data: "/lnews/morioka/nhk_morioka.xml", ga: "select_news-local-morioka"
                            }
                                , {
                                name: "秋田", code: "601", link: "/lnews/akita/", data: "/lnews/akita/nhk_akita.xml", ga: "select_news-local-akita"
                            }
                                , {
                                name: "山形", code: "602", link: "/lnews/yamagata/", data: "/lnews/yamagata/nhk_yamagata.xml", ga: "select_news-local-yamagata"
                            }
                                , {
                                name: "福島", code: "605", link: "/lnews/fukushima/", data: "/lnews/fukushima/nhk_fukushima.xml", ga: "select_news-local-fukushima"
                            }
                                , {
                                name: "首都圏", code: "001", link: "/shutoken-news/", data: "/shutoken-news/nhk_shutoken.xml", ga: "select_news-local-shutoken"
                            }
                                , {
                                name: "茨城", code: "107", link: "/lnews/mito/", data: "/lnews/mito/nhk_mito.xml", ga: "select_news-local-mito"
                            }
                                , {
                                name: "栃木", code: "109", link: "/lnews/utsunomiya/", data: "/lnews/utsunomiya/nhk_utsunomiya.xml", ga: "select_news-local-utsunomiya"
                            }
                                , {
                                name: "群馬", code: "106", link: "/lnews/maebashi/", data: "/lnews/maebashi/nhk_maebashi.xml", ga: "select_news-local-maebashi"
                            }
                                , {
                                name: "埼玉", code: "110", link: "/lnews/saitama/", data: "/lnews/saitama/nhk_saitama.xml", ga: "select_news-local-saitama"
                            }
                                , {
                                name: "千葉", code: "108", link: "/lnews/chiba/", data: "/lnews/chiba/nhk_chiba.xml", ga: "select_news-local-chiba"
                            }
                                , {
                                name: "神奈川", code: "105", link: "/lnews/yokohama/", data: "/lnews/yokohama/nhk_yokohama.xml", ga: "select_news-local-yokohama"
                            }
                                , {
                                name: "新潟", code: "103", link: "/lnews/niigata/", data: "/lnews/niigata/nhk_niigata.xml", ga: "select_news-local-niigata"
                            }
                                , {
                                name: "山梨", code: "104", link: "/lnews/kofu/", data: "/lnews/kofu/nhk_kofu.xml", ga: "select_news-local-kofu"
                            }
                                , {
                                name: "長野", code: "101", link: "/lnews/nagano/", data: "/lnews/nagano/nhk_nagano.xml", ga: "select_news-local-nagano"
                            }
                                , {
                                name: "東海", code: "300", link: "/tokai-news/", data: "/tokai-news/nhk_nagoya.xml", ga: "select_news-local-tokai"
                            }
                                , {
                                name: "富山", code: "306", link: "/lnews/toyama/", data: "/lnews/toyama/nhk_toyama.xml", ga: "select_news-local-toyama"
                            }
                                , {
                                name: "石川", code: "302", link: "/lnews/kanazawa/", data: "/lnews/kanazawa/nhk_kanazawa.xml", ga: "select_news-local-kanazawa"
                            }
                                , {
                                name: "福井", code: "305", link: "/lnews/fukui/", data: "/lnews/fukui/nhk_fukui.xml", ga: "select_news-local-fukui"
                            }
                                , {
                                name: "岐阜", code: "308", link: "/lnews/gifu/", data: "/lnews/gifu/nhk_gifu.xml", ga: "select_news-local-gifu"
                            }
                                , {
                                name: "静岡", code: "303", link: "/lnews/shizuoka/", data: "/lnews/shizuoka/nhk_shizuoka.xml", ga: "select_news-local-shizuoka"
                            }
                                , {
                                name: "三重", code: "307", link: "/lnews/tsu/", data: "/lnews/tsu/nhk_tsu.xml", ga: "select_news-local-tsu"
                            }
                                , {
                                name: "関西", code: "200", link: "/kansai-news/", data: "/kansai-news/nhk_osaka.xml", ga: "select_news-local-kansai"
                            }
                                , {
                                name: "滋賀", code: "206", link: "/lnews/otsu/", data: "/lnews/otsu/nhk_otsu.xml", ga: "select_news-local-otsu"
                            }
                                , {
                                name: "京都", code: "201", link: "/lnews/kyoto/", data: "/lnews/kyoto/nhk_kyoto.xml", ga: "select_news-local-kyoto"
                            }
                                , {
                                name: "兵庫", code: "202", link: "/lnews/kobe/", data: "/lnews/kobe/nhk_kobe.xml", ga: "select_news-local-kobe"
                            }
                                , {
                                name: "奈良", code: "205", link: "/lnews/nara/", data: "/lnews/nara/nhk_nara.xml", ga: "select_news-local-nara"
                            }
                                , {
                                name: "和歌山", code: "204", link: "/lnews/wakayama/", data: "/lnews/wakayama/nhk_wakayama.xml", ga: "select_news-local-wakayama"
                            }
                                , {
                                name: "広島", code: "400", link: "/hiroshima-news/", data: "/hiroshima-news/nhk_hiroshima.xml", ga: "select_news-local-hiroshima"
                            }
                                , {
                                name: "鳥取", code: "404", link: "/lnews/tottori/", data: "/lnews/tottori/nhk_tottori.xml", ga: "select_news-local-tottori"
                            }
                                , {
                                name: "島根", code: "403", link: "/lnews/matsue/", data: "/lnews/matsue/nhk_matsue.xml", ga: "select_news-local-matsue"
                            }
                                , {
                                name: "岡山", code: "402", link: "/lnews/okayama/", data: "/lnews/okayama/nhk_okayama.xml", ga: "select_news-local-okayama"
                            }
                                , {
                                name: "山口", code: "406", link: "/lnews/yamaguchi/", data: "/lnews/yamaguchi/nhk_yamaguchi.xml", ga: "select_news-local-yamaguchi"
                            }
                                , {
                                name: "愛媛", code: "800", link: "/matsuyama-news/", data: "/matsuyama-news/nhk_matsuyama.xml", ga: "select_news-local-matsuyama"
                            }
                                , {
                                name: "徳島", code: "802", link: "/lnews/tokushima/", data: "/lnews/tokushima/nhk_tokushima.xml", ga: "select_news-local-tokushima"
                            }
                                , {
                                name: "香川", code: "803", link: "/lnews/takamatsu/", data: "/lnews/takamatsu/nhk_takamatsu.xml", ga: "select_news-local-takamatsu"
                            }
                                , {
                                name: "高知", code: "801", link: "/lnews/kochi/", data: "/lnews/kochi/nhk_kochi.xml", ga: "select_news-local-kochi"
                            }
                                , {
                                name: "福岡", code: "501", link: "/fukuoka-news/", data: "/fukuoka-news/nhk_fukuoka.xml", ga: "select_news-local-fukuoka"
                            }
                                , {
                                name: "北九州", code: "502", link: "/lnews/kitakyushu/", data: "/lnews/kitakyushu/nhk_kitakyushu.xml", ga: "select_news-local-kitakyushu"
                            }
                                , {
                                name: "佐賀", code: "508", link: "/lnews/saga/", data: "/lnews/saga/nhk_saga.xml", ga: "select_news-local-saga"
                            }
                                , {
                                name: "長崎", code: "503", link: "/lnews/nagasaki/", data: "/lnews/nagasaki/nhk_nagasaki.xml", ga: "select_news-local-nagasaki"
                            }
                                , {
                                name: "熊本", code: "500", link: "/lnews/kumamoto/", data: "/lnews/kumamoto/nhk_kumamoto.xml", ga: "select_news-local-kumamoto"
                            }
                                , {
                                name: "大分", code: "507", link: "/lnews/oita/", data: "/lnews/oita/nhk_oita.xml", ga: "select_news-local-oita"
                            }
                                , {
                                name: "宮崎", code: "506", link: "/lnews/miyazaki/", data: "/lnews/miyazaki/nhk_miyazaki.xml", ga: "select_news-local-miyazaki"
                            }
                                , {
                                name: "鹿児島", code: "505", link: "/lnews/kagoshima/", data: "/lnews/kagoshima/nhk_kagoshima.xml", ga: "select_news-local-kagoshima"
                            }
                                , {
                                name: "沖縄", code: "509", link: "/lnews/okinawa/", data: "/lnews/okinawa/nhk_okinawa.xml", ga: "select_news-local-okinawa"
                            }
                            ], localhokkaido: [{
                                name: "函館", code: "701", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml"
                            }
                                , {
                                name: "旭川", code: "702", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml"
                            }
                                , {
                                name: "帯広", code: "703", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml"
                            }
                                , {
                                name: "釧路", code: "704", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml"
                            }
                                , {
                                name: "北見", code: "705", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml"
                            }
                                , {
                                name: "室蘭", code: "706", link: "/sapporo-news/", data: "/sapporo-news/nhk_sapporo.xml"
                            }
                            ]
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(61)),
                        this.templateItem = o.template(i(60)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$localTitle = null,
                        this.$localSelect = null,
                        this.$localSelectButton = null,
                        this.$locallLink = null,
                        this.$localLinkGenre = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.isLoading = !1, t.cookie.json = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.CookieManager()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.CookieManager = function () {
                        var e = this, i = t.cookie("nol_share") ? new Function("return " + t.cookie("nol_share"))() : null, n = o.pluck(e.options.local, "code"), a = o.pluck(e.options.localhokkaido, "code");
                        if (i && "undefined" != typeof i.lnewsarea) {
                            for (var s = 0, l = n.length;
                                l > s;
                                ++s)if (n[s] == i.lnewsarea) {
                                    e.options.selected = s, e.CookieSet();
                                    break
                                }
                            for (var r = 0, u = a.length;
                                u > r;
                                ++r)if (a[r] == i.lnewsarea) {
                                    e.options.selected = 0, e.CookieSet();
                                    break
                                }
                        }
                        else t.cookie(e.options.key) ? (e.options.selected = t.cookie(e.options.key), e.CookieSet()) : e.CookieSet();
                        e.Get()
                    },
s.prototype.CookieSet = function () {
                        var e = this;
                        t.cookie(e.options.key, e.options.selected, {
                            expires: e.options.expires, path: "/", domain: location.hostname
                        }
                        )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.local[e.options.selected].data, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (i) {
                            var n = e.Parse(i);
                            "" != n.data ? (e.$element.append(e.template(n)), t(".module--content", e.element).append(e.templateItem(n)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.ChangeLocal = function () {
                        var e = this;
                        e.isLoading = !0, e.$elementContainer.empty().addClass("loading"), t.ajax({
                            type: "GET", url: e.options.local[e.options.selected].data, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            e.$elementContainer.removeClass("loading").append(e.templateItem(i)), e.isLoading = !1
                        }
                            , function (e) {
                            }
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var i = this, n = {
                                title: t(e).find("channel").children("title").text(), station: t(e).find("station").text(), item: []
                            }
                                ;
                            return o.each(t(e).find("item"), function (e, o) {
                                var s = new Date(t(e).find("pubDate").text());
                                n.item.push({
                                    date: 0 == a(i.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(s).tz("Asia/Tokyo").startOf("day"), "days") ? a(s).tz("Asia/Tokyo").format("H時mm分") : a(s).tz("Asia/Tokyo").format("M月D日 H時mm分"), datetime: a(new Date(t(e).find("pubDate").text())).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), title: t(e).find("title").text(), link: t(e).find("link").text(), video: t(e).find("video").text() || "", "new": a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1
                                }
                                )
                            }
                            ), {
                                    data: n, link: i.options.link, limit: i.options.limit
                                }
                        }
                    },
s.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    },
s.prototype.Setup = function () {
                        var e = this;
                        e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), e.$elementContainer = t(".module--content", e.element), e.$localTitle = t(".nav--local-title", e.element).find("span"), e.$localSelect = t(".nav--local-select", e.element), e.$localSelectButton = t("#local-select", e.$localSelect), e.$localLink = t(".local-link", e.element).find("a"), e.$localLinkName = t(".local-link", e.element).find("span"), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), e.LocalPropSet(), e.$localSelectButton.on("change", e, e.ChangeLocalSelect)
                    },
s.prototype.ChangeLocalSelect = function (e) {
                        var i = e ? e.data : this;
                        if (!i.isLoading) return i.options.selected = t(this).val(), t(this).val(i.options.selected), "undefined" != typeof ga && ga("send", "event", "news_contents", "click", i.options.local[i.options.selected].ga), i.ChangeLocal(), i.CookieSet(), i.LocalPropSet(), i.AnchorScroller(), !1
                    },
s.prototype.LocalPropSet = function () {
                        var e = this;
                        e.$localSelectButton.val(e.options.selected), e.$localTitle.text(e.options.local[e.options.selected].name), e.$localLinkName.each(function (i) {
                            t(this).text(e.options.local[e.options.selected].name)
                        }
                        ), e.$localLink.each(function (i) {
                            t(this).attr("href", e.options.local[e.options.selected].link)
                        }
                        )
                    },
s.prototype.AnchorScroller = function () {
                        var e = this;
                        e.$element.length && e.$element.velocity("scroll", {
                            duration: 480, easing: "easeInOutQuart", offset: -50, complete: function () {
                                t(window).trigger("resize")
                            }
                        }
                        )
                    }, e.exports = s
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/movie09_001.json", type: "json", data: null, timeout: 8e3, directory: "/news/", title: "地域のニュース", limit: 10
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(63)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemHeader = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30), a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                                n > i;
                                ++i) {
                                var o = new Date(e.channel.item[i].pubDate);
                                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1
                            } return {
                            data: e, directory: t.options.directory, title: t.options.title, limit: t.options.limit }
                        }
                    },
s.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                var e = this;
                e.$itemHeader = t(".content--header", e.element), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
                e.$itemLists.push(t(i)) }), e.$element.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                i.isLoaded ? t(i.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                }).always(function () {
                e.$window.on("resize orientationchange", e, e.ColumnResize), e.$window.trigger("resize").trigger("scroll") }) },
s.prototype.ColumnResize = function (e) {
                var i = e ? e.data : this;
                i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
                var e = 2, n = 0, o = null, a = [];
                if (e > 1) {
                i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
                return t(this).outerHeight() }).get(), n = o.length;
                for (var s = 0, l = n;
                s < Math.ceil(l / e);
                ++s) {
                var r = s * e;
                a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
                n > u;
                ++u)for (var c = 0;
                e > c;
                ++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/syuyo.json", type: "json", data: null, timeout: 8e3, 
                            directory: "/news/", 
                            title: "主要ニュース", link: "/news/catnew.html", category: null, limit: 7, 
                            testing: !1, key: "__nABTesting", mode: null, 
                            queryOption: "&nnw_opt=news-main_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(64)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemHeader = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                var e = this;
                e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.GetDateTimeUTC()) },
s.prototype.CookieManager = function () {
                var e = this;
                if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                else switch (e.CookieGet()) {
                case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                break;
                case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                break;
                default: e.options.queryOption = "" } },
s.prototype.CookieGet = function () {
                var e = this;
                return t.cookie(e.options.key) || null },
s.prototype.GetDateTimeUTC = function () {
                var e = this;
                t.ajax({
                type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
                var o = n.getResponseHeader("Date");
                e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
                e.Dispose() }) },
s.prototype.Get = function () {
                var e = this;
                t.ajax({
                type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
                var i = e.Parse(t);
                "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
                e.Dispose() }) },
s.prototype.Parse = function (e) {
                if (null != e && void 0 !== e) {
                var t = this;
                if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                n > i;
                ++i) {
                var o = new Date(e.channel.item[i].pubDate);
                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 == i || 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return {
                data: e, directory: t.options.directory, title: t.options.title, link: t.options.link, category: t.options.category, limit: t.options.limit, mode: t.options.mode, queryOption: t.options.queryOption } } },
s.prototype.Dispose = function () {
                var e = this;
                e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
                var e = this;
                e.$itemHeader = t(".content--header", e.element), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
                e.$itemLists.push(t(i)) }), e.$itemHeader.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                i.isLoaded ? t(i.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                }).always(function () {
                e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                i.isLoaded ? t(i.img).velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
                opacity: 1 }, {
                duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
                }).always(function () {
                e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }) },
s.prototype.ColumnResize = function (e) {
                var i = e ? e.data : this;
                i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
                var e = i.$window.width() <= i.BREAKPOINT ? 1 : 2, n = 0, o = null, a = [];
                if (e > 1) {
                i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
                return t(this).outerHeight() }).get(), n = o.length;
                for (var s = 0, l = n;
                s < Math.ceil(l / e);
                ++s) {
                var r = s * e;
                a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
                n > u;
                ++u)for (var c = 0;
                e > c;
                ++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } else i.$itemList.find("li").css("height", "");
                i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/html/toppage/xml/movlist.xml", type: "xml", data: null, timeout: 8e3, directory: "/news/", 
                            title: "動画ニュース", link: "/news/movie.html", limit: 4, testing: !1, key: "__nABTesting", mode: null, 
                            queryOption: "&nnw_opt=news-movie_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(65)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.GetDateTimeUTC()) },
s.prototype.CookieManager = function () {
var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.CookieGet()) {
case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = "" } },
s.prototype.CookieGet = function () {
var e = this;
return t.cookie(e.options.key) || null },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = this, n = [];
return o.each(t(e).find("item"), function (e, o) {
var s = new Date(t(e).find("pubDate").text()), l = t(e).find("imgPath").text(), r = t(e).find("iconPath").text(), u = t(e).find("link").text();
new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(l) ? "undefined" != typeof kokunai && kokunai || (l = "", r = "") : ("" != l && (l = i.options.directory + l), "" != r && (r = i.options.directory + r)), u = i.options.directory + u, n.push({
title: t(e).find("title").text(), date: 0 == a(i.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(s).tz("Asia/Tokyo").startOf("day"), "days") ? a(s).tz("Asia/Tokyo").format("H時mm分") : a(s).tz("Asia/Tokyo").format("M月D日 H時mm分"), datetime: a(s).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), link: u, imgPath: l, iconPath: r, videoPath: t(e).find("videoPath").text(), "new": a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 }) }), {
data: n, directory: i.options.directory, title: i.options.title, link: i.options.link, limit: i.options.limit, queryOption: i.options.queryOption } } },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)) }), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
}).always(function () {
e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }) },
s.prototype.ColumnResize = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 2 : 4, n = 0, o = null, a = [];
if (e > 1) {
i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/pickup.json", type: "json", data: null, timeout: 8e3, template: i(20), link: "/news/pickup_news/", limit: 1, attr: "video-path", video: "https://www3.nhk.or.jp/news/pickup_news16/pickup_news_movie.html" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(this.options.template),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementContainer = null,
                        this.$itemVideoContainer = null,
                        this.$videoPlayer = null,
                        this.$playerTrigger = null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return t.options.video = "undefined" != typeof t.$element.data(t.options.attr) ? t.$element.data(t.options.attr) : t.options.video, {
data: e, link: t.options.link, limit: t.options.limit, video: t.options.video } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$elementContainer = t(".module--content", e.element), e.$itemVideoContainer = t(".content--video", e.$elementContainer), e.$videoPlayer = t(".video-player", e.$itemVideoContainer), e.$playerTrigger = t(".player-trigger", e.$itemVideoContainer), e.$itemVideo = t(".video", e.$elementContainer), e.$itemThumb = t("img", e.$itemVideo), e.$itemThumb.css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }), e.$playerTrigger.on("click", e, e.PlayVideo) }, a.prototype.PlayVideo = function (e) {
var i = e ? e.data : this;
"undefined" != typeof ga && ga("send", "event", "NNW_MoviePlayer", "click", "play_manual"), t(this).remove(), i.$itemVideo.remove(), i.$itemVideoContainer.append('<iframe class="video-player" src="' + i.options.video + '" width="360" height="202" allowfullscreen="allowfullscreen"></iframe>'), i.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/realtime/rtXXXXXXX.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(71)),
                        this.template_fs = o.template(i(67)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup(), i.data.freespace && e.SetupFreeSpace(i.data.freespace)) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
return {
data: e } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
o.each(e.$element.find(".button"), function (i, n) {
t(i).on("click", e, e.VideoRefresh) }), e.$window.trigger("resize").trigger("scroll") }, a.prototype.VideoRefresh = function (e) {
var i = (e ? e.data : this, t(this).data("target")), n = t(i);
"bk" === t(this).data("video-status") ? (n.stop().css("opacity", 0).attr("src", t(this).data("video-pr")).velocity({
opacity: 1 }, {
duration: 1200, easing: "easeInOutQuart", complete: function () {
n.css("opacity", "") } }), t(this).data("video-status", "pr")) : (n.stop().css("opacity", 0).attr("src", t(this).data("video-bk")).velocity({
opacity: 1 }, {
duration: 1200, easing: "easeInOutQuart", complete: function () {
n.css("opacity", "") } }), t(this).data("video-status", "bk")) }, a.prototype.SetupFreeSpace = function (e) {
var i = this;
switch (e.displayPos) {
case 1: this.$element.after(i.template_fs({
data: e }));
break;
case 2: t("#main").append(i.template_fs({
data: e }));
break;
default: return }i.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/realtime/rtXXXXXXX.json", type: "json", data: null, timeout: 8e3, special: "/news/json16/specialcontents.json", tokusetsu: "/news/json16/tokusetsu.json", query: "?utm_int=realtime_contents_news-link_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(68)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.response = null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
"" != t.relationLink ? (e.response = t.relationLink, e.GetSpecial()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.GetSpecial = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.special, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
e.ParseSpecial(t), e.GetTokusetsu() }, function (t) {
e.GetTokusetsu() }) }, a.prototype.ParseSpecial = function (e) {
if (null != e && void 0 !== e) {
var t = this, i = [];
o.each(e.item, function (e, t) {
i[t] = {}, i[t].title = e.title, i[t].link = e.link, i[t].imgPath = e.imgPath, i[t].target = e.target, i[t].description = e.description });
for (var n = 0, a = t.response.length;
a > n;
++n)for (var s = t.response[n].link.replace(/\#.*$/, "").replace(/\?.*$/, ""), l = 0, r = i.length;
r > l;
++l)s === i[l].link && (t.response[n].imgPath = i[l].imgPath, t.response[n].description = i[l].description) } }, a.prototype.GetTokusetsu = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.tokusetsu, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
e.ParseTokusetsu(t), e.Setup() }, function (t) {
e.Setup() }) }, a.prototype.ParseTokusetsu = function (e) {
if (null != e && void 0 !== e) {
var t = this, i = [];
o.each(e.channel.item, function (e, t) {
i[t] = {}, i[t].topFlg = e.topFlg, i[t].title = e.title, i[t].link = e.link, i[t].imgPath = e.imgPath, i[t].target = e.target, i[t].description = e.comment });
for (var n = 0, a = t.response.length;
a > n;
++n)for (var s = t.response[n].link.replace(/\#.*$/, "").replace(/\?.*$/, ""), l = 0, r = i.length;
r > l;
++l)i[l].topFlg && s === i[l].link && (t.response[n].imgPath = i[l].imgPath, t.response[n].description = i[l].description) } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Parse = function () {
}, a.prototype.Setup = function () {
var e = this;
e.$element.append(e.template({
data: e.response, queryRoot: e.options.query })), e.LoadImages(), e.$window.trigger("resize").trigger("scroll") }, a.prototype.LoadImages = function () {
var e = this;
e.$element.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                    var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments) });
                    s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            url: "/news/realtime/rtXXXXXXX.json", type: "json", data: null, timeout: 8e3, 
                            path: "/news/json16/word/", id: "0000000", suffix: ".json", 
                            query: "?utm_int=realtime_contents_news-related_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(70)),
                        this.templateItem = o.template(i(69)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.isLoading = !1,
                        this.response = [],
                        a.locale("ja"),
                        this.Init()
                },
                s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    },
                    s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            })
                    },
                    s.prototype.Get = function () {
                        var e = this, i = [], n = 0;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (o) {
                            if (o.relationTag.length > 0) {
                                for (var a = 0, s = o.relationTag.length;
                                    s > a;
                                    ++a)i.push(e.GetData(o.relationTag[a].id, n, o.relationTag[a].displayNum, 1, o.relationTag[a].name, !0)), n++;
                                t.when.apply(t, i).always(function () {
                                    for (var i = 0, n = arguments.length;
                                        n > i;
                                        ++i)arguments[i] && e.response.push(arguments[i]);
                                    for (var o = 0, a = e.response.length; a > o; ++o)
                                        e.$element.append(e.template(e.response[o])), 
                                        e.response[o].items <= e.response[o].limit && (e.response[o].hasNext ? e.GetDataRefer(e.response[o].id, 
                                        e.response[o].num, e.response[o].limit, ++e.response[o].page, e.response[o].title) : t(".module--footer", e.element).eq(e.response[o].num).remove());
                                    e.LoadImages()
                                })
                            }
                            else e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            })
                    },
                    s.prototype.GetData = function (e, i, n, o, a, s) {
                        var l = this, r = null;
                        if (s) var u = t.Deferred();
                        return t.ajax({
                            type: "GET", url: l.options.path + e + "_" + ("000" + o).slice(-3) + l.options.suffix, dataType: l.options.type, data: l.options.data, cache: !1, timeout: l.options.timeout
                        }
                        ).always(function (t) {
                            "undefined" != typeof t.channel && (r = l.Parse(t), r.hasNext = "undefined" != typeof t.channel.hasNext ? t.channel.hasNext : !1, r.items = t.channel.item.length, r.id = e, r.title = a, r.limit = n, r.page = o, r.num = i, r.queryRoot = l.options.query), s && u.resolve(r)
                        }
                            ), s ? u.promise() : void 0
                    },
                    s.prototype.GetDataRefer = function (e, i, n, o, a) {
                        var s = this;
                        t.ajax({
                            type: "GET", url: s.options.path + e + "_" + ("000" + o).slice(-3) + s.options.suffix, dataType: s.options.type, data: s.options.data, cache: !1, timeout: s.options.timeout
                        }
                        ).done(function (l) {
                            var r = s.Parse(l);
                            r.hasNext = "undefined" != typeof l.channel.hasNext ? l.channel.hasNext : !1, r.offset = 20 * (o - 1), r.items = r.offset + l.channel.item.length, r.id = e, r.title = a, r.limit = n, r.page = o, r.num = i, r.queryRoot = s.options.query, t(".content--list", s.element).eq(i).append(s.templateItem(r)), s.LoadImages(), r.items <= r.limit && (r.hasNext ? s.GetDataRefer(r.id, r.num, r.limit, ++r.page, r.title) : t(".module--footer", s.element).eq(i).remove())
                        }
                            ).fail(function (e) {}
                            )},
                    s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            if ("undefined" != typeof e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                                n > i;
                                ++i) {
                                var o = new Date(e.channel.item[i].pubDate);
                                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) && ("undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "")), e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1
                            } return {
                            data: e }
                        }
                    },
s.prototype.Dispose = function () {
var e = this;
e.$element && (e.$element.remove(), e.$element = null) },
s.prototype.Setup = function () {
},
s.prototype.LoadImages = function () {
var e = this;
e.$element.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
this.Constructor.apply(this, arguments) });
s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/newsup.json", type: "json", data: null, timeout: 8e3, directory: "/news/", title: "", 
                            link: "/news/netnewsup/", linkText: null, limit: 4, testing: !1, key: "__nABTesting", 
                            mode: null, queryOption: "&nnw_opt=netnewsup_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(74)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.GetDateTimeUTC()) },
s.prototype.CookieManager = function () {
var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.CookieGet()) {
case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = "" } },
s.prototype.CookieGet = function () {
var e = this;
return t.cookie(e.options.key) || null },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
n > i;
++i) {
var o = new Date(e.channel.item[i].pubDate);
new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return {
data: e, directory: t.options.directory, title: t.options.title, link: t.options.link, linkText: t.options.linkText, limit: t.options.limit, queryOption: t.options.queryOption } } },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)) }), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
}).always(function () {
e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") }) },
s.prototype.ColumnResize = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 2 : 4, n = 0, o = null, a = [];
if (e > 1) {
i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
this.Constructor.apply(this, arguments) });
s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
                            url: "/news/json16/newsup.json", type: "json", data: null, timeout: 8e3, key: "__nScrollPosition", expires: 364, 
                            directory: "/news/", 
                            title: "News Up 注目のニュース一覧", 
                            lede: "テレビでは伝えきれない、ネットの話題をいち早く掘り下げます。", 
                            query: "?utm_int=netnewsup_contents_list-items_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(73)),
                        this.templateItem = o.template(i(72)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.isLoading = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && e.GetDateTimeUTC() },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.$element.append(e.template({
title: e.options.title, lede: e.options.lede })), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t(".module--content", e.element).addClass("loading").append(e.$loading), t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (i) {
var n = e.Parse(i);
"" != n.data ? (t(".module--content", e.element).removeClass("loading").append(e.templateItem(n)), e.$loading.remove(), e.$loading = null, e.Setup(), e.LoadImages(), e.$window.trigger("resize")) : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
n > i;
++i) {
var o = new Date(e.channel.item[i].pubDate);
new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].description = t.TextOverflowEllipsis(e.channel.item[i].description), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return e.queryRoot = t.options.query, {
data: e, directory: t.options.directory } } },
s.prototype.TextOverflowEllipsis = function (e) {
var t = "…", i = 100;
return i < e.length ? e.substr(0, i) + t : e },
s.prototype.CookieManager = function () {
var e = this;
t.cookie(e.options.key) && e.$body.velocity("stop").velocity("scroll", {
duration: 1e3, easing: "easeInOutQuart", offset: t.cookie(e.options.key), complete: function () {
e.CookieRemove(), e.$window.trigger("resize") }, mobileHA: !1 }) },
s.prototype.CookieSet = function () {
var e = this;
t.cookie(e.options.key, 0 | e.$window.scrollTop(), {
domain: "." + location.hostname, path: "/news/", expires: e.options.expires }) },
s.prototype.CookieRemove = function () {
var e = this;
t.cookie(e.options.key, "", {
domain: "." + location.hostname, path: "/news/", expires: -1 }), t.cookie(e.options.key, "", {
path: "/news/", expires: -1 }) },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".button-more", e.element), e.$itemContainer = t(".module--content", e.element), e.$itemList = t(".content--list", e.$itemContainer), e.$window.on("resize", e, e.ColumnResize).trigger("resize"), t(document).on("click", ".content--header a, .content--list a, .button-more", function (t) {
e.CookieSet() }), e.CookieManager() },
s.prototype.LoadImages = function () {
var e = this;
e.$itemContainer.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize") }) },
s.prototype.ColumnResize = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 1 : 2, n = 0, o = null, a = [];
if (e > 1) {
i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } else i.$itemList.find("li").css("height", "");
i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/gad/program_info/program_info.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(75)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
return null != e && void 0 !== e ? {
data: e } : void 0 }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$itemContainer = t(".module--content", e.element), e.$itemList = t(".grid--col-once", e.$itemContainer), o.each(e.$itemContainer.find(".grid--col-once"), function (i, n) {
e.$itemLists.push(t(i)) }), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).parent().remove() }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/realtime.json", type: "json", data: null, timeout: 8e3, query: "utm_int=all_contents_realtime_", testing: !1, testkey: "__nABTesting", mode: null, queryOption: "&nnw_opt=realtime_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(76)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "", e.Get()) }, a.prototype.TestCookieManager = function () {
var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.TestCookieGet()) {
case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = "" } }, a.prototype.TestCookieGet = function () {
var e = this;
return t.cookie(e.options.testkey) || null }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data && i.data.item.length ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return {
data: e, queryRoot: t.options.query, queryOption: t.options.queryOption } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/announcement.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(77)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementInner = null,
                        this.$elementContainer = null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
i.data.description && "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
return null != e && void 0 !== e ? {
data: e } : void 0 }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/specialcontents.json", type: "json", data: null, timeout: 8e3, directory: "/news/", 
                            link: "/news/special/", limit: 8, page: null, mobileCard: !1, testing: !1, 
                            key: "__nABTesting", mode: null, queryOption: "&nnw_opt=special_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(79)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$itemListCol = null,
                        this.$itemListsCol = [],
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null,
                        this.column = {
desktop: 4, mobile: 1 },
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.Get()) }, a.prototype.CookieManager = function () {
var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.CookieGet()) {
case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = "" } }, a.prototype.CookieGet = function () {
var e = this;
return t.cookie(e.options.key) || null }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return {
data: e, directory: t.options.directory, link: t.options.link, limit: t.options.limit, page: t.options.page, queryOption: t.options.queryOption } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
                    var e = this;
e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".grid--row", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)) }), e.options.mobileCard && (e.$itemList.addClass("grid--col-mobile"), e.column.mobile = 2),
                        this.$itemListCol = t(".grid--col", e.$itemContainer), o.each(e.$itemListCol.find("li"), function (i, n) {
e.$itemListsCol.push(t(i)) }), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
}).always(function () {
e.$window.on("resize orientationchange", e, e.ColumnResize).trigger("resize").trigger("scroll") })
                }, a.prototype.ColumnResize = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? i.column.mobile : i.column.desktop, n = 0, o = null, a = [];
if (e > 1) {
i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u]) } else i.$itemList.find("li").css("height", "");
if (i.$window.width() > i.BREAKPOINT) for (var p, s = 0, u = i.$itemListsCol.length;
u > s;
++s)i.$itemListsCol[s].find("p").css("height", ""), s % 2 == 0 ? p = i.$itemListsCol[s].find("p").height() : (i.$itemListsCol[s].find("p").height(function (e, t) {
return p = t > p ? t : p }), i.$itemListsCol[s - 1].find("p").height(p));
else for (var s = 0, u = i.$itemListsCol.length;
u > s;
++s)i.$itemListsCol[s].find("p").css("height", "");
i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/specialcontents.json", type: "json", data: null, timeout: 8e3, directory: "/news/", 
                            title: "スペシャルコンテンツ一覧" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(78)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup(), e.LoadImages()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return {
data: e, directory: t.options.directory, title: t.options.title } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), e.$itemContainer = t(".module--content", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)) }), e.$window.on("resize", e, e.ColumnResize).trigger("resize") }, a.prototype.LoadImages = function () {
var e = this;
e.$itemContainer.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, a.prototype.ColumnResize = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 1 : 2, n = 0, o = null, a = [];
if (e > 1) {
i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } else i.$itemList.find("li").css("height", "");
i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/tvnews.json", type: "json", data: null, timeout: 8e3, 
                            icon: "テレビ放送<br>配信中", testing: !1, key: "__nABTesting", mode: null, 
                            queryOption: "&nnw_opt=tv-news_live_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(84)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.Get()) }, a.prototype.CookieManager = function () {
var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.CookieGet()) {
case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = "" } }, a.prototype.CookieGet = function () {
var e = this;
return t.cookie(e.options.key) || null }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data && i.data.viewFlg ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return {
data: e, icon: t.options.icon, queryOption: t.options.queryOption } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/keyword_list.json", type: "json", data: null, timeout: 8e3, directory: "/news/", 
                            title: "注目ワード一覧", queryNew: "utm_int=word_index_list-items-new_", queryNum: "utm_int=word_index_list-items-kiji_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(80)),
                        this.templateNewItem = o.template(i(21)),
                        this.templateNumItem = o.template(i(21)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$panelTab = null,
                        this.$panelTabContainer = null,
                        this.$panelTabList = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.response = {
sortedNew: null, sortedNum: null },
                        this.current = "new",
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.append(e.template({
title: e.options.title })), e.Setup(), e.Get()) }, a.prototype.Get = function () {
var e = this;
e.$itemContainer.addClass("loading"), t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
e.response.sortedNew = e.Parse(t, "new"), e.response.sortedNum = e.Parse(t, "num"), e.$itemContainer.removeClass("loading"), e.SortTags() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e, t) {
if (null != e && void 0 !== e) {
var i = this;
if ("new" === t) return {
data: o.clone(e), directory: i.options.directory, queryRoot: i.options.queryNew };
if ("num" === t) {
var n = o.clone(e);
return n.item = o.sortBy(n.item, function (e) {
return -Number(e.kijinum) }), {
data: n, directory: i.options.directory, queryRoot: i.options.queryNum } } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".nav--tags", e.$itemContainer), e.$panelTab = t(".nav--tab-fluid", e.element), e.$panelTabContainer = t("ul", e.$panelTab), e.$panelTabList = e.$panelTabContainer.find("li"), "new" === e.current ? t(".sort-new", e.$panelTabContainer).addClass("is-active") : "num" === e.current && t(".sort-num", e.$panelTabContainer).addClass("is-active"), e.$panelTabList.on("click", e, e.ChangeTagList) }, a.prototype.ChangeTagList = function (e) {
var i = e ? e.data : this;
t(this).hasClass("is-active") || (t(this).hasClass("sort-new") ? ("undefined" != typeof ga && ga("send", "event", "word_index", "click", "select_new"), i.current = "new") : t(this).hasClass("sort-num") && ("undefined" != typeof ga && ga("send", "event", "word_index", "click", "select_kiji"), i.current = "num"), i.$panelTabList.removeClass("is-active"), t(this).addClass("is-active"), i.$itemContainer.addClass("loading"), i.$itemList.velocity("stop").velocity({
opacity: 0 }, {
duration: 240, queue: !1, complete: function () {
i.SortTags(), i.$window.trigger("resize").trigger("scroll") } })) }, a.prototype.SortTags = function () {
var e = this;
"new" === e.current ? (e.$itemList.empty().append(e.templateNewItem(e.response.sortedNew)), e.$itemList.find("li").each(function (e, i) {
t(i).find("var").css("display", "none") })) : "num" === e.current && (e.$itemList.empty().append(e.templateNumItem(e.response.sortedNum)), e.$itemList.find("li").each(function (e, i) {
t(i).find("var").css("display", "block") })), e.$itemList.velocity({
opacity: 1 }, {
duration: 240, queue: !1, complete: function () {
e.$window.trigger("resize").trigger("scroll") } }), e.$itemContainer.removeClass("loading") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
this.Constructor.apply(this, arguments) });
s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
url: "/news/tokushu/tokushu.xml", type: "xml", data: null, timeout: 8e3, key: "__nScrollPosition", expires: 364, directory: "/news/tokushu/", title: "特集一覧", category: null, page: 20, enableddays: 27 },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(82)),
                        this.templateItem = o.template(i(81)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.TARGET = 0,
                        this.PAGE_NOW = 0,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.isLoading = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && e.GetDateTimeUTC() },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.$element.append(e.template({
title: e.options.title })), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.HashChangeHandler = function (e) {
var t = e ? e.data : this, i = ~~location.hash.replace(/(^#!)\/(.+)\//, "$2");
0 != i && i > 1 && 100 >= i && /^#!\/([0-9]+)\//.test(location.hash) ? (location.hash = "#!/" + i + "/", t.TARGET = i, t.ShowMoreList()) : (t.CookieRemove(), t.TARGET = 1) },
s.prototype.Get = function () {
                    var e = this;
t(".module--content", e.element).addClass("loading").append(e.$loading), t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (i) {
                        var n = e.Parse(i);
"" != n.data ? (t(".module--content", e.element).removeClass("loading").append(e.templateItem(n)),
                            e.$loading.remove(), e.$loading = null, e.Setup(), e.LoadImages(), e.$window.trigger("resize")) : e.Dispose()
                    }
                        , function (t) {
                            e.Dispose()
                        }
                    )
                },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var i = this, n = [];
                            return o.each(t(e).find("item"), function (e, o) {
                                var s = a(t(e).find("year").text() + t(e).find("date").text() + t(e).find("time").text(), "YYYY年M月D日H時mm分").tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:00Z"), l = "" != t(e).find("enddate").text() ? t(e).find("enddate").text() : null, r = l && a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "day") <= l ? !0 : !1, u = t(e).find("directory").text(), c = "", p = (t(e).find("file").text(), t(e).find("thumb").text()), d = "true" == t(e).find("web").text() ? !0 : !1;
                                switch (u) {
                                    case "web": c = "/news/web_tokushu/";
                                        break;
                                    case "business": c = "/news/business_tokushu/";
                                        break;
                                    default: c = "/news/tokushu/"
                                }
                                p = new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\/html\//).test(p) ? "undefined" != typeof kokunai && kokunai ? p : "" : c + "still/" + p, i.options.category ? "web" == i.options.category ? (r && ("business" == u && d ? r = a(i.globalTime).tz("Asia/Tokyo").diff(a(s).tz("Asia/Tokyo"), "day") <= i.options.enableddays ? !0 : !1 : "business" != u || d || (r = !1)), ("" == t(e).find("enddate").text() || r) && n.push({
directory: u, file: c + t(e).find("file").text(), title: t(e).find("title").text(), date: t(e).find("date").text(), time: t(e).find("time").text(), week: t(e).find("week").text(), description: i.TextOverflowEllipsis(t(e).find("description").text()), thumb: p })) : i.options.category == u && ("" == t(e).find("enddate").text() || r) && n.push({
directory: u, file: c + t(e).find("file").text(), title: t(e).find("title").text(), date: t(e).find("date").text(), time: t(e).find("time").text(), week: t(e).find("week").text(), description: i.TextOverflowEllipsis(t(e).find("description").text()), thumb: p }) : ("" == t(e).find("enddate").text() || r) && n.push({
directory: u, file: c + t(e).find("file").text(), title: t(e).find("title").text(), date: t(e).find("date").text(), time: t(e).find("time").text(), week: t(e).find("week").text(), description: i.TextOverflowEllipsis(t(e).find("description").text()), thumb: p })
                            }), {
data: n, directory: i.options.directory, title: i.options.title, category: i.options.category }
                        }
                    },
s.prototype.TextOverflowEllipsis = function (e) {
var t = "…", i = 100;
return i < e.length ? e.substr(0, i) + t : e },
s.prototype.CookieManager = function () {
var e = this;
t.cookie(e.options.key) && e.$body.velocity("stop").velocity("scroll", {
duration: 1e3, easing: "easeInOutQuart", offset: t.cookie(e.options.key), complete: function () {
e.CookieRemove(), e.$window.trigger("resize") }, mobileHA: !1 }) },
s.prototype.CookieSet = function () {
var e = this;
t.cookie(e.options.key, 0 | e.$window.scrollTop(), {
domain: "." + location.hostname, path: "/news/", expires: e.options.expires }) },
s.prototype.CookieRemove = function () {
var e = this;
t.cookie(e.options.key, "", {
domain: "." + location.hostname, path: "/news/", expires: -1 }), t.cookie(e.options.key, "", {
path: "/news/", expires: -1 }) },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".button-more", e.element), e.$itemContainer = t(".module--content", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)), e.options.page <= n && t(i).css({
display: "none", opacity: 0 }) }), e.$buttonMore = t(".button", e.$elementFooter), e.PAGE_NOW = 1, 1 <= e.$itemLists.length - e.options.page ? e.$buttonMore.on("click", e, e.ShowMoreHandler) : e.HideMoreButton(), e.$window.on("hashchange", e, e.HashChangeHandler).trigger("hashchange").on("resize", e, e.ColumnResize).trigger("resize"), t(document).on("click", ".content--header a, .content--list a, .button-more", function (t) {
e.CookieSet() }) },
s.prototype.ShowMoreHandler = function (e) {
var t = e ? e.data : this;
location.hash = "#!/" + (t.TARGET + 1) + "/", "undefined" != typeof ga && ga("send", "pageview", window.location.pathname + window.location.hash) },
s.prototype.HideMoreButton = function () {
var e = this;
e.$buttonMore.remove(), e.$buttonMore = null, e.$elementFooter.remove(), e.$elementFooter = null, e.$window.off("hashchange", e.HashChangeHandler) },
s.prototype.ShowMoreList = function () {
for (var e = this, t = e.options.page * e.PAGE_NOW, i = e.options.page * e.TARGET;
i > t;
++t)t < e.$itemLists.length && (e.$itemLists[t].velocity({
opacity: 1 }, {
display: "block", duration: 800, easing: "easeInOutQuart", complete: function () {
e.$window.trigger("resize") } }), t == i - 1 && (e.PAGE_NOW++ , e.CookieManager(), e.$window.trigger("resize")));
e.$itemLists.length <= e.options.page * e.TARGET && (e.HideMoreButton(), e.CookieManager(), e.$window.trigger("resize")) },
s.prototype.LoadImages = function () {
var e = this;
e.$itemContainer.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize") }) },
s.prototype.ColumnResize = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && clearTimeout(i.REQEST_ID), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 1 : 2, n = 0, o = null, a = [];
if (e > 1) {
i.$itemList.find("li").css("height", ""), o = i.$itemList.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$itemList.find("li").eq(u * e + c).css("height", a[u] + 1) } else i.$itemList.find("li").css("height", "");
i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
entry: {
url: "/news/gad/top_banner/top_banner.json", type: "json", data: null }, main: {
url: "/sokuho/tsunami/data/publish.xml", type: "xml", data: null }, img: {
url: "/sokuho/tsunami/data/WA_yyyyMMddHHmmss.xml", request: {
url: "/sokuho/tsunami/data/WA_", suffix: ".xml" }, type: "xml", data: null }, timeout: 8e3, directory: "/sokuho/tsunami/", link: "/sokuho/tsunami/" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(83)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementInner = null,
                        this.$elementContainer = null,
                        this.$elementFigure = null,
                        this.$elementImage = null,
                        this.prop = {
timestamp: "", latest: "", status: "", img: "", title: "", desc: "" },
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Check() }, a.prototype.Check = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.entry.url, dataType: e.options.entry.type, data: e.options.entry.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
"1" === t.auto_disp ? ("1" === t.tsunami_title_flg && (e.prop.title = t.tsunami_title || null), "1" === t.auto_description_flg && (e.prop.desc = t.auto_description || null), e.prop.status = t.tsunami_img ? t.tsunami_img : "0", e.Get()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.main.url, dataType: e.options.main.type, data: e.options.main.data, cache: !1, timeout: e.options.timeout, beforeSend: function (e) {
e.overrideMimeType("text/html;charset=Shift_JIS") } }).then(function (t) {
var i = e.Parse(t);
i ? e.GetImage(e.options.img.request.url + e.prop.latest + e.options.img.request.suffix) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = this, n = t(e).find("Status").text();
return i.prop.timestamp = t(e).find("Timestamp").text(), i.prop.latest = t(e).find("Latest").text(), "1" === n && "" != i.prop.latest ? !0 : !1 } }, a.prototype.GetImage = function (e) {
var i = this;
t.ajax({
type: "GET", url: e, dataType: i.options.img.type, data: i.options.img.data, cache: !1, timeout: i.options.timeout, beforeSend: function (e) {
e.overrideMimeType("text/html;charset=Shift_JIS") } }).then(function (e) {
var t = i.GetImageParse(e);
null != t.imgPath ? (i.$element.append(i.template(t)), i.Setup()) : i.Dispose() }, function (e) {
i.Dispose() }) }, a.prototype.GetImageParse = function (e) {
if (null != e && void 0 !== e) {
var i = this;
return "1" === i.prop.status ? i.prop.img = t(e).find("Detail").text() || "" : i.prop.img = t(e).find("Global").text() || "", {
imgPath: "" != i.prop.img ? i.options.directory + i.prop.img : null, title: i.prop.title, desc: i.prop.desc, link: i.options.link } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$elementInner = t(".inner", e.element), e.$elementFigure = t("figure", e.element), e.$elementImage = e.$elementInner.find("img"), e.$elementImage.css("opacity", 0).imagesLoaded().progress(function (t, i) {
i.isLoaded ? e.$elementImage.velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : e.$elementFigure.addClass("is-broken") }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
this.Constructor.apply(this, arguments) });
s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
url: ["/news/json16/weather.json", "/weather/tenki/wthr_data_start.xml", "/weather/tenki/wthr_data.xml", "/weather/cms/comment/comment.json"], type: ["json", "xml", "xml", "json"], data: null, timeout: 8e3, directory: "/weather/", title: "全国の天気概況", link: "/weather/", linkText: "詳細を見る", maintenance: "/weather/images/maintenance.jpg" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(85)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.globalTime = null,
                        this.buildDate_start = "",
                        this.buildDate = "",
                        this.prop = {
enabled: !0, image: [], tomorrow: !1, time: "", comment: "", maintenance: !1 },
                        this.$old = null,
                        this.$current = null,
                        this.NOW = 0,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && e.GetDateTimeUTC() },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.GetValid() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.GetValid = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[0], dataType: e.options.type[0], data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.ParseValid(t);
i ? e.GetStartDate() : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.ParseValid = function (e) {
return null != e && void 0 !== e ? "undefined" == typeof e.weatherConditions ? !1 : e.weatherConditions : void 0 },
s.prototype.GetStartDate = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[1], dataType: e.options.type[1], data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
e.ParseStartDate(t), e.GetDetail() }, function (t) {
e.Dispose() }) },
s.prototype.ParseStartDate = function (e) {
if (null != e && void 0 !== e) {
var i = this;
o.each(t(e).find("resp"), function (e, n) {
i.buildDate_start = t(e).find("lastBuildDate").text() }) } },
s.prototype.GetDetail = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[2], dataType: e.options.type[2], data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
e.ParseDetail(t), e.GetComment() }, function (t) {
e.Dispose() }) },
s.prototype.ParseDetail = function (e) {
if (null != e && void 0 !== e) {
var i = this;
o.each(t(e).find("resp"), function (e, n) {
i.buildDate = t(e).find("lastBuildDate").text() }), i.prop.enabled = i.buildDate == i.buildDate_start ? !0 : !1, i.prop.enabled ? t(e).find("higawari").length && a(i.globalTime).tz("Asia/Tokyo").diff(a(i.globalTime).tz("Asia/Tokyo").startOf("day"), "hour") < 11 ? o.each(t(e).find("higawari"), function (e, n) {
o.each(t(e).find('cont[title="天気予報"]'), function (e, n) {
o.each(t(e).find("cimg"), function (e, n) {
i.prop.image[n] = i.options.directory + t(e).text() + "?" + (new Date).getTime() }) }) }) : o.each(t(e).find("tsujou"), function (e, n) {
o.each(t(e).find('cont[title="天気予報"]'), function (e, n) {
o.each(t(e).find("cimg"), function (e, n) {
i.prop.image[n] = i.options.directory + t(e).text() + "?" + (new Date).getTime() }) }) }) : (i.prop.image[0] = i.options.maintenance, i.prop.maintenance = !0), i.prop.image.length > 1 && (i.prop.tomorrow = !0) } },
s.prototype.GetComment = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[3], dataType: e.options.type[3], data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.ParseComment(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.ParseComment = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return t.prop.time = a(e.time, "YYYYMMDDHHmmss").format("DD日 HH:mm "), t.prop.comment = e.text, {
data: t.prop, directory: t.options.directory, title: t.options.title, link: t.options.link, linkText: t.options.linkText } } },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$panelTab = t(".nav--tab-fluid", e.element), e.$panelTabContainer = t("ul", e.$panelTab), e.$panelTabList = e.$panelTabContainer.find("li"), e.$panelThumb = t(".tab-panel--thumb", e.element), e.$panelThumbContainer = t("ul", e.$panelThumb), e.$panelThumbList = e.$panelThumbContainer.find("li"), e.$panelThumbImg = e.$panelThumbList.find("img"), e.prop.tomorrow && (e.$panelThumbContainer.css({
position: "relative" }), e.$current = e.$panelThumbList.eq(e.NOW), e.$panelTabList.removeClass("is-active").filter(":eq(" + e.NOW + ")").addClass("is-active"), e.$panelThumbList.removeClass("is-active").css({
display: "none", opacity: 0 }).filter(":eq(" + e.NOW + ")").addClass("is-active").css({
display: "block", opacity: 1 }), e.$panelTabList.on("click", e, e.ChangeImageTab), e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize").trigger("scroll")) },
s.prototype.ChangeImageTab = function (e) {
var i = e ? e.data : this;
t(this).hasClass("is-active") || (t(this).hasClass("today") ? "undefined" != typeof ga && ga("send", "event", "saigai_contents", "click", "select_weather-overview-today") : t(this).hasClass("tomorrow") && "undefined" != typeof ga && ga("send", "event", "saigai_contents", "click", "select_weather-overview-tomorrow"), i.NOW = i.$panelTabList.index(e.target), i.$old = i.$current, i.$current = i.$panelThumbList.eq(i.NOW), i.$panelTabList.removeClass("is-active").filter(":eq(" + i.NOW + ")").addClass("is-active"), i.$panelThumbList.removeClass("is-active").filter(":eq(" + i.NOW + ")").addClass("is-active"), i.$old.velocity("stop").velocity({
opacity: 0 }, {
display: "none", duration: 240, queue: !1, mobileHA: !1 }), i.$current.velocity("stop").css({
position: "absolute", top: 0, left: 0 }).velocity({
opacity: 1 }, {
display: "block", duration: 240, queue: !1, complete: function (e) {
i.$current.css({
position: "", top: "", left: "" }) }, mobileHA: !1 })) },
s.prototype._getMaxHeight = function (e) {
var i = 0;
return o.each(e, function (e, n) {
t(e).css("height", "");
var o = t(e).outerHeight();
o > i && (i = o) }), i },
s.prototype.ResizeHandler = function (e) {
var t = e ? e.data : this;
t.$panelThumbImg.css({
width: "", height: "" }), t.REQEST_ID !== !1 && clearTimeout(t.REQEST_ID), t.REQEST_ID = setTimeout(function () {
t.$window.width() <= t.BREAKPOINT ? t.$panelThumbImg.css({
width: "100%", height: t._getMaxHeight(t.$panelThumbImg) }) : t.$panelThumbImg.css({
width: 360, height: 203 }), t.$window.trigger("scroll") }, t.INTERVAL) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: ["/news/json16/weather.json", "/news/weather/kisyo_file_num.json"], type: "json", data: null, timeout: 8e3, title: "全国の気象情報", description: "1日3回更新予定です", attr: "video-path", video: "https://www3.nhk.or.jp/news/weather/weather_movie.html" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(86)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementContainer = null,
                        this.$itemVideoContainer = null,
                        this.$videoPlayer = null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.GetValid() }, a.prototype.GetValid = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[0], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.ParseValid(t);
i ? e.GetVideoPath() : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.ParseValid = function (e) {
return null != e && void 0 !== e ? e.weatherMovie : void 0 }, a.prototype.GetVideoPath = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[1], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return {
title: t.options.title, description: t.options.description, video: "undefined" != typeof t.$element.data(t.options.attr) ? t.$element.data(t.options.attr) : t.options.video } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$elementContainer = t(".module--content", e.element), e.$itemVideoContainer = t(".content--video", e.$elementContainer), e.$videoPlayer = t(".video-player", e.$itemVideoContainer) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
this.Constructor.apply(this, arguments) });
s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.$body = t("body"),
                        this.defaults = {
url: "/news/json16/word/", id: "", suffix: "_001.json", type: "json", data: null, timeout: 8e3, key: "__nScrollPosition", expires: 364, title: "", query: "?utm_int=word_contents_list-items_" },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(88)),
                        this.templateItem = o.template(i(87)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.$loading = t('<div class="loading"></div>'),
                        this.globalTime = null,
                        this.TARGET = 0,
                        this.PAGE_NOW = 0,
                        this.isLoading = !1, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
if (e.$element.length) {
if (!e.$element.data("page-id")) return e.Dispose(), !1;
e.GetDateTimeUTC() } },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.$element.append(e.template), e.Setup() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.HashChangeHandler = function (e) {
var t = e ? e.data : this, i = ~~location.hash.replace(/(^#!)\/(.+)\//, "$2");
0 != i && i > 1 && 100 >= i && /^#!\/([0-9]+)\//.test(location.hash) ? (location.hash = "#!/" + i + "/", t.TARGET = i, t.Get(t.TARGET)) : (t.CookieRemove(), t.TARGET = 1, t.Get(t.TARGET)) },
s.prototype.Get = function (e) {
var i = this, n = e;
i.isLoading || i.PAGE_NOW < n && (i.isLoading = !0, i.$buttonMore.velocity("stop").velocity({
opacity: 0 }, {
duration: 60, easing: "easeInOutQuart" }), i.$element.addClass("loading"), i.$itemContainer.append(i.$loading), i.PAGE_NOW++ , n = i.PAGE_NOW, n = 1 == n.toString().length ? "00" + n : 2 == n.toString().length ? "0" + n : n, t.ajax({
type: "GET", url: i.options.url.replace(/^(.+)_([0-9]+)(\.[a-z]+)$/, "$1_" + n + "$3"), dataType: i.options.type, data: i.options.data, cache: !1, timeout: i.options.timeout }).then(function (e) {
var n = i.Parse(e);
"" != n.data && (i.$element.removeClass("loading"), i.$loading.remove(), t(".content--list", i.element).append(i.templateItem(n)), i.LoadImages(), i.PAGE_NOW < i.TARGET ? (i.isLoading = !1, i.Get(~~i.PAGE_NOW + 1)) : (i.isLoading = !1, i.CookieManager()), i.$buttonMore.velocity("stop").velocity({
opacity: 1 }, {
duration: 640, easing: "easeInOutQuart", complete: function () {
i.$buttonMore && i.$buttonMore.css("opacity", ""), i.$window.trigger("resize") } }), n.data.channel.hasNext || i.Clear()) }, function (e) {
i.Clear(!0) })) },
s.prototype.GetNewsItems = function (e) {
var t = e ? e.data : this;
t.isLoading || (location.hash = "#!/" + (t.PAGE_NOW + 1) + "/") },
s.prototype.Clear = function (e) {
var t = this;
t.$buttonMore.off("click", t.GetNewsItems), t.$buttonMore.remove(), t.$buttonMore = null, t.$element.removeClass("loading"), t.$loading.remove(), t.$loading = null, t.$elementFooter.remove(), t.$elementFooter = null, e && (t.PAGE_NOW-- , location.hash = "#!/" + t.PAGE_NOW + "/"), t.$window.trigger("resize") },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
if ("" == t.options.title && (t.options.title = e.channel.word, t.$elementHeader.find("h1").html("「" + t.options.title + "」")), null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
n > i;
++i) {
var o = new Date(e.channel.item[i].pubDate);
new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) && ("undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "")), e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return e.queryRoot = t.options.query, {
data: e, title: t.options.title, offset: 20 * (t.PAGE_NOW - 1) } } },
s.prototype.CookieManager = function () {
var e = this;
t.cookie(e.options.key) && "undefined" !== t.cookie(e.options.key) && ~~t.cookie(e.options.key) > 0 && e.$body.velocity("stop").velocity("scroll", {
duration: 1e3, easing: "easeInOutQuart", offset: t.cookie(e.options.key), complete: function () {
e.CookieRemove(), e.$window.trigger("resize") }, mobileHA: !1 }) },
s.prototype.CookieSet = function () {
var e = this;
t.cookie(e.options.key, 0 | e.$window.scrollTop(), {
domain: "." + location.hostname, path: "/news/", expires: e.options.expires }) },
s.prototype.CookieRemove = function () {
var e = this;
t.cookie(e.options.key, "", {
domain: "." + location.hostname, path: "/news/", expires: -1 }), t.cookie(e.options.key, "", {
path: "/news/", expires: -1 }) },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$elementHeader = t(".module--header", e.element), e.$elementFooter = t(".module--footer", e.element), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), e.$buttonMore = t(".button", e.$elementFooter), e.options.id = e.$element.data("page-id"), e.options.url = e.options.url + e.options.id + e.options.suffix, e.$window.on("hashchange", e, e.HashChangeHandler).trigger("hashchange"), e.$buttonMore.on("click", e, function () {
e.GetNewsItems(), "undefined" != typeof ga && ga("send", "pageview", window.location.pathname + window.location.hash) }), t(document).on("click", ".content--list a, .button-more .button", function (t) {
e.CookieSet() }) },
s.prototype.LoadImages = function () {
var e = this;
e.$itemList.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = (i(2), function () {
this.Constructor.apply(this, arguments) });
o.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
url: "//www5.nhk.or.jp/saigai-data/update/condition_all.js", type: "jsonp", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, o.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.css({
display: "none" }), e.Get()) }, o.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, jsonpCallback: "condition_all", cache: !1, timeout: e.options.timeout }).then(function (t) {
"1" === t.conditionFlg ? e.Setup() : e.Dispose() }, function (t) {
e.Dispose() }) }, o.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null;
var i = t(".announce-weather"), n = t(".content--accordion", i[0]), o = t(".grid--col-announce", n[0]);
o.find("li").length || (i.addClass("none-announce"), n.remove()) }, o.prototype.Setup = function () {
var e = this;
e.$element.css({
display: "" }) }, e.exports = o
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
url: "/weather/dosya/denbun/landslide_pref_list.xml", type: "xml", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.css({
display: "none" }), e.Get()) }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
i ? e.Setup() : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = !1;
return o.each(t(e).find("Prefecture"), function (e, n) {
return "1" === t(e).attr("PubFlg") ? (i = !0, !1) : void 0 }), i } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null;
var i = t(".announce-weather"), n = t(".content--accordion", i[0]), o = t(".grid--col-announce", n[0]);
o.find("li").length || (i.addClass("none-announce"), n.remove()) }, a.prototype.Setup = function () {
var e = this;
e.$element.css({
display: "" }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = function () {
this.Constructor.apply(this, arguments) };
s.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
url: "/weather/funka/denbun/kazan_list.xml", type: "xml", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.css({
display: "none" }), e.GetDateTimeUTC()) },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t.ajax({
beforeSend: function (e) {
e.overrideMimeType("text/html;charset=Shift_JIS") }, type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
i ? e.Setup() : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = this, n = !1;
return o.each(t(e).find("Kazan"), function (e, o) {
var s = a(t(e).attr("sakuseiTime"), "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DDTHH:mm:ss+09:00");
return a(i.globalTime).diff(a(new Date(s)), "hours") < 6 ? (n = !0, !1) : void 0 }), n } },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null;
var i = t(".announce-weather"), n = t(".content--accordion", i[0]), o = t(".grid--col-announce", n[0]);
o.find("li").length || (i.addClass("none-announce"), n.remove()) },
s.prototype.Setup = function () {
var e = this;
e.$element.css({
display: "" }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
url: "/weather/caution/denbun/keichu_pref_list.xml", type: "xml", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.css({
display: "none" }), e.Get()) }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
i ? e.Setup() : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = !1;
return o.each(t(e).find("SpecialWarning"), function (e, n) {
return "1" === t(e).text() ? (i = !0, !1) : void 0 }), i } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null;
var i = t(".announce-weather"), n = t(".content--accordion", i[0]), o = t(".grid--col-announce", n[0]);
o.find("li").length || (i.addClass("none-announce"), n.remove()) }, a.prototype.Setup = function () {
var e = this;
e.$element.css({
display: "" }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = function () {
this.Constructor.apply(this, arguments) };
s.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
url: "/weather/kirokuame/denbun/kirokuame_list.xml", type: "xml", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.css({
display: "none" }), e.GetDateTimeUTC()) },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t.ajax({
beforeSend: function (e) {
e.overrideMimeType("text/html;charset=Shift_JIS") }, type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
i ? e.Setup() : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = this, n = !1;
return o.each(t(e).find("Kirokuame"), function (e, o) {
var s = a(t(e).attr("sakuseiTime"), "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DDTHH:mm:ss+09:00");
return a(i.globalTime).diff(a(new Date(s)), "hours") < 3 ? (n = !0, !1) : void 0 }), n } },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null;
var i = t(".announce-weather"), n = t(".content--accordion", i[0]), o = t(".grid--col-announce", n[0]);
o.find("li").length || (i.addClass("none-announce"), n.remove()) },
s.prototype.Setup = function () {
var e = this;
e.$element.css({
display: "" }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = function () {
this.Constructor.apply(this, arguments) };
s.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
url: ["/weather/tatsumaki_hassei/denbun/tornado_hassei_kansyo_list.xml", "/weather/tatsumaki/denbun/tornado_kansyo_list2.xml"], type: "xml", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.css({
display: "none" }), e.GetDateTimeUTC()) },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[0], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
i ? (e.$element.find("dd").text("竜巻発生か"), e.Setup()) : e.Get2() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var i = this, n = !1;
return o.each(t(e).find("Kansyo"), function (e, o) {
var s = a(t(e).attr("sakuseiTime"), "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DDTHH:mm:ss+09:00");
return a(i.globalTime).diff(a(new Date(s)), "minutes") <= 90 ? (n = !0, !1) : void 0 }), n } },
s.prototype.Get2 = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url[1], dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse2(t);
i ? (e.$element.find("dd").text("竜巻注意情報"), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) },
                    s.prototype.Parse2 = function (e) {
                        if (null != e && void 0 !== e) {
                            var i = this, n = !1;
                            return o.each(t(e).find("Kansyo"), function (e, o) {
                                var s = a(t(e).attr("sakuseiTime"), "YYYY/MM/DD HH:mm:ss").format("YYYY-MM-DDTHH:mm:ss+09:00");
                                return a(i.globalTime).diff(a(new Date(s)), "minutes") <= 90 ? (n = !0, !1) : void 0
                            }
                            ), n
                        }
                    },
s.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null;
                        var i = t(".announce-weather"), n = t(".content--accordion", i[0]), o = t(".grid--col-announce", n[0]);
                        o.find("li").length || (i.addClass("none-announce"), n.remove())
                    },
s.prototype.Setup = function () {
                        var e = this;
                        e.$element.css({
                            display: ""
                        }
                        )
                    }, e.exports = s
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/gad/pickup_k/pickup_k.json", type: "json", data: null, timeout: 8e3, directory: "/news/gad/pickup_k/"
                        }
                        ,
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(89)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.detailProp = window.__DetailProp__ ? window.__DetailProp__ : null,
                        this.category = null,
                        this.Init()
                }, a.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.Get()
                    }, a.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data || i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    }, a.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            if (t.detailProp) {
                                t.category = t.detailProp.cate;
                                for (var i = 0, n = e.length;
                                    n > i;
                                    ++i) {
                                    var o = e[i].cat;
                                    "" == o || o ? e[i].enabled = -1 == o.indexOf(t.category) ? !1 : !0 : e[i].enabled = !1
                                }
                            }
                            return {
                                data: e, directory: t.options.directory
                            }
                        }
                    }, a.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    }, a.prototype.Setup = function () {
                        var e = this;
                        e.$itemList = t(".module_aside--content", e.element), o.each(e.$itemList, function (i, n) {
                            e.$itemLists.push(t(i))
                        }
                        ), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (i, n) {
                            n.isLoaded ? t(n.img).velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart", complete: function () {
                                        e.$window.trigger("resize")
                                    }
                                }
                            ) : t(n.img).parents(".module_aside--content").remove()
                        }
                        ).fail(function () {
}
                            ).always(function () {
                                e.$window.trigger("resize")
                            }
                                )
                    }, e.exports = a
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/sokuho/jishin/data/JishinReport.xml", type: "xml", data: null, timeout: 8e3, link: "/sokuho/jishin/", query: "index.html?id=", testing: !1, key: "__nABTesting", mode: null, queryOption: "&nnw_opt=jishin_"
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(90)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && (e.options.testing ? e.CookieManager() : e.options.queryOption = "", e.GetDateTimeUTC())
                    },
s.prototype.CookieManager = function () {
                        var e = this;
                        if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
                        else switch (e.CookieGet()) {
                            case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
                                break;
                            default: e.options.queryOption = ""
                        }
                    },
s.prototype.CookieGet = function () {
                        var e = this;
                        return t.cookie(e.options.key) || null
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout, beforeSend: function (e) {
                                e.overrideMimeType("text/html;charset=Shift_JIS")
                            }
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            null != i.data ? e.GetImage(i) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var i = this, n = null;
                            return o.each(t(e).find("record"), function (e, s) {
                                if (0 != s || "" == t(e).attr("date")) return !1;
                                var l = a(t(e).attr("date"), "YYYY年MM月DD日").format("YYYY-MM-DD"), r = null, u = null;
                                return n = {
                                    recode: 0 != a(i.globalTime).startOf("day").diff(a(new Date(l)).startOf("day"), "days") ? a(t(e).attr("date"), "YYYY年MM月DD日").format("M月D日 ") : "", items: null
                                }
                                    , o.each(t(e).find("item"), function (e, n) {
                                        if (r = l + a(t(e).attr("time"), "HH時mm分").format("THH:mm") + ":00+09:00", a(i.globalTime).diff(a(new Date(r)), "minutes") <= 30 && 3 <= parseInt(t(e).attr("shindo"))) {
                                            var o = "";
                                            switch (t(e).attr("shindo")) {
                                                case "5-": o = "震度5弱";
                                                    break;
                                                case "5+": o = "震度5強";
                                                    break;
                                                case "6-": o = "震度6弱";
                                                    break;
                                                case "6+": o = "震度6強";
                                                    break;
                                                default: o = "震度" + t(e).attr("shindo")
                                            }
                                            var s = t(e).attr("url").match(/\/data\/(.+)(\.[a-z]+)$/), c = {
                                                time: a(t(e).attr("time"), "HH時mm分").format("H時mm分"), shindo: o, url: t(e).attr("url"), query: s[1], place: t(e).text()
                                            }
                                                ;
                                            return u = c, !1
                                        }
                                    }
                                    ), u ? void (n.items = u) : (n = null, !1)
                            }
                            ), {
                                    data: n, link: i.options.link, query: i.options.query, queryOption: i.options.queryOption
                                }
                        }
                    },
s.prototype.GetImage = function (e) {
                        var i = this, n = e, o = e.data.items.url;
                        t.ajax({
                            type: "GET", url: o, dataType: i.options.type, cache: !1, timeout: i.options.timeout, beforeSend: function (e) {
                                e.overrideMimeType("text/html;charset=Shift_JIS")
                            }
                        }
                        ).then(function (o) {
                            e.data.items.image = t(o).find("Detail").text(), "" != e.data.items.image ? (i.$element.append(i.template(n)), i.Setup()) : i.Dispose()
                        }
                            , function (e) {
                                i.Dispose()
                            }
                            )
                    },
s.prototype.Dispose = function () {
                        var e = this;
                        e.$element.remove(), e.$element = null
                    },
s.prototype.Setup = function () {
                        var e = this;
                        e.$element.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
                            i.isLoaded ? t(i.img).velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart"
                                }
                            ) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
                                opacity: 1
                            }
                                , {
                                    duration: 800, easing: "easeInOutQuart"
                                }
                            )
                        }
                        ).fail(function () {
}
                            ).always(function () {
                                e.$window.trigger("resize").trigger("scroll")
                            }
                            )
                    }, e.exports = s
            }
                ()
        }
        ).call(t, i(1))
    }, function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
                var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
                    this.Constructor.apply(this, arguments)
                }
                );
                s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
                            url: "/news/json16/business_top.json", type: "json", data: null, timeout: 8e3, directory: "/news/", title: "ビジネスニュース", category: null, link: null, linkText: null, limit: 5
                        }
                        ,
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(91)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemHeader = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
                        var e = this;
                        e.$element.length && e.GetDateTimeUTC()
                    },
s.prototype.GetDateTimeUTC = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t, i, n) {
                            var o = n.getResponseHeader("Date");
                            e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get()
                        }
                            , function (t, i, n) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Get = function () {
                        var e = this;
                        t.ajax({
                            type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout
                        }
                        ).then(function (t) {
                            var i = e.Parse(t);
                            "" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose()
                        }
                            , function (t) {
                                e.Dispose()
                            }
                            )
                    },
s.prototype.Parse = function (e) {
                        if (null != e && void 0 !== e) {
                            var t = this;
                            if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
                                n > i;
                                ++i) {
                                var o = new Date(e.channel.item[i].pubDate);
                                new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\ / /).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].date = 0 != a(t.globalTime).tz("Asia/Tokyo").startOf("day").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1
                            } return {
data: e, directory: t.options.directory, title: t.options.title, category: t.options.category, link: t.options.link, linkText: t.options.linkText, limit: t.options.limit }
                        }
                    },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$itemHeader = t(".content--header", e.element), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)) }), e.$element.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "", type: "json", data: null, timeout: 8e3, template: i(6), directory: "/news/", query: "utm_int=all_side_ranking_", title: "", duration: 480, easing: "ease-in-out", "default": 5, limit: 10, images: !1, testing: !1, testkey: "__nABTesting", mode: null, queryOption: "&nnw_opt=ranking_" },
                        this.options = n(this.defaults, a),
                        this.template = o.template(this.options.template),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.$buttonMore = null,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && (e.options.testing ? e.TestCookieManager() : e.options.queryOption = "", e.Get()) }, a.prototype.TestCookieManager = function () {
var e = this;
if (e.options.mode && "" != e.options.mode) e.options.queryOption = "";
else switch (e.TestCookieGet()) {
case "a": e.options.mode = "a", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
case "b": e.options.mode = "b", e.options.queryOption = e.options.queryOption + e.options.mode;
break;
default: e.options.queryOption = "" } }, a.prototype.TestCookieGet = function () {
var e = this;
return t.cookie(e.options.testkey) || null }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data && "" != i.data.channel.item ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
n > i;
++i)new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : ("" != e.channel.item[i].imgPath && (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath), "" != e.channel.item[i].iconPath && (e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath)), e.channel.item[i].link = t.options.directory + e.channel.item[i].link;
return e.queryRoot = t.options.query, {
data: e, limit: t.options.limit, images: t.options.images, queryOption: t.options.queryOption } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$elementHeader = t(".module_aside--header", e.element), e.$elementFooter = t(".module_aside--footer", e.element), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), e.options.images && e.$itemList.addClass("is-images"), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)), e.options["default"] <= n && t(i).css({
display: "none", opacity: 0 }) }), e.$buttonMore = t(".button", e.$elementFooter), e.$itemLists.length <= e.options["default"] ? (e.$elementFooter.remove(), e.$buttonMore.remove()) : e.$buttonMore.on("click", e, e.ShowMoreList), e.LoadImages() }, a.prototype.ShowMoreList = function (e) {
var t = e ? e.data : this;
t.$elementFooter.remove();
for (var i = t.options["default"], n = t.options.limit;
n > i;
++i)t.$itemLists[i].velocity({
opacity: 1 }, {
display: "block", duration: t.options.duration, easing: t.options.easing });
t.$window.trigger("resize").trigger("scroll") }, a.prototype.LoadImages = function () {
var e = this;
e.$itemList.find(".is-load").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize").trigger("scroll") } }) : t(n.img).attr("src", "/news/parts16/images/common/noimg_default_s.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
t(n.img).removeClass("is-load"), e.$window.trigger("resize") } }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(5), s = (i(4), function () {
this.Constructor.apply(this, arguments) });
s.prototype.Constructor = function (e, s) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/accessranking.json", type: "json", data: null, timeout: 8e3, directory: "/news/", title: "動画アクセスランキング", duration: 480, easing: "ease-in-out", "default": 10, limit: 20 },
                        this.options = n(this.defaults, s),
                        this.template = o.template(i(92)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$buttonMore = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.globalTime = null, a.locale("ja"),
                        this.Init()
                },
s.prototype.Init = function () {
var e = this;
e.$element.length && e.GetDateTimeUTC() },
s.prototype.GetDateTimeUTC = function () {
var e = this;
t.ajax({
type: "GET", url: "/news/parts16/js/datetime.json", cache: !1, timeout: e.options.timeout }).then(function (t, i, n) {
var o = n.getResponseHeader("Date");
e.globalTime = a(new Date(o)).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm:ssZ"), e.Get() }, function (t, i, n) {
e.Dispose() }) },
s.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data && "" != i.data.channel.item ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) },
s.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
if (null != e.channel.item || "" != e.channel.item) for (var i = 0, n = e.channel.item.length;
n > i;
++i) {
var o = new Date(e.channel.item[i].pubDate);
new RegExp(/\/\/www3r.nhk.or.jp\/news\/r\//).test(e.channel.item[i].imgPath) ? "undefined" != typeof kokunai && kokunai || (e.channel.item[i].imgPath = "", e.channel.item[i].iconPath = "") : (e.channel.item[i].imgPath = t.options.directory + e.channel.item[i].imgPath, e.channel.item[i].iconPath = t.options.directory + e.channel.item[i].iconPath), e.channel.item[i].link = t.options.directory + e.channel.item[i].link, e.channel.item[i].videoDuration = "" != e.channel.item[i].videoDuration ? t.toHHMMSS(e.channel.item[i].videoDuration) : "", e.channel.item[i].date = 0 == i || 0 != a(t.globalTime).startOf("day").tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo").startOf("day"), "days") ? a(o).tz("Asia/Tokyo").format("M月D日 H時mm分") : a(o).tz("Asia/Tokyo").format("H時mm分"), e.channel.item[i].datetime = a(o).tz("Asia/Tokyo").format("YYYY-MM-DDTHH:mm"), e.channel.item[i]["new"] = a(t.globalTime).tz("Asia/Tokyo").diff(a(o).tz("Asia/Tokyo"), "minutes") <= 30 ? !0 : !1 } return {
data: e, limit: t.options.limit } } },
s.prototype.toHHMMSS = function (e) {
var t = parseInt(e, 10), i = Math.floor(t / 3600), n = Math.floor((t - 3600 * i) / 60), o = t - 3600 * i - 60 * n;
return i = 0 == i ? "" : i + ":", 10 > n && (n = "0" + n), 10 > o && (o = "0" + o), i + n + ":" + o },
s.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null },
s.prototype.Setup = function () {
var e = this;
e.$elementHeader = t(".module_aside--header", e.element), e.$elementFooter = t(".module_aside--footer", e.element), e.$buttonMore = t(".button", e.$elementFooter), e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)), e.options["default"] <= n && t(i).css({
display: "none", opacity: 0 }) }), e.$itemLists.length <= e.options["default"] ? e.$buttonMore.remove() : e.$buttonMore.on("click", e, e.ShowMoreList), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).attr("src", "/news/parts16/images/common/noimg_default_m.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) },
s.prototype.ShowMoreList = function (e) {
var t = e ? e.data : this;
t.$elementFooter.remove();
for (var i = t.options["default"], n = t.options.limit;
n > i && i < t.$itemLists.length;
++i)t.$itemLists[i].velocity({
opacity: 1 }, {
display: "block", duration: t.options.duration, easing: t.options.easing });
t.$window.trigger("resize").trigger("scroll") }, e.exports = s
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
directory: "/", url: "/news/json16/nhkcontents.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(93)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.Init(),
                        this.index = 1
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup(), e.index++) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
for (var t = this, i = 0, n = e.item.length;
n > i;
i++)e.item[i].imgPath && !/^http/.test(e.item[i].imgPath) && (e.item[i].imgPath = "news/" + e.item[i].imgPath);
return {
data: e, directory: t.options.directory } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$itemContainer = t(".content--items", e.element), e.$itemList = t(".content--list", e.$itemContainer), o.each(e.$itemList.find("li"), function (i, n) {
e.$itemLists.push(t(i)) }), e.$itemList.find("img").css("opacity", 0).imagesLoaded().progress(function (e, i) {
i.isLoaded ? t(i.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : t(i.img).parent().remove() }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = (i(4), function () {
this.Constructor.apply(this, arguments) });
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/sdc.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(96)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$elementHeader = null,
                        this.$elementFooter = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
return null != e && void 0 !== e ? {
data: e } : void 0 }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$window.trigger("resize").trigger("scroll") }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = function () {
this.Constructor.apply(this, arguments) };
a.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/saigai_weather.json", type: "json", data: null, timeout: 8e3, directory: "/weather/", title: "気象情報", category: null, link: null, linkText: null },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(94)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$accordionInner = null,
                        this.$accordionNav = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.TITLE = "",
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, a.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, a.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, a.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
var t = this;
return {
data: e, directory: t.options.directory, title: t.options.title, category: t.options.category } } }, a.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, a.prototype.Setup = function () {
var e = this;
e.$accordionInner = t(".content--accordion", e.element), e.$accordionNav = t(".nav--button", e.$accordionInner), e.$itemContainer = t(".content--list", e.$accordionInner), e.$itemList = t("li", e.$itemContainer), e.TITLE = e.$accordionNav.find("span").text(), e.$accordionNav.on("click", e, e.ToggleHandler), e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize") }, a.prototype.ToggleHandler = function (e) {
var t = e ? e.data : this;
t.isMobile && (t.$accordionInner.hasClass("is-current") ? (t.$accordionInner.removeClass("is-current"), t.$itemContainer.velocity("stop").velocity({
height: 0 }, {
display: "none", duration: 320, easing: "easeInOutQuart" }), t.$accordionNav.find("span").text(t.TITLE + "はこちら")) : (t.$accordionInner.addClass("is-current"), t.$itemContainer.velocity("stop").velocity({
height: "100%" }, {
display: "block", duration: 320, easing: "easeInOutQuart" }), t.$accordionNav.find("span").text(t.TITLE + "を閉じる"))) }, a.prototype.ResizeHandler = function (e) {
var t = e ? e.data : this;
t.REQEST_ID !== !1 && (clearTimeout(t.REQEST_ID), t.REQEST_ID = null), t.REQEST_ID = setTimeout(function () {
if (t.$window.width() <= t.BREAKPOINT) {
if (t.isMobile) return;
t.$accordionInner.removeClass("is-current"), t.$itemContainer.css({
display: "none", height: 0 }), t.$accordionNav.find("span").text(t.TITLE + "はこちら"), t.isMobile = !0 } else {
if (!t.isMobile) return;
t.$accordionInner.addClass("is-current"), t.$itemContainer.css({
display: "", height: "" }), t.isMobile = !1 } }, t.INTERVAL) }, e.exports = a
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(2), o = (i(4), function () {
this.Constructor.apply(this, arguments) });
o.prototype.Constructor = function (e, o) {
                    this.$window = t(window),
                        this.template = n.template(i(95)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, o.prototype.Init = function () {
var e = this;
e.$element.length && (e.$element.append(e.template()), e.Setup()) }, o.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, o.prototype.Setup = function () {
var e = this;
e.$element.find("img").css("opacity", 0).imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart", complete: function () {
e.$window.trigger("resize") } }) : e.Dispose() }).fail(function () {
e.Dispose() }).always(function () {
e.$window.trigger("resize") }) }, e.exports = o
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = i(2), a = i(153), s = i(156), l = i(154), r = i(158), u = i(157), c = i(155), p = function () {
this.Constructor.apply(this, arguments) };
p.prototype.Constructor = function (e, a) {
                    this.$window = t(window),
                        this.defaults = {
url: "/news/json16/weather_disaster.json", type: "json", data: null, timeout: 8e3 },
                        this.options = n(this.defaults, a),
                        this.template = o.template(i(97)),
                        this.element = e.get(0),
                        this.$element = e,
                        this.$accordionInner = null,
                        this.$accordionNav = null,
                        this.$itemContainer = null,
                        this.$itemList = null,
                        this.$itemLists = [],
                        this.TITLE = "",
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, p.prototype.Init = function () {
var e = this;
e.$element.length && e.Get() }, p.prototype.Get = function () {
var e = this;
t.ajax({
type: "GET", url: e.options.url, dataType: e.options.type, data: e.options.data, cache: !1, timeout: e.options.timeout }).then(function (t) {
var i = e.Parse(t);
"" != i.data || i.data ? (e.$element.append(e.template(i)), e.Setup()) : e.Dispose() }, function (t) {
e.Dispose() }) }, p.prototype.Parse = function (e) {
if (null != e && void 0 !== e) {
return {
data: e } } }, p.prototype.Dispose = function () {
var e = this;
e.$element.remove(), e.$element = null }, p.prototype.Setup = function () {
var e = this;
new a(t(".announce--disaster")), new s(t(".announce--tkeihou")), new l(t(".announce--dosya")), new r(t(".announce--tatsumaki")), new u(t(".announce--kirokuame")), new c(t(".announce--funka")), e.$accordionInner = t(".content--accordion", e.element), e.$accordionNav = t(".nav--button", e.$accordionInner), e.$itemContainer = t(".content--list", e.$accordionInner), e.$itemList = t("li", e.$itemContainer) }, e.exports = p
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = (i(2), function () {
this.Constructor.apply(this, arguments) });
n.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.element = e.get(0),
                        this.$element = e,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, n.prototype.Init = function () {
var e = this;
e.$element.length && e.Setup() }, n.prototype.Setup = function () {
var e = this;
e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize") }, n.prototype.ResizeHandler = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 2 : 4, n = 0, o = null, a = [];
if (e > 1) {
i.$element.find("li").css("height", ""), o = i.$element.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$element.find("li").eq(u * e + c).css("height", a[u]) } i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = n
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = (i(2), function () {
this.Constructor.apply(this, arguments) });
n.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.element = e.get(0),
                        this.$element = e,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, n.prototype.Init = function () {
var e = this;
e.$element.length && e.Setup() }, n.prototype.Setup = function () {
var e = this;
e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize") }, n.prototype.ResizeHandler = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
var e = i.$window.width() <= i.BREAKPOINT ? 1 : 4, n = 0, o = null, a = [];
if (e > 1) {
i.$element.find("li").css("height", ""), o = i.$element.find("li").map(function () {
return t(this).outerHeight() }).get(), n = o.length;
for (var s = 0, l = n;
s < Math.ceil(l / e);
++s) {
var r = s * e;
a.push(Math.max.apply(null, o.slice(r, r + e))) } for (var u = 0;
n > u;
++u)for (var c = 0;
e > c;
++c)i.$element.find("li").eq(u * e + c).css("height", a[u]) } else i.$element.find("li").css("height", "");
i.$window.trigger("scroll") }, i.INTERVAL) }, e.exports = n
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = (i(4), function () {
this.Constructor.apply(this, arguments) });
o.prototype.Constructor = function (e, i) {
                    this.$window = t(window),
                        this.defaults = {
fallback: !1 },
                        this.options = n(this.defaults, i),
                        this.element = e.get(0),
                        this.$element = e,
                        this.Init()
                }, o.prototype.Init = function () {
var e = this;
e.$element.length && e.Setup() }, o.prototype.FallBack = function (e) {
var t = this;
t.options.fallback ? e.attr("src", "/news/parts16/images/common/noimg_default.gif").velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : e.parent().remove() }, o.prototype.Setup = function () {
var e = this;
e.$element.imagesLoaded().progress(function (i, n) {
n.isLoaded ? t(n.img).velocity({
opacity: 1 }, {
duration: 800, easing: "easeInOutQuart" }) : e.FallBack(t(n.img)) }).fail(function () {
}).always(function () {
e.$window.trigger("resize").trigger("scroll") }) }, e.exports = o
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var i = function () {
this.Constructor.apply(this, arguments) };
i.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.element = e.get(0),
                        this.$element = e,
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.BREAKPOINT = 600,
                        this.isMobile = !1,
                        this.Init()
                }, i.prototype.Init = function () {
var e = this;
e.$element.length && e.Setup() }, i.prototype.Setup = function () {
var e = this;
e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize") }, i.prototype.ResizeHandler = function (e) {
var t = e ? e.data : this;
t.REQEST_ID !== !1 && (clearTimeout(t.REQEST_ID), t.REQEST_ID = null), t.REQEST_ID = setTimeout(function () {
t.$element.find("iframe").css({
width: 0 | t.$element.width() || "100%", height: t.$element.width() / 16 * 9 | 0 || "auto" }) }, t.INTERVAL) }, e.exports = i
            }()
        }).call(t, i(1))
    },
function (e, t, i) {
        (function (t) {
            !function () {
                "use strict";
var n = i(3), o = function () {
this.Constructor.apply(this, arguments) };
o.prototype.Constructor = function (e) {
                    this.$window = t(window),
                        this.defaults = {
selector: ".video-player" },
                        this.options = n(this.defaults, e),
                        this.$main = t("#main"),
                        this.REQEST_ID = null,
                        this.INTERVAL = Math.floor(1e3 / 30),
                        this.Init()
                }, o.prototype.Init = function () {
var e = this;
e.Setup() }, o.prototype.Setup = function () {
var e = this;
e.$window.on("resize orientationchange", e, e.ResizeHandler).trigger("resize") }, o.prototype.ResizeHandler = function (e) {
var i = e ? e.data : this;
i.REQEST_ID !== !1 && (clearTimeout(i.REQEST_ID), i.REQEST_ID = null), i.REQEST_ID = setTimeout(function () {
i.$main.find(i.options.selector).each(function (e) {
var i = t(this), n = i.parent(), o = {
width: i.attr("width") || "100%", height: i.attr("height") || "auto", rate: null }, a = {
width: n.width(), height: n.height() };
o.rate = o.height / o.width, o.width < a.width ? t(this).css({
width: 0 | o.width, height: o.width * o.rate | 0 }) : t(this).css({
width: 0 | a.width, height: a.width * o.rate | 0 }) }) }, i.INTERVAL) }, e.exports = o
            }()
        }).call(t, i(1))
    }, function (e, t) {
!function () {
"use strict";
e.exports = function (e) {
Function.prototype.bind = Function.prototype.bind || function (e) {
if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
var t = Array.prototype.slice, i = t.call(arguments, 1), n = this, o = function () {
}, a = function () {
return n.apply(this instanceof o ? this : e || window, i.concat(t.call(arguments))) };
return o.prototype = this.prototype, a.prototype = new o, a
    }
}
    }()
}]);
