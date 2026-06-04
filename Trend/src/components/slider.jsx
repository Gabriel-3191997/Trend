import React from "react"
import img1 from "../assets/images/images2.jpg"
import img2 from "../assets/images/images.jpg"
class Slider extends React.Component{

    render(){

        return(

            <>
            
            <div className="md:mt-28 flex flex-nowrap justify-center gap-2  md:h-auto cursor-pointer">
                <div className="md:w-96 h-112 md:h-112 relative group overflow-hidden">
                    <img src={img1} alt="TeddyRide" className="object-cover w-96 md:h-full h-full mt-16" />
                    <div className="absolute inset-0 mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity  duration-300">
                        <span className="text-white text-xl font-semibold text-center px-4">TeddyRide</span>
                    </div>
                </div>
                <div className="md:w-96 h-128 bg-black relative group overflow-hidden cursor-pointer">
                     <img src={img2} alt="TeddyRide" className="object-cover w-96 md:h-full h-full" />
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xl font-semibold text-center px-4">JyZno</span>
                    </div>
                </div>
                 <div className="md:w-96 h-112 bg-black relative group overflow-hidden cursor-pointer">
                    <img src={img1} alt="TeddyRide" className="object-cover w-96 md:h-full h-full mt-16 " />
                    <div className="absolute inset-0 mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xl font-semibold text-center px-4">Artist Three</span>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}

export default Slider