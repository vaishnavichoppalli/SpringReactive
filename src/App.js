import React from "react";
import GlobalLayout from "./components/global/globalLayout/GlobalLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Monitoring } from "./pages/Monitoring";
import { Product } from "./pages/Product";
import { User } from "./pages/User";
import { Service } from "./pages/Service";
import Home from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </GlobalLayout>
      </Router>
    </div>
  );
}

export default App;
