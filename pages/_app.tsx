import React from "react";
import App from "next/app";
import Head from "next/head";
import "./app.css";
import { ThemeContext } from "@thjxs/gc-markdown";
import { Theme } from '@thjxs/gc-markdown/lib/interface';

export default class NoteApp extends App {
  state: {darkMode: Theme} = {
    darkMode: 'light',
  };
  componentDidMount() {
    const mm = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({
      darkMode: mm.matches ? 'dark' : 'light',
    });

    mm.addEventListener('change', (e) => {
      this.setState({
        darkMode: e.matches ? 'dark' : 'light'
      })
    })
  }
  render() {
    const { darkMode } = this.state;
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen dark:bg-gray-900 dark:text-gray-100">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeContext.Provider value={darkMode}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </div>
    );
  }
}
