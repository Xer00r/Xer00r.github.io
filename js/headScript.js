const teamExists = JSON.parse(localStorage.getItem('team'))

const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/${teamExists._id}`

fetch(url)
.then(res => res.json())
.then(data => {
    localStorage.setItem('team', JSON.stringify(data))
})
.catch(err => {
    console.log(err)
})