/**
 * Centralized response utility for SentinelFuzz Backend
 * Standardizes all API responses across the application.
 */

/**
 * Send a successful JSON response.
 * @param {object} res - Express response object
 * @param {object} data - Payload to return
 * @param {string} [message] - Optional success message
 * @param {number} [statusCode=200] - HTTP status code
 */
const sendSuccess = (res, data = {}, message = '', statusCode = 200) => {
  const payload = { success: true };
  if (message) payload.message = message;
  payload.data = data;
  return res.status(statusCode).json(payload);
};

/**
 * Send an error JSON response.
 * @param {object} res - Express response object
 * @param {string} message - Human-readable error description
 * @param {number} [statusCode=500] - HTTP status code
 * @param {object|null} [errors=null] - Optional validation error details
 */
const sendError = (res, message = 'Internal Server Error', statusCode = 500, errors = null) => {
  const payload = { success: false, message };
  if (errors) payload.errors = errors;
  return res.status(statusCode).json(payload);
};

module.exports = { sendSuccess, sendError };
