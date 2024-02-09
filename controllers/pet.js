///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Pet } = require('../models')

// PET INDEX ACTION
async function index(req, res, next) {
    try {
        // get all pets
        res.json(await Pet.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// PET CREATE ACTION
async function create(req, res, next) {
    try {
        // Extract necessary data from the request
        const { name, birthday, kind, gender, spayNeuterStatus } = req.body;
        const imagePath = req.file ? req.file.path : null;

        // Create new pet with image path
        const newPet = await Pet.create({
            name,
            birthday,
            kind,
            gender,
            spayNeuterStatus,
            image: imagePath,
        });

        // Send the created pet as a response
        res.json(newPet);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(400).json(error);
    }
}

// PET SHOW ACTION
async function show(req, res, next) {
    try {
        // send one pet
        res.json(await Pet.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// PET DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete pet by ID
        res.json(await Pet.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// PET UPDATE ACTION
async function update(req, res, next) {
    try {
        // update pet by ID, provide the form data, and return the updated document.
        res.json(
            await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// EXPORT Controller Action
module.exports = {
    index,
    create,
    show,
    delete: destroy,
	update
}