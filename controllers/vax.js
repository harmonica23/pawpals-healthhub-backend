///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Vax } = require('../models')

// VACCINE INDEX ACTION
async function index(req, res, next) {
    try {
        // get all vaccines
        res.json(await Vax.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VACCINE CREATE ACTION
async function create(req, res, next) {
    try {
        // create new vaccine
        res.json(await Vax.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VACCINE SHOW ACTION
async function show(req, res, next) {
    try {
        // send one vaccine
        res.json(await Vax.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VACCINE DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete vaccine by ID
        res.json(await Vax.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VACCINE UPDATE ACTION
async function update(req, res, next) {
    try {
        // update vaccine by ID, provide the form data, and return the updated document.
        res.json(
            await Vax.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VACCINES BY PET
async function vaxByPet(req, res, next) {
    try {
        res.json(
            await Vax.find({pet:req.params.id})
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// VACCINES BY PET
async function deleteVaxByPet(req, res, next) {
    try {
        res.json(
            await Vax.find({pet:req.params.id})
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
    vaxByPet,
    deleteVaxByPet
}