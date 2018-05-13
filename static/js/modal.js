// Get the modal
const modal = document.getElementById('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgs = document.querySelectorAll('figure img');
let modalImg = document.getElementById("modal-img");
let captionText = document.getElementById("caption");
Array.from(imgs).forEach(img => {
    img.addEventListener('click', function (event) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};