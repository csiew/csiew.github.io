function appInit() {
    generatePlaylists();
}

function toggleElement(elementId) {
    let element = document.getElementById(elementId);
    if (element != null) {
        if (element.style.visibility == 'hidden') {
            element.style.visibility = 'visible';
            element.style.display = 'flex';
        } else {
            element.style.visibility = 'hidden';
            element.style.display = 'none';
        }
    }
}

function togglePage(pageId) {
    let pageElements = document.getElementsByClassName('page-section');
    for (const pageElement of pageElements) {
        if (pageElement.id == pageId) {
            pageElement.className = 'page-section page-section-visible';
        } else {
            pageElement.className = 'page-section page-section-hidden';
        }
    }
}