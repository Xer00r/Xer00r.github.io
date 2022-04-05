const squadContainer = document.getElementById("squad_container")

const squad = [
    {
        name: "James Igwe",
        age: 12,
        position: 'RW'
    },
    {
        name: "Maxwell Alexson",
        age: 14,
        position: 'LW'
    },
    {
        name: "Alexis Da Lenglet",
        age: 13,
        position: 'ST'
    },
    {
        name: "James Igwe",
        age: 12,
        position: 'RW'
    },
    {
        name: "Maxwell Alexson",
        age: 14,
        position: 'LW'
    },
    {
        name: "Alexis Da Lenglet",
        age: 13,
        position: 'ST'
    },
    {
        name: "Maxwell Alexson",
        age: 14,
        position: 'LW'
    },
    {
        name: "Alexis Da Lenglet",
        age: 13,
        position: 'ST'
    },
]


const playerIndicator = document.getElementById("player_indicator")

if (squad.length < 1) {
    playerIndicator.classList.add("show-indicator")
}

squad.forEach(player => {
    const playerCard = document.createElement('div')
    const playerImageContainer = document.createElement('div')
    const playerProfileContainer = document.createElement('div')
    const playerName = document.createElement("h2")
    const playerPosition = document.createElement("p")
    const playerAge = document.createElement("h3")
    playerName.textContent = player.name
    playerName.setAttribute('class', 'player-name')
    playerAge.setAttribute('class', 'player-age')
    playerAge.textContent = player.age
    playerPosition.setAttribute('class', 'player-position')
    playerPosition.textContent = player.position
    playerCard.setAttribute('class', 'player-card')
    playerImageContainer.setAttribute('class', 'player-image')
    playerProfileContainer.setAttribute('class', 'player-info')
    playerProfileContainer.append(playerName)
    playerProfileContainer.append(playerAge)
    playerProfileContainer.append(playerPosition)
    playerCard.appendChild(playerImageContainer)
    playerCard.appendChild(playerProfileContainer)
    squadContainer.appendChild(playerCard)
})

console.log(squadContainer)