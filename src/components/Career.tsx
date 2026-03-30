import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Mobile Developer</h4>
                <h5>S4AI</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Building high-performance cross-platform apps using Flutter & Dart with clean UI and smooth user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Firebase & Backend Integration</h4>
                <h5>S4AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Integrated Firebase Authentication and Firestore for secure login and real-time data handling in mobile apps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>REST API Integration</h4>
                <h5>S4AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed API-driven apps with async handling, JSON parsing, and seamless data flow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX & State Management</h4>
                <h5>S4AI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
Designed responsive UIs with Material Design and managed app state efficiently using Provider.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
