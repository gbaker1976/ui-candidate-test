module("Unit Tests");
test("divide", function () {
    ok(divide(4, 2) == 2, 'Expected 2 as the result, the result was: ' + divide(4, 2));
});
test("findMinValue", function () {
    ok(findMinValue([3, 1, 2]) == 1, 'Expected 1 as the result, the result was: ' + findMinValue([3, 1, 2]));
});
test("reverseString", function () {
    ok(reverseString("asdf") == "fdsa", 'Expected "fdsa" as the result, the result was: ' + reverseString("asdf"));
});
test("doFizzBuzz", function () {
    ok(doFizzBuzz() == "1-2-Fizz-4-Buzz-Fizz-7-8-Fizz-Buzz-11-Fizz-13-14-FizzBuzz-16-17-Fizz-19-Buzz-Fizz-22-23-Fizz-Buzz-26-Fizz-28-29-FizzBuzz-31-32-Fizz-34-Buzz-Fizz-37-38-Fizz-Buzz-41-Fizz-43-44-FizzBuzz-46-47-Fizz-49-Buzz-Fizz-52-53-Fizz-Buzz-56-Fizz-58-59-FizzBuzz-61-62-Fizz-64-Buzz-Fizz-67-68-Fizz-Buzz-71-Fizz-73-74-FizzBuzz-76-77-Fizz-79-Buzz-Fizz-82-83-Fizz-Buzz-86-Fizz-88-89-FizzBuzz-91-92-Fizz-94-Buzz-Fizz-97-98-Fizz-Buzz-", 'Expected "1-2-Fizz-4-Buzz-Fizz-7-8-Fizz-Buzz-11-Fizz-13-14-FizzBuzz-16-17-Fizz-19-Buzz-Fizz-22-23-Fizz-Buzz-26-Fizz-28-29-FizzBuzz-31-32-Fizz-34-Buzz-Fizz-37-38-Fizz-Buzz-41-Fizz-43-44-FizzBuzz-46-47-Fizz-49-Buzz-Fizz-52-53-Fizz-Buzz-56-Fizz-58-59-FizzBuzz-61-62-Fizz-64-Buzz-Fizz-67-68-Fizz-Buzz-71-Fizz-73-74-FizzBuzz-76-77-Fizz-79-Buzz-Fizz-82-83-Fizz-Buzz-86-Fizz-88-89-FizzBuzz-91-92-Fizz-94-Buzz-Fizz-97-98-Fizz-Buzz-" as the result, the result was: ' + doFizzBuzz());
});
test("removeFruits", function () {
    ok(removeFruits(["Banana", "Apple", "Grapefruit", "Pear"], ["Apple", "Grapefruit"]).toString() == "Banana,Pear", 'Expected "["Banana","Pear"]" as the result, the result was: ' + removeFruits(["Banana", "Apple", "Grapefruit", "Pear"], ["Apple", "Grapefruit"]));
});
test("pushOntoArray", function () {
    ok(pushOntoArray(["hi", "there"], "guy").toString() == "hi,there,guy", 'Expected "["hi","there","guy"]" as the result, the result was: ' + pushOntoArray(["hi", "there"], "guy"));
});
test("pushOntoArray", function () {
    ok(pushOntoArray(["hi", "there"], ["mr.", "dude", "guy"]) == "hi,there,mr.,dude,guy", 'Expected "["hi","there","mr.","dude","guy"]" as the result, the result was: ' + pushOntoArray(["hi", "there"], ["mr.", "dude", "guy"]));
});
test("splitListStrUsingComma", function () {
    ok(splitListStrUsingComma("this,is,a,test").toString() == "this,is,a,test", 'Expected "["this","is","a","test"]" as the result, the result was: ' + splitListStrUsingComma("this,is,a,test"));
});
test("splitListStrUsingComma", function () {
    ok(splitListStrUsingComma("").length == 0, 'Expected length of zero as the result, the result was: ' + splitListStrUsingComma("").length);
});
test("sum", function () {
    ok(sum(3, 1, 2) == 6, 'Expected 6 as the result, the result was: ' + sum(3, 1, 2));
});
test("isOnlyWhitespace", function () {
    ok(isOnlyWhitespace("    ") == true, 'Expected true as the result, the result was: ' + isOnlyWhitespace("    "));
});