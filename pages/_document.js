import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="en">
        <Head >
        <link rel="shortcut icon" href="/images/owlCircle.png" />
        <meta name="description" content="your one-stop solution for web development and business consulting"/>
            <title>Website development and Business Consulting in Montreal</title>
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