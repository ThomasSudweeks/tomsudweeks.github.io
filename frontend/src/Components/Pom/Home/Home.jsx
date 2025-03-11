import './Home.css'
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

function Home() {

  // Animate components on window entry
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el)); // Cleanup observer on unmount
    };
  }, []);

  // Trigger subtitle animation early if scrolled
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If scroll-trigger becomes visible, remove subtitle's delay
          const subtitle = document.querySelector('.subtitle');
          if (subtitle) {
            subtitle.style.animationDelay = '1s';
          }
        }
      });
    });
    const scrollTrigger = document.querySelector('.scroll-trigger');
    if (scrollTrigger) {
      observer.observe(scrollTrigger);
    }
    return () => {
      if (scrollTrigger) observer.unobserve(scrollTrigger);
    };
  }, []);

  return (
    <>
      {/* Set PoM Header */}
      <Helmet>
        <title>PoM</title>
        <link rel="icon" type="image/svg+xml" href="/pom-icon.svg" />
      </Helmet>
      {/* PoM Logo */}
      <div className='logo-box no-select'>
        <img src='./pom-dark.svg' className='icon rim-dark'></img>
        <img src='./pom-white.svg' className='icon rim-light'></img>
        <img src='./pom-pink.svg' alt='PoM Logo' className='icon green'></img>
      </div>
      {/* Title Text */}
      <div className='wrapper no-select'>
        <p className='title text line-1' data-text='Peace of Mind'>Peace of Mind</p>
        <p className='title-rim text line-1'>Peace of Mind</p>
        <div className='body'></div>
      </div>
      <div className='no-select'>
        <div className='mind-rim text line-2'>Mind</div>
        <div className='mind text line-2'>Mind</div>
        <div className='of text line-2'>of</div>
      </div>
      {/* About Us Paragraph */}
      <div className='textbox'>
        <h1 className='subtitle'>PoM. The Future of Personal Security</h1>
        <p className='body-paragraph scroll-trigger'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  )
}

export default Home
