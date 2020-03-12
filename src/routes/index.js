import express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
  return res.json({
    message: 'Test Default Running'
  });
});

export default Router;
