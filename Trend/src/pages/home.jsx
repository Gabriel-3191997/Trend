import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Slider from "../components/slider"
import Footer from "../components/footer"


class Home extends React.Component{

    render()
    {

        return(

            <>
      <div className="bg-black md:h-screen">
        <Nav/>
        <Header/>
        <Slider/>
        <Footer/>
      </div>
            </>
        )
    }
}

export default Home;