import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project_person from "../assets/images/hero1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Frise chronologique : Histoire de l'humanité",
      github_link: "https://github.com/memedjjebri/Projet1-frise",
      live_link: "https://moonlow31.github.io/Projet-Chrono/",
    },
    {
      img: project2,
      name: "Globe Guide",
      github_link: "https://github.com/memedjjebri/memedjjebri-P2-Team1",
      live_link: "https://globe-guide.netlify.app/",
    },
    {
      img: project3,
      name: "Portfolio",
      github_link: "https://github.com/memedjjebri/jebri_portfolio",
      live_link: "https://memedjjebriportfolio.netlify.app/",
    },
    {
      img: project4,
      name: "Age Calculator",
      github_link: "https://github.com/memedjjebri/Age_momo_app",
      live_link: "https://age-calculator-jebri-app.netlify.app/",
    },
    {
      img: project5,
      name: "Code Nature",
      github_link: "https://github.com/memedjjebri/protojam-code-nature",
      live_link: "https://code-nature.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
          <img
            src={project_person}
            alt=""
            className="w-full object-cover bg-cyan-600 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
