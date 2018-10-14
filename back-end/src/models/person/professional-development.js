import mongoose from "mongoose";

const Schema = mongoose.Schema;

let ProfessionalDevelopmentSchema = new Schema({
    activityTitle:  String,
    activityDescription: String,
    location: String,
    monthCompleted:   String,
    yearCompleted: String
  });
