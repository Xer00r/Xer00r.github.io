window.addEventListener("DOMContentLoaded", () => {
    const form = document.forms[0]
    const errorMessage = document.getElementById("error-msg")

    // fucntion to submit form
    const submitForm = async e => {
        e.preventDefault()

        const formData = new FormData(form)

        const userData = {
            clubName: formData.get("clubName"),
            managerName: formData.get("managerName"),
            email: formData.get("email"),
            clubPhone: formData.get("clubPhone"),
            password: formData.get("password"),
        }

        const url = `https://kobis-global-server.herokuapp.com/api/v1/teams/register`

        if (userData.password.length >= 8) {

            if (userData.password === formData.get("confirmPassword")) {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify(userData),
                })
    
                if (response.status === 201) {
                    const result = await response.json()
                    window.location.href = `./success.html`
                }
            } else {
                errorMessage.textContent = `Passwords do not match!`
                errorMessage.classList.add('show')
            }
        } else {
            errorMessage.textContent = `Password too short!`
            errorMessage.classList.add('show')
        }
        
    }

    form.addEventListener("submit", submitForm)
})
