import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1.5rem' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
