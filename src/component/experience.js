import './experience.css';

export const Experience = () => (
  <section className="experience" id="experience">
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-year">2021</div>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Senior Python Developer</h3>
          <span>Scottech, Toledo</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="Technologies" >Technologies used: Python, OpenCV, Flask, TensorFlow, Keras , dlib, scikit-learn and SQL Server </p>

        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-year">2021</div>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3> Deep Learning Engineer Intern</h3>
          <span> Steros company , Sfax </span>
          <p> Developed a desktop facial recognition application integrated with a mobile interface via Flask API, enabling
            real-time identification.</p>
          <p className="Technologies" >Technologies used: Python, OpenCV, Flask, TensorFlow, Keras , dlib, scikit-learn and SQL Server </p>

        </div>
      </div>
    </div>
    <div className="social-life">
        <ul className="social-list">
        <li>Volunteer at XYZ Association</li>
        <li>Member of AI Club</li>
        <li>Sports: Basketball, Swimming</li>
        </ul>
  </div>
  </section>
);