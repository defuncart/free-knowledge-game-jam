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
	player.recruits.push( recruit );
}

var government = Government();

var counties = [];
counties.push( new County("capital", 2, 100, 65, 0.13) );
counties.push( new County("universiy", 1, 80, 50, 0.09) );
counties.push( new County("financial", 7, 80, 25, 0.07) );
counties.push( new County("township1", 1, 50, 30, 0.15) );
counties.push( new County("township2", 2, 40, 15, 0.17) );
counties.push( new County("countryside1", 1, 20, 40, 0.15) );
counties.push( new County("countryside2", 2, 20, 70, 0.12) );
counties.push( new County("countryside3", 3, 10, 10, 0.12) );

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

function play()
{

	console.log("Game Started");
	calculatePlayerSupport();
	console.log( playerSupport );

	while( !gameOver )
	{
		/*			Player Move 		*/
		console.log("Player Move");

		var randomAction = -1;
		do {
			randomAction = Math.floor(Math.random()*8);
		} while( (player.actions[randomAction].supportNeeded > playerSupport) ||
					(randomAction == HACKING_ACTION && !hackerIsUnlocked) || 
					(randomAction == NEWSPAPERS_ACTION && !printerIsUnlocked) || 
					(randomAction == ELECTION_ACTION && playerSupport < 50) )

		var randomCountry = Math.floor(Math.random()*8);

		playerGameMove(counties[randomCountry], randomAction);

		//
		calculatePlayerSupport();
		console.log( playerSupport );

		if( gameOver ){ break; }

		pause(1000);

		/*			Computer Move 			*/
		console.log("Computer Move");

		randomCountry = Math.floor(Math.random()*8);
		computerGameMove(counties[randomCountry]);

		calculatePlayerSupport();
		console.log( playerSupport );

		pause(1000);
	}

	console.log("gameOver");
}

function go()
{
	calculatePlayerSupport();
	console.log( playerSupport );

	console.log( counties[0].name )

	playerGameMove(counties[0], 0);

	calculatePlayerSupport();
	console.log( playerSupport );

	computerGameMove(counties[0])

	calculatePlayerSupport();
	console.log( playerSupport );
}

function playerGameMove(county, action)
{
	county.playerSupport += player.actions[action].supportGiven
	player.actions[action].outcome()
}

function computerGameMove(county)
{
	county.playerSupport -= Math.floor( Math.random() * 5 )
	county.playerSupport = ( county.playerSupport < 0 ? 0 : county.playerSupport )
	}