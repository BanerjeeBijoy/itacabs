document.addEventListener('DOMContentLoaded', function() {
    const cabButton = document.getElementById('cab-button');
    const busButton = document.getElementById('bus-button');
    const cabForm = document.getElementById('cab-booking');
    const busForm = document.getElementById('bus-booking');

    cabButton.addEventListener('click', () => {
        cabButton.classList.add('active');
        busButton.classList.remove('active');
        cabForm.classList.add('active');
        busForm.classList.remove('active');
    });

    busButton.addEventListener('click', () => {
        busButton.classList.add('active');
        cabButton.classList.remove('active');
        busForm.classList.add('active');
        cabForm.classList.remove('active');
    });
});
document.querySelector('form').addEventListener('submit', function(event) {
    const pickup = document.getElementById('cab-pickup').value;
    const dropoff = document.getElementById('cab-dropoff').value;
    const carType = document.getElementById('car-type').value;
    const passengers = document.getElementById('passengers').value;

    if (!pickup || !dropoff || !carType || !passengers) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Stop form submission
    }
});
