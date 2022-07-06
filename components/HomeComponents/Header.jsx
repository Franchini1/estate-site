import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Header = () => {
  return (
    <section className='bg-dark-green text-white pt-8 h-[500px] sm:h-[405px] mb-[40rem]'>
      <div className={`${styles.heroText} flex flex-col py-8 text-7xl 
      font-semibold leading-[1.15]`}>
        <h1 className='pl-[5.5rem]'>
          <span className='text-mid-green'>ARCITECT</span> AWARD-WINNING
        </h1>
        <h1 className='pl-[17.5rem]'>
          DESIGNERS OF HOME AND
        </h1>
        <h1 className='pl-[9.5rem]'>
          GARDENS OF <span className='text-mid-green'>DISTINTION.</span>
        </h1>
      </div>
      <video autoPlay loop muted className=" inset-0 object-cover h-[500px] w-screen xl:h-auto fixed -z-10">
        <source
          src="homepage/bgvideo.mp4"
          type="video/mp4"
         />
      </video>
    </section>
  )
}

export default Header