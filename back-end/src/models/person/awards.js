import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AwardSchema = new Schema({
    nameOfAward:  String,
    description: String,
    monthRecieved:   String,
    yearRecieved: String
  });
