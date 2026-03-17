# SentinelFuzz Backend 🛡️

Production-ready Express.js backend for **SentinelFuzz Pro** — a web-based cybersecurity fuzzing and vulnerability scanning platform.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Security | Helmet |
| Logging | Morgan |
| Validation | express-validator |
| CORS | cors |
| Environment | dotenv |
| Dev Server | nodemon |

---

## Project Structure

```
sentinelfuzz-backend/
│
├── src/
│   ├── config/
│   │   └── env.js                  # dotenv loader + config export
│   │
│   ├── controllers/
│   │   └── health.controller.js    # Health check logic
│   │
│   ├── middlewares/
│   │   ├── asyncHandler.js         # Async error wrapper
│   │   ├── error.middleware.js     # Centralized error handler
│   │   └── notfound.middleware.js  # 404 handler
│   │
│   ├── routes/
│   │   ├── index.js                # Central route loader (/api/v1)
│   │   └── health.routes.js        # Health route + validation
│   │
│   ├── utils/
│   │   └── response.js             # sendSuccess / sendError helpers
│   │
│   └── server.js                   # Express app + startup
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Setup

```bash
# 1. Clone and enter the directory
cd sentinelfuzz-backend

# 2. Install dependencies
npm install

# 3. Copy environment file
copy .env.example .env
```

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `5000` | Port the server listens on |
| `NODE_ENV` | `development` | Runtime environment |

---

## Run

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

---

## API Reference

### Base URL

```
http://localhost:5000/api/v1
```

### Health Check

```
GET /api/v1/health
```

**Optional query parameter:**

| Param | Type | Description |
|---|---|---|
| `check` | string (≤64 chars) | Optional tag returned in response |

**Success Response `200`:**

```json
{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "service": "SentinelFuzz Backend",
    "version": "v1",
    "environment": "development",
    "uptime": "12.34s",
    "timestamp": "2026-03-14T12:00:00.000Z"
  }
}
```

**404 Response:**

```json
{
  "success": false,
  "message": "Route not found: GET /api/v1/nonexistent"
}
```

**Validation Error `400`:**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [...]
}
```

---

## Roadmap

- [ ] Scan orchestration API (`/api/v1/scan`)
- [ ] MongoDB integration
- [ ] WebSocket live scan updates
- [ ] Python fuzzing engine bridge
- [ ] Report generation (`/api/v1/reports`)
- [ ] JWT authentication

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
