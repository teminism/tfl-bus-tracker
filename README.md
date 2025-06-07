# TfL Bus Tracker 

A modern React Native application that helps users track London buses and trains in real-time using the Transport for London (TfL) API.

## Architecture 

The application follows a clean, modular architecture:

## Features 

- **Real-time Location** 
  - Automatically detects user's current location
  - Shows nearby bus stops and train stations
  - Displays distance to each stop/station

- **Bus Stops** 
  - Lists all nearby bus stops with their details
  - Shows bus stop letters and indicators
  - Displays which bus lines serve each stop
  - Shows the direction ("towards") for each stop

- **Train Stations** 
  - Shows nearby train and metro stations
  - Displays available transport modes
  - Lists all lines serving each station
  - Shows walking distance to stations

- **Real-time Arrivals** 
  - Live bus arrival predictions
  - Shows destination for each arriving bus
  - Displays minutes until arrival
  - Auto-refreshes every 15 seconds

## Detailed Setup Instructions 

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

## API Documentation 

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

## Testing 

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
