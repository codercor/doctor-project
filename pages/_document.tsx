import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <Script async src="[https://www.googletagmanager.com/gtag/js?id=G-2FJRSCR3PY](https://www.googletagmanager.com/gtag/js?id=G-2FJRSCR3PY)"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-2FJRSCR3PY');`}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}