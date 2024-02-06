///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// PET INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "pet index route"})
});

// PET CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "pet create route"})
});

// PET SHOW ROUTE
router.get("/:id", (req, res) => {
	res.status(200).json({message: "pet show route: " + req.params.id })
});

// PET DELETE ROUTE
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "pet delete route: " + req.params.id })
});

// PET UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "pet update route: " + req.params.id })
});

module.exports = router