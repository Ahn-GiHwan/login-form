import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./routes/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
