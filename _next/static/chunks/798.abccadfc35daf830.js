"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [798],
  {
    44548: function (e, a, s) {
      s.d(a, {
        F: function () {
          return u;
        },
      });
      var t = s(57437),
        o = s(88367),
        i = s(26428),
        r = s(46914),
        n = s(21507),
        l = s(17648),
        c = s(63753),
        d = s(81319),
        h = s(10815);
      let p = (e) =>
          (0, t.jsx)(o.O, {
            href: e.href,
            isExternal: !0,
            target: "_blank",
            rel: "noreferrer",
            children: e.children,
          }),
        u = (e) => {
          let { index: a, message: s, resources: u, status: m } = e;
          return (0, t.jsxs)(
            l.E.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5 },
              className: "flex items-start space-x-4",
              children: [
                (0, t.jsx)(i.h, {
                  color: "default",
                  className: "h-12 w-12 shrink-0 bg-blue-500",
                  showFallback: !0,
                  fallback: (0, t.jsx)(c.Z, {}),
                }),
                (0, t.jsx)(r.w, {
                  children: (0, t.jsxs)(n.G, {
                    className: "flex max-w-2xl flex-col space-y-2",
                    children: [
                      (0, t.jsx)(d.U, {
                        remarkPlugins: [h.Z],
                        className: "".concat(
                          "pending" === m && "animate-pulse",
                          " prose dark:prose-invert text-justify"
                        ),
                        components: { a: p },
                        children: s,
                      }),
                      u &&
                        u.length > 0 &&
                        (0, t.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, t.jsx)("p", {
                              className: "text-sm opacity-60",
                              children: "Related top 3 resources:",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "grid w-full grid-cols-1 gap-4 md:grid-cols-3",
                              children: u.map((e, a) =>
                                (0, t.jsx)(
                                  o.O,
                                  {
                                    href: e.metadata.source,
                                    isExternal: !0,
                                    className:
                                      "cursor-pointer truncate text-xs",
                                    children: e.metadata.title,
                                  },
                                  "resource-"
                                    .concat(e.metadata.title, "-")
                                    .concat(a)
                                )
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            },
            "message-".concat(a)
          );
        };
    },
    92570: function (e, a, s) {
      s.d(a, {
        X: function () {
          return y;
        },
      });
      var t = s(57437),
        o = s(26428),
        i = s(46914),
        r = s(21507),
        n = s(12765),
        l = s(60598),
        c = s(17648),
        d = s(24403),
        h = s(99269),
        p = s(31869),
        u = s(81319),
        m = s(2265);
      let y = (e) => {
        let { index: a, message: s, onRepeat: y } = e,
          [w, f] = (0, m.useState)(!1);
        return (0, t.jsxs)(
          c.E.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            className: "flex items-start space-x-4",
            children: [
              (0, t.jsx)(o.h, {
                color: "default",
                className: "h-12 w-12 shrink-0",
                showFallback: !0,
                fallback: (0, t.jsx)(d.Z, {}),
              }),
              (0, t.jsxs)(i.w, {
                children: [
                  (0, t.jsx)(r.G, {
                    className: "flex flex-col space-y-2",
                    children: (0, t.jsx)(u.U, {
                      disallowedElements: ["a"],
                      className: "text-justify",
                      children: s,
                    }),
                  }),
                  y &&
                    (0, t.jsx)(n.i, {
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center justify-end w-full",
                        children: [
                          (0, t.jsx)(l.A, {
                            isIconOnly: !0,
                            size: "sm",
                            onClick: () => y(s),
                            children: (0, t.jsx)(h.Z, { size: 16 }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "ml-2",
                            children: [
                              " ",
                              (0, t.jsx)(l.A, {
                                isIconOnly: !0,
                                size: "sm",
                                onClick: () => {
                                  navigator.clipboard.writeText(s),
                                    f(!0),
                                    setTimeout(() => f(!1), 3e3);
                                },
                                children: (0, t.jsx)(p.Z, { size: 16 }),
                              }),
                            ],
                          }),
                          w &&
                            (0, t.jsx)("span", {
                              className: "ml-2 text-gray-500",
                              children: "Copied!",
                            }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          },
          "message-".concat(a)
        );
      };
    },
    60798: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return V;
          },
        });
      var t = s(57437);
      s(31596);
      var o = s(2265),
        i = s(46914),
        r = s(21507),
        n = s(43232),
        l = s(13409),
        c = s(60598),
        d = s(97256),
        h = s(48793),
        p = s(88367),
        u = s(68389),
        m = s(23329),
        y = s(87726),
        w = s(52469),
        f = s(88971),
        v = s(22178),
        x = s(53611),
        b = s(57697),
        g = s(56926),
        k = s(55647),
        E = s(64910),
        N = s(70578);
      let C = [
          { display: "Transfer tokens", search: "transfer 1 usdc to 0x..." },
          { display: "Wrap ETH", search: "wrap 1 ETH" },
          {
            display: "Check token balance",
            search: "what is my balance of usdc?",
          },
          { display: "Bridge", search: "bridge 0.05 eth to holesky" },
        ],
        j = {
          1: [
            { display: "Bridge", search: "bridge 1 eth to arbitrum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to degen from Ethereum to Base",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to pendle" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of grt to vitalik.eth",
            },
            {
              display: "Stake on Lido",
              search: "stake 1 eth on lido protocol",
            },
            {
              display: "Unstake from Lido",
              search: "unstake 1 eth from lido protocol",
            },
            {
              display: "Stake on Rocket Pool",
              search: "deposit 100 dollars of eth into Rocket Pool protocol",
            },
            {
              display: "Unstake from Rocket Pool",
              search: "withdraw 5 eth from Rocket Pool",
            },
            { display: "Deposit on Aave", search: "deposit 100 usdc on Aave" },
            {
              display: "Withdraw from Aave",
              search: "withdraw 100 usdc from Aave",
            },
            {
              display: "ENS Registration",
              search:
                "register Brainiac AIlovesens.eth for 2 years and set it as my primary name",
            },
            { display: "ENS Renewal", search: "renew vitalik.eth for 2 years" },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "bridge 1 eth to arbitrum and deposit 0.5 eth into lido on ethereum",
            },
            { display: "Borrow from Aave", search: "Borrow 100 usdc" },
            {
              display: "Repay debt on Aave",
              search: "Repay all my usdc debt position",
            },
            { display: "Check LTV on aave", search: "What is my LTV on aave?" },
            {
              display: "Check Health Factor on aave",
              search: "What is my Health Factor on aave?",
            },
            {
              display: "Check deposited amount on aave",
              search: "How much do I have deposited on aave?",
            },
            {
              display: "Check borrowable amount on aave",
              search: "How much can I borrow on aave?",
            },
            {
              display: "Check liquidation threshold on aave",
              search: "What is my liquidation threshold on aave?",
            },
            {
              display: "Check all position info on aave",
              search: "Tell me all my position info on aave",
            },
          ],
          42161: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Arbitrum to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of wbtc to vitalik.eth",
            },
            { display: "Deposit on Aave", search: "deposit 100 usdc on Aave" },
            {
              display: "Withdraw from Aave",
              search: "withdraw 100 usdc from Aave",
            },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to register Brainiac AIlovesens.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "bridge 1 eth to zksync and deposit 0.5 eth into aave on arbitrum",
            },
            { display: "Borrow from Aave", search: "Borrow 100 usdc" },
            {
              display: "Repay debt on Aave",
              search: "Repay all my usdc debt position",
            },
            { display: "Check LTV on aave", search: "What is my LTV on aave?" },
            {
              display: "Check Health Factor on aave",
              search: "What is my Health Factor on aave?",
            },
            {
              display: "Check deposited amount on aave",
              search: "How much do I have deposited on aave?",
            },
            {
              display: "Check borrowable amount on aave",
              search: "How much can I borrow on aave?",
            },
            {
              display: "Check liquidation threshold on aave",
              search: "What is my liquidation threshold on aave?",
            },
            {
              display: "Check all position info on aave",
              search: "Tell me all my position info on aave",
            },
          ],
          43114: [
            { display: "Bridge", search: "bridge 1 avax to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Avalanche to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of avax to eth" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdt to vitalik.eth",
            },
            { display: "Wrap native token", search: "wrap 1 avax" },
            { display: "Unwrap native token", search: "unwrap 1 wavax" },
            {
              display: "Multiple operations",
              search: "swap 1 avax to usdt and then swap 10 $ of avax to gmx",
            },
          ],
          137: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Polygon to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of matic to eth" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of matic to vitalik.eth",
            },
            { display: "Deposit on Aave", search: "deposit 100 usdc on Aave" },
            {
              display: "Withdraw from Aave",
              search: "withdraw 100 usdc from Aave",
            },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to register Brainiac AIlovesens.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 matic" },
            { display: "Unwrap native token", search: "unwrap 1 wmatic" },
            {
              display: "Multiple operations",
              search:
                "bridge 1 weth to ethereum and deposit 0.5 eth into aave on polygon",
            },
            { display: "Borrow from Aave", search: "Borrow 100 usdc" },
            {
              display: "Repay debt on Aave",
              search: "Repay all my usdc debt position",
            },
            { display: "Check LTV on aave", search: "What is my LTV on aave?" },
            {
              display: "Check Health Factor on aave",
              search: "What is my Health Factor on aave?",
            },
            {
              display: "Check deposited amount on aave",
              search: "How much do I have deposited on aave?",
            },
            {
              display: "Check borrowable amount on aave",
              search: "How much can I borrow on aave?",
            },
            {
              display: "Check liquidation threshold on aave",
              search: "What is my liquidation threshold on aave?",
            },
            {
              display: "Check all position info on aave",
              search: "Tell me all my position info on aave",
            },
          ],
          10: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Optimism to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdc to vitalik.eth",
            },
            { display: "Deposit on Aave", search: "deposit 100 usdc on Aave" },
            {
              display: "Withdraw from Aave",
              search: "withdraw 100 usdc from Aave",
            },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to register vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "swap 1 eth to usdc and deposit 0.5 eth into aave on optimism",
            },
            { display: "Borrow from Aave", search: "Borrow 100 usdc" },
            {
              display: "Repay debt on Aave",
              search: "Repay all my usdc debt position",
            },
            { display: "Check LTV on aave", search: "What is my LTV on aave?" },
            {
              display: "Check Health Factor on aave",
              search: "What is my Health Factor on aave?",
            },
            {
              display: "Check deposited amount on aave",
              search: "How much do I have deposited on aave?",
            },
            {
              display: "Check borrowable amount on aave",
              search: "How much can I borrow on aave?",
            },
            {
              display: "Check liquidation threshold on aave",
              search: "What is my liquidation threshold on aave?",
            },
            {
              display: "Check all position info on aave",
              search: "Tell me all my position info on aave",
            },
          ],
          8453: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search: "crosschain swap 1000 usdc to usdt from Base to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to degen" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of degen to vitalik.eth",
            },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to register Brainiac AIlovesens.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            { display: "Deposit on Aave", search: "deposit 100 usdc on Aave" },
            {
              display: "Withdraw from Aave",
              search: "withdraw 100 usdc from Aave",
            },
            { display: "Borrow from Aave", search: "Borrow 100 usdc" },
            {
              display: "Repay debt on Aave",
              search: "Repay all my usdc debt position",
            },
            { display: "Check LTV on aave", search: "What is my LTV on aave?" },
            {
              display: "Check Health Factor on aave",
              search: "What is my Health Factor on aave?",
            },
            {
              display: "Check deposited amount on aave",
              search: "How much do I have deposited on aave?",
            },
            {
              display: "Check borrowable amount on aave",
              search: "How much can I borrow on aave?",
            },
            {
              display: "Check liquidation threshold on aave",
              search: "What is my liquidation threshold on aave?",
            },
            {
              display: "Check all position info on aave",
              search: "Tell me all my position info on aave",
            },
            {
              display: "Multiple operations",
              search:
                "bridge 1 eth to from base to ethereum and deposit 0.5 eth into aave on base",
            },
          ],
          324: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Zksync to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdc to vitalik.eth",
            },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to register Brainiac AIlovesens.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "bridge 1 eth to zksync and deposit 0.5 eth into aave on arbitrum",
            },
          ],
          100: [
            { display: "Bridge", search: "bridge 1 gno to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Gnosis to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of gno to eth" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdt to vitalik.eth",
            },
            { display: "Wrap native token", search: "wrap 1 gno" },
            { display: "Unwrap native token", search: "unwrap 1 wgno" },
            {
              display: "Multiple operations",
              search: "bridge 100 usdc to Ethereum and swap 10 xdai to gno",
            },
          ],
          59144: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Linea to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdt to vitalik.eth",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "bridge 1 eth to Ethereum and deposit 0.5 eth into aave on arbitrum",
            },
          ],
          56: [
            { display: "Bridge", search: "bridge 1 bnb to Ethereum" },
            {
              display: "Crosschain swap",
              search: "crosschain swap 1000 usdc to usdt from BSC to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of bnb to eth" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdt to vitalik.eth",
            },
            { display: "Wrap native token", search: "wrap 1 bnb" },
            { display: "Unwrap native token", search: "unwrap 1 wbnb" },
            {
              display: "Multiple operations",
              search: "bridge 1 weth to Ethereum and transfer 1 bnb to 0x...00",
            },
          ],
          534352: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Scroll to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of usdt to vitalik.eth",
            },
            {
              display: "ENS registration cost",
              search:
                "how much does it cost to register vitalik.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "how much does it cost to renew vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "when does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "what is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "what is the ENS associated to 0xabc…ced?",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "swap 10 $ of eth to usdc and then swap 10$ of eth to wbtc",
            },
          ],
          81457: [
            { display: "Bridge", search: "Bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "Crosschain swap 1000 usdb to usdt from Blast to ethereum",
            },
            { display: "Swap", search: "Swap 1000 dollars of eth to usdb" },
            {
              display: "Transfer",
              search: "Transfer 10$ of usdb to vitalik.eth",
            },
            { display: "Wrap native token", search: "Wrap 1 eth" },
            { display: "Unwrap native token", search: "Unwrap 1 weth" },
            {
              display: "Multiple operations",
              search: "Swap 10 dollars of eth to each: weth and usdb",
            },
            {
              display: "ENS registration cost",
              search:
                "How much does it cost to register Brainiac AIlovesens.eth for 6 months?",
            },
            {
              display: "ENS renewal cost",
              search:
                "How much does it cost to register vitalik.eth for 6 months?",
            },
            { display: "ENS availability", search: "Is limone.eth available?" },
            {
              display: "ENS expiration",
              search: "When does vitalik.eth ens domain expire?",
            },
            {
              display: "Resolve ENS",
              search: "What is the address associated to vitalik.eth?",
            },
            {
              display: "Resolve Address",
              search: "What is the ENS associated to 0xabc…ced?",
            },
            {
              display: "Multiple operations",
              search: "bridge 100 usdc to Ethereum and swap 1 eth to usdc",
            },
          ],
          167e3: [
            { display: "Bridge", search: "bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search:
                "crosschain swap 1000 usdc to usdt from Taiko to Ethereum",
            },
            { display: "Swap", search: "swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "transfer 10 dollars of wbtc to 0x...",
            },
            { display: "Wrap native token", search: "wrap 1 eth" },
            { display: "Unwrap native token", search: "unwrap 1 weth" },
            {
              display: "Multiple operations",
              search:
                "bridge 1 eth to zksync and swap 0.5 eth to taiko on taiko chain",
            },
          ],
          34443: [
            { display: "Bridge", search: "Bridge 1 eth to Ethereum" },
            {
              display: "Crosschain swap",
              search: "Crosschain swap 1000 usdc to usdt from Mode to ethereum",
            },
            { display: "Swap", search: "Swap 1000 dollars of eth to usdc" },
            {
              display: "Transfer",
              search: "Transfer 10$ of usdc to vitalik.eth",
            },
            { display: "Wrap native token", search: "Wrap 1 eth" },
            { display: "Unwrap native token", search: "Unwrap 1 weth" },
            {
              display: "Multiple operations",
              search: "Swap 10 dollars of eth to each: weth and usdc",
            },
          ],
          5: C,
          17e3: C,
          167008: C,
        };
      var S = s(26428),
        T = s(17648),
        A = s(63753),
        W = s(26575),
        B = s(93765),
        R = s(65232),
        I = s(45919),
        D = s(94042),
        M = s(91026),
        z = s(89571),
        L = s(28879),
        U = s(81319),
        F = s(65082);
      let H = [
        {
          constant: !0,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "_owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        { payable: !0, stateMutability: "payable", type: "fallback" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
      ];
      var _ = s(55773);
      let O = (e) => {
          let { index: a, step: s } = e,
            { action: n, logoUrl: l, data: d, type: h, solver: u } = s,
            [m, y] = (0, o.useState)("pending"),
            [w, f] = (0, o.useState)(!1),
            [v, b] = (0, o.useState)(""),
            C = (0, _.g)((e) => e.setSelectedSteps),
            j = (0, _.g)((e) => e.toggleRouteInfoModal),
            S = (0, E.c7)((e) => e.account),
            T = (0, x.U0)(),
            A = (0, g.xx)(),
            { refetch: W } = (0, g.KQ)({ chainId: A, address: S.address }),
            [B, R] = (0, o.useState)(""),
            O = async () => {
              f(!0);
              try {
                var e, a;
                null == T || T.capture("transaction_executed");
                let t = Array.isArray(s.data) ? s.data[0] : s.data,
                  { steps: o } = t;
                console.log("CHAIN IDS", t.fromChainId, A);
                let i = await (0, k.xz)({ chainId: A });
                if (t.fromChainId !== A)
                  try {
                    await (null == i
                      ? void 0
                      : i.switchChain({ id: t.fromChainId }));
                  } catch (e) {
                    if ((console.log(e), t.fromChainId !== A))
                      throw Error("chain_error");
                  }
                i = await (0, k.xz)({ chainId: t.fromChainId });
                let r = (0, k.uV)({ chainId: t.fromChainId });
                if (
                  "0x0000000000000000000000000000000000000000" ===
                  t.fromToken.address
                ) {
                  let { data: e } = await W();
                  if (
                    ((null == e ? void 0 : e.value) || 0) < BigInt(t.fromAmount)
                  )
                    throw Error("balance is too low");
                } else {
                  let e = await r.readContract({
                    abi: H,
                    functionName: "balanceOf",
                    address: t.fromToken.address,
                    args: [null == i ? void 0 : i.account.address],
                  });
                  if (e < BigInt(t.fromAmount))
                    throw Error("balance is too low");
                }
                if (o.length > 1) {
                  let a = "";
                  for (let s of o) {
                    let t = await (null == i
                      ? void 0
                      : i.sendTransaction({ ...s }));
                    if (t)
                      await r.waitForTransactionReceipt({ hash: t }),
                        (a = ""
                          .concat(
                            null === (e = r.chain.blockExplorers) ||
                              void 0 === e
                              ? void 0
                              : e.default.url,
                            "tx/"
                          )
                          .concat(t)),
                        "ens registration" === n.toLowerCase() &&
                          (await new Promise((e) => setTimeout(e, 6e4))),
                        "bridge" === n.toLowerCase() &&
                        ("li.fi" === u.toLowerCase() ||
                          "enso" === u.toLowerCase())
                          ? (a = "https://explorer.li.fi/tx/".concat(t, "/"))
                          : "bridge" === n.toLowerCase() &&
                            "bungee" === u.toLowerCase() &&
                            (a = "https://socketscan.io/tx/".concat(t));
                    else throw Error("ACTION_REJECTED");
                  }
                  R(a), y("done");
                } else {
                  let e = await (null == i
                    ? void 0
                    : i.sendTransaction({ ...t.steps[0] }));
                  if (e) {
                    await r.waitForTransactionReceipt({ hash: e });
                    let s = ""
                      .concat(
                        null === (a = r.chain.blockExplorers) || void 0 === a
                          ? void 0
                          : a.default.url,
                        "tx/"
                      )
                      .concat(e);
                    "bridge" === n.toLowerCase() &&
                    ("li.fi" === u.toLowerCase() || "enso" === u.toLowerCase())
                      ? (s = "https://explorer.li.fi/tx/".concat(e, "/"))
                      : "bridge" === n.toLowerCase() &&
                        "bungee" === u.toLowerCase() &&
                        (s = "https://socketscan.io/tx/".concat(e)),
                      R(s),
                      y("done");
                  } else throw Error("ACTION_REJECTED");
                }
              } catch (e) {
                null == T || T.capture("transaction_failed", { error: e }),
                  console.error(e),
                  y("done"),
                  f(!1),
                  e instanceof Error && e.message.includes("ACTION_REJECTED")
                    ? b("You rejected the transaction.")
                    : e instanceof Error &&
                      e.message.includes("Exchange rate has changed!")
                    ? b(
                        "Swap rate has changed. Please retry using the button \uD83D\uDD01"
                      )
                    : e instanceof Error &&
                      e.message.includes("balance is too low")
                    ? b(
                        "You don't have enough balance to perform the transaction."
                      )
                    : e instanceof Error &&
                      e.message.includes("allowance rejected")
                    ? b(
                        "You need to approve the contract to perform the transaction."
                      )
                    : e instanceof Error &&
                      e.message.includes("chain_error") &&
                      b(
                        "Please switch to the correct chain to perform the transaction."
                      ),
                  y("failed");
              } finally {
                f(!1);
              }
            };
          return (0, t.jsxs)(i.w, {
            children: [
              n &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(D.u, {
                      className: "ml-2 flex items-center justify-between",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            l &&
                              (0, t.jsx)(M.J, {
                                src: l,
                                width: 32,
                                height: 32,
                                alt: "".concat(n, " logo"),
                              }),
                            (0, t.jsx)("h3", {
                              className: "text-lg font-bold",
                              children: (0, N.kC)(n),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "mr-2 flex items-center space-x-2",
                          children: [
                            "write" === h &&
                              (0, t.jsx)(I.z, {
                                size: "sm",
                                color: "default",
                                className: "flex space-x-1 cursor-pointer",
                                avatar: (0, t.jsx)(L.Z, {}),
                                onClick: () => {
                                  C([s]), j();
                                },
                                children: (0, t.jsx)("span", {
                                  className: "text-xs",
                                  children: "Transaction Info",
                                }),
                              }),
                            m &&
                              "write" === h &&
                              (0, t.jsx)("div", {
                                className: "mr-2",
                                children: (() => {
                                  switch (m) {
                                    case "done":
                                      return (0, t.jsx)(I.z, {
                                        size: "sm",
                                        color: "success",
                                        children: "Done",
                                      });
                                    case "failed":
                                      return (0, t.jsx)(I.z, {
                                        size: "sm",
                                        color: "danger",
                                        children: "Failed",
                                      });
                                    case "queued":
                                      return (0, t.jsx)(I.z, {
                                        size: "sm",
                                        color: "default",
                                        isDisabled: !0,
                                        children: "Queued",
                                      });
                                    default:
                                      return (0, t.jsx)(I.z, {
                                        size: "sm",
                                        color: "primary",
                                        children: "Pending",
                                      });
                                  }
                                })(),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(z.j, {}),
                  ],
                }),
              (0, t.jsxs)(r.G, {
                className: "flex flex-col",
                children: [
                  (0, t.jsx)(U.U, {
                    rehypePlugins: [F.Z],
                    className: "text-justify",
                    children: Array.isArray(s.data)
                      ? s.data[0].description
                      : s.data
                      ? s.data.description
                      : s.description,
                  }),
                  v &&
                    (0, t.jsxs)("p", {
                      className: "text-sm text-red-500",
                      children: ["An error has occurred: ", v],
                    }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-end space-x-2 mt-4",
                    children: [
                      n &&
                        "onramp" === n.toLowerCase() &&
                        (0, t.jsx)(c.A, {
                          size: "sm",
                          onClick: async () =>
                            window.open(s.data.value, "_blank"),
                          isLoading: w,
                          isDisabled: w || "done" === m,
                          children: "Open link",
                        }),
                      "write" === h &&
                        (B
                          ? (0, t.jsx)(c.A, {
                              size: "sm",
                              as: p.O,
                              isExternal: !0,
                              href: B,
                              children: "View on explorer",
                            })
                          : (0, t.jsx)(c.A, {
                              size: "sm",
                              onClick: async () => await O(),
                              isLoading: w,
                              isDisabled: w || "done" === m,
                              children: "Confirm",
                            })),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        P = (e) => {
          let { prompt: a, steps: s } = e,
            [i, r] = (0, o.useState)({}),
            n = (0, R.X)((e) => e.setTarget),
            l = (0, R.X)((e) => e.toggleFeedbackModal),
            c = async (e, t) => {
              if (i[t] !== e) {
                if (e) {
                  let o = await fetch("/api/feedbacks", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        prompt: a,
                        result: s[t],
                        feedback: e,
                      }),
                    }),
                    { result: n } = await o.json();
                  r({ ...i, [t]: n.feedback });
                } else
                  n({ prompt: a, result: s[t] }), l(), r({ ...i, [t]: !1 });
              }
            };
          return (0, t.jsxs)(T.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            className: "flex items-start space-x-4",
            children: [
              (0, t.jsx)(S.h, {
                color: "default",
                className: "h-12 w-12 shrink-0 bg-blue-500",
                showFallback: !0,
                fallback: (0, t.jsx)(A.Z, {}),
              }),
              (0, t.jsx)("div", {
                className: "flex flex-col space-y-2",
                children: s.map((e, a) =>
                  (0, t.jsxs)("div", {
                    className: "flex space-x-2",
                    children: [
                      (0, t.jsx)(O, { step: e, index: a }, "step-".concat(a)),
                      (0, t.jsxs)("div", {
                        className:
                          "my-auto flex h-full flex-col justify-around space-y-4",
                        children: [
                          (0, t.jsx)(W.Z, {
                            className: (0, N.cn)(
                              "cursor-pointer transition-colors hover:text-gray-400",
                              !0 === i[a] &&
                                "text-green-500 hover:text-green-700"
                            ),
                            onClick: () => c(!0, a),
                          }),
                          (0, t.jsx)(B.Z, {
                            className: (0, N.cn)(
                              "cursor-pointer transition-colors hover:text-gray-400",
                              !1 === i[a] && "text-red-500 hover:text-red-700"
                            ),
                            onClick: () => c(!1, a),
                          }),
                        ],
                      }),
                    ],
                  })
                ),
              }),
            ],
          });
        };
      var Z = s(44548),
        q = s(92570);
      function V() {
        var e;
        let [a, s] = (0, o.useState)(""),
          [C, S] = (0, o.useState)(!1),
          T = (0, E.FY)((e) => e.messages),
          A = (0, E.FY)((e) => e.addMessage),
          W = (0, E.FY)((e) => e.clearMessages),
          B = (0, E.FY)((e) => e.replaceLastMessage),
          { address: R, isConnected: I } = (0, g.mA)(),
          { chain: D } = (0, g.LN)();
        (0, E.zi)((e) => e.chain);
        let M = (0, g.xx)();
        (0, E.c7)((e) => e.account), (0, E.z)((e) => e.addTransaction);
        let [z, L] = (0, o.useState)(!1),
          U = () => b.ZP.startListening({ continuous: !0, language: "en-EN" }),
          F = () => b.ZP.stopListening(),
          {
            transcript: H,
            browserSupportsSpeechRecognition: _,
            resetTranscript: O,
          } = (0, b.x6)(),
          V = (0, x.U0)(),
          Y = async () => {
            await new Promise((e) => setTimeout(e, 250));
            let e = document.getElementById("scroll-area");
            e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
          };
        (0, o.useEffect)(() => {
          Y();
        }, []),
          (0, o.useEffect)(() => {
            H && s(H.replace(",", ""));
          }, [H]);
        let G = (e) => {
            e.preventDefault(), J(a, D);
          },
          J = async (e, a) => {
            if (e && (!e || !(e.length < 3))) {
              S(!0),
                s(""),
                A({ message: e, sender: "user", status: "sent" }),
                await Y();
              try {
                A({
                  message: "Brainiac AI is thinking...",
                  sender: "Brainiac AI",
                  status: "pending",
                }),
                  await Y();
                let s = await (0, k.xz)({ chainId: M });
                if (!s) {
                  B({
                    message:
                      "It seems like your wallet isn't connected properly. Do you mind checking it out?",
                    sender: "Brainiac AI",
                    status: "sent",
                    steps: [
                      {
                        description:
                          "It seems like your wallet isn't connected properly. Do you mind checking it out?",
                      },
                    ],
                  }),
                    S(!1);
                  return;
                }
                null == V || V.capture("transaction_prompt", { prompt: e });
                let t = await fetch("/api/builds", {
                    method: "POST",
                    body: JSON.stringify({
                      query: e,
                      chain: null == a ? void 0 : a.id,
                    }),
                    headers: { "Content-Type": "application/json" },
                  }),
                  { result: o, error: i } = await t.json();
                if ((console.log("result", o), console.log("error", i), i)) {
                  B({
                    message: i,
                    sender: "Brainiac AI",
                    status: "error",
                    steps: [{ description: i }],
                  }),
                    await Y(),
                    S(!1);
                  return;
                }
                if (0 === o.length) {
                  B({
                    message: "Incomplete prompt",
                    sender: "Brainiac AI",
                    status: "error",
                    steps: [
                      {
                        description:
                          "The action you asked for is not supported right now. Currently, we support the transfer of tokens and the main defi operations like swap, bridge, and crosschain swap for the main tokens on each network. Contact the Brainiac AI team if you want to add another operation or want more info about how Brainiac AI works!",
                      },
                    ],
                  }),
                    S(!1);
                  return;
                }
                B({
                  sender: "Brainiac AI",
                  status: "sent",
                  steps: o.map((e) => ({ ...e, executionStatus: "pending" })),
                  message: "",
                }),
                  await Y();
              } catch (e) {
                console.error(e),
                  B({
                    message: "Incomplete prompt",
                    sender: "Brainiac AI",
                    status: "error",
                    steps: [
                      {
                        description:
                          "The action you asked for is not supported right now. Currently, we support the transfer of tokens and the main defi operations like swap, bridge, and crosschain swap for the main tokens on each network. Contact the Brainiac AIknowsai team if you want to add another operation or want more info about how Brainiac AI works!",
                      },
                    ],
                  });
              } finally {
                S(!1);
              }
            }
          };
        return (0, t.jsxs)("div", {
          className: "flex h-full w-full flex-col",
          children: [
            (0, t.jsxs)("div", {
              id: "scroll-area",
              className: (0, N.cn)(
                "relative flex h-full flex-col space-y-4 px-2 py-4",
                I && "overflow-y-scroll pr-0 md:pr-4"
              ),
              children: [
                (0, t.jsx)("p", {
                  className: "text-center text-sm text-gray-400 opacity-60",
                  children: "Start sending transactions below!",
                }),
                0 === T.length &&
                  (0, t.jsxs)("div", {
                    className:
                      "flex h-full w-full flex-col items-center justify-center space-y-4 max-w-3xl mx-auto",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-center",
                        children:
                          'Don\'t know where to start? Try one of these or click the "Supported Actions" button.',
                      }),
                      (0, t.jsx)("div", {
                        className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                        children: [
                          { question: "Swap 1 USDC for WETH" },
                          { question: "Bridge 1 DAI to Polygon" },
                          { question: " Transfer 1 USDT to vitalik.eth" },
                        ].map((e, a) => {
                          let { question: s } = e;
                          return (0, t.jsx)(i.w, {
                            id: s,
                            className:
                              "cursor-pointer transition-transform hover:-translate-y-2",
                            children: (0, t.jsx)(r.G, {
                              className: "text-sm text-center",
                              onClick: () => J(s, D),
                              children: s,
                            }),
                          });
                        }),
                      }),
                    ],
                  }),
                T.map((e, a) => {
                  let {
                    message: s,
                    prompt: o,
                    sender: i,
                    status: r,
                    steps: n,
                  } = e;
                  return "user" === i
                    ? (0, t.jsx)(q.X, {
                        index: a,
                        message: s,
                        onRepeat: (e) => J(e, D),
                      })
                    : "brian" === i && "pending" === r
                    ? (0, t.jsx)(Z.F, {
                        index: a,
                        message: s,
                        status: "pending",
                      })
                    : n
                    ? (0, t.jsx)(P, { prompt: o, steps: n })
                    : (0, t.jsx)("div", {});
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "flex space-x-2",
              children: [
                (0, t.jsxs)(n.F, {
                  placement: "bottom-start",
                  className: "mb-2",
                  children: [
                    (0, t.jsx)(l.S, {
                      children: (0, t.jsx)(c.A, {
                        variant: "flat",
                        size: "sm",
                        style: { maxWidth: "160px" },
                        className: "w-full bg-emerald-500 md:w-auto",
                        children: "Supported Actions \uD83D\uDCDA",
                      }),
                    }),
                    (0, t.jsx)(d.a, {
                      className: "max-h-60 overflow-y-auto",
                      children:
                        null === (e = j[M]) || void 0 === e
                          ? void 0
                          : e.map((e, a) =>
                              (0, t.jsx)(
                                h.W,
                                {
                                  onClick: () => s(" ".concat(e.search)),
                                  children: e.display,
                                },
                                a
                              )
                            ),
                    }),
                  ],
                }),
                (0, t.jsx)(c.A, {
                  variant: "flat",
                  size: "sm",
                  as: p.O,
                  href: "https://docs.brianknows.org/prompt-guide",
                  isExternal: !0,
                  children: "Prompt Guide \uD83D\uDCDC",
                }),
              ],
            }),
            (0, t.jsxs)("form", {
              className:
                "mt-4 flex flex-col items-center space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0",
              onSubmit: (e) => G(e),
              children: [
                (0, t.jsx)(u.Y, {
                  id: "builds-input",
                  value: a.replace("\n", ""),
                  onValueChange: (e) => s(e),
                  variant: "bordered",
                  autoComplete: "new-password",
                  autoCapitalize: "false",
                  autoCorrect: "false",
                  isClearable: !0,
                  placeholder:
                    "Start typing here! Try something like `I want to swap 10 USDC for ETH`.",
                }),
                (0, t.jsxs)("div", {
                  className: "flex w-full items-center space-x-2 md:w-auto",
                  children: [
                    _ &&
                      (0, t.jsx)(m.e, {
                        content: (0, t.jsxs)("p", {
                          className: "max-w-xs text-xs",
                          children: [
                            (0, t.jsx)("span", {
                              className: "text-red-500",
                              children: "BETA",
                            }),
                            " Use your microphone to speak with Brainiac AI!",
                          ],
                        }),
                        children: (0, t.jsxs)(c.A, {
                          isIconOnly: !0,
                          variant: "flat",
                          onClick: async () => {
                            z ? (await F(), O(), L(!1)) : (L(!0), await U());
                          },
                          children: [
                            !z && (0, t.jsx)(y.Z, { size: 16 }),
                            z && (0, t.jsx)(w.Z, { size: 16 }),
                          ],
                        }),
                      }),
                    (0, t.jsx)(c.A, {
                      isLoading: C,
                      isDisabled: a.length < 3,
                      className: "w-full bg-emerald-500 md:w-auto",
                      type: "submit",
                      children: "Build",
                    }),
                    (0, t.jsxs)(n.F, {
                      placement: "top",
                      children: [
                        (0, t.jsx)(l.S, {
                          children: (0, t.jsx)(c.A, {
                            isIconOnly: !0,
                            variant: "flat",
                            children: (0, t.jsx)(f.Z, { size: 16 }),
                          }),
                        }),
                        (0, t.jsx)(d.a, {
                          disabledKeys: 0 === T.length ? ["delete"] : [],
                          children: (0, t.jsx)(
                            h.W,
                            {
                              className: "text-danger",
                              color: "danger",
                              onClick: () => W(),
                              startContent: (0, t.jsx)(v.Z, {
                                size: 16,
                                className: "text-danger group-hover:text-white",
                              }),
                              children: "Clear conversation",
                            },
                            "delete"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    65232: function (e, a, s) {
      s.d(a, {
        X: function () {
          return o;
        },
      });
      var t = s(74738);
      let o = (0, t.Ue)((e) => ({
        open: !1,
        toggleFeedbackModal: () => e((e) => ({ open: !e.open })),
        target: null,
        setTarget: (a) => e({ target: a }),
      }));
    },
    55773: function (e, a, s) {
      s.d(a, {
        g: function () {
          return o;
        },
      });
      var t = s(74738);
      let o = (0, t.Ue)((e) => ({
        open: !1,
        toggleRouteInfoModal: () => e((e) => ({ open: !e.open })),
        selectedSteps: [],
        setSelectedSteps: (a) => e({ selectedSteps: a }),
      }));
    },
  },
]);
