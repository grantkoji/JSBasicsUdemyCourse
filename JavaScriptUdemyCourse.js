

There is an organization called Ecma 
International group in charge of all sorts of different standards 
For programming but also for electromagnetic fields 
But also for ECMA script 
A programming language should ) 
behave this way or that way
its a desription of how the langauge should work 

Different browsers will support different features at any given time 

Compatability chart to tell me which browsers support arrow functions
Not supported by ie 
Added to Chrome and Firefox
Not every feature is available to every browser 
All these things 
Javascript
Ecmascript
ES2018
ES2017...ES2016
ES5...ES6 

mdn closest thing to official documentation of javascript that we have

Primitive Types
Number
String
Boolean
Null
Undefined

Working in the console tab 
Nothing you write is actually saved 
Easy for us to explore things without getting caught up in work flow 
Usually console is for debugging 
Not for writing actual applications 

Change colors to make it easier to see )
Three dots to change where icon is located 

5 ** 2 is same as 5 ^ 2 
Exponents in javascript 

Javascript does follow standard order of operations 
Parenthesis, Exponent, Multiplication, Division, Addition, Subtraction
PEMDAS 

Not a number:

1 + NaN = NaN 
1 / 0 = NaN 

Needs to be NaN  
Needs to be written out that way 

Can write out Infinity or 1/0 
Also -Infinity 

0 and -0 are values in Javascript as well 

Uncaught SyntaxError: Identify 'averageRating' has already been declared 
If I try to call let twice 


let maxValue = -Infinity




score = score + 10
score += 10
score -= 10
score *= 10

let bonusMult = 3
score *= bonusMult 
Is multiplying by 3

Unary operators:
counter++
counter--


Const error 
Uncaught typeError 

Uncaaught syntax error unexpected token for an open string without closing it

)
"she said "omg""
//Uncaught SyntaxError: Unexpected Identifier 

Can add strings 

firstName + ' ' + lastName

"hi" + 1 // "hi1"
"hi" - 2 // NaN
let greeting = "hello friend!"
greeting.length // 13
  //Spaces and exclamation points are considered characters in a string
greeting[1] // "e"
greeting[17] // undefined
greeting.indexOf("e") // 1
  //Returns the index of the first match
greeting.indexOf("friend") // 6
  //Returns the index of the first character if there is a match
greeting.indexOf("goodbye") // -1
  //Note that .indexOf() returns -1 when not found


let tvShow = 'catdog'
tvShow.indexOf('cat') //=> 0
tvShow.indexOf('dog') //=> 3
String

Strings are indexed
0 to string.length - 1 

Every string has a property called length 
"hello friend!".length 
=> 13
B/c it has 5 characters

mySong[0] = "S"

mySong[13] => undefined 
If it's for a character whose index is not there '

mySong[mySong.length -1]
returns last character in string 

STRINGS ARE IMMUTABLE IN AVASCRIPT
let favSong = "Surfin' USA"
IF I DO 
favSong[0] ///=> "S"
favSong[0] = "D"
favSong ///=> "Surfin' USA"
Does not change first to "D"
Strings are immutable in JS 

String methods all have .method() notation 
Lots of methods to look up on a sztring 
.toUpperCase()
New version of the string completely upper case
But not changing initila string 
let msg= "you are so grounded mr"
msg.toUpperCase() //=> "YOU ARE SO GROUNDED MR"
but msg //=> "you are so grounded mr"
MSG NOT CHANGING B/C STRINGS ARE IMMUTABLE 



let message = "ouch, that is hot"
message.toUpperCase() // "OUCH, THAT IS HOT"
//But message still returns:
message // "ouch, that is hot"

.toLowerCase()
FORGET TO put in message and action then we will 

greeting.trim() returns string without spaces in front and behind string 
let color = "    purple robot   "
color.trim() //=> "purple robot"
color //=> "    purple robot    "
color.trim().toUpperCase() //=> "PURPLE ROBOT"
Thumbs down still work in MDN, but not spposed to use them anymore 

let tvShow = 'catdog'
tvShow.indexOf('cat') //=> 0
tvShow.indexOf('dog') //=> 3
tvShow.indexOf('z') //=> -1 (not found)
 tvShow.slice(3) //=> 'dog'
 tvShow //=> 'catdog' b/c strings are immutable 
 'superhero'.slice(0,5) => 'super'
 The start is first argument, second argument is one index after end 

 let comment = "That is funny, ha!"
 comment.replace("ha", "haha") // "That is funny, haha!"

 "bye, bye, bye".replace("bye", "by") // "by, bye, bye"
//Only the first "bye" in the string is replaced.

//Putting .slice and .replace together:
"GARBAGE!".slice(2, 7).replace("B", "") // "RAGE"


 Only replaces the first 'ha', not all of them

 In MDN, optional parameters in brackets 
 str.slice(beginIndex[, endIndex])
 [] Tellsus it is optional

'PUP'[3] //=> undefined 

let park = 'Yellowstone'
const index = park.indexOf('Stone')
index //=> -1 bc 'Stone' is not in park

let yell = 'GO AWAY!!'
let index = yell.indexOf('!')
index //=> 7 
  B/c index of stops at first patch 


Additional operations that you can use on a 




String escapes
 Also known as escape sequences 
 Combinations of characters with a string 

//  \' or \" gives you a quotation mark without interfering with the string's quotation marks 
"I can\'t believe it\'s not butter" // "I can't believe it's not butter"
"He said, \"I can\'t believe it\'s not butter\"" //"He said, "I can't believe it's not butter""

//You can use "" and '' separately to place a quote inside a string
"He said, 'I can\'t believe it\'s not butter'" //"He said, 'I can't believe it's not butter'"
'He said, "I can\'t believe it\'s not butter"' //"He said, "I can't believe it's not butter""

//Use \n to jump a line in the string. 
"Hi\nFriend"
//"Hi
//Friend"

//Use "\\" to place a backslash in a string 
"Return a backslash: \\" // "Return a backslash: \"
 



"He said I ain\'t happy" // "He said I ain't happy"
 "He said \"I ain\'t happy\"" //=> "He said "I ain't happy""

//  \' or \" gives you the quote without being part of string 
'Hello\nGoodbye'
//=> 'Hello 
// Goodbye'
\n jumps a line in string 
\t moves a tab over

Look up MDN escape notation 

If you need a back slash in a string \\
"I am backslashed\\" => 
"\" Is an error uncaught syntax error invalid
'\\' => '\'
"
`${1+5}` => "6"

can do `${variable.toUpperCase()}`

`total price: $${price*quantity}`

Null is the intentional absence of any value 
Null must be set to null

Undefined is a variable that does not have a value assigned to it 

There is nothing defineed there 


const u = undefined 
Normall though, undefined is a value that I can bget back 
let color; 
color; 
value is undefined 
let currentUser = null;
Later can set it to something 

Explicitly assign a value to null 
Undefined is no defined value 

Math object 
Math.PI is a value of PI
Math.floor(3.657) => 3
Math.round(3.6) => 4 
Math.round(3.3) => 3
Math.pow(7,2) => 49 
Math.random() => random decimal between 0 and 1, non inclusinve

Math.floor((Math.random() *10) + 1)


typeof 99 #=> "number"
"boolean"
"string"
"object"
typeof undefined #=> "undefined"
typeof null #=> "object"
typeof does not need Parentheses

parseInt('24') and parseFloat('24.987')
parseInt('$99') #=> NaN
parseInt('99cents') #=> 99
Will break off if I have digits in the beginning
Will return NaN if it doesn't have digits in it'

== equality
!= inequality
=== strict equality
!== strict inequality

'A' < 'a' #=> true 
All uppercase lettters are less than lowercase letters 
Unicode characters in a string 
String have unicode representation in a number 

Double equals checks for equality of values but it doesnt care about type 
It will coerce both values to a common type and then compares them 
7 == '7' #=> true
7 === '7' #=> false
)

0 == '' #=> true 
0 == false #=> true
0 === false #=> false 
null == undefined #=> true
null === undefined #=> false 

=== checks for equality of value and type 

Right click to open a file 
Or use command/N to start a file 
In an html file: !tab  fills out html for you 
<script src="app.js"></script>
Work flow, create html file 
Create script that leads to js file 

Double click html file to open it in the browser

alert("Message")
console.error("Oh no")
Shows up like an error 
console.log(3+4, "hello", true) #=> 7 "hello" true 
//prints them all out separated by spaces 


if (num % 2 === 0) console.log("Even number")

Access to our code after the fact 

Falsy values: 
false 
0
"" empty string 
null
undefined 
NaN 

Everything else is truthy 

let mystery = undefined 

if(mystery){

} 
Will not go inside this boolean 

let loggedInUser;
if(loggedInSuser){
  console.log("You are logged in")
} else {
  console.log("Please log in")
}

above code will print "Please log in" because loggedInUser is undefined which is falsy 


0/0 #=> NaN

!null #=> true 
! (0===0) //false 
!(3 <= 4) //false
!'asdas' //false 

Using ! to create alternative code 
if(flavor !== 'grape' && flavor !== 'cherry'){}
if(!(flavor === 'grape' || flavor === 'cherry')){}

Operator Precedence 

let x = 7;
x == 7 || x === 3 && x > 10; 

Because the && operator takes place over ||
Above is true 

! has higher precedence than && which has higher precedence than ||

Go to MDN table with precedence of every operator 
() always wins 

> takes precedence before && 

switch(day){
  case 1: 
    console.log('1')
    break;
  case 2: 
    console.log('2')
    break;
  case 3:
  case 4: 
    console.log('3 or 4');
    break;
  //If you enter in 3, it will run code, find it is empty
  //and jump down to the next code and run until you reach break 
  //Can do this if you want to have more than 1 case apply
  //To the same piece of code
  default: 
    console.log('Invalid entry')
    //default is like an else statment
}
//Switch is used to replace large if/else statements 

If no break, will go down the entire list on the switch 
After you find the initial match, without testing those other matches 

Terniary

statement ? if true : if false;

let status = 'offline';
let color;
if(status === 'offline') {
  color = 'red'
} else {
  color = 'green'
}

Or can do 

let color = status === 'offline' ? 'red' : 'green'
  Can check if status if offline to assign values to red or green 


Must focus on js but also on bootsrap

Array sordered collections of values
List of comments on IG post

Collection of levels in a game 
Songs in a playlist 

let myCollection = [12, 'dog', true, null, NaN]
I can put different types into an array 
Other languages I have to specify what I put in the array

new Array()

new Array(1,2,3,4,5)

colors[7] #=> undefined 
"asdas"[123] #=> undefined

strings immutable 

shoppingList[shoppingList.length] = 'Tomatoes'
Does add to end of an array like push 

MDN array shows long list of methods on side 

array.push(true) #=> length of the array 

let str = 'hello' #=> undefined 

str.toUpperCase() #=> 'HELLO'

.shift() and .pop() returns removed items

If nothing in array 
array.pop() #=> undefined
str #=> 'hello'

When you unshift and add something, you get returend the length of the list 
unshift a cereal bowl. And then a mug 
Then inside the mug a dirty spoon 


unshift can add two items in as a chunk 
dishesToDo.unshift('fork', 'knife')
Can do this with push as well 

Reading documents 
const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
The [] means it is optional 

//can add multiple arrays in concat that will all concat
let allFood = fruits.concat(veggies, meats)

NOT AVAILABLE IN IE 
.includes() #=> tells me if it includes an array or not 
ingredients.includes('fish')
Doesn't include a slew of odd ingredients, we get false'
We can get false or true 
.includes('')...looks for an exact match 
optional includes is a search fro index 
ingredients.includes('water', 0)

if(ingredients.includes('flour')){
  console.log("I'm gluten free, I cannot eat that")
}

Returns -1 
ingredients.indexOf('eel')
Either rtuerns the index or -1 

Can also do 
ingredients.indexOf('cheese', 3)
//searching for after this index i
ingredient.indexOf('flour') !== - 1;

join and reverse()
let letters = ['T', 'C', 'G']
letters.reverse()

.reverse() reverses whatever the contents are 

let letters = ["T", "C", "E", "P", "S"]
letters.join() //"T,C,E,P,S"
letters.reverse().join('-') //"S-P-E-C-T"

let numbers = [12.3, 60, false]
numbers.join() // "12.3,60,false"
.join() will turn them into a string

let animals = []

animals.slice(0, 2)
Does not include index 2

.slice(-3)
Go back 3 indices from the end 

.slice(-3, -1)

to use .splice to insert 

animals = ["shark", "salmon"]
animals.splice(1, 0, "octopus") // [] b/c not deleting anyting
animals // ["sharks", "octopus", "salmon"]

animals.splice(2, 1) #=> ["salmon"]
animals #=> ["sharks", "octupus"]

.sort() 
alphabetically 
.sort() updates array in place and retursn the sorted array 

let nums = [34, 10, 10000]
nums.sort() #=> [10, 10000, 34]
Compares by converting to a string first 
By Unix code 

let Strings/objects/numbers 
let fruit = "orange";
let color = fruit 
let fruit = "watermelon"
fruit => "watermelon"
color => "orange"

B/c these are primitive types, when we create a variable to store one 
We are creating a value type variable 
Every single thing is stored in memory. 
The actual thing is stored in memory to store the information for that variable 

DOES NOT WORK FOR ARRAYS 

JS stores a reference to that array 
THINK OF IT AS A A memory address that were not able to see 
Distinction is when we work with arrays and put htem in a variable, the variable 
itself does not hold the array
It holds a pointer to where the array is in memory 
Compared to a value type variable where the actual value is stored  "bananas"


let nums = [5, 6, 7, 8]
let otherNums = nums 
They are both pointing the same thing 
nums.pop()
otherNums // [5, 6, 7]

array is a reference to where it is in memory  so can pass 
by reference to other variables 

Let x = 34; 
x += 5 
39 
x => 39 

const city = "Lisbon"
city // "Lisbon"
city = London #=> 

const myEggs = ['brown', 'brown']
myEggs.push('purple') works 
myEggs[0] = 'green' works 
myEggs = ['blue', 'pink'] DOES NOT WORK, gets Uncaught TypeError: Assignment 
to constant variable 

Const is used all the time with arrays, unless there is a reason 
I need to point to entirely different array 
Array might change and I point to an entirely new array 
Majority of array variables in real world and tutorials are mostly done with const 
Unless there is a good reason to use let 
Const when appropriate 

const colors = [
  ['red', 'crimson'],
  ['orange', 'yellow']
]

const board = [
  ['0', null, 'X'],
  [null, 'X', '0'],
  ['X', '0', null]
]

Multi dimensional arrays are really common with boards 

Plan out the next steps 

Different tpes of data all groupe toghether
\

.length is a property 

Objets are collections of properties
Properties are a key value pair 
Rather than accessing data using an index, we use custom keys 

objects are dictionaries
You have the key to loook it up

Object is a container that contains information in the form of key value pairs 

When you store an object in a variale, you are associated a key and a value

Spacing doesn't matter, can go '




When we make a number/additiona, you can use 
Talking about objects in general in javascript

Order is not the oebjective of an object

Can access into, using a . 
A . is a property 
Can also use a key to extracint uginsg of olay card Fitdata average 1 orkout er day


Object, can use anything as a value 
Object properties keys are automatically not uppercase
PUt come value intio it

Object key is indeed a string 

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
};

numbers.100 #=> Uncaught syntax error: Unexpected number 
numbers[100] #=> "one hundred"


const numbers = {
  '100': 'one hundred'
}
numbers['100'] #=> "one hundred"

can't do '

let my cat = 'dakfdalfj'
Uncaught syntax error: unexpected identifier 
let 76trombones = 'song'
Uncaught SyntaxError: invalid or 

const numbers = {
  '76 trombones': 'great song'
}
numbers['76 trombones'] #=> 'great song!'

numbers.76 trombones 
does not work 

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}

let mysteryColor = 'yellow'

palette.blue #=> '#30336b'
palette.yellow #=> '#f9ca24'
palette[yellow] // Uncaught reference error: yellow is not defined 
//needs to be a string 
palette['yellow'] #=> '#f9ca24 '

palette[mysterColor] #=> 'f9ca24'
palette.mysteryColor #=> undefined 
with variable, have to use square brackets 
palette['bl'+'ue'] #=> '#30336b'

Key name not valid as identifier is undefined 
When you want to use a variable or some dynamic value as your key name 
YOU HAVE TO USE SQUARE BRACKETS 

Update a value or give an initial value 
const userReviews = {}; 
'queenBee49' => 4.5 
userReviews.['queenBee49'] = 4.0;
userReviews => {queenBee49: 4}
userReviews.mrSmith78 = 3.5;
userReviews #=> {queenBee49: 4, mrSmith: 3.5}

userReviews['queenBee49'] += 2 works 
or userReviews.mrSmith78++ works as well 

Values of an array are not actually stored in a variable 
Its an arrow to an actual array 
Works the same for an object 

const palette = {
  red: 'dkaf',
  yellow: 'llal'
}

const palette2 = palette;
palette2.green = 'ebf8'
palette will be updated as well as palette 2 
B/c they are referring to the same thing in memory

Objects are reference types just like arrays
So can use const for objects and arrays 

If I wind up assigning palette to something entirely differnt, then 
must use let, but if keeping as object, use const

Checking for equality 
=== and == 
How they behave with arrays and objects 
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
nums === mystery is false 
nums == mystery is false 
This is because they are reference types stored 

Not storing the actual array, storing a reference to the array 
So nums has memory piece 
nums -> 12873712783 
Cant store the entire thing, just storing a reference 

So with -- and --- 

let moreNums == nums; 
 nums === moreNums #=> true;
 nums == moreNums #=> true;

[] === [] returns false 
[] == [] returns false 

 if(user.notifications === []) {
  console.log('No new notificatons')
  // Will never print out b/c user.notifications will never --- []
 }

 Instead, go with 
 if(!user.notifications.length){
   console.log('No New Notifications')
   //this work if there's an empty array since 0 is falsey
 }

Cant easily compare values in arrays if looking for equality 
Bc they are checking for equality of reference, not for equality of contents
[1, 2, 3] === [1, 2, 3] will return false 


To compare arrays, need to manually compare every element in a n array 
Is the first element message, is the second element alert

false 
{a:1} === {a:1} is false 
let data1 = {a:1} 
let data2 = data1
data1 === data2 #=> true 


This article will be focusing on const after this quick detour to discuss the differences between var and let. Unlike are taught about var,letand const. var variables are 'function scope', which means they are only available inside the function they're created in, or if they are not created inside of a function, they are scoped globally. var can be tough because it does not stay contained in the scope of its block (the set of opening and closing curly brackets).  let does stay contained inside the block scope of wherever it is invoked (its lexical scope).
Make a photo with console.log("Function scope") , console.log("block scope") 
function scope(){
 console.log(thisVariable)
 if(true){
 var thisVariable = "Function scope"
 }
}
No need to use var anymore since let is covering what var is supposed to do. Var can be tricky becvause it does not stay contained in block scope. Both var and let can be reassigned and updated. var variables are
The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
var variables are 'function scope.' What does this mean? It means they are only available inside the function they're created in, or if not created inside a function, they are 'globally scoped.'
If var is defined inside a function and I subsequently try to call it outside the function, it won't work.
What are the benefits of using let and const? Rather than being scoped to the function they are scoped to the block.
What is the block? A block is a set of opening and closing curly brackets.


Use const for values that are not going to change. Use let for values that are going to change. 
Using const. In my head, arrays and objects are going to change. 


Values of an array are not actually stored in a variable
Its an arrow to an actual array
Works the same for an object
const palette = {
red: 'dkaf',
yellow: 'llal'
}
const palette2 = palette;
palette2.green = 'ebf8'
palette will be updated as well as palette 2
B/c they are referring to the same thing in memory
Objects are reference types just like arrays
So can use const for objects and arrays
If I wind up assigning palette to something entirely differnt, then
must use let, but if keeping as object, use const
Checking for equality


function varScope(){
  if(true){
    var varVariable = "I am not contained to this block"
   }
  console.log(varVariable)
}

function letScope(){
  if(true){
    let letVariable = "I am contained to this block"
   }
  console.log(letVariable)
}

varScope() //Prints "I am not contained to this block"
letScope() //Uncaught ReferenceError: letVariable is not defined



In the case above of letVariable, it is being called outside of the block in which it is invoked. Since the scope 
If you try to call a variable outside of the block in which it is invoked, 
when the , then use let he 2015 version of JavaScript (ES6 - ECMAScript 2015) allows the use of the const keyword to define a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.The simplistic message is that you use const
First, a quick detour regarding var,let.This article will be focusing on const after this quick detour to discuss the differences between var and let. Unlike are taught about var,letand const. 
Make a photo with console.log("Function scope") , console.log("block scope") 
function scope(){
 if(true){
let thisVariable = "Function scope"
 }
console.log(thisVariable)
}
Uncaught ReferenceError: letVariable is not defined. 
Var can be tricky becvause it does not stay contained in block scope. Both var and let can be reassigned and updated. var variables are
The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
var variables are 'function scope.' What does this mean? It means they are only available inside the function they're created in, or if not created inside a function, they are 'globally scoped.'
If var is defined inside a function and I subsequently try to call it outside the function, it won't work.
What are the benefits of using let and const? Rather than being scoped to the function they are scoped to the block.
What is the block? A block is a set of opening and closing curly brackets.

Instead, go with
if(!user.notifications.length){
console.log('No New Notifications')
//this work if there's an empty array since 0 is falsey
}

const numbers = [1, 2, 3];
const otherNumbers = [1, 2, 3];
numbers === otherNumbers // false
numbers == otherNumbers //false
const emptyArray = []
const emptyObject = {}
emptyArray === [] //false 
emptyArray == [] //false
emptyObject === {} //false
emptyObject == {} //false
//More generally
[] === [] //false
[] == [] //false
{} === {} //false
{} == {} //false



const lineUp = {
  leadOff: 1,
  cleanUp: 4,
  }
const lineUp2 = lineUp;
lineUp2 === lineUp //true
lineUp2 == lineUp //true 

//Also, if you change lineUp2, it will change lineUp
lineUp2.bottom = 9;

lineUp //#=>
  {
  leadOff: 1,
  cleanUp: 4,
  bottom: 9
  }
  //lineUp will be updated as well as lineUp2 because they are referring to the same place in memory

//This works with objects as well
let object1 = { b: 2}
let object2 = object1
object1 === object2 // true
//And any change to the contents of object2 will also change the contents of object1

Below are a couple of other use cases of checking for equality or arrays and objects. 






const city = "Lisbon"
city // "Lisbon"
city = London #=>
let Strings/objects/numbers
let fruit = "orange";
let color = fruit
let fruit = "watermelon"
fruit => "watermelon"
color => "orange"
B/c these are primitive types, when we create a variable to store one
We are creating a value type variable
Every single thing is stored in memory.
The actual thing is stored in memory to store the information for that variable
DOES NOT WORK FOR ARRAYS
JS stores a reference to that array
THINK OF IT AS A A memory address that were not able to see
Distinction is when we work with arrays and put htem in a variable, the variable
itself does not hold the array
It holds a pointer to where the array is in memory
Compared to a value type variable where the actual value is stored "bananas"
let nums = [5, 6, 7, 8]
let otherNums = nums
They are both pointing the same thing
nums.pop()
otherNums // [5, 6, 7]

const objectEx = {};
objectEx.first = "first addition";
objectEx.second = "second addition";
objectEx //returns {first: "first addition", second: "second addition"}
//without an error, even though the objectEx variable is declared using the const keyword






//An exception when using const versus let

const baseballTeams = ['Yankees', 'Red Sox']
baseballTeams.push('Dodgers') // works as baseballTeams 
//now returns ['Yankees', 'Red Sox', 'Dodgers']
baseballTeams[0] = 'Mets' //works as baseballTeams 
//now returns ['Mets', 'Red Sox', 'Dodgers']
baseballTeams = ['Knicks', 'Celtics'] //DOES NOT WORK
//Gets an Uncaught TypeError: Assignment to Constant Variable.
//Because you are trying to change the memory reference. 

//If you are trying to change the memory reference, you must use the let keyword.
let baseballTeams = ['Yankees', 'Red Sox']
baseballTeams = ['Knicks', 'Celtics'] //works


//using -= in a for loop

for(i = 200; i >= 0; i -= 25 ){
  console.log("message")
}

for(i = 200; i >= 0; i = i - 25 ){
  console.log("message")
}

const word = "string"
for(let i = word.length - 1; i >= 0; i--){
  console.log(word[i])
}

//to get a whole number
Math.floor(Math.random() * 10)

//If you break in a for loop that is nested, it only breaks 
//Out of that inner for loop

while(true){
  if(target === guess){
    break;
  }
}

for...of 
Not used in Internet Explorer

//Iterable items include Arrays and Strings 
for (let variable of iterable){
  statement involving variable
}


let array = [1, 2, 3, 4]

for (let number of array){
  console.log(number)
}
//Prints:
//1
//2
//3
//4

for (let i = 0; i < "louder".length; i++){
  console.log("louder"[i].toUpperCase())
}
//Prints:
//L
//O
//U
//D
//E
//R

for (let char of "louder"){
  console.log(char.toUpperCase())
}
//Prints:
//L
//O
//U
//D
//E
//R


const square = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                  ]

function sumSquare(){
  let sum = 0
  for (let i = 0; i < square.length; i++){
    let row = square[i]
    for (let j = 0; j < row.length; j++){
      sum += row[j]
    }
  }
  return sum
}

sumSquare() //returns 45

//can instead use for of to create cleaner looking code
function forOfSumSquare(){
  sum = 0
  for (let row of square){
    for (let num of row){
      sum += num
    }
  }
  return sum
}

forOfSumSquare() //returns 45





If you need to care about indices, just use a traditional for loop 

Do not use for of when dealing with two arrays that you are using 
together (matching them based off of their indices)

Let's say you have an array of cities and an array of team names. '
Using a for of loop would be complicated with respect to 


const cities = ['Buffalo', 'Dallas', 'Seattle']
const teams = ['Bills', 'Cowboys', 'Seahawks']

//Using a for loop to Print the City and Name
for (let i = 0; i < cities.length; i++){
  console.log(`${cities[i]} ${teams[i]}`)
}
//Would Print:
// Buffalo Bills
// Dallas Cowboys
// Seattle Seahawks

//Nested for...of loop does not work
for (let location of cities){
  for (let name of teams){
    console.log(`${location} ${name}`)
  }
}
//Would Print: 
// Buffalo Bills
// Buffalo Cowboys
// Buffalo Seahawks
// Dallas Bills
// Dallas Cowboys
// Dallas Seahawks
// Seattle Bills
// Seattle Cowboys
// Seattle Seahawks

//Need to use .indexOf() to match the correct indices
//for the team's city and name with this for...of loop
for (let location of cities){
  for (let name of teams){
    if (cities.indexOf(location) === teams.indexOf(name)){
      console.log(`${location} ${name}`)
    }
  }
}
//Would Print:
// Buffalo Bills
// Dallas Cowboys
// Seattle Seahawks

Everything winds up as a string in an object for its keys 

const teams = {
  Denver: "Broncos",
  "New Orleans": "Saints",
  Philadelphia: "Eagles"
}

for(let name of teams){
  console.log(name)
}
//Uncaught TypeError: teams is not iterable

Object.keys(teams) // ["Denver", "New Orleans", "Philadelphia"]
Object.values(teams) // ["Broncos", "Saints", "Eagles"]
//Object.keys(teams) and Object.values(teams) are iterable. 

for (let city of Object.keys(teams)){
  console.log(city)
}
//Prints:
//Denver
//New Orleans
//Philadelphia

for (let name of Object.values(teams)){
  console.log(name)
}
//Prints:
//Broncos
//Saints
//Eagles

for (let key of Object.keys(teams)){
  console.log(`${key} ${teams[key]}`)
}
//Prints:
//Denver Broncos
//New Orleans Saints
//Philadelphia Eagles


const ratings = Object.values(movieReviews)
let total = 0;
for(let r of ratings){
  total += r;
}
total /= ratings.length 
//total = total / ratings.length

For...in 
Loop over the keys in an object 

for (let variable in object){
  statement involving variable
}

const teams = {
  Denver: "Broncos",
  "New Orleans": "Saints",
  Philadelphia: "Eagles"
}

//for...in automatically finds the key in an Object
for(let key in teams){
  console.log(key)
}
//Prints:
//Denver
//New Orleans
//Philadelphia

for(let key in teams){
  console.log(teams[key])
}
//Prints:
//Broncos
//Saints
//Eagles

for(let key in teams){
  console.log(`${key} ${teams[key]}`)
}
//Prints:
//Denver Broncos
//New Orleans Saints
//Philadelphia Eagles


let arrayNumbers = [10, 20, 30, 40]

for (let k in arrayNumbers){
  console.log(k)
}
//Prints:
//0
//1
//2
//3

//Treats the Array, [10, 20, 30, 40], like an Object:
{
  0: 10,
  1: 20,
  2: 30, 
  4: 40
}

for (let k in arrayNumbers){
  console.log(k, ": ", arrayNumbers[k])
}

//Prints:
//0: 10
//1: 20
//2: 30
//3: 40


for (let i = 0; i < arrayName.length; i++){
  statement involving arrayName[i]
}

//K
for (let keyName of Object.keys(objectName){ 
  statement 
}


for (let valueName of Object.values(objectName){ 
  statement 
}

We can loop over the keys and the values. 

There are a lot fo quirks with functions

2 step process:
Define the function 
Doesn't do anything with running the code'
Run the function 

Methods ar efunctions
Methods are actions that have been wrapped up in a name and runs on as a function 

Defining functions
// function declaration or function statement
function functionName(){
  //do something
}
//Should not start with a number 
//Should not start with 

functionName()
//called invoking the function, also called running the function 

function rollDie(){
  Math.floor(Math.random() * 6) + 1;
}


functon greet(nickname){
  console.log(nickname)
}

You can pass in an argument 
Technically variables written in function 
are called parameters, not arguments 
numRolls is a parameter
function throwDice(numRolls){

}

We have been using argument for exact number
square(4)
In that case, it is called an argument 
When we pass in the value.
When we call the function, put in the number 4

A parameter is when we create the function, the 
variable we are placing inside the function 

function divide(a, b){
  return a / b
}

divide(6, 3) //#=> 2
divide(3) //#=> Nan 
//Second argument is undefined 
//and 3 divided by undefined equals NaN



Parameters a, b 
divide(4, 2)
Arguments 4, 2

If an argument is missing, that parameter will have 
a value of undefined 
4 / undefined #=> NaN



To do list
Start the project 
Continue with thiese coding things for algorithms
Buy and start alo.expert 
Work on this project with Bulldogs 
Can start as a web page and also be a native app
string kdlafjl";

const scream = 'hello'.toUpperCase()
"
""
Printing something in console is something different than returning it 
Arrow pointed in other direction is a returend value .AHELLO is a console.log 
But see a returned value, which you can pass on to another fucntion 

Most applicaiton,s we do not print much to the console. 

Maybe there is a line or two that is left in there 
But the4res a message in there to prevent people from runnning code or writing something that is sketchy 
Not console.loggging unless we are testing things 

rules of returning 
When you actually return something there needs to be one value 
Cant do return x y 
Because that is two separate values 

improvement on basic if else statements 

function isPurple(color){
  if (color.toLowerCase() === 'purple'){
    return true;
  }
  return false;
}

function isPurple(color){
  return color.toLowerCase() === 'purple'
  //this will return true or false 
}

function containsPurple(arr){
  for (let color of arr){
    if (color === 'purple' || color === 'magenta'){
      return true;
    }
  }
  return false;
}

//password must be at least 8 characters
//cannot contain spaces 
//cannot contain the username
function isValidPassword(password, username){
  if(password.length < 8){
    return false;
  }
  if(password.indexOf(' ') !== -1){
    return false;
  }
  if(password.indexOf(username) !== -1){
    return false;
  }
  return true;
}

function isValidPassword(password, username){
  if(password.length < 8 
    || password.indexOf(' ') !== -1
    || password.indexOf(username) !== -1){
    return false;
  }
  return true;
}

function isValidPassword(password, username){
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  
  if(!tooShort && !hasSpace && !tooSimilar){
    return true;
  }
  return false;
}


function isValidPassword(password, username){
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar
}

function avg(arr){
  //
  let sum = 0
  for(let num of arr){
    sum += num
  }
  return sum/arr.length
}

pangram is a sentence that contains every letter of the alphabet 

//naive way
function isPangram(sentence){
  if(sentence.indexOf('a') != -1)
  if(sentence.indexOf('b') != -1)
}

function isPangram(sentence){
  let lowerCased = sentence.toLowerCase()
 for(let char of 'abcdefghijklmnopqrstuvwxyz'){
  if (lowerCased.indexOf(char) === -1){
    return false
  }
 }
 return true;
}

//includes is not supported in IE but is easier to read 

function isPangram(sentence){
  let lowerCased = sentence.toLowerCase()
 for(let char of 'abcdefghijklmnopqrstuvwxyz'){
  if (!lowerCased.includes(char)){
    return false
  }
 }
 return true;
}

function pick(arr){
  //return random element from array
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

function getCard(){
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]
  // const value = pick(values);
  const suits = ['clubs', 'spades', 'hearts', 'diamonds']
  return { value: pick(values), suit: pick(suits)}
}

Scope is variable "visibility"
The location where a variable is defined dictages where we have access to that variable 

There are multiple pieces and different ways scope
Function Scope...when we define a variable in a function, the variable 
is scoped to the function 

var i = 10;
for (var i = 0; i < arr.length; i++){

}
//we are redeclaring i as value = 0
//whereas if we use let, it will stay coped to its block 

//let and const cannot be redeclared 
//var can be redeclared 

//let and const are block scoped
//var is not block scoped 

Lexical Scope
When we have nested functions 
Nested functions are lexically BeforeUnloadEvent, they are bound to their 
one way relationship with one function ins ide of another 

function nameOfFuncion(){

}

Different syntax is a 
Function XPathExpression, another way to define a function 

const square = function(num){
  return num * num; 
}
square(7);

Functions are objects 
Means we can put them in a variable 
Means we can pass them as arguments 
So putting a function in a variable 

function does not have a name 
But it's stored in a variable '
function add(x, y){
  return x + y
}

const add = function(x, y){
  return x + y
}

//if you just did 
function(x, y){
  return x + y
}
Above is called an anonymous function which we cannot call  

There ais difference in ways functions are called if built with a variable 
B/c of hoisting 

//anonymous function expression
const sum = function(x, y){
  return x + y;
}

//named function expression 
const product = function multiply(x,y){
  return x * y;
}

If we try to call multiply, 3 and 5 will lead to an uncaught reference 

Function expression that we store in a varaible 
Passing around functions to other functions 
Theres a lot we can do because functions are objects 

Functions are objects 

function add(x, y){
  return x + y;
}

const subtract = function(x, y){
  return x - y;
}

function mulitply(x, y){
  return x - y;
}

const divide = function (x, y){
  return x / y;
}

const operations = [add, subtract, multiply, divide]
//put functions inside an array 

operations[1](5, 2) #=> 3
operations[2](3, 6) #=> 18 
We can do things like loop over this array and call this function 
So I don't have to hard code it '

const thing = {
  doSomething: multiply 
}

thing.doSomething(2, 5) #=> 10 

FUNCTIONS ARE SIMPLY VALUES IN JAVASCRIPT,
Can store them in variables or arrays 
Can also put a function in an object 

Passing functions as an argument in another function 

Higher Order Functions 
Functions that operate on/with other functions.
They can: 
Accept other functions as arguments
Return a function 

Functions as Arguments 

function callTwice(func){
  func();
  func();
}

//Takes in a function and number and loops over the number to run the function 
function repeatNTimes(action, num){
  for (let i = 0; i < num; i++){
    action()
  }
}

//accepts two functions and randomly picks which one to call 
function pickOne(f1, f2){
  let rand = Math.random()
  if(rand < 0.5){
    f1()
  } else{
    f2()
  }
}

Above are examples of functions called accepting functions as arguements 

const triple = multiplyBy(3);
triple(5);
const double = multiplyBy(2);

double(8) //16

function multiplyBy(num){
  return function(x){
    return x * num;
  }
}

multiplyBy(5) #=> function(x){
    return x * 5;
}

const triple = multiplyBy(3)
triple => 
f(x) {
  return 3 * num;
}

triple(5) #=> 15 

Functions are just values that can be passed around whether as an argument or 
as a return value 
Above is example of Function as Return value 
Able to do it b/c of lexical scope 
which always keeps num at whatever I pass into multiplyBy(num)

const isChild = makeBetweenFunc(0, 18);
isChild(5); True 
isChild(67); False 

function makeBetweenFunc(x, y){
  return function(num){
    return (num >= x && num <= y)
  }
}
//  const isChild = function(num){ 
//    return num >= 0 && num <= 18
//  }

const isChild = makeBetweenFunc(0, 18);
isChild(3) #=> true 
isChild(92) #=> false 

const isInNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60, 79);

Callback Functions 
A callback function is a function passed into 
another function as an argument, which is then invoked inside the outer 
function. 

function callTwice(func){
  func();
  func();
}

function laugh(){
  console.log('')
}
callTwice(laugh)
//laugh is a callback function 

The function taht we pass in is the callback 
Often we use anonymous functions when we have callbacks 
functionName(anonymousFunction)

setTimeout(){

}

function grumpus(){
  alert('Go away')
}

setTimeout(grumpus, 5000)

Run this code after 5 seconds 

setTimeout accepts a function 
and a number of milliseconds 
We wrote and passed in a function 
Anonymous functions look like that then no name 
Just function 
After 5000 milliseconds, run that chunk of code 

//example of passing in an a nonymous 
//function for setTimeout 
setTimeout(function() {
  alert('Welcome')
}, 5000);

Add a button inside the body 
<button>Don't click me</button>
<script src="app.js"></script>

const btn = document.querySelector('button')
btn.addEventListener('click', function(e){
  alert('Why did you click me')
})
//above is an anonymous function getting passed in
//as a callback 


couldve done 
btn.addEventListener('click', functionName)

Callback is passing a function into another function 

Hoisting 
Something I need to cover that you shouldn't stress'

var animal = 'dog'
console.log(animal);
Prints out dog 

console.log(animal)
var animal = 'dog'
Prints out undefined 

When I declared the variable animal 

Javascript is hoisting up var animal first 
Then it is setting animal to 'dog'
Javascript is going to see a var declartion and will rn 
the var declaration, and then will later fill the value with 'dog'
//example of hoisting in sentence above 
VARIABLE DECLARATIONS WITH VAR ARE HOISTED
To avoid problems, always declare an initialize variables before you do 
Anything with them 

HOWEVER VARIABLE DECLARTIONS WITH LET ARE NOT HOISTED 
console.log(shrimp)
let shrimp = 'Shrimp Name'
//Uncaught ReferenceError: Cannot access 'shrimp' before initialization 

Variable declaratioins with const are not hoisted 
console.log(shrimp)
const shrimp = 'Shrimp'
//Uncaught ReferenceError 

Functions and we write a function declaration 
Functions are hoisted 

howl()
function howl(){
  console.log('hoooowwwwwww')
}
//above works 
Function is put at top of file 

function is put at top of file first 
Then called howl 

But function declaration does not work 
hoot()
var hoot = function(){
  console.log("hoo")
}
Uncaught TypeError: hoort is not a function
//does not work b/c this is using a function expression 
//and it is not quite hoisted,

//however, variable does exist
console.log(hoot)
var hoot = function(){
  console.log("hoo")
}
//returns undefined 
//Because variable hoot is hoisted, but the value is not 

console.log(hoot)
let hoot = function(){
  console.log("hoo")
}
Uncaught Referenceerror: Cannot access 'hoot' before initialization 
Because I am using let which does not hoist 

let and const exist to remedy unexpected consequences that happen 
with var 

Array Callback methods 
Arrays come with many built-in methods that accept 
callback functions 
Now that weve covered callbacks, we can learn these methods 
Super useful 

.forEach 
Accepts a callback function 
Calls the function once per element in the array 

nums.forEach(callbackFunction)
//function I want to call for each element in nums 
//will automatically insert the element in callbackFunction

nums.forEach(function(element){
  console.log(element)
})

.forEach can take a second parameter if I want to use the index 
nums.forEach(function(num), index){
  console.log(index, num)
}

.map is used to create a new array from an existing array 
Can duplicate an array or transform an array into a new array 

//accepts a callback function 
const newArray = array.map(function(t){
  return t.toUpperCase();
})
//generates a new array 
//if you forget to return the value
//you will get an array of undefines
//[undefined, undefined, undefined]

numbers.map(function(n){
  return {
    value: n,
    isEven: n % 2 === 0;
  }
})

'asap'.toUpperCase().split('') // ["A", "S", "A", "P"]

const abbrevs = words.map(function(word){
  return word.toUpperCase().split('').join('.')
})
//takes an array of values and makes a new array
["asap", 'byob'] // ["A.S.A.P.", "B.Y.O.B"]

TAKE AN ARRAY AND JUST RETURN ONE VALUE OF AN OBJECT 

books.map(function(book){
  return book.title;
})

When using map, original array is unchanged 

const square = function(x){
  return x * x;
}

const square = (x) => {
  return x * x;
}

Arrow function behaves just like a function expression but without using the word 
function 

Arrow functions behave differently around the keyword this 

With arrow functions, parens are optional if there is only one parameter 
If more than one paremeter, need parens 
If no parameter, then need empty parens 
const square = x => {
  return x * x;
}

Arrow functions have implicit returns 
//only works in some scenarios 
//returning a single expression
//in scenarios with one expression, can use 
  ///parentheses instead of curley braces 
  //can give an expression instead of a returned expression 
const square = n => (
  n * n;
)

can even do on one line 
const square = n => n * n;
But put with parens on a new line if its a lot of written things 

//if multiple expressions, then I have to 
// use curly braces and add a return 
//Only one expression to return implicityly 

const doubles = nums.map(n => n * 2)
//or 
const doubles = nums.map(n => (
  n * 2;
))

//Can use terniary operator to make a one liner 
const parityList = nums.map((n) => (
  n % 2 === 0 ? 'even': 'odd';
))
const parityList = nums.map((n) => n % 2 === 0 ? 'even': 'odd');

.find() returns the value of the first element in the array that satisfies the provided 
Testing function 

let movie = movies.find(movie => {
  return movie.includes('Mrs');
  //has to return true or false 
  //first time returns true, returns it
})

const movie = movies.find(movie => (
  movie.indexOf("Mrs") === 0;
  //anything that contains Mrs at the beginning 
))

const goodBook = books.find(b => b.rating >= 4.3);
const neilBook = books.find(b => (
  b.authors.includes("Neil")
))

Filter creates a new array with all elements that pass the 
test implemented by the provided function. 
Returns all elements that return true 

const odds = nums.filter(n => n % 2 === 1)
const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
))

const results = books.filter(book => (
  book.title.toLowerCase().includes(query.toLocaleLowerCase())
))

const query = "The"
const results = books.filter(book => {
  const title = book.title.toLowerCase()
  return title.includes(query.toLocaleLowerCase())
})

Every tests whether all elements in the array pass the provided 
function. It returns a boolean value 
.every(callback)

words.every(word => word.length === 3)

//every word ends with letter g
const allEndInG = words.every(word => {
  const last = word.length - 1;
  return word[last].toLowerCase() === "g"
})

.some checks if one element matches 
Also accepts a callback function and sees if its true or 
false inside of it
//some word begins with the letter "d"
words.some(word => word[0].toLowerCase() === "d")

Every needs all of the elements to return true, some needs 
one element to return true 

Sort passes in a compare function 
two parameters a and b 

array.sort(compareFunc(a,b))
If compareFunc(a, b) returns less than 0 
  Sort a before b
If compareFunc(a, b) returns 0
  Leave a and b unchanged with respect to each other   
If compareFunc(a, b) returns greater than 0 
  Sort b before a 

//Positive number  
//will put highest numbers at END of sort 
const ascSort = prices.sort((a,b) => a - b);

[400.5, 3000, 99.9]

a 400.5, b 3000 => negative number => 400.5 before 3000
b 3000, c 99.9 => positive number => 99.9 before 3000
      
const desSort = prices.sort(( a, b) => b - a)
Puts the highest number at the beginning 

NOTE THAT WITH SORT I am changing the array 

To avoid mutating the array, 
Can either make a copy with variables 
const prices1 = [1, 2, 3]
const prices2 = [1, 2, 3]

OR DO 

const ascSort = prices.slice().sort((a, b) => a - b)

Reduce 
Executes a reducer fnction on each element of the array
Resulting in a single value 

Could be summing a value or finding the maximum number or tallying votes 

reduce passes in a callback and that callback has to fiollow a 
specific format 

//sums all numbers in an array 
array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
//accumulator starts as the first element in an array 
//currentValue starts as the second element in the array 

let numberArray = [1, 2, 3, 4]

//sums all numbers in an array 
const sum = numberArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
//accumulator starts as the first element in an array, 1. 
//currentValue starts as the second element in the array, 2. 

sum //#=> 10

//sums 10 plus all numbers in an array
const sumPlusTen = numberArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
//accumulator starts as the initial value, 10. 
//currentValue starts as the first element in the array, 1. 

sumPlusTen //#=> 20


Accumulator remembers the last sum and then adds to next value 

const product = array.reduce((total, currentVal) => total * currentVal)

const maxGrade = grades.reduce((max, currentVal) => {
  return max < currentVal ? currentVal : max;
  // return Math.max(max, currentVal)
  // if(currentVal > max) return currentVal;
  //return max;
});


let arrayNumbers = [100, 5, 70, 350, 47]

//find the maximum value in an array of numbers
const maxValue = arrayNumbers.reduce(function(maxThusFar, currentVal){
  // maxThusFar is the accumulator. currentVal is the currentValue.
  if(currentVal > maxThusFar){
    return currentVal;
  } else {
    return maxThusFar;
  }
})

maxValue //#=> 350



let arrayNumbers = [100, 5, 70, 350, 47]

//find the maximum value in an array of numbers 
const maxValueWithTerniary = arrayNumbers.reduce(function(maxThusFar, currentVal){
  // use the terniary operator inside the callback
  return maxThusFar > currentVal ? maxThusFar : currentVal;
})

//find the maximum value in an array of numbers
const maxValueWithMathMax = arrayNumbers.reduce(function(maxThusFar, currentVal){
  // use Math.max() inside the callback
  return Math.max(maxThusFar, currentVal);
})

maxValueWithTerniary //#=> 350
maxValueWithMathMax //#=> 350



Note, there are other ways we could have written the if/else statement inside the callback function 
1) the terniary operator: return maxThusFar > currentVal ? maxThusFar : currentVal;
2) return Math.max(maxThusFar, currentVal);

I can also pass in an initial starting value after our initial callback 
array.reduce(callback, initialValue)
array.reduce((accumulator, currentValue) => (
  accumulator + currentValue
), 100)
//when we dont specify the first value, it will just use the first element 
//as the initial value 
array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)
//100 is the initial value 

Use reduce to count number of 'y' and 'n' for voting count 

//initial value is an empty object
const results = votes.reduce(func, {})


const votes = ["yes", "yes", "no", "yes", "no", "yes", "abstain", "yes", "yes"]

//return the number of yes, no, and abstain votes.
const results = votes.reduce(function(tally, currentVote){
  //tally is the accumulator. currentVote is the currentValue.
  if (tally[currentVote]){
    //if tally[currentVote] exists, add 1 to that total. 
    tally[currentVote]++;
  } else {
    //if tally[currentVote] does not exist, create it as a key pointing to a value of 1
    tally[currentVote] = 1;
  }
  return tally;
}, {});
//initialValue is an empty object, {}.

results //=> { yes: 6, no: 2, abstain: 1}











const votes = ["yes", "yes", "no", "yes", "no", "yes", "abstain", "yes", "yes"]

//easier way to do it 
const results = votes.reduce((tally, currentVote) => {
  tally[currentVote] = (tally[currentVote] || 0) + 1;
      //If tally[currentVote] exists, add that, if not start at 0, then add 1
  return tally;
}, {});

results //=> { yes: 6, no: 2, abstain: 1}




Want all books with two star review to be in an array 
All books with 3 star review in an array 
const booksSortedByReviews = books.reduce((bookObject, currentBook) => {
  const key = Math.floor(book.rating);
  if(!bookObject[key]) bookObject[key] = [];
  bookObject[key].push(currentBook);
  return bookObject;
}, {})

New-ish features 
Arrow Functions 
String Template Literals 
Let and Const 
For...of 
For...in
Exponent Operator 
String.includes()
Array.includes()
Object.values()
Rest and Spread 
Destructuring 
Default Function Params 
Object Enhancements 
Classes 
Async Functions 

Default Function Parameter Values 

The old way 
function multiply(x, y){
  if(typeof y === 'undefined'){
    y = 1;
  }
  return x * y;
}

The new way
//if no y is passed in, if its undefined, y = 1 
function multiply(x, y = 1){
  return x * y;
}

//could even make y =[1,2,3]

const greet = (person, greeting = 'hi', punctioation = '!') => {
  console.log(`${greeting}, ${person}${punctuation}`)
}

Default parameters generally come at the end 

Spread 
Spread syntax allows an iterable such as an array to be 
expanded in places where zero or more arguments 
(for function calls) or elements (for array literals) are 
expected, or an object expression to be expanded in palces where zero 
or more key-value pairs (for object literals) are expected 

Spread is expanding an iterable (array, string, etc.)
into a list  of arguments instead of passing in a single argument 

Math.max(45, 23, 34)
Or could use spread operator with 
const nums = [45, 23, 34]
Math.max(...nums)

function giveMeFour(a, b, c, d){
  console.log(a, b, c, d)
}

const colors = ['red', 'orange', 'yellow', 'green']
If I use the spread operator, it passes each element as an argument 
giveMeFour(colors) // undefined, undefined, undefined, undefined 

giveMeFour(...colors) //red orange yellow green

const str = 'GOAT'
giveMeFour(...str) // G O A T 
      //same as giveMeFour('G','O','A','T')
Each value is passed as its own argument with the 
spread operator 

First use case of spread operator:
Each element is passed in as its own separate operator 

Second use case of spread operator: 
  Spread: In Array Literals 
  Create a new array using an existing array 
  Spreads the elements from one array into a new array 

const cephalopods = ['dumbo octopus', 'humboldt squid']

Can use to combine arrays

const combined = [newElement1, ...array1, ...array2, newLastElement]

Can combine 3 arrays as well 

Using spread operator makes a clone, new array with a new reference 

const copy = original 
copy === original //true 
const copySpread = ...original 
copySpread === original //false 

"abcd".split('') //['a','b','c','d']
[...'abcd'] //['a','b','c','d']

[...'abc', ...'def', "Hello!"] // ['a','b','c','d', 'e', 'f', 'Hello!']

Spread in Object Literal 
Used to make copies of objects or combine objects 
const feline = { legs: 4, family: 'Felidae'}
const canine = { family: "Caninae", furry: true}

const dog = {
  ...canine,
  isPet: true,
  adorable: true 
}

const cat = {
  ...feline, 
  isGrumpy: true,
  personality: "unpredictable"
}

const catDog = {
  ...canine,
  ...feline
}
 catDog // {legs:4, family: "Felidae", furry: true}
ORDER MATTERS 
CAN OVERWRITE PROPERTIES WITH SAME KEY NAME 

const tripod = {
  ...feline,
  legs: 3
}
//legs: 3, family: "Felidae"

const catDogClone = {
  ...catDog 
}

CAN ONLY SPREAD AN OBJECT INTO ANOTHER OBJECT 
If I try to spread an object inside an array 
[...catDog]
Get Uncaught TypeError: object is not iterable 

BUT I CAN SPREAD AN ARRAY INTO AN OBJECT 
WILL CREATE KEY VALUE PAIRS WITH INDICES AS KEYS 

{...[4,5,6]} //{0: 4, 1: 5, 2: 6}
[...'hello', {...catDog}]
//
0: 'h',
1: 'e',
2: 'l',
3: 'l',
4: 'o',
5: 
family: "Felidae"
furry: truelegs: 4

Way spread works inside object is different than in an array 
...'hello' is inside an array 
{...catDog} is in an object 

Math.min(...[3, 4, 5, 6])
//use spread for a bunch of values into separate arguments

Can use spread to add arrays 
  copy data from one array to another 
  Or add arrays 

Can use spread in object literals
  To copy from one object to another object
  Can add new properties in 
  Can overwrite previous property values 
    Whatever is last is the value so order matters 

Rest Parameters (new)

//lets say we want to add in more and more parameters 

function sum(){

}

Without REST 
Canuse the arguments ObjectNot an array 
Available inside every function 
Its an array like object 
Has a length property
Does not have array methods like push/pop
Contains all the arguments passed to teh funvtion 
Not available insde of arrow functions 

function sumAll(){
  let total = 0;
  for (let i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

sumAll(3, 4, 5) // 12
arguments has elements 
0: 3, 
1: 4, 
2: 5

Cannot use .reduce() on arguments b/c its not an array 
Could use spread operator to turn it into an array 
function sum(){
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) =>{
    return total + currVal
  })
}


function divide(a, b){
  return a / b
}

divide(6, 3) //#=> 2


function divide(a, b){
  return a / b
}

divide(3)
//calls the function:
function divide(3){
  return 3 / undefined
}

divide(3) //#=> Nan 
//Second argument is undefined 
//and 3 divided by undefined equals NaN


function fullName(first, last){
  console.log(arguments)
}
Whatever I enter inside will enter the entire list of arguments 
//instead of just first and last

ALSO arguments does not exist in arrow functions 

REST is new nicer syntax 
Rest is ... but we instead put it in a parameters 
... 
Rest Params 
Collects all remaining arguments into an actual array 

function sum(...nameArray){
  console.log(nameArray)
}
sum(4,5,6,7) // [4,5,6,7]

function sum(...nums){
  return nums.reduce((total, currVal) =>{
    return total + currVal;
  })

}

CAn use ... REST to also collect all remaining arguments that does not match 


function fullName(first, last, ...titles){
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

fullName('tom', 'jones', 'III', 'order of the phoenix')
//
first tom 
last jones 
titles 
["III", "order of the phoenix"]
///put everything after it into the titles array 

const multiply = (...nums) => (
  nums.reduce((total, currentVal) => total +currentVal)
)
//can tell it to only take in remaining arguments after certain set...hence name rwest 
REST IS OPPOSITE OF SPREAD b/c collecting elements into an array 
   REST is taking individual elements and collecting it into an array 
   INSTEAD OF COPYING ELEMENTS OVER OR TAKING AND COPYING ONE ELEMENT AT A TIME
REST has properties of array 
REST can use array functions 

REST TURNS INTO AN ARRAY 
SPREAD TAKES FROM ARRAY AND SPREADS INTO INDIVIDUAL ELEMENTS

Goals:
Get started every day. 
One chapter in each coursee, any more is overload. 
Switch it around. from course to course. 
Start building the program. 
That is the priority. 

const raceResults = [
  'name1',
  'name2',
  'name3'
]

const [gold, silver, bronze] = raceResults

gold //'name1'
silver//'name2'

const [first, , third] = raceResults
first //'name1'
third //'name3'

Use ... to put the rest of the array into a vrariable 
const [winner, ...others] = raceResults 
winner //'name1'
other //['name2', 'name3']

Destructuring arrays shown above 
Set variable set to whatever array you want to unpack 
Can use commas to skip elements

Destructuring an object shown below 
const runner = {
  first: 'Eliud',
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the  Order"
}

const {first, last, time} = runner 
first // "Eliud"
last //"Kipchoge"
time // undefined 

const { country: nation, title: honorific} = runner
Will make a variable nation based on the country key  
country // "Kenya"
honorific //Uncaught reference error 

//Instead of using position, using property name 
//to unpack the rest of the object 
const {first, last, ...others} = runner
first //Eliud
other // {country: "Kenya", title: "Elder of the Ordre"}


const results = [{
  first: "Eliud",
  last: "Kipchoge", 
  country: "Kenya"
},
{
first: "First",
last: "Second", 
country: "Place"
},
{
  first: "Joe",
  last: "Smith",
  country: "USA"
}
]

const [,{country}] = results 
country // "Place"
//would be second object b/c of comma skipping first element 

const [{first: goldWinner}, {country}] = results
//Gets first name but changes variable name to goldWinner 
//country is still "Place"

Cleaner way is 
const [,silverMedal] = results
const {country} = silverMedal
country//"Place"


Destructuring parameters below: 

const person = {
  first: "Eliud",
  last: "Kipchoge", 
  country: "Kenya"
}

function print(person){
  const {
    first, 
    last, 
    title
  } = person;
  console.log(`${first} ${last} ${title}`)
}

print(runner) // "Eliud Kipchoge Kenya"

function print({
    first, 
    last, 
    title
  }) {
  console.log(`${first} ${last} ${title}`)
}

print(runner) // "Eliud Kipchoge Kenya"

const response = [
  "HTTP/1.1",
  "200 OK",
  "application/json"
]

function parseResponse([protocal, statusCode, contentType]){
  console.log(`${protocal} ${statusCode} ${contentType}`)
}

parseResponse(response) // " HTTP/1.1 200 OK application/json"

Shorthand properties 
NEW TO JS with ES 2015. not used in internet explorer 

Key name is name of variable, value is 

const getStats = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const sum = arr.reduce((sum, r)=>sum + r)
  const avg = sum / arr.length
  return {
    max: max, 
    min: min,
    sum: sum,
    avg: avg
  }
}

//could also do:
const getStats = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const sum = arr.reduce((sum, r)=>sum + r)
  const avg = sum / arr.length
  //can just put in one word to represent both key and value 
  //due to Shorthand property of object available via destructuring . 
  return {
    max, 
    min,
    sum,
    avg
  }
}

computed properties 

const role = 'host';
const person = 'Jools Holland'
const role2 = "Director"
const person2 = "James Cameron"

const team = {};
team[role] = person 

team #=> {host: "jools Holland"}

const team = {
  [role]: person,
  [role2]: person2
}

team #=> {host: "Jooles Holland", Director: "James Cameron"}
Computed Properties 
We can use a vvariable as a key name in an objwect literal property 

const user = "Jools"
const userRoles = {
  [user]: "Admin"
}

userRoles; //{Jools: "Admin"}

const team = {
  [1 + 6 + 9]: "sixteen"
}

function addProp(obj, k, v){
  const copy = {
    ...obj
  }
  copy[k] = v;
  return copy
}
Above not using computed properties 
Using computed properties 
const addProp = (obj, k, v){
  return {
    ...obj, 
    [k]: v
  }
}

//If I have an arrow function with an object being returned  
//implicitly, remember to put it in parenthesis

const add = function(x,y){
  return x + y;
}

"hello".toUpperCase()
"HELLO"

const math = {
  add
}

math // {add: f}
math.add(2, 3) #=> 5

//other way to do it is 
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function(x,y){
    return x + y
  },
  multiply: function(x, y){
    return x * y;
  }
}

Definition of METHOD: 
//we call a function a method when: 
//we add a function as a property inside an object

Method 
//Don't have to use

Function name is used to put in for key

const auth = {
  login(){
    console.log("Logged you in!")
  }
}
auth // 
{ login: f login()}
//so login is automatically the key for thte function named 
//For the property that I am adding to auth
//Still need to 
THIS IS A NICE SHORT HAND THAT IS NEW TO JS
WE ADD PROPERTIES TO AN OBJECT WITHOUT HAVING TO WRITE 
login: function(){

}

This 
The keyword this can be a major point of confusion and misery and hardship 
and general suffering in the life of a new JS developer. 

This is a concept that can be a major point of confusion and hardship 
for a new JS developer 

What is tricky is value sometimes seems unpredictable

this is a reference to the current reference scope

function sayHi(){
  console.log("Hi");
  console.log(this);
}

sayHi() // prints Hi and reference to Window 

Window is global scope 
this is referring to how it is called 

Could all alert("LOL")
Or window.alert("LOL")

var color = "teal"
window 
//color is added to the window 

let num = 400;

window.num //undefined

Var declared variables are added to window 
Let declared variables are not added to window 


In a function, this is going to refer to a window.
Except when it doesnt 
This is referring to object in its current executed scope 

const person = {
  first: "Cherilyn",
  last: "Sardines", 
  nickName: "Singer",
  fullName() {
    console.log(this)
  }
}

person.fullName()
//
  {
    first: "Cherilyn",
    last: "Sardines", 
    nickName: "Singer"
  }

this is returning current object 
Could also go with this.first to pull up first name only 
I can console.log(`${this.first} ${this.last}`)
this refers to the object 

const person = {
  first: "Cherilyn",
  last: "Sardines", 
  nickName: "Singer",
  //with destructuging
  fullName() {
    const {
      first,
      last,
      nickName
    } = this
    console.log(`${first} ${last} known for ${nickName}`)
  }
  printBio(){
    const fullName = this.fullName()
    console.log(`${fullName} is a person`)
  }
}

person.printBio() //Cherilyn Sardines known for Singer is a person

Sometimes this is used depending on the invocation context of the 
function it is used in
It means, the value will change depending on how the function 
is executed 

The way I'm actually executing this in the function'

const person = {
  first: "Cherilyn",
  last: "Sardines", 
  nickName: "Singer",
  //with destructuging
  fullName() {
    const {
      first,
      last,
      nickName
    } = this
    console.log(`${first} ${last} known for ${nickName}`)
  }
  printBio(){
    const fullName = this.fullName()
    console.log(`${fullName} is a person`)
  }
}

const printBio = person.printBio; 

printBio() 
//Uncaught TypeError this.fullName is not a function
//this is referring to the window right now 

person.printBio() 
//Works, it is referring this
//this is referring to this inside person

The value of this depends on the invocation context  the 
function it is used in 

const person = {
  first: "Cherilyn",
  last: "Sardines", 
  nickName: "Singer",
  //with destructuging
  fullName() {
    const {
      first,
      last,
      nickName
    } = this
    console.log(`${first} ${last} known for ${nickName}`)
  }
  printBio(){
    const fullName = this.fullName()
    console.log(`${fullName} is a person`)
  }, 
  laugh: ()=> {
    console.log(this);
    console.log(`${this.nickName} says Hahahah`)
  }
}

person.laugh()
//Window 
Value of this is set to the window instead of being set to the 
person object because an arrow function does not behave that way 
An arrow function is a reference to a global scope, to the window 
This is why we dont use arrow function as methods inside an object 
Because we want to use functions to refer to the object
it is inside. We can run into issues unless we use .bind()

Arrow functions do not get their own version of this

Value of this is not based on stone where you write it. 
It is dependant upon where it is invoked 
Way you actually invokie it does matter 

const annoyer = {
  phrases: ["literally", "essentially", "I can't even"] 
  setInterval(func, 3000)
  pickPhrase(){
    const {phrases} = this
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  }
  //
  // start(){
    //console.log(this.pickPhrase())
      //works
  //   setInterval(function(){
  //     console.log(this)
  //     console.log(this.pickPhrase())
          //error this.pickPhrase() is not a function
          //because this refers to the Window
          //this is being set by setinterval 
              //thus this is in the window object
              //   } , 3000)
  // }

  //past solution 
  start(){
    const that = this;
    //also would use bind here
    setInterval(function(){
      console.log(that)
    } , 3000)
  }

  But now with arrow functions, we can avoid problem entirel
  arrow functions dont get their own this  
  In arrow function this wont change from its parent or 
  its nearest this 
  If not using an arrow function get a new this 
  If turn into an arrow function, this is the same as parent
  arrow functions do not get their own this
  start(){
    //cant use 
    // const timerId = setInterval...
    // Because would not have access to timerId in stop()
    this.timerId = setInterval(( => {
      console.log(this.pickPhrase())
    }, 3000))
  }
  //Using arrow function is great for keeping this the same as 
  //its more global scope
  //Arrow functions suck if Im just writing start as a reegular 
  //arrow function expression 

  stop(){
    clearInterval(this.timerId)
    console.log("PHEW THANK HEAVENS THAT IS OVER!")
  }
}

annoyer.pickPhrase() //returns a random phrase form the list 



annoyer.start()
annoyer.stop()


setInterval comes in our brower for free 
setInterval(func, 3000)
  Whatever function we put in there runs for 3 seconds
)
Coding out a deck of cards 


function makeDeck(){
  const deck = []
  const suits = ["hearts", "diamonds", "spades", "clubs"]
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A"
  for (let value of values.split(',')){
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck
}

function drawCard(deck) {
  return deck.pop()
}

const myDeck = {
  deck: [],
  drawnCards: [],
  const suits: ["hearts", "diamonds", "spades", "clubs"],
  const values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck(){
    const{suits, values, deck} = this 
    for (let value of values.split(',')){
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
  },
  drawCard(){
    const card = this.deck.pop()
    this.drawnCards.push(card)
    return card;
  },
  drawMultiple(numCards){
    const cards = []
    for(let i=0; i<numCards;i++){
      cards.push(this.drawCard())
    }
    return cards;
  },
  //fisher yates shuffl
  shuffle(){
    const {
      deck
    } = this;
    //loop over array backwaryds
    for(let i = deck.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1))
      [arr[i], arr[j]] = [arr[j], arr[i]]
      //destructuring to make them swap elements in place 

    }
  }

}


const card1 = myDeck.drawCard()
for(let i = arr.length - 1; i > 0; i--){
  let j = Math.floor(Math.random() * (i+1))
  [deck[i], deck[j]] = [deck[j], deck[i]]
  //destructuring to make them swap elements in place 

}

Using objects is a great way to combine things iwth actions 
Can start writing functions in a clean way where everything 
is done by the function itself 

Creating a deck factory to create multiple decks 

const deck1 = makeDeck()
const deck2 = makeDeck()
deck2.initializeDeck()

//this is not the best way to make multiple decks 
//but its the best way to make mulitple decks with what we have now 

Dont need JS to make a form 
But not getting interactive element without the behavior 

content all HTMLed out but add JS in, do something when I click . 

Just very active clicking on things 
is all JS. Cards themselves is HTML/CSS


Class names 
.special {
  color: TextTrackList;
}
#bear-photos{

}
input[type="password"]{

}
h1 {

}

DOM is our portal into the world of the web age 

DOM is a javascript represenation of a webpage 
Its your js "window" into the contensts of a webpage
Its just a bunch of objects tht you can interact with via JS

Document
Object
Model 

Browser is going to turn it into a bunch of Javascript Objects 
It is a virtual representation of the content on the page 
HTML and CSS go in.... JS Objects Come out

Document 
Body 
H1...creates and Object and those objects have a buch of differnte properties 

console.dir is for regular javascript Objects

DOM is making h1 a regular javascript object 

Have attributes like hidden and false 

Everything we see on page is related to its own JS object .

javascript changing in Javascript 
()
myImg.src = "website"
myImg.style.width = '200px'
document.body.append(myImg)

myImg.style.transform = "translate(300px,200px)"



myImg.src = "website"
myImg.style.width = '200px'
document.body.append(myImg)
//change transition proprety to make it smooother when it moves 
myImg.style.transition = "all 2s";

//make it move every 2 seconds
setInterval(() => {
  const x = Math.floor(document.body.clientWidth * Math.random())
  const y = Math.floor(document.body.clientHeight * Math.random())
  myImg.style.transform = `translate(${x}px, ${y}px)`
}, 2000)

Could also do



myImg.src = "website"
myImg.style.width = '200px'
document.body.append(myImg)
//change transition proprety to make it smooother when it moves 
myImg.style.transition = "all 2s";

//make everything move around 
const allEls = document.body.children 

//create a new style sheet
const sheet = newCSSStyleSheet;
sheet.replaceSync(`* {transition: all 2s}`)
document.adoptedStyleSheets = [sheet];

//make it move every 2 seconds
setInterval(() => {
  for(let el of allElls){
    //make everything rotate around 
    const rotation = Math.floor(Math.random() * 360);
    const x = Math.floor(document.body.clientWidth * Math.random())
    const y = Math.floor(document.body.clientHeight * Math.random())
    el.style.transform = `translate(${x}px, ${y}px rotate(${rotation}deg))`
  }
  
}, 2000)

Document 
The document object is our entry point into the world of the dom 
It contains represenations of all the content on a page, plus 
tons of useful methods and properties 

document has a URL assigned to it 
All other pieces of DOM are nested inside the document 
document.body.children 

Document is entry point to access DOM, view content in DOM 
Document used to add events add other things 

Select 
Manipulate 
Add new forms and buttons 

If multiple IDs of the same name on the page, will 
get back the first matching ID 

document.getElementById('somethingnotthere')
if the ID does not exist, we will get null 

Object is an HTML paragraph element type 
for paragraphs 

img 
The type is an HTML image element 

There are different categories of type on the page 
Every image element has a source, a paragraphs does not 
()
document.getElementById 
return one element represented by object 
If no match, we get null 

const inputs = document.getElementsByTagName('string')
Cant use pop/push/includes/indexOf
But can check for indices 
()
inputs[1]
If input is not there, return undefined 

Very lightweight structure that stores structures 

To turn into an array, can just use the 
spread operator to spread it into an array 
const arr = [...inputs]
Now arr is an actual array of those inputs 

document.getElementsByTagName('something doesnt exist')
  //HTMLCollection() []
  //Not return null 

document.getElementsByClassName('special')
  //Same thing as tag name, return an HTML Collection 


querySelector 
A newer, all-in-one method to select a single element 

console.dir(main)
//gives us an HTML object 

document.querySelector('li.special')
Gives us the first li with class name special 

document.querySelector('ul li.special')
document.querySelector('section ul li.special')
document.querySelector('body section ul li.special')

document.querySelector('input[type=password]')

document.querySelectorAll('li')
  //returns a Node List 
  //Node list is another type of collection 
  //Node list contains, still an HTML contained element 
  //Another array like object, just in a different 
  //container than HTML Collection 

  Jump from course to course
  
kdjf



class Node {
  constructor(val, priority){
    this.val = val 
    this.priority = priority
  }
}


Innner text is aware of what is showing up on the page 

textContent gives us the inner text of that emlement from that file 
Takes all that 

innerText is just the text that ExtensionScriptApis
textContent gets everything from the 
if you had 
<script>console.log("something")</script>

innerText is aware of what is actually showing up on he page 
textContent includes everything, doesn't care at all' gives us everything insdie that 
element from that HTML
He almost always uses innerText
textContent is faster, but tiny difference 

innerText does nto give you the tags 
innerHTML does give you the tags

List of important properties 

classList
getAttribute()
setAttribute()
appendChild()
append()
prepend()
removeChild()
remove()
createElement
innerText
textContent 
innerHTML
value 
parentElement 
children 
nextSibling 
previousSibling 
style 

const inputs = document.querySelectorAll('input')
inputs[0].value => "Taco"...returns value in the input of the form 
can do 
inputs[0].value += "the bear"
//to add the bar to the input value that exists already 

inputs[2].checked
//true or false 
checked state of a check box ()

// inputs
// inputdafd
// daf
// <form action="">
// <input type="password" placeholder="type password">
//   <input type="checkbox">
//   <input type="range" min="100" max="500" step="300">
//     //can be used to create a range that you put in 
//     <input type="submit">
// <form></form>

{/* //add an anchor tag in  */}
{/* <a href="cats.com/cute">Cats are adorable sometimes</a> */}

{/* document.querySelector('a').href #=> returns the web link  */}
()

{/* alt is an attribute, src is an attribute 
for(){} */}

There exist some attributes that you cannot enter in 

range.value 
src on image. href on anchor tag. 

range.getAttribute('max')

range.setAttribute('min', '-500')
range.setAttribute('type', 'radio')

.parentElement #=> ul 
ul.children #=> HTML Collection 
firstLi.nextElementSibling 
secondLi.previousElementSibling 

Can find children and parents 

li.innerHTML = "We are <b>The Champions</b>"
Puts The Champions in bold 

//we don't usually add inline styles 
{/* <h1 style="color: teal;">
h1.style.color = "blue"
p.style.background-color 
  //does not work, swyntax error why all the style properties 
  in JavaScript are camelCase 
p.style.backgroundColor = "black"

p.style 
If you look at it every single style is camel cased  */}

p.style.fontSize = "40px"
Website groups of styles you want to apply to elements to make a theme 
You would use a class


const styles = getComputedStyle(li)
Will give you all possible properties for a given value and their properties 

//computed means somtimes styles may come from javascript 
//or from style sheet or from hover 

h1:hover{
  color: purple;
  font-size: '100px'
}
//will make something purple every time I hover over it 
inline style declarations override everything 

Get computed styles. 
Returns a massive object of every property that has 
been calculated in css
Computed color and font size when I hover
Typing over here and moving cursor as I do it 
const h1 = document.querySelector('h1')
const compStyles = getComputedStyle(h1)

compStyles.color 

h1 {
  color: purple;
  height: 100px;
}

compStyles.color 

<li class="todo">Mow the Lawn</li><button>X</button>

.todo{
  font-size: 30px;
  color: olive;
}

const todo = document.querySelector('#todos .todo')
todo.style.color = "gray"
todo.style.textDecoration = "line-through"
todo.style.opacity = "50%"

.done {
  color: gray;
  text-decoration: line-through;
  opacity: 50%;
}

.getAttribute('class')
todo.setAttribute('class', 'done')
//setAttribute takes value and automatically replaces the current class 
todo.classList 
todo has done class or not 
Want to make sure it does not have it 
Wants to remov eit
Easiest way is to remove 

//to change a class for styling
todo.classList.remove('done')
todo.classList.add('newName')
todo.classList.toggle('done')

section.appendChild(tagName)

const newLink = document.createElement('a')
newLink.innerText = "Mr Bubz Video. Click Here"
newLink.href = "https://www.website.com"

const firstP = document.querrySelector('p')
firstP.appendChild(newLink)

parentUL.insertBefore(newThingImInserting, whereIwanttoinsertBefore)
//parent of what I want to insert into, what I'm inserting, where I want to insert before 

Element.insertAdjacentElement(position, element)
beforebegin 
  before element 
afterbegin 
  before first child
beforennd 
  last child 
afterend 
  after element 
  
name.insertAdjacentElement('beforebegin', newElement)

//do not work in internet explorer 
// Differnt from appendchild b/c can insert multiple parragrpahs at once 
.append()
.prepend()
  

firstP.append(elementOne, elementTwo)
Appends both elements to the paragraph 

Node.removeChild()
//confusing on docs 
i.e. compatiblity is ? 
Can I use is another website you can use 
Yes, .removeChild() is suppored in IE 
.removeChild()
Find the parent and the item that you want to remove

When you do remove a child it does remove the removed child
const deleted = ul.removeChild(li1)

.remove() does not need parent node 
Just call the item that I actually want to remove 


Events
MDN Event reference
Gives a list of all events in javascript 
Drag events
Play 
Forward
Progress events 
Storage Events 

Examples of events 
clicks, drags, drops, hovers, scrolls, 
form submission, key presses, focus/blur 
mouse wheel, double click, copying, pasting, 
audio start, screen resize, printing 

can make inline event handlers but shouldn't '
<button onmouseover="alert('You clicked me')">Click me</button>

const btn = document.querySelector('#idName')

//all lowercase
btn.onclick = function(){
  console.log("you clced me")
}

// can do above nut wrong

btn.addEventListener('mouseover', function(e){

})


add a scroll can put it on the window 
window.addEventListener('scroll', function(){
  console.log('Stop Scrolling')
})

Scrolling can do something call throttling 
There's some position you can to scroll past and it will 
trigger something like an animation '
Dont want something to happen 300 times 


CSS 
btn.style.left 
//colt steele animations on CSS youtube 

button {
  position: absolute;
  top: 10px; 
  left: 10 px;

}



btn.addEventListener('mouseover', function(){
  const h = Math.floor(Math.random() * window.innerHeight)
  const w = Math.floor(Math.random() * window.innerWidth)
  btn.style.left = `${width}px`
  btn.style.top = `${height}px`
}

document.body.style,backgroundColor = 'green';


this inside of a method which is added on to an object 
will refer to that object 

box.addEventListener('click', printColor)

const printColor = function(e){
  console.log(this)
  //this will be whatever box is clicked on 
  const h1=document.querySelector('h1')
  h1.style.color = this.style.backgroundColor

  console.log(e)
  //will bring up everything for the event 
  //the event object
}

'keydown'
key down event when you press down 
shift and T is actually two keydown events
'keyup'
key up event when i release the key that is held down 

'keypress'
there needs to be a character or a change like space 
no shift 
no capital letter 

if you a making a video game probably want keydown 

//keypress
but if i want to know when something is changing in an 
input field, use keypress
note that return does count as a keypress
delete is not a keypress 
someitmes we want to listen for an enter keypress 



tab to select the input 
  is only  key up event 

  addItemInput.addEventListener('keypress', function(e){
    //works b/c Enter is the keypress event when hit return button 
    if(e.key==="Enter"){
      //eliminates if nothing is in there
      if(!this.value) return;
      const newItemText = this.value;
      const newItem = document.createElement('li')
      newItem.innerText = newItemText;
      itemsUL.appendChild(newItem);
      this.value = '';
    }
  })

  keypress 
  does not have shift or arrow keys 
  intended use for keypress only fires in case of an input 
  for when something shows up
  shift and k will only account for k 

{/* <body>
  <form action="">
    <input type="text" placeholder="credit card">
      <label>
        I am a company 
          <input type="checkbox">
      </label>
    </input>
  </form>
</body> */}

e.preventDefault() use to intercept the submission and send it 
to client side database with AJAX 
Instead of capturing every input change as it happens, we could createa  ariable rthat is in sync witht hat 

Attaching a bunch of event listeners if doing it by input fields 
By adding a submit event listener only listening for the submit to be entered by the user 


With form can go to each place via DOM manipulation 
to get it done 
veggieSelect 
terms on 
inputField.value 
checkBox.checked 




creditCardInput.addEventListener('input', (e) => {
  const input = e.target.value;
})

checkBox.addEventListener('input', (e)=> {
  formData['agreeToTerms'] = e.target.checked 
  //for check box checking if true or false for checked
})

//callback, figure out which input, store in form data 

<body>
  <input name="creditCard" type="text"></input>
  <input name="checkBox" type="checkbox"></input>
  <select name="selectedVeggie" id="veggie">
    <option value="eggplant">Eggplant</option>
  </select>
</body>

for(let input of [creditCardInput, termsCheckBox]){
  input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target;
    //destructuring target from e.target as well as name, type.
    formData[name] = type === "checkbox" ? checked : value;

    // same as
    formData[e.target.name] = e.target.type === "checkbox" ? e.target.checked: e.target.value;
  })
}



keypress 
does not have shift or arrow keys 
intended use for keypress only fires in case of an input 
for when something shows up
shift and k will only account for k 

{/* <body>
<form action="">
  <input type="text" placeholder="credit card">
    <label>
      I am a company 
        <input type="checkbox">
    </label>
  </input>
</form>
</body> */}

e.preventDefault() use to intercept the submission and send it 
to client side database with AJAX 
Instead of capturing every input change as it happens, we could createa  ariable rthat is in sync witht hat 

Attaching a bunch of event listeners if doing it by input fields 
By adding a submit event listener only listening for the submit to be entered by the user 


With form can go to each place via DOM manipulation 
to get it done 
veggieSelect 
terms on 
inputField.value 
checkBox.checked 




creditCardInput.addEventListener('input', (e) => {
const input = e.target.value;
})

checkBox.addEventListener('input', (e)=> {
formData['agreeToTerms'] = e.target.checked 
//for check box checking if true or false for checked
})

//callback, figure out which input, store in form data 

<body>
<input name="creditCard" type="text"></input>
<input name="checkBox" type="checkbox"></input>
<select name="selectedVeggie" id="veggie">
  <option value="eggplant">Eggplant</option>
</select>
</body>

for(let input of [creditCardInput, termsCheckBox]){
input.addEventListener('input', ({target}) => {
  const {name, type, value, checked} = target;
  //destructuring target from e.target as well as name, type.
  formData[name] = type === "checkbox" ? checked : value;

  // same as
  formData[e.target.name] = e.target.type === "checkbox" ? e.target.checked: e.target.value;
})
}

<body>
<input name="creditCard" type="text"></input>
<input name="checkBox" type="checkbox"></input>
<select name="selectedVeggie" id="veggie">
  <option value="eggplant">Eggplant</option>
</select>
</body>


Gotta go with it 

Call stack is a mechanism of JS keep track whre it is 
in your code .
The mechanism the JS interpreter uses to keep track of its place 
in a script that calls mutlilple functions. 

How JS "KNOWS" what function is currently being run and what functions are called form 
within that funtion, etc

Call stack, which functions are currnetly being run 
Call stack is book mark or finger keeping t5rack of my current place 


First thing out 
When a script calls a function, the interpreter adds it to the call stack and then 
starts carrying out the function 
Any functions that are called by that function are addded to the call stack further up, 
and run where their calls are RTCIceCandidatePairChangedEvent.
When the current function is finished, the interpreter takes 
it off the stack and resumes execution wheter it left off int eh last code listing 

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c)
}

const makeRant = (phrase, el) => {
  let text = scream(phrase)
  let rant = repeat(text, 8)
  return rant;
}

Chrome dev tooSimilarGo to Sources tab
Go to file with code i.e. app.js 

Add a break point. 
Click on the number to the left of the function calls 
It will insert a break point and pause execution of code when it hits those points 
console.log("Hello")

It will run code then pause on that spot 
Where the break point occured 
It says paused on brakpoint 

If unclick and refresh it doesnt pause anymore 

We have the Call Stack 
makeRant is goign to be called 
makeRant is going to be added ot the calll stack. 

Click on Script inside this breakpoint call 
ocation . 
makeRant is added to the call stack . 




Please note that spread is not useable in Internet Explorer 

A spread is always ... that behave differently based on where you use it.  
A spread is expanding them 



3 uses: 
spread in a function call, spread in array literals, spread in object literals


Math.min(1, 5, 99, 48, 90) //#=> 1

const numbers = [1, 5, 99, 48, 90]
Math.min(numbers) //#=> NaN 

Math.min(...numbers) //#=> 1


Turned Math.min([1, 5, 99, 48, 90]), into Math.min(1, 5, 99, 48, 90)
The spread allows us to pass in an array into individual arguments 

Using the spread ... turns the entire array into 5 arguments while removing the array 
braces from the function call. 

You can also use the spread on a string. 

const hiString = "HELLO"

function log(letter1, letter2, letter3, letter4, letter5){
  console.log(letter1)
  console.log(letter2)
  console.log(letter3)
  console.log(letter4)
  console.log(letter5)
}

log(...hiString)
//Prints
//"H"
//"E"
//"L"
//"L"
//"O"

Using the spread on a string in a function call turns each character of the string 
into separate arguments 



const nums1 = [ 1, 5, 20 ]
const nums2 = [ 25, 40, 60 ]
[...nums1, ...nums2] // [1, 5, 20, 25, 40, 60]
['a', 'b', ...nums2] // ['a', 'b', 25, 40, 60]
[...nums1, 'a', 'b'] // [1, 5, 20, 'a', 'b']



const states = ["New York", "Florida", "Texas"]
const statesCopy = [...states]
statesCopy //["New York", "Florida", "Texas"]
states === statesCopy //false 


"xyz".split('')
//['x', 'y', 'z']
[..."xyz"]
//['x', 'y', 'z']


We can use the spread operator to split a string. 
Can place the string in an array and spread it will do the same thing 
We are telling JavaScript to iterate over this iterable and add it as 
an element in the array. Similiar to a function call, we are taking 
an iterable and breaking it into pieces and copying them into our array destination.
In this case, we are handling an array. 

So we can spread strings not that common into one array. 

const professionalAthlete = {
  height: 'tall',
  speed: 'fast'
}

const athleteClone = {
  ...professionalAthlete
}
athleteClone 
// { height: 'tall', speed: 'fast'}
professionalAthlete === athleteClone 
// false 

const nbaAthlete = {
  ...professionalAthlete,
  jump: 'high'
}
nbaAthlete 
// { height: 'tall', speed: 'fast', jump: 'high'}


const professionalAthlete = {
  height: 'tall',
  speed: 'fast'
}

const childAthlete = {
  ...professionalAthlete,
  height: 'short'
}

childAthlete 
// { speed: 'fast', height: 'short'}




{...'abc'} 
// {0: 'a', 1: 'b', 2: 'c'}

{...[1, 2, 3]}
// {0: 1, 1: 2, 2: 3}

Using the spread on a string in an object literal will create key value pairs with the 
indices being the keys and the element, in this case each individual character, 
being the value. 

Call stack, web api's '
JAVASCRIPT console.log hi everyone. 
then you'll see web apis taking over'

Set timeout delay is being kept track for 7 seconds.
Another timeout for 3 seconds will be handled as well. 
One more console.log JavaScript moves on and the web API's decide the time is up'
they add the call back not directly to the queue, but essentially 
it is a place where callbacks are added and JS will add onto the queue 
Pause, first thing, call stack has one function called hi everyoneNow it gets 
to setTimeout function and JS realizes this is one of those things it can add to browser .
Going to add it to a web api .
Pause again. Time out that is being kept track of over there and JS 
creates another line .
Passes it off to web apis and when interval/delay is over, give asyme that callback 
back and JS moves it to console.logs 
Three second time out finishes. 
And it adds callback there 
To the callback queue, which JS will now draw upon. 


element.style.transform = `translateX(${amount}px)`
element.getBoundingClientRect()
  //tells us info about the element
  //its width, right, left

Callback hell lots of nested functions and callbacks
Promises allow us to write asynchronous code 
moveXPromise(btn, 100, 1000)
  .then()

Promises a pattern for writing async code 

A promise is an object representing the eventual 
completion or failure of an asynchronous operation 

const willGetYouADog = new Promise((resolve, reject) => {
  //resolve()
  //reject()
  const rand = Math.random()
  if (rand < 0.5) {
    resolve()
  } else {
    reject()
  }
})
//create new function Promise 
resolve or reject status

willGetYouADog.then(() => {
  console.log("Yeah, we got a dog")
})
willGetYouADog.catch(() => {
  console.log('No Dog')
})

Can chain .then as long as each callback returns 
a promise 
.then((r) => {
  const postId = r.data.topPostId;
  return fakeRequest(`/posts/${postId}`)
})
.then()

document.addEventListener('DOMContentLoaded', function(){
  fetchImage(imgIndexUrl, 1)
})
function addCommentToDatabase(url, imageId, comment) {
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify( {
          "imageId": `${imageId}`,
          "content": `${comment}`
      })
  })
  .then(resp => resp.json())
  .then(commentData => addCommentWithPersistance(commentData))
  .catch(error => alert(error))
}
thisLikeButton.addEventListener('click', function(e){
      
  if (e.target.className === 'like-button') {
      let thisLikeCount = thisLikeButton.dataset.likes
      console.log('me too')
      const thisImgId = thisLikeButton.dataset.id 
      thisLikeCount = parseInt(thisLikeCount) + 1
      fetchPatchLike(imgIndexUrl, thisImgId, thisLikeCount)
  }
})

What are Pure Components?
React.PureComponent is exactly the same as React.Component except that 
it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. 
Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

What is the purpose of callback function as an argument of setState()?
The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.

setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))

What is the difference between HTML and React event handling?
Below are some of the main differences between HTML and React event handling,

In HTML, the event name should be in lowercase:

<button onclick='activateLasers()'>
Whereas in React it follows camelCase convention:

<button onClick={activateLasers}>
In HTML, you can return false to prevent default behavior:

<a href='#' onclick='console.log("The link was clicked."); return false;' />
Whereas in React you must call preventDefault() explicitly:

function handleClick(event) {
  event.preventDefault()
  console.log('The link was clicked.')
}
In HTML, you need to invoke the function by appending () 
Whereas in react you should not append () with the function name. (refer "activateLasers" function in the first point for example)

How to bind methods or event handlers in JSX callbacks?
There are 3 possible ways to achieve this:

Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // ...
  }
}
Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.

handleClick = () => {
  console.log('this is:', this)
}
<button onClick={this.handleClick}>
  {'Click me'}
</button>
Arrow functions in callbacks: You can use arrow functions directly in the callbacks.

<button onClick={(event) => this.handleClick(event)}>
  {'Click me'}
</button>
Note: If the callback is passed as prop to child components, 
those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.

The major features of React are:

It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
Supports server-side rendering.
Follows Unidirectional data flow or data binding.
Uses reusable/composable UI components to develop the view.

What is JSX?
JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us 
expressiveness of JavaScript along with HTML like template syntax.

Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

const Button = ({ onLogin }) =>
  <div id={'login-btn'} onClick={onLogin}>Login</div>
Then JSX gets transpiled to a React.createElement() function tree:

const Button = ({ onLogin }) => React.createElement(
  'div',
  { id: 'login-btn', onClick: onLogin },
  'Login'
)

What are Pure Components?
React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component 
will re-render by default whenever shouldComponentUpdate is called.


What is state in React?
State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state 
as simple as possible and minimize the number of stateful components.

State is similar to props, but it is private and fully controlled by 
the component. i.e, It is not accessible to any component other than 
the one that owns and sets it.

What are props in React?
Props are inputs to components. 
They are single values or objects containing a set of values
 that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

 What is the difference between state and props?
 Both props and state are plain JavaScript objects. 
 While both of them hold information that influences the output of render, 
 they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

 Why should we not update the state directly?
If you try to update state directly then it won't re-render the component.

//Wrong
this.state.message = 'Hello world'
Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

//Correct
this.setState({ message: 'Hello World' })

How to pass a parameter to an event handler or callback?
You can use an arrow function to wrap around an event handler and pass parameters:

<button onClick={() => this.handleClick(id)} />
This is an equivalent to calling .bind:

<button onClick={this.handleClick.bind(this, id)} />
Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

<button onClick={this.handleClick(id)} />
handleClick = (id) => () => {
    console.log("Hello, your ticket number is", id)
};


ow to pass a parameter to an event handler or callback?
You can use an arrow function to wrap around an event handler and pass parameters:

<button onClick={() => this.handleClick(id)} />
This is an equivalent to calling .bind:

<button onClick={this.handleClick.bind(this, id)} />
Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

<button onClick={this.handleClick(id)} />
handleClick = (id) => () => {
    console.log("Hello, your ticket number is", id)
};

What are synthetic events in React?
SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), 
except the events work identically across all browsers.

What are inline conditional expressions?
You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.

<h1>Hello!</h1>
{
    messages.length > 0 && !isLogin?
      <h2>
          You have {messages.length} unread messages.
      </h2>
      :
      <h2>
          You don't have unread messages.
      </h2>
}

What are inline conditional expressions?
You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.

<h1>Hello!</h1>
{
    messages.length > 0 && !isLogin?
      <h2>
          You have {messages.length} unread messages.
      </h2>
      :
      <h2>
          You don't have unread messages.
      </h2>
}

What is "key" prop and what is the benefit of using it in arrays of elements?
A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

Most often we use ID from our data as key:

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)
When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
)
Note:

Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.
If you extract list item as separate component then apply keys on list component instead of li tag.
There will be a warning message in the console if the key prop is not present on list items.

""'
Refactor fetch requests
fetch('')
.then(response)
if(!response.ok)
  rhow new Error


.then(data => {
  for (let planet of data.results){

  }
})

Copy the logic, and place down                       
To place the name of each planet 

const checkStatusAndParse = (response) => {
  if(!response.ok) thorw new Error(`Satus Code Error: ${response.status}`)
  return response.json()
}

const printPlanets = (data) => {
  console.log('Loaded 10 more planets...')
  for (let planet of data.results){
    console.log(planet.name)
  }
  // const p = newPromise((resolve, reject) =>{
  //   resolve()
  // })
  // return p

  // or can use
  return Promise.resolve(data)
}
//just passing the data again as a promise 

fetch('')
.then(checkStatusAndParse){

}
.then(printPlanets)
.then(getMorePlanets)

For a .then to work it must return a promise 


const fetchNextPlanets = (url = '') => {
  return fetch(url)
}

Can call when fetching a function and either receiving a new URL or 
Starting with the default starint url 

Axios github
Official github repository has a ton of starts used by 2 million people 
It simplifies the process of using fetch 

It is promised based. 
Both the client/browser side of things 
and on the server side using node.js 
Can use a tool like Axios using Node 
One library, one way of fetching data that will work in the browser and Node.js 

If we want to use Axios, we need to include it as an HTML file in our script 
Can copy the cdn 
Script is an external source. 
If we visit it, we load the source of Axios 
Minified into chunk of text that we use for Axios 

We definitely want to include it before our own files uisng Axios 

Referencing Axios in our App.js 

JavaScript won't know about Axios'
How do we make a request 
Perform a get request 

//instead of using fetch
axios.get(url)
//I get a promise back 
Value of it, there is a data property that has already 
been parsed for us. We dont have to do the json parsing on our own 

If we want to weed out the bad status code, we have to manuallyu do it 
If we use axios, those arent a problem anymore

axios.get('web').then((res) => {
  console.log(res.data)
}).catch((err) => {
  console.log(error)
})

Fetch does not reject a promise if its something other than 
200 

Axios knows that typically if there is a status code if its 
not okay, were going to want to go to the catch callback 
It simplifies thing in two ways
Dont have to parse json 
And dont have to weed out non 200 status code, 
but there will be an automatic rejection of 
return 

Sequential Axios Requests 

axios.get('urlName')
.then((data) =>{
  console.log(data)
  for (let planet of data.results){
  console.log(planet.name)

  }
  return axios.get(data.next)
})
.then(

)

const fetchNextPlanets = (url = "") => {
  return axios.get(url)
}

const printPlanets = (data) => {
  console.log(data)
  for (let planet of data.results){
    console.log(planet.name)
  }
  return Promise.resolve(data.next)
}

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)

Axios is pre parsed for us

</button>
<button></button>

Async functions depends on promises 
A sink 
Async functions are a nice syntactical sugar for promises 
Still have to understand promises 

Async functions, if we have some regular old function 

function getData(){
  const data = axios.get('url')
  console.log(data)
}

To write code like above without having to 
use .then, 
one code wont run until the other finished 

Would need to use .then 
function getData(){
  const data = axios.get('url').then((data) => {
    console.log(data)
  })
}

Can instead use the async keyword 
Async keyword in front of function keyword or definition 

Async functions always return a promise 
If the function returns a value, the promise will be rresolved with that 
value 
If the function throws an exception,t he promise will be rejected 

function greet(){
  return "Hello!"
}

async function greet(){
  return "Hello!"
}

Promise will be resolved with value .
Function above returns a promise

greet().then((val) => {
  console.log('Promise reoslved with: ', val)
})

async function add(x, y){
  if(typeof x !== 'number' || typeof y !=='number'){
    throw 'X and Y must be numbers'
  }
  return x + y; 
}

//without async version would have to do 
function add(x, y){
  return new Promise((resolve, reject) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
      reject('x and y must be numbers')
    }
    resolve(x + y)
  })
}


add('e', 'r')
.then((val) => {
  console.log('Promis eresolved with: ', val)
})
.catch((err) => {
  console.log('Promise resolved with: )', err)
})

Async can return promises 
Wraps function in a promise 

The await keywrod inside of functions declared with async 
await will pause the execution of the function, waiting for a 
promise to be resolved 

function getPlanets(){
  return axios.get('')
}

getPlanets().then((res) => {
  console.log(res.data)
})

Easier way is

async function getPlanets(){
  const res = await axios.get('')
  console.log(res.data)
}
//will run only after promise is resolved. 
//one thing happens, it finishes then the next thing 
// happens and finishes

getPlanets() still returns a promise 
By putting await there, JavaScript will wait until the promise is resolved 

Will just store things in the variable and have access to it on the very next line 

Await can only work in an async function 

minAge > 0 ? <div>Say something</div> : null; 



import React from 'react';

const NavBar = props => {
  return (
    <div className='navbar'>

    </div>
  )
}

export default NavBar


<App /> if parents, renders its div and renders 
NavBar, game cards etc. 

const gameContainer = props => {
  return (
    <div id="game-list">
      {boardGames.map((game, index) =>
        <GameCard 
          key={game.id}
          name={game.name}
          isCollaborative={game.isCollaborative}
        />
      )}
    </div>
  )
}

Learn styled components 

look up react Events
Handling Events React 
IN react, when I find the component I want to create 
just like ai give it a style, i define its event behavior int he tag 
First behavior when select game is clicked want to show an aelrttwith 
game played 

class GameCard extends React.Component {
  handleClick() {
    console.log('clicked a gamecard', this)
  }
  //this is undefined right here
  //this is question of binding
  //because this is an instance method, we hoped this would be an instance of 
  //game card. B/c it is unbound 
  //Reason doesnt know what this is because it is unbound 
  //Havent defined this as game card 

  handleClick = () => {
    //this keyword is BOUND TO the this where the function is defined 
    //this is defined in instance of game card, thus this is 
    //referred to as game card regardless of where it is invoked. 
    console.log('clicked a gamecard', this)
  }
  //this is the gameCard object here with key/value pairs 
  //Everything in JS is key/value pairs secretly 
  //Knows it it is because this is bound here 
  //Arrow functions at ES6 had folks update in JS 
  //Because of React JS developers moved away from functional programming 
  //And binding was becoming a huge issue 
  //So they gave us this out 


  handleClick = (e) => {
    setTimeout(() => console.log('clicked a gamecard', e.target), 1000)
    //doesn't work above 
    //instead 

    Save info into different variable 

    let target = event.target 
    setTimeout(()=> console.log('clicked a gamecard', target), 1000)
    
  }
  render(){
    const { name, minAge, minPlayers, maxPlayers, isCollaborative, likes } = this.props;
    return (
      <div className="game-card">
        <h3>{name}</h3>
        <div>{minAge}+ yeards old</div>

        {/* <button onClick={()=> console.log('clicked a gamecard')}>Click a button</button> */}
        <button onClick={this.handleClick}>Click a button</button>
        {/* //passing in must be a reference, cannot be the invocation itself  */}
        {/* Can also write below when function is invoked, here is 
        what we are passing and invoking the this.handleClick function  */}
        <button onClick={()=>this.handleClick()}>Click a button</button>
        //if using evnts 
        <button onClick={(e)=>this.handleClick(e)}>Click a button</button>
      
      </div>
    )
  
  }
}

expo SMS 
expo phone call 
expo as commmand line interface for everything 

CSS trick add background white to see what its covering 
Margintop space on top

divs dont inherit from parents so if I want to center something
Hvae to do it individually 

import TouchableOpacity from React Native 
b/c not much with HTML available 

justifyContent: 'center', alignItems: 'center',

View is like styling

Has pre set colors
Colors.rugged.primary 

flex-direction: row
space-around 


height: 30
width: 30 =
borderRadius: 15 

Makes a circle 

Use React Native debugger

MTBoldText
Bold, regular, medium, or light 


Old School create staate 

constructor(props){
  super()
  this.state {
    like: props.likes;
  }
  this.handleClick = this.handleClick.bind(this)
}

//Arrow functions, we handle the binding 
state = {
  likes: this.props.likes;
}

Legacy code bases have that going on with constructor(props)


handleClick = (event) => {
  this.setState({likes: this.state.likes + 1})
}

//One of biggest rules in React is you cannot mutate state 

One state is updated, it will trigger a re-render
User sees it up there 

//Functional setState to handle asynchrosity 

handleClick = (someCustomArg) => {
  //If I need some custom argument, I need to use the notation below
}

<button onClick={this.handleClick('someCustomArg')}>{this.state.likes} likes</button>

getAllGames = () => {
  fetch('')
  .then(r => r.json)
  .then(data => {
    console.log('inside of fetch', data)
    this.setState({games: data})
  })
}

<div className="game-list">
  {boardGames.map((game, index) =>
    <GameCard
      key={index}
      name={game.name}  
    />
  )}
</div>

React Native
A collection of "special" React components 
Components compiled to Native Widgets 
Native Platform API's exposed to JavaScript'
Connects JavaScript and Native platform Code 

Combine React.js and React Native 
Take your JavaScript and add to ios 

Get a result in the end;

const App = props => {
  return(
    <View>
      <Text> Hello there!</Text>
    </View>
  )
}


React for 

Sodalyt how its been so far 
Background with my experience 
How I know Nick 

How I got into this whole technical field 

expo 
Project is within my grasp 

Get on the wagon and start going 

Ideally start the entire code base 

Sodalyt 
MVP 
Working together a lot 
When they were doing the project, especially at the beginning 
A lot of phone and zoom discussions 
See how well it connects 

AWS 
In the beginning, Nick and Marco hadn't used AWS'
EC2 instance to host a database 
Used one of their databases once 
Once you start going through the tutorials and see how well everything connects with each other
Something he realizes things that took him an hour before takes him about 5 minutes 

AWS is complex in the very beginning, but I'll get a grasp on it over time '
Ill be given access to my own company email address and access to AWS console 
Then Ill get the whole services playground to work with 

Dont know how much he used AWS besides AWS amplify 
Most of AWS 
Native 
A lot of when he does build up the app, it is hosted on AWS 
It is the invoke APIs and Urls from them 
He would ask access to this kind of data 
It needs to be formatted in this way
He creates an AWS lambda function that accesses data 
and returns the data in json 
Returns the object for the URL 
Nick did some post SQL work 
Dont know if theyll do it 
If they do it in the future or not 
What he and NIck came up with the project, they got to determine 
all the technical aspects to do with it
After the MVP, I will decide what other tools 
How else to integrate other things with it 
AWS cognito 
AWS password management system 
Has a placeholder now but not the best 
Need a better authentication tool 
But will use cognito with that 
It is a big thing to learn and not a big deal to deal with it

Talk about Android and iOS versions of the app 
juggling with it 
Android developer 
iOS developer 

I would lead the front end development team 
He has a long term vision of where they are 
Hope is that theyre expanding the team in the near future 
Within the next 3 or 4 months 
They may expect two or more developers to come aboard 

They know the founders want to expand the team 

After getting investor money to reach that June ish time frame to launch the app 

App to present to investors 
Once they see how good that is. 
Full steam ahead. 

Work with Nick at Flatiron 

Not an issue b/c does not know experience with applying to other jobs 
One to three years of experience 
Hes not a big believer in quantifying years of experience 
Could have been doing the most menial task that requires a very little 
Bit of coding 
In reality, they didnt code that much and their experience 
Not a general law of it 
More hours dedicated to work 
and how creative you were with coding 

More weight with decision 
More about what Ive done in amount of time Ive had 

Its been great 
Marco misses the blogging part 
He loves being able to focus on this work 
And when he was doing the blogging 
Was getting paid over $100 per day over his blogs 
His blogs actually bring in an income 
They take care of the groceries once per month 
Right now, even though he doesnt publish anything 
Until that drops wont publish another article 
Like the article part 
Like the coding part more 
Get the app up and running and trying to make this company 

Infosys 
He got the other offer and was offered relocation stuff 
Bigger company is something the start up cannot match 
Mistake is the start up didnt lock them up at the very beginning 
Paid them weekly 
Nothing in writing solidifying employment status 
Led to other opportunities 
They were afraid of commitment 
I'd do cosmetic challenges '
Version compatibility 
And internationl compatibility 
Wed be the ones who are going to get paid 
Transition is happening 
If they had tried to sign them sooner 
He wouldve been less inclined to as well 
Unfortunate aspect of the info 

To Do Lists of tasks I need to get done 

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// importing hooks. Must use hooks for state
 
import { StyleSheet, Text, Button, View } from 'react-native';
 
export default function App() {
 const [outputText, setOutputText] = useState('Open up App')
  return (
   <View style={styles.container}>
    
     <Text>{outputText} </Text>
     <StatusBar style="auto" />
     <Button title="Change Text" onPress={() => setOutputText('changed')}/>
     {/* Closing tag for a button  onPress same as onClick*/}
   </View>
 );
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// importing hooks. Must use hooks for state

import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App')
  
  return (
    //ADD SOME PADDING, distance from border on it to the 
    //the content of the view 
    //border of the view to the content in the view distance is apadding
    //style expects a JS Object. So fire it's style, inside it is an object 
    //with key/value pairs. Property names/values 
    <View style={{padding: 30}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      {/* Row to change from column 
      space between gives them in spaace in between different items 
      justify Content across the main axis 
      alignItems are across the cross axis 
      Vertically center items with alignItems: center  */}

      {/* //puts a line across the bottom border line */}
        <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>
      {/* //puts a line across the entire input box   */}
        <TextInput placeholder="Course Goal" style={{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}/>
      {/* Alternative syntax is camelCase, doesnt use dash case like it does in JS. */}
      {/* Have to use property names I find in official docs  */}

      {/* //padding spacing between border and where I enter something  */}
        <Button title="ADD" />
      </View>
    </View>
  );
}

3.34) Touchable wraps around whatever you want
Finished touch events that are more detailed and configured for you 
Touchable acts more as a parent class for React Native b/c multiple different 
Versions of Touchable to use
TouchableOpacity 
	Gives you high level touch events to listen to 
	Gives us visible feedback of touching the event with opacity being changed 
	When the button is pressed
	Press this, the opacity effect is way less strong 
All will listen to the press event

I can control opacity with activeOpacity 
Will be less transparent when press it to control the extent to 
which Opacity is effected.
All will listen to press effect

<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
           <View style={styles.listItem}>
               <Text>{props.title}</Text>
           </View>
       </TouchableOpacity>


TouchableHighlight allows you to listen to high level press events 
	Background color changes to black 


   <TouchableHighLight onPress={props.onDelete}>
           <View style={styles.listItem}>
               <Text>{props.title}</Text>
           </View>
       </TouchableHighLight>


TouchableNativeFeedback
gives ripple effect 
Use docs on how to change it up 

TouchableWithoutFeedback
	Gives no visual feedback
	Sometimes you can tap as much as possible, but don’t want to give feedback to the 
	user. 
3.35) Remove

Parent
 const removeGoalHandler = goalId => {
   setCourseGoals(currentGoals => {
     return currentGoals.filter(goal => goal.id !== goalId)
   })
 }
<FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
          itemData={itemData =>
           <GoalItem id={itemData.item.id} onDelete={removeGoalHandler}/>
           {/* <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)}/> */}
          }
        />      


// Child
// return (
//        <TouchableHighLight onPress={props.onDelete.bind(this, props.id)}>
     
//        <View style={styles.listItem}>
//            <Text>{props.title}</Text>
//        </View>
//    </TouchableHighLight>

// 3.36) Modal Overlay 

// Import Modal 
//   //empty screen when clikc the modal
//      <Modal visibility={false}>

// Parent, passing down isAddMode to true or false
// const [isAtMode, setIsAtMode] = useState(false)
// <View style={styles.screen}>
//        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      
//        {/* isAddMode added to visible prop */}
//        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>
//        <View>

// Child, using true or false to bring input box visible and with slidingtehcnique
//    return (
//        <Modal visible={props.visible} animationType="slide">
//            <View style={styles.inputContainer}>
//            <TextInput
//            placeholder="Course Goal"
//            style={styles.input}
//            onChangeText={goalInputHandler}
//            value={enteredGoal}
//                //enteredGoal being updated with onChangeText goalInputHandler
//            />
 
//            {/* forward entered goal in calling anonymous arrow function  */}
//            <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
          
//            {/* Can use bind JS feature to preconfigure some arguments that should
//            eventually be passed along as soona s the argument is executed
//            first argument is this.
//            Second argument is received by the function, when the button is pressed
//            */}
//            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
//            </View>
//        </Modal>
//    )
{/* 
Next step is to make sure Modal is centered 

3.37) More Flexbox styling 
Modal takes full space of screen 
But View only takes full space of its children
View has height of its children text input and button combined and broadest width 
of text Input and width 
To make the view take the full available spac where 

I can go to the style I applied to the view and set flex: 1


return (
       <Modal visible={props.visible} animationType="slide">
           <View style={styles.inputContainer}>
           <TextInput
           placeholder="Course Goal"
           style={styles.input}
           onChangeText={goalInputHandler}
           value={enteredGoal}
        
           />         
           <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
           </View>
       </Modal>
   )
const styles = StyleSheet.create({
   screen: {
     padding: 50
   },
   //centers input container to middle
   //need to set flex to make sure it takes all space as its
   //parent element gives it, otherwise it just takes its child elements
   //space
   inputContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   textInput: {
       width: '80%',
       borderColor: 'black',
       borderWidth: 1,
       padding: 10,
       marginBottom: 10
   },
  
 }); */}


{/* 
If we have something that relies on a 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
(){}() ))))))) Math.random() */}

3.34) Touchable wraps around whatever you want
Finished touch events that are more detailed and configured for you 
Touchable acts more as a parent class for React Native b/c multiple different 
Versions of Touchable to use


function runSomething(){

}



fetch('http://localhost:3000/users')
.then(response => response.json)
.then(data => callback(data))


function getData

Async function always return a promise 
If the async function returns a value, the promise will 
be resolved with that value 

If the function throws an exception, the promise will be rejected. 

Put the async keyword in front of the function 

async function getRequestLocalHost(){
  return 
}

function stringGreeting(){
  return "Hello"
}

stringGreeting() 
//#=> "Hello"

async function asyncStringGreeting(){
  return "Hello"
}

asyncStringGreeting() 
//#=>Promise (<resolved>: "Hello")

If I put the async declaration in front of the function 
I return a Promise that is resolved with the value of "Hello"



async function asyncStringGreeting(){
  return "Hello"
}
asyncStringGreeting().then((value) => {
  console.log('Promise resolved with ', value)
})
//Prints: "Promise resolved with Hello"

The .then resolves the promise 

Those two simple functions dont do anything asynchronous, so why use a promise 

Promises might be rejected or might be resolved 
Instead of returning a rejected promises, we can throw an Error to show 
If a promise is rejected 

async function add(a, b){
  if(typeof a !== "number" || typeof y !== "number"){
    throw 'One of a or b is not a number.'
  }
  return a + b
}

add(4, 5)
//#=>Promise (<resolved>: 9)

add('c', 5)
//#=>Uncaught (in promise) One of a or b is not a number.


If you throw an exception, it will be thrown with that function .

async function add(a, b){
  if(typeof a !== "number" || typeof y !== "number"){
    throw 'One of a or b is not a number.'
  }
  return a + b
}

add(4, 5)
.then((value) => {
  console.log('Promise resolved totaling, ', value)
})
.catch((error) => {
  console.log('Promise rejected: ', error)
})
//Prints: Promise resolved totaling 9

add('California', 'New York')
.then((value) => {
  console.log('Promise resolved totaling, ', value)
})
.catch((error) => {
  console.log('Promise rejected: ', error)
})
//Prints: Promise rejected. One of a or b is not a number. 


The function now follows the resolve or reject formula of a promise. 
If a and b are both numbers, the function will resolve, adding the two numbers .
If one of a or b is not a number, the function will reject the value, Returning 
a rejected promise.
By adding a .catch(error) after the .then, .catch function will run if 
the promise is rejected and send the .catch() the string that is entered into the 
reject() function, in this case, 'One of a or b is not a number.'

function add(x, y){
  return new Promise((resolve, reject) => {
    if(typeof a !== "number" || typeof y !== "number"){
      reject('One of a or b is not a number.')
    }
    return a + b
  })
}

The async keyword is a way of wrapping a function in a promise.

The await keyword will pause the execution of the function while it 
awaits for the asynchronous operation to be resolved 


Using a fetch, I would follow the fetch with two .then() functions 
first to  

function getAxiosUserData(){
  return axios.get('http://localhost:3000/users')
}

getAxiosUserData()
.then(response => console.log(response.data))
//Prints the user data saved in localhost:3000/users

async function getUserData(){
  const result = await axios.get('http://localhost:3000/users')
  console.log(result.data)
}

getUserData()
//Prints the same user data saved in localhost:3000/users

It will await for the fetch to be resolved before moving on 
to the next function 


the axios.get('http://localhost:3000/users')
Will run with the await keyword 
JavaScript will not run until that promise is resolved
Then the function will move on by console.log() on the result keyword 


Usually console.log(result.data)
//will return undefined b/c the promise is not resolved yet when console.log() is run 

Note that you can only use await inside an async function. 

Async still uses promises, its just easier to read. 
As doing more asynchronous operations, its easier to see the order of which functions are running first 

the axios.get('http://localhost:3000/users')
Will run with the await keyword
JavaScript will not run until that promise is resolved
Then the function will move on by console.log() on the result keyword

const moveX = (element, amount, delay ) => {
  
  if (){
    reject({ bodyBoundary, elRight, amount})
  }
  else {
    element.styletrtansformse 
    resolve()
  }
}

If we have enough room, the promise is moved. 

async function animateRight(el) {
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
}

animateRight(button).catch(err => {
  console.log(err)
});

Just add await and async 

return ( 
  <View style={styles.container}>
      <TouchableWithoutFeedback 
      onPress={
          () => {
              props.navigation.navigate({routeName: 'Email'})
          }
      }>
          <View>
              <View style={styles.headerImageContainer}>
                  <Image 
                  source={require('../images/box_crest_logo.png')}
                  style={styles.image} 
                  resizeMode='cover' />
              </View>
              <View style={styles.imageContainer}>
                  <Image 
                  source={require('../images/logo_w_text.png')}
                  style={styles.image} 
                  resizeMode='cover' />
              </View>
              <View>
                  <MTLightText style={styles.text}>Click Anywhere to Get Started</MTLightText>
              </View>
          </View>
      </TouchableWithoutFeedback>
  </View>
);



