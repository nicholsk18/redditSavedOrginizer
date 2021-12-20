import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default App;
