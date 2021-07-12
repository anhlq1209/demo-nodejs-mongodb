const mongoose = require('mongoose')
const uri = "mongodb+srv://usertest:Usertest1209@cluster0.dfk1n.mongodb.net/test?retryWrites=true&w=majority";

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log(`Database connection successfully with uri: ${uri}!`);
            })
            .catch(err => {
                console.log('Database connection error!');
            })
    }
}

module.exports = new Database();