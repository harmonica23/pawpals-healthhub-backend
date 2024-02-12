///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const vetConsultCtrl = require('../controllers/vetConsult')

///////////////////////////////
// ROUTES
////////////////////////////////

// VETERINARY CONSULT INDEX ROUTE
router.get("/", vetConsultCtrl.index)

// VETERINARY CONSULT CREATE ROUTE
router.post("/", vetConsultCtrl.create)

// VETERINARY CONSULT SHOW ROUTE
router.get("/:id", vetConsultCtrl.show)

// VETERINARY CONSULT DELETE ROUTE
router.delete("/:id", vetConsultCtrl.delete)

// VETERINARY CONSULT UPDATE ROUTE
router.put("/:id", vetConsultCtrl.update)

// VET CONSULT BY PET
router.get("/pet/:id", vetConsultCtrl.vetByPet)

// DELETE VET CONSULT BY PET
router.get("/pet/:id", vetConsultCtrl.deleteVetByPet)


module.exports = router