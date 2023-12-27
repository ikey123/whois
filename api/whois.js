// Import necessary modules
const fetch = require('node-fetch');

// Handler for the serverless function
module.exports = async (req, res) => {
  const { name, suffix } = req.query; // Get query parameters from the request URL

  // Make the request to the external API
  try {
    const apiUrl = `https://whois.freeaiapi.xyz/?name=${encodeURIComponent(name)}&suffix=${encodeURIComponent(suffix)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Set the appropriate headers to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Return the response from the external API
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
