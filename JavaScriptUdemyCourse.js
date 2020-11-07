

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

1 + NaN = NaN 
1 / 0 = NaN 
Needs to be NaN  
Needs to be written out that way 

Can write out Infinity or 1/0 
Also -Infinity 

0 and -0 are values in Javascript as well 

Uncaught SyntaxError: Identify 'averageRating' has already been declared 
If I try to call let twice 

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

"hi" + 1 => "hi1"
For netative
"hi" - 2 => NaN 
;

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

 let annoyignLaugh = 'so funny! ha'
 annoyignLaugh.replace('ha', 'haha') //=> 'so funny! haha'

 'ha ha ha'.replace('ha', 'hee') //=> 'hee ha ha'
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

'GARBAGE!'.slice(2).replace('B', '')
//=> 'RAGE!'

String escapes
 Also known as escape sequences 
 Combinations of characters with a string 
 
 "He said I ain\'t happy"
 //=> "He said I ain't happy"

 "He said \"I ain\'t happy\""
 //=> "He said "I ain't happy""

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

.pop() returns removed items

If nothing in array 
array.pop() #=> undefined
str #=> 'hello'

string kdlafjl";

