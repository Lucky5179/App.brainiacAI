(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2868],
  {
    15634: function (e, s, l) {
      Promise.resolve().then(l.bind(l, 89670));
    },
    89670: function (e, s, l) {
      "use strict";
      l.r(s),
        l.d(s, {
          default: function () {
            return z;
          },
        });
      var n = l(57437),
        a = l(89571),
        c = l(21507),
        i = l(64910),
        d = l(13740),
        r = l(70511),
        t = l(87427),
        x = l(2265),
        j = l(60598),
        o = l(13012),
        h = l(64903),
        u = l(53115),
        m = l(2014),
        g = l(51240),
        p = l(1525),
        f = l(10246),
        y = l(10005),
        N = l(85971),
        b = l(88367),
        w = l(68247),
        v = l(22178),
        A = l(28077);
      let C = () => {
        let [e, s] = (0, x.useState)(!1),
          l = (0, i.c7)((e) => e.account),
          a = (0, i.HH)((e) => e.toggleApiKeysModal),
          [c, d] = (0, x.useState)(-1),
          r = (0, A.J)((e) => e.setSelectedKey),
          t = (0, A.J)((e) => e.toggleDeleteApiKeyModal),
          C = (e) => {
            navigator && (navigator.clipboard.writeText(e.key), d(e.id));
          };
        return l
          ? (0, n.jsxs)("div", {
              className: "flex w-full flex-col space-y-4",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "Here you can create API keys to integrate Brainiac AI inside your project.",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex w-full items-center justify-between space-x-4",
                  children: [
                    l.apiKeys.length > 0 &&
                      (0, n.jsx)(y.W, {
                        label: "Monthly usage (".concat(l.usage, " / 1000)"),
                        size: "sm",
                        value: l.usage,
                        maxValue: 1e3,
                        color:
                          l.usage / 10 < 50
                            ? "primary"
                            : l.usage / 10 < 90
                            ? "warning"
                            : "danger",
                        formatOptions: { style: "percent" },
                        showValueLabel: !0,
                        className: "max-w-md",
                      }),
                    (0, n.jsx)(j.A, {
                      className: "bg-blue-500",
                      size: "sm",
                      endContent: (0, n.jsx)(w.Z, { size: 12 }),
                      disabled: e || l.apiKeys.length >= 1,
                      onClick: a,
                      children: "Add New",
                    }),
                  ],
                }),
                (0, n.jsxs)(o.b, {
                  "aria-label": "API Keys Table",
                  isStriped: !0,
                  children: [
                    (0, n.jsxs)(h.J, {
                      children: [
                        (0, n.jsx)(u.j, { children: "KEY" }),
                        (0, n.jsx)(u.j, { children: "CREATION DATE" }),
                        (0, n.jsx)(u.j, { children: "ACTIONS" }),
                      ],
                    }),
                    (0, n.jsx)(m.y, {
                      items: l.apiKeys || [],
                      emptyContent: (0, n.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-center space-y-2",
                        children: (0, n.jsx)(j.A, {
                          className: "bg-blue-500",
                          size: "sm",
                          endContent: (0, n.jsx)(w.Z, { size: 12 }),
                          disabled: e || l.apiKeys.length >= 1,
                          onClick: a,
                          children: "Add New",
                        }),
                      }),
                      children: (e) =>
                        (0, n.jsxs)(
                          g.g,
                          {
                            children: [
                              (0, n.jsx)(p.X, {
                                children: (0, n.jsx)(N.z, {
                                  className: "cursor-pointer",
                                  onClick: () => C(e),
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "flex items-center justify-between space-x-4 py-2 text-xs",
                                    children: (0, n.jsx)("span", {
                                      children: e.key,
                                    }),
                                  }),
                                }),
                              }),
                              (0, n.jsx)(p.X, {
                                children: e.createdAt.toString().split("T")[0],
                              }),
                              (0, n.jsx)(p.X, {
                                children: (0, n.jsx)("div", {
                                  className: "flex space-x-2",
                                  children: (0, n.jsx)(j.A, {
                                    isIconOnly: !0,
                                    size: "sm",
                                    variant: "flat",
                                    color: "danger",
                                    onClick: () => {
                                      r(e), t();
                                    },
                                    children: (0, n.jsx)(v.Z, { size: 12 }),
                                  }),
                                }),
                              }),
                            ],
                          },
                          "key-".concat(e.id)
                        ),
                    }),
                  ],
                }),

              ],
            })
          : (0, n.jsxs)("div", {
              className: "flex w-full flex-col space-y-4",
              children: [
                (0, n.jsx)("div", {
                  className: "flex w-full items-center justify-end",
                  children: (0, n.jsx)(j.A, {
                    className: "bg-blue-500",
                    size: "sm",
                    endContent: (0, n.jsx)(w.Z, { size: 12 }),
                    disabled: !0,
                    children: "Add New",
                  }),
                }),
                (0, n.jsxs)(o.b, {
                  "aria-label": "Example static collection table",
                  children: [
                    (0, n.jsxs)(h.J, {
                      children: [
                        (0, n.jsx)(u.j, { children: "KEY" }),
                        (0, n.jsx)(u.j, { children: "CREATION DATE" }),
                        (0, n.jsx)(u.j, { children: "ACTIONS" }),
                      ],
                    }),
                    (0, n.jsx)(m.y, {
                      children: (0, n.jsxs)(
                        g.g,
                        {
                          children: [
                            (0, n.jsx)(p.X, {
                              children: (0, n.jsx)(f.X, {
                                className: "w-full rounded-lg",
                                children: (0, n.jsx)("div", {
                                  className:
                                    "h-6 w-3/5 rounded-lg bg-default-200",
                                }),
                              }),
                            }),
                            (0, n.jsx)(p.X, {
                              children: (0, n.jsx)(f.X, {
                                className: "w-2/5 rounded-lg",
                                children: (0, n.jsx)("div", {
                                  className:
                                    "h-6 w-2/5 rounded-lg bg-default-200",
                                }),
                              }),
                            }),
                            (0, n.jsx)(p.X, {
                              children: (0, n.jsx)(f.X, {
                                className: "w-1/5 rounded-lg",
                                children: (0, n.jsx)("div", {
                                  className:
                                    "h-6 w-1/5 rounded-lg bg-default-200",
                                }),
                              }),
                            }),
                          ],
                        },
                        "1"
                      ),
                    }),
                  ],
                }),
              ],
            });
      };
      var X = l(24033),
        S = l(61023),
        K = l(70578);
      let E = () => {
        let [e, s] = (0, x.useState)(!1),
          l = (0, i.c7)((e) => e.account);
        (0, i.HH)((e) => e.toggleApiKeysModal);
        let [a, c] = (0, x.useState)(0);
        (0, A.J)((e) => e.setSelectedKey),
          (0, A.J)((e) => e.toggleDeleteApiKeyModal);
        let d = (0, X.useRouter)();
        return l
          ? (0, n.jsxs)("div", {
              className: "flex flex-col w-full space-y-4",
              children: [
                (0, n.jsx)("p", {
                  children:
                    "Here you can manage and interact with your Smart Contracts you've deployed via Brainiac AI.",
                }),
                (0, n.jsxs)(o.b, {
                  "aria-label": "Smart Contracts Table",
                  isStriped: !0,
                  children: [
                    (0, n.jsxs)(h.J, {
                      children: [
                        (0, n.jsx)(u.j, { children: "NAME" }),
                        (0, n.jsx)(u.j, { children: "ADDRESS" }),
                        (0, n.jsx)(u.j, { children: "CREATION DATE" }),
                        (0, n.jsx)(u.j, { children: "ACTIONS" }),
                      ],
                    }),
                    (0, n.jsx)(m.y, {
                      items: l.contracts || [],
                      emptyContent: (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center space-y-2",
                        children: [
                          (0, n.jsx)("p", {
                            children: "No Smart Contracts available.",
                          }),
                          (0, n.jsx)(j.A, {
                            className: "bg-blue-500",
                            size: "sm",
                            endContent: (0, n.jsx)(w.Z, { size: 12 }),
                            disabled: e,
                            onClick: () => d.push("/app/deploy"),
                            children: "Deploy New",
                          }),
                        ],
                      }),
                      children: (e) =>
                        (0, n.jsxs)(
                          g.g,
                          {
                            children: [
                              (0, n.jsx)(p.X, { children: e.name }),
                              (0, n.jsx)(p.X, {
                                children: (0, K.Cy)(e.address),
                              }),
                              (0, n.jsx)(p.X, {
                                children: e.createdAt.toString().split("T")[0],
                              }),
                              (0, n.jsx)(p.X, {
                                children: (0, n.jsx)("div", {
                                  className: "flex space-x-2",
                                  children: (0, n.jsxs)(j.A, {
                                    size: "sm",
                                    variant: "flat",
                                    color: "primary",
                                    onClick: () => {
                                      d.push(
                                        "/app/contracts/".concat(e.address)
                                      );
                                    },
                                    children: [
                                      "Interact ",
                                      (0, n.jsx)(S.Z, { size: 16 }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          },
                          "safe-".concat(e.id)
                        ),
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsxs)("div", {
              className: "flex flex-col w-full space-y-4",
              children: [
                (0, n.jsx)("div", {
                  className: "w-full flex items-center justify-end",
                  children: (0, n.jsx)(j.A, {
                    className: "bg-blue-500",
                    size: "sm",
                    endContent: (0, n.jsx)(w.Z, { size: 12 }),
                    disabled: e,
                    as: b.O,
                    href: "/app/deploy",
                    children: "Deploy New",
                  }),
                }),
                (0, n.jsxs)(o.b, {
                  "aria-label": "Smart Contracts Table",
                  children: [
                    (0, n.jsxs)(h.J, {
                      children: [
                        (0, n.jsx)(u.j, { children: "NAME" }),
                        (0, n.jsx)(u.j, { children: "ADDRESS" }),
                        (0, n.jsx)(u.j, { children: "CREATION DATE" }),
                        (0, n.jsx)(u.j, { children: "ACTIONS" }),
                      ],
                    }),
                    (0, n.jsx)(m.y, {
                      children: e
                        ? (0, n.jsxs)(
                            g.g,
                            {
                              children: [
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-full rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-3/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-full rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-3/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-2/5 rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-2/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-1/5 rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-1/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                              ],
                            },
                            "1"
                          )
                        : (0, n.jsxs)(
                            g.g,
                            {
                              children: [
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-full rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-3/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-2/5 rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-2/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)(p.X, {
                                  children: (0, n.jsx)(f.X, {
                                    className: "w-1/5 rounded-lg",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "h-6 w-1/5 rounded-lg bg-default-200",
                                    }),
                                  }),
                                }),
                              ],
                            },
                            "1"
                          ),
                    }),
                  ],
                }),
              ],
            });
      };
      function k() {
        let e = (0, i.c7)((e) => e.account);
        return e
          ? (0, n.jsxs)(r.d, {
              variant: "splitted",
              defaultExpandedKeys: ["api-keys"],
              children: [
                (0, n.jsx)(
                  t.G,
                  {
                    "aria-label": "API Keys",
                    title: (0, n.jsx)("div", {
                      className: "flex space-x-2 items-center",
                      children: (0, n.jsx)("p", { children: "API Keys" }),
                    }),
                    children: (0, n.jsx)(C, {}),
                  },
                  "api-keys"
                ),
                (0, n.jsx)(
                  t.G,
                  {
                    "aria-label": "Smart Contracts",
                    title: (0, n.jsx)("div", {
                      className: "flex space-x-2 items-center",
                      children: (0, n.jsx)("p", {
                        children: "Deployed Smart Contracts",
                      }),
                    }),
                    children: (0, n.jsx)(E, {}),
                  },
                  "smart-contracts"
                ),
              ],
            })
          : (0, n.jsx)(d.R, {});
      }
      var T = l(42031);
      function z() {
        let e = (0, i.c7)((e) => e.account);
        return e
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(T.t, {
                  title: "Settings",
                  subtitle:
                    "Manage your settings and get API keys for integrating Brainiac AI in your project.",
                  isHome: !1,
                }),
                (0, n.jsx)(a.j, {}),
                (0, n.jsx)(c.G, { children: (0, n.jsx)(k, {}) }),
              ],
            })
          : (0, n.jsx)(d.R, {});
      }
    },
    28077: function (e, s, l) {
      "use strict";
      l.d(s, {
        J: function () {
          return a;
        },
      });
      var n = l(74738);
      let a = (0, n.Ue)((e) => ({
        open: !1,
        toggleDeleteApiKeyModal: () => e((e) => ({ open: !e.open })),
        selectedKey: null,
        setSelectedKey: (s) => e({ selectedKey: s }),
      }));
    },
  },
  function (e) {
    e.O(
      0,
      [
        3154, 4625, 3071, 4962, 6708, 598, 6125, 5502, 8150, 8892, 8404, 7731,
        4425, 578, 3513, 2971, 7864, 1744,
      ],
      function () {
        return e((e.s = 15634));
      }
    ),
      (_N_E = e.O());
  },
]);
