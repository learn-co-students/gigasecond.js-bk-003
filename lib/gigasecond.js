'use strict';

function Gigasecond(date_given){
  // code your solution here 
  this.date_given = date_given;
};

Gigasecond.prototype.date = function() {
	
	var gs = Math.pow(10,9);
	var days = Math.floor(gs/(60*60*24));
	var new_date = this.date_given;
	new_date.setDate(new_date.getDate() + days);
	return new_date;

};
