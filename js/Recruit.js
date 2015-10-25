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
	var recruitTextSpy = ["Hello. I am very interested in your work. Can we maybe meet up once and talk about what you’re doing? Or I could come to your place!", "I like what you do. Can you maybe tell me your real name so I can tell my children who our country’s hero is? Also, I’d like to work for you.", "Let me work for you. I am the perfect person for your plot. I am working for the government in a well paid position, noone would ever suspect me. You have to take me!", "First of all, you may think that I am a spy or something, but I’m not. I know this might sound weird, but can I work for you? I really want to help you in your cause."];
	var recruitTextMole = ["I cannot talk for long, but I can help you. I am working for the Government and I’m sure I have some information that could be interesting for you.", "Here, take this. It is a file that was on the President’s desk when I cleaned it last night. I know you can use it.", "No time to talk. Take this and publish it. You should know that you have friends in places where you don’t expect them. Free Bulbatia!", "I probably put my life at risk for this, but maybe they’ll keep me alive in prison long enough to see this country being free."];
	var recruitTextHacker = ["Hey. I was reading your last blog entry, and I think I could help you. I am really good with computers, and I am pretty sure that I can hack into the Government servers - You want me to leave them a message there?", "1 c4n h3lp u w17h ur m15510n. Ju57 73ll m3 w4t 70 d0.", "I am working as a computer scientist for some years now. Contact me when needed.", "I don’t dare to talk here, but I know some things going on that everyone should know about. I also know how to hack into a system. Call me if you need me."];
	var recruitTextPrinter = ["I own a little magazine for democratically interested people. We often publish displeasing messages. We will start publishing articles about you and your work.", "I am a writer at the big national newspaper. I am pretty sure that I could sneak some small articles about your work in without anyone noticing.", "I own a print press. Don’t ask me where I got it, it’s in my cellar. If the government would know about this, I wouldn’t be talking to you. Is there maybe anything you want me to get printed?", "Good Day! I am a kiosk owner. The Government can lick my ass! From now on I will not sell  their magazines anymore and I will promote yours!"];
	var recruitTextActivist = ["I am doing something similar as you for some time now, but with less success. I think your beliefs are the right ones, and I’d like to work with you. Together we can make this country a free country!", "You are amazing! All my friends share the same beliefs as you and I. In future I will definetly spread your word - What is going on behind the Government is horrible!", "I would just like to let you know that I am sharing everything you post and telling everyone I know about what you are trying to achieve. Is that ok for you?", "If we don’t change anything, this country will be bled out in a few years. There have to be less selfish people than the Government to do the job."];
	var recruitTexts = [recruitTextSpy, recruitTextMole, recruitTextHacker, recruitTextPrinter, recruitTextActivist];

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

			this.text = recruitTexts[i][Math.floor(Math.random()*4)];
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