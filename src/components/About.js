import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
background-color: ${props => props.isDarkTheme?'rgb(17 24 39 )': 'aliceblue'};
color: ${props => props.isDarkTheme?'white': 'rgb(17 24 39 )'};
padding: 5.5rem 5rem;
max:width: 800px;
margin:0 auto;

`;

const About = ({ isDarkTheme }) =>{
    return(
    <Section isDarkTheme={isDarkTheme} id = "about">
       
        <h1 style={{padding: 30,}}> About Me</h1>
        <p style={{ fontSize:30,}}> I am Energetic Individual who does Software Development as a Profession, pursued Masters in Computer Science at University of Central Florida. Never Give Up attitude learnt from Sports, now applying to "Errors".
        Trying to Grow more and better, while connecting with Intellectual People.</p>
    </Section>
    );
}

export default About;