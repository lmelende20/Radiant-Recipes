import '../styles/globals.css'
import Navbar from '../components/Navbar'
import ToTopButton from '../components/ToTopButton'
import Head from "next/head"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  function pageName(pathname){
    if (pathname === '/'){
      return 'Home'
    }
    else{
      return ''
    }
  }
  return (
    <div className='bg-bgGreen  min-h-screen lg:px-[80px] md:px-[55px] px-[30px]'>
      <Head>
        <title>{pageName(router.pathname)} | Radiant Recipes</title>
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="Radiant Recipes" />
        <meta name="description" content="Explore exciting recipes from around the world!"/>
        <meta property="og:image" content="/favicon.png" />
      </Head>
      <Navbar/>
      <div className='w-100% flex flex-col items-end pb-[30px] invisible md:visible'>
        <ToTopButton/>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
