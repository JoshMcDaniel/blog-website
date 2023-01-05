import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { AppProps } from 'next/dist/shared/lib/router/router';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default App;
