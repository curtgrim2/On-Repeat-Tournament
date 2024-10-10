from flask import Flask,render_template,request,jsonify,session
import pyodbc

#It all starts here...

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Required for session management
app.config['SESSION_TYPE'] = 'filesystem'  # Store session data on the server's filesystem


@app.route("/")
def home():
    #return render_template('testtournament.html')
    return render_template('gameprep.html')


#@app.route('/',methods=["GET","POST"])
@app.route('/startgame',methods=['POST','GET'])


def startgame():
    if request.method == "POST":
        personnum=0
        allthenames =[]
        allurls = []
        while f'name{personnum}' in request.form:
            allthenames.append(request.form[f'name{personnum}'])       
            personnum += 1       
        print(allthenames)
        totalsongs = int(request.form.get("songspereach")) * int(request.form.get("numofusers"))
        #for x in totalsongs:
        print(totalsongs)
        for x in range(totalsongs):
            allurls.append(request.form.get(f'namenum{x}'))
            print(request.form.get(f'namenum{x}')) # `namenum${x}`
            x+=1
        '''We probably don't need to create a new dat structure to split the songs up; we can just note how many songs per 
        user and then assign them by the order of the names (f.e., If John is the first name that is entered and there is 4 songs per user, the first 4 songs will be 
        acknowledged as John's)'''
        return render_template('gametime.html',totalusers = int(request.form.get("numofusers")),songspereach=request.form.get("songspereach"),allnames=allthenames,utubeurls=allurls)
 
@app.route('/seeresults',methods=['GET','POST'])       
def showresults():
    print("Lets see the results")

    return render_template('resultspage.html')    
        
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
