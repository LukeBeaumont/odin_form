const inputs = document.querySelectorAll(".inputs");
const labels = document.querySelector(".label-start")

function handleClick(e) {
    //make function add class to label
    labels.classList.add(".label-finish");
    console.log(e.currentTarget);
}

inputs.forEach(input => input.addEventListener("click", handleClick))