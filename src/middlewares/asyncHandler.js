/**
 * Global async handler wrapper.
 *
 * Wraps async route controllers so that any rejected promise
 * is automatically forwarded to Express's centralized error handler
 * instead of causing an UnhandledPromiseRejection crash.
 *
 * Usage:
 *   router.get('/route', asyncHandler(async (req, res) => { ... }));
 *
 * @param {Function} fn - Async controller function
 * @returns {Function} Express-compatible middleware
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
