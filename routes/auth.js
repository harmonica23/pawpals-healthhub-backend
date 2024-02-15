const router = require('express').Router()
const controller = require('../controllers/auth')
const middleware = require('../middleware')
const multer = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put(
    '/update/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePassword
)
router.get(
    '/session',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CheckSession
)

router.post(
    '/upload',
    middleware.stripToken,
    middleware.verifyToken,
    upload.single('file'),
    controller.UploadFile
)

module.exports = router