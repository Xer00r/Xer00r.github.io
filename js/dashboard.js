window.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".hamburger")
    const burger = document.querySelector(".burger")
    const navbar = document.querySelector(".sidebar")
    const mainContent = document.getElementById("main-content")
    const logoutButton = document.getElementById("sign-out-btn")
    const imageSeelectButton = document.getElementById("image-select-button")
    const clubName = document.getElementById("team_name")
    const managerName = document.getElementById("team_name")
    const team = JSON.parse(localStorage.getItem("team"))
    let isNavOpen = true

    logoutButton.addEventListener("click", logout)
    imageSeelectButton.addEventListener("click", uploadImage)

    const {name, manager} = team
    clubName.textContent = name
    managerName.textContent = manager

    function uploadImage() {
        let input = document.createElement("input")
        input.type = "file"
        input.name = "club_image"
        input.onchange = _ => {
            // you can use this method to get file and perform respective operations
            let file = input.files[0]
            console.log(file)
        }
        input.click()
    }

    function logout() {
        localStorage.removeItem("team")
        window.location.href = `./login.html`
    }

    toggleButton.addEventListener("click", e => {
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
