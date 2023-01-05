import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Navbar from '../components/Navbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <span className="theme-bejamas" />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
