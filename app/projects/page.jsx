"use client";
import React from "react";

const projects = [
  {
    title: "Iron Edge Gym",
    description:
      "Welcome to Iron Edge Gym – where strength meets community! Our gym is dedicated to providing top-tier facilities and a supportive environment for fitness enthusiasts of all levels. Whether you’re a seasoned athlete or just beginning your fitness journey, Iron Edge Gym offers everything you need to reach your goals.",
    tech: ["JavaScript, React.Js, Vite js, Bootstrap , API"],
    github: "https://github.com/atinder11/Iron_Edge_Gym",
    live: "https://iron-edge-gym.vercel.app/",
  },
  {
    title: "Placement Portal",
    description:
      "The Placement Management System is a web application for the training and placement department of our college. This system can be accessed throughout the organization with proper login credentials. Students will be able to upload their personal and educational information which will be managed efficiently by the system",
    tech: ["JavaScript, React.Js,PHP, MySql,Bootsrap"],
    github: "https://github.com/atinder11/Placement-Portal",
    live: "https://code-placement.000webhostapp.com/index.php",
  },
  {
    title: "Consultiva",
    description: "The Consultiva project responds to the pressing need for innovative healthcare solutions in an era marked by increased reliance on digital technology. Aimed at addressing limitations in healthcare accessibility and enhancing the efficiency of medical consultations.",
    tech: ["Javascript","React","Node js","Python","Bootstrap"],
    github: "https://github.com/Dhruv-Singhal-15/Minor_sem5_grp42",
    live: "#",
  },
  {
    title: "Skill Sprint",
    description: "This project presents SkillSprint, an innovative platform designed to empower students and professionals alike to acquire new skills efficiently and effectively. SkillSprint is a comprehensive skill-learning ecosystem that leverages cutting-edge technologies to deliver a personalized and engaging learning experience.",
    tech: [ "React.Js", "Tailwind css", "Python" , "Flask" , "SQLite"],
    github: "https://github.com/Dhruv-Singhal-15/SkillSprint",
    live: "#",
  },
  
  {
    title: "Youtube Clone",
    description: "This project is a YouTube clone implemented using HTML, CSS, and JavaScript. The goal of this project is to recreate the basic functionality and design of the popular video-sharing platform YouTube. This clone will allow users to view videos, search for videos, play videos, and interact with the user interface.",
    tech: ["HTML", "Css","JavaScript","Bootstrap"],
    github: "https://github.com/atinder11/Youtube-Clone",
    live: "#",
  },
  {
    title: "Timetable Bot",
    description:
      "F3 Timetable Bot is a Telegram Bot built to help students stay tuned with their college's timetable. Its can be used to stay updated with college timetable and never miss an important lecture or class.",
    tech: ["Telegram API"],
    github: "https://github.com/atinder11/F3-Timetable-Bot",
    live: "https://t.me/F3Timetable_bot",
  },
];

const Projects = () => {
  return (
    <>
      <section className="min-h-screen pt-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 dark:bg-background">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg dark:bg-background"
              >
                <h3 className="text-center text-lg font-semibold mb-4  dark:text-green">
                  {project.title}
                </h3>
                <p className=" mb-4">{project.description}</p>
                <p className="text-gray-700 mb-2 dark:text-white">
                  Tech: {project.tech.join(", ")}
                </p>
                <div className="text-gray-500 flex gap-4  dark:text-white">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-all  hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-all"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
