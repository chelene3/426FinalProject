const user_data= require('data-store')({path:process.cwd() + '/data/users.json'});
// name of database right now is users.json ^^

class User {
    constructor(id, username, password){
        this.id=id;
        this.username= username;
        this.password = password;
        this.previousPosts = [];
        this.likedPosts = [];
    }

    update() {
        user_data.set(this.id.toString(), this);
    }

    delete(){
        user_data.del(this.id.toString());
    }
}

User.getAllIDs = () => {
    //return array of all user ids
    return Object.keys(user_data.data).map((id=> {return parseInt(id);}));
}

User.getAllIDsForUser = (username) => {
    // should this be checking anything with passwords?
    return User.keys(user_data.data).filter(id => user_data.get(id).username == username).map(id => parseInt(id));
}

User.findByID = (id) => {
    // uses data store value of user_data to find user
    let user1 = user_data.get(id);
    if(user1 != null) {
        // returns a new instance of a User... not sure if this is right
        return new User(user1.id, user1.username, user1.password);
    }
    return null;
}

User.next_id = User.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

User.create = (username, password) => {
    let id = User.next_id;
    User.next_id += 1;
    let u = new User(id, username, password);
    user_data.set(u.id.toString(), u);
    return u;
}
module.exports = User;
// next: 
// need to connect posting and liking with this user
// need a function to append post objects to their two properties: likedPosts and previousPosts