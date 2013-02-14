// Copyright (c) 2013 Peter Slagter (http://twitter.com/pesla - http://github.com/pesla/)
// Use of this source code is governed by the MIT license (do whatever you want!)

var Google = {};

Google.CodeJam = (function() {
	// Methods
	var solve,
		currentLineNumber,
		curTestCase,
		getNextLine,
		getReadyToSolve,
		print,

	// DOM elements
		runButton = $('gc-run'),
		inElem = $('gc-in'),
		outElem = $('gc-out'),
		clearButton = $('gc-clear'),

	// Global variables
		inputLines;

	solve = function() {
		// Get amount of testcases from input
		var testCases = inputLines[0], i;
		inputLines.shift();

		for (i = 0; i < testCases; i++) {
			// Store current testcase (up index by 1, case number must start at 1)
			curTestCase = i+1;

			// Solve the assignment (magic happens here!)
			var testCase = getNextLine();

			// Print result
			result = testCase;
			print(result);
		}
	};

	// Helper functions
	getNextLine = function () {
		if (currentLineNumber < inputLines.length) {
			return inputLines[currentLineNumber++];
		} else {
			return false;
		}
	};

	getReadyToSolve = function () {
		// Reset playground variables
		outElem.value = '';
		currentLineNumber = 0;
		inputLines = inElem.value.split(/\n/g);

		// Solve the assignment
		solve();
	};

	print = function (str) {
		if (outElem.value != '') {
			outElem.value += '\n' + 'Case #' + curTestCase + ': ' + str;
		} else {
			outElem.value = 'Case #' + curTestCase + ': ' + str;
		}
	};

	// Event handling
	runButton.on('click', getReadyToSolve);

	clearButton.on('click', function () {
		inElem.value = '';
		outElem.value = '';
		inElem.focus();
	});
}());