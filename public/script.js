document.addEventListener('DOMContentLoaded', () => {
    const carListElement = document.getElementById('car-list');
    const carForm = document.getElementById('car-form');

    // Function to fetch cars and update the car list
    function fetchCars() {
        fetch('/api/cars')
            .then(response => response.json())
            .then(cars => {
                carListElement.innerHTML = cars.map(car => `
                    <div>
                        <h3>${car.name}</h3>
                        <p>Year: ${car.year}</p>
                        <p>Price: $${car.price}</p>
                    </div>
                `).join('');
            });
    }

    // Fetch and display cars on page load
    fetchCars();

    // Handle form submission to add a new car
    if (carForm) {
        carForm.addEventListener('submit', event => {
            event.preventDefault();
            const name = document.getElementById('car-name').value;
            const year = document.getElementById('car-year').value;
            const price = document.getElementById('car-price').value;

            fetch('/api/cars', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, year, price })
            })
            .then(response => response.json())
            .then(() => {
                fetchCars();
                carForm.reset();
            });
        });
    }
});
