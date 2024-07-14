// dashboard.js

$(document).ready(function() {
    // Set welcome message
    const username = 'eze'; // Replace with actual logic to fetch username
    $('#username').text(username);

    // Set profile picture
    const profilePictureUrl = 'assets/images/profile.jpg'; // Replace with actual logic to fetch profile picture URL
    $('#profile-picture').attr('src', profilePictureUrl);

    // Fetch data and update dashboard
    function fetchData() {
        const authToken = getAuthToken();

        // Fetch energy saved (kWh)
        $.ajax({
            url: 'http://localhost:4444/api/energy-saved', // Placeholder endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            success: function(response) {
                $('#energy-saved').text(`${response.data} kWh`);
            },
            error: function() {
                console.error('Failed to fetch energy saved data.');
            }
        });

        // Fetch money saved ($)
        $.ajax({
            url: 'http://localhost:4444/api/money-saved', // Placeholder endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            success: function(response) {
                $('#money-saved').text(`$${response.data}`);
            },
            error: function() {
                console.error('Failed to fetch money saved data.');
            }
        });

        // Fetch carbon footprint (kg)
        $.ajax({
            url: 'http://localhost:4444/api/carbon-footprint', // Placeholder endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            success: function(response) {
                $('#carbon-footprint').text(`${response.data} kg`);
            },
            error: function() {
                console.error('Failed to fetch carbon footprint data.');
            }
        });

        // Fetch energy usage (status)
        $.ajax({
            url: 'http://localhost:4444/api/energy-usage', // Placeholder endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            success: function(response) {
                $('#energy-usage').text(response.data);
            },
            error: function() {
                console.error('Failed to fetch energy usage data.');
            }
        });

        // Fetch user dynamics chart data
        $.ajax({
            url: 'http://localhost:4444/api/user-dynamics', // Placeholder endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            success: function(response) {
                const chartData = response.data; // Replace with actual chart data
                renderChart(chartData);
            },
            error: function() {
                console.error('Failed to fetch user dynamics data.');
            }
        });
    }

    // Function to render the user dynamics chart
    function renderChart(chartData) {
        var ctx = document.getElementById('user-chart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels, // Replace with actual chart labels
                datasets: [{
                    label: 'User Dynamics',
                    data: chartData.data, // Replace with actual chart data
                    borderColor: '#007bff',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Initial fetch of data
    fetchData();

    // Date selector change event
    $('#date-selector').on('change', function() {
        // Fetch data based on selected date
        fetchData();
    });
});
