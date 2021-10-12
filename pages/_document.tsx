import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          
          <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/favicon-57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicon/favicon-57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/favicon-72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/favicon-114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/favicon-120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/favicon-144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/favicon-152.png" />

          <meta name="application-name" content="McMineserver" />
          <meta name="msapplication-TileImage" content="/favicon/favicon-144.png" />
          <meta name="msapplication-TileColor" content="#121417" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument