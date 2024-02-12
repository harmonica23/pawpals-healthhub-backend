///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { Incident } = require('../models')

// INCIDENT INDEX ACTION
async function index(req, res, next) {
    try {
        // get all incidents
        res.json(await Diet.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// INCIDENT CREATE ACTION
async function create(req, res, next) {
    try {
        // create new incident
        res.json(await Incident.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// INCIDENT SHOW ACTION
async function show(req, res, next) {
    try {
        // send one incident
        res.json(await Incident.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};


// INCIDENT DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete incident by ID
        res.json(await Incident.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// INCIDENT UPDATE ACTION
async function update(req, res, next) {
    try {
        // update incident by ID, provide the form data, and return the updated document.
        res.json(
            await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// INCIDENTS BY PET
async function incidentsByPet(req, res, next) {
    try {
        res.json(
            await Incident.find({ pet: req.params.id })
        );
    } catch (error) {
        res.status(400).json(error);
    }
};

// DELETE INCIDENTS BY PET
async function deleteIncidentsByPet(req, res, next) {
    try {
        res.json(
            await Incident.findByIdAndDelete({ pet: req.params.id })
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
    incidentsByPet,
    deleteIncidentsByPet
}