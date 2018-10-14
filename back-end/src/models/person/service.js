import mongoose from "mongoose";

const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
    serviceTitle:  String,
    description: String,
    monthCompleted:   String,
    yearCompleted: String
  });
