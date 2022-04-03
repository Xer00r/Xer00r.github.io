window.addEventListener('DOMContentLoaded', () => {
    const form = document.forms[0]
    const errorMessage = document.getElementById('error-msg')

    
    // fucntion to submit form
    const submitForm = async (e) => {
        e.preventDefault()
        
        const formData = new FormData(form)
        
        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/login`

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(userData),
        })

        if (response.status === 200) {
            const result = await response.json()
            localStorage.setItem('team', JSON.stringify(result))
            window.location.href = `./dashboard.html`
        } 
        else if(response.status === 400) window.location.href = `./success.html`
        else if(response.status === 401) {
            const data = response.json()
            const {message} = JSON.parse(JSON.stringify(data))
            errorMessage.textContent = message
            errorMessage.classList.add('show')
            console.log(message)
        }
    }

    form.addEventListener('submit', submitForm)
})