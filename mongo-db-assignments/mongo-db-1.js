/*
MongoDB Exercise in Mongo shell

Connect to a running mongo instance, use a database named mongo_practice.
Document all your queries in a javascript file to use as a reference. 
*/
use mongo_practice

// Insert movies
db.movies.insertOne({
    title: "Fight Club",
    writer: "Chuck Palahniuko",
    year: 1999,
    actors: [
        "Brad Pitt",
        "Edward Norton"
    ]
})

db.movies.insertMany([
    {
        title: "Pulp Fiction",
        writer: "Quentin Tarantino",
        year: 1994,
        actors: [
            "John Travolta",
            "Uma Thurman"
        ]
    },
    {
        title: "Inglorious Basterds",
        writer: "Quentin Tarantino",
        year: 2009,
        actors: [
            "Brad Pitt",
            "Diane Kruger",
            "Eli Roth"
        ]
    },
])

db.movies.insertMany([
    {
        title: "The Hobbit: An Unexpected Journey",
        writer: "J.R.R.Tolkein",
        year: 2012,
        franchise: "The Hobbit"
    },
    {
        title: "The Hobbit: The Desolation of Smaug",
        writer: "J.R.R.Tolkein",
        year: 2013,
        franchise: "The Hobbit"
    },
    {
        title: "The Hobbit: The Battle of the Five Armies",
        writer: "J.R.R.Tolkein",
        year: 2012,
        franchise: "The Hobbit",
        synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the lonely mountains from falling into the hands of a rising darkness"
    }
])

db.movies.insertMany([
    {
        title: "Pee Wee Herman's Big Adventure"
    },
    {
        title: "Avatar"
    }
])

// Query or Find Documents
// Query the movies collection to 
//1. get all documents
db.movies.find()
//2. get all documents with writer set to "Quentin Tarantino"
db.movies.find({writer: "Quentin Tarantino"})
//3. get all documents with actor set to "Brad Pitt"
db.movies.find({actors: "Brad Pitt"})
//4. get all documents with franchise set to "The Hobbit"
db.movies.find({franchise: "The Hobbit"})
//5. get all the movies released in the 90's
db.movies.find({year: {$lt: 2000}})
//6. get all the movies released before the year 2000 or after 2010
db.movies.find({
    $or: [
        {year: {$lt: 2000}},
        {year: {$gt: 2010}}
    ]
})

//Update Documents
//1. Add a synopsis to "The Hobbit...... the dragon Smaug"
db.movies.update(
    {
        title: "The Hobbit: An Unexpected Journey"
    },
    {
        $set: {
            synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug"
        }
    }
)
//2. Add a synopsis to "The Hobbit...... and magical ring"
db.movies.update(
    {
        title: "The Hobbit: The Desolation of Smaug"
    },
    {
        $set: {
            synopsis: "The dwarves along with Bilbo Baggins and Gandalf the Grey continue their quest to reclaim Erebor, their homeland from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring"
        }
    }
)
//3. Add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.updateOne(
    {
        title: "Pulp Fiction"
    },
    {
        $push: {
            actors: "Samuel L. Jackson"
        }
    }
)

//Text Search
//Find all movies that
//1. have a synopsis that contains the word "Bilbo"
db.movies.createIndex({synopsis: "text"})
db.movies.find({$text: {$search: "Bilbo"}})
//2. have a synopsis that contains the word "Gandalf"
db.movies.find({$text: {$search: "Gandalf"}})
//3. have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({$text: {$search: "Bilbo -Gandalf"}})
//4. have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({$text: {$search: "dwarves hobbit"}})
//5. have a synopsis that contains the word "gold" and "dragon"


//Delete Documents
//1. delete the movie "Pee Wee Herman's Big Adventure"
db.movies.deleteOne({title: "Pee Wee Herman's Big Adventure"})
//2. delete the movie "Avatar"
db.movies.deleteOne({title: "Avatar"})

//------------------------------------------------------------------------------
//Relationships
//1. Insert the following documents into a users collection
db.users.insertMany([
    {
        username: "GoodGuyGreg",
        first_name: "Good Guy",
        last_name: "Greg"
    },
    {
        username: "ScumbagSteve",
        full_name: {
            first_name: "Scumbag",
            last_name: "Steve"
        }
    }
])
//2. Insert the following documents into a posts collection
db.posts.insertMany([
    {
        username: "GoodGuyGreg",
        title: "Passes out at party",
        body: "Wakes up early and cleans house"
    },
    {
        username: "GoodGuyGreg",
        title: "Steals your identity",
        body: "Raises your credit score"
    },
    {
        username: "GoodGuyGreg",
        title: "Reports a bug in your code",
        body: "Sends you a pull request"
    },
    {
        username: "ScumbagSteve",
        title: "Borrows something",
        body: "Sells it"
    },
    {
        username: "ScumbagSteve",
        title: "Borrows everything",
        body: "The end"
    },
    {
        username: "ScumbagSteve",
        title: "Forks your repo on github",
        body: "Sets to private"
    }
])
//3. Insert the following documents into a comments collection
db.comments.insertMany([
    {
        username: "GoodGuyGreg",
        comment: "Hope you got a good deal!",
        post: ObjectId("60a6a585ba380c87665c37a8")
    },
    {
        username: "GoodGuyGreg",
        comment: "What's mine is yours!",
        post: ObjectId("60a6a585ba380c87665c37a9")
    },
    {
        username: "GoodGuyGreg",
        comment: "Don't violate the licensing agreement!",
        post: ObjectId("60a6a585ba380c87665c37aa")
    },
    {
        username: "ScumbagSteve",
        comment: "It still isn't clean",
        post: ObjectId("60a6a585ba380c87665c37a5")
    },
    {
        username: "ScumbagSteve",
        comment: "Denied your PR cause I found a hack",
        post: ObjectId("60a6a585ba380c87665c37a7")
    }
])

//Querying related collections
//1. find all users
db.users.find({})
//2. find all posts
db.posts.find({})
//3. find all posts that was authored by "GoodGuyGreg"
db.posts.find({username: "GoodGuyGreg"})
//4. find all posts that was authored by "ScumbagSteve"
db.posts.find({username: "ScumbagSteve"})
//5. find all comments
db.comments.find({})
//3. find all comments that was authored by "GoodGuyGreg"
db.comments.find({username: "GoodGuyGreg"})
//4. find all comments that was authored by "ScumbagSteve"
db.comments.find({username: "ScumbagSteve"})
//5. find all comments belonging to the post "Reports a bug in your code"
db.comments.find({post: ObjectId("60a6a585ba380c87665c37a7")})
