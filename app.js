import express from "express"
import fetch from "node-fetch";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.set('view engine', 'ejs')


const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    last:{
        type: String,
        required: true,
    },
    buy:{
        type: String,
        required: true,
    },
    sell: {
        type: String,
        required: true,
    },
    volume: {
        type: String,
        required: true,
    },
    base_unit: {
        type: String,
        required: true,
    }
});

const Post = mongoose.model("Post",postSchema);


async function getPosts(){
    const myPosts = await fetch("https://api.wazirx.com/api/v2/tickers")
    const response = await myPosts.json();


    

    const entries = Object.entries(response);
    entries.map(([key, val] = entry) => {
        const post = new Post({
                     name:val.name,
                     last:val.last,
                     buy:val.buy,
                     sell:val.sell,
                     volume:val.volume,
                     base_unit:val.base_unit,
                 });
                 post.save();
    })
}

getPosts();

app.get('/', (req, res) => {
    Post.find({}).limit(10)
    .then((x)=>{
        res.render('index.ejs', {x})
        
    }).catch((y)=>{
        console.log(y)
    })
})



export default app;