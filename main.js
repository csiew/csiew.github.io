function initialise(pageName) {
	this.setHeader(pageName);
	this.setFooter();
}

function setHeader(pageName) {
	let title = `
		<h1>Clarence Siew</h1>
		<div class="header-subtitle">Software Engineering student<br />Melbourne, Australia</div>
	`;
	let navBar = `
		<div class="nav">
			<ul>
				<a href="index.html"` + this.isCorresponding("index", pageName) + `><li>Home</li></a>
				<a href="projects.html"` + this.isCorresponding("projects", pageName) + `><li>Projects</li></a>
				<a href="playlists.html"` + this.isCorresponding("playlists", pageName) + `><li>Playlists</li></a>
				<a href="places.html"` + this.isCorresponding("places", pageName) + `><li>Places</li></a>
				<a href="contact.html"` + this.isCorresponding("contact", pageName) + `><li>Contact</li></a>
			</ul>
		</div>
	`;
	
	document.querySelector('header').innerHTML = title + navBar;
}

function isCorresponding(navName, pageName) {
	if (navName === pageName) {
		return "class='nav-active'";
	}
}

function setFooter() {
	let copyright = "<p>&copy; Clarence Siew</p>";
	
	document.querySelector('footer').innerHTML = copyright;
}