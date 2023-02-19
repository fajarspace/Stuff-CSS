import "../../dist/css/stuff.min.css";
import "../static/css/stuff.docs.min.css";
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="stuff-cdn"
        src="https://unpkg.com/stuffcss@1.1.0/dist/js/stuff.min.js" />
      <Component {...pageProps} />
    </>
  )

}
