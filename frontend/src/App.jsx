import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyAccount from "./pages/Verify"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification" element={<VerifyAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
