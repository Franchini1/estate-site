import React from 'react';
import Link from 'next/link';
import { RiMenu5Fill} from 'react-icons/ri'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-20 pt-8 bg-dark-green text-ash'>
    <div className={`${styles.test}`}>Artich</div>
    <div className='hidden sm:flex'>
      <ul className='flex flex-row justify-center items-center text-ash'>
        <li><Link href='/'><a className='px-6'>Home</a></Link></li>
        <li><Link href='/'><a className='px-6'>Project</a></Link></li>
        <li><Link href='/'><a className='px-6'>News</a></Link></li>
        <li><Link href='/'><a className='px-6'>Contact</a></Link></li>
      </ul>
    </div>
    <div className='cursor-pointer'><RiMenu5Fill size={20} /></div>
  </div>
  )
}

export default Navbar