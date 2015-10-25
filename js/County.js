/*
	name						String
	playerSupport				0 - 100

	urbanization, persuasibility, votingStrength
*/


function County(id, name, playerSupport, urbanization, persuasibility, votingStrength)
{
	this.id = id;
	this.name = name;
	this.icon = "img/counties(actions)/" + name + ".png"
	this.playerSupport = playerSupport;
	this.urbanization = urbanization;
	this.persuasibility = persuasibility;
	this.votingStrength = votingStrength;
}

County.prototype.testBounds = function()
{
	if(this.playerSupport > 100){ this.playerSupport = 100; }
	if(this.playerSupport < 0){ this.playerSupport = 0; }
}