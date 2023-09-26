import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="title" content="中文圣经学习" />
        <meta name="author" content="Nicholas" />
        <meta name="keywords" content="上帝 圣经 中文 族谱 家族 耶和华" />
        <meta name="description" content="" />
        <meta itemProp="name" content="中文圣经学习 by Nicholas" />
        <meta itemProp="description" content="Start developing neumorphic web applications and pages using Neumorphism UI. It features over 100 individual components and 5 example pages." />
        <meta itemProp="image" content="https://themesberg.s3.us-east-2.amazonaws.com/public/products/neumorphism-ui/neumorphism-thumbnail.jpg" />
        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@themesberg" />
        <meta name="twitter:title" content="Neumorphism UI by nicholas" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:creator" content="@gangbencong" />
        <meta name="twitter:image" content="" />
        <meta property="fb:app_id" content="214738555737136" />
        <meta property="og:title" content="Neumorphism UI by nicholas" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://demo.nicholas.com/neumorphism-ui/" />
        <meta property="og:image" content=""/>
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="nicholas" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/dark.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/dark.svg" />
        <link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link type="text/css" href="/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" />
        <link type="text/css" href="/css/neumorphism.css" rel="stylesheet" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0XNZ1L5WZ8" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="lazyOnload">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XNZ1L5WZ8');`
          }
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
