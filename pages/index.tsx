import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Link from 'next/link'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className='pb-32'>
      <Head>
        <title>Everthing</title>
        <link rel="icon" href="/everticon_F.png" />
      </Head>

     
      <Nav />
      <div className='pb-20'>
      <div className="scale-75 w-auto scale-y-125 h-96">

      {/* <div><Image src={"/AZ900.jpeg"} layout="fill"></Image>
      </div>
        <div>
          <Link href={"new"}>
            <div className=""><h1 className='text-white bg-cyan-800 hover:bg-cyan-500 rounded-none absolute p-1 hover:text-slate-200'>Click Here!</h1>

            </div>
          </Link>
        </div> */}
        <div className="relative w-auto h-96">

        <Image src={"/AZ900.jpeg"} layout="fill" alt="stew"></Image>

        </div>

        <Link href={"new"}>
            <div className="flex justify-center p-1"><h1 className='text-white text-3xl bg-cyan-800 hover:bg-cyan-500 rounded absolute p-1  hover:text-slate-200'>Click Here!</h1>

            </div>
          </Link>


      </div>
      </div>
      
      {/* Results */}

      
    </div>
  )
}

export default Home
