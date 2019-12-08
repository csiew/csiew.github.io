function initialise(pageName) {
	this.setHeader(pageName);
	this.setFooter();
}

function setHeader(pageName) {
	let title = `
		<div id="masthead">
			<a href="index.html">
				<h1>Clarence Siew</h1>
				<p>Software Engineering student, Melbourne</p>
			</a>
		</div>
		<hr />
		<div id="navigation-links">
			<ul>
				<a href="projects.html"><li>Projects</li></a>
				<a href="playlists.html"><li>Playlists</li></a>
				<a href="places.html"><li>Places</li></a>
				<a href="contact.html"><li>Contact</li></a>
			</ul>
		</div>
	`;
	
	document.querySelector('header').innerHTML = title;
}

function isCorresponding(navName, pageName) {
	if (navName === pageName) {
		return "class='nav-active'";
	}
}

function setFooter() {
	let copyright = "<p>&copy; 2019 Clarence Siew</p>";
	
	document.querySelector('footer').innerHTML = copyright;
}