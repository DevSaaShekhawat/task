const mongoose = require("mongoose");

DB_URI = "mongodb://127.0.0.1/testdb"

const connectDatabase = () => {

    mongoose.connect(DB_URI).then(()=>{
        console.log(`Mongodb connected`);
    }).catch((err) => {
        console.log(`Database Not Connected ${err}`);
    
    })

}


module.exports = connectDatabase;