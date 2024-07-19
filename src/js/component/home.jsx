import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
  const [showPurple, setShowPurple] = useState(false);

  const handleAddPurple = () => {
    setShowPurple(true);
  };

  return (
    <div className="text-center">
	  <div className="mt-5">
        <h2>Traffic Light</h2>
        <TrafficLight showPurple={showPurple} />
      </div>
      <a href="#" className="btn btn-success" onClick={handleAddPurple}>
        Add Purple Light
      </a>
      <p>
        Made by{" "}
        <a href="https://github.com/SergioGala">SergioGala</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
