function Mf(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
var Co = { exports: {} }, wr = {}, No = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function jf() {
  if (Ra) return U;
  Ra = 1;
  var k = Symbol.for("react.element"), M = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), te = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), ue = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), T = Symbol.iterator;
  function x(c) {
    return c === null || typeof c != "object" ? null : (c = T && c[T] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, V = {};
  function B(c, v, j) {
    this.props = c, this.context = v, this.refs = V, this.updater = j || J;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, B.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function xe() {
  }
  xe.prototype = B.prototype;
  function Me(c, v, j) {
    this.props = c, this.context = v, this.refs = V, this.updater = j || J;
  }
  var ae = Me.prototype = new xe();
  ae.constructor = Me, K(ae, B.prototype), ae.isPureReactComponent = !0;
  var Ee = Array.isArray, Ye = Object.prototype.hasOwnProperty, Pe = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(c, v, j) {
    var $, Y = {}, X = null, re = null;
    if (v != null) for ($ in v.ref !== void 0 && (re = v.ref), v.key !== void 0 && (X = "" + v.key), v) Ye.call(v, $) && !Te.hasOwnProperty($) && (Y[$] = v[$]);
    var q = arguments.length - 2;
    if (q === 1) Y.children = j;
    else if (1 < q) {
      for (var ce = Array(q), Ge = 0; Ge < q; Ge++) ce[Ge] = arguments[Ge + 2];
      Y.children = ce;
    }
    if (c && c.defaultProps) for ($ in q = c.defaultProps, q) Y[$] === void 0 && (Y[$] = q[$]);
    return { $$typeof: k, type: c, key: X, ref: re, props: Y, _owner: Pe.current };
  }
  function de(c, v) {
    return { $$typeof: k, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function ne(c) {
    return typeof c == "object" && c !== null && c.$$typeof === k;
  }
  function je(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(j) {
      return v[j];
    });
  }
  var Xe = /\/+/g;
  function Fe(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? je("" + c.key) : v.toString(36);
  }
  function ot(c, v, j, $, Y) {
    var X = typeof c;
    (X === "undefined" || X === "boolean") && (c = null);
    var re = !1;
    if (c === null) re = !0;
    else switch (X) {
      case "string":
      case "number":
        re = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case k:
          case M:
            re = !0;
        }
    }
    if (re) return re = c, Y = Y(re), c = $ === "" ? "." + Fe(re, 0) : $, Ee(Y) ? (j = "", c != null && (j = c.replace(Xe, "$&/") + "/"), ot(Y, v, j, "", function(Ge) {
      return Ge;
    })) : Y != null && (ne(Y) && (Y = de(Y, j + (!Y.key || re && re.key === Y.key ? "" : ("" + Y.key).replace(Xe, "$&/") + "/") + c)), v.push(Y)), 1;
    if (re = 0, $ = $ === "" ? "." : $ + ":", Ee(c)) for (var q = 0; q < c.length; q++) {
      X = c[q];
      var ce = $ + Fe(X, q);
      re += ot(X, v, j, ce, Y);
    }
    else if (ce = x(c), typeof ce == "function") for (c = ce.call(c), q = 0; !(X = c.next()).done; ) X = X.value, ce = $ + Fe(X, q++), re += ot(X, v, j, ce, Y);
    else if (X === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return re;
  }
  function mt(c, v, j) {
    if (c == null) return c;
    var $ = [], Y = 0;
    return ot(c, $, "", "", function(X) {
      return v.call(j, X, Y++);
    }), $;
  }
  function Ve(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(j) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = j);
      }, function(j) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = j);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var he = { current: null }, S = { transition: null }, O = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: S, ReactCurrentOwner: Pe };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return U.Children = { map: mt, forEach: function(c, v, j) {
    mt(c, function() {
      v.apply(this, arguments);
    }, j);
  }, count: function(c) {
    var v = 0;
    return mt(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return mt(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!ne(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, U.Component = B, U.Fragment = m, U.Profiler = ee, U.PureComponent = Me, U.StrictMode = se, U.Suspense = A, U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, U.act = N, U.cloneElement = function(c, v, j) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var $ = K({}, c.props), Y = c.key, X = c.ref, re = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (X = v.ref, re = Pe.current), v.key !== void 0 && (Y = "" + v.key), c.type && c.type.defaultProps) var q = c.type.defaultProps;
      for (ce in v) Ye.call(v, ce) && !Te.hasOwnProperty(ce) && ($[ce] = v[ce] === void 0 && q !== void 0 ? q[ce] : v[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) $.children = j;
    else if (1 < ce) {
      q = Array(ce);
      for (var Ge = 0; Ge < ce; Ge++) q[Ge] = arguments[Ge + 2];
      $.children = q;
    }
    return { $$typeof: k, type: c.type, key: Y, ref: X, props: $, _owner: re };
  }, U.createContext = function(c) {
    return c = { $$typeof: te, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: Z, _context: c }, c.Consumer = c;
  }, U.createElement = F, U.createFactory = function(c) {
    var v = F.bind(null, c);
    return v.type = c, v;
  }, U.createRef = function() {
    return { current: null };
  }, U.forwardRef = function(c) {
    return { $$typeof: Q, render: c };
  }, U.isValidElement = ne, U.lazy = function(c) {
    return { $$typeof: C, _payload: { _status: -1, _result: c }, _init: Ve };
  }, U.memo = function(c, v) {
    return { $$typeof: ue, type: c, compare: v === void 0 ? null : v };
  }, U.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, U.unstable_act = N, U.useCallback = function(c, v) {
    return he.current.useCallback(c, v);
  }, U.useContext = function(c) {
    return he.current.useContext(c);
  }, U.useDebugValue = function() {
  }, U.useDeferredValue = function(c) {
    return he.current.useDeferredValue(c);
  }, U.useEffect = function(c, v) {
    return he.current.useEffect(c, v);
  }, U.useId = function() {
    return he.current.useId();
  }, U.useImperativeHandle = function(c, v, j) {
    return he.current.useImperativeHandle(c, v, j);
  }, U.useInsertionEffect = function(c, v) {
    return he.current.useInsertionEffect(c, v);
  }, U.useLayoutEffect = function(c, v) {
    return he.current.useLayoutEffect(c, v);
  }, U.useMemo = function(c, v) {
    return he.current.useMemo(c, v);
  }, U.useReducer = function(c, v, j) {
    return he.current.useReducer(c, v, j);
  }, U.useRef = function(c) {
    return he.current.useRef(c);
  }, U.useState = function(c) {
    return he.current.useState(c);
  }, U.useSyncExternalStore = function(c, v, j) {
    return he.current.useSyncExternalStore(c, v, j);
  }, U.useTransition = function() {
    return he.current.useTransition();
  }, U.version = "18.3.1", U;
}
var za;
function Oo() {
  return za || (za = 1, No.exports = jf()), No.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function Ff() {
  if (Ta) return wr;
  Ta = 1;
  var k = Oo(), M = Symbol.for("react.element"), m = Symbol.for("react.fragment"), se = Object.prototype.hasOwnProperty, ee = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(Q, A, ue) {
    var C, T = {}, x = null, J = null;
    ue !== void 0 && (x = "" + ue), A.key !== void 0 && (x = "" + A.key), A.ref !== void 0 && (J = A.ref);
    for (C in A) se.call(A, C) && !Z.hasOwnProperty(C) && (T[C] = A[C]);
    if (Q && Q.defaultProps) for (C in A = Q.defaultProps, A) T[C] === void 0 && (T[C] = A[C]);
    return { $$typeof: M, type: Q, key: x, ref: J, props: T, _owner: ee.current };
  }
  return wr.Fragment = m, wr.jsx = te, wr.jsxs = te, wr;
}
var La;
function Uf() {
  return La || (La = 1, Co.exports = Ff()), Co.exports;
}
var W = Uf(), Tl = {}, Po = { exports: {} }, Ke = {}, Ro = { exports: {} }, zo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function Af() {
  return Da || (Da = 1, function(k) {
    function M(S, O) {
      var N = S.length;
      S.push(O);
      e: for (; 0 < N; ) {
        var c = N - 1 >>> 1, v = S[c];
        if (0 < ee(v, O)) S[c] = O, S[N] = v, N = c;
        else break e;
      }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function se(S) {
      if (S.length === 0) return null;
      var O = S[0], N = S.pop();
      if (N !== O) {
        S[0] = N;
        e: for (var c = 0, v = S.length, j = v >>> 1; c < j; ) {
          var $ = 2 * (c + 1) - 1, Y = S[$], X = $ + 1, re = S[X];
          if (0 > ee(Y, N)) X < v && 0 > ee(re, Y) ? (S[c] = re, S[X] = N, c = X) : (S[c] = Y, S[$] = N, c = $);
          else if (X < v && 0 > ee(re, N)) S[c] = re, S[X] = N, c = X;
          else break e;
        }
      }
      return O;
    }
    function ee(S, O) {
      var N = S.sortIndex - O.sortIndex;
      return N !== 0 ? N : S.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Z = performance;
      k.unstable_now = function() {
        return Z.now();
      };
    } else {
      var te = Date, Q = te.now();
      k.unstable_now = function() {
        return te.now() - Q;
      };
    }
    var A = [], ue = [], C = 1, T = null, x = 3, J = !1, K = !1, V = !1, B = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ae(S) {
      for (var O = m(ue); O !== null; ) {
        if (O.callback === null) se(ue);
        else if (O.startTime <= S) se(ue), O.sortIndex = O.expirationTime, M(A, O);
        else break;
        O = m(ue);
      }
    }
    function Ee(S) {
      if (V = !1, ae(S), !K) if (m(A) !== null) K = !0, Ve(Ye);
      else {
        var O = m(ue);
        O !== null && he(Ee, O.startTime - S);
      }
    }
    function Ye(S, O) {
      K = !1, V && (V = !1, xe(F), F = -1), J = !0;
      var N = x;
      try {
        for (ae(O), T = m(A); T !== null && (!(T.expirationTime > O) || S && !je()); ) {
          var c = T.callback;
          if (typeof c == "function") {
            T.callback = null, x = T.priorityLevel;
            var v = c(T.expirationTime <= O);
            O = k.unstable_now(), typeof v == "function" ? T.callback = v : T === m(A) && se(A), ae(O);
          } else se(A);
          T = m(A);
        }
        if (T !== null) var j = !0;
        else {
          var $ = m(ue);
          $ !== null && he(Ee, $.startTime - O), j = !1;
        }
        return j;
      } finally {
        T = null, x = N, J = !1;
      }
    }
    var Pe = !1, Te = null, F = -1, de = 5, ne = -1;
    function je() {
      return !(k.unstable_now() - ne < de);
    }
    function Xe() {
      if (Te !== null) {
        var S = k.unstable_now();
        ne = S;
        var O = !0;
        try {
          O = Te(!0, S);
        } finally {
          O ? Fe() : (Pe = !1, Te = null);
        }
      } else Pe = !1;
    }
    var Fe;
    if (typeof Me == "function") Fe = function() {
      Me(Xe);
    };
    else if (typeof MessageChannel < "u") {
      var ot = new MessageChannel(), mt = ot.port2;
      ot.port1.onmessage = Xe, Fe = function() {
        mt.postMessage(null);
      };
    } else Fe = function() {
      B(Xe, 0);
    };
    function Ve(S) {
      Te = S, Pe || (Pe = !0, Fe());
    }
    function he(S, O) {
      F = B(function() {
        S(k.unstable_now());
      }, O);
    }
    k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, k.unstable_continueExecution = function() {
      K || J || (K = !0, Ve(Ye));
    }, k.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < S ? Math.floor(1e3 / S) : 5;
    }, k.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, k.unstable_getFirstCallbackNode = function() {
      return m(A);
    }, k.unstable_next = function(S) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = x;
      }
      var N = x;
      x = O;
      try {
        return S();
      } finally {
        x = N;
      }
    }, k.unstable_pauseExecution = function() {
    }, k.unstable_requestPaint = function() {
    }, k.unstable_runWithPriority = function(S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var N = x;
      x = S;
      try {
        return O();
      } finally {
        x = N;
      }
    }, k.unstable_scheduleCallback = function(S, O, N) {
      var c = k.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? c + N : c) : N = c, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = N + v, S = { id: C++, callback: O, priorityLevel: S, startTime: N, expirationTime: v, sortIndex: -1 }, N > c ? (S.sortIndex = N, M(ue, S), m(A) === null && S === m(ue) && (V ? (xe(F), F = -1) : V = !0, he(Ee, N - c))) : (S.sortIndex = v, M(A, S), K || J || (K = !0, Ve(Ye))), S;
    }, k.unstable_shouldYield = je, k.unstable_wrapCallback = function(S) {
      var O = x;
      return function() {
        var N = x;
        x = O;
        try {
          return S.apply(this, arguments);
        } finally {
          x = N;
        }
      };
    };
  }(zo)), zo;
}
var Oa;
function Vf() {
  return Oa || (Oa = 1, Ro.exports = Af()), Ro.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Bf() {
  if (Ia) return Ke;
  Ia = 1;
  var k = Oo(), M = Vf();
  function m(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var se = /* @__PURE__ */ new Set(), ee = {};
  function Z(e, t) {
    te(e, t), te(e + "Capture", t);
  }
  function te(e, t) {
    for (ee[e] = t, e = 0; e < t.length; e++) se.add(t[e]);
  }
  var Q = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), A = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, C = {}, T = {};
  function x(e) {
    return A.call(T, e) ? !0 : A.call(C, e) ? !1 : ue.test(e) ? T[e] = !0 : (C[e] = !0, !1);
  }
  function J(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function K(e, t, n, r) {
    if (t === null || typeof t > "u" || J(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function V(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    B[e] = new V(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    B[t] = new V(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    B[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    B[e] = new V(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    B[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    B[e] = new V(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    B[e] = new V(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    B[e] = new V(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    B[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var xe = /[\-:]([a-z])/g;
  function Me(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      xe,
      Me
    );
    B[t] = new V(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(xe, Me);
    B[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(xe, Me);
    B[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    B[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new V("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    B[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ae(e, t, n, r) {
    var l = B.hasOwnProperty(t) ? B[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (K(t, n, l, r) && (n = null), r || l === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ee = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), je = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var N = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      c = t && t[1] || "";
    }
    return `
` + c + e;
  }
  var j = !1;
  function $(e, t) {
    if (!e || j) return "";
    j = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
        for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== u[i]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
      }
    } finally {
      j = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function Y(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = $(e.type, !1), e;
      case 11:
        return e = $(e.type.render, !1), e;
      case 1:
        return e = $(e.type, !0), e;
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case Pe:
        return "Portal";
      case de:
        return "Profiler";
      case F:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case je:
        return (e.displayName || "Context") + ".Consumer";
      case ne:
        return (e._context.displayName || "Context") + ".Provider";
      case Xe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case mt:
        return t = e.displayName || null, t !== null ? t : X(e.type) || "Memo";
      case Ve:
        t = e._payload, e = e._init;
        try {
          return X(e(t));
        } catch {
        }
    }
    return null;
  }
  function re(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return X(t);
      case 8:
        return t === F ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function q(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ge(e) {
    var t = ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function Io(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, t) {
    var n = t.checked;
    return N({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Mo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function jo(e, t) {
    t = t.checked, t != null && ae(e, "checked", t, !1);
  }
  function Dl(e, t) {
    jo(e, t);
    var n = q(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ol(e, t.type, q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Fo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ol(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var In = Array.isArray;
  function an(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + q(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return N({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(m(92));
        if (In(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: q(n) };
  }
  function Ao(e, t) {
    var n = q(t.value), r = q(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Vo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var xr, $o = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Mn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(jn).forEach(function(e) {
    Aa.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), jn[t] = jn[e];
    });
  });
  function Ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jn.hasOwnProperty(e) && jn[e] ? ("" + t).trim() : t + "px";
  }
  function Wo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ho(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Va = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function jl(e, t) {
    if (t) {
      if (Va[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ul = null;
  function Al(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, cn = null, fn = null;
  function Qo(e) {
    if (e = lr(e)) {
      if (typeof Vl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && (t = Qr(t), Vl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    cn ? fn ? fn.push(e) : fn = [e] : cn = e;
  }
  function Yo() {
    if (cn) {
      var e = cn, t = fn;
      if (fn = cn = null, Qo(e), t) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Go() {
  }
  var Bl = !1;
  function Zo(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      Bl = !1, (cn !== null || fn !== null) && (Go(), Yo());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var $l = !1;
  if (Q) try {
    var Un = {};
    Object.defineProperty(Un, "passive", { get: function() {
      $l = !0;
    } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
  } catch {
    $l = !1;
  }
  function Ba(e, t, n, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var An = !1, Er = null, _r = !1, Hl = null, $a = { onError: function(e) {
    An = !0, Er = e;
  } };
  function Ha(e, t, n, r, l, u, o, i, s) {
    An = !1, Er = null, Ba.apply($a, arguments);
  }
  function Wa(e, t, n, r, l, u, o, i, s) {
    if (Ha.apply(this, arguments), An) {
      if (An) {
        var p = Er;
        An = !1, Er = null;
      } else throw Error(m(198));
      _r || (_r = !0, Hl = p);
    }
  }
  function Xt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qo(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Qa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Xt(e), t === null) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return qo(l), e;
          if (u === r) return qo(l), t;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) n = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === n) {
            o = !0, n = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, n = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === n) {
              o = !0, n = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, n = l;
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function bo(e) {
    return e = Qa(e), e !== null ? ei(e) : null;
  }
  function ei(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ei(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ti = M.unstable_scheduleCallback, ni = M.unstable_cancelCallback, Ka = M.unstable_shouldYield, Ya = M.unstable_requestPaint, ye = M.unstable_now, Xa = M.unstable_getCurrentPriorityLevel, Wl = M.unstable_ImmediatePriority, ri = M.unstable_UserBlockingPriority, Cr = M.unstable_NormalPriority, Ga = M.unstable_LowPriority, li = M.unstable_IdlePriority, Nr = null, ht = null;
  function Za(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function") try {
      ht.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var it = Math.clz32 ? Math.clz32 : ba, Ja = Math.log, qa = Math.LN2;
  function ba(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ja(e) / qa | 0) | 0;
  }
  var Pr = 64, Rr = 4194304;
  function Vn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = Vn(i) : (u &= o, u !== 0 && (r = Vn(u)));
    } else o = n & ~l, o !== 0 ? r = Vn(o) : u !== 0 && (r = Vn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - it(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function ec(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function tc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - it(u), i = 1 << o, s = l[o];
      s === -1 ? (!(i & n) || i & r) && (l[o] = ec(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Ql(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ui() {
    var e = Pr;
    return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Bn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - it(t), e[t] = n;
  }
  function nc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - it(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Yl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - it(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var b = 0;
  function oi(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ii, Xl, si, ai, ci, Gl = !1, Tr = [], zt = null, Tt = null, Lt = null, $n = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Dt = [], rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && Xl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return zt = Wn(zt, e, t, n, r, l), !0;
      case "dragenter":
        return Tt = Wn(Tt, e, t, n, r, l), !0;
      case "mouseover":
        return Lt = Wn(Lt, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return $n.set(u, Wn($n.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Hn.set(u, Wn(Hn.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function di(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Jo(n), t !== null) {
            e.blockedOn = t, ci(e.priority, function() {
              si(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ul = r, n.target.dispatchEvent(r), Ul = null;
      } else return t = lr(n), t !== null && Xl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pi(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function uc() {
    Gl = !1, zt !== null && Lr(zt) && (zt = null), Tt !== null && Lr(Tt) && (Tt = null), Lt !== null && Lr(Lt) && (Lt = null), $n.forEach(pi), Hn.forEach(pi);
  }
  function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gl || (Gl = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, uc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Tr.length) {
      Qn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zt !== null && Qn(zt, e), Tt !== null && Qn(Tt, e), Lt !== null && Qn(Lt, e), $n.forEach(t), Hn.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null); ) di(n), n.blockedOn === null && Dt.shift();
  }
  var dn = Ee.ReactCurrentBatchConfig, Dr = !0;
  function oc(e, t, n, r) {
    var l = b, u = dn.transition;
    dn.transition = null;
    try {
      b = 1, Zl(e, t, n, r);
    } finally {
      b = l, dn.transition = u;
    }
  }
  function ic(e, t, n, r) {
    var l = b, u = dn.transition;
    dn.transition = null;
    try {
      b = 4, Zl(e, t, n, r);
    } finally {
      b = l, dn.transition = u;
    }
  }
  function Zl(e, t, n, r) {
    if (Dr) {
      var l = Jl(e, t, n, r);
      if (l === null) mu(e, t, r, Or, n), fi(e, r);
      else if (lc(l, e, t, n, r)) r.stopPropagation();
      else if (fi(e, r), t & 4 && -1 < rc.indexOf(e)) {
        for (; l !== null; ) {
          var u = lr(l);
          if (u !== null && ii(u), u = Jl(e, t, n, r), u === null && mu(e, t, r, Or, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else mu(e, t, r, null, n);
    }
  }
  var Or = null;
  function Jl(e, t, n, r) {
    if (Or = null, e = Al(r), e = Gt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Jo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Or = e, null;
  }
  function mi(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xa()) {
          case Wl:
            return 1;
          case ri:
            return 4;
          case Cr:
          case Ga:
            return 16;
          case li:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ot = null, ql = null, Ir = null;
  function hi() {
    if (Ir) return Ir;
    var e, t = ql, n = t.length, r, l = "value" in Ot ? Ot.value : Ot.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function jr() {
    return !0;
  }
  function vi() {
    return !1;
  }
  function Ze(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? jr : vi, this.isPropagationStopped = vi, this;
    }
    return N(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = jr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = jr);
    }, persist: function() {
    }, isPersistent: jr }), t;
  }
  var pn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bl = Ze(pn), Yn = N({}, pn, { view: 0, detail: 0 }), sc = Ze(Yn), eu, tu, Xn, Fr = N({}, Yn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ru, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Xn && (Xn && e.type === "mousemove" ? (eu = e.screenX - Xn.screenX, tu = e.screenY - Xn.screenY) : tu = eu = 0, Xn = e), eu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : tu;
  } }), yi = Ze(Fr), ac = N({}, Fr, { dataTransfer: 0 }), cc = Ze(ac), fc = N({}, Yn, { relatedTarget: 0 }), nu = Ze(fc), dc = N({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Ze(dc), mc = N({}, pn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hc = Ze(mc), vc = N({}, pn, { data: 0 }), gi = Ze(vc), yc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, gc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, wc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wc[e]) ? !!t[e] : !1;
  }
  function ru() {
    return kc;
  }
  var Sc = N({}, Yn, { key: function(e) {
    if (e.key) {
      var t = yc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ru, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), xc = Ze(Sc), Ec = N({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wi = Ze(Ec), _c = N({}, Yn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ru }), Cc = Ze(_c), Nc = N({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pc = Ze(Nc), Rc = N({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zc = Ze(Rc), Tc = [9, 13, 27, 32], lu = Q && "CompositionEvent" in window, Gn = null;
  Q && "documentMode" in document && (Gn = document.documentMode);
  var Lc = Q && "TextEvent" in window && !Gn, ki = Q && (!lu || Gn && 8 < Gn && 11 >= Gn), Si = " ", xi = !1;
  function Ei(e, t) {
    switch (e) {
      case "keyup":
        return Tc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _i(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var mn = !1;
  function Dc(e, t) {
    switch (e) {
      case "compositionend":
        return _i(t);
      case "keypress":
        return t.which !== 32 ? null : (xi = !0, Si);
      case "textInput":
        return e = t.data, e === Si && xi ? null : e;
      default:
        return null;
    }
  }
  function Oc(e, t) {
    if (mn) return e === "compositionend" || !lu && Ei(e, t) ? (e = hi(), Ir = ql = Ot = null, mn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ki && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ic = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ci(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ic[e.type] : t === "textarea";
  }
  function Ni(e, t, n, r) {
    Ko(r), t = $r(t, "onChange"), 0 < t.length && (n = new bl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Zn = null, Jn = null;
  function Mc(e) {
    Wi(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Io(t)) return e;
  }
  function jc(e, t) {
    if (e === "change") return t;
  }
  var Pi = !1;
  if (Q) {
    var uu;
    if (Q) {
      var ou = "oninput" in document;
      if (!ou) {
        var Ri = document.createElement("div");
        Ri.setAttribute("oninput", "return;"), ou = typeof Ri.oninput == "function";
      }
      uu = ou;
    } else uu = !1;
    Pi = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function zi() {
    Zn && (Zn.detachEvent("onpropertychange", Ti), Jn = Zn = null);
  }
  function Ti(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      Ni(t, Jn, e, Al(e)), Zo(Mc, t);
    }
  }
  function Fc(e, t, n) {
    e === "focusin" ? (zi(), Zn = t, Jn = n, Zn.attachEvent("onpropertychange", Ti)) : e === "focusout" && zi();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Jn);
  }
  function Ac(e, t) {
    if (e === "click") return Ur(t);
  }
  function Vc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Bc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var st = typeof Object.is == "function" ? Object.is : Bc;
  function qn(e, t) {
    if (st(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!A.call(t, l) || !st(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Li(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Di(e, t) {
    var n = Li(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Li(n);
    }
  }
  function Oi(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oi(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ii() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function $c(e) {
    var t = Ii(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oi(n.ownerDocument.documentElement, n)) {
      if (r !== null && iu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Di(n, u);
          var o = Di(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Hc = Q && "documentMode" in document && 11 >= document.documentMode, hn = null, su = null, bn = null, au = !1;
  function Mi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    au || hn == null || hn !== Sr(r) || (r = hn, "selectionStart" in r && iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bn && qn(bn, r) || (bn = r, r = $r(su, "onSelect"), 0 < r.length && (t = new bl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
  }
  function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vn = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, cu = {}, ji = {};
  Q && (ji = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
  function Vr(e) {
    if (cu[e]) return cu[e];
    if (!vn[e]) return e;
    var t = vn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ji) return cu[e] = t[n];
    return e;
  }
  var Fi = Vr("animationend"), Ui = Vr("animationiteration"), Ai = Vr("animationstart"), Vi = Vr("transitionend"), Bi = /* @__PURE__ */ new Map(), $i = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function It(e, t) {
    Bi.set(e, t), Z(t, [e]);
  }
  for (var fu = 0; fu < $i.length; fu++) {
    var du = $i[fu], Wc = du.toLowerCase(), Qc = du[0].toUpperCase() + du.slice(1);
    It(Wc, "on" + Qc);
  }
  It(Fi, "onAnimationEnd"), It(Ui, "onAnimationIteration"), It(Ai, "onAnimationStart"), It("dblclick", "onDoubleClick"), It("focusin", "onFocus"), It("focusout", "onBlur"), It(Vi, "onTransitionEnd"), te("onMouseEnter", ["mouseout", "mouseover"]), te("onMouseLeave", ["mouseout", "mouseover"]), te("onPointerEnter", ["pointerout", "pointerover"]), te("onPointerLeave", ["pointerout", "pointerover"]), Z("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Z("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Z("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Z("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Z("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Z("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Hi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Wa(r, t, void 0, e), e.currentTarget = null;
  }
  function Wi(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Hi(l, i, p), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Hi(l, i, p), u = s;
        }
      }
    }
    if (_r) throw e = Hl, _r = !1, Hl = null, e;
  }
  function oe(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Qi(t, e, 2, !1), n.add(r));
  }
  function pu(e, t, n) {
    var r = 0;
    t && (r |= 4), Qi(n, e, r, t);
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      e[Br] = !0, se.forEach(function(n) {
        n !== "selectionchange" && (Kc.has(n) || pu(n, !1, e), pu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || (t[Br] = !0, pu("selectionchange", !1, t));
    }
  }
  function Qi(e, t, n, r) {
    switch (mi(t)) {
      case 1:
        var l = oc;
        break;
      case 4:
        l = ic;
        break;
      default:
        l = Zl;
    }
    n = l.bind(null, t, n, e), l = void 0, !$l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function mu(e, t, n, r, l) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; i !== null; ) {
          if (o = Gt(i), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Zo(function() {
      var p = u, y = Al(n), g = [];
      e: {
        var h = Bi.get(e);
        if (h !== void 0) {
          var E = bl, P = e;
          switch (e) {
            case "keypress":
              if (Mr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = xc;
              break;
            case "focusin":
              P = "focus", E = nu;
              break;
            case "focusout":
              P = "blur", E = nu;
              break;
            case "beforeblur":
            case "afterblur":
              E = nu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = yi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Cc;
              break;
            case Fi:
            case Ui:
            case Ai:
              E = pc;
              break;
            case Vi:
              E = Pc;
              break;
            case "scroll":
              E = sc;
              break;
            case "wheel":
              E = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = wi;
          }
          var R = (t & 4) !== 0, ge = !R && e === "scroll", f = R ? h !== null ? h + "Capture" : null : h;
          R = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Fn(a, f), w != null && R.push(nr(a, w, d)))), ge) break;
            a = a.return;
          }
          0 < R.length && (h = new E(h, P, null, n, y), g.push({ event: h, listeners: R }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && n !== Ul && (P = n.relatedTarget || n.fromElement) && (Gt(P) || P[St])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (P = n.relatedTarget || n.toElement, E = p, P = P ? Gt(P) : null, P !== null && (ge = Xt(P), P !== ge || P.tag !== 5 && P.tag !== 6) && (P = null)) : (E = null, P = p), E !== P)) {
            if (R = yi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (R = wi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), ge = E == null ? h : wn(E), d = P == null ? h : wn(P), h = new R(w, a + "leave", E, n, y), h.target = ge, h.relatedTarget = d, w = null, Gt(y) === p && (R = new R(f, a + "enter", P, n, y), R.target = d, R.relatedTarget = ge, w = R), ge = w, E && P) t: {
              for (R = E, f = P, a = 0, d = R; d; d = yn(d)) a++;
              for (d = 0, w = f; w; w = yn(w)) d++;
              for (; 0 < a - d; ) R = yn(R), a--;
              for (; 0 < d - a; ) f = yn(f), d--;
              for (; a--; ) {
                if (R === f || f !== null && R === f.alternate) break t;
                R = yn(R), f = yn(f);
              }
              R = null;
            }
            else R = null;
            E !== null && Ki(g, h, E, R, !1), P !== null && ge !== null && Ki(g, ge, P, R, !0);
          }
        }
        e: {
          if (h = p ? wn(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var z = jc;
          else if (Ci(h)) if (Pi) z = Vc;
          else {
            z = Uc;
            var L = Fc;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (z = Ac);
          if (z && (z = z(e, p))) {
            Ni(g, z, n, y);
            break e;
          }
          L && L(e, h, p), e === "focusout" && (L = h._wrapperState) && L.controlled && h.type === "number" && Ol(h, "number", h.value);
        }
        switch (L = p ? wn(p) : window, e) {
          case "focusin":
            (Ci(L) || L.contentEditable === "true") && (hn = L, su = p, bn = null);
            break;
          case "focusout":
            bn = su = hn = null;
            break;
          case "mousedown":
            au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            au = !1, Mi(g, n, y);
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Mi(g, n, y);
        }
        var D;
        if (lu) e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
        else mn ? Ei(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
        I && (ki && n.locale !== "ko" && (mn || I !== "onCompositionStart" ? I === "onCompositionEnd" && mn && (D = hi()) : (Ot = y, ql = "value" in Ot ? Ot.value : Ot.textContent, mn = !0)), L = $r(p, I), 0 < L.length && (I = new gi(I, e, null, n, y), g.push({ event: I, listeners: L }), D ? I.data = D : (D = _i(n), D !== null && (I.data = D)))), (D = Lc ? Dc(e, n) : Oc(e, n)) && (p = $r(p, "onBeforeInput"), 0 < p.length && (y = new gi("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: p }), y.data = D));
      }
      Wi(g, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Fn(e, n), u != null && r.unshift(nr(e, u, l)), u = Fn(e, t), u != null && r.push(nr(e, u, l))), e = e.return;
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ki(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var i = n, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Fn(n, u), s != null && o.unshift(nr(n, s, i))) : l || (s = Fn(n, u), s != null && o.push(nr(n, s, i)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Yc = /\r\n?/g, Xc = /\u0000|\uFFFD/g;
  function Yi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yc, `
`).replace(Xc, "");
  }
  function Hr(e, t, n) {
    if (t = Yi(t), Yi(e) !== t && n) throw Error(m(425));
  }
  function Wr() {
  }
  var hu = null, vu = null;
  function yu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gu = typeof setTimeout == "function" ? setTimeout : void 0, Gc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xi = typeof Promise == "function" ? Promise : void 0, Zc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xi < "u" ? function(e) {
    return Xi.resolve(null).then(e).catch(Jc);
  } : gu;
  function Jc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wu(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Kn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Gi(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + gn, rr = "__reactProps$" + gn, St = "__reactContainer$" + gn, ku = "__reactEvents$" + gn, qc = "__reactListeners$" + gn, bc = "__reactHandles$" + gn;
  function Gt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[St] || n[vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gi(e); e !== null; ) {
          if (n = e[vt]) return n;
          e = Gi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function lr(e) {
    return e = e[vt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Su = [], kn = -1;
  function jt(e) {
    return { current: e };
  }
  function ie(e) {
    0 > kn || (e.current = Su[kn], Su[kn] = null, kn--);
  }
  function le(e, t) {
    kn++, Su[kn] = e.current, e.current = t;
  }
  var Ft = {}, Le = jt(Ft), Be = jt(!1), Zt = Ft;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function $e(e) {
    return e = e.childContextTypes, e != null;
  }
  function Kr() {
    ie(Be), ie(Le);
  }
  function Zi(e, t, n) {
    if (Le.current !== Ft) throw Error(m(168));
    le(Le, t), le(Be, n);
  }
  function Ji(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, re(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Zt = Le.current, le(Le, e), le(Be, Be.current), !0;
  }
  function qi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n ? (e = Ji(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, ie(Be), ie(Le), le(Le, e)) : ie(Be), le(Be, n);
  }
  var xt = null, Xr = !1, xu = !1;
  function bi(e) {
    xt === null ? xt = [e] : xt.push(e);
  }
  function ef(e) {
    Xr = !0, bi(e);
  }
  function Ut() {
    if (!xu && xt !== null) {
      xu = !0;
      var e = 0, t = b;
      try {
        var n = xt;
        for (b = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        xt = null, Xr = !1;
      } catch (l) {
        throw xt !== null && (xt = xt.slice(e + 1)), ti(Wl, Ut), l;
      } finally {
        b = t, xu = !1;
      }
    }
    return null;
  }
  var xn = [], En = 0, Gr = null, Zr = 0, et = [], tt = 0, Jt = null, Et = 1, _t = "";
  function qt(e, t) {
    xn[En++] = Zr, xn[En++] = Gr, Gr = e, Zr = t;
  }
  function es(e, t, n) {
    et[tt++] = Et, et[tt++] = _t, et[tt++] = Jt, Jt = e;
    var r = Et;
    e = _t;
    var l = 32 - it(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - it(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Et = 1 << 32 - it(t) + l | n << l | r, _t = u + e;
    } else Et = 1 << u | n << l | r, _t = e;
  }
  function Eu(e) {
    e.return !== null && (qt(e, 1), es(e, 1, 0));
  }
  function _u(e) {
    for (; e === Gr; ) Gr = xn[--En], xn[En] = null, Zr = xn[--En], xn[En] = null;
    for (; e === Jt; ) Jt = et[--tt], et[tt] = null, _t = et[--tt], et[tt] = null, Et = et[--tt], et[tt] = null;
  }
  var Je = null, qe = null, fe = !1, at = null;
  function ts(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = Mt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: Et, overflow: _t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, qe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Nu(e) {
    if (fe) {
      var t = qe;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (Cu(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = Je;
          t && ns(e, t) ? ts(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Je = e);
        }
      } else {
        if (Cu(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, fe = !1, Je = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Je = e;
  }
  function Jr(e) {
    if (e !== Je) return !1;
    if (!fe) return rs(e), fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yu(e.type, e.memoizedProps)), t && (t = qe)) {
      if (Cu(e)) throw ls(), Error(m(418));
      for (; t; ) ts(e, t), t = Mt(t.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Je ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = qe; e; ) e = Mt(e.nextSibling);
  }
  function _n() {
    qe = Je = null, fe = !1;
  }
  function Pu(e) {
    at === null ? at = [e] : at.push(e);
  }
  var tf = Ee.ReactCurrentBatchConfig;
  function ur(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function qr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function us(e) {
    var t = e._init;
    return t(e._payload);
  }
  function os(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Kt(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = wo(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var z = d.type;
      return z === Te ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Ve && us(z) === a.type) ? (w = l(a, d.props), w.ref = ur(f, a, d), w.return = f, w) : (w = xl(d.type, d.key, d.props, null, f.mode, w), w.ref = ur(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ko(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, z) {
      return a === null || a.tag !== 7 ? (a = on(d, f.mode, w, z), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = wo("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ye:
            return d = xl(a.type, a.key, a.props, null, f.mode, d), d.ref = ur(f, null, a), d.return = f, d;
          case Pe:
            return a = ko(a, f.mode, d), a.return = f, a;
          case Ve:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (In(a) || O(a)) return a = on(a, f.mode, d, null), a.return = f, a;
        qr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var z = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return z !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ye:
            return d.key === z ? s(f, a, d, w) : null;
          case Pe:
            return d.key === z ? p(f, a, d, w) : null;
          case Ve:
            return z = d._init, h(
              f,
              a,
              z(d._payload),
              w
            );
        }
        if (In(d) || O(d)) return z !== null ? null : y(f, a, d, w, null);
        qr(f, d);
      }
      return null;
    }
    function E(f, a, d, w, z) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, z);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ye:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, z);
          case Pe:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, z);
          case Ve:
            var L = w._init;
            return E(f, a, d, L(w._payload), z);
        }
        if (In(w) || O(w)) return f = f.get(d) || null, y(a, f, w, z, null);
        qr(a, w);
      }
      return null;
    }
    function P(f, a, d, w) {
      for (var z = null, L = null, D = a, I = a = 0, Ne = null; D !== null && I < d.length; I++) {
        D.index > I ? (Ne = D, D = null) : Ne = D.sibling;
        var G = h(f, D, d[I], w);
        if (G === null) {
          D === null && (D = Ne);
          break;
        }
        e && D && G.alternate === null && t(f, D), a = u(G, a, I), L === null ? z = G : L.sibling = G, L = G, D = Ne;
      }
      if (I === d.length) return n(f, D), fe && qt(f, I), z;
      if (D === null) {
        for (; I < d.length; I++) D = g(f, d[I], w), D !== null && (a = u(D, a, I), L === null ? z = D : L.sibling = D, L = D);
        return fe && qt(f, I), z;
      }
      for (D = r(f, D); I < d.length; I++) Ne = E(D, f, I, d[I], w), Ne !== null && (e && Ne.alternate !== null && D.delete(Ne.key === null ? I : Ne.key), a = u(Ne, a, I), L === null ? z = Ne : L.sibling = Ne, L = Ne);
      return e && D.forEach(function(Yt) {
        return t(f, Yt);
      }), fe && qt(f, I), z;
    }
    function R(f, a, d, w) {
      var z = O(d);
      if (typeof z != "function") throw Error(m(150));
      if (d = z.call(d), d == null) throw Error(m(151));
      for (var L = z = null, D = a, I = a = 0, Ne = null, G = d.next(); D !== null && !G.done; I++, G = d.next()) {
        D.index > I ? (Ne = D, D = null) : Ne = D.sibling;
        var Yt = h(f, D, G.value, w);
        if (Yt === null) {
          D === null && (D = Ne);
          break;
        }
        e && D && Yt.alternate === null && t(f, D), a = u(Yt, a, I), L === null ? z = Yt : L.sibling = Yt, L = Yt, D = Ne;
      }
      if (G.done) return n(
        f,
        D
      ), fe && qt(f, I), z;
      if (D === null) {
        for (; !G.done; I++, G = d.next()) G = g(f, G.value, w), G !== null && (a = u(G, a, I), L === null ? z = G : L.sibling = G, L = G);
        return fe && qt(f, I), z;
      }
      for (D = r(f, D); !G.done; I++, G = d.next()) G = E(D, f, I, G.value, w), G !== null && (e && G.alternate !== null && D.delete(G.key === null ? I : G.key), a = u(G, a, I), L === null ? z = G : L.sibling = G, L = G);
      return e && D.forEach(function(If) {
        return t(f, If);
      }), fe && qt(f, I), z;
    }
    function ge(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Te && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ye:
            e: {
              for (var z = d.key, L = a; L !== null; ) {
                if (L.key === z) {
                  if (z = d.type, z === Te) {
                    if (L.tag === 7) {
                      n(f, L.sibling), a = l(L, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (L.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Ve && us(z) === L.type) {
                    n(f, L.sibling), a = l(L, d.props), a.ref = ur(f, L, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === Te ? (a = on(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = xl(d.type, d.key, d.props, null, f.mode, w), w.ref = ur(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case Pe:
            e: {
              for (L = d.key; a !== null; ) {
                if (a.key === L) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = ko(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case Ve:
            return L = d._init, ge(f, a, L(d._payload), w);
        }
        if (In(d)) return P(f, a, d, w);
        if (O(d)) return R(f, a, d, w);
        qr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = wo(d, f.mode, w), a.return = f, f = a), o(f)) : n(f, a);
    }
    return ge;
  }
  var Cn = os(!0), is = os(!1), br = jt(null), el = null, Nn = null, Ru = null;
  function zu() {
    Ru = Nn = el = null;
  }
  function Tu(e) {
    var t = br.current;
    ie(br), e._currentValue = t;
  }
  function Lu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    el = e, Ru = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), e.firstContext = null);
  }
  function nt(e) {
    var t = e._currentValue;
    if (Ru !== e) if (e = { context: e, memoizedValue: t, next: null }, Nn === null) {
      if (el === null) throw Error(m(308));
      Nn = e, el.dependencies = { lanes: 0, firstContext: e };
    } else Nn = Nn.next = e;
    return t;
  }
  var bt = null;
  function Du(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Ou(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Nt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, H & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Yl(e, n);
    }
  }
  function cs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = o : u = u.next = o, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var h = i.lane, E = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var P = e, R = i;
            switch (h = t, E = n, R.tag) {
              case 1:
                if (P = R.payload, typeof P == "function") {
                  g = P.call(E, g, h);
                  break e;
                }
                g = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = R.payload, h = typeof P == "function" ? P.call(E, g, h) : P, h == null) break e;
                g = N({}, g, h);
                break e;
              case 2:
                At = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else E = { eventTime: E, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = E, s = g) : y = y.next = E, o |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      nn |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var or = {}, yt = jt(or), ir = jt(or), sr = jt(or);
  function en(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Iu(e, t) {
    switch (le(sr, t), le(ir, e), le(yt, or), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ml(t, e);
    }
    ie(yt), le(yt, t);
  }
  function Rn() {
    ie(yt), ie(ir), ie(sr);
  }
  function ds(e) {
    en(sr.current);
    var t = en(yt.current), n = Ml(t, e.type);
    t !== n && (le(ir, e), le(yt, n));
  }
  function Mu(e) {
    ir.current === e && (ie(yt), ie(ir));
  }
  var pe = jt(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ju = [];
  function Fu() {
    for (var e = 0; e < ju.length; e++) ju[e]._workInProgressVersionPrimary = null;
    ju.length = 0;
  }
  var ll = Ee.ReactCurrentDispatcher, Uu = Ee.ReactCurrentBatchConfig, tn = 0, me = null, ke = null, _e = null, ul = !1, ar = !1, cr = 0, nf = 0;
  function De() {
    throw Error(m(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!st(e[n], t[n])) return !1;
    return !0;
  }
  function Vu(e, t, n, r, l, u) {
    if (tn = u, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? of : sf, e = n(r, l), ar) {
      u = 0;
      do {
        if (ar = !1, cr = 0, 25 <= u) throw Error(m(301));
        u += 1, _e = ke = null, t.updateQueue = null, ll.current = af, e = n(r, l);
      } while (ar);
    }
    if (ll.current = sl, t = ke !== null && ke.next !== null, tn = 0, _e = ke = me = null, ul = !1, t) throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = cr !== 0;
    return cr = 0, e;
  }
  function gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return _e === null ? me.memoizedState = _e = e : _e = _e.next = e, _e;
  }
  function rt() {
    if (ke === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = _e === null ? me.memoizedState : _e.next;
    if (t !== null) _e = t, ke = e;
    else {
      if (e === null) throw Error(m(310));
      ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, _e === null ? me.memoizedState = _e = e : _e = _e.next = e;
    }
    return _e;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $u(e) {
    var t = rt(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = ke, l = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((tn & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, me.lanes |= y, nn |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, st(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, me.lanes |= u, nn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hu(e) {
    var t = rt(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      st(u, t.memoizedState) || (He = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ps() {
  }
  function ms(e, t) {
    var n = me, r = rt(), l = t(), u = !st(r.memoizedState, l);
    if (u && (r.memoizedState = l, He = !0), r = r.queue, Wu(ys.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || _e !== null && _e.memoizedState.tag & 1) {
      if (n.flags |= 2048, dr(9, vs.bind(null, n, r, l, t), void 0, null), Ce === null) throw Error(m(349));
      tn & 30 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, gs(t) && ws(e);
  }
  function ys(e, t, n) {
    return n(function() {
      gs(t) && ws(e);
    });
  }
  function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !st(e, n);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var t = Ct(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function ks(e) {
    var t = gt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = uf.bind(null, me, e), [t.memoizedState, e];
  }
  function dr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ss() {
    return rt().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = gt();
    me.flags |= e, l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function il(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ke !== null) {
      var o = ke.memoizedState;
      if (u = o.destroy, r !== null && Au(r, o.deps)) {
        l.memoizedState = dr(t, n, u, r);
        return;
      }
    }
    me.flags |= e, l.memoizedState = dr(1 | t, n, u, r);
  }
  function xs(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Wu(e, t) {
    return il(2048, 8, e, t);
  }
  function Es(e, t) {
    return il(4, 2, e, t);
  }
  function _s(e, t) {
    return il(4, 4, e, t);
  }
  function Cs(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ns(e, t, n) {
    return n = n != null ? n.concat([e]) : null, il(4, 4, Cs.bind(null, t, e), n);
  }
  function Qu() {
  }
  function Ps(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Rs(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zs(e, t, n) {
    return tn & 21 ? (st(n, t) || (n = ui(), me.lanes |= n, nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n);
  }
  function rf(e, t) {
    var n = b;
    b = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Uu.transition;
    Uu.transition = {};
    try {
      e(!1), t();
    } finally {
      b = n, Uu.transition = r;
    }
  }
  function Ts() {
    return rt().memoizedState;
  }
  function lf(e, t, n) {
    var r = Wt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ls(e)) Ds(t, n);
    else if (n = ss(e, t, n, r), n !== null) {
      var l = Ae();
      pt(n, e, r, l), Os(n, t, r);
    }
  }
  function uf(e, t, n) {
    var r = Wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Ds(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, i = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, st(i, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Du(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = ss(e, t, l, r), n !== null && (l = Ae(), pt(n, e, r, l), Os(n, t, r));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function Ds(e, t) {
    ar = ul = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Os(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Yl(e, n);
    }
  }
  var sl = { readContext: nt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, of = { readContext: nt, useCallback: function(e, t) {
    return gt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nt, useEffect: xs, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(
      4194308,
      4,
      Cs.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ol(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ol(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = gt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = gt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lf.bind(null, me, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = gt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ks, useDebugValue: Qu, useDeferredValue: function(e) {
    return gt().memoizedState = e;
  }, useTransition: function() {
    var e = ks(!1), t = e[0];
    return e = rf.bind(null, e[1]), gt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = me, l = gt();
    if (fe) {
      if (n === void 0) throw Error(m(407));
      n = n();
    } else {
      if (n = t(), Ce === null) throw Error(m(349));
      tn & 30 || hs(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, xs(ys.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, dr(9, vs.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = gt(), t = Ce.identifierPrefix;
    if (fe) {
      var n = _t, r = Et;
      n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = nf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, sf = {
    readContext: nt,
    useCallback: Ps,
    useContext: nt,
    useEffect: Wu,
    useImperativeHandle: Ns,
    useInsertionEffect: Es,
    useLayoutEffect: _s,
    useMemo: Rs,
    useReducer: $u,
    useRef: Ss,
    useState: function() {
      return $u(fr);
    },
    useDebugValue: Qu,
    useDeferredValue: function(e) {
      var t = rt();
      return zs(t, ke.memoizedState, e);
    },
    useTransition: function() {
      var e = $u(fr)[0], t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: ms,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, af = { readContext: nt, useCallback: Ps, useContext: nt, useEffect: Wu, useImperativeHandle: Ns, useInsertionEffect: Es, useLayoutEffect: _s, useMemo: Rs, useReducer: Hu, useRef: Ss, useState: function() {
    return Hu(fr);
  }, useDebugValue: Qu, useDeferredValue: function(e) {
    var t = rt();
    return ke === null ? t.memoizedState = e : zs(t, ke.memoizedState, e);
  }, useTransition: function() {
    var e = Hu(fr)[0], t = rt().memoizedState;
    return [e, t];
  }, useMutableSource: ps, useSyncExternalStore: ms, useId: Ts, unstable_isNewReconciler: !1 };
  function ct(e, t) {
    if (e && e.defaultProps) {
      t = N({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ku(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : N({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = Wt(e), u = Nt(r, l);
    u.payload = t, n != null && (u.callback = n), t = Vt(e, u, l), t !== null && (pt(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = Wt(e), u = Nt(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Vt(e, u, l), t !== null && (pt(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ae(), r = Wt(e), l = Nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Vt(e, l, r), t !== null && (pt(t, e, r, n), tl(t, e, r));
  } };
  function Is(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, u) : !0;
  }
  function Ms(e, t, n) {
    var r = !1, l = Ft, u = t.contextType;
    return typeof u == "object" && u !== null ? u = nt(u) : (l = $e(t) ? Zt : Le.current, r = t.contextTypes, u = (r = r != null) ? Sn(e, l) : Ft), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function js(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Yu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ou(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = nt(u) : (u = $e(t) ? Zt : Le.current, l.context = Sn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ku(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Y(r), r = r.return;
      while (r);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Xu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      vl || (vl = !0, co = r), Gu(e, t);
    }, n;
  }
  function Us(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Gu(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Gu(e, t), typeof r != "function" && ($t === null ? $t = /* @__PURE__ */ new Set([this]) : $t.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function As(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = _f.bind(null, e, t, n), t.then(e, e));
  }
  function Vs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Vt(n, t, 1))), n.lanes |= 1), e);
  }
  var ff = Ee.ReactCurrentOwner, He = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function $s(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return Pn(t, l), r = Vu(e, t, n, r, u, l), n = Bu(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (fe && n && Eu(t), t.flags |= 1, Ue(e, t, r, l), t.child);
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !go(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Ws(e, t, u, r, l)) : (e = xl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref) return Pt(e, t, l);
    }
    return t.flags |= 1, e = Kt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (qn(u, r) && e.ref === t.ref) if (He = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (He = !0);
      else return t.lanes = e.lanes, Pt(e, t, l);
    }
    return Zu(e, t, n, r, l);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(Ln, be), be |= n;
    else {
      if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(Ln, be), be |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, le(Ln, be), be |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, le(Ln, be), be |= r;
    return Ue(e, t, l, n), t.child;
  }
  function Ks(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Zu(e, t, n, r, l) {
    var u = $e(n) ? Zt : Le.current;
    return u = Sn(t, u), Pn(t, l), n = Vu(e, t, n, r, u, l), r = Bu(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (fe && r && Eu(t), t.flags |= 1, Ue(e, t, n, l), t.child);
  }
  function Ys(e, t, n, r, l) {
    if ($e(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if (Pn(t, l), t.stateNode === null) fl(e, t), Ms(t, n, r), Yu(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, i = t.memoizedProps;
      o.props = i;
      var s = o.context, p = n.contextType;
      typeof p == "object" && p !== null ? p = nt(p) : (p = $e(n) ? Zt : Le.current, p = Sn(t, p));
      var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && js(t, o, r, p), At = !1;
      var h = t.memoizedState;
      o.state = h, nl(t, r, o, l), s = t.memoizedState, i !== r || h !== s || Be.current || At ? (typeof y == "function" && (Ku(t, n, y, r), s = t.memoizedState), (i = At || Is(t, n, i, r, h, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, as(e, t), i = t.memoizedProps, p = t.type === t.elementType ? i : ct(t.type, i), o.props = p, g = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = nt(s) : (s = $e(n) ? Zt : Le.current, s = Sn(t, s));
      var E = n.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || h !== s) && js(t, o, r, s), At = !1, h = t.memoizedState, o.state = h, nl(t, r, o, l);
      var P = t.memoizedState;
      i !== g || h !== P || Be.current || At ? (typeof E == "function" && (Ku(t, n, E, r), P = t.memoizedState), (p = At || Is(t, n, p, r, h, P, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, P, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), o.props = r, o.state = P, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ju(e, t, n, r, u, l);
  }
  function Ju(e, t, n, r, l, u) {
    Ks(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && qi(t, n, !1), Pt(e, t, u);
    r = t.stateNode, ff.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Cn(t, e.child, null, u), t.child = Cn(t, null, i, u)) : Ue(e, t, i, u), t.memoizedState = r.state, l && qi(t, n, !0), t.child;
  }
  function Xs(e) {
    var t = e.stateNode;
    t.pendingContext ? Zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zi(e, t.context, !1), Iu(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return _n(), Pu(l), t.flags |= 256, Ue(e, t, n, r), t.child;
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = pe.current, u = !1, o = (t.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), le(pe, l & 1), e === null)
      return Nu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = El(o, r, 0, null), e = on(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = bu(n), t.memoizedState = qu, e) : eo(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return df(e, t, o, r, i, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Kt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Kt(i, u) : (u = on(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? bu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = qu, r;
    }
    return u = e.child, e = u.sibling, r = Kt(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function eo(e, t) {
    return t = El({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cl(e, t, n, r) {
    return r !== null && Pu(r), Cn(t, e.child, null, n), e = eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function df(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Xu(Error(m(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), u = on(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && Cn(t, e.child, null, o), t.child.memoizedState = bu(o), t.memoizedState = qu, u);
    if (!(t.mode & 1)) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(m(419)), r = Xu(u, r, void 0), cl(e, t, o, r);
    }
    if (i = (o & e.childLanes) !== 0, He || i) {
      if (r = Ce, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ct(e, l), pt(r, e, l, -1));
      }
      return yo(), r = Xu(Error(m(421))), cl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cf.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, qe = Mt(l.nextSibling), Je = t, fe = !0, at = null, e !== null && (et[tt++] = Et, et[tt++] = _t, et[tt++] = Jt, Et = e.id, _t = e.overflow, Jt = t), t = eo(t, r.children), t.flags |= 4096, t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Lu(e.return, t, n);
  }
  function to(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ue(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
        else if (e.tag === 19) Js(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (le(pe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), to(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && rl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        to(t, !0, n, null, u);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        Xs(t), _n();
        break;
      case 5:
        ds(t);
        break;
      case 1:
        $e(t.type) && Yr(t);
        break;
      case 4:
        Iu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        le(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (le(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zs(e, t, n) : (le(pe, pe.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
        le(pe, pe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), le(pe, pe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Qs(e, t, n);
    }
    return Pt(e, t, n);
  }
  var bs, no, ea, ta;
  bs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, no = function() {
  }, ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, en(yt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Ll(e, l), r = Ll(e, r), u = [];
          break;
        case "select":
          l = N({}, l, { value: void 0 }), r = N({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Il(e, l), r = Il(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      jl(n, r);
      var o;
      n = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (ee.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (u || (u = []), u.push(
          p,
          n
        )), n = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (ee.hasOwnProperty(p) ? (s != null && p === "onScroll" && oe("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      n && (u = u || []).push("style", n);
      var p = u;
      (t.updateQueue = p) && (t.flags |= 4);
    }
  }, ta = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function pr(e, t) {
    if (!fe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function mf(e, t, n) {
    var r = t.pendingProps;
    switch (_u(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Oe(t), null;
      case 1:
        return $e(t.type) && Kr(), Oe(t), null;
      case 3:
        return r = t.stateNode, Rn(), ie(Be), ie(Le), Fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (mo(at), at = null))), no(e, t), Oe(t), null;
      case 5:
        Mu(t);
        var l = en(sr.current);
        if (n = t.type, e !== null && t.stateNode != null) ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return Oe(t), null;
          }
          if (e = en(yt.current), Jr(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[vt] = t, r[rr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                oe("cancel", r), oe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) oe(er[l], r);
                break;
              case "source":
                oe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  r
                ), oe("load", r);
                break;
              case "details":
                oe("toggle", r);
                break;
              case "input":
                Mo(r, u), oe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, oe("invalid", r);
                break;
              case "textarea":
                Uo(r, u), oe("invalid", r);
            }
            jl(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Hr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : ee.hasOwnProperty(o) && i != null && o === "onScroll" && oe("scroll", r);
            }
            switch (n) {
              case "input":
                kr(r), Fo(r, u, !0);
                break;
              case "textarea":
                kr(r), Vo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Wr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[vt] = t, e[rr] = r, bs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Fl(n, r), n) {
                case "dialog":
                  oe("cancel", e), oe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  oe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) oe(er[l], e);
                  l = r;
                  break;
                case "source":
                  oe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  oe(
                    "error",
                    e
                  ), oe("load", e), l = r;
                  break;
                case "details":
                  oe("toggle", e), l = r;
                  break;
                case "input":
                  Mo(e, r), l = Ll(e, r), oe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = N({}, r, { value: void 0 }), oe("invalid", e);
                  break;
                case "textarea":
                  Uo(e, r), l = Il(e, r), oe("invalid", e);
                  break;
                default:
                  l = r;
              }
              jl(n, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Wo(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $o(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mn(e, s) : typeof s == "number" && Mn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ee.hasOwnProperty(u) ? s != null && u === "onScroll" && oe("scroll", e) : s != null && ae(e, u, s, o));
              }
              switch (n) {
                case "input":
                  kr(e), Fo(e, r, !1);
                  break;
                case "textarea":
                  kr(e), Vo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + q(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? an(e, !!r.multiple, u, !1) : r.defaultValue != null && an(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (n = en(sr.current), en(yt.current), Jr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (u = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (ie(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (fe && qe !== null && t.mode & 1 && !(t.flags & 128)) ls(), _n(), t.flags |= 98560, u = !1;
          else if (u = Jr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[vt] = t;
            } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Oe(t), u = !1;
          } else at !== null && (mo(at), at = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : yo())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return Rn(), no(e, t), e === null && tr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return Tu(t.type._context), Oe(t), null;
      case 17:
        return $e(t.type) && Kr(), Oe(t), null;
      case 19:
        if (ie(pe), u = t.memoizedState, u === null) return Oe(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) pr(u, !1);
        else {
          if (Se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (o = rl(e), o !== null) {
              for (t.flags |= 128, pr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return le(pe, pe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ye() > Dn && (t.flags |= 128, r = !0, pr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = rl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !fe) return Oe(t), null;
          } else 2 * ye() - u.renderingStartTime > Dn && n !== 1073741824 && (t.flags |= 128, r = !0, pr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ye(), t.sibling = null, n = pe.current, le(pe, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return vo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? be & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function hf(e, t) {
    switch (_u(t), t.tag) {
      case 1:
        return $e(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(), ie(Be), ie(Le), Fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Mu(t), null;
      case 13:
        if (ie(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          _n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ie(pe), null;
      case 4:
        return Rn(), null;
      case 10:
        return Tu(t.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1, Ie = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ve(e, t, r);
    }
    else n.current = null;
  }
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      ve(e, t, r);
    }
  }
  var na = !1;
  function yf(e, t) {
    if (hu = Dr, e = Ii(), iu(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
          t: for (; ; ) {
            for (var E; g !== n || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (E = g.firstChild) !== null; )
              h = g, g = E;
            for (; ; ) {
              if (g === e) break t;
              if (h === n && ++p === l && (i = o), h === u && ++y === r && (s = o), (E = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = E;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vu = { focusedElem: e, selectionRange: n }, Dr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
    else for (; _ !== null; ) {
      t = _;
      try {
        var P = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (P !== null) {
              var R = P.memoizedProps, ge = P.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? R : ct(t.type, R), ge);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = t.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        ve(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, _ = e;
        break;
      }
      _ = t.return;
    }
    return P = na, na = !1, P;
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && ro(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ra(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ra(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[rr], delete t[ku], delete t[qc], delete t[bc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ua(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null)) for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), e = e.sibling;
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), e = e.sibling;
  }
  var Re = null, ft = !1;
  function Bt(e, t, n) {
    for (n = n.child; n !== null; ) oa(e, t, n), n = n.sibling;
  }
  function oa(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function") try {
      ht.onCommitFiberUnmount(Nr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ie || Tn(n, t);
      case 6:
        var r = Re, l = ft;
        Re = null, Bt(e, t, n), Re = r, ft = l, Re !== null && (ft ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
      case 18:
        Re !== null && (ft ? (e = Re, n = n.stateNode, e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n), Kn(e)) : wu(Re, n.stateNode));
        break;
      case 4:
        r = Re, l = ft, Re = n.stateNode.containerInfo, ft = !0, Bt(e, t, n), Re = r, ft = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && (u & 2 || u & 4) && ro(n, t, o), l = l.next;
          } while (l !== r);
        }
        Bt(e, t, n);
        break;
      case 1:
        if (!Ie && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          ve(n, t, i);
        }
        Bt(e, t, n);
        break;
      case 21:
        Bt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Bt(e, t, n), Ie = r) : Bt(e, t, n);
        break;
      default:
        Bt(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vf()), t.forEach(function(r) {
        var l = Nf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function dt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              Re = i.stateNode, ft = !1;
              break e;
            case 3:
              Re = i.stateNode.containerInfo, ft = !0;
              break e;
            case 4:
              Re = i.stateNode.containerInfo, ft = !0;
              break e;
          }
          i = i.return;
        }
        if (Re === null) throw Error(m(160));
        oa(u, o, l), Re = null, ft = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        ve(l, t, p);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sa(t, e), t = t.sibling;
  }
  function sa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dt(t, e), wt(e), r & 4) {
          try {
            mr(3, e, e.return), pl(3, e);
          } catch (R) {
            ve(e, e.return, R);
          }
          try {
            mr(5, e, e.return);
          } catch (R) {
            ve(e, e.return, R);
          }
        }
        break;
      case 1:
        dt(t, e), wt(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (dt(t, e), wt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mn(l, "");
          } catch (R) {
            ve(e, e.return, R);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && jo(l, u), Fl(i, o);
            var p = Fl(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? Wo(l, g) : y === "dangerouslySetInnerHTML" ? $o(l, g) : y === "children" ? Mn(l, g) : ae(l, y, g, p);
            }
            switch (i) {
              case "input":
                Dl(l, u);
                break;
              case "textarea":
                Ao(l, u);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var E = u.value;
                E != null ? an(l, !!u.multiple, E, !1) : h !== !!u.multiple && (u.defaultValue != null ? an(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : an(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[rr] = u;
          } catch (R) {
            ve(e, e.return, R);
          }
        }
        break;
      case 6:
        if (dt(t, e), wt(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (R) {
            ve(e, e.return, R);
          }
        }
        break;
      case 3:
        if (dt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (R) {
          ve(e, e.return, R);
        }
        break;
      case 4:
        dt(t, e), wt(e);
        break;
      case 13:
        dt(t, e), wt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ao = ye())), r & 4 && ia(e);
        break;
      case 22:
        if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (p = Ie) || y, dt(t, e), Ie = p) : dt(t, e), wt(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (_ = e, y = e.child; y !== null; ) {
            for (g = _ = y; _ !== null; ) {
              switch (h = _, E = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mr(4, h, h.return);
                  break;
                case 1:
                  Tn(h, h.return);
                  var P = h.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (R) {
                      ve(r, n, R);
                    }
                  }
                  break;
                case 5:
                  Tn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(g);
                    continue;
                  }
              }
              E !== null ? (E.return = h, _ = E) : fa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Ho("display", o));
                } catch (R) {
                  ve(e, e.return, R);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (R) {
                ve(e, e.return, R);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        dt(t, e), wt(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        dt(
          t,
          e
        ), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (la(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mn(l, ""), r.flags &= -33);
            var u = ua(e);
            oo(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = ua(e);
            uo(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ve(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gf(e, t, n) {
    _ = e, aa(e);
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Ie;
          i = dl;
          var p = Ie;
          if (dl = o, (Ie = s) && !p) for (_ = l; _ !== null; ) o = _, s = o.child, o.tag === 22 && o.memoizedState !== null ? da(l) : s !== null ? (s.return = o, _ = s) : da(l);
          for (; u !== null; ) _ = u, aa(u), u = u.sibling;
          _ = l, dl = i, Ie = p;
        }
        ca(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, _ = u) : ca(e);
    }
  }
  function ca(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && fs(t, u, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                fs(t, o, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && Kn(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          Ie || t.flags & 512 && lo(t);
        } catch (h) {
          ve(t, t.return, h);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function fa(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function da(e) {
    for (; _ !== null; ) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              ve(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ve(t, l, s);
              }
            }
            var u = t.return;
            try {
              lo(t);
            } catch (s) {
              ve(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (s) {
              ve(t, o, s);
            }
        }
      } catch (s) {
        ve(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, _ = i;
        break;
      }
      _ = t.return;
    }
  }
  var wf = Math.ceil, ml = Ee.ReactCurrentDispatcher, io = Ee.ReactCurrentOwner, lt = Ee.ReactCurrentBatchConfig, H = 0, Ce = null, we = null, ze = 0, be = 0, Ln = jt(0), Se = 0, hr = null, nn = 0, hl = 0, so = 0, vr = null, We = null, ao = 0, Dn = 1 / 0, Rt = null, vl = !1, co = null, $t = null, yl = !1, Ht = null, gl = 0, yr = 0, fo = null, wl = -1, kl = 0;
  function Ae() {
    return H & 6 ? ye() : wl !== -1 ? wl : wl = ye();
  }
  function Wt(e) {
    return e.mode & 1 ? H & 2 && ze !== 0 ? ze & -ze : tf.transition !== null ? (kl === 0 && (kl = ui()), kl) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mi(e.type)), e) : 1;
  }
  function pt(e, t, n, r) {
    if (50 < yr) throw yr = 0, fo = null, Error(m(185));
    Bn(e, n, r), (!(H & 2) || e !== Ce) && (e === Ce && (!(H & 2) && (hl |= n), Se === 4 && Qt(e, ze)), Qe(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Dn = ye() + 500, Xr && Ut()));
  }
  function Qe(e, t) {
    var n = e.callbackNode;
    tc(e, t);
    var r = zr(e, e === Ce ? ze : 0);
    if (r === 0) n !== null && ni(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ni(n), t === 1) e.tag === 0 ? ef(ma.bind(null, e)) : bi(ma.bind(null, e)), Zc(function() {
        !(H & 6) && Ut();
      }), n = null;
      else {
        switch (oi(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = ri;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = li;
            break;
          default:
            n = Cr;
        }
        n = xa(n, pa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pa(e, t) {
    if (wl = -1, kl = 0, H & 6) throw Error(m(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = zr(e, e === Ce ? ze : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var u = va();
      (Ce !== e || ze !== t) && (Rt = null, Dn = ye() + 500, ln(e, t));
      do
        try {
          xf();
          break;
        } catch (i) {
          ha(e, i);
        }
      while (!0);
      zu(), ml.current = u, H = l, we !== null ? t = 0 : (Ce = null, ze = 0, t = Se);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ql(e), l !== 0 && (r = l, t = po(e, l))), t === 1) throw n = hr, ln(e, 0), Qt(e, r), Qe(e, ye()), n;
      if (t === 6) Qt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !kf(l) && (t = Sl(e, r), t === 2 && (u = Ql(e), u !== 0 && (r = u, t = po(e, u))), t === 1)) throw n = hr, ln(e, 0), Qt(e, r), Qe(e, ye()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, We, Rt);
            break;
          case 3:
            if (Qt(e, r), (r & 130023424) === r && (t = ao + 500 - ye(), 10 < t)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ae(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = gu(un.bind(null, e, We, Rt), t);
              break;
            }
            un(e, We, Rt);
            break;
          case 4:
            if (Qt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - it(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = gu(un.bind(null, e, We, Rt), r);
              break;
            }
            un(e, We, Rt);
            break;
          case 5:
            un(e, We, Rt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Qe(e, ye()), e.callbackNode === n ? pa.bind(null, e) : null;
  }
  function po(e, t) {
    var n = vr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = We, We = n, t !== null && mo(t)), e;
  }
  function mo(e) {
    We === null ? We = e : We.push.apply(We, e);
  }
  function kf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!st(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (t &= ~so, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - it(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ma(e) {
    if (H & 6) throw Error(m(327));
    On();
    var t = zr(e, 0);
    if (!(t & 1)) return Qe(e, ye()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && (t = r, n = po(e, r));
    }
    if (n === 1) throw n = hr, ln(e, 0), Qt(e, t), Qe(e, ye()), n;
    if (n === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, We, Rt), Qe(e, ye()), null;
  }
  function ho(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      H = n, H === 0 && (Dn = ye() + 500, Xr && Ut());
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && !(H & 6) && On();
    var t = H;
    H |= 1;
    var n = lt.transition, r = b;
    try {
      if (lt.transition = null, b = 1, e) return e();
    } finally {
      b = r, lt.transition = n, H = t, !(H & 6) && Ut();
    }
  }
  function vo() {
    be = Ln.current, ie(Ln);
  }
  function ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Gc(n)), we !== null) for (n = we.return; n !== null; ) {
      var r = n;
      switch (_u(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Kr();
          break;
        case 3:
          Rn(), ie(Be), ie(Le), Fu();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          ie(pe);
          break;
        case 19:
          ie(pe);
          break;
        case 10:
          Tu(r.type._context);
          break;
        case 22:
        case 23:
          vo();
      }
      n = n.return;
    }
    if (Ce = e, we = e = Kt(e.current, null), ze = be = t, Se = 0, hr = null, so = hl = nn = 0, We = vr = null, bt !== null) {
      for (t = 0; t < bt.length; t++) if (n = bt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        n.pending = r;
      }
      bt = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = we;
      try {
        if (zu(), ll.current = sl, ul) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ul = !1;
        }
        if (tn = 0, _e = ke = me = null, ar = !1, cr = 0, io.current = null, n === null || n.return === null) {
          Se = 1, hr = t, we = null;
          break;
        }
        e: {
          var u = e, o = n.return, i = n, s = t;
          if (t = ze, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = Vs(o);
            if (E !== null) {
              E.flags &= -257, Bs(E, o, i, u, t), E.mode & 1 && As(u, p, t), t = E, s = p;
              var P = t.updateQueue;
              if (P === null) {
                var R = /* @__PURE__ */ new Set();
                R.add(s), t.updateQueue = R;
              } else P.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                As(u, p, t), yo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (fe && i.mode & 1) {
            var ge = Vs(o);
            if (ge !== null) {
              !(ge.flags & 65536) && (ge.flags |= 256), Bs(ge, o, i, u, t), Pu(zn(s, i));
              break e;
            }
          }
          u = s = zn(s, i), Se !== 4 && (Se = 2), vr === null ? vr = [u] : vr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var f = Fs(u, s, t);
                cs(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && ($t === null || !$t.has(d)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var w = Us(u, i, t);
                  cs(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ga(n);
      } catch (z) {
        t = z, we === n && n !== null && (we = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = ml.current;
    return ml.current = sl, e === null ? sl : e;
  }
  function yo() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4), Ce === null || !(nn & 268435455) && !(hl & 268435455) || Qt(Ce, ze);
  }
  function Sl(e, t) {
    var n = H;
    H |= 2;
    var r = va();
    (Ce !== e || ze !== t) && (Rt = null, ln(e, t));
    do
      try {
        Sf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if (zu(), H = n, ml.current = r, we !== null) throw Error(m(261));
    return Ce = null, ze = 0, Se;
  }
  function Sf() {
    for (; we !== null; ) ya(we);
  }
  function xf() {
    for (; we !== null && !Ka(); ) ya(we);
  }
  function ya(e) {
    var t = Sa(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, t === null ? ga(e) : we = t, io.current = null;
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = hf(n, t), n !== null) {
          n.flags &= 32767, we = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Se = 6, we = null;
          return;
        }
      } else if (n = mf(n, t, be), n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function un(e, t, n) {
    var r = b, l = lt.transition;
    try {
      lt.transition = null, b = 1, Ef(e, t, n, r);
    } finally {
      lt.transition = l, b = r;
    }
    return null;
  }
  function Ef(e, t, n, r) {
    do
      On();
    while (Ht !== null);
    if (H & 6) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (nc(e, u), e === Ce && (we = Ce = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yl || (yl = !0, xa(Cr, function() {
      return On(), null;
    })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
      u = lt.transition, lt.transition = null;
      var o = b;
      b = 1;
      var i = H;
      H |= 4, io.current = null, yf(e, n), sa(n, e), $c(vu), Dr = !!hu, vu = hu = null, e.current = n, gf(n), Ya(), H = i, b = o, lt.transition = u;
    } else e.current = n;
    if (yl && (yl = !1, Ht = e, gl = l), u = e.pendingLanes, u === 0 && ($t = null), Za(n.stateNode), Qe(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw vl = !1, e = co, co = null, e;
    return gl & 1 && e.tag !== 0 && On(), u = e.pendingLanes, u & 1 ? e === fo ? yr++ : (yr = 0, fo = e) : yr = 0, Ut(), null;
  }
  function On() {
    if (Ht !== null) {
      var e = oi(gl), t = lt.transition, n = b;
      try {
        if (lt.transition = null, b = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, gl = 0, H & 6) throw Error(m(331));
          var l = H;
          for (H |= 4, _ = e.current; _ !== null; ) {
            var u = _, o = u.child;
            if (_.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (_ = p; _ !== null; ) {
                    var y = _;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, _ = g;
                    else for (; _ !== null; ) {
                      y = _;
                      var h = y.sibling, E = y.return;
                      if (ra(y), y === p) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = E, _ = h;
                        break;
                      }
                      _ = E;
                    }
                  }
                }
                var P = u.alternate;
                if (P !== null) {
                  var R = P.child;
                  if (R !== null) {
                    P.child = null;
                    do {
                      var ge = R.sibling;
                      R.sibling = null, R = ge;
                    } while (R !== null);
                  }
                }
                _ = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null) o.return = u, _ = o;
            else e: for (; _ !== null; ) {
              if (u = _, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  mr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, _ = f;
                break e;
              }
              _ = u.return;
            }
          }
          var a = e.current;
          for (_ = a; _ !== null; ) {
            o = _;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) d.return = o, _ = d;
            else e: for (o = a; _ !== null; ) {
              if (i = _, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pl(9, i);
                }
              } catch (z) {
                ve(i, i.return, z);
              }
              if (i === o) {
                _ = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, _ = w;
                break e;
              }
              _ = i.return;
            }
          }
          if (H = l, Ut(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
            ht.onPostCommitFiberRoot(Nr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        b = n, lt.transition = t;
      }
    }
    return !1;
  }
  function wa(e, t, n) {
    t = zn(n, t), t = Fs(e, t, 1), e = Vt(e, t, 1), t = Ae(), e !== null && (Bn(e, 1, t), Qe(e, t));
  }
  function ve(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
          e = zn(n, e), e = Us(t, e, 1), t = Vt(t, e, 1), e = Ae(), t !== null && (Bn(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function _f(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (ze & n) === n && (Se === 4 || Se === 3 && (ze & 130023424) === ze && 500 > ye() - ao ? ln(e, 0) : so |= n), Qe(e, t);
  }
  function ka(e, t) {
    t === 0 && (e.mode & 1 ? (t = Rr, Rr <<= 1, !(Rr & 130023424) && (Rr = 4194304)) : t = 1);
    var n = Ae();
    e = Ct(e, t), e !== null && (Bn(e, t, n), Qe(e, n));
  }
  function Cf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ka(e, n);
  }
  function Nf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), ka(e, n);
  }
  var Sa;
  Sa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return He = !1, pf(e, t, n);
      He = !!(e.flags & 131072);
    }
    else He = !1, fe && t.flags & 1048576 && es(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = Sn(t, Le.current);
        Pn(t, n), l = Vu(null, t, r, e, l, n);
        var u = Bu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (u = !0, Yr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ou(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Yu(t, r, e, n), t = Ju(null, t, r, !0, u, n)) : (t.tag = 0, fe && u && Eu(t), Ue(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Rf(r), e = ct(r, e), l) {
            case 0:
              t = Zu(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = $s(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), Zu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), Ys(e, t, r, l, n);
      case 3:
        e: {
          if (Xs(t), e === null) throw Error(m(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, as(e, t), nl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = zn(Error(m(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(m(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (qe = Mt(t.stateNode.containerInfo.firstChild), Je = t, fe = !0, at = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_n(), r === l) {
              t = Pt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ds(t), e === null && Nu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, yu(r, l) ? o = null : u !== null && yu(r, u) && (t.flags |= 32), Ks(e, t), Ue(e, t, o, n), t.child;
      case 6:
        return e === null && Nu(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return Iu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cn(t, null, r, n) : Ue(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), $s(e, t, r, l, n);
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, le(br, r._currentValue), r._currentValue = o, u !== null) if (st(u.value, o)) {
            if (u.children === l.children && !Be.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var i = u.dependencies;
            if (i !== null) {
              o = u.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = Nt(-1, n & -n), s.tag = 2;
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Lu(
                    u.return,
                    n,
                    t
                  ), i.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (o = u.return, o === null) throw Error(m(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Lu(o, n, t), o = u.sibling;
            } else o = u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          Ue(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Pn(t, n), l = nt(l), r = r(l), t.flags |= 1, Ue(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ct(r, t.pendingProps), l = ct(r.type, l), Hs(e, t, r, l, n);
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), fl(e, t), t.tag = 1, $e(r) ? (e = !0, Yr(t)) : e = !1, Pn(t, n), Ms(t, r, l), Yu(t, r, l, n), Ju(null, t, r, !0, e, n);
      case 19:
        return qs(e, t, n);
      case 22:
        return Qs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function xa(e, t) {
    return ti(e, t);
  }
  function Pf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new Pf(e, t, n, r);
  }
  function go(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Rf(e) {
    if (typeof e == "function") return go(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Xe) return 11;
      if (e === mt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function xl(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") go(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Te:
        return on(n.children, l, u, t);
      case F:
        o = 8, l |= 8;
        break;
      case de:
        return e = ut(12, n, t, l | 2), e.elementType = de, e.lanes = u, e;
      case Fe:
        return e = ut(13, n, t, l), e.elementType = Fe, e.lanes = u, e;
      case ot:
        return e = ut(19, n, t, l), e.elementType = ot, e.lanes = u, e;
      case he:
        return El(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ne:
            o = 10;
            break e;
          case je:
            o = 9;
            break e;
          case Xe:
            o = 11;
            break e;
          case mt:
            o = 14;
            break e;
          case Ve:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function on(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function El(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = he, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wo(e, t, n) {
    return e = ut(6, e, null, t), e.lanes = n, e;
  }
  function ko(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function zf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function So(e, t, n, r, l, u, o, i, s) {
    return e = new zf(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = ut(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ou(u), e;
  }
  function Tf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Pe, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ea(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($e(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if ($e(n)) return Ji(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, u, o, i, s) {
    return e = So(n, r, !0, e, l, u, o, i, s), e.context = Ea(null), n = e.current, r = Ae(), l = Wt(n), u = Nt(r, l), u.callback = t ?? null, Vt(n, u, l), e.current.lanes = l, Bn(e, l, r), Qe(e, r), e;
  }
  function _l(e, t, n, r) {
    var l = t.current, u = Ae(), o = Wt(l);
    return n = Ea(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vt(l, t, o), e !== null && (pt(e, l, o, u), tl(e, l, o)), o;
  }
  function Cl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xo(e, t) {
    Ca(e, t), (e = e.alternate) && Ca(e, t);
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Eo(e) {
    this._internalRoot = e;
  }
  Nl.prototype.render = Eo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    _l(e, t, null, null);
  }, Nl.prototype.unmount = Eo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rn(function() {
        _l(null, e, null, null);
      }), t[St] = null;
    }
  };
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ai();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++) ;
      Dt.splice(n, 0, e), n === 0 && di(e);
    }
  };
  function _o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Pa() {
  }
  function Lf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = Cl(o);
          u.call(p);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", Pa);
      return e._reactRootContainer = o, e[St] = o.current, tr(e.nodeType === 8 ? e.parentNode : e), rn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = So(e, 0, !1, null, null, !1, !1, "", Pa);
    return e._reactRootContainer = s, e[St] = s.current, tr(e.nodeType === 8 ? e.parentNode : e), rn(function() {
      _l(t, s, n, r);
    }), s;
  }
  function Rl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Cl(o);
          i.call(s);
        };
      }
      _l(t, o, e, l);
    } else o = Lf(n, t, e, l, r);
    return Cl(o);
  }
  ii = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Yl(t, n | 1), Qe(t, ye()), !(H & 6) && (Dn = ye() + 500, Ut()));
        }
        break;
      case 13:
        rn(function() {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Ae();
            pt(r, e, 1, l);
          }
        }), xo(e, 1);
    }
  }, Xl = function(e) {
    if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
        var n = Ae();
        pt(t, e, 134217728, n);
      }
      xo(e, 134217728);
    }
  }, si = function(e) {
    if (e.tag === 13) {
      var t = Wt(e), n = Ct(e, t);
      if (n !== null) {
        var r = Ae();
        pt(n, e, t, r);
      }
      xo(e, t);
    }
  }, ai = function() {
    return b;
  }, ci = function(e, t) {
    var n = b;
    try {
      return b = e, t();
    } finally {
      b = n;
    }
  }, Vl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Qr(r);
              if (!l) throw Error(m(90));
              Io(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ao(e, n);
        break;
      case "select":
        t = n.value, t != null && an(e, !!n.multiple, t, !1);
    }
  }, Xo = ho, Go = rn;
  var Df = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Ko, Yo, ho] }, gr = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Of = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: gr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      Nr = zl.inject(Of), ht = zl;
    } catch {
    }
  }
  return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df, Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_o(t)) throw Error(m(200));
    return Tf(e, t, null, n);
  }, Ke.createRoot = function(e, t) {
    if (!_o(e)) throw Error(m(299));
    var n = !1, r = "", l = Na;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = So(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new Eo(t);
  }, Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = bo(t), e = e === null ? null : e.stateNode, e;
  }, Ke.flushSync = function(e) {
    return rn(e);
  }, Ke.hydrate = function(e, t, n) {
    if (!Pl(t)) throw Error(m(200));
    return Rl(null, e, t, !0, n);
  }, Ke.hydrateRoot = function(e, t, n) {
    if (!_o(e)) throw Error(m(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = Na;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = _a(t, null, e, 1, n ?? null, l, !1, u, o), e[St] = t.current, tr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Nl(t);
  }, Ke.render = function(e, t, n) {
    if (!Pl(t)) throw Error(m(200));
    return Rl(null, e, t, !1, n);
  }, Ke.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rn(function() {
      Rl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[St] = null;
      });
    }), !0) : !1;
  }, Ke.unstable_batchedUpdates = ho, Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Pl(n)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Rl(e, t, n, !1, r);
  }, Ke.version = "18.3.1-next-f1338f8080-20240426", Ke;
}
var Ma;
function $f() {
  if (Ma) return Po.exports;
  Ma = 1;
  function k() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (M) {
        console.error(M);
      }
  }
  return k(), Po.exports = Bf(), Po.exports;
}
var ja;
function Hf() {
  if (ja) return Tl;
  ja = 1;
  var k = $f();
  return Tl.createRoot = k.createRoot, Tl.hydrateRoot = k.hydrateRoot, Tl;
}
var Wf = Hf();
const Ua = /* @__PURE__ */ Mf(Wf), To = {
  id: "ext_react_form",
  reference_name: "MyExtension",
  supports_dark_mode: !1,
  description: "A form extension to capture user inputs"
};
var kt = Oo();
const Qf = ({
  title: k = "",
  subtitle: M,
  fields: m = [],
  submitText: se = "Submit",
  theme: ee = "light"
}) => {
  const [Z, te] = kt.useState(
    {}
  ), Q = (C, T) => {
    te((x) => ({ ...x, [C]: T }));
  }, A = (C, T, x) => {
    const J = Z[C] || [], K = x ? [...J, T] : J.filter((V) => V !== T);
    te((V) => ({ ...V, [C]: K }));
  }, ue = (C) => {
    var T, x;
    C.preventDefault(), (x = (T = window.voiceflow) == null ? void 0 : T.chat) == null || x.interact({
      type: "complete",
      payload: Z
    });
  };
  return /* @__PURE__ */ W.jsx("div", { className: "form-ext-wrapper", children: /* @__PURE__ */ W.jsxs("div", { className: `form-ext-container ${ee}`, children: [
    k && /* @__PURE__ */ W.jsx("h2", { className: "form-ext-title", children: k }),
    M && /* @__PURE__ */ W.jsx("p", { className: "form-ext-subtitle", children: M }),
    /* @__PURE__ */ W.jsxs("form", { onSubmit: ue, className: "form-ext", children: [
      m.map((C) => /* @__PURE__ */ W.jsxs("div", { className: "form-ext-field", children: [
        C.label && /* @__PURE__ */ W.jsx("label", { className: "form-ext-label", htmlFor: C.name, children: C.label }),
        C.type === "textarea" ? /* @__PURE__ */ W.jsx(
          "textarea",
          {
            id: C.name,
            name: C.name,
            value: Z[C.name] || "",
            onChange: (T) => Q(C.name, T.target.value),
            placeholder: C.placeholder,
            required: C.required,
            minLength: C.minLength,
            maxLength: C.maxLength,
            className: "form-ext-textarea"
          }
        ) : C.type === "radio" && C.options ? /* @__PURE__ */ W.jsx("div", { className: "form-ext-radio-group", children: C.options.map((T) => /* @__PURE__ */ W.jsxs("label", { className: "form-ext-radio-label", children: [
          /* @__PURE__ */ W.jsx(
            "input",
            {
              type: "radio",
              name: C.name,
              value: T,
              checked: Z[C.name] === T,
              onChange: (x) => Q(C.name, x.target.value),
              required: C.required,
              className: "form-ext-radio"
            }
          ),
          T
        ] }, T)) }) : C.type === "checkbox" && C.options ? /* @__PURE__ */ W.jsx("div", { className: "form-ext-checkbox-group", children: C.options.map((T) => /* @__PURE__ */ W.jsxs("label", { className: "form-ext-checkbox-label", children: [
          /* @__PURE__ */ W.jsx(
            "input",
            {
              type: "checkbox",
              name: C.name,
              value: T,
              checked: (Z[C.name] || []).includes(T),
              onChange: (x) => A(
                C.name,
                T,
                x.target.checked
              ),
              className: "form-ext-checkbox"
            }
          ),
          T
        ] }, T)) }) : /* @__PURE__ */ W.jsx(
          "input",
          {
            type: C.type,
            id: C.name,
            name: C.name,
            value: Z[C.name] || "",
            onChange: (T) => Q(C.name, T.target.value),
            placeholder: C.placeholder,
            required: C.required,
            pattern: C.pattern,
            minLength: C.minLength,
            maxLength: C.maxLength,
            className: "form-ext-input"
          }
        )
      ] }, C.name)),
      /* @__PURE__ */ W.jsx("button", { type: "submit", className: "form-ext-submit", children: se })
    ] })
  ] }) });
}, Kf = ".form-ext-wrapper{max-width:550px;margin:12px auto;padding:2rem;border-radius:12px;background:#fff;box-shadow:0 4px 6px #0000001a;width:100%}.form-ext-container{width:100%}.form-ext-container.dark{background:#2a2a2a;color:#fff}.form-ext-title{font-size:1.5rem;font-weight:600;margin-bottom:.5rem;color:#2a2a2a}.dark .form-ext-title{color:#fff}.form-ext-subtitle{color:#666;margin-bottom:1.5rem}.dark .form-ext-subtitle{color:#aaa}.form-ext-field{margin-bottom:1.75rem;width:100%;display:flex;flex-direction:column;gap:.5rem}.form-ext-label{display:block;margin-bottom:.5rem;font-weight:500}.form-ext-input,.form-ext-textarea{width:100%;padding:.875rem 1rem;border:2px solid #e2e8f0;border-radius:8px;font-size:1rem;line-height:1.5;transition:all .2s;margin:0}.dark .form-ext-input,.dark .form-ext-textarea{background:#3a3a3a;border-color:#4a4a4a;color:#fff}.form-ext-input:focus,.form-ext-textarea:focus{outline:none;border-color:#4f46e5;box-shadow:0 0 0 3px #4f46e51a}.form-ext-textarea{min-height:100px;resize:vertical}.form-ext-submit{width:100%;padding:.75rem;background:#4f46e5;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.form-ext-submit:hover{background:#4338ca}.form-ext-submit:active{transform:translateY(1px)}.form-ext-radio-group,.form-ext-checkbox-group{display:flex;flex-direction:column;gap:.875rem;width:100%;padding:.5rem 0}.form-ext-radio-label,.form-ext-checkbox-label{display:flex;align-items:center;gap:.75rem;cursor:pointer;padding:.5rem;border-radius:6px;transition:background-color .2s}.form-ext-radio-label:hover,.form-ext-checkbox-label:hover{background-color:#0000000d}.dark .form-ext-radio-label:hover,.dark .form-ext-checkbox-label:hover{background-color:#ffffff1a}.form-ext-radio,.form-ext-checkbox{cursor:pointer;width:1.25rem;height:1.25rem;margin:0}.dark .form-ext-radio-label,.dark .form-ext-checkbox-label{color:#fff}.dark .form-ext-radio,.dark .form-ext-checkbox{accent-color:#4f46e5}.form-ext{display:flex;flex-direction:column;gap:1.25rem;width:100%}.dark.form-ext-wrapper{background:#2a2a2a;box-shadow:0 4px 6px #0003}", Jf = {
  name: To.reference_name,
  type: "response",
  match: ({ trace: k }) => {
    var M;
    return k.type === To.id || ((M = k.payload) == null ? void 0 : M.name) === To.id;
  },
  render: ({ element: k, trace: M }) => {
    const m = k.attachShadow({ mode: "open" }), se = document.createElement("div"), ee = document.createElement("style");
    ee.textContent = Kf, m.appendChild(ee), m.appendChild(se);
    const Z = Ua.createRoot(se), te = M.payload;
    return Z.render(/* @__PURE__ */ W.jsx(Qf, { ...te })), () => {
      requestAnimationFrame(() => {
        for (Z.unmount(); m.firstChild; )
          m.removeChild(m.firstChild);
      });
    };
  }
}, Lo = {
  id: "ext_video",
  reference_name: "video",
  description: "Renders a video player for various video sources"
}, qf = {
  name: Lo.reference_name,
  type: "response",
  match: ({ trace: k }) => {
    var M;
    return k.type === Lo.id || ((M = k.payload) == null ? void 0 : M.name) === Lo.id;
  },
  render: ({ element: k, trace: M }) => {
    var T;
    const { url: m, autoplay: se, controls: ee, muted: Z, loop: te, title: Q } = M.payload || {}, A = (x) => (x == null ? void 0 : x.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/)) !== null, ue = (x) => {
      const J = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, K = x == null ? void 0 : x.match(J);
      return (K == null ? void 0 : K[2]) ?? "";
    }, C = (x) => {
      if (!x) return 0;
      const J = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/, K = x.match(J);
      if (!K) return 0;
      const [V, B, xe, Me] = K;
      return parseInt(B || "0") * 3600 + parseInt(xe || "0") * 60 + parseInt(Me || "0");
    };
    if (A(m)) {
      const x = document.createElement("div");
      x.style.cssText = "position: relative; width: 100%;";
      const J = document.createElement("iframe"), K = ue(m), V = C(((T = M.payload) == null ? void 0 : T.startAt) || ""), B = new URLSearchParams({
        autoplay: se ? "1" : "0",
        mute: Z ? "1" : "0",
        controls: ee !== !1 ? "1" : "0",
        loop: te ? "1" : "0",
        start: V.toString()
        // Add start time parameter
      });
      if (J.src = `https://www.youtube.com/embed/${K}?${B.toString()}`, J.style.cssText = `
        border: none;
      `, J.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", J.allowFullscreen = !0, Q) {
        J.title = Q;
        const xe = document.createElement("h3");
        xe.textContent = Q, xe.style.cssText = `
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          font-family: sans-serif;
        `, x.appendChild(xe);
      }
      x.appendChild(J), k.appendChild(x);
    } else {
      const x = document.createElement("video");
      x.src = m, x.style.maxWidth = "100%", se && x.setAttribute("autoplay", ""), ee && x.setAttribute("controls", ""), Z && x.setAttribute("muted", ""), te && x.setAttribute("loop", ""), Q && x.setAttribute("title", Q), x.addEventListener("ended", () => {
        window.voiceflow.chat.interact({
          type: "complete",
          payload: {}
        });
      }), x.style.cssText = `
        max-width: 100%;
        width: 100%;
        aspect-ratio: 16/9;
        display: block;
      `, k.appendChild(x);
    }
    return () => {
      for (; k.firstChild; )
        k.removeChild(k.firstChild);
    };
  }
}, Do = {
  id: "ext_recorder",
  reference_name: "RecorderExtension",
  supports_dark_mode: !0,
  description: "A screen recording extension for capturing and submitting video feedback"
};
var sn = /* @__PURE__ */ ((k) => (k.PERMISSION_DENIED = "PERMISSION_DENIED", k.DEVICE_NOT_SUPPORTED = "DEVICE_NOT_SUPPORTED", k.RECORDING_FAILED = "RECORDING_FAILED", k.NO_MOBILE_DEVICES = "NO_MOBILE_DEVICES", k))(sn || {});
const Yf = [
  "video/webm",
  "video/webm;codecs=vp8,opus",
  "video/webm;codecs=vp9,opus",
  "video/mp4"
], Xf = () => Yf.find((k) => MediaRecorder.isTypeSupported(k)) || "", Fa = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), Gf = ({
  title: k = "Screen Recording",
  startButtonText: M = "Start Recording",
  stopButtonText: m = "Stop Recording",
  submitButtonText: se = "Submit",
  retryButtonText: ee = "Try Again",
  theme: Z = "light",
  includeAudio: te = !1,
  includeVideo: Q = !0
}) => {
  const [A, ue] = kt.useState("idle"), [C, T] = kt.useState(!1), [x, J] = kt.useState(""), K = kt.useRef(null), V = kt.useRef([]), B = kt.useRef(null), xe = kt.useRef(null);
  kt.useEffect(() => {
    Fa() && ae(sn.NO_MOBILE_DEVICES);
  }, []), kt.useEffect(() => () => {
    x && URL.revokeObjectURL(x);
  }, [x]);
  const Me = (F) => {
    var de, ne;
    (ne = (de = window.voiceflow) == null ? void 0 : de.chat) == null || ne.interact(F);
  }, ae = (F) => {
    const de = {
      id: typeof F == "string" ? sn.RECORDING_FAILED : F,
      details: typeof F == "string" ? F : void 0
    };
    Me({ type: "error", payload: de });
  }, Ee = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        ae(sn.DEVICE_NOT_SUPPORTED);
        return;
      }
      let F;
      if (Q)
        F = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1
        });
      else if (!Q && te)
        try {
          F = await navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
          });
        } catch {
          ae("Failed to access microphone");
          return;
        }
      else {
        ae("Either video or audio must be enabled");
        return;
      }
      if (Q && te && navigator.mediaDevices.getUserMedia)
        try {
          const ne = await navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
          }), je = [
            ...F.getTracks(),
            ...ne.getTracks()
          ];
          F = new MediaStream(je);
        } catch (ne) {
          console.warn("Could not get audio stream:", ne);
        }
      const de = Xf();
      if (!de)
        throw new Error("No supported MIME type found");
      xe.current = F, K.current = new MediaRecorder(F, {
        mimeType: de
      }), V.current = [], K.current.ondataavailable = (ne) => {
        ne.data.size > 0 && V.current.push(ne.data);
      }, K.current.onerror = () => {
        ae("MediaRecorder failed during recording");
      }, K.current.onstop = () => {
        var ne;
        try {
          (ne = xe.current) == null || ne.getTracks().forEach((Fe) => Fe.stop());
          const je = new Blob(V.current, { type: de });
          x && URL.revokeObjectURL(x);
          const Xe = URL.createObjectURL(je);
          J(Xe), B.current && (B.current.src = Xe), ue("preview");
        } catch (je) {
          ae(
            je instanceof Error ? je.message : "Failed to process recording"
          );
        }
      }, K.current.start(100), ue("recording");
    } catch (F) {
      console.error("Recording error:", F), F instanceof Error ? F.name === "NotAllowedError" ? ae(sn.PERMISSION_DENIED) : F.message === "No supported MIME type found" ? ae(sn.DEVICE_NOT_SUPPORTED) : ae(F.message) : ae(sn.RECORDING_FAILED), ue("idle");
    }
  }, Ye = () => {
    if (K.current && A === "recording")
      try {
        K.current.stop();
      } catch (F) {
        ae(
          F instanceof Error ? F.message : "Failed to stop recording"
        ), ue("idle");
      }
  }, Pe = () => {
    var F;
    try {
      const de = ((F = K.current) == null ? void 0 : F.mimeType) || "video/webm", ne = new Blob(V.current, { type: de });
      Me({ type: "complete", payload: {
        mimeType: de,
        recordingData: ne
      } }), T(!0);
    } catch (de) {
      ae(
        de instanceof Error ? de.message : "Failed to submit recording"
      );
    }
  }, Te = () => {
    x && (URL.revokeObjectURL(x), J("")), V.current = [], B.current && (B.current.src = ""), ue("idle"), T(!1);
  };
  return /* @__PURE__ */ W.jsx("div", { className: `recorder-ext-wrapper ${Z}`, children: /* @__PURE__ */ W.jsxs("div", { className: "recorder-ext-container", children: [
    k && /* @__PURE__ */ W.jsx("h2", { className: "recorder-ext-title", children: k }),
    Fa() ? /* @__PURE__ */ W.jsx("div", { className: "recorder-ext-mobile-message", children: /* @__PURE__ */ W.jsx("p", { children: "Screen recording is not supported on mobile devices. Please use a desktop browser." }) }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      /* @__PURE__ */ W.jsx("div", { className: "recorder-ext-video-container", children: /* @__PURE__ */ W.jsx(
        "video",
        {
          ref: B,
          className: "recorder-ext-preview",
          controls: !0,
          style: {
            display: A === "preview" ? "block" : "none"
          },
          playsInline: !0
        }
      ) }),
      /* @__PURE__ */ W.jsxs("div", { className: "recorder-ext-controls", children: [
        A === "idle" && /* @__PURE__ */ W.jsx(
          "button",
          {
            className: "recorder-ext-button recorder-ext-start",
            onClick: Ee,
            children: M
          }
        ),
        A === "recording" && /* @__PURE__ */ W.jsx(
          "button",
          {
            className: "recorder-ext-button recorder-ext-stop",
            onClick: Ye,
            children: m
          }
        ),
        A === "preview" && /* @__PURE__ */ W.jsxs("div", { className: "recorder-ext-button-group", children: [
          /* @__PURE__ */ W.jsx(
            "button",
            {
              className: `recorder-ext-button recorder-ext-submit ${C ? "submitted" : ""}`,
              onClick: Pe,
              disabled: C,
              children: se
            }
          ),
          /* @__PURE__ */ W.jsx(
            "button",
            {
              className: "recorder-ext-button recorder-ext-retry",
              onClick: Te,
              children: ee
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}, Zf = ".recorder-ext-wrapper{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;max-width:100%;margin:0 auto;padding:1rem}.recorder-ext-container{background:var(--vf-bg-color, #ffffff);border-radius:12px;padding:1.5rem;box-shadow:0 2px 8px #0000001a}.recorder-ext-title{color:var(--vf-text-color, #333333);font-size:1.5rem;margin:0 0 1rem;text-align:center}.recorder-ext-video-container{width:100%;margin:1rem 0;border-radius:8px;overflow:hidden;background:#0000000d;min-height:200px}.recorder-ext-preview{width:100%;max-height:400px;object-fit:contain}.recorder-ext-controls{display:flex;justify-content:center;gap:.75rem;margin-top:1rem;flex-wrap:wrap}.recorder-ext-button{padding:.75rem 1.25rem;border-radius:6px;border:none;font-size:.875rem;line-height:1.2;font-weight:500;cursor:pointer;transition:all .2s ease;text-align:center;white-space:normal;min-width:80px;max-width:150px}.recorder-ext-start{background:var(--vf-primary-color, #007aff);color:#fff}.recorder-ext-stop{background:var(--vf-danger-color, #ff3b30);color:#fff}.recorder-ext-submit{background:var(--vf-success-color, #34c759);color:#fff}.recorder-ext-submit.submitted,.recorder-ext-submit.submitted:hover{background:var(--vf-secondary-color, #8e8e93);opacity:.7;transform:none;cursor:not-allowed;pointer-events:none}.recorder-ext-retry{background:var(--vf-secondary-color, #8e8e93);color:#fff}.recorder-ext-button:hover{opacity:.9;transform:translateY(-1px)}.recorder-ext-button:active{transform:translateY(0)}.recorder-ext-button:disabled{cursor:not-allowed;opacity:.7}.recorder-ext-button-group{display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center}.dark{--vf-bg-color: #1c1c1e;--vf-text-color: #ffffff;--vf-primary-color: #0a84ff;--vf-danger-color: #ff453a;--vf-success-color: #32d74b;--vf-secondary-color: #98989d}", bf = {
  name: Do.reference_name,
  type: "response",
  match: ({ trace: k }) => {
    var M;
    return k.type === Do.id || ((M = k.payload) == null ? void 0 : M.name) === Do.id;
  },
  render: ({ element: k, trace: M }) => {
    const m = k.attachShadow({ mode: "open" }), se = document.createElement("div"), ee = document.createElement("style");
    ee.textContent = Zf, m.appendChild(ee), m.appendChild(se);
    const Z = Ua.createRoot(se), te = M.payload;
    return Z.render(/* @__PURE__ */ W.jsx(Gf, { ...te })), () => {
      requestAnimationFrame(() => {
        for (Z.unmount(); m.firstChild; )
          m.removeChild(m.firstChild);
      });
    };
  }
};
export {
  Jf as FormExtension,
  bf as RecorderExtension,
  qf as VideoExtension
};
