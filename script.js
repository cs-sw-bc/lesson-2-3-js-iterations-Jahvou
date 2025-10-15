 //while == entry check loop
 let i=0; // iterator (or count)
 // Display hello 10 times
 while(i<10) {
    console.log("Hello");
    i++;
 }
 // this will cause an infinite loop (0 is always less than 10) (must update i)

//print hello loop until i type stop
// i know the ending condition but i dont know how many times to print hello
//best scenario to use while loops

//let answer ="yes";
//while (answer !="stop"){
   // console.log("Hellooo");
   // answer = prompt("enter stop to stop: ");
//}
//***** you can increment by any nubmer by specifying x+# (3) instead of simply x++
//Do While == exit check
//when you want to execute a block, atleast once
//let j=0;
//do{
  //  console.log("i want more pizza");
  //  j++;
//}while(j<3)

//let password = null;
//do{
    //password=prompt("Enter your password: ");
//}while (password !="Password123");

//convert while to for

for(let k=0;k<4;k++) {
    console.log("Hello from for loop");
}


const fruits = ["Apple", "Banana", "Mango", "Grapes"];
for (let count=0;count<fruits.length;count++){
    console.log(`The value of count is ${count}`);
    console.log(fruits[count]);
}
//add fruits.length and it will work for the entire length of the array. i can also do length-# 

//Array functions
const ages = [18,15,14,72,25,42];
//Map,Reduce,Filter


//Map - to multiply everything by 2
function double(d){
    return d*2;
}

const doubled_ages = ages.map(double);
//MAP it has an inbuilt for loop
//Takes each item from the ages array and calls the double function on each of them
console.log(doubled_ages);

//Filter - to return an output array with elements matching a certain condition
function isMajor(age){
    return age>=18;
}
const major_ages = ages.filter(isMajor);
console.log(major_ages);


for(let z=0;<ages.length;z++){
    if (ages[z] >=18){
        console.log(`${ages[z]} is a major age`)
    }else{
        console.log(`${ages[z]} is a minor age`)
    }
}

function printNumbers() {
    // Step 1: Get user input
    // Step 2: Use a for loop to print numbers 1 to input value
    // Step 3: Display result inside #output
}