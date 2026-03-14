/**
 * SentinelFuzz Backend — server.js
 *
 * Production-ready Express server with:
 *  - Helmet     → security headers
 *  - Morgan     → HTTP request logging
 *  - CORS       → cross-origin resource sharing
 *  - express-validator friendly routes
 *  - API versioning under /api/v1
 *  - Centralized error handling
 */

const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');

const config      = require('./config/env');
const apiRoutes   = require('./routes/index');
const notFound    = require('./middlewares/notfound.middleware');
const errorHandler = require('./middlewares/error.middleware');

// ─── App Initialisation ───────────────────────────────────────────────────────
const app = express();

// ─── Security ─────────────────────────────────────────────────────────────────
// Helmet sets a collection of protective HTTP headers (XSS, clickjacking, etc.)
app.use(helmet());

// ─── Request Logging ──────────────────────────────────────────────────────────
// Morgan logs: METHOD  /path  STATUS  response-time ms
// Only enabled in non-production to avoid flooding production logs
if (config.nodeEnv !== 'production') {
  app.use(morgan('dev'));
}

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(cors());

// ─── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ─── API Routes (versioned) ───────────────────────────────────────────────────
// All endpoints live under /api/v1/
app.use('/api/v1', apiRoutes);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
// Catches any request that didn't match a registered route
app.use(notFound);

// ─── Centralized Error Handler ────────────────────────────────────────────────
// Must be registered LAST — Express identifies error middleware by 4 args
app.use(errorHandler);

// ─── Server Startup ───────────────────────────────────────────────────────────
const startServer = () => {
  try {
    const port = config.port;
    app.listen(port, () => {
      console.log('');
      console.log('  ███████╗███████╗███╗   ██╗████████╗██╗███╗   ██╗███████╗██╗');
      console.log('  ██╔════╝██╔════╝████╗  ██║╚══██╔══╝██║████╗  ██║██╔════╝██║');
      console.log('  ███████╗█████╗  ██╔██╗ ██║   ██║   ██║██╔██╗ ██║█████╗  ██║');
      console.log('  ╚════██║██╔══╝  ██║╚██╗██║   ██║   ██║██║╚██╗██║██╔══╝  ██║');
      console.log('  ███████║███████╗██║ ╚████║   ██║   ██║██║ ╚████║███████╗███████╗');
      console.log('  ╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝');
      console.log('');
      console.log(`  🛡️  SentinelFuzz Backend running`);
      console.log(`  📌  Environment : ${config.nodeEnv}`);
      console.log(`  🚀  Port        : ${port}`);
      console.log(`  🔗  Health      : http://localhost:${port}/api/v1/health`);
      console.log('');
    });
  } catch (error) {
    console.error('❌  Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
