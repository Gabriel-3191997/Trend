import React from "react";
import img from "../assets/images/download.jpg";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center items-stretch h-screen">
          {/* Left column */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center text-white text-4xl font-bold">
            <img src={img} alt="" srcset="" className="w-full h-full object-cover" />
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2 bg-green-700 flex items-center justify-center text-white text-4xl font-bold">
            2
          </div>
        </div>
      </>
    );
  }
}

export default Login;
