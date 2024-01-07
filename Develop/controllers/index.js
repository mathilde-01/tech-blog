const router = require('express').Router();
const apiRoutes = require('./Develop/controllers/api');
const homeRoutes = require('./Develop/controllers/home-routes'); 
const dashboardRoutes = require('./Develop/controllers/dashboard-routes.js');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;