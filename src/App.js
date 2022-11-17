import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import S01Screen from "./components/S01Screen/S01Screen";
import S02Screen from "./components/S02Screen/S02Screen";
import S03Screen from "./components/S03Screen/S03Screen";
import S04Screen from "./components/S04Screen/S04Screen";
import S05Screen from "./components/S05Screen/S05Screen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<S01Screen />} />
      <Route path="s02" element={<S02Screen />} />
      <Route path="s03" element={<S03Screen />} />
      <Route path="s04" element={<S04Screen />} />
      <Route path="s05" element={<S05Screen />} />
    </Routes>
  );
}

export default App;
