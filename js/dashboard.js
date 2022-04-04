window.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".hamburger")
    const burger = document.querySelector(".burger")
    const navbar = document.querySelector(".sidebar")
    const mainContent = document.getElementById("main-content")
    const logoutButton = document.getElementById("sign-out-btn")
    const imageSeelectButton = document.getElementById("image-select-button")
    const clubName = document.getElementById("team_name")
    const managerName = document.getElementById("manager_name")
    const profileImage = document.getElementById("profile-image")
    const team = JSON.parse(localStorage.getItem("team"))
    let isNavOpen = true

    logoutButton.addEventListener("click", logout)
    imageSeelectButton.addEventListener("click", selectImage)

    const { name, manager, _id } = team
    clubName.textContent = name
    managerName.textContent = manager

    function selectImage() {
        let input = document.createElement("input")
        input.type = "file"
        input.addEventListener('change', uploadImage)

        async function uploadImage(e) {
            const file = e.target.files[0]
            const formData = new FormData()

            formData.append("myImage", file)
            formData.append("json", {"hello" : "hello"})
            
            const url = `https://kobis-global-server/api/v1/teams/${_id}/profile-image/upload`

            const response = await fetch(url, {
                method: 'POST',
                body: formData
            })

            const data = await response.json()
            localStorage.setItem('teamImageURL', JSON.stringify(data))
            
            window.location.href = `./dashboard.html`
            
        }

        input.click()
    }

    let imageSRC = JSON.parse(localStorage.getItem("teamImageURL"))
    profileImage.src = imageSRC.imageURL
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
