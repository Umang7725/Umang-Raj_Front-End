import React from "react";
import "./App.css";
import List from "./List";

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>STEELEYE</h1>
        <List
          items={[
            { text: "co-founder and CEO Matt Smith " },
            { text: "Product Owner and MD-Arjun Shivraj" },
            { text: "Lovely Professional University" },
            { text: "Umang Raj 12018505" },
          ]}
        />

      </div>
    </div>
  );
};

export default App;
