var animateByClass = require('./animateByClass');

var show = document.querySelector('.show'),
	hide = document.querySelector('.hide'),
	test = document.querySelector('.test');

show.addEventListener('click', function(e){
	e.preventDefault();
	animateByClass(test, 'in', function(){
		console.log('hello');
	});
} );

hide.addEventListener('click', function(e){
	e.preventDefault();
	animateByClass(test, 'out', function(){
		console.log('buy');
	});
} );