import pandas as pd
from flask_cors import CORS
from flask import Flask, jsonify
from processdata import processdata
app = Flask(__name__)
CORS(app)
@app.route('/displaylocations')
def displaylocations():
    l = processdata()
    return jsonify(l)
if __name__ == '__main__':
    app.run(host = 'localhost', debug = True, port = <port>)
