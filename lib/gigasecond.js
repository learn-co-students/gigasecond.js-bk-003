'use strict';

function Gigasecond(d){
	console.log(d);
	d.setSeconds(Math.pow(10,9));
	d.setSeconds(0);
	d.setMinutes(0);
	d.setHours(0);
	return {date: function(){return d}};
};