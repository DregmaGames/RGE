import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useAutoLanguage } from './hooks/useAutoLanguage';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  useAutoLanguage();

  return (
    <AuthProvider>
      <ModalProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;