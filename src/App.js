import React,{useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import "./App.css";

const App = () => {
  const [singleMovie, setSingleMovie] = useState({})
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/" element={<SingleMovie />} />
    </Routes>
  
  );
};

export default App;
