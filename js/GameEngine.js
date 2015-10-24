var player = new Player();
var playerSupport = 0 // 0 to 100
function calculatePlayerSupport()
{
	var temp;
	for(i=0; i < counties.length; i++)
	{
		temp += counties[i].playerSupport
	}
	console.log( "counties.length: " + counties.length )
	playerSupport = temp / counties.length
}

var government = Government();

var counties = [];
counties.push( new County("capital", 0, 100, 65, 0.13) );
counties.push( new County("universiy", 0, 80, 50, 0.09) );
counties.push( new County("business", 0, 80, 25, 0.07) );
counties.push( new County("township1", 0, 50, 30, 0.15) );
counties.push( new County("township2", 0, 40, 15, 0.17) );
counties.push( new County("countryside1", 0, 20, 40, 0.15) );
counties.push( new County("countryside2", 0, 20, 70, 0.12) );
counties.push( new County("countryside3", 0, 10, 10, 0.12) );

function GameEngine()
{

	

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
	//player.actions[0]

	county.playerSupport += player.actions[action].supportGiven
}

function computerGameMove(county)
{
	//player.actions[0]

	county.playerSupport -= Math.floor( Math.random() * 3 )
	county.playerSupport = ( county.playerSupport < 0 ? 0 : county.playerSupport )
}