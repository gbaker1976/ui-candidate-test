// 1. Example unit test function
function divide(a, b) {
    return a / b;
}

// 2. Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    //Split the string into an array containing each character in the string, reverse that array, and join the array back into a string
    return str.split("").reverse().join("");
}

// 3. Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    //Loop through the array and continually search for the lowest value
    var index = 0;
    var value = values[0];
    for (var i = 1; i < values.length; i++) {
        if (values[i] < value) {
            value = values[i];
            index = i;
        }
    }
    return index;
}

// 4. Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    //Create a new array while searching for existing elements using indexOf along the way
    return values.reduce(function (p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
    }, []);
}

// 5. Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
    //Use modulo to find multiples, use dash as a token seperator between values, concatenate a string to return
    var str = "", x, y, a;
    for (a = 1; a <= 100; a++) {
        x = a % 3 == 0;
        y = a % 5 == 0;
        if (x) {
            str += "Fizz"
        }
        if (y) {
            str += "Buzz"
        }
        if (!(x || y)) {
            str += a;
        }
        str += "-"
    }
    return str;
}

// 6. You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
    var newFruits = [];
    var fruitsToRemoveHash = {};
    for (var fruitNo = fruitsToRemove.length - 1; fruitNo >= 0; fruitNo--) {
        fruitsToRemoveHash[fruitsToRemove[fruitNo]] = 1;
    }
    for (var fruitNo = -1; ++fruitNo < fruits.length;) {
        var fruit = fruits[fruitNo];
        if (!fruitsToRemoveHash[fruit]) newFruits.push(fruit);
    }
    return newFruits;
}

// 7. Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
    if (toPush instanceof Array) {
        for (var elementNo = -1; ++elementNo < toPush.length;) {
            array.push(toPush[elementNo]);
        }
    } else {
        array.push(toPush);
    }
    return array;
}

// 8. Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
    return sourceStr ? sourceStr.split(',') : [];
}

// 9. Write a function that will take any number of arguments and return their sum
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// 10. Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    return sourceStr.search(/\S/) == -1;
}

// 11. write an example of a javascript closure
function sayHello(name) {
    var text = 'Hello ' + name; // local variable
    //The return result, which is the local variable sayAlert, can be stored in a variable and used after this function is executed
    var sayAlert = function () { alert(text); }
    return sayAlert;
}

// 12. define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
var personObj = {
    "person": [
            { "firstName": "Bob", "lastName": "Bobberton", "city": "Indianapolis", "state": "Indiana", "zip": "46256", "phoneNumbers": [{ "cell": "555-555-5555", "home": "666-666-6666", "mobile": "777-777-7777" }] },
            { "firstName": "Bob2", "lastName": "Bobberton2", "city": "Indianapolis2", "state": "Indiana2", "zip": "46255", "phoneNumbers": [{ "cell": "555-555-5556", "home": "666-666-6667", "mobile": "777-777-7778" }] },
    ]
};

// 14. Write an example of a singleton object.
var mySingleton = {
    method1: function () {
        return "stuff";
    },
    method2: function () {
        return "other_stuff";
    }
};

// 15. Within a div with an id of div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.
$("#btnOutputSelected").click(function () {
    alert($('#dropdown').find(":selected").text());
});
function divAppend15() {
    if ($('#div1').find('select').length == 0) {
        $("#div1").append("<select id=\"dropdown\"><option>Option1</option><option>Option2</option><option>Option3</option></select>");
    }
}


// 16. Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".
function listAppend16() {
    var items = ["item1", "item2", "item3", "item4", "item5"];
    if ($('#list1').find('li').length == 0) {
        for (var i = 0; i < items.length; i++) {
            $("#list1").append("<li>" + items[i] + "</li>");
        }
    }
}

// 17. Use javascript to add a list of checkboxes and 2 links
// to a div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
$("#lnkUncheckAll").click(function () {
    $('#checkbox1').prop('checked', false);
    $('#checkbox2').prop('checked', false);
});
$("#lnkCheckAll").click(function () {
    $('#checkbox1').prop('checked', true);
    $('#checkbox2').prop('checked', true);
});
function checkboxLinkAppend17() {
    if ($('#foobar').find('input').length == 0) {
        $("#foobar").append("<input id=\"checkbox1\" type=\"checkbox\" name=\"checkbox1\" value=\"Checkbox 1\">");
        $("#foobar").append("<input id=\"checkbox2\" type=\"checkbox\" name=\"checkbox2\" value=\"Checkbox 2\">");
    }
}

$(document).ready(function () {
    divAppend15();
    listAppend16();
    checkboxLinkAppend17();
});
