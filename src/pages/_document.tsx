import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="google-site-verification" content="hBKCTma5IGl6el9qy4ySelxwN4jw0nhjNWNXAS-c7iI" />
      </Head>
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
