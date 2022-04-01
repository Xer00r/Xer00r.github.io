window.addEventListener('DOMContentLoaded', () => {
    const form = document.forms[0]
    console.log('hello')

    
    // fucntion to submit form
    const submitForm = (e) => {
        e.preventDefault()
        
        const formData = new FormData(form)
        
        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log(userData)
    }

    form.addEventListener('submit', submitForm)
})