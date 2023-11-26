import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import HomePage from "./pages/Index";
import SendMessagePage from "./pages/Send";
import SplashScreen from "./components/SplashScreen";
import LoginPage from "./pages/Login";
import PageNotFound404 from "./pages/PageNotFound404";

function App() {

  const [isLoading, setisLoading] = useState<boolean>(true)
  setTimeout(() => setisLoading(false), 2000);

  return (
    isLoading ?  <SplashScreen/>
    :
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="send/:id" element={<SendMessagePage />} />
          <Route path="login" element={<LoginPage />} />
          {/* 404  */}
          <Route path="*" element={<PageNotFound404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
