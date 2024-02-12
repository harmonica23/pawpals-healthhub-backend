///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const vaxCtrl = require('../controllers/vax')

///////////////////////////////
// ROUTES
////////////////////////////////

// VACCINE INDEX ROUTE
router.get("/", vaxCtrl.index)

// VACCINE CREATE ROUTE
router.post("/", vaxCtrl.create)

// VACCINE SHOW ROUTE
router.get("/:id", vaxCtrl.show)

// VACCINE DELETE ROUTE
router.delete("/:id", vaxCtrl.delete)

// VACCINE UPDATE ROUTE
router.put("/:id", vaxCtrl.update)

// VACCINE BY PET
router.get("/pet/:id", vaxCtrl.vaxByPet)

// DELETE VACCINE BY PET
router.get("/pet/:id", vaxCtrl.deleteVaxByPet)


module.exports = router