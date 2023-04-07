
import app from "./app.js";
import mongoose from "mongoose";

const PORT = 4000;



const DB_URI = "mongodb://127.0.0.1/testdb"

const connectDatabase = () => {

    mongoose.connect(DB_URI).then(()=>{
        console.log(`Mongodb connected`);
    }).catch((err) => {
        console.log(`Database Not Connected ${err}`);
    
    })

}


connectDatabase();



const server = app.listen(PORT, ()=> {
    console.log(`Server is working on http://localhost:${PORT}`);
})