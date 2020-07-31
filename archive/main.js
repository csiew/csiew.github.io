const collapsableSections = ['projects-list', 'places-list'];
const overlayWindowLinkButtonClasses = "overlayWindowLinkButton button";
const overlayWindowCloseButtonClasses = "overlayWindowClose button";
const overlayWindowHeaderButtonDisabledClasses = "disabledButton button";
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

function setElementHref(id, url='#') {
	if (url !== '#') {
		document.getElementById(id).href = url;
	} else {
		document.getElementById(id).removeAttribute("href");
	}
}

function setElementClass(id, classString) {
	document.getElementById(id).className = classString;
}

function overlayWindowOpen(divId, websiteUrl='#', repoUrl='#') {
	document.body.style.overflow = 'hidden';
	setElementVisibility('overlayWindowContainer', true);
	setElementVisibility('overlayWindow-' + divId, true);
	setElementDisplay('overlayWindowContainer', 'flex');
	setElementDisplay('overlayWindow-' + divId, 'flex');
	overlayWindowOpenSectionId = divId;

	var websiteButtonClass, repoButtonClass;
	if (websiteUrl === '#') {
		websiteButtonClass = overlayWindowHeaderButtonDisabledClasses;
	} else {
		websiteButtonClass = overlayWindowLinkButtonClasses;
	}
	setElementClass('projectWebsiteLinkButton', websiteButtonClass);
	setElementHref('projectWebsiteLinkButton', websiteUrl);

	if (repoUrl === '#') {
		repoButtonClass = overlayWindowHeaderButtonDisabledClasses;
	} else {
		repoButtonClass = overlayWindowLinkButtonClasses;
	}
	setElementClass('projectRepoLinkButton', repoButtonClass);
	setElementHref('projectRepoLinkButton', repoUrl);
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