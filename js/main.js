const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box > input");

searchBtn.onclick = () => {
    searchBtn.classList.add("pressed")
    searchBox.classList.add("active");
    cancelBtn.classList.add("active");
};

cancelBtn.onclick = () => {
    searchBtn.classList.remove("pressed");
    searchBox.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchInput.value = "";
};

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
}