<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whois Lookup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        #whois-container {
            text-align: center;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }

        #result {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div id="whois-container">
        <h1>Whois Lookup</h1>
        <label for="domain">Enter Domain:</label>
        <input type="text" id="domain" placeholder="example.com">
        <button onclick="lookupWhois()">Lookup</button>
        <div id="result"></div>
    </div>

    <script>
        function lookupWhois() {
            // 获取输入的域名
            var domain = document.getElementById('domain').value;

            // 在这里可以使用Ajax或其他方式向服务器发送查询请求
            // 这里只是一个示例，显示一个简单的结果
            var result = "Whois information for " + domain + " will be displayed here.";

            // 将结果显示在页面上
            document.getElementById('result').innerHTML = result;
        }
    </script>
</body>
</html>
