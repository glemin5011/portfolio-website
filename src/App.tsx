import React from "react";
import "./App.scss";
import { Hero } from "./features/hero";
import { Navbar } from "./features/navbar";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
