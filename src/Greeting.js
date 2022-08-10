import React from "react";
import PropTypes from "prop-types"

const Greeting =() =>{
    const handleClick = () => {
        console.log("clicked")
      };
      
    
      return (
        <div className="box">
          <p className="text">My greeting</p>
          <button className="helloBtn" onClick={handleClick}>Get Greeting Randomnly</button>
        </div>
      );
    
}

Greeting.propTypes = {
    message: PropTypes.string,
};

export default Greeting;