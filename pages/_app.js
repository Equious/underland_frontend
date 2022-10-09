import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>UnderlandNFT</title>
        <meta name="description" content="UnderlandNFT" />
        <link rel="icon" href="/eq-favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
