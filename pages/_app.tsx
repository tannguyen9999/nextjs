import '../styles/globals.css';
import Head from "next/head";
import '../assets/css/heo.css'


function MyApp({ Component, pageProps }) {
  return( <div className= "app-vip">
     <Head>
     <title>Hello anh em</title>

        <link rel="stylesheet" href="/css/global.css" />
      </Head>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
