import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Header from './Header';
import AboutUs from './AboutUs';
import Services from './Services';
import ContentSection from './ContentSection';
import ContactUs from './ContactUs';

function App() {
  return (
    <div id="app">
    
        <Navbar id="navbar" /> 
        <Header id="header" />
        <AboutUs id="about-us" />
        <Services id="Services" />
        <ContentSection
          idProp="content-section"
          titleProp="We'll help perfect your business model: Optimizing Strategies for Success"
          textProp="Elevate your reading experience with our platform's unique offerings. Dive into personalized reading recommendations tailored to your interests and preferences. Unlock valuable insights from your documents through AI-powered analysis. Collaborate seamlessly with others in shared reading spaces. And organize your collection effortlessly with our integrated virtual bookshelf. Experience the future of reading, tailored to you."
        />
        <ContactUs id="contact-us" />
      
    </div>
  );
}

export default App;