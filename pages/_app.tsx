import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return ( <div className='m-5'> <Header /> <SessionProvider session={pageProps.session}><Component  {...pageProps} /></SessionProvider>
  <Footer /> </div>)
}




export default MyApp
