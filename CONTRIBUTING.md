# Contributing to Blueshify 🌊

Thank you for your interest in contributing to the **Blueshify Autonomous Ocean & River Plastic Cleanup Platform**!

## Code of Conduct
We are committed to providing a welcoming, inspiring, and collaborative environment. Please treat all contributors with respect.

## How to Contribute
1. **Fork the Repository** on GitHub.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**:
   Follow conventional commits:
   - `feat:` for new features (e.g. `feat: add sonar bathymetry layer`)
   - `fix:` for bug fixes
   - `docs:` for documentation updates
4. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** describing your changes.

## Engineering Standards
- **Geospatial & GPS**: All coordinates in India waterways use WGS84 (`SRID 4326`).
- **Telemetry Latency**: Real-time packet parsing must maintain <50ms processing time.
- **Dark Mode Palette**: Follow Blueshify design tokens (`#040d16` base, `#00e5ff` cyan, `#b8d83e` lime).
