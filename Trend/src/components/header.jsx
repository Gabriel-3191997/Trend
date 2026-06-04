import React from "react"

class Header extends React.Component{

    render(){

        return(
            <>
            
            <div className="flex md:flex-1 flex-wrap justify-center md:mt-50 mt-20 mb-10">
               <h1 className="text-white font-sans font-semibold text-5xl capitalize text-center">
                 top feature artists
               </h1>
            </div>
            </>
        )
    }
}

export default Header;