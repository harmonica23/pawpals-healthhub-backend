///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/diet')

///////////////////////////////
// ROUTES
////////////////////////////////

// USER INDEX ROUTE
router.get("/", userCtrl.index)

// USER CREATE ROUTE
router.post("/", userCtrl.create)

// USER SHOW ROUTE
router.get("/:id", userCtrl.show)

// USER DELETE ROUTE
router.delete("/:id", userCtrl.delete)

// USER UPDATE ROUTE
router.put("/:id", userCtrl.update)


module.exports = router