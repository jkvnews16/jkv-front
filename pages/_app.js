import "../styles/globals.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/page.css";
import "../styles/content.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { useState } from "react";
import Router from "next/router";

// import AllContext from "../context/AllContext";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  Router.events.on("routeChangeStart", () => {
    // console.log("route is change");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    // console.log("route is complete");
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    // console.log("error");
    setLoading(false);
    setError(true);
  });
  if (loading) {
    return (
      <>
        {/* <AllContext> */}
        <Header />
        <Loading />
        <Footer />
        {/* </AllContext> */}
      </>
    );
  }
  if (error) {
    return (
      <>
        {/* <AllContext> */}
        <Header />
        <Error />
        <Footer />
        {/* </AllContext> */}
      </>
    );
  }
  return (
    <>
      {/* <AllContext> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* </AllContext> */}
    </>
  );
}

export default MyApp;
