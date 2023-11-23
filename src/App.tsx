import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import HomePage from "./pages/index";
import SendMessagePage from "./pages/send";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="send/:id" element={<SendMessagePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
