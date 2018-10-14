import mongoose from "mongoose";
import {ProfessorMetaSchema} from "../models/person/professor";

const Professor = mongoose.model('Professor', ProfessorMetaSchema);

//adds a new prof
export const addNewProfessor = (req, res) => {
    let newProf = new Professor(req.body);
    newProf.save((err, prof) => {
        if (err) {
            res.send(err);
        }
        res.json(prof);
    });
};

//Returns all of the professors in the collection
export const getProfessors = (req, res) => {
    Professor.find({}, (err, prof) => {
      if (err) {
        res.send(err);
      }
      res.json(prof);
    });
  };
  
  //Gets a specific professor based on ID (might need modified later, just wanted a mockup)
  export const getSpecificProfessor = (req, res) => {
    Professor.findById(req.params.profId, (err, prof) => {
      if (err) {
        res.send(err);
      }
      res.json(prof);
    });
  };
  
  //updates a professor 
  export const updateProfessor = (req, res) => {
    Professor.findOneAndUpdate(
      { _id: req.params.profId },
      req.body,
      { new: true },
      (err, prof) => {
        if (err) {
          res.send(err);
        }
        res.json(prof);
      }
    );
  };
  
  export const deleteProfessor = (req, res) => {
    Professor.remove({ _id: req.params.profId }, (err, prof) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "You have deleted a professor" });
    });
  };