const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*Write the schema of your DB here */

const UserSchema = new Schema ({
    name: {type: String, require: true},
    email: {type: String, require: true},
    gender: {type: String, require: true},
    skills: {type: [], default: []},
    projects: {type: [], default: []},
    recruiter: {type: [], default: []},
    github: {type: String, require: true},
    about: {type: String},
    profileimg: {type: String},
    starts: {type: Number, default:0},
    date: {type : Date, default: Date.now}


})

module.exports = mongoose.model('users', UserSchema);