function initialise(pageName) {
	this.setHeader(pageName);
	// this.setFooter();
}

function setHeader(pageName) {
	let title = `
		<div class="header-title">
			<h1>Clarence Siew</h1>
			<div class="header-subtitle">Software Engineering student<br />Melbourne, Australia</div>
		</div>
	`;
	let navBar = `
		<div id="navlist" class="nav">
			<ul>
				<a href="index.html"` + this.isCorresponding("index", pageName) + `><li>Home</li></a>
				<a href="projects.html"` + this.isCorresponding("projects", pageName) + `><li>Projects</li></a>
				<a href="playlists.html"` + this.isCorresponding("playlists", pageName) + `><li>Playlists</li></a>
				<a href="places.html"` + this.isCorresponding("places", pageName) + `><li>Places</li></a>
				<a href="contact.html"` + this.isCorresponding("contact", pageName) + `><li>Contact</li></a>
			</ul>
		</div>
	`;
	let copyright = `
		<div class="nav-cr"><hr />&copy; 2019</div>
	`
	
	document.querySelector('header').innerHTML = `<div class="header-container">` + title + `<hr />` + navBar + copyright + `</div>`;
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