//entrypoint to backend
const express = require('express');

const app = express();

const Location = require('./location.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/location', (req, res)=>{
    res.json(Location.getALLIDs());
    return;
});

app.get('/location/:id',(req, res)=> {
    let l = Location.findByID(req.params.id);
    if (l == null){
        res.status(404).send("No such location");
        return;
    }
    res.json(l);

});

app.post('/location', (req, res) => {
    let {name, address ,lat, long} = req.body;

    let l = Location.create(name, address, lat, long);
    if(l == null){
        res.status(400).send("Bad request");
        return;
    }
    return res.json(l);

})

app.put('/location/:id', (req,res)=> {
    let l = Location.findByID(req.params.id);
    if (l == null){
        res.status(404).send("No such location");
        return;
    }
    
    let {name, address ,lat, long} = req.body;
    l.name = name;
    l.address = address;
    l.lat = lat;
    l.long = long;

    l.update();

    res.json(l);

});

app.delete('/location/:id', (req, res) => {
    let l = Location.findByID(req.params.id);
    if(l==null){
        res.status(404).send("location not found");
        return;
    }
    l.delete();
    res.json(true);
});
const port = 3030;

app.listen(port, ()=>{
    console.log("app running on port " + port);
});