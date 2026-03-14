const express = require('express');
const { query } = require('express-validator');
const { getHealthStatus } = require('../controllers/health.controller');

const router = express.Router();

/**
 * GET /api/v1/health
 *
 * Optional query param:
 *   ?check=<string>  — arbitrary label for the caller to tag the request
 *
 * Validation is intentionally non-blocking: the controller reads validation
 * results and returns them in the response body if present.
 */
const healthValidation = [
  query('check')
    .optional()
    .isString()
    .withMessage('check must be a string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('check must not exceed 64 characters'),
];

router.get('/', healthValidation, getHealthStatus);

module.exports = router;
