const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*Write the schema of your DB here */

const AdminSchema = new Schema ({
    name: {type: String, require: true},
    email: {type: String, require: true},
    organization: {type: String},
    subscription: {type: Boolean, default:false},
    hired: {type: [], default: []},
    profileimg: {type: String},
    date: {type : Date, default: Date.now}

})

module.exports = mongoose.model('admins', AdminSchema);