import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

const Services = () => {
  return (
    <section className="bg-white px-8 sm:px-32 md:px-44 pt-20 flex items-start justify-between space-x-20">
      <div className="flex flex-col min-w-fit">
        <Image 
            src="https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=359&q=80"
            alt="services"
            height={500}
            width={400}
        />
      </div>
      <div>
        <h1 className={`${styles.midText} text-5xl leading-[1.15] font-semibold text-gray pb-4`}>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          accusamus mollitia libero officiis fugiat voluptatibus? Quo
          consectetur consequatur, animi, unde voluptatum explicabo libero
          aperiam impedit asperiores dolore repellat alias deleniti molestias
          illum. Ipsam possimus quidem atque repudiandae! Ab, quod cumque.
        </p>
      </div>
    </section>
  );
};

export default Services;
