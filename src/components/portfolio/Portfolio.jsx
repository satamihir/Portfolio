import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import IMG4 from '../../assets/fake.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'inshorts',
      img: IMG1,
      description:
        'Inshorts is a news website thats selects latest and news from multiple national and international sources and summarises them to present in a short and crisp 60 words or less format. ',
      technologies: 'HTML5 | CSS3 | Javascript |   ',
      link: 'https://gregarious-bunny-8de40f.netlify.app/',
      github: 'https://github.com/satamihir/inshorts',
    },
    {
      id: 2,
      title: 'Plan2Plate',
      img: IMG4,
      description:
        'Plan2Plate is a one-stop solution to plan meals, create grocery lists and save time with using integrated platform. The platform creates personalized meal plans based on user’s food preferences, budget, and schedule. ',
      technologies: 'React | Redux',
      github: 'https://github.com/deeppomal/Plan2Plate',
    },

  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
