///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const petCtrl = require('../controllers/pet')

///////////////////////////////
// ROUTES
////////////////////////////////

// PET INDEX ROUTE
router.get("/user/:id", petCtrl.index)

// PET CREATE ROUTE
router.post("/user/:id", petCtrl.create)

// PET SHOW ROUTE
router.get("/:id", petCtrl.show)

// PET DELETE ROUTE
router.delete("/:id", petCtrl.delete)

// PET UPDATE ROUTE
router.put("/:id", petCtrl.update)




module.exports = router