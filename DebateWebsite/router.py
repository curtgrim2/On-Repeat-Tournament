from flask import Flask,render_template,request,jsonify,session
import pyodbc

#It all starts here...

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Required for session management
app.config['SESSION_TYPE'] = 'filesystem'  # Store session data on the server's filesystem

dbsetup = pyodbc.connect("Driver={ODBC Driver 17 for SQL Server};" 
                         "Server=LAPTIZZY\SQLEXPRESS;" 
                         "Database=o_r_tournament;"
                         "Trusted_Connection=yes;") #Format must be exactly like this, down to the spacing and new lines


cursor = dbsetup.cursor()
#cursor.execute('')

@app.route("/")
def home():
    #return render_template('testtournament.html')
    return render_template('gameprep.html')


#@app.route('/',methods=["GET","POST"])
@app.route('/startgame',methods=['POST','GET'])



def startgame():
    personnum=0
    allthenames =[]
    allurls = []
    
    while f'name{personnum}' in request.form: #name{personnum} are the users unique identifiers 
            allthenames.append(request.form[f'name{personnum}'])      #We're getting the variables in the form withrequest.form 
            personnum += 1       
        #print(allthenames)
            totalsongs = int(request.form.get("songspereach")) * int(request.form.get("numofusers"))

        #print(totalsongs)
            for x in range(totalsongs):
                allurls.append(request.form.get(f'namenum{x}')) #Pushing each song URL from 
                #print(request.form.get(f'namenum{x}')) 
                x+=1
    
    if request.form.get("checkdraftbut")=="notclicked":#if request.method == "POST":            
        print(request.form.get("checkdraftbut"))
        return render_template('gametime.html',totalusers = int(request.form.get("numofusers")),songspereach=request.form.get("songspereach"),allnames=allthenames,utubeurls=allurls)
    else:
        iterthrsongs=0
        print("Draft save button Clicked")
        print(allurls)
        print(allthenames)
        print(totalsongs)
        for x in range(len(allthenames)):
            songsperuser =totalsongs//len(allthenames) # Double /:To prevent float TypeError
            #print(songsperuser)
            for y in range(songsperuser):
                cursor.execute("""INSERT INTO saveddrafts(Name,SongURL,Notes,EntryNum)VALUES(?, ?, ?, ?)""",(allthenames[x],allurls[iterthrsongs],"",int(iterthrsongs+1)))
                #print("Name:" + allthenames[x] + "; Song URL:" + allurls[iterthrsongs] + " - " + str(iterthrsongs))
                iterthrsongs+=1
                
        cursor.commit()
        cursor.close()

        return 'DRAFT SAVED'
        
            
            
        
        
        
        
 
@app.route('/showresults',methods=['GET','POST'])       
def showresults():
    print("Going to results page")
    #print(request.form.get('winnertiers'))
    print(request.form.get('winnernames'))
    
    eachtier = request.form.get('winnertiers')
    
    '''for x in request.form.get('winnertiers'):
        print(x)'''
    return render_template('resultspage.html',listoftiers=eachtier,namesintiers=request.form.get('winnernames'))   


@app.route('/savethisdraft',methods=['GET','POST'])
def savethisdraft():
    print(request.form.get('tiers'))
    print("SAVE THIS DRAFT")
 
        
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
