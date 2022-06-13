import "../styles/globals.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/page.css";
import "../styles/content.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

// import AllContext from "../context/AllContext";

function MyApp({ Component, pageProps }) {
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
