/*
	Four possible actions:

	Local newspaper article			L
	Police raid						L
	Political rally					L
	Television broadcast			G
*/

function Government()
{
	console.log("Government");
	this.actions = [];
	this.actions.push( new GovernmentNewspaperArticle(15, 5, 0.1, false) );
	this.actions.push( new GovernmentPoliceRaid(30, 20, 0.2, false) );
	this.actions.push( new GovernmentPoliticalRally(15, 10, 0.05, false) );
	this.actions.push( new GovernmentTelevisionBroadcast(40, 4, 0.3, true) );
}