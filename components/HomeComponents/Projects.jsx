import React from 'react';
import styles from '../../styles/Home.module.css';

const Projects = () => {
  return (
      <section className='flex flex-col bg-ash py-20 px-32 sm:px-44'>
          <div className='flex flex-row justify-between items-center'>
              <h1 className={`${styles.midText} text-5xl leading-[1.15] font-semibold text-gray`}>Selected Project</h1>
              <div>arrow</div>
          </div>
          <div>Bottom</div>
    </section>
  )
}

export default Projects