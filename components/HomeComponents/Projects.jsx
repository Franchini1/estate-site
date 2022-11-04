import Image from "next/image";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "../../styles/Home.module.css";

const projectsData = [
  {
    name: "The Elek",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Los Angeles",
    size: "1500 m2",
    year: "2020",
  },
  {
    name: "The Elek",
    image:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    location: "Los Angeles",
    size: "1500 m2",
    year: "2020",
  },
  {
    name: "The Elek",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Los Angeles",
    size: "1500 m2",
    year: "2020",
  },
  {
    name: "The Elek",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Los Angeles",
    size: "1500 m2",
    year: "2020",
  },
];

const Projects = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 550
  }
  const slideRight = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 550
  }
  return (
    <section className="flex flex-col bg-ash py-20 px-32">
      <div className="flex flex-row justify-between items-center">
        <h1
          className={`${styles.midText} text-5xl leading-[1.15] font-semibold text-gray`}
        >
          Selected Project
        </h1>
        <div className="flex space-x-3">
          <BsArrowLeft onClick={slideLeft} size={20} className="cursor-pointer opacity-50 hover:opacity-100" />
          <BsArrowRight onClick={slideRight} size={20} className="cursor-pointer opacity-50 hover:opacity-100" />
        </div>
      </div>
      <div className="flex">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {projectsData.map((project) => (
            <div className="min-w-fit m-3 inline-block cursor-pointer">
              <Image
                width={520}
                height={400}
                src={project.image}
                alt={project.name}
                className="hover:scale-105 ease-in-out duration-300"
              />
              <div className="flex justify-between items-center">
                <h1>{project.name}</h1>
                <div>
                  <h1>{project.location}</h1>
                  <h1>{project.size}</h1>
                  <h1>{project.year}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
