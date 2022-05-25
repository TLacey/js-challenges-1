Given an array of string names, count the number of occurrences for each name in the list, then sort the list by highest number of occurrences.

* Expected output format is an array of objects with the properties name and count - e.g. [{name: 'Bob', count: 3}, {name: 'Fred', count: 2}, {name: 'Sheila', count: 1}]. 

* If two or more names are the same, but have different casing, they should be treated as the same name. The casing of the first found instance in the characterNames array should be used in the end result.

* If two or more names have the same number of occurrences, it needs to be sorted alphabetically and numerically. Numbers take priority over alphabetical characters.

* Imaginary bonus points will be awarded for flexible and performant code.

----

**Important notes:**

* File to use is arrayFilteringMappingSorting.js (./src/arrayFilteringMappingAndSorting.js). 

* Do not change the 'characterNames' array (./src/datasets/characterNames.json). 

* Do not change the name or parameters of the 'orderCharactersByPopularity'function - The Function body can (and should) be modified.

----

**Requirements**

* Node - Version 10 or higher.

* NPM

----

**Running**

* Setup the project: `npm install` or `npm ci`

* To launch the tests and check your solution: `npm test`