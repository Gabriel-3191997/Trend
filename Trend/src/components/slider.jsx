import React from "react"
import img1 from "../assets/images/images2.jpg"
import img2 from "../assets/images/images.jpg"
class Slider extends React.Component{

    render(){

        return(

            <>
            
            <div className="md:mt-28 flex flex-nowrap justify-center gap-2">
                <div className="md:w-96 h-112 md:h-112">
                    <img src={img1} alt="TeddyRide" className="object-cover w-96 md:h-full h-full mt-16" />
                </div>
                <div className="md:w-96 h-128 bg-black">
                     <img src={img2} alt="TeddyRide" className="object-cover w-96 md:h-full h-full" />
                </div>
                 <div className="md:w-96 h-112 bg-black">
                    <img src={img1} alt="TeddyRide" className="object-cover w-96 md:h-full h-full mt-16" />
                </div>
            </div>
            
            </>
        )
    }
}

export default Slider