
const express = require('express');


const productsRouter = require('./products.router');
const usersRouters = require('./users.router');
const gamesRouter = require('./games.router');
const categoriesRouter = require('./categories.router');



function routerApi( app ) {
  const router = express.Router();
  app.use('/api/v1', router);
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouters);
  app.use('/api/games', gamesRouter);
  app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
