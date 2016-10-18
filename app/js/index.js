var animateByClass = require('./animateByClass');

var show = document.querySelector('.show'),
	hide = document.querySelector('.hide'),
	test = document.querySelector('.test');

function sayHello(){
	console.log('hello');
}

show.addEventListener('click', function(e){
	e.preventDefault();
	animateByClass(test, 'in', sayHello);
} );

function sayBuy(){
	console.log('buy');
}

hide.addEventListener('click', function(e){
	e.preventDefault();
	animateByClass(test, 'out', sayBuy);
} );