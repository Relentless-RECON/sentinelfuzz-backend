/**
 * Central Route Loader — routes/index.js
 *
 * All API route modules are registered here under /api/v1.
 * Future modules (scan, report, auth, etc.) should be added here.
 */
const express = require('express');
const router = express.Router();

const healthRoutes = require('./health.routes');

// Mount route modules
router.use('/health', healthRoutes);

// Future modules — uncomment as built:
// router.use('/scan',    require('./scan.routes'));
// router.use('/reports', require('./report.routes'));
// router.use('/auth',    require('./auth.routes'));

module.exports = router;
