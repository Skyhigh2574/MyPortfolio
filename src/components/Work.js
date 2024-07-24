import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CloudTakersLogo from '../Assets/darktheme.png';
import PioneerLogo from '../Assets/darktheme.png';
import ElsnerLogo from '../Assets/darktheme.png';
import PDPULogo from '../Assets/darktheme.png';
import atCloudTakers from '../Assets/darktheme.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top:2rem;
  margin-left: 5rem;
  margin-right: 5rem;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Section = styled.section`
background-color: ${props => props.isDarkTheme?'rgb(17 24 39 )': 'aliceblue'};
color: ${props => props.isDarkTheme?'white': 'rgb(17 24 39 )'};
padding: 5.5rem 5rem;
max:width: 800px;
margin:0 auto;

`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
 
  
  @media (min-width: 1000px) {
    flex-direction: column;
    max-width: 100vw;
  }
  background : ${props => props.isDarkTheme?'linear-gradient(to bottom left, #1e293b, #2c2f33)':'linear-gradient(to bottom left, #c6e2fb, #2c2f33)'};
  overflow: auto;
  flex: 1 1 30%;
  border-radius: 4rem 0 0 4rem;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
    display: flex;
    max-width: 900px;
  flex-direction: row;
  background-color: ${props => props.isDarkTheme? '#1e293b' : '#c6e2fb'};
  overflow: auto;
  border-radius: 0rem 4rem 4rem 0rem;
  color:  ${props => props.isDarkTheme? '#c6e2fb' : '#1e293b'};
  
`;

const Details = styled.div`
  flex-grow: 1;
background-color: ${props => props.isDarkTheme? '#1e293b' : '#c6e2fb'};
font-size: 1.5rem;
`;


const CompanyCardStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  color: white;
  background-color: ${({ isSelected }) => (isSelected ? '#6c757d' : '#1e293b')};
  border: ${({ isSelected }) => (isSelected ? '2px solid rgba(2, 132, 199, 1)' : 'none')};
  box-shadow: ${({ isSelected }) => (isSelected ? '0px 1px 10px 1px rgba(2, 132, 199, 1)' : 'none')};
`;

const CompanyLogo = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 20px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  font-size:1rem;
`;

const ExperienceTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 5px;
`;

const ExperienceDate = styled.div``;

const Work = ({ isDarkTheme }) => {
  const [selectedCompany, setSelectedCompany] = useState('CloudTakers');

  const renderContent = (selectedCompany) => {
    switch (selectedCompany) {
      case 'CloudTakers':
        return (
          <>
            <h2 className="font-weight-bold">CloudTakers</h2>
            <div className="my-4 border-left border-primary pl-3">
              <Experience title="Software Developer" date="02/2024 - Present" />
             
            </div>
            <p>
              
            Our project focused on automating the claim settlement process to reduce manual intervention. The application evaluates claim documents based on their properties, historical data, and other criteria to decide whether to process the claim, decline it, or send it for manual verification. For the frontend, we used ReactJS, while the backend was developed using Java with a Spring MVC architecture. In this setup, client requests are mapped by the controller, processed in the service layer, and handled with JPA or native queries in the repository layer, which interacts with a MongoDB database. The service class processes data from both the claim document and historical data to determine the claim's outcome, which is then sent back through the controller to the UI for display. This approach streamlined the claim processing workflow and significantly improved efficiency.
            </p>

          </>
        );
      case 'Pioneer Systems':
        return (
          <>
            <h2 className="font-weight-bold">Pioneer Systems</h2>
            <div className="my-4 border-left border-primary pl-3">
              <Experience title="Software Engineer" date="06/2019 - 03/2021" />
            </div>
            <p>
            I operated financial planning software for institutions, digital tools, and workplace solutions, utilizing Java and Microsoft SQL Server to help users achieve financial goals and navigate life events. I built and devised microservices with Spring Boot, ensuring modularity and ease of maintenance, and implemented security measures like data encryption and secure authentication. I used Git for version control and modified RESTful APIs and microservice architecture for scalable applications in Quant Calculations. I improved application performance by 25% through caching with Redis Cache, executed CI/CD with Bamboo, and used Bitbucket for version control and collaboration with AWS. I worked with producers and DevOps engineers to automate release tasks and processes, tested and validated software fixes using JUnit and Mockito, and maintained technical documentation in an Agile environment.
            </p>
          </>
        );
      case 'Elsner':
        return (
          <>
            <h2 className="font-weight-bold">Elsner</h2>
            <div className="my-4 border-left border-primary pl-3">
              <Experience title="Junior Developer" date="01/2017 - 05/2019" />
            </div>
            <p>
            I implemented gesture recognition by extracting hand position, motion vectors, and key points from preprocessed video frames, engineering a hand gesture recognizer with 97% accuracy using advanced machine learning techniques. I structured a RASA NLU pipeline for an AI chatbot, coordinating tokenizer, featurizer, intent classifier, and entity extractor. I employed Docker for containerization of machine learning models to ensure reproducibility and scalability, and orchestrated the deployment of ML workloads with Kubernetes, optimizing resource utilization and ensuring fault tolerance through features like pod autoscaling, rolling updates, and service discovery.
            </p>
          </>
        );
      case 'PDPU':
        return (
          <>
            <h2 className="font-weight-bold">PDPU</h2>
            <div className="my-4 border-left border-primary pl-3">
              <Experience title="Intern" date="06/2016 - 12/2016" />
            </div>
            <p>
            I employed deep learning techniques like CNN to classify diverse dog breeds from images, applying RESNet for transfer learning and ORB for detailed breed distinctions. Achieving 87% accuracy through hyperparameter tuning, ensemble methods, and diverse data, I utilized Python libraries like TensorFlow and Keras. I also used Hadoop for distributed data processing, enabling the handling of large datasets in deep learning experiments. Leveraging Git for version control and collaboration ensured traceability and reproducibility of research experiments.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
    
    <Section isDarkTheme={isDarkTheme} id = "work"> <h1>Work Experience</h1>
    <Container>
      <Sidebar isDarkTheme={isDarkTheme}>
        <CompanyCard logo={CloudTakersLogo} name="CloudTakers" isSelected={selectedCompany === 'CloudTakers'} onClick={() => setSelectedCompany('CloudTakers')} />
        <CompanyCard logo={PioneerLogo} name="Pioneer Systems" isSelected={selectedCompany === 'Pioneer Systems'} onClick={() => setSelectedCompany('Pioneer Systems')} />
        <CompanyCard logo={ElsnerLogo} name="Elsner" isSelected={selectedCompany === 'Elsner'} onClick={() => setSelectedCompany('Elsner')} />
        <CompanyCard logo={PDPULogo} name="PDPU" isSelected={selectedCompany === 'PDPU'} onClick={() => setSelectedCompany('PDPU')} />
      </Sidebar>
      <Content isDarkTheme={isDarkTheme}>
        <div className="d-flex flex-column flex-md-row" >
          <Details isDarkTheme={isDarkTheme}>
            {renderContent(selectedCompany)}
          </Details>
        </div>
      </Content>
    </Container>
  </Section>
    </>
  );
};

const CompanyCard = ({ logo, name, isSelected, onClick }) => (
  <CompanyCardStyled isSelected={isSelected} onClick={onClick}>
    <CompanyLogo src={logo} alt={name} />
    <div className="h5 mb-0">{name}</div>
  </CompanyCardStyled>
);

const Experience = ({ title, date }) => (
  <ExperienceItem>
    <ExperienceTitle>{title}</ExperienceTitle>
    <ExperienceDate>{date}</ExperienceDate>
  </ExperienceItem>
);

export default Work;
