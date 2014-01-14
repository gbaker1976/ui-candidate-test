// Example unit test function
function divide( a, b ) {
    // To see the test pass, uncomment the following line
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    var min = values[0];
    $.each(values, function(i, val) {
        min = val < min ? val: min;
    });
    return min;
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    var distinct = [];
    $.each(values, function (i, val) {
        if ($.inArray(val, distinct) === -1) {
            distinct.push(val);
        }
    });
    return distinct;
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    for (var i = 1; i <= 100; i++) { 
        console.log((i % 3 === 0 || i % 5 === 0) ?
                        (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") : 
                        i);
    }
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    $.each(fruitsToRemove, function(i, val) {
        var index = $.inArray(val, fruits);
        if (index !== -1) {
            fruits = fruits.splice(index, 1);
        }
    });
    return fruits;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    if ($.isArray(toPush) === false) {
        toPush = [toPush];
    }
    $.merge(array, toPush);
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    return sourceStr.length > 0 ? sourceStr.split(",") : [];
}

// Write a function that will take any number of arguments and return their sum
function sum() {
    var total = 0;
    $.each(sum.arguments, function(i, val) {
        total += val;
    });
    return total;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    return sourceStr.length > 0 && sourceStr.trim().length === 0;
}

// write an example of a javascript closure
(function (o) {
    console.log("this is a javascript closure. '3' should be on the next line.");
    console.log(o);
})(3);

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var people = [
    {
        firstName: "Hobokin",
        lastName: "Jones",
        city: "Ft. Wayne",
        state: "IN",
        zip: "46240",
        phone: {
            home: "260-555-5323",
            work: "260-555-3422x22",
            mobile: "260-555-3342"
        }
    },
    {
        firstName: "Walter",
        lastName: "Walker",
        city: "Noblesville",
        state: "IN",
        zip: "46232",
        phone: {
            home: "317-555-6674",
            work: "317-555-9988x22",
            mobile: "317-555-4432"
        }
    },
    {
        firstName: "Wilson",
        lastName: "Watkins",
        city: "Cicero",
        state: "IN",
        zip: "46003-3433",
        phone: {
            home: "765-555-6452",
            work: "765-555-3354",
            mobile: "765-555-6434"
        }
    }
];

// Create a javascript object (DataTable) with the following:
// A private columns property (string array)
// A private rows property (string array)
// A public method addRows that adds an item to the rows array
// A public method addColumns that adds an item to the columns array
// A public method getData that returns the a json object representation of the DataTable
// Note: the row object should be a hash of the column name and row item value
// Example:
// .addColumns('column1', 'column2', 'column3');
// .addRow('value1A', 'value1B', 'value1C');
// .addRow('value2A', 'value2B', 'value2C');
function DataTable() {
    _columns = [];
    _rows = [];
    this.addRow = function () {
        var rowData = [];
        for (var n = 0; n < _columns.length; n++) {
            rowData.push(_columns[n] + "#" + (n < arguments.length ? arguments[n] : ""));
        }
        _rows.push(rowData);
    };
    this.addColumns = function () {
        $.each(arguments, function(i, val) {
            _columns.push(val);
        });
    };
    this.getData = function () {
        return { columns: _columns, rows: _rows };
    };
}

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
var sel = $("<select></select>").appendTo("#div1");
$.each(["one","two","three"], function (i, val) {
    $("<option></option>").html(val).appendTo(sel);
});
$("<input type='button' />")
    .val("click Me")
    .click(function(e) {
        console.log($(this).siblings()
                           .filter("select")
                           .first()
                           .val());
    })
    .appendTo("#div1");

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
