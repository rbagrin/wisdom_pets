const hiddenClass = 'hidden';
const shownClass = 'toggled-from-hidden';

function petSectionHover() {
    let children = this.children;
    for(let i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.className === hiddenClass) {
            child.className = shownClass;
        }
    }
}

function petSectionEndHover() {
    let children = this.children;
    for(let i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.className === shownClass) {
            child.className = hiddenClass;
        }
    }
}

(function() {
    let petSections = document.getElementsByClassName('petname');
    for(let i = 0; i < petSections.length; i++) {
        petSections[i].addEventListener('mouseover', petSectionHover);
        petSections[i].addEventListener('mouseout', petSectionEndHover);
    }
}());