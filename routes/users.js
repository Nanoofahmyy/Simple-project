
const express = require('express');
const app = express()
const router = express.Router();
const controller = require('../controllers/user')







router.post('/signup',  controller.signup)
router.post('/login', controller.login)


 module.exports = router