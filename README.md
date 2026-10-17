# Blueshify — Autonomous Ocean & River Plastic Cleanup Enterprise Platform

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-00E5FF?style=for-the-badge&logo=rover&logoColor=black" alt="Status" />
  <img src="https://img.shields.io/badge/Coverage-India%20Waterways-10B981?style=for-the-badge&logo=google-maps&logoColor=white" alt="Coverage" />
  <img src="https://img.shields.io/badge/Architecture-Full%20Stack%20%2B%20Mobile-0077B6?style=for-the-badge" alt="Architecture" />
  <img src="https://img.shields.io/badge/License-MIT-B8D83E?style=for-the-badge" alt="License" />
</p>

> **"Cleaning India's Waterbodies with Autonomous Technology"**  
> Practical surface robotics for the plastic waste that conventional clean-up cannot reach — operating across the lakes, rivers, and coastlines of India.

---

## 🌊 Overview

**Blueshify** is an enterprise-scale autonomous surface robotics platform engineered to tackle aquatic plastic waste across India's premier river basins and coastal shelves (Ganga, Yamuna, Hooghly, Brahmaputra, Arabian Sea, and Vembanad Lake).

```
                      ┌───────────────────────────────────────────┐
                      │    Blueshify Autonomous Drone Swarm       │
                      │  (LiDAR • Optical AI • Multibeam Sonar)   │
                      └─────────────────────┬─────────────────────┘
                                            │ Telemetry & Coordinates
                                            ▼
┌───────────────────────────────────────────────────────────────────────────────────────┐
│                           Blueshify Enterprise Console                                │
├─────────────────────────┬─────────────────────────┬───────────────────────────────────┤
│  1. Geospatial Map      │  2. Fleet Telemetry     │  3. Environmental Impact          │
│  - India Basin Focus    │  - 48 Active / 14 Idle  │  - Live Odometer (184,520+ kg)    │
│  - Real-time GPS Tracks │  - Battery Diagnostic   │  - ASTM D7611 Polymer Density     │
│  - Protected Polygons   │  - Multi-sensor Array   │  - Audit Logs & CSV Export        │
├─────────────────────────┼─────────────────────────┼───────────────────────────────────┤
│  4. Manufacturing       │  5. Financials & P&L    │  6. Workforce & HR                │
│  - Kanban Pipeline      │  - ₹4.84 Cr Revenue     │  - 142 Personnel Directory        │
│  - Spare Parts Stock    │  - Cost Breakdown       │  - Regional Hub Reassignment      │
│  - Economies of Scale   │  - Revenue vs Loss Plot │  - Shift Scheduling               │
└─────────────────────────┴─────────────────────────┴───────────────────────────────────┘
```

---

## 🚀 Live Demo & Quickstart

### 1. Direct Web Browser Preview (Zero Dependencies)
You can launch the full interactive application directly in any browser:
```powershell
Start-Process "frontend/index.html"
```
Or open [frontend/index.html](./frontend/index.html) in your browser.

### 2. Run with Node.js Backend API
```bash
cd backend
npm install
npm start
```
The REST API server will run at `http://localhost:4000/api/v1` and serve live endpoints:
- `GET /api/v1/overview` — High-level KPIs & swarm alerts
- `GET /api/v1/drones` — Real-time fleet roster & diagnostic status
- `GET /api/v1/geospatial/map-data` — Unified GeoJSON FeatureCollection
- `GET /api/v1/impact/summary` — Total kg, metric tons, and polymer breakdown
- `GET /api/v1/manufacturing/pipeline` — Production Kanban stages
- `GET /api/v1/financials/pnl` — Real-time P&L ledger

---

## 🗺️ Geospatial Operations (India Region)

| Regional Hub | Waterbody | State | Coordinates | Active Fleet |
| :--- | :--- | :--- | :--- | :--- |
| `HUB-MUMBAI-01` | Arabian Sea / Mahim Bay | Maharashtra | `19.0760° N, 72.8777° E` | 14 Units |
| `HUB-VARANASI-01` | Ganga River (Assi to Rajghat) | Uttar Pradesh | `25.3176° N, 83.0064° E` | 11 Units |
| `HUB-DELHI-01` | Yamuna Basin (Wazirabad - Okhla) | Delhi NCR | `28.6139° N, 77.2410° E` | 9 Units |
| `HUB-KOLKATA-01` | Hooghly River (Lower Ganga) | West Bengal | `22.5726° N, 88.3639° E` | 7 Units |
| `HUB-KOCHI-01` | Vembanad Ramsar Lake | Kerala | `9.9312° N, 76.2673° E` | 5 Units |
| `HUB-VIZAG-01` | Bay of Bengal Coastal Corridor | Andhra Pradesh | `17.6868° N, 83.2185° E` | 2 Units |
| `HUB-GUWAHATI-01` | River Brahmaputra (Uzanbazar) | Assam | `26.1445° N, 91.7362° E` | Standby |

---

## 📱 Mobile Field Pilot Companion App

Includes a native **React Native** companion app for drone operators:
- **Location**: [`mobile/MobilePilotApp.jsx`](./mobile/MobilePilotApp.jsx)
- **Features**: Real-time HUD, RTK GPS lock, emergency thruster cutoff, mission vector recalculation, and collection logging.
- **Simulator**: Testable directly inside the web console via the **"Mobile App View"** header button!

---

## 🗄️ Database Architecture (PostgreSQL 15+ & PostGIS)

- [`backend/db/schema.sql`](./backend/db/schema.sql) — PostGIS geography types (`Point`, `Polygon`), spatial GIST indexes, triggers, rollup views.
- [`backend/db/seeds.sql`](./backend/db/seeds.sql) — Comprehensive Indian waterways seed dataset.
- [`backend/data/mock_store.json`](./backend/data/mock_store.json) — Production-ready JSON database store.

---

## ☁️ Deployment

Pre-configured with [`vercel.json`](./vercel.json) for 1-click deployment on Vercel. See [`DEPLOY_TO_VERCEL.md`](./DEPLOY_TO_VERCEL.md) for full instructions.

---

## 📄 License
This project is licensed under the [MIT License](./LICENSE) © 2026 Blueshify Robotics Private Limited.
