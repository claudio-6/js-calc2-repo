"use strict"

var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fith");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");


function rangeNum(){

    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var largest = first;
    if(largest < second){
        largest = second;
    }
    if(largest < third){
        largest = third;
    }
    if(largest < fourth){
        largest = fourth;
    }
    if(largest < fifth){
        largest = fifth;
    }
    if(largest < sixth){
        largest = sixth;
    }
    console.log(largest);
    var smallest = first;
    if(smallest > second){
        smallest = second;
    }
    if(smallest > third){
        smallest = third;
    }
    if(smallest > fourth){
        smallest = fourth;
    }
    if(smallest > fifth){
        smallest = fifth;
    }
    if(smallest > sixth){
        smallest = sixth;
    }
    var range = parseInt(largest) - parseInt(smallest);
    console.log(smallest);
    output.innerHTML = " The range of the numbers is " + range;
}
function largestNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    largestNum = Math.max(first, second, third, fourth, fifth, sixth);
    output.innerHTML = largestNum;
    return largestNum;


}
function smallestNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    smallestNum = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = smallestNum;
    return smallestNum;

}
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    mean = (first + second + third + fourth + fifth + sixth ) / 6;
    output.innerHTML = mean; 
    return mean; 

}