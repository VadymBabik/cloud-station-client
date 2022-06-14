import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet={'utf-8'} />
          <title>CStation</title>
          <meta name="description" content="cloud station" />
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <body className={'h-full'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
