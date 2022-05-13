import { createProxyMiddleware } from 'http-proxy-middleware';

const path = 'http://3.36.157.185';

module.exports = app => {
  app.use(
    createProxyMiddleware([path, '/v2'], {
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      router: { '/v2': process.env.REACT_APP_V2_URL },
      pathRewrite: { '^/v2': '' },
    })
  );
};
