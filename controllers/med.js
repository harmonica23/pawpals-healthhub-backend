///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Med } = require('../models')

// MEDICATION INDEX ACTION
async function index(req, res, next) {
    try {
        // get all medications
        res.json(await Med.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// MEDICATION CREATE ACTION
async function create(req, res, next) {
    try {
        // create new medication
        res.json(await Med.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// MEDICATION SHOW ACTION
async function show(req, res, next) {
    try {
        // send one medication
        res.json(await Med.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// MEDICATION DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete medication by ID
        res.json(await Med.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// MEDICATION UPDATE ACTION
async function update(req, res, next) {
    try {
        // update medication by ID, provide the form data, and return the updated document.
        res.json(
            await Med.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// MEDS BY PET
async function medsByPet(req, res, next) {
    try {
        res.json(
            await Med.find({pet:req.params.id})
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

async function deleteMedsByPet(req, res, next) {
    try {
        res.json(
            await Med.find({pet:req.params.id})
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
    medsByPet,
    deleteMedsByPet
}