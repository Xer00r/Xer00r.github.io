window.addEventListener("DOMContentLoaded", () => {
    const team = localStorage.getItem("team")
    const { managerName } = JSON.parse(team)
    document.querySelector("p").textContent += managerName
})
