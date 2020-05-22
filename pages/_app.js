import React from "react";
import App from "next/app";
import Head from "next/head";
import "./app.css";
import {DarkModeContext} from '../components/DarkModeContext'

export default class NoteApp extends App {
  state = {
    darkMode: false
  }
  componentDidMount() {
    const mm = window.matchMedia('(prefers-color-scheme: dark)')
    this.setState({
      darkMode: mm.matches
    })

    mm.addListener((e) => {
      this.setState({ darkMode: e.matches })
    })
  }
  render() {
    const {darkMode} = this.state
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen dark:bg-gray-900 dark:text-gray-100">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <DarkModeContext.Provider value={darkMode}>
          <Component {...pageProps} />
        </DarkModeContext.Provider>
      </div>
    );
  }
}
