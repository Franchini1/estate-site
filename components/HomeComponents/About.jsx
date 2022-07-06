import React from 'react';
import Image from 'next/image'
import styles from '../../styles/Home.module.css';

const About = () => {
    return (
        <section className='flex flex-col bg-white pb-20'>
            <div className='flex flex-rol justify-between items-center px-32 py-20 sm:px-44'>
                <div className={`${styles.midText} text-5xl leading-[1.15] font-semibold`}>
                    Modernism & <br />Modernity
                </div>
            <div>
                <h1 className={`${styles.midText} font-[200] tracking-[0.15em]`}>
                    Arsitect is a hybrid creative agency and architectural studio that<br />
                    infuses innovative branding and strategic marketing concepts<br />
                    early on in the architectural process. Our team of diverse and<br />
                    experienced problem solvers utilize our unique approach, which<br />
                    allows us to pinpoint value-add opportunities and ensure that the<br />
                    design of the building or space is aligned to target demographic<br />
                    desires.
                </h1>
            </div>
            </div>
            <div className='relative h-[500px] min-w-[300px] mx-40'>
                <Image 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    layout="fill"
                    objectFit='cover'
                />
            </div>
      </section>
  )
}

export default About