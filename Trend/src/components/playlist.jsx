import React from "react";
import img from "../assets/images/images.jpg";

class PlayList extends React.Component {
  render() {
    return (
      <>
    {/* <div className="flex flex-wrap justify-center md:mt-28 mt-10 md:h-64">
        <h1 className="text-center text-white font-sans md:text-5xl text-4xl font-semibold capitalize">
        trend - online streaming platform
      </h1>
    </div>
 */}

   <div className="flex flex-wrap justify-center md:mt-20 items-center gap-10">
   
    <div className=" md:h-50 w-xl">
   
<div className="flex flex-wrap justify-start gap-20">
  
  <div className="md:w-32 w-auto mx-2">
    <img src={img} alt="" srcset="" className="md:w-auto w-20" />
  </div>
  <div className="w-auto">
    sofaya <br />jyzno X wandy shade
  </div>
</div>
    </div>
     <div className=" h-50 w-xl">
       <div className="w-32 mx-5 my-5">
    <img src={img} alt="" srcset="" className="md:w-auto w-20" />
  </div>
    </div>

   </div>

    <div className="flex flex-wrap justify-center md:mt-20 items-center gap-10">
    <div className="bg-black h-50 w-xl">
<div className="flex flex-wrap justify-start gap-20">
  <div className="w-32 mx-5 my-5">
    <img src={img} alt="" srcset="" className="md:w-auto w-20" />
  </div>
  <div className="w-auto">2</div>
</div>
    </div>
     <div className="bg-gray-900 h-50 w-xl">
       <div className="w-32 mx-5 my-5">
    <img src={img} alt="" srcset="" className="md:w-auto w-20" />
  </div>
    </div>

   </div>

      </>
    );
  }
}

export default PlayList;
