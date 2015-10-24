function Action(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked
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
function SocialMedia() {}

SocialMedia.prototype.outcome = function()
{
	console.log("SocialMedia outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Graffiti			*/

Graffiti.prototype = new Action();
Graffiti.prototype.constructor = Action
function Graffiti(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction) {}

Graffiti.prototype.outcome = function()
{
	console.log("Graffiti outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Speaking			*/

Speaking.prototype = new Action();
Speaking.prototype.constructor = Action
function Speaking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction) {}

Speaking.prototype.outcome = function()
{
	console.log("Speaking outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Flyers			*/

Flyers.prototype = new Action();
Flyers.prototype.constructor = Action
function Flyers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction) {}

Flyers.prototype.outcome = function()
{
	console.log("Flyers outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Demo			*/

Demo.prototype = new Action();
Demo.prototype.constructor = Action
function Flyers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction) {}

Flyers.prototype.outcome = function()
{
	console.log("Flyers outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}
