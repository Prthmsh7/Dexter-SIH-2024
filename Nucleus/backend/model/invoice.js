const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*Write the schema of your DB here */

const AppSchema = new Schema ({
    from: {type: String, require: true},
    to: {type: String, require: true},
    name: {type: String, require: true},
    amount: {type: String, require: true},
    date: {type : Date, default: Date.now}


})

module.exports = mongoose.model('invoices', AppSchema);