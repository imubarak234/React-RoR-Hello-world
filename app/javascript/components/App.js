import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HelloWorld from "./HelloWorld";
import Home from "./Home";
import Navbar from "./Navbar";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App
