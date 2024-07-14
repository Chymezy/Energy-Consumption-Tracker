// setting.js

// Function to set or update the profile picture
function setProfilePicture(formData) {
    $.ajax({
        url: 'http://localhost:4444/api/user/profile-picture',
        method: 'POST', // or 'PUT' if updating
        headers: {
            'Authorization': `Bearer ${getAuthToken()}`
        },
        processData: false,
        contentType: false,
        data: formData,
        success: function(response) {
            alert('Profile picture updated successfully!');
            // Optionally update UI or handle response
        },
        error: function(xhr, status, error) {
            console.error('Error setting profile picture:', error);
            // Handle error, show message, etc.
        }
    });
}

// Event listener for profile picture form submission
$('#profile-form').submit(function(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', $('#profile-picture')[0].files[0]);
    setProfilePicture(formData);
});

// Function to set or update energy benchmark
function setEnergyBenchmark(value) {
    $.ajax({
        url: 'http://localhost:4444/api/energy_benchmarks',
        method: 'POST', // or 'PUT' if updating
        headers: {
            'Authorization': `Bearer ${getAuthToken()}`
        },
        contentType: 'application/json',
        data: JSON.stringify({ value: value }),
        success: function(response) {
            alert('Energy benchmark set successfully!');
            // Optionally update UI or handle response
        },
        error: function(xhr, status, error) {
            console.error('Error setting energy benchmark:', error);
            // Handle error, show message, etc.
        }
    });
}

// Event listener for energy benchmark form submission
$('#energy-benchmark-form').submit(function(event) {
    event.preventDefault();
    const energyBenchmark = $('#energy-benchmark').val();
    setEnergyBenchmark(energyBenchmark);
});

// Function to save or update city settings
function saveCitySettings(data) {
    $.ajax({
        url: 'http://localhost:4444/api/cities',
        method: 'POST', // or 'PUT' if updating
        headers: {
            'Authorization': `Bearer ${getAuthToken()}`
        },
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            alert('City settings saved successfully!');
            // Optionally update UI or handle response
        },
        error: function(xhr, status, error) {
            console.error('Error saving city settings:', error);
            // Handle error, show message, etc.
        }
    });
}

// Event listener for city settings form submission
$('#city-settings-form').submit(function(event) {
    event.preventDefault();
    const city = $('#city').val();
    const country = $('#country').val();
    const costElectricity = $('#cost-electricity').val();
    const costFuel = $('#cost-fuel').val();
    const electricityAvailability = $('#electricity-availability').val();
    const cityData = {
        city: city,
        country: country,
        cost_of_electricity: parseFloat(costElectricity),
        cost_of_fuel: parseFloat(costFuel),
        electricity_availability: electricityAvailability
    };
    saveCitySettings(cityData);
});
