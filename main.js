function initialise(pageName) {
	this.setHeader(pageName);
	this.setFooter();
}

function setHeader(pageName) {
	let title = `
		<div id="masthead">
			<a href="index.html">
				<h1>Clarence Siew</h1>
				<sub>Software Engineering student, Melbourne</sub>
			</a>
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
	let copyright = "<p>Copyright, 2019 Clarence Siew</p>";
	
	document.querySelector('footer').innerHTML = copyright;
}