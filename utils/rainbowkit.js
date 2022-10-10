// import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";

const availableChains =
  process.env.NODE_ENV === "production"
    ? [chain.mainnet]
    : [
        chain.polygon,
        chain.polygonMumbai,
        chain.localhost,
        chain.goerli,
        chain.mainnet,
      ];

const { chains, provider } = configureChains(availableChains, [
  // alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "Underland",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains, wagmiClient };
