import React from 'react';
import './AboutSaturn.css';

const AboutSaturn = () => {
  return (
    <section className="about-saturn">
      <div className="about-content">
        <h2 className='h2'>Unveiling the Mysteries of Saturn</h2>
        <div className="content-section">
          <h3>Formation and History</h3>
          <p>Saturn formed billions of years ago from a swirling disk of gas and dust around the young Sun. It is estimated to be around 4.5 billion years old.</p>
        </div>
        <div className="content-section">
          <h3>Physical Characteristics</h3>
          <ul>
            <li>Sixth planet from the Sun and the second-largest in our solar system.</li>
            <li>Made mostly of hydrogen gas with a small core of rock and ice.</li>
            <li>Famous for its extensive ring system, composed of billions of particles of ice and rock.</li>
            <li>Has 83 confirmed moons, including the giant moon Titan with a thick atmosphere.</li>
          </ul>
        </div>
        <div className="content-section">
          <h3>Unique Features</h3>
          <ul>
            <li>Elaborate ring system with distinct gaps and ringlets, formed by colliding moons and meteorite impacts.</li>
            <li>Titan, the largest moon in the solar system with a complex atmosphere and liquid methane lakes on its surface.</li>
            <li>Strong magnetic field that traps charged particles and auroras near its poles.</li>
          </ul>
        </div>
        <div className="content-section">
          <h3>Position in the Solar System</h3>
          <p>Distant gas giant orbiting the Sun at an average distance of nearly 1.4 billion kilometers. It takes Saturn about 29.5 years to complete one revolution around the Sun.</p>
        </div>
        <div className="content-section">
          <h3>Interesting Facts</h3>
          <ul>
            <li>Saturn is the least dense planet in our solar system, less dense than water.</li>
            <li>The wind speeds on Saturn can reach up to 1,800 kilometers per hour, some of the fastest in the solar system.</li>
            <li>Several robotic spacecraft have visited Saturn, including Cassini, which provided groundbreaking data and stunning images.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSaturn;
