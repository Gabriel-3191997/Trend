import React from "react";
import img1 from "../assets/images/images2.jpg";
import img2 from "../assets/images/images.jpg";

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            direction: 1
        };

        this.scrollContainerRef = React.createRef();
        this.scrollTimer = null;
        this.totalPages = 3;
    }

    componentDidMount() {
        this.startAutoSlide();
    }

    componentWillUnmount() {
        if (this.scrollTimer) {
            clearInterval(this.scrollTimer);
        }
    }

    startAutoSlide = () => {
        this.scrollTimer = setInterval(() => {
            const container = this.scrollContainerRef.current;
            if (!container) return;

            const isMobile = window.innerWidth < 768;
            const pageWidth = isMobile
                ? container.clientWidth
                : (container.firstElementChild.clientWidth + 8) * 3;

            let { currentPage, direction } = this.state;
            let nextPage = currentPage + direction;

            if (nextPage >= this.totalPages) {
                direction = -1;
                nextPage = currentPage + direction;
            } else if (nextPage < 0) {
                direction = 1;
                nextPage = currentPage + direction;
            }

            container.scrollTo({
                left: pageWidth * nextPage,
                behavior: "smooth"
            });

            this.setState({
                currentPage: nextPage,
                direction: direction
            });
        }, 3000);
    };

    goToPage = (page) => {
        const container = this.scrollContainerRef.current;
        if (!container) return;

        const isMobile = window.innerWidth < 768;
        const pageWidth = isMobile
            ? container.clientWidth
            : (container.firstElementChild.clientWidth + 8) * 3;

        container.scrollTo({
            left: pageWidth * page,
            behavior: "smooth"
        });

        let nextDirection = this.state.direction;
        if (page === this.totalPages - 1) {
            nextDirection = -1;
        } else if (page === 0) {
            nextDirection = 1;
        }

        this.setState({
            currentPage: page,
            direction: nextDirection
        });
    };

    render() {
        return (
            <>
                <div className="md:mt-28 w-full max-w-md md:max-w-[1192px] mx-auto px-4 overflow-hidden">

                    <div
                        ref={this.scrollContainerRef}
                        className="flex flex-nowrap justify-between md:justify-start gap-[6px] md:gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                            <img
                                src={img1}
                                alt="TeddyRide"
                                className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16"
                            />
                            <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    TeddyRide
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[520px] sm:h-[640px] md:h-128 relative group overflow-hidden shrink-0">
                            <img
                                src={img2}
                                alt="JyZno"
                                className="object-cover w-full md:w-96 md:h-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    JyZno
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                            <img
                                src={img1}
                                alt="Artist Three"
                                className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16"
                            />
                            <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Three
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                            <img
                                src={img1}
                                alt="Artist Four"
                                className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16"
                            />
                            <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Four
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[520px] sm:h-[640px] md:h-128 relative group overflow-hidden shrink-0">
                            <img
                                src={img2}
                                alt="Artist Five"
                                className="object-cover w-full md:w-96 md:h-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Five
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                            <img
                                src={img1}
                                alt="Artist Six"
                                className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16"
                            />
                            <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Six
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                            <img
                                src={img1}
                                alt="Artist Seven"
                                className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16"
                            />
                            <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Seven
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[520px] sm:h-[640px] md:h-128 relative group overflow-hidden shrink-0">
                            <img
                                src={img2}
                                alt="Artist Eight"
                                className="object-cover w-full md:w-96 md:h-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Eight
                                </span>
                            </div>
                        </div>

                        <div className="w-[calc(33.333%-4px)] md:w-96 h-[450px] sm:h-[550px] md:h-112 relative group overflow-hidden shrink-0">
                            <img
                                src={img1}
                                alt="Artist Nine"
                                className="object-cover w-full md:w-96 md:h-full h-full mt-10 md:mt-16"
                            />
                            <div className="absolute inset-0 mt-10 md:mt-16 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xs md:text-xl font-semibold text-center px-1 md:px-4">
                                    Artist Nine
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8">
                        <div className="relative w-24 h-3 bg-black rounded-full flex items-center px-1">
                            <div 
                                className="absolute w-2 h-2 bg-white rounded-full transition-all duration-300"
                                style={{ 
                                    left: `calc(${(this.state.currentPage / (this.totalPages - 1)) * 100}% - ${(this.state.currentPage / (this.totalPages - 1)) * 8}px + 4px)`,
                                    transform: 'translateX(-50%)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Slider;