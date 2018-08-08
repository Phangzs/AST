from flask import request
from flask import render_template
from flask import Flask
app = Flask(__name__)

@app.route("/",methods = ['POST','GET'])
def hello():
	if request.method == "POST":
		file = request.files["olleh"]
		file.save("raw_input")
		return "Submitted".title()
	return render_template("index.html")