import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head><link rel="manifest" href="manifest.webmanifest.json"></link> </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}