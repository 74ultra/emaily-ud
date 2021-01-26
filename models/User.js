const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});
// schema to create a new Schema object for a new collection
// describes what every individual record is going to look like - properties


mongoose.model('users', userSchema);
// To create an actual model class and tell mongoose that it needs to be aware that this new collection needs to be created
// First argument: name of collection
// Second argument: schema

// Mongoose checks to see if the collection already exists before creating a new one
// Can freely add or subtract properties during dev process

// Just creating the file does not mean it gets executed. It must be required in another executed file