import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
        I am an M.Tech student in VLSI Design at VIT Chennai who enjoys turning ideas into working hardware. From writing RTL to seeing it go through the complete RTL-to-GDSII flow, I find the entire chip design process both challenging and rewarding.

I am particularly interested in the intersection of hardware and intelligence, where I work on FPGA-based systems, custom IP development, and AI model deployment. I like exploring how design decisions impact performance and continuously push myself to build systems that are not just functional, but efficient and well-optimized.
        </p>
      </div>
    </div>
  );
};

export default About;
