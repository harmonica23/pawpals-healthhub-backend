///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const upload = require('../middleware/index')
const petCtrl = require('../controllers/pet')

///////////////////////////////
// ROUTES
////////////////////////////////

// PET INDEX ROUTE
router.get("/", petCtrl.index)

// PET CREATE ROUTE
router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { name, birthday, kind, gender, spayNeuterStatus } = req.body;
        const imagePath = req.file ? req.file.path : null;

        const newPet = new Pet({
            name,
            birthday,
            kind,
            gender,
            spayNeuterStatus,
            image: imagePath,
        });

        const savedPet = await newPet.save();
        res.json(savedPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// PET SHOW ROUTE
router.get("/:id", petCtrl.show)

// PET DELETE ROUTE
router.delete("/:id", petCtrl.delete)

// PET UPDATE ROUTE
router.put("/:id", petCtrl.update)


module.exports = router