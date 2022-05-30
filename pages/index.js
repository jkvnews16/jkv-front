import Head from "next/head";

import Header from "../components/header/Header";

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>JKV News</title>
      </Head>
      <Header />
    </div>
  );
}
