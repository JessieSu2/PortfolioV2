import React from "react";
import { projects } from "./info";
// h-[calc(100vh-3.5rem)]

function Home1() {
  console.log(projects);
  return (
    <div className="h-screen md:h-[calc(100vh-3.5rem)] md:overflow-hidden">
      {/* grid sm:grid-cols-1 md:grid-cols-12 pt-5 md:pt-10 */}
      <div className=" bg-[#c7d8e0] md:flex md:h-[calc(100vh-3.5rem)]">
        {/* md:mx-auto md:col-span-5 */}
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
        {/* md:col-span-6 md:col-start-6 */}
        <div className="text-left px-8 pt-5 pb-5 md:w-3/5 md:flex-1 md:flex md:overflow-hidden">
          <div className="md:flex-1 md:overflow-y-scroll">
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              fringilla nisl ante, posuere mattis metus dapibus ac. Integer
              malesuada dapibus maximus. Etiam dignissim enim risus, eu viverra
              turpis pellentesque sit amet. Maecenas sed lectus a nibh
              scelerisque placerat. Aenean elementum nibh eget sagittis sodales.
              Ut vehicula massa sapien, sit amet interdum tortor pulvinar sit
              amet. Nunc ac mauris facilisis, tristique nibh sed, tempus nisl.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Nulla lectus sapien, imperdiet sit amet aliquam nec, tempor non
              urna.
            </div>
            <div className="left-0 flex pt-5">Projects</div>
            <div>
              {projects.map((project, index) => (
                <div className="flex pt-2" key={index}>
                  <div className="inline-flex">
                    <div className="pr-5">{project.time}</div>
                    <div className="">
                      <div>{project.title}</div>
                      <div className="pt-2">{project.description}</div>
                      <div className="pt-2 flex">
                        {projects[index].bubble.map((bubble, index) => (
                          <div className="pr-2" key={index}>
                            <div className="p-1 px-2 bg-[#C7B8D6] rounded-full">
                              {bubble}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
