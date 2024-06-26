import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faJsSquare,
  faReact,
  faGitAlt,
  faGithub,
  faSass,
  faFigma,

} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = [
    {
      logo: faHtml5,
      level: "HTML",
      count: 100,
    },
    {
      logo: faCss3Alt,
      level: "CSS",
      count: 100,
    },
    {
      logo: faNodeJs,
      level: "NODE JS",
      count: 100,
    },
    {
      logo: faJsSquare,
      level: "JAVASCRIPT",
      count: 100,
    },
    {
      logo: faSass,
      level: "SCSS",
      count: 100,
    },
    {
      logo: faReact,
      level: "REACT",
      count: 100,
    },
    {
      logo: faDatabase,
      level: "MYSQL",
      count: 100,
    },
    {
      logo: faGithub,
      level: "GITHUB",
      count: 100,
    },
    {
      logo: faGitAlt,
      level: "GIT",
      count: 100,
    },

    {
      logo: faFigma,
      level: "FIGMA",
      count: 100,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <FontAwesomeIcon icon={skill.logo} />
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
