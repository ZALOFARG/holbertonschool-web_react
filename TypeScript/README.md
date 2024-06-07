# TASKS

## 0. Creating an interface for a student 

Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

Write an interface named Student that accepts the following elements:

    firstName: string
    lastName: string
    age: number
    location: string

## 1. Let's build a Teacher interface 

Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

Write an interface named Teacher that accepts the following elements:

    firstName: string - can only be set during initialization of an object of this interface
    lastName: string - can only be set during initialization of an object of this interface
    fullTimeEmployee: boolean
    yearsOfExperience: number - optional
    location: string
    Add the possibility to add any attribute to the Teacher object like contract(boolean) without specifying the name of the attribute:
        Property should be a string
        Type of this property can be anything

## 2. Extending the Teacher class

Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

## 3. Printing teachers

Write a function printTeacher:

    It accepts two arguments firstName and lastName
    It returns the first letter of the firstName and the full lastName
    Example: printTeacher("John", "Doe") -> J. Doe

## 4. Writing a class

Write a Class named StudentClass:

    The constructor accepts firstName(string) and lastName(string) arguments
    The class has a method named workOnHomework that return the string Currently working
    The class has a method named displayName. It returns the firstName of the student
    The constructor of the class should be described through an Interface
    The class should be described through an Interface

## 6. Creating functions specific to employees 

Write a function isDirector:

    it accepts employee as an argument
    it will be used as a type predicate and if the employee is a director

Write a function executeWork:

    it accepts employee as an argument
    if the employee is a Director, it will call workDirectorTasks
    if the employee is a Teacher, it will call workTeacherTasks

## 7. String literal types 

Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

    it takes todayClass as an argument
    it will return the string Teaching Math if todayClass is Math
    it will return the string Teaching History if todayClass is History

