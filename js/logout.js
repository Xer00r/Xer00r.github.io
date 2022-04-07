function logout() {
    localStorage.removeItem("team")
    localStorage.removeItem("players")
    window.location.href = `./login.html`
}