var player = new Player();
var playerSupport = 0 // 0 to 100
function calculatePlayerSupport()
{
	var temp = 0;
	for(i=0; i < counties.length; i++)
	{
		temp += (counties[i].playerSupport*1.0)
	}
	playerSupport = temp / counties.length
}

function addRecruit()
{
	var recruit = new Recruit();
	console.log(recruit.name);
	console.log(recruit.type);
	//player.recruits.push( recruit );

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

var government = new Government();

var counties = [];
counties.push( new County("capital", "capital", 2, 100, 65, 0.13) );
counties.push( new County("university", "university", 1, 80, 50, 0.09) );
counties.push( new County("financial", "financial", 7, 80, 25, 0.07) );
counties.push( new County("families", "families", 1, 50, 30, 0.15) );
counties.push( new County("senior", "senior", 2, 40, 15, 0.17) );
counties.push( new County("farmer1", "farmer1", 1, 20, 40, 0.15) );
counties.push( new County("vacation", "vacation", 2, 20, 70, 0.12) );
counties.push( new County("farmer2", "farmer2", 3, 10, 10, 0.12) );

var gameOver = false
// function gameOver()
// {
// 	console.log("gameOver")
// 	alert("Game Over");
// }

function GameEngine()
{

}

function pause(millis)
{
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < millis);
}

// function play()
// {

// 	console.log("Game Started");
// 	calculatePlayerSupport();
// 	console.log( playerSupport );

// 	while( !gameOver )
// 	{
// 		/*			Player Move 		*/
// 		console.log("Player Move");

// 		var randomAction = -1;
// 		do {
// 			randomAction = Math.floor(Math.random()*player.actions.length);
// 		} while( (player.actions[randomAction].supportNeeded > playerSupport) ||
// 					(randomAction == HACKING_ACTION && !hackerIsUnlocked) || 
// 					(randomAction == NEWSPAPERS_ACTION && !printerIsUnlocked) || 
// 					(randomAction == ELECTION_ACTION && playerSupport < 50) )

// 		if( player.actions[randomAction].isGlobal )
// 		{
// 			for(var i=0; i < counties.length; i++)
// 			{
// 				playerGameMove(randomAction, counties[i]);
// 			}
// 		}
// 		else
// 		{
// 			var randomCountry = Math.floor(Math.random()*counties.length);
// 			playerGameMove(randomAction, counties[randomCountry]);
// 		}

// 		//
// 		calculatePlayerSupport();
// 		console.log( playerSupport );

// 		if( gameOver ){ break; }

// 		pause(1000);

// 		/*			Computer Move 			*/
// 		console.log("Computer Move");

// 		randomCountry = Math.floor(Math.random()*8);
// 		computerGameMove(counties[randomCountry]);

// 		calculatePlayerSupport();
// 		console.log( playerSupport );

// 		pause(1000);
// 	}

// 	console.log("gameOver");
// }

// function go()
// {
// 	calculatePlayerSupport();
// 	console.log( playerSupport );

// 	console.log( counties[0].name )

// 	playerGameMove(counties[0], 0);

// 	calculatePlayerSupport();
// 	console.log( playerSupport );

// 	computerGameMove(counties[0])

// 	calculatePlayerSupport();
// 	console.log( playerSupport );
// }

function playerGameMove(action)
{
	console.log("yyyy")
	for(var i=0; i < counties.length; i++)
	{
		//playerGameMove(action, counties[i]);
		var result = action.outcome( counties[i] );
		console.log(result);
	}
	return action.resultText;
}

function playerGameMoveCounty(action, county)
{
	var result = action.outcome( county );
	console.log(result);

	automateComputerMove();

	return result;
}

function automateComputerMove()
{
	calculatePlayerSupport();
	console.log( playerSupport );

	pause(2000);

	computerGameMove();

	calculatePlayerSupport();
	console.log( playerSupport );

	pause(2000);
}

// function playerGameMove(action, county)
// {
// 	var result = player.actions[action].outcome( county );
// 	console.log(result);
// }

// function pm()
// {
// 	var randomAction = Math.floor( Math.random()*8 );
// 	var randomCountry = Math.floor( Math.random()*8 );
// 	var result = player.actions[randomAction].outcome(counties[randomCountry]);
// 	console.log(result);
// }

function computerGameMove()
{
	var governmentSupport = 100 - playerSupport;
	var randomAction = -1;
	do {
		randomAction = Math.floor(Math.random()*government.actions.length);
	} while( government.actions[randomAction].supportNeeded > governmentSupport )

	if( government.actions[randomAction].isGlobal )
	{
		for(var i=0; i < counties.length; i++)
		{
			var result = government.actions[randomAction].outcome( counties[i] );
			console.log(result);
		}
		//return government.actions[randomAction].resultText;
		print_news(government.actions[randomAction].resultText);
	}
	else
	{
		var randomCountry = Math.floor(Math.random()*counties.length);
		var result = government.actions[randomAction].outcome( counties[randomCountry] );
		console.log(result);
		print_news(result);
		//return result;
	}
}