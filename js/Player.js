function Player()
{
	console.log("Player")
	this.actions = [];
	this.actions.push( new SocialMedia(0, 1, 0.2, 0.1, 0.1, true, true) );
	this.actions.push( new Graffiti(0, 1, 0.2, 0.2, 0.05, false, true) );
	this.actions.push( new Speaking(0, 4, 0.25, 0.2, 0.02, false, true) );
	this.actions.push( new Flyers(5, 5, 0.25, 0.4, 0.05, false, true) );
	this.actions.push( new Demo(35, 25, 0.40, 1, 0.2, false, true) );
	this.actions.push( new Newspapers(15, 15, 0.50, 0.4, 0.2, false, false) );
	this.actions.push( new Hacking(25, 18, 0.40, 0.5, 0.2, true, false) );
	this.actions.push( new Election(50, 1, 1, 0.1, 0.4, false, true) );
	this.recruits = [];
}