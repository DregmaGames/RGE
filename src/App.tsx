import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <WhatsAppButton phoneNumber="5491169777846" />
    </div>
  );
}