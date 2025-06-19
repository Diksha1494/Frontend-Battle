import React, { useEffect, useState } from 'react';
import './App3.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoFiles = [
    '/carousel.mp4',
    '/testimonials.mp4',
    '/features.mp4'
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Show loader for 2.5s
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeVideo = (direction) => {
    const newIndex = (currentVideoIndex + direction + videoFiles.length) % videoFiles.length;
    setCurrentVideoIndex(newIndex);
  };

  if (loading) {
    return (
      <div className="loader-screen">
        <video src="/loader.mp4" autoPlay muted loop className="loader-video" />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <nav className="navbar">
        <h1>Frontend Battle</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#carousel">Showcase</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </nav>

      <section id="home">
        <h2>Welcome</h2>
        <p>This is the homepage section.</p>
      </section>

      <section id="features">
        <h2>Our Core Features</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Fast Performance</h3>
            <p>Our website delivers lightning-fast speed and optimized content delivery.</p>
          </div>
          <div className="card">
            <h3>Responsive Design</h3>
            <p>Perfectly adapts to all screen sizes and devices with pixel-perfect accuracy.</p>
          </div>
          <div className="card">
            <h3>Modern UI</h3>
            <p>Inspired by modern design trends to provide a clean and engaging interface.</p>
          </div>
        </div>
      </section>

      <section id="carousel">
        <h2>Interactive Showcase</h2>
        <div className="carousel">
          <button className="carousel-btn" onClick={() => changeVideo(-1)}>&#10094;</button>
          <video
            className="carousel-video"
            id="carousel-video"
            src={videoFiles[currentVideoIndex]}
            controls
            autoPlay
            loop
            muted
          />
          <button className="carousel-btn" onClick={() => changeVideo(1)}>&#10095;</button>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Information about the project.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact form and details here.</p>
      </section>

      <footer>
        <p>&copy; 2025 Frontend Battle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
