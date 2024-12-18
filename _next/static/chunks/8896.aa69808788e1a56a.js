"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8896],
  {
    5418: function (e, n, s) {
      s.d(n, {
        B: function () {
          return b;
        },
      });
      var t = s(57437),
        i = s(2265),
        a = s(43232),
        c = s(13409),
        o = s(60598),
        r = s(91026),
        l = s(97256),
        h = s(69568),
        m = s(48793),
        p = s(56926),
        d = s(64910),
        u = s(70578);
      let g = {
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
      function b(e) {
        let { onChange: n } = e,
          { chain: s, chains: b } = (0, p.LN)(),
          x = (0, d.zi)((e) => e.chain),
          w = (0, d.zi)((e) => e.setChain),
          { switchNetwork: f } = (0, p.g0)({
            onSuccess: (e) => {
              w(e.name.toLowerCase());
            },
          });
        (0, d.c7)((e) => e.account);
        let j =
          !!s &&
          b.filter((e) => e.name.toLowerCase() === s.name.toLowerCase())
            .length > 0;
        return (
          (0, i.useEffect)(() => {
            s && w(s.name.toLowerCase());
          }, [s]),
          (0, t.jsxs)(a.F, {
            children: [
              (0, t.jsx)(c.S, {
                children: (0, t.jsx)(o.A, {
                  variant: "flat",
                  isDisabled: !x,
                  children: j
                    ? x
                      ? (0, t.jsxs)("span", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, t.jsx)(r.J, {
                              src: g[x.toLowerCase()],
                              alt: "Ethereum logo",
                              className: "mr-2",
                              height: 16,
                              width: 16,
                            }),
                            (0, t.jsx)("p", { children: (0, u.Gp)(x) }),
                          ],
                        })
                      : (0, t.jsx)("span", { children: "Connect your wallet!" })
                    : (0, t.jsx)("span", { children: "Unsupported Network" }),
                }),
              }),
              (0, t.jsxs)(l.a, {
                children: [
                  (0, t.jsx)(h.d, {
                    title: "Testnets",
                    showDivider: !0,
                    children: b
                      .filter((e) => e.testnet)
                      .sort((e, n) => e.name.localeCompare(n.name))
                      .map((e) =>
                        (0, t.jsx)(
                          m.W,
                          {
                            className: "flex space-x-2",
                            shortcut: e.nativeCurrency.symbol,
                            onClick: async () => {
                              f && (f(e.id), await n(e.name));
                            },
                            startContent: (0, t.jsx)(r.J, {
                              src: g[e.name.toLowerCase()],
                              alt: "Ethereum logo",
                              className: "mr-2",
                              height: 16,
                              width: 16,
                            }),
                            children: (0, t.jsx)("span", {
                              children: (0, u.Gp)(e.name),
                            }),
                          },
                          e.id
                        )
                      ),
                  }),
                  (0, t.jsx)(h.d, {
                    title: "Mainnets",
                    showDivider: !0,
                    children: b
                      .filter((e) => !e.testnet)
                      .sort((e, n) => e.name.localeCompare(n.name))
                      .map((e) =>
                        (0, t.jsx)(
                          m.W,
                          {
                            className: "flex space-x-2",
                            shortcut: e.nativeCurrency.symbol,
                            onClick: async () => {
                              f && (f(e.id), await n(e.name));
                            },
                            startContent: (0, t.jsx)(r.J, {
                              src: g[e.name.toLowerCase()],
                              alt: "Ethereum logo",
                              className: "mr-2",
                              height: 16,
                              width: 16,
                            }),
                            children: (0, t.jsx)("span", {
                              children: (0, u.Gp)(e.name),
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
    28896: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return E;
          },
        });
      var t = s(57437),
        i = s(2265),
        a = s(46914),
        c = s(21507),
        o = s(60598),
        r = s(41432),
        l = s(33153),
        h = s(47713),
        m = s(77896),
        p = s(46355),
        d = s(66486),
        u = s(82616),
        g = s(53611),
        b = s(56926),
        x = s(91890),
        w = s(64910),
        f = s(70578),
        j = s(33469),
        v = s(26324);
      let y = () => {
        let e = (0, w.z)((e) => e.transactions),
          n = (0, w.z)((e) => e.modalOpen),
          s = (0, w.z)((e) => e.toggleHistoryModal);
        return 0 === e.length
          ? (0, t.jsx)(o.A, {
              isIconOnly: !0,
              isDisabled: !0,
              className: "opacity-100",
              children: (0, t.jsx)(v.Z, {}),
            })
          : (0, t.jsx)(j.O, {
              content: e.length,
              isInvisible: 0 === e.length,
              children: (0, t.jsx)(o.A, {
                isDisabled: n,
                onClick: () => s(),
                isIconOnly: !0,
                className: "bg-blue-500",
                children: (0, t.jsx)(v.Z, {}),
              }),
            });
      };
      var C = s(5418),
        k = s(7866),
        N = s(46802),
        L = s(36796),
        z = s(3562),
        D = s(6435);
      let A = () => {
        let { theme: e, setTheme: n } = (0, D.F)(),
          s = (0, w.Nh)((e) => e.open);
        return (0, t.jsxs)(k.n, {
          fullWidth: !0,
          selectedKey: e,
          onSelectionChange: (e) => n(e.toString()),
          children: [
            (0, t.jsx)(
              N.r,
              {
                title: (0, t.jsxs)("div", {
                  className: "flex space-x-2 items-center",
                  children: [
                    (0, t.jsx)(L.Z, { size: 20 }),
                    s && (0, t.jsx)("p", { children: "Dark" }),
                  ],
                }),
              },
              "dark"
            ),
            (0, t.jsx)(
              N.r,
              {
                title: (0, t.jsxs)("div", {
                  className: "flex space-x-2 items-center",
                  children: [
                    (0, t.jsx)(z.Z, { size: 20 }),
                    s && (0, t.jsx)("p", { children: "Light" }),
                  ],
                }),
              },
              "light"
            ),
          ],
        });
      };
      function E() {
        let { openConnectModal: e, connectModalOpen: n } = (0, r.We)(),
          { address: s, isConnected: j, connector: v } = (0, b.mA)(),
          { disconnect: k } = (0, b.qL)(),
          N = (0, w.Nh)((e) => e.open),
          L = (0, w.Mx)((e) => e.toggleWalletModal),
          { setIsOpen: z } = (0, l.rN)(),
          D = (0, w.Nh)((e) => e.showNames),
          E = (0, w.Nh)((e) => e.toggleNames),
          Z = (0, w.c7)((e) => e.account),
          _ = (0, w.c7)((e) => e.setAccount),
          O = (0, w.z)((e) => e.transactions),
          M = (0, g.U0)();
        console.log(s),
          (0, i.useEffect)(() => {
            E(N);
          }, [N]),
          (0, i.useEffect)(() => {
            console.log(s, j), j && s && G();
          }, [s, j]);
        let G = async () => {
            console.log("handleAccountChange");
            let e = (0, h.getCookie)("brian-address");
            if ((console.log(e, s), e && s)) {
              if (e.toLowerCase() === s.toLowerCase()) {
                let e = await fetch("/api/auth/me"),
                  { account: n } = await e.json();
                _(n), n && (null == M || M.identify(n.address));
              } else await x.kk.signOut(), _(void 0);
            } else await x.kk.signOut(), _(void 0);
          },
          W = [
            // {
            //   condition: !0,
            //   onClick: () => {
            //     null == M || M.capture("docs_clicked"),
            //       window.open("https://docs.brianknows.org", "_blank");
            //   },
            //   icon: m.Z,
            //   color: "text-indigo-500",
            //   name: "Docs",
            // },
            {
              condition: Z,
              onClick: () => {
                null == M || M.capture("help_clicked"), z(!0);
              },
              icon: p.Z,
              color: "text-red-500",
              name: "Help",
            },
            {
              condition: Z,
              onClick: () => {
                null == M || M.capture("logout_clicked"), k();
              },
              icon: d.Z,
              color: "text-gray-500",
              name: "Disconnect",
            },
          ];
        return (0, t.jsxs)("div", {
          className: "flex w-full flex-col space-y-4",
          children: [
            (0, t.jsx)("div", {
              className: "flex flex-col select-none space-y-2",
              children: W.filter((e) => e.condition).map((e, n) =>
                (0, t.jsxs)(
                  "div",
                  {
                    id: "".concat(e.name.toLowerCase().replace(" ", "-")),
                    onClick: e.onClick,
                    className:
                      "group flex space-x-4 rounded-md cursor-pointer px-4 py-2 transition-colors hover:bg-content2",
                    children: [
                      (0, t.jsx)(e.icon, { size: 24, className: e.color }),
                      (0, t.jsx)("p", {
                        className: (0, f.cn)(
                          "text-gray-400 transition opacity-100 dark:group-hover:text-white group-hover:text-gray-800",
                          !D && "invisible w-0 h-0 opacity-0"
                        ),
                        children: e.name,
                      }),
                    ],
                  },
                  "menu-item-".concat(name, "-").concat(n)
                )
              ),
            }),
            (0, t.jsx)(A, {}),
            (0, t.jsxs)(a.w, {
              children: [
                !Z &&
                  (0, t.jsx)(c.G, {
                    children: (0, t.jsx)(o.A, {
                      onClick: () => {
                        e && e();
                      },
                      isLoading: n,
                      isDisabled: n,
                      className: "text-xs lg:text-medium",
                      children: "Connect",
                    }),
                  }),
                Z &&
                  (0, t.jsxs)(c.G, {
                    className: "flex flex-col space-y-2 ".concat(
                      N ? "p-4" : "p-2"
                    ),
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          (0, t.jsxs)(o.A, {
                            className: "bg-blue-500 w-full",
                            onClick: () => L(),
                            children: [
                              (0, t.jsx)(u.Z, { size: 16 }),
                              (0, t.jsx)("span", {
                                children: (0, f.Cy)(s, N ? 6 : 4, N ? -5 : -3),
                              }),
                            ],
                          }),
                          O.length > 0 && (0, t.jsx)(y, {}),
                        ],
                      }),
                      (0, t.jsx)(C.B, { onChange: async (e) => {} }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
