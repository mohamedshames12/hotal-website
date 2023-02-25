let navbar = document.querySelector(".navbar");
let menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
})


window.onscroll = () => {
    navbar.classList.remove("active");
}