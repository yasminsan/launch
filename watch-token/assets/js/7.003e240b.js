(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        367: function(t, e, n) {
            var r = n(2),
                s = n(3),
                a = n(19),
                i = n(33).f,
                o = n(9),
                c = s((function() { i(1) }));
            r({ target: "Object", stat: !0, forced: !o || c, sham: !o }, { getOwnPropertyDescriptor: function(t, e) { return i(a(t), e) } })
        },
        368: function(t, e, n) {
            var r = n(2),
                s = n(9),
                a = n(119).f;
            r({ target: "Object", stat: !0, forced: Object.defineProperties !== a, sham: !s }, { defineProperties: a })
        },
        369: function(t, e, n) { n(117), t.exports = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }, t.exports.__esModule = !0, t.exports.default = t.exports },
        372: function(t, e, n) {
            "use strict";
            var r = n(2),
                s = n(373);
            r({ target: "String", proto: !0, forced: n(374)("link") }, { link: function(t) { return s(this, "a", "href", t) } })
        },
        373: function(t, e, n) {
            var r = n(4),
                s = n(32),
                a = n(18),
                i = /"/g,
                o = r("".replace);
            t.exports = function(t, e, n, r) {
                var c = a(s(t)),
                    u = "<" + e;
                return "" !== n && (u += " " + n + '="' + o(a(r), i, "&quot;") + '"'), u + ">" + c + "</" + e + ">"
            }
        },
        374: function(t, e, n) {
            var r = n(3);
            t.exports = function(t) { return r((function() { var e = "" [t]('"'); return e !== e.toLowerCase() || e.split('"').length > 3 })) }
        },
        376: function(t, e, n) {
            n(118), n(64), n(63), n(12), n(367), n(120), n(121), n(198), n(368), n(117);
            var r = n(369);

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r)
                }
                return n
            }
            t.exports = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach((function(e) { r(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) }))
                }
                return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        377: function(t, e, n) {
            t.exports = function() {
                "use strict";
                var t = 6e4,
                    e = 36e5,
                    n = "millisecond",
                    r = "second",
                    s = "minute",
                    a = "hour",
                    i = "day",
                    o = "week",
                    c = "month",
                    u = "quarter",
                    l = "year",
                    h = "date",
                    d = "Invalid Date",
                    f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    m = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
                    p = function(t, e, n) { var r = String(t); return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t },
                    g = {
                        s: p,
                        z: function(t) {
                            var e = -t.utcOffset(),
                                n = Math.abs(e),
                                r = Math.floor(n / 60),
                                s = n % 60;
                            return (e <= 0 ? "+" : "-") + p(r, 2, "0") + ":" + p(s, 2, "0")
                        },
                        m: function t(e, n) {
                            if (e.date() < n.date()) return -t(n, e);
                            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                s = e.clone().add(r, c),
                                a = n - s < 0,
                                i = e.clone().add(r + (a ? -1 : 1), c);
                            return +(-(r + (n - s) / (a ? s - i : i - s)) || 0)
                        },
                        a: function(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) },
                        p: function(t) { return { M: c, y: l, w: o, d: i, D: h, h: a, m: s, s: r, ms: n, Q: u }[t] || String(t || "").toLowerCase().replace(/s$/, "") },
                        u: function(t) { return void 0 === t }
                    },
                    v = "en",
                    y = {};
                y[v] = m;
                var $ = function(t) { return t instanceof C },
                    k = function t(e, n, r) {
                        var s;
                        if (!e) return v;
                        if ("string" == typeof e) {
                            var a = e.toLowerCase();
                            y[a] && (s = a), n && (y[a] = n, s = a);
                            var i = e.split("-");
                            if (!s && i.length > 1) return t(i[0])
                        } else {
                            var o = e.name;
                            y[o] = e, s = o
                        }
                        return !r && s && (v = s), s || !r && v
                    },
                    w = function(t, e) { if ($(t)) return t.clone(); var n = "object" == typeof e ? e : {}; return n.date = t, n.args = arguments, new C(n) },
                    _ = g;
                _.l = k, _.i = $, _.w = function(t, e) { return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset }) };
                var C = function() {
                        function m(t) { this.$L = k(t.locale, null, !0), this.parse(t) }
                        var p = m.prototype;
                        return p.parse = function(t) {
                            this.$d = function(t) {
                                var e = t.date,
                                    n = t.utc;
                                if (null === e) return new Date(NaN);
                                if (_.u(e)) return new Date;
                                if (e instanceof Date) return new Date(e);
                                if ("string" == typeof e && !/Z$/i.test(e)) {
                                    var r = e.match(f);
                                    if (r) {
                                        var s = r[2] - 1 || 0,
                                            a = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], s, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)
                                    }
                                }
                                return new Date(e)
                            }(t), this.$x = t.x || {}, this.init()
                        }, p.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, p.$utils = function() { return _ }, p.isValid = function() { return !(this.$d.toString() === d) }, p.isSame = function(t, e) { var n = w(t); return this.startOf(e) <= n && n <= this.endOf(e) }, p.isAfter = function(t, e) { return w(t) < this.startOf(e) }, p.isBefore = function(t, e) { return this.endOf(e) < w(t) }, p.$g = function(t, e, n) { return _.u(t) ? this[e] : this.set(n, t) }, p.unix = function() { return Math.floor(this.valueOf() / 1e3) }, p.valueOf = function() { return this.$d.getTime() }, p.startOf = function(t, e) {
                            var n = this,
                                u = !!_.u(e) || e,
                                d = _.p(t),
                                f = function(t, e) { var r = _.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n); return u ? r : r.endOf(i) },
                                b = function(t, e) { return _.w(n.toDate()[t].apply(n.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n) },
                                m = this.$W,
                                p = this.$M,
                                g = this.$D,
                                v = "set" + (this.$u ? "UTC" : "");
                            switch (d) {
                                case l:
                                    return u ? f(1, 0) : f(31, 11);
                                case c:
                                    return u ? f(1, p) : f(0, p + 1);
                                case o:
                                    var y = this.$locale().weekStart || 0,
                                        $ = (m < y ? m + 7 : m) - y;
                                    return f(u ? g - $ : g + (6 - $), p);
                                case i:
                                case h:
                                    return b(v + "Hours", 0);
                                case a:
                                    return b(v + "Minutes", 1);
                                case s:
                                    return b(v + "Seconds", 2);
                                case r:
                                    return b(v + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, p.endOf = function(t) { return this.startOf(t, !1) }, p.$set = function(t, e) {
                            var o, u = _.p(t),
                                d = "set" + (this.$u ? "UTC" : ""),
                                f = (o = {}, o[i] = d + "Date", o[h] = d + "Date", o[c] = d + "Month", o[l] = d + "FullYear", o[a] = d + "Hours", o[s] = d + "Minutes", o[r] = d + "Seconds", o[n] = d + "Milliseconds", o)[u],
                                b = u === i ? this.$D + (e - this.$W) : e;
                            if (u === c || u === l) {
                                var m = this.clone().set(h, 1);
                                m.$d[f](b), m.init(), this.$d = m.set(h, Math.min(this.$D, m.daysInMonth())).$d
                            } else f && this.$d[f](b);
                            return this.init(), this
                        }, p.set = function(t, e) { return this.clone().$set(t, e) }, p.get = function(t) { return this[_.p(t)]() }, p.add = function(n, u) {
                            var h, d = this;
                            n = Number(n);
                            var f = _.p(u),
                                b = function(t) { var e = w(d); return _.w(e.date(e.date() + Math.round(t * n)), d) };
                            if (f === c) return this.set(c, this.$M + n);
                            if (f === l) return this.set(l, this.$y + n);
                            if (f === i) return b(1);
                            if (f === o) return b(7);
                            var m = (h = {}, h[s] = t, h[a] = e, h[r] = 1e3, h)[f] || 1,
                                p = this.$d.getTime() + n * m;
                            return _.w(p, this)
                        }, p.subtract = function(t, e) { return this.add(-1 * t, e) }, p.format = function(t) {
                            var e = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || d;
                            var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                                s = _.z(this),
                                a = this.$H,
                                i = this.$m,
                                o = this.$M,
                                c = n.weekdays,
                                u = n.months,
                                l = function(t, n, s, a) { return t && (t[n] || t(e, r)) || s[n].slice(0, a) },
                                h = function(t) { return _.s(a % 12 || 12, t, "0") },
                                f = n.meridiem || function(t, e, n) { var r = t < 12 ? "AM" : "PM"; return n ? r.toLowerCase() : r },
                                m = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o + 1, MM: _.s(o + 1, 2, "0"), MMM: l(n.monthsShort, o, u, 3), MMMM: l(u, o), D: this.$D, DD: _.s(this.$D, 2, "0"), d: String(this.$W), dd: l(n.weekdaysMin, this.$W, c, 2), ddd: l(n.weekdaysShort, this.$W, c, 3), dddd: c[this.$W], H: String(a), HH: _.s(a, 2, "0"), h: h(1), hh: h(2), a: f(a, i, !0), A: f(a, i, !1), m: String(i), mm: _.s(i, 2, "0"), s: String(this.$s), ss: _.s(this.$s, 2, "0"), SSS: _.s(this.$ms, 3, "0"), Z: s };
                            return r.replace(b, (function(t, e) { return e || m[t] || s.replace(":", "") }))
                        }, p.utcOffset = function() { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, p.diff = function(n, h, d) {
                            var f, b = _.p(h),
                                m = w(n),
                                p = (m.utcOffset() - this.utcOffset()) * t,
                                g = this - m,
                                v = _.m(this, m);
                            return v = (f = {}, f[l] = v / 12, f[c] = v, f[u] = v / 3, f[o] = (g - p) / 6048e5, f[i] = (g - p) / 864e5, f[a] = g / e, f[s] = g / t, f[r] = g / 1e3, f)[b] || g, d ? v : _.a(v)
                        }, p.daysInMonth = function() { return this.endOf(c).$D }, p.$locale = function() { return y[this.$L] }, p.locale = function(t, e) {
                            if (!t) return this.$L;
                            var n = this.clone(),
                                r = k(t, e, !0);
                            return r && (n.$L = r), n
                        }, p.clone = function() { return _.w(this.$d, this) }, p.toDate = function() { return new Date(this.valueOf()) }, p.toJSON = function() { return this.isValid() ? this.toISOString() : null }, p.toISOString = function() { return this.$d.toISOString() }, p.toString = function() { return this.$d.toUTCString() }, m
                    }(),
                    D = C.prototype;
                return w.prototype = D, [
                    ["$ms", n],
                    ["$s", r],
                    ["$m", s],
                    ["$H", a],
                    ["$W", i],
                    ["$M", c],
                    ["$y", l],
                    ["$D", h]
                ].forEach((function(t) { D[t[1]] = function(e) { return this.$g(e, t[0], t[1]) } })), w.extend = function(t, e) { return t.$i || (t(e, C, w), t.$i = !0), w }, w.locale = k, w.isDayjs = $, w.unix = function(t) { return w(1e3 * t) }, w.en = y[v], w.Ls = y, w.p = {}, w
            }()
        },
        474: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(62),
                s = (n(116), n(88), n(197), n(122), n(372), {
                    name: "Index",
                    mixins: [n(375).a],
                    data: function() { return { tokenList: [{ name: "Tether", symbol: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", blockchain: "ethereum" }, { name: "USD Coin", symbol: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", blockchain: "ethereum" }, { name: "Dai", symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", blockchain: "ethereum" }, { name: "Uniswap", symbol: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", blockchain: "ethereum" }, { name: "PancakeSwap", symbol: "CAKE", address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", blockchain: "bsc" }, { name: "Chainlink", symbol: "LINK", address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39", blockchain: "polygon" }, { name: "Decentraland", symbol: "MANA", address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942", blockchain: "ethereum" }, { name: "Basic Attention Token", symbol: "BAT", address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF", blockchain: "ethereum" }, { name: "The Sandbox", symbol: "SAND", address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0", blockchain: "ethereum" }, { name: "yearn.finance", symbol: "YFI", address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e", blockchain: "ethereum" }, { name: "1INCH", symbol: "1INCH", address: "0x111111111117dC0aa78b770fA6A738034120C302", blockchain: "ethereum" }, { name: "Aave", symbol: "AAVE", address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", blockchain: "ethereum" }], tokens: [] } },
                    mounted: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.initWeb3("ethereum_mainnet", !1);
                                    case 2:
                                        t.tokens = t.tokenList.map((function(e) { var n = "bsc" === e.blockchain ? "smartchain" : "polygon" === e.blockchain ? "polygon" : "ethereum"; return e.logo = "https://assets-cdn.trustwallet.com/blockchains/".concat(n, "/assets/").concat(e.address, "/logo.png"), e.hash = t.web3.utils.toHex(JSON.stringify({ address: e.address, logo: e.logo })), e.link = "/token-watcher/page/?hash=".concat(e.hash, "&network=").concat(e.blockchain, "_mainnet"), e }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }),
                a = n(61),
                i = Object(a.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("b-jumbotron", { staticClass: "mb-0 d-flex flex-column justify-content-center blue-gradient text-white text-center", attrs: { fluid: "" }, scopedSlots: t._u([{ key: "header", fn: function() { return [n("span", { staticClass: "display-1" }, [t._v("Token Watcher")])] }, proxy: !0 }, { key: "lead", fn: function() { return [t._v("\n      Create a dedicated page for your ERC20 or BEP20 Token to share."), n("br"), t._v("\n      No login. No setup. No coding required.\n    ")] }, proxy: !0 }]) }), t._v(" "), n("b-row", { staticClass: "mx-0 py-5" }, [n("b-col", { attrs: { md: "8", "offset-md": "2" } }, [n("b-row", [n("b-col", { attrs: { lg: "6" } }, [n("div", { staticClass: "pb-3" }, [n("h2", { staticClass: "py-5 font-weight-lighter text-dark" }, [t._v("Create your Page")]), t._v(" "), n("p", { staticClass: "lead" }, [t._v("\n              Choose your preferred Network and easily add your ERC20 or BEP20 Token to MetaMask.\n            ")])]), t._v(" "), n("b-button", { staticClass: "my-3 p-3 text-uppercase ethereum-gradient", attrs: { to: t.$withBase("/token-watcher/create/?network=ethereum_mainnet"), size: "lg", block: "", variant: "dark" } }, [n("cryptoicon", { attrs: { symbol: "eth", size: "36", color: "#fff" } }), t._v("\n            Ethereum\n          ")], 1), t._v(" "), n("b-button", { staticClass: "my-3 p-3 text-uppercase polygon-gradient", attrs: { to: t.$withBase("/token-watcher/create/?network=polygon_mainnet"), size: "lg", block: "", variant: "dark" } }, [n("cryptoicon", { attrs: { symbol: "matic", size: "36", color: "#fff" } }), t._v("\n            Polygon\n          ")], 1), t._v(" "), n("b-button", { staticClass: "my-3 p-3 text-uppercase bsc-gradient", attrs: { to: t.$withBase("/token-watcher/create/?network=bsc_mainnet"), size: "lg", block: "", variant: "light" } }, [n("cryptoicon", { attrs: { symbol: "bnb", size: "36", color: "#fff" } }), t._v("\n            BSC\n          ")], 1)], 1), t._v(" "), n("b-col", { attrs: { lg: "6" } }, [n("b-img", { attrs: { src: t.$withBase("/assets/images/token-watcher.svg"), fluid: "" } })], 1)], 1)], 1)], 1), t._v(" "), n("b-row", { staticClass: "bg-light text-dark mx-0 py-5" }, [n("b-col", { staticClass: "mb-3", attrs: { lg: "8", "offset-lg": "2" } }, [n("div", { staticClass: "available-products-table" }, [n("b-row", [n("b-col", { attrs: { lg: "4" } }, [n("b-card", { staticClass: "mb-3", attrs: { "bg-variant": "light", "border-variant": "light" } }, [n("b-card-title", { staticClass: "font-weight-light text-center" }, [n("p", { staticClass: "h1 mb-2" }, [n("b-icon-link", { staticClass: "m-4" })], 1), t._v(" "), n("p", [t._v("Choose Blockchain")])]), t._v(" "), n("p", { staticClass: "card-text text-center" }, [t._v("\n                Enter your preferred blockchain and choose your network. You can use both\n                mainnet and testnet.\n              ")])], 1)], 1), t._v(" "), n("b-col", { attrs: { lg: "4" } }, [n("b-card", { staticClass: "mb-3", attrs: { "bg-variant": "light", "border-variant": "light" } }, [n("b-card-title", { staticClass: "font-weight-light text-center" }, [n("p", { staticClass: "h1 mb-2" }, [n("b-icon-card-checklist", { staticClass: "m-4" })], 1), t._v(" "), n("p", [t._v("Enter Details")])]), t._v(" "), n("p", { staticClass: "card-text text-center" }, [t._v("\n                Enter your Token address. Verify all the information and add logo to your Token.\n              ")])], 1)], 1), t._v(" "), n("b-col", { attrs: { lg: "4" } }, [n("b-card", { staticClass: "mb-3", attrs: { "bg-variant": "light", "border-variant": "light" } }, [n("b-card-title", { staticClass: "font-weight-light text-center" }, [n("p", { staticClass: "h1 mb-2" }, [n("b-icon-share", { staticClass: "m-4" })], 1), t._v(" "), n("p", [t._v("Share Page")])]), t._v(" "), n("p", { staticClass: "card-text text-center" }, [t._v("\n                Create your page and share it via email or social.\n                Easily add your Token to MetaMask.\n              ")])], 1)], 1)], 1)], 1)])], 1), t._v(" "), n("b-row", { staticClass: "mx-0 py-5" }, [n("b-col", { attrs: { md: "8", "offset-md": "2" } }, [n("h2", { staticClass: "p-5 font-weight-lighter text-center text-dark" }, [t._v("See it in action")]), t._v(" "), n("b-row", t._l(t.tokens, (function(e) { return n("b-col", { staticClass: "mx-0 py-3", attrs: { lg: "6", xl: "4" } }, [n("b-card", { attrs: { role: "button" }, on: { click: function(n) { t.$router.push(t.$withBase(e.link)) } } }, [n("b-media", { scopedSlots: t._u([{ key: "aside", fn: function() { return [n("b-img", { attrs: { width: "48", src: e.logo } })] }, proxy: !0 }], null, !0) }, [t._v(" "), n("h5", { staticClass: "mt-0" }, [t._v(t._s(e.name))]), t._v(" "), n("p", { staticClass: "text-muted" }, [t._v(t._s(e.symbol))]), t._v(" "), n("b-badge", { class: e.blockchain + "-gradient" }, [t._v(t._s(t.blockchains[e.blockchain]))])], 1)], 1)], 1) })), 1)], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.default = i.exports
        }
    }
]);