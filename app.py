
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    """
    Route for the homepage.
    Returns a greeting message.
    """
    return "Hello, Test Taker!"

@app.route('/welcome')
def welcome():
    """
    Route that accepts a 'name' query parameter.
    Returns a JSON message welcoming the test taker.
    """
    name = request.args.get('name')
    if not name:
        # If no name is provided, return an error message
        return jsonify({"error": "Please provide a 'name' query parameter."}), 400
    return jsonify({"message": f"Welcome to the IELTS Speaking Test, {name}!"})

if __name__ == '__main__':
    # Run the app in debug mode for development purposes
    app.run(debug=True)