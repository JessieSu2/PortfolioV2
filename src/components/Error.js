import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
function Error() {
  return (
    <div className="justify-center flex items-center h-screen bg-gray-700">
      <div className=" text-neutral-50 text-center">
        <div className="">Ooops...</div>
        <div className="text-neutral-50 text-5xl">404 error</div>
        <div>Take a small break</div>
        <Player
          autoplay
          loop
          speed={0.01}
          src="https://lottie.host/4e8a9268-a52f-4866-8bac-30edf5ef78eb/ieveIJQ8Oz.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <div className="pt-2">
          <button className="bg-red-300 p-2 rounded">
            <Link to={"/Enter/Home"}>Return Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
