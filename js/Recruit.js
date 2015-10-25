var hackerIsUnlocked = false;
var printerIsUnlocked = false;

function Recruit()
{
	var percentageArray = [0.4, 0.05, 0.15, 0.15, 0.25];
	var recruits = ["Spy", "Mole", "Hacker", "Printer", "Activist"];
	var recruitNamesMale = ["Phil Gagliano", "Sonny Bumbalough", "Benjamin Miler", "Laverne Wojcik", "Santiago Hocker", "Guy Raye", "Willis Ismail", "Sylvester Robison", "Britt Havel", "Buck Kehl"]; 
	var recruitNamesFemale = ["Kacie Cantero", "Shante Rios", "Odelia Howell", "Jutta Wilcoxson", "Rosy O'Shea", "Keva Plunkett", "Magaly Zheng", "Tamiko Eyler", "Keli Welker", "Tenesha Grosch"];
	var numberOfMaleAvatars = 10;
	var numberOfFemaleAvatars = 9;
	var recruitText = [];

	var count = 0.0;
	var randomNumber = Math.random();
	for(var i=0; i < percentageArray.length; i++)
	{
		count += percentageArray[i];
		if( randomNumber < count )
		{
			this.type = recruits[i];
			
			if( Math.random() > 0.5 )
			{
				this.name = recruitNamesMale[ Math.floor(Math.random()*recruitNamesMale.length) ]
				var avatarIndex = Math.floor(Math.random()*numberOfMaleAvatars) + 1 //indexed m1, m2 etc.
				this.avatar = "img/avatars/m" + avatarIndex + ".png"
			}
			else
			{
				this.name = recruitNamesFemale[ Math.floor(Math.random()*recruitNamesFemale.length) ]
				var avatarIndex = Math.floor(Math.random()*numberOfFemaleAvatars) + 1 //indexed f1, f2 etc.
				this.avatar = "img/avatars/f" + avatarIndex + ".png"
			}

			this.text = "I want to join your group."
			if( i == 2 ){ hackerIsUnlocked = true }
			if( i == 3 ){ printerIsUnlocked = true }
			break;
		}
	}
}

Recruit.prototype.ability = function()
{
	switch( this.type )
	{
		case "Spy":
		{
			console.log("Spy")

			for(var i=0; i < player.actions.length; i++)
			{
				player.actions[i].caughtChance += 0.2;
				if( player.actions[i] > 1 ){ player.actions[i] = 1 }
				console.log(player.actions[i].caughtChance);
			}

			break;
		}
		case "Mole":
		{
			console.log("Mole")
			for(var i=0; i < player.actions.length; i++)
			{
				player.actions[i].caughtChance -= 0.1;
				if( player.actions[i] < 0 ){ player.actions[i] = 0 }
				console.log(player.actions[i].caughtChance);
			}
			break;
		}
		case "Hacker":
		{
			console.log("Hacker")
			break;
		}
		case "Printer":
		{
			console.log("Printer")
			break;
		}
		case "Activist":
		{
			console.log("Activist")
			for(var i=0; i < counties.length; i++)
			{
				counties[i].playerSupport += 10;
				console.log(counties[i].playerSupport);
			}
			break;
		}
		default: {}
	}
}