import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "FPGA-Based Drone Detection and Classification System Using YOLOv8n",
    category: "AI Acceleration on FPGA",
    tools: "Verilog, ZCU104, Zynq, Vivado, Vitis AI, YOLOv8n, PyTorch, ONNX",
    image: "/images/drone.jpeg",
  },
  {
    title: "Digital Alarm Clock (RTL-to-GDS Implementation)",
    category: "Physical Design",
    tools: "Cadence Genus, Innovus, NCLaunch, OpenROAD, Yosys",
    image: "/images/alarm.png",
  },
  {
    title: "RISC-V MAC ISA Extension",
    category: "RISC-V Architecture",
    tools: "RISC-V, Verilog, GNU Toolchain, Cadence Genus, Innovus",
    image: "/images/riscv.png",
  },
  {
    title: "2D FIR Filter Architecture Using CSD",
    category: "VLSI Design",
    tools: "Verilog, Vivado, MATLAB",
    image: "/images/fir.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev}>
            <MdArrowBack />
          </button>

          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content-vertical">

                    {/* IMAGE TOP */}
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>

                    {/* TEXT BELOW */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>

                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;