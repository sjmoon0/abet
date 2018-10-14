import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PublicationSchema = new Schema({
    journalName:  String,
    volume: String,
    conferenceName: String,
    monthPublished:   String,
    yearPublished: String,
    coAuthors: {
        name: String,
        institution: String
    }
  });
