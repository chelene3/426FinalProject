# 426FinalProject

## Proposal

Our group plans to design and implement a web application that essentially serves as
Yelp to find study locations near the user. When new students come to Chapel Hill, it is often
hard to find new study locations other than Davis, the Undergrad Library, and a few coffee
shops on Franklin. Our web application would allow students to easily access this information.
Furthermore, as campus libraries and many popular study locations are closed due to safety
and health precautions for covid-19, students are especially looking for new locations where
they can be productive or meet up with a friend over coffee right now. Our web application
would allow students to find study locations near them and easily access important information
about these locations, including covid-19 regulations as well as reviews on food, environment,
and affordability. While our current plan will focus on local study spots, our generic design and
implementation will make it scalable to any area where people are searching for study spots.

Our web application will allow users to make their own spots if the location is not already
on in the website’s database. It will also allow users to like and save other spots as well. In
order to maintain this information for each user, we will incorporate user authentication.
Everyone who makes a post on our website will be required to create an account. This will allow
users to access posts they have previously made and liked.

We will create, read, update, and delete posts from the backend by maintaining a
database of created posts that users that upload, edit, or delete themselves. In sections where
users describe their experiences at study locations, we will use HTML input elements with auto
complete fields. This will make user feedback relatively common and easy to navigate between
different users by having keywords that fill in based on what the user is typing. We will also give
the user the choice to free type if these keywords do not meet their experience descriptions. We
will implement a dynamic data source by rendering based on user input. One feature on the
webpage will be directions from the user’s device’s current location to the study spot they are
viewing on the page. We will use Google Maps as our 3rd part API in order to successfully
implement this feature. In addition, the Google Map API will serve as part of the key features of
displaying the top rated study spots nearby on a students home page/ feed.

## TLDR

“Yelp but for study spots”

Requirements:
- User authentication
- Everyone who uses it to make posts needs to create account
- Save past user posts and “likes”
- CRUD from backend
- We maintain a database of created posts that users can add, update, or delete
from
- HTML input
- Auto complete fields - Keywords that describe your experience
- Dynamic data source (rendering based on user input)
- 3rd party api
- Google maps

Fun stuff:
- Pictures
- Directions - w/ Google Maps
- Overall rating (based on combo of all individual ratings)
- 3-5 ish sub ratings (productivity, environment, noise, etc.)
- Food/Drink
- COVID restrictions (inside and outside)
- Tech stuff
- WiFi, outlets
- Keywords for experience
- Individual posts with own ratings and text description

User Accounts:
- Save spots
- History of posts
- Recommendations based on places visited


Backend Documentation:

GET
./location
- get
- returns all location IDS

./location/id
- get
- returns specific location object specified by ID

./logout
- get
- logs current user out

./user
-get
- returns the current user information including saved posts and username

./secret
- get
- returns all secret ids related to current logged in user.

./secret/id
- get
- returns secret specified by id if it belongs to this user

CREATE
./location
- post
- creates new location object to display and add posts too
- params : location object {name, address, lat, long,dinein, takeout, indoorseats, outodrrseats, noise, rating, price ,wifi, description, covid, hashtags[], profilPic, coverPic, posts}

./createUser
-post
- creates new user
- params: {username, password}

./secret
- post
- creates new secrete
- params: {username, secret}

POST
./login
- post
- starts user session for user after successful login
- params: {username, password}


UPDATE
./location/id
- put
- update location object (used to update posts)
- params : updated location object (see create location)

./editUser
-put
- updates the user that is currently logged in
- params: updated user object

./secret/id
- put
- updates the secret specified by the ID if the user owns this secret

DELETE
./location/id
- delete
- delete location specified by ID

./secret/id
- delete
- delete secret specifed by ID
