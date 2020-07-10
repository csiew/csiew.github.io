const collapsableSections = ['projects-list', 'places-list'];
var overlayWindowOpenSectionId;

function initialise() {
	this.setHeader();
	this.setFooter();
}

function setHeader() {
	const currentContent = document.querySelector('header').innerHTML;
	document.querySelector('header').innerHTML = `
		<h1><a href='index.html'>Clarence Siew</a></h1>
		<ul>
			<a class='button' href='https://csiew.github.io/blog'><li>Blog</li></a>
			<a class='button' href='projects.html'><li>Projects</li></a>
			<a class='button' href='places.html'><li>Places</li></a>
			<a class='button' href='playlists.html'><li>Playlists</li></a>
		</ul>
		`
		+ currentContent;
}

function setFooter() {
	document.querySelector('footer').innerHTML = `
		<p>
			<a class="button button-type" href="#top">Back to top</a>
		</p>
		<p>
			<small>&copy; 2020 Clarence Siew</small>
		</p>
		`
}

function setElementVisibility(id, isVisible=true) {
	var state = 'visible';
	if (isVisible == false) {
		state = 'hidden';
	}
	document.getElementById(id).style.visibility = state;
}

function setElementDisplay(id, displayType) {
	document.getElementById(id).style.display = displayType;
}

function setElementHref(id, url) {
	document.getElementById(id).href = url;
}

function overlayWindowOpen(divId, websiteUrl=null, repoUrl=null) {
	document.body.style.overflow = 'hidden';
	setElementVisibility('overlayWindowContainer', true);
	setElementVisibility('overlayWindow-' + divId, true);
	setElementDisplay('overlayWindowContainer', 'flex');
	setElementDisplay('overlayWindow-' + divId, 'flex');
	overlayWindowOpenSectionId = divId;

	if (websiteUrl == null) {
		setElementVisibility('projectWebsiteLinkButton', false);
		setElementDisplay('projectWebsiteLinkButton', 'none');
	} else {
		setElementVisibility('projectWebsiteLinkButton', true);
		setElementDisplay('projectWebsiteLinkButton', 'inline-block');
		setElementHref('projectWebsiteLinkButton', websiteUrl);
	}

	if (repoUrl == null) {
		setElementVisibility('projectRepoLinkButton', false);
		setElementDisplay('projectRepoLinkButton', 'none');
	} else {
		setElementVisibility('projectRepoLinkButton', true);
		setElementDisplay('projectRepoLinkButton', 'inline-block');
		setElementHref('projectRepoLinkButton', repoUrl);
	}
}

function overlayWindowClose() {
	document.body.style.overflow = 'auto';
	setElementVisibility('overlayWindowContainer', false);
	setElementDisplay('overlayWindowContainer', 'none');
	if (overlayWindowOpenSectionId) {
		setElementVisibility('overlayWindow-' + overlayWindowOpenSectionId, false);
		setElementDisplay('overlayWindow-' + overlayWindowOpenSectionId, 'none');
		overlayWindowOpenSectionId = null;
	}
	setElementHref('projectWebsiteLinkButton', '#');
	setElementHref('projectRepoLinkButton', '#');
}

function openLink(url=null) {
	if (url != null) {
		window.location.href = url;
	}
}