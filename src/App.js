import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LandingPage from "./pages/landingpage";
import Registration from "./pages/registration";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
