import './experience.css';

export const Experience = () => (
  <section className="experience" id="experience">
    <div className="timeline-item">
      <div className="timeline-year">2025,July-August</div>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3> AIOPS Engineer Intern</h3>
        <span> Digital Innovation Partner , Sfax </span> 
        <p> An end-to-end pipeline for anomaly detection and root cause analysis (RCA) in distributed systems.
          It combines deep learning ,LLMs and graph-based techniques with classical anomaly detection methods on system metrics to deliver accurate detection and automatic explanations.</p>
        <p className="Technologies" >Technologies used: Mistral AI, Chronos T5 ,torch-geometric, Pytorch, MLflow , NLP (Glove , TFID), Streamlit ,Git / GitHub  and  Flask </p>

      </div>
    </div>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-year">2024,Feb-March</div>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Computer vision Engineer intern </h3>
          <span>Collaboration with hospital Habib Bourguiba , Sfax </span>
          <p>Developed a Flutter mobile application integrating two Deep Learning models in PyTorch for automatic
              ECG analysis via a Flask API. Generated an ECG image database from raw signals ,followed by implementation of a regression model to estimate clinical measurements, and
              a multi-label model to classify 5 cardiac pathologies with 91% accuracy.</p>
          <p className="Technologies" >Technologies used: Python, OpenCV, Flask , Pytorch, Flutter and ResNet</p>

        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-year">2023 , July</div>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3> Deep Learning Engineer Intern</h3>
          <span> Steros company , Sfax </span>
          <p> Developed a desktop facial recognition application integrated with a mobile interface via Flask API, enabling
            real-time identification.</p>
          <p className="Technologies" >Technologies used: Python, OpenCV,Flask, TensorFlow, Keras , dlib, scikit-learn , Flutter and SQL Server </p>

        </div>
      </div>
    </div>
    <div className="social-life">
        <ul className="social-list">
          <h3>Social Life</h3>
        <li>Volunteer at IEEE </li>
        <li>Member of google developer club</li>
        </ul>
  </div>
  </section>
);