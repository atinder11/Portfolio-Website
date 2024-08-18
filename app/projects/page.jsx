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
    title: "Project 3",
    description: "Description for project 3",
    tech: ["Vue.js", "Bootstrap"],
    github: "https://github.com/user/project3",
    live: "https://project3.example.com",
  },
  {
    title: "Project 4",
    description: "Description for project 4",
    tech: ["Angular", "Sass"],
    github: "https://github.com/user/project4",
    live: "https://project4.example.com",
  },
  {
    title: "Timetable Bot",
    description:
      "F3 Timetable Bot is a Telegram Bot built to help students stay tuned with their college's timetable. Its can be used to stay updated with college timetable and never miss an important lecture or class.",
    tech: ["Telegram API"],
    github: "https://github.com/atinder11/F3-Timetable-Bot",
    live: "https://t.me/F3Timetable_bot",
  },
  {
    title: "Project 6",
    description: "Description for project 6",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com/user/project6",
    live: "https://project6.example.com",
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
