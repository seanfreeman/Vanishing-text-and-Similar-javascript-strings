// here is the javascript. 
// get random numbers
var getRandomNumbers=function(min, max){
return Math.floor(Math.random() * (max - min) + min);
};

// make sure that number exists in an array
var nonematched = function(arr, number){
//it will check if the number contains in array. 
// it will return true if number is not present in array. 
if(arr.indexOf(number)==-1){
return false;
}
return true;
};

// get the raondon alphabet to replace the existing character in a string. 
var getrandomalphabet=function(uppercase){
        var letter= Math.random().toString(36).replace(/[^a-z]+/g, '').charAt(0);

if(uppercase){
return letter.toUpperCase();

}
return letter;
};



// it returns two random positions in a string where characters can be replaced.
var getrandom=function(min, max, shouldnotbethese){
// this will return an array of two randon numbers. 
var random1, random2, counter=1;

for(var i =0; counter==1;i++){
random1 = getRandomNumbers(min, max);
if(!(nonematched(shouldnotbethese,random1))){
counter=0;
}
};
counter=1;
shouldnotbethese.push(random1);
for(var i =0; counter==1; i++){
random2 = getRandomNumbers(min, max);
if(!(nonematched(shouldnotbethese,random2))){
counter=0;
}
};
return [random1, random2];
};

(function(str, n){
if(str && n){

var result =[];
for(var i=0; i< n; i++){
// we have to build a string that is similar to str. 

var length= str.length;
var spacepositions=[];var Alphabetpositions=[];
for(var j=0; j<length; j++){
if(str[j]==" "){
spacepositions.push(j);
}
else if(str[j].match(/[A-Z]/g)){

Alphabetpositions.push(j);
}
}

var randompositions=getrandom(0,length, spacepositions);
var randomletter1 = getrandomalphabet(nonematched(Alphabetpositions,randompositions[0]));
var randomletter2 = getrandomalphabet(nonematched(Alphabetpositions,randompositions[1]));


console.log(spacepositions);
console.log(Alphabetpositions);
var resultedstring = str.split("");
resultedstring[randompositions[0]]=randomletter1;
resultedstring[randompositions[1]]=randomletter2;

result.push(resultedstring.join(""));

}
}

return result;
}("Hey New Yorkers",5));
