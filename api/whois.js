async function lookupWhois() {
    try {
        const fullDomain = document.getElementById('domain').value;
        const parts = fullDomain.split('.');
        const name = parts[0];
        const suffix = parts[1];

        // 修改这里的URL为你的Vercel Serverless Function的路径
        const apiUrl = `/api/whois?name=${name}&suffix=${suffix}`;

        console.log('Requesting:', apiUrl);

        const response = await fetch(apiUrl);

        console.log('Response:', response);

        if (!response.ok) {
            throw new Error(`Fetch failed with status ${response.status}`);
        }

        const responseData = await response.json();

        console.log('Response Data:', responseData);

        if (responseData.success) {
            const result = `Whois information for ${fullDomain}: ${responseData.whoisData}`;
            document.getElementById('result').innerHTML = result;
        } else {
            const result = `Error: ${responseData.message}`;
            document.getElementById('result').innerHTML = result;
        }
    } catch (error) {
        console.error('An error occurred:', error);
        document.getElementById('result').innerHTML = `Error: ${error.message}`;
    }
}
