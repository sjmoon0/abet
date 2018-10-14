import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CourseSchema = new Schema({
    instructor: {type: mongoose.Schema.Types.ObjectId, ref: 'Professor'},
    courseNumber:  Number,
    courseSubject: String,
    requiredMaterials: {
        isbn: Number,
        authors: String,
        title: String
    },
    courseDescription: String,
    mettingHours: Number,
    preReqs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
    outcomes: [String],
    studentOutcomes: [String],
    listOfTopicsCovered: String
});

//when I make the professor schema a model I need to make sure that I name it Professor
//course model should be called course