window.addEventListener("DOMContentLoaded", () => {
    const form = document.forms[0]

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

        const url = `http://localhost:5000/api/v1/teams/register`

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })

        if (response.status === 201) {
            const result = await response.json()
            console.log(result)
            const { clubName, managerName, email, id, message } = result

            localStorage.setItem(
                "team",
                JSON.stringify({ clubName, managerName, email, id })
            )

            window.location.href = `/success.html`
        }
    }

    form.addEventListener("submit", submitForm)
})
