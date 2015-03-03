// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

function fizzbuzz_1(){
	"use strict";
	document.getElementById("div1").innerHTML = "";
	var i, output;
	for (i = 1; i < 101; i++) {
	output = "";
	if (i % 3 ===0) {output = "Fizz";}
	if (i % 5 ===0) {output = "Buzz";}
	if ((i % 3 ===0) && (i % 5 ===0)) {output = "FizzBuzz";}
	document.getElementById("div1").innerHTML += (output || i) + "<br/>";
}
}
function fizzbuzz_2(start,end){
	"use strict";
	document.getElementById("div2").innerHTML = "";
	var i, output;
	for (i = start; i <= end; i++) {
	output = "";
	if (i % 3 ===0) {output = "Fizz";}
	if (i % 5 ===0) {output = "Buzz";}
	if ((i % 3 ===0) && (i % 5 ===0)) {output = "FizzBuzz";}
	document.getElementById("div2").innerHTML += (output || i) + "<br/>";
}
}

function fizzbuzz_3(arr){
	"use strict";
	document.getElementById("div3").innerHTML = "";
	var i, output;
	var arrayLength = arr.length;
	for (i = 0; i < arrayLength; i++) {
	output = "";
	if (arr[i] % 3 ===0) {output = "Fizz";}
	if (arr[i] % 5 ===0) {output = "Buzz";}
	if ((arr[i] % 3 ===0) && (arr[i] % 5 ===0)) {output = "FizzBuzz";}
	document.getElementById("div3").innerHTML += (output || arr[i]) + "<br/>";
}
}

function fizzbuzz_4(obj){
	"use strict";
	document.getElementById("div4").innerHTML = "";
	var divBy3 = obj.divisibleByThree;
	var divBy5 = obj.divisibleByFive;
	var i, output;
	for (i = 1; i < 101; i++) {
	  output = "";
	  if (i % 3 ===0) {output = divBy3;}
	  if (i % 5 ===0) {output = divBy5;}
	  if ((i % 3 ===0) && (i % 5 ===0)) {output = divBy3+divBy5;}
	  document.getElementById("div4").innerHTML += (output || i) + "<br/>";
}
}

function fizzbuzz_5(arr, obj){
	"use strict";
	document.getElementById("div5").innerHTML = "";
	var divBy3 = obj.divisibleByThree;
	var divBy5 = obj.divisibleByFive;
	var i, output;
	var arrayLength = arr.length;
	for (i = 0; i < arrayLength; i++) {
	  output = "";
	  if (arr[i] % 3 ===0) {output = divBy3;}
	  if (arr[i] % 5 ===0) {output = divBy5;}
	  if ((arr[i] % 3 ===0) && (arr[i] % 5 ===0)) {output = divBy3+divBy5;}
	  document.getElementById("div5").innerHTML += (output || arr[i]) + "<br/>";
}
}
