import React from 'react';
import styled, { keyframes } from 'styled-components';
import darkthemeImage from '../Assets/darktheme.png';
import lightthemeImage from '../Assets/lighttheme.png';
import leetcode from '../Assets/leetcode-icon.png';
import github from '../Assets/github-icon.png';
import linkedin from '../Assets/linkedin-icon.png';

const typing = keyframes`
  0% { width: 0; }
  50% { width: 100%; }
  100% { width: 0; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: ${props => props.isDarkTheme ? 'white' : 'black'}; }
`;

const HeroSectionContainer = styled.section`
  background: url(${props => props.isDarkTheme ? darkthemeImage : lightthemeImage}) no-repeat center center/cover;
  color: ${props => props.isDarkTheme ? 'white' : 'black'};
  display: flex;
  flex-direction: column;
  text-align: left;
  
  justify-content: center;
  height: 100vh; /* Make the section fit the window height */
`;

const TypingContainer = styled.div`
  font-size: 3rem;
  white-space: nowrap;
  overflow: hidden;
  
  padding-left: 10rem;
  border-right: 0.15em solid ${props => props.isDarkTheme ? 'white' : 'black'};
  animation: ${typing} 4s steps(40, end) infinite, ${blink} 0.75s step-end infinite;
  width: 24ch; /* Adjust to match the length of your text */
    box-sizing: border-box; /* Ensure padding and border are included in the width */
  
`;

const IconsContainer = styled.div`
  margin-top: 2rem;
  margin-left: 10rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 8px; /* Add this line for rounded corners */
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.2);
  }
`;

const Image = ({ isDarkTheme }) => {
  return (
    <HeroSectionContainer isDarkTheme={isDarkTheme}>
      <TypingContainer isDarkTheme={isDarkTheme}>Hi! I am Aakash</TypingContainer>
      <h1>  </h1>
      <TypingContainer isDarkTheme={isDarkTheme}>A Software Developer</TypingContainer>
      <IconsContainer>
     
      <a href='https://github.com/Skyhigh2574' target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
      </a>
      <a href='https://www.linkedin.com/in/aakash-shah-as759839284/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a phref='https://leetcode.com/aakash2528/' target="_blank" rel="noopener noreferrer">
          <img src={leetcode} alt="Leetcode" />
        </a>
      </IconsContainer>
      
    </HeroSectionContainer>
  );
};

export default Image;
