import React from "react";
import { projects, intro, achievements } from "../data/info";
// h-[calc(100vh-3.5rem)]
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { BiDownload } from "react-icons/bi";
import Resume from "../Su_Jessie_2023.pdf";
// import Base from "./Base";
import "../assets/css/GetImage.css";
import "../assets/css/Home.css";
import "../assets/css/Projects.css";
import "../assets/css/Achievement.css";
function GetImage(link) {
  if (link) {
    if (link.type === "Figma") {
      return (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../assets/images/figma.png`)}
            alt="figma"
            className="LinkImages up-and-down"
          ></img>
          {/* <div className="">{link.name}</div> */}
        </a>
      );
    } else if (link.type === "GitHub") {
      return (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../assets/images/github-mark.png`)}
            alt="github"
            className="LinkImages up-and-down"
          ></img>
          {/* <div>{link.name}</div> */}
        </a>
      );
    } else if (link.type === "TestFlight") {
      return (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../assets/images/testflight.png`)}
            alt="testflight"
            className="LinkImages up-and-down"
          ></img>
          {/* <div>{link.name}</div> */}
        </a>
      );
    } else if (link.type === "Youtube") {
      return (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../assets/images/youtube.png`)}
            alt="youtube"
            className="LinkImages up-and-down"
          ></img>
          {/* <div>{link.name}</div> */}
        </a>
      );
    } else {
      return (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../assets/images/chain.png`)}
            alt="link"
            className="LinkImages up-and-down"
          ></img>
        </a>
      );
    }
  }
}

function Achievement(achievement) {
  return (
    <div>
      <h2 className="text-primary">{achievement.name}</h2>
      <div className="Achievement">
        <img
          src={achievement.imgSrc}
          className="Achievement-Image"
          alt="cover"
        ></img>
        <p className="Achievement-Description">{achievement.description}</p>
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="Achievement-link"
        >
          <img
            src={require(`../assets/images/chain.png`)}
            alt="chain"
            className="LinkImages up-and-down"
          ></img>
        </a>
      </div>
    </div>
  );
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function Home() {
  window.addEventListener("scroll", reveal);
  reveal();
  console.log(projects[0].bubble.sort());
  for (let index = 0; index < projects.length; index++) {
    projects[index].bubble.sort();
  }
  return (
    <div className="background">
      {/* <section>
        <Base />
      </section> */}
      <section className="Introduction fullscreen">
        <div>
          <p className="appear1">Hi, i'm</p>
          <h1 className="gradient-text title appear2">Jessie Su</h1>
          <p className="appear3">a</p>
          <h2 className="gradient-text title appear2">Software Engineer</h2>
          <p className="appear3">Who</p>
          <p className="appear3">Loves making a positive impact</p>
          <div className="social-icons appear4">
            <a
              href="https://www.linkedin.com/in/jessiesu01/"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinkedin size={30} className="social-icon" />
            </a>
            <a
              href="mailto:JessieSu3@gmail.com?"
              target="blank"
              rel="noreferrer"
            >
              <TbMail size={30} className="social-icon" />
            </a>
            <a
              href={Resume}
              // target="blank" rel="noreferrer"
              download="Su_Jessie_2023"
            >
              <BiDownload size={30} className="social-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="half">
        <div className="text-accent paragraph reveal">{intro}</div>
      </section>

      <section>
        <h1 className="gradient-text title">Projects</h1>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project">
              <div className="project-time">{project.time}</div>
              <div className="">
                <h3 className="text-primary"> {project.title} </h3>
                <p className="">{project.description}</p>
                <div className="pills">
                  {project.bubble.map((bubble, index) => (
                    <p className="pill" key={index}>
                      {bubble}
                    </p>
                  ))}
                </div>
                <div className="project-links" title={project.name}>
                  {project.links.map((link, index) => GetImage(link))}
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </section>

      <section className="Achievements">
        <h1 className="gradient-text title">Achievements</h1>
        <div className="Achievement">
          {achievements.map((achievement, index) => Achievement(achievement))}
        </div>
      </section>
    </div>
  );
}

export default Home;
