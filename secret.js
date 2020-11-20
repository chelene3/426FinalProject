const secret_data= require('data-store')({path:process.cwd() + '/data/secret.json'});
// name of database right now is users.json ^^

class Secret {
    constructor(id, username, secret, prevPost, likedPost){
        this.id=id;
        this.username= username;
        this.secret = secret;
        // the parameters for prevPost and likedPost should be boolean 
        // true or false depending on the secret
        this.prevPost = prevPost;
        this.likedPost = likedPost;
    }

    update() {
        secret_data.set(this.id.toString(), this);
    }

    delete(){
        secret_data.del(this.id.toString());
    }
}

Secret.getAllIDs = () => {
    //return array of all secret ids attached to a user
    return Object.keys(secret_data.data).map((id=> {return parseInt(id);}));
}

Secret.getAllIDsForUser = (username) => {
    return Object.keys(secret_data.data).filter(id => secret_data.get(id).username == username).map(id => parseInt(id));
}

Secret.findByID = (id) => {
    // uses data store value of secret_data to find secret
    let sdata = secret_data.get(id);
    if(sdata != null) {
        // returns a new instance of a secret... not sure if this is right
        return new Secret(sdata.id, sdata.username, sdata.secret);
    }
    return null;
}

Secret.next_id = Secret.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

Secret.create = (username, secret, type) => {
    let id = Secret.next_id;
    Secret.next_id += 1;
    if (type == "previous") {
        let u = new Secret(id, username, secret, true, false);
        secret_data.set(u.id.toString(), u);
        return u;
    } else {
        // a liked post
        let u = new Secret(id, username, secret, false, true);
        secret_data.set(u.id.toString(), u);
        return u;
    }
    
}
module.exports = Secret;
// next: 
// need to connect posting and liking with this user
// need a function to append post objects to their two properties: likedPosts and previousPosts