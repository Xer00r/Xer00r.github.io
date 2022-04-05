window.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("sign-out-btn")
    const imageSeelectButton = document.getElementById("image-select-button")
    const clubName = document.getElementById("team_name")
    const managerName = document.getElementById("manager_name")
    const profileImage = document.getElementById("profile-image")
    const team = JSON.parse(localStorage.getItem("team"))

    logoutButton.addEventListener("click", logout)
    imageSeelectButton.addEventListener("click", selectImage)

    const { name, manager, _id, profileImageURL } = team
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
            
            const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/${_id}/profile-image/upload`

            await fetch(url, {
                method: 'POST',
                body: formData
            })
            
            window.location.href = `./index.html`
            
        }

        input.click()
    }

    profileImage.src = profileImageURL
    

    function logout() {
        localStorage.removeItem("team")
        window.location.href = `./login.html`
    }
})
