import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ExperienceSchema = new Schema({
    companyInstitution:  String,
    descripion: String,
    title: String,
    dateStart:   String,
    dateEnd: String,
    academic: boolean
  });
