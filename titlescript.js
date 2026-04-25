let imageNumber = 1;

function changeImage() {
    imageNumber += 1;
    if (imageNumber > 7) {
        imageNumber = 1;
    }
    
    document.getElementById("title-img").src = `./images/title/${imageNumber}.jpg`;
}

setInterval(changeImage, 5000); 
