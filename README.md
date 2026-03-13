# SentinelFuzz Backend

SentinelFuzz Pro is a cybersecurity fuzzing platform. This project represents the core foundation of the backend system.

## Project Setup Instructions

1. Ensure you have Node.js installed.
2. Clone or download this repository.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

## Run commands

**Start in production mode:**
```bash
npm start
```

**Start in development mode (with nodemon):**
```bash
npm run dev
```

## API Health Endpoint

You can test if the server is running normally by sending a GET request to the health endpoint:

**Request:**
```http
GET /api/health
```

**Response:**
```json
{
  "status": "ok",
  "service": "SentinelFuzz Backend",
  "timestamp": "2024-10-10T12:00:00.000Z"
}
```
