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