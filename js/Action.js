//supportNeeded, impact, recruitChance, caughtChance, global, 

function Action(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction)
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
}

Action.prototype.outcome = function()
{
	console.log("Action outcome");
}

Action.prototype.createNewRecruit()
{
	//spy, mole, hacker, printer, activist

	// Math.random() * 
}

/*						Social Media			*/

SocialMedia.prototype = new Action();
SocialMedia.prototype.constructor = Action
// function SocialMedia(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction)
// {
// 	// Action.prototype.
// }

SocialMedia.prototype.outcome = function()
{
	console.log("SocialMedia outcome");
}