from flask import render_template
from web import app
import os
@app.route("/")
def home():
    img_path = os.path.join(os.path.dirname(__file__),'static','work')
    images = os.listdir(img_path)
    return render_template("home.html", title="Home",images = images)