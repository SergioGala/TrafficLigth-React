import React, { useState } from 'react';

const TrafficLight = ({ showPurple }) => {
  const [color, setColor] = useState("red");

  const colors = showPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];

  const changeColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div>
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "glow" : ""}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <button onClick={changeColor} className="btn btn-primary mt-3">
        Change Color
      </button>
    </div>
  );
};

export default TrafficLight;