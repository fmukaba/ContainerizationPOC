from flask import Flask, jsonify
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/') 
@cross_origin() 
def home():
    # response = jsonify(data=[1,2,3])
    # response.headers.add("Access-Control-Allow-Origin", "*")
    # return response
    return json.dumps([1,2,3])

@app.route('/user/<int:id>', methods=['POST'])  
def userData(id):
    return json.dumps([f"Here is the info on the user with id: {id}"])

