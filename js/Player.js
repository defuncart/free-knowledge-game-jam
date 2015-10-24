function Player()
{
	console.log("Player")
	// this.support = 0;
	this.actions = [];
	this.actions.push( new SocialMedia(0, 1, 1, 0.1, true, true) );
	this.actions.push( new Graffiti(0, 1, 1, 0.1, true, true) );
	this.actions.push( new Speaking(0, 1, 1, 0.1, true, true) );
	this.actions.push( new Flyers(0, 1, 1, 0.1, true, true) );
	this.actions.push( new Demo(0, 1, 1, 0.1, true, true) );
	this.actions.push( new Election(0, 1, 1, 0.1, true, true) );
	this.actions.push( new Newspapers(0, 1, 1, 0.1, true, false) );
	this.actions.push( new Hacking(0, 1, 1, 0.1, true, false) );
}