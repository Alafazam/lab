/**
 * @author: Peter Slagter (http://twitter.com/pesla - http://github.com/pesla/)
 * @about:  Solar system experiment with CSS3 transitions, transforms and animations
 */

var GALAXY = (function () {
	// List of used functions / methods
	var init,
		onStartButtonClick;

	// Used variables
	var elements = {};

	init = function() {
		// First, initialize
		elements.html = document.documentElement;
		elements.startButton = document.getElementById('button-start');
		elements.startButton.addEventListener("click", onStartButtonClick);
	};

	onStartButtonClick = function() {
		elements.html.className += " is-active";
	};

	return {
		init: init
	};
}());

document.addEventListener("DOMContentLoaded", function(){
	GALAXY.init();
}, false );