//entrypoint to backend
const express = require('express');

const app = express();

const Location = require('./location.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

let cors = require('cors');

const corsConfi = {
  origin: "http://localhost:3001",
  credentials: true
}

app.use(cors(corsConfi));

app.get('/location', (req, res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    res.json(Location.getALLIDs());
    return;
});

//returns location specified by the ID
app.get('/location/:id',(req, res)=> {
    let l = Location.findByID(req.params.id);
    if (l == null){
        res.status(404).send("No such location");
        return;
    }
    res.json(l);
});

//creates new location
app.post('/location', (req, res) => {
    let {name, address, lat ,long, dinein, takeout, indoorseats, outdoorseats, noise, rating, price, wifi, des, covid, hashtags, profilePic, coverPic, posts} = req.body;

    let l = Location.create(name, address, lat ,long, dinein, takeout, indoorseats, outdoorseats, noise, rating, price, wifi, des, covid, hashtags, profilePic, coverPic, posts);
    if(l == null){
        res.status(400).send("Bad request");
        return;
    }
    return res.json(l);
});

//updates location specified by id
app.put('/location/:id', (req,res)=> {
    let l = Location.findByID(req.params.id);
    if (l == null){
        res.status(404).send("No such location");
        return;
    }
    
    let {name, address, lat ,long, dinein, takeout, indoorseats, outdoorseats, noise, rating, price, wifi, des, covid, hashtags, profilePic, coverPic, posts} = req.body;
    l.name = name;
    l.address = address;
    l.lat = lat;
    l.long = long;
    l.dinein = dinein;
    l.takeout = takeout; 
    l.indoorseats = indoorseats;
    l.outdoorseats = outdoorseats;
    l.noise = noise;
    l.rating = rating;
    l.price = price;
    l.wifi = wifi;
    l.des = des;
    l.covid = covid;
    l.hashtags = hashtags; 
    l.profilePic = profilePic;
    l.coverPic = coverPic;
    l.posts = posts;

    l.update();
    res.json(l);

});

//delete location specified by id
app.delete('/location/:id', (req, res) => {
    let l = Location.findByID(req.params.id);
    if(l==null){
        res.status(404).send("location not found");
        return;
    }
    l.delete();
    res.json(true);
});
const port = 3000;

app.listen(port, ()=>{
    console.log("app running on port " + port);
});