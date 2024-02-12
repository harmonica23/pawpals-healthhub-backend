///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { VetConsult } = require('../models')

// VETERINARY CONSULT INDEX ACTION
async function index(req, res, next) {
    try {
        // get all vet consults
        res.json(await VetConsult.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VETERINARY CONSULT CREATE ACTION
async function create(req, res, next) {
    try {
        // create new vet consult
        res.json(await VetConsult.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VETERINARY CONSULT SHOW ACTION
async function show(req, res, next) {
    try {
        // send one vet consult
        res.json(await VetConsult.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VETERINARY CONSULT DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete vet consult by ID
        res.json(await VetConsult.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VETERINARY CONSULT UPDATE ACTION
async function update(req, res, next) {
    try {
        // update vet consult by ID, provide the form data, and return the updated document.
        res.json(
            await VetConsult.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// VET CONSULTS BY PET
async function vetByPet(req, res, next) {
    try {
        res.json(
            await VetConsult.find({pet:req.params.id})
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// DELETE VET CONSULTS BY PET
async function deleteVetByPet(req, res, next) {
    try {
        res.json(
            await VetConsult.find({pet:req.params.id})
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
    vetByPet,
    deleteVetByPet
}