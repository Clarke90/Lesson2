// main java document 
// array stores data 

"use strict"; //show errors 
// variables 
var username = "Chad" ; 
var age = 30; 
// boolean example 
var isHungry = true; 

// array 
var usernames = ["mike", "rich", "margo","chad"];
//log to console 3rd element (margo) 
console.log(usernames);

//add element to bottom 
usernames.push("Matt");
// print 
console.log("After the push:" + usernames);


//remove element from 
usernames.pop();
console.log("After the pop:" + usernames);