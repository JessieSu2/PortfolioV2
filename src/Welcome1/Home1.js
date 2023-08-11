import React from "react";
import { projects } from "./info";
import { render } from "@testing-library/react";
// h-[calc(100vh-3.5rem)]
function Home1() {
  render(
    <div className="bg-[#c7d8e0] h-screen overflow-y-auto md:h-[calc(100vh-3.5rem)] bg-cover bg-no-repeat md:overflow-hidden ">
      <div className="grid sm:grid-cols-1 lg:grid-cols-12 pt-5 lg:pt-10 ">
        <div className="lg:col-span-5 lg:col-start-1">
          <div>Hi, i'm</div>
          <h1 className="font-serif text-5xl">Jessie Su</h1>
          <div className="text-[12px]">a</div>
          <h2>Software Engineer</h2>
          <div className="text-[12px]">Who</div>
          <div className="px-5">
            Loves designing and building full-stack applications
          </div>
        </div>

        <div className="text-left px-16 md:px-24 lg:col-span-6 lg:col-start-6 pt-5 lg:pt-0 lg:px-0 md:h-4/6 md:overflow-y-auto">
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla nisl ante, posuere mattis metus dapibus ac. Integer
            malesuada dapibus maximus. Etiam dignissim enim risus, eu viverra
            turpis pellentesque sit amet. Maecenas sed lectus a nibh scelerisque
            placerat. Aenean elementum nibh eget sagittis sodales. Ut vehicula
            massa sapien, sit amet interdum tortor pulvinar sit amet. Nunc ac
            mauris facilisis, tristique nibh sed, tempus nisl. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nulla lectus
            sapien, imperdiet sit amet aliquam nec, tempor non urna.
          </div>
          <div className="left-0 flex pt-5">Projects</div>
          <div className="flex pt-2">
            <div className="inline-flex">
              <div className="pr-5">time-time</div>
              <div className="">
                <div>title</div>
                <div className="pt-2">Description</div>
                <div className="pt-2 flex">
                  <div className="pr-2">
                    <div className="p-1 px-2 bg-[#C7B8D6] rounded-full">
                      bubble
                    </div>
                  </div>
                  <div className="pr-2">
                    <div className="p-1 px-2 bg-[#C7B8D6] rounded-full">
                      bubble
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
