import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="vie">
      <Head >
        <meta name="google-site-verification" content="hBKCTma5IGl6el9qy4ySelxwN4jw0nhjNWNXAS-c7iI" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8D7Q7VT80V"></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8D7Q7VT80V');
            `}
        </script>
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
