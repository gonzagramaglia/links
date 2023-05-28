import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json'
import React, { useState } from "react"
import { FaGithub } from 'react-icons/fa';

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

