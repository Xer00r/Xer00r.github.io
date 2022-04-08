const squadContainer = document.getElementById("squad_container")

async function getData() {
    const team = JSON.parse(localStorage.getItem("team"))
    const res = await fetch(
        `https://kobis-global-server.herokuapp.com/api/v1/teams/${team._id}/players`
    )

    let data

    if (res.status === 200) {
        data = await res.json()
        localStorage.setItem("players", JSON.stringify(data))
    }
}

getData()

let arrayOfPlayers = JSON.parse(localStorage.getItem("players"))

const playerIndicator = document.getElementById("player_indicator")

if (arrayOfPlayers.length < 1) {
    playerIndicator.classList.add("show-indicator")
}

arrayOfPlayers.forEach(player => {
    const playerCard = document.createElement("div")
    const playerImageContainer = document.createElement("div")
    const playerProfileContainer = document.createElement("div")
    const playerName = document.createElement("h2")
    const playerPosition = document.createElement("p")
    const playerAge = document.createElement("h3")
    const playerUploadImageButton = document.createElement("button")
    const playerUploadImageButtonIcon = document.createElement("i")
    const playerImage = document.createElement("img")
    playerImage.src = player.profileImageURL
    playerUploadImageButtonIcon.setAttribute("class", "fas fa-camera")
    playerUploadImageButton.setAttribute("class", "upload-btn")
    playerUploadImageButton.addEventListener("click", () => {
        let input = document.createElement("input")
        input.type = "file"
        input.addEventListener("change", uploadImage)

        async function uploadImage(e) {
            const file = e.target.files[0]
            const formData = new FormData()

            formData.append("player-profile-image", file)
            formData.append("json", { hello: "hello" })

            const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/${player.teamID}/players/${player._id}/profile-image/upload`

            await fetch(url, {
                method: "POST",
                body: formData,
            })

            window.location.href = `./squad.html`
        }

        input.click()
    })
    playerUploadImageButton.append(playerUploadImageButtonIcon)
    playerName.textContent = player.name
    playerName.setAttribute("class", "player-name")
    playerAge.setAttribute("class", "player-age")
    playerAge.textContent = player.age
    playerPosition.setAttribute("class", "player-position")
    playerPosition.textContent = player.position
    playerCard.setAttribute("class", "player-card")
    playerImageContainer.setAttribute("class", "player-image")
    playerProfileContainer.setAttribute("class", "player-info")
    playerProfileContainer.append(playerName)
    playerProfileContainer.append(playerAge)
    playerProfileContainer.append(playerPosition)
    playerImageContainer.append(playerUploadImageButton)
    playerImageContainer.append(playerImage)
    playerCard.appendChild(playerImageContainer)
    playerCard.appendChild(playerProfileContainer)
    squadContainer.appendChild(playerCard)
})
