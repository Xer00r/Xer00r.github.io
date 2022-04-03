window.addEventListener("DOMContentLoaded", () => {
    const team = localStorage.getItem("team")
    const nameSpan = document.querySelector('span')
    const { manager } = JSON.parse(team)
    nameSpan.textContent = manager + '!'
})
