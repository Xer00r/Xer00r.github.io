window.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle")
    const navbar = document.querySelector(".sidebar")
    const mainContent = document.getElementById("main-content")
    let isNavOpen = true
    
    toggleButton.addEventListener("click", () => {
        if(!isNavOpen) {
            navbar.classList.add("show-nav")
            mainContent.classList.remove("nav-closed")
            isNavOpen = true
        } else {
            navbar.classList.remove("show-nav")
            mainContent.classList.add("nav-closed")
            isNavOpen = false
        }
    })
})
