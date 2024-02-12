///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Diet } = require('../models')

// DIET INDEX ACTION
async function index(req, res, next) {
    try {
        // get all diets
        res.json(await Diet.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// DIET CREATE ACTION
async function create(req, res, next) {
    try {
        // create new diet
        res.json(await Diet.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// DIET SHOW ACTION
async function show(req, res, next) {
    try {
        // send one diet
        res.json(await Diet.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// DIET DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete diet by ID
        res.json(await Diet.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// DIET UPDATE ACTION
async function update(req, res, next) {
    try {
        // update diet by ID, provide the form data, and return the updated document.
        res.json(
            await Diet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// DIET BY PET
async function dietsByPet(req, res, next) {
    try {
        res.json(
            await Diet.find({pet:req.params.id})
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// DELETE DIET BY PET
async function deleteDietsByPet(req, res, next) {
    try {
        res.json(
            await Diet.findByIdAndDelete({pet:req.params.id})
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// EXPORT Controller Action
module.exports = {
    index,
    create,
    show,
    delete: destroy,
	update,
    dietsByPet,
    deleteDietsByPet
}