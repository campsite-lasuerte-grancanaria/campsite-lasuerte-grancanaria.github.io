let menuVisibility = false;

document.onclick = function() {
    let excludedElement = document.getElementById('menu-icon');
    if (!excludedElement.contains(event.target)) {
        // Code to execute when clicking outside the excluded element
        document.getElementById("menubox").style.display = "none";
        menuVisibility = false;
    } else {
        if (menuVisibility === false) {
            document.getElementById("menubox").style.display = "grid";
            menuVisibility = true;
        } else {
            document.getElementById("menubox").style.display = "none";
            menuVisibility = false;
        }
    }
}
