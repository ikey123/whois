module.exports = async (req, res) => {
    try {
        const { name, suffix } = req.query;
        const apiUrl = `https://whois.freeaiapi.xyz/?name=${encodeURIComponent(name)}&suffix=${encodeURIComponent(suffix)}`;
        
        // 输出请求信息到日志中
        console.log('Request URL:', apiUrl);

        const response = await fetch(apiUrl);
        const data = await response.json();

        // 输出响应数据到日志中
        console.log('Response data:', data);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error occurred in serverless function:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
