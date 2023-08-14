import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>Hello There !! I am a seasoned Full Stack Developer with a deep passion for technology and an unyielding thirst for knowledge. Over the past three years, I have honed my skills as a self-taught programmer, gaining valuable experience in the software industry. I thrive on challenges, always excited to embrace new learning opportunities. My aggressive pursuit of knowledge keeps me at the forefront of the ever-evolving tech landscape, enabling me to approach problem-solving with innovation and adaptability.</p>
          <p>Beyond technical expertise, I am known for my friendly and positive demeanor, creating a collaborative environment wherever I work. Effective teamwork and communication are fundamental to my approach, ensuring projects progress smoothly and efficiently. Fostering a supportive and inclusive atmosphere leads to greater productivity and creativity.</p>
          <p>Outside the programming realm, I am a tech lover who eagerly embraces the latest gadgets and advancements in the market. Additionally, I indulge in my love for movies and often embark on thrilling adventures with friends and strangers. Exploring diverse places and meeting new people enriches my life and fuels my creativity in my work and personal pursuits. My multifaceted interests contribute to a well-rounded and adaptable approach to coding and energy, making me an asset to any team or project. Let's collaborate and create something extraordinary together!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro