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
    github: "https://github.com/AkshitKapoor18/axi4lite-uvm",
    status: "Project"
  },
  {
    title: "APB Master Verification",
    eyebrow: "Interface DV",
    description:
      "SystemVerilog verification environment for an APB master, including directed and randomized transaction checking.",
    tags: ["SystemVerilog", "APB", "Assertions", "Coverage"],
    highlights: [
      "APB transaction generation",
      "Protocol checking",
      "Functional coverage",
      "Simulation debug across simulators"
    ],
    github: "https://github.com/AkshitKapoor18/Design_Verification",
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
    github: "https://github.com/AkshitKapoor18/16bit-risc-processor",
    status: "Project"
  },
  {
    title: "Sensor Status Peripheral",
    eyebrow: "SoC Peripheral DV",
    description:
      "Memory-mapped sensor-status peripheral with battery, voltage and temperature registers plus status/alarm logic.",
    tags: ["SystemVerilog", "RTL", "UVM", "MMIO"],
    highlights: [
      "32-bit register interface",
      "Battery-low threshold logic",
      "Temperature alarm logic",
      "Native SoC bus integration and checking"
    ],
    github: "https://github.com/AkshitKapoor18/sensor-status-peripheral",
    status: "Component"
  },
  {
    title: "RF Telemetry Peripheral",
    eyebrow: "SoC Peripheral DV",
    description:
      "Memory-mapped RF telemetry block exposing RSSI and link-status information through the SoC peripheral subsystem.",
    tags: ["SystemVerilog", "RTL", "UVM", "MMIO"],
    highlights: [
      "Memory-mapped register access",
      "Native slave integration",
      "Read/write verification",
      "SoC-level routing checks"
    ],
    github: "https://github.com/AkshitKapoor18/rf-telemetry-peripheral",
    status: "Component"
  }
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