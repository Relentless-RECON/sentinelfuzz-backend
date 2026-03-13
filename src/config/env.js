const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

// Validate required environment variables
const requiredVariables = ['PORT', 'NODE_ENV'];
const missingVariables = requiredVariables.filter((variable) => !process.env[variable]);

if (missingVariables.length > 0) {
  console.warn(`[Warning] Missing environment variables: ${missingVariables.join(', ')}`);
  // Not throwing error to prevent crash if env variables are missing
}

module.exports = config;
