function appInit() {
    generatePlaylists();
}

function toggleElement(elementId) {
    let element = document.getElementById(elementId);

    const showElement = () => {
        element.style.visibility = 'visible';
        element.style.display = 'inline-flex';
    };

    const hideElement = () => {
        element.style.visibility = 'hidden';
        element.style.display = 'none';
    }

    if (element != null) {
        if (element.style.visibility == 'hidden') {
            $('#' + elementId).fadeIn(200, showElement);
        } else {
            $('#' + elementId).fadeOut(300, hideElement);
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

window.location.replace("https://clarencesiew.com/");
