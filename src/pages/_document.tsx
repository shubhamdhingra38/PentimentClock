import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/mo_textura-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="pentiment-clock" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Pentiment Clock" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ecd4b6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ecd4b6" />


        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://pentiment-clock.vercel.app" />
        <meta name="twitter:title" content="Pentiment Clock" />
        <meta name="twitter:description" content="Pentiment Clock" />
        <meta name="twitter:creator" content="@snowglobe25" />
        <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pentiment Clock" />
        <meta property="og:description" content="Pentiment Clock" />
        <meta property="og:site_name" content="Pentiment Canonical Clock" />
        <meta property="og:url" content="https://pentiment-clock.vercel.app" />
        <meta property="og:image" content="https://pentiment-clock.vercel.app/icons/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
