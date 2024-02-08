///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const medCtrl = require('../controllers/med')

///////////////////////////////
// ROUTES
////////////////////////////////

// MEDICATION INDEX ROUTE
router.get("/", medCtrl.index)

// MEDICATION CREATE ROUTE
router.post("/", medCtrl.create)

// MEDICATION SHOW ROUTE
router.get("/:id", medCtrl.show)

// MEDICATION DELETE ROUTE
router.delete("/:id", medCtrl.delete)

// MEDICATION UPDATE ROUTE
router.put("/:id", medCtrl.update)


module.exports = router