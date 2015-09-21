var playlist = new Playlist();

var dontKnowWhy = new Song("Don't Know Why", "Norah Jones", "3:11");
var yourBodyIsAWonderland = new Song("Your Body Is A Wonderland", "John Mayer", "4:16");

var straightOuttaCompton = new Movie("Straight Outta Compton", 2015, "2:30:00");

playlist.add(dontKnowWhy);
playlist.add(yourBodyIsAWonderland);

playlist.add(straightOuttaCompton);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}