import React from "react";

function Contact1() {
  return (
    <div className="bg-[#c7d8e0] h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <img
        className="max-w-sm top-[3.5rem] left-0 absolute"
        src={require("../images/Branch.png")}
        alt="branch"
      />
      <div>
        <div className="text-xl">Get in touch</div>
        <div className="px-24 sm:px-36 md:px-56 lg:px-96 py-5 text-[14px]">
          If you have any open job opportunities, want to chat about games,
          cooking, baking, or even anime, shoot me an email!
        </div>
        <button className="p-2 rounded bg-[#C7B8D6] text-[14px]">
          <a href="mailto:JessieSu3@gmail.com">Email</a>
        </button>
      </div>
      <img
        className="rotate-180 max-w-sm absolute right-0 bottom-0"
        src={require("../images/Branch.png")}
        alt="branch"
      />
    </div>
  );
}

export default Contact1;
