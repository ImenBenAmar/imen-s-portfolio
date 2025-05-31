import './AboutMe.css';
import about from '../assets/imen2.png';
import locationIcon from '../assets/location.png'; 
import phoneIcon from '../assets/phone.png'; 
import { Container, Row, Col } from 'react-bootstrap';
import cv from '../assets/cv.png'; 
import resume from '../assets/resume.pdf'; 

export const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <img src={about} alt="About Me" />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">About Me</span>
                        <h2>Who I Am</h2>
                        <p>
                            I'm Imen Ben Amar, a passionate Data Engineering and Decision Systems student in my second year at ENET'Com, Sfax.
                            My journey in technology is driven by a deep fascination with Machine Learning, Deep Learning, and the transformative power of data science.
                        </p>
                        <p>
                            Currently based in Sfax, Tunisia, I specialize in developing intelligent systems that bridge the gap between complex data and real-world applications.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <img src={locationIcon} alt="Location Icon" className="icon" />
                                <a href="https://www.google.com/maps?q=Ain+km+6+Sfax,+Tunisia" target="_blank" rel="noopener noreferrer">
                                    ½ Ain km 6 Sfax, Tunisia
                                </a>
                            </div>
                            <div className="contact-item">
                                <img src={phoneIcon} alt="Phone Icon" className="icon" />
                                <span> + 216 54 479 420</span>
                            </div>
                            <div className="contact-item">
                                <img src={cv} alt="cv" className="icon" />
                                <a href={resume} download="resume.pdf">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};