import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="justify-center flex items-center h-screen bg-gray-700">
      <div>
        <div className="text-neutral-50 text-center">404 error</div>
        <button className="bg-red-300 p-2 rounded">
          <Link to={"Home"}>Return Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Error;
