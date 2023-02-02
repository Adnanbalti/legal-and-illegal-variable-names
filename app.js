/*             Question-01:
Declare 3 variables in one statement.*/

var firstLastName = "Muhammad Adnan";
alert("I am " + firstLastName);


/*             Question-02: 
Declare 5 legal & 5 illegal variable names.*/

//           Five legal variable names:
var firstName = "Muhammad";
alert("First name is " + firstName);

var sur_name = "Adnan";
alert("Sur_name is " + sur_name);

var age = 20;
alert("I am " + age + " year old");

var $profession = 'Developer';
alert("My profession is " + $profession);

var other_$_Skill = 'Mob App Developer \n and python';
alert("Other skill is " + other_$_Skill);


//           Five illegal illegal variable names:
// Note: These variable names are illegal so I had to comment.
// var first name = 'Muhammad Adnan';
// var sur-name = 'Adnan';
// var Age = 20;
// var 1-profession = 'Developer';
// var Other-2-skill = 'Mob App Developer \n python';


/*              Question0-3: 
Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________*/

var num = "Numbers, ";
var dollar = "$";
var underScore = "_.";
var letter = "letter, ";
var sensetive = "sensetive.";
var keywords = "keywords.";

var head = document.getElementById(heading);
document.write("Variable names can only contain" + num + dollar + " and " + underScore + "<br> For example $my_1stVariable  <br>"); 
document.write("Variables must begin with a " + letter + dollar + " or " + underScore + " For example $name, _name or name <br>");
document.write("Variable names are case " + sensetive + "<br>");
document.write("Variable names should not be JS " + keywords + "<br>");