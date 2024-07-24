import React from 'react';
import aws from '../Assets/AWS.svg';
import ai from '../Assets/AI.png';
import ml from '../Assets/ML.jpg';

const TechCard = ({ src, alt, title }) => (
  <div className="tech-card">
    <img alt={alt} src={src} className="tech-icon" />
    <h4 className="tech-title">{title}</h4>
  </div>
);

const TechGrid = ({isDarkTheme}) => {
  const technologies = [
   
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", alt: "Express", title: "Express" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "NodeJS", title: "NodeJS" },
    { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt: "Postman", title: "Postman" },
    
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg", alt: "Flutter", title: "Flutter" },
    { src: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png", alt: "React Native", title: "React Native" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML", title: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", alt: "CSS", title: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", alt: "Bootstrap", title: "Bootstrap" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg", alt: "Redux", title: "Redux" },
    
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "Javascript", title: "Javascript" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React", title: "React" },
    
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", alt: "MongoDB", title: "MongoDB" },
    
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", alt: "Git", title: "Git" },
    { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "Firebase", title: "Firebase" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot", title: "Spring Boot" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django", title: "Django" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++", title: "C++" },
    { src: ml, alt: "Machine Learning", title: "Machine Learning" },
    { src: ai, alt: "Artificial Intelligence", title: "Artificial Intelligence" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "SQL", title: "SQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", title: "PostgreSQL" },
    { src: aws, alt: "AWS", title: "AWS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg", alt: "Tomcat Server", title: "Tomcat Server" },
  ];

  return (
    <section style={{ color:isDarkTheme? 'white' : 'rgb(17 24 39)', backgroundColor:isDarkTheme? 'rgb( 17 24 39)' : 'aliceblue' }} id="Skills"> <h1 style={{paddingTop: 100}}>Skills</h1>
    <div className="container" >
      {/* <h2 className="heading">Technologies and Tools</h2> */}
      <p className="subheading">Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
      <div className="tech-grid" style={{color:'rgb(17 24 39)'}}>
        {technologies.map((tech, index) => (
          <TechCard key={index} src={tech.src} alt={tech.alt} title={tech.title} />
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .heading {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-top: 20px;
        }

        .subheading {
          text-align: center;
          font-size: 1.25rem;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          background-color: #f9fafb;
          margin: 10px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
          cursor: pointer;
          width: 150px;
        }

        .tech-card:hover {
          transform: scale(1.05);
        }

        .tech-icon {
          width: 48px;
        }

        .tech-title {
          margin-top: 8px;
          text-align: center;
          font-size: 1rem;
        }
      `}</style>
    </div>
    </section>
  );
};

export default TechGrid;
