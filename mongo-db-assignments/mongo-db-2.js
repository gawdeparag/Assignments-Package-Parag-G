//Atlanta population
//1. Use db.zipcodes.find() to ...... where city is ATLANTA and state is GA
db.zipcodes.find({city: "ATLANTA", state: "GA"})
//2. use db.zipcodes.aggregate with $match to do the same as above
db.zipcodes.aggregate({ $match: {city: "ATLANTA", state: "GA"} })
//3. use $group to count the number of zip codes in ATLANTA
db.zipcodes.aggregate([
    {$group: {_id: {city: "$city", zipcode: "$_id"}}},
    {$match: {"_id.city": "ATLANTA"}},
    {$count: "zipcode"}
])
//4. use $group to find the total population in Atlanta
db.zipcodes.aggregate([
    {$match: {city: "ATLANTA"}},
    {$group: {
        _id: "$city",
        "totalPopulation": {
            $sum: "$pop"
        }
    }}
])

//Populations By State
//1. use aggregate to calculate the total population for each state
db.zipcodes.aggregate([
    {$group: {
        _id: "$state",
        "totalPopulation": {
            $sum: "$pop"
        }
    }}
])
//2. sort the results by population, highest first
db.zipcodes.aggregate([
    {$group: {
        _id: "$state",
        "totalPopulation": {
            $sum: "$pop"
        }
    }},
    {$sort: {totalPopulation: -1}}
])
//3. limit the results to just the first 3. What are the top 3 states in population?
db.zipcodes.aggregate([
    {$group: {
        _id: "$state",
        "totalPopulation": {
            $sum: "$pop"
        }
    }},
    {$sort: {totalPopulation: -1}},
    {$limit: 3}
])
// TOP 3 STATES IN POPULATION: CA, NY, TX

//Populations by City
//1. use aggregate to calculate ...... $group: {city: '$city', state: '$state'}
db.zipcodes.aggregate([
    {$group: {
        _id: {
            city: "$city",
            state: "$state"
        },
        "totalPopulation": {
            $sum: "$pop"
        }
    }}
])
//2. sort the results by population, highest first
db.zipcodes.aggregate([
    {$group: {
        _id: {
            city: "$city",
            state: "$state"
        },
        "totalPopulation": {
            $sum: "$pop"
        }
    }},
    {$sort: {totalPopulation: -1}},
])
//3. limit the results to just the first 3 results. What are the top 3 cities in population?
db.zipcodes.aggregate([
    {$group: {
        _id: {
            city: "$city",
            state: "$state"
        },
        "totalPopulation": {
            $sum: "$pop"
        }
    }},
    {$sort: {totalPopulation: -1}},
    {$limit: 3}
])
// TOP 3 CITIES IN POPULATION: CHICAGO, BROOKLYN, LOS ANGELES
//4. What are the top 3 cities in population in Texas?
db.zipcodes.aggregate([
    {$match: {state: "TX"}},
    {$group: {
        _id: {
            city: "$city",
        },
        "totalPopulation": {
            $sum: "$pop"
        }
    }},
    {$sort: {totalPopulation: -1}},
    {$limit: 3}
])
// TOP 3 CITIES IN POPULATION IN TEXAS: HOUSTON, DALLAS, SAN ANTONIO

//Bonus
//1. Write a Query to get the average city population for each state
db.zipcodes.aggregate([
    {$group: {
        _id: {
            state: "$state"
        },
        "avgPopulation": {
            $avg: "$pop"
        }
    }}
])
//2. What are the top 3 states in terms of average city population
db.zipcodes.aggregate([
    {$group: {
        _id: {
            state: "$state"
        },
        "avgPopulation": {
            $avg: "$pop"
        }
    }},
    {$sort: {avgPopulation: -1}},
    {$limit: 3}
])
// TOP 3 STATES IN TERMS OF AVERAGE CITY POPULATION: DC, CA, FL