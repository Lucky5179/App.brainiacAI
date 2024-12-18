(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4894],
  {
    21864: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 74645));
    },
    74645: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        });
      var s = t(57437),
        a = t(30415),
        i = t.n(a),
        l = t(89571),
        r = t(21507),
        c = t(42031);
      let o = i()(
        () =>
          Promise.all([
            t.e(1866),
            t.e(8442),
            t.e(7237),
            t.e(3611),
            t.e(5792),
            t.e(6549),
          ]).then(t.bind(t, 16549)),
        { loadableGenerated: { webpack: () => [16549] }, ssr: !1 }
      );
      function u() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.t, {
              title: "Ask Brian",
              subtitle:
                "Explore the web3 ecosystem and find the resources that you need.",
              isHome: !1,
            }),
            (0, s.jsx)(l.j, {}),
            (0, s.jsx)(r.G, { children: (0, s.jsx)(o, {}) }),
          ],
        });
      }
    },
    42031: function (e, n, t) {
      "use strict";
      t.d(n, {
        t: function () {
          return p;
        },
      });
      var s = t(57437),
        a = t(61396),
        i = t.n(a),
        l = t(24033),
        r = t(94042),
        c = t(60598),
        o = t(41432),
        u = t(41372),
        d = t(56926),
        h = t(64910),
        m = t(70578),
        g = t(5418);
      let p = (e) => {
        let { title: n, subtitle: t, isHome: a = !1, isBeta: p = !1 } = e,
          { openConnectModal: f, connectModalOpen: b } = (0, o.We)(),
          x = (0, h.c7)((e) => e.account),
          { address: w } = (0, d.mA)(),
          { push: j } = (0, l.useRouter)(),
          y = (0, h.Mx)((e) => e.toggleWalletModal);
        return (0, s.jsx)(r.u, {
          className: "flex w-full px-4",
          children: (0, s.jsxs)("div", {
            className: "flex w-full flex-col space-y-2",
            children: [
              !a &&
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row space-y-2 md:space-y-0 items-center justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, s.jsx)(u.Z, {
                              className: "block lg:hidden",
                              onClick: () => j("/app"),
                            }),
                            (0, s.jsx)("h1", {
                              className: "text-2xl",
                              children: n,
                            }),
                          ],
                        }),
                        (0, s.jsx)("h2", {
                          className: "text-lg text-gray-400 hidden lg:block",
                          children: t,
                        }),
                      ],
                    }),
                    !x &&
                      (0, s.jsx)(c.A, {
                        onClick: () => f && f(),
                        isLoading: b,
                        isDisabled: b,
                        className: "block lg:hidden w-full",
                        children: "Connect Wallet",
                      }),
                    x &&
                      (0, s.jsxs)("div", {
                        className: "flex flex-row space-x-2 md:hidden",
                        children: [
                          (0, s.jsx)(c.A, {
                            className: "bg-blue-500 w-full",
                            onClick: () => f && f(),
                            isDisabled: b,
                            children: (0, m.Cy)(w, 4, -3),
                          }),
                          (0, s.jsx)("div", {
                            className: "w-full",
                            children: (0, s.jsx)(g.B, {
                              onChange: async (e) => {},
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              a &&
                (0, s.jsxs)("div", {
                  className: "flex w-full items-center justify-between",
                  children: [
                    (0, s.jsxs)(i(), {
                      href: "/",
                      className: "flex items-center space-x-2 lg:hidden",
                      children: [
                        (0, s.jsx)("img", {
                          src: "/brian_logo.png",
                          alt: "Brian Knows logo",
                          className: "h-8 md:h-12",
                        }),
                        (0, s.jsx)("h1", {
                          className: "text-2xl md:text-4xl font-bold",
                          children: "Brian",
                        }),
                      ],
                    }),
                    !x &&
                      (0, s.jsx)(c.A, {
                        onClick: () => f && f(),
                        isLoading: b,
                        isDisabled: b,
                        className: "block lg:hidden",
                        children: "Connect Wallet",
                      }),
                    x &&
                      (0, s.jsxs)("div", {
                        className: "flex flex-row space-x-2 lg:hidden",
                        children: [
                          (0, s.jsx)(c.A, {
                            className: "bg-blue-500",
                            onClick: () => y(),
                            children: (0, m.Cy)(w, 4, -3),
                          }),
                          (0, s.jsx)(g.B, { onChange: async (e) => {} }),
                        ],
                      }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    5418: function (e, n, t) {
      "use strict";
      t.d(n, {
        B: function () {
          return f;
        },
      });
      var s = t(57437),
        a = t(2265),
        i = t(43232),
        l = t(13409),
        r = t(60598),
        c = t(91026),
        o = t(97256),
        u = t(69568),
        d = t(48793),
        h = t(56926),
        m = t(64910),
        g = t(70578);
      let p = {
        "taiko mainnet":
          "https://avatars.githubusercontent.com/u/99078433?s=280&v=4",
        holesky:
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/ethereum/32.png?raw=true",
        "gnosis chiado":
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/gnosis-gno/32.png?raw=true",
        "linea goerli testnet":
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/ethereum/32.png?raw=true",
        "optimism goerli":
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/optimism/32.png?raw=true",
        "polygon mumbai":
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/polygon/32.png?raw=true",
        gnosis:
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/gnosis-gno/32.png?raw=true",
        arbitrum:
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/arbitrum/32.png?raw=true",
        "arbitrum one":
          "https://github.com/thirdweb-dev/chain-icons/blob/main/png/arbitrum/32.png?raw=true",
        ethereum:
          "https://raw.githubusercontent.com/thirdweb-dev/chain-icons/main/png/ethereum/32.png",
        polygon:
          "https://raw.githubusercontent.com/thirdweb-dev/chain-icons/main/png/polygon/32.png",
        "op mainnet":
          "https://raw.githubusercontent.com/thirdweb-dev/chain-icons/main/png/optimism/32.png",
        "linea mainnet":
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/linea.svg",
        base: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/base.svg",
        fantom:
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fantom.svg",
        avalanche:
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche.svg",
        "bnb smart chain":
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg",
        aurora:
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/aurora.png",
        "zksync era":
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zksync.svg",
        okc: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/okx.svg",
        scroll:
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/scroll.png",
        blast:
          "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/blast.png",
        mode: "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mode.png",
      };
      function f(e) {
        let { onChange: n } = e,
          { chain: t, chains: f } = (0, h.LN)(),
          b = (0, m.zi)((e) => e.chain),
          x = (0, m.zi)((e) => e.setChain),
          { switchNetwork: w } = (0, h.g0)({
            onSuccess: (e) => {
              x(e.name.toLowerCase());
            },
          });
        (0, m.c7)((e) => e.account);
        let j =
          !!t &&
          f.filter((e) => e.name.toLowerCase() === t.name.toLowerCase())
            .length > 0;
        return (
          (0, a.useEffect)(() => {
            t && x(t.name.toLowerCase());
          }, [t]),
          (0, s.jsxs)(i.F, {
            children: [
              (0, s.jsx)(l.S, {
                children: (0, s.jsx)(r.A, {
                  variant: "flat",
                  isDisabled: !b,
                  children: j
                    ? b
                      ? (0, s.jsxs)("span", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, s.jsx)(c.J, {
                              src: p[b.toLowerCase()],
                              alt: "Ethereum logo",
                              className: "mr-2",
                              height: 16,
                              width: 16,
                            }),
                            (0, s.jsx)("p", { children: (0, g.Gp)(b) }),
                          ],
                        })
                      : (0, s.jsx)("span", { children: "Connect your wallet!" })
                    : (0, s.jsx)("span", { children: "Unsupported Network" }),
                }),
              }),
              (0, s.jsxs)(o.a, {
                children: [
                  (0, s.jsx)(u.d, {
                    title: "Testnets",
                    showDivider: !0,
                    children: f
                      .filter((e) => e.testnet)
                      .sort((e, n) => e.name.localeCompare(n.name))
                      .map((e) =>
                        (0, s.jsx)(
                          d.W,
                          {
                            className: "flex space-x-2",
                            shortcut: e.nativeCurrency.symbol,
                            onClick: async () => {
                              w && (w(e.id), await n(e.name));
                            },
                            startContent: (0, s.jsx)(c.J, {
                              src: p[e.name.toLowerCase()],
                              alt: "Ethereum logo",
                              className: "mr-2",
                              height: 16,
                              width: 16,
                            }),
                            children: (0, s.jsx)("span", {
                              children: (0, g.Gp)(e.name),
                            }),
                          },
                          e.id
                        )
                      ),
                  }),
                  (0, s.jsx)(u.d, {
                    title: "Mainnets",
                    showDivider: !0,
                    children: f
                      .filter((e) => !e.testnet)
                      .sort((e, n) => e.name.localeCompare(n.name))
                      .map((e) =>
                        (0, s.jsx)(
                          d.W,
                          {
                            className: "flex space-x-2",
                            shortcut: e.nativeCurrency.symbol,
                            onClick: async () => {
                              w && (w(e.id), await n(e.name));
                            },
                            startContent: (0, s.jsx)(c.J, {
                              src: p[e.name.toLowerCase()],
                              alt: "Ethereum logo",
                              className: "mr-2",
                              height: 16,
                              width: 16,
                            }),
                            children: (0, s.jsx)("span", {
                              children: (0, g.Gp)(e.name),
                            }),
                          },
                          e.id
                        )
                      ),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    64910: function (e, n, t) {
      "use strict";
      t.d(n, {
        c7: function () {
          return a;
        },
        HH: function () {
          return i;
        },
        FY: function () {
          return l;
        },
        zi: function () {
          return r;
        },
        z: function () {
          return c;
        },
        Rp: function () {
          return o;
        },
        Nh: function () {
          return u;
        },
        Mx: function () {
          return d;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
          account: void 0,
          setAccount: (n) => e({ account: n }),
        })),
        i = (0, s.Ue)((e) => ({
          open: !1,
          toggleApiKeysModal: () => e((e) => ({ open: !e.open })),
        })),
        l = (0, s.Ue)((e) => ({
          messages: [],
          addMessage: (n) => e((e) => ({ messages: [...e.messages, n] })),
          replaceLastMessage: (n) =>
            e((e) => {
              let t = e.messages;
              return (t[t.length - 1] = n), { messages: t };
            }),
          clearMessages: () => e({ messages: [] }),
        })),
        r = (0, s.Ue)((e) => ({
          chain: "goerli",
          setChain: (n) => {
            e({ chain: n });
          },
        }));
      (0, s.Ue)((e) => ({
        inViewFeature: null,
        setInViewFeature: (n) => e({ inViewFeature: n }),
        fullscreenFeature: null,
        setFullscreenFeature: (n) => {
          e({ fullscreenFeature: n }),
            null !== n && e({ lastFullscreenFeature: n });
        },
        lastFullscreenFeature: null,
        setLastFullscreenFeature: (n) => e({ lastFullscreenFeature: n }),
      }));
      let c = (0, s.Ue)((e) => ({
        transactions: [],
        addTransaction: (n) => {
          e((e) => ({ transactions: [...e.transactions, n] }));
        },
        modalOpen: !1,
        toggleHistoryModal: () => e((e) => ({ modalOpen: !e.modalOpen })),
      }));
      (0, s.Ue)((e) => ({
        currentMode: "standard",
        changeMode: (n) => e({ currentMode: n }),
      }));
      let o = (0, s.Ue)((e) => ({
          messages: [],
          addMessage: (n) => e((e) => ({ messages: [...e.messages, n] })),
          replaceLastMessage: (n) =>
            e((e) => {
              let t = e.messages;
              return (t[t.length - 1] = n), { messages: t };
            }),
          clearMessages: () => e({ messages: [] }),
        })),
        u = (0, s.Ue)((e) => ({
          currentItem: 0,
          setCurrentItem: (n) => e({ currentItem: n }),
          open: !0,
          toggleSidebar: () => e((e) => ({ open: !e.open })),
          showNames: !0,
          toggleNames: async (n) => {
            n && (await new Promise((e) => setTimeout(e, 150))),
              e({ showNames: n });
          },
        })),
        d = (0, s.Ue)((e) => ({
          open: !1,
          toggleWalletModal: () => e((e) => ({ open: !e.open })),
        }));
      (0, s.Ue)((e) => ({
        messages: [],
        addMessage: (n) => e((e) => ({ messages: [...e.messages, n] })),
        replaceLastMessage: (n) =>
          e((e) => {
            let t = e.messages;
            return (t[t.length - 1] = n), { messages: t };
          }),
        clearMessages: () => e({ messages: [] }),
      }));
    },
    30415: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let s = t(21024);
      t(2265);
      let a = s._(t(54));
      function i(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function l(e, n) {
        let t = a.default,
          s = {
            loading: (e) => {
              let { error: n, isLoading: t, pastDelay: s } = e;
              return null;
            },
          };
        "function" == typeof e && (s.loader = e), Object.assign(s, n);
        let l = s.loader;
        return t({
          ...s,
          loader: () =>
            null != l ? l().then(i) : Promise.resolve(i(() => null)),
        });
      }
      ("function" == typeof n.default ||
        ("object" == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, "__esModule", { value: !0 }),
        Object.assign(n.default, n),
        (e.exports = n.default));
    },
    63388: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (function (e, n) {
          for (var t in n)
            Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        })(n, {
          suspense: function () {
            return a;
          },
          NoSSR: function () {
            return i;
          },
        }),
        t(21024),
        t(2265);
      let s = t(54922);
      function a() {
        let e = Error(s.NEXT_DYNAMIC_NO_SSR_CODE);
        throw ((e.digest = s.NEXT_DYNAMIC_NO_SSR_CODE), e);
      }
      function i(e) {
        let { children: n } = e;
        return n;
      }
    },
    54: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let s = t(21024),
        a = s._(t(2265)),
        i = t(63388),
        l = function (e) {
          let n = Object.assign({ loader: null, loading: null, ssr: !0 }, e);
          function t(e) {
            let t = n.loading,
              s = a.default.createElement(t, {
                isLoading: !0,
                pastDelay: !0,
                error: null,
              }),
              l = n.ssr ? a.default.Fragment : i.NoSSR,
              r = n.lazy;
            return a.default.createElement(
              a.default.Suspense,
              { fallback: s },
              a.default.createElement(l, null, a.default.createElement(r, e))
            );
          }
          return (
            (n.lazy = a.default.lazy(n.loader)),
            (t.displayName = "LoadableComponent"),
            t
          );
        };
    },
    41372: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(17865);
      let a = (0, s.Z)("ArrowLeft", [
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
        2971, 7864, 1744,
      ],
      function () {
        return e((e.s = 21864));
      }
    ),
      (_N_E = e.O());
  },
]);