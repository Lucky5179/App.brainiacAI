(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9689],
  {
    19935: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 80071));
    },
    80071: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n(57437),
        u = n(30415),
        r = n.n(u),
        a = n(89571),
        o = n(21507),
        i = n(64910),
        f = n(13740),
        d = n(42031);
      let c = r()(
        () => Promise.all([n.e(8442), n.e(6611)]).then(n.bind(n, 46611)),
        { loadableGenerated: { webpack: () => [46611] }, ssr: !1 }
      );
      function s() {
        let e = (0, i.c7)((e) => e.account);
        return e
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(d.t, {
                  title: "Search web3 data",
                  subtitle: "Ask Brainiac AI to search on-chain and off-chain data.",
                  isHome: !1,
                }),
                (0, l.jsx)(a.j, {}),
                (0, l.jsx)(o.G, { children: (0, l.jsx)(c, {}) }),
              ],
            })
          : (0, l.jsx)(f.R, {});
      }
    },
    30415: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let l = n(21024);
      n(2265);
      let u = l._(n(54));
      function r(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function a(e, t) {
        let n = u.default,
          l = {
            loading: (e) => {
              let { error: t, isLoading: n, pastDelay: l } = e;
              return null;
            },
          };
        "function" == typeof e && (l.loader = e), Object.assign(l, t);
        let a = l.loader;
        return n({
          ...l,
          loader: () =>
            null != a ? a().then(r) : Promise.resolve(r(() => null)),
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    63388: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          suspense: function () {
            return u;
          },
          NoSSR: function () {
            return r;
          },
        }),
        n(21024),
        n(2265);
      let l = n(54922);
      function u() {
        let e = Error(l.NEXT_DYNAMIC_NO_SSR_CODE);
        throw ((e.digest = l.NEXT_DYNAMIC_NO_SSR_CODE), e);
      }
      function r(e) {
        let { children: t } = e;
        return t;
      }
    },
    54: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let l = n(21024),
        u = l._(n(2265)),
        r = n(63388),
        a = function (e) {
          let t = Object.assign({ loader: null, loading: null, ssr: !0 }, e);
          function n(e) {
            let n = t.loading,
              l = u.default.createElement(n, {
                isLoading: !0,
                pastDelay: !0,
                error: null,
              }),
              a = t.ssr ? u.default.Fragment : r.NoSSR,
              o = t.lazy;
            return u.default.createElement(
              u.default.Suspense,
              { fallback: l },
              u.default.createElement(a, null, u.default.createElement(o, e))
            );
          }
          return (
            (t.lazy = u.default.lazy(t.loader)),
            (n.displayName = "LoadableComponent"),
            n
          );
        };
    },
    41372: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(17865);
      let u = (0, l.Z)("ArrowLeft", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3154, 4625, 3071, 4962, 6708, 598, 6125, 5502, 8150, 8892, 8404, 578,
        3513, 2971, 7864, 1744,
      ],
      function () {
        return e((e.s = 19935));
      }
    ),
      (_N_E = e.O());
  },
]);
