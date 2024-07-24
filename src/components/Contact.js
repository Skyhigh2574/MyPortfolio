import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.isDarkTheme ? 'rgb(17 24 39)': 'aliceblue'};
  color: ${props => props.isDarkTheme? 'white':'rgb(17 24 39)'};
  padding: 2rem 1rem;

  margin: 0 auto;
  text-align: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  margin: 0.5rem 0;
  font-size: 25px;
`;

const A = styled.a`
  color: 'blue' ;
  fontstyle:'underline',
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = ({isDarkTheme}) => (
  <Section isDarkTheme={isDarkTheme} id="contact">
    <h1>Contact</h1>
    <p>Feel free to reach out to me through the following methods:</p>
    <Ul>
      <Li>Email: <A href="mailto:aakash2528@gmail.com">aakash2528@gmail.com</A></Li>
      <Li>LinkedIn: <A href="https://www.linkedin.com/in/aakash-shah-as759839284/" target="_blank">My LinkedIn</A></Li>
      {/* Add more contact methods as needed */}
    </Ul>
  </Section>
);

export default Contact;