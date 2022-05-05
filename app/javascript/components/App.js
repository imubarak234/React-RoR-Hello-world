import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HelloWorld from "./HelloWorld";
import Home from "./Home";
import Navbar from "./Navbar";
import stores from "../redux/configureStore";
import { Provider } from 'react-redux';

console.log(stores)

const App = () => {
    return (
      <Provider store={stores}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HelloWorld />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    );
}

export default App
