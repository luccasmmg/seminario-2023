import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
      <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <body className="flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
