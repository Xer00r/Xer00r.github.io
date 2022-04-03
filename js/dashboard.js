window.addEventListener("DOMContentLoaded", () => {
    const team = localStorage.getItem("team")
    const { manager } = JSON.parse(team)
    document.querySelector("p").textContent += manager
})
