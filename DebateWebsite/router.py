from flask import Flask,render_template,request,jsonify,session
import pyodbc

#It all starts here...

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Required for session management
app.config['SESSION_TYPE'] = 'filesystem'  # Store session data on the server's filesystem


@app.route("/")
def home():
    #return render_template('testtournament.html')
    return render_template('gametime.html')


#@app.route('/',methods=["GET","POST"])
@app.route('/startgame',methods=['POST','GET'])


def startgame():
    if request.method == "POST":
        personnum=0
        allthenames =[]
        while f'name{personnum}' in request.form:
            allthenames.append(request.form[f'name{personnum}'])       
            personnum += 1
        print(allthenames)
        #session['allnames'] = allthenames
        return render_template('testtournament.html',totalusers = int(request.form.get("numofusers")),songspereach=request.form.get("songspereach"),allnames=allthenames)
        #session.get('allnames',[])
        
        
'''def startgame():
    try:
        data = request.json

        if not data:
            return jsonify({"status": "error", "message": "No data received"}), 400
        
        return jsonify({"status": "success", "data": data}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500'''
 
    
'''@app.route("/startgame")
def thegame():
    return'''
    
@app.route("/testarea")
def testarea():
        return render_template('testtournament.html')
    


if __name__ == "__main__":
    app.run(debug=True)