const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const healthRoutes = require('./routes/health.routes');
const errorHandler = require('./middlewares/error.middleware');

// Initialize express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api', healthRoutes);

// 404 handler for undefined routes
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Centralized error handling middleware
app.use(errorHandler);

// Start server safely
const startServer = () => {
  try {
    const port = config.port;
    app.listen(port, () => {
      console.log(`SentinelFuzz Backend Running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
