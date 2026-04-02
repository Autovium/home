const projectsData = [
    {
        id: "vision-cutter",
        title: "Vision-Guided Precision Cutter",
        category: "Industrial Automation",
        theme: { badgeBg: "bg-navy-500 text-white", highlightText: "text-emerald", highlightBg: "bg-emerald/5 border-emerald/20" },
        challenge: "Cutting elastic waistbands to precise lengths while compensating for complex material stretch.",
        solution: "A closed-loop system integrating <strong class='text-navy-400'>Machine Vision</strong> with PID control. We utilized a Samkoon PLC and Xinjie Servo System to dynamically adjust cutter timing based on real-time visual feedback.",
        outcome: "Increased process speed by <strong>100%</strong> and improved accuracy by <strong>86%</strong> compared to manual labor.",
        image: "uploads/Image_oxe55ooxe55ooxe5-e1766483236731.webp"
    },
    {
        id: "adhesive-robot",
        title: "Adhesive Dispensing Robot Control System",
        category: "Robotics & CNC",
        theme: { badgeBg: "bg-navy-300 text-white", highlightText: "text-navy-400", highlightBg: "bg-white border-slate-200 shadow-sm" },
        challenge: "Developing a custom control system for a 3-axis Cartesian robot to dispense adhesive dots following complex DXF patterns.",
        solution: "Engineered a cost-effective controller using Raspberry Pi and ESP32 running FluidNC. Wrote custom Python middleware to parse DXF files directly into G-code trajectories.",
        outcome: "Delivered advanced CNC functionality and custom pattern generation at a fraction of the cost of commercial dispensing robots.",
        image: "uploads/Gemini_Generated_Image_h779ioh779ioh779.webp"
    },
    {
        id: "motor-driver",
        title: "Custom Synchronous Motor Driver",
        category: "Power Electronics",
        theme: { badgeBg: "bg-emerald text-white", highlightText: "text-emerald", highlightBg: "bg-emerald/5 border-emerald/20" },
        challenge: "Reducing ventilation operational costs in trains by converting stationary fans to oscillating fans running on a specialized 110 VDC supply.",
        solution: "Designed a custom Sinusoidal Pulse Wave Modulation (SPWM) inverter driver from scratch. Handled the analog circuit design and PCB layout (KiCad) to handle the specific voltage requirements.",
        outcome: "Successfully enabled the retrofit of efficient oscillating fans, significantly reducing long-term energy consumption.",
        image: "uploads/Image_bw5yj0bw5yj0bw5y.webp"
    },
    {
        id: "iot-pressure",
        title: "IoT Pressure Monitoring System",
        category: "Industrial IoT",
        theme: { badgeBg: "bg-indigo-600 text-white", highlightText: "text-indigo-600", highlightBg: "bg-indigo-50 border-indigo-100" },
        challenge: "Lack of visibility into pneumatic ring pressure levels made maintenance investigative activities difficult and reactive.",
        solution: "Developed a wireless monitoring node using ESP32 to log real-time pressure data directly to Google Sheets via HTTP, creating a low-cost, accessible dashboard.",
        outcome: "Provided accurate data for root-cause analysis and sparked a factory-wide initiative for automated data collection.",
        image: "uploads/Image_svinwwsvinwwsvin-1.webp"
    }
];

const rndData = [
    {
        id: "stewart-platform",
        title: "High-Dynamic 6-DOF Platform",
        category: "Robotics & Simulation",
        theme: { badgeBg: "bg-accent text-navy-500", highlightText: "text-navy-500" },
        objective: "Designing a low-inertia Stewart Platform capable of high-frequency response for advanced simulation tasks.",
        hypothesis: "Replacing traditional screw drives with belt-actuated linear actuators will significantly minimize friction and moving mass, improving dynamic range.",
        image: "uploads/Gemini_Generated_Image_wo3k8qwo3k8qwo3k-scaled.webp"
    },
    {
        id: "ai-inspection",
        title: "AI-Powered Surface Inspection",
        category: "AI & Optics",
        theme: { badgeBg: "bg-navy-400 text-white", highlightText: "text-navy-400" },
        objective: "Automating quality control for \"boundary laminated fabric accessories\" where defects are subtle and datasets are scarce.",
        hypothesis: "A custom <strong class='text-navy-500'>Random Forest Classifier</strong> using pixel-level semantic segmentation can achieve high accuracy (99.95%) on mobile-grade processors without deep learning overhead.",
        image: "uploads/Image_ht1t0zht1t0zht11t-e1766488635553.webp"
    }
];
