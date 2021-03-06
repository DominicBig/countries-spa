import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  const [contries, setCountries] = useState([]);
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage contries={contries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </React.Fragment>
  );
}

export default App;
