const team = localStorage.getItem("team")

if (team) {
    const { _id } = JSON.parse(team)

    localStorage.setItem("team", getTeamInfo(_id))
} else {
    window.location.href = `./login.html`
}

async function getTeamInfo(id) {
    const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/${id}`

    const response = await fetch(url)

    return await response.json()
}
