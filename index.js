// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        

        const body = document.querySelector('body');
        const newId = document.createElement('p');
        newId.textContent = `New user ID: ${data.id}`;
        body.appendChild(newId);
    })
    .catch(error => {
        console.error('Error:', error);

        const body = document.querySelector('body');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        body.appendChild(errorMessage);
    });
}
