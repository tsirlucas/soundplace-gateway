const express = require('express');
const httpProxy = require('express-http-proxy');

require('dotenv').config();

const app = express();

const dataServiceProxy = httpProxy(process.env.DATA_API_ENDPOINT);
const streamServiceProxy = httpProxy(process.env.STREAM_API_ENDPOINT);


// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

app.use('/data', dataServiceProxy)

app.use('/stream', streamServiceProxy)


const httpServer = app.listen(process.env.PORT || 8080, (error) => {
  if (error) {
      console.error(error);
  } else {
      const address = httpServer.address();
      console.info(`==> 🌎 Listening on ${address.port}. Open up http://localhost:${address.port}/ in your browser.`);
  }
});
