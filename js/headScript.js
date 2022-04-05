const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/${id}`

fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => {
    console.log(err)
})