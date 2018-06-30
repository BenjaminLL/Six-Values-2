
// assign each button to a variable 
var honesty = $("#honesty");
var trust = $("#trust");
var respect = $("#respect");
var responsibility = $("#responsibility");
var fairness = $("#fairness");
var courage = $("#courage");
var scenario = $("#context"); // scenario context

// declare scenarios
var scenarios = ["honesty", "trust", "respect", "responsibility", 
					"fairness", "courage"];

// Global Vars
var scenarioIndex; // current scenario number 
var numVars = 6;

// get random number
function getRandom(max) {
	return Math.floor(Math.random() * max);
}

//get random scenarios
function setScenario() {
	scenarioIndex = getRandom(numVars);
	scenario.text(scenarios[scenarioIndex]);
}








