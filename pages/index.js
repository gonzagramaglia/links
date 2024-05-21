import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json'
import React, { useState } from "react"

const Icons = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseOver = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className='flex flex-row'>
      {data.socials.map((social, index) => (
        <a href={social.url} target="_blank" className="hover:scale-[117%]" key={index}>
          <img
            className={`h-[50px] w-[50px] mr-2 ${isHovered === index ? 'hovered' : ''}`}
            src={isHovered === index ? social.hover : social.image}
            alt={social.alt}
            onMouseOver={ () => handleMouseOver(index) }
            onMouseLeave={handleMouseLeave}
          />
        </a>
      ))}
    </div>
  );
};

function LinkCard({ url, title, image }){
  return (
    <a href={url} target="_blank" className='flex items-center m-1 pl-2 p-1 w-[80%] xl:w-[50%] rounded-xl hover:shadow-lg hover:shadow-[#20bb9a] hover:scale-105 transition-all border border-gray-300' >
      <div className='flex flex-row items-center'>
        <img src={image} className='h-[50px] w-[50px] mr-2'/>
        <h2 className='font-semibold text-sm xl:text-lg'>{title}</h2>
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
      <nav className='w-full h-[80px] md:h-[110px] flex items-center bg-[#050816]'>
          <a 
              href="https://www.gonza.works/" 
              className='ml-[20px] md:ml-[65px]'
              target="_blank"

          >
              <img src='/logo.png' alt="logo" className='h-[20px] md:h-[25px]' /> 
          </a>
          <a 
              href="https://github.com/gonzagramaglia/links" 
              className='ml-auto mr-[20px] md:mr-[65px]'
              target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="22" height="22" fill="#a9a6c3">
              <path 
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              >
              </path>
            </svg>
          </a>
      </nav>
      <div className='flex flex-col items-center mt-16 px-8'>
        <Image 
          onClick={ () => {  } }
          className='rounded-full z-20'
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
        <Icons />
        </div>
      </div>
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
    </>
  )
}

