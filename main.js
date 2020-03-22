function initialise(pageName) {
	this.setHeader(pageName);
	this.setFooter();
}

function setHeader(pageName) {
	let navbar = `
		<div id="navigation-bar">
			<div id="masthead">
				<a href="index.html">
					<h1>Clarence Siew</h1>
				</a>
			</div>
			<div id="navigation-links">
				<ul>
					<a href="projects.html"><li>Projects</li></a>
					<a href="playlists.html"><li>Playlists</li></a>
					<a href="places.html"><li>Places</li></a>
					<a href="contact.html"><li>Contact</li></a>
				</ul>
			</div>
		</div>
	`;
	
	let existing = document.querySelector('header').innerHTML;
	document.querySelector('header').innerHTML = navbar + existing;
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