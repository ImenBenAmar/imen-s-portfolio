import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.css';
import logo from '../assets/Logo.png';
import React, { useEffect, useState } from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkdin.png';
import emailIcon from '../assets/email.png';
import resume from '../assets/resume.pdf'; 


export const MyNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" variant="dark" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ml-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link href={resume} download="resume.pdf" className='navbar-link'>
               Resume                                                   
            </Nav.Link>                     
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://github.com/imenbenamar" target="_blank" rel="noopener noreferrer" className='social-icon-link'>
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/imen-benamar-616079212/" target="_blank" rel="noopener noreferrer" className='social-icon-link'>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a  href="mailto:imen.bnamar@gmail.com" className='social-icon-link'>
                <img src={emailIcon} alt="Email" />
              </a>
            </div>
              <button
                  className="btn btn-primary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="btn-text">Contact Me</span>
              </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};