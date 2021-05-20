//Atlanta population
//1. Use db.zipcodes.find() to ...... where city is ATLANTA and state is GA
db.zipcodes.find({city: "ATLANTA", state: "GA"})
//2. use db.zipcodes.aggregate with $match to do the same as above
db.zipcodes.aggregate({ $match: {city: "ATLANTA", state: "GA"} })
//3. use $group to count the number of zip codes in ATLANTA
db.zipcodes.aggregate([
    {$match: {city: "ATLANTA", state: "GA"}},
    {$count: "cityAndstate"}
])  //Correction to be done
//4. 