//1. Write a JS program to create ...... using global print method.
function person(fname, lname, age, skills, dateOfBirth, address, married, profession) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
};

person1 = new person("Nikhil", "Goud", 22, ["C"], "24/10/1996", { city: "Hyderabad", pincode: "521185" }, false, "Sr. Analyst");
person2 = new person("Harish", "Chinna", 21, ["HTML"], "08/06/1997", { city: "Ameerpet", pincode: "500038" }, false, "Jr. Analyst");

print = function() {
    console.log(person1);
    console.log(person2);
}();

//2. Modify the above program to create 2 ...... instead of creating it in Abhishek.
amitabh = new person("Amitabh", "Bachchan", 22, ["C"], "24/10/1996", { city: "Hyderabad", pincode: "521185" }, false, "Sr. Analyst");
abhishek = Object.assign(amitabh);
abhishek = {...abhishek,
    fname: "Abhishek",
    age: 21,
    skills: ["HTML"],
    dateOfBirth: "08/06/1997",
    married: false,
    profession: "Jr. Analyst"
};
print = function() {
    console.log(amitabh);
    console.log(abhishek.lname);
    console.log(abhishek.address);
}();

//3. Modify the above code to create third object ...... accordingly demonstrate on your own.
// !! INCOMPLETE !!
aaradhya = {...amitabh, ...abhishek };
console.log("Aaradhya: ", aaradhya);

//4. Create a JS program to implement ...
class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
};
class Savings extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
    }
}
class Current extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }
}
let savingsOne = new Savings("SA01", "John", 20000, false);
let currentOne = new Current("CA01", "Joe", 100000, 50000);

Savings.prototype.withdraw = function(amount) {
    var newBalance = this.accountBalance - amount;
    if (newBalance < 0) {
        console.error("Balance can't be negative.");
    } else {
        return newBalance;
    }
}
console.log(savingsOne.withdraw(1500));

Current.prototype.withdraw = function(amount) {
    var newBalance = this.accountBalance - amount;
    console.log(newBalance);
    console.log(this.odLimit);
    if (newBalance < this.odLimit) {
        console.error("Balance can't be negative");
    } else {
        return newBalance;
    }
}
console.log(currentOne.withdraw(500));

Savings.prototype.getCurrentBalance = function() {
    return this.accountBalance;
}
console.log(savingsOne.getCurrentBalance());
Current.prototype.getCurrentBalance = function() {
    return this.accountBalance;
}
console.log(currentOne.getCurrentBalance());