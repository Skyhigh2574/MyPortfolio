import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
`;

const Footer = () => (
  <FooterWrapper>
    <p style={{ fontSize:30 }}> Thank you for Visiting ! </p>
  </FooterWrapper>
);

export default Footer;