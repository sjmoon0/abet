import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ServiceSchema = new Schema({
    serviceTitle:  String,
    description: String,
    monthCompleted:   String,
    yearCompleted: String
  });
