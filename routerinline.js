/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */
!function () {
    "use strict";
    var i = navigator.userAgent.toLowerCase();

    function a(e, n) {
        for (var t in n = n || {}) e[t] = n[t];
        return e
    }

    function r(e, n, t) {
        var o = document.createElement("iframe"), i = "hwfastapp://" + e;
        n && (i = i + "/" + n), t && 0 < Object.keys(t).length && (i = i + "?" + (t = Object.keys(t).map(function (e) {
            return e + "=" + encodeURIComponent(t[e])
        }).join("&"))), o.src = i, document.body.appendChild(o), o.style.display = "none"
    }

    function e(e, n, t) {
        if (function () {
            var e = navigator.userAgent;
            if (e) {
                if (0 <= (e = e.toLowerCase()).indexOf("huaweibrowser")) return !1;
                var n = e.indexOf("android"), t = e.indexOf("build/huawei");
                if (t < 0 && (t = e.indexOf("build/honor")), 0 <= n && 0 <= t) {
                    var o = e.slice(n + 8, n + 9);
                    if (8 <= o) return !0;
                    if ((o = e.slice(n + 8, n + 10)) && o.indexOf(";") < 0 && 10 <= o) return !0
                }
            }
            return !1
        }()) {
            if (function (e, n, t) {
                var o = "http://122.11.38.205/fastapprouter/", i = "";
                if (o = o + (new Date).getTime() + "/", !n || 0 == n.indexOf("/") && (n = 1 == n.length ? " " : n.substr(1)), e && (o = o + "?i=" + e), n && (o = o + "&p=" + n), function (e) {
                    if (!e) return !0;
                    var n = void 0;
                    for (n in e) return !1;
                    return !0
                }(t)) {
                    var a = window.location.search;
                    -1 < a.indexOf("?") && (i = a.substr(1))
                } else i = Object.keys(t).map(function (e) {
                    return e + "=" + encodeURIComponent(t[e])
                }).join("&");
                "" !== i && (o = o + "&a=" + encodeURIComponent(i));
                var r = document.createElement("img");
                r.src = o, r.style.width = "1px", r.style.height = "1px", r.style.display = "none", document.body.appendChild(r)
            }(e, n, t = t || {}), function () {
                var e = navigator.userAgent;
                if (e) {
                    var n = (e = e.toLowerCase()).indexOf("android"), t = e.indexOf("build/huawei");
                    if (t < 0 && (t = e.indexOf("build/honor")), 0 <= n && 0 <= t) {
                        var o = e.slice(n + 8, n + 9);
                        if (9 <= o) return !1;
                        if ((o = e.slice(n + 8, n + 10)) && o.indexOf(";") < 0 && 10 <= o) return !1
                    }
                }
                return !0
            }()) {
                var o = new Date;
                setTimeout(function () {
                    new Date - o <= 830 && r(e, n, t)
                }, 800)
            }
        } else r(e, n, t)
    }

    function c(e) {
        var n = +(e.match(/.*Android (\d+).*/i) || [])[1];
        return !isNaN(n) && n < 10
    }

    function d(e) {
        var n = +(e.match(/.*Android (\d+).*/i) || [])[1];
        return !isNaN(n) && 10 <= n
    }

    function u(e) {
        return 1 < (e.match(/.*(iPhone|Mac OS).*/i) || []).length
    }

    function l(e, n, t, o) {
        var i = e, a = "";
        (n && (i = i + "?i=" + n), t && (i = i + "&p=" + t), i += "&random=" + Math.random(), function (e) {
            if (!e) return !0;
            var n = void 0;
            for (n in e) return !1;
            return !0
        }(o)) ? -1 < (e = window.location.search).indexOf("?") && (a = e.substr(1)) : a = Object.keys(o).map(function (e) {
            return e + "=" + encodeURIComponent(o[e])
        }).join("&");
        "" !== a && (i = i + "&a=" + encodeURIComponent(a));
        var r = document.createElement("img");
        r.src = i, r.style.width = "1px", r.style.height = "1px", r.style.display = "none", document.body.appendChild(r)
    }

    function f(e, n) {
        var t = document.createElement("img");
        if (t.style.width = "1px", t.style.height = "1px", t.style.display = "none", e += "/" + 1e20 * Math.random(), t.src = e, document.body.appendChild(t), n = a({availableTimeout: 2e3}, n), t.complete) n.available.call(null, !0); else {
            t.onload = function () {
                clearTimeout(o), n.available.call(null, !0)
            };
            var o = setTimeout(function () {
                n.available.call(null, !1)
            }, n.availableTimeout)
        }
    }

    function s(e, n, t) {
        var o = navigator.userAgent;
        u(o) ? console.debug("Detect device: Apple device;") : c(o) ? (console.debug("Detect device: Below Android Q;"), l("http://thefatherofsalmon.com", e, n, t)) : (d(o) ? console.debug("Detect device: Greater and equal than Android Q;") : console.debug("Detect device: None match;"), l("http://thefatherofsalmon.com", e, n, t), l("http://v2.thefatherofsalmon.com", e, n, t))
    }

    function n(e, n, t, o) {
        return t = t || {}, o && (t.__PROMPT__ = 1, t.__NAME__ = o), s(e, n, t)
    }

    function t(e, n) {
        return s("command", "", {type: "shortcut", package: e, name: n})
    }

    function o(e) {
        var n = {available: new Function};
        "function" == typeof e ? n.available = e : "object" == typeof e && a(n, e);
        var t = !1, o = n.available;
        return n.available = function () {
            t || (t = !0, o.apply(null, arguments))
        }, function (e) {
            var n = navigator.userAgent;
            u(n) ? console.debug("Detect device: Apple device;") : c(n) ? (console.debug("Detect device: Below Android Q;"), f("http://thefatherofsalmon.com/images", e)) : (d(n) ? console.debug("Detect device: Greater and equal than Android Q;") : console.debug("Detect device: None match;"), f("http://thefatherofsalmon.com/images", e), f("http://v2.thefatherofsalmon.com/images", e))
        }(n)
    }

    !function (e) {
        void 0 === e && (e = i);
        var n = e.indexOf("android"), t = e.indexOf("build/huawei"), o = e.indexOf("build/honor");
        return 0 <= n && (0 <= t || 0 <= o)
    }() ? (window.appRouter = n, window.installShortcut = t, window.channelReady = o) : window.appRouter = window.appRouterHw = e
}();