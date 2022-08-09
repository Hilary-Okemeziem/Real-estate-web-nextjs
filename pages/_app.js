import Navbar from '../components/Navbar'
import '../styles/globals.css'
import nProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false})

  Router.events.on('routeChangeStart', () => {
    nProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    nProgress.done()
  })

  Router.events.on('routeChangeError', () =>  {
    nProgress.done()
  });
  return (
    <>
      <Head>
        <title>Lhary Homes | Real Estate Agency</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </> 
  );
  
}

export default MyApp
