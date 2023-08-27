import React from "react";
import { projects, intro, achievements } from "./info";
// h-[calc(100vh-3.5rem)]

function GetImage(link) {
  if (link) {
    if (link.type === "Figma") {
      return (
        <a
          className="pr-2"
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pr-2 p-1 flex bg-slate-200 rounded-lg">
            <img
              src={require(`../images/figma.png`)}
              alt="figma"
              className="w-5 mr-1"
            ></img>
            <div>{link.name}</div>
          </div>
        </a>
      );
    } else if (link.type === "GitHub") {
      return (
        <a
          className="pr-2"
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pr-2 p-1 flex bg-slate-200 rounded-lg">
            <img
              src={require(`../images/github-mark.png`)}
              alt="github"
              className="w-5 mr-1"
            ></img>
            <div>{link.name}</div>
          </div>
        </a>
      );
    } else if (link.type === "Youtube") {
      return (
        <a
          className="pr-2"
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pr-2 p-1 flex bg-slate-200 rounded-lg">
            <img
              src={require(`../images/youtube.png`)}
              alt="youtube"
              className="w-5 mr-1"
            ></img>
            <div>{link.name}</div>
          </div>
        </a>
      );
    }
  }
}

function Achievement(achievement) {
  return (
    <div className="flex h-36">
      <img src={achievement.imgSrc} className="h-full pr-5" alt="cover"></img>
      <div className="block">
        <div className="font-semibold text-[14px]">{achievement.name}</div>
        <div>{achievement.description}</div>
        <div className="p-1 bg-slate-200 rounded-lg flex w-fit">
          <a
            className="pr-2 flex"
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require(`../images/chain.png`)}
              alt="chain"
              className="w-5 mr-1"
            ></img>
            <div>Link</div>
          </a>
        </div>
      </div>
    </div>
  );
}

function Home1() {
  console.log(projects[0].bubble.sort());
  for (let index = 0; index < projects.length; index++) {
    projects[index].bubble.sort();
  }
  return (
    <div className="h-screen md:h-[calc(100vh-3.5rem)] md:overflow-hidden">
      <div className=" bg-[#c7d8e0] md:flex md:h-[calc(100vh-3.5rem)]">
        <div className="md:w-2/5 md:flex-none pt-5">
          <div>Hi, i'm</div>
          <h1 className="font-serif text-5xl">Jessie Su</h1>
          <div className="text-[12px]">a</div>
          <h2>Software Engineer</h2>
          <div className="text-[12px]">Who</div>
          <div className="px-5">
            Loves designing and building full-stack applications
          </div>
        </div>
        <div className="text-left px-8 pt-5 pb-5 md:w-3/5 md:flex-0 md:flex md:overflow-hidden">
          <div className="md:flex-1 md:overflow-y-scroll pr-2">
            {/* Intro */}
            <div className="text-sm lg:w-9/12">{intro}</div>
            {/* Projects */}
            <div className="left-0 flex pt-5">Projects</div>
            <div className="text-sm">
              {projects.map((project, index) => (
                <div className="" key={index}>
                  <div className="flex pt-2">
                    <div className="pr-5 w-3/12 lg:w-2/12">{project.time}</div>
                    <div className="w-9/12 pl-2 lg:w-7/12">
                      <div className="font-semibold text-[14px]">
                        {project.title}
                      </div>
                      <div className="pt-1">{project.description}</div>
                      <div className="pt-1 flex-wrap flex">
                        {project.bubble.map((bubble, index) => (
                          <div className="pr-2 flex py-1" key={index}>
                            <div className="p-1 px-2 bg-[#C7B8D6] rounded-lg">
                              {bubble}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex py-1">
                        {project.links.map((link, index) => GetImage(link))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Achievements */}
            <div>Achievements</div>
            <div className="text-sm">
              {achievements.map((achievement, index) =>
                Achievement(achievement)
              )}
            </div>
            {/* End of scroll */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
