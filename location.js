const location_data = require('data-store')({path:process.cwd() + '/data/location.json'});

class Location {
    constructor(id, name, address, lat ,long ){
        this.id=id;
        this.name= name;
        this.address = address;
        this.lat= lat;
        this.long= long;
    }

    update() {
        location_data.set(this.id.toString(), this);
    }

    delete(){
        location_data.del(this.id.toString());
    }
}

Location.getALLIDs = () => {
    //return array of all location ids
    return Object.keys(location_data.data).map((id=> {return parseInt(id);}));
}

Location.findByID = (id) =>{
    let ldata =  location_data.get(id);
    if(ldata != null){
        return new Location(ldata.id, ldata.name, ldata.address, ldata.lat, ldata.long);
    }
   return null;
}

Location.next_id =  Location.getALLIDs().reduce((max, next_id) => {
    if(max< next_id){
        return next_id;
    }
    return max;
}, -1) +1;

Location.create = (name, address, lat, long) => {
    let id = Location.next_id;
    Location.next_id +=1;
    let l = new Location(id, name, address, lat, long);
    location_data.set(id.toString(), l);
    return l;
}

// let l1 = new Location(0, "Mill Creek", "706 MLK Blvd", 0.5, 1.3);
// location_data.set(l1.id.toString(), l1);


module.exports = Location;