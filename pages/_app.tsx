import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from 'react-hot-toast';
import Script from 'next/dist/client/script';
const persistor = persistStore(store, {}, function () {
  persistor.persist();
});
function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <NextNProgress height={10} color="#8C88BB" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Script id="clarity" type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "fnmj0v9z8s");`}
        </Script>
        <Component {...pageProps} />
        <Toaster />
      </PersistGate>
    </Provider>
  </>)
}

export default MyApp
