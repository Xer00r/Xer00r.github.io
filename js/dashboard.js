window.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".hamburger")
    const burger = document.querySelector(".burger")
    const navbar = document.querySelector(".sidebar")
    const mainContent = document.getElementById("main-content")
    const logoutButton = document.getElementById("sign-out-btn")
    let isNavOpen = true

    logoutButton.addEventListener("click", logout)

    function logout() {
        localStorage.removeItem("team")
        window.location.href = `./login.html`
    }

    toggleButton.addEventListener("click", (e) => {
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
})
