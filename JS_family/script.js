/*
Step 1: get # of family members from the user, 
                  store in variable (member Count)
Step 2: Loop memberCount times
    - ask user for age
    - add that age to the total
Step 3: print total
Step 4: If (total >= 100)
    - alert This family is over 100!
Else 
    - alert This family is NOT over 100.


*/ 
// NOTE: prompt always gives  string.

let memberCount = prompt("How many family members?")
let total = 0; 

for (let i = 0; i< memberCount; i++) {
    let age = Number( prompt("Enter family member age.") );
    total += age; 
} 
console.log("The family's cumulative age is" + total + "."); 

if (total >= 100){
alert("This family is over 100!");
} else {
alert("alert This family is NOT over 100.");
}
