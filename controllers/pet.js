///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Pet } = require('../models')

// PET INDEX ACTION
async function index(req, res, next) {
    try {
        res.json(await Pet.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// PET CREATE ACTION
async function create(req, res, next) {
    req.body.owner = req.params.id
    try {
        const newPet = await Pet.create(req.body)
        res.json(newPet);
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
}

// PET SHOW ACTION
async function show(req, res, next) {
    try {
        res.json(await Pet.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// PET DESTROY ACTION
async function destroy(req, res, next) {
    try {
        res.json(await Pet.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// PET UPDATE ACTION
async function update(req, res, next) {
    try {
        res.json(
            await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    index,
    create,
    show,
    delete: destroy,
	update
}