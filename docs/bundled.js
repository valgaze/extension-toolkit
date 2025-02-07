function ia(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Zi = { exports: {} }, Zr = {}, Ji = { exports: {} }, ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function Kd() {
  if (Bs) return ee;
  Bs = 1;
  var f = Symbol.for("react.element"), v = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), q = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), B = Symbol.iterator;
  function T(d) {
    return d === null || typeof d != "object" ? null : (d = B && d[B] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var g = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, U = {};
  function K(d, y, L) {
    this.props = d, this.context = y, this.refs = U, this.updater = L || g;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(d, y) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, y, "setState");
  }, K.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function we() {
  }
  we.prototype = K.prototype;
  function Ee(d, y, L) {
    this.props = d, this.context = y, this.refs = U, this.updater = L || g;
  }
  var ne = Ee.prototype = new we();
  ne.constructor = Ee, te(ne, K.prototype), ne.isPureReactComponent = !0;
  var Ce = Array.isArray, De = Object.prototype.hasOwnProperty, de = { current: null }, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(d, y, L) {
    var O, X = {}, b = null, Q = null;
    if (y != null) for (O in y.ref !== void 0 && (Q = y.ref), y.key !== void 0 && (b = "" + y.key), y) De.call(y, O) && !_e.hasOwnProperty(O) && (X[O] = y[O]);
    var re = arguments.length - 2;
    if (re === 1) X.children = L;
    else if (1 < re) {
      for (var ce = Array(re), Fe = 0; Fe < re; Fe++) ce[Fe] = arguments[Fe + 2];
      X.children = ce;
    }
    if (d && d.defaultProps) for (O in re = d.defaultProps, re) X[O] === void 0 && (X[O] = re[O]);
    return { $$typeof: f, type: d, key: b, ref: Q, props: X, _owner: de.current };
  }
  function pe(d, y) {
    return { $$typeof: f, type: d.type, key: y, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function ue(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function ze(d) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(L) {
      return y[L];
    });
  }
  var xe = /\/+/g;
  function Le(d, y) {
    return typeof d == "object" && d !== null && d.key != null ? ze("" + d.key) : y.toString(36);
  }
  function je(d, y, L, O, X) {
    var b = typeof d;
    (b === "undefined" || b === "boolean") && (d = null);
    var Q = !1;
    if (d === null) Q = !0;
    else switch (b) {
      case "string":
      case "number":
        Q = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case f:
          case v:
            Q = !0;
        }
    }
    if (Q) return Q = d, X = X(Q), d = O === "" ? "." + Le(Q, 0) : O, Ce(X) ? (L = "", d != null && (L = d.replace(xe, "$&/") + "/"), je(X, y, L, "", function(Fe) {
      return Fe;
    })) : X != null && (ue(X) && (X = pe(X, L + (!X.key || Q && Q.key === X.key ? "" : ("" + X.key).replace(xe, "$&/") + "/") + d)), y.push(X)), 1;
    if (Q = 0, O = O === "" ? "." : O + ":", Ce(d)) for (var re = 0; re < d.length; re++) {
      b = d[re];
      var ce = O + Le(b, re);
      Q += je(b, y, L, ce, X);
    }
    else if (ce = T(d), typeof ce == "function") for (d = ce.call(d), re = 0; !(b = d.next()).done; ) b = b.value, ce = O + Le(b, re++), Q += je(b, y, L, ce, X);
    else if (b === "object") throw y = String(d), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function Xe(d, y, L) {
    if (d == null) return d;
    var O = [], X = 0;
    return je(d, O, "", "", function(b) {
      return y.call(L, b, X++);
    }), O;
  }
  function Ne(d) {
    if (d._status === -1) {
      var y = d._result;
      y = y(), y.then(function(L) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = L);
      }, function(L) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = L);
      }), d._status === -1 && (d._status = 0, d._result = y);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ie = { current: null }, N = { transition: null }, E = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: N, ReactCurrentOwner: de };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ee.Children = { map: Xe, forEach: function(d, y, L) {
    Xe(d, function() {
      y.apply(this, arguments);
    }, L);
  }, count: function(d) {
    var y = 0;
    return Xe(d, function() {
      y++;
    }), y;
  }, toArray: function(d) {
    return Xe(d, function(y) {
      return y;
    }) || [];
  }, only: function(d) {
    if (!ue(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, ee.Component = K, ee.Fragment = c, ee.Profiler = A, ee.PureComponent = Ee, ee.StrictMode = F, ee.Suspense = M, ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E, ee.act = _, ee.cloneElement = function(d, y, L) {
    if (d == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
    var O = te({}, d.props), X = d.key, b = d.ref, Q = d._owner;
    if (y != null) {
      if (y.ref !== void 0 && (b = y.ref, Q = de.current), y.key !== void 0 && (X = "" + y.key), d.type && d.type.defaultProps) var re = d.type.defaultProps;
      for (ce in y) De.call(y, ce) && !_e.hasOwnProperty(ce) && (O[ce] = y[ce] === void 0 && re !== void 0 ? re[ce] : y[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) O.children = L;
    else if (1 < ce) {
      re = Array(ce);
      for (var Fe = 0; Fe < ce; Fe++) re[Fe] = arguments[Fe + 2];
      O.children = re;
    }
    return { $$typeof: f, type: d.type, key: X, ref: b, props: O, _owner: Q };
  }, ee.createContext = function(d) {
    return d = { $$typeof: q, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, d.Provider = { $$typeof: Y, _context: d }, d.Consumer = d;
  }, ee.createElement = J, ee.createFactory = function(d) {
    var y = J.bind(null, d);
    return y.type = d, y;
  }, ee.createRef = function() {
    return { current: null };
  }, ee.forwardRef = function(d) {
    return { $$typeof: H, render: d };
  }, ee.isValidElement = ue, ee.lazy = function(d) {
    return { $$typeof: C, _payload: { _status: -1, _result: d }, _init: Ne };
  }, ee.memo = function(d, y) {
    return { $$typeof: W, type: d, compare: y === void 0 ? null : y };
  }, ee.startTransition = function(d) {
    var y = N.transition;
    N.transition = {};
    try {
      d();
    } finally {
      N.transition = y;
    }
  }, ee.unstable_act = _, ee.useCallback = function(d, y) {
    return ie.current.useCallback(d, y);
  }, ee.useContext = function(d) {
    return ie.current.useContext(d);
  }, ee.useDebugValue = function() {
  }, ee.useDeferredValue = function(d) {
    return ie.current.useDeferredValue(d);
  }, ee.useEffect = function(d, y) {
    return ie.current.useEffect(d, y);
  }, ee.useId = function() {
    return ie.current.useId();
  }, ee.useImperativeHandle = function(d, y, L) {
    return ie.current.useImperativeHandle(d, y, L);
  }, ee.useInsertionEffect = function(d, y) {
    return ie.current.useInsertionEffect(d, y);
  }, ee.useLayoutEffect = function(d, y) {
    return ie.current.useLayoutEffect(d, y);
  }, ee.useMemo = function(d, y) {
    return ie.current.useMemo(d, y);
  }, ee.useReducer = function(d, y, L) {
    return ie.current.useReducer(d, y, L);
  }, ee.useRef = function(d) {
    return ie.current.useRef(d);
  }, ee.useState = function(d) {
    return ie.current.useState(d);
  }, ee.useSyncExternalStore = function(d, y, L) {
    return ie.current.useSyncExternalStore(d, y, L);
  }, ee.useTransition = function() {
    return ie.current.useTransition();
  }, ee.version = "18.3.1", ee;
}
var As;
function aa() {
  return As || (As = 1, Ji.exports = Kd()), Ji.exports;
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
var $s;
function Xd() {
  if ($s) return Zr;
  $s = 1;
  var f = aa(), v = Symbol.for("react.element"), c = Symbol.for("react.fragment"), F = Object.prototype.hasOwnProperty, A = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(H, M, W) {
    var C, B = {}, T = null, g = null;
    W !== void 0 && (T = "" + W), M.key !== void 0 && (T = "" + M.key), M.ref !== void 0 && (g = M.ref);
    for (C in M) F.call(M, C) && !Y.hasOwnProperty(C) && (B[C] = M[C]);
    if (H && H.defaultProps) for (C in M = H.defaultProps, M) B[C] === void 0 && (B[C] = M[C]);
    return { $$typeof: v, type: H, key: T, ref: g, props: B, _owner: A.current };
  }
  return Zr.Fragment = c, Zr.jsx = q, Zr.jsxs = q, Zr;
}
var Vs;
function Gd() {
  return Vs || (Vs = 1, Zi.exports = Xd()), Zi.exports;
}
var oe = Gd(), fo = {}, qi = { exports: {} }, at = {}, bi = { exports: {} }, ea = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function Zd() {
  return Hs || (Hs = 1, function(f) {
    function v(N, E) {
      var _ = N.length;
      N.push(E);
      e: for (; 0 < _; ) {
        var d = _ - 1 >>> 1, y = N[d];
        if (0 < A(y, E)) N[d] = E, N[_] = y, _ = d;
        else break e;
      }
    }
    function c(N) {
      return N.length === 0 ? null : N[0];
    }
    function F(N) {
      if (N.length === 0) return null;
      var E = N[0], _ = N.pop();
      if (_ !== E) {
        N[0] = _;
        e: for (var d = 0, y = N.length, L = y >>> 1; d < L; ) {
          var O = 2 * (d + 1) - 1, X = N[O], b = O + 1, Q = N[b];
          if (0 > A(X, _)) b < y && 0 > A(Q, X) ? (N[d] = Q, N[b] = _, d = b) : (N[d] = X, N[O] = _, d = O);
          else if (b < y && 0 > A(Q, _)) N[d] = Q, N[b] = _, d = b;
          else break e;
        }
      }
      return E;
    }
    function A(N, E) {
      var _ = N.sortIndex - E.sortIndex;
      return _ !== 0 ? _ : N.id - E.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Y = performance;
      f.unstable_now = function() {
        return Y.now();
      };
    } else {
      var q = Date, H = q.now();
      f.unstable_now = function() {
        return q.now() - H;
      };
    }
    var M = [], W = [], C = 1, B = null, T = 3, g = !1, te = !1, U = !1, K = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(N) {
      for (var E = c(W); E !== null; ) {
        if (E.callback === null) F(W);
        else if (E.startTime <= N) F(W), E.sortIndex = E.expirationTime, v(M, E);
        else break;
        E = c(W);
      }
    }
    function Ce(N) {
      if (U = !1, ne(N), !te) if (c(M) !== null) te = !0, Ne(De);
      else {
        var E = c(W);
        E !== null && ie(Ce, E.startTime - N);
      }
    }
    function De(N, E) {
      te = !1, U && (U = !1, we(J), J = -1), g = !0;
      var _ = T;
      try {
        for (ne(E), B = c(M); B !== null && (!(B.expirationTime > E) || N && !ze()); ) {
          var d = B.callback;
          if (typeof d == "function") {
            B.callback = null, T = B.priorityLevel;
            var y = d(B.expirationTime <= E);
            E = f.unstable_now(), typeof y == "function" ? B.callback = y : B === c(M) && F(M), ne(E);
          } else F(M);
          B = c(M);
        }
        if (B !== null) var L = !0;
        else {
          var O = c(W);
          O !== null && ie(Ce, O.startTime - E), L = !1;
        }
        return L;
      } finally {
        B = null, T = _, g = !1;
      }
    }
    var de = !1, _e = null, J = -1, pe = 5, ue = -1;
    function ze() {
      return !(f.unstable_now() - ue < pe);
    }
    function xe() {
      if (_e !== null) {
        var N = f.unstable_now();
        ue = N;
        var E = !0;
        try {
          E = _e(!0, N);
        } finally {
          E ? Le() : (de = !1, _e = null);
        }
      } else de = !1;
    }
    var Le;
    if (typeof Ee == "function") Le = function() {
      Ee(xe);
    };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Xe = je.port2;
      je.port1.onmessage = xe, Le = function() {
        Xe.postMessage(null);
      };
    } else Le = function() {
      K(xe, 0);
    };
    function Ne(N) {
      _e = N, de || (de = !0, Le());
    }
    function ie(N, E) {
      J = K(function() {
        N(f.unstable_now());
      }, E);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, f.unstable_continueExecution = function() {
      te || g || (te = !0, Ne(De));
    }, f.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < N ? Math.floor(1e3 / N) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, f.unstable_getFirstCallbackNode = function() {
      return c(M);
    }, f.unstable_next = function(N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = T;
      }
      var _ = T;
      T = E;
      try {
        return N();
      } finally {
        T = _;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(N, E) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var _ = T;
      T = N;
      try {
        return E();
      } finally {
        T = _;
      }
    }, f.unstable_scheduleCallback = function(N, E, _) {
      var d = f.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? d + _ : d) : _ = d, N) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = _ + y, N = { id: C++, callback: E, priorityLevel: N, startTime: _, expirationTime: y, sortIndex: -1 }, _ > d ? (N.sortIndex = _, v(W, N), c(M) === null && N === c(W) && (U ? (we(J), J = -1) : U = !0, ie(Ce, _ - d))) : (N.sortIndex = y, v(M, N), te || g || (te = !0, Ne(De))), N;
    }, f.unstable_shouldYield = ze, f.unstable_wrapCallback = function(N) {
      var E = T;
      return function() {
        var _ = T;
        T = E;
        try {
          return N.apply(this, arguments);
        } finally {
          T = _;
        }
      };
    };
  }(ea)), ea;
}
var Ws;
function Jd() {
  return Ws || (Ws = 1, bi.exports = Zd()), bi.exports;
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
var Qs;
function qd() {
  if (Qs) return at;
  Qs = 1;
  var f = aa(), v = Jd();
  function c(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var F = /* @__PURE__ */ new Set(), A = {};
  function Y(e, t) {
    q(e, t), q(e + "Capture", t);
  }
  function q(e, t) {
    for (A[e] = t, e = 0; e < t.length; e++) F.add(t[e]);
  }
  var H = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, C = {}, B = {};
  function T(e) {
    return M.call(B, e) ? !0 : M.call(C, e) ? !1 : W.test(e) ? B[e] = !0 : (C[e] = !0, !1);
  }
  function g(e, t, n, r) {
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
  function te(e, t, n, r) {
    if (t === null || typeof t > "u" || g(e, t, n, r)) return !0;
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
  function U(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    K[e] = new U(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    K[t] = new U(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    K[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    K[e] = new U(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    K[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    K[e] = new U(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    K[e] = new U(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    K[e] = new U(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    K[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function Ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      we,
      Ee
    );
    K[t] = new U(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(we, Ee);
    K[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(we, Ee);
    K[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    K[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    K[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ne(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (te(t, n, l, r) && (n = null), r || l === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ce = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), de = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), ze = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), Ne = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function E(e) {
    return e === null || typeof e != "object" ? null : (e = N && e[N] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, d;
  function y(e) {
    if (d === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      d = t && t[1] || "";
    }
    return `
` + d + e;
  }
  var L = !1;
  function O(e, t) {
    if (!e || L) return "";
    L = !0;
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
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (var l = h.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a]; ) a--;
        for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || l[i] !== o[a]) {
                var u = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= i && 0 <= a);
          break;
        }
      }
    } finally {
      L = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function X(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = O(e.type, !1), e;
      case 11:
        return e = O(e.type.render, !1), e;
      case 1:
        return e = O(e.type, !0), e;
      default:
        return "";
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _e:
        return "Fragment";
      case de:
        return "Portal";
      case pe:
        return "Profiler";
      case J:
        return "StrictMode";
      case Le:
        return "Suspense";
      case je:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ze:
        return (e.displayName || "Context") + ".Consumer";
      case ue:
        return (e._context.displayName || "Context") + ".Provider";
      case xe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Xe:
        return t = e.displayName || null, t !== null ? t : b(e.type) || "Memo";
      case Ne:
        t = e._payload, e = e._init;
        try {
          return b(e(t));
        } catch {
        }
    }
    return null;
  }
  function Q(e) {
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
        return b(t);
      case 8:
        return t === J ? "StrictMode" : "Mode";
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
  function re(e) {
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
  function Fe(e) {
    var t = ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function zt(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function On(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function wn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function cr(e, t) {
    var n = t.checked;
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Jr(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = re(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function dr(e, t) {
    t = t.checked, t != null && ne(e, "checked", t, !1);
  }
  function fr(e, t) {
    dr(e, t);
    var n = re(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? pr(e, t.type, n) : t.hasOwnProperty("defaultValue") && pr(e, t.type, re(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function jn(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function pr(e, t, n) {
    (t !== "number" || wn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Jt = Array.isArray;
  function pt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + re(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Lt(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(c(92));
        if (Jt(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: re(n) };
  }
  function qr(e, t) {
    var n = re(t.value), r = re(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function br(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ge(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ge(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Un, el = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Un = Un || document.createElement("div"), Un.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Un.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Dt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xn = {
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
  }, tl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xn).forEach(function(e) {
    tl.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), xn[t] = xn[e];
    });
  });
  function Bn(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xn.hasOwnProperty(e) && xn[e] ? ("" + t).trim() : t + "px";
  }
  function Vt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Bn(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var nl = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function It(e, t) {
    if (t) {
      if (nl[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(c(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(c(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(c(62));
    }
  }
  function mr(e, t) {
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
  var hr = null;
  function An(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $n = null, qt = null, Ot = null;
  function xt(e) {
    if (e = Or(e)) {
      if (typeof $n != "function") throw Error(c(280));
      var t = e.stateNode;
      t && (t = Nl(t), $n(e.stateNode, e.type, t));
    }
  }
  function rl(e) {
    qt ? Ot ? Ot.push(e) : Ot = [e] : qt = e;
  }
  function Z() {
    if (qt) {
      var e = qt, t = Ot;
      if (Ot = qt = null, xt(e), t) for (e = 0; e < t.length; e++) xt(t[e]);
    }
  }
  function se(e, t) {
    return e(t);
  }
  function me() {
  }
  var Ze = !1;
  function et(e, t, n) {
    if (Ze) return e(t, n);
    Ze = !0;
    try {
      return se(e, t, n);
    } finally {
      Ze = !1, (qt !== null || Ot !== null) && (me(), Z());
    }
  }
  function tt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Nl(n);
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
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var kt = !1;
  if (H) try {
    var $e = {};
    Object.defineProperty($e, "passive", { get: function() {
      kt = !0;
    } }), window.addEventListener("test", $e, $e), window.removeEventListener("test", $e, $e);
  } catch {
    kt = !1;
  }
  function jt(e, t, n, r, l, o, i, a, u) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (x) {
      this.onError(x);
    }
  }
  var gr = !1, ll = null, ol = !1, ho = null, tc = { onError: function(e) {
    gr = !0, ll = e;
  } };
  function nc(e, t, n, r, l, o, i, a, u) {
    gr = !1, ll = null, jt.apply(tc, arguments);
  }
  function rc(e, t, n, r, l, o, i, a, u) {
    if (nc.apply(this, arguments), gr) {
      if (gr) {
        var h = ll;
        gr = !1, ll = null;
      } else throw Error(c(198));
      ol || (ol = !0, ho = h);
    }
  }
  function kn(e) {
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
  function ua(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function sa(e) {
    if (kn(e) !== e) throw Error(c(188));
  }
  function lc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = kn(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return sa(l), e;
          if (o === r) return sa(l), t;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = !1, a = l.child; a; ) {
          if (a === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (a === r) {
            i = !0, r = l, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = o.child; a; ) {
            if (a === n) {
              i = !0, n = o, r = l;
              break;
            }
            if (a === r) {
              i = !0, r = o, n = l;
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function ca(e) {
    return e = lc(e), e !== null ? da(e) : null;
  }
  function da(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = da(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var fa = v.unstable_scheduleCallback, pa = v.unstable_cancelCallback, oc = v.unstable_shouldYield, ic = v.unstable_requestPaint, Te = v.unstable_now, ac = v.unstable_getCurrentPriorityLevel, go = v.unstable_ImmediatePriority, ma = v.unstable_UserBlockingPriority, il = v.unstable_NormalPriority, uc = v.unstable_LowPriority, ha = v.unstable_IdlePriority, al = null, Ft = null;
  function sc(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
      Ft.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : fc, cc = Math.log, dc = Math.LN2;
  function fc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cc(e) / dc | 0) | 0;
  }
  var ul = 64, sl = 4194304;
  function vr(e) {
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
  function cl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var a = i & ~l;
      a !== 0 ? r = vr(a) : (o &= i, o !== 0 && (r = vr(o)));
    } else i = n & ~l, i !== 0 ? r = vr(i) : o !== 0 && (r = vr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function pc(e, t) {
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
  function mc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - St(o), a = 1 << i, u = l[i];
      u === -1 ? (!(a & n) || a & r) && (l[i] = pc(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function vo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ga() {
    var e = ul;
    return ul <<= 1, !(ul & 4194240) && (ul = 64), e;
  }
  function yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function yr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function hc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - St(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function wo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var fe = 0;
  function va(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ya, xo, wa, xa, ka, ko = !1, dl = [], bt = null, en = null, tn = null, wr = /* @__PURE__ */ new Map(), xr = /* @__PURE__ */ new Map(), nn = [], gc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bt = null;
        break;
      case "dragenter":
      case "dragleave":
        en = null;
        break;
      case "mouseover":
      case "mouseout":
        tn = null;
        break;
      case "pointerover":
      case "pointerout":
        wr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xr.delete(t.pointerId);
    }
  }
  function kr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Or(t), t !== null && xo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function vc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return bt = kr(bt, e, t, n, r, l), !0;
      case "dragenter":
        return en = kr(en, e, t, n, r, l), !0;
      case "mouseover":
        return tn = kr(tn, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return wr.set(o, kr(wr.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, xr.set(o, kr(xr.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Ea(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var n = kn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ua(n), t !== null) {
            e.blockedOn = t, ka(e.priority, function() {
              wa(n);
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
  function fl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        hr = r, n.target.dispatchEvent(r), hr = null;
      } else return t = Or(n), t !== null && xo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ca(e, t, n) {
    fl(e) && n.delete(t);
  }
  function yc() {
    ko = !1, bt !== null && fl(bt) && (bt = null), en !== null && fl(en) && (en = null), tn !== null && fl(tn) && (tn = null), wr.forEach(Ca), xr.forEach(Ca);
  }
  function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ko || (ko = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, yc)));
  }
  function Er(e) {
    function t(l) {
      return Sr(l, e);
    }
    if (0 < dl.length) {
      Sr(dl[0], e);
      for (var n = 1; n < dl.length; n++) {
        var r = dl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bt !== null && Sr(bt, e), en !== null && Sr(en, e), tn !== null && Sr(tn, e), wr.forEach(t), xr.forEach(t), n = 0; n < nn.length; n++) r = nn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < nn.length && (n = nn[0], n.blockedOn === null); ) Ea(n), n.blockedOn === null && nn.shift();
  }
  var Vn = Ce.ReactCurrentBatchConfig, pl = !0;
  function wc(e, t, n, r) {
    var l = fe, o = Vn.transition;
    Vn.transition = null;
    try {
      fe = 1, So(e, t, n, r);
    } finally {
      fe = l, Vn.transition = o;
    }
  }
  function xc(e, t, n, r) {
    var l = fe, o = Vn.transition;
    Vn.transition = null;
    try {
      fe = 4, So(e, t, n, r);
    } finally {
      fe = l, Vn.transition = o;
    }
  }
  function So(e, t, n, r) {
    if (pl) {
      var l = Eo(e, t, n, r);
      if (l === null) Ao(e, t, r, ml, n), Sa(e, r);
      else if (vc(l, e, t, n, r)) r.stopPropagation();
      else if (Sa(e, r), t & 4 && -1 < gc.indexOf(e)) {
        for (; l !== null; ) {
          var o = Or(l);
          if (o !== null && ya(o), o = Eo(e, t, n, r), o === null && Ao(e, t, r, ml, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Ao(e, t, r, null, n);
    }
  }
  var ml = null;
  function Eo(e, t, n, r) {
    if (ml = null, e = An(r), e = Sn(e), e !== null) if (t = kn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ua(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ml = e, null;
  }
  function _a(e) {
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
        switch (ac()) {
          case go:
            return 1;
          case ma:
            return 4;
          case il:
          case uc:
            return 16;
          case ha:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rn = null, Co = null, hl = null;
  function Na() {
    if (hl) return hl;
    var e, t = Co, n = t.length, r, l = "value" in rn ? rn.value : rn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return hl = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function gl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function Pa() {
    return !1;
  }
  function st(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vl : Pa, this.isPropagationStopped = Pa, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vl);
    }, persist: function() {
    }, isPersistent: vl }), t;
  }
  var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _o = st(Hn), Cr = _({}, Hn, { view: 0, detail: 0 }), kc = st(Cr), No, Po, _r, yl = _({}, Cr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ro, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== _r && (_r && e.type === "mousemove" ? (No = e.screenX - _r.screenX, Po = e.screenY - _r.screenY) : Po = No = 0, _r = e), No);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Po;
  } }), Ta = st(yl), Sc = _({}, yl, { dataTransfer: 0 }), Ec = st(Sc), Cc = _({}, Cr, { relatedTarget: 0 }), To = st(Cc), _c = _({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = st(_c), Pc = _({}, Hn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Tc = st(Pc), Rc = _({}, Hn, { data: 0 }), Ra = st(Rc), zc = {
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
  }, Lc = {
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
  }, Mc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Dc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mc[e]) ? !!t[e] : !1;
  }
  function Ro() {
    return Dc;
  }
  var Ic = _({}, Cr, { key: function(e) {
    if (e.key) {
      var t = zc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ro, charCode: function(e) {
    return e.type === "keypress" ? gl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Oc = st(Ic), jc = _({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), za = st(jc), Fc = _({}, Cr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ro }), Uc = st(Fc), Bc = _({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ac = st(Bc), $c = _({}, yl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Vc = st($c), Hc = [9, 13, 27, 32], zo = H && "CompositionEvent" in window, Nr = null;
  H && "documentMode" in document && (Nr = document.documentMode);
  var Wc = H && "TextEvent" in window && !Nr, La = H && (!zo || Nr && 8 < Nr && 11 >= Nr), Ma = " ", Da = !1;
  function Ia(e, t) {
    switch (e) {
      case "keyup":
        return Hc.indexOf(t.keyCode) !== -1;
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
  function Oa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Wn = !1;
  function Qc(e, t) {
    switch (e) {
      case "compositionend":
        return Oa(t);
      case "keypress":
        return t.which !== 32 ? null : (Da = !0, Ma);
      case "textInput":
        return e = t.data, e === Ma && Da ? null : e;
      default:
        return null;
    }
  }
  function Yc(e, t) {
    if (Wn) return e === "compositionend" || !zo && Ia(e, t) ? (e = Na(), hl = Co = rn = null, Wn = !1, e) : null;
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
        return La && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ja(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kc[e.type] : t === "textarea";
  }
  function Fa(e, t, n, r) {
    rl(r), t = El(t, "onChange"), 0 < t.length && (n = new _o("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Pr = null, Tr = null;
  function Xc(e) {
    tu(e, 0);
  }
  function wl(e) {
    var t = Gn(e);
    if (On(t)) return e;
  }
  function Gc(e, t) {
    if (e === "change") return t;
  }
  var Ua = !1;
  if (H) {
    var Lo;
    if (H) {
      var Mo = "oninput" in document;
      if (!Mo) {
        var Ba = document.createElement("div");
        Ba.setAttribute("oninput", "return;"), Mo = typeof Ba.oninput == "function";
      }
      Lo = Mo;
    } else Lo = !1;
    Ua = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function Aa() {
    Pr && (Pr.detachEvent("onpropertychange", $a), Tr = Pr = null);
  }
  function $a(e) {
    if (e.propertyName === "value" && wl(Tr)) {
      var t = [];
      Fa(t, Tr, e, An(e)), et(Xc, t);
    }
  }
  function Zc(e, t, n) {
    e === "focusin" ? (Aa(), Pr = t, Tr = n, Pr.attachEvent("onpropertychange", $a)) : e === "focusout" && Aa();
  }
  function Jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(Tr);
  }
  function qc(e, t) {
    if (e === "click") return wl(t);
  }
  function bc(e, t) {
    if (e === "input" || e === "change") return wl(t);
  }
  function ed(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : ed;
  function Rr(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!M.call(t, l) || !Et(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Va(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ha(e, t) {
    var n = Va(e);
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
      n = Va(n);
    }
  }
  function Wa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Qa() {
    for (var e = window, t = wn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wn(e.document);
    }
    return t;
  }
  function Do(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function td(e) {
    var t = Qa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Wa(n.ownerDocument.documentElement, n)) {
      if (r !== null && Do(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ha(n, o);
          var i = Ha(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var nd = H && "documentMode" in document && 11 >= document.documentMode, Qn = null, Io = null, zr = null, Oo = !1;
  function Ya(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo || Qn == null || Qn !== wn(r) || (r = Qn, "selectionStart" in r && Do(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zr && Rr(zr, r) || (zr = r, r = El(Io, "onSelect"), 0 < r.length && (t = new _o("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qn)));
  }
  function xl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Yn = { animationend: xl("Animation", "AnimationEnd"), animationiteration: xl("Animation", "AnimationIteration"), animationstart: xl("Animation", "AnimationStart"), transitionend: xl("Transition", "TransitionEnd") }, jo = {}, Ka = {};
  H && (Ka = document.createElement("div").style, "AnimationEvent" in window || (delete Yn.animationend.animation, delete Yn.animationiteration.animation, delete Yn.animationstart.animation), "TransitionEvent" in window || delete Yn.transitionend.transition);
  function kl(e) {
    if (jo[e]) return jo[e];
    if (!Yn[e]) return e;
    var t = Yn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ka) return jo[e] = t[n];
    return e;
  }
  var Xa = kl("animationend"), Ga = kl("animationiteration"), Za = kl("animationstart"), Ja = kl("transitionend"), qa = /* @__PURE__ */ new Map(), ba = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(e, t) {
    qa.set(e, t), Y(t, [e]);
  }
  for (var Fo = 0; Fo < ba.length; Fo++) {
    var Uo = ba[Fo], rd = Uo.toLowerCase(), ld = Uo[0].toUpperCase() + Uo.slice(1);
    ln(rd, "on" + ld);
  }
  ln(Xa, "onAnimationEnd"), ln(Ga, "onAnimationIteration"), ln(Za, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(Ja, "onTransitionEnd"), q("onMouseEnter", ["mouseout", "mouseover"]), q("onMouseLeave", ["mouseout", "mouseover"]), q("onPointerEnter", ["pointerout", "pointerover"]), q("onPointerLeave", ["pointerout", "pointerover"]), Y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), od = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
  function eu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, rc(r, t, void 0, e), e.currentTarget = null;
  }
  function tu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i], u = a.instance, h = a.currentTarget;
          if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
          eu(l, a, h), o = u;
        }
        else for (i = 0; i < r.length; i++) {
          if (a = r[i], u = a.instance, h = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
          eu(l, a, h), o = u;
        }
      }
    }
    if (ol) throw e = ho, ol = !1, ho = null, e;
  }
  function ge(e, t) {
    var n = t[Yo];
    n === void 0 && (n = t[Yo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (nu(t, e, 2, !1), n.add(r));
  }
  function Bo(e, t, n) {
    var r = 0;
    t && (r |= 4), nu(n, e, r, t);
  }
  var Sl = "_reactListening" + Math.random().toString(36).slice(2);
  function Mr(e) {
    if (!e[Sl]) {
      e[Sl] = !0, F.forEach(function(n) {
        n !== "selectionchange" && (od.has(n) || Bo(n, !1, e), Bo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sl] || (t[Sl] = !0, Bo("selectionchange", !1, t));
    }
  }
  function nu(e, t, n, r) {
    switch (_a(t)) {
      case 1:
        var l = wc;
        break;
      case 4:
        l = xc;
        break;
      default:
        l = So;
    }
    n = l.bind(null, t, n, e), l = void 0, !kt || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Ao(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || a.nodeType === 8 && a.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var u = i.tag;
          if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
          i = i.return;
        }
        for (; a !== null; ) {
          if (i = Sn(a), i === null) return;
          if (u = i.tag, u === 5 || u === 6) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
    et(function() {
      var h = o, x = An(n), k = [];
      e: {
        var w = qa.get(e);
        if (w !== void 0) {
          var R = _o, D = e;
          switch (e) {
            case "keypress":
              if (gl(n) === 0) break e;
            case "keydown":
            case "keyup":
              R = Oc;
              break;
            case "focusin":
              D = "focus", R = To;
              break;
            case "focusout":
              D = "blur", R = To;
              break;
            case "beforeblur":
            case "afterblur":
              R = To;
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
              R = Ta;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = Ec;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Uc;
              break;
            case Xa:
            case Ga:
            case Za:
              R = Nc;
              break;
            case Ja:
              R = Ac;
              break;
            case "scroll":
              R = kc;
              break;
            case "wheel":
              R = Vc;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Tc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = za;
          }
          var I = (t & 4) !== 0, Re = !I && e === "scroll", p = I ? w !== null ? w + "Capture" : null : w;
          I = [];
          for (var s = h, m; s !== null; ) {
            m = s;
            var S = m.stateNode;
            if (m.tag === 5 && S !== null && (m = S, p !== null && (S = tt(s, p), S != null && I.push(Dr(s, S, m)))), Re) break;
            s = s.return;
          }
          0 < I.length && (w = new R(w, D, null, n, x), k.push({ event: w, listeners: I }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", w && n !== hr && (D = n.relatedTarget || n.fromElement) && (Sn(D) || D[Ht])) break e;
          if ((R || w) && (w = x.window === x ? x : (w = x.ownerDocument) ? w.defaultView || w.parentWindow : window, R ? (D = n.relatedTarget || n.toElement, R = h, D = D ? Sn(D) : null, D !== null && (Re = kn(D), D !== Re || D.tag !== 5 && D.tag !== 6) && (D = null)) : (R = null, D = h), R !== D)) {
            if (I = Ta, S = "onMouseLeave", p = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (I = za, S = "onPointerLeave", p = "onPointerEnter", s = "pointer"), Re = R == null ? w : Gn(R), m = D == null ? w : Gn(D), w = new I(S, s + "leave", R, n, x), w.target = Re, w.relatedTarget = m, S = null, Sn(x) === h && (I = new I(p, s + "enter", D, n, x), I.target = m, I.relatedTarget = Re, S = I), Re = S, R && D) t: {
              for (I = R, p = D, s = 0, m = I; m; m = Kn(m)) s++;
              for (m = 0, S = p; S; S = Kn(S)) m++;
              for (; 0 < s - m; ) I = Kn(I), s--;
              for (; 0 < m - s; ) p = Kn(p), m--;
              for (; s--; ) {
                if (I === p || p !== null && I === p.alternate) break t;
                I = Kn(I), p = Kn(p);
              }
              I = null;
            }
            else I = null;
            R !== null && ru(k, w, R, I, !1), D !== null && Re !== null && ru(k, Re, D, I, !0);
          }
        }
        e: {
          if (w = h ? Gn(h) : window, R = w.nodeName && w.nodeName.toLowerCase(), R === "select" || R === "input" && w.type === "file") var j = Gc;
          else if (ja(w)) if (Ua) j = bc;
          else {
            j = Jc;
            var $ = Zc;
          }
          else (R = w.nodeName) && R.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (j = qc);
          if (j && (j = j(e, h))) {
            Fa(k, j, n, x);
            break e;
          }
          $ && $(e, w, h), e === "focusout" && ($ = w._wrapperState) && $.controlled && w.type === "number" && pr(w, "number", w.value);
        }
        switch ($ = h ? Gn(h) : window, e) {
          case "focusin":
            (ja($) || $.contentEditable === "true") && (Qn = $, Io = h, zr = null);
            break;
          case "focusout":
            zr = Io = Qn = null;
            break;
          case "mousedown":
            Oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Oo = !1, Ya(k, n, x);
            break;
          case "selectionchange":
            if (nd) break;
          case "keydown":
          case "keyup":
            Ya(k, n, x);
        }
        var V;
        if (zo) e: {
          switch (e) {
            case "compositionstart":
              var G = "onCompositionStart";
              break e;
            case "compositionend":
              G = "onCompositionEnd";
              break e;
            case "compositionupdate":
              G = "onCompositionUpdate";
              break e;
          }
          G = void 0;
        }
        else Wn ? Ia(e, n) && (G = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (G = "onCompositionStart");
        G && (La && n.locale !== "ko" && (Wn || G !== "onCompositionStart" ? G === "onCompositionEnd" && Wn && (V = Na()) : (rn = x, Co = "value" in rn ? rn.value : rn.textContent, Wn = !0)), $ = El(h, G), 0 < $.length && (G = new Ra(G, e, null, n, x), k.push({ event: G, listeners: $ }), V ? G.data = V : (V = Oa(n), V !== null && (G.data = V)))), (V = Wc ? Qc(e, n) : Yc(e, n)) && (h = El(h, "onBeforeInput"), 0 < h.length && (x = new Ra("onBeforeInput", "beforeinput", null, n, x), k.push({ event: x, listeners: h }), x.data = V));
      }
      tu(k, t);
    });
  }
  function Dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function El(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = tt(e, n), o != null && r.unshift(Dr(e, o, l)), o = tt(e, t), o != null && r.push(Dr(e, o, l))), e = e.return;
    }
    return r;
  }
  function Kn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ru(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var a = n, u = a.alternate, h = a.stateNode;
      if (u !== null && u === r) break;
      a.tag === 5 && h !== null && (a = h, l ? (u = tt(n, o), u != null && i.unshift(Dr(n, u, a))) : l || (u = tt(n, o), u != null && i.push(Dr(n, u, a)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var id = /\r\n?/g, ad = /\u0000|\uFFFD/g;
  function lu(e) {
    return (typeof e == "string" ? e : "" + e).replace(id, `
`).replace(ad, "");
  }
  function Cl(e, t, n) {
    if (t = lu(t), lu(e) !== t && n) throw Error(c(425));
  }
  function _l() {
  }
  var $o = null, Vo = null;
  function Ho(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wo = typeof setTimeout == "function" ? setTimeout : void 0, ud = typeof clearTimeout == "function" ? clearTimeout : void 0, ou = typeof Promise == "function" ? Promise : void 0, sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ou < "u" ? function(e) {
    return ou.resolve(null).then(e).catch(cd);
  } : Wo;
  function cd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Er(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Er(t);
  }
  function on(e) {
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
  function iu(e) {
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
  var Xn = Math.random().toString(36).slice(2), Ut = "__reactFiber$" + Xn, Ir = "__reactProps$" + Xn, Ht = "__reactContainer$" + Xn, Yo = "__reactEvents$" + Xn, dd = "__reactListeners$" + Xn, fd = "__reactHandles$" + Xn;
  function Sn(e) {
    var t = e[Ut];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ht] || n[Ut]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = iu(e); e !== null; ) {
          if (n = e[Ut]) return n;
          e = iu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Or(e) {
    return e = e[Ut] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Nl(e) {
    return e[Ir] || null;
  }
  var Ko = [], Zn = -1;
  function an(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Zn || (e.current = Ko[Zn], Ko[Zn] = null, Zn--);
  }
  function he(e, t) {
    Zn++, Ko[Zn] = e.current, e.current = t;
  }
  var un = {}, We = an(un), nt = an(!1), En = un;
  function Jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function rt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Pl() {
    ve(nt), ve(We);
  }
  function au(e, t, n) {
    if (We.current !== un) throw Error(c(168));
    he(We, t), he(nt, n);
  }
  function uu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, Q(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Tl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, En = We.current, he(We, e), he(nt, nt.current), !0;
  }
  function su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    n ? (e = uu(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, ve(nt), ve(We), he(We, e)) : ve(nt), he(nt, n);
  }
  var Wt = null, Rl = !1, Xo = !1;
  function cu(e) {
    Wt === null ? Wt = [e] : Wt.push(e);
  }
  function pd(e) {
    Rl = !0, cu(e);
  }
  function sn() {
    if (!Xo && Wt !== null) {
      Xo = !0;
      var e = 0, t = fe;
      try {
        var n = Wt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Wt = null, Rl = !1;
      } catch (l) {
        throw Wt !== null && (Wt = Wt.slice(e + 1)), fa(go, sn), l;
      } finally {
        fe = t, Xo = !1;
      }
    }
    return null;
  }
  var qn = [], bn = 0, zl = null, Ll = 0, mt = [], ht = 0, Cn = null, Qt = 1, Yt = "";
  function _n(e, t) {
    qn[bn++] = Ll, qn[bn++] = zl, zl = e, Ll = t;
  }
  function du(e, t, n) {
    mt[ht++] = Qt, mt[ht++] = Yt, mt[ht++] = Cn, Cn = e;
    var r = Qt;
    e = Yt;
    var l = 32 - St(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - St(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Qt = 1 << 32 - St(t) + l | n << l | r, Yt = o + e;
    } else Qt = 1 << o | n << l | r, Yt = e;
  }
  function Go(e) {
    e.return !== null && (_n(e, 1), du(e, 1, 0));
  }
  function Zo(e) {
    for (; e === zl; ) zl = qn[--bn], qn[bn] = null, Ll = qn[--bn], qn[bn] = null;
    for (; e === Cn; ) Cn = mt[--ht], mt[ht] = null, Yt = mt[--ht], mt[ht] = null, Qt = mt[--ht], mt[ht] = null;
  }
  var ct = null, dt = null, ye = !1, Ct = null;
  function fu(e, t) {
    var n = wt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function pu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, dt = on(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, dt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cn !== null ? { id: Qt, overflow: Yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ct = e, dt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function qo(e) {
    if (ye) {
      var t = dt;
      if (t) {
        var n = t;
        if (!pu(e, t)) {
          if (Jo(e)) throw Error(c(418));
          t = on(n.nextSibling);
          var r = ct;
          t && pu(e, t) ? fu(r, n) : (e.flags = e.flags & -4097 | 2, ye = !1, ct = e);
        }
      } else {
        if (Jo(e)) throw Error(c(418));
        e.flags = e.flags & -4097 | 2, ye = !1, ct = e;
      }
    }
  }
  function mu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
  }
  function Ml(e) {
    if (e !== ct) return !1;
    if (!ye) return mu(e), ye = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ho(e.type, e.memoizedProps)), t && (t = dt)) {
      if (Jo(e)) throw hu(), Error(c(418));
      for (; t; ) fu(e, t), t = on(t.nextSibling);
    }
    if (mu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                dt = on(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = ct ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function hu() {
    for (var e = dt; e; ) e = on(e.nextSibling);
  }
  function er() {
    dt = ct = null, ye = !1;
  }
  function bo(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var md = Ce.ReactCurrentBatchConfig;
  function jr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(c(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(c(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var a = l.refs;
          i === null ? delete a[o] : a[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(c(284));
      if (!n._owner) throw Error(c(290, e));
    }
    return e;
  }
  function Dl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function gu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function vu(e) {
    function t(p, s) {
      if (e) {
        var m = p.deletions;
        m === null ? (p.deletions = [s], p.flags |= 16) : m.push(s);
      }
    }
    function n(p, s) {
      if (!e) return null;
      for (; s !== null; ) t(p, s), s = s.sibling;
      return null;
    }
    function r(p, s) {
      for (p = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? p.set(s.key, s) : p.set(s.index, s), s = s.sibling;
      return p;
    }
    function l(p, s) {
      return p = vn(p, s), p.index = 0, p.sibling = null, p;
    }
    function o(p, s, m) {
      return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < s ? (p.flags |= 2, s) : m) : (p.flags |= 2, s)) : (p.flags |= 1048576, s);
    }
    function i(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, s, m, S) {
      return s === null || s.tag !== 6 ? (s = Wi(m, p.mode, S), s.return = p, s) : (s = l(s, m), s.return = p, s);
    }
    function u(p, s, m, S) {
      var j = m.type;
      return j === _e ? x(p, s, m.props.children, S, m.key) : s !== null && (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ne && gu(j) === s.type) ? (S = l(s, m.props), S.ref = jr(p, s, m), S.return = p, S) : (S = ro(m.type, m.key, m.props, null, p.mode, S), S.ref = jr(p, s, m), S.return = p, S);
    }
    function h(p, s, m, S) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = Qi(m, p.mode, S), s.return = p, s) : (s = l(s, m.children || []), s.return = p, s);
    }
    function x(p, s, m, S, j) {
      return s === null || s.tag !== 7 ? (s = Dn(m, p.mode, S, j), s.return = p, s) : (s = l(s, m), s.return = p, s);
    }
    function k(p, s, m) {
      if (typeof s == "string" && s !== "" || typeof s == "number") return s = Wi("" + s, p.mode, m), s.return = p, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case De:
            return m = ro(s.type, s.key, s.props, null, p.mode, m), m.ref = jr(p, null, s), m.return = p, m;
          case de:
            return s = Qi(s, p.mode, m), s.return = p, s;
          case Ne:
            var S = s._init;
            return k(p, S(s._payload), m);
        }
        if (Jt(s) || E(s)) return s = Dn(s, p.mode, m, null), s.return = p, s;
        Dl(p, s);
      }
      return null;
    }
    function w(p, s, m, S) {
      var j = s !== null ? s.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : a(p, s, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case De:
            return m.key === j ? u(p, s, m, S) : null;
          case de:
            return m.key === j ? h(p, s, m, S) : null;
          case Ne:
            return j = m._init, w(
              p,
              s,
              j(m._payload),
              S
            );
        }
        if (Jt(m) || E(m)) return j !== null ? null : x(p, s, m, S, null);
        Dl(p, m);
      }
      return null;
    }
    function R(p, s, m, S, j) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(m) || null, a(s, p, "" + S, j);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case De:
            return p = p.get(S.key === null ? m : S.key) || null, u(s, p, S, j);
          case de:
            return p = p.get(S.key === null ? m : S.key) || null, h(s, p, S, j);
          case Ne:
            var $ = S._init;
            return R(p, s, m, $(S._payload), j);
        }
        if (Jt(S) || E(S)) return p = p.get(m) || null, x(s, p, S, j, null);
        Dl(s, S);
      }
      return null;
    }
    function D(p, s, m, S) {
      for (var j = null, $ = null, V = s, G = s = 0, Ae = null; V !== null && G < m.length; G++) {
        V.index > G ? (Ae = V, V = null) : Ae = V.sibling;
        var ae = w(p, V, m[G], S);
        if (ae === null) {
          V === null && (V = Ae);
          break;
        }
        e && V && ae.alternate === null && t(p, V), s = o(ae, s, G), $ === null ? j = ae : $.sibling = ae, $ = ae, V = Ae;
      }
      if (G === m.length) return n(p, V), ye && _n(p, G), j;
      if (V === null) {
        for (; G < m.length; G++) V = k(p, m[G], S), V !== null && (s = o(V, s, G), $ === null ? j = V : $.sibling = V, $ = V);
        return ye && _n(p, G), j;
      }
      for (V = r(p, V); G < m.length; G++) Ae = R(V, p, G, m[G], S), Ae !== null && (e && Ae.alternate !== null && V.delete(Ae.key === null ? G : Ae.key), s = o(Ae, s, G), $ === null ? j = Ae : $.sibling = Ae, $ = Ae);
      return e && V.forEach(function(yn) {
        return t(p, yn);
      }), ye && _n(p, G), j;
    }
    function I(p, s, m, S) {
      var j = E(m);
      if (typeof j != "function") throw Error(c(150));
      if (m = j.call(m), m == null) throw Error(c(151));
      for (var $ = j = null, V = s, G = s = 0, Ae = null, ae = m.next(); V !== null && !ae.done; G++, ae = m.next()) {
        V.index > G ? (Ae = V, V = null) : Ae = V.sibling;
        var yn = w(p, V, ae.value, S);
        if (yn === null) {
          V === null && (V = Ae);
          break;
        }
        e && V && yn.alternate === null && t(p, V), s = o(yn, s, G), $ === null ? j = yn : $.sibling = yn, $ = yn, V = Ae;
      }
      if (ae.done) return n(
        p,
        V
      ), ye && _n(p, G), j;
      if (V === null) {
        for (; !ae.done; G++, ae = m.next()) ae = k(p, ae.value, S), ae !== null && (s = o(ae, s, G), $ === null ? j = ae : $.sibling = ae, $ = ae);
        return ye && _n(p, G), j;
      }
      for (V = r(p, V); !ae.done; G++, ae = m.next()) ae = R(V, p, G, ae.value, S), ae !== null && (e && ae.alternate !== null && V.delete(ae.key === null ? G : ae.key), s = o(ae, s, G), $ === null ? j = ae : $.sibling = ae, $ = ae);
      return e && V.forEach(function(Yd) {
        return t(p, Yd);
      }), ye && _n(p, G), j;
    }
    function Re(p, s, m, S) {
      if (typeof m == "object" && m !== null && m.type === _e && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case De:
            e: {
              for (var j = m.key, $ = s; $ !== null; ) {
                if ($.key === j) {
                  if (j = m.type, j === _e) {
                    if ($.tag === 7) {
                      n(p, $.sibling), s = l($, m.props.children), s.return = p, p = s;
                      break e;
                    }
                  } else if ($.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ne && gu(j) === $.type) {
                    n(p, $.sibling), s = l($, m.props), s.ref = jr(p, $, m), s.return = p, p = s;
                    break e;
                  }
                  n(p, $);
                  break;
                } else t(p, $);
                $ = $.sibling;
              }
              m.type === _e ? (s = Dn(m.props.children, p.mode, S, m.key), s.return = p, p = s) : (S = ro(m.type, m.key, m.props, null, p.mode, S), S.ref = jr(p, s, m), S.return = p, p = S);
            }
            return i(p);
          case de:
            e: {
              for ($ = m.key; s !== null; ) {
                if (s.key === $) if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                  n(p, s.sibling), s = l(s, m.children || []), s.return = p, p = s;
                  break e;
                } else {
                  n(p, s);
                  break;
                }
                else t(p, s);
                s = s.sibling;
              }
              s = Qi(m, p.mode, S), s.return = p, p = s;
            }
            return i(p);
          case Ne:
            return $ = m._init, Re(p, s, $(m._payload), S);
        }
        if (Jt(m)) return D(p, s, m, S);
        if (E(m)) return I(p, s, m, S);
        Dl(p, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, s !== null && s.tag === 6 ? (n(p, s.sibling), s = l(s, m), s.return = p, p = s) : (n(p, s), s = Wi(m, p.mode, S), s.return = p, p = s), i(p)) : n(p, s);
    }
    return Re;
  }
  var tr = vu(!0), yu = vu(!1), Il = an(null), Ol = null, nr = null, ei = null;
  function ti() {
    ei = nr = Ol = null;
  }
  function ni(e) {
    var t = Il.current;
    ve(Il), e._currentValue = t;
  }
  function ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function rr(e, t) {
    Ol = e, ei = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (lt = !0), e.firstContext = null);
  }
  function gt(e) {
    var t = e._currentValue;
    if (ei !== e) if (e = { context: e, memoizedValue: t, next: null }, nr === null) {
      if (Ol === null) throw Error(c(308));
      nr = e, Ol.dependencies = { lanes: 0, firstContext: e };
    } else nr = nr.next = e;
    return t;
  }
  var Nn = null;
  function li(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  function wu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Kt(e, r);
  }
  function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var cn = !1;
  function oi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function xu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Xt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function dn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, le & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Kt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Kt(e, n);
  }
  function jl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, wo(e, n);
    }
  }
  function ku(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Fl(e, t, n, r) {
    var l = e.updateQueue;
    cn = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var u = a, h = u.next;
      u.next = null, i === null ? o = h : i.next = h, i = u;
      var x = e.alternate;
      x !== null && (x = x.updateQueue, a = x.lastBaseUpdate, a !== i && (a === null ? x.firstBaseUpdate = h : a.next = h, x.lastBaseUpdate = u));
    }
    if (o !== null) {
      var k = l.baseState;
      i = 0, x = h = u = null, a = o;
      do {
        var w = a.lane, R = a.eventTime;
        if ((r & w) === w) {
          x !== null && (x = x.next = {
            eventTime: R,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var D = e, I = a;
            switch (w = t, R = n, I.tag) {
              case 1:
                if (D = I.payload, typeof D == "function") {
                  k = D.call(R, k, w);
                  break e;
                }
                k = D;
                break e;
              case 3:
                D.flags = D.flags & -65537 | 128;
              case 0:
                if (D = I.payload, w = typeof D == "function" ? D.call(R, k, w) : D, w == null) break e;
                k = _({}, k, w);
                break e;
              case 2:
                cn = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [a] : w.push(a));
        } else R = { eventTime: R, lane: w, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, x === null ? (h = x = R, u = k) : x = x.next = R, i |= w;
        if (a = a.next, a === null) {
          if (a = l.shared.pending, a === null) break;
          w = a, a = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
        }
      } while (!0);
      if (x === null && (u = k), l.baseState = u, l.firstBaseUpdate = h, l.lastBaseUpdate = x, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Rn |= i, e.lanes = i, e.memoizedState = k;
    }
  }
  function Su(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(c(191, l));
        l.call(r);
      }
    }
  }
  var Fr = {}, Bt = an(Fr), Ur = an(Fr), Br = an(Fr);
  function Pn(e) {
    if (e === Fr) throw Error(c(174));
    return e;
  }
  function ii(e, t) {
    switch (he(Br, t), he(Ur, e), he(Bt, Fr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Mt(t, e);
    }
    ve(Bt), he(Bt, t);
  }
  function lr() {
    ve(Bt), ve(Ur), ve(Br);
  }
  function Eu(e) {
    Pn(Br.current);
    var t = Pn(Bt.current), n = Mt(t, e.type);
    t !== n && (he(Ur, e), he(Bt, n));
  }
  function ai(e) {
    Ur.current === e && (ve(Bt), ve(Ur));
  }
  var ke = an(0);
  function Ul(e) {
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
  var ui = [];
  function si() {
    for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
    ui.length = 0;
  }
  var Bl = Ce.ReactCurrentDispatcher, ci = Ce.ReactCurrentBatchConfig, Tn = 0, Se = null, Ie = null, Ue = null, Al = !1, Ar = !1, $r = 0, hd = 0;
  function Qe() {
    throw Error(c(321));
  }
  function di(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function fi(e, t, n, r, l, o) {
    if (Tn = o, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bl.current = e === null || e.memoizedState === null ? wd : xd, e = n(r, l), Ar) {
      o = 0;
      do {
        if (Ar = !1, $r = 0, 25 <= o) throw Error(c(301));
        o += 1, Ue = Ie = null, t.updateQueue = null, Bl.current = kd, e = n(r, l);
      } while (Ar);
    }
    if (Bl.current = Hl, t = Ie !== null && Ie.next !== null, Tn = 0, Ue = Ie = Se = null, Al = !1, t) throw Error(c(300));
    return e;
  }
  function pi() {
    var e = $r !== 0;
    return $r = 0, e;
  }
  function At() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Se.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function vt() {
    if (Ie === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = Ue === null ? Se.memoizedState : Ue.next;
    if (t !== null) Ue = t, Ie = e;
    else {
      if (e === null) throw Error(c(310));
      Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Ue === null ? Se.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function Vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function mi(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = Ie, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var a = i = null, u = null, h = o;
      do {
        var x = h.lane;
        if ((Tn & x) === x) u !== null && (u = u.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var k = {
            lane: x,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          u === null ? (a = u = k, i = r) : u = u.next = k, Se.lanes |= x, Rn |= x;
        }
        h = h.next;
      } while (h !== null && h !== o);
      u === null ? i = r : u.next = a, Et(r, t.memoizedState) || (lt = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, Se.lanes |= o, Rn |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function hi(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      Et(o, t.memoizedState) || (lt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Cu() {
  }
  function _u(e, t) {
    var n = Se, r = vt(), l = t(), o = !Et(r.memoizedState, l);
    if (o && (r.memoizedState = l, lt = !0), r = r.queue, gi(Tu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, Hr(9, Pu.bind(null, n, r, l, t), void 0, null), Be === null) throw Error(c(349));
      Tn & 30 || Nu(n, t, l);
    }
    return l;
  }
  function Nu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Pu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ru(t) && zu(e);
  }
  function Tu(e, t, n) {
    return n(function() {
      Ru(t) && zu(e);
    });
  }
  function Ru(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function zu(e) {
    var t = Kt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function Lu(e) {
    var t = At();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = yd.bind(null, Se, e), [t.memoizedState, e];
  }
  function Hr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Mu() {
    return vt().memoizedState;
  }
  function $l(e, t, n, r) {
    var l = At();
    Se.flags |= e, l.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Vl(e, t, n, r) {
    var l = vt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ie !== null) {
      var i = Ie.memoizedState;
      if (o = i.destroy, r !== null && di(r, i.deps)) {
        l.memoizedState = Hr(t, n, o, r);
        return;
      }
    }
    Se.flags |= e, l.memoizedState = Hr(1 | t, n, o, r);
  }
  function Du(e, t) {
    return $l(8390656, 8, e, t);
  }
  function gi(e, t) {
    return Vl(2048, 8, e, t);
  }
  function Iu(e, t) {
    return Vl(4, 2, e, t);
  }
  function Ou(e, t) {
    return Vl(4, 4, e, t);
  }
  function ju(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Fu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vl(4, 4, ju.bind(null, t, e), n);
  }
  function vi() {
  }
  function Uu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && di(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Bu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && di(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Au(e, t, n) {
    return Tn & 21 ? (Et(n, t) || (n = ga(), Se.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, lt = !0), e.memoizedState = n);
  }
  function gd(e, t) {
    var n = fe;
    fe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ci.transition;
    ci.transition = {};
    try {
      e(!1), t();
    } finally {
      fe = n, ci.transition = r;
    }
  }
  function $u() {
    return vt().memoizedState;
  }
  function vd(e, t, n) {
    var r = hn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Vu(e)) Hu(t, n);
    else if (n = wu(e, t, n, r), n !== null) {
      var l = qe();
      Tt(n, e, r, l), Wu(n, t, r);
    }
  }
  function yd(e, t, n) {
    var r = hn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Vu(e)) Hu(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, a = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = a, Et(a, i)) {
          var u = t.interleaved;
          u === null ? (l.next = l, li(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = wu(e, t, l, r), n !== null && (l = qe(), Tt(n, e, r, l), Wu(n, t, r));
    }
  }
  function Vu(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function Hu(e, t) {
    Ar = Al = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Wu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, wo(e, n);
    }
  }
  var Hl = { readContext: gt, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, wd = { readContext: gt, useCallback: function(e, t) {
    return At().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: gt, useEffect: Du, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, $l(
      4194308,
      4,
      ju.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return $l(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return $l(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = At();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = At();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vd.bind(null, Se, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = At();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Lu, useDebugValue: vi, useDeferredValue: function(e) {
    return At().memoizedState = e;
  }, useTransition: function() {
    var e = Lu(!1), t = e[0];
    return e = gd.bind(null, e[1]), At().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Se, l = At();
    if (ye) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(c(349));
      Tn & 30 || Nu(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Du(Tu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Hr(9, Pu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = At(), t = Be.identifierPrefix;
    if (ye) {
      var n = Yt, r = Qt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = hd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, xd = {
    readContext: gt,
    useCallback: Uu,
    useContext: gt,
    useEffect: gi,
    useImperativeHandle: Fu,
    useInsertionEffect: Iu,
    useLayoutEffect: Ou,
    useMemo: Bu,
    useReducer: mi,
    useRef: Mu,
    useState: function() {
      return mi(Vr);
    },
    useDebugValue: vi,
    useDeferredValue: function(e) {
      var t = vt();
      return Au(t, Ie.memoizedState, e);
    },
    useTransition: function() {
      var e = mi(Vr)[0], t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cu,
    useSyncExternalStore: _u,
    useId: $u,
    unstable_isNewReconciler: !1
  }, kd = { readContext: gt, useCallback: Uu, useContext: gt, useEffect: gi, useImperativeHandle: Fu, useInsertionEffect: Iu, useLayoutEffect: Ou, useMemo: Bu, useReducer: hi, useRef: Mu, useState: function() {
    return hi(Vr);
  }, useDebugValue: vi, useDeferredValue: function(e) {
    var t = vt();
    return Ie === null ? t.memoizedState = e : Au(t, Ie.memoizedState, e);
  }, useTransition: function() {
    var e = hi(Vr)[0], t = vt().memoizedState;
    return [e, t];
  }, useMutableSource: Cu, useSyncExternalStore: _u, useId: $u, unstable_isNewReconciler: !1 };
  function _t(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function yi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wl = { isMounted: function(e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = qe(), l = hn(e), o = Xt(r, l);
    o.payload = t, n != null && (o.callback = n), t = dn(e, o, l), t !== null && (Tt(t, e, l, r), jl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = qe(), l = hn(e), o = Xt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = dn(e, o, l), t !== null && (Tt(t, e, l, r), jl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = qe(), r = hn(e), l = Xt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = dn(e, l, r), t !== null && (Tt(t, e, r, n), jl(t, e, r));
  } };
  function Qu(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(l, o) : !0;
  }
  function Yu(e, t, n) {
    var r = !1, l = un, o = t.contextType;
    return typeof o == "object" && o !== null ? o = gt(o) : (l = rt(t) ? En : We.current, r = t.contextTypes, o = (r = r != null) ? Jn(e, l) : un), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Ku(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wl.enqueueReplaceState(t, t.state, null);
  }
  function wi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, oi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = gt(o) : (o = rt(t) ? En : We.current, l.context = Jn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (yi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Wl.enqueueReplaceState(l, l.state, null), Fl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function or(e, t) {
    try {
      var n = "", r = t;
      do
        n += X(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ki(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Sd = typeof WeakMap == "function" ? WeakMap : Map;
  function Xu(e, t, n) {
    n = Xt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Jl || (Jl = !0, ji = r), ki(e, t);
    }, n;
  }
  function Gu(e, t, n) {
    n = Xt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ki(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ki(e, t), typeof r != "function" && (pn === null ? pn = /* @__PURE__ */ new Set([this]) : pn.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Zu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Sd();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = jd.bind(null, e, t, n), t.then(e, e));
  }
  function Ju(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function qu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xt(-1, 1), t.tag = 2, dn(n, t, 1))), n.lanes |= 1), e);
  }
  var Ed = Ce.ReactCurrentOwner, lt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? yu(t, null, n, r) : tr(t, e.child, n, r);
  }
  function bu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return rr(t, l), r = fi(e, t, n, r, o, l), n = pi(), e !== null && !lt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Gt(e, t, l)) : (ye && n && Go(t), t.flags |= 1, Je(e, t, r, l), t.child);
  }
  function es(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Hi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ts(e, t, o, r, l)) : (e = ro(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Rr, n(i, r) && e.ref === t.ref) return Gt(e, t, l);
    }
    return t.flags |= 1, e = vn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ts(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Rr(o, r) && e.ref === t.ref) if (lt = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (lt = !0);
      else return t.lanes = e.lanes, Gt(e, t, l);
    }
    return Si(e, t, n, r, l);
  }
  function ns(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(ar, ft), ft |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(ar, ft), ft |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, he(ar, ft), ft |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, he(ar, ft), ft |= r;
    return Je(e, t, l, n), t.child;
  }
  function rs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Si(e, t, n, r, l) {
    var o = rt(n) ? En : We.current;
    return o = Jn(t, o), rr(t, l), n = fi(e, t, n, r, o, l), r = pi(), e !== null && !lt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Gt(e, t, l)) : (ye && r && Go(t), t.flags |= 1, Je(e, t, n, l), t.child);
  }
  function ls(e, t, n, r, l) {
    if (rt(n)) {
      var o = !0;
      Tl(t);
    } else o = !1;
    if (rr(t, l), t.stateNode === null) Yl(e, t), Yu(t, n, r), wi(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, a = t.memoizedProps;
      i.props = a;
      var u = i.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = gt(h) : (h = rt(n) ? En : We.current, h = Jn(t, h));
      var x = n.getDerivedStateFromProps, k = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== h) && Ku(t, i, r, h), cn = !1;
      var w = t.memoizedState;
      i.state = w, Fl(t, r, i, l), u = t.memoizedState, a !== r || w !== u || nt.current || cn ? (typeof x == "function" && (yi(t, n, x, r), u = t.memoizedState), (a = cn || Qu(t, n, a, r, w, u, h)) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = h, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, xu(e, t), a = t.memoizedProps, h = t.type === t.elementType ? a : _t(t.type, a), i.props = h, k = t.pendingProps, w = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = gt(u) : (u = rt(n) ? En : We.current, u = Jn(t, u));
      var R = n.getDerivedStateFromProps;
      (x = typeof R == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== k || w !== u) && Ku(t, i, r, u), cn = !1, w = t.memoizedState, i.state = w, Fl(t, r, i, l);
      var D = t.memoizedState;
      a !== k || w !== D || nt.current || cn ? (typeof R == "function" && (yi(t, n, R, r), D = t.memoizedState), (h = cn || Qu(t, n, h, r, w, D, u) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, D, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, D, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = D), i.props = r, i.state = D, i.context = u, r = h) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ei(e, t, n, r, o, l);
  }
  function Ei(e, t, n, r, l, o) {
    rs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && su(t, n, !1), Gt(e, t, o);
    r = t.stateNode, Ed.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = tr(t, e.child, null, o), t.child = tr(t, null, a, o)) : Je(e, t, a, o), t.memoizedState = r.state, l && su(t, n, !0), t.child;
  }
  function os(e) {
    var t = e.stateNode;
    t.pendingContext ? au(e, t.pendingContext, t.pendingContext !== t.context) : t.context && au(e, t.context, !1), ii(e, t.containerInfo);
  }
  function is(e, t, n, r, l) {
    return er(), bo(l), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var Ci = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _i(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function as(e, t, n) {
    var r = t.pendingProps, l = ke.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), he(ke, l & 1), e === null)
      return qo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = lo(i, r, 0, null), e = Dn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = _i(n), t.memoizedState = Ci, e) : Ni(t, i));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Cd(e, t, i, r, a, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
      var u = { mode: "hidden", children: r.children };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = vn(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = vn(a, o) : (o = Dn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? _i(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ci, r;
    }
    return o = e.child, e = o.sibling, r = vn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ni(e, t) {
    return t = lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ql(e, t, n, r) {
    return r !== null && bo(r), tr(t, e.child, null, n), e = Ni(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cd(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = xi(Error(c(422))), Ql(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = lo({ mode: "visible", children: r.children }, l, 0, null), o = Dn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && tr(t, e.child, null, i), t.child.memoizedState = _i(i), t.memoizedState = Ci, o);
    if (!(t.mode & 1)) return Ql(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
      return r = a, o = Error(c(419)), r = xi(o, r, void 0), Ql(e, t, i, r);
    }
    if (a = (i & e.childLanes) !== 0, lt || a) {
      if (r = Be, r !== null) {
        switch (i & -i) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Kt(e, l), Tt(r, e, l, -1));
      }
      return Vi(), r = xi(Error(c(421))), Ql(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, dt = on(l.nextSibling), ct = t, ye = !0, Ct = null, e !== null && (mt[ht++] = Qt, mt[ht++] = Yt, mt[ht++] = Cn, Qt = e.id, Yt = e.overflow, Cn = t), t = Ni(t, r.children), t.flags |= 4096, t);
  }
  function us(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ri(e.return, t, n);
  }
  function Pi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function ss(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (Je(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && us(e, n, t);
        else if (e.tag === 19) us(e, n, t);
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
    if (he(ke, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ul(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Pi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Ul(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Pi(t, !0, n, null, o);
        break;
      case "together":
        Pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Gt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = vn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function _d(e, t, n) {
    switch (t.tag) {
      case 3:
        os(t), er();
        break;
      case 5:
        Eu(t);
        break;
      case 1:
        rt(t.type) && Tl(t);
        break;
      case 4:
        ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        he(Il, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (he(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? as(e, t, n) : (he(ke, ke.current & 1), e = Gt(e, t, n), e !== null ? e.sibling : null);
        he(ke, ke.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return ss(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), he(ke, ke.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ns(e, t, n);
    }
    return Gt(e, t, n);
  }
  var cs, Ti, ds, fs;
  cs = function(e, t) {
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
  }, Ti = function() {
  }, ds = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Pn(Bt.current);
      var o = null;
      switch (n) {
        case "input":
          l = cr(e, l), r = cr(e, r), o = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Fn(e, l), r = Fn(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _l);
      }
      It(n, r);
      var i;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var a = l[h];
        for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (A.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
      for (h in r) {
        var u = r[h];
        if (a = l != null ? l[h] : void 0, r.hasOwnProperty(h) && u !== a && (u != null || a != null)) if (h === "style") if (a) {
          for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
        } else n || (o || (o = []), o.push(
          h,
          n
        )), n = u;
        else h === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(h, u)) : h === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(h, "" + u) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (A.hasOwnProperty(h) ? (u != null && h === "onScroll" && ge("scroll", e), o || a === u || (o = [])) : (o = o || []).push(h, u));
      }
      n && (o = o || []).push("style", n);
      var h = o;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, fs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Wr(e, t) {
    if (!ye) switch (e.tailMode) {
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
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Nd(e, t, n) {
    var r = t.pendingProps;
    switch (Zo(t), t.tag) {
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
        return Ye(t), null;
      case 1:
        return rt(t.type) && Pl(), Ye(t), null;
      case 3:
        return r = t.stateNode, lr(), ve(nt), ve(We), si(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ml(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ct !== null && (Bi(Ct), Ct = null))), Ti(e, t), Ye(t), null;
      case 5:
        ai(t);
        var l = Pn(Br.current);
        if (n = t.type, e !== null && t.stateNode != null) ds(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return Ye(t), null;
          }
          if (e = Pn(Bt.current), Ml(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ut] = t, r[Ir] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ge("cancel", r), ge("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Lr.length; l++) ge(Lr[l], r);
                break;
              case "source":
                ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  r
                ), ge("load", r);
                break;
              case "details":
                ge("toggle", r);
                break;
              case "input":
                Jr(r, o), ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ge("invalid", r);
                break;
              case "textarea":
                Lt(r, o), ge("invalid", r);
            }
            It(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Cl(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Cl(
                r.textContent,
                a,
                e
              ), l = ["children", "" + a]) : A.hasOwnProperty(i) && a != null && i === "onScroll" && ge("scroll", r);
            }
            switch (n) {
              case "input":
                zt(r), jn(r, o, !0);
                break;
              case "textarea":
                zt(r), br(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = _l);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ge(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ut] = t, e[Ir] = r, cs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = mr(n, r), n) {
                case "dialog":
                  ge("cancel", e), ge("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Lr.length; l++) ge(Lr[l], e);
                  l = r;
                  break;
                case "source":
                  ge("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ge(
                    "error",
                    e
                  ), ge("load", e), l = r;
                  break;
                case "details":
                  ge("toggle", e), l = r;
                  break;
                case "input":
                  Jr(e, r), l = cr(e, r), ge("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), ge("invalid", e);
                  break;
                case "textarea":
                  Lt(e, r), l = Fn(e, r), ge("invalid", e);
                  break;
                default:
                  l = r;
              }
              It(n, l), a = l;
              for (o in a) if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style" ? Vt(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && el(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Dt(e, u) : typeof u == "number" && Dt(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (A.hasOwnProperty(o) ? u != null && o === "onScroll" && ge("scroll", e) : u != null && ne(e, o, u, i));
              }
              switch (n) {
                case "input":
                  zt(e), jn(e, r, !1);
                  break;
                case "textarea":
                  zt(e), br(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + re(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? pt(e, !!r.multiple, o, !1) : r.defaultValue != null && pt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = _l);
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
        return Ye(t), null;
      case 6:
        if (e && t.stateNode != null) fs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (n = Pn(Br.current), Pn(Bt.current), Ml(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ut] = t, (o = r.nodeValue !== n) && (e = ct, e !== null)) switch (e.tag) {
              case 3:
                Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Cl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ut] = t, t.stateNode = r;
        }
        return Ye(t), null;
      case 13:
        if (ve(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ye && dt !== null && t.mode & 1 && !(t.flags & 128)) hu(), er(), t.flags |= 98560, o = !1;
          else if (o = Ml(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(c(317));
              o[Ut] = t;
            } else er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ye(t), o = !1;
          } else Ct !== null && (Bi(Ct), Ct = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Oe === 0 && (Oe = 3) : Vi())), t.updateQueue !== null && (t.flags |= 4), Ye(t), null);
      case 4:
        return lr(), Ti(e, t), e === null && Mr(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return ni(t.type._context), Ye(t), null;
      case 17:
        return rt(t.type) && Pl(), Ye(t), null;
      case 19:
        if (ve(ke), o = t.memoizedState, o === null) return Ye(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Wr(o, !1);
        else {
          if (Oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = Ul(e), i !== null) {
              for (t.flags |= 128, Wr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return he(ke, ke.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Te() > ur && (t.flags |= 128, r = !0, Wr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ul(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ye) return Ye(t), null;
          } else 2 * Te() - o.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, Wr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Te(), t.sibling = null, n = ke.current, he(ke, r ? n & 1 | 2 : n & 1), t) : (Ye(t), null);
      case 22:
      case 23:
        return $i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ft & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Pd(e, t) {
    switch (Zo(t), t.tag) {
      case 1:
        return rt(t.type) && Pl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return lr(), ve(nt), ve(We), si(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ai(t), null;
      case 13:
        if (ve(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(c(340));
          er();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ve(ke), null;
      case 4:
        return lr(), null;
      case 10:
        return ni(t.type._context), null;
      case 22:
      case 23:
        return $i(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kl = !1, Ke = !1, Td = typeof WeakSet == "function" ? WeakSet : Set, z = null;
  function ir(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Pe(e, t, r);
    }
    else n.current = null;
  }
  function Ri(e, t, n) {
    try {
      n();
    } catch (r) {
      Pe(e, t, r);
    }
  }
  var ps = !1;
  function Rd(e, t) {
    if ($o = pl, e = Qa(), Do(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, a = -1, u = -1, h = 0, x = 0, k = e, w = null;
          t: for (; ; ) {
            for (var R; k !== n || l !== 0 && k.nodeType !== 3 || (a = i + l), k !== o || r !== 0 && k.nodeType !== 3 || (u = i + r), k.nodeType === 3 && (i += k.nodeValue.length), (R = k.firstChild) !== null; )
              w = k, k = R;
            for (; ; ) {
              if (k === e) break t;
              if (w === n && ++h === l && (a = i), w === o && ++x === r && (u = i), (R = k.nextSibling) !== null) break;
              k = w, w = k.parentNode;
            }
            k = R;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Vo = { focusedElem: e, selectionRange: n }, pl = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
    else for (; z !== null; ) {
      t = z;
      try {
        var D = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (D !== null) {
              var I = D.memoizedProps, Re = D.memoizedState, p = t.stateNode, s = p.getSnapshotBeforeUpdate(t.elementType === t.type ? I : _t(t.type, I), Re);
              p.__reactInternalSnapshotBeforeUpdate = s;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (S) {
        Pe(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, z = e;
        break;
      }
      z = t.return;
    }
    return D = ps, ps = !1, D;
  }
  function Qr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Ri(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Xl(e, t) {
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
  function zi(e) {
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
  function ms(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ms(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ut], delete t[Ir], delete t[Yo], delete t[dd], delete t[fd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function hs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function gs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || hs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _l));
    else if (r !== 4 && (e = e.child, e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), e = e.sibling;
  }
  function Mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), e = e.sibling;
  }
  var Ve = null, Nt = !1;
  function fn(e, t, n) {
    for (n = n.child; n !== null; ) vs(e, t, n), n = n.sibling;
  }
  function vs(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
      Ft.onCommitFiberUnmount(al, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ke || ir(n, t);
      case 6:
        var r = Ve, l = Nt;
        Ve = null, fn(e, t, n), Ve = r, Nt = l, Ve !== null && (Nt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null && (Nt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Qo(e.parentNode, n) : e.nodeType === 1 && Qo(e, n), Er(e)) : Qo(Ve, n.stateNode));
        break;
      case 4:
        r = Ve, l = Nt, Ve = n.stateNode.containerInfo, Nt = !0, fn(e, t, n), Ve = r, Nt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ri(n, t, i), l = l.next;
          } while (l !== r);
        }
        fn(e, t, n);
        break;
      case 1:
        if (!Ke && (ir(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Pe(n, t, a);
        }
        fn(e, t, n);
        break;
      case 21:
        fn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ke = (r = Ke) || n.memoizedState !== null, fn(e, t, n), Ke = r) : fn(e, t, n);
        break;
      default:
        fn(e, t, n);
    }
  }
  function ys(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Td()), t.forEach(function(r) {
        var l = Ud.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Pt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              Ve = a.stateNode, Nt = !1;
              break e;
            case 3:
              Ve = a.stateNode.containerInfo, Nt = !0;
              break e;
            case 4:
              Ve = a.stateNode.containerInfo, Nt = !0;
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(c(160));
        vs(o, i, l), Ve = null, Nt = !1;
        var u = l.alternate;
        u !== null && (u.return = null), l.return = null;
      } catch (h) {
        Pe(l, t, h);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ws(t, e), t = t.sibling;
  }
  function ws(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Pt(t, e), $t(e), r & 4) {
          try {
            Qr(3, e, e.return), Xl(3, e);
          } catch (I) {
            Pe(e, e.return, I);
          }
          try {
            Qr(5, e, e.return);
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        break;
      case 1:
        Pt(t, e), $t(e), r & 512 && n !== null && ir(n, n.return);
        break;
      case 5:
        if (Pt(t, e), $t(e), r & 512 && n !== null && ir(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, u = e.updateQueue;
          if (e.updateQueue = null, u !== null) try {
            a === "input" && o.type === "radio" && o.name != null && dr(l, o), mr(a, i);
            var h = mr(a, o);
            for (i = 0; i < u.length; i += 2) {
              var x = u[i], k = u[i + 1];
              x === "style" ? Vt(l, k) : x === "dangerouslySetInnerHTML" ? el(l, k) : x === "children" ? Dt(l, k) : ne(l, x, k, h);
            }
            switch (a) {
              case "input":
                fr(l, o);
                break;
              case "textarea":
                qr(l, o);
                break;
              case "select":
                var w = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var R = o.value;
                R != null ? pt(l, !!o.multiple, R, !1) : w !== !!o.multiple && (o.defaultValue != null ? pt(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : pt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ir] = o;
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        break;
      case 6:
        if (Pt(t, e), $t(e), r & 4) {
          if (e.stateNode === null) throw Error(c(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        break;
      case 3:
        if (Pt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Er(t.containerInfo);
        } catch (I) {
          Pe(e, e.return, I);
        }
        break;
      case 4:
        Pt(t, e), $t(e);
        break;
      case 13:
        Pt(t, e), $t(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Oi = Te())), r & 4 && ys(e);
        break;
      case 22:
        if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ke = (h = Ke) || x, Pt(t, e), Ke = h) : Pt(t, e), $t(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !x && e.mode & 1) for (z = e, x = e.child; x !== null; ) {
            for (k = z = x; z !== null; ) {
              switch (w = z, R = w.child, w.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, w, w.return);
                  break;
                case 1:
                  ir(w, w.return);
                  var D = w.stateNode;
                  if (typeof D.componentWillUnmount == "function") {
                    r = w, n = w.return;
                    try {
                      t = r, D.props = t.memoizedProps, D.state = t.memoizedState, D.componentWillUnmount();
                    } catch (I) {
                      Pe(r, n, I);
                    }
                  }
                  break;
                case 5:
                  ir(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    Ss(k);
                    continue;
                  }
              }
              R !== null ? (R.return = w, z = R) : Ss(k);
            }
            x = x.sibling;
          }
          e: for (x = null, k = e; ; ) {
            if (k.tag === 5) {
              if (x === null) {
                x = k;
                try {
                  l = k.stateNode, h ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = k.stateNode, u = k.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Bn("display", i));
                } catch (I) {
                  Pe(e, e.return, I);
                }
              }
            } else if (k.tag === 6) {
              if (x === null) try {
                k.stateNode.nodeValue = h ? "" : k.memoizedProps;
              } catch (I) {
                Pe(e, e.return, I);
              }
            } else if ((k.tag !== 22 && k.tag !== 23 || k.memoizedState === null || k === e) && k.child !== null) {
              k.child.return = k, k = k.child;
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              x === k && (x = null), k = k.return;
            }
            x === k && (x = null), k.sibling.return = k.return, k = k.sibling;
          }
        }
        break;
      case 19:
        Pt(t, e), $t(e), r & 4 && ys(e);
        break;
      case 21:
        break;
      default:
        Pt(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (hs(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(c(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), r.flags &= -33);
            var o = gs(e);
            Mi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, a = gs(e);
            Li(e, a, i);
            break;
          default:
            throw Error(c(161));
        }
      } catch (u) {
        Pe(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function zd(e, t, n) {
    z = e, xs(e);
  }
  function xs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var l = z, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Kl;
        if (!i) {
          var a = l.alternate, u = a !== null && a.memoizedState !== null || Ke;
          a = Kl;
          var h = Ke;
          if (Kl = i, (Ke = u) && !h) for (z = l; z !== null; ) i = z, u = i.child, i.tag === 22 && i.memoizedState !== null ? Es(l) : u !== null ? (u.return = i, z = u) : Es(l);
          for (; o !== null; ) z = o, xs(o), o = o.sibling;
          z = l, Kl = a, Ke = h;
        }
        ks(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, z = o) : ks(e);
    }
  }
  function ks(e) {
    for (; z !== null; ) {
      var t = z;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || Xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Su(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Su(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var h = t.alternate;
                if (h !== null) {
                  var x = h.memoizedState;
                  if (x !== null) {
                    var k = x.dehydrated;
                    k !== null && Er(k);
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
              throw Error(c(163));
          }
          Ke || t.flags & 512 && zi(t);
        } catch (w) {
          Pe(t, t.return, w);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, z = n;
        break;
      }
      z = t.return;
    }
  }
  function Ss(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, z = n;
        break;
      }
      z = t.return;
    }
  }
  function Es(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xl(4, t);
            } catch (u) {
              Pe(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                Pe(t, l, u);
              }
            }
            var o = t.return;
            try {
              zi(t);
            } catch (u) {
              Pe(t, o, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              zi(t);
            } catch (u) {
              Pe(t, i, u);
            }
        }
      } catch (u) {
        Pe(t, t.return, u);
      }
      if (t === e) {
        z = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, z = a;
        break;
      }
      z = t.return;
    }
  }
  var Ld = Math.ceil, Gl = Ce.ReactCurrentDispatcher, Di = Ce.ReactCurrentOwner, yt = Ce.ReactCurrentBatchConfig, le = 0, Be = null, Me = null, He = 0, ft = 0, ar = an(0), Oe = 0, Yr = null, Rn = 0, Zl = 0, Ii = 0, Kr = null, ot = null, Oi = 0, ur = 1 / 0, Zt = null, Jl = !1, ji = null, pn = null, ql = !1, mn = null, bl = 0, Xr = 0, Fi = null, eo = -1, to = 0;
  function qe() {
    return le & 6 ? Te() : eo !== -1 ? eo : eo = Te();
  }
  function hn(e) {
    return e.mode & 1 ? le & 2 && He !== 0 ? He & -He : md.transition !== null ? (to === 0 && (to = ga()), to) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _a(e.type)), e) : 1;
  }
  function Tt(e, t, n, r) {
    if (50 < Xr) throw Xr = 0, Fi = null, Error(c(185));
    yr(e, n, r), (!(le & 2) || e !== Be) && (e === Be && (!(le & 2) && (Zl |= n), Oe === 4 && gn(e, He)), it(e, r), n === 1 && le === 0 && !(t.mode & 1) && (ur = Te() + 500, Rl && sn()));
  }
  function it(e, t) {
    var n = e.callbackNode;
    mc(e, t);
    var r = cl(e, e === Be ? He : 0);
    if (r === 0) n !== null && pa(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && pa(n), t === 1) e.tag === 0 ? pd(_s.bind(null, e)) : cu(_s.bind(null, e)), sd(function() {
        !(le & 6) && sn();
      }), n = null;
      else {
        switch (va(r)) {
          case 1:
            n = go;
            break;
          case 4:
            n = ma;
            break;
          case 16:
            n = il;
            break;
          case 536870912:
            n = ha;
            break;
          default:
            n = il;
        }
        n = Ds(n, Cs.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Cs(e, t) {
    if (eo = -1, to = 0, le & 6) throw Error(c(327));
    var n = e.callbackNode;
    if (sr() && e.callbackNode !== n) return null;
    var r = cl(e, e === Be ? He : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
    else {
      t = r;
      var l = le;
      le |= 2;
      var o = Ps();
      (Be !== e || He !== t) && (Zt = null, ur = Te() + 500, Ln(e, t));
      do
        try {
          Id();
          break;
        } catch (a) {
          Ns(e, a);
        }
      while (!0);
      ti(), Gl.current = o, le = l, Me !== null ? t = 0 : (Be = null, He = 0, t = Oe);
    }
    if (t !== 0) {
      if (t === 2 && (l = vo(e), l !== 0 && (r = l, t = Ui(e, l))), t === 1) throw n = Yr, Ln(e, 0), gn(e, r), it(e, Te()), n;
      if (t === 6) gn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Md(l) && (t = no(e, r), t === 2 && (o = vo(e), o !== 0 && (r = o, t = Ui(e, o))), t === 1)) throw n = Yr, Ln(e, 0), gn(e, r), it(e, Te()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Mn(e, ot, Zt);
            break;
          case 3:
            if (gn(e, r), (r & 130023424) === r && (t = Oi + 500 - Te(), 10 < t)) {
              if (cl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                qe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Wo(Mn.bind(null, e, ot, Zt), t);
              break;
            }
            Mn(e, ot, Zt);
            break;
          case 4:
            if (gn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - St(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ld(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Wo(Mn.bind(null, e, ot, Zt), r);
              break;
            }
            Mn(e, ot, Zt);
            break;
          case 5:
            Mn(e, ot, Zt);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return it(e, Te()), e.callbackNode === n ? Cs.bind(null, e) : null;
  }
  function Ui(e, t) {
    var n = Kr;
    return e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256), e = no(e, t), e !== 2 && (t = ot, ot = n, t !== null && Bi(t)), e;
  }
  function Bi(e) {
    ot === null ? ot = e : ot.push.apply(ot, e);
  }
  function Md(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Et(o(), l)) return !1;
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
  function gn(e, t) {
    for (t &= ~Ii, t &= ~Zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function _s(e) {
    if (le & 6) throw Error(c(327));
    sr();
    var t = cl(e, 0);
    if (!(t & 1)) return it(e, Te()), null;
    var n = no(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = vo(e);
      r !== 0 && (t = r, n = Ui(e, r));
    }
    if (n === 1) throw n = Yr, Ln(e, 0), gn(e, t), it(e, Te()), n;
    if (n === 6) throw Error(c(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Mn(e, ot, Zt), it(e, Te()), null;
  }
  function Ai(e, t) {
    var n = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      le = n, le === 0 && (ur = Te() + 500, Rl && sn());
    }
  }
  function zn(e) {
    mn !== null && mn.tag === 0 && !(le & 6) && sr();
    var t = le;
    le |= 1;
    var n = yt.transition, r = fe;
    try {
      if (yt.transition = null, fe = 1, e) return e();
    } finally {
      fe = r, yt.transition = n, le = t, !(le & 6) && sn();
    }
  }
  function $i() {
    ft = ar.current, ve(ar);
  }
  function Ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ud(n)), Me !== null) for (n = Me.return; n !== null; ) {
      var r = n;
      switch (Zo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Pl();
          break;
        case 3:
          lr(), ve(nt), ve(We), si();
          break;
        case 5:
          ai(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          ve(ke);
          break;
        case 19:
          ve(ke);
          break;
        case 10:
          ni(r.type._context);
          break;
        case 22:
        case 23:
          $i();
      }
      n = n.return;
    }
    if (Be = e, Me = e = vn(e.current, null), He = ft = t, Oe = 0, Yr = null, Ii = Zl = Rn = 0, ot = Kr = null, Nn !== null) {
      for (t = 0; t < Nn.length; t++) if (n = Nn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      Nn = null;
    }
    return e;
  }
  function Ns(e, t) {
    do {
      var n = Me;
      try {
        if (ti(), Bl.current = Hl, Al) {
          for (var r = Se.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Al = !1;
        }
        if (Tn = 0, Ue = Ie = Se = null, Ar = !1, $r = 0, Di.current = null, n === null || n.return === null) {
          Oe = 1, Yr = t, Me = null;
          break;
        }
        e: {
          var o = e, i = n.return, a = n, u = t;
          if (t = He, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            var h = u, x = a, k = x.tag;
            if (!(x.mode & 1) && (k === 0 || k === 11 || k === 15)) {
              var w = x.alternate;
              w ? (x.updateQueue = w.updateQueue, x.memoizedState = w.memoizedState, x.lanes = w.lanes) : (x.updateQueue = null, x.memoizedState = null);
            }
            var R = Ju(i);
            if (R !== null) {
              R.flags &= -257, qu(R, i, a, o, t), R.mode & 1 && Zu(o, h, t), t = R, u = h;
              var D = t.updateQueue;
              if (D === null) {
                var I = /* @__PURE__ */ new Set();
                I.add(u), t.updateQueue = I;
              } else D.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                Zu(o, h, t), Vi();
                break e;
              }
              u = Error(c(426));
            }
          } else if (ye && a.mode & 1) {
            var Re = Ju(i);
            if (Re !== null) {
              !(Re.flags & 65536) && (Re.flags |= 256), qu(Re, i, a, o, t), bo(or(u, a));
              break e;
            }
          }
          o = u = or(u, a), Oe !== 4 && (Oe = 2), Kr === null ? Kr = [o] : Kr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Xu(o, u, t);
                ku(o, p);
                break e;
              case 1:
                a = u;
                var s = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (pn === null || !pn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = Gu(o, a, t);
                  ku(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Rs(n);
      } catch (j) {
        t = j, Me === n && n !== null && (Me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ps() {
    var e = Gl.current;
    return Gl.current = Hl, e === null ? Hl : e;
  }
  function Vi() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), Be === null || !(Rn & 268435455) && !(Zl & 268435455) || gn(Be, He);
  }
  function no(e, t) {
    var n = le;
    le |= 2;
    var r = Ps();
    (Be !== e || He !== t) && (Zt = null, Ln(e, t));
    do
      try {
        Dd();
        break;
      } catch (l) {
        Ns(e, l);
      }
    while (!0);
    if (ti(), le = n, Gl.current = r, Me !== null) throw Error(c(261));
    return Be = null, He = 0, Oe;
  }
  function Dd() {
    for (; Me !== null; ) Ts(Me);
  }
  function Id() {
    for (; Me !== null && !oc(); ) Ts(Me);
  }
  function Ts(e) {
    var t = Ms(e.alternate, e, ft);
    e.memoizedProps = e.pendingProps, t === null ? Rs(e) : Me = t, Di.current = null;
  }
  function Rs(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Pd(n, t), n !== null) {
          n.flags &= 32767, Me = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Oe = 6, Me = null;
          return;
        }
      } else if (n = Nd(n, t, ft), n !== null) {
        Me = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function Mn(e, t, n) {
    var r = fe, l = yt.transition;
    try {
      yt.transition = null, fe = 1, Od(e, t, n, r);
    } finally {
      yt.transition = l, fe = r;
    }
    return null;
  }
  function Od(e, t, n, r) {
    do
      sr();
    while (mn !== null);
    if (le & 6) throw Error(c(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(c(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (hc(e, o), e === Be && (Me = Be = null, He = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ql || (ql = !0, Ds(il, function() {
      return sr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = yt.transition, yt.transition = null;
      var i = fe;
      fe = 1;
      var a = le;
      le |= 4, Di.current = null, Rd(e, n), ws(n, e), td(Vo), pl = !!$o, Vo = $o = null, e.current = n, zd(n), ic(), le = a, fe = i, yt.transition = o;
    } else e.current = n;
    if (ql && (ql = !1, mn = e, bl = l), o = e.pendingLanes, o === 0 && (pn = null), sc(n.stateNode), it(e, Te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Jl) throw Jl = !1, e = ji, ji = null, e;
    return bl & 1 && e.tag !== 0 && sr(), o = e.pendingLanes, o & 1 ? e === Fi ? Xr++ : (Xr = 0, Fi = e) : Xr = 0, sn(), null;
  }
  function sr() {
    if (mn !== null) {
      var e = va(bl), t = yt.transition, n = fe;
      try {
        if (yt.transition = null, fe = 16 > e ? 16 : e, mn === null) var r = !1;
        else {
          if (e = mn, mn = null, bl = 0, le & 6) throw Error(c(331));
          var l = le;
          for (le |= 4, z = e.current; z !== null; ) {
            var o = z, i = o.child;
            if (z.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var u = 0; u < a.length; u++) {
                  var h = a[u];
                  for (z = h; z !== null; ) {
                    var x = z;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qr(8, x, o);
                    }
                    var k = x.child;
                    if (k !== null) k.return = x, z = k;
                    else for (; z !== null; ) {
                      x = z;
                      var w = x.sibling, R = x.return;
                      if (ms(x), x === h) {
                        z = null;
                        break;
                      }
                      if (w !== null) {
                        w.return = R, z = w;
                        break;
                      }
                      z = R;
                    }
                  }
                }
                var D = o.alternate;
                if (D !== null) {
                  var I = D.child;
                  if (I !== null) {
                    D.child = null;
                    do {
                      var Re = I.sibling;
                      I.sibling = null, I = Re;
                    } while (I !== null);
                  }
                }
                z = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, z = i;
            else e: for (; z !== null; ) {
              if (o = z, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Qr(9, o, o.return);
              }
              var p = o.sibling;
              if (p !== null) {
                p.return = o.return, z = p;
                break e;
              }
              z = o.return;
            }
          }
          var s = e.current;
          for (z = s; z !== null; ) {
            i = z;
            var m = i.child;
            if (i.subtreeFlags & 2064 && m !== null) m.return = i, z = m;
            else e: for (i = s; z !== null; ) {
              if (a = z, a.flags & 2048) try {
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xl(9, a);
                }
              } catch (j) {
                Pe(a, a.return, j);
              }
              if (a === i) {
                z = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                S.return = a.return, z = S;
                break e;
              }
              z = a.return;
            }
          }
          if (le = l, sn(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
            Ft.onPostCommitFiberRoot(al, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        fe = n, yt.transition = t;
      }
    }
    return !1;
  }
  function zs(e, t, n) {
    t = or(n, t), t = Xu(e, t, 1), e = dn(e, t, 1), t = qe(), e !== null && (yr(e, 1, t), it(e, t));
  }
  function Pe(e, t, n) {
    if (e.tag === 3) zs(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        zs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pn === null || !pn.has(r))) {
          e = or(n, e), e = Gu(t, e, 1), t = dn(t, e, 1), e = qe(), t !== null && (yr(t, 1, e), it(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function jd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (He & n) === n && (Oe === 4 || Oe === 3 && (He & 130023424) === He && 500 > Te() - Oi ? Ln(e, 0) : Ii |= n), it(e, t);
  }
  function Ls(e, t) {
    t === 0 && (e.mode & 1 ? (t = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : t = 1);
    var n = qe();
    e = Kt(e, t), e !== null && (yr(e, t, n), it(e, n));
  }
  function Fd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ls(e, n);
  }
  function Ud(e, t) {
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
        throw Error(c(314));
    }
    r !== null && r.delete(t), Ls(e, n);
  }
  var Ms;
  Ms = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || nt.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return lt = !1, _d(e, t, n);
      lt = !!(e.flags & 131072);
    }
    else lt = !1, ye && t.flags & 1048576 && du(t, Ll, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Yl(e, t), e = t.pendingProps;
        var l = Jn(t, We.current);
        rr(t, n), l = fi(null, t, r, e, l, n);
        var o = pi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(r) ? (o = !0, Tl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, oi(t), l.updater = Wl, t.stateNode = l, l._reactInternals = t, wi(t, r, e, n), t = Ei(null, t, r, !0, o, n)) : (t.tag = 0, ye && o && Go(t), Je(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Yl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ad(r), e = _t(r, e), l) {
            case 0:
              t = Si(null, t, r, e, n);
              break e;
            case 1:
              t = ls(null, t, r, e, n);
              break e;
            case 11:
              t = bu(null, t, r, e, n);
              break e;
            case 14:
              t = es(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(c(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _t(r, l), Si(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _t(r, l), ls(e, t, r, l, n);
      case 3:
        e: {
          if (os(t), e === null) throw Error(c(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, xu(e, t), Fl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = or(Error(c(423)), t), t = is(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = or(Error(c(424)), t), t = is(e, t, r, n, l);
            break e;
          } else for (dt = on(t.stateNode.containerInfo.firstChild), ct = t, ye = !0, Ct = null, n = yu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (er(), r === l) {
              t = Gt(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Eu(t), e === null && qo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ho(r, l) ? i = null : o !== null && Ho(r, o) && (t.flags |= 32), rs(e, t), Je(e, t, i, n), t.child;
      case 6:
        return e === null && qo(t), null;
      case 13:
        return as(e, t, n);
      case 4:
        return ii(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _t(r, l), bu(e, t, r, l, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, he(Il, r._currentValue), r._currentValue = i, o !== null) if (Et(o.value, i)) {
            if (o.children === l.children && !nt.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var a = o.dependencies;
            if (a !== null) {
              i = o.child;
              for (var u = a.firstContext; u !== null; ) {
                if (u.context === r) {
                  if (o.tag === 1) {
                    u = Xt(-1, n & -n), u.tag = 2;
                    var h = o.updateQueue;
                    if (h !== null) {
                      h = h.shared;
                      var x = h.pending;
                      x === null ? u.next = u : (u.next = x.next, x.next = u), h.pending = u;
                    }
                  }
                  o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), ri(
                    o.return,
                    n,
                    t
                  ), a.lanes |= n;
                  break;
                }
                u = u.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(c(341));
              i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), ri(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          Je(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, rr(t, n), l = gt(l), r = r(l), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = _t(r, t.pendingProps), l = _t(r.type, l), es(e, t, r, l, n);
      case 15:
        return ts(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _t(r, l), Yl(e, t), t.tag = 1, rt(r) ? (e = !0, Tl(t)) : e = !1, rr(t, n), Yu(t, r, l), wi(t, r, l, n), Ei(null, t, r, !0, e, n);
      case 19:
        return ss(e, t, n);
      case 22:
        return ns(e, t, n);
    }
    throw Error(c(156, t.tag));
  };
  function Ds(e, t) {
    return fa(e, t);
  }
  function Bd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wt(e, t, n, r) {
    return new Bd(e, t, n, r);
  }
  function Hi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ad(e) {
    if (typeof e == "function") return Hi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === xe) return 11;
      if (e === Xe) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ro(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Hi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case _e:
        return Dn(n.children, l, o, t);
      case J:
        i = 8, l |= 8;
        break;
      case pe:
        return e = wt(12, n, t, l | 2), e.elementType = pe, e.lanes = o, e;
      case Le:
        return e = wt(13, n, t, l), e.elementType = Le, e.lanes = o, e;
      case je:
        return e = wt(19, n, t, l), e.elementType = je, e.lanes = o, e;
      case ie:
        return lo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ue:
            i = 10;
            break e;
          case ze:
            i = 9;
            break e;
          case xe:
            i = 11;
            break e;
          case Xe:
            i = 14;
            break e;
          case Ne:
            i = 16, r = null;
            break e;
        }
        throw Error(c(130, e == null ? e : typeof e, ""));
    }
    return t = wt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Dn(e, t, n, r) {
    return e = wt(7, e, r, t), e.lanes = n, e;
  }
  function lo(e, t, n, r) {
    return e = wt(22, e, r, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Wi(e, t, n) {
    return e = wt(6, e, null, t), e.lanes = n, e;
  }
  function Qi(e, t, n) {
    return t = wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function $d(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yo(0), this.expirationTimes = yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Yi(e, t, n, r, l, o, i, a, u) {
    return e = new $d(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = wt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, oi(o), e;
  }
  function Vd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: de, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Is(e) {
    if (!e) return un;
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (rt(n)) return uu(e, n, t);
    }
    return t;
  }
  function Os(e, t, n, r, l, o, i, a, u) {
    return e = Yi(n, r, !0, e, l, o, i, a, u), e.context = Is(null), n = e.current, r = qe(), l = hn(n), o = Xt(r, l), o.callback = t ?? null, dn(n, o, l), e.current.lanes = l, yr(e, l, r), it(e, r), e;
  }
  function oo(e, t, n, r) {
    var l = t.current, o = qe(), i = hn(l);
    return n = Is(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dn(l, t, i), e !== null && (Tt(e, l, i, o), jl(e, l, i)), i;
  }
  function io(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function js(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ki(e, t) {
    js(e, t), (e = e.alternate) && js(e, t);
  }
  var Fs = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Xi(e) {
    this._internalRoot = e;
  }
  ao.prototype.render = Xi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    oo(e, t, null, null);
  }, ao.prototype.unmount = Xi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zn(function() {
        oo(null, e, null, null);
      }), t[Ht] = null;
    }
  };
  function ao(e) {
    this._internalRoot = e;
  }
  ao.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = xa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++) ;
      nn.splice(n, 0, e), n === 0 && Ea(e);
    }
  };
  function Gi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function uo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Us() {
  }
  function Hd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var h = io(i);
          o.call(h);
        };
      }
      var i = Os(t, r, e, 0, null, !1, !1, "", Us);
      return e._reactRootContainer = i, e[Ht] = i.current, Mr(e.nodeType === 8 ? e.parentNode : e), zn(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var h = io(u);
        a.call(h);
      };
    }
    var u = Yi(e, 0, !1, null, null, !1, !1, "", Us);
    return e._reactRootContainer = u, e[Ht] = u.current, Mr(e.nodeType === 8 ? e.parentNode : e), zn(function() {
      oo(t, u, n, r);
    }), u;
  }
  function so(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var a = l;
        l = function() {
          var u = io(i);
          a.call(u);
        };
      }
      oo(t, i, e, l);
    } else i = Hd(n, t, e, l, r);
    return io(i);
  }
  ya = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = vr(t.pendingLanes);
          n !== 0 && (wo(t, n | 1), it(t, Te()), !(le & 6) && (ur = Te() + 500, sn()));
        }
        break;
      case 13:
        zn(function() {
          var r = Kt(e, 1);
          if (r !== null) {
            var l = qe();
            Tt(r, e, 1, l);
          }
        }), Ki(e, 1);
    }
  }, xo = function(e) {
    if (e.tag === 13) {
      var t = Kt(e, 134217728);
      if (t !== null) {
        var n = qe();
        Tt(t, e, 134217728, n);
      }
      Ki(e, 134217728);
    }
  }, wa = function(e) {
    if (e.tag === 13) {
      var t = hn(e), n = Kt(e, t);
      if (n !== null) {
        var r = qe();
        Tt(n, e, t, r);
      }
      Ki(e, t);
    }
  }, xa = function() {
    return fe;
  }, ka = function(e, t) {
    var n = fe;
    try {
      return fe = e, t();
    } finally {
      fe = n;
    }
  }, $n = function(e, t, n) {
    switch (t) {
      case "input":
        if (fr(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Nl(r);
              if (!l) throw Error(c(90));
              On(r), fr(r, l);
            }
          }
        }
        break;
      case "textarea":
        qr(e, n);
        break;
      case "select":
        t = n.value, t != null && pt(e, !!n.multiple, t, !1);
    }
  }, se = Ai, me = zn;
  var Wd = { usingClientEntryPoint: !1, Events: [Or, Gn, Nl, rl, Z, Ai] }, Gr = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qd = { bundleType: Gr.bundleType, version: Gr.version, rendererPackageName: Gr.rendererPackageName, rendererConfig: Gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ca(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Gr.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!co.isDisabled && co.supportsFiber) try {
      al = co.inject(Qd), Ft = co;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gi(t)) throw Error(c(200));
    return Vd(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!Gi(e)) throw Error(c(299));
    var n = !1, r = "", l = Fs;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Yi(e, 1, !1, null, null, n, !1, r, l), e[Ht] = t.current, Mr(e.nodeType === 8 ? e.parentNode : e), new Xi(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = ca(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return zn(e);
  }, at.hydrate = function(e, t, n) {
    if (!uo(t)) throw Error(c(200));
    return so(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!Gi(e)) throw Error(c(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Fs;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Os(t, null, e, 1, n ?? null, l, !1, o, i), e[Ht] = t.current, Mr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ao(t);
  }, at.render = function(e, t, n) {
    if (!uo(t)) throw Error(c(200));
    return so(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!uo(e)) throw Error(c(40));
    return e._reactRootContainer ? (zn(function() {
      so(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ht] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = Ai, at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!uo(n)) throw Error(c(200));
    if (e == null || e._reactInternals === void 0) throw Error(c(38));
    return so(e, t, n, !1, r);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
var Ys;
function Js() {
  if (Ys) return qi.exports;
  Ys = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return f(), qi.exports = qd(), qi.exports;
}
var Ks;
function bd() {
  if (Ks) return fo;
  Ks = 1;
  var f = Js();
  return fo.createRoot = f.createRoot, fo.hydrateRoot = f.hydrateRoot, fo;
}
var qs = bd();
const bs = /* @__PURE__ */ ia(qs), ta = {
  id: "ext_react_form",
  reference_name: "MyExtension",
  supports_dark_mode: !1,
  description: "A form extension to capture user inputs"
};
var be = aa();
const P = /* @__PURE__ */ ia(be), ef = ({
  title: f = "",
  subtitle: v,
  fields: c = [],
  submitText: F = "Submit",
  theme: A = "light"
}) => {
  const [Y, q] = be.useState(
    {}
  ), H = (C, B) => {
    q((T) => ({ ...T, [C]: B }));
  }, M = (C, B, T) => {
    const g = Y[C] || [], te = T ? [...g, B] : g.filter((U) => U !== B);
    q((U) => ({ ...U, [C]: te }));
  }, W = (C) => {
    var B, T;
    C.preventDefault(), (T = (B = window.voiceflow) == null ? void 0 : B.chat) == null || T.interact({
      type: "complete",
      payload: Y
    });
  };
  return /* @__PURE__ */ oe.jsx("div", { className: "form-ext-wrapper", children: /* @__PURE__ */ oe.jsxs("div", { className: `form-ext-container ${A}`, children: [
    f && /* @__PURE__ */ oe.jsx("h2", { className: "form-ext-title", children: f }),
    v && /* @__PURE__ */ oe.jsx("p", { className: "form-ext-subtitle", children: v }),
    /* @__PURE__ */ oe.jsxs("form", { onSubmit: W, className: "form-ext", children: [
      c.map((C) => /* @__PURE__ */ oe.jsxs("div", { className: "form-ext-field", children: [
        C.label && /* @__PURE__ */ oe.jsx("label", { className: "form-ext-label", htmlFor: C.name, children: C.label }),
        C.type === "textarea" ? /* @__PURE__ */ oe.jsx(
          "textarea",
          {
            id: C.name,
            name: C.name,
            value: Y[C.name] || "",
            onChange: (B) => H(C.name, B.target.value),
            placeholder: C.placeholder,
            required: C.required,
            minLength: C.minLength,
            maxLength: C.maxLength,
            className: "form-ext-textarea"
          }
        ) : C.type === "radio" && C.options ? /* @__PURE__ */ oe.jsx("div", { className: "form-ext-radio-group", children: C.options.map((B) => /* @__PURE__ */ oe.jsxs("label", { className: "form-ext-radio-label", children: [
          /* @__PURE__ */ oe.jsx(
            "input",
            {
              type: "radio",
              name: C.name,
              value: B,
              checked: Y[C.name] === B,
              onChange: (T) => H(C.name, T.target.value),
              required: C.required,
              className: "form-ext-radio"
            }
          ),
          B
        ] }, B)) }) : C.type === "checkbox" && C.options ? /* @__PURE__ */ oe.jsx("div", { className: "form-ext-checkbox-group", children: C.options.map((B) => /* @__PURE__ */ oe.jsxs("label", { className: "form-ext-checkbox-label", children: [
          /* @__PURE__ */ oe.jsx(
            "input",
            {
              type: "checkbox",
              name: C.name,
              value: B,
              checked: (Y[C.name] || []).includes(B),
              onChange: (T) => M(
                C.name,
                B,
                T.target.checked
              ),
              className: "form-ext-checkbox"
            }
          ),
          B
        ] }, B)) }) : /* @__PURE__ */ oe.jsx(
          "input",
          {
            type: C.type,
            id: C.name,
            name: C.name,
            value: Y[C.name] || "",
            onChange: (B) => H(C.name, B.target.value),
            placeholder: C.placeholder,
            required: C.required,
            pattern: C.pattern,
            minLength: C.minLength,
            maxLength: C.maxLength,
            className: "form-ext-input"
          }
        )
      ] }, C.name)),
      /* @__PURE__ */ oe.jsx("button", { type: "submit", className: "form-ext-submit", children: F })
    ] })
  ] }) });
}, tf = ".form-ext-wrapper{max-width:550px;margin:12px auto;padding:2rem;border-radius:12px;background:#fff;box-shadow:0 4px 6px #0000001a;width:100%}.form-ext-container{width:100%}.form-ext-container.dark{background:#2a2a2a;color:#fff}.form-ext-title{font-size:1.5rem;font-weight:600;margin-bottom:.5rem;color:#2a2a2a}.dark .form-ext-title{color:#fff}.form-ext-subtitle{color:#666;margin-bottom:1.5rem}.dark .form-ext-subtitle{color:#aaa}.form-ext-field{margin-bottom:1.75rem;width:100%;display:flex;flex-direction:column;gap:.5rem}.form-ext-label{display:block;margin-bottom:.5rem;font-weight:500}.form-ext-input,.form-ext-textarea{width:100%;padding:.875rem 1rem;border:2px solid #e2e8f0;border-radius:8px;font-size:1rem;line-height:1.5;transition:all .2s;margin:0}.dark .form-ext-input,.dark .form-ext-textarea{background:#3a3a3a;border-color:#4a4a4a;color:#fff}.form-ext-input:focus,.form-ext-textarea:focus{outline:none;border-color:#4f46e5;box-shadow:0 0 0 3px #4f46e51a}.form-ext-textarea{min-height:100px;resize:vertical}.form-ext-submit{width:100%;padding:.75rem;background:#4f46e5;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:500;cursor:pointer;transition:background-color .2s}.form-ext-submit:hover{background:#4338ca}.form-ext-submit:active{transform:translateY(1px)}.form-ext-radio-group,.form-ext-checkbox-group{display:flex;flex-direction:column;gap:.875rem;width:100%;padding:.5rem 0}.form-ext-radio-label,.form-ext-checkbox-label{display:flex;align-items:center;gap:.75rem;cursor:pointer;padding:.5rem;border-radius:6px;transition:background-color .2s}.form-ext-radio-label:hover,.form-ext-checkbox-label:hover{background-color:#0000000d}.dark .form-ext-radio-label:hover,.dark .form-ext-checkbox-label:hover{background-color:#ffffff1a}.form-ext-radio,.form-ext-checkbox{cursor:pointer;width:1.25rem;height:1.25rem;margin:0}.dark .form-ext-radio-label,.dark .form-ext-checkbox-label{color:#fff}.dark .form-ext-radio,.dark .form-ext-checkbox{accent-color:#4f46e5}.form-ext{display:flex;flex-direction:column;gap:1.25rem;width:100%}.dark.form-ext-wrapper{background:#2a2a2a;box-shadow:0 4px 6px #0003}", jf = {
  name: ta.reference_name,
  type: "response",
  match: ({ trace: f }) => {
    var v;
    return f.type === ta.id || ((v = f.payload) == null ? void 0 : v.name) === ta.id;
  },
  render: ({ element: f, trace: v }) => {
    const c = f.attachShadow({ mode: "open" }), F = document.createElement("div"), A = document.createElement("style");
    A.textContent = tf, c.appendChild(A), c.appendChild(F);
    const Y = bs.createRoot(F), q = v.payload;
    return Y.render(/* @__PURE__ */ oe.jsx(ef, { ...q })), () => {
      requestAnimationFrame(() => {
        for (Y.unmount(); c.firstChild; )
          c.removeChild(c.firstChild);
      });
    };
  }
}, na = {
  id: "ext_video",
  reference_name: "video",
  description: "Renders a video player for various video sources"
}, Ff = {
  name: na.reference_name,
  type: "response",
  match: ({ trace: f }) => {
    var v;
    return f.type === na.id || ((v = f.payload) == null ? void 0 : v.name) === na.id;
  },
  render: ({ element: f, trace: v }) => {
    var B;
    const { url: c, autoplay: F, controls: A, muted: Y, loop: q, title: H } = v.payload || {}, M = (T) => (T == null ? void 0 : T.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/)) !== null, W = (T) => {
      const g = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, te = T == null ? void 0 : T.match(g);
      return (te == null ? void 0 : te[2]) ?? "";
    }, C = (T) => {
      if (!T) return 0;
      const g = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/, te = T.match(g);
      if (!te) return 0;
      const [U, K, we, Ee] = te;
      return parseInt(K || "0") * 3600 + parseInt(we || "0") * 60 + parseInt(Ee || "0");
    };
    if (M(c)) {
      const T = document.createElement("div");
      T.style.cssText = "position: relative; width: 100%;";
      const g = document.createElement("iframe"), te = W(c), U = C(((B = v.payload) == null ? void 0 : B.startAt) || ""), K = new URLSearchParams({
        autoplay: F ? "1" : "0",
        mute: Y ? "1" : "0",
        controls: A !== !1 ? "1" : "0",
        loop: q ? "1" : "0",
        start: U.toString()
        // Add start time parameter
      });
      if (g.src = `https://www.youtube.com/embed/${te}?${K.toString()}`, g.style.cssText = `
        border: none;
      `, g.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", g.allowFullscreen = !0, H) {
        g.title = H;
        const we = document.createElement("h3");
        we.textContent = H, we.style.cssText = `
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          font-family: sans-serif;
        `, T.appendChild(we);
      }
      T.appendChild(g), f.appendChild(T);
    } else {
      const T = document.createElement("video");
      T.src = c, T.style.maxWidth = "100%", F && T.setAttribute("autoplay", ""), A && T.setAttribute("controls", ""), Y && T.setAttribute("muted", ""), q && T.setAttribute("loop", ""), H && T.setAttribute("title", H), T.addEventListener("ended", () => {
        window.voiceflow.chat.interact({
          type: "complete",
          payload: {}
        });
      }), T.style.cssText = `
        max-width: 100%;
        width: 100%;
        aspect-ratio: 16/9;
        display: block;
      `, f.appendChild(T);
    }
    return () => {
      for (; f.firstChild; )
        f.removeChild(f.firstChild);
    };
  }
}, ra = {
  id: "ext_recorder",
  reference_name: "RecorderExtension",
  supports_dark_mode: !0,
  description: "A screen recording extension for capturing and submitting video feedback"
};
var In = /* @__PURE__ */ ((f) => (f.PERMISSION_DENIED = "PERMISSION_DENIED", f.DEVICE_NOT_SUPPORTED = "DEVICE_NOT_SUPPORTED", f.RECORDING_FAILED = "RECORDING_FAILED", f.NO_MOBILE_DEVICES = "NO_MOBILE_DEVICES", f))(In || {});
const nf = [
  "video/webm",
  "video/webm;codecs=vp8,opus",
  "video/webm;codecs=vp9,opus",
  "video/mp4"
], rf = () => nf.find((f) => MediaRecorder.isTypeSupported(f)) || "", Xs = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), lf = ({
  title: f = "Screen Recording",
  startButtonText: v = "Start Recording",
  stopButtonText: c = "Stop Recording",
  submitButtonText: F = "Submit",
  retryButtonText: A = "Try Again",
  theme: Y = "light",
  includeAudio: q = !1,
  includeVideo: H = !0
}) => {
  const [M, W] = be.useState("idle"), [C, B] = be.useState(!1), [T, g] = be.useState(""), te = be.useRef(null), U = be.useRef([]), K = be.useRef(null), we = be.useRef(null);
  be.useEffect(() => {
    Xs() && ne(In.NO_MOBILE_DEVICES);
  }, []), be.useEffect(() => () => {
    T && URL.revokeObjectURL(T);
  }, [T]);
  const Ee = (J) => {
    var pe, ue;
    (ue = (pe = window.voiceflow) == null ? void 0 : pe.chat) == null || ue.interact(J);
  }, ne = (J) => {
    const pe = {
      id: typeof J == "string" ? In.RECORDING_FAILED : J,
      details: typeof J == "string" ? J : void 0
    };
    Ee({ type: "error", payload: pe });
  }, Ce = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        ne(In.DEVICE_NOT_SUPPORTED);
        return;
      }
      let J;
      if (H)
        J = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1
        });
      else if (!H && q)
        try {
          J = await navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
          });
        } catch {
          ne("Failed to access microphone");
          return;
        }
      else {
        ne("Either video or audio must be enabled");
        return;
      }
      if (H && q && navigator.mediaDevices.getUserMedia)
        try {
          const ue = await navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
          }), ze = [
            ...J.getTracks(),
            ...ue.getTracks()
          ];
          J = new MediaStream(ze);
        } catch (ue) {
          console.warn("Could not get audio stream:", ue);
        }
      const pe = rf();
      if (!pe)
        throw new Error("No supported MIME type found");
      we.current = J, te.current = new MediaRecorder(J, {
        mimeType: pe
      }), U.current = [], te.current.ondataavailable = (ue) => {
        ue.data.size > 0 && U.current.push(ue.data);
      }, te.current.onerror = () => {
        ne("MediaRecorder failed during recording");
      }, te.current.onstop = () => {
        var ue;
        try {
          (ue = we.current) == null || ue.getTracks().forEach((Le) => Le.stop());
          const ze = new Blob(U.current, { type: pe });
          T && URL.revokeObjectURL(T);
          const xe = URL.createObjectURL(ze);
          g(xe), K.current && (K.current.src = xe), W("preview");
        } catch (ze) {
          ne(
            ze instanceof Error ? ze.message : "Failed to process recording"
          );
        }
      }, te.current.start(100), W("recording");
    } catch (J) {
      console.error("Recording error:", J), J instanceof Error ? J.name === "NotAllowedError" ? ne(In.PERMISSION_DENIED) : J.message === "No supported MIME type found" ? ne(In.DEVICE_NOT_SUPPORTED) : ne(J.message) : ne(In.RECORDING_FAILED), W("idle");
    }
  }, De = () => {
    if (te.current && M === "recording")
      try {
        te.current.stop();
      } catch (J) {
        ne(
          J instanceof Error ? J.message : "Failed to stop recording"
        ), W("idle");
      }
  }, de = () => {
    var J;
    try {
      const pe = ((J = te.current) == null ? void 0 : J.mimeType) || "video/webm", ue = new Blob(U.current, { type: pe });
      Ee({ type: "complete", payload: {
        mimeType: pe,
        recordingData: ue
      } }), B(!0);
    } catch (pe) {
      ne(
        pe instanceof Error ? pe.message : "Failed to submit recording"
      );
    }
  }, _e = () => {
    T && (URL.revokeObjectURL(T), g("")), U.current = [], K.current && (K.current.src = ""), W("idle"), B(!1);
  };
  return /* @__PURE__ */ oe.jsx("div", { className: `recorder-ext-wrapper ${Y}`, children: /* @__PURE__ */ oe.jsxs("div", { className: "recorder-ext-container", children: [
    f && /* @__PURE__ */ oe.jsx("h2", { className: "recorder-ext-title", children: f }),
    Xs() ? /* @__PURE__ */ oe.jsx("div", { className: "recorder-ext-mobile-message", children: /* @__PURE__ */ oe.jsx("p", { children: "Screen recording is not supported on mobile devices. Please use a desktop browser." }) }) : /* @__PURE__ */ oe.jsxs(oe.Fragment, { children: [
      /* @__PURE__ */ oe.jsx("div", { className: "recorder-ext-video-container", children: /* @__PURE__ */ oe.jsx(
        "video",
        {
          ref: K,
          className: "recorder-ext-preview",
          controls: !0,
          style: {
            display: M === "preview" ? "block" : "none"
          },
          playsInline: !0
        }
      ) }),
      /* @__PURE__ */ oe.jsxs("div", { className: "recorder-ext-controls", children: [
        M === "idle" && /* @__PURE__ */ oe.jsx(
          "button",
          {
            className: "recorder-ext-button recorder-ext-start",
            onClick: Ce,
            children: v
          }
        ),
        M === "recording" && /* @__PURE__ */ oe.jsx(
          "button",
          {
            className: "recorder-ext-button recorder-ext-stop",
            onClick: De,
            children: c
          }
        ),
        M === "preview" && /* @__PURE__ */ oe.jsxs("div", { className: "recorder-ext-button-group", children: [
          /* @__PURE__ */ oe.jsx(
            "button",
            {
              className: `recorder-ext-button recorder-ext-submit ${C ? "submitted" : ""}`,
              onClick: de,
              disabled: C,
              children: F
            }
          ),
          /* @__PURE__ */ oe.jsx(
            "button",
            {
              className: "recorder-ext-button recorder-ext-retry",
              onClick: _e,
              children: A
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}, of = ".recorder-ext-wrapper{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;max-width:100%;margin:0 auto;padding:1rem}.recorder-ext-container{background:var(--vf-bg-color, #ffffff);border-radius:12px;padding:1.5rem;box-shadow:0 2px 8px #0000001a}.recorder-ext-title{color:var(--vf-text-color, #333333);font-size:1.5rem;margin:0 0 1rem;text-align:center}.recorder-ext-video-container{width:100%;margin:1rem 0;border-radius:8px;overflow:hidden;background:#0000000d;min-height:200px}.recorder-ext-preview{width:100%;max-height:400px;object-fit:contain}.recorder-ext-controls{display:flex;justify-content:center;gap:.75rem;margin-top:1rem;flex-wrap:wrap}.recorder-ext-button{padding:.75rem 1.25rem;border-radius:6px;border:none;font-size:.875rem;line-height:1.2;font-weight:500;cursor:pointer;transition:all .2s ease;text-align:center;white-space:normal;min-width:80px;max-width:150px}.recorder-ext-start{background:var(--vf-primary-color, #007aff);color:#fff}.recorder-ext-stop{background:var(--vf-danger-color, #ff3b30);color:#fff}.recorder-ext-submit{background:var(--vf-success-color, #34c759);color:#fff}.recorder-ext-submit.submitted,.recorder-ext-submit.submitted:hover{background:var(--vf-secondary-color, #8e8e93);opacity:.7;transform:none;cursor:not-allowed;pointer-events:none}.recorder-ext-retry{background:var(--vf-secondary-color, #8e8e93);color:#fff}.recorder-ext-button:hover{opacity:.9;transform:translateY(-1px)}.recorder-ext-button:active{transform:translateY(0)}.recorder-ext-button:disabled{cursor:not-allowed;opacity:.7}.recorder-ext-button-group{display:flex;gap:.75rem;flex-wrap:wrap;justify-content:center}.dark{--vf-bg-color: #1c1c1e;--vf-text-color: #ffffff;--vf-primary-color: #0a84ff;--vf-danger-color: #ff453a;--vf-success-color: #32d74b;--vf-secondary-color: #98989d}", Uf = {
  name: ra.reference_name,
  type: "response",
  match: ({ trace: f }) => {
    var v;
    return f.type === ra.id || ((v = f.payload) == null ? void 0 : v.name) === ra.id;
  },
  render: ({ element: f, trace: v }) => {
    const c = f.attachShadow({ mode: "open" }), F = document.createElement("div"), A = document.createElement("style");
    A.textContent = of, c.appendChild(A), c.appendChild(F);
    const Y = bs.createRoot(F), q = v.payload;
    return Y.render(/* @__PURE__ */ oe.jsx(lf, { ...q })), () => {
      requestAnimationFrame(() => {
        for (Y.unmount(); c.firstChild; )
          c.removeChild(c.firstChild);
      });
    };
  }
};
var af = Js();
const uf = /* @__PURE__ */ ia(af);
var sf = (f) => {
  switch (f) {
    case "success":
      return ff;
    case "info":
      return mf;
    case "warning":
      return pf;
    case "error":
      return hf;
    default:
      return null;
  }
}, cf = Array(12).fill(0), df = ({ visible: f, className: v }) => P.createElement("div", { className: ["sonner-loading-wrapper", v].filter(Boolean).join(" "), "data-visible": f }, P.createElement("div", { className: "sonner-spinner" }, cf.map((c, F) => P.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${F}` })))), ff = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), pf = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), mf = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), hf = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), gf = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, P.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), P.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), vf = () => {
  let [f, v] = P.useState(document.hidden);
  return P.useEffect(() => {
    let c = () => {
      v(document.hidden);
    };
    return document.addEventListener("visibilitychange", c), () => window.removeEventListener("visibilitychange", c);
  }, []), f;
}, oa = 1, yf = class {
  constructor() {
    this.subscribe = (f) => (this.subscribers.push(f), () => {
      let v = this.subscribers.indexOf(f);
      this.subscribers.splice(v, 1);
    }), this.publish = (f) => {
      this.subscribers.forEach((v) => v(f));
    }, this.addToast = (f) => {
      this.publish(f), this.toasts = [...this.toasts, f];
    }, this.create = (f) => {
      var v;
      let { message: c, ...F } = f, A = typeof (f == null ? void 0 : f.id) == "number" || ((v = f.id) == null ? void 0 : v.length) > 0 ? f.id : oa++, Y = this.toasts.find((H) => H.id === A), q = f.dismissible === void 0 ? !0 : f.dismissible;
      return this.dismissedToasts.has(A) && this.dismissedToasts.delete(A), Y ? this.toasts = this.toasts.map((H) => H.id === A ? (this.publish({ ...H, ...f, id: A, title: c }), { ...H, ...f, id: A, dismissible: q, title: c }) : H) : this.addToast({ title: c, ...F, dismissible: q, id: A }), A;
    }, this.dismiss = (f) => (this.dismissedToasts.add(f), f || this.toasts.forEach((v) => {
      this.subscribers.forEach((c) => c({ id: v.id, dismiss: !0 }));
    }), this.subscribers.forEach((v) => v({ id: f, dismiss: !0 })), f), this.message = (f, v) => this.create({ ...v, message: f }), this.error = (f, v) => this.create({ ...v, message: f, type: "error" }), this.success = (f, v) => this.create({ ...v, type: "success", message: f }), this.info = (f, v) => this.create({ ...v, type: "info", message: f }), this.warning = (f, v) => this.create({ ...v, type: "warning", message: f }), this.loading = (f, v) => this.create({ ...v, type: "loading", message: f }), this.promise = (f, v) => {
      if (!v) return;
      let c;
      v.loading !== void 0 && (c = this.create({ ...v, promise: f, type: "loading", message: v.loading, description: typeof v.description != "function" ? v.description : void 0 }));
      let F = f instanceof Promise ? f : f(), A = c !== void 0, Y, q = F.then(async (M) => {
        if (Y = ["resolve", M], P.isValidElement(M)) A = !1, this.create({ id: c, type: "default", message: M });
        else if (xf(M) && !M.ok) {
          A = !1;
          let W = typeof v.error == "function" ? await v.error(`HTTP error! status: ${M.status}`) : v.error, C = typeof v.description == "function" ? await v.description(`HTTP error! status: ${M.status}`) : v.description;
          this.create({ id: c, type: "error", message: W, description: C });
        } else if (v.success !== void 0) {
          A = !1;
          let W = typeof v.success == "function" ? await v.success(M) : v.success, C = typeof v.description == "function" ? await v.description(M) : v.description;
          this.create({ id: c, type: "success", message: W, description: C });
        }
      }).catch(async (M) => {
        if (Y = ["reject", M], v.error !== void 0) {
          A = !1;
          let W = typeof v.error == "function" ? await v.error(M) : v.error, C = typeof v.description == "function" ? await v.description(M) : v.description;
          this.create({ id: c, type: "error", message: W, description: C });
        }
      }).finally(() => {
        var M;
        A && (this.dismiss(c), c = void 0), (M = v.finally) == null || M.call(v);
      }), H = () => new Promise((M, W) => q.then(() => Y[0] === "reject" ? W(Y[1]) : M(Y[1])).catch(W));
      return typeof c != "string" && typeof c != "number" ? { unwrap: H } : Object.assign(c, { unwrap: H });
    }, this.custom = (f, v) => {
      let c = (v == null ? void 0 : v.id) || oa++;
      return this.create({ jsx: f(c), id: c, ...v }), c;
    }, this.getActiveToasts = () => this.toasts.filter((f) => !this.dismissedToasts.has(f.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, ut = new yf(), wf = (f, v) => {
  let c = (v == null ? void 0 : v.id) || oa++;
  return ut.addToast({ title: f, ...v, id: c }), c;
}, xf = (f) => f && typeof f == "object" && "ok" in f && typeof f.ok == "boolean" && "status" in f && typeof f.status == "number", kf = wf, Sf = () => ut.toasts, Ef = () => ut.getActiveToasts(), po = Object.assign(kf, { success: ut.success, info: ut.info, warning: ut.warning, error: ut.error, custom: ut.custom, message: ut.message, promise: ut.promise, dismiss: ut.dismiss, loading: ut.loading }, { getHistory: Sf, getToasts: Ef });
function Cf(f, { insertAt: v } = {}) {
  if (typeof document > "u") return;
  let c = document.head || document.getElementsByTagName("head")[0], F = document.createElement("style");
  F.type = "text/css", v === "top" && c.firstChild ? c.insertBefore(F, c.firstChild) : c.appendChild(F), F.styleSheet ? F.styleSheet.cssText = f : F.appendChild(document.createTextNode(f));
}
Cf(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function mo(f) {
  return f.label !== void 0;
}
var _f = 3, Nf = "32px", Pf = "16px", Gs = 4e3, Tf = 356, Rf = 14, zf = 20, Lf = 200;
function Rt(...f) {
  return f.filter(Boolean).join(" ");
}
function Mf(f) {
  let [v, c] = f.split("-"), F = [];
  return v && F.push(v), c && F.push(c), F;
}
var Df = (f) => {
  var v, c, F, A, Y, q, H, M, W, C, B;
  let { invert: T, toast: g, unstyled: te, interacting: U, setHeights: K, visibleToasts: we, heights: Ee, index: ne, toasts: Ce, expanded: De, removeToast: de, defaultRichColors: _e, closeButton: J, style: pe, cancelButtonStyle: ue, actionButtonStyle: ze, className: xe = "", descriptionClassName: Le = "", duration: je, position: Xe, gap: Ne, loadingIcon: ie, expandByDefault: N, classNames: E, icons: _, closeButtonAriaLabel: d = "Close toast", pauseWhenPageIsHidden: y } = f, [L, O] = P.useState(null), [X, b] = P.useState(null), [Q, re] = P.useState(!1), [ce, Fe] = P.useState(!1), [zt, On] = P.useState(!1), [wn, cr] = P.useState(!1), [Jr, dr] = P.useState(!1), [fr, jn] = P.useState(0), [pr, Jt] = P.useState(0), pt = P.useRef(g.duration || je || Gs), Fn = P.useRef(null), Lt = P.useRef(null), qr = ne === 0, br = ne + 1 <= we, Ge = g.type, Mt = g.dismissible !== !1, Un = g.className || "", el = g.descriptionClassName || "", Dt = P.useMemo(() => Ee.findIndex((Z) => Z.toastId === g.id) || 0, [Ee, g.id]), xn = P.useMemo(() => {
    var Z;
    return (Z = g.closeButton) != null ? Z : J;
  }, [g.closeButton, J]), tl = P.useMemo(() => g.duration || je || Gs, [g.duration, je]), Bn = P.useRef(0), Vt = P.useRef(0), nl = P.useRef(0), It = P.useRef(null), [mr, hr] = Xe.split("-"), An = P.useMemo(() => Ee.reduce((Z, se, me) => me >= Dt ? Z : Z + se.height, 0), [Ee, Dt]), $n = vf(), qt = g.invert || T, Ot = Ge === "loading";
  Vt.current = P.useMemo(() => Dt * Ne + An, [Dt, An]), P.useEffect(() => {
    pt.current = tl;
  }, [tl]), P.useEffect(() => {
    re(!0);
  }, []), P.useEffect(() => {
    let Z = Lt.current;
    if (Z) {
      let se = Z.getBoundingClientRect().height;
      return Jt(se), K((me) => [{ toastId: g.id, height: se, position: g.position }, ...me]), () => K((me) => me.filter((Ze) => Ze.toastId !== g.id));
    }
  }, [K, g.id]), P.useLayoutEffect(() => {
    if (!Q) return;
    let Z = Lt.current, se = Z.style.height;
    Z.style.height = "auto";
    let me = Z.getBoundingClientRect().height;
    Z.style.height = se, Jt(me), K((Ze) => Ze.find((et) => et.toastId === g.id) ? Ze.map((et) => et.toastId === g.id ? { ...et, height: me } : et) : [{ toastId: g.id, height: me, position: g.position }, ...Ze]);
  }, [Q, g.title, g.description, K, g.id]);
  let xt = P.useCallback(() => {
    Fe(!0), jn(Vt.current), K((Z) => Z.filter((se) => se.toastId !== g.id)), setTimeout(() => {
      de(g);
    }, Lf);
  }, [g, de, K, Vt]);
  P.useEffect(() => {
    if (g.promise && Ge === "loading" || g.duration === 1 / 0 || g.type === "loading") return;
    let Z;
    return De || U || y && $n ? (() => {
      if (nl.current < Bn.current) {
        let se = (/* @__PURE__ */ new Date()).getTime() - Bn.current;
        pt.current = pt.current - se;
      }
      nl.current = (/* @__PURE__ */ new Date()).getTime();
    })() : pt.current !== 1 / 0 && (Bn.current = (/* @__PURE__ */ new Date()).getTime(), Z = setTimeout(() => {
      var se;
      (se = g.onAutoClose) == null || se.call(g, g), xt();
    }, pt.current)), () => clearTimeout(Z);
  }, [De, U, g, Ge, y, $n, xt]), P.useEffect(() => {
    g.delete && xt();
  }, [xt, g.delete]);
  function rl() {
    var Z, se, me;
    return _ != null && _.loading ? P.createElement("div", { className: Rt(E == null ? void 0 : E.loader, (Z = g == null ? void 0 : g.classNames) == null ? void 0 : Z.loader, "sonner-loader"), "data-visible": Ge === "loading" }, _.loading) : ie ? P.createElement("div", { className: Rt(E == null ? void 0 : E.loader, (se = g == null ? void 0 : g.classNames) == null ? void 0 : se.loader, "sonner-loader"), "data-visible": Ge === "loading" }, ie) : P.createElement(df, { className: Rt(E == null ? void 0 : E.loader, (me = g == null ? void 0 : g.classNames) == null ? void 0 : me.loader), visible: Ge === "loading" });
  }
  return P.createElement("li", { tabIndex: 0, ref: Lt, className: Rt(xe, Un, E == null ? void 0 : E.toast, (v = g == null ? void 0 : g.classNames) == null ? void 0 : v.toast, E == null ? void 0 : E.default, E == null ? void 0 : E[Ge], (c = g == null ? void 0 : g.classNames) == null ? void 0 : c[Ge]), "data-sonner-toast": "", "data-rich-colors": (F = g.richColors) != null ? F : _e, "data-styled": !(g.jsx || g.unstyled || te), "data-mounted": Q, "data-promise": !!g.promise, "data-swiped": Jr, "data-removed": ce, "data-visible": br, "data-y-position": mr, "data-x-position": hr, "data-index": ne, "data-front": qr, "data-swiping": zt, "data-dismissible": Mt, "data-type": Ge, "data-invert": qt, "data-swipe-out": wn, "data-swipe-direction": X, "data-expanded": !!(De || N && Q), style: { "--index": ne, "--toasts-before": ne, "--z-index": Ce.length - ne, "--offset": `${ce ? fr : Vt.current}px`, "--initial-height": N ? "auto" : `${pr}px`, ...pe, ...g.style }, onDragEnd: () => {
    On(!1), O(null), It.current = null;
  }, onPointerDown: (Z) => {
    Ot || !Mt || (Fn.current = /* @__PURE__ */ new Date(), jn(Vt.current), Z.target.setPointerCapture(Z.pointerId), Z.target.tagName !== "BUTTON" && (On(!0), It.current = { x: Z.clientX, y: Z.clientY }));
  }, onPointerUp: () => {
    var Z, se, me, Ze;
    if (wn || !Mt) return;
    It.current = null;
    let et = Number(((Z = Lt.current) == null ? void 0 : Z.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), tt = Number(((se = Lt.current) == null ? void 0 : se.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), kt = (/* @__PURE__ */ new Date()).getTime() - ((me = Fn.current) == null ? void 0 : me.getTime()), $e = L === "x" ? et : tt, jt = Math.abs($e) / kt;
    if (Math.abs($e) >= zf || jt > 0.11) {
      jn(Vt.current), (Ze = g.onDismiss) == null || Ze.call(g, g), b(L === "x" ? et > 0 ? "right" : "left" : tt > 0 ? "down" : "up"), xt(), cr(!0), dr(!1);
      return;
    }
    On(!1), O(null);
  }, onPointerMove: (Z) => {
    var se, me, Ze, et;
    if (!It.current || !Mt || ((se = window.getSelection()) == null ? void 0 : se.toString().length) > 0) return;
    let tt = Z.clientY - It.current.y, kt = Z.clientX - It.current.x, $e = (me = f.swipeDirections) != null ? me : Mf(Xe);
    !L && (Math.abs(kt) > 1 || Math.abs(tt) > 1) && O(Math.abs(kt) > Math.abs(tt) ? "x" : "y");
    let jt = { x: 0, y: 0 };
    L === "y" ? ($e.includes("top") || $e.includes("bottom")) && ($e.includes("top") && tt < 0 || $e.includes("bottom") && tt > 0) && (jt.y = tt) : L === "x" && ($e.includes("left") || $e.includes("right")) && ($e.includes("left") && kt < 0 || $e.includes("right") && kt > 0) && (jt.x = kt), (Math.abs(jt.x) > 0 || Math.abs(jt.y) > 0) && dr(!0), (Ze = Lt.current) == null || Ze.style.setProperty("--swipe-amount-x", `${jt.x}px`), (et = Lt.current) == null || et.style.setProperty("--swipe-amount-y", `${jt.y}px`);
  } }, xn && !g.jsx ? P.createElement("button", { "aria-label": d, "data-disabled": Ot, "data-close-button": !0, onClick: Ot || !Mt ? () => {
  } : () => {
    var Z;
    xt(), (Z = g.onDismiss) == null || Z.call(g, g);
  }, className: Rt(E == null ? void 0 : E.closeButton, (A = g == null ? void 0 : g.classNames) == null ? void 0 : A.closeButton) }, (Y = _ == null ? void 0 : _.close) != null ? Y : gf) : null, g.jsx || be.isValidElement(g.title) ? g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title : P.createElement(P.Fragment, null, Ge || g.icon || g.promise ? P.createElement("div", { "data-icon": "", className: Rt(E == null ? void 0 : E.icon, (q = g == null ? void 0 : g.classNames) == null ? void 0 : q.icon) }, g.promise || g.type === "loading" && !g.icon ? g.icon || rl() : null, g.type !== "loading" ? g.icon || (_ == null ? void 0 : _[Ge]) || sf(Ge) : null) : null, P.createElement("div", { "data-content": "", className: Rt(E == null ? void 0 : E.content, (H = g == null ? void 0 : g.classNames) == null ? void 0 : H.content) }, P.createElement("div", { "data-title": "", className: Rt(E == null ? void 0 : E.title, (M = g == null ? void 0 : g.classNames) == null ? void 0 : M.title) }, typeof g.title == "function" ? g.title() : g.title), g.description ? P.createElement("div", { "data-description": "", className: Rt(Le, el, E == null ? void 0 : E.description, (W = g == null ? void 0 : g.classNames) == null ? void 0 : W.description) }, typeof g.description == "function" ? g.description() : g.description) : null), be.isValidElement(g.cancel) ? g.cancel : g.cancel && mo(g.cancel) ? P.createElement("button", { "data-button": !0, "data-cancel": !0, style: g.cancelButtonStyle || ue, onClick: (Z) => {
    var se, me;
    mo(g.cancel) && Mt && ((me = (se = g.cancel).onClick) == null || me.call(se, Z), xt());
  }, className: Rt(E == null ? void 0 : E.cancelButton, (C = g == null ? void 0 : g.classNames) == null ? void 0 : C.cancelButton) }, g.cancel.label) : null, be.isValidElement(g.action) ? g.action : g.action && mo(g.action) ? P.createElement("button", { "data-button": !0, "data-action": !0, style: g.actionButtonStyle || ze, onClick: (Z) => {
    var se, me;
    mo(g.action) && ((me = (se = g.action).onClick) == null || me.call(se, Z), !Z.defaultPrevented && xt());
  }, className: Rt(E == null ? void 0 : E.actionButton, (B = g == null ? void 0 : g.classNames) == null ? void 0 : B.actionButton) }, g.action.label) : null));
};
function Zs() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let f = document.documentElement.getAttribute("dir");
  return f === "auto" || !f ? window.getComputedStyle(document.documentElement).direction : f;
}
function If(f, v) {
  let c = {};
  return [f, v].forEach((F, A) => {
    let Y = A === 1, q = Y ? "--mobile-offset" : "--offset", H = Y ? Pf : Nf;
    function M(W) {
      ["top", "right", "bottom", "left"].forEach((C) => {
        c[`${q}-${C}`] = typeof W == "number" ? `${W}px` : W;
      });
    }
    typeof F == "number" || typeof F == "string" ? M(F) : typeof F == "object" ? ["top", "right", "bottom", "left"].forEach((W) => {
      F[W] === void 0 ? c[`${q}-${W}`] = H : c[`${q}-${W}`] = typeof F[W] == "number" ? `${F[W]}px` : F[W];
    }) : M(H);
  }), c;
}
var Of = be.forwardRef(function(f, v) {
  let { invert: c, position: F = "bottom-right", hotkey: A = ["altKey", "KeyT"], expand: Y, closeButton: q, className: H, offset: M, mobileOffset: W, theme: C = "light", richColors: B, duration: T, style: g, visibleToasts: te = _f, toastOptions: U, dir: K = Zs(), gap: we = Rf, loadingIcon: Ee, icons: ne, containerAriaLabel: Ce = "Notifications", pauseWhenPageIsHidden: De } = f, [de, _e] = P.useState([]), J = P.useMemo(() => Array.from(new Set([F].concat(de.filter((y) => y.position).map((y) => y.position)))), [de, F]), [pe, ue] = P.useState([]), [ze, xe] = P.useState(!1), [Le, je] = P.useState(!1), [Xe, Ne] = P.useState(C !== "system" ? C : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), ie = P.useRef(null), N = A.join("+").replace(/Key/g, "").replace(/Digit/g, ""), E = P.useRef(null), _ = P.useRef(!1), d = P.useCallback((y) => {
    _e((L) => {
      var O;
      return (O = L.find((X) => X.id === y.id)) != null && O.delete || ut.dismiss(y.id), L.filter(({ id: X }) => X !== y.id);
    });
  }, []);
  return P.useEffect(() => ut.subscribe((y) => {
    if (y.dismiss) {
      _e((L) => L.map((O) => O.id === y.id ? { ...O, delete: !0 } : O));
      return;
    }
    setTimeout(() => {
      uf.flushSync(() => {
        _e((L) => {
          let O = L.findIndex((X) => X.id === y.id);
          return O !== -1 ? [...L.slice(0, O), { ...L[O], ...y }, ...L.slice(O + 1)] : [y, ...L];
        });
      });
    });
  }), []), P.useEffect(() => {
    if (C !== "system") {
      Ne(C);
      return;
    }
    if (C === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ne("dark") : Ne("light")), typeof window > "u") return;
    let y = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      y.addEventListener("change", ({ matches: L }) => {
        Ne(L ? "dark" : "light");
      });
    } catch {
      y.addListener(({ matches: O }) => {
        try {
          Ne(O ? "dark" : "light");
        } catch (X) {
          console.error(X);
        }
      });
    }
  }, [C]), P.useEffect(() => {
    de.length <= 1 && xe(!1);
  }, [de]), P.useEffect(() => {
    let y = (L) => {
      var O, X;
      A.every((b) => L[b] || L.code === b) && (xe(!0), (O = ie.current) == null || O.focus()), L.code === "Escape" && (document.activeElement === ie.current || (X = ie.current) != null && X.contains(document.activeElement)) && xe(!1);
    };
    return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [A]), P.useEffect(() => {
    if (ie.current) return () => {
      E.current && (E.current.focus({ preventScroll: !0 }), E.current = null, _.current = !1);
    };
  }, [ie.current]), P.createElement("section", { ref: v, "aria-label": `${Ce} ${N}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, J.map((y, L) => {
    var O;
    let [X, b] = y.split("-");
    return de.length ? P.createElement("ol", { key: y, dir: K === "auto" ? Zs() : K, tabIndex: -1, ref: ie, className: H, "data-sonner-toaster": !0, "data-theme": Xe, "data-y-position": X, "data-lifted": ze && de.length > 1 && !Y, "data-x-position": b, style: { "--front-toast-height": `${((O = pe[0]) == null ? void 0 : O.height) || 0}px`, "--width": `${Tf}px`, "--gap": `${we}px`, ...g, ...If(M, W) }, onBlur: (Q) => {
      _.current && !Q.currentTarget.contains(Q.relatedTarget) && (_.current = !1, E.current && (E.current.focus({ preventScroll: !0 }), E.current = null));
    }, onFocus: (Q) => {
      Q.target instanceof HTMLElement && Q.target.dataset.dismissible === "false" || _.current || (_.current = !0, E.current = Q.relatedTarget);
    }, onMouseEnter: () => xe(!0), onMouseMove: () => xe(!0), onMouseLeave: () => {
      Le || xe(!1);
    }, onDragEnd: () => xe(!1), onPointerDown: (Q) => {
      Q.target instanceof HTMLElement && Q.target.dataset.dismissible === "false" || je(!0);
    }, onPointerUp: () => je(!1) }, de.filter((Q) => !Q.position && L === 0 || Q.position === y).map((Q, re) => {
      var ce, Fe;
      return P.createElement(Df, { key: Q.id, icons: ne, index: re, toast: Q, defaultRichColors: B, duration: (ce = U == null ? void 0 : U.duration) != null ? ce : T, className: U == null ? void 0 : U.className, descriptionClassName: U == null ? void 0 : U.descriptionClassName, invert: c, visibleToasts: te, closeButton: (Fe = U == null ? void 0 : U.closeButton) != null ? Fe : q, interacting: Le, position: y, style: U == null ? void 0 : U.style, unstyled: U == null ? void 0 : U.unstyled, classNames: U == null ? void 0 : U.classNames, cancelButtonStyle: U == null ? void 0 : U.cancelButtonStyle, actionButtonStyle: U == null ? void 0 : U.actionButtonStyle, removeToast: d, toasts: de.filter((zt) => zt.position == Q.position), heights: pe.filter((zt) => zt.position == Q.position), setHeights: ue, expandByDefault: Y, gap: we, loadingIcon: Ee, expanded: ze, pauseWhenPageIsHidden: De, swipeDirections: f.swipeDirections });
    })) : null;
  }));
});
const la = {
  id: "ext_toast",
  reference_name: "ToastExtension",
  supports_dark_mode: !0,
  description: "A toast notification extension powered by Sonner"
}, ec = {
  background: "#ffffff",
  color: "#1a1a1a",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  fontSize: "14px",
  fontWeight: "500"
};
(() => {
  const f = "sonner-toast-container";
  if (document.getElementById(f)) return;
  const v = document.createElement("div");
  v.id = f, v.style.position = "fixed", v.style.inset = "0", v.style.pointerEvents = "none", v.style.zIndex = "999999", document.body.appendChild(v), qs.createRoot(v).render(
    P.createElement(Of, {
      expand: !0,
      richColors: !0,
      closeButton: !0,
      toastOptions: {
        style: { ...ec, pointerEvents: "auto" },
        duration: 4e3
      }
    })
  );
})();
const Bf = {
  name: la.reference_name,
  type: "effect",
  match: ({ trace: f }) => {
    var v;
    return f.type === la.id || ((v = f.payload) == null ? void 0 : v.name) === la.id;
  },
  effect: async ({ trace: f }) => {
    console.log("trace", f);
    const { type: v, message: c, options: F = {} } = f.payload, A = {
      ...F,
      style: { ...ec, ...F.style }
    };
    switch (v) {
      case "success":
        po.success(c, A);
        break;
      case "error":
        po.error(c, A);
        break;
      case "loading":
        po.loading(c, A);
        break;
      default:
        po(c, A);
    }
  }
};
export {
  jf as FormExtension,
  Uf as RecorderExtension,
  Bf as ToastExtension,
  Ff as VideoExtension
};
