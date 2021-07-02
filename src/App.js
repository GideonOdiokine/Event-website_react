import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import Venue from "./components/venueInfo/Venue";
const App = () => {
  return (
    <div>
      <Header />
      <Featured />
      <Venue />
    </div>
  );
};

export default App;
