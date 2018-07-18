const httpProxy = require('express-http-proxy');

const conditionalMapper = (origin, destiny) => {
  return httpProxy(`${process.env.PGWEB_ENDPOINT}`, {
    proxyReqPathResolver: (req) => {
      if(req.headers.referer.match(origin)) {
        const parts = req.url.split('?');
        const queryString = parts[1];
        const updatedPath = `${destiny}${parts[0]}`;
        return updatedPath + (queryString ? '?' + queryString : '');
      } else {
        return req.url;
      }
    }
  })
};

module.exports = {
  conditionalMapper,
}
