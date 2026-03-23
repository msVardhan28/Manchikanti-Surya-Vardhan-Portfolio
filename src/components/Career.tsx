import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> 
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Tech in VLSI Design</h4>
                <h5>VIT Chennai</h5>
              </div>
              <h3>2025 - 2027</h3>
            </div>
            <p>
              M.Tech in VLSI Design at VIT Chennai with hands-on experience
  in custom FPGA IP core design on ZCU104 and complete RTL-to-GDS
  implementation using Cadence Genus, Innovus, and NCLaunch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Electronics and Communication Engineering</h4>
                <h5>CVR College of Engineering</h5>
              </div>
              <h3>2019 - 2023</h3>
            </div>
            <p>
              B.Tech in Electronics and Communication Engineering at CVR College of Engineering with hands-on experience
  in digital design and implementation using Verilog and design of FIR Filter Architecture Using CSD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (MPC)</h4>
                <h5>Narayana Junior College</h5>
              </div>
              <h3>2017 - 2019</h3>
            </div>
            <p>
              Percentage: 89.9% | Grade: A
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC (10th Grade)</h4>
                <h5>Narayana E Techno School</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              CGPA: 9.3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
