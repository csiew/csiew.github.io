const collapsableSections = ['projects-list', 'places-list'];

function initialise() {
	this.setHeader();
}

function setHeader() {
	const currentContent = document.querySelector('header').innerHTML;
	document.querySelector('header').innerHTML = `
		<h1><a href='index.html'>Clarence Siew</a></h1>
		<ul>
			<a href='projects.html'><li>Projects</li></a>
			<a href='places.html'><li>Places</li></a>
			<a href='playlists.html'><li>Playlists</li></a>
		</ul>
		`
		+ currentContent;
}

function isCorresponding(navName, pageName) {
	if (navName === pageName) {
		return "class='nav-active'";
	}
}

function setFooter() {
	let footerContent = `
		<div>
			&copy; 2020 Clarence Siew
		</div>
		<div>
			Hosted on GitHub via GitHub Pages
		</div>
		`;
	
	document.querySelector('footer').innerHTML = footerContent;
}

function changeSideshow(slideName) {
	var imgUrl = "url(images/keyboard.jpg)";
	if (slideName == 'melbourne') {
		imgUrl = "url(images/melbourne.jpg)";
	} else if (slideName == 'penang') {
		imgUrl = "url(images/penang.jpg)";
	} else if (slideName == 'playlists') {
		imgUrl = "url(images/records.jpg)";
	} else if (slideName == 'projects') {
		imgUrl = "url(images/ipad.jpg)";
	} else if (slideName == 'places') {
		imgUrl = "url(images/cafe.jpg)";
	}
	document.getElementsByClassName('sideshow')[0].style.backgroundImage = imgUrl;
}

function changeSideshowBack() {
	document.getElementsByClassName('sideshow')[0].style.backgroundImage = "url(images/keyboard.jpg)";
}

function slideoutToggle(divId) {
	var content = document.getElementById(divId).innerHTML;
	document.getElementById('slideout-box-display').innerHTML = content;
	if (document.getElementById('slideout-box-display').style.display == "none") {
		document.getElementById('slideout-box-display').style.display = "block";
		document.getElementById('slideout-box-display').style.visibility = "visible";
	}
}