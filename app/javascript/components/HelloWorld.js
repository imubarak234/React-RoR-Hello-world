import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchGreetingApi } from "../redux/greetings/greeting";

const HelloWorld = () => {

  const dispatch = useDispatch();
  const states = useSelector((states) => states.rootReducer, shallowEqual)

 


  const printState = () => {
    dispatch(fetchGreetingApi());
  };

    return (
      <div>
        <h2>Greetings</h2>
        <button className="btn btn-primary" onClick={() => printState()}>Get Another Greeting</button>
        <p className="h3">{ states[0] }</p>
      </div>
    );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
