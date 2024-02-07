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
        // create new pet
        res.json(await Pet.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// PET SHOW ACTION
async function show(req, res, next) {
    try {
        // send one person
        res.json(await Pet.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// ... the remaining pet controller actions will go below

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