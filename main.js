const collapsableSections = ['projects-list', 'places-list'];
var overlayWindowOpenSectionId;

function initialise() {
	this.setHeader();
}

function setHeader() {
	const currentContent = document.querySelector('header').innerHTML;
	document.querySelector('header').innerHTML = `
		<h1><a href='index.html'>Clarence Siew</a></h1>
		<ul>
			<a class='button' href='projects.html'><li>Projects</li></a>
			<a class='button' href='places.html'><li>Places</li></a>
			<a class='button' href='playlists.html'><li>Playlists</li></a>
		</ul>
		`
		+ currentContent;
}

function overlayWindowOpen(divId) {
	document.body.style.overflow = 'hidden';
	document.getElementById('overlayWindowContainer').style.visibility = 'visible';
	document.getElementById('overlayWindowContainer').style.display = 'flex';
	document.getElementById('overlayWindow-' + divId).style.visibility = 'visible';
	document.getElementById('overlayWindow-' + divId).style.display = 'flex';
	overlayWindowOpenSectionId = divId;
}

function overlayWindowClose() {
	document.body.style.overflow = 'auto';
	document.getElementById('overlayWindowContainer').style.visibility = 'hidden';
	document.getElementById('overlayWindowContainer').style.display = 'none';
	if (overlayWindowOpenSectionId) {
		document.getElementById('overlayWindow-' + overlayWindowOpenSectionId).style.visibility = 'hidden';
		document.getElementById('overlayWindow-' + overlayWindowOpenSectionId).style.display = 'none';
		overlayWindowOpenSectionId = null;
	}
}