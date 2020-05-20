import React from "react";
import App from "next/app";
import "./app.css";

export default class NoteApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Component {...pageProps} />
      </div>
    );
  }
}
