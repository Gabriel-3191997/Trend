import React from "react";
import Nav from "../components/nav"; 
import Header from "../components/header";
import Slider from "../components/slider";
import Footer from "../components/footer";

class Home extends React.Component {
  render() {
    return (
      <div className="w-full min-h-screen bg-black text-white flex flex-col justify-between">
        <div>
          <Nav /> 
          <Header />
          <Slider />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;