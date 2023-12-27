module.exports = async (req, res) => {
  try {
    const { name, suffix } = req.query;
    
    if (!name || !suffix) {
      return res.status(400).json({ error: 'Domain name or suffix is missing.' });
    }

    const apiUrl = `https://whois.freeaiapi.xyz/?name=${encodeURIComponent(name)}&suffix=${encodeURIComponent(suffix)}`;
    
    console.log('Request URL:', apiUrl);

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from external API.');
    }

    const responseData = await response.json();

    console.log('Response Data:', responseData);

    if (responseData.success) {
      res.status(200).json({ whoisData: responseData.whoisData });
    } else {
      res.status(500).json({ error: 'Failed to fetch Whois information.' });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
