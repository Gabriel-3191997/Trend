import React from "react";
// import Login from "../components/login"
import Nav from "../components/nav"; 
import PlayList from "../components/playlist";
// import Header from "../components/header";
// import Slider from "../components/slider";
// import Footer from "../components/footer";

class Home extends React.Component {
  render() {
    return (
      <div className="w-full min-h-screen bg-black text-white">
    <Nav /> 

    <PlayList/>

          {/* <Login /> */}
          {/* <Nav /> 
          <Header />
          <Slider />
        </div>
        <Footer /> */}
      </div>
    );
  }
}

export default Home;