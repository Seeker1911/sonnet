// place contents of sonnet div into variable 

var mySonnet = document.getElementById("sonnet");
var sonnetText = sonnet.innerHTML;
console.log("sonnet:", mySonnet);

//find and output the start position of the word "orphans."

var character = sonnetText.indexOf("orphans");
console.log("check indexOf :", character);

//output the number of characters in the sonnet. 

var lengthSonnet = sonnetText.length;
console.log("length of sonnet:", lengthSonnet);

//replace the first occurence of the word "winter" with "yuletide"
var winter = sonnetText.replace("winter", "yuletide");
// mySonnet.innerHTML = winter;
console.log("check swap:", winter);


//Replace all occurences of the word "the" with "a large".

var newSonnet = winter.replace(/the /g, "a large ");
console.log("check swap:", newSonnet);


//set the content of the sonnet div with the new string
mySonnet.innerHTML = newSonnet;