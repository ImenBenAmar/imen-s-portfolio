import './skills.css';
import python from '../assets/python.png';
import R from '../assets/R.png';
import pytorch from '../assets/pytorch.png';
import Mysql from '../assets/mysql (1).png';
import TensorFlow from  '../assets/tenserflow.png';
import Scala from  '../assets/scala.png';
import git from  '../assets/git.png';
import sqlserver from  '../assets/sqlserver.png';


export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-header">
                <h2>Skills</h2>
                <p>Here are some of my technical and soft skills.</p>
            </div>
            <div className="skills-container">
                <div className="skills-section">
                    <h3>Technical Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <img src={TensorFlow} alt="TensorFlow" />
                            <span>TensorFlow</span>
                        </div>
                        <div className="skill-item">
                            <img src={R} alt="R" />
                            <span>R</span>
                        </div>
                        <div className="skill-item">
                            <img src={python} alt="python" />
                            <span>Python</span>
                        </div>
                        <div className="skill-item">
                            <img src={Scala} alt="Scala" />
                            <span>Scala</span>
                        </div>
                        <div className="skill-item">
                            <img src={git} alt="git" />
                            <span>git</span>
                        </div>
                        <div className="skill-item">
                            <img src={Mysql} alt="MySql" />
                            <span>MySql</span>
                        </div>
                        <div className="skill-item">
                            <img src={pytorch} alt="pytorch" />
                            <span>Pytorch</span>
                        </div>
                        <div className="skill-item">
                            <img src={sqlserver} alt="sqlserver" />
                            <span>sqlserver</span>
                        </div>
                        
                    </div>
                </div>
                <div className="skills-section">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Problem Solving</li>
                        <li>Critical Thinking</li>
                    </ul>
                </div>
                <div className="skills-section">
                    <h3>Languages</h3>
                    <ul>
                        <li>English (Intermediate)</li>
                        <li>French (Fluent)</li>
                        <li>Arabic (Native)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};