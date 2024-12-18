"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3831],
  {
    33831: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return b;
          },
        });
      var r = t(57437),
        n = t(24033),
        s = t(46914),
        i = t(21507),
        o = t(88367),
        l = t(68346),
        d = t(61985),
        c = t(64910),
        u = t(70578);
      function b() {
        let { push: e } = (0, n.useRouter)(),
          a = (0, c.c7)((e) => e.account);
        return (0, r.jsxs)("div", {
          className:
            "mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center",
          children: [
            (0, r.jsx)("h1", {
              className: "text-center text-2xl font-black lg:text-5xl",
              children: "Unlock the power of web3",
            }),
            (0, r.jsx)("h2", {
              className:
                "text-center text-md text-gray-400 lg:text-2xl max-w-3xl",
              children:
                "Search information, execute transactions, and deploy smart contracts by chatting with Brainiac AI.",
            }),
            (0, r.jsx)("div", {
              className: "mt-8 flex w-full flex-col space-y-4 px-4 md:px-16",
              children: d.KH.filter((e) => !e.condition || a).map((a, t) =>
                (0, r.jsx)(
                  s.w,
                  {
                    className:
                      "group cursor-pointer select-none transition-transform hover:-translate-y-2",
                    children: (0, r.jsx)(i.G, {
                      onClick: () => e(a.pathname),
                      children: (0, r.jsxs)("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          (0, r.jsx)("div", {
                            className: (0, u.cn)("rounded-lg p-2 md:p-4"),
                            style: { backgroundColor: a.background },
                            children: (0, r.jsx)(a.icon, {
                              className: "".concat(a.iconColor, " h-6 w-6"),
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, r.jsx)("h3", {
                                className: "text-sm md:text-xl",
                                children: a.title,
                              }),
                              (0, r.jsx)("h3", {
                                className: "hidden text-gray-400 md:block",
                                children: a.subtitle,
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", { className: "grow" }),
                          (0, r.jsx)(l.Z, {
                            className:
                              "text-content3 transition-colors group-hover:text-white",
                            size: 24,
                          }),
                        ],
                      }),
                    }),
                  },
                  "empty-state-item-".concat(t)
                )
              ),
            }),
            (0, r.jsxs)("div", {
              className:
                "mt-8 flex w-full flex-col space-y-4 px-4 md:px-16 text-center",
              children: [
                (0, r.jsxs)("p", {
                  className: "text-foreground text-xs",
                  children: [
                    "Brainiac AI App is built on Brainiac AI API. Brainiac AI is a versatile AI agent designed specifically for Web3 interactions. Learn more in the",
                    "Brainiac AI.",
                    ".",
                  ],
                }),
                (0, r.jsx)("p", { className: "text-xs" }),
              ],
            }),
          ],
        });
      }
    },
    61985: function (e, a, t) {
      t.d(a, {
        I5: function () {
          return o;
        },
        KH: function () {
          return l;
        },
      });
      var r = t(73835),
        n = t(78499),
        s = t(41556),
        i = t(78455);
      let o =
          "Brainiac AI App is a non-custodial solutions still in development. You are aware of the risks involved in using real funds and that the AI is not executing anything on your behalf. You must manually review, sign and execute transactions. Please read the transaction description carefully before executing it. By signing this message, you agree to perform any transactions at your own risk.",
        l = [
          // {
          //   condition: !1,
          //   title: "Ask Brainiac AI",
          //   subtitle:
          //     "Explore the web3 ecosystem and find the resources that you need.",
          //   background: "#1e40af",
          //   icon: r.Z,
          //   iconColor: "text-blue-500",
          //   pathname: "/app/search",
          // },
          // {
          //   condition: !1,
          //   title: "Send transactions",
          //   subtitle:
          //     "Swap your tokens, bridge them across many chains, and much more.",
          //   background: "#065f46",
          //   icon: n.Z,
          //   iconColor: "text-emerald-500",
          //   pathname: "/app/builds",
          // },
          // {
          //   condition: !1,
          //   title: "Deploy Smart Contracts",
          //   subtitle:
          //     "Deploy and verify Smart Contracts on many chains via Brainiac AI.",
          //   icon: s.Z,
          //   background: "#115e59",
          //   iconColor: "text-teal-500",
          //   pathname: "/app/deploy",
          // },
          {
            condition: !1,
            title: "Search Data (coming soon)",
            subtitle: "Ask Brainiac AI to search on-chain and off-chain data.",
            icon: i.Z,
            background: "#6b21a8",
            iconColor: "text-purple-500",
            pathname: "/app/subgraphs",
          },
        ];
    },
    46914: function (e, a, t) {
      t.d(a, {
        w: function () {
          return k;
        },
      });
      var r = t(5817),
        n = t(19556),
        s = t(97174),
        i = (0, n.tv)({
          slots: {
            base: [
              "flex",
              "flex-col",
              "relative",
              "overflow-hidden",
              "height-auto",
              "outline-none",
              "text-foreground",
              "box-border",
              "bg-content1",
              ...s.Dh,
            ],
            header: [
              "flex",
              "p-3",
              "z-10",
              "w-full",
              "justify-start",
              "items-center",
              "shrink-0",
              "overflow-inherit",
              "color-inherit",
              "subpixel-antialiased",
            ],
            body: [
              "relative",
              "flex",
              "flex-1",
              "w-full",
              "p-5",
              "flex-auto",
              "flex-col",
              "place-content-inherit",
              "align-items-inherit",
              "h-auto",
              "break-words",
              "text-left",
              "overflow-y-auto",
              "subpixel-antialiased",
            ],
            footer: [
              "p-3",
              "h-auto",
              "flex",
              "w-full",
              "items-center",
              "overflow-hidden",
              "color-inherit",
              "subpixel-antialiased",
            ],
          },
          variants: {
            shadow: {
              none: { base: "shadow-none" },
              sm: { base: "shadow-small" },
              md: { base: "shadow-medium" },
              lg: { base: "shadow-large" },
            },
            radius: {
              none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none",
              },
              sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small",
              },
              md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium",
              },
              lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large",
              },
            },
            fullWidth: { true: { base: "w-full" } },
            isHoverable: {
              true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2",
              },
            },
            isPressable: { true: { base: "cursor-pointer" } },
            isBlurred: {
              true: {
                base: [
                  "bg-background/80",
                  "dark:bg-background/20",
                  "backdrop-blur-md",
                  "backdrop-saturate-150",
                ],
              },
            },
            isFooterBlurred: {
              true: {
                footer: [
                  "bg-background/10",
                  "backdrop-blur",
                  "backdrop-saturate-150",
                ],
              },
            },
            isDisabled: {
              true: { base: "opacity-disabled cursor-not-allowed" },
            },
            disableAnimation: {
              true: "",
              false: {
                base: "transition-transform-background motion-reduce:transition-none",
              },
            },
          },
          compoundVariants: [
            {
              isPressable: !0,
              disableAnimation: !1,
              class:
                "data-[pressed=true]:scale-[0.97] tap-highlight-transparent",
            },
          ],
          defaultVariants: {
            radius: "lg",
            shadow: "md",
            fullWidth: !1,
            isHoverable: !1,
            isPressable: !1,
            isDisabled: !1,
            disableAnimation: !1,
            isFooterBlurred: !1,
          },
        }),
        o = t(2265),
        l = t(94625),
        d = t(26565),
        c = t(86820),
        u = t(2835),
        b = t(77485),
        f = t(59762),
        h = t(48794),
        x = t(19662),
        m = t(25312),
        p = t(81533),
        y = t(74089),
        g = t(57437),
        v = (0, b.Gp)((e, a) => {
          let {
            children: t,
            context: n,
            Component: s,
            isPressable: v,
            disableAnimation: k,
            disableRipple: w,
            getCardProps: j,
            getRippleProps: B,
          } = (function (e) {
            let [a, t] = (0, b.oe)(e, i.variantKeys),
              {
                ref: r,
                as: n,
                children: s,
                disableRipple: y = !1,
                onClick: g,
                onPress: v,
                autoFocus: k,
                className: w,
                classNames: j,
                allowTextSelectionOnPress: B = !0,
                ...C
              } = a,
              N = (0, m.gy)(r),
              P = n || (e.isPressable ? "button" : "div"),
              A = "string" == typeof P,
              D = (0, f.W)(null == j ? void 0 : j.base, w),
              { onClick: Z, onClear: z, ripples: H } = (0, p.i)(),
              M = (a) => {
                e.disableAnimation || y || !N.current || Z(a);
              },
              { buttonProps: I, isPressed: F } = (0, u.j)(
                {
                  onPress: v,
                  elementType: n,
                  isDisabled: !e.isPressable,
                  onClick: (0, l.tS)(g, M),
                  allowTextSelectionOnPress: B,
                  ...C,
                },
                N
              ),
              { hoverProps: S, isHovered: W } = (0, c.XI)({
                isDisabled: !e.isHoverable,
                ...C,
              }),
              {
                isFocusVisible: G,
                isFocused: L,
                focusProps: V,
              } = (0, d.Fx)({ autoFocus: k }),
              O = (0, o.useMemo)(() => i({ ...t }), [...Object.values(t)]),
              _ = (0, o.useMemo)(
                () => ({
                  isDisabled: e.isDisabled,
                  isFooterBlurred: e.isFooterBlurred,
                  disableAnimation: e.disableAnimation,
                  fullWidth: e.fullWidth,
                  slots: O,
                  classNames: j,
                }),
                [
                  O,
                  j,
                  e.isDisabled,
                  e.isFooterBlurred,
                  e.disableAnimation,
                  e.fullWidth,
                ]
              ),
              q = (0, o.useCallback)(
                (a = {}) => ({
                  ref: N,
                  className: O.base({ class: D }),
                  tabIndex: e.isPressable ? 0 : -1,
                  "data-hover": (0, h.PB)(W),
                  "data-pressed": (0, h.PB)(F),
                  "data-focus": (0, h.PB)(L),
                  "data-focus-visible": (0, h.PB)(G),
                  "data-disabled": (0, h.PB)(e.isDisabled),
                  ...(0, l.dG)(
                    e.isPressable ? { ...I, ...V, role: "button" } : {},
                    e.isHoverable ? S : {},
                    (0, x.z)(C, { enabled: A }),
                    (0, x.z)(a)
                  ),
                }),
                [
                  N,
                  O,
                  D,
                  A,
                  e.isPressable,
                  e.isHoverable,
                  e.isDisabled,
                  W,
                  F,
                  G,
                  I,
                  V,
                  S,
                  C,
                ]
              ),
              K = (0, o.useCallback)(
                () => ({ ripples: H, onClear: z }),
                [H, z]
              );
            return {
              context: _,
              domRef: N,
              Component: P,
              classNames: j,
              children: s,
              isHovered: W,
              isPressed: F,
              isPressable: e.isPressable,
              isHoverable: e.isHoverable,
              disableAnimation: e.disableAnimation,
              disableRipple: y,
              handleClick: M,
              isFocusVisible: G,
              getCardProps: q,
              getRippleProps: K,
            };
          })({ ...e, ref: a });
          return (0, g.jsxs)(s, {
            ...j(),
            children: [
              (0, g.jsx)(r.k, { value: n, children: t }),
              v && !k && !w && (0, g.jsx)(y.L, { ...B() }),
            ],
          });
        });
      v.displayName = "NextUI.Card";
      var k = v;
    },
    88367: function (e, a, t) {
      t.d(a, {
        O: function () {
          return m;
        },
      });
      var r = t(19556),
        n = t(97174),
        s = (0, r.tv)({
          base: [
            "relative inline-flex items-center outline-none tap-highlight-transparent",
            ...n.Dh,
          ],
          variants: {
            size: { sm: "text-small", md: "text-medium", lg: "text-large" },
            color: {
              foreground: "text-foreground",
              primary: "text-primary",
              secondary: "text-secondary",
              success: "text-success",
              warning: "text-warning",
              danger: "text-danger",
            },
            underline: {
              none: "no-underline",
              hover: "hover:underline",
              always: "underline",
              active: "active:underline",
              focus: "focus:underline",
            },
            isBlock: {
              true: [
                "px-2",
                "py-1",
                "hover:after:opacity-100",
                "after:content-['']",
                "after:inset-0",
                "after:opacity-0",
                "after:w-full",
                "after:h-full",
                "after:rounded-xl",
                "after:transition-background",
                "after:absolute",
              ],
              false:
                "hover:opacity-80 active:opacity-disabled transition-opacity",
            },
            isDisabled: {
              true: "opacity-disabled cursor-default pointer-events-none",
            },
            disableAnimation: { true: "after:transition-none transition-none" },
          },
          compoundVariants: [
            {
              isBlock: !0,
              color: "foreground",
              class: "hover:after:bg-foreground/10",
            },
            {
              isBlock: !0,
              color: "primary",
              class: "hover:after:bg-primary/20",
            },
            {
              isBlock: !0,
              color: "secondary",
              class: "hover:after:bg-secondary/20",
            },
            {
              isBlock: !0,
              color: "success",
              class: "hover:after:bg-success/20",
            },
            {
              isBlock: !0,
              color: "warning",
              class: "hover:after:bg-warning/20",
            },
            { isBlock: !0, color: "danger", class: "hover:after:bg-danger/20" },
            {
              underline: ["hover", "always", "active", "focus"],
              class: "underline-offset-4",
            },
          ],
          defaultVariants: {
            color: "primary",
            size: "md",
            isBlock: !1,
            underline: "none",
            isDisabled: !1,
            disableAnimation: !1,
          },
        }),
        i = t(94625),
        o = t(26565),
        l = t(86820),
        d = t(77485),
        c = t(25312),
        u = t(48794),
        b = t(2265),
        f = t(57437),
        h = (e) =>
          (0, f.jsxs)("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            shapeRendering: "geometricPrecision",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 24 24",
            width: "1em",
            ...e,
            children: [
              (0, f.jsx)("path", {
                d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
              }),
              (0, f.jsx)("path", { d: "M15 3h6v6" }),
              (0, f.jsx)("path", { d: "M10 14L21 3" }),
            ],
          }),
        x = (0, d.Gp)((e, a) => {
          let {
            Component: t,
            children: r,
            showAnchorIcon: n,
            anchorIcon: x = (0, f.jsx)(h, {
              className: "flex mx-1 text-current self-center",
            }),
            getLinkProps: m,
          } = (function (e) {
            var a, t;
            let [r, n] = (0, d.oe)(e, s.variantKeys),
              {
                ref: f,
                as: h,
                children: x,
                anchorIcon: m,
                isExternal: p = !1,
                showAnchorIcon: y = !1,
                autoFocus: g = !1,
                className: v,
                onPress: k,
                onPressStart: w,
                onPressEnd: j,
                onClick: B,
                ...C
              } = r,
              N = (0, c.gy)(f),
              { linkProps: P } = (function (e, a) {
                let {
                    elementType: t = "a",
                    onPress: r,
                    onPressStart: n,
                    onPressEnd: s,
                    onClick: d,
                    isDisabled: c,
                    ...u
                  } = e,
                  b = {};
                "a" !== t && (b = { role: "link", tabIndex: c ? void 0 : 0 });
                let { focusableProps: f } = (0, o.kc)(e, a),
                  { pressProps: h, isPressed: x } = (0, l.r7)({
                    onPress: r,
                    onPressStart: n,
                    onPressEnd: s,
                    isDisabled: c,
                    ref: a,
                  }),
                  m = (0, i.zL)(u, { labelable: !0 }),
                  p = (0, i.dG)(f, h);
                return {
                  isPressed: x,
                  linkProps: (0, i.dG)(m, {
                    ...p,
                    ...b,
                    "aria-disabled": c || void 0,
                    "aria-current": e["aria-current"],
                    onClick: (e) => {
                      var a;
                      null == (a = h.onClick) || a.call(h, e), d && d(e);
                    },
                  }),
                };
              })(
                {
                  ...C,
                  onPress: k,
                  onPressStart: w,
                  onPressEnd: j,
                  onClick: B,
                  isDisabled: e.isDisabled,
                  elementType: `${h}`,
                },
                N
              ),
              {
                isFocused: A,
                isFocusVisible: D,
                focusProps: Z,
              } = (0, o.Fx)({ autoFocus: g });
            p &&
              ((C.rel = null != (a = C.rel) ? a : "noopener noreferrer"),
              (C.target = null != (t = C.target) ? t : "_blank"));
            let z = (0, b.useMemo)(
                () => s({ ...n, className: v }),
                [...Object.values(n), v]
              ),
              H = (0, b.useCallback)(
                () => ({
                  ref: N,
                  className: z,
                  "data-focus": (0, u.PB)(A),
                  "data-disabled": (0, u.PB)(e.isDisabled),
                  "data-focus-visible": (0, u.PB)(D),
                  ...(0, i.dG)(Z, P, C),
                }),
                [z, A, D, Z, P, C]
              );
            return {
              Component: h || "a",
              children: x,
              anchorIcon: m,
              showAnchorIcon: y,
              getLinkProps: H,
            };
          })({ ref: a, ...e });
          return (0, f.jsx)(t, {
            ...m(),
            children: (0, f.jsxs)(f.Fragment, { children: [r, n && x] }),
          });
        });
      x.displayName = "NextUI.Link";
      var m = x;
    },
    68346: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return n;
        },
      });
      var r = t(17865);
      let n = (0, r.Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    41556: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return n;
        },
      });
      var r = t(17865);
      let n = (0, r.Z)("Codesandbox", [
        [
          "path",
          {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn",
          },
        ],
        ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
        ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
        ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
        [
          "polyline",
          { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" },
        ],
        ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }],
      ]);
    },
    78499: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return n;
        },
      });
      var r = t(17865);
      let n = (0, r.Z)("CreditCard", [
        [
          "rect",
          { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
        ],
        ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ]);
    },
    78455: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return n;
        },
      });
      var r = t(17865);
      let n = (0, r.Z)("Orbit", [
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
        ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
        ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416", key: "eohfx2" }],
        ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416", key: "19pvbm" }],
      ]);
    },
    73835: function (e, a, t) {
      t.d(a, {
        Z: function () {
          return n;
        },
      });
      var r = t(17865);
      let n = (0, r.Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
  },
]);
