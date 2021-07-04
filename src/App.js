import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import Venue from "./components/venueInfo/Venue";
import HightLight from "./components/highLight/HighLight";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Venue />
    <HightLight/>
    </div>
  );
};

export default App;
