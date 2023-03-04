import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GoogleAnalytics } from 'nextjs-google-analytics/dist/components'

export default function Document() {
    return (
        <Html>
            <Head>
                <Script id="g-tag-1" async src="https://www.googletagmanager.com/gtag/js?id=G-D0HTKY3R5J"></Script>
                <Script id="g-tag-2" strategy='lazyOnload'>
                    {` <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-D0HTKY3R5J');
                    </script>`}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}