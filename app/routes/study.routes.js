import { createData, findAllData, findOneData, updateData, deleteData, deleteAllData, findAllPublished } from "../controller/study.controller.js"
import express from "express";


const router = express.Router()

//Create a new Study
router.post("/", createData)

//Retrieve all Study
router.get('/', findAllData);

// //Retrieve all published Study
router.get('/published', findAllPublished);

// //Retrieve all single Study with id
router.get('/:id', findOneData);

// //Update a study with id
router.put('/id', updateData);

// //Delete a study with id
router.delete('/:id', deleteData);

// //Create a new study
router.delete('/', deleteAllData);

export default router;