import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Route configurations */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afro" element={<div>Afro Music Page (Coming Soon)</div>} />
          <Route path="/trapco" element={<div>Trapco Page (Coming Soon)</div>} />
          <Route path="/gospel" element={<div>Gospel Page (Coming Soon)</div>} />
          <Route path="/instrumental" element={<div>Instrumentals Page (Coming Soon)</div>} />
          <Route path="/news" element={<div>News Page (Coming Soon)</div>} />
          <Route path="/events" element={<div>Events Page (Coming Soon)</div>} />
          <Route path="/buy-ticket" element={<div>Tickets Page (Coming Soon)</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;