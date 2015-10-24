var player = Player();
var government = Government();
var counties = [];
counties.push( new County("capital", 100, 65, 0.13) );
counties.push( new County("universiy", 80, 50, 0.09) );
counties.push( new County("business", 80, 25, 0.07) );
counties.push( new County("township1", 50, 30, 0.15) );
counties.push( new County("township2", 40, 15, 0.17) );
counties.push( new County("countryside1", 20, 40, 0.15) );
counties.push( new County("countryside2", 20, 70, 0.12) );
counties.push( new County("countryside3", 10, 10, 0.12) );

function GameEngine()
{
}