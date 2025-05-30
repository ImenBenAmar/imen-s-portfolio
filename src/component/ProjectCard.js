import { Col } from "react-bootstrap";
import './Projects.css'; 


export const ProjectCard = ({ title, description, imageUrl, link }) => {
    return (
      <Col xs={12} sm={6} md={4} className="project-card">
        <div className="proj-imgbx">
        <img src={imageUrl} alt={title} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
        </Col>
    );
}
