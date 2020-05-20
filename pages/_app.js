import React from "react";
import App from "next/app";
import Head from "next/head";
import "./app.css";

export default class NoteApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
