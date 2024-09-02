// script.js
document.getElementById('predict-button').addEventListener('click', async () => {
    const Manufacturer = document.getElementById('Manufacturer').value;
    const IntelCore = document.getElementById('IntelCore').value;
    const IntelCoreGen = document.getElementById('IntelCoreGen').value;
    const Ram = document.getElementById('Ram').value;
    const HDD = document.getElementById('HDD').value;
    const SSD = document.getElementById('SSD').value;
    const Graphics = document.getElementById('Graphics').value;
    const ScreenSize = document.getElementById('ScreenSize').value;

    // Check if all fields are selected
    if (!Manufacturer || !IntelCore || !IntelCoreGen || !Ram || !HDD || !SSD || !Graphics || !ScreenSize) {
        document.getElementById('result').textContent = 'Please fill out all fields.';
        return;
    }

    const requestData = {
        Manufacturer,
        IntelCore,
        IntelCoreGen,
        Ram,
        HDD,
        SSD,
        Graphics,
        ScreenSize
    };

    try {
        const response = await fetch('/predict', { // Pointing to the Flask API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('result').textContent = `Estimated Price for the selected Laptop Configuration is: $${result.price}`;
    } catch (error) {
        console.error('Error predicting price:', error);
        document.getElementById('result').textContent = 'Error predicting price. Please try again later.';
    }
});
