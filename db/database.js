const mongoose = require('mongoose')
const uri = "mongodb://localhost:27017";    //  Localhost of mongodb

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(process.env.DATABASE_URL || uri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /* useFindAndModify: false,
            useCreateIndex: true */ })
                .then(() => {
                    console.log(`Database connection successfully with uri: ${uri}!`);
                })
                .catch(err => {
                    console.log('Database connection error!');
                })
    }
}

module.exports = new Database();