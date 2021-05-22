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
//16. Write a MongoDB query to ...... contain 'Reg' as three letters somewhere in its name.
db.addresses.find(
    {name: /Reg/i},
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)
//17. Write a MongoDB query to ...... prepared either American or Chinese dish.
db.addresses.find({
    borough: "Bronx",
    $or: [
        {cuisine: "American"},
        {cuisine: "Chinese"}
    ]
})
//18.  Write a MongoDB query to find ...... borough Staten Island or Queens or Bronx or Brooklyn.
db.addresses.aggregate([
    {$project: {
        restaurant_id: 1,
        name: 1,
        cuisine: 1,
        borough: 1
    }},
    {$match: {
        $or: [
            {borough: "Staten Island"},
            {borough: "Queens"},
            {borough: "Bronx"},
            {borough: "Brooklyn"}
        ]
    }}
])
//19. Write a MongoDB query ...... not belonging to the borough Staten Island or Queens or Bronx or Brooklyn.
db.addresses.find(
    {borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},
    {
        restaurant_id: 1,
        name: 1,
        cuisine: 1,
        borough: 1
    }
)
//20. Write a MongoDB query ...... restaurants which achieved a score which is not more than 10.
db.addresses.find(
    {"grades.score": {$lt: 10}},
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)
//21. Write a MongoDB query ...... or restaurant's name begins with letter 'Wil'
db.addresses.find(
    {$or: [
      {name: /^Wil/}, 
      {$and: [
           {cuisine : {$ne :"American "}}, 
           {cuisine : {$ne :"Chinese"}}
       ]}
    ]},
    {
        restaurant_id : 1,
        name:1,
        borough:1,
        cuisine :1
    }
)
//22. Write a MongoDB query ...... scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates
db.addresses.find(
    {$and: [
        {"grades.grade": "A"},
        {"grades.score": 11},
        {"grades.date": ISODate("2014-08-11T00:00:00Z")}
    ]},
    {
        restaurant_id : 1,
        name:1,
        grades: 1
    }
)
//23. Write a MongoDB query ...... and score 9 on an ISODate "2014-08-11T00:00:00Z".
db.addresses.find(
    {
        "grades.1.grade": "A",
        "grades.1.score": 9,
        "grades.1.date": ISODate("2014-08-11T00:00:00Z")
    },
    {
        restaurant_id : 1,
        name:1,
        grades: 1
    }
)
//24. Write a MongoDB query to find ...... contains a value which is more than 42 and upto 52
db.addresses.find(
    {$and: [
        {"address.coord.1": {$lte: 52}},
        {"address.coord.1": {$gt: 42}}
    ]},
    {
        restaurant_id : 1,
        name:1,
        address: 1
    }
)
//25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
db.addresses.aggregate([{$sort: {name: 1}}])
//26. Write a MongoDB query to arrange the name of the restaurants in descending order along with all the columns.
db.addresses.aggregate([{$sort: {name: -1}}])
//27. Write a MongoDB query to arrange ...... for that same cuisine borough should be in descending order.
db.addresses.aggregate([
    {$sort: {cuisine: 1, borough: -1}}
])
//28. Write a MongoDB query to know whether all the addresses contain the street or not.
db.addresses.find({
    "address.street": {$exists: true}
})
//29. Write a MongoDB query which will ...... the coord field value is double.
db.addresses.find(
    {"address.coord": {$type: "double"}}
)
//30. Write a MongoDB query which will ...... after dividing the score by 7.
db.addresses.find(
    {"grades.score": {
        $mod: [7, 0]
    }},
    {
        restaurant_id: 1,
        name: 1,
        grades: 1
    }
)
//31. Write a MongoDB query to find ...... which contains 'mon' as three letter somewhere in its name
db.addresses.find(
    {name: /mon/g},
    {
        name: 1,
        borough: 1,
        cuisine: 1,
        "address.coord": 1
    }
)
//32. Write a MongoDB query to find ...... which contains 'Mad' as three letter somewhere in its name
db.addresses.find(
    {name: /^Mad/},
    {
        name: 1,
        borough: 1,
        "address.coord": 1,
        cuisine: 1
    }
)
