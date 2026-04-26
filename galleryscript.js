let photocounter;
let folder;
let numberOfPhotos;

function startphotoshow(number) {
    photocounter = number;
    document.getElementById("photoshow").style.display = "grid";
    document.getElementById("shownphoto").src = `./images/${folder}/${photocounter}.jpg`;
}

function changephoto(x) {
    photocounter += x;
    
    if (photocounter < 1) {
        photocounter = numberOfPhotos;
    } else if (photocounter > numberOfPhotos) {
        photocounter = 1;
    }
    document.getElementById("shownphoto").src = `./images/${folder}/${photocounter}.jpg`;
}


document.getElementById("closebutton").onclick = function() {
    document.getElementById("photoshow").style.display = "none";
}

document.getElementById("previousphoto").onclick = function() {
    changephoto(-1);
}
document.getElementById("nextphoto").onclick = function() {
    changephoto(1);
}


// gallery

if (document.getElementById("gallery1")) {

    folder = 'gallery';
    numberOfPhotos = 20;

    for (i=1; i<= 8; i++) {
        let number = i;
        document.getElementById(`gallery${number}`).onclick = function() {
            startphotoshow(number);
        }
    };

    if (document.getElementById("gallery9")) {
        for (i=9; i<= numberOfPhotos; i++) {
            let number = i;
            document.getElementById(`gallery${number}`).onclick = function() {
                startphotoshow(number);
            }
        };
    } 
    
};


// defender

if (document.getElementById("defender1")) {

    folder = 'defender';
    numberOfPhotos = 12;

    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`defender${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}


// bus

if (document.getElementById("bus1")) {

    folder = 'bus';
    numberOfPhotos = 6;
    
    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`bus${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}


// studio

if (document.getElementById("studio1")) {

    folder = 'studio';
    numberOfPhotos = 8;
    
    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`studio${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}


// tent

if (document.getElementById("tent1")) {

    folder = 'tent';
    numberOfPhotos = 5;

    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`tent${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}


// tentspace

if (document.getElementById("space1")) {

   folder = 'space';
   numberOfPhotos = 4;

    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`space${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}


// kitchen

if (document.getElementById("kitchen1")) {

    folder = 'kitchen';
    numberOfPhotos = 7;

    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`kitchen${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}


// toilet

if (document.getElementById("toilet1")) {

    folder = 'toilet';
    numberOfPhotos = 3;

    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`toilet${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}   


// shower

if (document.getElementById("shower1")) {

    folder = 'shower';
    numberOfPhotos = 3;
    
    for (i=1; i<= numberOfPhotos; i++) {
        let number = i;
        document.getElementById(`shower${number}`).onclick = function() {
            startphotoshow(number);
        }
    };
}