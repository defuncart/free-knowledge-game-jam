function Action(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
	console.log("Action")
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;

	return this;
}

Action.prototype.outcome = function()
{
	if( Math.random() < this.caughtChance )
	{
		console.log("Game Over");
	}
}

// Action.prototype.createNewRecruit()
// {
// 	//spy, mole, hacker, printer, activist

// 	// Math.random() * 
// }

/*						Social Media			*/

SocialMedia.prototype = new Action();
SocialMedia.prototype.constructor = Action
function SocialMedia(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
	console.log("Social Media")
}

SocialMedia.prototype.outcome = function()
{
	console.log("SocialMedia outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Graffiti			*/

Graffiti.prototype = new Action();
Graffiti.prototype.constructor = Action
function Graffiti(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Graffiti.prototype.outcome = function()
{
	console.log("Graffiti outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Speaking			*/

Speaking.prototype = new Action();
Speaking.prototype.constructor = Action
function Speaking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Speaking.prototype.outcome = function()
{
	console.log("Speaking outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Flyers			*/

Flyers.prototype = new Action();
Flyers.prototype.constructor = Action
function Flyers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Flyers.prototype.outcome = function()
{
	console.log("Flyers outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Demo			*/

Demo.prototype = new Action();
Demo.prototype.constructor = Action
function Demo(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Demo.prototype.outcome = function()
{
	console.log("Demo outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Election			*/

Election.prototype = new Action();
Election.prototype.constructor = Action
function Election(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Election.prototype.outcome = function()
{
	console.log("Election outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Newspapers			*/

Newspapers.prototype = new Action();
Newspapers.prototype.constructor = Action
function Newspapers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Newspapers.prototype.outcome = function()
{
	console.log("Newspapers outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Hacking			*/

Hacking.prototype = new Action();
Hacking.prototype.constructor = Action
function Hacking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) {}

Hacking.prototype.outcome = function()
{
	console.log("Hacking outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}