///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const incidentCtrl = require('../controllers/incident')

///////////////////////////////
// ROUTES
////////////////////////////////

// INCIDENT INDEX ROUTE
router.get("/", incidentCtrl.index)

// INCIDENT CREATE ROUTE
router.post("/", incidentCtrl.create)

// INCIDENT SHOW ROUTE
router.get("/:id", incidentCtrl.show)

// INCIDENT DELETE ROUTE
router.delete("/:id", incidentCtrl.delete)

// INCIDENT UPDATE ROUTE
router.put("/:id", incidentCtrl.update)

// INCIDENTS BY PET
router.get("/pet/:id", incidentCtrl.incidentsByPet)

// DELETE INCIDENTS BY PET
router.get("/pet/:id", incidentCtrl.deleteIncidentsByPet)

module.exports = router