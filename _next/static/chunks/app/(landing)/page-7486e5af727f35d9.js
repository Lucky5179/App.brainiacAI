(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [818],
  {
    45141: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 73665)),
        Promise.resolve().then(s.bind(s, 92836)),
        Promise.resolve().then(s.bind(s, 90521)),
        Promise.resolve().then(s.bind(s, 81969)),
        Promise.resolve().then(s.bind(s, 45365)),
        Promise.resolve().then(s.bind(s, 48549)),
        Promise.resolve().then(s.bind(s, 18964)),
        Promise.resolve().then(s.bind(s, 27283)),
        Promise.resolve().then(s.bind(s, 57937));
    },
    73665: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var r = s(57437),
        a = s(80206),
        n = s(61726),
        i = s(74213);
      let o = [
          {
            label: "Product",
            items: [
              {
                href: "https://docs.brianknows.org/brian-app-beta/overview",
                name: "Features",
              },
              { href: "#pricing", name: "Pricing" },
              { href: "https://docs.brianknows.org/faq", name: "FAQ" },
              { href: "mailto:info@brianknows.org", name: "Support" },
            ],
          },
          {
            label: "Company",
            items: [
              { href: "https://medium.com/@BrianknowsAI", name: "Blog" },
              { href: "mailto:info@brianknows.org", name: "Contact" },
            ],
          },
          {
            label: "Resources",
            items: [
              { href: "https://docs.brianknows.org", name: "Documentation" },
              {
                href: "https://api.brianknows.org/swagger",
                name: "API Reference",
              },
            ],
          },
          {
            label: "Legal",
            items: [
              { href: "#", name: "Privacy Policy" },
              { href: "#", name: "Terms of Service" },
            ],
          },
        ],
        l = [
          {
            href: "https://x.com/BrianknowsAI",
            name: "Twitter",
            icon: (0, r.jsx)(a.Z, { className: "size-4" }),
          },
          {
            href: "https://medium.com/@BrianknowsAI",
            name: "Medium",
            icon: (0, r.jsx)(n.Z, { className: "size-4" }),
          },
        ];
      function c() {
        return (0, r.jsx)("footer", {
          className: "",
          children: (0, r.jsxs)("div", {
            className: "mx-auto w-full max-w-[1000px] px-4",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "gap-4 p-2 md:p-4 py-16 sm:pb-16 md:flex md:justify-between",
                children: [
                  (0, r.jsx)("div", {
                    className: "mb-12 flex flex-col gap-4",
                    children: (0, r.jsxs)("a", {
                      href: "/",
                      className: "flex items-center gap-2",
                      children: [
                        (0, r.jsx)("img", {
                          className: "h-7 w-7",
                          src: "/brian_logo.png",
                          alt: "Brian Logo",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "self-center whitespace-nowrap text-2xl font-semibold text-neutral-900 dark:text-white",
                          children: "Brian",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4",
                    children: o.map((e) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white",
                              children: e.label,
                            }),
                            (0, r.jsx)("ul", {
                              className: "grid gap-2",
                              children: e.items.map((e) =>
                                (0, r.jsx)(
                                  "li",
                                  {
                                    children: (0, r.jsxs)("a", {
                                      href: e.href,
                                      className:
                                        "group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200",
                                      children: [
                                        e.name,
                                        (0, r.jsx)(i.Z, {
                                          className:
                                            "h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                                        }),
                                      ],
                                    }),
                                  },
                                  e.name
                                )
                              ),
                            }),
                          ],
                        },
                        e.label
                      )
                    ),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-col gap-2 border-t border-t-primary py-4 sm:flex sm:flex-row sm:items-center sm:justify-between px-2 md:px-0",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex space-x-3 sm:mt-0 sm:justify-center",
                    children: l.map((e) =>
                      (0, r.jsxs)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "fill-neutral-500 text-neutral-500 hover:fill-neutral-900 hover:text-neutral-900 dark:hover:fill-neutral-600 dark:hover:text-neutral-600",
                          children: [
                            e.icon,
                            (0, r.jsx)("span", {
                              className: "sr-only",
                              children: e.name,
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                  (0, r.jsxs)("span", {
                    className:
                      "text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center",
                    children: [
                      "Copyright \xa9 ",
                      new Date().getFullYear(),
                      " ",
                      (0, r.jsx)("a", {
                        href: "/",
                        className: "cursor-pointer",
                        children: "Santo Labs GmbH",
                      }),
                      ". All Rights Reserved.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    92836: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var r = s(57437),
        a = s(2265),
        n = s(24033),
        i = s(65155),
        o = s(27231),
        l = s(31157),
        c = s(91555),
        d = s(88367),
        x = s(15968),
        m = s(60598),
        u = s(80065),
        h = s(811),
        p = s(80206),
        f = s(6435);
      function g() {
        let [e, t] = a.useState(!1),
          { push: s } = (0, n.useRouter)(),
          { theme: g, setTheme: b } = (0, f.F)();
        return (
          (0, a.useEffect)(() => {
            b("dark");
          }, []),
          (0, r.jsxs)(i.R, {
            isMenuOpen: e,
            onMenuOpenChange: t,
            children: [
              (0, r.jsxs)(o.U, {
                children: [
                  (0, r.jsx)(l.L, {
                    "aria-label": e ? "Close menu" : "Open menu",
                    className: "sm:hidden",
                  }),
                  (0, r.jsx)(c.H, {
                    children: (0, r.jsx)(d.O, {
                      href: "/",
                      className: "flex items-center space-x-2",
                      children: (0, r.jsx)("img", {
                        src: "/brian_logo.png",
                        alt: "Brian Knows logo",
                        className: "h-12",
                      }),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(o.U, {
                className: "hidden sm:flex gap-4",
                justify: "center",
                children: [
                  (0, r.jsx)(x.k, {
                    children: (0, r.jsx)(d.O, {
                      color: "foreground",
                      href: "#vision",
                      children: "Our vision",
                    }),
                  }),
                  (0, r.jsx)(x.k, {
                    children: (0, r.jsx)(d.O, {
                      color: "foreground",
                      href: "#discover",
                      children: "Discover",
                    }),
                  }),
                  (0, r.jsx)(x.k, {
                    children: (0, r.jsx)(d.O, {
                      color: "foreground",
                      href: "#pricing",
                      children: "Pricing",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(o.U, {
                justify: "end",
                children: [
                  (0, r.jsx)(x.k, {
                    children: (0, r.jsx)(m.A, {
                      as: d.O,
                      isIconOnly: !0,
                      color: "primary",
                      href: "https://twitter.com/BrianknowsAI",
                      isExternal: !0,
                      variant: "flat",
                      children: (0, r.jsx)(p.Z, {}),
                    }),
                  }),
                  (0, r.jsx)(x.k, {
                    children: (0, r.jsx)(m.A, {
                      as: d.O,
                      color: "primary",
                      href: "/app",
                      variant: "flat",
                      children: "Launch app",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(u.$, {
                children: ["Vision", "Discover", "Pricing"].map((e, a) =>
                  (0, r.jsx)(
                    h.h,
                    {
                      className: "w-full",
                      onClick: () => {
                        t(!1), s("#".concat(e.toLowerCase()));
                      },
                      children: e,
                    },
                    "".concat(e, "-").concat(a)
                  )
                ),
              }),
            ],
          })
        );
      }
    },
    90521: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ContactSection: function () {
            return p;
          },
        });
      var r = s(57437),
        a = s(91026),
        n = s(60598),
        i = s(88367),
        o = s(70578),
        l = s(2265),
        c = (e) => {
          let {
            className: t,
            reverse: s,
            pauseOnHover: a = !1,
            children: n,
            ...i
          } = e;
          return (0, r.jsx)("div", {
            ...i,
            className: (0, o.cn)(
              "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
              t
            ),
            children: (0, r.jsxs)("div", {
              className: (0, o.cn)(
                "flex w-max animate-marquee items-stretch gap-[--gap]",
                {
                  "![animation-direction:reverse]": s,
                  "hover:![animation-play-state:paused]": a,
                }
              ),
              children: [
                l.Children.map(n, (e) => (0, l.cloneElement)(e)),
                l.Children.map(n, (e) => (0, l.cloneElement)(e)),
              ],
            }),
          });
        };
      let d = [
          { body: "What is Uniswap v4?" },
          { body: "Swap 1 ETH for USDC on Base" },
          { body: "Deposit 0.5 ETH on Lido" },
          { body: "Bridge 0.6 ETH to Polygon" },
          { body: "How does Brainiac AI work?" },
          { body: "Swap half of my USDC for $DEGEN" },
          { body: "Register Brainiac AI.eth for 2 years" },
          { body: "Buy $100 of ETH with USDC" },
          { body: "When does Brainiac AI.eth expire?" },
        ],
        x = d.slice(0, d.length / 2),
        m = d.slice(d.length / 2),
        u = (e) => {
          let { body: t } = e;
          return (0, r.jsxs)("figure", {
            className: (0, o.cn)(
              "relative w-auto cursor-pointer overflow-hidden rounded-[2rem] border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            ),
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-row items-center gap-2",
              }),
              (0, r.jsx)("blockquote", { className: "text-sm", children: t }),
            ],
          });
        };
      function h() {
        return (0, r.jsx)("section", {
          id: "cta",
          children: (0, r.jsx)("div", {
            className: "pt-24",
            children: (0, r.jsx)("div", {
              className:
                "container mx-auto flex max-w-[1000px] flex-col items-center justify-center p-4 ",
              children: (0, r.jsxs)("div", {
                className:
                  "relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-primary p-10 py-14",
                children: [
                  (0, r.jsxs)("div", {
                    className: "absolute rotate-[35deg] space-y-4",
                    children: [
                      (0, r.jsx)(c, {
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: x.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        reverse: !0,
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: m.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: x.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        reverse: !0,
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: m.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: x.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        reverse: !0,
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: m.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: x.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        reverse: !0,
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: m.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: x.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                      (0, r.jsx)(c, {
                        reverse: !0,
                        pauseOnHover: !0,
                        className: "[--duration:20s]",
                        repeat: 3,
                        children: m.map((e) => (0, r.jsx)(u, { ...e }, e.body)),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "z-10 mx-auto h-24 rounded-[2rem] border border-teal-500 bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32",
                    children: (0, r.jsx)(a.J, {
                      src: "/brian_logo.png",
                      className: "h-[70px] w-[70px] md:h-[100px] md:w-[100px]",
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white",
                    children: [
                      (0, r.jsx)("h1", {
                        className: "text-3xl font-bold lg:text-4xl",
                        children: "Stop wasting time onchain.",
                      }),
                      (0, r.jsx)("p", {
                        className: "my-2",
                        children:
                          "Transform your intents into transactions with Brainiac AI.",
                      }),
                      (0, r.jsx)(n.A, {
                        as: i.O,
                        href: "/app",
                        variant: "flat",
                        className:
                          "relative overflow-visible bg-white/60 px-12 text-black/80 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-lg after:bg-white/80 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0",
                        children: "Launch app",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black",
                  }),
                ],
              }),
            }),
          }),
        });
      }
      let p = () => (0, r.jsx)(h, {});
    },
    81969: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HeroSection: function () {
            return i;
          },
        });
      var r = s(57437),
        a = s(60598),
        n = s(88367);
      let i = () =>
        (0, r.jsxs)("div", {
          className:
            "container z-10 mx-auto flex w-full flex-col items-center justify-center space-y-4 border-none bg-transparent px-2 pb-16 pt-24 md:pt-32 tracking-tight",
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex w-full max-w-4xl flex-col text-center p-1 md:p-0",
              children: [
                (0, r.jsxs)("h1", {
                  className:
                    "text-4xl font-extrabold md:text-7xl max-w-3xl text-center mx-auto",
                  children: [
                    "Unleash the power of",
                    " ",
                    (0, r.jsx)("span", {
                      className:
                        "text-transparent bg-gradient-to-br from-blue-500 to-teal-500 bg-clip-text",
                      children: "web3 Intents",
                    }),
                    " ",
                    "with",
                    " ",
                    (0, r.jsx)("span", {
                      className:
                        "text-transparent bg-gradient-to-br from-blue-500 to-teal-500 bg-clip-text",
                      children: "AI",
                    }),
                  ],
                }),
                (0, r.jsx)("p", {
                  className: "text-md mx-auto max-w-4xl md:text-lg",
                  children:
                    "Execute transactions, search resources and retrieve onchain data by prompting in natural language.",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className:
                "mx-auto grid max-w-xs grid-cols-1 gap-2 md:grid-cols-2 md:gap-4",
              children: [
                (0, r.jsx)(a.A, {
                  as: n.O,
                  href: "https://docs.brianknows.org",
                  isExternal: !0,
                  variant: "bordered",
                  children: "Start building",
                }),
                (0, r.jsx)(a.A, {
                  as: n.O,
                  href: "/app",
                  variant: "flat",
                  className:
                    "relative overflow-visible bg-white/60 px-12 text-black/80 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-lg after:bg-white/80 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0",
                  children: "Launch app",
                }),
              ],
            }),
          ],
        });
    },
    45365: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HowDoesItWorkSection: function () {
            return h;
          },
        });
      var r = s(57437),
        a = s(51729),
        n = s(70578),
        i = s(2265),
        o = s(91026),
        l = s(1111),
        c = s(17648);
      let d = (e) => {
          let {
              className: t,
              containerRef: s,
              fromRef: a,
              toRef: o,
              curvature: l = 0,
              reverse: d = !1,
              duration: x = 3 * Math.random() + 4,
              delay: m = 0,
              pathColor: u = "white",
              pathWidth: h = 2,
              pathOpacity: p = 0.3,
              gradientStartColor: f = "#14b8a6",
              gradientStopColor: g = "#3b82f6",
              startXOffset: b = 0,
              startYOffset: j = 0,
              endXOffset: w = 0,
              endYOffset: v = 0,
            } = e,
            N = (0, i.useId)(),
            [y, k] = (0, i.useState)(""),
            [_, R] = (0, i.useState)({ width: 0, height: 0 }),
            P = d
              ? {
                  x1: ["90%", "-10%"],
                  x2: ["100%", "0%"],
                  y1: ["0%", "0%"],
                  y2: ["0%", "0%"],
                }
              : {
                  x1: ["10%", "110%"],
                  x2: ["0%", "100%"],
                  y1: ["0%", "0%"],
                  y2: ["0%", "0%"],
                };
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                  if (s.current && a.current && o.current) {
                    let e = s.current.getBoundingClientRect(),
                      t = a.current.getBoundingClientRect(),
                      r = o.current.getBoundingClientRect(),
                      n = e.width,
                      i = e.height;
                    R({ width: n, height: i });
                    let c = t.left - e.left + t.width / 2 + b,
                      d = t.top - e.top + t.height / 2 + j,
                      x = r.left - e.left + r.width / 2 + w,
                      m = r.top - e.top + r.height / 2 + v,
                      u = d - l,
                      h = "M "
                        .concat(c, ",")
                        .concat(d, " Q ")
                        .concat((c + x) / 2, ",")
                        .concat(u, " ")
                        .concat(x, ",")
                        .concat(m);
                    k(h);
                  }
                },
                t = new ResizeObserver((t) => {
                  for (let s of t) e();
                });
              return (
                s.current && t.observe(s.current),
                e(),
                () => {
                  t.disconnect();
                }
              );
            }, [s, a, o, l, b, j, w, v]),
            (0, r.jsxs)("svg", {
              fill: "none",
              width: _.width,
              height: _.height,
              xmlns: "http://www.w3.org/2000/svg",
              className: (0, n.cn)(
                "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
                t
              ),
              viewBox: "0 0 ".concat(_.width, " ").concat(_.height),
              children: [
                (0, r.jsx)("path", {
                  d: y,
                  stroke: u,
                  strokeWidth: h,
                  strokeOpacity: p,
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  d: y,
                  strokeWidth: h,
                  stroke: "url(#".concat(N, ")"),
                  strokeOpacity: "1",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)(c.E.linearGradient, {
                    className: "transform-gpu",
                    id: N,
                    gradientUnits: "userSpaceOnUse",
                    initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
                    animate: { x1: P.x1, x2: P.x2, y1: P.y1, y2: P.y2 },
                    transition: {
                      delay: m,
                      duration: x,
                      ease: [0.16, 1, 0.3, 1],
                      repeat: 1 / 0,
                      repeatDelay: 0,
                    },
                    children: [
                      (0, r.jsx)("stop", { stopColor: f, stopOpacity: "0" }),
                      (0, r.jsx)("stop", { stopColor: f }),
                      (0, r.jsx)("stop", { offset: "32.5%", stopColor: g }),
                      (0, r.jsx)("stop", {
                        offset: "100%",
                        stopColor: g,
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        x = (0, i.forwardRef)((e, t) => {
          let { className: s, children: a } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, n.cn)(
              "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
              s
            ),
            children: a,
          });
        });
      function m(e) {
        let { className: t } = e,
          s = (0, i.useRef)(null),
          a = (0, i.useRef)(null),
          c = (0, i.useRef)(null),
          m = (0, i.useRef)(null),
          h = (0, i.useRef)(null),
          p = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          g = (0, i.useRef)(null),
          b = (0, i.useRef)(null);
        return (0, r.jsxs)("div", {
          className: (0, n.cn)(
            "relative hidden md:flex w-full max-w-[1000px] items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl",
            t
          ),
          ref: s,
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex size-full flex-row items-stretch justify-between gap-10",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col justify-center",
                  children: (0, r.jsx)(x, {
                    ref: f,
                    children: (0, r.jsx)(u.user, {}),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-col justify-center",
                  children: (0, r.jsx)(x, {
                    ref: p,
                    className: "size-16",
                    children: (0, r.jsx)(o.J, { src: "/brian_logo.png" }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col justify-center gap-2",
                  children: [
                    (0, r.jsx)(x, {
                      ref: a,
                      className: "p-2",
                      children: (0, r.jsx)(o.J, {
                        src: "/logos/lido_icon.png",
                        radius: "none",
                      }),
                    }),
                    (0, r.jsx)(x, {
                      ref: h,
                      className: "p-1",
                      children: (0, r.jsx)(o.J, {
                        src: "/logos/enso.svg",
                        radius: "none",
                      }),
                    }),
                    (0, r.jsx)(x, {
                      ref: c,
                      className: "p-2",
                      children: (0, r.jsx)(o.J, {
                        src: "/logos/aave.svg",
                        className: "h-12 w-12",
                      }),
                    }),
                    (0, r.jsx)(x, {
                      ref: m,
                      className: "p-3",
                      children: (0, r.jsx)(o.J, {
                        src: "/logos/lifi.png",
                        radius: "none",
                      }),
                    }),
                    (0, r.jsx)(x, {
                      ref: b,
                      className: "p-3",
                      children: (0, r.jsx)(o.J, {
                        src: "/logos/ens.png",
                        radius: "none",
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-col justify-center",
                  children: (0, r.jsx)(x, {
                    ref: g,
                    children: (0, r.jsx)(l.Z, { color: "black" }),
                  }),
                }),
              ],
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: a,
              toRef: g,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: b,
              toRef: g,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: c,
              toRef: g,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: m,
              toRef: g,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: h,
              toRef: g,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: a,
              toRef: p,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: c,
              toRef: p,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: m,
              toRef: p,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: h,
              toRef: p,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: p,
              toRef: f,
              duration: 3,
            }),
            (0, r.jsx)(d, {
              containerRef: s,
              fromRef: b,
              toRef: p,
              duration: 3,
            }),
          ],
        });
      }
      let u = {
          user: () =>
            (0, r.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#000000",
              strokeWidth: "2",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("path", {
                  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                }),
                (0, r.jsx)("circle", { cx: "12", cy: "7", r: "4" }),
              ],
            }),
        },
        h = () =>
          (0, r.jsxs)("section", {
            id: "vision",
            className:
              "container mx-auto max-w-[1000px] space-y-0 px-4 py-16 md:space-y-4 md:px-0",
            children: [
              (0, r.jsx)("h1", {
                className:
                  "text-2xl font-extrabold tracking-widest text-slate-600 uppercase text-center",
                children: "Our vision",
              }),
              (0, r.jsxs)("h2", {
                className: "text-lg md:text-center md:text-3xl text-justify",
                children: [
                  "We ",
                  (0, r.jsx)("span", {
                    className: "italic",
                    children: "believe",
                  }),
                  " in a future where every",
                  " ",
                  (0, r.jsx)("span", {
                    className: "font-bold",
                    children: "onchain interaction",
                  }),
                  " starts from a simple prompt to make web3 accessible to everyone.",
                ],
              }),
              (0, r.jsx)(m, {}),
              (0, r.jsxs)("div", {
                className: "grid grid-cols-3 gap-8",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                      (0, r.jsxs)("h3", {
                        className:
                          "text-3xl md:text-7xl bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text font-bold text-transparent",
                        children: [
                          (0, r.jsx)(a.ZP, { start: 0, end: 25, duration: 2 }),
                          "+",
                        ],
                      }),
                      (0, r.jsx)("h4", {
                        className: "text-xs md:text-medium",
                        children: "Different Actions",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                      (0, r.jsxs)("h3", {
                        className:
                          "text-3xl md:text-7xl bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text font-bold text-transparent",
                        children: [
                          (0, r.jsx)(a.ZP, {
                            start: 0,
                            end: 1e5,
                            duration: 2,
                            formattingFn: (e) => (0, n.uf)(e, 0).toString(),
                          }),
                          "+",
                        ],
                      }),
                      (0, r.jsx)("h4", {
                        className: "text-xs md:text-medium",
                        children: "Transactions",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                      (0, r.jsxs)("h3", {
                        className:
                          "text-3xl md:text-7xl bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text font-bold text-transparent",
                        children: [
                          (0, r.jsx)(a.ZP, {
                            start: 0,
                            end: 1e6,
                            delay: 0,
                            formattingFn: (e) =>
                              "$".concat((0, n.uf)(e, 0).toString()),
                            duration: 2,
                          }),
                          "+",
                        ],
                      }),
                      (0, r.jsxs)("h4", {
                        className: "text-xs md:text-medium",
                        children: [
                          (0, r.jsx)("span", {
                            className: "hidden md:inline-block",
                            children: "Transacted",
                          }),
                          " Volume",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
    },
    48549: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MarqueeSection: function () {
            return n;
          },
        });
      var r = s(57437),
        a = s(91026);
      s(70578);
      let n = () =>
        (0, r.jsxs)("section", {
          className:
            "container mx-auto space-y-0 px-4 pt-16 md:space-y-4 md:px-0",
          children: [
            (0, r.jsx)("h1", {
              className:
                "text-2xl font-extrabold tracking-widest text-slate-600 uppercase text-center",
              children: "Backed by",
            }),
            (0, r.jsx)("div", {
              className: "flex flex-col items-center justify-center",
              children: (0, r.jsx)(a.J, {
                src: "/logos/gagra.svg",
                alt: "Gagra Ventures",
                className: "h-[75px]",
              }),
            }),
          ],
        });
    },
    18964: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PricingSection: function () {
            return x;
          },
          toHumanPrice: function () {
            return c;
          },
        });
      var r = s(57437),
        a = s(2265),
        n = s(77485),
        i = s(60598),
        o = s(17648),
        l = s(23408);
      let c = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return Number(e / 100).toFixed(t);
        },
        d = [
          {
            id: "price_1",
            name: "Free",
            description: "For testing purposes only.",
            features: [
              "1k requests/month (API)",
              "All the features",
              "Basic support",
            ],
            monthlyPrice: 0,
            yearlyPrice: 1e4,
            isMostPopular: !1,
          },
          {
            id: "price_2",
            name: "Agent",
            description: "For startups building AI projects.",
            features: [
              "3k requests/month (API)",
              "All the features",
              "1 Knowledge Base",
              "1 GB of resources",
              "Direct chat support",
            ],
            monthlyPrice: 9900,
            yearlyPrice: 2e4,
            isMostPopular: !1,
          },
          {
            id: "price_5",
            name: "Premium",
            description: "For larger projects with existing customer base.",
            features: [
              "10k requests/month (API)",
              "All the features",
              "5 Knowledge Bases",
              "10 GB of resources",
              "Any channel support",
            ],
            monthlyPrice: 24900,
            yearlyPrice: 5e4,
            isMostPopular: !1,
          },
          {
            id: "price_6",
            name: "Ultimate",
            description: "The ultimate plan for industry leaders.",
            features: [
              "Custom rqs/month (API)",
              "All the features",
              "Unlimited KBs",
              "Unlimited GBs",
              "Custom 24/7 support",
            ],
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            isMostPopular: !1,
          },
        ],
        x = () => {
          let [e, t] = (0, a.useState)("month"),
            [s, x] = (0, a.useState)(!1),
            [m, u] = (0, a.useState)(null);
          return (0, r.jsx)("section", {
            id: "pricing",
            children: (0, r.jsxs)("div", {
              className:
                "mx-auto flex max-w-[1000px] flex-col gap-8 px-4 py-14 md:px-8",
              children: [
                (0, r.jsxs)("div", {
                  className: "mx-auto max-w-5xl text-center",
                  children: [
                    (0, r.jsx)("h1", {
                      className:
                        "text-2xl font-extrabold tracking-widest text-slate-600 uppercase text-center",
                      children: "Pricing",
                    }),
                    (0, r.jsx)("h2", {
                      className:
                        "text-3xl font-bold tracking-tight text-black dark:text-white sm:text-6xl",
                      children: "Simple pricing for everyone.",
                    }),
                    (0, r.jsxs)("p", {
                      className:
                        "mt-4 text-lg md:text-xl leading-none md:leading-8 text-black/80 dark:text-white",
                      children: [
                        "Choose an ",
                        (0, r.jsx)("strong", { children: "affordable plan" }),
                        " that's packed with the best features for AI-powered web3 app.",
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-4",
                  children: d.map((t, s) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className: (0, n.cn)(
                          "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl py-4 px-4",
                          {
                            "border-2 border-neutral-700 shadow-lg shadow-neutral-500 dark:border-neutral-400 dark:shadow-neutral-600":
                              t.isMostPopular,
                          }
                        ),
                        children: [
                          (0, r.jsx)("div", {
                            className: "flex items-center",
                            children: (0, r.jsxs)("div", {
                              className: "ml-0",
                              children: [
                                (0, r.jsx)("h2", {
                                  className: "text-base font-bold leading-7",
                                  children: t.name,
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "h-16 text-sm leading-5 text-black/70 dark:text-white",
                                  children: t.description,
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "px-0 space-y-4",
                            children: [
                              (0, r.jsx)(
                                o.E.div,
                                {
                                  initial: "initial",
                                  animate: "animate",
                                  variants: {
                                    initial: { opacity: 0, y: 12 },
                                    animate: { opacity: 1, y: 0 },
                                  },
                                  transition: {
                                    duration: 0.4,
                                    delay: 0.1 + 0.05 * s,
                                    ease: [0.21, 0.47, 0.32, 0.98],
                                  },
                                  className: "flex flex-row gap-1",
                                  children: (0, r.jsxs)("span", {
                                    className:
                                      "text-4xl font-bold text-black dark:text-white",
                                    children: [
                                      "number" != typeof t.monthlyPrice
                                        ? (0, r.jsx)(r.Fragment, {
                                            children: "Custom",
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              "$",
                                              c(t.monthlyPrice, 0),
                                            ],
                                          }),
                                      "number" == typeof t.monthlyPrice &&
                                        (0, r.jsxs)("span", {
                                          className: "text-xs",
                                          children: [" / ", e],
                                        }),
                                    ],
                                  }),
                                },
                                "".concat(t.id, "-").concat(e)
                              ),
                              (0, r.jsx)(i.A, {
                                className: "w-full",
                                isDisabled: !0,
                                children: "Coming soon",
                              }),
                              (0, r.jsx)("hr", {
                                className:
                                  "m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0",
                              }),
                              t.features &&
                                t.features.length > 0 &&
                                (0, r.jsx)("ul", {
                                  className: "flex flex-col gap-2 font-normal",
                                  children: t.features.map((e, t) =>
                                    (0, r.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "flex items-center gap-3 text-xs font-medium text-black dark:text-white",
                                        children: [
                                          (0, r.jsx)(l.Z, {
                                            className:
                                              "h-5 w-5 shrink-0 rounded-full bg-teal-400 p-[2px] text-black dark:text-white",
                                          }),
                                          (0, r.jsx)("span", {
                                            className: "flex",
                                            children: e,
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                            ],
                          }),
                        ],
                      },
                      t.id
                    )
                  ),
                }),
              ],
            }),
          });
        };
    },
    27283: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SupportersSection: function () {
            return o;
          },
        });
      var r = s(57437),
        a = s(91026);
      let n = [
          {
            id: 0,
            image:
              "https://raw.githubusercontent.com/aave/branding-assets/master/Aave/Aave%20Logo%20White.svg",
            subtitle: "\uD83C\uDFC6 ETHPrague 2023",
            link: "https://ethprague2023.devfolio.co/",
          },
          {
            id: 1,
            image:
              "https://raw.githubusercontent.com/gnosischain/media-kit/main/Logos/02%20Gnosis%20Chain/Transparent/SVG/GnosisChain-Horizontal-01-White.svg",
            subtitle: "\uD83C\uDFC6 ETHPrague 2023",
            link: "https://ethprague2023.devfolio.co/",
          },
          {
            id: 2,
            image: "/logos/the-graph.svg",
            subtitle: "\uD83C\uDFC6 ETHPrague 2023",
            link: "https://ethprague2023.devfolio.co/",
          },
          {
            id: 6,
            image: "/logos/hf-logo-with-title.svg",
            subtitle: "\uD83C\uDFC6 AugmentHack 2023",
            link: "https://www.augmenthack.xyz/",
          },
          {
            id: 5,
            image: "/logos/bacalhau.svg",
            subtitle: "\uD83C\uDFC6 AugmentHack 2023",
            link: "https://www.augmenthack.xyz/",
          },
          {
            id: 4,
            image: "/logos/gateway.svg",
            subtitle: "\uD83C\uDFC6 ETHPrague 2023",
            link: "https://ethprague2023.devfolio.co/",
          },
        ],
        i = [
          {
            id: 3,
            image: "/logos/taiko.svg",
            subtitle: "Taiko",
            link: "https://taiko.xyz",
          },
          {
            id: 6,
            image: "/logos/swarm.png",
            subtitle: "ETHSwarm",
            link: "https://ethswarm.org",
          },
          {
            id: 4,
            image: "/logos/lido.png",
            subtitle: "Lido",
            link: "https://lido.fi",
          },
          {
            id: 5,
            image: "/logos/ens.svg",
            subtitle: "ENS",
            link: "https://ens.domains",
          },
          {
            id: 7,
            image: "/logos/polygon.svg",
            subtitle: "Polygon",
            link: "https://www.builderhouselisbon.xyz/",
          },
          {
            id: 5,
            image: "/logos/starknet.svg",
            subtitle: "Starknet",
            link: "https://ens.domains",
          },
        ],
        o = () =>
          (0, r.jsxs)("section", {
            className:
              "container mx-auto space-y-0 px-4 pt-16 md:space-y-4 md:px-0",
            children: [
              (0, r.jsx)("h1", {
                className:
                  "text-center text-2xl font-extrabold uppercase tracking-widest text-slate-600",
                children: "Grants",
              }),
              (0, r.jsx)("div", {
                className:
                  "mx-auto grid max-w-3xl grid-cols-3 place-items-center gap-4 p-4 md:grid-cols-6 md:gap-x-8 md:p-0",
                children: i.map((e) =>
                  (0, r.jsx)(a.J, {
                    removeWrapper: !0,
                    src: e.image,
                    alt: e.subtitle,
                    className:
                      "w-[150px] select-none rounded-none md:w-[200px]",
                  })
                ),
              }),
              (0, r.jsx)("h1", {
                className:
                  "text-center text-2xl font-extrabold uppercase tracking-widest text-slate-600",
                children: "Bounties",
              }),
              (0, r.jsx)("div", {
                className:
                  "mx-auto grid max-w-3xl grid-cols-3 place-items-center gap-4 p-4 md:grid-cols-6 md:gap-x-8 md:p-0",
                children: n.map((e) =>
                  (0, r.jsx)(a.J, {
                    src: e.image,
                    alt: e.subtitle,
                    className:
                      "w-[150px] select-none rounded-none md:w-[200px]",
                  })
                ),
              }),
            ],
          });
    },
    57937: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          UseBrainiac AISection: function () {
            return b;
          },
        });
      var r = s(57437),
        a = s(24033),
        n = s(60598),
        i = s(63753),
        o = s(37636),
        l = s(91317),
        c = s(87208),
        d = s(75869),
        x = s(39481),
        m = s(57364),
        u = s(70578);
      function h(e) {
        let { className: t } = e;
        return (0, r.jsxs)("div", {
          className: (0, u.cn)(
            "pointer-events-none absolute h-full w-full overflow-hidden opacity-90 [perspective:200px]",
            t
          ),
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0 [transform:rotateX(35deg)]",
              children: (0, r.jsx)("div", {
                className: (0, u.cn)(
                  "animate-grid",
                  "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
                  "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",
                  "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
                ),
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black",
            }),
          ],
        });
      }
      let p = [
          {
            Icon: i.Z,
            name: "What is Brainiac AI?",
            description: "Learn more about Brainiac AI and how it works.",
            href: "https://docs.brianknows.org/",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
          },
          {
            Icon: o.Z,
            name: "Prompt Guide",
            description: "Learn how to prompt on Brainiac AI.",
            href: "https://docs.brianknows.org/prompt-guide",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1",
          },
          {
            Icon: l.Z,
            name: "Use Cases",
            description: "Interesting use cases using Brainiac AI.",
            href: "https://docs.brianknows.org/use-cases",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-2",
          },
          {
            Icon: c.Z,
            name: "Brian SDK",
            description: "Learn how to use the Brainiac AI SDK.",
            href: "https://docs.brianknows.org/brian-sdk/typescript-sdk",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1",
          },
          {
            Icon: d.Z,
            name: "Brian APIs",
            description: "Learn how to use the Brainiac AI APIs.",
            href: "https://docs.brianknows.org/brian-api/apis",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2",
          },
          {
            Icon: x.Z,
            name: "Langchain SDK",
            description: "Learn how to use our Langchain SDK.",
            href: "https://langchain.brianknows.org",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-3",
          },
          {
            Icon: m.Z,
            name: "DCI Network",
            description: "Read more about the DCI Network.",
            href: "https://mirror.xyz/orbulo.eth/svv4yQCUHiCY1vj4RYlYF7IpWMYtLc1ItjtXIr-D9t0",
            cta: "Learn more",
            background: (0, r.jsx)(h, {}),
            className:
              "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-3",
          },
        ],
        f = (e) => {
          let { children: t, className: s } = e;
          return (0, r.jsx)("div", {
            className: (0, u.cn)(
              "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
              s
            ),
            children: t,
          });
        },
        g = (e) => {
          let {
            name: t,
            className: s,
            background: a,
            Icon: i,
            description: o,
            href: l,
            cta: c,
          } = e;
          return (0, r.jsxs)(
            "div",
            {
              className: (0, u.cn)(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                s
              ),
              children: [
                (0, r.jsx)("div", { children: a }),
                (0, r.jsxs)("div", {
                  className:
                    "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10",
                  children: [
                    (0, r.jsx)(i, {
                      className:
                        "h-12 w-12 origin-left transform-gpu text-neutral transition-all duration-300 ease-in-out group-hover:scale-75",
                    }),
                    (0, r.jsx)("h3", {
                      className:
                        "text-xl font-semibold text-neutral-700 dark:text-neutral-300",
                      children: t,
                    }),
                    (0, r.jsx)("p", {
                      className: "max-w-lg text-neutral-400",
                      children: o,
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: (0, u.cn)(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  ),
                  children: (0, r.jsx)(n.A, {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => window.open(l, "_blank"),
                    className: "pointer-events-auto",
                    children: c,
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10",
                }),
              ],
            },
            t
          );
        },
        b = () => (
          (0, a.useRouter)(),
          (0, r.jsxs)("section", {
            id: "discover",
            className: "container py-8 mx-auto px-4 md:px-0 max-w-[1000px]",
            children: [
              (0, r.jsx)("h1", {
                className:
                  "text-2xl font-extrabold tracking-widest text-slate-600 uppercase text-center mb-4",
                children: "Discover",
              }),
              (0, r.jsx)(f, {
                className: "lg:grid-rows-3",
                children: p.map((e) => (0, r.jsx)(g, { ...e }, e.name)),
              }),
            ],
          })
        );
    },
  },
  function (e) {
    e.O(
      0,
      [
        4625, 3071, 4962, 6708, 598, 6125, 5502, 8150, 2318, 578, 2971, 7864,
        1744,
      ],
      function () {
        return e((e.s = 45141));
      }
    ),
      (_N_E = e.O());
  },
]);
