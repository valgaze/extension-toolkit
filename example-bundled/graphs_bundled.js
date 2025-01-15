function df(ne) {
  return ne && ne.__esModule && Object.prototype.hasOwnProperty.call(ne, "default") ? ne.default : ne;
}
var sc = { exports: {} }, au = {}, ac = { exports: {} }, ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $c;
function Uf() {
  if ($c) return ve;
  $c = 1;
  var ne = Symbol.for("react.element"), Ye = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), ut = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), de = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), we = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), Le = Symbol.iterator;
  function Ue(C) {
    return C === null || typeof C != "object" ? null : (C = Le && C[Le] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var Tt = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Pt = Object.assign, je = {};
  function me(C, R, ge) {
    this.props = C, this.context = R, this.refs = je, this.updater = ge || Tt;
  }
  me.prototype.isReactComponent = {}, me.prototype.setState = function(C, R) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, R, "setState");
  }, me.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function Qe() {
  }
  Qe.prototype = me.prototype;
  function Ee(C, R, ge) {
    this.props = C, this.context = R, this.refs = je, this.updater = ge || Tt;
  }
  var Vt = Ee.prototype = new Qe();
  Vt.constructor = Ee, Pt(Vt, me.prototype), Vt.isPureReactComponent = !0;
  var ht = Array.isArray, en = Object.prototype.hasOwnProperty, yt = { current: null }, Nt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xt(C, R, ge) {
    var ye, ke = {}, xe = null, ze = null;
    if (R != null) for (ye in R.ref !== void 0 && (ze = R.ref), R.key !== void 0 && (xe = "" + R.key), R) en.call(R, ye) && !Nt.hasOwnProperty(ye) && (ke[ye] = R[ye]);
    var Pe = arguments.length - 2;
    if (Pe === 1) ke.children = ge;
    else if (1 < Pe) {
      for (var Be = Array(Pe), Ft = 0; Ft < Pe; Ft++) Be[Ft] = arguments[Ft + 2];
      ke.children = Be;
    }
    if (C && C.defaultProps) for (ye in Pe = C.defaultProps, Pe) ke[ye] === void 0 && (ke[ye] = Pe[ye]);
    return { $$typeof: ne, type: C, key: xe, ref: ze, props: ke, _owner: yt.current };
  }
  function bn(C, R) {
    return { $$typeof: ne, type: C.type, key: R, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function Mn(C) {
    return typeof C == "object" && C !== null && C.$$typeof === ne;
  }
  function tr(C) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(ge) {
      return R[ge];
    });
  }
  var dn = /\/+/g;
  function zt(C, R) {
    return typeof C == "object" && C !== null && C.key != null ? tr("" + C.key) : R.toString(36);
  }
  function tn(C, R, ge, ye, ke) {
    var xe = typeof C;
    (xe === "undefined" || xe === "boolean") && (C = null);
    var ze = !1;
    if (C === null) ze = !0;
    else switch (xe) {
      case "string":
      case "number":
        ze = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case ne:
          case Ye:
            ze = !0;
        }
    }
    if (ze) return ze = C, ke = ke(ze), C = ye === "" ? "." + zt(ze, 0) : ye, ht(ke) ? (ge = "", C != null && (ge = C.replace(dn, "$&/") + "/"), tn(ke, R, ge, "", function(Ft) {
      return Ft;
    })) : ke != null && (Mn(ke) && (ke = bn(ke, ge + (!ke.key || ze && ze.key === ke.key ? "" : ("" + ke.key).replace(dn, "$&/") + "/") + C)), R.push(ke)), 1;
    if (ze = 0, ye = ye === "" ? "." : ye + ":", ht(C)) for (var Pe = 0; Pe < C.length; Pe++) {
      xe = C[Pe];
      var Be = ye + zt(xe, Pe);
      ze += tn(xe, R, ge, Be, ke);
    }
    else if (Be = Ue(C), typeof Be == "function") for (C = Be.call(C), Pe = 0; !(xe = C.next()).done; ) xe = xe.value, Be = ye + zt(xe, Pe++), ze += tn(xe, R, ge, Be, ke);
    else if (xe === "object") throw R = String(C), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ze;
  }
  function hn(C, R, ge) {
    if (C == null) return C;
    var ye = [], ke = 0;
    return tn(C, ye, "", "", function(xe) {
      return R.call(ge, xe, ke++);
    }), ye;
  }
  function Ot(C) {
    if (C._status === -1) {
      var R = C._result;
      R = R(), R.then(function(ge) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = ge);
      }, function(ge) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = ge);
      }), C._status === -1 && (C._status = 0, C._result = R);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var Ke = { current: null }, G = { transition: null }, ae = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: G, ReactCurrentOwner: yt };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ve.Children = { map: hn, forEach: function(C, R, ge) {
    hn(C, function() {
      R.apply(this, arguments);
    }, ge);
  }, count: function(C) {
    var R = 0;
    return hn(C, function() {
      R++;
    }), R;
  }, toArray: function(C) {
    return hn(C, function(R) {
      return R;
    }) || [];
  }, only: function(C) {
    if (!Mn(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, ve.Component = me, ve.Fragment = O, ve.Profiler = He, ve.PureComponent = Ee, ve.StrictMode = ut, ve.Suspense = oe, ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, ve.act = _, ve.cloneElement = function(C, R, ge) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var ye = Pt({}, C.props), ke = C.key, xe = C.ref, ze = C._owner;
    if (R != null) {
      if (R.ref !== void 0 && (xe = R.ref, ze = yt.current), R.key !== void 0 && (ke = "" + R.key), C.type && C.type.defaultProps) var Pe = C.type.defaultProps;
      for (Be in R) en.call(R, Be) && !Nt.hasOwnProperty(Be) && (ye[Be] = R[Be] === void 0 && Pe !== void 0 ? Pe[Be] : R[Be]);
    }
    var Be = arguments.length - 2;
    if (Be === 1) ye.children = ge;
    else if (1 < Be) {
      Pe = Array(Be);
      for (var Ft = 0; Ft < Be; Ft++) Pe[Ft] = arguments[Ft + 2];
      ye.children = Pe;
    }
    return { $$typeof: ne, type: C.type, key: ke, ref: xe, props: ye, _owner: ze };
  }, ve.createContext = function(C) {
    return C = { $$typeof: de, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: Oe, _context: C }, C.Consumer = C;
  }, ve.createElement = Xt, ve.createFactory = function(C) {
    var R = Xt.bind(null, C);
    return R.type = C, R;
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(C) {
    return { $$typeof: le, render: C };
  }, ve.isValidElement = Mn, ve.lazy = function(C) {
    return { $$typeof: Ie, _payload: { _status: -1, _result: C }, _init: Ot };
  }, ve.memo = function(C, R) {
    return { $$typeof: we, type: C, compare: R === void 0 ? null : R };
  }, ve.startTransition = function(C) {
    var R = G.transition;
    G.transition = {};
    try {
      C();
    } finally {
      G.transition = R;
    }
  }, ve.unstable_act = _, ve.useCallback = function(C, R) {
    return Ke.current.useCallback(C, R);
  }, ve.useContext = function(C) {
    return Ke.current.useContext(C);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(C) {
    return Ke.current.useDeferredValue(C);
  }, ve.useEffect = function(C, R) {
    return Ke.current.useEffect(C, R);
  }, ve.useId = function() {
    return Ke.current.useId();
  }, ve.useImperativeHandle = function(C, R, ge) {
    return Ke.current.useImperativeHandle(C, R, ge);
  }, ve.useInsertionEffect = function(C, R) {
    return Ke.current.useInsertionEffect(C, R);
  }, ve.useLayoutEffect = function(C, R) {
    return Ke.current.useLayoutEffect(C, R);
  }, ve.useMemo = function(C, R) {
    return Ke.current.useMemo(C, R);
  }, ve.useReducer = function(C, R, ge) {
    return Ke.current.useReducer(C, R, ge);
  }, ve.useRef = function(C) {
    return Ke.current.useRef(C);
  }, ve.useState = function(C) {
    return Ke.current.useState(C);
  }, ve.useSyncExternalStore = function(C, R, ge) {
    return Ke.current.useSyncExternalStore(C, R, ge);
  }, ve.useTransition = function() {
    return Ke.current.useTransition();
  }, ve.version = "18.3.1", ve;
}
var ef;
function yc() {
  return ef || (ef = 1, ac.exports = Uf()), ac.exports;
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
var tf;
function Wf() {
  if (tf) return au;
  tf = 1;
  var ne = yc(), Ye = Symbol.for("react.element"), O = Symbol.for("react.fragment"), ut = Object.prototype.hasOwnProperty, He = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function de(le, oe, we) {
    var Ie, Le = {}, Ue = null, Tt = null;
    we !== void 0 && (Ue = "" + we), oe.key !== void 0 && (Ue = "" + oe.key), oe.ref !== void 0 && (Tt = oe.ref);
    for (Ie in oe) ut.call(oe, Ie) && !Oe.hasOwnProperty(Ie) && (Le[Ie] = oe[Ie]);
    if (le && le.defaultProps) for (Ie in oe = le.defaultProps, oe) Le[Ie] === void 0 && (Le[Ie] = oe[Ie]);
    return { $$typeof: Ye, type: le, key: Ue, ref: Tt, props: Le, _owner: He.current };
  }
  return au.Fragment = O, au.jsx = de, au.jsxs = de, au;
}
var nf;
function Yf() {
  return nf || (nf = 1, sc.exports = Wf()), sc.exports;
}
var Sr = Yf(), $s = {}, cc = { exports: {} }, $t = {}, fc = { exports: {} }, dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf;
function Hf() {
  return rf || (rf = 1, function(ne) {
    function Ye(G, ae) {
      var _ = G.length;
      G.push(ae);
      e: for (; 0 < _; ) {
        var C = _ - 1 >>> 1, R = G[C];
        if (0 < He(R, ae)) G[C] = ae, G[_] = R, _ = C;
        else break e;
      }
    }
    function O(G) {
      return G.length === 0 ? null : G[0];
    }
    function ut(G) {
      if (G.length === 0) return null;
      var ae = G[0], _ = G.pop();
      if (_ !== ae) {
        G[0] = _;
        e: for (var C = 0, R = G.length, ge = R >>> 1; C < ge; ) {
          var ye = 2 * (C + 1) - 1, ke = G[ye], xe = ye + 1, ze = G[xe];
          if (0 > He(ke, _)) xe < R && 0 > He(ze, ke) ? (G[C] = ze, G[xe] = _, C = xe) : (G[C] = ke, G[ye] = _, C = ye);
          else if (xe < R && 0 > He(ze, _)) G[C] = ze, G[xe] = _, C = xe;
          else break e;
        }
      }
      return ae;
    }
    function He(G, ae) {
      var _ = G.sortIndex - ae.sortIndex;
      return _ !== 0 ? _ : G.id - ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Oe = performance;
      ne.unstable_now = function() {
        return Oe.now();
      };
    } else {
      var de = Date, le = de.now();
      ne.unstable_now = function() {
        return de.now() - le;
      };
    }
    var oe = [], we = [], Ie = 1, Le = null, Ue = 3, Tt = !1, Pt = !1, je = !1, me = typeof setTimeout == "function" ? setTimeout : null, Qe = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Vt(G) {
      for (var ae = O(we); ae !== null; ) {
        if (ae.callback === null) ut(we);
        else if (ae.startTime <= G) ut(we), ae.sortIndex = ae.expirationTime, Ye(oe, ae);
        else break;
        ae = O(we);
      }
    }
    function ht(G) {
      if (je = !1, Vt(G), !Pt) if (O(oe) !== null) Pt = !0, Ot(en);
      else {
        var ae = O(we);
        ae !== null && Ke(ht, ae.startTime - G);
      }
    }
    function en(G, ae) {
      Pt = !1, je && (je = !1, Qe(Xt), Xt = -1), Tt = !0;
      var _ = Ue;
      try {
        for (Vt(ae), Le = O(oe); Le !== null && (!(Le.expirationTime > ae) || G && !tr()); ) {
          var C = Le.callback;
          if (typeof C == "function") {
            Le.callback = null, Ue = Le.priorityLevel;
            var R = C(Le.expirationTime <= ae);
            ae = ne.unstable_now(), typeof R == "function" ? Le.callback = R : Le === O(oe) && ut(oe), Vt(ae);
          } else ut(oe);
          Le = O(oe);
        }
        if (Le !== null) var ge = !0;
        else {
          var ye = O(we);
          ye !== null && Ke(ht, ye.startTime - ae), ge = !1;
        }
        return ge;
      } finally {
        Le = null, Ue = _, Tt = !1;
      }
    }
    var yt = !1, Nt = null, Xt = -1, bn = 5, Mn = -1;
    function tr() {
      return !(ne.unstable_now() - Mn < bn);
    }
    function dn() {
      if (Nt !== null) {
        var G = ne.unstable_now();
        Mn = G;
        var ae = !0;
        try {
          ae = Nt(!0, G);
        } finally {
          ae ? zt() : (yt = !1, Nt = null);
        }
      } else yt = !1;
    }
    var zt;
    if (typeof Ee == "function") zt = function() {
      Ee(dn);
    };
    else if (typeof MessageChannel < "u") {
      var tn = new MessageChannel(), hn = tn.port2;
      tn.port1.onmessage = dn, zt = function() {
        hn.postMessage(null);
      };
    } else zt = function() {
      me(dn, 0);
    };
    function Ot(G) {
      Nt = G, yt || (yt = !0, zt());
    }
    function Ke(G, ae) {
      Xt = me(function() {
        G(ne.unstable_now());
      }, ae);
    }
    ne.unstable_IdlePriority = 5, ne.unstable_ImmediatePriority = 1, ne.unstable_LowPriority = 4, ne.unstable_NormalPriority = 3, ne.unstable_Profiling = null, ne.unstable_UserBlockingPriority = 2, ne.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, ne.unstable_continueExecution = function() {
      Pt || Tt || (Pt = !0, Ot(en));
    }, ne.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bn = 0 < G ? Math.floor(1e3 / G) : 5;
    }, ne.unstable_getCurrentPriorityLevel = function() {
      return Ue;
    }, ne.unstable_getFirstCallbackNode = function() {
      return O(oe);
    }, ne.unstable_next = function(G) {
      switch (Ue) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = Ue;
      }
      var _ = Ue;
      Ue = ae;
      try {
        return G();
      } finally {
        Ue = _;
      }
    }, ne.unstable_pauseExecution = function() {
    }, ne.unstable_requestPaint = function() {
    }, ne.unstable_runWithPriority = function(G, ae) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var _ = Ue;
      Ue = G;
      try {
        return ae();
      } finally {
        Ue = _;
      }
    }, ne.unstable_scheduleCallback = function(G, ae, _) {
      var C = ne.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? C + _ : C) : _ = C, G) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = _ + R, G = { id: Ie++, callback: ae, priorityLevel: G, startTime: _, expirationTime: R, sortIndex: -1 }, _ > C ? (G.sortIndex = _, Ye(we, G), O(oe) === null && G === O(we) && (je ? (Qe(Xt), Xt = -1) : je = !0, Ke(ht, _ - C))) : (G.sortIndex = R, Ye(oe, G), Pt || Tt || (Pt = !0, Ot(en))), G;
    }, ne.unstable_shouldYield = tr, ne.unstable_wrapCallback = function(G) {
      var ae = Ue;
      return function() {
        var _ = Ue;
        Ue = ae;
        try {
          return G.apply(this, arguments);
        } finally {
          Ue = _;
        }
      };
    };
  }(dc)), dc;
}
var of;
function If() {
  return of || (of = 1, fc.exports = Hf()), fc.exports;
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
var lf;
function Bf() {
  if (lf) return $t;
  lf = 1;
  var ne = yc(), Ye = If();
  function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ut = /* @__PURE__ */ new Set(), He = {};
  function Oe(e, t) {
    de(e, t), de(e + "Capture", t);
  }
  function de(e, t) {
    for (He[e] = t, e = 0; e < t.length; e++) ut.add(t[e]);
  }
  var le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oe = Object.prototype.hasOwnProperty, we = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ie = {}, Le = {};
  function Ue(e) {
    return oe.call(Le, e) ? !0 : oe.call(Ie, e) ? !1 : we.test(e) ? Le[e] = !0 : (Ie[e] = !0, !1);
  }
  function Tt(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Pt(e, t, n, i) {
    if (t === null || typeof t > "u" || Tt(e, t, n, i)) return !0;
    if (i) return !1;
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
  function je(e, t, n, i, l, s, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
  }
  var me = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    me[e] = new je(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    me[t] = new je(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    me[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    me[e] = new je(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    me[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    me[e] = new je(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    me[e] = new je(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    me[e] = new je(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    me[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Qe = /[\-:]([a-z])/g;
  function Ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Qe,
      Ee
    );
    me[t] = new je(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Qe, Ee);
    me[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Qe, Ee);
    me[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    me[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), me.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    me[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Vt(e, t, n, i) {
    var l = me.hasOwnProperty(t) ? me[t] : null;
    (l !== null ? l.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pt(t, n, l, i) && (n = null), i || l === null ? Ue(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, i = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var ht = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, en = Symbol.for("react.element"), yt = Symbol.for("react.portal"), Nt = Symbol.for("react.fragment"), Xt = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), Mn = Symbol.for("react.provider"), tr = Symbol.for("react.context"), dn = Symbol.for("react.forward_ref"), zt = Symbol.for("react.suspense"), tn = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), G = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, C;
  function R(e) {
    if (C === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      C = t && t[1] || "";
    }
    return `
` + C + e;
  }
  var ge = !1;
  function ye(e, t) {
    if (!e || ge) return "";
    ge = !0;
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
        } catch (T) {
          var i = T;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (T) {
          i = T;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (T) {
          i = T;
        }
        e();
      }
    } catch (T) {
      if (T && i && typeof T.stack == "string") {
        for (var l = T.stack.split(`
`), s = i.stack.split(`
`), f = l.length - 1, g = s.length - 1; 1 <= f && 0 <= g && l[f] !== s[g]; ) g--;
        for (; 1 <= f && 0 <= g; f--, g--) if (l[f] !== s[g]) {
          if (f !== 1 || g !== 1)
            do
              if (f--, g--, 0 > g || l[f] !== s[g]) {
                var v = `
` + l[f].replace(" at new ", " at ");
                return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), v;
              }
            while (1 <= f && 0 <= g);
          break;
        }
      }
    } finally {
      ge = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ye(e.type, !1), e;
      case 11:
        return e = ye(e.type.render, !1), e;
      case 1:
        return e = ye(e.type, !0), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Nt:
        return "Fragment";
      case yt:
        return "Portal";
      case bn:
        return "Profiler";
      case Xt:
        return "StrictMode";
      case zt:
        return "Suspense";
      case tn:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case tr:
        return (e.displayName || "Context") + ".Consumer";
      case Mn:
        return (e._context.displayName || "Context") + ".Provider";
      case dn:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hn:
        return t = e.displayName || null, t !== null ? t : xe(e.type) || "Memo";
      case Ot:
        t = e._payload, e = e._init;
        try {
          return xe(e(t));
        } catch {
        }
    }
    return null;
  }
  function ze(e) {
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
        return xe(t);
      case 8:
        return t === Xt ? "StrictMode" : "Mode";
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
  function Pe(e) {
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
  function Be(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ft(e) {
    var t = Be(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, s = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(f) {
        i = "" + f, s.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(f) {
        i = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function no(e) {
    e._valueTracker || (e._valueTracker = Ft(e));
  }
  function $o(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Be(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ro(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function el(e, t) {
    var n = t.checked;
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function cu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = Pe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function fu(e, t) {
    t = t.checked, t != null && Vt(e, "checked", t, !1);
  }
  function tl(e, t) {
    fu(e, t);
    var n = Pe(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? io(e, t.type, n) : t.hasOwnProperty("defaultValue") && io(e, t.type, Pe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function du(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function io(e, t, n) {
    (t !== "number" || ro(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var nr = Array.isArray;
  function rr(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Pe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function nl(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(O(92));
        if (nr(n)) {
          if (1 < n.length) throw Error(O(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Pe(n) };
  }
  function hu(e, t) {
    var n = Pe(t.value), i = Pe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function pu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function gu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var lo, mu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (lo = lo || document.createElement("div"), lo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = lo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function di(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hi = {
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
  }, ea = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hi).forEach(function(e) {
    ea.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), hi[t] = hi[e];
    });
  });
  function yu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hi.hasOwnProperty(e) && hi[e] ? ("" + t).trim() : t + "px";
  }
  function vu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, l = yu(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var ta = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function il(e, t) {
    if (t) {
      if (ta[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(O(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(O(62));
    }
  }
  function ol(e, t) {
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
  var ll = null;
  function ul(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sl = null, Cr = null, ir = null;
  function wu(e) {
    if (e = Ln(e)) {
      if (typeof sl != "function") throw Error(O(280));
      var t = e.stateNode;
      t && (t = Yi(t), sl(e.stateNode, e.type, t));
    }
  }
  function ku(e) {
    Cr ? ir ? ir.push(e) : ir = [e] : Cr = e;
  }
  function xu() {
    if (Cr) {
      var e = Cr, t = ir;
      if (ir = Cr = null, wu(e), t) for (e = 0; e < t.length; e++) wu(t[e]);
    }
  }
  function Su(e, t) {
    return e(t);
  }
  function Cu() {
  }
  var al = !1;
  function Mu(e, t, n) {
    if (al) return e(t, n);
    al = !0;
    try {
      return Su(e, t, n);
    } finally {
      al = !1, (Cr !== null || ir !== null) && (Cu(), xu());
    }
  }
  function pi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Yi(n);
    if (i === null) return null;
    n = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(O(231, t, typeof n));
    return n;
  }
  var cl = !1;
  if (le) try {
    var Mr = {};
    Object.defineProperty(Mr, "passive", { get: function() {
      cl = !0;
    } }), window.addEventListener("test", Mr, Mr), window.removeEventListener("test", Mr, Mr);
  } catch {
    cl = !1;
  }
  function uo(e, t, n, i, l, s, f, g, v) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var gi = !1, so = null, mi = !1, fl = null, na = { onError: function(e) {
    gi = !0, so = e;
  } };
  function ra(e, t, n, i, l, s, f, g, v) {
    gi = !1, so = null, uo.apply(na, arguments);
  }
  function ia(e, t, n, i, l, s, f, g, v) {
    if (ra.apply(this, arguments), gi) {
      if (gi) {
        var T = so;
        gi = !1, so = null;
      } else throw Error(O(198));
      mi || (mi = !0, fl = T);
    }
  }
  function Vn(e) {
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
  function Au(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Eu(e) {
    if (Vn(e) !== e) throw Error(O(188));
  }
  function oa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Vn(e), t === null) throw Error(O(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (i = l.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return Eu(l), e;
          if (s === i) return Eu(l), t;
          s = s.sibling;
        }
        throw Error(O(188));
      }
      if (n.return !== i.return) n = l, i = s;
      else {
        for (var f = !1, g = l.child; g; ) {
          if (g === n) {
            f = !0, n = l, i = s;
            break;
          }
          if (g === i) {
            f = !0, i = l, n = s;
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = s.child; g; ) {
            if (g === n) {
              f = !0, n = s, i = l;
              break;
            }
            if (g === i) {
              f = !0, i = s, n = l;
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(O(189));
        }
      }
      if (n.alternate !== i) throw Error(O(190));
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? e : t;
  }
  function Tu(e) {
    return e = oa(e), e !== null ? Rt(e) : null;
  }
  function Rt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Rt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var it = Ye.unstable_scheduleCallback, Pu = Ye.unstable_cancelCallback, la = Ye.unstable_shouldYield, An = Ye.unstable_requestPaint, be = Ye.unstable_now, Nu = Ye.unstable_getCurrentPriorityLevel, dl = Ye.unstable_ImmediatePriority, hl = Ye.unstable_UserBlockingPriority, yi = Ye.unstable_NormalPriority, ua = Ye.unstable_LowPriority, Ou = Ye.unstable_IdlePriority, ao = null, pn = null;
  function pl(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function") try {
      pn.onCommitFiberRoot(ao, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ut = Math.clz32 ? Math.clz32 : co, gl = Math.log, sa = Math.LN2;
  function co(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gl(e) / sa | 0) | 0;
  }
  var Ar = 64, or = 4194304;
  function Er(e) {
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
  function vi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, s = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var g = f & ~l;
      g !== 0 ? i = Er(g) : (s &= f, s !== 0 && (i = Er(s)));
    } else f = n & ~l, f !== 0 ? i = Er(f) : s !== 0 && (i = Er(s));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && !(t & l) && (l = i & -i, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
    if (i & 4 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - Ut(t), l = 1 << n, i |= e[n], t &= ~l;
    return i;
  }
  function aa(e, t) {
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
  function lr(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var f = 31 - Ut(s), g = 1 << f, v = l[f];
      v === -1 ? (!(g & n) || g & i) && (l[f] = aa(g, t)) : v <= t && (e.expiredLanes |= g), s &= ~g;
    }
  }
  function ur(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function fo() {
    var e = Ar;
    return Ar <<= 1, !(Ar & 4194240) && (Ar = 64), e;
  }
  function ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function En(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ut(t), e[t] = n;
  }
  function po(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ut(n), s = 1 << l;
      t[l] = 0, i[l] = -1, e[l] = -1, n &= ~s;
    }
  }
  function Xn(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Ut(n), l = 1 << i;
      l & t | e[i] & t && (e[i] |= t), n &= ~l;
    }
  }
  var Se = 0;
  function nn(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Du, ml, Lu, ju, zu, yl = !1, go = [], Tn = null, Pn = null, Zn = null, Tr = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), On = [], Fu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ru(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Pn = null;
        break;
      case "mouseover":
      case "mouseout":
        Zn = null;
        break;
      case "pointerover":
      case "pointerout":
        Tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nn.delete(t.pointerId);
    }
  }
  function sr(e, t, n, i, l, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: s, targetContainers: [l] }, t !== null && (t = Ln(t), t !== null && ml(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function vt(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return Tn = sr(Tn, e, t, n, i, l), !0;
      case "dragenter":
        return Pn = sr(Pn, e, t, n, i, l), !0;
      case "mouseover":
        return Zn = sr(Zn, e, t, n, i, l), !0;
      case "pointerover":
        var s = l.pointerId;
        return Tr.set(s, sr(Tr.get(s) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return s = l.pointerId, Nn.set(s, sr(Nn.get(s) || null, e, t, n, i, l)), !0;
    }
    return !1;
  }
  function vl(e) {
    var t = wn(e.target);
    if (t !== null) {
      var n = Vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Au(n), t !== null) {
            e.blockedOn = t, zu(e.priority, function() {
              Lu(n);
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
  function wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Si(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        ll = i, n.target.dispatchEvent(i), ll = null;
      } else return t = Ln(n), t !== null && ml(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function mo(e, t, n) {
    wi(e) && n.delete(t);
  }
  function Uu() {
    yl = !1, Tn !== null && wi(Tn) && (Tn = null), Pn !== null && wi(Pn) && (Pn = null), Zn !== null && wi(Zn) && (Zn = null), Tr.forEach(mo), Nn.forEach(mo);
  }
  function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, yl || (yl = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Uu)));
  }
  function ki(e) {
    function t(l) {
      return Pr(l, e);
    }
    if (0 < go.length) {
      Pr(go[0], e);
      for (var n = 1; n < go.length; n++) {
        var i = go[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Tn !== null && Pr(Tn, e), Pn !== null && Pr(Pn, e), Zn !== null && Pr(Zn, e), Tr.forEach(t), Nn.forEach(t), n = 0; n < On.length; n++) i = On[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < On.length && (n = On[0], n.blockedOn === null); ) vl(n), n.blockedOn === null && On.shift();
  }
  var wt = ht.ReactCurrentBatchConfig, Nr = !0;
  function ca(e, t, n, i) {
    var l = Se, s = wt.transition;
    wt.transition = null;
    try {
      Se = 1, wl(e, t, n, i);
    } finally {
      Se = l, wt.transition = s;
    }
  }
  function fa(e, t, n, i) {
    var l = Se, s = wt.transition;
    wt.transition = null;
    try {
      Se = 4, wl(e, t, n, i);
    } finally {
      Se = l, wt.transition = s;
    }
  }
  function wl(e, t, n, i) {
    if (Nr) {
      var l = Si(e, t, n, i);
      if (l === null) zi(e, t, i, xi, n), Ru(e, i);
      else if (vt(l, e, t, n, i)) i.stopPropagation();
      else if (Ru(e, i), t & 4 && -1 < Fu.indexOf(e)) {
        for (; l !== null; ) {
          var s = Ln(l);
          if (s !== null && Du(s), s = Si(e, t, n, i), s === null && zi(e, t, i, xi, n), s === l) break;
          l = s;
        }
        l !== null && i.stopPropagation();
      } else zi(e, t, i, null, n);
    }
  }
  var xi = null;
  function Si(e, t, n, i) {
    if (xi = null, e = ul(i), e = wn(e), e !== null) if (t = Vn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Au(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return xi = e, null;
  }
  function kl(e) {
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
        switch (Nu()) {
          case dl:
            return 1;
          case hl:
            return 4;
          case yi:
          case ua:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var qn = null, xl = null, ar = null;
  function Wu() {
    if (ar) return ar;
    var e, t = xl, n = t.length, i, l = "value" in qn ? qn.value : qn.textContent, s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === l[s - i]; i++) ;
    return ar = l.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Or(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dr() {
    return !0;
  }
  function Yu() {
    return !1;
  }
  function Wt(e) {
    function t(n, i, l, s, f) {
      this._reactName = n, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Dr : Yu, this.isPropagationStopped = Yu, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dr);
    }, persist: function() {
    }, isPersistent: Dr }), t;
  }
  var Lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ci = Wt(Lr), Mi = _({}, Lr, { view: 0, detail: 0 }), da = Wt(Mi), Sl, yo, gn, jr = _({}, Mi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fr, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Sl = e.screenX - gn.screenX, yo = e.screenY - gn.screenY) : yo = Sl = 0, gn = e), Sl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : yo;
  } }), Hu = Wt(jr), ha = _({}, jr, { dataTransfer: 0 }), pa = Wt(ha), Iu = _({}, Mi, { relatedTarget: 0 }), Cl = Wt(Iu), Bu = _({}, Lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vo = Wt(Bu), bu = _({}, Lr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Vu = Wt(bu), ga = _({}, Lr, { data: 0 }), Ai = Wt(ga), zr = {
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
  }, ma = {
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
  }, ya = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function va(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ya[e]) ? !!t[e] : !1;
  }
  function Fr() {
    return va;
  }
  var Ml = _({}, Mi, { key: function(e) {
    if (e.key) {
      var t = zr[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ma[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fr, charCode: function(e) {
    return e.type === "keypress" ? Or(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), wa = Wt(Ml), Xu = _({}, jr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zu = Wt(Xu), qu = _({}, Mi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fr }), Gu = Wt(qu), Qu = _({}, Lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ku = Wt(Qu), Ju = _({}, jr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ka = Wt(Ju), xa = [9, 13, 27, 32], Al = le && "CompositionEvent" in window, Ei = null;
  le && "documentMode" in document && (Ei = document.documentMode);
  var Sa = le && "TextEvent" in window && !Ei, wo = le && (!Al || Ei && 8 < Ei && 11 >= Ei), _u = " ", ko = !1;
  function xo(e, t) {
    switch (e) {
      case "keyup":
        return xa.indexOf(t.keyCode) !== -1;
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
  function So(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var mn = !1;
  function $u(e, t) {
    switch (e) {
      case "compositionend":
        return So(t);
      case "keypress":
        return t.which !== 32 ? null : (ko = !0, _u);
      case "textInput":
        return e = t.data, e === _u && ko ? null : e;
      default:
        return null;
    }
  }
  function Ca(e, t) {
    if (mn) return e === "compositionend" || !Al && xo(e, t) ? (e = Wu(), ar = xl = qn = null, mn = !1, e) : null;
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
        return wo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ma = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ma[e.type] : t === "textarea";
  }
  function ts(e, t, n, i) {
    ku(i), t = Ao(t, "onChange"), 0 < t.length && (n = new Ci("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Ti = null, Rr = null;
  function Aa(e) {
    as(e, 0);
  }
  function Co(e) {
    var t = hr(e);
    if ($o(t)) return e;
  }
  function vc(e, t) {
    if (e === "change") return t;
  }
  var Ea = !1;
  if (le) {
    var yn;
    if (le) {
      var ns = "oninput" in document;
      if (!ns) {
        var Ta = document.createElement("div");
        Ta.setAttribute("oninput", "return;"), ns = typeof Ta.oninput == "function";
      }
      yn = ns;
    } else yn = !1;
    Ea = yn && (!document.documentMode || 9 < document.documentMode);
  }
  function Pa() {
    Ti && (Ti.detachEvent("onpropertychange", kt), Rr = Ti = null);
  }
  function kt(e) {
    if (e.propertyName === "value" && Co(Rr)) {
      var t = [];
      ts(t, Rr, e, ul(e)), Mu(Aa, t);
    }
  }
  function he(e, t, n) {
    e === "focusin" ? (Pa(), Ti = t, Rr = n, Ti.attachEvent("onpropertychange", kt)) : e === "focusout" && Pa();
  }
  function Ur(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Co(Rr);
  }
  function Wr(e, t) {
    if (e === "click") return Co(t);
  }
  function Yr(e, t) {
    if (e === "input" || e === "change") return Co(t);
  }
  function Hr(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Je = typeof Object.is == "function" ? Object.is : Hr;
  function Pi(e, t) {
    if (Je(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!oe.call(t, l) || !Je(e[l], t[l])) return !1;
    }
    return !0;
  }
  function El(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rs(e, t) {
    var n = El(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t) return { node: n, offset: t - e };
        e = i;
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
      n = El(n);
    }
  }
  function is(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? is(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ir() {
    for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ro(e.document);
    }
    return t;
  }
  function Yt(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Na(e) {
    var t = Ir(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && is(n.ownerDocument.documentElement, n)) {
      if (i !== null && Yt(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, s = Math.min(i.start, l);
          i = i.end === void 0 ? s : Math.min(i.end, l), !e.extend && s > i && (l = i, i = s, s = l), l = rs(n, s);
          var f = rs(
            n,
            i
          );
          l && f && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), s > i ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var os = le && "documentMode" in document && 11 >= document.documentMode, Br = null, Tl = null, Xe = null, Pl = !1;
  function ls(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pl || Br == null || Br !== ro(i) || (i = Br, "selectionStart" in i && Yt(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Xe && Pi(Xe, i) || (Xe = i, i = Ao(Tl, "onSelect"), 0 < i.length && (t = new Ci("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = Br)));
  }
  function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var _e = { animationend: Ni("Animation", "AnimationEnd"), animationiteration: Ni("Animation", "AnimationIteration"), animationstart: Ni("Animation", "AnimationStart"), transitionend: Ni("Transition", "TransitionEnd") }, Dn = {}, us = {};
  le && (us = document.createElement("div").style, "AnimationEvent" in window || (delete _e.animationend.animation, delete _e.animationiteration.animation, delete _e.animationstart.animation), "TransitionEvent" in window || delete _e.transitionend.transition);
  function br(e) {
    if (Dn[e]) return Dn[e];
    if (!_e[e]) return e;
    var t = _e[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in us) return Dn[e] = t[n];
    return e;
  }
  var rn = br("animationend"), cr = br("animationiteration"), xt = br("animationstart"), Vr = br("transitionend"), Oi = /* @__PURE__ */ new Map(), Di = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gn(e, t) {
    Oi.set(e, t), Oe(t, [e]);
  }
  for (var Mo = 0; Mo < Di.length; Mo++) {
    var Nl = Di[Mo], Oa = Nl.toLowerCase(), Da = Nl[0].toUpperCase() + Nl.slice(1);
    Gn(Oa, "on" + Da);
  }
  Gn(rn, "onAnimationEnd"), Gn(cr, "onAnimationIteration"), Gn(xt, "onAnimationStart"), Gn("dblclick", "onDoubleClick"), Gn("focusin", "onFocus"), Gn("focusout", "onBlur"), Gn(Vr, "onTransitionEnd"), de("onMouseEnter", ["mouseout", "mouseover"]), de("onMouseLeave", ["mouseout", "mouseover"]), de("onPointerEnter", ["pointerout", "pointerover"]), de("onPointerLeave", ["pointerout", "pointerover"]), Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), La = new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));
  function ss(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, ia(i, t, void 0, e), e.currentTarget = null;
  }
  function as(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], l = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (t) for (var f = i.length - 1; 0 <= f; f--) {
          var g = i[f], v = g.instance, T = g.currentTarget;
          if (g = g.listener, v !== s && l.isPropagationStopped()) break e;
          ss(l, g, T), s = v;
        }
        else for (f = 0; f < i.length; f++) {
          if (g = i[f], v = g.instance, T = g.currentTarget, g = g.listener, v !== s && l.isPropagationStopped()) break e;
          ss(l, g, T), s = v;
        }
      }
    }
    if (mi) throw e = fl, mi = !1, fl = null, e;
  }
  function De(e, t) {
    var n = t[Wi];
    n === void 0 && (n = t[Wi] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (cs(t, e, 2, !1), n.add(i));
  }
  function ji(e, t, n) {
    var i = 0;
    t && (i |= 4), cs(n, e, i, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function on(e) {
    if (!e[Xr]) {
      e[Xr] = !0, ut.forEach(function(n) {
        n !== "selectionchange" && (La.has(n) || ji(n, !1, e), ji(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, ji("selectionchange", !1, t));
    }
  }
  function cs(e, t, n, i) {
    switch (kl(t)) {
      case 1:
        var l = ca;
        break;
      case 4:
        l = fa;
        break;
      default:
        l = wl;
    }
    n = l.bind(null, t, n, e), l = void 0, !cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), i ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function zi(e, t, n, i, l) {
    var s = i;
    if (!(t & 1) && !(t & 2) && i !== null) e: for (; ; ) {
      if (i === null) return;
      var f = i.tag;
      if (f === 3 || f === 4) {
        var g = i.stateNode.containerInfo;
        if (g === l || g.nodeType === 8 && g.parentNode === l) break;
        if (f === 4) for (f = i.return; f !== null; ) {
          var v = f.tag;
          if ((v === 3 || v === 4) && (v = f.stateNode.containerInfo, v === l || v.nodeType === 8 && v.parentNode === l)) return;
          f = f.return;
        }
        for (; g !== null; ) {
          if (f = wn(g), f === null) return;
          if (v = f.tag, v === 5 || v === 6) {
            i = s = f;
            continue e;
          }
          g = g.parentNode;
        }
      }
      i = i.return;
    }
    Mu(function() {
      var T = s, Y = ul(n), I = [];
      e: {
        var W = Oi.get(e);
        if (W !== void 0) {
          var K = Ci, ee = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              K = wa;
              break;
            case "focusin":
              ee = "focus", K = Cl;
              break;
            case "focusout":
              ee = "blur", K = Cl;
              break;
            case "beforeblur":
            case "afterblur":
              K = Cl;
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
              K = Hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = pa;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = Gu;
              break;
            case rn:
            case cr:
            case xt:
              K = vo;
              break;
            case Vr:
              K = Ku;
              break;
            case "scroll":
              K = da;
              break;
            case "wheel":
              K = ka;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = Vu;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = Zu;
          }
          var te = (t & 4) !== 0, lt = !te && e === "scroll", M = te ? W !== null ? W + "Capture" : null : W;
          te = [];
          for (var w = T, A; w !== null; ) {
            A = w;
            var X = A.stateNode;
            if (A.tag === 5 && X !== null && (A = X, M !== null && (X = pi(w, M), X != null && te.push(fr(w, X, A)))), lt) break;
            w = w.return;
          }
          0 < te.length && (W = new K(W, ee, null, n, Y), I.push({ event: W, listeners: te }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", K = e === "mouseout" || e === "pointerout", W && n !== ll && (ee = n.relatedTarget || n.fromElement) && (wn(ee) || ee[ln])) break e;
          if ((K || W) && (W = Y.window === Y ? Y : (W = Y.ownerDocument) ? W.defaultView || W.parentWindow : window, K ? (ee = n.relatedTarget || n.toElement, K = T, ee = ee ? wn(ee) : null, ee !== null && (lt = Vn(ee), ee !== lt || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (K = null, ee = T), K !== ee)) {
            if (te = Hu, X = "onMouseLeave", M = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (te = Zu, X = "onPointerLeave", M = "onPointerEnter", w = "pointer"), lt = K == null ? W : hr(K), A = ee == null ? W : hr(ee), W = new te(X, w + "leave", K, n, Y), W.target = lt, W.relatedTarget = A, X = null, wn(Y) === T && (te = new te(M, w + "enter", ee, n, Y), te.target = A, te.relatedTarget = lt, X = te), lt = X, K && ee) t: {
              for (te = K, M = ee, w = 0, A = te; A; A = Zr(A)) w++;
              for (A = 0, X = M; X; X = Zr(X)) A++;
              for (; 0 < w - A; ) te = Zr(te), w--;
              for (; 0 < A - w; ) M = Zr(M), A--;
              for (; w--; ) {
                if (te === M || M !== null && te === M.alternate) break t;
                te = Zr(te), M = Zr(M);
              }
              te = null;
            }
            else te = null;
            K !== null && fs(I, W, K, te, !1), ee !== null && lt !== null && fs(I, lt, ee, te, !0);
          }
        }
        e: {
          if (W = T ? hr(T) : window, K = W.nodeName && W.nodeName.toLowerCase(), K === "select" || K === "input" && W.type === "file") var re = vc;
          else if (es(W)) if (Ea) re = Yr;
          else {
            re = Ur;
            var ue = he;
          }
          else (K = W.nodeName) && K.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (re = Wr);
          if (re && (re = re(e, T))) {
            ts(I, re, n, Y);
            break e;
          }
          ue && ue(e, W, T), e === "focusout" && (ue = W._wrapperState) && ue.controlled && W.type === "number" && io(W, "number", W.value);
        }
        switch (ue = T ? hr(T) : window, e) {
          case "focusin":
            (es(ue) || ue.contentEditable === "true") && (Br = ue, Tl = T, Xe = null);
            break;
          case "focusout":
            Xe = Tl = Br = null;
            break;
          case "mousedown":
            Pl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pl = !1, ls(I, n, Y);
            break;
          case "selectionchange":
            if (os) break;
          case "keydown":
          case "keyup":
            ls(I, n, Y);
        }
        var se;
        if (Al) e: {
          switch (e) {
            case "compositionstart":
              var fe = "onCompositionStart";
              break e;
            case "compositionend":
              fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              fe = "onCompositionUpdate";
              break e;
          }
          fe = void 0;
        }
        else mn ? xo(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (wo && n.locale !== "ko" && (mn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && mn && (se = Wu()) : (qn = Y, xl = "value" in qn ? qn.value : qn.textContent, mn = !0)), ue = Ao(T, fe), 0 < ue.length && (fe = new Ai(fe, e, null, n, Y), I.push({ event: fe, listeners: ue }), se ? fe.data = se : (se = So(n), se !== null && (fe.data = se)))), (se = Sa ? $u(e, n) : Ca(e, n)) && (T = Ao(T, "onBeforeInput"), 0 < T.length && (Y = new Ai("onBeforeInput", "beforeinput", null, n, Y), I.push({ event: Y, listeners: T }), Y.data = se));
      }
      as(I, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ao(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e, s = l.stateNode;
      l.tag === 5 && s !== null && (l = s, s = pi(e, n), s != null && i.unshift(fr(e, s, l)), s = pi(e, t), s != null && i.push(fr(e, s, l))), e = e.return;
    }
    return i;
  }
  function Zr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fs(e, t, n, i, l) {
    for (var s = t._reactName, f = []; n !== null && n !== i; ) {
      var g = n, v = g.alternate, T = g.stateNode;
      if (v !== null && v === i) break;
      g.tag === 5 && T !== null && (g = T, l ? (v = pi(n, s), v != null && f.unshift(fr(n, v, g))) : l || (v = pi(n, s), v != null && f.push(fr(n, v, g)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ds = /\r\n?/g, ja = /\u0000|\uFFFD/g;
  function hs(e) {
    return (typeof e == "string" ? e : "" + e).replace(ds, `
`).replace(ja, "");
  }
  function Fi(e, t, n) {
    if (t = hs(t), hs(e) !== t && n) throw Error(O(425));
  }
  function Eo() {
  }
  var Ol = null, Dl = null;
  function Ri(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var To = typeof setTimeout == "function" ? setTimeout : void 0, ps = typeof clearTimeout == "function" ? clearTimeout : void 0, Ll = typeof Promise == "function" ? Promise : void 0, jl = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ll < "u" ? function(e) {
    return Ll.resolve(null).then(e).catch(Po);
  } : To;
  function Po(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function No(e, t) {
    var n = t, i = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (i === 0) {
          e.removeChild(l), ki(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = l;
    } while (n);
    ki(t);
  }
  function $e(e) {
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
  function gs(e) {
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
  var dr = Math.random().toString(36).slice(2), vn = "__reactFiber$" + dr, Ui = "__reactProps$" + dr, ln = "__reactContainer$" + dr, Wi = "__reactEvents$" + dr, St = "__reactListeners$" + dr, Oo = "__reactHandles$" + dr;
  function wn(e) {
    var t = e[vn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ln] || n[vn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gs(e); e !== null; ) {
          if (n = e[vn]) return n;
          e = gs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ln(e) {
    return e = e[vn] || e[ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function hr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(O(33));
  }
  function Yi(e) {
    return e[Ui] || null;
  }
  var Do = [], pr = -1;
  function jn(e) {
    return { current: e };
  }
  function We(e) {
    0 > pr || (e.current = Do[pr], Do[pr] = null, pr--);
  }
  function Ne(e, t) {
    pr++, Do[pr] = e.current, e.current = t;
  }
  var Dt = {}, st = jn(Dt), ct = jn(!1), gr = Dt;
  function qr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var l = {}, s;
    for (s in n) l[s] = t[s];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ft(e) {
    return e = e.childContextTypes, e != null;
  }
  function Lo() {
    We(ct), We(st);
  }
  function ms(e, t, n) {
    if (st.current !== Dt) throw Error(O(168));
    Ne(st, t), Ne(ct, n);
  }
  function zl(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(O(108, ze(e) || "Unknown", l));
    return _({}, n, i);
  }
  function un(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt, gr = st.current, Ne(st, e), Ne(ct, ct.current), !0;
  }
  function jo(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(O(169));
    n ? (e = zl(e, t, gr), i.__reactInternalMemoizedMergedChildContext = e, We(ct), We(st), Ne(st, e)) : We(ct), Ne(ct, n);
  }
  var Ct = null, Hi = !1, Gr = !1;
  function ys(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  function za(e) {
    Hi = !0, ys(e);
  }
  function sn() {
    if (!Gr && Ct !== null) {
      Gr = !0;
      var e = 0, t = Se;
      try {
        var n = Ct;
        for (Se = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        Ct = null, Hi = !1;
      } catch (l) {
        throw Ct !== null && (Ct = Ct.slice(e + 1)), it(dl, sn), l;
      } finally {
        Se = t, Gr = !1;
      }
    }
    return null;
  }
  var Qr = [], Kr = 0, kn = null, zn = 0, Ht = [], Zt = 0, Fn = null, an = 1, It = "";
  function mr(e, t) {
    Qr[Kr++] = zn, Qr[Kr++] = kn, kn = e, zn = t;
  }
  function Fl(e, t, n) {
    Ht[Zt++] = an, Ht[Zt++] = It, Ht[Zt++] = Fn, Fn = e;
    var i = an;
    e = It;
    var l = 32 - Ut(i) - 1;
    i &= ~(1 << l), n += 1;
    var s = 32 - Ut(t) + l;
    if (30 < s) {
      var f = l - l % 5;
      s = (i & (1 << f) - 1).toString(32), i >>= f, l -= f, an = 1 << 32 - Ut(t) + l | n << l | i, It = s + e;
    } else an = 1 << s | n << l | i, It = e;
  }
  function et(e) {
    e.return !== null && (mr(e, 1), Fl(e, 1, 0));
  }
  function Rl(e) {
    for (; e === kn; ) kn = Qr[--Kr], Qr[Kr] = null, zn = Qr[--Kr], Qr[Kr] = null;
    for (; e === Fn; ) Fn = Ht[--Zt], Ht[Zt] = null, It = Ht[--Zt], Ht[Zt] = null, an = Ht[--Zt], Ht[Zt] = null;
  }
  var Bt = null, pe = null, Ve = !1, Mt = null;
  function Jr(e, t) {
    var n = Cn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function vs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Bt = e, pe = $e(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Bt = e, pe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fn !== null ? { id: an, overflow: It } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Cn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Bt = e, pe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ul(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wl(e) {
    if (Ve) {
      var t = pe;
      if (t) {
        var n = t;
        if (!vs(e, t)) {
          if (Ul(e)) throw Error(O(418));
          t = $e(n.nextSibling);
          var i = Bt;
          t && vs(e, t) ? Jr(i, n) : (e.flags = e.flags & -4097 | 2, Ve = !1, Bt = e);
        }
      } else {
        if (Ul(e)) throw Error(O(418));
        e.flags = e.flags & -4097 | 2, Ve = !1, Bt = e;
      }
    }
  }
  function ws(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Bt = e;
  }
  function zo(e) {
    if (e !== Bt) return !1;
    if (!Ve) return ws(e), Ve = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ri(e.type, e.memoizedProps)), t && (t = pe)) {
      if (Ul(e)) throw ks(), Error(O(418));
      for (; t; ) Jr(e, t), t = $e(t.nextSibling);
    }
    if (ws(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                pe = $e(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        pe = null;
      }
    } else pe = Bt ? $e(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ks() {
    for (var e = pe; e; ) e = $e(e.nextSibling);
  }
  function _r() {
    pe = Bt = null, Ve = !1;
  }
  function Yl(e) {
    Mt === null ? Mt = [e] : Mt.push(e);
  }
  var Fa = ht.ReactCurrentBatchConfig;
  function Ii(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(O(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(O(147, e));
        var l = i, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(f) {
          var g = l.refs;
          f === null ? delete g[s] : g[s] = f;
        }, t._stringRef = s, t);
      }
      if (typeof e != "string") throw Error(O(284));
      if (!n._owner) throw Error(O(290, e));
    }
    return e;
  }
  function Bi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function xs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Hl(e) {
    function t(M, w) {
      if (e) {
        var A = M.deletions;
        A === null ? (M.deletions = [w], M.flags |= 16) : A.push(w);
      }
    }
    function n(M, w) {
      if (!e) return null;
      for (; w !== null; ) t(M, w), w = w.sibling;
      return null;
    }
    function i(M, w) {
      for (M = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? M.set(w.key, w) : M.set(w.index, w), w = w.sibling;
      return M;
    }
    function l(M, w) {
      return M = ci(M, w), M.index = 0, M.sibling = null, M;
    }
    function s(M, w, A) {
      return M.index = A, e ? (A = M.alternate, A !== null ? (A = A.index, A < w ? (M.flags |= 2, w) : A) : (M.flags |= 2, w)) : (M.flags |= 1048576, w);
    }
    function f(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function g(M, w, A, X) {
      return w === null || w.tag !== 6 ? (w = nc(A, M.mode, X), w.return = M, w) : (w = l(w, A), w.return = M, w);
    }
    function v(M, w, A, X) {
      var re = A.type;
      return re === Nt ? Y(M, w, A.props.children, X, A.key) : w !== null && (w.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ot && xs(re) === w.type) ? (X = l(w, A.props), X.ref = Ii(M, w, A), X.return = M, X) : (X = Xs(A.type, A.key, A.props, null, M.mode, X), X.ref = Ii(M, w, A), X.return = M, X);
    }
    function T(M, w, A, X) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== A.containerInfo || w.stateNode.implementation !== A.implementation ? (w = rc(A, M.mode, X), w.return = M, w) : (w = l(w, A.children || []), w.return = M, w);
    }
    function Y(M, w, A, X, re) {
      return w === null || w.tag !== 7 ? (w = to(A, M.mode, X, re), w.return = M, w) : (w = l(w, A), w.return = M, w);
    }
    function I(M, w, A) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = nc("" + w, M.mode, A), w.return = M, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case en:
            return A = Xs(w.type, w.key, w.props, null, M.mode, A), A.ref = Ii(M, null, w), A.return = M, A;
          case yt:
            return w = rc(w, M.mode, A), w.return = M, w;
          case Ot:
            var X = w._init;
            return I(M, X(w._payload), A);
        }
        if (nr(w) || ae(w)) return w = to(w, M.mode, A, null), w.return = M, w;
        Bi(M, w);
      }
      return null;
    }
    function W(M, w, A, X) {
      var re = w !== null ? w.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number") return re !== null ? null : g(M, w, "" + A, X);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case en:
            return A.key === re ? v(M, w, A, X) : null;
          case yt:
            return A.key === re ? T(M, w, A, X) : null;
          case Ot:
            return re = A._init, W(
              M,
              w,
              re(A._payload),
              X
            );
        }
        if (nr(A) || ae(A)) return re !== null ? null : Y(M, w, A, X, null);
        Bi(M, A);
      }
      return null;
    }
    function K(M, w, A, X, re) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return M = M.get(A) || null, g(w, M, "" + X, re);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case en:
            return M = M.get(X.key === null ? A : X.key) || null, v(w, M, X, re);
          case yt:
            return M = M.get(X.key === null ? A : X.key) || null, T(w, M, X, re);
          case Ot:
            var ue = X._init;
            return K(M, w, A, ue(X._payload), re);
        }
        if (nr(X) || ae(X)) return M = M.get(A) || null, Y(w, M, X, re, null);
        Bi(w, X);
      }
      return null;
    }
    function ee(M, w, A, X) {
      for (var re = null, ue = null, se = w, fe = w = 0, mt = null; se !== null && fe < A.length; fe++) {
        se.index > fe ? (mt = se, se = null) : mt = se.sibling;
        var Te = W(M, se, A[fe], X);
        if (Te === null) {
          se === null && (se = mt);
          break;
        }
        e && se && Te.alternate === null && t(M, se), w = s(Te, w, fe), ue === null ? re = Te : ue.sibling = Te, ue = Te, se = mt;
      }
      if (fe === A.length) return n(M, se), Ve && mr(M, fe), re;
      if (se === null) {
        for (; fe < A.length; fe++) se = I(M, A[fe], X), se !== null && (w = s(se, w, fe), ue === null ? re = se : ue.sibling = se, ue = se);
        return Ve && mr(M, fe), re;
      }
      for (se = i(M, se); fe < A.length; fe++) mt = K(se, M, fe, A[fe], X), mt !== null && (e && mt.alternate !== null && se.delete(mt.key === null ? fe : mt.key), w = s(mt, w, fe), ue === null ? re = mt : ue.sibling = mt, ue = mt);
      return e && se.forEach(function(fi) {
        return t(M, fi);
      }), Ve && mr(M, fe), re;
    }
    function te(M, w, A, X) {
      var re = ae(A);
      if (typeof re != "function") throw Error(O(150));
      if (A = re.call(A), A == null) throw Error(O(151));
      for (var ue = re = null, se = w, fe = w = 0, mt = null, Te = A.next(); se !== null && !Te.done; fe++, Te = A.next()) {
        se.index > fe ? (mt = se, se = null) : mt = se.sibling;
        var fi = W(M, se, Te.value, X);
        if (fi === null) {
          se === null && (se = mt);
          break;
        }
        e && se && fi.alternate === null && t(M, se), w = s(fi, w, fe), ue === null ? re = fi : ue.sibling = fi, ue = fi, se = mt;
      }
      if (Te.done) return n(
        M,
        se
      ), Ve && mr(M, fe), re;
      if (se === null) {
        for (; !Te.done; fe++, Te = A.next()) Te = I(M, Te.value, X), Te !== null && (w = s(Te, w, fe), ue === null ? re = Te : ue.sibling = Te, ue = Te);
        return Ve && mr(M, fe), re;
      }
      for (se = i(M, se); !Te.done; fe++, Te = A.next()) Te = K(se, M, fe, Te.value, X), Te !== null && (e && Te.alternate !== null && se.delete(Te.key === null ? fe : Te.key), w = s(Te, w, fe), ue === null ? re = Te : ue.sibling = Te, ue = Te);
      return e && se.forEach(function(Rf) {
        return t(M, Rf);
      }), Ve && mr(M, fe), re;
    }
    function lt(M, w, A, X) {
      if (typeof A == "object" && A !== null && A.type === Nt && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case en:
            e: {
              for (var re = A.key, ue = w; ue !== null; ) {
                if (ue.key === re) {
                  if (re = A.type, re === Nt) {
                    if (ue.tag === 7) {
                      n(M, ue.sibling), w = l(ue, A.props.children), w.return = M, M = w;
                      break e;
                    }
                  } else if (ue.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Ot && xs(re) === ue.type) {
                    n(M, ue.sibling), w = l(ue, A.props), w.ref = Ii(M, ue, A), w.return = M, M = w;
                    break e;
                  }
                  n(M, ue);
                  break;
                } else t(M, ue);
                ue = ue.sibling;
              }
              A.type === Nt ? (w = to(A.props.children, M.mode, X, A.key), w.return = M, M = w) : (X = Xs(A.type, A.key, A.props, null, M.mode, X), X.ref = Ii(M, w, A), X.return = M, M = X);
            }
            return f(M);
          case yt:
            e: {
              for (ue = A.key; w !== null; ) {
                if (w.key === ue) if (w.tag === 4 && w.stateNode.containerInfo === A.containerInfo && w.stateNode.implementation === A.implementation) {
                  n(M, w.sibling), w = l(w, A.children || []), w.return = M, M = w;
                  break e;
                } else {
                  n(M, w);
                  break;
                }
                else t(M, w);
                w = w.sibling;
              }
              w = rc(A, M.mode, X), w.return = M, M = w;
            }
            return f(M);
          case Ot:
            return ue = A._init, lt(M, w, ue(A._payload), X);
        }
        if (nr(A)) return ee(M, w, A, X);
        if (ae(A)) return te(M, w, A, X);
        Bi(M, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, w !== null && w.tag === 6 ? (n(M, w.sibling), w = l(w, A), w.return = M, M = w) : (n(M, w), w = nc(A, M.mode, X), w.return = M, M = w), f(M)) : n(M, w);
    }
    return lt;
  }
  var $r = Hl(!0), Ss = Hl(!1), Fo = jn(null), Ro = null, ei = null, Il = null;
  function Bl() {
    Il = ei = Ro = null;
  }
  function Uo(e) {
    var t = Fo.current;
    We(Fo), e._currentValue = t;
  }
  function bl(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ti(e, t) {
    Ro = e, Il = ei = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (Il !== e) if (e = { context: e, memoizedValue: t, next: null }, ei === null) {
      if (Ro === null) throw Error(O(308));
      ei = e, Ro.dependencies = { lanes: 0, firstContext: e };
    } else ei = ei.next = e;
    return t;
  }
  var Qn = null;
  function Vl(e) {
    Qn === null ? Qn = [e] : Qn.push(e);
  }
  function Cs(e, t, n, i) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Vl(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Rn(e, i);
  }
  function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Kn = !1;
  function Xl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ms(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Un(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Jn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, Ae & 2) {
      var l = i.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), i.pending = t, Rn(e, n);
    }
    return l = i.interleaved, l === null ? (t.next = t, Vl(i)) : (t.next = l.next, l.next = t), i.interleaved = t, Rn(e, n);
  }
  function Wo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Xn(e, n);
    }
  }
  function As(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var l = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          s === null ? l = s = f : s = s.next = f, n = n.next;
        } while (n !== null);
        s === null ? l = s = t : s = s.next = t;
      } else l = s = t;
      n = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: s, shared: i.shared, effects: i.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Yo(e, t, n, i) {
    var l = e.updateQueue;
    Kn = !1;
    var s = l.firstBaseUpdate, f = l.lastBaseUpdate, g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var v = g, T = v.next;
      v.next = null, f === null ? s = T : f.next = T, f = v;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, g = Y.lastBaseUpdate, g !== f && (g === null ? Y.firstBaseUpdate = T : g.next = T, Y.lastBaseUpdate = v));
    }
    if (s !== null) {
      var I = l.baseState;
      f = 0, Y = T = v = null, g = s;
      do {
        var W = g.lane, K = g.eventTime;
        if ((i & W) === W) {
          Y !== null && (Y = Y.next = {
            eventTime: K,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var ee = e, te = g;
            switch (W = t, K = n, te.tag) {
              case 1:
                if (ee = te.payload, typeof ee == "function") {
                  I = ee.call(K, I, W);
                  break e;
                }
                I = ee;
                break e;
              case 3:
                ee.flags = ee.flags & -65537 | 128;
              case 0:
                if (ee = te.payload, W = typeof ee == "function" ? ee.call(K, I, W) : ee, W == null) break e;
                I = _({}, I, W);
                break e;
              case 2:
                Kn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, W = l.effects, W === null ? l.effects = [g] : W.push(g));
        } else K = { eventTime: K, lane: W, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, Y === null ? (T = Y = K, v = I) : Y = Y.next = K, f |= W;
        if (g = g.next, g === null) {
          if (g = l.shared.pending, g === null) break;
          W = g, g = W.next, W.next = null, l.lastBaseUpdate = W, l.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (v = I), l.baseState = v, l.firstBaseUpdate = T, l.lastBaseUpdate = Y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          f |= l.lane, l = l.next;
        while (l !== t);
      } else s === null && (l.shared.lanes = 0);
      Ji |= f, e.lanes = f, e.memoizedState = I;
    }
  }
  function Es(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], l = i.callback;
      if (l !== null) {
        if (i.callback = null, i = n, typeof l != "function") throw Error(O(191, l));
        l.call(i);
      }
    }
  }
  var ni = {}, xn = jn(ni), bi = jn(ni), Vi = jn(ni);
  function _n(e) {
    if (e === ni) throw Error(O(174));
    return e;
  }
  function Zl(e, t) {
    switch (Ne(Vi, t), Ne(bi, e), Ne(xn, ni), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : rl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = rl(t, e);
    }
    We(xn), Ne(xn, t);
  }
  function ri() {
    We(xn), We(bi), We(Vi);
  }
  function Ts(e) {
    _n(Vi.current);
    var t = _n(xn.current), n = rl(t, e.type);
    t !== n && (Ne(bi, e), Ne(xn, n));
  }
  function ql(e) {
    bi.current === e && (We(xn), We(bi));
  }
  var Ze = jn(0);
  function Ho(e) {
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
  var Gl = [];
  function Ql() {
    for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
    Gl.length = 0;
  }
  var Io = ht.ReactCurrentDispatcher, Kl = ht.ReactCurrentBatchConfig, yr = 0, qe = null, tt = null, ot = null, Xi = !1, Zi = !1, Wn = 0, qi = 0;
  function nt() {
    throw Error(O(321));
  }
  function vr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
    return !0;
  }
  function Jl(e, t, n, i, l, s) {
    if (yr = s, qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Io.current = e === null || e.memoizedState === null ? D : H, e = n(i, l), Zi) {
      s = 0;
      do {
        if (Zi = !1, Wn = 0, 25 <= s) throw Error(O(301));
        s += 1, ot = tt = null, t.updateQueue = null, Io.current = V, e = n(i, l);
      } while (Zi);
    }
    if (Io.current = U, t = tt !== null && tt.next !== null, yr = 0, ot = tt = qe = null, Xi = !1, t) throw Error(O(300));
    return e;
  }
  function Bo() {
    var e = Wn !== 0;
    return Wn = 0, e;
  }
  function Gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ot === null ? qe.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function Qt() {
    if (tt === null) {
      var e = qe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = ot === null ? qe.memoizedState : ot.next;
    if (t !== null) ot = t, tt = e;
    else {
      if (e === null) throw Error(O(310));
      tt = e, e = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, ot === null ? qe.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bo(e) {
    var t = Qt(), n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var i = tt, l = i.baseQueue, s = n.pending;
    if (s !== null) {
      if (l !== null) {
        var f = l.next;
        l.next = s.next, s.next = f;
      }
      i.baseQueue = l = s, n.pending = null;
    }
    if (l !== null) {
      s = l.next, i = i.baseState;
      var g = f = null, v = null, T = s;
      do {
        var Y = T.lane;
        if ((yr & Y) === Y) v !== null && (v = v.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), i = T.hasEagerState ? T.eagerState : e(i, T.action);
        else {
          var I = {
            lane: Y,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          v === null ? (g = v = I, f = i) : v = v.next = I, qe.lanes |= Y, Ji |= Y;
        }
        T = T.next;
      } while (T !== null && T !== s);
      v === null ? f = i : v.next = g, Je(i, t.memoizedState) || (Me = !0), t.memoizedState = i, t.baseState = f, t.baseQueue = v, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        s = l.lane, qe.lanes |= s, Ji |= s, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function _l(e) {
    var t = Qt(), n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, l = n.pending, s = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = l = l.next;
      do
        s = e(s, f.action), f = f.next;
      while (f !== l);
      Je(s, t.memoizedState) || (Me = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, i];
  }
  function ii() {
  }
  function Kt(e, t) {
    var n = qe, i = Qt(), l = t(), s = !Je(i.memoizedState, l);
    if (s && (i.memoizedState = l, Me = !0), i = i.queue, r(Ns.bind(null, n, i, e), [e]), i.getSnapshot !== t || s || ot !== null && ot.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qi(9, $l.bind(null, n, i, l, t), void 0, null), gt === null) throw Error(O(349));
      yr & 30 || Ps(n, t, l);
    }
    return l;
  }
  function Ps(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = qe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, qe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function $l(e, t, n, i) {
    t.value = n, t.getSnapshot = i, Os(t) && eu(e);
  }
  function Ns(e, t, n) {
    return n(function() {
      Os(t) && eu(e);
    });
  }
  function Os(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Je(e, n);
    } catch {
      return !0;
    }
  }
  function eu(e) {
    var t = Rn(e, 1);
    t !== null && Bn(t, e, 1, -1);
  }
  function tu(e) {
    var t = Gt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gi, lastRenderedState: e }, t.queue = e, e = e.dispatch = S.bind(null, qe, e), [t.memoizedState, e];
  }
  function Qi(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = qe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, qe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function Ds() {
    return Qt().memoizedState;
  }
  function wr(e, t, n, i) {
    var l = Gt();
    qe.flags |= e, l.memoizedState = Qi(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function Vo(e, t, n, i) {
    var l = Qt();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (tt !== null) {
      var f = tt.memoizedState;
      if (s = f.destroy, i !== null && vr(i, f.deps)) {
        l.memoizedState = Qi(t, n, s, i);
        return;
      }
    }
    qe.flags |= e, l.memoizedState = Qi(1 | t, n, s, i);
  }
  function Ls(e, t) {
    return wr(8390656, 8, e, t);
  }
  function r(e, t) {
    return Vo(2048, 8, e, t);
  }
  function o(e, t) {
    return Vo(4, 2, e, t);
  }
  function u(e, t) {
    return Vo(4, 4, e, t);
  }
  function a(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function c(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vo(4, 4, a.bind(null, t, e), n);
  }
  function d() {
  }
  function p(e, t) {
    var n = Qt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && vr(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function h(e, t) {
    var n = Qt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && vr(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function m(e, t, n) {
    return yr & 21 ? (Je(n, t) || (n = fo(), qe.lanes |= n, Ji |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n);
  }
  function y(e, t) {
    var n = Se;
    Se = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = Kl.transition;
    Kl.transition = {};
    try {
      e(!1), t();
    } finally {
      Se = n, Kl.transition = i;
    }
  }
  function x() {
    return Qt().memoizedState;
  }
  function k(e, t, n) {
    var i = si(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, B(e)) Q(t, n);
    else if (n = Cs(e, t, n, i), n !== null) {
      var l = bt();
      Bn(n, e, i, l), J(n, t, i);
    }
  }
  function S(e, t, n) {
    var i = si(e), l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (B(e)) Q(t, l);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var f = t.lastRenderedState, g = s(f, n);
        if (l.hasEagerState = !0, l.eagerState = g, Je(g, f)) {
          var v = t.interleaved;
          v === null ? (l.next = l, Vl(t)) : (l.next = v.next, v.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Cs(e, t, l, i), n !== null && (l = bt(), Bn(n, e, i, l), J(n, t, i));
    }
  }
  function B(e) {
    var t = e.alternate;
    return e === qe || t !== null && t === qe;
  }
  function Q(e, t) {
    Zi = Xi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function J(e, t, n) {
    if (n & 4194240) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Xn(e, n);
    }
  }
  var U = { readContext: qt, useCallback: nt, useContext: nt, useEffect: nt, useImperativeHandle: nt, useInsertionEffect: nt, useLayoutEffect: nt, useMemo: nt, useReducer: nt, useRef: nt, useState: nt, useDebugValue: nt, useDeferredValue: nt, useTransition: nt, useMutableSource: nt, useSyncExternalStore: nt, useId: nt, unstable_isNewReconciler: !1 }, D = { readContext: qt, useCallback: function(e, t) {
    return Gt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: Ls, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, wr(
      4194308,
      4,
      a.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return wr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return wr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Gt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Gt();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = k.bind(null, qe, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Gt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: tu, useDebugValue: d, useDeferredValue: function(e) {
    return Gt().memoizedState = e;
  }, useTransition: function() {
    var e = tu(!1), t = e[0];
    return e = y.bind(null, e[1]), Gt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = qe, l = Gt();
    if (Ve) {
      if (n === void 0) throw Error(O(407));
      n = n();
    } else {
      if (n = t(), gt === null) throw Error(O(349));
      yr & 30 || Ps(i, t, n);
    }
    l.memoizedState = n;
    var s = { value: n, getSnapshot: t };
    return l.queue = s, Ls(Ns.bind(
      null,
      i,
      s,
      e
    ), [e]), i.flags |= 2048, Qi(9, $l.bind(null, i, s, n, t), void 0, null), n;
  }, useId: function() {
    var e = Gt(), t = gt.identifierPrefix;
    if (Ve) {
      var n = It, i = an;
      n = (i & ~(1 << 32 - Ut(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Wn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = qi++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, H = {
    readContext: qt,
    useCallback: p,
    useContext: qt,
    useEffect: r,
    useImperativeHandle: c,
    useInsertionEffect: o,
    useLayoutEffect: u,
    useMemo: h,
    useReducer: bo,
    useRef: Ds,
    useState: function() {
      return bo(Gi);
    },
    useDebugValue: d,
    useDeferredValue: function(e) {
      var t = Qt();
      return m(t, tt.memoizedState, e);
    },
    useTransition: function() {
      var e = bo(Gi)[0], t = Qt().memoizedState;
      return [e, t];
    },
    useMutableSource: ii,
    useSyncExternalStore: Kt,
    useId: x,
    unstable_isNewReconciler: !1
  }, V = { readContext: qt, useCallback: p, useContext: qt, useEffect: r, useImperativeHandle: c, useInsertionEffect: o, useLayoutEffect: u, useMemo: h, useReducer: _l, useRef: Ds, useState: function() {
    return _l(Gi);
  }, useDebugValue: d, useDeferredValue: function(e) {
    var t = Qt();
    return tt === null ? t.memoizedState = e : m(t, tt.memoizedState, e);
  }, useTransition: function() {
    var e = _l(Gi)[0], t = Qt().memoizedState;
    return [e, t];
  }, useMutableSource: ii, useSyncExternalStore: Kt, useId: x, unstable_isNewReconciler: !1 };
  function q(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Z(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var j = { isMounted: function(e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = bt(), l = si(e), s = Un(i, l);
    s.payload = t, n != null && (s.callback = n), t = Jn(e, s, l), t !== null && (Bn(t, e, l, i), Wo(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = bt(), l = si(e), s = Un(i, l);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Jn(e, s, l), t !== null && (Bn(t, e, l, i), Wo(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = bt(), i = si(e), l = Un(n, i);
    l.tag = 2, t != null && (l.callback = t), t = Jn(e, l, i), t !== null && (Bn(t, e, i, n), Wo(t, e, i));
  } };
  function P(e, t, n, i, l, s, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, f) : t.prototype && t.prototype.isPureReactComponent ? !Pi(n, i) || !Pi(l, s) : !0;
  }
  function b(e, t, n) {
    var i = !1, l = Dt, s = t.contextType;
    return typeof s == "object" && s !== null ? s = qt(s) : (l = ft(t) ? gr : st.current, i = t.contextTypes, s = (i = i != null) ? qr(e, l) : Dt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = j, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
  }
  function E(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && j.enqueueReplaceState(t, t.state, null);
  }
  function N(e, t, n, i) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Xl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? l.context = qt(s) : (s = ft(t) ? gr : st.current, l.context = qr(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Z(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && j.enqueueReplaceState(l, l.state, null), Yo(e, n, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function L(e, t) {
    try {
      var n = "", i = t;
      do
        n += ke(i), i = i.return;
      while (i);
      var l = n;
    } catch (s) {
      l = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function z(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ie(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var F = typeof WeakMap == "function" ? WeakMap : Map;
  function ce(e, t, n) {
    n = Un(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      Ys || (Ys = !0, Ga = i), ie(e, t);
    }, n;
  }
  function Ce(e, t, n) {
    n = Un(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      n.payload = function() {
        return i(l);
      }, n.callback = function() {
        ie(e, t);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      ie(e, t), typeof i != "function" && (li === null ? li = /* @__PURE__ */ new Set([this]) : li.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Fe(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new F();
      var l = /* @__PURE__ */ new Set();
      i.set(t, l);
    } else l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l));
    l.has(n) || (l.add(n), e = Ef.bind(null, e, t, n), t.then(e, e));
  }
  function Ge(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cn(e, t, n, i, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Un(-1, 1), t.tag = 2, Jn(n, t, 1))), n.lanes |= 1), e);
  }
  var pt = ht.ReactCurrentOwner, Me = !1;
  function Re(e, t, n, i) {
    t.child = e === null ? Ss(t, null, n, i) : $r(t, e.child, n, i);
  }
  function $n(e, t, n, i, l) {
    n = n.render;
    var s = t.ref;
    return ti(t, l), i = Jl(e, t, n, i, s, l), n = Bo(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, kr(e, t, l)) : (Ve && n && et(t), t.flags |= 1, Re(e, t, i, l), t.child);
  }
  function Yn(e, t, n, i, l) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !tc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Xo(e, t, s, i, l)) : (e = Xs(n.type, null, i, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !(e.lanes & l)) {
      var f = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Pi, n(f, i) && e.ref === t.ref) return kr(e, t, l);
    }
    return t.flags |= 1, e = ci(s, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Xo(e, t, n, i, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Pi(s, i) && e.ref === t.ref) if (Me = !1, t.pendingProps = i = s, (e.lanes & l) !== 0) e.flags & 131072 && (Me = !0);
      else return t.lanes = e.lanes, kr(e, t, l);
    }
    return Ki(e, t, n, i, l);
  }
  function Zo(e, t, n) {
    var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(Ko, fn), fn |= n;
    else {
      if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(Ko, fn), fn |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = s !== null ? s.baseLanes : n, Ne(Ko, fn), fn |= i;
    }
    else s !== null ? (i = s.baseLanes | n, t.memoizedState = null) : i = n, Ne(Ko, fn), fn |= i;
    return Re(e, t, l, n), t.child;
  }
  function qo(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ki(e, t, n, i, l) {
    var s = ft(n) ? gr : st.current;
    return s = qr(t, s), ti(t, l), n = Jl(e, t, n, i, s, l), i = Bo(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, kr(e, t, l)) : (Ve && i && et(t), t.flags |= 1, Re(e, t, n, l), t.child);
  }
  function nu(e, t, n, i, l) {
    if (ft(n)) {
      var s = !0;
      un(t);
    } else s = !1;
    if (ti(t, l), t.stateNode === null) zs(e, t), b(t, n, i), N(t, n, i, l), i = !0;
    else if (e === null) {
      var f = t.stateNode, g = t.memoizedProps;
      f.props = g;
      var v = f.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = qt(T) : (T = ft(n) ? gr : st.current, T = qr(t, T));
      var Y = n.getDerivedStateFromProps, I = typeof Y == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      I || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== i || v !== T) && E(t, f, i, T), Kn = !1;
      var W = t.memoizedState;
      f.state = W, Yo(t, i, f, l), v = t.memoizedState, g !== i || W !== v || ct.current || Kn ? (typeof Y == "function" && (Z(t, n, Y, i), v = t.memoizedState), (g = Kn || P(t, n, g, i, W, v, T)) ? (I || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = v), f.props = i, f.state = v, f.context = T, i = g) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Ms(e, t), g = t.memoizedProps, T = t.type === t.elementType ? g : q(t.type, g), f.props = T, I = t.pendingProps, W = f.context, v = n.contextType, typeof v == "object" && v !== null ? v = qt(v) : (v = ft(n) ? gr : st.current, v = qr(t, v));
      var K = n.getDerivedStateFromProps;
      (Y = typeof K == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== I || W !== v) && E(t, f, i, v), Kn = !1, W = t.memoizedState, f.state = W, Yo(t, i, f, l);
      var ee = t.memoizedState;
      g !== I || W !== ee || ct.current || Kn ? (typeof K == "function" && (Z(t, n, K, i), ee = t.memoizedState), (T = Kn || P(t, n, T, i, W, ee, v) || !1) ? (Y || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, ee, v), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, ee, v)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ee), f.props = i, f.state = ee, f.context = v, i = T) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return Go(e, t, n, i, s, l);
  }
  function Go(e, t, n, i, l, s) {
    qo(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return l && jo(t, n, !1), kr(e, t, s);
    i = t.stateNode, pt.current = t;
    var g = f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && f ? (t.child = $r(t, e.child, null, s), t.child = $r(t, null, g, s)) : Re(e, t, g, s), t.memoizedState = i.state, l && jo(t, n, !0), t.child;
  }
  function wc(e) {
    var t = e.stateNode;
    t.pendingContext ? ms(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ms(e, t.context, !1), Zl(e, t.containerInfo);
  }
  function kc(e, t, n, i, l) {
    return _r(), Yl(l), t.flags |= 256, Re(e, t, n, i), t.child;
  }
  var Ra = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ua(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var i = t.pendingProps, l = Ze.current, s = !1, f = (t.flags & 128) !== 0, g;
    if ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), g ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ne(Ze, l & 1), e === null)
      return Wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (f = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, f = { mode: "hidden", children: f }, !(i & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = f) : s = Zs(f, i, 0, null), e = to(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ua(n), t.memoizedState = Ra, e) : Wa(t, f));
    if (l = e.memoizedState, l !== null && (g = l.dehydrated, g !== null)) return pf(e, t, f, i, g, l, n);
    if (s) {
      s = i.fallback, f = t.mode, l = e.child, g = l.sibling;
      var v = { mode: "hidden", children: i.children };
      return !(f & 1) && t.child !== l ? (i = t.child, i.childLanes = 0, i.pendingProps = v, t.deletions = null) : (i = ci(l, v), i.subtreeFlags = l.subtreeFlags & 14680064), g !== null ? s = ci(g, s) : (s = to(s, f, n, null), s.flags |= 2), s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, f = e.child.memoizedState, f = f === null ? Ua(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, s.memoizedState = f, s.childLanes = e.childLanes & ~n, t.memoizedState = Ra, i;
    }
    return s = e.child, e = s.sibling, i = ci(s, { mode: "visible", children: i.children }), !(t.mode & 1) && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function Wa(e, t) {
    return t = Zs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function js(e, t, n, i) {
    return i !== null && Yl(i), $r(t, e.child, null, n), e = Wa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function pf(e, t, n, i, l, s, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = z(Error(O(422))), js(e, t, f, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = i.fallback, l = t.mode, i = Zs({ mode: "visible", children: i.children }, l, 0, null), s = to(s, l, f, null), s.flags |= 2, i.return = t, s.return = t, i.sibling = s, t.child = i, t.mode & 1 && $r(t, e.child, null, f), t.child.memoizedState = Ua(f), t.memoizedState = Ra, s);
    if (!(t.mode & 1)) return js(e, t, f, null);
    if (l.data === "$!") {
      if (i = l.nextSibling && l.nextSibling.dataset, i) var g = i.dgst;
      return i = g, s = Error(O(419)), i = z(s, i, void 0), js(e, t, f, i);
    }
    if (g = (f & e.childLanes) !== 0, Me || g) {
      if (i = gt, i !== null) {
        switch (f & -f) {
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
        l = l & (i.suspendedLanes | f) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, Rn(e, l), Bn(i, e, l, -1));
      }
      return ec(), i = z(Error(O(421))), js(e, t, f, i);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, pe = $e(l.nextSibling), Bt = t, Ve = !0, Mt = null, e !== null && (Ht[Zt++] = an, Ht[Zt++] = It, Ht[Zt++] = Fn, an = e.id, It = e.overflow, Fn = t), t = Wa(t, i.children), t.flags |= 4096, t);
  }
  function Sc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), bl(e.return, t, n);
  }
  function Ya(e, t, n, i, l) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = n, s.tailMode = l);
  }
  function Cc(e, t, n) {
    var i = t.pendingProps, l = i.revealOrder, s = i.tail;
    if (Re(e, t, i.children, n), i = Ze.current, i & 2) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sc(e, n, t);
        else if (e.tag === 19) Sc(e, n, t);
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
      i &= 1;
    }
    if (Ne(Ze, i), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ho(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ya(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Ho(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ya(t, !0, n, null, s);
        break;
      case "together":
        Ya(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function zs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function kr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ji |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
      for (e = t.child, n = ci(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ci(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function gf(e, t, n) {
    switch (t.tag) {
      case 3:
        wc(t), _r();
        break;
      case 5:
        Ts(t);
        break;
      case 1:
        ft(t.type) && un(t);
        break;
      case 4:
        Zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, l = t.memoizedProps.value;
        Ne(Fo, i._currentValue), i._currentValue = l;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ne(Ze, Ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xc(e, t, n) : (Ne(Ze, Ze.current & 1), e = kr(e, t, n), e !== null ? e.sibling : null);
        Ne(Ze, Ze.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, e.flags & 128) {
          if (i) return Cc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ne(Ze, Ze.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Zo(e, t, n);
    }
    return kr(e, t, n);
  }
  var Mc, Ha, Ac, Ec;
  Mc = function(e, t) {
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
  }, Ha = function() {
  }, Ac = function(e, t, n, i) {
    var l = e.memoizedProps;
    if (l !== i) {
      e = t.stateNode, _n(xn.current);
      var s = null;
      switch (n) {
        case "input":
          l = el(e, l), i = el(e, i), s = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), i = _({}, i, { value: void 0 }), s = [];
          break;
        case "textarea":
          l = oo(e, l), i = oo(e, i), s = [];
          break;
        default:
          typeof l.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Eo);
      }
      il(n, i);
      var f;
      n = null;
      for (T in l) if (!i.hasOwnProperty(T) && l.hasOwnProperty(T) && l[T] != null) if (T === "style") {
        var g = l[T];
        for (f in g) g.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (He.hasOwnProperty(T) ? s || (s = []) : (s = s || []).push(T, null));
      for (T in i) {
        var v = i[T];
        if (g = l != null ? l[T] : void 0, i.hasOwnProperty(T) && v !== g && (v != null || g != null)) if (T === "style") if (g) {
          for (f in g) !g.hasOwnProperty(f) || v && v.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in v) v.hasOwnProperty(f) && g[f] !== v[f] && (n || (n = {}), n[f] = v[f]);
        } else n || (s || (s = []), s.push(
          T,
          n
        )), n = v;
        else T === "dangerouslySetInnerHTML" ? (v = v ? v.__html : void 0, g = g ? g.__html : void 0, v != null && g !== v && (s = s || []).push(T, v)) : T === "children" ? typeof v != "string" && typeof v != "number" || (s = s || []).push(T, "" + v) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (He.hasOwnProperty(T) ? (v != null && T === "onScroll" && De("scroll", e), s || g === v || (s = [])) : (s = s || []).push(T, v));
      }
      n && (s = s || []).push("style", n);
      var T = s;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Ec = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function ru(e, t) {
    if (!Ve) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function Lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags & 14680064, i |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, i |= l.subtreeFlags, i |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function mf(e, t, n) {
    var i = t.pendingProps;
    switch (Rl(t), t.tag) {
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
        return Lt(t), null;
      case 1:
        return ft(t.type) && Lo(), Lt(t), null;
      case 3:
        return i = t.stateNode, ri(), We(ct), We(st), Ql(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (zo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mt !== null && (Ja(Mt), Mt = null))), Ha(e, t), Lt(t), null;
      case 5:
        ql(t);
        var l = _n(Vi.current);
        if (n = t.type, e !== null && t.stateNode != null) Ac(e, t, n, i, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(O(166));
            return Lt(t), null;
          }
          if (e = _n(xn.current), zo(t)) {
            i = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (i[vn] = t, i[Ui] = s, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                De("cancel", i), De("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Li.length; l++) De(Li[l], i);
                break;
              case "source":
                De("error", i);
                break;
              case "img":
              case "image":
              case "link":
                De(
                  "error",
                  i
                ), De("load", i);
                break;
              case "details":
                De("toggle", i);
                break;
              case "input":
                cu(i, s), De("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!s.multiple }, De("invalid", i);
                break;
              case "textarea":
                nl(i, s), De("invalid", i);
            }
            il(n, s), l = null;
            for (var f in s) if (s.hasOwnProperty(f)) {
              var g = s[f];
              f === "children" ? typeof g == "string" ? i.textContent !== g && (s.suppressHydrationWarning !== !0 && Fi(i.textContent, g, e), l = ["children", g]) : typeof g == "number" && i.textContent !== "" + g && (s.suppressHydrationWarning !== !0 && Fi(
                i.textContent,
                g,
                e
              ), l = ["children", "" + g]) : He.hasOwnProperty(f) && g != null && f === "onScroll" && De("scroll", i);
            }
            switch (n) {
              case "input":
                no(i), du(i, s, !0);
                break;
              case "textarea":
                no(i), pu(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (i.onclick = Eo);
            }
            i = l, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            f = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(n, { is: i.is }) : (e = f.createElement(n), n === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, n), e[vn] = t, e[Ui] = i, Mc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = ol(n, i), n) {
                case "dialog":
                  De("cancel", e), De("close", e), l = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", e), l = i;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Li.length; l++) De(Li[l], e);
                  l = i;
                  break;
                case "source":
                  De("error", e), l = i;
                  break;
                case "img":
                case "image":
                case "link":
                  De(
                    "error",
                    e
                  ), De("load", e), l = i;
                  break;
                case "details":
                  De("toggle", e), l = i;
                  break;
                case "input":
                  cu(e, i), l = el(e, i), De("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, l = _({}, i, { value: void 0 }), De("invalid", e);
                  break;
                case "textarea":
                  nl(e, i), l = oo(e, i), De("invalid", e);
                  break;
                default:
                  l = i;
              }
              il(n, l), g = l;
              for (s in g) if (g.hasOwnProperty(s)) {
                var v = g[s];
                s === "style" ? vu(e, v) : s === "dangerouslySetInnerHTML" ? (v = v ? v.__html : void 0, v != null && mu(e, v)) : s === "children" ? typeof v == "string" ? (n !== "textarea" || v !== "") && di(e, v) : typeof v == "number" && di(e, "" + v) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (He.hasOwnProperty(s) ? v != null && s === "onScroll" && De("scroll", e) : v != null && Vt(e, s, v, f));
              }
              switch (n) {
                case "input":
                  no(e), du(e, i, !1);
                  break;
                case "textarea":
                  no(e), pu(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + Pe(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, s = i.value, s != null ? rr(e, !!i.multiple, s, !1) : i.defaultValue != null && rr(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Eo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Lt(t), null;
      case 6:
        if (e && t.stateNode != null) Ec(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(O(166));
          if (n = _n(Vi.current), _n(xn.current), zo(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[vn] = t, (s = i.nodeValue !== n) && (e = Bt, e !== null)) switch (e.tag) {
              case 3:
                Fi(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fi(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            s && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[vn] = t, t.stateNode = i;
        }
        return Lt(t), null;
      case 13:
        if (We(Ze), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ve && pe !== null && t.mode & 1 && !(t.flags & 128)) ks(), _r(), t.flags |= 98560, s = !1;
          else if (s = zo(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(O(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(O(317));
              s[vn] = t;
            } else _r(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Lt(t), s = !1;
          } else Mt !== null && (Ja(Mt), Mt = null), s = !0;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ze.current & 1 ? dt === 0 && (dt = 3) : ec())), t.updateQueue !== null && (t.flags |= 4), Lt(t), null);
      case 4:
        return ri(), Ha(e, t), e === null && on(t.stateNode.containerInfo), Lt(t), null;
      case 10:
        return Uo(t.type._context), Lt(t), null;
      case 17:
        return ft(t.type) && Lo(), Lt(t), null;
      case 19:
        if (We(Ze), s = t.memoizedState, s === null) return Lt(t), null;
        if (i = (t.flags & 128) !== 0, f = s.rendering, f === null) if (i) ru(s, !1);
        else {
          if (dt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (f = Ho(e), f !== null) {
              for (t.flags |= 128, ru(s, !1), i = f.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) s = n, e = i, s.flags &= 14680066, f = s.alternate, f === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = f.childLanes, s.lanes = f.lanes, s.child = f.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = f.memoizedProps, s.memoizedState = f.memoizedState, s.updateQueue = f.updateQueue, s.type = f.type, e = f.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ne(Ze, Ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          s.tail !== null && be() > Jo && (t.flags |= 128, i = !0, ru(s, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = Ho(f), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ru(s, !0), s.tail === null && s.tailMode === "hidden" && !f.alternate && !Ve) return Lt(t), null;
          } else 2 * be() - s.renderingStartTime > Jo && n !== 1073741824 && (t.flags |= 128, i = !0, ru(s, !1), t.lanes = 4194304);
          s.isBackwards ? (f.sibling = t.child, t.child = f) : (n = s.last, n !== null ? n.sibling = f : t.child = f, s.last = f);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = be(), t.sibling = null, n = Ze.current, Ne(Ze, i ? n & 1 | 2 : n & 1), t) : (Lt(t), null);
      case 22:
      case 23:
        return $a(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? fn & 1073741824 && (Lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Lt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(O(156, t.tag));
  }
  function yf(e, t) {
    switch (Rl(t), t.tag) {
      case 1:
        return ft(t.type) && Lo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ri(), We(ct), We(st), Ql(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ql(t), null;
      case 13:
        if (We(Ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(O(340));
          _r();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return We(Ze), null;
      case 4:
        return ri(), null;
      case 10:
        return Uo(t.type._context), null;
      case 22:
      case 23:
        return $a(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fs = !1, jt = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
  function Qo(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      rt(e, t, i);
    }
    else n.current = null;
  }
  function Ia(e, t, n) {
    try {
      n();
    } catch (i) {
      rt(e, t, i);
    }
  }
  var Tc = !1;
  function wf(e, t) {
    if (Ol = Nr, e = Ir(), Yt(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var l = i.anchorOffset, s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, g = -1, v = -1, T = 0, Y = 0, I = e, W = null;
          t: for (; ; ) {
            for (var K; I !== n || l !== 0 && I.nodeType !== 3 || (g = f + l), I !== s || i !== 0 && I.nodeType !== 3 || (v = f + i), I.nodeType === 3 && (f += I.nodeValue.length), (K = I.firstChild) !== null; )
              W = I, I = K;
            for (; ; ) {
              if (I === e) break t;
              if (W === n && ++T === l && (g = f), W === s && ++Y === i && (v = f), (K = I.nextSibling) !== null) break;
              I = W, W = I.parentNode;
            }
            I = K;
          }
          n = g === -1 || v === -1 ? null : { start: g, end: v };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Dl = { focusedElem: e, selectionRange: n }, Nr = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
    else for (; $ !== null; ) {
      t = $;
      try {
        var ee = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ee !== null) {
              var te = ee.memoizedProps, lt = ee.memoizedState, M = t.stateNode, w = M.getSnapshotBeforeUpdate(t.elementType === t.type ? te : q(t.type, te), lt);
              M.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var A = t.stateNode.containerInfo;
            A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(O(163));
        }
      } catch (X) {
        rt(t, t.return, X);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, $ = e;
        break;
      }
      $ = t.return;
    }
    return ee = Tc, Tc = !1, ee;
  }
  function iu(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          l.destroy = void 0, s !== void 0 && Ia(t, n, s);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Rs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ba(e) {
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
  function Pc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vn], delete t[Ui], delete t[Wi], delete t[St], delete t[Oo])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Nc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Oc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ba(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Eo));
    else if (i !== 4 && (e = e.child, e !== null)) for (ba(e, t, n), e = e.sibling; e !== null; ) ba(e, t, n), e = e.sibling;
  }
  function Va(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), e = e.sibling;
  }
  var At = null, Hn = !1;
  function oi(e, t, n) {
    for (n = n.child; n !== null; ) Dc(e, t, n), n = n.sibling;
  }
  function Dc(e, t, n) {
    if (pn && typeof pn.onCommitFiberUnmount == "function") try {
      pn.onCommitFiberUnmount(ao, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        jt || Qo(n, t);
      case 6:
        var i = At, l = Hn;
        At = null, oi(e, t, n), At = i, Hn = l, At !== null && (Hn ? (e = At, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : At.removeChild(n.stateNode));
        break;
      case 18:
        At !== null && (Hn ? (e = At, n = n.stateNode, e.nodeType === 8 ? No(e.parentNode, n) : e.nodeType === 1 && No(e, n), ki(e)) : No(At, n.stateNode));
        break;
      case 4:
        i = At, l = Hn, At = n.stateNode.containerInfo, Hn = !0, oi(e, t, n), At = i, Hn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!jt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          l = i = i.next;
          do {
            var s = l, f = s.destroy;
            s = s.tag, f !== void 0 && (s & 2 || s & 4) && Ia(n, t, f), l = l.next;
          } while (l !== i);
        }
        oi(e, t, n);
        break;
      case 1:
        if (!jt && (Qo(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (g) {
          rt(n, t, g);
        }
        oi(e, t, n);
        break;
      case 21:
        oi(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (jt = (i = jt) || n.memoizedState !== null, oi(e, t, n), jt = i) : oi(e, t, n);
        break;
      default:
        oi(e, t, n);
    }
  }
  function Lc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vf()), t.forEach(function(i) {
        var l = Pf.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
    }
  }
  function In(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var s = e, f = t, g = f;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              At = g.stateNode, Hn = !1;
              break e;
            case 3:
              At = g.stateNode.containerInfo, Hn = !0;
              break e;
            case 4:
              At = g.stateNode.containerInfo, Hn = !0;
              break e;
          }
          g = g.return;
        }
        if (At === null) throw Error(O(160));
        Dc(s, f, l), At = null, Hn = !1;
        var v = l.alternate;
        v !== null && (v.return = null), l.return = null;
      } catch (T) {
        rt(l, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jc(t, e), t = t.sibling;
  }
  function jc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (In(t, e), er(e), i & 4) {
          try {
            iu(3, e, e.return), Rs(3, e);
          } catch (te) {
            rt(e, e.return, te);
          }
          try {
            iu(5, e, e.return);
          } catch (te) {
            rt(e, e.return, te);
          }
        }
        break;
      case 1:
        In(t, e), er(e), i & 512 && n !== null && Qo(n, n.return);
        break;
      case 5:
        if (In(t, e), er(e), i & 512 && n !== null && Qo(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            di(l, "");
          } catch (te) {
            rt(e, e.return, te);
          }
        }
        if (i & 4 && (l = e.stateNode, l != null)) {
          var s = e.memoizedProps, f = n !== null ? n.memoizedProps : s, g = e.type, v = e.updateQueue;
          if (e.updateQueue = null, v !== null) try {
            g === "input" && s.type === "radio" && s.name != null && fu(l, s), ol(g, f);
            var T = ol(g, s);
            for (f = 0; f < v.length; f += 2) {
              var Y = v[f], I = v[f + 1];
              Y === "style" ? vu(l, I) : Y === "dangerouslySetInnerHTML" ? mu(l, I) : Y === "children" ? di(l, I) : Vt(l, Y, I, T);
            }
            switch (g) {
              case "input":
                tl(l, s);
                break;
              case "textarea":
                hu(l, s);
                break;
              case "select":
                var W = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var K = s.value;
                K != null ? rr(l, !!s.multiple, K, !1) : W !== !!s.multiple && (s.defaultValue != null ? rr(
                  l,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : rr(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[Ui] = s;
          } catch (te) {
            rt(e, e.return, te);
          }
        }
        break;
      case 6:
        if (In(t, e), er(e), i & 4) {
          if (e.stateNode === null) throw Error(O(162));
          l = e.stateNode, s = e.memoizedProps;
          try {
            l.nodeValue = s;
          } catch (te) {
            rt(e, e.return, te);
          }
        }
        break;
      case 3:
        if (In(t, e), er(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ki(t.containerInfo);
        } catch (te) {
          rt(e, e.return, te);
        }
        break;
      case 4:
        In(t, e), er(e);
        break;
      case 13:
        In(t, e), er(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (qa = be())), i & 4 && Lc(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (jt = (T = jt) || Y, In(t, e), jt = T) : In(t, e), er(e), i & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !Y && e.mode & 1) for ($ = e, Y = e.child; Y !== null; ) {
            for (I = $ = Y; $ !== null; ) {
              switch (W = $, K = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  iu(4, W, W.return);
                  break;
                case 1:
                  Qo(W, W.return);
                  var ee = W.stateNode;
                  if (typeof ee.componentWillUnmount == "function") {
                    i = W, n = W.return;
                    try {
                      t = i, ee.props = t.memoizedProps, ee.state = t.memoizedState, ee.componentWillUnmount();
                    } catch (te) {
                      rt(i, n, te);
                    }
                  }
                  break;
                case 5:
                  Qo(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Rc(I);
                    continue;
                  }
              }
              K !== null ? (K.return = W, $ = K) : Rc(I);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, I = e; ; ) {
            if (I.tag === 5) {
              if (Y === null) {
                Y = I;
                try {
                  l = I.stateNode, T ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (g = I.stateNode, v = I.memoizedProps.style, f = v != null && v.hasOwnProperty("display") ? v.display : null, g.style.display = yu("display", f));
                } catch (te) {
                  rt(e, e.return, te);
                }
              }
            } else if (I.tag === 6) {
              if (Y === null) try {
                I.stateNode.nodeValue = T ? "" : I.memoizedProps;
              } catch (te) {
                rt(e, e.return, te);
              }
            } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === e) && I.child !== null) {
              I.child.return = I, I = I.child;
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              Y === I && (Y = null), I = I.return;
            }
            Y === I && (Y = null), I.sibling.return = I.return, I = I.sibling;
          }
        }
        break;
      case 19:
        In(t, e), er(e), i & 4 && Lc(e);
        break;
      case 21:
        break;
      default:
        In(
          t,
          e
        ), er(e);
    }
  }
  function er(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Nc(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(O(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (di(l, ""), i.flags &= -33);
            var s = Oc(e);
            Va(e, s, l);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, g = Oc(e);
            ba(e, g, f);
            break;
          default:
            throw Error(O(161));
        }
      } catch (v) {
        rt(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function kf(e, t, n) {
    $ = e, zc(e);
  }
  function zc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; $ !== null; ) {
      var l = $, s = l.child;
      if (l.tag === 22 && i) {
        var f = l.memoizedState !== null || Fs;
        if (!f) {
          var g = l.alternate, v = g !== null && g.memoizedState !== null || jt;
          g = Fs;
          var T = jt;
          if (Fs = f, (jt = v) && !T) for ($ = l; $ !== null; ) f = $, v = f.child, f.tag === 22 && f.memoizedState !== null ? Uc(l) : v !== null ? (v.return = f, $ = v) : Uc(l);
          for (; s !== null; ) $ = s, zc(s), s = s.sibling;
          $ = l, Fs = g, jt = T;
        }
        Fc(e);
      } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, $ = s) : Fc(e);
    }
  }
  function Fc(e) {
    for (; $ !== null; ) {
      var t = $;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              jt || Rs(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !jt) if (n === null) i.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : q(t.type, n.memoizedProps);
                i.componentDidUpdate(l, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var s = t.updateQueue;
              s !== null && Es(t, s, i);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Es(t, f, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var v = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    v.autoFocus && n.focus();
                    break;
                  case "img":
                    v.src && (n.src = v.src);
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
                var T = t.alternate;
                if (T !== null) {
                  var Y = T.memoizedState;
                  if (Y !== null) {
                    var I = Y.dehydrated;
                    I !== null && ki(I);
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
              throw Error(O(163));
          }
          jt || t.flags & 512 && Ba(t);
        } catch (W) {
          rt(t, t.return, W);
        }
      }
      if (t === e) {
        $ = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, $ = n;
        break;
      }
      $ = t.return;
    }
  }
  function Rc(e) {
    for (; $ !== null; ) {
      var t = $;
      if (t === e) {
        $ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, $ = n;
        break;
      }
      $ = t.return;
    }
  }
  function Uc(e) {
    for (; $ !== null; ) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rs(4, t);
            } catch (v) {
              rt(t, n, v);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (v) {
                rt(t, l, v);
              }
            }
            var s = t.return;
            try {
              Ba(t);
            } catch (v) {
              rt(t, s, v);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Ba(t);
            } catch (v) {
              rt(t, f, v);
            }
        }
      } catch (v) {
        rt(t, t.return, v);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, $ = g;
        break;
      }
      $ = t.return;
    }
  }
  var xf = Math.ceil, Us = ht.ReactCurrentDispatcher, Xa = ht.ReactCurrentOwner, Sn = ht.ReactCurrentBatchConfig, Ae = 0, gt = null, at = null, Et = 0, fn = 0, Ko = jn(0), dt = 0, ou = null, Ji = 0, Ws = 0, Za = 0, lu = null, Jt = null, qa = 0, Jo = 1 / 0, xr = null, Ys = !1, Ga = null, li = null, Hs = !1, ui = null, Is = 0, uu = 0, Qa = null, Bs = -1, bs = 0;
  function bt() {
    return Ae & 6 ? be() : Bs !== -1 ? Bs : Bs = be();
  }
  function si(e) {
    return e.mode & 1 ? Ae & 2 && Et !== 0 ? Et & -Et : Fa.transition !== null ? (bs === 0 && (bs = fo()), bs) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : kl(e.type)), e) : 1;
  }
  function Bn(e, t, n, i) {
    if (50 < uu) throw uu = 0, Qa = null, Error(O(185));
    En(e, n, i), (!(Ae & 2) || e !== gt) && (e === gt && (!(Ae & 2) && (Ws |= n), dt === 4 && ai(e, Et)), _t(e, i), n === 1 && Ae === 0 && !(t.mode & 1) && (Jo = be() + 500, Hi && sn()));
  }
  function _t(e, t) {
    var n = e.callbackNode;
    lr(e, t);
    var i = vi(e, e === gt ? Et : 0);
    if (i === 0) n !== null && Pu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Pu(n), t === 1) e.tag === 0 ? za(Yc.bind(null, e)) : ys(Yc.bind(null, e)), jl(function() {
        !(Ae & 6) && sn();
      }), n = null;
      else {
        switch (nn(i)) {
          case 1:
            n = dl;
            break;
          case 4:
            n = hl;
            break;
          case 16:
            n = yi;
            break;
          case 536870912:
            n = Ou;
            break;
          default:
            n = yi;
        }
        n = qc(n, Wc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Wc(e, t) {
    if (Bs = -1, bs = 0, Ae & 6) throw Error(O(327));
    var n = e.callbackNode;
    if (_o() && e.callbackNode !== n) return null;
    var i = vi(e, e === gt ? Et : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = Vs(e, i);
    else {
      t = i;
      var l = Ae;
      Ae |= 2;
      var s = Ic();
      (gt !== e || Et !== t) && (xr = null, Jo = be() + 500, $i(e, t));
      do
        try {
          Mf();
          break;
        } catch (g) {
          Hc(e, g);
        }
      while (!0);
      Bl(), Us.current = s, Ae = l, at !== null ? t = 0 : (gt = null, Et = 0, t = dt);
    }
    if (t !== 0) {
      if (t === 2 && (l = ur(e), l !== 0 && (i = l, t = Ka(e, l))), t === 1) throw n = ou, $i(e, 0), ai(e, i), _t(e, be()), n;
      if (t === 6) ai(e, i);
      else {
        if (l = e.current.alternate, !(i & 30) && !Sf(l) && (t = Vs(e, i), t === 2 && (s = ur(e), s !== 0 && (i = s, t = Ka(e, s))), t === 1)) throw n = ou, $i(e, 0), ai(e, i), _t(e, be()), n;
        switch (e.finishedWork = l, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(O(345));
          case 2:
            eo(e, Jt, xr);
            break;
          case 3:
            if (ai(e, i), (i & 130023424) === i && (t = qa + 500 - be(), 10 < t)) {
              if (vi(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & i) !== i) {
                bt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = To(eo.bind(null, e, Jt, xr), t);
              break;
            }
            eo(e, Jt, xr);
            break;
          case 4:
            if (ai(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var f = 31 - Ut(i);
              s = 1 << f, f = t[f], f > l && (l = f), i &= ~s;
            }
            if (i = l, i = be() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * xf(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = To(eo.bind(null, e, Jt, xr), i);
              break;
            }
            eo(e, Jt, xr);
            break;
          case 5:
            eo(e, Jt, xr);
            break;
          default:
            throw Error(O(329));
        }
      }
    }
    return _t(e, be()), e.callbackNode === n ? Wc.bind(null, e) : null;
  }
  function Ka(e, t) {
    var n = lu;
    return e.current.memoizedState.isDehydrated && ($i(e, t).flags |= 256), e = Vs(e, t), e !== 2 && (t = Jt, Jt = n, t !== null && Ja(t)), e;
  }
  function Ja(e) {
    Jt === null ? Jt = e : Jt.push.apply(Jt, e);
  }
  function Sf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var l = n[i], s = l.getSnapshot;
          l = l.value;
          try {
            if (!Je(s(), l)) return !1;
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
  function ai(e, t) {
    for (t &= ~Za, t &= ~Ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ut(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function Yc(e) {
    if (Ae & 6) throw Error(O(327));
    _o();
    var t = vi(e, 0);
    if (!(t & 1)) return _t(e, be()), null;
    var n = Vs(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = ur(e);
      i !== 0 && (t = i, n = Ka(e, i));
    }
    if (n === 1) throw n = ou, $i(e, 0), ai(e, t), _t(e, be()), n;
    if (n === 6) throw Error(O(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, eo(e, Jt, xr), _t(e, be()), null;
  }
  function _a(e, t) {
    var n = Ae;
    Ae |= 1;
    try {
      return e(t);
    } finally {
      Ae = n, Ae === 0 && (Jo = be() + 500, Hi && sn());
    }
  }
  function _i(e) {
    ui !== null && ui.tag === 0 && !(Ae & 6) && _o();
    var t = Ae;
    Ae |= 1;
    var n = Sn.transition, i = Se;
    try {
      if (Sn.transition = null, Se = 1, e) return e();
    } finally {
      Se = i, Sn.transition = n, Ae = t, !(Ae & 6) && sn();
    }
  }
  function $a() {
    fn = Ko.current, We(Ko);
  }
  function $i(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ps(n)), at !== null) for (n = at.return; n !== null; ) {
      var i = n;
      switch (Rl(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Lo();
          break;
        case 3:
          ri(), We(ct), We(st), Ql();
          break;
        case 5:
          ql(i);
          break;
        case 4:
          ri();
          break;
        case 13:
          We(Ze);
          break;
        case 19:
          We(Ze);
          break;
        case 10:
          Uo(i.type._context);
          break;
        case 22:
        case 23:
          $a();
      }
      n = n.return;
    }
    if (gt = e, at = e = ci(e.current, null), Et = fn = t, dt = 0, ou = null, Za = Ws = Ji = 0, Jt = lu = null, Qn !== null) {
      for (t = 0; t < Qn.length; t++) if (n = Qn[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var l = i.next, s = n.pending;
        if (s !== null) {
          var f = s.next;
          s.next = l, i.next = f;
        }
        n.pending = i;
      }
      Qn = null;
    }
    return e;
  }
  function Hc(e, t) {
    do {
      var n = at;
      try {
        if (Bl(), Io.current = U, Xi) {
          for (var i = qe.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), i = i.next;
          }
          Xi = !1;
        }
        if (yr = 0, ot = tt = qe = null, Zi = !1, Wn = 0, Xa.current = null, n === null || n.return === null) {
          dt = 1, ou = t, at = null;
          break;
        }
        e: {
          var s = e, f = n.return, g = n, v = t;
          if (t = Et, g.flags |= 32768, v !== null && typeof v == "object" && typeof v.then == "function") {
            var T = v, Y = g, I = Y.tag;
            if (!(Y.mode & 1) && (I === 0 || I === 11 || I === 15)) {
              var W = Y.alternate;
              W ? (Y.updateQueue = W.updateQueue, Y.memoizedState = W.memoizedState, Y.lanes = W.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var K = Ge(f);
            if (K !== null) {
              K.flags &= -257, cn(K, f, g, s, t), K.mode & 1 && Fe(s, T, t), t = K, v = T;
              var ee = t.updateQueue;
              if (ee === null) {
                var te = /* @__PURE__ */ new Set();
                te.add(v), t.updateQueue = te;
              } else ee.add(v);
              break e;
            } else {
              if (!(t & 1)) {
                Fe(s, T, t), ec();
                break e;
              }
              v = Error(O(426));
            }
          } else if (Ve && g.mode & 1) {
            var lt = Ge(f);
            if (lt !== null) {
              !(lt.flags & 65536) && (lt.flags |= 256), cn(lt, f, g, s, t), Yl(L(v, g));
              break e;
            }
          }
          s = v = L(v, g), dt !== 4 && (dt = 2), lu === null ? lu = [s] : lu.push(s), s = f;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var M = ce(s, v, t);
                As(s, M);
                break e;
              case 1:
                g = v;
                var w = s.type, A = s.stateNode;
                if (!(s.flags & 128) && (typeof w.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (li === null || !li.has(A)))) {
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var X = Ce(s, g, t);
                  As(s, X);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        bc(n);
      } catch (re) {
        t = re, at === n && n !== null && (at = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ic() {
    var e = Us.current;
    return Us.current = U, e === null ? U : e;
  }
  function ec() {
    (dt === 0 || dt === 3 || dt === 2) && (dt = 4), gt === null || !(Ji & 268435455) && !(Ws & 268435455) || ai(gt, Et);
  }
  function Vs(e, t) {
    var n = Ae;
    Ae |= 2;
    var i = Ic();
    (gt !== e || Et !== t) && (xr = null, $i(e, t));
    do
      try {
        Cf();
        break;
      } catch (l) {
        Hc(e, l);
      }
    while (!0);
    if (Bl(), Ae = n, Us.current = i, at !== null) throw Error(O(261));
    return gt = null, Et = 0, dt;
  }
  function Cf() {
    for (; at !== null; ) Bc(at);
  }
  function Mf() {
    for (; at !== null && !la(); ) Bc(at);
  }
  function Bc(e) {
    var t = Zc(e.alternate, e, fn);
    e.memoizedProps = e.pendingProps, t === null ? bc(e) : at = t, Xa.current = null;
  }
  function bc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = yf(n, t), n !== null) {
          n.flags &= 32767, at = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          dt = 6, at = null;
          return;
        }
      } else if (n = mf(n, t, fn), n !== null) {
        at = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        at = t;
        return;
      }
      at = t = e;
    } while (t !== null);
    dt === 0 && (dt = 5);
  }
  function eo(e, t, n) {
    var i = Se, l = Sn.transition;
    try {
      Sn.transition = null, Se = 1, Af(e, t, n, i);
    } finally {
      Sn.transition = l, Se = i;
    }
    return null;
  }
  function Af(e, t, n, i) {
    do
      _o();
    while (ui !== null);
    if (Ae & 6) throw Error(O(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (po(e, s), e === gt && (at = gt = null, Et = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hs || (Hs = !0, qc(yi, function() {
      return _o(), null;
    })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
      s = Sn.transition, Sn.transition = null;
      var f = Se;
      Se = 1;
      var g = Ae;
      Ae |= 4, Xa.current = null, wf(e, n), jc(n, e), Na(Dl), Nr = !!Ol, Dl = Ol = null, e.current = n, kf(n), An(), Ae = g, Se = f, Sn.transition = s;
    } else e.current = n;
    if (Hs && (Hs = !1, ui = e, Is = l), s = e.pendingLanes, s === 0 && (li = null), pl(n.stateNode), _t(e, be()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ys) throw Ys = !1, e = Ga, Ga = null, e;
    return Is & 1 && e.tag !== 0 && _o(), s = e.pendingLanes, s & 1 ? e === Qa ? uu++ : (uu = 0, Qa = e) : uu = 0, sn(), null;
  }
  function _o() {
    if (ui !== null) {
      var e = nn(Is), t = Sn.transition, n = Se;
      try {
        if (Sn.transition = null, Se = 16 > e ? 16 : e, ui === null) var i = !1;
        else {
          if (e = ui, ui = null, Is = 0, Ae & 6) throw Error(O(331));
          var l = Ae;
          for (Ae |= 4, $ = e.current; $ !== null; ) {
            var s = $, f = s.child;
            if ($.flags & 16) {
              var g = s.deletions;
              if (g !== null) {
                for (var v = 0; v < g.length; v++) {
                  var T = g[v];
                  for ($ = T; $ !== null; ) {
                    var Y = $;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        iu(8, Y, s);
                    }
                    var I = Y.child;
                    if (I !== null) I.return = Y, $ = I;
                    else for (; $ !== null; ) {
                      Y = $;
                      var W = Y.sibling, K = Y.return;
                      if (Pc(Y), Y === T) {
                        $ = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = K, $ = W;
                        break;
                      }
                      $ = K;
                    }
                  }
                }
                var ee = s.alternate;
                if (ee !== null) {
                  var te = ee.child;
                  if (te !== null) {
                    ee.child = null;
                    do {
                      var lt = te.sibling;
                      te.sibling = null, te = lt;
                    } while (te !== null);
                  }
                }
                $ = s;
              }
            }
            if (s.subtreeFlags & 2064 && f !== null) f.return = s, $ = f;
            else e: for (; $ !== null; ) {
              if (s = $, s.flags & 2048) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  iu(9, s, s.return);
              }
              var M = s.sibling;
              if (M !== null) {
                M.return = s.return, $ = M;
                break e;
              }
              $ = s.return;
            }
          }
          var w = e.current;
          for ($ = w; $ !== null; ) {
            f = $;
            var A = f.child;
            if (f.subtreeFlags & 2064 && A !== null) A.return = f, $ = A;
            else e: for (f = w; $ !== null; ) {
              if (g = $, g.flags & 2048) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rs(9, g);
                }
              } catch (re) {
                rt(g, g.return, re);
              }
              if (g === f) {
                $ = null;
                break e;
              }
              var X = g.sibling;
              if (X !== null) {
                X.return = g.return, $ = X;
                break e;
              }
              $ = g.return;
            }
          }
          if (Ae = l, sn(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
            pn.onPostCommitFiberRoot(ao, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        Se = n, Sn.transition = t;
      }
    }
    return !1;
  }
  function Vc(e, t, n) {
    t = L(n, t), t = ce(e, t, 1), e = Jn(e, t, 1), t = bt(), e !== null && (En(e, 1, t), _t(e, t));
  }
  function rt(e, t, n) {
    if (e.tag === 3) Vc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (li === null || !li.has(i))) {
          e = L(n, e), e = Ce(t, e, 1), t = Jn(t, e, 1), e = bt(), t !== null && (En(t, 1, e), _t(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ef(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = bt(), e.pingedLanes |= e.suspendedLanes & n, gt === e && (Et & n) === n && (dt === 4 || dt === 3 && (Et & 130023424) === Et && 500 > be() - qa ? $i(e, 0) : Za |= n), _t(e, t);
  }
  function Xc(e, t) {
    t === 0 && (e.mode & 1 ? (t = or, or <<= 1, !(or & 130023424) && (or = 4194304)) : t = 1);
    var n = bt();
    e = Rn(e, t), e !== null && (En(e, t, n), _t(e, n));
  }
  function Tf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Xc(e, n);
  }
  function Pf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(O(314));
    }
    i !== null && i.delete(t), Xc(e, n);
  }
  var Zc;
  Zc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ct.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, gf(e, t, n);
      Me = !!(e.flags & 131072);
    }
    else Me = !1, Ve && t.flags & 1048576 && Fl(t, zn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        zs(e, t), e = t.pendingProps;
        var l = qr(t, st.current);
        ti(t, n), l = Jl(null, t, i, e, l, n);
        var s = Bo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ft(i) ? (s = !0, un(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Xl(t), l.updater = j, t.stateNode = l, l._reactInternals = t, N(t, i, e, n), t = Go(null, t, i, !0, s, n)) : (t.tag = 0, Ve && s && et(t), Re(null, t, l, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (zs(e, t), e = t.pendingProps, l = i._init, i = l(i._payload), t.type = i, l = t.tag = Of(i), e = q(i, e), l) {
            case 0:
              t = Ki(null, t, i, e, n);
              break e;
            case 1:
              t = nu(null, t, i, e, n);
              break e;
            case 11:
              t = $n(null, t, i, e, n);
              break e;
            case 14:
              t = Yn(null, t, i, q(i.type, e), n);
              break e;
          }
          throw Error(O(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : q(i, l), Ki(e, t, i, l, n);
      case 1:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : q(i, l), nu(e, t, i, l, n);
      case 3:
        e: {
          if (wc(t), e === null) throw Error(O(387));
          i = t.pendingProps, s = t.memoizedState, l = s.element, Ms(e, t), Yo(t, i, null, n);
          var f = t.memoizedState;
          if (i = f.element, s.isDehydrated) if (s = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            l = L(Error(O(423)), t), t = kc(e, t, i, n, l);
            break e;
          } else if (i !== l) {
            l = L(Error(O(424)), t), t = kc(e, t, i, n, l);
            break e;
          } else for (pe = $e(t.stateNode.containerInfo.firstChild), Bt = t, Ve = !0, Mt = null, n = Ss(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_r(), i === l) {
              t = kr(e, t, n);
              break e;
            }
            Re(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ts(t), e === null && Wl(t), i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, Ri(i, l) ? f = null : s !== null && Ri(i, s) && (t.flags |= 32), qo(e, t), Re(e, t, f, n), t.child;
      case 6:
        return e === null && Wl(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return Zl(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = $r(t, null, i, n) : Re(e, t, i, n), t.child;
      case 11:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : q(i, l), $n(e, t, i, l, n);
      case 7:
        return Re(e, t, t.pendingProps, n), t.child;
      case 8:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, l = t.pendingProps, s = t.memoizedProps, f = l.value, Ne(Fo, i._currentValue), i._currentValue = f, s !== null) if (Je(s.value, f)) {
            if (s.children === l.children && !ct.current) {
              t = kr(e, t, n);
              break e;
            }
          } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
            var g = s.dependencies;
            if (g !== null) {
              f = s.child;
              for (var v = g.firstContext; v !== null; ) {
                if (v.context === i) {
                  if (s.tag === 1) {
                    v = Un(-1, n & -n), v.tag = 2;
                    var T = s.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var Y = T.pending;
                      Y === null ? v.next = v : (v.next = Y.next, Y.next = v), T.pending = v;
                    }
                  }
                  s.lanes |= n, v = s.alternate, v !== null && (v.lanes |= n), bl(
                    s.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                v = v.next;
              }
            } else if (s.tag === 10) f = s.type === t.type ? null : s.child;
            else if (s.tag === 18) {
              if (f = s.return, f === null) throw Error(O(341));
              f.lanes |= n, g = f.alternate, g !== null && (g.lanes |= n), bl(f, n, t), f = s.sibling;
            } else f = s.child;
            if (f !== null) f.return = s;
            else for (f = s; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (s = f.sibling, s !== null) {
                s.return = f.return, f = s;
                break;
              }
              f = f.return;
            }
            s = f;
          }
          Re(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, i = t.pendingProps.children, ti(t, n), l = qt(l), i = i(l), t.flags |= 1, Re(e, t, i, n), t.child;
      case 14:
        return i = t.type, l = q(i, t.pendingProps), l = q(i.type, l), Yn(e, t, i, l, n);
      case 15:
        return Xo(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, l = t.pendingProps, l = t.elementType === i ? l : q(i, l), zs(e, t), t.tag = 1, ft(i) ? (e = !0, un(t)) : e = !1, ti(t, n), b(t, i, l), N(t, i, l, n), Go(null, t, i, !0, e, n);
      case 19:
        return Cc(e, t, n);
      case 22:
        return Zo(e, t, n);
    }
    throw Error(O(156, t.tag));
  };
  function qc(e, t) {
    return it(e, t);
  }
  function Nf(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Cn(e, t, n, i) {
    return new Nf(e, t, n, i);
  }
  function tc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Of(e) {
    if (typeof e == "function") return tc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === dn) return 11;
      if (e === hn) return 14;
    }
    return 2;
  }
  function ci(e, t) {
    var n = e.alternate;
    return n === null ? (n = Cn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Xs(e, t, n, i, l, s) {
    var f = 2;
    if (i = e, typeof e == "function") tc(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case Nt:
        return to(n.children, l, s, t);
      case Xt:
        f = 8, l |= 8;
        break;
      case bn:
        return e = Cn(12, n, t, l | 2), e.elementType = bn, e.lanes = s, e;
      case zt:
        return e = Cn(13, n, t, l), e.elementType = zt, e.lanes = s, e;
      case tn:
        return e = Cn(19, n, t, l), e.elementType = tn, e.lanes = s, e;
      case Ke:
        return Zs(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Mn:
            f = 10;
            break e;
          case tr:
            f = 9;
            break e;
          case dn:
            f = 11;
            break e;
          case hn:
            f = 14;
            break e;
          case Ot:
            f = 16, i = null;
            break e;
        }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
    return t = Cn(f, n, t, l), t.elementType = e, t.type = i, t.lanes = s, t;
  }
  function to(e, t, n, i) {
    return e = Cn(7, e, i, t), e.lanes = n, e;
  }
  function Zs(e, t, n, i) {
    return e = Cn(22, e, i, t), e.elementType = Ke, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function nc(e, t, n) {
    return e = Cn(6, e, null, t), e.lanes = n, e;
  }
  function rc(e, t, n) {
    return t = Cn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Df(e, t, n, i, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ho(0), this.expirationTimes = ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ic(e, t, n, i, l, s, f, g, v) {
    return e = new Df(e, t, n, g, v), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Cn(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xl(s), e;
  }
  function Lf(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: yt, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function Gc(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Vn(e) !== e || e.tag !== 1) throw Error(O(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ft(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(O(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ft(n)) return zl(e, n, t);
    }
    return t;
  }
  function Qc(e, t, n, i, l, s, f, g, v) {
    return e = ic(n, i, !0, e, l, s, f, g, v), e.context = Gc(null), n = e.current, i = bt(), l = si(n), s = Un(i, l), s.callback = t ?? null, Jn(n, s, l), e.current.lanes = l, En(e, l, i), _t(e, i), e;
  }
  function qs(e, t, n, i) {
    var l = t.current, s = bt(), f = si(l);
    return n = Gc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Un(s, f), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Jn(l, t, f), e !== null && (Bn(e, l, f, s), Wo(e, l, f)), f;
  }
  function Gs(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Kc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oc(e, t) {
    Kc(e, t), (e = e.alternate) && Kc(e, t);
  }
  var Jc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function lc(e) {
    this._internalRoot = e;
  }
  Qs.prototype.render = lc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    qs(e, t, null, null);
  }, Qs.prototype.unmount = lc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      _i(function() {
        qs(null, e, null, null);
      }), t[ln] = null;
    }
  };
  function Qs(e) {
    this._internalRoot = e;
  }
  Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++) ;
      On.splice(n, 0, e), n === 0 && vl(e);
    }
  };
  function uc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ks(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function _c() {
  }
  function jf(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var s = i;
        i = function() {
          var T = Gs(f);
          s.call(T);
        };
      }
      var f = Qc(t, i, e, 0, null, !1, !1, "", _c);
      return e._reactRootContainer = f, e[ln] = f.current, on(e.nodeType === 8 ? e.parentNode : e), _i(), f;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof i == "function") {
      var g = i;
      i = function() {
        var T = Gs(v);
        g.call(T);
      };
    }
    var v = ic(e, 0, !1, null, null, !1, !1, "", _c);
    return e._reactRootContainer = v, e[ln] = v.current, on(e.nodeType === 8 ? e.parentNode : e), _i(function() {
      qs(t, v, n, i);
    }), v;
  }
  function Js(e, t, n, i, l) {
    var s = n._reactRootContainer;
    if (s) {
      var f = s;
      if (typeof l == "function") {
        var g = l;
        l = function() {
          var v = Gs(f);
          g.call(v);
        };
      }
      qs(t, f, e, l);
    } else f = jf(n, t, e, l, i);
    return Gs(f);
  }
  Du = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Er(t.pendingLanes);
          n !== 0 && (Xn(t, n | 1), _t(t, be()), !(Ae & 6) && (Jo = be() + 500, sn()));
        }
        break;
      case 13:
        _i(function() {
          var i = Rn(e, 1);
          if (i !== null) {
            var l = bt();
            Bn(i, e, 1, l);
          }
        }), oc(e, 1);
    }
  }, ml = function(e) {
    if (e.tag === 13) {
      var t = Rn(e, 134217728);
      if (t !== null) {
        var n = bt();
        Bn(t, e, 134217728, n);
      }
      oc(e, 134217728);
    }
  }, Lu = function(e) {
    if (e.tag === 13) {
      var t = si(e), n = Rn(e, t);
      if (n !== null) {
        var i = bt();
        Bn(n, e, t, i);
      }
      oc(e, t);
    }
  }, ju = function() {
    return Se;
  }, zu = function(e, t) {
    var n = Se;
    try {
      return Se = e, t();
    } finally {
      Se = n;
    }
  }, sl = function(e, t, n) {
    switch (t) {
      case "input":
        if (tl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var l = Yi(i);
              if (!l) throw Error(O(90));
              $o(i), tl(i, l);
            }
          }
        }
        break;
      case "textarea":
        hu(e, n);
        break;
      case "select":
        t = n.value, t != null && rr(e, !!n.multiple, t, !1);
    }
  }, Su = _a, Cu = _i;
  var zf = { usingClientEntryPoint: !1, Events: [Ln, hr, Yi, ku, xu, _a] }, su = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ff = { bundleType: su.bundleType, version: su.version, rendererPackageName: su.rendererPackageName, rendererConfig: su.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Tu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: su.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_s.isDisabled && _s.supportsFiber) try {
      ao = _s.inject(Ff), pn = _s;
    } catch {
    }
  }
  return $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf, $t.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!uc(t)) throw Error(O(200));
    return Lf(e, t, null, n);
  }, $t.createRoot = function(e, t) {
    if (!uc(e)) throw Error(O(299));
    var n = !1, i = "", l = Jc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ic(e, 1, !1, null, null, n, !1, i, l), e[ln] = t.current, on(e.nodeType === 8 ? e.parentNode : e), new lc(t);
  }, $t.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
    return e = Tu(t), e = e === null ? null : e.stateNode, e;
  }, $t.flushSync = function(e) {
    return _i(e);
  }, $t.hydrate = function(e, t, n) {
    if (!Ks(t)) throw Error(O(200));
    return Js(null, e, t, !0, n);
  }, $t.hydrateRoot = function(e, t, n) {
    if (!uc(e)) throw Error(O(405));
    var i = n != null && n.hydratedSources || null, l = !1, s = "", f = Jc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, l, !1, s, f), e[ln] = t.current, on(e), i) for (e = 0; e < i.length; e++) n = i[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Qs(t);
  }, $t.render = function(e, t, n) {
    if (!Ks(t)) throw Error(O(200));
    return Js(null, e, t, !1, n);
  }, $t.unmountComponentAtNode = function(e) {
    if (!Ks(e)) throw Error(O(40));
    return e._reactRootContainer ? (_i(function() {
      Js(null, null, e, !1, function() {
        e._reactRootContainer = null, e[ln] = null;
      });
    }), !0) : !1;
  }, $t.unstable_batchedUpdates = _a, $t.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!Ks(n)) throw Error(O(200));
    if (e == null || e._reactInternals === void 0) throw Error(O(38));
    return Js(e, t, n, !1, i);
  }, $t.version = "18.3.1-next-f1338f8080-20240426", $t;
}
var uf;
function bf() {
  if (uf) return cc.exports;
  uf = 1;
  function ne() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ne);
      } catch (Ye) {
        console.error(Ye);
      }
  }
  return ne(), cc.exports = Bf(), cc.exports;
}
var sf;
function Vf() {
  if (sf) return $s;
  sf = 1;
  var ne = bf();
  return $s.createRoot = ne.createRoot, $s.hydrateRoot = ne.hydrateRoot, $s;
}
var Xf = Vf();
const Zf = /* @__PURE__ */ df(Xf);
var hc = { exports: {} }, af;
function hf() {
  return af || (af = 1, function(ne, Ye) {
    (function() {
      function O(r) {
        return r && r.__esModule ? { d: r.default } : { d: r };
      }
      var ut = {};
      function He(r, o) {
        var u = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          o && (a = a.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable;
          })), u.push.apply(u, a);
        }
        return u;
      }
      function Oe(r) {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o] != null ? arguments[o] : {};
          o % 2 ? He(u, !0).forEach(function(a) {
            de(r, a, u[a]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : He(u).forEach(function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(u, a));
          });
        }
        return r;
      }
      function de(r, o, u) {
        return o in r ? Object.defineProperty(r, o, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = u, r;
      }
      function le() {
      }
      var oe = function(r) {
        return r == null ? le : function() {
          return this.querySelector(r);
        };
      }, we = function(r) {
        typeof r != "function" && (r = oe(r));
        for (var o = this._groups, u = o.length, a = new Array(u), c = 0; c < u; ++c) for (var d, p, h = o[c], m = h.length, y = a[c] = new Array(m), x = 0; x < m; ++x) (d = h[x]) && (p = r.call(d, d.__data__, x, h)) && ("__data__" in d && (p.__data__ = d.__data__), y[x] = p);
        return new Rt(a, this._parents);
      };
      function Ie() {
        return [];
      }
      var Le = function(r) {
        return r == null ? Ie : function() {
          return this.querySelectorAll(r);
        };
      }, Ue = function(r) {
        typeof r != "function" && (r = Le(r));
        for (var o = this._groups, u = o.length, a = [], c = [], d = 0; d < u; ++d) for (var p, h = o[d], m = h.length, y = 0; y < m; ++y) (p = h[y]) && (a.push(r.call(p, p.__data__, y, h)), c.push(p));
        return new Rt(a, c);
      }, Tt = function(r) {
        return function() {
          return this.matches(r);
        };
      }, Pt = function(r) {
        typeof r != "function" && (r = Tt(r));
        for (var o = this._groups, u = o.length, a = new Array(u), c = 0; c < u; ++c) for (var d, p = o[c], h = p.length, m = a[c] = [], y = 0; y < h; ++y) (d = p[y]) && r.call(d, d.__data__, y, p) && m.push(d);
        return new Rt(a, this._parents);
      }, je = function(r) {
        return new Array(r.length);
      }, me = function() {
        return new Rt(this._enter || this._groups.map(je), this._parents);
      };
      function Qe(r, o) {
        this.ownerDocument = r.ownerDocument, this.namespaceURI = r.namespaceURI, this._next = null, this._parent = r, this.__data__ = o;
      }
      Qe.prototype = { constructor: Qe, appendChild: function(r) {
        return this._parent.insertBefore(r, this._next);
      }, insertBefore: function(r, o) {
        return this._parent.insertBefore(r, o);
      }, querySelector: function(r) {
        return this._parent.querySelector(r);
      }, querySelectorAll: function(r) {
        return this._parent.querySelectorAll(r);
      } };
      var Ee = function(r) {
        return function() {
          return r;
        };
      }, Vt = "$";
      function ht(r, o, u, a, c, d) {
        for (var p, h = 0, m = o.length, y = d.length; h < y; ++h) (p = o[h]) ? (p.__data__ = d[h], a[h] = p) : u[h] = new Qe(r, d[h]);
        for (; h < m; ++h) (p = o[h]) && (c[h] = p);
      }
      function en(r, o, u, a, c, d, p) {
        var h, m, y, x = {}, k = o.length, S = d.length, B = new Array(k);
        for (h = 0; h < k; ++h) (m = o[h]) && (B[h] = y = Vt + p.call(m, m.__data__, h, o), y in x ? c[h] = m : x[y] = m);
        for (h = 0; h < S; ++h) (m = x[y = Vt + p.call(r, d[h], h, d)]) ? (a[h] = m, m.__data__ = d[h], x[y] = null) : u[h] = new Qe(r, d[h]);
        for (h = 0; h < k; ++h) (m = o[h]) && x[B[h]] === m && (c[h] = m);
      }
      var yt = function(r, o) {
        if (!r) return B = new Array(this.size()), y = -1, this.each(function(Z) {
          B[++y] = Z;
        }), B;
        var u = o ? en : ht, a = this._parents, c = this._groups;
        typeof r != "function" && (r = Ee(r));
        for (var d = c.length, p = new Array(d), h = new Array(d), m = new Array(d), y = 0; y < d; ++y) {
          var x = a[y], k = c[y], S = k.length, B = r.call(x, x && x.__data__, y, a), Q = B.length, J = h[y] = new Array(Q), U = p[y] = new Array(Q);
          u(x, k, J, U, m[y] = new Array(S), B, o);
          for (var D, H, V = 0, q = 0; V < Q; ++V) if (D = J[V]) {
            for (V >= q && (q = V + 1); !(H = U[q]) && ++q < Q; ) ;
            D._next = H || null;
          }
        }
        return (p = new Rt(p, a))._enter = h, p._exit = m, p;
      }, Nt = function() {
        return new Rt(this._exit || this._groups.map(je), this._parents);
      }, Xt = function(r, o, u) {
        var a = this.enter(), c = this, d = this.exit();
        return a = typeof r == "function" ? r(a) : a.append(r + ""), o != null && (c = o(c)), u == null ? d.remove() : u(d), a && c ? a.merge(c).order() : c;
      }, bn = function(r) {
        for (var o = this._groups, u = r._groups, a = o.length, c = u.length, d = Math.min(a, c), p = new Array(a), h = 0; h < d; ++h) for (var m, y = o[h], x = u[h], k = y.length, S = p[h] = new Array(k), B = 0; B < k; ++B) (m = y[B] || x[B]) && (S[B] = m);
        for (; h < a; ++h) p[h] = o[h];
        return new Rt(p, this._parents);
      }, Mn = function() {
        for (var r = this._groups, o = -1, u = r.length; ++o < u; ) for (var a, c = r[o], d = c.length - 1, p = c[d]; --d >= 0; ) (a = c[d]) && (p && 4 ^ a.compareDocumentPosition(p) && p.parentNode.insertBefore(a, p), p = a);
        return this;
      }, tr = function(r) {
        function o(k, S) {
          return k && S ? r(k.__data__, S.__data__) : !k - !S;
        }
        r || (r = dn);
        for (var u = this._groups, a = u.length, c = new Array(a), d = 0; d < a; ++d) {
          for (var p, h = u[d], m = h.length, y = c[d] = new Array(m), x = 0; x < m; ++x) (p = h[x]) && (y[x] = p);
          y.sort(o);
        }
        return new Rt(c, this._parents).order();
      };
      function dn(r, o) {
        return r < o ? -1 : r > o ? 1 : r >= o ? 0 : NaN;
      }
      var zt = function() {
        var r = arguments[0];
        return arguments[0] = this, r.apply(null, arguments), this;
      }, tn = function() {
        var r = new Array(this.size()), o = -1;
        return this.each(function() {
          r[++o] = this;
        }), r;
      }, hn = function() {
        for (var r = this._groups, o = 0, u = r.length; o < u; ++o) for (var a = r[o], c = 0, d = a.length; c < d; ++c) {
          var p = a[c];
          if (p) return p;
        }
        return null;
      }, Ot = function() {
        var r = 0;
        return this.each(function() {
          ++r;
        }), r;
      }, Ke = function() {
        return !this.node();
      }, G = function(r) {
        for (var o = this._groups, u = 0, a = o.length; u < a; ++u) for (var c, d = o[u], p = 0, h = d.length; p < h; ++p) (c = d[p]) && r.call(c, c.__data__, p, d);
        return this;
      };
      function ae(r) {
        return function() {
          this.removeAttribute(r);
        };
      }
      function _(r) {
        return function() {
          this.removeAttributeNS(r.space, r.local);
        };
      }
      function C(r, o) {
        return function() {
          this.setAttribute(r, o);
        };
      }
      function R(r, o) {
        return function() {
          this.setAttributeNS(r.space, r.local, o);
        };
      }
      function ge(r, o) {
        return function() {
          var u = o.apply(this, arguments);
          u == null ? this.removeAttribute(r) : this.setAttribute(r, u);
        };
      }
      function ye(r, o) {
        return function() {
          var u = o.apply(this, arguments);
          u == null ? this.removeAttributeNS(r.space, r.local) : this.setAttributeNS(r.space, r.local, u);
        };
      }
      var ke = "http://www.w3.org/1999/xhtml", xe = { svg: "http://www.w3.org/2000/svg", xhtml: ke, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" }, ze = function(r) {
        var o = r += "", u = o.indexOf(":");
        return u >= 0 && (o = r.slice(0, u)) !== "xmlns" && (r = r.slice(u + 1)), xe.hasOwnProperty(o) ? { space: xe[o], local: r } : r;
      }, Pe = function(r, o) {
        var u = ze(r);
        if (arguments.length < 2) {
          var a = this.node();
          return u.local ? a.getAttributeNS(u.space, u.local) : a.getAttribute(u);
        }
        return this.each((o == null ? u.local ? _ : ae : typeof o == "function" ? u.local ? ye : ge : u.local ? R : C)(u, o));
      };
      function Be(r) {
        return function() {
          this.style.removeProperty(r);
        };
      }
      function Ft(r, o, u) {
        return function() {
          this.style.setProperty(r, o, u);
        };
      }
      function no(r, o, u) {
        return function() {
          var a = o.apply(this, arguments);
          a == null ? this.style.removeProperty(r) : this.style.setProperty(r, a, u);
        };
      }
      var $o = function(r) {
        return r.ownerDocument && r.ownerDocument.defaultView || r.document && r || r.defaultView;
      }, ro = function(r, o, u) {
        return arguments.length > 1 ? this.each((o == null ? Be : typeof o == "function" ? no : Ft)(r, o, u ?? "")) : el(this.node(), r);
      };
      function el(r, o) {
        return r.style.getPropertyValue(o) || $o(r).getComputedStyle(r, null).getPropertyValue(o);
      }
      function cu(r) {
        return function() {
          delete this[r];
        };
      }
      function fu(r, o) {
        return function() {
          this[r] = o;
        };
      }
      function tl(r, o) {
        return function() {
          var u = o.apply(this, arguments);
          u == null ? delete this[r] : this[r] = u;
        };
      }
      var du = function(r, o) {
        return arguments.length > 1 ? this.each((o == null ? cu : typeof o == "function" ? tl : fu)(r, o)) : this.node()[r];
      };
      function io(r) {
        return r.trim().split(/^|\s+/);
      }
      function nr(r) {
        return r.classList || new rr(r);
      }
      function rr(r) {
        this._node = r, this._names = io(r.getAttribute("class") || "");
      }
      function oo(r, o) {
        for (var u = nr(r), a = -1, c = o.length; ++a < c; ) u.add(o[a]);
      }
      function nl(r, o) {
        for (var u = nr(r), a = -1, c = o.length; ++a < c; ) u.remove(o[a]);
      }
      function hu(r) {
        return function() {
          oo(this, r);
        };
      }
      function pu(r) {
        return function() {
          nl(this, r);
        };
      }
      function gu(r, o) {
        return function() {
          (o.apply(this, arguments) ? oo : nl)(this, r);
        };
      }
      rr.prototype = { add: function(r) {
        this._names.indexOf(r) < 0 && (this._names.push(r), this._node.setAttribute("class", this._names.join(" ")));
      }, remove: function(r) {
        var o = this._names.indexOf(r);
        o >= 0 && (this._names.splice(o, 1), this._node.setAttribute("class", this._names.join(" ")));
      }, contains: function(r) {
        return this._names.indexOf(r) >= 0;
      } };
      var rl = function(r, o) {
        var u = io(r + "");
        if (arguments.length < 2) {
          for (var a = nr(this.node()), c = -1, d = u.length; ++c < d; ) if (!a.contains(u[c])) return !1;
          return !0;
        }
        return this.each((typeof o == "function" ? gu : o ? hu : pu)(u, o));
      };
      function lo() {
        this.textContent = "";
      }
      function mu(r) {
        return function() {
          this.textContent = r;
        };
      }
      function di(r) {
        return function() {
          var o = r.apply(this, arguments);
          this.textContent = o ?? "";
        };
      }
      var hi = function(r) {
        return arguments.length ? this.each(r == null ? lo : (typeof r == "function" ? di : mu)(r)) : this.node().textContent;
      };
      function ea() {
        this.innerHTML = "";
      }
      function yu(r) {
        return function() {
          this.innerHTML = r;
        };
      }
      function vu(r) {
        return function() {
          var o = r.apply(this, arguments);
          this.innerHTML = o ?? "";
        };
      }
      var ta = function(r) {
        return arguments.length ? this.each(r == null ? ea : (typeof r == "function" ? vu : yu)(r)) : this.node().innerHTML;
      };
      function il() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      var ol = function() {
        return this.each(il);
      };
      function ll() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      var ul = function() {
        return this.each(ll);
      };
      function sl(r) {
        return function() {
          var o = this.ownerDocument, u = this.namespaceURI;
          return u === ke && o.documentElement.namespaceURI === ke ? o.createElement(r) : o.createElementNS(u, r);
        };
      }
      function Cr(r) {
        return function() {
          return this.ownerDocument.createElementNS(r.space, r.local);
        };
      }
      var ir = function(r) {
        var o = ze(r);
        return (o.local ? Cr : sl)(o);
      }, wu = function(r) {
        var o = typeof r == "function" ? r : ir(r);
        return this.select(function() {
          return this.appendChild(o.apply(this, arguments));
        });
      };
      function ku() {
        return null;
      }
      var xu = function(r, o) {
        var u = typeof r == "function" ? r : ir(r), a = o == null ? ku : typeof o == "function" ? o : oe(o);
        return this.select(function() {
          return this.insertBefore(u.apply(this, arguments), a.apply(this, arguments) || null);
        });
      };
      function Su() {
        var r = this.parentNode;
        r && r.removeChild(this);
      }
      var Cu = function() {
        return this.each(Su);
      };
      function al() {
        var r = this.cloneNode(!1), o = this.parentNode;
        return o ? o.insertBefore(r, this.nextSibling) : r;
      }
      function Mu() {
        var r = this.cloneNode(!0), o = this.parentNode;
        return o ? o.insertBefore(r, this.nextSibling) : r;
      }
      var pi = function(r) {
        return this.select(r ? Mu : al);
      }, cl = function(r) {
        return arguments.length ? this.property("__data__", r) : this.node().__data__;
      }, Mr = {}, uo = null;
      if (typeof document < "u") {
        var gi = document.documentElement;
        "onmouseenter" in gi || (Mr = { mouseenter: "mouseover", mouseleave: "mouseout" });
      }
      function so(r, o, u) {
        return r = mi(r, o, u), function(a) {
          var c = a.relatedTarget;
          c && (c === this || 8 & c.compareDocumentPosition(this)) || r.call(this, a);
        };
      }
      function mi(r, o, u) {
        return function(a) {
          var c = uo;
          uo = a;
          try {
            r.call(this, this.__data__, o, u);
          } finally {
            uo = c;
          }
        };
      }
      function fl(r) {
        return r.trim().split(/^|\s+/).map(function(o) {
          var u = "", a = o.indexOf(".");
          return a >= 0 && (u = o.slice(a + 1), o = o.slice(0, a)), { type: o, name: u };
        });
      }
      function na(r) {
        return function() {
          var o = this.__on;
          if (o) {
            for (var u, a = 0, c = -1, d = o.length; a < d; ++a) u = o[a], r.type && u.type !== r.type || u.name !== r.name ? o[++c] = u : this.removeEventListener(u.type, u.listener, u.capture);
            ++c ? o.length = c : delete this.__on;
          }
        };
      }
      function ra(r, o, u) {
        var a = Mr.hasOwnProperty(r.type) ? so : mi;
        return function(c, d, p) {
          var h, m = this.__on, y = a(o, d, p);
          if (m) {
            for (var x = 0, k = m.length; x < k; ++x) if ((h = m[x]).type === r.type && h.name === r.name) return this.removeEventListener(h.type, h.listener, h.capture), this.addEventListener(h.type, h.listener = y, h.capture = u), void (h.value = o);
          }
          this.addEventListener(r.type, y, u), h = { type: r.type, name: r.name, value: o, listener: y, capture: u }, m ? m.push(h) : this.__on = [h];
        };
      }
      var ia = function(r, o, u) {
        var a, c, d = fl(r + ""), p = d.length;
        if (!(arguments.length < 2)) {
          for (h = o ? ra : na, u == null && (u = !1), a = 0; a < p; ++a) this.each(h(d[a], o, u));
          return this;
        }
        var h = this.node().__on;
        if (h) {
          for (var m, y = 0, x = h.length; y < x; ++y) for (a = 0, m = h[y]; a < p; ++a) if ((c = d[a]).type === m.type && c.name === m.name) return m.value;
        }
      };
      function Vn(r, o, u) {
        var a = $o(r), c = a.CustomEvent;
        typeof c == "function" ? c = new c(o, u) : (c = a.document.createEvent("Event"), u ? (c.initEvent(o, u.bubbles, u.cancelable), c.detail = u.detail) : c.initEvent(o, !1, !1)), r.dispatchEvent(c);
      }
      function Au(r, o) {
        return function() {
          return Vn(this, r, o);
        };
      }
      function Eu(r, o) {
        return function() {
          return Vn(this, r, o.apply(this, arguments));
        };
      }
      var oa = function(r, o) {
        return this.each((typeof o == "function" ? Eu : Au)(r, o));
      }, Tu = [null];
      function Rt(r, o) {
        this._groups = r, this._parents = o;
      }
      Rt.prototype = { constructor: Rt, select: we, selectAll: Ue, filter: Pt, data: yt, enter: me, exit: Nt, join: Xt, merge: bn, order: Mn, sort: tr, call: zt, nodes: tn, node: hn, size: Ot, empty: Ke, each: G, attr: Pe, style: ro, property: du, classed: rl, text: hi, html: ta, raise: ol, lower: ul, append: wu, insert: xu, remove: Cu, clone: pi, datum: cl, on: ia, dispatch: oa };
      var it = function(r) {
        return typeof r == "string" ? new Rt([[document.querySelector(r)]], [document.documentElement]) : new Rt([[r]], Tu);
      }, Pu = function() {
        for (var r, o = uo; r = o.sourceEvent; ) o = r;
        return o;
      }, la = function(r, o) {
        var u = r.ownerSVGElement || r;
        if (u.createSVGPoint) {
          var a = u.createSVGPoint();
          return a.x = o.clientX, a.y = o.clientY, [(a = a.matrixTransform(r.getScreenCTM().inverse())).x, a.y];
        }
        var c = r.getBoundingClientRect();
        return [o.clientX - c.left - r.clientLeft, o.clientY - c.top - r.clientTop];
      }, An = function(r) {
        var o = Pu();
        return o.changedTouches && (o = o.changedTouches[0]), la(r, o);
      };
      function be() {
        var r, o, u = vi().unknown(void 0), a = u.domain, c = u.range, d = 0, p = 1, h = !1, m = 0, y = 0, x = 0.5;
        function k() {
          var S = a().length, B = p < d, Q = B ? p : d, J = B ? d : p;
          r = (J - Q) / Math.max(1, S - m + 2 * y), h && (r = Math.floor(r)), Q += (J - Q - r * (S - m)) * x, o = r * (1 - m), h && (Q = Math.round(Q), o = Math.round(o));
          var U = pn(S).map(function(D) {
            return Q + r * D;
          });
          return c(B ? U.reverse() : U);
        }
        return delete u.unknown, u.domain = function(S) {
          return arguments.length ? (a(S), k()) : a();
        }, u.range = function(S) {
          return arguments.length ? ([d, p] = S, d = +d, p = +p, k()) : [d, p];
        }, u.rangeRound = function(S) {
          return [d, p] = S, d = +d, p = +p, h = !0, k();
        }, u.bandwidth = function() {
          return o;
        }, u.step = function() {
          return r;
        }, u.round = function(S) {
          return arguments.length ? (h = !!S, k()) : h;
        }, u.padding = function(S) {
          return arguments.length ? (m = Math.min(1, y = +S), k()) : m;
        }, u.paddingInner = function(S) {
          return arguments.length ? (m = Math.min(1, S), k()) : m;
        }, u.paddingOuter = function(S) {
          return arguments.length ? (y = +S, k()) : y;
        }, u.align = function(S) {
          return arguments.length ? (x = Math.max(0, Math.min(1, S)), k()) : x;
        }, u.copy = function() {
          return be(a(), [d, p]).round(h).paddingInner(m).paddingOuter(y).align(x);
        }, or.apply(k(), arguments);
      }
      function Nu(r) {
        var o = r.copy;
        return r.padding = r.paddingOuter, delete r.paddingInner, delete r.paddingOuter, r.copy = function() {
          return Nu(o());
        }, r;
      }
      function dl() {
        return Nu(be.apply(null, arguments).paddingInner(1));
      }
      var hl = function(r, o) {
        return r < o ? -1 : r > o ? 1 : r >= o ? 0 : NaN;
      }, yi = function(r) {
        return r.length === 1 && (r = ua(r)), { left: function(o, u, a, c) {
          for (a == null && (a = 0), c == null && (c = o.length); a < c; ) {
            var d = a + c >>> 1;
            r(o[d], u) < 0 ? a = d + 1 : c = d;
          }
          return a;
        }, right: function(o, u, a, c) {
          for (a == null && (a = 0), c == null && (c = o.length); a < c; ) {
            var d = a + c >>> 1;
            r(o[d], u) > 0 ? c = d : a = d + 1;
          }
          return a;
        } };
      };
      function ua(r) {
        return function(o, u) {
          return hl(r(o), u);
        };
      }
      var Ou = yi(hl), ao = Ou.right, pn = function(r, o, u) {
        r = +r, o = +o, u = (c = arguments.length) < 2 ? (o = r, r = 0, 1) : c < 3 ? 1 : +u;
        for (var a = -1, c = 0 | Math.max(0, Math.ceil((o - r) / u)), d = new Array(c); ++a < c; ) d[a] = r + a * u;
        return d;
      }, pl = Math.sqrt(50), Ut = Math.sqrt(10), gl = Math.sqrt(2), sa = function(r, o, u) {
        var a, c, d, p, h = -1;
        if (u = +u, (r = +r) == (o = +o) && u > 0) return [r];
        if ((a = o < r) && (c = r, r = o, o = c), (p = co(r, o, u)) === 0 || !isFinite(p)) return [];
        if (p > 0) for (r = Math.ceil(r / p), o = Math.floor(o / p), d = new Array(c = Math.ceil(o - r + 1)); ++h < c; ) d[h] = (r + h) * p;
        else for (r = Math.floor(r * p), o = Math.ceil(o * p), d = new Array(c = Math.ceil(r - o + 1)); ++h < c; ) d[h] = (r - h) / p;
        return a && d.reverse(), d;
      };
      function co(r, o, u) {
        var a = (o - r) / Math.max(0, u), c = Math.floor(Math.log(a) / Math.LN10), d = a / Math.pow(10, c);
        return c >= 0 ? (d >= pl ? 10 : d >= Ut ? 5 : d >= gl ? 2 : 1) * Math.pow(10, c) : -Math.pow(10, -c) / (d >= pl ? 10 : d >= Ut ? 5 : d >= gl ? 2 : 1);
      }
      function Ar(r, o, u) {
        var a = Math.abs(o - r) / Math.max(0, u), c = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)), d = a / c;
        return d >= pl ? c *= 10 : d >= Ut ? c *= 5 : d >= gl && (c *= 2), o < r ? -c : c;
      }
      function or(r, o) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(r);
            break;
          default:
            this.range(o).domain(r);
        }
        return this;
      }
      const Er = Symbol("implicit");
      function vi() {
        var r = /* @__PURE__ */ new Map(), o = [], u = [], a = Er;
        function c(d) {
          var p = d + "", h = r.get(p);
          if (!h) {
            if (a !== Er) return a;
            r.set(p, h = o.push(d));
          }
          return u[(h - 1) % u.length];
        }
        return c.domain = function(d) {
          if (!arguments.length) return o.slice();
          o = [], r = /* @__PURE__ */ new Map();
          for (const p of d) {
            const h = p + "";
            r.has(h) || r.set(h, o.push(p));
          }
          return c;
        }, c.range = function(d) {
          return arguments.length ? (u = Array.from(d), c) : u.slice();
        }, c.unknown = function(d) {
          return arguments.length ? (a = d, c) : a;
        }, c.copy = function() {
          return vi(o, u).unknown(a);
        }, or.apply(c, arguments), c;
      }
      function aa(r) {
        var o = r.domain;
        return r.ticks = function(u) {
          var a = o();
          return sa(a[0], a[a.length - 1], u ?? 10);
        }, r.tickFormat = function(u, a) {
          var c = o();
          return Sa(c[0], c[c.length - 1], u ?? 10, a);
        }, r.nice = function(u) {
          u == null && (u = 10);
          var a, c = o(), d = 0, p = c.length - 1, h = c[d], m = c[p];
          return m < h && (a = h, h = m, m = a, a = d, d = p, p = a), (a = co(h, m, u)) > 0 ? (h = Math.floor(h / a) * a, m = Math.ceil(m / a) * a, a = co(h, m, u)) : a < 0 && (h = Math.ceil(h * a) / a, m = Math.floor(m * a) / a, a = co(h, m, u)), a > 0 ? (c[d] = Math.floor(h / a) * a, c[p] = Math.ceil(m / a) * a, o(c)) : a < 0 && (c[d] = Math.ceil(h * a) / a, c[p] = Math.floor(m * a) / a, o(c)), r;
        }, r;
      }
      function lr() {
        var r = Bu();
        return r.copy = function() {
          return Iu(r, lr());
        }, or.apply(r, arguments), aa(r);
      }
      function ur() {
      }
      var fo = function(r, o, u) {
        r.prototype = o.prototype = u, u.constructor = r;
      };
      function ho(r, o) {
        var u = Object.create(r.prototype);
        for (var a in o) u[a] = o[a];
        return u;
      }
      var En = 0.7, po = 1 / En, Xn = "\\s*([+-]?\\d+)\\s*", Se = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", nn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Du = /^#([0-9a-f]{3,8})$/, ml = new RegExp("^rgb\\(" + [Xn, Xn, Xn] + "\\)$"), Lu = new RegExp("^rgb\\(" + [nn, nn, nn] + "\\)$"), ju = new RegExp("^rgba\\(" + [Xn, Xn, Xn, Se] + "\\)$"), zu = new RegExp("^rgba\\(" + [nn, nn, nn, Se] + "\\)$"), yl = new RegExp("^hsl\\(" + [Se, nn, nn] + "\\)$"), go = new RegExp("^hsla\\(" + [Se, nn, nn, Se] + "\\)$"), Tn = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
      function Pn() {
        return this.rgb().formatHex();
      }
      function Zn() {
        return Pr(this).formatHsl();
      }
      function Tr() {
        return this.rgb().formatRgb();
      }
      function Nn(r) {
        var o, u;
        return r = (r + "").trim().toLowerCase(), (o = Du.exec(r)) ? (u = o[1].length, o = parseInt(o[1], 16), u === 6 ? On(o) : u === 3 ? new vt(o >> 8 & 15 | o >> 4 & 240, o >> 4 & 15 | 240 & o, (15 & o) << 4 | 15 & o, 1) : u === 8 ? new vt(o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, (255 & o) / 255) : u === 4 ? new vt(o >> 12 & 15 | o >> 8 & 240, o >> 8 & 15 | o >> 4 & 240, o >> 4 & 15 | 240 & o, ((15 & o) << 4 | 15 & o) / 255) : null) : (o = ml.exec(r)) ? new vt(o[1], o[2], o[3], 1) : (o = Lu.exec(r)) ? new vt(255 * o[1] / 100, 255 * o[2] / 100, 255 * o[3] / 100, 1) : (o = ju.exec(r)) ? Fu(o[1], o[2], o[3], o[4]) : (o = zu.exec(r)) ? Fu(255 * o[1] / 100, 255 * o[2] / 100, 255 * o[3] / 100, o[4]) : (o = yl.exec(r)) ? Uu(o[1], o[2] / 100, o[3] / 100, 1) : (o = go.exec(r)) ? Uu(o[1], o[2] / 100, o[3] / 100, o[4]) : Tn.hasOwnProperty(r) ? On(Tn[r]) : r === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
      }
      function On(r) {
        return new vt(r >> 16 & 255, r >> 8 & 255, 255 & r, 1);
      }
      function Fu(r, o, u, a) {
        return a <= 0 && (r = o = u = NaN), new vt(r, o, u, a);
      }
      function Ru(r) {
        return r instanceof ur || (r = Nn(r)), r ? new vt((r = r.rgb()).r, r.g, r.b, r.opacity) : new vt();
      }
      function sr(r, o, u, a) {
        return arguments.length === 1 ? Ru(r) : new vt(r, o, u, a ?? 1);
      }
      function vt(r, o, u, a) {
        this.r = +r, this.g = +o, this.b = +u, this.opacity = +a;
      }
      function vl() {
        return "#" + mo(this.r) + mo(this.g) + mo(this.b);
      }
      function wi() {
        var r = this.opacity;
        return ((r = isNaN(r) ? 1 : Math.max(0, Math.min(1, r))) === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (r === 1 ? ")" : ", " + r + ")");
      }
      function mo(r) {
        return ((r = Math.max(0, Math.min(255, Math.round(r) || 0))) < 16 ? "0" : "") + r.toString(16);
      }
      function Uu(r, o, u, a) {
        return a <= 0 ? r = o = u = NaN : u <= 0 || u >= 1 ? r = o = NaN : o <= 0 && (r = NaN), new wt(r, o, u, a);
      }
      function Pr(r) {
        if (r instanceof wt) return new wt(r.h, r.s, r.l, r.opacity);
        if (r instanceof ur || (r = Nn(r)), !r) return new wt();
        if (r instanceof wt) return r;
        var o = (r = r.rgb()).r / 255, u = r.g / 255, a = r.b / 255, c = Math.min(o, u, a), d = Math.max(o, u, a), p = NaN, h = d - c, m = (d + c) / 2;
        return h ? (p = o === d ? (u - a) / h + 6 * (u < a) : u === d ? (a - o) / h + 2 : (o - u) / h + 4, h /= m < 0.5 ? d + c : 2 - d - c, p *= 60) : h = m > 0 && m < 1 ? 0 : p, new wt(p, h, m, r.opacity);
      }
      function ki(r, o, u, a) {
        return arguments.length === 1 ? Pr(r) : new wt(r, o, u, a ?? 1);
      }
      function wt(r, o, u, a) {
        this.h = +r, this.s = +o, this.l = +u, this.opacity = +a;
      }
      function Nr(r, o, u) {
        return 255 * (r < 60 ? o + (u - o) * r / 60 : r < 180 ? u : r < 240 ? o + (u - o) * (240 - r) / 60 : o);
      }
      fo(ur, Nn, { copy: function(r) {
        return Object.assign(new this.constructor(), this, r);
      }, displayable: function() {
        return this.rgb().displayable();
      }, hex: Pn, formatHex: Pn, formatHsl: Zn, formatRgb: Tr, toString: Tr }), fo(vt, sr, ho(ur, { brighter: function(r) {
        return r = r == null ? po : Math.pow(po, r), new vt(this.r * r, this.g * r, this.b * r, this.opacity);
      }, darker: function(r) {
        return r = r == null ? En : Math.pow(En, r), new vt(this.r * r, this.g * r, this.b * r, this.opacity);
      }, rgb: function() {
        return this;
      }, displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: vl, formatHex: vl, formatRgb: wi, toString: wi })), fo(wt, ki, ho(ur, { brighter: function(r) {
        return r = r == null ? po : Math.pow(po, r), new wt(this.h, this.s, this.l * r, this.opacity);
      }, darker: function(r) {
        return r = r == null ? En : Math.pow(En, r), new wt(this.h, this.s, this.l * r, this.opacity);
      }, rgb: function() {
        var r = this.h % 360 + 360 * (this.h < 0), o = isNaN(r) || isNaN(this.s) ? 0 : this.s, u = this.l, a = u + (u < 0.5 ? u : 1 - u) * o, c = 2 * u - a;
        return new vt(Nr(r >= 240 ? r - 240 : r + 120, c, a), Nr(r, c, a), Nr(r < 120 ? r + 240 : r - 120, c, a), this.opacity);
      }, displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl: function() {
        var r = this.opacity;
        return ((r = isNaN(r) ? 1 : Math.max(0, Math.min(1, r))) === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (r === 1 ? ")" : ", " + r + ")");
      } }));
      function ca(r, o) {
        return function(u) {
          return r + u * o;
        };
      }
      function fa(r, o, u) {
        return r = Math.pow(r, u), o = Math.pow(o, u) - r, u = 1 / u, function(a) {
          return Math.pow(r + a * o, u);
        };
      }
      function wl(r) {
        return (r = +r) == 1 ? xi : function(o, u) {
          return u - o ? fa(o, u, r) : Si(isNaN(o) ? u : o);
        };
      }
      function xi(r, o) {
        var u = o - r;
        return u ? ca(r, u) : Si(isNaN(r) ? o : r);
      }
      var Si = function(r) {
        return function() {
          return r;
        };
      }, kl = function r(o) {
        var u = wl(o);
        function a(c, d) {
          var p = u((c = sr(c)).r, (d = sr(d)).r), h = u(c.g, d.g), m = u(c.b, d.b), y = xi(c.opacity, d.opacity);
          return function(x) {
            return c.r = p(x), c.g = h(x), c.b = m(x), c.opacity = y(x), c + "";
          };
        }
        return a.gamma = r, a;
      }(1), qn = function(r, o) {
        var u, a = o ? o.length : 0, c = r ? Math.min(a, r.length) : 0, d = new Array(c), p = new Array(a);
        for (u = 0; u < c; ++u) d[u] = Ci(r[u], o[u]);
        for (; u < a; ++u) p[u] = o[u];
        return function(h) {
          for (u = 0; u < c; ++u) p[u] = d[u](h);
          return p;
        };
      }, xl = function(r, o) {
        var u = /* @__PURE__ */ new Date();
        return o -= r = +r, function(a) {
          return u.setTime(r + o * a), u;
        };
      }, ar = function(r, o) {
        return o -= r = +r, function(u) {
          return r + o * u;
        };
      }, Wu = function(r, o) {
        var u, a = {}, c = {};
        for (u in r !== null && typeof r == "object" || (r = {}), o !== null && typeof o == "object" || (o = {}), o) u in r ? a[u] = Ci(r[u], o[u]) : c[u] = o[u];
        return function(d) {
          for (u in a) c[u] = a[u](d);
          return c;
        };
      }, Or = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dr = new RegExp(Or.source, "g");
      function Yu(r) {
        return function() {
          return r;
        };
      }
      function Wt(r) {
        return function(o) {
          return r(o) + "";
        };
      }
      var Lr = function(r, o) {
        var u, a, c, d = Or.lastIndex = Dr.lastIndex = 0, p = -1, h = [], m = [];
        for (r += "", o += ""; (u = Or.exec(r)) && (a = Dr.exec(o)); ) (c = a.index) > d && (c = o.slice(d, c), h[p] ? h[p] += c : h[++p] = c), (u = u[0]) === (a = a[0]) ? h[p] ? h[p] += a : h[++p] = a : (h[++p] = null, m.push({ i: p, x: ar(u, a) })), d = Dr.lastIndex;
        return d < o.length && (c = o.slice(d), h[p] ? h[p] += c : h[++p] = c), h.length < 2 ? m[0] ? Wt(m[0].x) : Yu(o) : (o = m.length, function(y) {
          for (var x, k = 0; k < o; ++k) h[(x = m[k]).i] = x.x(y);
          return h.join("");
        });
      }, Ci = function(r, o) {
        var u, a = typeof o;
        return o == null || a === "boolean" ? Si(o) : (a === "number" ? ar : a === "string" ? (u = Nn(o)) ? (o = u, kl) : Lr : o instanceof Nn ? kl : o instanceof Date ? xl : Array.isArray(o) ? qn : typeof o.valueOf != "function" && typeof o.toString != "function" || isNaN(o) ? Wu : ar)(r, o);
      }, Mi = function(r, o) {
        return o -= r = +r, function(u) {
          return Math.round(r + o * u);
        };
      }, da = function(r) {
        return function() {
          return r;
        };
      }, Sl = function(r) {
        return +r;
      }, yo = [0, 1];
      function gn(r) {
        return r;
      }
      function jr(r, o) {
        return (o -= r = +r) ? function(u) {
          return (u - r) / o;
        } : da(isNaN(o) ? NaN : 0.5);
      }
      function Hu(r, o) {
        var u;
        return r > o && (u = r, r = o, o = u), function(a) {
          return Math.max(r, Math.min(o, a));
        };
      }
      function ha(r, o, u) {
        var a = r[0], c = r[1], d = o[0], p = o[1];
        return c < a ? (a = jr(c, a), d = u(p, d)) : (a = jr(a, c), d = u(d, p)), function(h) {
          return d(a(h));
        };
      }
      function pa(r, o, u) {
        var a = Math.min(r.length, o.length) - 1, c = new Array(a), d = new Array(a), p = -1;
        for (r[a] < r[0] && (r = r.slice().reverse(), o = o.slice().reverse()); ++p < a; ) c[p] = jr(r[p], r[p + 1]), d[p] = u(o[p], o[p + 1]);
        return function(h) {
          var m = ao(r, h, 1, a) - 1;
          return d[m](c[m](h));
        };
      }
      function Iu(r, o) {
        return o.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown());
      }
      function Cl() {
        var r, o, u, a, c, d, p = yo, h = yo, m = Ci, y = gn;
        function x() {
          var S = Math.min(p.length, h.length);
          return y !== gn && (y = Hu(p[0], p[S - 1])), a = S > 2 ? pa : ha, c = d = null, k;
        }
        function k(S) {
          return isNaN(S = +S) ? u : (c || (c = a(p.map(r), h, m)))(r(y(S)));
        }
        return k.invert = function(S) {
          return y(o((d || (d = a(h, p.map(r), ar)))(S)));
        }, k.domain = function(S) {
          return arguments.length ? (p = Array.from(S, Sl), x()) : p.slice();
        }, k.range = function(S) {
          return arguments.length ? (h = Array.from(S), x()) : h.slice();
        }, k.rangeRound = function(S) {
          return h = Array.from(S), m = Mi, x();
        }, k.clamp = function(S) {
          return arguments.length ? (y = !!S || gn, x()) : y !== gn;
        }, k.interpolate = function(S) {
          return arguments.length ? (m = S, x()) : m;
        }, k.unknown = function(S) {
          return arguments.length ? (u = S, k) : u;
        }, function(S, B) {
          return r = S, o = B, x();
        };
      }
      function Bu() {
        return Cl()(gn, gn);
      }
      var vo, bu, Vu;
      function ga(r) {
        return vo = ka(r), bu = vo.format, Vu = vo.formatPrefix, vo;
      }
      var Ai = function(r, o) {
        if ((u = (r = o ? r.toExponential(o - 1) : r.toExponential()).indexOf("e")) < 0) return null;
        var u, a = r.slice(0, u);
        return [a.length > 1 ? a[0] + a.slice(2) : a, +r.slice(u + 1)];
      }, zr = function(r) {
        return (r = Ai(Math.abs(r))) ? r[1] : NaN;
      }, ma = function(r, o) {
        return function(u, a) {
          for (var c = u.length, d = [], p = 0, h = r[0], m = 0; c > 0 && h > 0 && (m + h + 1 > a && (h = Math.max(1, a - m)), d.push(u.substring(c -= h, c + h)), !((m += h + 1) > a)); ) h = r[p = (p + 1) % r.length];
          return d.reverse().join(o);
        };
      }, ya = function(r) {
        return function(o) {
          return o.replace(/[0-9]/g, function(u) {
            return r[+u];
          });
        };
      }, va = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Fr(r) {
        if (!(o = va.exec(r))) throw new Error("invalid format: " + r);
        var o;
        return new Ml({ fill: o[1], align: o[2], sign: o[3], symbol: o[4], zero: o[5], width: o[6], comma: o[7], precision: o[8] && o[8].slice(1), trim: o[9], type: o[10] });
      }
      function Ml(r) {
        this.fill = r.fill === void 0 ? " " : r.fill + "", this.align = r.align === void 0 ? ">" : r.align + "", this.sign = r.sign === void 0 ? "-" : r.sign + "", this.symbol = r.symbol === void 0 ? "" : r.symbol + "", this.zero = !!r.zero, this.width = r.width === void 0 ? void 0 : +r.width, this.comma = !!r.comma, this.precision = r.precision === void 0 ? void 0 : +r.precision, this.trim = !!r.trim, this.type = r.type === void 0 ? "" : r.type + "";
      }
      Fr.prototype = Ml.prototype, Ml.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
      };
      var wa = function(r) {
        e: for (var o, u = r.length, a = 1, c = -1; a < u; ++a) switch (r[a]) {
          case ".":
            c = o = a;
            break;
          case "0":
            c === 0 && (c = a), o = a;
            break;
          default:
            if (c > 0) {
              if (!+r[a]) break e;
              c = 0;
            }
        }
        return c > 0 ? r.slice(0, c) + r.slice(o + 1) : r;
      }, Xu, Zu = function(r, o) {
        var u, a = Ai(r, o);
        if (!a) return r + "";
        var c = a[0], d = a[1], p = d - (u = Xu = 3 * Math.max(-8, Math.min(8, Math.floor(d / 3))), u) + 1, h = c.length;
        return p === h ? c : p > h ? c + new Array(p - h + 1).join("0") : p > 0 ? c.slice(0, p) + "." + c.slice(p) : "0." + new Array(1 - p).join("0") + Ai(r, Math.max(0, o + p - 1))[0];
      }, qu = function(r, o) {
        var u = Ai(r, o);
        if (!u) return r + "";
        var a = u[0], c = u[1];
        return c < 0 ? "0." + new Array(-c).join("0") + a : a.length > c + 1 ? a.slice(0, c + 1) + "." + a.slice(c + 1) : a + new Array(c - a.length + 2).join("0");
      }, Gu = { "%": function(r, o) {
        return (100 * r).toFixed(o);
      }, b: function(r) {
        return Math.round(r).toString(2);
      }, c: function(r) {
        return r + "";
      }, d: function(r) {
        return Math.round(r).toString(10);
      }, e: function(r, o) {
        return r.toExponential(o);
      }, f: function(r, o) {
        return r.toFixed(o);
      }, g: function(r, o) {
        return r.toPrecision(o);
      }, o: function(r) {
        return Math.round(r).toString(8);
      }, p: function(r, o) {
        return qu(100 * r, o);
      }, r: qu, s: Zu, X: function(r) {
        return Math.round(r).toString(16).toUpperCase();
      }, x: function(r) {
        return Math.round(r).toString(16);
      } }, Qu = function(r) {
        return r;
      }, Ku = Array.prototype.map, Ju = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], ka = function(r) {
        var o = r.grouping === void 0 || r.thousands === void 0 ? Qu : ma(Ku.call(r.grouping, Number), r.thousands + ""), u = r.currency === void 0 ? "" : r.currency[0] + "", a = r.currency === void 0 ? "" : r.currency[1] + "", c = r.decimal === void 0 ? "." : r.decimal + "", d = r.numerals === void 0 ? Qu : ya(Ku.call(r.numerals, String)), p = r.percent === void 0 ? "%" : r.percent + "", h = r.minus === void 0 ? "-" : r.minus + "", m = r.nan === void 0 ? "NaN" : r.nan + "";
        function y(x) {
          var k = (x = Fr(x)).fill, S = x.align, B = x.sign, Q = x.symbol, J = x.zero, U = x.width, D = x.comma, H = x.precision, V = x.trim, q = x.type;
          q === "n" ? (D = !0, q = "g") : Gu[q] || (H === void 0 && (H = 12), V = !0, q = "g"), (J || k === "0" && S === "=") && (J = !0, k = "0", S = "=");
          var Z = Q === "$" ? u : Q === "#" && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "", j = Q === "$" ? a : /[%p]/.test(q) ? p : "", P = Gu[q], b = /[defgprs%]/.test(q);
          function E(N) {
            var L, z, ie, F = Z, ce = j;
            if (q === "c") ce = P(N) + ce, N = "";
            else {
              var Ce = (N = +N) < 0;
              if (N = isNaN(N) ? m : P(Math.abs(N), H), V && (N = wa(N)), Ce && +N == 0 && (Ce = !1), F = (Ce ? B === "(" ? B : h : B === "-" || B === "(" ? "" : B) + F, ce = (q === "s" ? Ju[8 + Xu / 3] : "") + ce + (Ce && B === "(" ? ")" : ""), b) {
                for (L = -1, z = N.length; ++L < z; ) if (48 > (ie = N.charCodeAt(L)) || ie > 57) {
                  ce = (ie === 46 ? c + N.slice(L + 1) : N.slice(L)) + ce, N = N.slice(0, L);
                  break;
                }
              }
            }
            D && !J && (N = o(N, 1 / 0));
            var Fe = F.length + N.length + ce.length, Ge = Fe < U ? new Array(U - Fe + 1).join(k) : "";
            switch (D && J && (N = o(Ge + N, Ge.length ? U - ce.length : 1 / 0), Ge = ""), S) {
              case "<":
                N = F + N + ce + Ge;
                break;
              case "=":
                N = F + Ge + N + ce;
                break;
              case "^":
                N = Ge.slice(0, Fe = Ge.length >> 1) + F + N + ce + Ge.slice(Fe);
                break;
              default:
                N = Ge + F + N + ce;
            }
            return d(N);
          }
          return H = H === void 0 ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, H)) : Math.max(0, Math.min(20, H)), E.toString = function() {
            return x + "";
          }, E;
        }
        return { format: y, formatPrefix: function(x, k) {
          var S = y(((x = Fr(x)).type = "f", x)), B = 3 * Math.max(-8, Math.min(8, Math.floor(zr(k) / 3))), Q = Math.pow(10, -B), J = Ju[8 + B / 3];
          return function(U) {
            return S(Q * U) + J;
          };
        } };
      };
      ga({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], minus: "-" });
      var xa = function(r) {
        return Math.max(0, -zr(Math.abs(r)));
      }, Al = function(r, o) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(zr(o) / 3))) - zr(Math.abs(r)));
      }, Ei = function(r, o) {
        return r = Math.abs(r), o = Math.abs(o) - r, Math.max(0, zr(o) - zr(r)) + 1;
      }, Sa = function(r, o, u, a) {
        var c, d = Ar(r, o, u);
        switch ((a = Fr(a ?? ",f")).type) {
          case "s":
            var p = Math.max(Math.abs(r), Math.abs(o));
            return a.precision != null || isNaN(c = Al(d, p)) || (a.precision = c), Vu(a, p);
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            a.precision != null || isNaN(c = Ei(d, Math.max(Math.abs(r), Math.abs(o)))) || (a.precision = c - (a.type === "e"));
            break;
          case "f":
          case "%":
            a.precision != null || isNaN(c = xa(d)) || (a.precision = c - 2 * (a.type === "%"));
        }
        return bu(a);
      }, wo = Array.prototype.slice, _u = function(r) {
        return r;
      }, ko = 1, xo = 2, So = 3, mn = 4, $u = 1e-6;
      function Ca(r) {
        return "translate(" + (r + 0.5) + ",0)";
      }
      function Ma(r) {
        return "translate(0," + (r + 0.5) + ")";
      }
      function es(r) {
        return function(o) {
          return +r(o);
        };
      }
      function ts(r) {
        var o = Math.max(0, r.bandwidth() - 1) / 2;
        return r.round() && (o = Math.round(o)), function(u) {
          return +r(u) + o;
        };
      }
      function Ti() {
        return !this.__axis;
      }
      function Rr(r, o) {
        var u = [], a = null, c = null, d = 6, p = 6, h = 3, m = r === ko || r === mn ? -1 : 1, y = r === mn || r === xo ? "x" : "y", x = r === ko || r === So ? Ca : Ma;
        function k(S) {
          var B = a ?? (o.ticks ? o.ticks.apply(o, u) : o.domain()), Q = c ?? (o.tickFormat ? o.tickFormat.apply(o, u) : _u), J = Math.max(d, 0) + h, U = o.range(), D = +U[0] + 0.5, H = +U[U.length - 1] + 0.5, V = (o.bandwidth ? ts : es)(o.copy()), q = S.selection ? S.selection() : S, Z = q.selectAll(".domain").data([null]), j = q.selectAll(".tick").data(B, o).order(), P = j.exit(), b = j.enter().append("g").attr("class", "tick"), E = j.select("line"), N = j.select("text");
          Z = Z.merge(Z.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), j = j.merge(b), E = E.merge(b.append("line").attr("stroke", "currentColor").attr(y + "2", m * d)), N = N.merge(b.append("text").attr("fill", "currentColor").attr(y, m * J).attr("dy", r === ko ? "0em" : r === So ? "0.71em" : "0.32em")), S !== q && (Z = Z.transition(S), j = j.transition(S), E = E.transition(S), N = N.transition(S), P = P.transition(S).attr("opacity", $u).attr("transform", function(L) {
            return isFinite(L = V(L)) ? x(L) : this.getAttribute("transform");
          }), b.attr("opacity", $u).attr("transform", function(L) {
            var z = this.parentNode.__axis;
            return x(z && isFinite(z = z(L)) ? z : V(L));
          })), P.remove(), Z.attr("d", r === mn || r == xo ? p ? "M" + m * p + "," + D + "H0.5V" + H + "H" + m * p : "M0.5," + D + "V" + H : p ? "M" + D + "," + m * p + "V0.5H" + H + "V" + m * p : "M" + D + ",0.5H" + H), j.attr("opacity", 1).attr("transform", function(L) {
            return x(V(L));
          }), E.attr(y + "2", m * d), N.attr(y, m * J).text(Q), q.filter(Ti).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", r === xo ? "start" : r === mn ? "end" : "middle"), q.each(function() {
            this.__axis = V;
          });
        }
        return k.scale = function(S) {
          return arguments.length ? (o = S, k) : o;
        }, k.ticks = function() {
          return u = wo.call(arguments), k;
        }, k.tickArguments = function(S) {
          return arguments.length ? (u = S == null ? [] : wo.call(S), k) : u.slice();
        }, k.tickValues = function(S) {
          return arguments.length ? (a = S == null ? null : wo.call(S), k) : a && a.slice();
        }, k.tickFormat = function(S) {
          return arguments.length ? (c = S, k) : c;
        }, k.tickSize = function(S) {
          return arguments.length ? (d = p = +S, k) : d;
        }, k.tickSizeInner = function(S) {
          return arguments.length ? (d = +S, k) : d;
        }, k.tickSizeOuter = function(S) {
          return arguments.length ? (p = +S, k) : p;
        }, k.tickPadding = function(S) {
          return arguments.length ? (h = +S, k) : h;
        }, k;
      }
      function Aa(r) {
        return Rr(So, r);
      }
      function Co(r) {
        return Rr(mn, r);
      }
      var yn = { xAxis: (r, { xScale: o, tickCount: u, moveDown: a, fontFamily: c, unxkcdify: d, stroke: p }) => {
        r.append("g").attr("transform", `translate(0,${a})`).call(Aa(o).tickSize(0).tickPadding(6).ticks(u)), r.selectAll(".domain").attr("filter", d ? null : "url(#xkcdify)").style("stroke", p), r.selectAll(".tick > text").style("font-family", c).style("font-size", "16").style("fill", p);
      }, yAxis: (r, { yScale: o, tickCount: u, fontFamily: a, unxkcdify: c, stroke: d }) => {
        r.append("g").call(Co(o).tickSize(1).tickPadding(10).ticks(u, "s")), r.selectAll(".domain").attr("filter", c ? null : "url(#xkcdify)").style("stroke", d), r.selectAll(".tick > text").style("font-family", a).style("font-size", "16").style("fill", d);
      } }, kt = { title: (r, o, u) => {
        r.append("text").style("font-size", "20").style("font-weight", "bold").style("fill", u).attr("x", "50%").attr("y", 30).attr("text-anchor", "middle").text(o);
      }, xLabel: (r, o, u) => {
        r.append("text").style("font-size", 17).style("fill", u).attr("x", "50%").attr("y", r.attr("height") - 10).attr("text-anchor", "middle").text(o);
      }, yLabel: (r, o, u) => {
        r.append("text").attr("text-anchor", "end").attr("dy", ".75em").attr("transform", "rotate(-90)").style("font-size", 17).style("fill", u).text(o).attr("y", 6).call((a) => {
          const c = a.node().getComputedTextLength();
          a.attr("x", 0 - r.attr("height") / 2 + c / 2);
        });
      } };
      const he = { positionType: { upLeft: 1, upRight: 2, downLeft: 3, downRight: 4 } };
      class Ur {
        constructor({ parent: o, title: u, items: a, position: c, unxkcdify: d, backgroundColor: p, strokeColor: h }) {
          this.title = u, this.items = a, this.position = c, this.filter = d ? null : "url(#xkcdify)", this.backgroundColor = p, this.strokeColor = h, this.svg = o.append("svg").attr("x", this._getUpLeftX()).attr("y", this._getUpLeftY()).style("visibility", "hidden"), this.tipBackground = this.svg.append("rect").style("fill", this.backgroundColor).attr("fill-opacity", 0.9).attr("stroke", h).attr("stroke-width", 2).attr("rx", 5).attr("ry", 5).attr("filter", this.filter).attr("width", this._getBackgroundWidth()).attr("height", this._getBackgroundHeight()).attr("x", 5).attr("y", 5), this.tipTitle = this.svg.append("text").style("font-size", 15).style("font-weight", "bold").style("fill", this.strokeColor).attr("x", 15).attr("y", 25).text(u), this.tipItems = a.map((m, y) => this._generateTipItem(m, y));
        }
        show() {
          this.svg.style("visibility", "visible");
        }
        hide() {
          this.svg.style("visibility", "hidden");
        }
        update({ title: o, items: u, position: a }) {
          if (o && o !== this.title && (this.title = o, this.tipTitle.text(o)), u && JSON.stringify(u) !== JSON.stringify(this.items)) {
            this.items = u, this.tipItems.forEach((d) => d.svg.remove()), this.tipItems = this.items.map((d, p) => this._generateTipItem(d, p));
            const c = Math.max(...this.tipItems.map((d) => d.width), this.tipTitle.node().getBBox().width);
            this.tipBackground.attr("width", c + 15).attr("height", this._getBackgroundHeight());
          }
          a && (this.position = a, this.svg.attr("x", this._getUpLeftX()), this.svg.attr("y", this._getUpLeftY()));
        }
        _generateTipItem(o, u) {
          const a = this.svg.append("svg");
          a.append("rect").style("fill", o.color).attr("width", 8).attr("height", 8).attr("rx", 2).attr("ry", 2).attr("filter", this.filter).attr("x", 15).attr("y", 37 + 20 * u), a.append("text").style("font-size", "15").style("fill", this.strokeColor).attr("x", 27).attr("y", 37 + 20 * u + 8).text(o.text);
          const c = a.node().getBBox();
          return { svg: a, width: c.width + 15, height: c.height + 10 };
        }
        _getBackgroundWidth() {
          const o = this.items.reduce((u, a) => u > a.text.length ? u : a.text.length, 0);
          return 7.4 * Math.max(o, this.title.length) + 25;
        }
        _getBackgroundHeight() {
          return 20 * (this.items.length + 1) + 10;
        }
        _getUpLeftX() {
          return this.position.type === he.positionType.upRight || this.position.type === he.positionType.downRight ? this.position.x : this.position.x - this._getBackgroundWidth() - 20;
        }
        _getUpLeftY() {
          return this.position.type === he.positionType.downLeft || this.position.type === he.positionType.downRight ? this.position.y : this.position.y - this._getBackgroundHeight() - 20;
        }
      }
      function Wr(r) {
        r.append("defs").append("style").attr("type", "text/css").text(`@font-face {
      font-family: "xkcd";
      src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
    }`);
      }
      function Yr(r) {
        r.append("filter").attr("id", "xkcdify").attr("filterUnits", "userSpaceOnUse").attr("x", -5).attr("y", -5).attr("width", "100%").attr("height", "100%").call((o) => o.append("feTurbulence").attr("type", "fractalNoise").attr("baseFrequency", "0.05").attr("result", "noise")).call((o) => o.append("feDisplacementMap").attr("scale", "5").attr("xChannelSelector", "R").attr("yChannelSelector", "G").attr("in", "SourceGraphic").attr("in2", "noise")), r.append("filter").attr("id", "xkcdify-pie").call((o) => o.append("feTurbulence").attr("type", "fractalNoise").attr("baseFrequency", "0.05").attr("result", "noise")).call((o) => o.append("feDisplacementMap").attr("scale", "5").attr("xChannelSelector", "R").attr("yChannelSelector", "G").attr("in", "SourceGraphic").attr("in2", "noise"));
      }
      var Hr = ["#dd4528", "#28a3dd", "#f3db52", "#ed84b5", "#4ab74e", "#9179c0", "#8e6d5a", "#f19839", "#949494"];
      const Je = { top: 50, right: 30, bottom: 50, left: 50 };
      class Pi {
        constructor(o, { title: u, xLabel: a, yLabel: c, data: { labels: d, datasets: p }, options: h }) {
          this.options = Oe({ unxkcdify: !1, yTickCount: 3, dataColors: Hr, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white" }, h), u && (this.title = u, Je.top = 60), a && (this.xLabel = a, Je.bottom = 50), c && (this.yLabel = c, Je.left = 70), this.data = { labels: d, datasets: p }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = it(o).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", o.parentElement.clientWidth).attr("height", Math.min(2 * o.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${Je.left},${Je.top})`), this.width = this.svgEl.attr("width") - Je.left - Je.right, this.height = this.svgEl.attr("height") - Je.top - Je.bottom, Wr(this.svgEl), Yr(this.svgEl), this.render();
        }
        render() {
          this.title && kt.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && kt.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && kt.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const o = new Ur({ parent: this.svgEl, title: "tooltip", items: [{ color: "red", text: "weweyang: 12" }, { color: "blue", text: "timqian: 13" }], position: { x: 30, y: 30, type: he.positionType.upRight }, unxkcdify: this.options.unxkcdify, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor }), u = be().range([0, this.width]).domain(this.data.labels).padding(0.4), a = this.data.datasets.reduce((p, h) => p.concat(h.data), []), c = lr().domain([0, Math.max(...a)]).range([this.height, 0]), d = this.chart.append("g");
          yn.xAxis(d, { xScale: u, tickCount: 3, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), yn.yAxis(d, { yScale: c, tickCount: this.options.yTickCount || 3, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), d.selectAll(".xkcd-chart-bar").data(this.data.datasets[0].data).enter().append("rect").attr("class", "xkcd-chart-bar").attr("x", (p, h) => u(this.data.labels[h])).attr("width", u.bandwidth()).attr("y", (p) => c(p)).attr("height", (p) => this.height - c(p)).attr("fill", "none").attr("pointer-events", "all").attr("stroke", this.options.strokeColor).attr("stroke-width", 3).attr("rx", 2).attr("filter", this.filter).on("mouseover", (p, h, m) => {
            it(m[h]).attr("fill", this.options.dataColors[h]), o.show();
          }).on("mouseout", (p, h, m) => {
            it(m[h]).attr("fill", "none"), o.hide();
          }).on("mousemove", (p, h, m) => {
            const y = An(m[h])[0] + Je.left + 10, x = An(m[h])[1] + Je.top + 10;
            let k = he.positionType.downRight;
            y > this.width / 2 && x < this.height / 2 ? k = he.positionType.downLeft : y > this.width / 2 && x > this.height / 2 ? k = he.positionType.upLeft : y < this.width / 2 && x > this.height / 2 && (k = he.positionType.upRight), o.update({ title: this.data.labels[h], items: [{ color: this.options.dataColors[h], text: `${this.data.datasets[0].label || ""}: ${p}` }], position: { x: y, y: x, type: k } });
          });
        }
        update() {
        }
      }
      function El(r, o) {
        var u = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          o && (a = a.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable;
          })), u.push.apply(u, a);
        }
        return u;
      }
      function rs(r) {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o] != null ? arguments[o] : {};
          o % 2 ? El(u, !0).forEach(function(a) {
            is(r, a, u[a]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : El(u).forEach(function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(u, a));
          });
        }
        return r;
      }
      function is(r, o, u) {
        return o in r ? Object.defineProperty(r, o, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = u, r;
      }
      async function Ir(r, { items: o, position: u, unxkcdify: a, parentWidth: c, parentHeight: d, strokeColor: p, backgroundColor: h }) {
        const m = a ? null : "url(#xkcdify)", y = r.append("svg"), x = y.append("svg"), k = y.append("svg");
        o.forEach((D, H) => {
          k.append("rect").style("fill", D.color).attr("width", 8).attr("height", 8).attr("filter", m).attr("rx", 2).attr("ry", 2).attr("x", 15).attr("y", 17 + 20 * H), k.append("text").style("font-size", "15").style("fill", p).attr("x", 27).attr("y", 17 + 20 * H + 8).text(D.text);
        }), await new Promise((D) => setTimeout(D, 10));
        const S = k.node().getBBox(), B = S.width + 15, Q = S.height + 10;
        let J = 0, U = 0;
        u !== he.positionType.downLeft && u !== he.positionType.downRight || (U = d - Q - 13), u !== he.positionType.upRight && u !== he.positionType.downRight || (J = c - B - 13), x.append("rect").style("fill", h).attr("filter", m).attr("fill-opacity", 0.85).attr("stroke", p).attr("stroke-width", 2).attr("width", B).attr("height", Q).attr("rx", 5).attr("ry", 5).attr("x", 8).attr("y", 5), y.attr("x", J).attr("y", U);
      }
      const Yt = { top: 50, right: 30, bottom: 50, left: 50 };
      class Na {
        constructor(o, { title: u, xLabel: a, yLabel: c, data: { labels: d, datasets: p }, options: h }) {
          this.options = rs({ unxkcdify: !1, yTickCount: 3, dataColors: Hr, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", legendPosition: he.positionType.upLeft, showLegend: !0 }, h), u && (this.title = u, Yt.top = 60), a && (this.xLabel = a, Yt.bottom = 50), c && (this.yLabel = c, Yt.left = 70), this.data = { labels: d, datasets: p }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = it(o).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", o.parentElement.clientWidth).attr("height", Math.min(2 * o.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${Yt.left},${Yt.top})`), this.width = this.svgEl.attr("width") - Yt.left - Yt.right, this.height = this.svgEl.attr("height") - Yt.top - Yt.bottom, Wr(this.svgEl), Yr(this.svgEl), this.render();
        }
        render() {
          this.title && kt.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && kt.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && kt.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const o = new Ur({ parent: this.svgEl, title: "tooltip", items: [{ color: "red", text: "weweyang: 12" }, { color: "blue", text: "timqian: 13" }], position: { x: 30, y: 30, type: he.positionType.upRight }, unxkcdify: this.options.unxkcdify, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor }), u = be().range([0, this.width]).domain(this.data.labels).padding(0.4), a = this.data.datasets.reduce((y, x) => x.data.map((k, S) => (y[S] || 0) + k), []), c = lr().domain([0, Math.max(...a)]).range([this.height, 0]), d = this.chart.append("g");
          yn.xAxis(d, { xScale: u, tickCount: 3, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), yn.yAxis(d, { yScale: c, tickCount: this.options.yTickCount || 3, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor });
          const p = this.data.datasets.reduce((y, x) => y.concat(x.data), []), h = this.data.datasets[0].data.length, m = this.data.datasets.reduce((y, x, k) => (k > 0 ? y.push(x.data.map((S, B) => this.data.datasets[k - 1].data[B] + y[k - 1][B])) : y.push(new Array(x.data.length).fill(0)), y), []).flat();
          if (d.selectAll(".xkcd-chart-stacked-bar").data(p).enter().append("rect").attr("class", "xkcd-chart-stacked-bar").attr("x", (y, x) => u(this.data.labels[x % h])).attr("width", u.bandwidth()).attr("y", (y, x) => c(y + m[x])).attr("height", (y) => this.height - c(y)).attr("fill", (y, x) => this.options.dataColors[Math.floor(x / h)]).attr("pointer-events", "all").attr("stroke", this.options.strokeColor).attr("stroke-width", 3).attr("rx", 2).attr("filter", this.filter).on("mouseover", () => o.show()).on("mouseout", () => o.hide()).on("mousemove", (y, x, k) => {
            const S = An(k[x])[0] + Yt.left + 10, B = An(k[x])[1] + Yt.top + 10, Q = this.data.datasets.map((U, D) => ({ color: this.options.dataColors[D], text: `${this.data.datasets[D].label || ""}: ${this.data.datasets[D].data[x % h]}` })).reverse();
            let J = he.positionType.downRight;
            S > this.width / 2 && B < this.height / 2 ? J = he.positionType.downLeft : S > this.width / 2 && B > this.height / 2 ? J = he.positionType.upLeft : S < this.width / 2 && B > this.height / 2 && (J = he.positionType.upRight), o.update({ title: this.data.labels[x], items: Q, position: { x: S, y: B, type: J } });
          }), this.options.showLegend) {
            const y = this.data.datasets.map((x, k) => ({ color: this.options.dataColors[k], text: `${this.data.datasets[k].label || ""}` })).reverse();
            Ir(d, { items: y, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
          }
        }
        update() {
        }
      }
      function os(r, o) {
        var u = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          o && (a = a.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable;
          })), u.push.apply(u, a);
        }
        return u;
      }
      function Br(r) {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o] != null ? arguments[o] : {};
          o % 2 ? os(u, !0).forEach(function(a) {
            Tl(r, a, u[a]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : os(u).forEach(function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(u, a));
          });
        }
        return r;
      }
      function Tl(r, o, u) {
        return o in r ? Object.defineProperty(r, o, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = u, r;
      }
      var Xe = function(r) {
        return function() {
          return r;
        };
      }, Pl = function(r, o) {
        return o < r ? -1 : o > r ? 1 : o >= r ? 0 : NaN;
      }, ls = function(r) {
        return r;
      }, Ni = Math.abs, _e = Math.atan2, Dn = Math.cos, us = Math.max, br = Math.min, rn = Math.sin, cr = Math.sqrt, xt = 1e-12, Vr = Math.PI, Oi = Vr / 2, Di = 2 * Vr;
      function Gn(r) {
        return r > 1 ? 0 : r < -1 ? Vr : Math.acos(r);
      }
      function Mo(r) {
        return r >= 1 ? Oi : r <= -1 ? -Oi : Math.asin(r);
      }
      var Nl = function() {
        var r = ls, o = Pl, u = null, a = Xe(0), c = Xe(Di), d = Xe(0);
        function p(h) {
          var m, y, x, k, S, B = h.length, Q = 0, J = new Array(B), U = new Array(B), D = +a.apply(this, arguments), H = Math.min(Di, Math.max(-Di, c.apply(this, arguments) - D)), V = Math.min(Math.abs(H) / B, d.apply(this, arguments)), q = V * (H < 0 ? -1 : 1);
          for (m = 0; m < B; ++m) (S = U[J[m] = m] = +r(h[m], m, h)) > 0 && (Q += S);
          for (o != null ? J.sort(function(Z, j) {
            return o(U[Z], U[j]);
          }) : u != null && J.sort(function(Z, j) {
            return u(h[Z], h[j]);
          }), m = 0, x = Q ? (H - B * q) / Q : 0; m < B; ++m, D = k) y = J[m], k = D + ((S = U[y]) > 0 ? S * x : 0) + q, U[y] = { data: h[y], index: m, value: S, startAngle: D, endAngle: k, padAngle: V };
          return U;
        }
        return p.value = function(h) {
          return arguments.length ? (r = typeof h == "function" ? h : Xe(+h), p) : r;
        }, p.sortValues = function(h) {
          return arguments.length ? (o = h, u = null, p) : o;
        }, p.sort = function(h) {
          return arguments.length ? (u = h, o = null, p) : u;
        }, p.startAngle = function(h) {
          return arguments.length ? (a = typeof h == "function" ? h : Xe(+h), p) : a;
        }, p.endAngle = function(h) {
          return arguments.length ? (c = typeof h == "function" ? h : Xe(+h), p) : c;
        }, p.padAngle = function(h) {
          return arguments.length ? (d = typeof h == "function" ? h : Xe(+h), p) : d;
        }, p;
      };
      function Oa(r) {
        return r.innerRadius;
      }
      function Da(r) {
        return r.outerRadius;
      }
      function Li(r) {
        return r.startAngle;
      }
      function La(r) {
        return r.endAngle;
      }
      function ss(r) {
        return r && r.padAngle;
      }
      function as(r, o, u, a, c, d, p, h) {
        var m = u - r, y = a - o, x = p - c, k = h - d, S = k * m - x * y;
        if (!(S * S < xt)) return [r + (S = (x * (o - d) - k * (r - c)) / S) * m, o + S * y];
      }
      function De(r, o, u, a, c, d, p) {
        var h = r - u, m = o - a, y = (p ? d : -d) / cr(h * h + m * m), x = y * m, k = -y * h, S = r + x, B = o + k, Q = u + x, J = a + k, U = (S + Q) / 2, D = (B + J) / 2, H = Q - S, V = J - B, q = H * H + V * V, Z = c - d, j = S * J - Q * B, P = (V < 0 ? -1 : 1) * cr(us(0, Z * Z * q - j * j)), b = (j * V - H * P) / q, E = (-j * H - V * P) / q, N = (j * V + H * P) / q, L = (-j * H + V * P) / q, z = b - U, ie = E - D, F = N - U, ce = L - D;
        return z * z + ie * ie > F * F + ce * ce && (b = N, E = L), { cx: b, cy: E, x01: -x, y01: -k, x11: b * (c / Z - 1), y11: E * (c / Z - 1) };
      }
      var ji = Math.PI, Xr = 2 * ji, on = 1e-6, cs = Xr - on;
      function zi() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
      }
      function fr() {
        return new zi();
      }
      zi.prototype = fr.prototype = { constructor: zi, moveTo: function(r, o) {
        this._ += "M" + (this._x0 = this._x1 = +r) + "," + (this._y0 = this._y1 = +o);
      }, closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function(r, o) {
        this._ += "L" + (this._x1 = +r) + "," + (this._y1 = +o);
      }, quadraticCurveTo: function(r, o, u, a) {
        this._ += "Q" + +r + "," + +o + "," + (this._x1 = +u) + "," + (this._y1 = +a);
      }, bezierCurveTo: function(r, o, u, a, c, d) {
        this._ += "C" + +r + "," + +o + "," + +u + "," + +a + "," + (this._x1 = +c) + "," + (this._y1 = +d);
      }, arcTo: function(r, o, u, a, c) {
        r = +r, o = +o, u = +u, a = +a, c = +c;
        var d = this._x1, p = this._y1, h = u - r, m = a - o, y = d - r, x = p - o, k = y * y + x * x;
        if (c < 0) throw new Error("negative radius: " + c);
        if (this._x1 === null) this._ += "M" + (this._x1 = r) + "," + (this._y1 = o);
        else if (k > on)
          if (Math.abs(x * h - m * y) > on && c) {
            var S = u - d, B = a - p, Q = h * h + m * m, J = S * S + B * B, U = Math.sqrt(Q), D = Math.sqrt(k), H = c * Math.tan((ji - Math.acos((Q + k - J) / (2 * U * D))) / 2), V = H / D, q = H / U;
            Math.abs(V - 1) > on && (this._ += "L" + (r + V * y) + "," + (o + V * x)), this._ += "A" + c + "," + c + ",0,0," + +(x * S > y * B) + "," + (this._x1 = r + q * h) + "," + (this._y1 = o + q * m);
          } else this._ += "L" + (this._x1 = r) + "," + (this._y1 = o);
      }, arc: function(r, o, u, a, c, d) {
        r = +r, o = +o, d = !!d;
        var p = (u = +u) * Math.cos(a), h = u * Math.sin(a), m = r + p, y = o + h, x = 1 ^ d, k = d ? a - c : c - a;
        if (u < 0) throw new Error("negative radius: " + u);
        this._x1 === null ? this._ += "M" + m + "," + y : (Math.abs(this._x1 - m) > on || Math.abs(this._y1 - y) > on) && (this._ += "L" + m + "," + y), u && (k < 0 && (k = k % Xr + Xr), k > cs ? this._ += "A" + u + "," + u + ",0,1," + x + "," + (r - p) + "," + (o - h) + "A" + u + "," + u + ",0,1," + x + "," + (this._x1 = m) + "," + (this._y1 = y) : k > on && (this._ += "A" + u + "," + u + ",0," + +(k >= ji) + "," + x + "," + (this._x1 = r + u * Math.cos(c)) + "," + (this._y1 = o + u * Math.sin(c))));
      }, rect: function(r, o, u, a) {
        this._ += "M" + (this._x0 = this._x1 = +r) + "," + (this._y0 = this._y1 = +o) + "h" + +u + "v" + +a + "h" + -u + "Z";
      }, toString: function() {
        return this._;
      } };
      var Ao = function() {
        var r = Oa, o = Da, u = Xe(0), a = null, c = Li, d = La, p = ss, h = null;
        function m() {
          var y, x, k = +r.apply(this, arguments), S = +o.apply(this, arguments), B = c.apply(this, arguments) - Oi, Q = d.apply(this, arguments) - Oi, J = Ni(Q - B), U = Q > B;
          if (h || (h = y = fr()), S < k && (x = S, S = k, k = x), S > xt)
            if (J > Di - xt) h.moveTo(S * Dn(B), S * rn(B)), h.arc(0, 0, S, B, Q, !U), k > xt && (h.moveTo(k * Dn(Q), k * rn(Q)), h.arc(0, 0, k, Q, B, U));
            else {
              var D, H, V = B, q = Q, Z = B, j = Q, P = J, b = J, E = p.apply(this, arguments) / 2, N = E > xt && (a ? +a.apply(this, arguments) : cr(k * k + S * S)), L = br(Ni(S - k) / 2, +u.apply(this, arguments)), z = L, ie = L;
              if (N > xt) {
                var F = Mo(N / k * rn(E)), ce = Mo(N / S * rn(E));
                (P -= 2 * F) > xt ? (Z += F *= U ? 1 : -1, j -= F) : (P = 0, Z = j = (B + Q) / 2), (b -= 2 * ce) > xt ? (V += ce *= U ? 1 : -1, q -= ce) : (b = 0, V = q = (B + Q) / 2);
              }
              var Ce = S * Dn(V), Fe = S * rn(V), Ge = k * Dn(j), cn = k * rn(j);
              if (L > xt) {
                var pt, Me = S * Dn(q), Re = S * rn(q), $n = k * Dn(Z), Yn = k * rn(Z);
                if (J < Vr && (pt = as(Ce, Fe, $n, Yn, Me, Re, Ge, cn))) {
                  var Xo = Ce - pt[0], Zo = Fe - pt[1], qo = Me - pt[0], Ki = Re - pt[1], nu = 1 / rn(Gn((Xo * qo + Zo * Ki) / (cr(Xo * Xo + Zo * Zo) * cr(qo * qo + Ki * Ki))) / 2), Go = cr(pt[0] * pt[0] + pt[1] * pt[1]);
                  z = br(L, (k - Go) / (nu - 1)), ie = br(L, (S - Go) / (nu + 1));
                }
              }
              b > xt ? ie > xt ? (D = De($n, Yn, Ce, Fe, S, ie, U), H = De(Me, Re, Ge, cn, S, ie, U), h.moveTo(D.cx + D.x01, D.cy + D.y01), ie < L ? h.arc(D.cx, D.cy, ie, _e(D.y01, D.x01), _e(H.y01, H.x01), !U) : (h.arc(D.cx, D.cy, ie, _e(D.y01, D.x01), _e(D.y11, D.x11), !U), h.arc(0, 0, S, _e(D.cy + D.y11, D.cx + D.x11), _e(H.cy + H.y11, H.cx + H.x11), !U), h.arc(H.cx, H.cy, ie, _e(H.y11, H.x11), _e(H.y01, H.x01), !U))) : (h.moveTo(Ce, Fe), h.arc(0, 0, S, V, q, !U)) : h.moveTo(Ce, Fe), k > xt && P > xt ? z > xt ? (D = De(Ge, cn, Me, Re, k, -z, U), H = De(Ce, Fe, $n, Yn, k, -z, U), h.lineTo(D.cx + D.x01, D.cy + D.y01), z < L ? h.arc(D.cx, D.cy, z, _e(D.y01, D.x01), _e(H.y01, H.x01), !U) : (h.arc(D.cx, D.cy, z, _e(D.y01, D.x01), _e(D.y11, D.x11), !U), h.arc(0, 0, k, _e(D.cy + D.y11, D.cx + D.x11), _e(H.cy + H.y11, H.cx + H.x11), U), h.arc(H.cx, H.cy, z, _e(H.y11, H.x11), _e(H.y01, H.x01), !U))) : h.arc(0, 0, k, j, Z, U) : h.lineTo(Ge, cn);
            }
          else h.moveTo(0, 0);
          if (h.closePath(), y) return h = null, y + "" || null;
        }
        return m.centroid = function() {
          var y = (+r.apply(this, arguments) + +o.apply(this, arguments)) / 2, x = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2 - Vr / 2;
          return [Dn(x) * y, rn(x) * y];
        }, m.innerRadius = function(y) {
          return arguments.length ? (r = typeof y == "function" ? y : Xe(+y), m) : r;
        }, m.outerRadius = function(y) {
          return arguments.length ? (o = typeof y == "function" ? y : Xe(+y), m) : o;
        }, m.cornerRadius = function(y) {
          return arguments.length ? (u = typeof y == "function" ? y : Xe(+y), m) : u;
        }, m.padRadius = function(y) {
          return arguments.length ? (a = y == null ? null : typeof y == "function" ? y : Xe(+y), m) : a;
        }, m.startAngle = function(y) {
          return arguments.length ? (c = typeof y == "function" ? y : Xe(+y), m) : c;
        }, m.endAngle = function(y) {
          return arguments.length ? (d = typeof y == "function" ? y : Xe(+y), m) : d;
        }, m.padAngle = function(y) {
          return arguments.length ? (p = typeof y == "function" ? y : Xe(+y), m) : p;
        }, m.context = function(y) {
          return arguments.length ? (h = y ?? null, m) : h;
        }, m;
      };
      const Zr = 50;
      class fs {
        constructor(o, { title: u, data: { labels: a, datasets: c }, options: d }) {
          this.options = Br({ unxkcdify: !1, innerRadius: 0.5, legendPosition: he.positionType.upLeft, dataColors: Hr, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", showLegend: !0 }, d), this.title = u, this.data = { labels: a, datasets: c }, this.filter = "url(#xkcdify-pie)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = it(o).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", o.parentElement.clientWidth).attr("height", Math.min(2 * o.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.width = this.svgEl.attr("width"), this.height = this.svgEl.attr("height"), this.chart = this.svgEl.append("g").attr("transform", `translate(${this.width / 2},${this.height / 2})`), Wr(this.svgEl), Yr(this.svgEl), this.render();
        }
        render() {
          this.title && kt.title(this.svgEl, this.title, this.options.strokeColor);
          const o = new Ur({ parent: this.svgEl, title: "tooltip", items: [{ color: "red", text: "weweyang: 12" }, { color: "blue", text: "timqian: 13" }], position: { x: 30, y: 30, type: he.positionType.upRight }, unxkcdify: this.options.unxkcdify, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor }), u = Math.min(this.width, this.height) / 2 - Zr, a = Nl()(this.data.datasets[0].data), c = Ao().innerRadius(u * (this.options.innerRadius === void 0 ? 0.5 : this.options.innerRadius)).outerRadius(u);
          this.chart.selectAll(".xkcd-chart-arc").data(a).enter().append("path").attr("class", ".xkcd-chart-arc").attr("d", c).attr("fill", "none").attr("stroke", this.options.strokeColor).attr("stroke-width", 2).attr("fill", (h, m) => this.options.dataColors[m]).attr("filter", this.filter).on("mouseover", (h, m, y) => {
            it(y[m]).attr("fill-opacity", 0.6), o.show();
          }).on("mouseout", (h, m, y) => {
            it(y[m]).attr("fill-opacity", 1), o.hide();
          }).on("mousemove", (h, m, y) => {
            const x = An(y[m])[0] + this.width / 2 + 10, k = An(y[m])[1] + this.height / 2 + 10;
            o.update({ title: this.data.labels[m], items: [{ color: this.options.dataColors[m], text: `${this.data.datasets[0].label || ""}: ${h.data}` }], position: { x, y: k, type: he.positionType.downRight } });
          });
          const d = this.data.datasets[0].data.map((h, m) => ({ color: this.options.dataColors[m], text: this.data.labels[m] })), p = this.svgEl.append("g").attr("transform", "translate(0, 30)");
          this.options.showLegend && Ir(p, { items: d, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
        }
        update() {
        }
      }
      function ds(r, o) {
        var u = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          o && (a = a.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable;
          })), u.push.apply(u, a);
        }
        return u;
      }
      function ja(r) {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o] != null ? arguments[o] : {};
          o % 2 ? ds(u, !0).forEach(function(a) {
            hs(r, a, u[a]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : ds(u).forEach(function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(u, a));
          });
        }
        return r;
      }
      function hs(r, o, u) {
        return o in r ? Object.defineProperty(r, o, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = u, r;
      }
      function Fi(r) {
        this._context = r;
      }
      Fi.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(r, o) {
        switch (r = +r, o = +o, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(r, o) : this._context.moveTo(r, o);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(r, o);
        }
      } };
      var Eo = function(r) {
        return new Fi(r);
      };
      function Ol(r) {
        return r[0];
      }
      function Dl(r) {
        return r[1];
      }
      var Ri = function() {
        var r = Ol, o = Dl, u = Xe(!0), a = null, c = Eo, d = null;
        function p(h) {
          var m, y, x, k = h.length, S = !1;
          for (a == null && (d = c(x = fr())), m = 0; m <= k; ++m) !(m < k && u(y = h[m], m, h)) === S && ((S = !S) ? d.lineStart() : d.lineEnd()), S && d.point(+r(y, m, h), +o(y, m, h));
          if (x) return d = null, x + "" || null;
        }
        return p.x = function(h) {
          return arguments.length ? (r = typeof h == "function" ? h : Xe(+h), p) : r;
        }, p.y = function(h) {
          return arguments.length ? (o = typeof h == "function" ? h : Xe(+h), p) : o;
        }, p.defined = function(h) {
          return arguments.length ? (u = typeof h == "function" ? h : Xe(!!h), p) : u;
        }, p.curve = function(h) {
          return arguments.length ? (c = h, a != null && (d = c(a)), p) : c;
        }, p.context = function(h) {
          return arguments.length ? (h == null ? a = d = null : d = c(a = h), p) : a;
        }, p;
      };
      function To(r) {
        return r < 0 ? -1 : 1;
      }
      function ps(r, o, u) {
        var a = r._x1 - r._x0, c = o - r._x1, d = (r._y1 - r._y0) / (a || c < 0 && -0), p = (u - r._y1) / (c || a < 0 && -0), h = (d * c + p * a) / (a + c);
        return (To(d) + To(p)) * Math.min(Math.abs(d), Math.abs(p), 0.5 * Math.abs(h)) || 0;
      }
      function Ll(r, o) {
        var u = r._x1 - r._x0;
        return u ? (3 * (r._y1 - r._y0) / u - o) / 2 : o;
      }
      function jl(r, o, u) {
        var a = r._x0, c = r._y0, d = r._x1, p = r._y1, h = (d - a) / 3;
        r._context.bezierCurveTo(a + h, c + h * o, d - h, p - h * u, d, p);
      }
      function Po(r) {
        this._context = r;
      }
      function No(r) {
        return new Po(r);
      }
      Po.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            jl(this, this._t0, Ll(this, this._t0));
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(r, o) {
        var u = NaN;
        if (o = +o, (r = +r) !== this._x1 || o !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(r, o) : this._context.moveTo(r, o);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, jl(this, Ll(this, u = ps(this, r, o)), u);
              break;
            default:
              jl(this, this._t0, u = ps(this, r, o));
          }
          this._x0 = this._x1, this._x1 = r, this._y0 = this._y1, this._y1 = o, this._t0 = u;
        }
      } }, Object.create(Po.prototype).point = function(r, o) {
        Po.prototype.point.call(this, o, r);
      };
      const $e = { top: 50, right: 30, bottom: 50, left: 50 };
      class gs {
        constructor(o, { title: u, xLabel: a, yLabel: c, data: { labels: d, datasets: p }, options: h }) {
          this.options = ja({ unxkcdify: !1, yTickCount: 3, legendPosition: he.positionType.upLeft, dataColors: Hr, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", showLegend: !0 }, h), u && (this.title = u, $e.top = 60), a && (this.xLabel = a, $e.bottom = 50), c && (this.yLabel = c, $e.left = 70), this.data = { labels: d, datasets: p }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = it(o).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", o.parentElement.clientWidth).attr("height", Math.min(2 * o.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${$e.left},${$e.top})`), this.width = this.svgEl.attr("width") - $e.left - $e.right, this.height = this.svgEl.attr("height") - $e.top - $e.bottom, Wr(this.svgEl), Yr(this.svgEl), this.render();
        }
        render() {
          this.title && kt.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && kt.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && kt.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const o = new Ur({ parent: this.svgEl, title: "", items: [{ color: "red", text: "weweyang" }, { color: "blue", text: "timqian" }], position: { x: 60, y: 60, type: he.positionType.downRight }, unxkcdify: this.options.unxkcdify, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor }), u = dl().domain(this.data.labels).range([0, this.width]), a = this.data.datasets.reduce((y, x) => y.concat(x.data), []), c = lr().domain([Math.min(...a), Math.max(...a)]).range([this.height, 0]), d = this.chart.append("g").attr("pointer-events", "all");
          yn.xAxis(d, { xScale: u, tickCount: 3, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), yn.yAxis(d, { yScale: c, tickCount: this.options.yTickCount || 3, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), this.svgEl.selectAll(".domain").attr("filter", this.filter);
          const p = Ri().x((y, x) => u(this.data.labels[x])).y((y) => c(y)).curve(No);
          d.selectAll(".xkcd-chart-line").data(this.data.datasets).enter().append("path").attr("class", "xkcd-chart-line").attr("d", (y) => p(y.data)).attr("fill", "none").attr("stroke", (y, x) => this.options.dataColors[x]).attr("filter", this.filter);
          const h = d.append("line").attr("x1", 30).attr("y1", 0).attr("x2", 30).attr("y2", this.height).attr("stroke", "#aaa").attr("stroke-width", 1.5).attr("stroke-dasharray", "7,7").style("visibility", "hidden"), m = this.data.datasets.map((y, x) => d.append("circle").style("stroke", this.options.dataColors[x]).style("fill", this.options.dataColors[x]).attr("r", 3.5).style("visibility", "hidden"));
          if (d.append("rect").attr("width", this.width).attr("height", this.height).attr("fill", "none").on("mouseover", () => {
            m.forEach((y) => y.style("visibility", "visible")), h.style("visibility", "visible"), o.show();
          }).on("mouseout", () => {
            m.forEach((y) => y.style("visibility", "hidden")), h.style("visibility", "hidden"), o.hide();
          }).on("mousemove", (y, x, k) => {
            const S = An(k[x])[0] + $e.left + 10, B = An(k[x])[1] + $e.top + 10, Q = this.data.labels.map((H) => u(H) + $e.left).map((H) => Math.abs(H - An(k[x])[0] - $e.left)), J = Q.indexOf(Math.min(...Q));
            h.attr("x1", u(this.data.labels[J])).attr("x2", u(this.data.labels[J])), this.data.datasets.forEach((H, V) => {
              m[V].style("visibility", "visible").attr("cx", u(this.data.labels[J])).attr("cy", c(H.data[J]));
            });
            const U = this.data.datasets.map((H, V) => ({ color: this.options.dataColors[V], text: `${this.data.datasets[V].label || ""}: ${this.data.datasets[V].data[J]}` }));
            let D = he.positionType.downRight;
            S > this.width / 2 && B < this.height / 2 ? D = he.positionType.downLeft : S > this.width / 2 && B > this.height / 2 ? D = he.positionType.upLeft : S < this.width / 2 && B > this.height / 2 && (D = he.positionType.upRight), o.update({ title: this.data.labels[J], items: U, position: { x: S, y: B, type: D } });
          }), this.options.showLegend) {
            const y = this.data.datasets.map((x, k) => ({ color: this.options.dataColors[k], text: x.label }));
            Ir(d, { items: y, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor });
          }
        }
        update() {
        }
      }
      function dr(r, o) {
        var u = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          o && (a = a.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable;
          })), u.push.apply(u, a);
        }
        return u;
      }
      function vn(r) {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o] != null ? arguments[o] : {};
          o % 2 ? dr(u, !0).forEach(function(a) {
            Ui(r, a, u[a]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : dr(u).forEach(function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(u, a));
          });
        }
        return r;
      }
      function Ui(r, o, u) {
        return o in r ? Object.defineProperty(r, o, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = u, r;
      }
      var ln = /* @__PURE__ */ new Date(), Wi = /* @__PURE__ */ new Date();
      function St(r, o, u, a) {
        function c(d) {
          return r(d = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+d)), d;
        }
        return c.floor = function(d) {
          return r(d = /* @__PURE__ */ new Date(+d)), d;
        }, c.ceil = function(d) {
          return r(d = new Date(d - 1)), o(d, 1), r(d), d;
        }, c.round = function(d) {
          var p = c(d), h = c.ceil(d);
          return d - p < h - d ? p : h;
        }, c.offset = function(d, p) {
          return o(d = /* @__PURE__ */ new Date(+d), p == null ? 1 : Math.floor(p)), d;
        }, c.range = function(d, p, h) {
          var m, y = [];
          if (d = c.ceil(d), h = h == null ? 1 : Math.floor(h), !(d < p && h > 0)) return y;
          do
            y.push(m = /* @__PURE__ */ new Date(+d)), o(d, h), r(d);
          while (m < d && d < p);
          return y;
        }, c.filter = function(d) {
          return St(function(p) {
            if (p >= p) for (; r(p), !d(p); ) p.setTime(p - 1);
          }, function(p, h) {
            if (p >= p) if (h < 0) for (; ++h <= 0; ) for (; o(p, -1), !d(p); ) ;
            else for (; --h >= 0; ) for (; o(p, 1), !d(p); ) ;
          });
        }, u && (c.count = function(d, p) {
          return ln.setTime(+d), Wi.setTime(+p), r(ln), r(Wi), Math.floor(u(ln, Wi));
        }, c.every = function(d) {
          return d = Math.floor(d), isFinite(d) && d > 0 ? d > 1 ? c.filter(a ? function(p) {
            return a(p) % d == 0;
          } : function(p) {
            return c.count(0, p) % d == 0;
          }) : c : null;
        }), c;
      }
      var Oo = St(function() {
      }, function(r, o) {
        r.setTime(+r + o);
      }, function(r, o) {
        return o - r;
      });
      Oo.every = function(r) {
        return r = Math.floor(r), isFinite(r) && r > 0 ? r > 1 ? St(function(o) {
          o.setTime(Math.floor(o / r) * r);
        }, function(o, u) {
          o.setTime(+o + u * r);
        }, function(o, u) {
          return (u - o) / r;
        }) : Oo : null;
      }, Oo.range;
      var wn = 1e3, Ln = 6e4, hr = 36e5, Yi = 864e5, Do = 6048e5, pr = St(function(r) {
        r.setTime(r - r.getMilliseconds());
      }, function(r, o) {
        r.setTime(+r + o * wn);
      }, function(r, o) {
        return (o - r) / wn;
      }, function(r) {
        return r.getUTCSeconds();
      });
      pr.range;
      var jn = St(function(r) {
        r.setTime(r - r.getMilliseconds() - r.getSeconds() * wn);
      }, function(r, o) {
        r.setTime(+r + o * Ln);
      }, function(r, o) {
        return (o - r) / Ln;
      }, function(r) {
        return r.getMinutes();
      });
      jn.range;
      var We = St(function(r) {
        r.setTime(r - r.getMilliseconds() - r.getSeconds() * wn - r.getMinutes() * Ln);
      }, function(r, o) {
        r.setTime(+r + o * hr);
      }, function(r, o) {
        return (o - r) / hr;
      }, function(r) {
        return r.getHours();
      });
      We.range;
      var Ne = St(function(r) {
        r.setHours(0, 0, 0, 0);
      }, function(r, o) {
        r.setDate(r.getDate() + o);
      }, function(r, o) {
        return (o - r - (o.getTimezoneOffset() - r.getTimezoneOffset()) * Ln) / Yi;
      }, function(r) {
        return r.getDate() - 1;
      });
      Ne.range;
      function Dt(r) {
        return St(function(o) {
          o.setDate(o.getDate() - (o.getDay() + 7 - r) % 7), o.setHours(0, 0, 0, 0);
        }, function(o, u) {
          o.setDate(o.getDate() + 7 * u);
        }, function(o, u) {
          return (u - o - (u.getTimezoneOffset() - o.getTimezoneOffset()) * Ln) / Do;
        });
      }
      var st = Dt(0), ct = Dt(1), gr = Dt(2), qr = Dt(3), ft = Dt(4), Lo = Dt(5), ms = Dt(6);
      st.range, ct.range, gr.range, qr.range, ft.range, Lo.range, ms.range;
      var zl = St(function(r) {
        r.setDate(1), r.setHours(0, 0, 0, 0);
      }, function(r, o) {
        r.setMonth(r.getMonth() + o);
      }, function(r, o) {
        return o.getMonth() - r.getMonth() + 12 * (o.getFullYear() - r.getFullYear());
      }, function(r) {
        return r.getMonth();
      });
      zl.range;
      var un = St(function(r) {
        r.setMonth(0, 1), r.setHours(0, 0, 0, 0);
      }, function(r, o) {
        r.setFullYear(r.getFullYear() + o);
      }, function(r, o) {
        return o.getFullYear() - r.getFullYear();
      }, function(r) {
        return r.getFullYear();
      });
      un.every = function(r) {
        return isFinite(r = Math.floor(r)) && r > 0 ? St(function(o) {
          o.setFullYear(Math.floor(o.getFullYear() / r) * r), o.setMonth(0, 1), o.setHours(0, 0, 0, 0);
        }, function(o, u) {
          o.setFullYear(o.getFullYear() + u * r);
        }) : null;
      }, un.range;
      var jo = St(function(r) {
        r.setUTCHours(0, 0, 0, 0);
      }, function(r, o) {
        r.setUTCDate(r.getUTCDate() + o);
      }, function(r, o) {
        return (o - r) / Yi;
      }, function(r) {
        return r.getUTCDate() - 1;
      });
      jo.range;
      function Ct(r) {
        return St(function(o) {
          o.setUTCDate(o.getUTCDate() - (o.getUTCDay() + 7 - r) % 7), o.setUTCHours(0, 0, 0, 0);
        }, function(o, u) {
          o.setUTCDate(o.getUTCDate() + 7 * u);
        }, function(o, u) {
          return (u - o) / Do;
        });
      }
      var Hi = Ct(0), Gr = Ct(1), ys = Ct(2), za = Ct(3), sn = Ct(4), Qr = Ct(5), Kr = Ct(6);
      Hi.range, Gr.range, ys.range, za.range, sn.range, Qr.range, Kr.range;
      var kn = St(function(r) {
        r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
      }, function(r, o) {
        r.setUTCFullYear(r.getUTCFullYear() + o);
      }, function(r, o) {
        return o.getUTCFullYear() - r.getUTCFullYear();
      }, function(r) {
        return r.getUTCFullYear();
      });
      kn.every = function(r) {
        return isFinite(r = Math.floor(r)) && r > 0 ? St(function(o) {
          o.setUTCFullYear(Math.floor(o.getUTCFullYear() / r) * r), o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
        }, function(o, u) {
          o.setUTCFullYear(o.getUTCFullYear() + u * r);
        }) : null;
      }, kn.range;
      var zn, Ht;
      function Zt(r) {
        return zn = mr(r), Ht = zn.format, zn.parse, zn.utcFormat, zn.utcParse, zn;
      }
      function Fn(r) {
        if (0 <= r.y && r.y < 100) {
          var o = new Date(-1, r.m, r.d, r.H, r.M, r.S, r.L);
          return o.setFullYear(r.y), o;
        }
        return new Date(r.y, r.m, r.d, r.H, r.M, r.S, r.L);
      }
      function an(r) {
        if (0 <= r.y && r.y < 100) {
          var o = new Date(Date.UTC(-1, r.m, r.d, r.H, r.M, r.S, r.L));
          return o.setUTCFullYear(r.y), o;
        }
        return new Date(Date.UTC(r.y, r.m, r.d, r.H, r.M, r.S, r.L));
      }
      function It(r, o, u) {
        return { y: r, m: o, d: u, H: 0, M: 0, S: 0, L: 0 };
      }
      function mr(r) {
        var o = r.dateTime, u = r.date, a = r.time, c = r.periods, d = r.days, p = r.shortDays, h = r.months, m = r.shortMonths, y = Mt(c), x = Jr(c), k = Mt(d), S = Jr(d), B = Mt(p), Q = Jr(p), J = Mt(h), U = Jr(h), D = Mt(m), H = Jr(m), V = { a: function(E) {
          return p[E.getDay()];
        }, A: function(E) {
          return d[E.getDay()];
        }, b: function(E) {
          return m[E.getMonth()];
        }, B: function(E) {
          return h[E.getMonth()];
        }, c: null, d: Uo, e: Uo, f: Vl, H: bl, I: ti, j: qt, L: Qn, m: Cs, M: Rn, p: function(E) {
          return c[+(E.getHours() >= 12)];
        }, q: function(E) {
          return 1 + ~~(E.getMonth() / 3);
        }, Q: ot, s: Xi, S: Kn, u: Xl, U: Ms, V: Un, w: Jn, W: Wo, x: null, X: null, y: As, Y: Yo, Z: Es, "%": tt }, q = { a: function(E) {
          return p[E.getUTCDay()];
        }, A: function(E) {
          return d[E.getUTCDay()];
        }, b: function(E) {
          return m[E.getUTCMonth()];
        }, B: function(E) {
          return h[E.getUTCMonth()];
        }, c: null, d: ni, e: ni, f: Zl, H: xn, I: bi, j: Vi, L: _n, m: ri, M: Ts, p: function(E) {
          return c[+(E.getUTCHours() >= 12)];
        }, q: function(E) {
          return 1 + ~~(E.getUTCMonth() / 3);
        }, Q: ot, s: Xi, S: ql, u: Ze, U: Ho, V: Gl, w: Ql, W: Io, x: null, X: null, y: Kl, Y: yr, Z: qe, "%": tt }, Z = { a: function(E, N, L) {
          var z = B.exec(N.slice(L));
          return z ? (E.w = Q[z[0].toLowerCase()], L + z[0].length) : -1;
        }, A: function(E, N, L) {
          var z = k.exec(N.slice(L));
          return z ? (E.w = S[z[0].toLowerCase()], L + z[0].length) : -1;
        }, b: function(E, N, L) {
          var z = D.exec(N.slice(L));
          return z ? (E.m = H[z[0].toLowerCase()], L + z[0].length) : -1;
        }, B: function(E, N, L) {
          var z = J.exec(N.slice(L));
          return z ? (E.m = U[z[0].toLowerCase()], L + z[0].length) : -1;
        }, c: function(E, N, L) {
          return b(E, o, N, L);
        }, d: Bi, e: Bi, f: Ro, H: Hl, I: Hl, j: xs, L: Fo, m: Ii, M: $r, p: function(E, N, L) {
          var z = y.exec(N.slice(L));
          return z ? (E.p = x[z[0].toLowerCase()], L + z[0].length) : -1;
        }, q: Fa, Q: Il, s: Bl, S: Ss, u: Ul, U: Wl, V: ws, w: vs, W: zo, x: function(E, N, L) {
          return b(E, u, N, L);
        }, X: function(E, N, L) {
          return b(E, a, N, L);
        }, y: _r, Y: ks, Z: Yl, "%": ei };
        function j(E, N) {
          return function(L) {
            var z, ie, F, ce = [], Ce = -1, Fe = 0, Ge = E.length;
            for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++Ce < Ge; ) E.charCodeAt(Ce) === 37 && (ce.push(E.slice(Fe, Ce)), (ie = Fl[z = E.charAt(++Ce)]) != null ? z = E.charAt(++Ce) : ie = z === "e" ? " " : "0", (F = N[z]) && (z = F(L, ie)), ce.push(z), Fe = Ce + 1);
            return ce.push(E.slice(Fe, Ce)), ce.join("");
          };
        }
        function P(E, N) {
          return function(L) {
            var z, ie, F = It(1900, void 0, 1);
            if (b(F, E, L += "", 0) != L.length) return null;
            if ("Q" in F) return new Date(F.Q);
            if ("s" in F) return new Date(1e3 * F.s + ("L" in F ? F.L : 0));
            if (!N || "Z" in F || (F.Z = 0), "p" in F && (F.H = F.H % 12 + 12 * F.p), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
              if (F.V < 1 || F.V > 53) return null;
              "w" in F || (F.w = 1), "Z" in F ? (ie = (z = an(It(F.y, 0, 1))).getUTCDay(), z = ie > 4 || ie === 0 ? Gr.ceil(z) : Gr(z), z = jo.offset(z, 7 * (F.V - 1)), F.y = z.getUTCFullYear(), F.m = z.getUTCMonth(), F.d = z.getUTCDate() + (F.w + 6) % 7) : (ie = (z = Fn(It(F.y, 0, 1))).getDay(), z = ie > 4 || ie === 0 ? ct.ceil(z) : ct(z), z = Ne.offset(z, 7 * (F.V - 1)), F.y = z.getFullYear(), F.m = z.getMonth(), F.d = z.getDate() + (F.w + 6) % 7);
            } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), ie = "Z" in F ? an(It(F.y, 0, 1)).getUTCDay() : Fn(It(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + 7 * F.W - (ie + 5) % 7 : F.w + 7 * F.U - (ie + 6) % 7);
            return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, an(F)) : Fn(F);
          };
        }
        function b(E, N, L, z) {
          for (var ie, F, ce = 0, Ce = N.length, Fe = L.length; ce < Ce; ) {
            if (z >= Fe) return -1;
            if ((ie = N.charCodeAt(ce++)) === 37) {
              if (ie = N.charAt(ce++), !(F = Z[ie in Fl ? N.charAt(ce++) : ie]) || (z = F(E, L, z)) < 0) return -1;
            } else if (ie != L.charCodeAt(z++)) return -1;
          }
          return z;
        }
        return V.x = j(u, V), V.X = j(a, V), V.c = j(o, V), q.x = j(u, q), q.X = j(a, q), q.c = j(o, q), { format: function(E) {
          var N = j(E += "", V);
          return N.toString = function() {
            return E;
          }, N;
        }, parse: function(E) {
          var N = P(E += "", !1);
          return N.toString = function() {
            return E;
          }, N;
        }, utcFormat: function(E) {
          var N = j(E += "", q);
          return N.toString = function() {
            return E;
          }, N;
        }, utcParse: function(E) {
          var N = P(E += "", !0);
          return N.toString = function() {
            return E;
          }, N;
        } };
      }
      var Fl = { "-": "", _: " ", 0: "0" }, et = /^\s*\d+/, Rl = /^%/, Bt = /[\\^$*+?|[\]().{}]/g;
      function pe(r, o, u) {
        var a = r < 0 ? "-" : "", c = (a ? -r : r) + "", d = c.length;
        return a + (d < u ? new Array(u - d + 1).join(o) + c : c);
      }
      function Ve(r) {
        return r.replace(Bt, "\\$&");
      }
      function Mt(r) {
        return new RegExp("^(?:" + r.map(Ve).join("|") + ")", "i");
      }
      function Jr(r) {
        for (var o = {}, u = -1, a = r.length; ++u < a; ) o[r[u].toLowerCase()] = u;
        return o;
      }
      function vs(r, o, u) {
        var a = et.exec(o.slice(u, u + 1));
        return a ? (r.w = +a[0], u + a[0].length) : -1;
      }
      function Ul(r, o, u) {
        var a = et.exec(o.slice(u, u + 1));
        return a ? (r.u = +a[0], u + a[0].length) : -1;
      }
      function Wl(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.U = +a[0], u + a[0].length) : -1;
      }
      function ws(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.V = +a[0], u + a[0].length) : -1;
      }
      function zo(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.W = +a[0], u + a[0].length) : -1;
      }
      function ks(r, o, u) {
        var a = et.exec(o.slice(u, u + 4));
        return a ? (r.y = +a[0], u + a[0].length) : -1;
      }
      function _r(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), u + a[0].length) : -1;
      }
      function Yl(r, o, u) {
        var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(o.slice(u, u + 6));
        return a ? (r.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), u + a[0].length) : -1;
      }
      function Fa(r, o, u) {
        var a = et.exec(o.slice(u, u + 1));
        return a ? (r.q = 3 * a[0] - 3, u + a[0].length) : -1;
      }
      function Ii(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.m = a[0] - 1, u + a[0].length) : -1;
      }
      function Bi(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.d = +a[0], u + a[0].length) : -1;
      }
      function xs(r, o, u) {
        var a = et.exec(o.slice(u, u + 3));
        return a ? (r.m = 0, r.d = +a[0], u + a[0].length) : -1;
      }
      function Hl(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.H = +a[0], u + a[0].length) : -1;
      }
      function $r(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.M = +a[0], u + a[0].length) : -1;
      }
      function Ss(r, o, u) {
        var a = et.exec(o.slice(u, u + 2));
        return a ? (r.S = +a[0], u + a[0].length) : -1;
      }
      function Fo(r, o, u) {
        var a = et.exec(o.slice(u, u + 3));
        return a ? (r.L = +a[0], u + a[0].length) : -1;
      }
      function Ro(r, o, u) {
        var a = et.exec(o.slice(u, u + 6));
        return a ? (r.L = Math.floor(a[0] / 1e3), u + a[0].length) : -1;
      }
      function ei(r, o, u) {
        var a = Rl.exec(o.slice(u, u + 1));
        return a ? u + a[0].length : -1;
      }
      function Il(r, o, u) {
        var a = et.exec(o.slice(u));
        return a ? (r.Q = +a[0], u + a[0].length) : -1;
      }
      function Bl(r, o, u) {
        var a = et.exec(o.slice(u));
        return a ? (r.s = +a[0], u + a[0].length) : -1;
      }
      function Uo(r, o) {
        return pe(r.getDate(), o, 2);
      }
      function bl(r, o) {
        return pe(r.getHours(), o, 2);
      }
      function ti(r, o) {
        return pe(r.getHours() % 12 || 12, o, 2);
      }
      function qt(r, o) {
        return pe(1 + Ne.count(un(r), r), o, 3);
      }
      function Qn(r, o) {
        return pe(r.getMilliseconds(), o, 3);
      }
      function Vl(r, o) {
        return Qn(r, o) + "000";
      }
      function Cs(r, o) {
        return pe(r.getMonth() + 1, o, 2);
      }
      function Rn(r, o) {
        return pe(r.getMinutes(), o, 2);
      }
      function Kn(r, o) {
        return pe(r.getSeconds(), o, 2);
      }
      function Xl(r) {
        var o = r.getDay();
        return o === 0 ? 7 : o;
      }
      function Ms(r, o) {
        return pe(st.count(un(r) - 1, r), o, 2);
      }
      function Un(r, o) {
        var u = r.getDay();
        return r = u >= 4 || u === 0 ? ft(r) : ft.ceil(r), pe(ft.count(un(r), r) + (un(r).getDay() === 4), o, 2);
      }
      function Jn(r) {
        return r.getDay();
      }
      function Wo(r, o) {
        return pe(ct.count(un(r) - 1, r), o, 2);
      }
      function As(r, o) {
        return pe(r.getFullYear() % 100, o, 2);
      }
      function Yo(r, o) {
        return pe(r.getFullYear() % 1e4, o, 4);
      }
      function Es(r) {
        var o = r.getTimezoneOffset();
        return (o > 0 ? "-" : (o *= -1, "+")) + pe(o / 60 | 0, "0", 2) + pe(o % 60, "0", 2);
      }
      function ni(r, o) {
        return pe(r.getUTCDate(), o, 2);
      }
      function xn(r, o) {
        return pe(r.getUTCHours(), o, 2);
      }
      function bi(r, o) {
        return pe(r.getUTCHours() % 12 || 12, o, 2);
      }
      function Vi(r, o) {
        return pe(1 + jo.count(kn(r), r), o, 3);
      }
      function _n(r, o) {
        return pe(r.getUTCMilliseconds(), o, 3);
      }
      function Zl(r, o) {
        return _n(r, o) + "000";
      }
      function ri(r, o) {
        return pe(r.getUTCMonth() + 1, o, 2);
      }
      function Ts(r, o) {
        return pe(r.getUTCMinutes(), o, 2);
      }
      function ql(r, o) {
        return pe(r.getUTCSeconds(), o, 2);
      }
      function Ze(r) {
        var o = r.getUTCDay();
        return o === 0 ? 7 : o;
      }
      function Ho(r, o) {
        return pe(Hi.count(kn(r) - 1, r), o, 2);
      }
      function Gl(r, o) {
        var u = r.getUTCDay();
        return r = u >= 4 || u === 0 ? sn(r) : sn.ceil(r), pe(sn.count(kn(r), r) + (kn(r).getUTCDay() === 4), o, 2);
      }
      function Ql(r) {
        return r.getUTCDay();
      }
      function Io(r, o) {
        return pe(Gr.count(kn(r) - 1, r), o, 2);
      }
      function Kl(r, o) {
        return pe(r.getUTCFullYear() % 100, o, 2);
      }
      function yr(r, o) {
        return pe(r.getUTCFullYear() % 1e4, o, 4);
      }
      function qe() {
        return "+0000";
      }
      function tt() {
        return "%";
      }
      function ot(r) {
        return +r;
      }
      function Xi(r) {
        return Math.floor(+r / 1e3);
      }
      Zt({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
      var Zi = function(r, o) {
        var u, a = 0, c = (r = r.slice()).length - 1, d = r[a], p = r[c];
        return p < d && (u = a, a = c, c = u, u = d, d = p, p = u), r[a] = o.floor(d), r[c] = o.ceil(p), r;
      }, Wn = 1e3, qi = 60 * Wn, nt = 60 * qi, vr = 24 * nt, Jl = 7 * vr, Bo = 30 * vr, Gt = 365 * vr;
      function Qt(r) {
        return new Date(r);
      }
      function Gi(r) {
        return r instanceof Date ? +r : +/* @__PURE__ */ new Date(+r);
      }
      function bo(r, o, u, a, c, d, p, h, m) {
        var y = Bu(), x = y.invert, k = y.domain, S = m(".%L"), B = m(":%S"), Q = m("%I:%M"), J = m("%I %p"), U = m("%a %d"), D = m("%b %d"), H = m("%B"), V = m("%Y"), q = [[p, 1, Wn], [p, 5, 5 * Wn], [p, 15, 15 * Wn], [p, 30, 30 * Wn], [d, 1, qi], [d, 5, 5 * qi], [d, 15, 15 * qi], [d, 30, 30 * qi], [c, 1, nt], [c, 3, 3 * nt], [c, 6, 6 * nt], [c, 12, 12 * nt], [a, 1, vr], [a, 2, 2 * vr], [u, 1, Jl], [o, 1, Bo], [o, 3, 3 * Bo], [r, 1, Gt]];
        function Z(P) {
          return (p(P) < P ? S : d(P) < P ? B : c(P) < P ? Q : a(P) < P ? J : o(P) < P ? u(P) < P ? U : D : r(P) < P ? H : V)(P);
        }
        function j(P, b, E) {
          if (P == null && (P = 10), typeof P == "number") {
            var N, L = Math.abs(E - b) / P, z = yi(function(ie) {
              return ie[2];
            }).right(q, L);
            return z === q.length ? (N = Ar(b / Gt, E / Gt, P), P = r) : z ? (N = (z = q[L / q[z - 1][2] < q[z][2] / L ? z - 1 : z])[1], P = z[0]) : (N = Math.max(Ar(b, E, P), 1), P = h), P.every(N);
          }
          return P;
        }
        return y.invert = function(P) {
          return new Date(x(P));
        }, y.domain = function(P) {
          return arguments.length ? k(Array.from(P, Gi)) : k().map(Qt);
        }, y.ticks = function(P) {
          var b, E = k(), N = E[0], L = E[E.length - 1], z = L < N;
          return z && (b = N, N = L, L = b), b = (b = j(P, N, L)) ? b.range(N, L + 1) : [], z ? b.reverse() : b;
        }, y.tickFormat = function(P, b) {
          return b == null ? Z : m(b);
        }, y.nice = function(P) {
          var b = k();
          return (P = j(P, b[0], b[b.length - 1])) ? k(Zi(b, P)) : y;
        }, y.copy = function() {
          return Iu(y, bo(r, o, u, a, c, d, p, h, m));
        }, y;
      }
      var _l = function() {
        return or.apply(bo(un, zl, st, Ne, We, jn, pr, Oo, Ht).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
      }, ii = {};
      (function(r, o) {
        typeof ii == "object" ? ii = o() : r.dayjs = o();
      })(ii, function() {
        var r = "millisecond", o = "second", u = "minute", a = "hour", c = "day", d = "week", p = "month", h = "quarter", m = "year", y = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/, x = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = function(Z, j, P) {
          var b = String(Z);
          return !b || b.length >= j ? Z : "" + Array(j + 1 - b.length).join(P) + Z;
        }, S = { s: k, z: function(Z) {
          var j = -Z.utcOffset(), P = Math.abs(j), b = Math.floor(P / 60), E = P % 60;
          return (j <= 0 ? "+" : "-") + k(b, 2, "0") + ":" + k(E, 2, "0");
        }, m: function(Z, j) {
          var P = 12 * (j.year() - Z.year()) + (j.month() - Z.month()), b = Z.clone().add(P, p), E = j - b < 0, N = Z.clone().add(P + (E ? -1 : 1), p);
          return Number(-(P + (j - b) / (E ? b - N : N - b)) || 0);
        }, a: function(Z) {
          return Z < 0 ? Math.ceil(Z) || 0 : Math.floor(Z);
        }, p: function(Z) {
          return { M: p, y: m, w: d, d: c, h: a, m: u, s: o, ms: r, Q: h }[Z] || String(Z || "").toLowerCase().replace(/s$/, "");
        }, u: function(Z) {
          return Z === void 0;
        } }, B = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, Q = "en", J = {};
        J[Q] = B;
        var U = function(Z) {
          return Z instanceof q;
        }, D = function(Z, j, P) {
          var b;
          if (!Z) return Q;
          if (typeof Z == "string") J[Z] && (b = Z), j && (J[Z] = j, b = Z);
          else {
            var E = Z.name;
            J[E] = Z, b = E;
          }
          return P || (Q = b), b;
        }, H = function(Z, j, P) {
          if (U(Z)) return Z.clone();
          var b = j ? typeof j == "string" ? { format: j, pl: P } : j : {};
          return b.date = Z, new q(b);
        }, V = S;
        V.l = D, V.i = U, V.w = function(Z, j) {
          return H(Z, { locale: j.$L, utc: j.$u, $offset: j.$offset });
        };
        var q = function() {
          function Z(P) {
            this.$L = this.$L || D(P.locale, null, !0), this.parse(P);
          }
          var j = Z.prototype;
          return j.parse = function(P) {
            this.$d = function(b) {
              var E = b.date, N = b.utc;
              if (E === null) return /* @__PURE__ */ new Date(NaN);
              if (V.u(E)) return /* @__PURE__ */ new Date();
              if (E instanceof Date) return new Date(E);
              if (typeof E == "string" && !/Z$/i.test(E)) {
                var L = E.match(y);
                if (L) return N ? new Date(Date.UTC(L[1], L[2] - 1, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, L[7] || 0)) : new Date(L[1], L[2] - 1, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, L[7] || 0);
              }
              return new Date(E);
            }(P), this.init();
          }, j.init = function() {
            var P = this.$d;
            this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
          }, j.$utils = function() {
            return V;
          }, j.isValid = function() {
            return this.$d.toString() !== "Invalid Date";
          }, j.isSame = function(P, b) {
            var E = H(P);
            return this.startOf(b) <= E && E <= this.endOf(b);
          }, j.isAfter = function(P, b) {
            return H(P) < this.startOf(b);
          }, j.isBefore = function(P, b) {
            return this.endOf(b) < H(P);
          }, j.$g = function(P, b, E) {
            return V.u(P) ? this[b] : this.set(E, P);
          }, j.year = function(P) {
            return this.$g(P, "$y", m);
          }, j.month = function(P) {
            return this.$g(P, "$M", p);
          }, j.day = function(P) {
            return this.$g(P, "$W", c);
          }, j.date = function(P) {
            return this.$g(P, "$D", "date");
          }, j.hour = function(P) {
            return this.$g(P, "$H", a);
          }, j.minute = function(P) {
            return this.$g(P, "$m", u);
          }, j.second = function(P) {
            return this.$g(P, "$s", o);
          }, j.millisecond = function(P) {
            return this.$g(P, "$ms", r);
          }, j.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, j.valueOf = function() {
            return this.$d.getTime();
          }, j.startOf = function(P, b) {
            var E = this, N = !!V.u(b) || b, L = V.p(P), z = function(pt, Me) {
              var Re = V.w(E.$u ? Date.UTC(E.$y, Me, pt) : new Date(E.$y, Me, pt), E);
              return N ? Re : Re.endOf(c);
            }, ie = function(pt, Me) {
              return V.w(E.toDate()[pt].apply(E.toDate(), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Me)), E);
            }, F = this.$W, ce = this.$M, Ce = this.$D, Fe = "set" + (this.$u ? "UTC" : "");
            switch (L) {
              case m:
                return N ? z(1, 0) : z(31, 11);
              case p:
                return N ? z(1, ce) : z(0, ce + 1);
              case d:
                var Ge = this.$locale().weekStart || 0, cn = (F < Ge ? F + 7 : F) - Ge;
                return z(N ? Ce - cn : Ce + (6 - cn), ce);
              case c:
              case "date":
                return ie(Fe + "Hours", 0);
              case a:
                return ie(Fe + "Minutes", 1);
              case u:
                return ie(Fe + "Seconds", 2);
              case o:
                return ie(Fe + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, j.endOf = function(P) {
            return this.startOf(P, !1);
          }, j.$set = function(P, b) {
            var E, N = V.p(P), L = "set" + (this.$u ? "UTC" : ""), z = (E = {}, E[c] = L + "Date", E.date = L + "Date", E[p] = L + "Month", E[m] = L + "FullYear", E[a] = L + "Hours", E[u] = L + "Minutes", E[o] = L + "Seconds", E[r] = L + "Milliseconds", E)[N], ie = N === c ? this.$D + (b - this.$W) : b;
            if (N === p || N === m) {
              var F = this.clone().set("date", 1);
              F.$d[z](ie), F.init(), this.$d = F.set("date", Math.min(this.$D, F.daysInMonth())).toDate();
            } else z && this.$d[z](ie);
            return this.init(), this;
          }, j.set = function(P, b) {
            return this.clone().$set(P, b);
          }, j.get = function(P) {
            return this[V.p(P)]();
          }, j.add = function(P, b) {
            var E, N = this;
            P = Number(P);
            var L = V.p(b), z = function(ce) {
              var Ce = H(N);
              return V.w(Ce.date(Ce.date() + Math.round(ce * P)), N);
            };
            if (L === p) return this.set(p, this.$M + P);
            if (L === m) return this.set(m, this.$y + P);
            if (L === c) return z(1);
            if (L === d) return z(7);
            var ie = (E = {}, E[u] = 6e4, E[a] = 36e5, E[o] = 1e3, E)[L] || 1, F = this.$d.getTime() + P * ie;
            return V.w(F, this);
          }, j.subtract = function(P, b) {
            return this.add(-1 * P, b);
          }, j.format = function(P) {
            var b = this;
            if (!this.isValid()) return "Invalid Date";
            var E = P || "YYYY-MM-DDTHH:mm:ssZ", N = V.z(this), L = this.$locale(), z = this.$H, ie = this.$m, F = this.$M, ce = L.weekdays, Ce = L.months, Fe = function(Me, Re, $n, Yn) {
              return Me && (Me[Re] || Me(b, E)) || $n[Re].substr(0, Yn);
            }, Ge = function(Me) {
              return V.s(z % 12 || 12, Me, "0");
            }, cn = L.meridiem || function(Me, Re, $n) {
              var Yn = Me < 12 ? "AM" : "PM";
              return $n ? Yn.toLowerCase() : Yn;
            }, pt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: V.s(F + 1, 2, "0"), MMM: Fe(L.monthsShort, F, Ce, 3), MMMM: Ce[F] || Ce(this, E), D: this.$D, DD: V.s(this.$D, 2, "0"), d: String(this.$W), dd: Fe(L.weekdaysMin, this.$W, ce, 2), ddd: Fe(L.weekdaysShort, this.$W, ce, 3), dddd: ce[this.$W], H: String(z), HH: V.s(z, 2, "0"), h: Ge(1), hh: Ge(2), a: cn(z, ie, !0), A: cn(z, ie, !1), m: String(ie), mm: V.s(ie, 2, "0"), s: String(this.$s), ss: V.s(this.$s, 2, "0"), SSS: V.s(this.$ms, 3, "0"), Z: N };
            return E.replace(x, function(Me, Re) {
              return Re || pt[Me] || N.replace(":", "");
            });
          }, j.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, j.diff = function(P, b, E) {
            var N, L = V.p(b), z = H(P), ie = 6e4 * (z.utcOffset() - this.utcOffset()), F = this - z, ce = V.m(this, z);
            return ce = (N = {}, N[m] = ce / 12, N[p] = ce, N[h] = ce / 3, N[d] = (F - ie) / 6048e5, N[c] = (F - ie) / 864e5, N[a] = F / 36e5, N[u] = F / 6e4, N[o] = F / 1e3, N)[L] || F, E ? ce : V.a(ce);
          }, j.daysInMonth = function() {
            return this.endOf(p).$D;
          }, j.$locale = function() {
            return J[this.$L];
          }, j.locale = function(P, b) {
            if (!P) return this.$L;
            var E = this.clone();
            return E.$L = D(P, b, !0), E;
          }, j.clone = function() {
            return V.w(this.$d, this);
          }, j.toDate = function() {
            return new Date(this.valueOf());
          }, j.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, j.toISOString = function() {
            return this.$d.toISOString();
          }, j.toString = function() {
            return this.$d.toUTCString();
          }, Z;
        }();
        return H.prototype = q.prototype, H.extend = function(Z, j) {
          return Z(j, q, H), H;
        }, H.locale = D, H.isDayjs = U, H.unix = function(Z) {
          return H(1e3 * Z);
        }, H.en = J[Q], H.Ls = J, H;
      });
      const Kt = { top: 50, right: 30, bottom: 50, left: 50 };
      class Ps {
        constructor(o, { title: u, xLabel: a, yLabel: c, data: { datasets: d }, options: p }) {
          this.options = vn({ unxkcdify: !1, dotSize: 1, showLine: !1, timeFormat: "", xTickCount: 3, yTickCount: 3, legendPosition: he.positionType.upLeft, dataColors: Hr, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", showLegend: !0 }, p), u && (this.title = u, Kt.top = 60), a && (this.xLabel = a, Kt.bottom = 50), c && (this.yLabel = c, Kt.left = 70), this.data = { datasets: d }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = it(o).style("stroke-width", 3).style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", o.parentElement.clientWidth).attr("height", Math.min(2 * o.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${Kt.left},${Kt.top})`), this.width = this.svgEl.attr("width") - Kt.left - Kt.right, this.height = this.svgEl.attr("height") - Kt.top - Kt.bottom, Wr(this.svgEl), Yr(this.svgEl), this.render();
        }
        render() {
          this.title && kt.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && kt.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && kt.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const o = new Ur({ parent: this.svgEl, title: "", items: [{ color: "red", text: "weweyang" }, { color: "blue", text: "timqian" }], position: { x: 60, y: 60, type: he.positionType.dowfnRight }, unxkcdify: this.options.unxkcdify, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
          this.options.timeFormat && this.data.datasets.forEach((x) => {
            x.data.forEach((k) => {
              var S = O(ii);
              k.x = S.d(k.x);
            });
          });
          const u = this.data.datasets.reduce((x, k) => x.concat(k.data), []), a = u.map((x) => x.x), c = u.map((x) => x.y);
          let d = lr().domain([Math.min(...a), Math.max(...a)]).range([0, this.width]);
          this.options.timeFormat && (d = _l().domain([Math.min(...a), Math.max(...a)]).range([0, this.width]));
          const p = lr().domain([Math.min(...c), Math.max(...c)]).range([this.height, 0]), h = this.chart.append("g").attr("pointer-events", "all");
          if (yn.xAxis(h, { xScale: d, tickCount: this.options.xTickCount === void 0 ? 3 : this.options.xTickCount, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), yn.yAxis(h, { yScale: p, tickCount: this.options.yTickCount === void 0 ? 3 : this.options.yTickCount, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), this.options.showLine) {
            const x = Ri().x((k) => d(k.x)).y((k) => p(k.y)).curve(No);
            h.selectAll(".xkcd-chart-xyline").data(this.data.datasets).enter().append("path").attr("class", "xkcd-chart-xyline").attr("d", (k) => x(k.data)).attr("fill", "none").attr("stroke", (k, S) => this.options.dataColors[S]).attr("filter", this.filter);
          }
          const m = 3.5 * (this.options.dotSize === void 0 ? 1 : this.options.dotSize), y = 6 * (this.options.dotSize === void 0 ? 1 : this.options.dotSize);
          if (h.selectAll(".xkcd-chart-xycircle-group").data(this.data.datasets).enter().append("g").attr("class", ".xkcd-chart-xycircle-group").attr("filter", this.filter).attr("xy-group-index", (x, k) => k).selectAll(".xkcd-chart-xycircle-circle").data((x) => x.data).enter().append("circle").style("stroke", (x, k, S) => {
            const B = Number(it(S[k].parentElement).attr("xy-group-index"));
            return this.options.dataColors[B];
          }).style("fill", (x, k, S) => {
            const B = Number(it(S[k].parentElement).attr("xy-group-index"));
            return this.options.dataColors[B];
          }).attr("r", m).attr("cx", (x) => d(x.x)).attr("cy", (x) => p(x.y)).attr("pointer-events", "all").on("mouseover", (x, k, S) => {
            const B = Number(it(S[k].parentElement).attr("xy-group-index"));
            it(S[k]).attr("r", y);
            const Q = d(x.x) + Kt.left + 5, J = p(x.y) + Kt.top + 5;
            let U = he.positionType.downRight;
            var D = O(ii);
            Q > this.width / 2 && J < this.height / 2 ? U = he.positionType.downLeft : Q > this.width / 2 && J > this.height / 2 ? U = he.positionType.upLeft : Q < this.width / 2 && J > this.height / 2 && (U = he.positionType.upRight), o.update({ title: this.options.timeFormat ? D.d(this.data.datasets[B].data[k].x).format(this.options.timeFormat) : `${this.data.datasets[B].data[k].x}`, items: [{ color: this.options.dataColors[B], text: `${this.data.datasets[B].label || ""}: ${x.y}` }], position: { x: Q, y: J, type: U } }), o.show();
          }).on("mouseout", (x, k, S) => {
            it(S[k]).attr("r", m), o.hide();
          }), this.options.showLegend) {
            const x = this.data.datasets.map((k, S) => ({ color: this.options.dataColors[S], text: k.label }));
            Ir(h, { items: x, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
          }
        }
        update() {
        }
      }
      function $l(r, o) {
        var u = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          o && (a = a.filter(function(c) {
            return Object.getOwnPropertyDescriptor(r, c).enumerable;
          })), u.push.apply(u, a);
        }
        return u;
      }
      function Ns(r) {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o] != null ? arguments[o] : {};
          o % 2 ? $l(u, !0).forEach(function(a) {
            Os(r, a, u[a]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : $l(u).forEach(function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(u, a));
          });
        }
        return r;
      }
      function Os(r, o, u) {
        return o in r ? Object.defineProperty(r, o, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = u, r;
      }
      function eu(r) {
        this._context = r;
      }
      var tu = function() {
      };
      eu.prototype = { areaStart: tu, areaEnd: tu, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        this._point && this._context.closePath();
      }, point: function(r, o) {
        r = +r, o = +o, this._point ? this._context.lineTo(r, o) : (this._point = 1, this._context.moveTo(r, o));
      } };
      var Qi = function(r) {
        return new eu(r);
      };
      const Ds = 50, wr = -Math.PI / 2, Vo = 0.2;
      class Ls {
        constructor(o, { title: u, data: { labels: a, datasets: c }, options: d }) {
          this.options = Ns({ showLabels: !1, ticksCount: 3, showLegend: !1, legendPosition: he.positionType.upLeft, dataColors: Hr, fontFamily: "xkcd", dotSize: 1, strokeColor: "black", backgroundColor: "white" }, d), this.title = u, this.data = { labels: a, datasets: c }, this.directionsCount = c[0].data.length, this.filter = "url(#xkcdify-pie)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = it(o).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", o.parentElement.clientWidth).attr("height", Math.min(2 * o.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.width = this.svgEl.attr("width"), this.height = this.svgEl.attr("height"), this.chart = this.svgEl.append("g").attr("transform", `translate(${this.width / 2},${this.height / 2})`), Wr(this.svgEl), Yr(this.svgEl), this.render();
        }
        render() {
          this.title && kt.title(this.svgEl, this.title, this.options.strokeColor);
          const o = new Ur({ parent: this.svgEl, title: "", items: [], position: { x: 0, y: 0, type: he.positionType.downRight }, unxkcdify: this.options.unxkcdify, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor }), u = 3.5 * (this.options.dotSize || 1), a = 6 * (this.options.dotSize || 1), c = Math.min(this.width, this.height) / 2 - Ds, d = 2 * Math.PI / this.directionsCount, p = this.data.datasets.reduce((U, D) => U.concat(D.data), []), h = Math.max(...p), m = Array(this.directionsCount).fill(h), y = lr().domain([0, h]).range([0, c]), x = (U, D) => y(U) * Math.cos(d * D + wr), k = (U, D) => y(U) * Math.sin(d * D + wr), S = Ri().x(x).y(k).curve(Qi), B = y.ticks(this.options.ticksCount || 3), Q = this.chart.append("g").attr("class", "xkcd-chart-radar-grid").attr("stroke-width", "1").attr("filter", this.filter);
          Q.selectAll(".xkcd-chart-radar-level").data(B).enter().append("path").attr("class", "xkcd-chart-radar-level").attr("d", (U) => S(Array(this.directionsCount).fill(U))).style("fill", "none").attr("stroke", this.options.strokeColor).attr("stroke-dasharray", "7,7"), Q.selectAll(".xkcd-chart-radar-line").data(m).enter().append("line").attr("class", ".xkcd-chart-radar-line").attr("stroke", this.options.strokeColor).attr("x1", 0).attr("y1", 0).attr("x2", x).attr("y2", k), Q.selectAll(".xkcd-chart-radar-tick").data(B).enter().append("text").attr("class", "xkcd-chart-radar-tick").attr("x", (U) => x(U, 0)).attr("y", (U) => k(U, 0)).style("font-size", "16").style("fill", this.options.strokeColor).attr("text-anchor", "end").attr("dx", "-.125em").attr("dy", ".35em").text((U) => U), this.options.showLabels && Q.selectAll(".xkcd-chart-radar-label").data(m.map((U) => 1.15 * U)).enter().append("text").attr("class", "xkcd-chart-radar-label").style("font-size", "16").style("fill", this.options.strokeColor).attr("x", (U, D) => (c + 10) * Math.cos(d * D + wr)).attr("y", (U, D) => (c + 10) * Math.sin(d * D + wr)).attr("dy", ".35em").attr("text-anchor", (U, D, H) => {
            let V = "start";
            return it(H[D]).attr("x") < 0 && (V = "end"), V;
          }).text((U, D) => this.data.labels[D]);
          const J = this.chart.selectAll(".xkcd-chart-radar-group").data(this.data.datasets).enter().append("g").attr("class", "xkcd-chart-radar-group").attr("filter", this.filter).attr("stroke", (U, D) => this.options.dataColors[D]).attr("fill", (U, D) => this.options.dataColors[D]);
          if (J.selectAll("circle").data((U) => U.data).enter().append("circle").attr("r", u).attr("cx", x).attr("cy", k).attr("pointer-events", "all").on("mouseover", (U, D, H) => {
            it(H[D]).attr("r", a);
            const V = x(U, D) + this.width / 2, q = k(U, D) + this.height / 2;
            let Z = he.positionType.downRight;
            V > this.width / 2 && q < this.height / 2 ? Z = he.positionType.downLeft : V > this.width / 2 && q > this.height / 2 ? Z = he.positionType.upLeft : V < this.width / 2 && q > this.height / 2 && (Z = he.positionType.upRight), o.update({ title: this.data.labels[D], items: this.data.datasets.map((j, P) => ({ color: this.options.dataColors[P], text: `${j.label || ""}: ${j.data[D]}` })), position: { x: V, y: q, type: Z } }), o.show();
          }).on("mouseout", (U, D, H) => {
            it(H[D]).attr("r", u), o.hide();
          }), J.selectAll("path").data((U) => [U.data]).enter().append("path").attr("d", S).attr("pointer-events", "none").style("fill-opacity", Vo), this.options.showLegend) {
            const U = this.data.datasets.map((H, V) => ({ color: this.options.dataColors[V], text: H.label || "" })), D = this.svgEl.append("g").attr("transform", "translate(0, 30)");
            Ir(D, { items: U, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor });
          }
        }
        update() {
        }
      }
      ut = { config: he, Bar: Pi, StackedBar: Na, Pie: fs, Line: gs, XY: Ps, Radar: Ls }, ne.exports = ut;
    })();
  }(hc)), hc.exports;
}
var qf = hf();
const cf = /* @__PURE__ */ df(qf);
var pc = { exports: {} }, ff;
function Gf() {
  return ff || (ff = 1, function(ne, Ye) {
    (function(O, ut) {
      ne.exports = ut(yc(), hf());
    })(window, function(O, ut) {
      return function(He) {
        var Oe = {};
        function de(le) {
          if (Oe[le]) return Oe[le].exports;
          var oe = Oe[le] = { i: le, l: !1, exports: {} };
          return He[le].call(oe.exports, oe, oe.exports, de), oe.l = !0, oe.exports;
        }
        return de.m = He, de.c = Oe, de.d = function(le, oe, we) {
          de.o(le, oe) || Object.defineProperty(le, oe, { enumerable: !0, get: we });
        }, de.r = function(le) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(le, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(le, "__esModule", { value: !0 });
        }, de.t = function(le, oe) {
          if (1 & oe && (le = de(le)), 8 & oe || 4 & oe && typeof le == "object" && le && le.__esModule) return le;
          var we = /* @__PURE__ */ Object.create(null);
          if (de.r(we), Object.defineProperty(we, "default", { enumerable: !0, value: le }), 2 & oe && typeof le != "string") for (var Ie in le) de.d(we, Ie, (function(Le) {
            return le[Le];
          }).bind(null, Ie));
          return we;
        }, de.n = function(le) {
          var oe = le && le.__esModule ? function() {
            return le.default;
          } : function() {
            return le;
          };
          return de.d(oe, "a", oe), oe;
        }, de.o = function(le, oe) {
          return Object.prototype.hasOwnProperty.call(le, oe);
        }, de.p = "/obiwankenoobi/chart.xkcd-react/", de(de.s = 2);
      }([function(He, Oe) {
        He.exports = O;
      }, function(He, Oe) {
        He.exports = ut;
      }, function(He, Oe, de) {
        He.exports = de(3);
      }, function(He, Oe, de) {
        de.r(Oe);
        var le = de(1), oe = de.n(le), we = de(0), Ie = de.n(we), Le = function(me) {
          var Qe = me.config, Ee = Object(we.useRef)();
          return Object(we.useEffect)(function() {
            Ee.current && new oe.a.Bar(Ee.current, Qe);
          }), Ie.a.createElement("svg", { ref: Ee });
        }, Ue = function(me) {
          var Qe = me.config, Ee = Object(we.useRef)();
          return Object(we.useEffect)(function() {
            Ee.current && new oe.a.Pie(Ee.current, Qe);
          }), Ie.a.createElement("svg", { ref: Ee });
        }, Tt = function(me) {
          var Qe = me.config, Ee = Object(we.useRef)();
          return Object(we.useEffect)(function() {
            Ee.current && new oe.a.Line(Ee.current, Qe);
          }), Ie.a.createElement("svg", { ref: Ee });
        }, Pt = function(me) {
          var Qe = me.config, Ee = Object(we.useRef)();
          return Object(we.useEffect)(function() {
            Ee.current && new oe.a.XY(Ee.current, Qe);
          }), Ie.a.createElement("svg", { ref: Ee });
        }, je = function(me) {
          var Qe = me.config, Ee = Object(we.useRef)();
          return Object(we.useEffect)(function() {
            Ee.current && new oe.a.Radar(Ee.current, Qe);
          }), Ie.a.createElement("svg", { ref: Ee });
        };
        de.d(Oe, "Bar", function() {
          return Le;
        }), de.d(Oe, "Pie", function() {
          return Ue;
        }), de.d(Oe, "Line", function() {
          return Tt;
        }), de.d(Oe, "XY", function() {
          return Pt;
        }), de.d(Oe, "Radar", function() {
          return je;
        });
      }]);
    });
  }(pc)), pc.exports;
}
var gc = Gf();
const mc = {
  id: "ext_graphs",
  reference_name: "MyExtension",
  supports_dark_mode: !1
}, Qf = (ne) => /* @__PURE__ */ Sr.jsxs("div", { style: { padding: "20px", maxWidth: "800px", margin: "0 auto" }, children: [
  /* @__PURE__ */ Sr.jsx("h1", { style: { textAlign: "center" }, children: ne.title || "Analytics Overview" }),
  /* @__PURE__ */ Sr.jsx("div", { style: { marginBottom: "40px" }, children: /* @__PURE__ */ Sr.jsx(
    gc.Bar,
    {
      config: {
        title: "Customer Satisfaction Scores",
        data: {
          labels: ["Q1", "Q2", "Q3", "Q4"],
          datasets: [
            {
              data: ne.satisfaction || [8.5, 8.7, 9.1, 8.9]
            }
          ]
        },
        options: {
          yTickCount: 5
        }
      }
    }
  ) }),
  /* @__PURE__ */ Sr.jsx("div", { style: { marginBottom: "40px" }, children: /* @__PURE__ */ Sr.jsx(
    gc.Pie,
    {
      config: {
        title: "User Interaction Breakdown",
        data: {
          labels: ["Chat", "Voice", "Email", "Self-Service", "Social"],
          datasets: [
            {
              data: ne.channelData || [45, 25, 15, 10, 5]
            }
          ]
        },
        options: {
          innerRadius: 0.5,
          legendPosition: cf.config.positionType.upRight
        }
      }
    }
  ) }),
  /* @__PURE__ */ Sr.jsx("div", { style: { marginBottom: "40px" }, children: /* @__PURE__ */ Sr.jsx(
    gc.XY,
    {
      config: {
        title: "Response Time vs. Resolution Rate",
        xLabel: "Avg. Response Time (minutes)",
        yLabel: "Resolution Rate (%)",
        data: {
          datasets: [
            {
              label: "Chat Support",
              data: ne.responseData || [
                { x: 1, y: 85 },
                { x: 2, y: 90 },
                { x: 3, y: 88 },
                { x: 4, y: 92 },
                { x: 5, y: 95 }
              ]
            }
          ]
        },
        options: {
          xTickCount: 5,
          yTickCount: 5,
          legendPosition: cf.config.positionType.upRight,
          showLine: !0,
          dotSize: 1
        }
      }
    }
  ) })
] }), Kf = {
  name: mc.reference_name,
  // Display name for the extension
  type: "response",
  // Extension type
  match: ({ trace: ne }) => ne.type === mc.id || ne.payload.name === mc.id,
  // Matching criteria
  render: ({ element: ne, trace: Ye }) => {
    const O = Zf.createRoot(ne), { payload: ut } = Ye;
    return O.render(/* @__PURE__ */ Sr.jsx(Qf, { ...ut })), () => {
      O.unmount();
    };
  }
};
export {
  Kf as GraphExtension
};
