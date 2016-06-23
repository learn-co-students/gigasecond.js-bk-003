'use strict';

function Gigasecond(date){
  // code your solution here 
  this.date = function(){
  
  date.setSeconds(date.getSeconds() + (Math.pow(10,9)));
  date.setHours(0,0,0,0);
  return date;

  }
  
};
