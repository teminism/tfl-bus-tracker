# TfL Bus Tracker 🚍

A modern React Native application that helps users track London buses and trains in real-time using the Transport for London (TfL) API.

## Architecture 🏗️

The application follows a clean, modular architecture:

<svg aria-roledescription="flowchart-v2" role="graphics-document document" viewBox="-8 -8 651.4437255859375 618.320068359375" style="max-width: 651.4437255859375px;" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid-svg-1749306316610-leulr02sz"><style>#mermaid-svg-1749306316610-leulr02sz{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:rgba(204, 204, 204, 0.87);}#mermaid-svg-1749306316610-leulr02sz .error-icon{fill:#bf616a;}#mermaid-svg-1749306316610-leulr02sz .error-text{fill:#bf616a;stroke:#bf616a;}#mermaid-svg-1749306316610-leulr02sz .edge-thickness-normal{stroke-width:2px;}#mermaid-svg-1749306316610-leulr02sz .edge-thickness-thick{stroke-width:3.5px;}#mermaid-svg-1749306316610-leulr02sz .edge-pattern-solid{stroke-dasharray:0;}#mermaid-svg-1749306316610-leulr02sz .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-svg-1749306316610-leulr02sz .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-svg-1749306316610-leulr02sz .marker{fill:rgba(204, 204, 204, 0.87);stroke:rgba(204, 204, 204, 0.87);}#mermaid-svg-1749306316610-leulr02sz .marker.cross{stroke:rgba(204, 204, 204, 0.87);}#mermaid-svg-1749306316610-leulr02sz svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-svg-1749306316610-leulr02sz .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:rgba(204, 204, 204, 0.87);}#mermaid-svg-1749306316610-leulr02sz .cluster-label text{fill:#ffffff;}#mermaid-svg-1749306316610-leulr02sz .cluster-label span,#mermaid-svg-1749306316610-leulr02sz p{color:#ffffff;}#mermaid-svg-1749306316610-leulr02sz .label text,#mermaid-svg-1749306316610-leulr02sz span,#mermaid-svg-1749306316610-leulr02sz p{fill:rgba(204, 204, 204, 0.87);color:rgba(204, 204, 204, 0.87);}#mermaid-svg-1749306316610-leulr02sz .node rect,#mermaid-svg-1749306316610-leulr02sz .node circle,#mermaid-svg-1749306316610-leulr02sz .node ellipse,#mermaid-svg-1749306316610-leulr02sz .node polygon,#mermaid-svg-1749306316610-leulr02sz .node path{fill:#1a1a1a;stroke:#2a2a2a;stroke-width:1px;}#mermaid-svg-1749306316610-leulr02sz .flowchart-label text{text-anchor:middle;}#mermaid-svg-1749306316610-leulr02sz .node .label{text-align:center;}#mermaid-svg-1749306316610-leulr02sz .node.clickable{cursor:pointer;}#mermaid-svg-1749306316610-leulr02sz .arrowheadPath{fill:#e5e5e5;}#mermaid-svg-1749306316610-leulr02sz .edgePath .path{stroke:rgba(204, 204, 204, 0.87);stroke-width:2.0px;}#mermaid-svg-1749306316610-leulr02sz .flowchart-link{stroke:rgba(204, 204, 204, 0.87);fill:none;}#mermaid-svg-1749306316610-leulr02sz .edgeLabel{background-color:#1a1a1a99;text-align:center;}#mermaid-svg-1749306316610-leulr02sz .edgeLabel rect{opacity:0.5;background-color:#1a1a1a99;fill:#1a1a1a99;}#mermaid-svg-1749306316610-leulr02sz .labelBkg{background-color:rgba(26, 26, 26, 0.5);}#mermaid-svg-1749306316610-leulr02sz .cluster rect{fill:rgba(64, 64, 64, 0.47);stroke:#30373a;stroke-width:1px;}#mermaid-svg-1749306316610-leulr02sz .cluster text{fill:#ffffff;}#mermaid-svg-1749306316610-leulr02sz .cluster span,#mermaid-svg-1749306316610-leulr02sz p{color:#ffffff;}#mermaid-svg-1749306316610-leulr02sz div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:#88c0d0;border:1px solid #30373a;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-svg-1749306316610-leulr02sz .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgba(204, 204, 204, 0.87);}#mermaid-svg-1749306316610-leulr02sz :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker orient="auto" markerHeight="12" markerWidth="12" markerUnits="userSpaceOnUse" refY="5" refX="6" viewBox="0 0 10 10" class="marker flowchart" id="mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 0 L 10 5 L 0 10 z"/></marker><marker orient="auto" markerHeight="12" markerWidth="12" markerUnits="userSpaceOnUse" refY="5" refX="4.5" viewBox="0 0 10 10" class="marker flowchart" id="mermaid-svg-1749306316610-leulr02sz_flowchart-pointStart"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 5 L 10 10 L 10 0 z"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="11" viewBox="0 0 10 10" class="marker flowchart" id="mermaid-svg-1749306316610-leulr02sz_flowchart-circleEnd"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="-1" viewBox="0 0 10 10" class="marker flowchart" id="mermaid-svg-1749306316610-leulr02sz_flowchart-circleStart"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="12" viewBox="0 0 11 11" class="marker cross flowchart" id="mermaid-svg-1749306316610-leulr02sz_flowchart-crossEnd"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="-1" viewBox="0 0 11 11" class="marker cross flowchart" id="mermaid-svg-1749306316610-leulr02sz_flowchart-crossStart"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"/></marker><g class="root"><g class="clusters"><g id="External" class="cluster default flowchart-label"><rect height="83.72000122070312" width="598.4874954223633" y="518.6000061035156" x="36.95625305175781" ry="0" rx="0" style="fill:#fff3e0;"/><g transform="translate(274.8424987792969, 518.6000061035156)" class="cluster-label"><foreignObject height="18.720001220703125" width="122.71500396728516"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">External Services</span></div></foreignObject></g></g><g id="Backend" class="cluster default flowchart-label"><rect height="251.16000366210938" width="370.3875045776367" y="217.44000244140625" x="0" ry="0" rx="0" style="fill:#e8f5e9;"/><g transform="translate(126.17062377929688, 217.44000244140625)" class="cluster-label"><foreignObject height="18.720001220703125" width="118.04625701904297"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Express Backend</span></div></foreignObject></g></g><g id="Frontend" class="cluster default flowchart-label"><rect height="167.44000244140625" width="539.1437454223633" y="0" x="11.688751220703125" ry="0" rx="0" style="fill:#e1f5fe;"/><g transform="translate(201.03686904907227, 0)" class="cluster-label"><foreignObject height="18.720001220703125" width="160.447509765625"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">React Native Frontend</span></div></foreignObject></g></g></g><g class="edgePaths"><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-UI LE-Hooks" id="L-UI-Hooks-0" d="M284.021,52.503L254.049,57.706C224.077,62.908,164.133,73.314,134.161,81.8C104.189,90.287,104.189,96.853,104.189,100.137L104.189,103.42"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-Hooks LE-API" id="L-Hooks-API-0" d="M104.189,142.44L104.189,146.607C104.189,150.773,104.189,159.107,104.189,167.44C104.189,175.773,104.189,184.107,104.189,192.44C104.189,200.773,104.189,209.107,104.189,216.557C104.189,224.007,104.189,230.573,104.189,233.857L104.189,237.14"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-UI LE-i18n" id="L-UI-i18n-0" d="M311.684,58.72L303.369,62.887C295.054,67.053,278.424,75.387,270.109,82.837C261.794,90.287,261.794,96.853,261.794,100.137L261.794,103.42"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-UI LE-Navigation" id="L-UI-Navigation-0" d="M378.975,58.72L387.29,62.887C395.605,67.053,412.235,75.387,420.55,82.837C428.865,90.287,428.865,96.853,428.865,100.137L428.865,103.42"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-API LE-Controllers" id="L-API-Controllers-0" d="M104.189,276.16L104.189,280.327C104.189,284.493,104.189,292.827,104.189,300.277C104.189,307.727,104.189,314.293,104.189,317.577L104.189,320.86"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-Controllers LE-Services" id="L-Controllers-Services-0" d="M104.189,359.88L104.189,364.047C104.189,368.213,104.189,376.547,104.189,383.997C104.189,391.447,104.189,398.013,104.189,401.297L104.189,404.58"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-Services LE-TfL" id="L-Services-TfL-0" d="M104.189,443.6L104.189,447.767C104.189,451.933,104.189,460.267,104.189,468.6C104.189,476.933,104.189,485.267,104.189,493.6C104.189,501.933,104.189,510.267,104.189,517.717C104.189,525.167,104.189,531.733,104.189,535.017L104.189,538.3"/><path marker-end="url(#mermaid-svg-1749306316610-leulr02sz_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-UI LE-Location" id="L-UI-Location-0" d="M406.638,55.695L427.337,60.366C448.036,65.036,489.434,74.378,510.133,86.026C530.832,97.673,530.832,111.627,530.832,125.58C530.832,139.533,530.832,153.487,530.832,164.63C530.832,175.773,530.832,184.107,530.832,192.44C530.832,200.773,530.832,209.107,530.832,220.25C530.832,231.393,530.832,245.347,530.832,259.3C530.832,273.253,530.832,287.207,530.832,301.16C530.832,315.113,530.832,329.067,530.832,343.02C530.832,356.973,530.832,370.927,530.832,384.88C530.832,398.833,530.832,412.787,530.832,426.74C530.832,440.693,530.832,454.647,530.832,465.79C530.832,476.933,530.832,485.267,530.832,493.6C530.832,501.933,530.832,510.267,530.832,517.717C530.832,525.167,530.832,531.733,530.832,535.017L530.832,538.3"/></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g transform="translate(104.18937683105469, 560.4600067138672)" id="flowchart-TfL-563" class="node default default flowchart-label"><rect height="33.720001220703125" width="64.46625137329102" y="-16.860000610351562" x="-32.23312568664551" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-24.733125686645508, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="49.466251373291016"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">TfL API</span></div></foreignObject></g></g><g transform="translate(530.8324966430664, 560.4600067138672)" id="flowchart-Location-564" class="node default default flowchart-label"><rect height="33.720001220703125" width="139.22250366210938" y="-16.860000610351562" x="-69.61125183105469" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-62.11125183105469, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="124.22250366210938"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Location Services</span></div></foreignObject></g></g><g transform="translate(104.18937683105469, 259.3000030517578)" id="flowchart-API-559" class="node default default flowchart-label"><rect height="33.720001220703125" width="95.14500427246094" y="-16.860000610351562" x="-47.57250213623047" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-40.07250213623047, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="80.14500427246094"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Express API</span></div></foreignObject></g></g><g transform="translate(104.18937683105469, 343.02000427246094)" id="flowchart-Controllers-560" class="node default default flowchart-label"><rect height="33.720001220703125" width="138.06375122070312" y="-16.860000610351562" x="-69.03187561035156" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-61.53187561035156, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="123.06375122070312"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Controllers Layer</span></div></foreignObject></g></g><g transform="translate(104.18937683105469, 426.74000549316406)" id="flowchart-Services-561" class="node default default flowchart-label"><rect height="33.720001220703125" width="138.37875366210938" y="-16.860000610351562" x="-69.18937683105469" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-61.68937683105469, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="123.37875366210938"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">TfL Service Layer</span></div></foreignObject></g></g><g transform="translate(279.38312911987305, 426.74000549316406)" id="flowchart-Config-562" class="node default default flowchart-label"><rect height="33.720001220703125" width="112.00875091552734" y="-16.860000610351562" x="-56.00437545776367" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-48.50437545776367, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="97.00875091552734"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Configuration</span></div></foreignObject></g></g><g transform="translate(345.3293743133545, 41.86000061035156)" id="flowchart-UI-555" class="node default default flowchart-label"><rect height="33.720001220703125" width="122.61750793457031" y="-16.860000610351562" x="-61.308753967285156" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-53.808753967285156, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="107.61750793457031"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">UI Components</span></div></foreignObject></g></g><g transform="translate(104.18937683105469, 125.58000183105469)" id="flowchart-Hooks-556" class="node default default flowchart-label"><rect height="33.720001220703125" width="115.00125122070312" y="-16.860000610351562" x="-57.50062561035156" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-50.00062561035156, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="100.00125122070312"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Custom Hooks</span></div></foreignObject></g></g><g transform="translate(261.79375076293945, 125.58000183105469)" id="flowchart-i18n-557" class="node default default flowchart-label"><rect height="33.720001220703125" width="100.20750427246094" y="-16.860000610351562" x="-50.10375213623047" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-42.60375213623047, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="85.20750427246094"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Translations</span></div></foreignObject></g></g><g transform="translate(428.86499786376953, 125.58000183105469)" id="flowchart-Navigation-558" class="node default default flowchart-label"><rect height="33.720001220703125" width="133.93500518798828" y="-16.860000610351562" x="-66.96750259399414" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-59.46750259399414, -9.360000610351562)" style="" class="label"><rect/><foreignObject height="18.720001220703125" width="118.93500518798828"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Navigation Stack</span></div></foreignObject></g></g></g></g></g></svg>
## Features 🌟

- **Real-time Location** 📍
  - Automatically detects user's current location
  - Shows nearby bus stops and train stations
  - Displays distance to each stop/station

- **Bus Stops** 🚏
  - Lists all nearby bus stops with their details
  - Shows bus stop letters and indicators
  - Displays which bus lines serve each stop
  - Shows the direction ("towards") for each stop

- **Train Stations** 🚉
  - Shows nearby train and metro stations
  - Displays available transport modes
  - Lists all lines serving each station
  - Shows walking distance to stations

- **Real-time Arrivals** ⏱️
  - Live bus arrival predictions
  - Shows destination for each arriving bus
  - Displays minutes until arrival
  - Auto-refreshes every 15 seconds

## Detailed Setup Instructions 📋

### Prerequisites

1. Node.js and npm:
```bash
# Check if you have Node.js installed
node --version  # Should be v14 or later
npm --version   # Should be v6 or later

# If not installed, download from https://nodejs.org/
```

2. Expo CLI:
```bash
npm install -g expo-cli
```

3. TfL API Credentials:
- Visit [TfL API Portal](https://api-portal.tfl.gov.uk/)
- Create an account and generate API credentials
- Note down your `app_id` and `primary_key`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create .env file
touch .env

# Add the following content:
PORT=3001
TFL_APP_ID=your_app_id
TFL_PRIMARY_KEY=your_api_key
NODE_ENV=development
```

4. Start development server:
```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create .env file
touch .env

# Add the following content:
EXPO_PUBLIC_API_URL=http://localhost:3001
```

4. Start the app:
```bash
# Start Expo development server
npm start

# For iOS
npm run ios

# For Android
npm run android
```

## API Documentation 📚

### Bus Stops Endpoints

#### Get Nearby Bus Stops
```http
GET /api/stops/nearby
```

Query Parameters:
| Parameter | Type | Description |
|-----------|------|-------------|
| lat | number | Latitude coordinate |
| lon | number | Longitude coordinate |

Response:
```json
{
  "stopPoints": [
    {
      "naptanId": "string",
      "commonName": "string",
      "stopLetter": "string",
      "indicator": "string",
      "lines": ["string"],
      "towards": "string",
      "lat": number,
      "lon": number,
      "distance": number
    }
  ]
}
```

#### Get Bus Arrivals
```http
GET /api/stops/:stopId/arrivals
```

Response:
```json
[
  {
    "id": "string",
    "lineName": "string",
    "destinationName": "string",
    "timeToStation": number,
    "minutesToArrival": number
  }
]
```

### Train Stations Endpoints

#### Get Nearby Train Stations
```http
GET /api/stops/train-stations
```

Query Parameters:
| Parameter | Type | Description |
|-----------|------|-------------|
| lat | number | Latitude coordinate |
| lon | number | Longitude coordinate |

Response:
```json
{
  "stations": [
    {
      "id": "string",
      "name": "string",
      "distance": number,
      "modes": ["string"],
      "lines": ["string"]
    }
  ]
}
```

## Troubleshooting Guide 🔧

### Common Issues and Solutions

#### Backend Issues

1. **TfL API Connection Errors**
   ```
   Error: Failed to fetch from TfL API
   ```
   Solutions:
   - Verify your TfL API credentials in `.env`
   - Check if you've exceeded API rate limits
   - Ensure your IP isn't blocked by TfL

2. **Port Already in Use**
   ```
   Error: listen EADDRINUSE: address already in use :::3001
   ```
   Solutions:
   ```bash
   # Find process using the port
   lsof -i :3001
   
   # Kill the process
   kill -9 <PID>
   ```

#### Frontend Issues

1. **Location Services Not Working**
   ```
   Error: Location permission denied
   ```
   Solutions:
   - Enable location services in device settings
   - Grant permissions to the app
   - For iOS, check Info.plist permissions
   - For Android, check AndroidManifest.xml

2. **API Connection Errors**
   ```
   Error: Network request failed
   ```
   Solutions:
   - Verify backend server is running
   - Check EXPO_PUBLIC_API_URL in `.env`
   - Ensure device/emulator can reach backend
   - Check for CORS issues

3. **Build Errors**
   ```
   Error: Incompatible React versions
   ```
   Solutions:
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules
   npm install
   
   # Clear Metro bundler cache
   npm start -- --clear
   ```

## Development Guidelines 📝

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Write unit tests for new features

### Git Workflow

1. Create feature branch:
```bash
git checkout -b feature/your-feature
```

2. Make changes and commit:
```bash
git add .
git commit -m "feat: your feature description"
```

3. Push and create PR:
```bash
git push origin feature/your-feature
```

## Testing 🧪

### Backend Tests

```bash
cd backend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- src/services/tflService.test.ts
```

### Frontend Tests

```bash
cd frontend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- components/NearbyStopCard.test.tsx
```

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

Project Link: [https://github.com/teminism/tfl-bus-tracker](https://github.com/teminism/tfl-bus-tracker) 