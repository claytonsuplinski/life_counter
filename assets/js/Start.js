QUE.start = function( callback ){
	QUE.categories = [];
	
	QUE.time = {};
	
	$.ajax({
		url      : './assets/data/categories.json',
		dataType : 'json',
		success  : function( data ){
			QUE.categories = data;
			
			var time = ( ( new Date() ).getTime() - QUE.start_date.getTime() );
			
			[
				[ 'seconds', 1000    ],
				[ 'minutes',   60    ],
				[ 'hours'  ,   60    ],
				[ 'days'   ,   24    ],
				[ 'years'  ,  365.25 ],
			].forEach(function(t){
				time /= t[1];
				QUE.time[ t[0] ] = time;
			});
			
			if( callback ) callback();
		},
		error    : function( e ){
			console.log( 'Error loading categories', e );
		}
	});
};