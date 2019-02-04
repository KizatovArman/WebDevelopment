/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log(10*2 +90 - 68);
//string addition
//"Hello" + " world" = "Hello world".
//variables creation
var name ="Arman";
var age = 19;
age +=1;
/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */

var celsius = 12;
var fahrenheit = celsius*1.8 + 32;

console.log(fahrenheit);
"The man whispered, \"please speak to me.\""
//Result: The man whispered, "please speak to me."
/*Quotes
Code	Character
\\	\ (backslash)
\"	'' (double quote)
\'	' (single quote)
\n	newline
\t	tab
*/
/*
 * Programming Quiz: Favorite Food (2-3)
 */
var favouriteFood = "Hambburger";
console.log(favouriteFood);
/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);
/*
 * Programming Quiz: All Tied Up (2-5)
 */

var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!"
console.log(joke);
/*
 * Programming Quiz: Yosa Buson (2-6)
 */
var firstPart="Blowing from the west";
var secondPart="Fallen leaves gather";
var thirdPart="In the east.";
var haiku = firstPart+"\n"+secondPart+"\n"+thirdPart;
console.log(haiku);
/*
 * Programming Quiz: Semicolons! (2-8)
 */

var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne+" "+thingTwo);
/*
 * Programming Quiz: What's my Name? (2-9)
 */

var fullName = "Kizatov Arman Basbulatovisch";
/*
 * Programming Quiz: Out to Dinner (2-10)
 */

var bill =10.25 + 3.99 + 7.15;
var tip = bill*0.15;
var total = bill +tip;
console.log(total.toFixed(2) +"$");
/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';
var madLib = "The Intro to JavaScript course is "+adjective1+". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+" content!";
// your code goes here
/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

var firstName = "Arman";
var interest ="watching anime";
var hobby="read books";
var awesomeMessage="Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+".";
console.log(awesomeMessage);
/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 1;

if (number%2===0) {
    console.log("even");
} else {
    console.log("odd");
}
/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

if(musicians <=0){
    console.log("not a group");
}
else if(musicians ===1){
    console.log("solo");
}
else if(musicians ===2){
    console.log("duet");
}
else if(musicians ===3){
    console.log("trio");
}
else if(musicians ===4){
    console.log("quartet");
}
else{
    console.log("this is a large group")
}
/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "billiards room";
var suspect = "Mrs. Sparr";

var weapon = "";
var solved = false;

if (room === "dining room" && suspect ==="Mr. Parkes") {
    solved =  true;
    weapon = "knife";
} else if (room === "ballroom" && suspect ==="Mr. Kalehoff") {
    solved = true;
    weapon = "poison";
} else if (room === "gallery" && suspect ==="Ms. Van  Cleve") {
    solve =true;
    weapon = "trophy";
} else if(room === "billiards room" && suspect ==="Mrs. Sparr"){
    solved =true;
    weapon="pool stick";
}

if (solved) {
	console.log(suspect +" did it in the " +room+" with the "+weapon+"!");
}
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -60.00;
var checkBalance = true;
var isActive = true;

if(checkBalance === false){
    console.log("Thank you. Have a nice day!");
}
else if(checkBalance===true){
    if(isActive ===true &&balance>0){
        console.log("Your balance is $"+balance+".");
    }
    else if(isActive===false){
        console.log("Your account is no longer active.");
    }
    else if(isActive===true && balance ===0){
        console.log("Your account is empty.");
    }else{
        console.log("Your balance is negative. Please contact the bank.");
    }
}
/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ ice cream in a __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if((flavor ==="vanilla" || flavor==="chocolate")&&(vessel==="cone" ||vessel==="bowl")&&(
    toppings==="sprinkles"||toppings==="peanuts"))
{
    console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" ice cream in a "+toppings+".");
}
/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 10.13;

if(shirtWidth<20 && shirtLength<29 && shirtSleeve <8.38){
    console.log("S");
}
else if((shirtWidth >=20 && shirtWidth <22) &&(shirtLength >=29 && shirtLength <30) &&(shirtSleeve>=8.38 &&shirtSleeve <8.63))
{
    console.log("M");
}
else if((shirtWidth >=22 && shirtWidth <24) &&(shirtLength >=30 && shirtLength <31) &&(shirtSleeve>=8.63 &&shirtSleeve <8.88))
{
    console.log("L");
}
else if((shirtWidth >=24 && shirtWidth <26) &&(shirtLength >=31 && shirtLength <33) &&(shirtSleeve>=8.88 &&shirtSleeve <9.63))
{
    console.log("XL");
}
else if((shirtWidth >=26 && shirtWidth <28) &&(shirtLength >=33 && shirtLength <34) &&(shirtSleeve>=9.63 &&shirtSleeve <10.13))
{
    console.log("2XL");
}
else if(shirtWidth>=28 && shirtLength>=34 && shirtSleeve >=10.13){
    console.log("3XL");
}
else{
    console.log("N/A");
}
/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals) ? "omnivore" : (eatsAnimals) ? "carnivore" : (eatsPlants) ? "herbivore" : undefined ;
console.log(category);
/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch  (education) {
    case "no high school diploma":
        salary="$25,636/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a high school diploma":
        salary="$35,256/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "an Associate's degree":
        salary="$41,496/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Bachelor's degree":
        salary="$59,124/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Master's degree":
        salary="$69,732/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Professional degree":
        salary="$89,960/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Doctoral degree":
        salary="$84,396/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    default:
        console.log ("nothing");
        break;
}
/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
   if(x%3===0 && x%5!==0){
       console.log("Julia");
   }
   else if(x%5===0 && x%3!==0){
       console.log("James");
   }
   else if(x%3===0 &&x%5===0){
       console.log("JuliaJames");
   }
   else
   {
       console.log(x+"");
   }
   x++;
}
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 0) {
       if  (num > 2) {
           sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
       }
        else if (num == 2){
            sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottle of juice on the wall!");
        }
        else if (num === 1) {
            sub=num - 1;
           console.log(num +" bottle of juice on the wall! " + num+ " bottle of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
        }
           num = num - 1;
    }
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
var x = 60;
while(x>=0){
    if(x===50){
        console.log("Orbiter transfers from ground to internal power\n");
    }
    else if(x===31){
        console.log("Ground launch sequencer is go for auto sequence start\n");
    }
    else if(x===16){
        console.log("Activate launch pad sound suppression system\n");
    }
    else if(x===10){
        console.log("Activate main engine hydrogen burnoff system\n");
    }
    else if(x===6){
        console.log("Main engine start\n");
    }
    else if(x===0){
        console.log("Solid rocket booster ignition and liftoff!\n")
    }
    else{
        console.log("T-"+x+" seconds\n")
    }
    x--;
}
/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop

for(var x = 9;x >=1;x--){
    console.log("hello " + x);
}
/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x = 5;x < 10; x++) {
    console.log(x);
}
/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
for (var k = 0; k < 200; k++) {
    console.log(k);
}
/*
 * Programming Quiz: Factorials (4-7)
 */
var solution = 1;
for(var i = 1;i<=12;i++){
    solution *=i;
}
console.log(solution);
/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for(var i = 0;i<26;i++){
    for(var j = 0;j<100;j++){
        console.log(i+"-"+j);
    }
}
/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh(){
    var smeh ="hahahahahahahahahaha!";
    return smeh;
}
console.log(laugh());
/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
var num ;
function laugh(num){
    var smeh ="";
    for(var i =0;i< num;i++){
        smeh+="ha";
    }
    return smeh+"!";
}
console.log(laugh(4));
/*
Well... Global variables might seem like a convenient idea at first, especially when you're writing small scripts and programs,
but there are many reasons why you shouldn't use them unless you have to. For instance, global variables can conflict with other 
global variables of the same name. Once your programs get larger and larger, it'll get harder and harder to keep track and prevent 
this from happening.

There are also other reasons you'll learn more about in more advanced courses. But for now, just work on minimizing the use of
global variables as much as possible.
What you've learned so far:
If an identifier is declared in global scope, it's available everywhere.
If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue 
to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.
JavaScript hoists function declarations and variable declarations to the top of the current scope.
Variable assignments are not hoisted.
Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.

*/
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}



function buildTriangle(num){
    var buildtriangle="";
    for (var i=1;i<=num;i++){
        var make=makeLine(i);
        buildtriangle += make;
    }
    return buildtriangle;
}
console.log(buildTriangle(10));
/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var smeh ="";
    for(var i =0;i<num;i++){
        smeh+="ha";
    }
    return smeh+"!";
}
console.log(laugh(10));
/*
 * Programming Quiz: Cry (5-5)
 */

var cry = function Cry(){
    return "boohoo!";
}

console.log(cry());
/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function laugh(num){
    var smeh ="";
    for(var i = 0;i <num;i++){
        smeh+="ha";
    }
    return smeh +"!";
})
/*
 * Programming Quiz: UdaciFamily (6-1)
 */

var udaciFamily =["Julia","James","Arman"];
console.log(udaciFamily);
/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew =[captain,second,pilot,companion,mercenary,mechanic];
console.log(crew);

/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 0;
prices[2] = 3;
prices[6] = 6;
console.log(prices);
/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"Purple");
console.log(rainbow);
/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(t){
    if(t.length >=7){
        return true;
    }    
    else{
        return false;
}}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);
//crew.push(doctor,sister,shepherd);
//array.reverse(), array.sort(), array.shift(), array.join(), array.toUpperCase()
//forEach()
/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

function third(num,index,array){
    if (num % 3 ===0){
        num +=100;
        array[index]= num;
    }
    console.log(num);

}

test.forEach(third);

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(number,index,array)
{
    number +=number*0.15;
    return Number((number.toFixed(2)));
});
console.log(totals);
/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for(var r=0;r < numbers.length; r ++){
    for (var c=0; c< numbers[r].length;c++){
        if (numbers[r][c] % 2 === 0) {
            numbers[r][c]="even";
            console.log(numbers[r][c]);
        }
        else {
            numbers[r][c]="odd";
            console.log(numbers[r][c]);
        }
    }
}
console.log(numbers);
/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close:function(){
        if(umbrella.isOpen ===false){
            return "The umbrella is already closed!";
        }else{
            umbrella.isOpen=false;
            return "Julia closed umbrella.";
        }
    }
};
/*
 * Programming Quiz: Menu Items (7-2)
 */

var breakfast ={
    name: "The Lumberjack",
    price:"$9.95",
    ingredients:["eggs","sausage","toast","hashbrowns","pancakes"]
};
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary:function printAccountSummary(){
        return "Welcome!\n"+ "Your balance is currently $"  + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%.";
    }
};

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile ={
    name:"Arman",
    numOfFriends:1,
    messages:["Hi","How are u?","Good project work!"],
    postMessage:function (message){
        return facebookProfile.messages.push(message);
    },
    deleteMessage:function (index){
        var remove=facebookProfile.messages.splice(index,1);
        return remove;
    },
    addFriend:function (){
         return facebookProfile.friends +=1;
    },
    removeFreind:function (){
        return facebookProfile.friends -=1;
    }
};
console.log(facebookProfile.friends);
console.log((facebookProfile.addFriend()));
console.log(facebookProfile.friends);
/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(i){
    console.log(i.type + " donuts cost $"+i.cost+" each");

})

