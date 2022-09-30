document.addEventListener('DOMContentLoaded', () => {
    let cform = document.getElementById('contact-form');
    cform.onsubmit = () => {
        fetch('https://formspree.io/f/maykorpq', {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value

            }),
            mode: 'no-cors'
        })
        .then(data => {
            console.log(data);
            cform.reset();
            document.getElementById('form-send').innerHTML = "Message Sent!";
        });
        return false;
    }
})