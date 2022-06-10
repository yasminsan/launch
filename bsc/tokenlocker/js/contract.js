var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, e) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[c] = e.value;
    return a
};
$jscomp.getGlobal = function(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var c = 0; c < a.length; ++c) { var e = a[c]; if (e && e.Math == Math) return e } throw Error("Cannot find global object"); };
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, c) {
    var e = $jscomp.propertyToPolyfillSymbol[c];
    if (null == e) return a[c];
    e = a[e];
    return void 0 !== e ? e : a[c]
};
$jscomp.polyfill = function(a, c, e, f) { c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, e, f) : $jscomp.polyfillUnisolated(a, c, e, f)) };
$jscomp.polyfillUnisolated = function(a, c, e, f) {
    e = $jscomp.global;
    a = a.split(".");
    for (f = 0; f < a.length - 1; f++) {
        var d = a[f];
        if (!(d in e)) return;
        e = e[d]
    }
    a = a[a.length - 1];
    f = e[a];
    c = c(f);
    c != f && null != c && $jscomp.defineProperty(e, a, { configurable: !0, writable: !0, value: c })
};
$jscomp.polyfillIsolated = function(a, c, e, f) {
    var d = a.split(".");
    a = 1 === d.length;
    f = d[0];
    f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var k = 0; k < d.length - 1; k++) {
        var b = d[k];
        if (!(b in f)) return;
        f = f[b]
    }
    d = d[d.length - 1];
    e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? f[d] : null;
    c = c(e);
    null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, d, { configurable: !0, writable: !0, value: c }) : c !== e && (void 0 === $jscomp.propertyToPolyfillSymbol[d] && (e = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ?
        $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + e + "$" + d), $jscomp.defineProperty(f, $jscomp.propertyToPolyfillSymbol[d], { configurable: !0, writable: !0, value: c })))
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = { a: !0 },
        c = {};
    try { return c.__proto__ = a, c.a } catch (e) {}
    return !1
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, c) { a.__proto__ = c; if (a.__proto__ !== c) throw new TypeError(a + " is not extensible"); return a } : null;
$jscomp.arrayIteratorImpl = function(a) { var c = 0; return function() { return c < a.length ? { done: !1, value: a[c++] } : { done: !0 } } };
$jscomp.arrayIterator = function(a) { return { next: $jscomp.arrayIteratorImpl(a) } };
$jscomp.makeIterator = function(a) { var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return c ? c.call(a) : $jscomp.arrayIterator(a) };
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function(a) { if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object"); };
$jscomp.generator.Context = function() {
    this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null
};
$jscomp.generator.Context.prototype.start_ = function() {
    if (this.isRunning_) throw new TypeError("Generator is already running");
    this.isRunning_ = !0
};
$jscomp.generator.Context.prototype.stop_ = function() { this.isRunning_ = !1 };
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() { this.nextAddress = this.catchAddress_ || this.finallyAddress_ };
$jscomp.generator.Context.prototype.next_ = function(a) { this.yieldResult = a };
$jscomp.generator.Context.prototype.throw_ = function(a) {
    this.abruptCompletion_ = { exception: a, isException: !0 };
    this.jumpToErrorHandler_()
};
$jscomp.generator.Context.prototype["return"] = function(a) {
    this.abruptCompletion_ = { "return": a };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(a) {
    this.abruptCompletion_ = { jumpTo: a };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.yield = function(a, c) { this.nextAddress = c; return { value: a } };
$jscomp.generator.Context.prototype.yieldAll = function(a, c) {
    var e = $jscomp.makeIterator(a),
        f = e.next();
    $jscomp.generator.ensureIteratorResultIsObject_(f);
    if (f.done) this.yieldResult = f.value, this.nextAddress = c;
    else return this.yieldAllIterator_ = e, this.yield(f.value, c)
};
$jscomp.generator.Context.prototype.jumpTo = function(a) { this.nextAddress = a };
$jscomp.generator.Context.prototype.jumpToEnd = function() { this.nextAddress = 0 };
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(a, c) {
    this.catchAddress_ = a;
    void 0 != c && (this.finallyAddress_ = c)
};
$jscomp.generator.Context.prototype.setFinallyBlock = function(a) {
    this.catchAddress_ = 0;
    this.finallyAddress_ = a || 0
};
$jscomp.generator.Context.prototype.leaveTryBlock = function(a, c) {
    this.nextAddress = a;
    this.catchAddress_ = c || 0
};
$jscomp.generator.Context.prototype.enterCatchBlock = function(a) {
    this.catchAddress_ = a || 0;
    a = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null;
    return a
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function(a, c, e) {
    e ? this.finallyContexts_[e] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
    this.catchAddress_ = a || 0;
    this.finallyAddress_ = c || 0
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function(a, c) {
    var e = this.finallyContexts_.splice(c || 0)[0];
    if (e = this.abruptCompletion_ = this.abruptCompletion_ || e) {
        if (e.isException) return this.jumpToErrorHandler_();
        void 0 != e.jumpTo && this.finallyAddress_ < e.jumpTo ? (this.nextAddress = e.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
    } else this.nextAddress = a
};
$jscomp.generator.Context.prototype.forIn = function(a) { return new $jscomp.generator.Context.PropertyIterator(a) };
$jscomp.generator.Context.PropertyIterator = function(a) {
    this.object_ = a;
    this.properties_ = [];
    for (var c in a) this.properties_.push(c);
    this.properties_.reverse()
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function() { for (; 0 < this.properties_.length;) { var a = this.properties_.pop(); if (a in this.object_) return a } return null };
$jscomp.generator.Engine_ = function(a) {
    this.context_ = new $jscomp.generator.Context;
    this.program_ = a
};
$jscomp.generator.Engine_.prototype.next_ = function(a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
    this.context_.next_(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.return_ = function(a) {
    this.context_.start_();
    var c = this.context_.yieldAllIterator_;
    if (c) return this.yieldAllStep_("return" in c ? c["return"] : function(e) { return { value: e, done: !0 } }, a, this.context_["return"]);
    this.context_["return"](a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.throw_ = function(a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
    this.context_.throw_(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function(a, c, e) {
    try {
        var f = a.call(this.context_.yieldAllIterator_, c);
        $jscomp.generator.ensureIteratorResultIsObject_(f);
        if (!f.done) return this.context_.stop_(), f;
        var d = f.value
    } catch (k) { return this.context_.yieldAllIterator_ = null, this.context_.throw_(k), this.nextStep_() }
    this.context_.yieldAllIterator_ = null;
    e.call(this.context_, d);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.nextStep_ = function() {
    for (; this.context_.nextAddress;) try { var a = this.program_(this.context_); if (a) return this.context_.stop_(), { value: a.value, done: !1 } } catch (c) { this.context_.yieldResult = void 0, this.context_.throw_(c) }
    this.context_.stop_();
    if (this.context_.abruptCompletion_) {
        a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (a.isException) throw a.exception;
        return { value: a["return"], done: !0 }
    }
    return { value: void 0, done: !0 }
};
$jscomp.generator.Generator_ = function(a) {
    this.next = function(c) { return a.next_(c) };
    this["throw"] = function(c) { return a.throw_(c) };
    this["return"] = function(c) { return a.return_(c) };
    this[Symbol.iterator] = function() { return this }
};
$jscomp.generator.createGenerator = function(a, c) {
    var e = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(c));
    $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(e, a.prototype);
    return e
};
$jscomp.asyncExecutePromiseGenerator = function(a) {
    function c(f) { return a.next(f) }

    function e(f) { return a["throw"](f) }
    return new Promise(function(f, d) {
        function k(b) { b.done ? f(b.value) : Promise.resolve(b.value).then(c, e).then(k, d) }
        k(a.next())
    })
};
$jscomp.asyncExecutePromiseGeneratorFunction = function(a) { return $jscomp.asyncExecutePromiseGenerator(a()) };
$jscomp.asyncExecutePromiseGeneratorProgram = function(a) { return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a))) };
$jscomp.initSymbol = function() {};
$jscomp.polyfill("Symbol", function(a) {
    if (a) return a;
    var c = function(k, b) {
        this.$jscomp$symbol$id_ = k;
        $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: b })
    };
    c.prototype.toString = function() { return this.$jscomp$symbol$id_ };
    var e = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        f = 0,
        d = function(k) { if (this instanceof d) throw new TypeError("Symbol is not a constructor"); return new c(e + (k || "") + "_" + f++, k) };
    return d
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < c.length; e++) { var f = $jscomp.global[c[e]]; "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, { configurable: !0, writable: !0, value: function() { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }) }
        return a
    }, "es6",
    "es3");
$jscomp.iteratorPrototype = function(a) {
    a = { next: a };
    a[Symbol.iterator] = function() { return this };
    return a
};
$jscomp.polyfill("Promise", function(a) {
    function c() { this.batch_ = null }

    function e(b) { return b instanceof d ? b : new d(function(g, l) { g(b) }) }
    if (a && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent) || !$jscomp.global.Promise || -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))) return a;
    c.prototype.asyncExecute = function(b) {
        if (null == this.batch_) {
            this.batch_ = [];
            var g = this;
            this.asyncExecuteFunction(function() { g.executeBatch_() })
        }
        this.batch_.push(b)
    };
    var f = $jscomp.global.setTimeout;
    c.prototype.asyncExecuteFunction = function(b) { f(b, 0) };
    c.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var b = this.batch_;
            this.batch_ = [];
            for (var g = 0; g < b.length; ++g) {
                var l = b[g];
                b[g] = null;
                try { l() } catch (m) { this.asyncThrow_(m) }
            }
        }
        this.batch_ = null
    };
    c.prototype.asyncThrow_ = function(b) { this.asyncExecuteFunction(function() { throw b; }) };
    var d = function(b) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var g = this.createResolveAndReject_();
        try { b(g.resolve, g.reject) } catch (l) { g.reject(l) }
    };
    d.prototype.createResolveAndReject_ = function() {
        function b(m) { return function(p) { l || (l = !0, m.call(g, p)) } }
        var g = this,
            l = !1;
        return { resolve: b(this.resolveTo_), reject: b(this.reject_) }
    };
    d.prototype.resolveTo_ = function(b) {
        if (b === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (b instanceof d) this.settleSameAsPromise_(b);
        else {
            a: switch (typeof b) {
                case "object":
                    var g = null != b;
                    break a;
                case "function":
                    g = !0;
                    break a;
                default:
                    g = !1
            }
            g ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b)
        }
    };
    d.prototype.resolveToNonPromiseObj_ = function(b) { var g = void 0; try { g = b.then } catch (l) { this.reject_(l); return } "function" == typeof g ? this.settleSameAsThenable_(g, b) : this.fulfill_(b) };
    d.prototype.reject_ = function(b) { this.settle_(2, b) };
    d.prototype.fulfill_ = function(b) { this.settle_(1, b) };
    d.prototype.settle_ = function(b, g) {
        if (0 != this.state_) throw Error("Cannot settle(" + b + ", " + g + "): Promise already settled in state" + this.state_);
        this.state_ = b;
        this.result_ = g;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_()
    };
    d.prototype.scheduleUnhandledRejectionCheck_ = function() {
        var b = this;
        f(function() { if (b.notifyUnhandledRejection_()) { var g = $jscomp.global.console; "undefined" !== typeof g && g.error(b.result_) } }, 1)
    };
    d.prototype.notifyUnhandledRejection_ = function() {
        if (this.isRejectionHandled_) return !1;
        var b = $jscomp.global.CustomEvent,
            g = $jscomp.global.Event,
            l = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof l) return !0;
        "function" === typeof b ? b = new b("unhandledrejection", { cancelable: !0 }) :
            "function" === typeof g ? b = new g("unhandledrejection", { cancelable: !0 }) : (b = $jscomp.global.document.createEvent("CustomEvent"), b.initCustomEvent("unhandledrejection", !1, !0, b));
        b.promise = this;
        b.reason = this.result_;
        return l(b)
    };
    d.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var b = 0; b < this.onSettledCallbacks_.length; ++b) k.asyncExecute(this.onSettledCallbacks_[b]);
            this.onSettledCallbacks_ = null
        }
    };
    var k = new c;
    d.prototype.settleSameAsPromise_ = function(b) {
        var g = this.createResolveAndReject_();
        b.callWhenSettled_(g.resolve, g.reject)
    };
    d.prototype.settleSameAsThenable_ = function(b, g) { var l = this.createResolveAndReject_(); try { b.call(g, l.resolve, l.reject) } catch (m) { l.reject(m) } };
    d.prototype.then = function(b, g) {
        function l(q, h) { return "function" == typeof q ? function(t) { try { m(q(t)) } catch (u) { p(u) } } : h }
        var m, p, r = new d(function(q, h) {
            m = q;
            p = h
        });
        this.callWhenSettled_(l(b, m), l(g, p));
        return r
    };
    d.prototype["catch"] = function(b) { return this.then(void 0, b) };
    d.prototype.callWhenSettled_ = function(b, g) {
        function l() {
            switch (m.state_) {
                case 1:
                    b(m.result_);
                    break;
                case 2:
                    g(m.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + m.state_);
            }
        }
        var m = this;
        null == this.onSettledCallbacks_ ? k.asyncExecute(l) : this.onSettledCallbacks_.push(l);
        this.isRejectionHandled_ = !0
    };
    d.resolve = e;
    d.reject = function(b) { return new d(function(g, l) { l(b) }) };
    d.race = function(b) { return new d(function(g, l) { for (var m = $jscomp.makeIterator(b), p = m.next(); !p.done; p = m.next()) e(p.value).callWhenSettled_(g, l) }) };
    d.all = function(b) {
        var g = $jscomp.makeIterator(b),
            l = g.next();
        return l.done ? e([]) : new d(function(m,
            p) {
            function r(t) {
                return function(u) {
                    q[t] = u;
                    h--;
                    0 == h && m(q)
                }
            }
            var q = [],
                h = 0;
            do q.push(void 0), h++, e(l.value).callWhenSettled_(r(q.length - 1), p), l = g.next(); while (!l.done)
        })
    };
    return d
}, "es6", "es3");
$(".erc").html(" (BEP-20)");
$(".changenet").each(function() { this.href += "tokenlocker/" });
var contractAddressMain = "0xA56750825ad3c76b53731AFaa7C9Eb982Fb7F0C3",
    contractAddressTest = "0x5231FDD6624843FA55EcC928b6e5a298793FEA63",
    contractTokenBuilder1Main = "0x32D332487C8703D94C46F99E55b12D3BaAB45190",
    contractTokenBuilder1Test = "0x32D332487C8703D94C46F99E55b12D3BaAB45190",
    contractTokenBuilder2Main = "0x76079d9098b84cb28F2045c4fbC44EF6AAf5b0e7",
    contractTokenBuilder2Test = "0xA61Bc01643CC20e722761E35e4C270BbF4c36A03",
    contractTokenBuilder3Main = "0xeE4B8458741492455d7B9929F87342Aed9D4eF4b",
    contractTokenBuilder3Test =
    "0xBFFEfDCC6275bd0D6703fCe006bB69e2a06Fb4B6",
    contractTokenBuilder4Main = "0x592173bc112099c812216b62504a20aaeb38c679",
    contractTokenBuilder4Test = "0x34e18d89B43d0Ef859896D54D024072785D8C48f",
    contractTokenBuilder5Main = "0xF74A3016E6cb9C0f112F6F6ACf5e9A5dcFB13C66",
    contractTokenBuilder5Test = "0xA56750825ad3c76b53731AFaa7C9Eb982Fb7F0C3",
    contractTokenBuilder1, contractTokenBuilder2, contractTokenBuilder3, contractTokenBuilder4, contractTokenBuilder5, builderCost, contractThis, contractThisSign, contractThisToken, contractThisTokenSign,
    balanceEth, thisDecimals, thisTokenAddress, thisAddress, thisSymbol, thisUnsold, thisLocked, maxDecimals = 18,
    abi = [{ inputs: [{ internalType: "uint256", name: "_cost", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "oldBeneficiary", type: "address" }, { indexed: !0, internalType: "address", name: "newBeneficiary", type: "address" }], name: "BeneficiarySet", type: "event" }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "contractCreator",
                type: "address"
            }, { indexed: !0, internalType: "address", name: "contractAddress", type: "address" }, { indexed: !0, internalType: "address", name: "tokenAddress", type: "address" }, { indexed: !0, internalType: "uint256", name: "unlockTime", type: "uint256" }],
            name: "ContractCreated",
            type: "event"
        }, { anonymous: !1, inputs: [{ indexed: !1, internalType: "uint256", name: "newCost", type: "uint256" }], name: "Cost", type: "event" }, {
            anonymous: !1,
            inputs: [{ indexed: !0, internalType: "address", name: "oldOwner", type: "address" }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnerSet",
            type: "event"
        }, { inputs: [], name: "beneficiary", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "newBeneficiary", type: "address" }], name: "changeBeneficiary", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_newcost", type: "uint256" }], name: "changeCost", outputs: [], stateMutability: "nonpayable", type: "function" }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "changeOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, { inputs: [{ internalType: "address", name: "_TokenOwner", type: "address" }], name: "contractsOfOwner", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_TokenAddress", type: "address" }], name: "contractsOfToken", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "cost", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "_TokenAddress", type: "address" }, { internalType: "uint256", name: "_UnlockTime", type: "uint256" }], name: "createContract", outputs: [{ internalType: "address", name: "contractAddress", type: "address" }], stateMutability: "payable", type: "function" }, {
            inputs: [],
            name: "myContracts",
            outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalBuilt", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" }
    ],
    abiContract = [{
        inputs: [{ internalType: "address", name: "_TokenAddress", type: "address" }, { internalType: "address", name: "_TokenOwner", type: "address" }, {
            internalType: "uint256",
            name: "_UnlockTime",
            type: "uint256"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
    }, { inputs: [], name: "LockedAmount", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "TokenAddress", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "TokenOwner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, {
        inputs: [],
        name: "UnlockTime",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, { inputs: [], name: "locked", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" }],
    abiToken = [{
            inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "uint256", name: "_dec", type: "uint256" }, { internalType: "uint256", name: "_supply", type: "uint256" }, {
                internalType: "uint256",
                name: "_tax1",
                type: "uint256"
            }, { internalType: "address", name: "_address1", type: "address" }, { internalType: "uint256", name: "_tax2", type: "uint256" }, { internalType: "address", name: "_address2", type: "address" }, { internalType: "uint256", name: "_deflation", type: "uint256" }, { internalType: "uint256", name: "_minSupply", type: "uint256" }, { internalType: "address", name: "_owner", type: "address" }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" },
                { indexed: !0, internalType: "address", name: "spender", type: "address" }, { indexed: !1, internalType: "uint256", name: "value", type: "uint256" }
            ],
            name: "Approval",
            type: "event"
        }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "from", type: "address" }, { indexed: !0, internalType: "address", name: "to", type: "address" }, { indexed: !1, internalType: "uint256", name: "value", type: "uint256" }], name: "Transfer", type: "event" }, {
            inputs: [],
            name: "addressTax1",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "addressTax2", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "spender", type: "address" }], name: "allowance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
            inputs: [{ internalType: "address", name: "spender", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function"
        }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "burnt", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "deflation", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "initialSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "tax1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "tax2", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalTax1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalTax2", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }], name: "transfer", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "nonpayable", type: "function" }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "value", type: "uint256" }],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    abiTokenBuilder = [{ inputs: [{ internalType: "uint256", name: "_cost", type: "uint256" }], stateMutability: "nonpayable", type: "constructor" }, {
            anonymous: !1,
            inputs: [{ indexed: !0, internalType: "address", name: "oldBeneficiary", type: "address" }, {
                indexed: !0,
                internalType: "address",
                name: "newBeneficiary",
                type: "address"
            }],
            name: "BeneficiarySet",
            type: "event"
        }, { anonymous: !1, inputs: [{ indexed: !1, internalType: "uint256", name: "newCost", type: "uint256" }], name: "Cost", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "oldOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }], name: "OwnerSet", type: "event" }, {
            anonymous: !1,
            inputs: [{ indexed: !0, internalType: "address", name: "tokenCreator", type: "address" }, {
                indexed: !0,
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, { indexed: !1, internalType: "string", name: "name", type: "string" }, { indexed: !1, internalType: "string", name: "symbol", type: "string" }, { indexed: !1, internalType: "uint256", name: "totalSupply", type: "uint256" }, { indexed: !1, internalType: "uint8", name: "decimals", type: "uint8" }],
            name: "TokenCreated",
            type: "event"
        }, { inputs: [], name: "beneficiary", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, {
            inputs: [{
                internalType: "address",
                name: "newBeneficiary",
                type: "address"
            }],
            name: "changeBeneficiary",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, { inputs: [{ internalType: "uint256", name: "_newcost", type: "uint256" }], name: "changeCost", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "changeOwner", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cost", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "symbol", type: "string" }, { internalType: "uint256", name: "totalSupply", type: "uint256" }, { internalType: "uint8", name: "decimals", type: "uint8" }, { internalType: "address", name: "to", type: "address" }], name: "createToken", outputs: [{ internalType: "address", name: "tokenAddress", type: "address" }], stateMutability: "payable", type: "function" }, {
            inputs: [{ internalType: "address", name: "tokenAddress", type: "address" }],
            name: "getTokenData",
            outputs: [{
                internalType: "string",
                name: "name",
                type: "string"
            }, { internalType: "string", name: "symbol", type: "string" }, { internalType: "uint256", name: "totalSupply", type: "uint256" }, { internalType: "uint256", name: "decimals", type: "uint256" }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "myTokens", outputs: [{ internalType: "address[]", name: "", type: "address[]" }], stateMutability: "view", type: "function" }, {
            inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }],
            name: "mytokens",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "tokens",
            outputs: [{ internalType: "string", name: "name", type: "string" }, { internalType: "string", name: "symbol", type: "string" }, { internalType: "uint256", name: "totalSupply", type: "uint256" }, { internalType: "uint8", name: "decimals", type: "uint8" }],
            stateMutability: "view",
            type: "function"
        }, { inputs: [], name: "totalBuilt", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" }
    ];

function init() {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
        if (1 == a.nextAddress) return contract = new ethers.Contract(contractAddress, abi, provider), contractSign = contract.connect(signer), a.yield(contract.cost(), 2);
        builderCost = a.yieldResult;
        $("#buildercost").html(ethers.utils.formatEther(builderCost));
        makeTable();
        a.jumpToEnd()
    })
}

function makeTable() {
    var a, c, e, f, d, k, b, g, l, m, p, r, q, h, t, u, v;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(n) {
        switch (n.nextAddress) {
            case 1:
                return a = "", n.yield(contract.myContracts({ from: myAddress }), 2);
            case 2:
                c = n.yieldResult;
                if (c == []) { n.jumpTo(3); break }
                e = c;
                f = 0;
            case 4:
                if (!(f < e.length)) { n.jumpTo(3); break }
                d = e[f];
                k = new ethers.Contract(d, abiContract, provider);
                return n.yield(k.TokenAddress(), 7);
            case 7:
                return b = n.yieldResult, n.yield(k.LockedAmount(), 8);
            case 8:
                return g = n.yieldResult, n.yield(k.locked(),
                    9);
            case 9:
                return l = n.yieldResult, n.yield(k.UnlockTime(), 10);
            case 10:
                return m = n.yieldResult, p = new Date(1E3 * Number(m)), q = new ethers.Contract(b, abiToken, provider), n.yield(q.name(), 11);
            case 11:
                return h = n.yieldResult, n.yield(q.symbol(), 12);
            case 12:
                return t = n.yieldResult, n.yield(q.decimals(), 13);
            case 13:
                u = n.yieldResult;
                r = l ? "Locked" : "Unlocked";
                v = Number(f + 1);
                a = a + "<tr><td>" + v + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + "address/" + d + '">' + d + '</a></td><td><a title="View on explorer" target="_blank" href="' +
                    tracker + "token/" + b + '">' + h + "(" + t + ")</a></td><td>" + ethers.utils.formatUnits(g, u) + "</td><td>" + p + "</td><td>" + r + '</td><td><span title="Admin panel" class="clickable" onclick="admin(\'' + d + '\')">admin</span></td><td><span title="User interface" class="clickable" onclick="ui(\'' + d + "')\">UI</span></td>";
                a += "</tr>";
                f++;
                n.jumpTo(4);
                break;
            case 3:
                $("#strHtml").html(a), n.jumpToEnd()
        }
    })
}
$("#mytokens").click(function() {
    var a, c, e, f, d, k, b, g, l, m, p, r, q;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(h) {
        switch (h.nextAddress) {
            case 1:
                return $("#mytoks").show(), curnet == mainnet || curnet == mainnetAlt ? (contractTokenBuilder1 = contractTokenBuilder1Main, contractTokenBuilder2 = contractTokenBuilder2Main, contractTokenBuilder3 = contractTokenBuilder3Main, contractTokenBuilder4 = contractTokenBuilder4Main, contractTokenBuilder5 = contractTokenBuilder5Main) : curnet == testnet && (contractTokenBuilder1 = contractTokenBuilder1Test,
                    contractTokenBuilder2 = contractTokenBuilder2Test, contractTokenBuilder3 = contractTokenBuilder3Test, contractTokenBuilder4 = contractTokenBuilder4Test, contractTokenBuilder5 = contractTokenBuilder5Test), contractToken1 = new ethers.Contract(contractTokenBuilder1, abiTokenBuilder, provider), contractToken2 = new ethers.Contract(contractTokenBuilder2, abiTokenBuilder, provider), contractToken3 = new ethers.Contract(contractTokenBuilder3, abiTokenBuilder, provider), contractToken4 = new ethers.Contract(contractTokenBuilder4, abiTokenBuilder,
                    provider), contractToken5 = new ethers.Contract(contractTokenBuilder5, abiTokenBuilder, provider), a = "", c = 0, h.yield(contractToken1.myTokens({ from: myAddress }), 2);
            case 2:
                e = h.yieldResult;
                if (e == []) { h.jumpTo(3); break }
                f = e;
                d = 0;
            case 4:
                if (!(d < f.length)) { h.jumpTo(3); break }
                k = f[d];
                b = new ethers.Contract(k, abiToken, provider);
                return h.yield(b.name(), 7);
            case 7:
                return g = h.yieldResult, h.yield(b.symbol(), 8);
            case 8:
                l = h.yieldResult;
                c = Number(c + 1);
                a = a + "<tr><td>" + c + '</td><td><a title="View on explorer" target="_blank" href="' +
                    tracker + "token/" + k + '">' + k + "</a></td><td>" + g + "</td><td>" + l + '</td><td><span title="Choose this token" class="clickable" onclick="choose(\'' + k + "')\">choose</span></td>";
                a += "</tr>";
                d++;
                h.jumpTo(4);
                break;
            case 3:
                return h.yield(contractToken2.myTokens({ from: myAddress }), 9);
            case 9:
                m = h.yieldResult;
                if (m == []) { h.jumpTo(10); break }
                f = m;
                d = 0;
            case 11:
                if (!(d < f.length)) { h.jumpTo(10); break }
                k = f[d];
                b = new ethers.Contract(k, abiToken, provider);
                return h.yield(b.name(), 14);
            case 14:
                return g = h.yieldResult, h.yield(b.symbol(), 15);
            case 15:
                l = h.yieldResult;
                c = Number(c + 1);
                a = a + "<tr><td>" + c + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + "token/" + k + '">' + k + "</a></td><td>" + g + "</td><td>" + l + '</td><td><span title="Choose this token" class="clickable" onclick="choose(\'' + k + "')\">choose</span></td>";
                a += "</tr>";
                d++;
                h.jumpTo(11);
                break;
            case 10:
                return h.yield(contractToken3.myTokens({ from: myAddress }), 16);
            case 16:
                p = h.yieldResult;
                if (p == []) { h.jumpTo(17); break }
                f = p;
                d = 0;
            case 18:
                if (!(d < f.length)) { h.jumpTo(17); break }
                k = f[d];
                b =
                    new ethers.Contract(k, abiToken, provider);
                return h.yield(b.name(), 21);
            case 21:
                return g = h.yieldResult, h.yield(b.symbol(), 22);
            case 22:
                l = h.yieldResult;
                c = Number(c + 1);
                a = a + "<tr><td>" + c + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + "token/" + k + '">' + k + "</a></td><td>" + g + "</td><td>" + l + '</td><td><span title="Choose this token" class="clickable" onclick="choose(\'' + k + "')\">choose</span></td>";
                a += "</tr>";
                d++;
                h.jumpTo(18);
                break;
            case 17:
                return h.yield(contractToken4.myTokens({ from: myAddress }),
                    23);
            case 23:
                r = h.yieldResult;
                if (r == []) { h.jumpTo(24); break }
                f = r;
                d = 0;
            case 25:
                if (!(d < f.length)) { h.jumpTo(24); break }
                k = f[d];
                b = new ethers.Contract(k, abiToken, provider);
                return h.yield(b.name(), 28);
            case 28:
                return g = h.yieldResult, h.yield(b.symbol(), 29);
            case 29:
                l = h.yieldResult;
                c = Number(c + 1);
                a = a + "<tr><td>" + c + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + "token/" + k + '">' + k + "</a></td><td>" + g + "</td><td>" + l + '</td><td><span title="Choose this token" class="clickable" onclick="choose(\'' + k + "')\">choose</span></td>";
                a += "</tr>";
                d++;
                h.jumpTo(25);
                break;
            case 24:
                return h.yield(contractToken5.myTokens({ from: myAddress }), 30);
            case 30:
                q = h.yieldResult;
                if (q == []) { h.jumpTo(31); break }
                f = q;
                d = 0;
            case 32:
                if (!(d < f.length)) { h.jumpTo(31); break }
                k = f[d];
                b = new ethers.Contract(k, abiToken, provider);
                return h.yield(b.name(), 35);
            case 35:
                return g = h.yieldResult, h.yield(b.symbol(), 36);
            case 36:
                l = h.yieldResult;
                c = Number(c + 1);
                a = a + "<tr><td>" + c + '</td><td><a title="View on explorer" target="_blank" href="' + tracker + "token/" + k + '">' + k + "</a></td><td>" + g +
                    "</td><td>" + l + '</td><td><span title="Choose this token" class="clickable" onclick="choose(\'' + k + "')\">choose</span></td>";
                a += "</tr>";
                d++;
                h.jumpTo(32);
                break;
            case 31:
                $("#strHtmlTokens").html(a), h.jumpToEnd()
        }
    })
});

function choose(a) {
    $("#newlockertkn").val(a);
    $("#mytoks").hide()
}

function admin(a) {
    var c, e, f, d, k;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(b) {
        switch (b.nextAddress) {
            case 1:
                return $("#admin").show(), $("#thisAddr").html(a), $("#viewThis").html('<a title="View on explorer" target="_blank" href="' + tracker + "address/" + a + '">' + a + "</a>"), thisAddress = a, contractThis = new ethers.Contract(a, abiContract, provider), contractThisSign = contractThis.connect(signer), b.yield(contractThis.TokenAddress(), 2);
            case 2:
                return thisTokenAddress = b.yieldResult, $("#thisTokenAddress").html(thisTokenAddress),
                    $("#viewThisToken").html('<a title="View on explorer" target="_blank" href="' + tracker + "token/" + thisTokenAddress + '">' + thisTokenAddress + "</a>"), contractThisToken = new ethers.Contract(thisTokenAddress, abiToken, provider), contractThisTokenSign = contractThisToken.connect(signer), b.yield(contractThisToken.name(), 3);
            case 3:
                return c = b.yieldResult, $("#thisName").html(c), b.yield(contractThisToken.symbol(), 4);
            case 4:
                return thisSymbol = b.yieldResult, $("#thisSymbol").html(thisSymbol), b.yield(contractThisToken.decimals(),
                    5);
            case 5:
                return thisDecimals = b.yieldResult, $("#thisDec").html(Number(thisDecimals)), b.yield(contractThisToken.balanceOf(a), 6);
            case 6:
                return thisLocked = b.yieldResult, $("#thisLocked").html(ethers.utils.formatUnits(thisLocked, thisDecimals)), b.yield(contractThis.UnlockTime(), 7);
            case 7:
                return e = b.yieldResult, f = new Date(1E3 * Number(e)), $("#thisDate").html(f), b.yield(contractThis.locked(), 8);
            case 8:
                (d = b.yieldResult) ? (k = "Locked &#128274;", $("#thisWithdraw").prop("disabled", !0), $("#adminLock").show()) : (k =
                    "Unlocked &#128275;", $("#thisWithdraw").prop("disabled", !1), $("#adminLock").hide()), $("#thisStatus").html(k), $("#addToken").click(function() {
                    return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
                        watchToken(thisTokenAddress, thisSymbol, thisDecimals);
                        g.jumpToEnd()
                    })
                }), getQRAdmin(a), b.jumpToEnd()
        }
    })
}
$("#thisWithdraw").click(function() {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
        if (1 == a.nextAddress) return 0 < thisLocked ? a.yield(contractThisSign.withdraw({ gasLimit: 1E5 }), 3) : ($("#nothing").fadeIn(1E3).fadeOut(1E3), a.jumpTo(0));
        if (4 != a.nextAddress) return tx = a.yieldResult, a.yield(tx.wait(), 4);
        makeTable();
        admin(thisAddress);
        a.jumpToEnd()
    })
});
$("#copyAddressAdmin").on("click", function() {
    var a = $("<textarea>");
    $("body").append(a);
    a.val($("#thisAddr").html()).select();
    document.execCommand("copy");
    a.remove()
});

function watchToken(a, c, e) {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(f) {
        ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: String(a), symbol: String(c), decimals: String(e) } } });
        f.jumpToEnd()
    })
}
$("#buildbtn").click(function() {
    var a, c, e, f;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(d) {
        switch (d.nextAddress) {
            case 1:
                a = $("#newlockertkn").val();
                c = $("#newlockerdate").val();
                e = Date.parse(c);
                if (!("" != a && c && e > Date.now() && ethers.utils.isAddress(a))) {
                    c && e <= Date.now() ? $("#errors").html("Error: unlock time must be in the future!") : $("#errors").html("Error: fields are empty or incorrect!");
                    d.jumpTo(0);
                    break
                }
                $("#errors").html("");
                f = new ethers.Contract(a, abiToken, provider);
                return d.yield(f.decimals(),
                    3);
            case 3:
                return d.yield(contractSign.createContract(String(a), String(e / 1E3), { value: builderCost }), 4);
            case 4:
                return tx = d.yieldResult, d.yield(tx.wait(), 5);
            case 5:
                init(), d.jumpToEnd()
        }
    })
});

function ui(a) {
    var c, e, f, d, k, b;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
        switch (g.nextAddress) {
            case 1:
                return $("#ui").show(), $(".uiAddr").html(a), $(".uiAddrlnk").attr("href", tracker + "address/" + a), curnet == testnet ? $("#istest").html("true") : $("#istest").html("false"), c = new ethers.Contract(a, abiContract, provider), g.yield(c.TokenAddress(), 2);
            case 2:
                return e = g.yieldResult, $(".tokenAddressUI").html(e), $(".tokenAddressUIlnk").attr("href", tracker + "token/" + e), f = new ethers.Contract(e, abiToken,
                    provider), g.yield(f.name(), 3);
            case 3:
                return d = g.yieldResult, $("#tokenNameUI").html(d), g.yield(f.symbol(), 4);
            case 4:
                return tokenSymbolUI = g.yieldResult, $("#tokenSymbolUI").html(tokenSymbolUI), g.yield(c.UnlockTime(), 5);
            case 5:
                k = g.yieldResult, b = new Date(1E3 * Number(k)), $("#thisDateUI").html(b), $("#uiAddr").attr("href", "https://create.metaexchange.finance/bsc/tokenlocker/locker?id=" + a), $("#uiAddr").html("https://create.metaexchange.finance/bsc/tokenlocker/locker?id=" + a), g.jumpToEnd()
        }
    })
}
$("#copyUIlink").on("click", function() {
    var a = $("<textarea>");
    $("body").append(a);
    a.val($("#uiAddr").html()).select();
    document.execCommand("copy");
    a.remove()
});

function getQR(a) {
    a = encodeURIComponent(a);
    $("#refqr").html('<img style="max-width: 80%" src="https://create.metaexchange.finance/php/qr.php?data=' + a + '">');
    $("#refd").attr("href", "https://create.metaexchange.finance/php/qr.php?data=" + a)
}

function getQRAdmin(a) {
    a = encodeURIComponent(a);
    $("#adminqr").html('<img style="max-width: 80%" src="https://create.metaexchange.finance/php/qr.php?data=' + a + '">');
    $("#admind").attr("href", "https://create.metaexchange.finance/php/qr.php?data=" + a)
};