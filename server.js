const express = require('express');
const httpProxy = require('express-http-proxy');

require('dotenv').config();

const app = express();

const authServiceProxy = httpProxy(process.env.AUTH_API_ENDPOINT);
const dataServiceProxy = httpProxy(process.env.DATA_API_ENDPOINT);
const streamServiceProxy = httpProxy(process.env.STREAM_API_ENDPOINT);
const dbProxy = httpProxy(process.env.DATABASE_ENDPOINT);
const pgwebServiceProxy = httpProxy(process.env.PGWEB_ENDPOINT);


// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

app.get('/', (req, res) => res.send('Working :D'))

app.use('/auth', authServiceProxy)

app.use('/data', dataServiceProxy)

app.use('/stream', streamServiceProxy)

app.use('/admin/db', dbProxy)

app.use('/admin/pgweb', pgwebServiceProxy)


const httpServer = app.listen(process.env.PORT || 8080, (error) => {
  if (error) {
      console.error(error);
  } else {
      const address = httpServer.address();
      console.info(`==> 🌎 Listening on ${address.port}. Open up http://localhost:${address.port}/ in your browser.`);
  }
});
