const express = require('express');
const httpProxy = require('http-proxy-middleware');
const cors = require('cors');

require('dotenv').config();

const app = express();

const changePath = (req) => {
  const parts = req.url.split('?');
  const queryString = parts[1];
  const updatedPath = parts[0] + 'graphql';
  const resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '');
  return resolvedPathValue;
}

const authServiceProxy = httpProxy({target: 'http://' + process.env.AUTH_API_ENDPOINT});
const dataServiceProxy = httpProxy({target: 'http://' + process.env.DATA_API_ENDPOINT});
const streamServiceProxy = httpProxy({target: 'http://' + process.env.STREAM_API_ENDPOINT});
const graphqlServiceProxy = httpProxy({target: 'http://' + process.env.GRAPHQL_API_ENDPOINT,
  pathRewrite: {
    '/graphql': '/graphql'
  },
  ws: true,
});

app
  .use(cors())
  .options('*', cors())
  .get('/', (req, res) => res.send('Working :D'))
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
