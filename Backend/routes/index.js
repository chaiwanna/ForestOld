const router = require('express').Router();
const account = require('./account');
const testapi = require('./testapi');
const country = require('./country');

//country route
router.use('/country',country);

//Account route
router.use('/account',account);

//Test api
router.use('/testapi',testapi);

module.exports = router;