import React from "react";
import Card2 from "../../components/ProjectCard/Card2";
import dailyWage from "../../assets/images/dailyWage.jpg";
import p2 from "../../assets/images/p2.avif";
import p3 from "../../assets/images/p3.avif";

import lgThink from "../../assets/images/lgThink.jpg"; 
import ThinkCreate from "../../assets/images/ThinkCreate.png";
import github from "../../assets/images/github.jpeg";
import movieEx from '../../assets/images/movieEx.jpg';

import { Link } from "react-router-dom";

const ProjectSection = () => {
  const ProjectList = [
    {
      id: "1",
      icon: dailyWage,
      heading: "Revolutionising Living with Daily Wage Support Where It Counts",
      description:
        "During my time at university, I was challenged to enhance the collaborative features within WhatsApp. After considering multiple solutions, Meetup for WhatsApp was born. This project aims to seamlessly integrate event planning functionality through Meetup. Rooted in extensive user research, persona development, and iterative design processes, Meetup seeks to address common pain points such as difficulty organising group plans and finding crucial information within chat threads. By adhering to WhatsApp's design guidelines and maintaining cohesion with its interface, I endeavoured to redefine the user experience, empowering individuals to effortlessly coordinate gatherings while enhancing the platform's utility and appeal.",
    },
    {
      id: "2",
      icon: lgThink,
      heading:
        "Transform Simple Notes into Powerful Productivity — Built with Text CRUD Operations, Responsive UI, and Scalable Architecture.",
      description:
        "Built using the MERN stack (MongoDB, Express, React, Node.js), this note-taking app showcases seamless CRUD operations for creating, reading, updating, and deleting notes in real time. Designed with a responsive UI, it ensures smooth performance across devices. Its scalable architecture makes it easy to expand features — from user authentication to cloud storage — while maintaining speed and reliability.",
    },
    {
      id: "3",
      icon: movieEx,
      heading: "Your Gateway to the Movie Universe — Browse Popular, Top-Rated, and Favorite Films with a Sleek Interface.",
      description: `This project is a React.js-based Movie App designed to display information about popular, top-rated, and favorite movies.
                    Movie data is fetched dynamically using the Fetch API, and each movie card provides an interactive experience powered by React Router for smooth navigation between pages.`,
    },
    {
      id: "4",
      icon: github,
      heading: "Github",
      description: "Visit this page to get insigts of my new Projects..",
    },
  ];

  return (
    <div className=" bg-[rgb(237,237,237)] p-0.5 rounded-xl ">
      <div className="h-full py-3 px-5 bg-[rgb(247,247,247)] m-3 rounded-xl ">
        <h1 className="text-3xl font-bold">My Work</h1>
        <h2 className="text-xl text-gray-400">
          Here are some of my really high impact projects that helped grow
          products and move that needle on valubale metrics.
        </h2>

        <div className="mt-5">
          {ProjectList.map((tag, index) => {
            return (
              <Link to={`/project/${tag.id}`} key={tag.id}>
                <Card2
                  key={index}
                  icon={tag.icon}
                  heading={tag.heading}
                  description={tag.description}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
