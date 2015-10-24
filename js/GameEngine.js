var player = new Player();
var playerSupport = 0 // 0 to 100
function calculatePlayerSupport()
{
	var temp = 0;
	for(i=0; i < counties.length; i++)
	{
		temp += (counties[i].playerSupport*1.0)
	}
	console.log( "counties.length: " + counties.length )
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

function play()
{
	while( !gameOver )
	{
		calculatePlayerSupport();
		console.log( playerSupport );


		var randomAction = Math.floor(Math.random()*8)
		d

		playerGameMove(counties[0], 0);
	}

	
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
	actions[action].outcome()
}

function computerGameMove(county)
{
	county.playerSupport -= Math.floor( Math.random() * 3 )
	county.playerSupport = ( county.playerSupport < 0 ? 0 : county.playerSupport )
}