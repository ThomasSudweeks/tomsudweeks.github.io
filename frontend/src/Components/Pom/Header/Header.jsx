import { useState, useEffect } from 'react';
import './Header.css';

function redirectToHome() {
  window.location.href = '/pom';
}

function redirectToShop() {
  window.location.href = '/pom/shop';
}

function redirectToSetup() {
  window.location.href = '/pom/setup';
}

function redirectToAbout() {
  window.location.href = '/pom/about';
}

function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // const maxScroll = document.body.scrollHeight - window.innerHeight;
      const maxScroll = 100;
      const scrollFraction = window.scrollY / maxScroll;
      setOpacity(Math.max(1 - scrollFraction, 0.3)); // Decreases opacity as you scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className='header-box'
      style={{ opacity, transition: 'opacity 0.3s ease-out' }}
    >

      {/* Left-aligned PoM logo */}
      <div className='title-box no-select' onClick={redirectToHome} >
        <h1>P</h1>
        <img src='/pom-title.svg' className='header-title' alt="Title" />
        <h1>M</h1>
      </div>

      {/* Right-aligned menu options */}
      <div className='header-options'>
        <h2 onClick={redirectToShop}>Shop</h2>
        <h2 onClick={redirectToSetup}>Setup</h2>
        <h2 onClick={redirectToAbout}>About Us</h2>
      </div>
    </div>
  );
}

export default Header;