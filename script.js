console.log("Image Gallery JavaScript connected!");

const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

images.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentIndex = index;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";

    });

});
closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});
function showImage(index) {

    if (index < 0) {
        currentIndex = images.length - 1;
    } 
    else if (index >= images.length) {
        currentIndex = 0;
    } 
    else {
        currentIndex = index;
    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
}


// Previous button
prevBtn.addEventListener("click", function() {
    showImage(currentIndex - 1);
});


// Next button
nextBtn.addEventListener("click", function() {
    showImage(currentIndex + 1);
});
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

});