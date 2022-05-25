You are about to be faced with an application that is flawed and does not work as expected. **Your task is to investigate why it doesn't work and to fix it**. A number of unit tests have been provided to guide you.

----

The following application is designed to trigger a `timeout` on click of a button element with a data set key of `timer-value`. The timeouts are meant to simulate asynchronous behaviour being processed and then it outputs to the page on completion.
On click of an element with a `timer-value` data set, the data set value will set the duration of the `timeout`. At the end of the `timeout` a callback is invoked in order to update a `timeout` tracking list.

Look at the code and test results to figure what has gone wrong and why then make it work!

You can create new functions and change most of the existing code, however any functions and class properties which already exist must keep the same names / declarations.
Function bodies can be modified but the tests cannot, so be aware of what the tests rely on!

----

**Important notes:**
* Regarding the click event listeners for the buttons (`setupButtonEventsForTimer` - `app.js`). You are allowed to modify how the listener is attached and most of the content of the event handler, however there are some lines of code wrapped within `------` in `app.js`, these must exist in the end solution.

----

**Requirements**

* Node - Version 10 or higher.

* NPM

----

**Running**

* Setup the project: `npm install` or `npm ci`

* To launch the tests and check your solution: `npm test`

* The application can also be ran and debugged via launching `index.html` in a Web Browser.