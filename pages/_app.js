import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "../utils/rainbowkit";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div>
          <Head>
            <title>UnderlandNFT</title>
            <meta name="description" content="UnderlandNFT" />
            <link rel="icon" href="/eq-favicon.ico" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
