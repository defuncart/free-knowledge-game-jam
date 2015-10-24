var player = Player();
var playerSupport = 0 // 0 to 100
function calculatePlayerSupport()
{
	var temp;
	for(i=0; i < counties.length; i++)
	{
		temp += counties[i].playerSupport
	}
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