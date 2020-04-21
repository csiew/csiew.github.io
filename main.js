const collapsableSections = ['projects-list', 'places-list'];

function initialise() {
	this.setHeader();
	document.getElementById('slideout-box-display').style.display = "none";
	document.getElementById('slideout-box-display').style.visibility = "hidden";
}

function setHeader() {
	document.querySelector('header').innerHTML = "<a href='index.html'>Back to homepage</a>";
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
	if (slideName == 'melbourne') {
		document.getElementsByClassName('sideshow')[0].style.backgroundImage = "url(images/melbourne.jpg)";
	} else if (slideName == 'penang') {
		document.getElementsByClassName('sideshow')[0].style.backgroundImage = "url(images/penang.jpg)";
	}
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