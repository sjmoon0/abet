import mongoose from "mongoose";
import { Certificate } from "crypto";

const Schema = mongoose.Schema;

export const EducationSchema = new Schema({
    institution:  String,
    degreeCertRecieved: String,
    subject: String,
    yearCompleted:   String,
    disctinctionFellowship: String,
    certificate: boolean
  });
