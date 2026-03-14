const { validationResult } = require('express-validator');
const { sendSuccess, sendError } = require('../utils/response');

/**
 * Health check controller
 * Endpoint: GET /api/v1/health
 *
 * Returns server status, version, uptime, and timestamp.
 * Validates optional ?check query param via express-validator.
 */
const getHealthStatus = (req, res) => {
  // Surface any validation errors for the optional ?check param
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendError(res, 'Validation failed', 400, errors.array());
  }

  return sendSuccess(
    res,
    {
      service: 'SentinelFuzz Backend',
      version: 'v1',
      environment: process.env.NODE_ENV || 'development',
      uptime: `${process.uptime().toFixed(2)}s`,
      timestamp: new Date().toISOString(),
      ...(req.query.check ? { check: req.query.check } : {}),
    },
    'Service is healthy',
  );
};

module.exports = { getHealthStatus };
