

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
string kdlafjl";



