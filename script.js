const images = [
"CodeAlpha Proj/planetimg1.jpg",
"CodeAlpha Proj/planetimg2.jpg",
"CodeAlpha Proj/planetimg3.jpg",
"CodeAlpha Proj/planetimg4.jpg",
"CodeAlpha Proj/planetimg5.jpg",
"CodeAlpha Proj/planetimg6.jpg",
"CodeAlpha Proj/planetimg7.jpg",
"CodeAlpha Proj/planetimg8.jpg",
"CodeAlpha Proj/planetimg9.jpg",
"CodeAlpha Proj/planetimg10.jpg",

"CodeAlpha Proj/oceanimg1.jpg",
"CodeAlpha Proj/oceanimg2.jpg",
"CodeAlpha Proj/oceanimg3.jpg",
"CodeAlpha Proj/oceanimg4.jpg",
"CodeAlpha Proj/oceanimg5.jpg",
"CodeAlpha Proj/oceanimg6.jpg",
"CodeAlpha Proj/oceanimg7.jpg",
"CodeAlpha Proj/oceanimg8.jpg",
"CodeAlpha Proj/oceanimg9.jpg",
"CodeAlpha Proj/oceanimg10.jpg",

"CodeAlpha Proj/natureimg1.jpg",
"CodeAlpha Proj/natureimg2.jpg",
"CodeAlpha Proj/natureimg3.jpg",
"CodeAlpha Proj/natureimg4.jpg",
"CodeAlpha Proj/natureimg5.jpg",
"CodeAlpha Proj/natureimg6.jpg",
"CodeAlpha Proj/natureimg7.jpg",
"CodeAlpha Proj/natureimg8.jpg",
"CodeAlpha Proj/natureimg9.jpg",
"CodeAlpha Proj/natureimg10.jpg",

"CodeAlpha Proj/birdsimg1.jpg",
"CodeAlpha Proj/birdsimg2.jpg",
"CodeAlpha Proj/birdsimg3.jpg",
"CodeAlpha Proj/birdsimg4.jpg",
"CodeAlpha Proj/birdsimg5.jpg",
"CodeAlpha Proj/birdsimg6.jpg",
"CodeAlpha Proj/birdsimg7.jpg",

];

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery img");

let currentIndex = 0;

// Open selected image
function openLightbox(index) {
    currentIndex = index;

    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src =
        galleryImages[currentIndex].getAttribute("src");
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Previous / Next image
function changeImage(step) {

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        galleryImages[currentIndex].getAttribute("src");
}

// Filter images
function filterImages(category) {

    const gallery = document.querySelectorAll(".image");

    gallery.forEach(item => {

        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

}

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function (e) {

    if (e.target.id === "lightbox") {
        closeLightbox();
    }

});