const router = require('express').Router()
const controller = require('../controllers/AuthController')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put('/update-password/:user_id', controller.UpdatePassword)

module.exports = router