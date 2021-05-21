//-------- MongoDB: Complex Queries -----------
//Exercise Questions
//1. Write a MongoDB query to display all the documents in the collections restaurants
db.addresses.find()
//2. Write a MongoDB query to display ...... the documents in the collections restaurants
db.addresses.aggregate([
    {$project: {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }}
])
//3. Write a MongoDB query ...... exclude the field _id for all the documents in the collections restaurants
db.addresses.aggregate([
    {$project: {
        _id: 0,
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }}
])
//4. Write a MongoDB query ...... exclude the field _id for all the documents in the collections restaurants
db.addresses.aggregate([
    {$project: {
        _id: 0,
        restaurant_id: 1,
        name: 1,
        borough: 1,
        zipcode: "$address.zipcode"
    }}
])
//5. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx
db.addresses.aggregate([
    {$match: {borough: "Bronx"}},
    {$limit: 5}
])
//6. Write a MongoDB query to display all the restaurant which is in the borough Bronx
db.addresses.aggregate([
    {$match: {borough: "Bronx"}}
])
//7. Write a MongoDB query to display the next 5 restaurant ...... the borough Bronx
db.addresses.find({borough: "Bronx"}).skip(5).limit(5)
//8. Write a MongoDB query to find the restaurants who achieved a score more than 90
db.addresses.find({
    grades: {
        $elemMatch: {
            score: {$gt: 90}
        }
    }
})
//9. Write a MongoDB query to find the restaurants who achieved a score more than 80 but less than 100
db.addresses.find({
    grades: {
        $elemMatch: {
            score: {$gt: 80, $lt: 100}
        }
    }
})
//10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168
db.addresses.find({"address.coord": {$lt: -95.754168}})
//11. Write a MongoDB query to find the restaurants that ...... lattitude less than -65.754168.
db.addresses.find({
    cuisine: {$ne: "American"},
    "grades.score": {$gt: 70},
    "address.coord": {$lt: -65.754168}
})
//12. Write a MongoDB query to find the restaurants which ...... longitude less than -65.754168.
db.addresses.find({
    cuisine: {$ne: "American"},
    "grades.score": {$gt: 70},
    "address.coord": {$lt: -65.754168}
})
//13. Write a MongoDB query to find the restaurants which ...... the cuisine in descending order.
db.addresses.aggregate([
    {$match: { 
        cuisine: {$ne: "American"}, 
        "grades.grade": "A", 
        borough: {$ne: "Brooklyn"}
    }},
    {$sort: {cuisine: -1}}
])
//14. Write a MongoDB query to ...... contain 'Wil' as first three letters for its name.
db.addresses.find(
    {name: /^Wil/},
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)
//15. Write a MongoDB query to ...... contain 'ces' as last three letters for its name.
db.addresses.find(
    {name: /ces$/},
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)