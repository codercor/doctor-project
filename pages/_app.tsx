import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store, {}, function () {
  persistor.persist();
});
function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <NextNProgress height={10} color="#8C88BB" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </>)
}

export default MyApp
