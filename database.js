// {    STUDY LOCATION OBJECT
//     id: number,
//     name: string,
//     addr: string,
//     lat: num,
//     long: num,
//     dinein: boolean,
//     indoorseats: boolean,
//     takeout: boolean,
//     noise: number / like a scale,
//     rating: number out of 5,
//     price: number on scale out of 5?,
//     wifi: boolean,
// }
const database = [
    {
        id: 1,
        name: "Starbucks",
        addr: "103 E Franklin St, Chapel Hill, NC 27514",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:true,
        indoorseats: false,
        outdoorseats: false,
        noise: 3,
        rating: 4,
        price: 4,
        wifi: true,
    },
    {
        id: 2,
        name: "Davis Library",
        addr: "208 Raleigh St, Chapel Hill, NC 27514",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:false,
        indoorseats: true,  
        outdoorseats: true,      
        noise: 3,
        rating: 5,
        price: 0,
        wifi: true,
    },
    {
        id: 3,
        name: "Robert B. House Undergraduate Library",
        addr: "203 South Rd #3942, Chapel Hill, NC 27599",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:false,
        indoorseats: true,
        outdoorseats: true,
        noise: 3,
        rating: 5,
        price: 0,
        wifi: true,
    },
    {
        id: 4,
        name: "Stone and Leaf Café ",
        addr: "207 South Rd, Chapel Hill, NC 27599",
        lat: 0,
        long: 0,
        dinein:true,
        takeout:true,
        indoorseats: true,
        outdoorseats: true,
        noise: 4,
        rating: 5,
        price: 4,
        wifi: true,
    },
    {
        id: 5,
        name: "Fedex Center",
        addr: "301 Pittsboro Street Chapel Hill, NC 27516",
        lat: 0,
        long: 0,
        dinein:true,
        takeout:true,
        indoorseats: true,
        outdoorseats: true,
        noise: 4,
        rating: 5,
        price: 3,
        wifi: true,
    },
    {
        id: 6,
        name: "Health Science Library",
        addr: "335 S Columbia St, Chapel Hill, NC 27599",
        lat: 0,
        long: 0,
        dinein:true,
        takeout:true,
        indoorseats: true,
        outdoorseats: false,
        noise: 3,
        rating: 5,
        price: 3,
        wifi: true,
    },
    {
        id: 7,
        name: "Stone Library",
        addr: "Hanes Art Center, 121 E Cameron Ave, Chapel Hill, NC 27514",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:false,
        indoorseats: true,
        outdoorseats: false,
        noise: 3,
        rating: 5,
        price: 0,
        wifi: true,
    },
    {
        id: 8,
        name: "Chapel Hill Public library",
        addr: "Chapel Hill Public Library, 100 Library Dr, Chapel Hill, NC 27514",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:false,
        indoorseats: false,
        outdoorseats: false,
        noise: 2,
        rating: 4,
        price: 0,
        wifi: true,
    },
    {
        id: 9,
        name: "Summit Franklin",
        addr: "140 W Franklin St, Chapel Hill, NC 27516",
        lat: 0,
        long: 0,
        dinein:true,
        takeout:true,
        indoorseats: true,
        outdoorseats: true,
        noise: 3,
        rating: 4,
        price: 5,
        wifi: true,
    },
    {
        id: 10,
        name: "The Honeysuckle Cafe and Bar",
        addr: "601 W Main St, Carrboro, NC 27510",
        lat: 0,
        long: 0,
        dinein:true,
        takeout:true,
        indoorseats: true,
        outdoorseats: true,
        noise: 3,
        rating: 4,
        price: 4,
        wifi: true,
    },
    {
        id: 11,
        name: "Coco Bean Coffe Shop",
        addr: "1114 Environ Way, Chapel Hill, NC 27517",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:true,
        indoorseats: false,
        outdoorseats: true,
        noise: 3,
        rating: 4,
        price: 4,
        wifi: true,
    },
    {
        id: 11,
        name: "Johny's Gone Fishing",
        addr: "901 W Main St, Carrboro, NC 27510",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:true,
        indoorseats: false,
        outdoorseats: true,
        noise: 3,
        rating: 4,
        price: 4,
        wifi: true,
    },
    {
        id: 12,
        name: "Cafe Driade",
        addr: " 1215-A, E Franklin St, Chapel Hill, NC 27514",
        lat: 0,
        long: 0,
        dinein:false,
        takeout:true,
        indoorseats: false,
        outdoorseats: true,
        noise: 3,
        rating: 4,
        price: 4,
        wifi: true,
    },
    {
        id: 13,
        name: "Epilogue Books Chocolate Brews",
        addr: "109 E Franklin St #100, Chapel Hill, NC 27514",
        lat: 0,
        long: 0,
        dinein:true,
        takeout:true,
        indoorseats: true,
        outdoorseats: true,
        noise: 3,
        rating: 4,
        price: 4,
        wifi: true,
    }
];