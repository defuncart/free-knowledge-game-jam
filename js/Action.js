/*
	supportNeeded				0 - 100
	supportGiven				0 - 100
	recruitmentChance			0.0 - 1.0
	caughtChance				0.0	- 1.0
	isGlobalAction				boolean
	isUnlocked					boolean
*/
var SOCIAL_MEDIA_ACTION = 0
var GRAFFITI_ACTION = 1
var SPEAKING_ACTION = 2
var FLYERS_ACTION = 3
var DEMO_ACTION = 4
var ELECTION_ACTION = 5
var NEWSPAPERS_ACTION = 6
var HACKING_ACTION = 7

/*						Social Media			*/
function SocialMedia(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
    this.id = "socialmedia";
    this.text = "Share knowledge on social media";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

SocialMedia.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Graffiti			*/
function Graffiti(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
    this.id = "graffiti";
    this.text = "Spray graffiti with an awareness message";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Graffiti.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Speaking			*/
function Speaking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
    this.id = "speaking";
    this.text = "Speak to someone";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Speaking.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Flyers			*/
function Flyers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
    this.id = "flyers";
	this.text = "Spread some flyers";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Flyers.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Demo			*/
function Demo(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
    this.id = "demo";
	this.text = "Organize a demonstration";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Demo.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Election			*/
function Election(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
    this.id = "election";
	this.text = "Candidate for presidental election";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Election.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Newspapers			*/
function Newspapers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
    this.id = "newspapers";
	this.text = "Publish an article on a newspaper";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Newspapers.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}

/*						Hacking			*/
function Hacking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
    this.id = "hacking";
	this.text = "Hack a governmental website";
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Hacking.prototype.outcome = function()
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
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
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
}	