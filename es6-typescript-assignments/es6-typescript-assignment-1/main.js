//3. Enhanced object properties: Create an ...... object using Object.assign().
let order = {
    id: 1,
    title: "Typescript",
    price: 200,
    printOrder() {},
    getPrice() {}
}
let copiedOrder = Object.assign(order);
console.log("Copied Order: ", copiedOrder);

//4. Arrow functions: Take an array ...... has two properties {string, string_length}.
let names = ['Tom', 'Ivan', 'Jerry'];
let convertIntoObject = (names) => {
    let namesAndLength = [];
    for (n of names) {
        namesAndLength.push({
            name: n,
            length: n.length
        });
    }
    console.log(namesAndLength);
}
convertIntoObject(names);

//5. Extended parameter handling: 
//a. Write a add() with default values.
function add(numOne = 20, numTwo = 39) {
    return numOne + numTwo;
}
//b. Write a function userFriends() that takes ...... list of friends. (Use rest parameters)
function userFriends(username, friends) {
    console.log("Username: ", username);
    console.log(...friends);
}
userFriends("joe", ['john', 'jules', 'frank']);
//c. Write a function printCapitalNames() ...... to call printCapitalNames() function.
function printCapitalNames(username, ...friends) {
    console.log("Username: ", username);
    console.log("Friends: ", friends);
}
printCapitalNames("john", "frank", "dave", "mike");

//6. Template literals: Draft a ticket to ...... laptop model, your desk no, your name, etc.
let ticketSysnet = {};
ticketSysnet.laptopModel = `HP050`;
ticketSysnet.deskNo = `LA90I9024`;
ticketSysnet.name = `JHNSMITH`;
console.log(ticketSysnet);

//7. De-structuring assignment:
//a. Suppose there is a javascript array with 4 elements. Print the value of 3rd element using array matching.
const arr = ['John', 'Smith', 'Thomas', 'George'];
const [a, b, c, d] = arr;
console.log(c);

//b. Create an organization object having ...... using object deep matching.
let organization = {
    name: "John",
    address: {
        street: "Downtown street",
        pinCode: 10202,
        city: "Paris"
    }
}
let { name, address: { pinCode } } = organization;
console.log("Pin Code: ", pinCode);

//8. Classes & Modules: Write a class Account ...... to find out total balance in the bank.
class Account {
    constructor(id, userName, balance) {
        this._id = id;
        this._userName = userName;
        this._balance = balance;
    }
}
class SavingAccount extends Account {
    constructor(id, userName, balance, interest) {
        super(id, userName, balance);
        this._interest = interest;
    }
    totalBalance() {
        return (this._balance + this._interest);
    }
}
class CurrentAccount extends Account {
    constructor(id, userName, balance, cash_credit) {
        super(id, userName, balance);
        this._cash_credit = cash_credit;
    }
    totalBalance() {
        return (this._balance + this._cash_credit);
    }
}
let savingAccountOne = new SavingAccount("SA1", "john", 20000, 1300);
console.log(savingAccountOne.totalBalance());
var savingAccountTwo = new SavingAccount("SA2", "jules", 2000, 290);
console.log(savingAccountTwo.totalBalance());
var currentAccountOne = new CurrentAccount("CA1", "frank", 15000, 30000);
console.log(currentAccountOne.totalBalance());
var currentAccountTwo = new CurrentAccount("CA2", "dave", 21420, 42000);
console.log(currentAccountTwo.totalBalance());