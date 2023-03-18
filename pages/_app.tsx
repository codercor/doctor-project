import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from 'react-hot-toast';
import Script from 'next/dist/client/script';
import CookieConsent from "react-cookie-consent";
import { Router } from 'next/dist/client/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';
const persistor = persistStore(store, {}, function () {
  persistor.persist();
});
function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <GoogleAnalytics trackPageViews gaMeasurementId='D0HTKY3R5J' strategy="lazyOnload" />
    </Head>
    <NextNProgress height={10} color="#8C88BB" />
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=D0HTKY3R5J"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'D0HTKY3R5J');
        `}
    </Script>
    <Script id="google-analytics-2" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'D0HTKY3R5J', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <div className="absolute top-0 left-0 text-[24px] z-[999] bg-blue w-[50px]  h-[50px] backdrop-brightness-50 backdrop-blur-lg text-[red]">
          <h1 className="block  sm:hidden"> XS </h1>
          <h1 className="hidden sm:block md:hidden"> SM </h1>
          <h1 className="md:block hidden lg:hidden"> MD </h1>
          <h1 className="lg:block hidden xl:hidden"> LG </h1>
          <h1 className="xl:block hidden 2xl:hidden"> XL </h1>
          <h1 className="2xl:block hidden xl:hidden"> 2XL </h1>
        </div> */}
        <Component {...pageProps} />
        <Toaster toastOptions={{
          duration: 4500
        }} />

      </PersistGate>
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Anladım Kabul ediyorum"
        declineButtonText="Kabul Etmiyorum"
        cookieName="YourCoockieName"
        style={{ background: '#4E929D' }}
        buttonStyle={{
          backgroundColor: '#4e9d89',
          fontSize: '15px',
          color: 'white'
        }}
        declineButtonStyle={{
          backgroundColor: '#9d4e61',
          margin: '10px 10px 10px 0',
        }}
        expires={450}
      >Bu site çerezleri kullanıyor.
        <span className='underline cursor-pointer' onClick={() => { window.open("/sozlesmeler/cerez-politikasi/", "_blank") }}>Çerez Politikamızı okumak için tıklayın. </span>
      </CookieConsent>
    </Provider>
  </>)
}

export default MyApp
