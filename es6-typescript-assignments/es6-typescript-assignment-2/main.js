//3. Generators: Write a program that returns next ...... one thousand then throw an error.
function* getNextArmstrong(higherLimit = 1000) {
    for (let i = 1; i <= higherLimit; i++) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt(temp / 10);
        }
        if (sum == i) {
            yield i;
        }
    }
}
let armstrongGenerator = getNextArmstrong();
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);
console.log(armstrongGenerator.next().value);

//4. Collections: Using Set & Map, create a static data ...... listing down all message from a chatroom.
let chatroomOne = new Map()
chatroomOne.set('John', {
    msgOne: "Hello, I am John",
    msgTwo: "I am from NY",
    msgThree: "I am a Developer",
    msgFour: " Lets Build Something. ",
})
chatroomOne.set('Jules', {
    msgOne: "Hello, I am Jules",
    msgTwo: "I am from CA",
    msgThree: "I am a Test",
    msgFour: " Lets Test properly.",
})
chatroomOne.set('Jack', {
    msgOne: "Hello, I am Jack",
    msgTwo: "I am from LA",
    msgThree: "I am a Developer",
    msgFour: " Lets Develop.",
})

let chatroomTwo = new Map()
chatroomTwo.set('Martin', {
    msgOne: "Hello, I am Martin",
    msgTwo: "I am from FL",
    msgThree: "I am a Developer",
    msgFour: " Lets Develop something Spectacular. ",
})
chatroomTwo.set('Joe', {
    msgOne: "Hello, I am Joe",
    msgTwo: "I am from NY",
    msgThree: "I am an Analyst",
    msgFour: " Lets Analyze.",
})
chatroomTwo.set('Thomas', {
    msgOne: "Hello, I am Thomas",
    msgTwo: "I am from DC",
    msgThree: "I am a Pentester",
    msgFour: " Lets check for security. ",
})

console.log("Total Users in chatroom One : " + chatroomOne.size);
console.log(chatroomOne);
chatroomOne.forEach((value, key, map) => {
    console.log(`${key}`);
    console.log(chatroomOne.get(`${key}`));
});

console.log("Total Users in chatroom Two : " + chatroomTwo.size);
console.log(chatroomTwo);
chatroomOne.forEach((value, key, map) => {
    console.log(`${key}`);
    console.log(chatroomOne.get(`${key}`));
});