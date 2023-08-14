import React from 'react';
import { BsFiletypeScss, BsFillBootstrapFill  } from 'react-icons/bs';
import { TfiHtml5  } from 'react-icons/tfi';
import { FaVuejs, FaJava, FaGitAlt  } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';
import { SiCss3, SiJavascript, SiReact, SiRedux, 
  SiTailwindcss, SiVuedotjs, SiVuetify, 
  SiStyledcomponents,SiNextdotjs, 
  SiNodedotjs, SiPython, SiGraphql, SiMysql, 
  SiMongodb, SiPostman, SiAndroidauto, SiGithub, 
  SiJirasoftware, SiVisualstudiocode, SiSublimetext, 
  SiAsana, SiAdobexd, SiAdobeillustrator, SiFigma,
  SiWordpress, SiWoocommerce, SiAmazonaws  } from 'react-icons/si';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <TfiHtml5 className="experience__details-icon" />
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <FaVuejs className="experience__details-icon" />
              <h4>Vue</h4>
            </article>
            <article className="experience__details">
              <SiVuedotjs className="experience__details-icon" />
              <h4>Vuex</h4>
            </article>
            <article className="experience__details">
              <SiVuetify className="experience__details-icon" />
              <h4>Vuetify</h4>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon" />
              <h4>Next</h4>
            </article>
            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsFiletypeScss className="experience__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="experience__details">
              <DiMaterializecss className="experience__details-icon" />
              <h4>Materialize CSS</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience__details">
              <SiStyledcomponents className="experience__details-icon" />
              <h4>Styled Components</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <SiNodedotjs className="experience__details-icon" />
              <h4>Node</h4>
            </article>
            <article className="experience__details">
              <FaJava className="experience__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <SiGraphql className="experience__details-icon" />
              <h4>GraphQL</h4>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <SiAndroidauto className="experience__details-icon" />
              <h4>Android</h4>
            </article>
            <article className="experience__details">
              <SiAmazonaws className="experience__details-icon" />
              <h4>Amazon Web Services</h4>
            </article>
          </div>
        </div>
        <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPostman className="experience__details-icon" />
              <h4>Postman</h4>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <SiGithub className="experience__details-icon" />
              <h4>Github</h4>
            </article>
            <article className="experience__details">
              <SiJirasoftware className="experience__details-icon" />
              <h4>JIRA</h4>
            </article>
            <article className="experience__details">
              <SiAsana className="experience__details-icon" />
              <h4>Asana</h4>
            </article>
            <article className="experience__details">
              <SiVisualstudiocode className="experience__details-icon" />
              <h4>VSCode</h4>
            </article>
            <article className="experience__details">
              <SiSublimetext className="experience__details-icon" />
              <h4>Sublime</h4>
            </article>
            <article className="experience__details">
              <SiAdobexd className="experience__details-icon" />
              <h4>Adobe XD</h4>
            </article>
            <article className="experience__details">
              <SiAdobeillustrator className="experience__details-icon" />
              <h4>Adobe Illustrator</h4>
            </article>
            <article className="experience__details">
              <SiFigma className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <SiWordpress className="experience__details-icon" />
              <h4>Wordpress</h4>
            </article>
            <article className="experience__details">
              <SiWoocommerce className="experience__details-icon" />
              <h4>Woocommerce</h4>
            </article>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experience