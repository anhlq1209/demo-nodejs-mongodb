const mongoose = require('mongoose')
const uri = "mongodb+srv://dbTest:Mongodb1209%40@clustertest.lhoky.mongodb.net/test?retryWrites=true&w=majority";

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