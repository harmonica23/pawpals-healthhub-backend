///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { User } = require('../models');
const { unsubscribe } = require('../routes/pet');

// USER INDEX ACTION
async function index(req, res, next) {
    try {
        res.json(await User.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// USER CREATE ACTION
async function create(req, res, next) {
    try {
        res.json(await User.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};

// USER SHOW ACTION
async function show(req, res, next) {
    try {
        res.json(await User.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// USER DESTROY ACTION
async function destroy(req, res, next) {
    try {
        res.json(await User.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
};

// USER UPDATE ACTION
async function update(req, res, next) {
    try {
        res.json(
            await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
	update
}