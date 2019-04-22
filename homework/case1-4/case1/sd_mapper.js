/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Emily Underwood
   Date:   04/22/2019

*/

"use strict";

/*thisTime section: time and date above picture*/
var thisTime = new Date("April 22, 2019 11:32:52");
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

/*working on the map to make sure it puts the correct part of it on the page*/
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum= (2*thisMonth + thisHour)%24;
var imgStr = "<img src='sd_sky"+mapNum+".png'>";
document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);