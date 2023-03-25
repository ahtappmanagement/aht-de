import "@/styles/globals.css";
import Layouts from "../../components/layouts";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (

    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>AHTFoods</title>
      </Head>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
    </>
  );
}
