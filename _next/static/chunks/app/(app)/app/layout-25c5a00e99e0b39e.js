(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7435],
  {
    35883: function () {},
    46601: function () {},
    68074: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 96006));
    },
    96006: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return ez;
          },
        });
      var s = t(57437),
        a = t(2265),
        r = t(24033),
        o = t(46914),
        l = t(64910),
        i = t(36560),
        c = t(28077),
        d = t(8814),
        h = t(25790),
        p = t(65232),
        u = t(55773),
        m = t(6182),
        x = t(55208),
        g = t(61718),
        f = t(69571),
        j = t(85971),
        y = t(67683),
        b = t(2913),
        v = t(60598);
      let w = (e) => {
        let { isOpen: n, onOpen: t, onOpenChange: r } = e,
          [o, i] = (0, a.useState)(!1),
          [c, d] = (0, a.useState)(null),
          [h, p] = (0, a.useState)(!1),
          u = (0, l.c7)((e) => e.setAccount),
          w = async () => {
            i(!0);
            try {
              let e = await fetch("/api/accounts/keys", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                }),
                { result: n } = await e.json();
              d(n);
              let t = await fetch("/api/auth/me"),
                { account: s } = await t.json();
              u(s);
            } catch (e) {
              console.error(e);
            } finally {
              i(!1);
            }
          },
          k = () => {
            navigator && c && (navigator.clipboard.writeText(c.key), p(!0));
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(m.R, {
            isOpen: n,
            onOpenChange: r,
            placement: "center",
            backdrop: "blur",
            children: (0, s.jsx)(x.A, {
              children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(g.k, {
                      className: "flex flex-col gap-1",
                      children: "Create API Key",
                    }),
                    (0, s.jsx)(f.I, {
                      children: c
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("p", {
                                children: "This is your new API key.",
                              }),
                              (0, s.jsx)(j.z, {
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "flex items-center justify-between py-2",
                                  children: [
                                    (0, s.jsx)("span", { children: c.key }),
                                    (0, s.jsx)(y.C, {
                                      className: "cursor-pointer",
                                      onClick: () => k(),
                                      children: h ? "Copied!" : "Copy",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          })
                        : (0, s.jsxs)("p", {
                            children: [
                              "You're about to create a new Brainiac AI API key. Currently only ",
                              (0, s.jsx)("b", { children: "one" }),
                              " API key is allowed per account.",
                            ],
                          }),
                    }),
                    (0, s.jsxs)(b.R, {
                      children: [
                        (0, s.jsx)(v.A, {
                          color: "danger",
                          variant: "light",
                          onClick: e,
                          children: "Close",
                        }),
                        !c &&
                          (0, s.jsx)(v.A, {
                            className: "bg-blue-500",
                            disabled: o,
                            isLoading: o,
                            onPress: w,
                            children: "Create",
                          }),
                      ],
                    }),
                  ],
                }),
            }),
          }),
        });
      };
      var k = t(70511),
        N = t(87427),
        C = t(88367),
        O = t(45919),
        A = t(81319),
        F = t(56926),
        S = t(70578);
      let I = (e) => {
          let { isOpen: n, onOpen: t, onOpenChange: a } = e,
            r = (0, i.I)((e) => e.contract),
            { chains: o } = (0, F.LN)();
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.R, {
              isOpen: n,
              onOpenChange: a,
              size: "3xl",
              placement: "center",
              backdrop: "blur",
              scrollBehavior: "inside",
              children: (0, s.jsx)(x.A, {
                children: (e) => {
                  var n, t, a;
                  return (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(g.k, {
                        className: "flex flex-col gap-1",
                        children: "Contract",
                      }),
                      (0, s.jsx)(f.I, {
                        className: "flex flex-col",
                        children: (0, s.jsxs)(k.d, {
                          variant: "splitted",
                          defaultExpandedKeys: ["info"],
                          children: [
                            (0, s.jsxs)(
                              N.G,
                              {
                                title: "General Information",
                                children: [
                                  (0, s.jsxs)("p", {
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "font-bold",
                                        children: "Address",
                                      }),
                                      ":",
                                      " ",
                                      (0, s.jsx)(C.O, {
                                        href: ""
                                          .concat(
                                            null ===
                                              (t = o.find(
                                                (e) =>
                                                  e.id ===
                                                  (null == r
                                                    ? void 0
                                                    : r.chainId)
                                              )) || void 0 === t
                                              ? void 0
                                              : null ===
                                                  (n = t.blockExplorers) ||
                                                void 0 === n
                                              ? void 0
                                              : n.default.url,
                                            "/address/"
                                          )
                                          .concat(
                                            null == r ? void 0 : r.address
                                          ),
                                        isExternal: !0,
                                        target: "_blank",
                                        children: (0, S.Cy)(
                                          (null == r ? void 0 : r.address) ||
                                            "",
                                          6,
                                          -4
                                        ),
                                      }),
                                    ],
                                  }),
                                  (null == r ? void 0 : r.chainId) &&
                                    (0, s.jsxs)("p", {
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "font-bold",
                                          children: "Chain",
                                        }),
                                        ":",
                                        " ",
                                        null ===
                                          (a = o.find(
                                            (e) =>
                                              e.id ===
                                              (null == r ? void 0 : r.chainId)
                                          )) || void 0 === a
                                          ? void 0
                                          : a.name,
                                      ],
                                    }),
                                  (null == r ? void 0 : r.createdAt) &&
                                    (0, s.jsxs)("p", {
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "font-bold",
                                          children: "Deploy date",
                                        }),
                                        ":",
                                        " ",
                                        null == r
                                          ? void 0
                                          : r.createdAt.toLocaleString(),
                                      ],
                                    }),
                                ],
                              },
                              "info"
                            ),
                            (0, s.jsxs)(
                              N.G,
                              {
                                title: "Available methods",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "mb-4",
                                    children:
                                      "Grey methods are read only methods that do not require a transaction to be executed, Yellow methods instead require you to send a transaction.",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children:
                                      r &&
                                      r.abi
                                        .filter((e) => "function" === e.type)
                                        .map((e, n) =>
                                          (0, s.jsx)(O.z, {
                                            color:
                                              "view" === e.stateMutability
                                                ? "default"
                                                : "warning",
                                            children: e.name,
                                          })
                                        ),
                                  }),
                                ],
                              },
                              "methods"
                            ),
                            (0, s.jsxs)(
                              N.G,
                              {
                                title: "Code",
                                children: [
                                  (null == r ? void 0 : r.code) &&
                                    (0, s.jsx)(A.U, {
                                      children: "```solidity\n".concat(
                                        r.code,
                                        "\n```"
                                      ),
                                    }),
                                  !(null == r ? void 0 : r.code) &&
                                    (0, s.jsx)("p", {
                                      children:
                                        "No code available for this contract.",
                                    }),
                                ],
                              },
                              "code"
                            ),
                            (0, s.jsx)(
                              N.G,
                              {
                                title: "ABI",
                                className: "max-h-[400px] overflow-y-scroll",
                                children:
                                  r &&
                                  (0, s.jsx)(A.U, {
                                    children: "```json\n".concat(
                                      JSON.stringify(r.abi, void 0, 4),
                                      "\n```"
                                    ),
                                  }),
                              },
                              "abi"
                            ),
                          ],
                        }),
                      }),
                      (0, s.jsx)(b.R, {
                        children: (0, s.jsx)(v.A, {
                          color: "danger",
                          variant: "light",
                          onClick: e,
                          children: "Close",
                        }),
                      }),
                    ],
                  });
                },
              }),
            }),
          });
        },
        M = (e) => {
          let { isOpen: n, onOpen: t, onOpenChange: r } = e,
            [o, i] = (0, a.useState)(!1),
            d = (0, c.J)((e) => e.selectedKey),
            h = (0, l.c7)((e) => e.setAccount),
            p = async () => {
              i(!0);
              try {
                await fetch(
                  "/api/accounts/keys/".concat(null == d ? void 0 : d.id),
                  {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                  }
                );
                let e = await fetch("/api/auth/me"),
                  { account: n } = await e.json();
                h(n), t();
              } catch (e) {
                console.error(e);
              } finally {
                i(!1);
              }
            };
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.R, {
              isOpen: n,
              onOpenChange: r,
              placement: "center",
              backdrop: "blur",
              children: (0, s.jsx)(x.A, {
                children: (e) =>
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(g.k, {
                        className: "flex flex-col gap-1",
                        children: "Delete API Key",
                      }),
                      (0, s.jsx)(f.I, {
                        children: (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("p", {
                              children:
                                "You're about to delete the following API key:",
                            }),
                            (0, s.jsx)(j.z, {
                              className: "text-xs",
                              children: null == d ? void 0 : d.key,
                            }),
                            (0, s.jsx)("p", {
                              className: "font-bold",
                              children: "This action is irreversible.",
                            }),
                            (0, s.jsx)("p", {
                              children: "Are you sure you want to continue?",
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)(b.R, {
                        children: [
                          (0, s.jsx)(v.A, {
                            color: "danger",
                            variant: "light",
                            onClick: e,
                            children: "Close",
                          }),
                          (0, s.jsx)(v.A, {
                            color: "danger",
                            disabled: o,
                            isLoading: o,
                            onPress: p,
                            children: "Delete",
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            }),
          });
        };
      var E = t(68389),
        T = t(55647);
      let D = (e) => {
          let { isOpen: n, onOpen: t, onOpenChange: r } = e,
            o = (0, d.i)((e) => e.contractData),
            i = o ? o.abi.find((e) => "constructor" === e.type).inputs : [],
            [c, h] = (0, a.useState)(i.map((e) => "")),
            [p, u] = (0, a.useState)(0 === i.length),
            { chain: j } = (0, F.LN)(),
            [y, w] = (0, a.useState)(""),
            [k, N] = (0, a.useState)(!1);
          (0, l.c7)((e) => e.account);
          let O = async () => {
              N(!0);
              try {
                var e;
                let n = await (0, T.xz)({ chainId: null == j ? void 0 : j.id });
                if (!n || !o) return;
                let { abi: t, bytecode: s, fileName: a, code: r } = o,
                  l = await n.deployContract({ abi: t, bytecode: s, args: c });
                w(
                  ""
                    .concat(
                      null == j
                        ? void 0
                        : null === (e = j.blockExplorers) || void 0 === e
                        ? void 0
                        : e.default.url,
                      "tx/"
                    )
                    .concat(l)
                );
                let { contractAddress: i } = await (0, T.Mn)({
                  hash: l,
                  chainId: null == j ? void 0 : j.id,
                });
                await fetch("/api/contracts/deploy", {
                  method: "POST",
                  body: JSON.stringify({
                    address: i,
                    abi: t,
                    bytecode: s,
                    fileName: a,
                    chainId: null == j ? void 0 : j.id,
                    code: r,
                  }),
                });
              } catch (e) {
                console.error(e);
              } finally {
                N(!1);
              }
            },
            A = (e, n) => {
              h((t) => {
                let s = [...t];
                return (s[n] = e), s.every((e) => "" !== e) ? u(!0) : u(!1), s;
              });
            };
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.R, {
              isOpen: n,
              onOpenChange: r,
              size: "xl",
              placement: "center",
              backdrop: "blur",
              scrollBehavior: "inside",
              children: (0, s.jsx)(x.A, {
                children: (e) =>
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(g.k, {
                        className: "flex flex-col gap-1",
                        children: "Deploy your Smart Contract!",
                      }),
                      (0, s.jsxs)(f.I, {
                        className: "flex flex-col",
                        children: [
                          0 === i.length &&
                            (0, s.jsx)("p", {
                              children:
                                "This contract does not have any constructor arguments. You can deploy it right away!",
                            }),
                          i.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("p", {
                                  children:
                                    "Your Smart Contract needs some input parameters to be deployed, fill the fields below!",
                                }),
                                i.map((e, n) =>
                                  (0, s.jsx)(E.Y, {
                                    type: "text",
                                    value: c[n],
                                    onValueChange: (e) => A(e, n),
                                    label: e.name,
                                    isDisabled: k || "" !== y,
                                  })
                                ),
                              ],
                            }),
                          y &&
                            (0, s.jsxs)("p", {
                              children: [
                                "Go watch your Smart Contract deployment",
                                " ",
                                (0, s.jsx)(C.O, {
                                  href: y,
                                  isExternal: !0,
                                  children: "here",
                                }),
                                "!",
                              ],
                            }),
                        ],
                      }),
                      (0, s.jsxs)(b.R, {
                        children: [
                          (0, s.jsx)(v.A, {
                            color: "danger",
                            variant: "light",
                            onClick: e,
                            children: "Close",
                          }),
                          (0, s.jsx)(v.A, {
                            color: "primary",
                            variant: "flat",
                            isLoading: k,
                            isDisabled: !p || "" !== y,
                            onClick: async () => await O(),
                            children: "Deploy",
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            }),
          });
        },
        B = (e) => {
          let { isOpen: n, onOpen: t, onOpenChange: a } = e,
            r = (0, h.M)((e) => e.target);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m.R, {
              isOpen: n,
              onOpenChange: a,
              size: "3xl",
              placement: "center",
              backdrop: "blur",
              scrollBehavior: "inside",
              children: (0, s.jsx)(x.A, {
                children: (e) =>
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(g.k, {
                        className: "flex flex-col gap-1",
                        children: "Code explanation",
                      }),
                      (0, s.jsx)(f.I, {
                        className: "flex flex-col",
                        children: (0, s.jsx)(A.U, { children: r }),
                      }),
                      (0, s.jsx)(b.R, {
                        children: (0, s.jsx)(v.A, {
                          color: "danger",
                          variant: "light",
                          onClick: e,
                          children: "Close",
                        }),
                      }),
                    ],
                  }),
              }),
            }),
          });
        },
        R = (e) => {
          let { isOpen: n, onOpen: t, onOpenChange: r } = e,
            o = (0, p.X)((e) => e.target),
            l = (0, p.X)((e) => e.toggleFeedbackModal),
            [i, c] = (0, a.useState)(""),
            d = async () => {
              i &&
                !(i.length < 10) &&
                (await fetch("/api/feedbacks", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    prompt,
                    result: o.result,
                    feedback: !1,
                    content: i,
                  }),
                }),
                l());
            };
          return o
            ? (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(m.R, {
                  isOpen: n,
                  onOpenChange: r,
                  size: "lg",
                  placement: "center",
                  backdrop: "blur",
                  children: (0, s.jsx)(x.A, {
                    children: (e) =>
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(g.k, {
                            className: "flex flex-col gap-1",
                            children: "Feedback time!",
                          }),
                          (0, s.jsxs)(f.I, {
                            className: "flex flex-col",
                            children: [
                              (0, s.jsx)("p", {
                                children:
                                  "Brainiac AI loves negative feedbacks: he uses them to improve himself. What is the issue with this prompt?",
                              }),
                              (0, s.jsx)(E.Y, {
                                label: "Feedback",
                                value: i,
                                onValueChange: c,
                              }),
                            ],
                          }),
                          (0, s.jsxs)(b.R, {
                            children: [
                              (0, s.jsx)(v.A, {
                                color: "danger",
                                variant: "light",
                                onClick: e,
                                children: "Close",
                              }),
                              (0, s.jsx)(v.A, {
                                onClick: d,
                                isDisabled: i.length < 10,
                                children: "Submit",
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
              })
            : (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(m.R, {
                  isOpen: n,
                  onOpenChange: r,
                  children: (0, s.jsx)(x.A, {
                    children: (e) =>
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(g.k, {
                            className: "flex flex-col gap-1",
                            children: "No prompt selected!",
                          }),
                          (0, s.jsx)(f.I, {
                            children: (0, s.jsx)("p", {
                              children:
                                "You are trying to give feedback on a prompt that does not exist.",
                            }),
                          }),
                          (0, s.jsx)(b.R, {
                            children: (0, s.jsx)(v.A, {
                              color: "danger",
                              variant: "light",
                              onClick: e,
                              children: "Close",
                            }),
                          }),
                        ],
                      }),
                  }),
                }),
              });
        };
      var U = t(21507),
        L = t(45652),
        P = t.n(L),
        K = t(68346);
      let z = (e) => {
        let { isOpen: n, onOpen: t, onOpenChange: a } = e,
          r = (0, l.z)((e) => e.transactions),
          i = (e) => {
            e && window.open(e, "_blank");
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(m.R, {
            isOpen: n,
            onOpenChange: a,
            placement: "center",
            backdrop: "blur",
            children: (0, s.jsx)(x.A, {
              children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(g.k, {
                      className: "flex flex-col gap-1",
                      children: "Transaction History",
                    }),
                    (0, s.jsx)(f.I, {
                      children: r.map((e) =>
                        (0, s.jsx)(o.w, {
                          children: (0, s.jsxs)(U.G, {
                            className: "space-y-2",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex justify-between items-center cursor-pointer",
                                onClick: () => i(e.transactionUrl),
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-semibold",
                                    children: P()(e.type),
                                  }),
                                  " ",
                                  (0, s.jsx)(K.Z, {}),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "flex justify-end text-tiny text-gray-600 dark:text-gray-400",
                                children: e.date
                                  ? e.date.toISOString()
                                  : new Date().toISOString(),
                              }),
                            ],
                          }),
                        })
                      ),
                    }),
                    (0, s.jsx)(b.R, {
                      children: (0, s.jsx)(v.A, {
                        color: "danger",
                        variant: "light",
                        onClick: e,
                        children: "Close",
                      }),
                    }),
                  ],
                }),
            }),
          }),
        });
      };
      var _ = t(91026),
        H = t(16775),
        Z = t(91890);
      let J = (e) => {
        let { isOpen: n, onOpen: t, onOpenChange: a } = e,
          [r] = (0, u.g)((e) => e.selectedSteps),
          o =
            r && r.data ? (Array.isArray(r.data) ? r.data[0] : r.data) : void 0,
          l = r
            ? Z.p5.filter(
                (e) => e.id === (null == o ? void 0 : o.fromChainId)
              )[0]
            : void 0,
          i = r
            ? Z.p5.filter((e) => e.id === (null == o ? void 0 : o.toChainId))[0]
            : void 0;
        return r && l && i && o
          ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(m.R, {
                isOpen: n,
                onOpenChange: a,
                placement: "center",
                backdrop: "blur",
                children: (0, s.jsx)(x.A, {
                  children: (e) =>
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(g.k, {
                          className: "flex flex-col gap-1",
                          children: "Transaction info",
                        }),
                        (0, s.jsxs)(f.I, {
                          children: [
                            (0, s.jsx)("p", {
                              children:
                                "These are the parameters extracted by the Brainiac AI AI agent.",
                            }),
                            (0, s.jsxs)("p", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "font-bold",
                                  children: "Action",
                                }),
                                ": ",
                                r.action,
                              ],
                            }),
                            (0, s.jsxs)("p", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "font-bold",
                                  children: "From",
                                }),
                                ":",
                                " ",
                                (0, s.jsx)(C.O, {
                                  isExternal: !0,
                                  href: ""
                                    .concat(
                                      l.blockExplorers.default.url,
                                      "address/"
                                    )
                                    .concat(o.fromAddress),
                                  children: (0, S.Cy)(o.fromAddress, 6, -5),
                                }),
                              ],
                            }),
                            "transfer" !== r.action &&
                              (0, s.jsxs)("p", {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: "Interact with",
                                  }),
                                  ":",
                                  " ",
                                  (0, s.jsx)(C.O, {
                                    isExternal: !0,
                                    href: ""
                                      .concat(
                                        i.blockExplorers.default.url,
                                        "address/"
                                      )
                                      .concat(o.toAddress),
                                    children: (0, S.Cy)(o.toAddress, 6, -5),
                                  }),
                                ],
                              }),
                            o.receiver &&
                              (0, s.jsxs)("p", {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: "Receiver",
                                  }),
                                  ":",
                                  " ",
                                  (0, s.jsx)(C.O, {
                                    isExternal: !0,
                                    href: ""
                                      .concat(
                                        l.blockExplorers.default.url,
                                        "address/"
                                      )
                                      .concat(o.receiver),
                                    children: (0, S.Cy)(o.receiver, 6, -5),
                                  }),
                                ],
                              }),
                            o.fromAmount > 0 &&
                              (0, s.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: "Amount in",
                                  }),
                                  ":",
                                  " ",
                                  Number(
                                    (0, H.b)(o.fromAmount, o.fromToken.decimals)
                                  ).toFixed(5),
                                  " ",
                                  (0, s.jsxs)("div", {
                                    className: "flex space-x-1 items-center",
                                    children: [
                                      (0, s.jsx)(C.O, {
                                        isExternal: !0,
                                        href: ""
                                          .concat(
                                            l.blockExplorers.default.url,
                                            "address/"
                                          )
                                          .concat(o.fromToken.address),
                                        children: o.fromToken.symbol,
                                      }),
                                      o.fromToken.logoURI &&
                                        (0, s.jsx)(_.J, {
                                          src: o.fromToken.logoURI,
                                          className: "mr-1 h-6",
                                        }),
                                      o.fromAmountUSD &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            "($",
                                            Number(o.fromAmountUSD).toFixed(3),
                                            ")",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            o.toAmount > 0 &&
                              (0, s.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: "Amount out",
                                  }),
                                  ":",
                                  " ",
                                  Number(
                                    (0, H.b)(o.toAmount, o.toToken.decimals)
                                  ).toFixed(5),
                                  " ",
                                  (0, s.jsxs)("div", {
                                    className: "flex space-x-1 items-center",
                                    children: [
                                      (0, s.jsx)(C.O, {
                                        isExternal: !0,
                                        href:
                                          l.id === i.id
                                            ? ""
                                                .concat(
                                                  l.blockExplorers.default.url,
                                                  "address/"
                                                )
                                                .concat(o.toToken.address)
                                            : ""
                                                .concat(
                                                  i.blockExplorers.default.url,
                                                  "address/"
                                                )
                                                .concat(o.toToken.address),
                                        children: o.toToken.symbol,
                                      }),
                                      o.toToken.logoURI &&
                                        (0, s.jsx)(_.J, {
                                          src: o.toToken.logoURI,
                                          className: "mr-1 h-6 w-6",
                                        }),
                                      o.toAmountUSD &&
                                        (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            "($",
                                            Number(o.toAmountUSD).toFixed(3),
                                            ")",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            o.protocol &&
                              (0, s.jsxs)("p", {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-bold",
                                    children: "Protocol",
                                  }),
                                  ":",
                                  " ",
                                  o.protocol.name,
                                ],
                              }),
                          ],
                        }),
                        (0, s.jsxs)(b.R, {
                          children: [
                            "li.fi" === r.solver.toLowerCase() &&
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-center mt-2 w-full",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "mr-1 font-bold",
                                    children: "Powered by LI.FI",
                                  }),
                                  (0, s.jsx)("a", {
                                    href: "https://li.fi/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("img", {
                                      src: "/images/lifi-logo.png",
                                      alt: "Lifi Logo",
                                      className: "w-8 h-8 cursor-pointer",
                                    }),
                                  }),
                                ],
                              }),
                            "enso" === r.solver.toLowerCase() &&
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-center mt-2 w-full",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "mr-1 font-bold",
                                    children: "Powered by Enso",
                                  }),
                                  (0, s.jsx)("a", {
                                    href: "https://enso.finance",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("img", {
                                      src: "/images/enso-logo.webp",
                                      alt: "ENSO Logo",
                                      className: "w-8 mt-1 cursor-pointer",
                                    }),
                                  }),
                                ],
                              }),
                            "symbiosis" === r.solver.toLowerCase() &&
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-center mt-2 w-full",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "mr-1 font-bold",
                                    children: "Powered by Symbiosis",
                                  }),
                                  (0, s.jsx)("a", {
                                    href: "https://symbiosis.finance/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("img", {
                                      src: "/logos/symbiosis.svg",
                                      alt: "SYMBIOSIS Logo",
                                      className: "w-8 mt-1 cursor-pointer",
                                    }),
                                  }),
                                ],
                              }),
                            "bungee" === r.solver.toLowerCase() &&
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-center mt-2 w-full",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "mr-1 font-bold",
                                    children: "Powered by Bungee",
                                  }),
                                  (0, s.jsx)("a", {
                                    href: "https://docs.bungee.exchange/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("img", {
                                      src: "/images/bungee-logo.png",
                                      alt: "BUNGEE Logo",
                                      className: "w-8 mt-1 cursor-pointer",
                                    }),
                                  }),
                                ],
                              }),
                            "enso" !== r.solver.toLowerCase() &&
                              "li.fi" !== r.solver.toLowerCase() &&
                              "bungee" !== r.solver.toLowerCase() &&
                              "symbiosis" !== r.solver.toLowerCase() &&
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-center mt-2 w-full",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "mr-1 font-bold",
                                    children: "Powered by Brainiac AI",
                                  }),
                                  (0, s.jsx)("a", {
                                    href: "https://brianknows.org",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)("img", {
                                      src: "/brian_logo.png",
                                      alt: "Brian Logo",
                                      className: "w-8 cursor-pointer",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                }),
              }),
            })
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(m.R, {
                isOpen: n,
                onOpenChange: a,
                placement: "center",
                backdrop: "blur",
                children: (0, s.jsx)(x.A, {
                  children: "Unable to find a step.",
                }),
              }),
            });
      };
      var X = t(10246),
        Y = t(28026),
        G = t(33720),
        V = t(79352),
        W = t(66263);
      let $ = new W.Dd({
        integrator: "Brian",
        apiUrl: "https://li.quest/v1",
        rpcs: { 80001: ["https://polygon-mumbai.gateway.tenderly.co"] },
      });
      var Q = t(80685),
        q = t(14576),
        ee = t(1199),
        en = t(3748),
        et = t(2087),
        es = t(88219),
        ea = t(75404),
        er = t(35085),
        eo = t(41109),
        el = t(88301),
        ei = t(21520),
        ec = t(42138),
        ed = t(20475);
      let eh = (e) => {
        let { isOpen: n, onOpen: t, onOpenChange: r } = e,
          [o, l] = (0, a.useState)([]),
          [i, c] = (0, a.useState)(!0),
          d = (0, F.xx)(),
          { address: h } = (0, F.mA)();
        (0, a.useEffect)(() => {
          n && h && (17e3 !== d && 167008 !== d ? p() : u());
        }, [n, h]);
        let p = async () => {
            if (h) {
              c(!0);
              try {
                let e = await $.getTokens({ chains: [d] }),
                  n = await $.getTokenBalancesForChains(h, e.tokens);
                l(n[d]);
              } catch (e) {
              } finally {
                c(!1);
              }
            }
          },
          u = async () => {
            if (h) {
              c(!0);
              try {
                let e = (0, Y.v)({
                    chain: (function (e) {
                      if (e === q.y.id) return q.y;
                      if (e === ee.K.id) return ee.K;
                      if (e === en.y.id) return en.y;
                      if (e === et.v.id) return et.v;
                      if (e === es.P.id) return es.P;
                      if (e === ea.R.id) return ea.R;
                      if (e === er.u.id) return er.u;
                      if (e === Q.by.id) return Q.by;
                      if (e === Q.MF.id) return Q.MF;
                      if (e === eo.Q.id) return eo.Q;
                      if (e === el.e.id) return el.e;
                      if (e === ei.p.id) return ei.p;
                      if (e === ec.m.id) return ec.m;
                      if (e === ed.D.id) return ed.D;
                      if (e === Q.jM.id) return Q.jM;
                      if (e === Q.AE.id) return Q.AE;
                      throw Error(
                        "Chain with ID ".concat(e, " not recognized.")
                      );
                    })(d),
                    transport: (0, G.d)(),
                  }),
                  n = await e.getBalance({ address: h }),
                  t = (0, V.d)(n);
                l([{ symbol: "ETH", amount: t }]);
              } catch (e) {
                console.error("Error fetching testnet balances:", e);
              } finally {
                c(!1);
              }
            }
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(m.R, {
            isOpen: n,
            onOpenChange: r,
            placement: "center",
            backdrop: "blur",
            children: (0, s.jsx)(x.A, {
              children: (e) =>
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(g.k, {
                      className: "flex flex-col gap-1",
                      children: "Wallet Balances",
                    }),
                    (0, s.jsx)(f.I, {
                      children: i
                        ? (0, s.jsxs)("div", {
                            className: "h-[300px] space-y-3",
                            children: [
                              (0, s.jsx)(X.X, {
                                className: "w-3/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-3/5 rounded-lg bg-default-200",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-4/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-4/5 rounded-lg bg-default-200",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-2/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-2/5 rounded-lg bg-default-300",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-3/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-3/5 rounded-lg bg-default-200",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-4/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-4/5 rounded-lg bg-default-200",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-2/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-2/5 rounded-lg bg-default-300",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-3/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-3/5 rounded-lg bg-default-200",
                                }),
                              }),
                              (0, s.jsx)(X.X, {
                                className: "w-4/5 rounded-lg",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "h-6 w-4/5 rounded-lg bg-default-200",
                                }),
                              }),
                            ],
                          })
                        : (0, s.jsxs)("div", {
                            className:
                              "flex h-[300px] flex-col space-y-3 overflow-y-scroll pb-2 pr-2 w-full",
                            children: [
                              0 === o.filter((e) => e.amount > 0).length &&
                                (0, s.jsx)("p", {
                                  children:
                                    "Your wallet is empty! \uD83D\uDE2D",
                                }),
                              o
                                .filter((e) => e.amount > 0)
                                .sort((e, n) => n.amount - e.amount)
                                .map((e) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "flex space-x-2 w-full",
                                      children: [
                                        (0, s.jsx)(_.J, {
                                          src: e.logoURI,
                                          className: "h-6 w-6",
                                          alt: e.symbol,
                                        }),
                                        (0, s.jsx)("p", {
                                          className: "font-semibold",
                                          children: e.symbol,
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "grow",
                                        }),
                                        (0, s.jsxs)(y.C, {
                                          className: "ml-auto",
                                          children: [
                                            parseFloat(e.amount).toFixed(5),
                                            " ",
                                            e.symbol,
                                          ],
                                        }),
                                      ],
                                    },
                                    e.address
                                  )
                                ),
                            ],
                          }),
                    }),
                    (0, s.jsx)(b.R, {}),
                  ],
                }),
            }),
          }),
        });
      };
      var ep = t(30415),
        eu = t.n(ep),
        em = t(61396),
        ex = t.n(em),
        eg = t(83935),
        ef = t(73835),
        ej = t(78499),
        ey = t(41556),
        eb = t(78455),
        ev = t(40344),
        ew = t(74250),
        ek = t(90730);
      let eN = eu()(
          () =>
            Promise.all([t.e(8150), t.e(8404), t.e(4823), t.e(8896)]).then(
              t.bind(t, 28896)
            ),
          { loadableGenerated: { webpack: () => [28896] }, ssr: !1 }
        ),
        eC = () => {
          let e = (0, l.Nh)((e) => e.open),
            n = (0, l.Nh)((e) => e.toggleSidebar),
            { push: t } = (0, r.useRouter)(),
            o = (0, r.usePathname)(),
            i = (0, l.Nh)((e) => e.showNames),
            c = (0, l.Nh)((e) => e.toggleNames),
            d = [
              {
                name: "Homepage",
                icon: eg.Z,
                color: "text-gray-500",
                pathname: "/app",
              },
              // {
              //   name: "Ask Brian",
              //   icon: ef.Z,
              //   color: "text-blue-500",
              //   pathname: "/app/search",
              //   keys: ["command"],
              //   key: "F",
              // },
              // {
              //   name: "Send transactions",
              //   icon: ej.Z,
              //   color: "text-emerald-500",
              //   pathname: "/app/builds",
              //   keys: ["command"],
              //   key: "B",
              // },
              // {
              //   name: "Deploy contracts",
              //   icon: ey.Z,
              //   color: "text-teal-500",
              //   pathname: "/app/deploy",
              //   keys: ["command"],
              //   key: "D",
              // },
              {
                name: "Search Data",
                icon: eb.Z,
                color: "text-purple-500",
                pathname: "/app/subgraphs",
                keys: ["command"],
                key: "V",
              },
              // {
              //   name: "Settings",
              //   icon: ev.Z,
              //   color: "text-amber-500",
              //   pathname: "/app/settings",
              // },
            ];
          return (
            (0, a.useEffect)(() => {
              c(e);
            }, [e]),
            (0, s.jsx)("div", {
              className: "".concat(
                e ? "w-96 px-8" : "w-40 px-4",
                " hidden transition-width lg:block pt-8 pb-4"
              ),
              children: (0, s.jsxs)("section", {
                className: "flex h-full w-full flex-col space-y-8",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex w-full items-center justify-between",
                    children: [
                      (0, s.jsxs)(ex(), {
                        href: "/",
                        className: "flex items-center space-x-2",
                        children: [
                          (0, s.jsx)("img", {
                            src: "/brian_logo.png",
                            alt: "Brian Knows logo",
                            className: "h-12",
                          }),
                          (0, s.jsx)("h1", {
                            className: (0, S.cn)(
                              "text-4xl font-bold transition opacity-100 ",
                              !i && "invisible w-0 h-0 opacity-0"
                            ),
                            children: "Brian",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(v.A, {
                        isIconOnly: !0,
                        variant: "light",
                        className: "group",
                        onClick: () => n(),
                        children: [
                          e &&
                            (0, s.jsx)(ew.Z, {
                              size: 24,
                              className:
                                "text-content3 transition-colors dark:group-hover:text-white group-hover:text-gray-800",
                            }),
                          !e &&
                            (0, s.jsx)(ek.Z, {
                              size: 24,
                              className:
                                "text-content3 transition-colors  dark:group-hover:text-white group-hover:text-gray-800",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col select-none space-y-2",
                    children: d.map((e, n) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          id: "".concat(e.name.toLowerCase().replace(" ", "-")),
                          onClick: () => t(e.pathname),
                          className:
                            "group flex space-x-4 justify-between rounded-md ".concat(
                              o === e.pathname && "bg-content2",
                              " cursor-pointer px-4 py-2 transition-colors hover:bg-content2"
                            ),
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex space-x-4 items-center",
                              children: [
                                (0, s.jsx)(e.icon, {
                                  size: 24,
                                  className: e.color,
                                }),
                                (0, s.jsx)("p", {
                                  className: (0, S.cn)(
                                    "transition opacity-100 dark:group-hover:text-white group-hover:text-gray-800 text-gray-400",
                                    o === e.pathname &&
                                      "font-semibold dark:text-white text-gray-800",
                                    !i && "invisible w-0 h-0 opacity-0"
                                  ),
                                  children: e.name,
                                }),
                              ],
                            }),
                            e.keys &&
                              (0, s.jsx)(y.C, {
                                keys: e.keys,
                                children: e.key,
                              }),
                          ],
                        },
                        "menu-item-".concat(n)
                      )
                    ),
                  }),
                  (0, s.jsx)(eN, {}),
                ],
              }),
            })
          );
        };
      var eO = t(94042),
        eA = t(89571),
        eF = t(12765),
        eS = t(41432),
        eI = t(26029),
        eM = t(86032),
        eE = t(33153),
        eT = t(6435),
        eD = t(68157),
        eB = t(53611);
      eD.ZP.init("phc_zfXll4g6QaRFF76UG5hcq3ttofRR8TP24QEgF1nv1vJ", {
        api_host: "https://www.brianknows.org/ingest",
        capture_pageview: !1,
      });
      let eR = () => {
          let e = (0, r.usePathname)(),
            n = (0, r.useSearchParams)();
          return (
            (0, a.useEffect)(() => {
              if (e) {
                let t = window.origin + e;
                n.toString() && (t += "?".concat(n.toString())),
                  eD.ZP.capture("$pageview", { $current_url: t });
              }
            }, [e, n]),
            (0, s.jsx)(s.Fragment, {})
          );
        },
        eU = [
          {
            selector: "#homepage",
            content:
              "This is the Brainiac AI App homepage: here you can navigate and explore all the functionalities.",
            position: "right",
          },
          // {
          //   selector: "#ask-brian",
          //   content:
          //     "Here you can ask Brainiac AI informations about protocols, chains and more. Such as 'What is Uniswap?', Brainiac AI will generate an answer and the link to the docs used to generate it",
          //   position: "right",
          // },
          // {
          //   selector: "#send-transactions",
          //   content:
          //     "Here you can ask Brainiac AI to build a transaction for you by simply prompting in plain English! Cool, isn't it? Check the supported actions available in that page to discover all the possible operations",
          //   position: "right",
          // },
          // {
          //   selector: "#deploy-contracts",
          //   content:
          //     "Here you can ask Brainiac AI to write, compile and deploy a smart contract for you by simply prompting. Such as 'write an ERC20 named Test with symbol TST and supply 100000, the entire supply is sent to the owner address (0x...) when deploying it' ",
          //   position: "right",
          // },
          {
            selector: "#search-data",
            content:
              "This functionality is not available yet, but in the future you'll be able to search onchain data with a prompt!",
            position: "right",
          },
          // {
          //   selector: "#settings",
          //   content:
          //     "Here you can change some settings, have a look at the deployed smart contracts and interact with them",
          //   position: "right",
          // },
          // {
          //   selector: "#docs",
          //   content:
          //     "If you want to go deep dive into Brainiac AI and how it works, the docs are the right place for you.",
          //   position: "right",
          // },
        ];
      function eL(e) {
        let { setIsOpen: n, setCurrentStep: t, currentStep: a } = e,
          r = e.steps[a].content,
          l = a === e.steps.length - 1;
        return (0, s.jsxs)(o.w, {
          children: [
            (0, s.jsxs)(eO.u, {
              className: "font-semibold",
              children: ["Help Tour - ", a + 1, "/", e.steps.length],
            }),
            (0, s.jsx)(eA.j, {}),
            (0, s.jsx)(U.G, {
              className: "text-sm",
              children:
                "function" == typeof r
                  ? r({ ...e, someOtherStuff: "Custom Text" })
                  : r,
            }),
            (0, s.jsxs)(eF.i, {
              className: "flex w-full justify-between",
              children: [
                (0, s.jsx)(v.A, {
                  variant: "flat",
                  onClick: () => t(a - 1),
                  disabled: 0 == e.currentStep,
                  children: "Prev.",
                }),
                (0, s.jsx)(v.A, {
                  variant: "flat",
                  onClick: () => {
                    l ? n(!1) : t(a + 1);
                  },
                  children: "Next",
                }),
              ],
            }),
          ],
        });
      }
      let eP = (e) => {
        let { Text: n, Link: t } = e;
        return (0, s.jsxs)(n, {
          children: [
            "Brainiac AI is a platform in ",
            (0, s.jsx)("b", { children: "private beta" }),
            ", which means that some of its features are still being tested. You are aware of the",
            " ",
            (0, s.jsx)("b", {
              children: "risks involved in using real funds on mainnet",
            }),
            " and that the Brainiac AI team is not responsible for any money you may lose.",
          ],
        });
      };
      function eK(e) {
        let { children: n } = e,
          { theme: t } = (0, eT.F)(),
          r = (0, l.c7)((e) => e.account);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.Suspense, { children: (0, s.jsx)(eR, {}) }),
            (0, s.jsx)(eE.C1, {
              ContentComponent: eL,
              steps: eU,
              showBadge: !1,
              showCloseButton: !1,
              styles: {
                popover: (e) => ({
                  ...e,
                  padding: "0px",
                  backgroundColor: "transparent",
                }),
              },
              children: (0, s.jsx)(F.eM, {
                config: Z.gb,
                children: (0, s.jsx)(eS.zF, {
                  adapter: Z.kk,
                  status: r ? "authenticated" : "unauthenticated",
                  children: (0, s.jsx)(eS.pj, {
                    chains: Z.p5,
                    theme: "dark" === t ? (0, eI.$)() : (0, eM.W)(),
                    appInfo: {
                      appName: "Brainiac AI",
                      learnMoreUrl:
                        "https://brianknows.notion.site/Brian-Doc-0-1v-bc2445eb8218419390608035ab534d57?pvs=4",
                      disclaimer: eP,
                    },
                    children: (0, s.jsx)(eB.zf, { client: eD.ZP, children: n }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function ez(e) {
        let { children: n } = e,
          t = (0, l.Mx)((e) => e.open),
          m = (0, l.Mx)((e) => e.toggleWalletModal),
          x = (0, l.HH)((e) => e.open),
          g = (0, l.HH)((e) => e.toggleApiKeysModal),
          f = (0, l.z)((e) => e.modalOpen),
          j = (0, l.z)((e) => e.toggleHistoryModal),
          y = (0, c.J)((e) => e.open),
          b = (0, c.J)((e) => e.toggleDeleteApiKeyModal),
          v = (0, u.g)((e) => e.open),
          k = (0, u.g)((e) => e.toggleRouteInfoModal),
          N = (0, p.X)((e) => e.open),
          C = (0, p.X)((e) => e.toggleFeedbackModal),
          O = (0, h.M)((e) => e.open),
          A = (0, h.M)((e) => e.toggleExplainCodeModal),
          F = (0, d.i)((e) => e.open),
          S = (0, d.i)((e) => e.toggleDeployContractModal),
          E = (0, i.I)((e) => e.open),
          T = (0, i.I)((e) => e.toggleContractInfoModal),
          U = (0, r.useRouter)(),
          L = (e) => {
            (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
              "Meta" !== e.key &&
              "Shift" !== e.key &&
              "Control" !== e.key &&
              "alt" !== e.key &&
              (e.metaKey && "f" === e.key.toLowerCase()
                ? (e.preventDefault(), U.push("/app/search"))
                : e.metaKey && "b" === e.key.toLowerCase()
                ? (e.preventDefault(), U.push("/app/builds"))
                : e.metaKey &&
                  "d" === e.key.toLowerCase() &&
                  (e.preventDefault(), U.push("/app/deploy")));
          };
        return (
          (0, a.useEffect)(
            () => (
              document.addEventListener("keydown", L),
              () => {
                document.removeEventListener("keydown", L);
              }
            ),
            []
          ),
          (0, s.jsx)(eK, {
            children: (0, s.jsxs)("div", {
              className: "relative flex h-screen w-screen bg-background",
              children: [
                (0, s.jsx)(eC, {}),
                (0, s.jsx)("div", {
                  className: "flex-1 p-4 lg:pl-0 lg:pr-8",
                  children: (0, s.jsx)(o.w, {
                    className: "h-full w-full",
                    children: n,
                  }),
                }),
                (0, s.jsx)(M, {
                  isOpen: y,
                  onOpenChange: () => b(),
                  onOpen: b,
                }),
                (0, s.jsx)(R, { isOpen: N, onOpenChange: C, onOpen: C }),
                (0, s.jsx)(B, { isOpen: O, onOpenChange: A, onOpen: A }),
                F && (0, s.jsx)(D, { isOpen: F, onOpenChange: S, onOpen: S }),
                (0, s.jsx)(I, { isOpen: E, onOpenChange: T, onOpen: T }),
              ],
            }),
          })
        );
      }
    },
    61985: function (e, n, t) {
      "use strict";
      t.d(n, {
        I5: function () {
          return l;
        },
        KH: function () {
          return i;
        },
      });
      var s = t(73835),
        a = t(78499),
        r = t(41556),
        o = t(78455);
      let l =
          "Brainiac AI App is a non-custodial solutions still in development. You are aware of the risks involved in using real funds and that the AI is not executing anything on your behalf. You must manually review, sign and execute transactions. Please read the transaction description carefully before executing it. By signing this message, you agree to perform any transactions at your own risk.",
        i = [
          // {
          //   condition: !1,
          //   title: "Ask Brainiac AI",
          //   subtitle:
          //     "Explore the web3 ecosystem and find the resources that you need.",
          //   background: "#1e40af",
          //   icon: s.Z,
          //   iconColor: "text-blue-500",
          //   pathname: "/app/search",
          // },
          // {
          //   condition: !1,
          //   title: "Send transactions",
          //   subtitle:
          //     "Swap your tokens, bridge them across many chains, and much more.",
          //   background: "#065f46",
          //   icon: a.Z,
          //   iconColor: "text-emerald-500",
          //   pathname: "/app/builds",
          // },
          // {
          //   condition: !1,
          //   title: "Deploy Smart Contracts",
          //   subtitle:
          //     "Deploy and verify Smart Contracts on many chains via Brainiac AI.",
          //   icon: r.Z,
          //   background: "#115e59",
          //   iconColor: "text-teal-500",
          //   pathname: "/app/deploy",
          // },
          {
            condition: !1,
            title: "Search Data (coming soon)",
            subtitle: "Ask Brainiac AI to search on-chain and off-chain data.",
            icon: o.Z,
            background: "#6b21a8",
            iconColor: "text-purple-500",
            pathname: "/app/subgraphs",
          },
        ];
    },
    91890: function (e, n, t) {
      "use strict";
      t.d(n, {
        gb: function () {
          return g;
        },
        kk: function () {
          return f;
        },
        p5: function () {
          return u;
        },
      });
      var s = t(90522),
        a = t(41432),
        r = t(96386),
        o = t(55647),
        l = t(56926),
        i = t(97002),
        c = t(9253),
        d = t(61985),
        h = t(80685),
        p = t(64910);
      let u = [
          h.tH,
          h.PZ,
          h.yu,
          h.v4,
          h.KH,
          h.yX,
          h.ue,
          h.by,
          h.MF,
          h.eG,
          h.pL,
          h.jM,
          h.AR,
          h.AE,
          h.xJ,
        ],
        { publicClient: m } = (0, o.QB)(u, [(0, c.I)()]),
        { connectors: x } = (0, s.wo)({
          appName: "Brainiac AI",
          projectId: "ef100ebb987c3e51966f4e6cf7dcacac",
          chains: u,
        }),
        g = (0, l._g)({
          autoConnect: !0,
          connectors: [
            ...x(),
            new i.J({
              chains: u,
              options: { allowedDomains: [/app.safe.global$/], debug: !1 },
            }),
          ],
          publicClient: m,
        }),
        f = (0, a.vJ)({
          getNonce: async () => {
            let e = await fetch("/api/auth/nonce");
            return await e.text();
          },
          createMessage: (e) => {
            let { nonce: n, address: t, chainId: s } = e;
            return new r.SiweMessage({
              domain: window.location.host,
              address: t,
              statement: d.I5,
              uri: window.location.origin,
              version: "1",
              chainId: s,
              nonce: n,
            });
          },
          getMessageBody: (e) => {
            let { message: n } = e;
            return n.prepareMessage();
          },
          verify: async (e) => {
            let { message: n, signature: t } = e,
              s = await fetch("/api/auth/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: n, signature: t }),
              }),
              a = await fetch("/api/auth/me"),
              { account: r } = await a.json(),
              o = p.c7.getState().setAccount;
            return o(r), !!s.ok;
          },
          signOut: async () => {
            await fetch("/api/auth/logout");
          },
        });
    },
    36560: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return a;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
        open: !1,
        toggleContractInfoModal: () => e((e) => ({ open: !e.open })),
        contract: void 0,
        setContract: (n) => e({ contract: n }),
      }));
    },
    28077: function (e, n, t) {
      "use strict";
      t.d(n, {
        J: function () {
          return a;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
        open: !1,
        toggleDeleteApiKeyModal: () => e((e) => ({ open: !e.open })),
        selectedKey: null,
        setSelectedKey: (n) => e({ selectedKey: n }),
      }));
    },
    8814: function (e, n, t) {
      "use strict";
      t.d(n, {
        i: function () {
          return a;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
        open: !1,
        toggleDeployContractModal: () => e((e) => ({ open: !e.open })),
        contractData: void 0,
        setContractData: (n) => e({ contractData: n }),
      }));
    },
    25790: function (e, n, t) {
      "use strict";
      t.d(n, {
        M: function () {
          return a;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
        open: !1,
        toggleExplainCodeModal: () => e((e) => ({ open: !e.open })),
        target: "",
        setTarget: (n) => e({ target: n }),
      }));
    },
    65232: function (e, n, t) {
      "use strict";
      t.d(n, {
        X: function () {
          return a;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
        open: !1,
        toggleFeedbackModal: () => e((e) => ({ open: !e.open })),
        target: null,
        setTarget: (n) => e({ target: n }),
      }));
    },
    64910: function (e, n, t) {
      "use strict";
      t.d(n, {
        c7: function () {
          return a;
        },
        HH: function () {
          return r;
        },
        FY: function () {
          return o;
        },
        zi: function () {
          return l;
        },
        z: function () {
          return i;
        },
        Rp: function () {
          return c;
        },
        Nh: function () {
          return d;
        },
        Mx: function () {
          return h;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
          account: void 0,
          setAccount: (n) => e({ account: n }),
        })),
        r = (0, s.Ue)((e) => ({
          open: !1,
          toggleApiKeysModal: () => e((e) => ({ open: !e.open })),
        })),
        o = (0, s.Ue)((e) => ({
          messages: [],
          addMessage: (n) => e((e) => ({ messages: [...e.messages, n] })),
          replaceLastMessage: (n) =>
            e((e) => {
              let t = e.messages;
              return (t[t.length - 1] = n), { messages: t };
            }),
          clearMessages: () => e({ messages: [] }),
        })),
        l = (0, s.Ue)((e) => ({
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
      let i = (0, s.Ue)((e) => ({
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
      let c = (0, s.Ue)((e) => ({
          messages: [],
          addMessage: (n) => e((e) => ({ messages: [...e.messages, n] })),
          replaceLastMessage: (n) =>
            e((e) => {
              let t = e.messages;
              return (t[t.length - 1] = n), { messages: t };
            }),
          clearMessages: () => e({ messages: [] }),
        })),
        d = (0, s.Ue)((e) => ({
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
        h = (0, s.Ue)((e) => ({
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
    55773: function (e, n, t) {
      "use strict";
      t.d(n, {
        g: function () {
          return a;
        },
      });
      var s = t(74738);
      let a = (0, s.Ue)((e) => ({
        open: !1,
        toggleRouteInfoModal: () => e((e) => ({ open: !e.open })),
        selectedSteps: [],
        setSelectedSteps: (n) => e({ selectedSteps: n }),
      }));
    },
  },
  function (e) {
    e.O(
      0,
      [
        3154, 4625, 3071, 4962, 6708, 598, 6125, 5502, 8892, 8442, 7237, 3611,
        7731, 3899, 578, 2971, 7864, 1744,
      ],
      function () {
        return e((e.s = 68074));
      }
    ),
      (_N_E = e.O());
  },
]);
