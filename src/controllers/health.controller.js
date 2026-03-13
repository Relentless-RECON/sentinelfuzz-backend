/**
 * Health check controller
 * Endpoint: GET /api/health
 */
const getHealthStatus = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'SentinelFuzz Backend',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealthStatus
};
