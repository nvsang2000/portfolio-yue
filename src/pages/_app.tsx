import "~/styles/globals.css";
import '~/i18n';
import { AppProps } from "next/app";
import { Footer, Navbar } from "~/Components";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://soumyaswaroopsootar.vercel.app/SSS-LOGO.png" type="image/x-icon" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
export default  appWithTranslation(App)
