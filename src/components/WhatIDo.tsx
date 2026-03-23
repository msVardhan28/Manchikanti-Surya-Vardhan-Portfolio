import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>PHYSICAL DESIGN</h3>
              <p>
              <p>
Complete RTL-to-GDSII physical design flow including synthesis, floorplanning, 
placement, clock tree synthesis (CTS), routing, and timing closure using Cadence 
Genus and Innovus. Experience with open-source flows using OpenROAD and Yosys 
for advanced nodes such as ASAP7 (7nm) and Nangate45 (45nm).
</p>
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Cadence NCLaunch</div>
                <div className="what-tags">Cadence Genus</div>
                <div className="what-tags">Cadence Innovus</div>
                <div className="what-tags">TCL Scripting</div>
                <div className="what-tags">OpenROAD</div>
                <div className="what-tags">Yosys</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DIGITAL DESIGN,HARDWARE & IP DEVELOPMENT</h3>
              <h4>Design and implementation of digital systems using Verilog, 
including RTL design, simulation, and functional verification. Experience in 
developing reusable IP blocks and integrating them into larger systems. 
Hands-on exposure to FPGA-based prototyping, along with AI model deployment 
and hardware acceleration. Strong understanding of digital design principles, 
timing analysis, and system-level architecture.</h4>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Verilog</div>
                <div className="what-tags">ZCU104</div>
                <div className="what-tags">FPGA</div>
                <div className="what-tags">Zynq</div>
                <div className="what-tags">Xilinx Vivado</div>
                <div className="what-tags">YOLOv8n</div>
                <div className="what-tags">Pytorch</div>
                <div className="what-tags">ONNX</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
