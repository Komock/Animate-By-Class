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
			element.classList.remove('a-entry', 'a-active');
			if (!isHidden) {
				element.classList.add('hidden');
			}
			element.removeEventListener(transitionEvent, transitionEnd);
			animationIsRunning = false;
			// Run Callback if exist
			if (callback) {
				callback();
			}
		};

		element.addEventListener(transitionEvent, transitionEnd);

		// Show
		if (isHidden && type === 'in') {
			animationIsRunning = true;
			element.classList.remove('hidden');
			element.classList.add('a-entry'); // css on start state
			setTimeout(function() {
				element.classList.add('a-active'); // css to end state
			}, 10);
		}
		// Hide
		if (!isHidden && type === 'out') {
			animationIsRunning = true;
			element.classList.add('a-entry'); // css to end state
		}
	}	
}

module.exports = animateByClass;