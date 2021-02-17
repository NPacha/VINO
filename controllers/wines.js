const express = require('express');
const wineController = express.Router();
const Wine = require('../models/wine');

//INDUCES
//Index New Delete Update Create Edit Show
// ------- New, Edit
// Index, Delete, Update, Create, Show

//Create
wineController.post('/', async (req, res)=> {
    try{
        const newWine = await Wine.create(req.body);
        res
            .status(200)
            .json(newWine)
    }catch(error){
        res
            .status(400)
            .json(error)
    }
})

//Read

wineController.get('/', async (req, res) => {
    try{
        const foundWine = await Wine.find({});
        res
            .status(200)
            .json(foundWine)
    }catch(error){
        res
            .status(400)
            .json(error)
    }
})

/* Show */
wineController.get('/:id', async (req, res) => {
    try {
        const foundWine = await Wine.findById(req.params.id)
        res
          .status(200)
          .json(foundWine)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})


//Destroy
wineController.delete('/:id', async (req, res) => {
    try {
        const foundWine = await Wine.findByIdAndDelete(req.params.id)
        res
          .status(200)
          .json(foundWine)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})

//Update
wineController.put('/:id', async (req, res) => {
    try {
        const foundWine = await Wine.findByIdAndUpdate(req.params.id, req.body, { new: true } )
         res
          .status(200)
          .json(foundWine)
    } catch (error) {
        res 
          .status(400)
          .json(error)
    }
})


module.exports = wineController