from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)

# Load the trained model
with open('models/adaboost_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Extract features from the request data
    features = [
        data['Manufacturer'], data['IntelCore'], data['IntelCoreGen'],
        data['Ram'], data['HDD'], data['SSD'], data['Graphics'], data['ScreenSize']
    ]
    
    # Predict the price using the model
    predicted_price = model.predict([features])[0]
    
    # Round the predicted price to 2 decimal places
    predicted_price_rounded = round(predicted_price, 2)
    
    return jsonify({'price': predicted_price_rounded})

if __name__ == '__main__':
    app.run(debug=True)
