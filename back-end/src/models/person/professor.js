import mongoose from "mongoose";

const Schema = mongoose.Schema;

let ProfessorMetaSchema = new Schema({
    firstName:  String,
    lastName: String,
    title: String,
    tenure:   boolean
  });
