import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkPage from "./LinkPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
