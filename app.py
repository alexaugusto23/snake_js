from flask import Flask, render_template , redirect, url_for, request

app = Flask(__name__)

@app.route("/", methods=["GET"] )
@app.route("/index", methods=["GET"] )
def index():
    return render_template("index.html")

if __name__ == '__main__':
    port = int(os.environ.get("PORT",5000))
    app.run(debug=True, host='localhost', port=port)