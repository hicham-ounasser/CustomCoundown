import React from "react";

function Countdown() {
  return (
    <div className="container">
      <div className="countdown">
        <h1>Countdown Tilte Here</h1>
        <ul>
          <li>
            3<span>Days</span>
          </li>
          <li>
            6<span>Hours</span>
          </li>
          <li>
            58 <span>Minutess</span>
          </li>
          <li>
            31
            <span>Seconds</span>
          </li>
        </ul>

        <button>Reset</button>
      </div>
    </div>
  );
}

export default Countdown;
