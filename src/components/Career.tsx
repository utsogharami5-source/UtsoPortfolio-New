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
                <h4>Higher Secondary Certificate (H.S.C)</h4>
                <h5>Rampal Govt. College, Bagerhat — Business Studies</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed H.S.C in Business Studies, building a strong foundation
              in analytical thinking and management principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BBA Honours — Management (3rd Year)</h4>
                <h5>Govt. Haji Mohammad Mohsin College, Khulna</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing BBA Honours in Management while self-teaching web
              development, Android app development, and workflow automation with
              n8n. Passionate about bridging academic learning with real-world
              tech projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
