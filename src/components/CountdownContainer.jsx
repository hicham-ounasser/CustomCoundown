import React, { useState } from "react";

function CountdownContainer() {
  const [date, setDate] = useState("");

  const today = new Date().toISOString;

  return (
    <>
      <div className="container">
        <div className="input-container">
          <h1>Creat a Custom Countdown</h1>
          <form className="form">
            <label for="title">Title</label>
            <input type="text" placeholder="What are you counting down ?" />
            <label
              for="date-picker"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              Select a Date
            </label>
            <input type="date" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CountdownContainer;
