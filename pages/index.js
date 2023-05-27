import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json'
import { FaGithub } from 'react-icons/fa';

function LinkCard({ url, title, image }){
  return (
    <a href={url} target="_blank" className='flex items-center m-2 pl-8 p-4 w-[60%] rounded-xl hover:scale-105 transition-all border border-gray-300' >
      <div className='flex flex-row items-center'>
        <img src={image} className='h-[60px] w-[60px] mr-3'/>
        <h2 className='font-bold text-lg'>{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <>
      <Head>
          <title>Links</title>
          <link rel='icon' href='/react-logo.png'/>
      </Head>
      <nav className='w-full h-[110px] flex items-center bg-[#050816]'>
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
      <div className='flex flex-col items-center mt-16 px-8 '>
        <Image 
          className='rounded-full'
          alt={data.name}
          src={data.avatar}
          width={120}
          height={120}
        />
        <h1 className='font-bold mt-6 mb-8 text-xl'>@{data.name}</h1>
        {/* <p className='m-6 text-xl'>{data.description}</p> */}
        {data.links.map( link => {
          return (
            <LinkCard key={link.url} {...link}  />
          )
        })}
        <div className='flex flex-row m-8'>
        {
          data.socials.map( social => {
            return (
              <a href={social.url} target="_blank" className='hover:scale-110'>
                <img src={social.image} className='h-[80px] w-[80px] mr-3' />
              </a>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

