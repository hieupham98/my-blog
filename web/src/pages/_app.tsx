import '../styles/globals.scss'
import theme from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <title>hehe Toolkit</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="minium-scale-1, initial-scale=1, width=device-width" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </Head>

  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
