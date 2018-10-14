import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProfessorMetaSchema = new Schema({
    firstName:  String,
    lastName: String,
    title: String,
    tenure: Boolean,
    created_date: {
      type: Date,
      default: Date.now
    }
  });
