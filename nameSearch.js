/*jshint multistr:true */
var text = "hello you must me joshua";
var myName = "joshua";
var hits = [];

for(var i=0; i<text.length; i++){
    
if (text[i] === myName[0]){
for (var j = i; j < (myName.length + i);j++)
if (text[j]===myName[j-i]){
hits.push(text[j]);
}}
}
if(hits===0){
    console.log("Your name wasn't found!");
}
else{
    console.log(hits);
}