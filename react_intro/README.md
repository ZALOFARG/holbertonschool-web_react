# TASKS

## 0. Basic application

Create a basic app named dashboard using create-react-app in your task_0 directory

You will need a favicon and the Holberton logo. Download them and add them to the src/ directory under dashboard/

## 1. Embedding expressions, functions


    Create a function named getFullYear that will return the current year
    Create a function named getFooterCopy:
        It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
    Modify the footer returned in task_1/dashboard/src/App.js to use these two functions. isIndex should be true


## 2. Modify the App

using your code from the previous task, in task_2/dashboard/src/App.js under the paragraph that says Login to access the full dashboard:

    add a label and input for email
    add a label and input for password
    when the user clicks on a label, it should select the corresponding input
    add one button element with the text “OK”


## 3. Modify the Notifications 

Create a function named getLatestNotification that returns the following string: <strong>Urgent requirement</strong> - complete by EOD


    add a button element with inline styling (without using the CSS file):
        show button on right side of notifications box
        aria-label is Close
        when user clicks on the button it logs to the console Close button has been clicked
    in the button element there should be an “x”
    after the paragraph add an unordered list
        the list has the following items:
            The first one has a default priority and says New course available
            The second one has a urgent priority and says New resume available
            The last item has a urgent priority and should correctly displays the content of getLatestNotification using dangerouslySetInnerHTML
            Add the priority to the items of the list using a data attribute


## 4. Create basic tests with four tests 


    Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
    Write a test to check that getFooterCopy returns the correct string when the argument is true or false
    Write a test checking the returned string for getLatestNotification


## 5. Install Enzyme


    Install Enzyme and the enzyme adapter with npm
    Create a file named setupTests.js and configure the adapter for Enzyme


## 6. Create React tests 

in task_3/dashboard/src/App.test.js create four tests:

    test that App renders without crashing
    verify that App renders a div with the class App-header
    verify that App renders a div with the class App-body
    verify that App renders a div with the class App-footer

in task_3/dashboard/src/Notifications.test.js create three tests

    test that Notifications renders without crashing
    verify that Notifications renders three list items
    verify that Notifications renders the text Here is the list of notifications

