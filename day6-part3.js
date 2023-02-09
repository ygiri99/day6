  //Fix the code to get the largest of three.

var aa = (f,s,t) => {
 console.log(f,s,t);
 if(f>s && f>t){
 console.log(f);}
 else if(s>f && s>t){
 console.log(s);}
 else{
 console.log(t);}
}
aa(1,2,3);



   //Fix the code to Sum of the digits present in the number
   
let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;
while(n){
 sum+=n%10;
 n = parseInt(n/10);
 }
 return sum;
}



   //Fix the code to Sum of all numbers using IIFE function
   
var arr = [9,8,5,6,4,3,2,1];
const funSum = (function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 return sum;
})();
console.log(funSum);


   //Fix the code to gen Title caps.
   
var arr = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);



     //Fix the code to return the Prime numbers
     
const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
  if (num === 2 || num === 3) return num;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else if (i === num - 1) {
      return true;
    }
  }
});
console.log(myPrime);



       //Fix the code to sum the number in that array
       
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = num.reduce((a, b) => {return a + b});
console.log(sum);



       //Fix the code to rotate an array by k times and return rotated array using IIFE function
       
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k % arr.length;
(function() {
 out = arr.slice(k , arr.length);
 var count = out.length;
 for (var i = 0; i < k; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();
 
 
 
       //Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();



      //print all odd numbers in an array using IIFE function
      
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];

(function(){
    let oddArray=[];
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
    oddArray.push(arr[i]);
 }}console.log(oddArray);
})(); 



     //Fix the code to reverse.
     
(function(str){
    let str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");
   
   
   
    //Fix the code to remove duplicates.
    
var res = function(arr){
    newArr = [];
    for(var i=0; i < arr.length; i++){
        var a=arr[i];
        if(typeof(a) === "string")
       arr[i] = arr[i].toLowerCase();
       else
       arr[i] = arr[i];
    }
    for(i=0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === i){
    newArr.push(arr[i]);
    } }
    console.log(newArr);
   }
   res(["guvi","geek","guvi","Duplicate","geeK",5,7]);
   
   
   
        //Fix the code to give the below output:
        //Expected Output:
        //[
        //{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
        //{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
        //]
                 
var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[],new_object={},i=0;
while(array.length)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value;
 }
 final.push(new_object);
 new_object={};
}
console.log(final);
       
         //Fix the code to give the below output:

         //Sum of odd numbers in an array

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;},0);
console.log(s);



         //Fix the code to give the below output:

         // Swap the odd and even digits                            
         
 aa = data=>{
    var a=data;
    var l="";
   for(i=0;i<a.length-1;i++){ 
    var s=a[i+1];
    var b=a[i];
    l+=s;
    l+=b;
    i=i+1;
   }
   if((a.length%2)!=0){
    l+=a[a.length-1];
   }
   console.log(l);
   }
   aa("1234");
   
   
   
              
