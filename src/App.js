import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./Layout";

import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;