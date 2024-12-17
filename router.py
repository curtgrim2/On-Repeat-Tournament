from flask import Flask,render_template,request,jsonify,session,redirect
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

names1=[]
url1=[]
notes1=[]
entrynum1=[]
songsperuser1=[]
numofusers1=[]


'''cursor.execute("SELECT * FROM saveddrafts")
for row in cursor:
        names1.append(row[1])
        url1.append(row[2])
        notes1.append(row[3])
        entrynum1.append(row[4])
        songsperuser1.append(row[5])
        numofusers1.append(row[6])'''

@app.route("/")
def home():
    names1=[]
    url1=[]
    notes1=[]
    entrynum1=[]
    songsperuser1=[]
    numofusers1=[]
    cursor.execute("SELECT * FROM saveddrafts")
    for row in cursor:
        names1.append(row[1])
        url1.append(row[2])
        notes1.append(row[3])
        entrynum1.append(row[4])
        songsperuser1.append(row[5])
        numofusers1.append(row[6])
        
    #print(names1)
    return render_template('gameprep.html',draftnames=names1,drafturls=url1,draftnotes=notes1,songsperuser=songsperuser1,numofusers=numofusers1)


#@app.route('/',methods=["GET","POST"])
@app.route('/startgame',methods=['POST','GET'])



def startgame():
    personnum=0
    allthenames =[]
    allurls = []
    thenotes=[]
    
    print(request.form.get(f'namenum{1}'))

    while f'name{personnum}' in request.form: #name{personnum} are the users unique identifiers 
            allthenames.append(request.form[f'name{personnum}'])      #We're getting the variables in the form withrequest.form 
            #print(allthenames[personnum])
            personnum += 1       
            totalsongs = int(request.form.get("songspereach")) * int(request.form.get("numofusers"))
    for x in range(totalsongs):
        allurls.append(request.form.get(f'namenum{x}')) #Pushing each song URL from 
        thenotes.append(request.form.get(f'notes4song{x}'))
        print(allurls[x])
        x+=1
    print(totalsongs)
    print(thenotes)
    if request.form.get("checkdraftbut")=="notclicked":#if request.method == "POST":    
        '''print('RESULTS SHOULD BE HERE')        
        print(request.form.get("checkdraftbut"))
        print(allthenames)
        print(allurls)'''
        #print(allurls)
        #print("DONE")
        #return "TEST"
        return render_template('gametime.html',totalusers = int(request.form.get("numofusers")),songspereach=request.form.get("songspereach"),allnames=allthenames,utubeurls=allurls,thenotes=thenotes)
    else:
        iterthrsongs=0
        print("Draft save button Clicked")
        print(allurls)
        print(allthenames)
        print(totalsongs)
        
        
        cursor = dbsetup.cursor()

        cursor.execute("DELETE FROM saveddrafts;")
        cursor.commit()
        for x in range(len(allthenames)):
            songsperuser =totalsongs//len(allthenames) # Double /:To prevent float TypeError
            #print(songsperuser)
            for y in range(songsperuser):
                cursor.execute("""INSERT INTO saveddrafts(Name,SongURL,Notes,EntryNum,SongsperUser,NumofUsers)VALUES(?, ?, ?, ?, ?, ?)""",(allthenames[x], allurls[iterthrsongs], thenotes[iterthrsongs],int(iterthrsongs+1), songsperuser, len(allthenames))) #thenotes[iterthrsongs]
                #print("Name:" + allthenames[x] + "; Song URL:" + allurls[iterthrsongs] + " - " + str(iterthrsongs))
                iterthrsongs+=1
                
        cursor.commit()    
        cursor.close()
        return redirect('/')
        #return 'DRAFT SAVED'
        #return render_template('gameprep.html',draftnames=names1,drafturls=url1,songsperuser=songsperuser1,numofusers=numofusers1)
        #return render_template('gameprep.html')#return 'DRAFT SAVED'
        
            
            
        
        
        
        
 
@app.route('/showresults',methods=['GET','POST'])       
def showresults():
    print("Going to results page")
    #print(request.form.get('winnertiers'))
    print(request.form.get("bottomtier"))
    
    
    eachtier = request.form.get('winnertiers')
    
    '''for x in request.form.get('winnertiers'):
        print(x)'''
    return render_template('resultspage.html',listoftiers=eachtier,namesintiers=request.form.get('winnernames'),bottomtier=request.form.get("bottomtier"),lowtiernames=request.form.get("bottomnames"))   



 
        
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