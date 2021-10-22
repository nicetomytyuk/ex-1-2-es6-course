# ex-1-2-es6-course
###### Exercises created for my new colleagues who are studying JS and ES6

### Ex 1:

Create a web page with the following files:

index.html
app.js
person.js
student.js
index.css

in corresponding js file you should create a Person class with the following properties:

name
surname
age

create here a function which returns full-name (name+surname).

Then create a class which extends Person called Student,

Student's class should have another property called favSubjects which should contain an array of strings.

Then in app.js initialize an array of Students (at least 5) with invented data.


The next step will be to show in fancy cards the array of Students initialized before, the name and surname should be written by using the function for full-name written in Person class, then if the age is lower than 18 the age color text should be yellow else green, favSubjects should be shown in a list.

### Ex 2:

Starting from the Ex 1, add the possibility of adding a new Student from a form.

The user should be able to insert a Student by adding his name, surname, age, favorite subject.

Each of the property has to be validated for it's type.

Favorite subject should be a multi select dropdown which loads subjects from JS.

Each newly added student should be appended after the last added.

IF the user is trying to add a Student with age <= 12 prevent the insert and notify the user that only Students with age of 12 > are admitted.
