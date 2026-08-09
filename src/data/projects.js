export const projects = [
  {
    title: "RISCV-VDP-SoC",
    eyebrow: "Featured • SoC + DV",
    description:
      "RISC-V Video Display Processor System-on-Chip integrating PicoRV32, native memory routing, RAM, GPIO, RF telemetry, sensor status and VDP/VGA functionality.",
    tags: ["SystemVerilog", "UVM", "RISC-V", "AXI4-Lite", "SVA", "Formal"],
    highlights: [
      "PicoRV32 / RV32I CPU subsystem",
      "32-bit native SoC memory interface",
      "AXI4-Lite external control path",
      "UVM agents, monitor and scoreboard",
      "Assertions and SBY/SMT-based formal checks"
    ],
    github: "https://github.com/KapoorAkshit18/RISCV-VDP-SoC",
    status: "In progress"
  },
  {
    title: "AXI4-Lite UVM Verification",
    eyebrow: "Protocol DV",
    description:
      "UVM-based verification work focused on AXI4-Lite transactions, slave behavior, register access and reusable verification components.",
    tags: ["SystemVerilog", "UVM", "AXI4-Lite", "QuestaSim"],
    highlights: [
      "Sequence-driven read/write testing",
      "Driver and monitor architecture",
      "Scoreboard-based checking",
      "Protocol-oriented debug with waveforms"
    ],
    github: "https://github.com/KapoorAkshit18/axi4-lite-uvm-verification",
    status: "Project"
  },
  {
    title: "APB Verification",
    eyebrow: "Interface DV",
    description:
      "SystemVerilog verification environment for an APB, including directed and randomized transaction checking.",
    tags: ["SystemVerilog", "APB", "Assertions", "Coverage"],
    highlights: [
      "APB transaction generation",
      "Protocol checking",
      "Functional coverage",
      "Simulation debug across simulators"
    ],
    github: "https://github.com/KapoorAkshit18/Design_Verification",
    status: "Project"
  },
  {
    title: "16-bit RISC Processor",
    eyebrow: "RTL Design",
    description:
      "16-bit RISC processor RTL project covering datapath, control and instruction execution, with simulation and FPGA-oriented implementation.",
    tags: ["Verilog", "RTL", "ModelSim", "Vivado", "FPGA"],
    highlights: [
      "Datapath and control-unit design",
      "Instruction execution",
      "RTL simulation",
      "FPGA implementation workflow"
    ],
    github: "https://github.com/KapoorAkshit18/video_display_processor",
    status: "Project"
  },
{
title: "RTL to GDSII Flow of PicoRV32 Core",

eyebrow: "RTL to GDSII • Physical Design Basics",

description:
"Complete RTL-to-GDSII physical design flow of the PicoRV32 processor core using open-source EDA tools. The project covers RTL synthesis, floorplanning, power planning, placement, clock tree synthesis, routing, timing analysis, physical verification, and final GDSII generation.",

tags: ["RTL-to-GDSII", "Physical Design", "OpenLane", "OpenROAD"],

highlights: [
"RTL synthesis and gate-level netlist generation",
"Floorplanning, IO placement, and power distribution network",
"Standard-cell placement and congestion analysis",
"Clock tree synthesis (CTS) and clock skew optimization",
"Global and detailed routing with timing analysis",
"Setup/hold timing checks and critical-path analysis",
"DRC/LVS physical verification and final GDSII generation"
],

github: "https://github.com/KapoorAkshit18/nasscom-vsd-soc-design-workshop",

status: "Physical Design"
},

  // {
  //   title: "",
  //   eyebrow: "SoC Peripheral DV",
  //   description:
  //     "Memory-mapped RF telemetry block exposing RSSI and link-status information through the SoC peripheral subsystem.",
  //   tags: ["SystemVerilog", "RTL", "UVM", "MMIO"],
  //   highlights: [
  //     "Memory-mapped register access",
  //     "Native slave integration",
  //     "Read/write verification",
  //     "SoC-level routing checks"
  //   ],
  //   github: "https://github.com/AkshitKapoor18/",
  //   status: "Component"
  // }
];

export const skills = [
  ["SystemVerilog", "RTL + verification"],
  ["UVM", "Agents, sequences, monitors, scoreboards"],
  ["Assertions / SVA", "Protocol and design properties"],
  ["Functional Coverage", "Coverage-driven verification"],
  ["Formal Verification", "SBY + SMTBMC + Z3"],
  ["RISC-V", "PicoRV32 / RV32I integration"],
  ["AXI4-Lite", "Slave/control-path verification"],
  ["APB", "Master/interface verification"],
  ["QuestaSim", "Simulation + debug"],
  ["VCS / Verdi", "Simulation + waveform/debug"],
  ["Vivado", "FPGA implementation"],
  ["Yosys / OpenROAD", "Open-source RTL-to-GDS flow"]
];