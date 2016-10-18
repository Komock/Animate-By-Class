'use strict';
// Get prefix of transition
function getTransitionEvent(){
	var t,
		el = document.createElement('fakeelement'),
		transitions = {
			'transition':'transitionend',
			'OTransition':'oTransitionEnd',
			'MozTransition':'transitionend',
			'WebkitTransition':'webkitTransitionEnd'
		};
	for(t in transitions){
		if( el.style[t] !== undefined ){
			return transitions[t];
		}
	}
}
var transitionEvent = getTransitionEvent();

var animationIsRunning = false;
function animateByClass(element, type, callback) {
	if (!animationIsRunning) {
		var isHidden = element.classList.contains('hidden');

		// Event when transition end
		var transitionEnd = function(){
			element.removeEventListener(transitionEvent, transitionEnd);
			if( type === 'in' ){
				element.classList.remove('a-entry', 'a-active');
			} else {
				element.classList.remove('a-entry');
			}
			if (!isHidden) {
				element.classList.add('hidden');
			}
			// Run Callback if exist
			if (callback) {
				callback();
			}
			animationIsRunning = false;
		};

		// Show
		if (isHidden && type === 'in') {
			animationIsRunning = true;
			element.addEventListener(transitionEvent, transitionEnd);
			console.log('Show');
			element.classList.remove('hidden');
			element.classList.add('a-entry'); // css on start state
			setTimeout(function() {
				element.classList.add('a-active'); // css to end state
			}, 20);
		}
		// Hide
		if (!isHidden && type === 'out') {
			animationIsRunning = true;
			element.addEventListener(transitionEvent, transitionEnd);
			console.log('Hide');
			element.classList.add('a-entry'); // css to end state
		}
	} else {
		console.log('animation is running!');
	}
	
}

module.exports = animateByClass;