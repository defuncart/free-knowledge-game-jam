function Player()
{
	console.log("Player")
	this.support = 0;
	this.actions = [];
	this.actions.push( new SocialMedia(0, 1, 1, 0.1, true, 2) );
}