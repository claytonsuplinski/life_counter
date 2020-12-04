QUE.views.home = {};

QUE.views.home.get_quantity_value = function( q ){
	var value = q.value * QUE.time[ q.freq || 'seconds' ];
	
	if( q.divisor ) value /= q.divisor;
	
	if( q.precision !== undefined ) value = value.toFixed( q.precision );
	
	return QUE.functions.hr_number( value );
};

QUE.views.home.get_quantity_html = function( q ){
	var units = '';
	if( q.units ) units = '<span class="units">' + q.units + '</span>';

	return '<tr>' +
		'<td class="name">' + q.name + '</td>' +
		'<td class="value">' + this.get_quantity_value( q ) + units + '</td>' +
	'</tr>';
};

QUE.views.home.get_category_html = function( category ){
	var self = this;
	return '<div class="category">' +
		'<div class="category-name">' + category.name + '</div>' +
		'<div class="quantities">' +
			'<table>' +
				category.quantities.map(function( q ){
					return self.get_quantity_html( q );
				}).join('') +
			'</table>' +
		'</div>' +
	'</div>';
};

QUE.views.home.draw = function(){
	var self = this;
	$( "#content" ).html(
		QUE.view.get_header() +
		QUE.categories.map(function( category ){
			return self.get_category_html( category );
		}).join('')
	);
};