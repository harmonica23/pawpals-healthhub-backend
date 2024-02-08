const router = require('express').Router()
const controller = require('../controllers/auth')

router.post('/login', controller.Login)
router.post('/register', controller.Register)

module.exports = router