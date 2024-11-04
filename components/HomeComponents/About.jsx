import React from 'react';
import Image from 'next/image'
import styles from '../../styles/Home.module.css';

const About = () => {
    return (
        <section className='flex flex-col bg-white pb-20 px-8 sm:px-32 md:px-44'>
            <div className='flex flex-col md:flex-row sm:justify-between sm:items-center py-20 gap-10 sm:gap-40'>
                <div className={`${styles.midText} text-3xl sm:text-5xl leading-[1.15] font-semibold text-left`}>
                    Modernism & <br />Modernity
                </div>
            <div>
                <h1 className={`${styles.midText} font-[200] tracking-[0.15em] text-left`}>
                    Arsitect is a hybrid creative agency and architectural studio that
                    infuses innovative branding and strategic marketing concepts
                    early on in the architectural process. Our team of diverse and
                    experienced problem solvers utilize our unique approach, which
                    allows us to pinpoint value-add opportunities and ensure that the
                    design of the building or space is aligned to target demographic
                    desires.
                </h1>
            </div>
            </div>
            <div className=''>
                <Image 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    width={1000}
                    height={500}
                    alt="about image"
                />
            </div>
      </section>
  )
}

export default About
