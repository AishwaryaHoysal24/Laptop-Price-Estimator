# Laptop-Price-Estimator
This project is a Flask-based web application that predicts the price of a laptop based on various hardware specifications.

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" alt="Laptop Price Estimator Demo" width="600" />
</p>

## Project Structure

```plaintext
LAPTOP_PRED
│
├── models
│   └── adaboost_model.pkl
├── static
│   ├── css
│   │   └── styles.css
│   ├── images
│   │   └── background.jpeg
│   └── js
│       └── script.js
├── templates
│   └── index.html
├── app.py
├── README.md
└── requirements.txt
```


## Getting Started
Prerequisites:
Make sure you have Python installed on your system. You can download it from python.org

## Installation
1. Clone the repository:

```bash
git clone https://github.com//laptop-price-estimator.git
cd laptop-price-estimator
```
2. Create and activate a virtual environment:

```bash
python -m venv venv
```
On Windows:

```bash
venv\Scripts\activate
```
On macOS/Linux:

```bash
source venv/bin/activate
```
3. Install the required packages:

```bash
pip install -r requirements.txt
```
## Running the Application
1. Start the Flask server:

```bash
python app.py
```
2. Open your web browser and navigate to it

3. Using the application:
Select the laptop features from the dropdowns, such as Manufacturer, Intel Core, RAM, HDD, SSD, Graphics, and Screen Size.
Click on the Predict Price button at the bottom of the form.
The estimated laptop price will be displayed below the button.

## Model and Prediction
The application loads a pre-trained AdaBoost model from the models directory. The model predicts the laptop price based on the input features selected in the web interface.

## File Overview
- app.py: The main Flask application that serves the web pages and handles prediction requests.
- index.html: The HTML file for the web interface.
- styles.css: The stylesheet for the web interface.
- script.js: The JavaScript file that handles the form submission and interacts with the Flask API.
- adaboost_model.pkl: The pre-trained AdaBoost model used for predictions.


## Generating requirements.txt
You can generate the `requirements.txt` file by running the following command in your project directory with the virtual environment activated:

```bash
pip freeze > requirements.txt
```
Make sure to update the actual versions based on what pip freeze outputs for your environment.
