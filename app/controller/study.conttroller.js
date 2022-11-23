import db from "../models";
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (request, response) => {
  if (!request.body.title) {
    response.states(400).send({ message: "Content can not be empty!" });
    return;
  }

  //Create a Study
  const study = new Study({
    title: request.body.title,
    description: request.body.description,
    published: request.body.published ? request.body.published : false
  });
  study
    .save(study)
    .then(data => {
      response.send(data);
    })
    .catch(err => {
      response.status(500).send({
        message:
          err.message || "some error occurred while creating the Study."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (request, response) => {
  const title = require.query.title;
  const condition = title ? {
    title: { $regex: new RegExp(title), $options: "i" }
  } :
    Study.find(condition)
      .then(data => {
        response.send(data);
      })
      .catch(err => {
        response.status(500).send({
          message:
            err.message || "Some error occurred while retrieving study."
        })
      })
};

// Find a single Tutorial with an id
exports.findOne = (request, response) => {
  const id = request.params.id;

  Study.findById(id)
    .then(data => {
      if (!data) response.status(404).send({ message: "Not found Study with id " + id });
    })
    .catch(err => {
      response.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (request, response) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (request, response) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (request, response) => {

};

// Find all published Tutorials
exports.findAllPublished = (request, response) => {

};