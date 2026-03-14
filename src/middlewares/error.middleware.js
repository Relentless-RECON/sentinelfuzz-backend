/**
 * Global centralized error handling middleware.
 *
 * Must be registered LAST in the Express middleware chain (4-argument signature).
 * Handles all errors forwarded via next(err).
 */
const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const statusCode = err.status || err.statusCode || 500;

  // Only log stack traces for genuine server-side errors
  if (statusCode >= 500) {
    console.error(`[${new Date().toISOString()}] SERVER ERROR — ${req.method} ${req.originalUrl}`);
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && statusCode >= 500
      ? { stack: err.stack }
      : {}),
  });
};

module.exports = errorHandler;
