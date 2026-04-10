const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/burn') {
    // This loop forces the CPU to work hard for a moment
    let x = 0;
    for (let i = 0; i < 50000000; i++) {
      x += Math.sqrt(i);
    }
    res.end(`Phew, that was a lot of math! CPU burned. Result: ${x}\n`);
  } else {
    res.end("App is running! Send traffic to /burn to trigger the autoscaler.\n");
  }
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
