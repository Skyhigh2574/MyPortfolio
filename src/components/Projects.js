import React from 'react';
import styled from 'styled-components';
import { Card, Row, Col } from 'react-bootstrap';

const Section = styled.section`
  padding: 7rem 1rem;
  background-color: ${props => props.isDarkTheme?'rgb(17 24 39 )': 'white'};
  text-align: center;
  color: ${props => props.isDarkTheme?'white': 'rgb(17 24 39)'}
`;

const Project = styled.div`
  margin-bottom: 1.5rem;
`;

const Projects = ({isDarkTheme}) => {
  return (
    <Section isDarkTheme={isDarkTheme} id="projects">
      <h1 >Projects</h1>
      <Project>
        <div className="container">
          <Row >
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ padding: 10, margin: '20px auto', backgroundColor: 'aliceblue' }}>
                <Card.Body>
                  <Card.Title>Ecommerce Platform</Card.Title>
                  
                  <Card.Text>
                  I engaged in the design, development, and maintenance of Java-based applications, collaborating with cross-functional teams to ensure alignment with client and project requirements. Using Spring Boot, I developed robust backend solutions and built reusable UI components in React, emphasizing code quality and scalability. I integrated applications with PostgreSQL for optimized data storage and retrieval and constructed RESTful APIs with Spring, ensuring flexible and interoperable endpoints. Additionally, I managed state in React using local state and Redux, and implemented AWS S3 for data storage solutions, including object storage, versioning, and cross-region replication.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ padding: 10, margin: '20px auto', backgroundColor: 'aliceblue' }}>
                <Card.Body>
                  <Card.Title>Detecting Contradiction and Entailment in multilingual Text</Card.Title>
                  
                  <Card.Text>
                  I implemented gesture recognition by extracting hand positions, motion vectors, and key points from preprocessed video frames, engineering a hand gesture recognizer with 97% accuracy using advanced ML techniques. I structured the RASA NLU pipeline, coordinating tokenizer, featurizer, intent classifier, and entity extractor for an AI chatbot. I employed Docker for containerization of machine learning models, ensuring reproducibility and scalability, and orchestrated the deployment of ML workloads with Kubernetes, utilizing features like pod autoscaling, rolling updates, and service discovery to optimize resource utilization and ensure fault tolerance in distributed environments.
                  </Card.Text>
                  <Card.Link href="https://github.com/Skyhigh2574/Detecting-Contradiction-and-Entailment-in-Multilingual-Text-">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ padding: 10, margin: '20px auto', backgroundColor: 'aliceblue' }}>
                <Card.Body>
                  <Card.Title>Indian Bird Identification System</Card.Title>
                  
                  <Card.Text>
                  I led the creation of a responsive website for bird identification using qualitative data and images, leveraging React for the frontend and Django for the backend. I showcased my expertise in machine learning by deploying a two-stacked AlexNet model, achieving 87% accuracy in bird image recognition. Additionally, I performed JPEG compression at a 10:1 ratio to reduce image size, optimizing website performance and enhancing the user experience.
                  </Card.Text>
                  <Card.Link href="https://github.com/Skyhigh2574/Indian-Bird-Identification-System">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card style={{ padding: 10, margin: '20px auto', backgroundColor: 'aliceblue' }}>
                <Card.Body>
                  <Card.Title>Berkley Pacman Game(AI)</Card.Title>
                  
                  <Card.Text>
                  I strived to elevate the Pacman agent's intelligence, empowering it to secure victories and attain high scores in the game. I utilized algorithms such as DFS, BFS, Uniform Cost Search, and A-star to assess the Pacman agent’s performance. Additionally, I applied reinforcement learning techniques, defining policies and tweaking parameters to achieve higher Q-values and accurate direction.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Project>
    </Section>
  );
}

export default Projects;
