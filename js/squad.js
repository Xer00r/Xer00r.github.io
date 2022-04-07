window.onload = e => {
    const squadContainer = document.getElementById("squad_container")

    async function getData() {
        const res = await fetch(
            "http://localhost:5000/api/v1/teams/123/players"
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
        playerUploadImageButtonIcon.setAttribute("class", "fas fa-camera")
        playerUploadImageButton.setAttribute("class", "upload-btn")
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
        playerCard.appendChild(playerImageContainer)
        playerCard.appendChild(playerProfileContainer)
        squadContainer.appendChild(playerCard)
    })
}
