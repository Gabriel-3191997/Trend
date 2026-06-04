import React from "react"
import img1 from "../assets/images/images2.jpg"
import img2 from "../assets/images/images.jpg"

class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.scrollContainerRef = React.createRef();
        this.scrollTimer = null;
    }

    componentDidMount() {
        this.scrollTimer = setInterval(() => {
            const container = this.scrollContainerRef.current;
            if (container) {
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                
                if (container.scrollLeft >= maxScrollLeft - 20) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const isMobile = window.innerWidth < 768;
                    const step = isMobile ? container.clientWidth : (container.firstElementChild.clientWidth + 8) * 3;
                    container.scrollTo({ left: container.scrollLeft + step, behavior: 'smooth' });
                }
            }
        }, 3000); // 3 seconds
    }

    componentWillUnmount() {
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer);
        }
    }

    render(){
        return (
            <>
            
            {/* Outer wrapper keeping things clean across views */}
            <div className="md:mt-28 w-full max-w-md md:max-w-[1192px] mx-auto px-4 overflow-hidden">
                
                <div 
                    ref={this.scrollContainerRef}
                    className="flex flex-nowrap justify-between md:justify-start gap-[6px] md:gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    
                    {/* --- SLIDE SET 1 (SHORT, TALL, SHORT) --- */}
                    {/* Card 1: Short */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                        <img src={img1} alt="TeddyRide" className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16" />
                        <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">TeddyRide</span>
                        </div>
                    </div>
                    
                    {/* Card 2: Tall */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[520px] sm:h-[640px] md:h-128 bg-black relative group overflow-hidden cursor-pointer shrink-0">
                         <img src={img2} alt="JyZno" className="object-cover w-full md:w-96 md:h-full h-full" />
                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">JyZno</span>
                        </div>
                    </div>
                    
                    {/* Card 3: Short */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 bg-black relative group overflow-hidden cursor-pointer shrink-0">
                        <img src={img1} alt="Artist Three" className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16" />
                        <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Three</span>
                        </div>
                    </div>


                    {/* --- SLIDE SET 2 (SHORT, TALL, SHORT) --- */}
                    {/* Card 4: Short */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 bg-black relative group overflow-hidden shrink-0">
                        <img src={img1} alt="Artist Four" className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16" />
                        <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Four</span>
                        </div>
                    </div>
                    
                    {/* Card 5: Tall */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[520px] sm:h-[640px] md:h-128 bg-black relative group overflow-hidden cursor-pointer shrink-0">
                         <img src={img2} alt="Artist Five" className="object-cover w-full md:w-96 md:h-full h-full" />
                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Five</span>
                        </div>
                    </div>
                    
                    {/* Card 6: Short */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 bg-black relative group overflow-hidden cursor-pointer shrink-0">
                        <img src={img1} alt="Artist Six" className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16" />
                        <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Six</span>
                        </div>
                    </div>


                    {/* --- SLIDE SET 3 (SHORT, TALL, SHORT) --- */}
                    {/* Card 7: Short */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 bg-black relative group overflow-hidden shrink-0">
                        <img src={img1} alt="Artist Seven" className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16" />
                        <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Seven</span>
                        </div>
                    </div>
                    
                    {/* Card 8: Tall */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[520px] sm:h-[640px] md:h-128 bg-black relative group overflow-hidden cursor-pointer shrink-0">
                         <img src={img2} alt="Artist Eight" className="object-cover w-full md:w-96 md:h-full h-full" />
                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Eight</span>
                        </div>
                    </div>
                    
                    {/* Card 9: Short */}
                    <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 bg-black relative group overflow-hidden cursor-pointer shrink-0">
                        <img src={img1} alt="Artist Nine" className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16" />
                        <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">Artist Nine</span>
                        </div>
                    </div>

                </div>
            </div>
            
            </>
        )
    }
}

export default Slider;