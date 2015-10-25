/*
	supportNeeded				0 - 100
	supportGiven				0 - 100
	recruitmentChance			0.0 - 1.0
	caughtChance				0.0	- 1.0
	backfireChance				0.0 - 1.0
	isGlobal				boolean
	isUnlocked					boolean
*/
var SOCIAL_MEDIA_ACTION = 0
var GRAFFITI_ACTION = 1
var SPEAKING_ACTION = 2
var FLYERS_ACTION = 3
var DEMO_ACTION = 4
var NEWSPAPERS_ACTION = 5
var HACKING_ACTION = 6
var ELECTION_ACTION = 7

/*						Social Media			*/
function SocialMedia(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked)
{
    this.id = "socialmedia";
    this.text = "Share knowledge on social media";
    this.resultText = "You shared an article via Social Media."
    this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

SocialMedia.prototype.outcome = function(county)
{
	console.log("SocialMedia outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText;
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support."
	}
	county.testBounds();
	return returnText;
}

/*						Graffiti			*/
function Graffiti(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked)
{
    this.id = "graffiti";
    this.text = "Spray graffiti with an awareness message";
    this.resultText = "You sprayed a graffiti awareness message in ";
    this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Graffiti.prototype.outcome = function(county)
{
	console.log("Graffiti outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support there."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support there."
	}
	county.testBounds();
	return returnText;
}

/*						Speaking			*/
function Speaking(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked) 
{
    this.id = "speaking";
    this.text = "Speak to someone";
    this.resultText = "You went door to door and spoke with people in ";
    this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Speaking.prototype.outcome = function(county)
{
	console.log("Speaking outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support there."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support there."
	}
	county.testBounds();
	return returnText;
}

/*						Flyers			*/
function Flyers(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked) 
{
    this.id = "flyers";
	this.text = "Spread some flyers";
	this.resultText = "You distributed some flyers in ";
	this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Flyers.prototype.outcome = function(county)
{
	console.log("Flyers outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support there."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support there."
	}
	county.testBounds();
	return returnText;
}

/*						Demo			*/
function Demo(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked) 
{
    this.id = "demo";
	this.text = "Organize a demonstration";
	this.resultText = "You organized a demonstration in ";
	this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Demo.prototype.outcome = function(county)
{
	console.log("Demo outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support there."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support there."
	}
	county.testBounds();
	return returnText;
}

/*						Newspapers			*/
function Newspapers(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked)
{
    this.id = "newspapers";
	this.text = "Publish an article on a newspaper";
	this.resultText = "A newspaper article has been published in ";
	this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Newspapers.prototype.outcome = function(county)
{
	console.log("Newspapers outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText + county.name + ".";
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support there."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support there."
	}
	county.testBounds();
	return returnText;
}

/*						Hacking			*/
function Hacking(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked) 
{
    this.id = "hacking";
	this.text = "Hack a governmental website";
	this.resultText = "The governmental website has been hacked.";
	this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Hacking.prototype.outcome = function(county)
{
	console.log("Hacking outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText;
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport -= this.supportGiven;
		returnText += " This has backfired and hurt your support."
	}
	else
	{
		county.playerSupport += this.supportGiven;
		returnText += " This has risen your support."
	}
	county.testBounds();
	return returnText;
}

/*						Election			*/
function Election(supportNeeded, supportGiven, recruitmentChance, caughtChance, backfireChance, isGlobal, isUnlocked) 
{
    this.id = "election";
	this.text = "Candidate for presidental election";
	this.resultText = "A presidental nominanee has been selected from your party.";
	this.message = "Discription of this action."
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.backfireChance = backfireChance;
	this.isGlobal = isGlobal;
	this.isUnlocked = isUnlocked;
}

Election.prototype.outcome = function(county)
{
	console.log("Election outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver = true;
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src="+recruit.avatar+" width=100 height=100>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}

	var returnText = this.resultText;
	if( Math.random() < this.backfireChance )
	{
		county.playerSupport = 5;
		returnText += " This has backfired and you have lost the election."
	}
	else
	{
		returnText += " You have won the election!"
		gameOver = true;
	}
	
	return returnText;
}