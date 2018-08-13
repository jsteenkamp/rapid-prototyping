import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

// CSS reset - set page width: max-width:839px; margin:auto;
injectGlobal`
  body {font-family:"avenir next", avenir, sans-serif;}
  h1, h2, h3, h4, h5, h6 {margin:0; padding:0; font-family:"avenir next", avenir, sans-serif;}
  * {box-sizing:border-box;}
  a, a:link, a:active {color: #0151ba; text-decoration:none; border-bottom: 3px solid rgba(126, 191, 249, 0.6);}
  a:visited, a:hover {border-color: rgba(126, 191, 249, 1);}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Rapid Prototyping with MDX</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
