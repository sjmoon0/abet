import mongoose from "mongoose";

const Schema = mongoose.Schema;

let AwardSchema = new Schema({
    nameOfAward:  String,
    description: String,
    monthRecieved:   String,
    yearRecieved: String
  });
