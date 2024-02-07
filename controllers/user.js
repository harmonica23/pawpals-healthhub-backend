///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { User } = require('../models');
const { unsubscribe } = require('../routes/pet');

// USER INDEX ACTION
async function index(req, res, next) {
    try {
        // get all users
        res.json(await User.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// USER CREATE ACTION
async function create(req, res, next) {
    try {
        // create new user
        res.json(await User.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// USER SHOW ACTION
async function show(req, res, next) {
    try {
        // send one user
        res.json(await User.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// USER DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // delete user by ID
        res.json(await User.findByIdAndDelete(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// USER UPDATE ACTION
async function update(req, res, next) {
    try {
        // update user by ID, provide the form data, and return the updated document.
        res.json(
            await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
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