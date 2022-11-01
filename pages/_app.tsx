import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <NextNProgress height={10} color="#8C88BB"  />
    <Component {...pageProps} />
  </>)
}

export default MyApp
