const toggleButton = document.querySelector(".hamburger")
const burger = document.querySelector(".burger")
const navbar = document.querySelector(".sidebar")
const mainContent = document.getElementById("main-content")
let isNavOpen = true

toggleButton.addEventListener("click", e => {
    console.log("clicked " + Date.now())
    if (!isNavOpen) {
        navbar.classList.add("show-nav")
        mainContent.classList.remove("nav-closed")
        burger.classList.add("active")
        isNavOpen = true
    } else {
        navbar.classList.remove("show-nav")
        mainContent.classList.add("nav-closed")
        burger.classList.remove("active")
        isNavOpen = false
    }
})
