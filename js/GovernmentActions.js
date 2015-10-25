/*
	supportNeeded				0 - 100
	supportGiven				0 - 100
	backfireChance				0.0 - 1.0
	isGlobalAction				boolean
*/


/*							Newspaper Article 						*/
function GovernmentNewspaperArticle(supportNeeded, supportGiven, backfireChance, isGlobalAction)
{
	this.resultText = "The government has printed in newspaper article in ";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.backfireChance = backfireChance;
	this.isGlobalAction = isGlobalAction;
}

GovernmentNewspaperArticle.prototype.outcome = function(county)
{
	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has backfired and instead your support has risen there.";
	}
	else
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has hurt your support there.";
	}
	county.testBounds();
	return returnText;
}

/*							Police Raid 						*/
function GovernmentPoliceRaid(supportNeeded, supportGiven, backfireChance, isGlobalAction)
{
	this.resultText = "The police has raided one of your offices in ";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.backfireChance = backfireChance;
	this.isGlobalAction = isGlobalAction;
}

GovernmentPoliceRaid.prototype.outcome = function(county)
{
	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has backfired and instead your support has risen there.";
	}
	else
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has hurt your support there.";
	}
	county.testBounds();
	return returnText;
}

/*							Political Rally						*/
function GovernmentPoliticalRally(supportNeeded, supportGiven, backfireChance, isGlobalAction)
{
	this.resultText = "The government held a large rally for their main politician in ";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.backfireChance = backfireChance;
	this.isGlobalAction = isGlobalAction;
}

GovernmentPoliticalRally.prototype.outcome = function(county)
{
	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has backfired and instead your support has risen there.";
	}
	else
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has hurt your support there.";
	}
	county.testBounds();
	return returnText;
}

/*							Television Broadcast 						*/
function GovernmentTelevisionBroadcast(supportNeeded, supportGiven, backfireChance, isGlobalAction)
{
	this.resultText = "The government broadcasted a report on the national broadcaster.";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.backfireChance = backfireChance;
	this.isGlobalAction = isGlobalAction;
}

GovernmentTelevisionBroadcast.prototype.outcome = function(county)
{
	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has backfired and instead your support has risen there.";
	}
	else
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has hurt your support there.";
	}
	county.testBounds();
	return returnText;
}