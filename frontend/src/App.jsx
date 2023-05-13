import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import VerifyAccount from "./pages/Verify"
import ForgotPassword from "./pages/ForgotPassword";
// import WelcomeCard from "./components/Welcome";
import HomePage from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<VerifyAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
