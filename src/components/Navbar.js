import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroimage from '../Assets/heroimage.jpg';

const NavbarComponent = ({ toggleTheme, isDarkTheme }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="navbar-custom"
        style={{
          backgroundColor: isDarkTheme ? 'rgb(32 44 57)' : 'rgb(218, 234, 250)', // Dark theme or light theme background color
        }}
      >
        <div className="container-fluid">
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={heroimage}
              alt="Profile"
              style={{ width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer' }}
              className="me-2 mx-5"
              onClick={handleShow} // Handle click event
            />
            <span
              className={`ms-2 ${isDarkTheme ? 'text-white' : 'text-dark'}`}
              style={{ fontSize: '2rem', fontWeight: '700', fontStyle: 'italic' }}
            >
              Aakash Shah
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="home"
                smooth={true}
                duration={500}
                className={`${isDarkTheme ? 'text-white' : 'text-dark'} mx-3 nav-link-hover`}
                style={{ cursor: 'pointer' }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="about"
                smooth={true}
                duration={500}
                className={`${isDarkTheme ? 'text-white' : 'text-dark'} mx-3 nav-link-hover`}
                style={{ cursor: 'pointer' }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="work"
                smooth={true}
                duration={500}
                className={`${isDarkTheme ? 'text-white' : 'text-dark'} mx-3 nav-link-hover`}
                style={{ cursor: 'pointer' }}
              >
                Work Experience
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="projects"
                smooth={true}
                duration={500}
                className={`${isDarkTheme ? 'text-white' : 'text-dark'} mx-3 nav-link-hover`}
                style={{ cursor: 'pointer' }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="skills"
                smooth={true}
                duration={500}
                className={`${isDarkTheme ? 'text-white' : 'text-dark'} mx-3 nav-link-hover`}
                style={{ cursor: 'pointer' }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                className={`${isDarkTheme ? 'text-white' : 'text-dark'} mx-3 nav-link-hover`}
                style={{ cursor: 'pointer' }}
              >
                Contact
              </Nav.Link>
              <Button
                variant={isDarkTheme ? 'secondary' : 'outline-dark'}
                onClick={toggleTheme}
                className="ms-2"
                style={{ cursor: 'pointer' }}
              >
                {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Modal to show enlarged image */}
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Body className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgb(255, 255, 255, 0.2)' }}>
          <div style={{}}>
            <img
              src={heroimage}
              alt="Profile"
              className='img-fluid rounded-circle'
              style={{ width: '100vw', height : '60vh' }}
            />
          </div>
        </Modal.Body>
      </Modal>

      <style type="text/css">
        {`
          .custom-modal .modal-content {
            background-color: transparent;
            border: none;
          }
          
          .nav-link-hover:hover {
            background-color: ${isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
        `}
      </style>
    </>
  );
};

export default NavbarComponent;
