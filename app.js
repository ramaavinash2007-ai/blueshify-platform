/**
 * BLUESHIFY ENTERPRISE PLATFORM - CLIENT APPLICATION ENGINE
 * Autonomous Ocean & River Plastic Cleanup Robotics Network Across India
 */

// ============================================================================
// 1. EMBEDDED ENTERPRISE DATA STORE (Self-contained & Sync-capable)
// ============================================================================
const blueshifyState = {
  metrics: {
    totalCleanedKg: 184520.4,
    totalCleanedTons: 184.52,
    activeFleets: 48,
    idleFleets: 14,
    maintenanceFleets: 6,
    totalFleetSize: 68
  },
  regionalHubs: [
    {
      id: "hub-mum-01",
      code: "HUB-MUMBAI-01",
      name: "Mumbai Coastal & Port Ops Base",
      waterbody: "Arabian Sea / Mahim Bay / Thane Creek",
      state: "Maharashtra",
      lat: 19.0760,
      lng: 72.8777,
      activeDrones: 14,
      totalCollectedKg: 58420.0,
      leadManager: "Aditya Sharma"
    },
    {
      id: "hub-var-01",
      code: "HUB-VARANASI-01",
      name: "Varanasi Ganga River Hub",
      waterbody: "River Ganga (Assi Ghat to Rajghat)",
      state: "Uttar Pradesh",
      lat: 25.3176,
      lng: 83.0064,
      activeDrones: 11,
      totalCollectedKg: 44180.0,
      leadManager: "Rohan Verma"
    },
    {
      id: "hub-del-01",
      code: "HUB-DELHI-01",
      name: "Delhi Yamuna River Corridor Hub",
      waterbody: "River Yamuna (Wazirabad to Okhla Barrage)",
      state: "Delhi NCR",
      lat: 28.6139,
      lng: 77.2410,
      activeDrones: 9,
      totalCollectedKg: 39750.0,
      leadManager: "Vikram Singh"
    },
    {
      id: "hub-kol-01",
      code: "HUB-KOLKATA-01",
      name: "Kolkata Hooghly Estuary Station",
      waterbody: "River Hooghly (Lower Ganga Basin)",
      state: "West Bengal",
      lat: 22.5726,
      lng: 88.3639,
      activeDrones: 7,
      totalCollectedKg: 21890.0,
      leadManager: "Sneha Mukherjee"
    },
    {
      id: "hub-koc-01",
      code: "HUB-KOCHI-01",
      name: "Kochi Vembanad Lake & Port Hub",
      waterbody: "Vembanad Backwaters & Cochin Harbor",
      state: "Kerala",
      lat: 9.9312,
      lng: 76.2673,
      activeDrones: 5,
      totalCollectedKg: 12340.0,
      leadManager: "Karthik Menon"
    },
    {
      id: "hub-viz-01",
      code: "HUB-VIZAG-01",
      name: "Visakhapatnam Bay Shelf Station",
      waterbody: "Bay of Bengal Coastal Shelf",
      state: "Andhra Pradesh",
      lat: 17.6868,
      lng: 83.2185,
      activeDrones: 2,
      totalCollectedKg: 4620.0,
      leadManager: "Harish Rao"
    },
    {
      id: "hub-guw-01",
      code: "HUB-GUWAHATI-01",
      name: "Guwahati Brahmaputra Rapid Hub",
      waterbody: "River Brahmaputra (Uzanbazar)",
      state: "Assam",
      lat: 26.1445,
      lng: 91.7362,
      activeDrones: 0,
      totalCollectedKg: 3320.4,
      leadManager: "Ananya Das"
    }
  ],
  cleanupZones: [
    {
      id: "zone-1",
      code: "ZONE-MUM-MAHIM",
      name: "Mahim Bay & Mithi River Outflow",
      hubId: "hub-mum-01",
      region: "Mumbai, Maharashtra",
      polygon: [
        [19.030, 72.820],
        [19.055, 72.825],
        [19.060, 72.855],
        [19.035, 72.850]
      ],
      densityScore: "9.2 / 10",
      flowVelocity: "1.4 knots (Tidal)",
      priority: "CRITICAL",
      drones: 8
    },
    {
      id: "zone-2",
      code: "ZONE-VAR-GHATS",
      name: "Dashashwamedh to Assi Ghat Corridor",
      hubId: "hub-var-01",
      region: "Varanasi, Uttar Pradesh",
      polygon: [
        [25.295, 82.990],
        [25.335, 83.005],
        [25.340, 83.025],
        [25.300, 83.015]
      ],
      densityScore: "8.5 / 10",
      flowVelocity: "2.1 knots",
      priority: "HIGH",
      drones: 7
    },
    {
      id: "zone-3",
      code: "ZONE-DEL-OKHLA",
      name: "ITO Barrage to Okhla River Zone",
      hubId: "hub-del-01",
      region: "Delhi NCR",
      polygon: [
        [28.580, 77.235],
        [28.630, 77.250],
        [28.635, 77.280],
        [28.585, 77.270]
      ],
      densityScore: "9.8 / 10",
      flowVelocity: "0.9 knots",
      priority: "CRITICAL",
      drones: 7
    },
    {
      id: "zone-4",
      code: "ZONE-KOL-HOWRAH",
      name: "Howrah Port to Princep Ghat Waterway",
      hubId: "hub-kol-01",
      region: "Kolkata, West Bengal",
      polygon: [
        [22.550, 88.330],
        [22.590, 88.345],
        [22.595, 88.375],
        [22.555, 88.365]
      ],
      densityScore: "8.0 / 10",
      flowVelocity: "2.4 knots",
      priority: "HIGH",
      drones: 5
    },
    {
      id: "zone-5",
      code: "ZONE-KOC-VEMB",
      name: "Vembanad North Sanctuary Basin",
      hubId: "hub-koc-01",
      region: "Kochi, Kerala",
      polygon: [
        [9.910, 76.220],
        [9.960, 76.240],
        [9.965, 76.280],
        [9.915, 76.270]
      ],
      densityScore: "6.8 / 10",
      flowVelocity: "1.2 knots",
      priority: "MODERATE",
      drones: 4
    }
  ],
  drones: [
    {
      id: "BSF-001",
      code: "BSF-MUM-001",
      name: "Surface Unit Alpha-1",
      model: "Surface Unit / 01",
      hub: "Mumbai Coastal & Port Ops Base",
      hubId: "hub-mum-01",
      status: "ACTIVE_WORKING",
      lat: 19.0415,
      lng: 72.8340,
      battery: 88,
      batteryVoltage: "51.4 V",
      batteryTemp: "28.4°C",
      batteryCycles: 142,
      containerCapacityKg: 120,
      currentPayloadKg: 89.5,
      containerPct: 75,
      speedKnots: 2.3,
      heading: 134,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Priya Nair",
      lastMaintenance: "2026-08-15"
    },
    {
      id: "BSF-002",
      code: "BSF-MUM-002",
      name: "OceanSweeper Titan-X",
      model: "OceanSweeper Heavy",
      hub: "Mumbai Coastal & Port Ops Base",
      hubId: "hub-mum-01",
      status: "ACTIVE_WORKING",
      lat: 19.0525,
      lng: 72.8420,
      battery: 72,
      batteryVoltage: "49.8 V",
      batteryTemp: "31.2°C",
      batteryCycles: 210,
      containerCapacityKg: 350,
      currentPayloadKg: 298.0,
      containerPct: 85,
      speedKnots: 3.1,
      heading: 210,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Aditya Sharma",
      lastMaintenance: "2026-07-28"
    },
    {
      id: "BSF-003",
      code: "BSF-MUM-003",
      name: "Surface Unit Beta-2",
      model: "Surface Unit / 01",
      hub: "Mumbai Coastal & Port Ops Base",
      hubId: "hub-mum-01",
      status: "IDLE_STANDBY",
      lat: 19.0760,
      lng: 72.8777,
      battery: 100,
      batteryVoltage: "54.2 V",
      batteryTemp: "24.5°C",
      batteryCycles: 48,
      containerCapacityKg: 120,
      currentPayloadKg: 0.0,
      containerPct: 0,
      speedKnots: 0.0,
      heading: 0,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Farhan Qureshi",
      lastMaintenance: "2026-08-30"
    },
    {
      id: "BSF-004",
      code: "BSF-MUM-004",
      name: "Surface Unit Gamma-1",
      model: "Surface Unit / 01",
      hub: "Mumbai Coastal & Port Ops Base",
      hubId: "hub-mum-01",
      status: "UNDER_MAINTENANCE",
      lat: 19.0780,
      lng: 72.8795,
      battery: 45,
      batteryVoltage: "46.1 V",
      batteryTemp: "36.8°C",
      batteryCycles: 380,
      containerCapacityKg: 120,
      currentPayloadKg: 12.0,
      containerPct: 10,
      speedKnots: 0.0,
      heading: 0,
      sensors: { lidar: "DEGRADED", opticalCamera: "OPTIMAL", sonar: "CALIBRATION_REQUIRED", gpsRtk: "OPTIMAL", turbidity: "OFFLINE" },
      assignedPilot: "Karthik Menon",
      lastMaintenance: "2026-09-09"
    },
    {
      id: "BSF-005",
      code: "BSF-VAR-001",
      name: "RiverSkimmer Ganga-1",
      model: "RiverSkimmer V4",
      hub: "Varanasi Ganga River Hub",
      hubId: "hub-var-01",
      status: "ACTIVE_WORKING",
      lat: 25.3090,
      lng: 83.0112,
      battery: 91,
      batteryVoltage: "52.0 V",
      batteryTemp: "27.1°C",
      batteryCycles: 168,
      containerCapacityKg: 180,
      currentPayloadKg: 154.6,
      containerPct: 86,
      speedKnots: 1.9,
      heading: 78,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Rohan Verma",
      lastMaintenance: "2026-08-20"
    },
    {
      id: "BSF-006",
      code: "BSF-VAR-002",
      name: "RiverSkimmer Ganga-2",
      model: "RiverSkimmer V4",
      hub: "Varanasi Ganga River Hub",
      hubId: "hub-var-01",
      status: "ACTIVE_WORKING",
      lat: 25.3210,
      lng: 83.0045,
      battery: 84,
      batteryVoltage: "50.8 V",
      batteryTemp: "29.3°C",
      batteryCycles: 240,
      containerCapacityKg: 180,
      currentPayloadKg: 112.3,
      containerPct: 62,
      speedKnots: 2.1,
      heading: 112,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Rohan Verma",
      lastMaintenance: "2026-08-10"
    },
    {
      id: "BSF-007",
      code: "BSF-VAR-003",
      name: "MicroSieve Ganga Sentry",
      model: "MicroSieve Alpha",
      hub: "Varanasi Ganga River Hub",
      hubId: "hub-var-01",
      status: "ACTIVE_WORKING",
      lat: 25.3295,
      lng: 83.0180,
      battery: 95,
      batteryVoltage: "53.1 V",
      batteryTemp: "25.0°C",
      batteryCycles: 72,
      containerCapacityKg: 80,
      currentPayloadKg: 62.0,
      containerPct: 78,
      speedKnots: 1.4,
      heading: 95,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Ananya Das",
      lastMaintenance: "2026-08-25"
    },
    {
      id: "BSF-008",
      code: "BSF-VAR-004",
      name: "RiverSkimmer Ganga-3",
      model: "RiverSkimmer V4",
      hub: "Varanasi Ganga River Hub",
      hubId: "hub-var-01",
      status: "IDLE_STANDBY",
      lat: 25.3176,
      lng: 83.0064,
      battery: 98,
      batteryVoltage: "53.8 V",
      batteryTemp: "26.0°C",
      batteryCycles: 15,
      containerCapacityKg: 180,
      currentPayloadKg: 0.0,
      containerPct: 0,
      speedKnots: 0.0,
      heading: 0,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Sneha Mukherjee",
      lastMaintenance: "2026-09-02"
    },
    {
      id: "BSF-009",
      code: "BSF-DEL-001",
      name: "Yamuna Skimmer-1",
      model: "RiverSkimmer V4",
      hub: "Delhi Yamuna River Corridor Hub",
      hubId: "hub-del-01",
      status: "ACTIVE_WORKING",
      lat: 28.6010,
      lng: 77.2510,
      battery: 78,
      batteryVoltage: "50.2 V",
      batteryTemp: "30.4°C",
      batteryCycles: 205,
      containerCapacityKg: 180,
      currentPayloadKg: 172.5,
      containerPct: 96,
      speedKnots: 1.7,
      heading: 160,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Vikram Singh",
      lastMaintenance: "2026-08-14"
    },
    {
      id: "BSF-010",
      code: "BSF-DEL-002",
      name: "Surface Unit Yamuna-1",
      model: "Surface Unit / 01",
      hub: "Delhi Yamuna River Corridor Hub",
      hubId: "hub-del-01",
      status: "UNDER_MAINTENANCE",
      lat: 28.6139,
      lng: 77.2410,
      battery: 52,
      batteryVoltage: "47.8 V",
      batteryTemp: "34.0°C",
      batteryCycles: 410,
      containerCapacityKg: 120,
      currentPayloadKg: 22.0,
      containerPct: 18,
      speedKnots: 0.0,
      heading: 0,
      sensors: { lidar: "OFFLINE", opticalCamera: "DEGRADED", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Vikram Singh",
      lastMaintenance: "2026-09-08"
    },
    {
      id: "BSF-011",
      code: "BSF-DEL-003",
      name: "Yamuna Skimmer-2",
      model: "RiverSkimmer V4",
      hub: "Delhi Yamuna River Corridor Hub",
      hubId: "hub-del-01",
      status: "ACTIVE_WORKING",
      lat: 28.5890,
      lng: 77.2620,
      battery: 87,
      batteryVoltage: "51.1 V",
      batteryTemp: "29.0°C",
      batteryCycles: 130,
      containerCapacityKg: 180,
      currentPayloadKg: 94.0,
      containerPct: 52,
      speedKnots: 2.0,
      heading: 180,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Farhan Qureshi",
      lastMaintenance: "2026-08-28"
    },
    {
      id: "BSF-012",
      code: "BSF-KOL-001",
      name: "Hooghly Titan Sweeper",
      model: "OceanSweeper Heavy",
      hub: "Kolkata Hooghly Estuary Station",
      hubId: "hub-kol-01",
      status: "ACTIVE_WORKING",
      lat: 22.5680,
      lng: 88.3490,
      battery: 89,
      batteryVoltage: "51.5 V",
      batteryTemp: "27.8°C",
      batteryCycles: 185,
      containerCapacityKg: 350,
      currentPayloadKg: 245.0,
      containerPct: 70,
      speedKnots: 2.8,
      heading: 195,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Sneha Mukherjee",
      lastMaintenance: "2026-08-18"
    },
    {
      id: "BSF-013",
      code: "BSF-KOL-002",
      name: "RiverSkimmer Hooghly-1",
      model: "RiverSkimmer V4",
      hub: "Kolkata Hooghly Estuary Station",
      hubId: "hub-kol-01",
      status: "IDLE_STANDBY",
      lat: 22.5726,
      lng: 88.3639,
      battery: 97,
      batteryVoltage: "53.6 V",
      batteryTemp: "25.2°C",
      batteryCycles: 80,
      containerCapacityKg: 180,
      currentPayloadKg: 0.0,
      containerPct: 0,
      speedKnots: 0.0,
      heading: 0,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Sneha Mukherjee",
      lastMaintenance: "2026-08-31"
    },
    {
      id: "BSF-014",
      code: "BSF-KOC-001",
      name: "Vembanad Sentry-1",
      model: "Surface Unit / 01",
      hub: "Kochi Vembanad Lake & Port Hub",
      hubId: "hub-koc-01",
      status: "ACTIVE_WORKING",
      lat: 9.9420,
      lng: 76.2480,
      battery: 94,
      batteryVoltage: "52.8 V",
      batteryTemp: "28.0°C",
      batteryCycles: 95,
      containerCapacityKg: 120,
      currentPayloadKg: 102.8,
      containerPct: 86,
      speedKnots: 2.2,
      heading: 320,
      sensors: { lidar: "OPTIMAL", opticalCamera: "OPTIMAL", sonar: "OPTIMAL", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Karthik Menon",
      lastMaintenance: "2026-08-22"
    },
    {
      id: "BSF-015",
      code: "BSF-KOC-002",
      name: "MicroSieve Backwaters-1",
      model: "MicroSieve Alpha",
      hub: "Kochi Vembanad Lake & Port Hub",
      hubId: "hub-koc-01",
      status: "UNDER_MAINTENANCE",
      lat: 9.9312,
      lng: 76.2673,
      battery: 60,
      batteryVoltage: "48.2 V",
      batteryTemp: "32.0°C",
      batteryCycles: 275,
      containerCapacityKg: 80,
      currentPayloadKg: 10.0,
      containerPct: 13,
      speedKnots: 0.0,
      heading: 0,
      sensors: { lidar: "OPTIMAL", opticalCamera: "CALIBRATION_REQUIRED", sonar: "DEGRADED", gpsRtk: "OPTIMAL", turbidity: "OPTIMAL" },
      assignedPilot: "Karthik Menon",
      lastMaintenance: "2026-09-07"
    }
  ],
  environmentalLogs: [
    { id: "LOG-001", date: "2026-09-09", time: "14:32", droneCode: "BSF-MUM-001", hubName: "Mumbai Coastal & Port Ops Base", region: "Maharashtra", plasticType: "PET_BOTTLES", weightKg: 420.5, density: "Type 1 / High Density Flotation", partner: "Recykal Circular India", status: "Processed & Baled" },
    { id: "LOG-002", date: "2026-09-09", time: "11:15", droneCode: "BSF-MUM-002", hubName: "Mumbai Coastal & Port Ops Base", region: "Maharashtra", plasticType: "GHOST_FISHING_NETS", weightKg: 680.0, density: "Type 4 / Submerged Heavy Nylon", partner: "Central Marine Fisheries Research (CMFRI)", status: "Repurposed to Geosynthetics" },
    { id: "LOG-003", date: "2026-09-08", time: "16:45", droneCode: "BSF-VAR-001", hubName: "Varanasi Ganga River Hub", region: "Uttar Pradesh", plasticType: "MACRO_DEBRIS_STYROFOAM", weightKg: 530.0, density: "Type 6 / Expanded Polystyrene", partner: "Indian Pollution Control Association", status: "Extruded & Compressed" },
    { id: "LOG-004", date: "2026-09-08", time: "09:20", droneCode: "BSF-VAR-003", hubName: "Varanasi Ganga River Hub", region: "Uttar Pradesh", plasticType: "MICROPLASTICS", weightKg: 115.4, density: "Type 7 / 0.3mm-5mm Micro-pellets", partner: "IIT BHU Water Technologies Lab", status: "Spectroscopy & Biochar Synthesis" },
    { id: "LOG-005", date: "2026-09-07", time: "15:10", droneCode: "BSF-DEL-001", hubName: "Delhi Yamuna River Corridor Hub", region: "Delhi NCR", plasticType: "HDPE_CONTAINERS", weightKg: 610.8, density: "Type 2 / Rigid Polyethylene", partner: "Delhi Recyclers Cooperative", status: "Pelletized for Industrial Pallets" },
    { id: "LOG-006", date: "2026-09-06", time: "13:00", droneCode: "BSF-KOL-001", hubName: "Kolkata Hooghly Estuary Station", region: "West Bengal", plasticType: "PET_BOTTLES", weightKg: 740.0, density: "Type 1 / High Density Flotation", partner: "Bengal Eco Plastics Foundation", status: "Flaked for Geotextiles" },
    { id: "LOG-007", date: "2026-09-05", time: "10:30", droneCode: "BSF-KOC-001", hubName: "Kochi Vembanad Lake & Port Hub", region: "Kerala", plasticType: "GHOST_FISHING_NETS", weightKg: 485.0, density: "Type 4 / Submerged Heavy Nylon", partner: "Kerala Coastal Waste Foundation", status: "Sorted & Handed Over" }
  ],
  hardwareInventory: [
    { id: "part-1", partNumber: "SEN-LIDAR-VLP16", name: "Puck 360 Marine LiDAR Scanner", category: "Sensors", criticality: "CRITICAL", stock: 8, threshold: 5, unitCostInr: 345000, unitCostUsd: 4150, supplier: "Velodyne / Hesai", status: "Adequate Stock" },
    { id: "part-2", partNumber: "SEN-CAM-IMX477", name: "Sony IMX Dual AI Debris Vision Camera", category: "Sensors", criticality: "CRITICAL", stock: 24, threshold: 10, unitCostInr: 68000, unitCostUsd: 820, supplier: "Sony Industrial Marine", status: "Healthy Stock" },
    { id: "part-3", partNumber: "SEN-SNR-MB120", name: "Norbit Multibeam Depth Sonar Sensor", category: "Sensors", criticality: "HIGH", stock: 3, threshold: 4, unitCostInr: 490000, unitCostUsd: 5900, supplier: "Norbit Marine Acoustics", status: "REORDER REQUIRED" },
    { id: "part-4", partNumber: "MOT-THR-T200", name: "Brushless Thruster Motor (T200 IP68)", category: "Propulsion", criticality: "CRITICAL", stock: 38, threshold: 15, unitCostInr: 28500, unitCostUsd: 345, supplier: "BlueRobotics Subsea", status: "Healthy Stock" },
    { id: "part-5", partNumber: "BAT-LIFEPO4-48V", name: "48V 100Ah Marine LiFePO4 Battery Pack", category: "Energy", criticality: "CRITICAL", stock: 7, threshold: 8, unitCostInr: 142000, unitCostUsd: 1710, supplier: "Exide Marine Power Labs", status: "REORDER REQUIRED" },
    { id: "part-6", partNumber: "STR-HULL-CFK", name: "Carbon-Kevlar Catamaran Modular Hull", category: "Structural", criticality: "HIGH", stock: 5, threshold: 3, unitCostInr: 275000, unitCostUsd: 3310, supplier: "AeroHydro Pune", status: "Adequate Stock" },
    { id: "part-7", partNumber: "FLT-CONV-MESH", name: "Titanium-Polymer Mesh Conveyor Belt", category: "Filtration", criticality: "HIGH", stock: 19, threshold: 8, unitCostInr: 42000, unitCostUsd: 505, supplier: "Bengal Conveyors Ltd", status: "Healthy Stock" },
    { id: "part-8", partNumber: "NAV-RTK-GPS", name: "Multi-band RTK GNSS Receiver Module", category: "Sensors", criticality: "HIGH", stock: 16, threshold: 6, unitCostInr: 85000, unitCostUsd: 1025, supplier: "U-Blox Marine Navigation", status: "Healthy Stock" }
  ],
  manufacturingPipeline: [
    { id: "mfg-1", serialNumber: "BSF-MFG-26Q3-088", model: "OceanSweeper Heavy", stage: "DESIGN", batch: "BATCH-26Q3", unitCostInr: 1480000, targetHub: "Visakhapatnam Bay Shelf Station", leadEngineer: "Priya Nair", notes: "Hydrodynamic computational fluid dynamics complete. Wave swell simulations running." },
    { id: "mfg-2", serialNumber: "BSF-MFG-26Q3-089", model: "RiverSkimmer V4", stage: "ASSEMBLY", batch: "BATCH-26Q3", unitCostInr: 940000, targetHub: "Varanasi Ganga River Hub", leadEngineer: "Sneha Mukherjee", notes: "Catamaran hull bonded. Installing brushless thrusters and power distribution board." },
    { id: "mfg-3", serialNumber: "BSF-MFG-26Q2-090", model: "Surface Unit / 01", stage: "QA_TESTING", batch: "BATCH-26Q2", unitCostInr: 780000, targetHub: "Delhi Yamuna River Corridor Hub", leadEngineer: "Farhan Qureshi", notes: "48-hr flume tank endurance test: Obstacle perception score 99.7%." },
    { id: "mfg-4", serialNumber: "BSF-MFG-26Q2-091", model: "MicroSieve Alpha", stage: "QA_TESTING", batch: "BATCH-26Q2", unitCostInr: 650000, targetHub: "Kochi Vembanad Lake & Port Hub", leadEngineer: "Karthik Menon", notes: "Acoustic microplastic vibration test verified at 120Hz." },
    { id: "mfg-5", serialNumber: "BSF-MFG-26Q1-092", model: "Surface Unit / 01", stage: "DEPLOYED", batch: "BATCH-26Q1", unitCostInr: 780000, targetHub: "Mumbai Coastal & Port Ops Base", leadEngineer: "Aditya Sharma", notes: "In active service at Mahim Bay since August 2026." }
  ],
  financials: {
    contracts: [
      { id: "CTR-NMCG-01", client: "National Mission for Clean Ganga (NMCG)", type: "Govt Waterway Restoration", valueInr: "₹2.80 Cr", valueUsd: "$337,300", duration: "Oct 2025 - Mar 2027", status: "Active Milestone 3" },
      { id: "CTR-TATA-CSR", client: "Tata Sustainability Foundation", type: "Corporate CSR Plastic Offsets", valueInr: "₹1.45 Cr", valueUsd: "$174,600", duration: "Jan 2026 - Dec 2026", status: "Active Annual" },
      { id: "CTR-VERRA-CR", client: "Verra Ocean Plastic Credits Registry", type: "Certified Plastic Credit Sales", valueInr: "₹1.95 Cr", valueUsd: "$234,900", duration: "Apr 2026 - Apr 2027", status: "Quarterly Issuance" }
    ]
  },
  workforce: [
    { id: "emp-001", code: "BSF-EMP-001", name: "Aditya Sharma", category: "MANAGEMENT", role: "VP of Operations & Coastal Strategy", hubId: "hub-mum-01", hubName: "Mumbai Coastal & Port Ops Base", shift: "General Day", dronesUnderWatch: 20 },
    { id: "emp-002", code: "BSF-EMP-002", name: "Priya Nair", category: "TECHNICAL", role: "Lead Autonomy & SLAM Systems Engineer", hubId: "hub-mum-01", hubName: "Mumbai Coastal & Port Ops Base", shift: "General Day", dronesUnderWatch: 14 },
    { id: "emp-003", code: "BSF-EMP-003", name: "Rohan Verma", category: "MANAGEMENT", role: "Regional Hub Director (Ganga Basin)", hubId: "hub-var-01", hubName: "Varanasi Ganga River Hub", shift: "General Day", dronesUnderWatch: 15 },
    { id: "emp-004", code: "BSF-EMP-004", name: "Sneha Mukherjee", category: "TECHNICAL", role: "Embedded Perception & LiDAR Architect", hubId: "hub-kol-01", hubName: "Kolkata Hooghly Estuary Station", shift: "General Day", dronesUnderWatch: 15 },
    { id: "emp-005", code: "BSF-EMP-005", name: "Karthik Menon", category: "FIELD_MAINTENANCE", role: "Senior Marine Hydrodynamics Technician", hubId: "hub-koc-01", hubName: "Kochi Vembanad Lake & Port Hub", shift: "Morning River (06:00 - 14:00)", dronesUnderWatch: 12 },
    { id: "emp-006", code: "BSF-EMP-006", name: "Vikram Singh", category: "TECHNICAL", role: "Chief Drone Mission Pilot (Yamuna Corridor)", hubId: "hub-del-01", hubName: "Delhi Yamuna River Corridor Hub", shift: "Morning River (06:00 - 14:00)", dronesUnderWatch: 15 },
    { id: "emp-007", code: "BSF-EMP-007", name: "Farhan Qureshi", category: "FIELD_MAINTENANCE", role: "Field Battery & Thruster Specialist", hubId: "hub-mum-01", hubName: "Mumbai Coastal & Port Ops Base", shift: "Night Coastal Patrol (22:00 - 06:00)", dronesUnderWatch: 8 },
    { id: "emp-008", code: "BSF-EMP-008", name: "Ananya Das", category: "TECHNICAL", role: "Cloud IoT & Real-time Telemetry Engineer", hubId: "hub-guw-01", hubName: "Guwahati Brahmaputra Rapid Hub", shift: "General Day", dronesUnderWatch: 10 }
  ]
};

// Global References
let leafletMap = null;
let droneMarkers = {};
let hubMarkers = {};
let zoneLayers = {};
let pnlChartInstance = null;
let costChartInstance = null;
let scaleChartInstance = null;
let currentSelectedDrone = null;

// ============================================================================
// 2. INITIALIZATION & TAB SWITCHING
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Tab Navigation
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(button => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });
  }

  // Mobile App Simulator Toggle
  document.getElementById("open-simulator-btn").addEventListener("click", openSimulator);

  // Initialize Modules
  renderOverviewHubs();
  renderOverviewAlerts();
  initLeafletMap();
  renderCleanupZoneCards();
  renderFleetRoster();
  renderPolymerBreakdown();
  renderCollectionLogs();
  renderManufacturingKanban();
  renderHardwareInventory();
  renderWorkforceDirectory();
  renderContracts();
  populateModalDropdowns();

  // Initialize Charts
  initFinancialCharts();
  initScaleChart();

  // Setup Interactive Filter Listeners
  setupEventListeners();

  // Start Live Telemetry Simulation Loop
  startLiveTelemetryTicker();
});

function switchTab(tabId) {
  // Update sidebar active classes
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  // Update content tabs
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });

  const activeContent = document.getElementById(`tab-${tabId}`);
  if (activeContent) {
    activeContent.classList.add("active");
  }

  // Update breadcrumb
  const breadcrumbTitles = {
    overview: "Overview Dashboard",
    geospatial: "Geospatial Operations (India Region)",
    fleet: "Fleet & Diagnostics Management",
    impact: "Environmental Impact Metrics",
    manufacturing: "Drone Manufacturing & Hardware Inventory",
    financials: "Financials & Sales P&L Tracker",
    workforce: "Workforce & Regional Hub Directory"
  };
  document.getElementById("active-breadcrumb").textContent = breadcrumbTitles[tabId] || "Dashboard";

  // Re-invalidate map if opening map tab
  if (tabId === "geospatial" && leafletMap) {
    setTimeout(() => {
      leafletMap.invalidateSize();
    }, 200);
  }

  // Close mobile nav if open
  document.getElementById("sidebar").classList.remove("mobile-open");

  // Recreate icons
  if (window.lucide) window.lucide.createIcons();
}

// ============================================================================
// 3. GEOSPATIAL & LEAFLET MAP MODULE (India Region)
// ============================================================================
function initLeafletMap() {
  const mapElement = document.getElementById("leaflet-map");
  if (!mapElement) return;

  // Center on India [Latitude, Longitude]
  leafletMap = L.map('leaflet-map', {
    zoomControl: true,
    attributionControl: false
  }).setView([21.5000, 81.5000], 5);

  // High-contrast Sleek Oceanic Dark Map Tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    subdomains: 'abcd'
  }).addTo(leafletMap);

  // 1. Plot Regional Hub Beacons
  blueshifyState.regionalHubs.forEach(hub => {
    const hubIcon = L.divIcon({
      className: 'hub-custom-marker',
      html: `
        <div class="hub-beacon" title="${hub.name}">
          <div class="hub-beacon-center"></div>
        </div>
      `,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    const marker = L.marker([hub.lat, hub.lng], { icon: hubIcon }).addTo(leafletMap);
    marker.bindPopup(`
      <div style="background: #0b1e32; color: #f0f7ff; padding: 12px; border-radius: 8px; font-family: 'Space Grotesk', sans-serif; font-size: 13px;">
        <div style="color: #b8d83e; font-size: 11px; font-weight: 700; text-transform: uppercase;">Regional Operational Hub</div>
        <strong style="font-size: 14px; color: #ffffff; display: block; margin-top: 2px;">${hub.name}</strong>
        <div style="color: #00e5ff; font-size: 12px; margin-top: 4px;">${hub.waterbody}</div>
        <div style="margin-top: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
          <div>Active Drones: <b style="color: #00e5ff;">${hub.activeDrones} Units</b></div>
          <div>Total Cleared: <b style="color: #b8d83e;">${hub.totalCollectedKg.toLocaleString()} kg</b></div>
        </div>
        <div style="margin-top: 6px; font-size: 11px; color: #8da2ba;">Hub Lead: ${hub.leadManager}</div>
      </div>
    `);
    hubMarkers[hub.id] = marker;
  });

  // 2. Plot Protected Cleanup Polygons (River corridors & coastal bays)
  blueshifyState.cleanupZones.forEach(zone => {
    const polygon = L.polygon(zone.polygon, {
      color: zone.priority === 'CRITICAL' ? '#00e5ff' : '#10b981',
      weight: 2,
      dashArray: '5, 6',
      fillColor: zone.priority === 'CRITICAL' ? '#00e5ff' : '#10b981',
      fillOpacity: 0.16
    }).addTo(leafletMap);

    polygon.bindPopup(`
      <div style="background: #071524; color: #f0f7ff; padding: 10px; border-radius: 6px; font-size: 12px;">
        <div style="color: #00e5ff; font-weight: 700;">${zone.code}</div>
        <strong>${zone.name}</strong>
        <div style="margin-top: 4px;">Debris Density: <b>${zone.densityScore}</b></div>
        <div>Flow Velocity: <b>${zone.flowVelocity}</b></div>
        <div>Patrolling Drones: <b>${zone.drones} Active</b></div>
      </div>
    `);
    zoneLayers[zone.id] = polygon;
  });

  // 3. Plot Active Drone Markers
  renderDroneMapMarkers();

  // Setup Recenter button
  document.getElementById("center-india-btn").addEventListener("click", () => {
    leafletMap.flyTo([21.5000, 81.5000], 5, { duration: 1.2 });
  });

  // Quick Basin Filter Buttons
  document.querySelectorAll(".map-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const basin = btn.getAttribute("data-basin");
      switch (basin) {
        case "GANGA":
          leafletMap.flyTo([25.3176, 83.0064], 13, { duration: 1.2 });
          break;
        case "YAMUNA":
          leafletMap.flyTo([28.6139, 77.2410], 12, { duration: 1.2 });
          break;
        case "MUMBAI":
          leafletMap.flyTo([19.0520, 72.8420], 12, { duration: 1.2 });
          break;
        case "KOLKATA":
          leafletMap.flyTo([22.5726, 88.3550], 13, { duration: 1.2 });
          break;
        case "KOCHI":
          leafletMap.flyTo([9.9400, 76.2550], 13, { duration: 1.2 });
          break;
        default:
          leafletMap.flyTo([21.5000, 81.5000], 5, { duration: 1.2 });
      }
    });
  });
}

function renderDroneMapMarkers() {
  if (!leafletMap) return;

  blueshifyState.drones.forEach(drone => {
    let color = "#00e5ff"; // Active cyan
    if (drone.status === "IDLE_STANDBY") color = "#94a3b8";
    if (drone.status === "UNDER_MAINTENANCE") color = "#f59e0b";

    const droneIcon = L.divIcon({
      className: 'drone-custom-marker',
      html: `
        <svg class="drone-svg-icon" viewBox="0 0 24 24" fill="${color}" style="transform: rotate(${drone.heading}deg);">
          <path d="M12 2L2 22l10-4 10 4L12 2z"/>
        </svg>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    if (droneMarkers[drone.id]) {
      droneMarkers[drone.id].setLatLng([drone.lat, drone.lng]);
      droneMarkers[drone.id].setIcon(droneIcon);
    } else {
      const marker = L.marker([drone.lat, drone.lng], { icon: droneIcon }).addTo(leafletMap);
      marker.on('click', () => {
        openTelemetryModal(drone.id);
      });
      droneMarkers[drone.id] = marker;
    }
  });
}

function renderCleanupZoneCards() {
  const container = document.getElementById("cleanup-zones-card-grid");
  if (!container) return;

  container.innerHTML = blueshifyState.cleanupZones.map(z => `
    <div class="kpi-card" style="border-left: 4px solid ${z.priority === 'CRITICAL' ? 'var(--accent-cyan)' : 'var(--accent-emerald)'};">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span style="font-size: 0.7rem; color: var(--accent-lime); font-family: var(--font-mono); font-weight: 700;">${z.code}</span>
          <h4 style="font-size: 1rem; color: #fff; margin-top: 2px;">${z.name}</h4>
          <span style="font-size: 0.78rem; color: var(--text-dim);">${z.region}</span>
        </div>
        <span class="status-badge ${z.priority === 'CRITICAL' ? 'critical' : 'working'}">${z.priority}</span>
      </div>
      <div style="margin-top: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 10px;">
        <div>Density Index: <b style="color: #fff;">${z.densityScore}</b></div>
        <div>Flow Speed: <b style="color: #fff;">${z.flowVelocity}</b></div>
        <div>Drones Assigned: <b style="color: var(--accent-cyan);">${z.drones} Units</b></div>
        <div>Status: <b style="color: var(--accent-lime);">Continuous Patrol</b></div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// 4. FLEET & TELEMETRY MODULE
// ============================================================================
function renderFleetRoster() {
  const tbody = document.getElementById("fleet-roster-table-body");
  if (!tbody) return;

  const searchVal = (document.getElementById("fleet-search-input")?.value || "").toLowerCase();
  const statusFilter = document.getElementById("fleet-status-filter")?.value || "ALL";

  let filtered = blueshifyState.drones.filter(d => {
    const matchSearch = d.code.toLowerCase().includes(searchVal) ||
                        d.name.toLowerCase().includes(searchVal) ||
                        d.hub.toLowerCase().includes(searchVal) ||
                        d.assignedPilot.toLowerCase().includes(searchVal);
    const matchStatus = statusFilter === "ALL" || d.status === statusFilter;
    return matchSearch && matchStatus;
  });

  tbody.innerHTML = filtered.map(d => {
    let statusClass = "working";
    let statusText = "Active Skimming";
    if (d.status === "IDLE_STANDBY") { statusClass = "idle"; statusText = "Idle / Docked"; }
    if (d.status === "UNDER_MAINTENANCE") { statusClass = "maintenance"; statusText = "Maintenance"; }

    let batteryColor = "fill-cyan";
    if (d.battery < 50) batteryColor = "fill-amber";
    if (d.battery < 25) batteryColor = "fill-crimson";

    let containerColor = "fill-emerald";
    if (d.containerPct > 80) containerColor = "fill-amber";

    return `
      <tr>
        <td>
          <div class="table-code">${d.code}</div>
          <div style="font-size: 0.75rem; color: var(--text-dim);">${d.name}</div>
        </td>
        <td><strong style="color: #fff;">${d.model}</strong></td>
        <td>${d.hub}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill ${batteryColor}" style="width: ${d.battery}%;"></div>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.78rem;">${d.battery}%</span>
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill ${containerColor}" style="width: ${d.containerPct}%;"></div>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.78rem;">${d.currentPayloadKg}/${d.containerCapacityKg} kg</span>
          </div>
        </td>
        <td>
          <span style="font-size: 0.75rem; color: ${d.sensors.lidar === 'OPTIMAL' ? 'var(--accent-emerald)' : 'var(--accent-crimson)'}; font-weight: 700;">
            LiDAR: ${d.sensors.lidar}
          </span>
        </td>
        <td>${d.assignedPilot}</td>
        <td>
          <button class="btn-outline" style="padding: 4px 8px; font-size: 0.75rem;" onclick="openTelemetryModal('${d.id}')">
            Diagnostics
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openTelemetryModal(droneId) {
  const drone = blueshifyState.drones.find(d => d.id === droneId);
  if (!drone) return;

  currentSelectedDrone = drone;
  document.getElementById("modal-drone-name").textContent = `${drone.name} (${drone.code}) - Telemetry Diagnostics`;

  const modalBody = document.getElementById("modal-drone-body");
  modalBody.innerHTML = `
    <!-- Top Telemetry Strip -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
      <div style="background: rgba(7, 21, 36, 0.8); padding: 10px; border-radius: 6px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.68rem; color: var(--text-dim); text-transform: uppercase;">Battery Charge</span>
        <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: var(--accent-cyan);">${drone.battery}%</div>
        <small style="color: var(--text-muted); font-size: 0.7rem;">${drone.batteryVoltage} · ${drone.batteryTemp}</small>
      </div>

      <div style="background: rgba(7, 21, 36, 0.8); padding: 10px; border-radius: 6px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.68rem; color: var(--text-dim); text-transform: uppercase;">Container Fill</span>
        <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: var(--accent-lime);">${drone.containerPct}%</div>
        <small style="color: var(--text-muted); font-size: 0.7rem;">${drone.currentPayloadKg} / ${drone.containerCapacityKg} kg</small>
      </div>

      <div style="background: rgba(7, 21, 36, 0.8); padding: 10px; border-radius: 6px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.68rem; color: var(--text-dim); text-transform: uppercase;">Speed / Heading</span>
        <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #fff;">${drone.speedKnots} kts</div>
        <small style="color: var(--text-muted); font-size: 0.7rem;">Heading: ${drone.heading}° E</small>
      </div>

      <div style="background: rgba(7, 21, 36, 0.8); padding: 10px; border-radius: 6px; border: 1px solid var(--border-subtle);">
        <span style="font-size: 0.68rem; color: var(--text-dim); text-transform: uppercase;">Battery Cycles</span>
        <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #fff;">${drone.batteryCycles}</div>
        <small style="color: var(--text-emerald); font-size: 0.7rem;">Life: Optimal</small>
      </div>
    </div>

    <!-- Sensor Array Diagnostic Card -->
    <div style="background: rgba(7, 21, 36, 0.6); padding: 14px; border-radius: 8px; border: 1px solid var(--border-subtle);">
      <h4 style="font-size: 0.85rem; color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.08em;">
        Sensor Diagnostic Array
      </h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.8rem;">
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">
          <span>Velodyne LiDAR VLP-16:</span>
          <b style="color: ${drone.sensors.lidar === 'OPTIMAL' ? 'var(--accent-emerald)' : 'var(--accent-crimson)'};">${drone.sensors.lidar}</b>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">
          <span>Sony IMX AI Vision:</span>
          <b style="color: ${drone.sensors.opticalCamera === 'OPTIMAL' ? 'var(--accent-emerald)' : 'var(--accent-crimson)'};">${drone.sensors.opticalCamera}</b>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">
          <span>Norbit Multibeam Sonar:</span>
          <b style="color: ${drone.sensors.sonar === 'OPTIMAL' ? 'var(--accent-emerald)' : 'var(--accent-amber)'};">${drone.sensors.sonar}</b>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">
          <span>Centimeter RTK GPS:</span>
          <b style="color: var(--accent-emerald);">${drone.sensors.gpsRtk}</b>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">
          <span>Sediment Turbidity Meter:</span>
          <b style="color: ${drone.sensors.turbidity === 'OPTIMAL' ? 'var(--accent-emerald)' : 'var(--accent-crimson)'};">${drone.sensors.turbidity}</b>
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 4px;">
          <span>Shore Link Telemetry:</span>
          <b style="color: var(--accent-emerald);">4G LTE + Satellite Fallback</b>
        </div>
      </div>
    </div>

    <!-- Maintenance Log Snippet -->
    <div style="background: rgba(7, 21, 36, 0.6); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle); font-size: 0.8rem;">
      <span style="font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase;">Latest Service Event</span>
      <p style="color: var(--text-main); margin-top: 4px;">
        Last serviced on <b>${drone.lastMaintenance}</b> by <b>${drone.assignedPilot}</b>. Hydrodynamic thrusters calibrated and seal vacuum tested to IP68.
      </p>
    </div>
  `;

  document.getElementById("telemetry-modal").classList.add("open");

  // Wire up status toggle button inside modal
  const actionBtn = document.getElementById("modal-service-action-btn");
  if (actionBtn) {
    if (drone.status === "ACTIVE_WORKING") {
      actionBtn.textContent = "Recall to Docking Cradle";
      actionBtn.onclick = () => {
        drone.status = "IDLE_STANDBY";
        renderFleetRoster();
        renderDroneMapMarkers();
        closeTelemetryModal();
        alert(`${drone.code} recalled to ${drone.hub}. Charging initiated.`);
      };
    } else {
      actionBtn.textContent = "Deploy Autonomous Mission";
      actionBtn.onclick = () => {
        drone.status = "ACTIVE_WORKING";
        renderFleetRoster();
        renderDroneMapMarkers();
        closeTelemetryModal();
        alert(`${drone.code} dispatched on autonomous skimming mission.`);
      };
    }
  }
}

function closeTelemetryModal() {
  document.getElementById("telemetry-modal").classList.remove("open");
}

function openScheduleServiceModal() {
  alert("Maintenance Work Order Form: Technician notified to inspect docking cradles.");
}

// ============================================================================
// 5. ENVIRONMENTAL IMPACT MODULE
// ============================================================================
function renderPolymerBreakdown() {
  const container = document.getElementById("polymer-breakdown-cards");
  if (!container) return;

  const polymers = [
    { title: "PET Bottles & Flasks", weight: "68,450 kg", pct: "37.1%", density: "Type 1 / High Flotation", color: "var(--accent-cyan)", note: "Beverage packaging concentrated at river bends." },
    { title: "HDPE Rigid Containers", weight: "44,210 kg", pct: "24.0%", density: "Type 2 / Polyethylene", color: "var(--accent-blue)", note: "Drums & detergent jugs intercepted upstream." },
    { title: "Ghost Fishing Nets", weight: "36,980 kg", pct: "20.0%", density: "Type 4 / Submerged Nylon", color: "var(--accent-emerald)", note: "Discarded monofilament gillnets in coastal bays." },
    { title: "Macro Styrofoam", weight: "24,720 kg", pct: "13.4%", density: "Type 6 / EPS Foam", color: "var(--accent-lime)", note: "Festival float blocks and packaging insulation." },
    { title: "Microplastics (<5mm)", weight: "10,160 kg", pct: "5.5%", density: "Type 7 / Acoustic Sieving", color: "var(--accent-amber)", note: "Surface degradation fragments captured by MicroSieve." }
  ];

  container.innerHTML = polymers.map(p => `
    <div class="kpi-card" style="border-top: 3px solid ${p.color};">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h4 style="font-size: 0.95rem; color: #fff;">${p.title}</h4>
        <span style="font-size: 1.1rem; font-weight: 700; color: ${p.color}; font-family: var(--font-mono);">${p.pct}</span>
      </div>
      <div style="font-size: 1.5rem; font-weight: 700; color: #fff; font-family: var(--font-mono); margin-top: 6px;">
        ${p.weight}
      </div>
      <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; margin-top: 4px;">${p.density}</div>
      <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 8px;">${p.note}</p>
    </div>
  `).join('');
}

function renderCollectionLogs() {
  const tbody = document.getElementById("collection-logs-table-body");
  if (!tbody) return;

  const droneFilter = (document.getElementById("log-drone-filter")?.value || "").toLowerCase();
  const regionFilter = document.getElementById("log-region-filter")?.value || "ALL";
  const densityFilter = document.getElementById("log-density-filter")?.value || "ALL";

  let filtered = blueshifyState.environmentalLogs.filter(l => {
    const matchDrone = l.droneCode.toLowerCase().includes(droneFilter);
    const matchRegion = regionFilter === "ALL" || l.region === regionFilter;
    const matchDensity = densityFilter === "ALL" || l.plasticType === densityFilter;
    return matchDrone && matchRegion && matchDensity;
  });

  tbody.innerHTML = filtered.map(l => `
    <tr>
      <td class="table-code">${l.id}</td>
      <td>${l.date} <span style="color: var(--text-dim); font-size: 0.75rem;">${l.time}</span></td>
      <td><strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${l.droneCode}</strong></td>
      <td>${l.hubName} <span style="font-size: 0.72rem; color: var(--text-dim);">(${l.region})</span></td>
      <td><span style="font-weight: 600; color: #fff;">${l.plasticType.replace('_', ' ')}</span></td>
      <td><strong style="color: var(--accent-lime); font-family: var(--font-mono);">${l.weightKg} KG</strong></td>
      <td>${l.partner}</td>
      <td><span class="status-badge working">${l.status}</span></td>
    </tr>
  `).join('');
}

function openAddHandoverModal() {
  const select = document.getElementById("modal-handover-drone");
  if (select) {
    select.innerHTML = blueshifyState.drones.map(d => `<option value="${d.code}">${d.code} - ${d.name} (${d.hub})</option>`).join('');
  }
  document.getElementById("handover-modal").classList.add("open");
}

function closeHandoverModal() {
  document.getElementById("handover-modal").classList.remove("open");
}

function submitHandoverLog() {
  const droneCode = document.getElementById("modal-handover-drone").value;
  const density = document.getElementById("modal-handover-density").value;
  const weightKg = parseFloat(document.getElementById("modal-handover-kg").value) || 250;
  const partner = document.getElementById("modal-handover-partner").value || "Recykal Circular Solutions";

  const drone = blueshifyState.drones.find(d => d.code === droneCode);
  const newLog = {
    id: `LOG-${Date.now().toString().slice(-4)}`,
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    droneCode,
    hubName: drone ? drone.hub : "Varanasi Ganga River Hub",
    region: drone ? drone.hub.split(' ')[0] : "Uttar Pradesh",
    plasticType: density,
    weightKg,
    density: "Audited Weighbridge Record",
    partner,
    status: "Processed & Baled"
  };

  blueshifyState.environmentalLogs.unshift(newLog);
  blueshifyState.metrics.totalCleanedKg += weightKg;
  blueshifyState.metrics.totalCleanedTons = Math.round((blueshifyState.metrics.totalCleanedKg / 1000) * 100) / 100;

  renderCollectionLogs();
  updateOdometerDisplay();
  closeHandoverModal();
  alert(`Handover of ${weightKg} KG from ${droneCode} successfully recorded!`);
}

function exportImpactLogsCSV() {
  let csvContent = "data:text/csv;charset=utf-8,LogID,Date,Time,DroneCode,HubName,Region,PlasticType,WeightKG,Partner,Status\n";
  blueshifyState.environmentalLogs.forEach(l => {
    csvContent += `"${l.id}","${l.date}","${l.time}","${l.droneCode}","${l.hubName}","${l.region}","${l.plasticType}",${l.weightKg},"${l.partner}","${l.status}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `blueshify_plastic_collection_logs_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ============================================================================
// 6. MANUFACTURING & HARDWARE INVENTORY MODULE
// ============================================================================
function renderManufacturingKanban() {
  const stages = ["DESIGN", "ASSEMBLY", "QA_TESTING", "DEPLOYED"];
  
  stages.forEach(stage => {
    const listEl = document.getElementById(`cards-stage-${stage.toLowerCase().replace('_', '')}`);
    const countEl = document.getElementById(`cnt-stage-${stage.toLowerCase().replace('_', '')}`);
    if (!listEl) return;

    const units = blueshifyState.manufacturingPipeline.filter(u => u.stage === stage);
    if (countEl) countEl.textContent = units.length;

    listEl.innerHTML = units.map(u => `
      <div class="kanban-card">
        <div class="kanban-card-top">
          <span class="kanban-serial">${u.serialNumber}</span>
          <span style="font-size: 0.72rem; color: var(--accent-lime); font-family: var(--font-mono);">${u.batch}</span>
        </div>
        <div class="kanban-model">${u.model}</div>
        <p class="kanban-notes">${u.notes}</p>
        <div class="kanban-meta-row">
          <span>Cost: ₹${(u.unitCostInr / 100000).toFixed(1)}L</span>
          <span style="color: var(--accent-cyan);">${u.targetHub.split(' ')[0]}</span>
        </div>
        <div style="margin-top: 10px; display: flex; justify-content: flex-end;">
          <button class="btn-outline" style="padding: 3px 8px; font-size: 0.7rem;" onclick="advancePipelineUnit('${u.id}')">
            Advance Stage &rarr;
          </button>
        </div>
      </div>
    `).join('');
  });
}

function advancePipelineUnit(unitId) {
  const unit = blueshifyState.manufacturingPipeline.find(u => u.id === unitId);
  if (!unit) return;

  const flow = ["DESIGN", "ASSEMBLY", "QA_TESTING", "DEPLOYED"];
  const currIndex = flow.indexOf(unit.stage);
  if (currIndex < flow.length - 1) {
    unit.stage = flow[currIndex + 1];
    renderManufacturingKanban();
    alert(`Unit ${unit.serialNumber} advanced to ${unit.stage}!`);
  } else {
    alert(`Unit ${unit.serialNumber} is already deployed in active service.`);
  }
}

function openNewBatchModal() {
  const serial = `BSF-MFG-26Q4-0${blueshifyState.manufacturingPipeline.length + 90}`;
  const newUnit = {
    id: `mfg-${Date.now()}`,
    serialNumber: serial,
    model: "RiverSkimmer V4",
    stage: "DESIGN",
    batch: "BATCH-26Q4",
    unitCostInr: 920000,
    targetHub: "Kolkata Hooghly Estuary Station",
    leadEngineer: "Sneha Mukherjee",
    notes: "Commenced composite frame hydro-forming."
  };
  blueshifyState.manufacturingPipeline.push(newUnit);
  renderManufacturingKanban();
  alert(`Started build for new unit ${serial} in Design stage!`);
}

function renderHardwareInventory() {
  const tbody = document.getElementById("inventory-table-body");
  if (!tbody) return;

  tbody.innerHTML = blueshifyState.hardwareInventory.map(item => {
    const isLow = item.stock <= item.threshold;
    return `
      <tr>
        <td class="table-code">${item.partNumber}</td>
        <td><strong style="color: #fff;">${item.name}</strong></td>
        <td>${item.category}</td>
        <td>
          <span style="font-size: 0.75rem; font-weight: 700; color: ${item.criticality === 'CRITICAL' ? 'var(--accent-crimson)' : 'var(--accent-amber)'};">
            ${item.criticality}
          </span>
        </td>
        <td>
          <span style="font-family: var(--font-mono); font-weight: 700; font-size: 1rem; color: ${isLow ? 'var(--accent-crimson)' : '#fff'};">
            ${item.stock} units
          </span>
        </td>
        <td>${item.threshold}</td>
        <td>
          <div style="font-family: var(--font-mono); color: #fff;">₹${item.unitCostInr.toLocaleString()}</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">$${item.unitCostUsd} USD</div>
        </td>
        <td>${item.supplier}</td>
        <td>
          <span class="status-badge ${isLow ? 'critical' : 'working'}">
            ${isLow ? 'REORDER REQUIRED' : 'Adequate'}
          </span>
        </td>
        <td>
          <button class="btn-outline" style="padding: 4px 8px; font-size: 0.72rem;" onclick="restockPart('${item.id}')">
            Restock (+5)
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function restockPart(partId) {
  const item = blueshifyState.hardwareInventory.find(i => i.id === partId);
  if (!item) return;

  item.stock += 5;
  renderHardwareInventory();
  alert(`Successfully restocked 5 units of ${item.name}. New stock: ${item.stock}`);
}

function initScaleChart() {
  const ctx = document.getElementById("mfgScaleChart");
  if (!ctx) return;

  scaleChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["2025 Q1", "2025 Q2", "2025 Q3", "2025 Q4", "2026 Q1", "2026 Q2", "2026 Q3 (Current)"],
      datasets: [
        {
          label: "Unit Manufacturing Cost (₹ Lakhs)",
          data: [12.5, 11.0, 9.8, 8.9, 8.2, 7.8, 7.4],
          borderColor: '#00e5ff',
          backgroundColor: 'rgba(0, 229, 255, 0.1)',
          fill: true,
          tension: 0.35,
          yAxisID: 'y'
        },
        {
          label: "Cumulative Fleet Deployed",
          data: [8, 18, 32, 46, 56, 64, 68],
          borderColor: '#b8d83e',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.35,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#8da2ba' }
        },
        y: {
          position: 'left',
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#00e5ff', callback: val => `₹${val}L` }
        },
        y1: {
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: { color: '#b8d83e', callback: val => `${val} Drones` }
        }
      },
      plugins: {
        legend: { labels: { color: '#f0f7ff' } }
      }
    }
  });
}

// ============================================================================
// 7. FINANCIALS & SALES P&L MODULE
// ============================================================================
function initFinancialCharts() {
  // 1. Monthly Revenue vs Hardware/Maintenance Losses Chart
  const pnlCtx = document.getElementById("financialPnlChart");
  if (pnlCtx) {
    pnlChartInstance = new Chart(pnlCtx, {
      type: 'bar',
      data: {
        labels: ["Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"],
        datasets: [
          {
            label: "Monthly Sales Revenue (₹ Lakhs)",
            data: [58.0, 69.0, 74.0, 89.0, 112.0, 82.0],
            backgroundColor: '#00e5ff',
            borderRadius: 4
          },
          {
            label: "Hardware / Maint Losses (₹ Lakhs)",
            data: [12.0, 14.5, 16.0, 13.5, 17.0, 11.6],
            backgroundColor: '#ef4444',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#8da2ba' }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#8da2ba', callback: val => `₹${val}L` }
          }
        },
        plugins: {
          legend: { labels: { color: '#f0f7ff' } }
        }
      }
    });
  }

  // 2. Cost Breakdown Donut Chart
  const costCtx = document.getElementById("costBreakdownChart");
  if (costCtx) {
    costChartInstance = new Chart(costCtx, {
      type: 'doughnut',
      data: {
        labels: [
          "Sensors & Perception (28%)",
          "LiFePO4 Energy Packs (20%)",
          "Carbon Hull & Structure (18%)",
          "Thruster Propulsion (16%)",
          "Engineering & Labor (12%)",
          "Overhead & Hub Logistics (6%)"
        ],
        datasets: [{
          data: [28, 20, 18, 16, 12, 6],
          backgroundColor: [
            '#00e5ff',
            '#0077b6',
            '#10b981',
            '#b8d83e',
            '#f59e0b',
            '#64748b'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#f0f7ff', boxWidth: 12, font: { size: 11 } }
          }
        }
      }
    });
  }
}

function renderContracts() {
  const tbody = document.getElementById("contracts-table-body");
  if (!tbody) return;

  tbody.innerHTML = blueshifyState.financials.contracts.map(c => `
    <tr>
      <td class="table-code">${c.id}</td>
      <td><strong style="color: #fff;">${c.client}</strong></td>
      <td>${c.type}</td>
      <td>
        <span style="font-family: var(--font-mono); color: var(--accent-lime); font-weight: 700;">${c.valueInr}</span>
        <span style="font-size: 0.72rem; color: var(--text-dim);">(${c.valueUsd})</span>
      </td>
      <td>${c.duration}</td>
      <td><span class="status-badge working">${c.status}</span></td>
    </tr>
  `).join('');
}

// ============================================================================
// 8. WORKFORCE & HR DIRECTORY MODULE
// ============================================================================
function renderWorkforceDirectory() {
  const tbody = document.getElementById("workforce-table-body");
  if (!tbody) return;

  const searchVal = (document.getElementById("workforce-search-input")?.value || "").toLowerCase();
  const catFilter = document.getElementById("workforce-category-filter")?.value || "ALL";
  const hubFilter = document.getElementById("workforce-hub-filter")?.value || "ALL";

  let filtered = blueshifyState.workforce.filter(emp => {
    const matchSearch = emp.name.toLowerCase().includes(searchVal) ||
                        emp.role.toLowerCase().includes(searchVal) ||
                        emp.code.toLowerCase().includes(searchVal);
    const matchCat = catFilter === "ALL" || emp.category === catFilter;
    const matchHub = hubFilter === "ALL" || emp.hubId === hubFilter;
    return matchSearch && matchCat && matchHub;
  });

  tbody.innerHTML = filtered.map(emp => {
    let catBadge = "badge-cyan";
    if (emp.category === "MANAGEMENT") catBadge = "badge-lime";
    if (emp.category === "FIELD_MAINTENANCE") catBadge = "badge-amber";

    return `
      <tr>
        <td class="table-code">${emp.code}</td>
        <td><strong style="color: #fff;">${emp.name}</strong></td>
        <td><span class="nav-badge ${catBadge}">${emp.category.replace('_', ' ')}</span></td>
        <td>${emp.role}</td>
        <td><span style="color: var(--accent-cyan); font-weight: 500;">${emp.hubName}</span></td>
        <td>${emp.shift}</td>
        <td><span style="font-family: var(--font-mono); font-weight: 700;">${emp.dronesUnderWatch} units</span></td>
        <td>
          <button class="btn-outline" style="padding: 4px 8px; font-size: 0.72rem;" onclick="openAssignModal('${emp.id}')">
            Reassign Hub
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAssignModal(empId) {
  const select = document.getElementById("assign-employee-select");
  if (select) {
    select.innerHTML = blueshifyState.workforce.map(e => `
      <option value="${e.id}" ${e.id === empId ? 'selected' : ''}>
        ${e.name} (${e.role}) - Current: ${e.hubName}
      </option>
    `).join('');
  }
  document.getElementById("assign-modal").classList.add("open");
}

function closeAssignModal() {
  document.getElementById("assign-modal").classList.remove("open");
}

function submitStaffAssignment() {
  const empId = document.getElementById("assign-employee-select").value;
  const hubId = document.getElementById("assign-hub-select").value;
  const shift = document.getElementById("assign-shift-select").value;

  const emp = blueshifyState.workforce.find(e => e.id === empId);
  const hub = blueshifyState.regionalHubs.find(h => h.id === hubId);

  if (emp && hub) {
    emp.hubId = hub.id;
    emp.hubName = hub.name;
    emp.shift = shift;

    renderWorkforceDirectory();
    closeAssignModal();
    alert(`Successfully reassigned ${emp.name} to ${hub.name} (${shift})!`);
  }
}

// ============================================================================
// 9. OVERVIEW TAB HELPERS & MODALS
// ============================================================================
function renderOverviewHubs() {
  const tbody = document.getElementById("overview-hubs-table-body");
  if (!tbody) return;

  tbody.innerHTML = blueshifyState.regionalHubs.slice(0, 5).map(h => `
    <tr>
      <td class="table-code">${h.code}</td>
      <td><strong style="color: #fff;">${h.waterbody}</strong></td>
      <td><span style="font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 700;">${h.activeDrones} Units</span></td>
      <td><span style="font-family: var(--font-mono); color: var(--accent-lime);">${h.totalCollectedKg.toLocaleString()} kg</span></td>
      <td><span class="status-badge working">Active Patrolling</span></td>
    </tr>
  `).join('');
}

function renderOverviewAlerts() {
  const container = document.getElementById("overview-alerts-list");
  if (!container) return;

  const alerts = [
    { title: "LiDAR Optics Obscured", drone: "BSF-DEL-002", hub: "Delhi Yamuna Corridor", time: "8 mins ago", desc: "Chemical foam residue on sensor glass. Unit docked at Wazirabad cradle." },
    { title: "High Tidal Flotsam Swarm", drone: "BSF-MUM-002", hub: "Mumbai Mahim Bay", time: "24 mins ago", desc: "Automated vector adjustment for high debris concentration on ebb-tide." },
    { title: "Salinity Calibration Due", drone: "BSF-KOC-002", hub: "Kochi Vembanad Lake", time: "1 hr ago", desc: "Acoustic micro-mesh vibration recalibrated for brackish transition." }
  ];

  container.innerHTML = alerts.map(a => `
    <div style="background: rgba(7, 21, 36, 0.7); border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-amber); padding: 12px; border-radius: 6px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong style="font-size: 0.85rem; color: #fff;">${a.title}</strong>
        <span style="font-size: 0.7rem; color: var(--text-dim);">${a.time}</span>
      </div>
      <div style="font-size: 0.75rem; color: var(--accent-cyan); margin-top: 2px;">${a.drone} · ${a.hub}</div>
      <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">${a.desc}</p>
    </div>
  `).join('');
}

function populateModalDropdowns() {
  // Drone dropdowns
  const handoverDroneSelect = document.getElementById("modal-handover-drone");
  if (handoverDroneSelect) {
    handoverDroneSelect.innerHTML = blueshifyState.drones.map(d => `<option value="${d.code}">${d.code} - ${d.name} (${d.hub})</option>`).join('');
  }
}

// ============================================================================
// 10. MOBILE SIMULATOR CONTROLS
// ============================================================================
function openSimulator() {
  document.getElementById("simulator-overlay").classList.add("open");
  if (window.lucide) window.lucide.createIcons();
}

function closeSimulator() {
  document.getElementById("simulator-overlay").classList.remove("open");
}

// ============================================================================
// 11. LIVE SIMULATED TELEMETRY TICKER (Subtle autonomous drifting)
// ============================================================================
function startLiveTelemetryTicker() {
  setInterval(() => {
    // 1. Drift active drones slightly
    blueshifyState.drones.forEach(d => {
      if (d.status === "ACTIVE_WORKING") {
        const deltaLat = (Math.random() - 0.5) * 0.0004;
        const deltaLng = (Math.random() - 0.5) * 0.0004;
        d.lat = Math.round((d.lat + deltaLat) * 100000) / 100000;
        d.lng = Math.round((d.lng + deltaLng) * 100000) / 100000;

        // Increment weight slightly
        if (d.currentPayloadKg < d.containerCapacityKg) {
          const added = Math.round((Math.random() * 0.3 + 0.1) * 10) / 10;
          d.currentPayloadKg = Math.min(d.containerCapacityKg, Math.round((d.currentPayloadKg + added) * 10) / 10);
          d.containerPct = Math.round((d.currentPayloadKg / d.containerCapacityKg) * 100);

          blueshifyState.metrics.totalCleanedKg += added;
          blueshifyState.metrics.totalCleanedTons = Math.round((blueshifyState.metrics.totalCleanedKg / 1000) * 100) / 100;
        }
      }
    });

    // 2. Update Map Markers
    renderDroneMapMarkers();

    // 3. Update Live Odometer & Header
    updateOdometerDisplay();

    // 4. Update mobile unit preview
    const mobilePayload = document.getElementById("mobile-unit-payload");
    if (mobilePayload) {
      mobilePayload.textContent = `${blueshifyState.drones[0].currentPayloadKg} KG`;
    }
  }, 3500);
}

function updateOdometerDisplay() {
  const kgFormatted = blueshifyState.metrics.totalCleanedKg.toLocaleString('en-IN', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const tonsFormatted = blueshifyState.metrics.totalCleanedTons.toFixed(2);

  const kgEl = document.getElementById("live-odometer-kg");
  const tonsEl = document.getElementById("live-odometer-tons");
  const headerKgEl = document.getElementById("header-plastic-counter");
  const impactKgEl = document.getElementById("impact-total-kg");

  if (kgEl) kgEl.textContent = kgFormatted;
  if (tonsEl) tonsEl.textContent = `${tonsFormatted} MT`;
  if (headerKgEl) headerKgEl.textContent = `${Math.round(blueshifyState.metrics.totalCleanedKg).toLocaleString('en-IN')} kg`;
  if (impactKgEl) impactKgEl.textContent = `${Math.round(blueshifyState.metrics.totalCleanedKg).toLocaleString('en-IN')} kg`;
}

// ============================================================================
// 12. EVENT LISTENERS SETUP
// ============================================================================
function setupEventListeners() {
  // Fleet filters
  document.getElementById("fleet-search-input")?.addEventListener("input", renderFleetRoster);
  document.getElementById("fleet-status-filter")?.addEventListener("change", renderFleetRoster);

  // Impact log filters
  document.getElementById("log-drone-filter")?.addEventListener("input", renderCollectionLogs);
  document.getElementById("log-region-filter")?.addEventListener("change", renderCollectionLogs);
  document.getElementById("log-density-filter")?.addEventListener("change", renderCollectionLogs);

  // Workforce filters
  document.getElementById("workforce-search-input")?.addEventListener("input", renderWorkforceDirectory);
  document.getElementById("workforce-category-filter")?.addEventListener("change", renderWorkforceDirectory);
  document.getElementById("workforce-hub-filter")?.addEventListener("change", renderWorkforceDirectory);

  // Refresh Sync Button
  document.getElementById("refresh-data-btn")?.addEventListener("click", () => {
    alert("Synchronizing live telemetry from regional river and coastal hubs across India...");
    renderFleetRoster();
    renderDroneMapMarkers();
    updateOdometerDisplay();
  });
}
