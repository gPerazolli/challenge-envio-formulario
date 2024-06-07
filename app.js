document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

   const names = [
        document.getElementById("nome1").value,
        document.getElementById("nome2").value,
        document.getElementById("nome3").value,
        document.getElementById("nome4").value,
   ];

   const message = document.getElementById("message").value;

    const data ={
        'names': names,
        'message': message
    };

    fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Success: ' + JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error:', error);
    });

});