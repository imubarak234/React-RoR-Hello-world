import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchGreetingApi } from "../redux/greetings/greeting";

const HelloWorld = () => {

  const dispatch = useDispatch();
  const states = useSelector((states) => states.rootReducer, shallowEqual)

 


  const printState = () => {
    dispatch(fetchGreetingApi());
    console.log("Printing")
    console.log(states)
  };

    return (
      <div>
        <h2>Nextings</h2>
        <button className="btn btn-primary" onClick={() => printState()}>get things</button>
      </div>
    );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
