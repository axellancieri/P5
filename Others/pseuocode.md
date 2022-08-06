========================================================
<!-- Basic Example -->
========================================================
Requirements
- Get two integer values from a user and output the sum of those numbers.

prompt user for number
if input is not a number
    print "input is not a number"
    prompt user for new number
endif
set num1 to user_input
if input is not a number
    print "input is not a number"
    prompt user for new number
endif
prompt user for number
set num2 to user_input
set sum to num1 + num2
print sum

========================================================
<!-- Loops Example -->
========================================================
Requirements
- Given a list of student grades, calculate their GPA
- The grading scale used should be 1-4
- If any grade isn't a 1,2,3 or 4 print a message and stop the program

retrieve student_grades
set grades to student_grades
set grade_total to 0
for each grade in grades
  if grade is not a 1, 2, 3 or 4
    print "invalid grade"
    print grade
    print "can't complete calculation"
    stop
  else add grade to grade_total
  endif
endfor
set gpa to grade_total / number of grades
print gpa
========================================================
<!-- Function Example -->
========================================================
function calculate_gpa
  pass in student_grades
  set grade_total to 0
  for each grade in student_grades
      if grade is not a 1, 2, 3, or 4
          print "invalid grade"
          print grade
          print "can't complete calculation"
          exit function
      else add grade to grade_total
      endif
   endfor
   set gpa to grade_total / number of grades
   return gpa
endfunction

set reggie_grades to 4, 4, 3, 4
set reggie_gpa to call calculate_gpa with reggie_grades
print reggie_gpa

========================================================
<!-- References -->
========================================================
Input

Input could be from a keyboard, database, mouse, and so on. You want to indicate that data is coming into the program from some external source.

get name from user
get user_record from employee_database

===

Variables

Simple variable

Create a variable named points and give it the value of two:

set points to 2


Collection of values like an array or list

set names to 'Dave', 'Reggie', 'Hope', 'Colleen'

===

Conditional Statements

Single condition

If the points variable is more than 100, print "High Score!"


if points is greater than 100 
    print “High Score”
endif

Indent code inside of conditional statements to make clear the steps the program follows if the condition is true.

===

Multiple conditions

if points is less than 0 
     print “You lose!”
elseif points is greater than 100
    print "High Score"
else
    print "You won, but didn't get the high score"
endif

===

Loops

Looping though a collection of items like an array or list


for each name in names 
     print name
endfor


Looping a set number of times:

for every number from 1 to 100
    print number
endfor

Loop while a condition is true:

while user_input is not 'Exit'
   ...do something here
endwhile

===

Functions

Create a function

Create a function that prints out a message to the console.

function print_message 
    pass in message
    print message
endfunction

===

Call a function

call print_message with "Howdy!"

A function that returns a value:

function calculate_tax
    pass in amount and tax_rate
    return amount * tax_rate
endfunction

set tax to call calculate_tax with 100 and .08
print 'Your tax is'
print tax
