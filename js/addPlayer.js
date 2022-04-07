const form = document.forms[0]

form.addEventListener("submit", submitForm)

async function submitForm(e) {
    e.preventDefault()

    const formData = new FormData(form)

    const playerData = {
        name: formData.get('name'),
        age: formData.get('age'),
        position: formData.get('position'),
    }


    const url = `http://localhost:5000/api/v1/teams/123/players/add`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerData)
    })

    if(response) {
        const data = await response.json()
        
        if(response.status == 400) {
            console.log(data.message)
        }
        else if(response.status == 201) {
            console.log(data.message)
            window.location.href = `./add-player.html`
        }
    }
}