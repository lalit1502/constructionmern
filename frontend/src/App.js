import logo from './logo.svg'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Layout from './includes/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
