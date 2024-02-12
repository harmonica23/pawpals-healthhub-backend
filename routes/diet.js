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

// DIET BY PET
router.get("/pet/:id", dietCtrl.dietsByPet)

// DELETE DIET BY PET
router.delete("/pet/:id", dietCtrl.deleteDietsByPet)

module.exports = router