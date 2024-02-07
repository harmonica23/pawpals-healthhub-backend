///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const dietCtrl = require('../controllers/diet')

///////////////////////////////
// ROUTES
////////////////////////////////

// DIET INDEX ROUTE
router.get("/", dietCtrl.index)

// DIET CREATE ROUTE
router.post("/", dietCtrl.create)

// DIET SHOW ROUTE
router.get("/:id", dietCtrl.show)

// DIET DELETE ROUTE
router.delete("/:id", dietCtrl.delete)

// DIET UPDATE ROUTE
router.put("/:id", dietCtrl.update)


module.exports = router