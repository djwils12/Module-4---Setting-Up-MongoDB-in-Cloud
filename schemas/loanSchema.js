// Student: David Wilson
// ASU ID: 1218445852
// Date Created: 03/05/2023
// Description:  A database schema definition for MongoDB Atlas database

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerName: String,
    phoneNumber: String,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: { type: Date, default: Date.now },
    insertedDate: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;