//1. Constants: Declare a constant & confirm its value cannot be changed.
const PI = Math.PI;
// PI = 3.14;       //Reassigning is impossible for "const"

//2. Scoping: Declare a variable inside if condition & make sure that it is not accessible outside if condition.
function canVote(age: number): void {
    if(age>18){
        let vote = true;
        console.log(vote);
    } else{
        let vote = false;
        console.log(vote);
    }
    // console.log(vote);       //If declared with "let", a variable cannot be accessed outside the scope. 
}
canVote(20);
