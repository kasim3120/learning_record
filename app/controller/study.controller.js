import db from "../models/index.js";

const Study = db.study;

const createData = (request, response) => {
  if (!request.body.title) {
    response.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  //Create a Study
  const study = new Study(
    {
      title: request.body.title,
      description: request.body.description,
      published: request.body.published ? request.body.published : false
    }
  );
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



// Create and Save a new study


// // Retrieve all study from the database.
const findAllData = (request, response) => {
  const title = request.query.title;
  const condition = title ? {
    title: { $regex: new RegExp(title), $options: "i" }
  } : {}
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

// // Find a single study with an id
const findOneData = (request, response) => {
  const id = request.params.id;

  Study.findById(id)
    .then(data => {
      if (!data) response.status(404).send({ message: "Not found Study with id " + id });
    })
    .catch(err => {
      response.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

// // Update a study by the id in the request
const updateData = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = require.params.id;

  Study.findByIdAndUpdate(id, require.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        response.status(404).send({
          message: `Cannot update Study with id=${id}. Maybe Study was not found!`
        });
      }
      else {
        response.send({ message: "Study was update successfully." });
      }
    })
    .catch(err => {
      response.status(500).send({
        message: "Error updating Study with id=" + id
      });
    });
};

// // Delete a study with the specified id in the request
const deleteData = (request, response) => {
  const id = request.params.id;

  Study.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        response.status(404).send({
          message: `Cannot delete Study with id=${id}. Maybe Study was not found!`
        });
      }
      else {
        response.send({
          message: "Study was deleted successfully."
        });
      }
    })
    .catch(err => {
      response.status(500).send({
        message: "Could not delete Study with id=" + id
      });
    });
};

// // Delete all study from the database.
const deleteAllData = (request, response) => {
  Study.deleteMany({})
    .then(data => {
      response.send({
        message: `${data.deletedCount} Study were deleted successfully`
      })
    })
    .catch(err => {
      response.status(500).send({
        message: err.message || "Some error occurred white removing all study."
      });
    });
};

// // Find all published study
const findAllPublished = (request, response) => {
  Study.find({ published: true })
    .then(data => {
      response.send(data);
    })
    .catch(err => {
      response.status(500).send({
        message: err.message || "Some error occurred while retrieving study."
      })
    })
};

export { createData, findAllData, findOneData, updateData, deleteData, deleteAllData, findAllPublished };
