var btn = document.querySelector(".search__btn");
var popup = document.querySelector(".modal-content");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        }
    }
});
