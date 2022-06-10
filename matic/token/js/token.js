var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) { return a.raw = a };
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) { a.raw = b; return a };
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) { if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = d.value; return a };
$jscomp.getGlobal = function(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var d = a[b]; if (d && d.Math == Math) return d } throw Error("Cannot find global object"); };
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) { var d = $jscomp.propertyToPolyfillSymbol[b]; if (null == d) return a[b];
    d = a[d]; return void 0 !== d ? d : a[b] };
$jscomp.polyfill = function(a, b, d, f) { b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, d, f) : $jscomp.polyfillUnisolated(a, b, d, f)) };
$jscomp.polyfillUnisolated = function(a, b, d, f) { d = $jscomp.global;
    a = a.split("."); for (f = 0; f < a.length - 1; f++) { var e = a[f]; if (!(e in d)) return;
        d = d[e] }
    a = a[a.length - 1];
    f = d[a];
    b = b(f);
    b != f && null != b && $jscomp.defineProperty(d, a, { configurable: !0, writable: !0, value: b }) };
$jscomp.polyfillIsolated = function(a, b, d, f) {
    var e = a.split(".");
    a = 1 === e.length;
    f = e[0];
    f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var k = 0; k < e.length - 1; k++) { var c = e[k]; if (!(c in f)) return;
        f = f[c] }
    e = e[e.length - 1];
    d = $jscomp.IS_SYMBOL_NATIVE && "es6" === d ? f[e] : null;
    b = b(d);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, { configurable: !0, writable: !0, value: b }) : b !== d && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && (d = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ?
        $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + d + "$" + e), $jscomp.defineProperty(f, $jscomp.propertyToPolyfillSymbol[e], { configurable: !0, writable: !0, value: b })))
};
$jscomp.underscoreProtoCanBeSet = function() { var a = { a: !0 },
        b = {}; try { return b.__proto__ = a, b.a } catch (d) {} return !1 };
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null;
$jscomp.arrayIteratorImpl = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } };
$jscomp.arrayIterator = function(a) { return { next: $jscomp.arrayIteratorImpl(a) } };
$jscomp.makeIterator = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : $jscomp.arrayIterator(a) };
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function(a) { if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object"); };
$jscomp.generator.Context = function() { this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null };
$jscomp.generator.Context.prototype.start_ = function() { if (this.isRunning_) throw new TypeError("Generator is already running");
    this.isRunning_ = !0 };
$jscomp.generator.Context.prototype.stop_ = function() { this.isRunning_ = !1 };
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() { this.nextAddress = this.catchAddress_ || this.finallyAddress_ };
$jscomp.generator.Context.prototype.next_ = function(a) { this.yieldResult = a };
$jscomp.generator.Context.prototype.throw_ = function(a) { this.abruptCompletion_ = { exception: a, isException: !0 };
    this.jumpToErrorHandler_() };
$jscomp.generator.Context.prototype["return"] = function(a) { this.abruptCompletion_ = { "return": a };
    this.nextAddress = this.finallyAddress_ };
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(a) { this.abruptCompletion_ = { jumpTo: a };
    this.nextAddress = this.finallyAddress_ };
$jscomp.generator.Context.prototype.yield = function(a, b) { this.nextAddress = b; return { value: a } };
$jscomp.generator.Context.prototype.yieldAll = function(a, b) { var d = $jscomp.makeIterator(a),
        f = d.next();
    $jscomp.generator.ensureIteratorResultIsObject_(f); if (f.done) this.yieldResult = f.value, this.nextAddress = b;
    else return this.yieldAllIterator_ = d, this.yield(f.value, b) };
$jscomp.generator.Context.prototype.jumpTo = function(a) { this.nextAddress = a };
$jscomp.generator.Context.prototype.jumpToEnd = function() { this.nextAddress = 0 };
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(a, b) { this.catchAddress_ = a;
    void 0 != b && (this.finallyAddress_ = b) };
$jscomp.generator.Context.prototype.setFinallyBlock = function(a) { this.catchAddress_ = 0;
    this.finallyAddress_ = a || 0 };
$jscomp.generator.Context.prototype.leaveTryBlock = function(a, b) { this.nextAddress = a;
    this.catchAddress_ = b || 0 };
$jscomp.generator.Context.prototype.enterCatchBlock = function(a) { this.catchAddress_ = a || 0;
    a = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null; return a };
$jscomp.generator.Context.prototype.enterFinallyBlock = function(a, b, d) { d ? this.finallyContexts_[d] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
    this.catchAddress_ = a || 0;
    this.finallyAddress_ = b || 0 };
$jscomp.generator.Context.prototype.leaveFinallyBlock = function(a, b) { var d = this.finallyContexts_.splice(b || 0)[0]; if (d = this.abruptCompletion_ = this.abruptCompletion_ || d) { if (d.isException) return this.jumpToErrorHandler_();
        void 0 != d.jumpTo && this.finallyAddress_ < d.jumpTo ? (this.nextAddress = d.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_ } else this.nextAddress = a };
$jscomp.generator.Context.prototype.forIn = function(a) { return new $jscomp.generator.Context.PropertyIterator(a) };
$jscomp.generator.Context.PropertyIterator = function(a) { this.object_ = a;
    this.properties_ = []; for (var b in a) this.properties_.push(b);
    this.properties_.reverse() };
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function() { for (; 0 < this.properties_.length;) { var a = this.properties_.pop(); if (a in this.object_) return a } return null };
$jscomp.generator.Engine_ = function(a) { this.context_ = new $jscomp.generator.Context;
    this.program_ = a };
$jscomp.generator.Engine_.prototype.next_ = function(a) { this.context_.start_(); if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
    this.context_.next_(a); return this.nextStep_() };
$jscomp.generator.Engine_.prototype.return_ = function(a) { this.context_.start_(); var b = this.context_.yieldAllIterator_; if (b) return this.yieldAllStep_("return" in b ? b["return"] : function(d) { return { value: d, done: !0 } }, a, this.context_["return"]);
    this.context_["return"](a); return this.nextStep_() };
$jscomp.generator.Engine_.prototype.throw_ = function(a) { this.context_.start_(); if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
    this.context_.throw_(a); return this.nextStep_() };
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function(a, b, d) { try { var f = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(f); if (!f.done) return this.context_.stop_(), f; var e = f.value } catch (k) { return this.context_.yieldAllIterator_ = null, this.context_.throw_(k), this.nextStep_() }
    this.context_.yieldAllIterator_ = null;
    d.call(this.context_, e); return this.nextStep_() };
$jscomp.generator.Engine_.prototype.nextStep_ = function() { for (; this.context_.nextAddress;) try { var a = this.program_(this.context_); if (a) return this.context_.stop_(), { value: a.value, done: !1 } } catch (b) { this.context_.yieldResult = void 0, this.context_.throw_(b) }
    this.context_.stop_(); if (this.context_.abruptCompletion_) { a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null; if (a.isException) throw a.exception; return { value: a["return"], done: !0 } } return { value: void 0, done: !0 } };
$jscomp.generator.Generator_ = function(a) { this.next = function(b) { return a.next_(b) };
    this["throw"] = function(b) { return a.throw_(b) };
    this["return"] = function(b) { return a.return_(b) };
    this[Symbol.iterator] = function() { return this } };
$jscomp.generator.createGenerator = function(a, b) { var d = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
    $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(d, a.prototype); return d };
$jscomp.asyncExecutePromiseGenerator = function(a) {
    function b(f) { return a.next(f) }

    function d(f) { return a["throw"](f) } return new Promise(function(f, e) {
        function k(c) { c.done ? f(c.value) : Promise.resolve(c.value).then(b, d).then(k, e) }
        k(a.next()) }) };
$jscomp.asyncExecutePromiseGeneratorFunction = function(a) { return $jscomp.asyncExecutePromiseGenerator(a()) };
$jscomp.asyncExecutePromiseGeneratorProgram = function(a) { return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a))) };
$jscomp.initSymbol = function() {};
$jscomp.polyfill("Symbol", function(a) { if (a) return a; var b = function(k, c) { this.$jscomp$symbol$id_ = k;
        $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: c }) };
    b.prototype.toString = function() { return this.$jscomp$symbol$id_ }; var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        f = 0,
        e = function(k) { if (this instanceof e) throw new TypeError("Symbol is not a constructor"); return new b(d + (k || "") + "_" + f++, k) }; return e }, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function(a) { if (a) return a;
        a = Symbol("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), d = 0; d < b.length; d++) { var f = $jscomp.global[b[d]]; "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, { configurable: !0, writable: !0, value: function() { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }) } return a }, "es6",
    "es3");
$jscomp.iteratorPrototype = function(a) { a = { next: a };
    a[Symbol.iterator] = function() { return this }; return a };
$jscomp.polyfill("Promise", function(a) {
    function b() { this.batch_ = null }

    function d(c) { return c instanceof e ? c : new e(function(g, h) { g(c) }) }
    if (a && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent) || !$jscomp.global.Promise || -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))) return a;
    b.prototype.asyncExecute = function(c) { if (null == this.batch_) { this.batch_ = []; var g = this;
            this.asyncExecuteFunction(function() { g.executeBatch_() }) }
        this.batch_.push(c) };
    var f = $jscomp.global.setTimeout;
    b.prototype.asyncExecuteFunction = function(c) { f(c, 0) };
    b.prototype.executeBatch_ = function() { for (; this.batch_ && this.batch_.length;) { var c = this.batch_;
            this.batch_ = []; for (var g = 0; g < c.length; ++g) { var h = c[g];
                c[g] = null; try { h() } catch (l) { this.asyncThrow_(l) } } }
        this.batch_ = null };
    b.prototype.asyncThrow_ = function(c) { this.asyncExecuteFunction(function() { throw c; }) };
    var e = function(c) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var g = this.createResolveAndReject_();
        try { c(g.resolve, g.reject) } catch (h) { g.reject(h) }
    };
    e.prototype.createResolveAndReject_ = function() {
        function c(l) { return function(n) { h || (h = !0, l.call(g, n)) } } var g = this,
            h = !1; return { resolve: c(this.resolveTo_), reject: c(this.reject_) } };
    e.prototype.resolveTo_ = function(c) {
        if (c === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (c instanceof e) this.settleSameAsPromise_(c);
        else {
            a: switch (typeof c) {
                case "object":
                    var g = null != c; break a;
                case "function":
                    g = !0; break a;
                default:
                    g = !1 }
            g ? this.resolveToNonPromiseObj_(c) : this.fulfill_(c)
        }
    };
    e.prototype.resolveToNonPromiseObj_ = function(c) { var g = void 0; try { g = c.then } catch (h) { this.reject_(h); return } "function" == typeof g ? this.settleSameAsThenable_(g, c) : this.fulfill_(c) };
    e.prototype.reject_ = function(c) { this.settle_(2, c) };
    e.prototype.fulfill_ = function(c) { this.settle_(1, c) };
    e.prototype.settle_ = function(c, g) {
        if (0 != this.state_) throw Error("Cannot settle(" + c + ", " + g + "): Promise already settled in state" + this.state_);
        this.state_ = c;
        this.result_ = g;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_()
    };
    e.prototype.scheduleUnhandledRejectionCheck_ = function() { var c = this;
        f(function() { if (c.notifyUnhandledRejection_()) { var g = $jscomp.global.console; "undefined" !== typeof g && g.error(c.result_) } }, 1) };
    e.prototype.notifyUnhandledRejection_ = function() {
        if (this.isRejectionHandled_) return !1;
        var c = $jscomp.global.CustomEvent,
            g = $jscomp.global.Event,
            h = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof h) return !0;
        "function" === typeof c ? c = new c("unhandledrejection", { cancelable: !0 }) :
            "function" === typeof g ? c = new g("unhandledrejection", { cancelable: !0 }) : (c = $jscomp.global.document.createEvent("CustomEvent"), c.initCustomEvent("unhandledrejection", !1, !0, c));
        c.promise = this;
        c.reason = this.result_;
        return h(c)
    };
    e.prototype.executeOnSettledCallbacks_ = function() { if (null != this.onSettledCallbacks_) { for (var c = 0; c < this.onSettledCallbacks_.length; ++c) k.asyncExecute(this.onSettledCallbacks_[c]);
            this.onSettledCallbacks_ = null } };
    var k = new b;
    e.prototype.settleSameAsPromise_ = function(c) {
        var g = this.createResolveAndReject_();
        c.callWhenSettled_(g.resolve, g.reject)
    };
    e.prototype.settleSameAsThenable_ = function(c, g) { var h = this.createResolveAndReject_(); try { c.call(g, h.resolve, h.reject) } catch (l) { h.reject(l) } };
    e.prototype.then = function(c, g) {
        function h(p, q) { return "function" == typeof p ? function(r) { try { l(p(r)) } catch (t) { n(t) } } : q } var l, n, m = new e(function(p, q) { l = p;
            n = q });
        this.callWhenSettled_(h(c, l), h(g, n)); return m };
    e.prototype["catch"] = function(c) { return this.then(void 0, c) };
    e.prototype.callWhenSettled_ = function(c, g) {
        function h() {
            switch (l.state_) {
                case 1:
                    c(l.result_);
                    break;
                case 2:
                    g(l.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + l.state_);
            }
        }
        var l = this;
        null == this.onSettledCallbacks_ ? k.asyncExecute(h) : this.onSettledCallbacks_.push(h);
        this.isRejectionHandled_ = !0
    };
    e.resolve = d;
    e.reject = function(c) { return new e(function(g, h) { h(c) }) };
    e.race = function(c) { return new e(function(g, h) { for (var l = $jscomp.makeIterator(c), n = l.next(); !n.done; n = l.next()) d(n.value).callWhenSettled_(g, h) }) };
    e.all = function(c) {
        var g = $jscomp.makeIterator(c),
            h = g.next();
        return h.done ? d([]) : new e(function(l,
            n) {
            function m(r) { return function(t) { p[r] = t;
                    q--;
                    0 == q && l(p) } } var p = [],
                q = 0;
            do p.push(void 0), q++, d(h.value).callWhenSettled_(m(p.length - 1), n), h = g.next(); while (!h.done) })
    };
    return e
}, "es6", "es3");
$(".erc").html(" (ERC-20)");
$(".changenet").each(function() { this.href += "token/" });
var contractAddressMain = "0xA281713f54CdC6af205BaE122bafA9712CB97BdA",
    contractAddressTest = "0x040790ED2c404004A5b2DC31D6c799d12D655055",
    builderCost, contractThis, contractThisSign, balanceEth, thisDecimals, maxDecimals = 18,
    abi = [{ inputs: [{ internalType: "uint256", name: "_cost", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "oldBeneficiary", type: "address" }, { indexed: !0, internalType: "address", name: "newBeneficiary", type: "address" }],
        name: "BeneficiarySet",
        type: "event"
    }, { anonymous: !1, inputs: [{ indexed: !1, internalType: "uint256", name: "newCost", type: "uint256" }], name: "Cost", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "oldOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }], name: "OwnerSet", type: "event" }, {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "tokenCreator", type: "address" }, { indexed: !0, internalType: "address", name: "tokenAddress", type: "address" },
            { indexed: !1, internalType: "string", name: "name", type: "string" }, { indexed: !1, internalType: "string", name: "symbol", type: "string" }, { indexed: !1, internalType: "uint256", name: "decimals", type: "uint256" }, { indexed: !1, internalType: "uint256", name: "totalSupply", type: "uint256" }
        ],
        name: "TokenCreated",
        type: "event"
    }, { inputs: [], name: "beneficiary", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, {
        inputs: [{ internalType: "address", name: "newBeneficiary", type: "address" }],
        name: "changeBeneficiary",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, { inputs: [{ internalType: "uint256", name: "_newcost", type: "uint256" }], name: "changeCost", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "changeOwner", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cost", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
        inputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }, { internalType: "string", name: "symbol", type: "string" }, { internalType: "uint256", name: "decimals", type: "uint256" }, { internalType: "uint256", name: "totalSupply", type: "uint256" }, { internalType: "address", name: "to", type: "address" }],
        name: "createToken",
        outputs: [{ internalType: "address", name: "tokenAddress", type: "address" }],
        stateMutability: "payable",
        type: "function"
    }, { inputs: [], name: "myTokens", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }, { internalType: "uint256", name: "", type: "uint256" }],
        name: "mytokens",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function"
    }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalBuilt", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }],
    abiToken = [{ inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "uint256", name: "_dec", type: "uint256" }, { internalType: "uint256", name: "_supply", type: "uint256" }, { internalType: "address", name: "_owner", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, {
            anonymous: !1,
            inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "spender", type: "address" },
                { indexed: !1, internalType: "uint256", name: "value", type: "uint256" }
            ],
            name: "Approval",
            type: "event"
        }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "from", type: "address" }, { indexed: !0, internalType: "address", name: "to", type: "address" }, { indexed: !1, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, {
            inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "allowed", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "approve", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "balances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
            inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function"
        }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transferFrom", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }
    ];

function init() {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
        if (1 == a.nextAddress) return $("#strHtml").html(""), contract = new ethers.Contract(contractAddress, abi, provider), contractSign = contract.connect(signer), a.yield(contract.cost(), 2);
        builderCost = a.yieldResult;
        $("#buildercost").html(ethers.utils.formatEther(builderCost));
        $("#newto").val(myAddress);
        filter = contract.filters.TokenCreated(myAddress);
        contract.on(filter, function(b, d, f, e, k, c) {
            console.log("New token - " + f + " (" + e + ") - created at address " +
                d + ".");
            makeTable()
        });
        makeTable();
        a.jumpToEnd()
    })
}

function makeTable() {
    var a, b, d, f, e, k, c, g, h, l, n;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(m) {
        switch (m.nextAddress) {
            case 1:
                return a = "", m.yield(contract.myTokens({ from: myAddress }), 2);
            case 2:
                b = m.yieldResult;
                if (b == []) { m.jumpTo(3); break }
                d = b;
                f = 0;
            case 4:
                if (!(f < d.length)) { m.jumpTo(3); break }
                e = d[f];
                k = new ethers.Contract(e, abiToken, provider);
                return m.yield(k.name(), 7);
            case 7:
                return c = m.yieldResult, m.yield(k.symbol(), 8);
            case 8:
                return g = m.yieldResult, m.yield(k.decimals(), 9);
            case 9:
                return h = m.yieldResult,
                    m.yield(k.totalSupply(), 10);
            case 10:
                l = m.yieldResult;
                n = Number(f + 1);
                a = a + "<tr><td>" + n + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + e + '">' + e + "</a></td><td>" + c + "</td><td>" + g + "</td><td>" + h + "</td><td>" + ethers.utils.formatUnits(l, h) + '</td><td><span title="Add to wallet" class="clickable" onclick="watchToken(\'' + e + "', '" + g + "', " + h + ')">add</span></td>';
                a += "</tr>";
                f++;
                m.jumpTo(4);
                break;
            case 3:
                $("#strHtml").html(a), m.jumpToEnd()
        }
    })
}

function watchToken(a, b, d) { return $jscomp.asyncExecutePromiseGeneratorProgram(function(f) { ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: String(a), symbol: String(b), decimals: String(d) } } });
        f.jumpToEnd() }) }
$("#buildbtn").click(function() {
    var a, b, d, f, e;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(k) {
        if (1 == k.nextAddress) {
            a = $("#newname").val();
            b = $("#newsymbol").val();
            d = $("#newdecimals").val();
            f = $("#newsupply").val();
            e = $("#newto").val();
            "" == e && (e = myAddress, $("#newto").val(e));
            if (!("" != a && "" != b && f && d && Number(d) <= Number(maxDecimals))) return $("#errors").html("Error: fields are empty or incorrect!"), k.jumpTo(0);
            $("#errors").html("");
            return k.yield(contractSign.createToken(String(a), String(b),
                String(d), String(f), String(e), { value: builderCost }), 3)
        }
        if (4 != k.nextAddress) return tx = k.yieldResult, k.yield(tx.wait(), 4);
        makeTable();
        k.jumpToEnd()
    })
});
$("#newdecimals").change(function() { decval = $("#newdecimals").val();
    0 > Number(decval) && $("#newdecimals").val(0);
    Number(decval) > Number(maxDecimals) && $("#newdecimals").val(maxDecimals) });