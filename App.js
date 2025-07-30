import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomeScreen from './src/screens/HomeScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ContactScreen from './src/screens/ContactScreen';
import AboutScreen from './src/screens/AboutScreen';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projetos</NavLink>
          <NavLink to="/contact">Contato</NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/projects" element={<ProjectsScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}