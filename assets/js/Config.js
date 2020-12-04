QUE = {};

QUE.views = {};

QUE.start_date = new Date( 1993, 6, 29, 19, 29, 0 );



QUE.functions = {};

QUE.functions.hr_number = function( val ){
	var str = val.toString().split('.');
	str[ 0 ] = str[ 0 ].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return str.join('.');
};