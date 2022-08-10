import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from './redux/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  const handleClick = () => {
    dispatch(getGreeting());
  };

  return (
    <div className="box">
        <p className="text">
        My greeting
        {randomGreeting.greeting.message}
        </p>
      <button type="button" className="helloBtn" onClick={handleClick}>Get Greeting Randomnly</button>
    </div>
  );
};

export default Greeting;
