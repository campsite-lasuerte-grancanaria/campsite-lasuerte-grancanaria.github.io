let photocounter;

const photofolder = (numberOfPhotos) => {
    return {
        numberOfPhotos
    }
};

const gallery = photofolder(20);
const defender = photofolder(12);
const bus = photofolder(6);
const studio = photofolder(8);
const tent = photofolder(5);
const space = photofolder(4);
const kitchen = photofolder(7);
const toilet = photofolder(3);
const shower = photofolder(3);

function startphotoshow(foldername, number) {
    photocounter = number;
    currentFolder = foldername;
    document.getElementById("photoshow").style.display = "grid";
    document.getElementById("shownphoto").src = `./images/${foldername}/${photocounter}.jpg`;
}

function changephoto(currentFolder, photonumber, x) {
    photocounter += x;
    
    if (photocounter < 1) {
        photocounter = photonumber;
    } else if (photocounter > photonumber) {
        photocounter = 1;
    }
    document.getElementById("shownphoto").src = `./images/${currentFolder}/${photocounter}.jpg`;
}

document.getElementById("closebutton").onclick = function() {
    document.getElementById("photoshow").style.display = "none";
}


// gallery

if (document.getElementById("previousphotogallery")) {

document.getElementById("previousphotogallery").onclick = function() {
    let photonumber = gallery.numberOfPhotos;
    changephoto('gallery', photonumber, -1);
}
document.getElementById("nextphotogallery").onclick = function() {
    let photonumber = gallery.numberOfPhotos;
    changephoto('gallery', photonumber, 1);
}

for (i=1; i<= 8; i++) {
    let number = i;
    document.getElementById(`gallery${i}`).onclick = function() {
        startphotoshow('gallery', number);
    }
};

if (document.getElementById("gallery9")) {
    for (i=9; i<= gallery.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`gallery${i}`).onclick = function() {
            startphotoshow('gallery', number);
        }
    };
}
}


// defender

if (document.getElementById("previousphotodefender")) {

    document.getElementById("previousphotodefender").onclick = function() {
        let photonumber = defender.numberOfPhotos;
        changephoto('defender', photonumber, -1);
    }
    document.getElementById("nextphotodefender").onclick = function() {
        let photonumber = defender.numberOfPhotos;
        changephoto('defender', photonumber, 1);
    }
    
    for (i=1; i<= defender.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`defender${i}`).onclick = function() {
            startphotoshow('defender', number);
        }
    };
}


// bus

if (document.getElementById("previousphotobus")) {

    document.getElementById("previousphotobus").onclick = function() {
        let photonumber = bus.numberOfPhotos;
        changephoto('bus', photonumber, -1);
    }
    document.getElementById("nextphotobus").onclick = function() {
        let photonumber = bus.numberOfPhotos;
        changephoto('bus', photonumber, 1);
    }
    
    for (i=1; i<= bus.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`bus${i}`).onclick = function() {
            startphotoshow('bus', number);
        }
    };
}


// studio

if (document.getElementById("previousphotostudio")) {

    document.getElementById("previousphotostudio").onclick = function() {
        let photonumber = studio.numberOfPhotos;
        changephoto('studio', photonumber, -1);
    }
    document.getElementById("nextphotostudio").onclick = function() {
        let photonumber = studio.numberOfPhotos;
        changephoto('studio', photonumber, 1);
    }
    
    for (i=1; i<= studio.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`studio${i}`).onclick = function() {
            startphotoshow('studio', number);
        }
    };
}


// tent

if (document.getElementById("previousphototent")) {

    document.getElementById("previousphototent").onclick = function() {
        let photonumber = tent.numberOfPhotos;
        changephoto('tent', photonumber, -1);
    }
    document.getElementById("nextphototent").onclick = function() {
        let photonumber = tent.numberOfPhotos;
        changephoto('tent', photonumber, 1);
    }
    
    for (i=1; i<= tent.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`tent${i}`).onclick = function() {
            startphotoshow('tent', number);
        }
    };
}


// tentspace

if (document.getElementById("previousphotospace")) {

    document.getElementById("previousphotospace").onclick = function() {
        let photonumber = space.numberOfPhotos;
        changephoto('space', photonumber, -1);
    }
    document.getElementById("nextphotospace").onclick = function() {
        let photonumber = space.numberOfPhotos;
        changephoto('space', photonumber, 1);
    }
    
    for (i=1; i<= space.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`space${i}`).onclick = function() {
            startphotoshow('space', number);
        }
    };
}


// kitchen

if (document.getElementById("previousphotokitchen")) {

    document.getElementById("previousphotokitchen").onclick = function() {
        let photonumber = kitchen.numberOfPhotos;
        changephoto('kitchen', photonumber, -1);
    }
    document.getElementById("nextphotokitchen").onclick = function() {
        let photonumber = kitchen.numberOfPhotos;
        changephoto('kitchen', photonumber, 1);
    }
    
    for (i=1; i<= kitchen.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`kitchen${i}`).onclick = function() {
            photocounter = number;
            startphotoshow('kitchen', number);
            document.getElementById("photoshow").style.display = "grid";
        }
    };
}


// toilet

if (document.getElementById("previousphototoilet")) {

    document.getElementById("previousphototoilet").onclick = function() {
        let photonumber = toilet.numberOfPhotos;
        changephoto('toilet', photonumber, -1);
    }
    document.getElementById("nextphototoilet").onclick = function() {
        let photonumber = toilet.numberOfPhotos;
        changephoto('toilet', photonumber, 1);
    }
    
    for (i=1; i<= toilet.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`toilet${i}`).onclick = function() {
            photocounter = number;
            startphotoshow('toilet', number);
            document.getElementById("photoshow").style.display = "grid";
        }
    };
}   


// shower

if (document.getElementById("previousphotoshower")) {

    document.getElementById("previousphotoshower").onclick = function() {
        let photonumber = shower.numberOfPhotos;
        changephoto('shower', photonumber, -1);
    }
    document.getElementById("nextphotoshower").onclick = function() {
        let photonumber = shower.numberOfPhotos;
        changephoto('shower', photonumber, 1);
    }
    
    for (i=1; i<= shower.numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`shower${i}`).onclick = function() {
            photocounter = number;
            startphotoshow('shower', number);
            document.getElementById("photoshow").style.display = "grid";
        }
    };
}
