const express = require('express');
const httpProxy = require('express-http-proxy');


require('dotenv').config();

const app = express();

const changePath = (req) => {
  const parts = req.url.split('?');
  const queryString = parts[1];
  const updatedPath = parts[0] + 'graphql';
  const resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '');
  return resolvedPathValue;
}

const authServiceProxy = httpProxy(process.env.AUTH_API_ENDPOINT);
const dataServiceProxy = httpProxy(process.env.DATA_API_ENDPOINT);
const streamServiceProxy = httpProxy(process.env.STREAM_API_ENDPOINT);
const graphqlServiceProxy = httpProxy(process.env.GRAPHQL_API_ENDPOINT, {
  proxyReqPathResolver: (req) => changePath(req, 'graphql'),
});

app.get('/', (req, res) => res.send('Working :D'))
   .use('/auth', authServiceProxy)
   .use('/data', dataServiceProxy)
   .use('/stream', streamServiceProxy)
   .use('/graphql', graphqlServiceProxy)

const httpServer = app.listen(process.env.PORT || 8080, (error) => {
  if (error) {
    console.error(error);
  } else {
    const address = httpServer.address();
    console.info(`==> 🌎 Listening on ${address.port}. Open up http://localhost:${address.port}/ in your browser.`);
  }
});
