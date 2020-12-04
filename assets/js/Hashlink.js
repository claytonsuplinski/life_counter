QUE.hashlinks = new Hashlinks({
});

QUE.hashlinks.on_start = function(){
	QUE.start(function(){ QUE.views.home.draw(); });
};

window.onhashchange = function(){ QUE.hashlinks.start(); };
window.onload       = function(){ QUE.hashlinks.start(); };