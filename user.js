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

    // Add an event listener for the bus form submission
    document.getElementById('bus-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const busPickup = document.getElementById('bus-pickup').value;
        const busDropoff = document.getElementById('bus-dropoff').value;
        const busDatetime = document.getElementById('bus-datetime').value;

        // Check if all fields are filled
        if (!busPickup || !busDropoff || !busDatetime) {
            alert('Please fill out all fields.');
            return; // Exit the function if validation fails
        }

        // Redirect to the available buses page
        window.location.href = 'availbus.html';
    });
});
