import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import faceidentification from "../assets/identificationface.jpeg";
import chatbot from "../assets/chatbot.png";
import ecg from "../assets/Ecg.png";
import event from "../assets/event.png";
import conge from "../assets/congés.png";
import sign from "../assets/sign.png";
import portfilio from "../assets/Myprotfili.png";
import hospital from "../assets/hospital.png";
import sales from "../assets/sales.png";
import './Projects.css';

export const Projects = () => {
    const projects = [
        {
            title: "Face Identification",
            description: "This is a desktop application that uses face recognition to identify individuals.",
            imageUrl: faceidentification,
            link: "https://github.com/ImenBenAmar/face_identification"
        },
        {
            title: "PDF Chatbot intelligent with RAG",
            description: "This is a Retrieval-Augmented Generation (RAG) chatbot that answers questions based on PDF documents using Mistral, ChromaDB, and a Gradio interface.",
            imageUrl: chatbot,
            link: "https://github.com/ImenBenAmar/llm-rag-QA"
        },
        {
            title: "Intelligent System if diagnostic and interpretation of ECG ",
            description: "Developed a Flutter mobile application integrating two Deep Learning models in PyTorch for automatic ECG analysis via a Flask API",
            imageUrl: ecg,
            link: "https://github.com/ImenBenAmar/ECG-interpreter_DeepLearning"
        },
        {
            title: "Sign Language Detection ",
            description: "This project explores two distinct methods to recognize hand gestures and detect alphabets : Mediapipe and CNN",
            imageUrl: sign,
            link: "https://github.com/ImenBenAmar/Sign_language.git"
        }
    ];
    const projects2 = [
         {
            title: "Hospital Emergency Room Analytics Dashboard",
            description: "An end-to-end data analytics project built with Power BI, focused on enhancing decision-making in hospital emergency departments. The dashboard delivers real-time insights on patient flow",
            imageUrl: hospital,
            link: "https://github.com/ImenBenAmar/Dashbord_Hospital-emergency.git"
        },
        {
            title: "Sales_Analytics_dashbord",
            description: "A comprehensive sales analytics dashboard built with Power BI, designed to provide insights into sales performance, customer behavior, and market trends. This project showcases my ability to transform raw data into actionable insights for business growth.",
            imageUrl: sales,
            link: "https://github.com/ImenBenAmar/Sales_Analytics_dashbord.git"
        }
    
    ];

    const projects3 = [
         {
            title: "This Beautiful Portfolio",
            description: "This portfolio showcases my skills and projects, built with React and Bootstrap.",
            imageUrl: portfilio,
            link: "https://github.com/ImenBenAmar/My_Own_Portfilio"
        },
        {
            title: "Event Management System",
            description: "Created a web platform enabling complete event management: creation, registration, filtering, notifications,and centralized administration. Developed with PHP, MySQL, HTML/CSS, JavaScript, Bootstrap,and XAMPP,",
            imageUrl: event,
            link: "https://github.com/ImenBenAmar/Event-management.git"
        },
        {
            title: "Leave Management System ",
            description: " A web application that streamlines employee leave requests and approvals within an organization. Built with Java and Spring Boot, it features a user-friendly interface and efficient data handling.",
            imageUrl: conge,
            link: "https://github.com/ImenBenAmar/plateforme_gestion_congees.git"
        }
       
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are some of my projects that I have worked on.
                            Each project showcases my skills and creativity in different areas of AI.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">IA Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">BI Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">DEV Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                title={project.title}
                                                description={project.description}
                                                imageUrl={project.imageUrl}
                                                link={project.link}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects2.map((projects, index) => (
                                            <ProjectCard
                                                key={index}
                                                title={projects.title}
                                                description={projects.description}
                                                imageUrl={projects.imageUrl}
                                                link={projects.link}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects3.map((projects, index) => (
                                            <ProjectCard
                                                key={index}
                                                title={projects.title}
                                                description={projects.description}
                                                imageUrl={projects.imageUrl}
                                                link={projects.link}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};