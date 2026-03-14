/**
 * 404 Not Found middleware.
 *
 * Catches any request that doesn't match a defined route
 * and returns a structured JSON error response.
 */
const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

module.exports = notFound;
