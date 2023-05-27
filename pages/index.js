import Head from 'next/head'
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
          <title>Links</title>
          <link rel='icon' href='/react-logo.png'/>
      </Head>
      <nav className='w-full h-[110px] flex items-center fixed top-0 z-20 bg-[#050816]'>
          <a 
              href="https://www.gonza.uno/" 
              className='pl-[65px]'
              target="_blank"

          >
              <img src='/logo.png' alt="logo" className='h-[25px]' /> 
          </a>
          <a 
              href="https://github.com/gonzagramaglia/links" 
              className='ml-auto mr-[65px]'
              target="_blank"
          >
              <FaGithub size={23} style={{ color: '#a9a6c3' }} />
          </a>
      </nav>
    </>
  )
}
