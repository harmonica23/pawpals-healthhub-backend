///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Vax } = require('../models')

// VACCINE INDEX ACTION
async function index(req, res, next) {
    try {
        res.json(await Vax.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// VACCINE CREATE ACTION
async function create(req, res, next) {
    try {
        res.json(await Vax.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};

// VACCINE SHOW ACTION
async function show(req, res, next) {
    try {
        res.json(await Vax.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// VACCINE DESTROY ACTION
async function destroy(req, res, next) {
    try {
        res.json(await Vax.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// VACCINE UPDATE ACTION
async function update(req, res, next) {
    try {
        res.json(
            await Vax.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
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
            await Vax.findByIdAndDelete({pet:req.params.id})
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