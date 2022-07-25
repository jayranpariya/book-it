import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const layout = ({ children, title = "Book Best Hotels for your Holiday" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
