from flask import Flask,render_template,request,jsonify,session,redirect
import pyodbc
import json

#It all starts here...

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Required for session management
app.config['SESSION_TYPE'] = 'filesystem'  # Store session data on the server's filesystem

dbsetup = pyodbc.connect("Driver={ODBC Driver 17 for SQL Server};" 
                         "Server=LAPTIZZY\SQLEXPRESS;" 
                         "Database=o_r_tournament;"
                         "Trusted_Connection=yes;") #Format must be exactly like this, down to the spacing and new lines


#print(notes1)

# Loop through tables and execute queries



@app.route("/")
def home():
    
    cursor = dbsetup.cursor()
    cursor.execute("SELECT table_name FROM INFORMATION_SCHEMA.TABLES;")
    tables = cursor.fetchall()
    
    names1=[]
    url1=[]
    notes1=[]
    entrynum1=[]
    songsperuser1=[]
    numofusers1=[]
    drafttitle1=[]
    draftsong4user1=[]
    draftstarttime1 =[]
    
    names2=[]
    url2=[]
    notes2=[]
    entrynum2=[]
    songsperuser2=[]
    numofusers2=[]
    drafttitle2=[]
    draftsong4user2=[]
    draftstarttime2 = []


    
    names3=[]
    url3=[]
    notes3=[]
    entrynum3=[]
    songsperuser3=[]
    numofusers3=[]
    drafttitle3=[]
    draftsong4user3=[]
    draftstarttime3 =[]
    
    
    names4=[]
    url4=[]
    notes4=[]
    entrynum4=[]
    songsperuser4=[]
    numofusers4=[]
    drafttitle4=[]
    draftsong4user4=[]
    draftstarttime4 =[]
    
    
    names5=[]
    url5=[]
    notes5=[]
    entrynum5=[]
    songsperuser5=[]
    numofusers5=[]
    drafttitle5=[]
    draftsong4user5=[]
    draftstarttime5 =[]



    
    alltables=[]
    tablenum = 1

    print("All drafts/tables:")
    for table in tables:
        table_name = table[0]
        alltables.append(table_name)
        print(table_name)
        cursor.execute(f"SELECT * FROM {table_name};")
        #print(table_name)
        if tablenum==1:
            for row in cursor:
                # print(table_name, row[1])
                 names1.append(row[1])
                 url1.append(row[2])
                 notes1.append(row[3])
                 entrynum1.append(row[4])
                 songsperuser1.append(row[5])
                 numofusers1.append(row[6])
                 drafttitle1.append(row[7]) 
                 draftsong4user1.append(row[8])
                 draftstarttime1.append(row[9])

    
        elif tablenum==2:
             for row in cursor:
              #print(table_name, row[1])
                names2.append(row[1])
                url2.append(row[2])
                notes2.append(row[3])
                entrynum2.append(row[4])
                songsperuser2.append(row[5])
                numofusers2.append(row[6])
                drafttitle2.append(row[7])     
                draftsong4user2.append(row[8])
                draftstarttime2.append(row[9])


        elif tablenum==3:
             for row in cursor:
                names3.append(row[1])
                url3.append(row[2])
                notes3.append(row[3])
                entrynum3.append(row[4])
                songsperuser3.append(row[5])
                numofusers3.append(row[6])
                drafttitle3.append(row[7])     
                draftsong4user3.append(row[8])
                draftstarttime3.append(row[9])
                
        elif tablenum==4:
             for row in cursor:
                names4.append(row[1])
                url4.append(row[2])
                notes4.append(row[3])
                entrynum4.append(row[4])
                songsperuser4.append(row[5])
                numofusers4.append(row[6])
                drafttitle4.append(row[7])     
                draftsong4user4.append(row[8])
                draftstarttime4.append(row[9])
                
        elif tablenum==5:
             for row in cursor:
                names5.append(row[1])
                url5.append(row[2])
                notes5.append(row[3])
                entrynum5.append(row[4])
                songsperuser5.append(row[5])
                numofusers5.append(row[6])
                drafttitle5.append(row[7])     
                draftsong4user5.append(row[8])
                draftstarttime5.append(row[9])
   
        tablenum+=1  
    #print(names1)

    return render_template('gameprep.html',draftnames=names1,drafturls=url1,draftnotes=json.dumps(notes1),songsperuser=songsperuser1,numofusers=numofusers1,drafttitle1=drafttitle1,draftsong4user1=draftsong4user1,draftstarttime1=draftstarttime1,
                           draftnames2=names2,drafturls2=url2,draftnotes2=json.dumps(notes2),songsperuser2=songsperuser2,numofusers2=numofusers2,drafttitle2=drafttitle2,draftsong4user2=draftsong4user2,draftstarttime2=draftstarttime2,
                            draftnames3=names3,drafturls3=url3,draftnotes3=json.dumps(notes3),songsperuser3=songsperuser3,numofusers3=numofusers3,drafttitle3=drafttitle3,draftsong4user3=draftsong4user3,draftstarttime3=draftstarttime3,
                            draftnames4=names4,drafturls4=url4,draftnotes4=json.dumps(notes4),songsperuser4=songsperuser4,numofusers4=numofusers4,drafttitle4=drafttitle4,draftsong4user4=draftsong4user4,draftstarttime4=draftstarttime4,
                            draftnames5=names5,drafturls5=url5,draftnotes5=json.dumps(notes5),songsperuser5=songsperuser5,numofusers5=numofusers5,drafttitle5=drafttitle5,draftsong4user5=draftsong4user5,draftstarttime5=draftstarttime5)




@app.route('/startgame',methods=['POST','GET'])



def startgame():
    personnum=0
    allthenames =[]
    allurls = []
    thenotes=[]
    songnum4user=[]
    optstarttime=[]
    
    print(request.form.get(f'namenum{1}')) #f-string literal

    while f'name{personnum}' in request.form: #name{personnum} are the users unique identifiers 
            allthenames.append(request.form[f'name{personnum}'])      #We're getting the variables in the form withrequest.form 
            personnum += 1  
            
    personnum=0
    totalsongs=0
    
    while f'user{personnum}songtotal' in request.form:
            songnum4user.append(request.form.get(f'user{personnum}songtotal'))
            totalsongs+=int(request.form.get(f'user{personnum}songtotal'))
            personnum += 1 

            
            
    for x in range(totalsongs):
        allurls.append(request.form.get(f'namenum{x}')) 
        thenotes.append(request.form.get(f'notes4song{x}'))
        check4starttime=request.form.get(f'starttimenum{x}')
        optstarttime.append(check4starttime)
        
        if check4starttime != "":  #Should we use RegExp to check correct format for the time?
           index=check4starttime.find(':')
           if index!=-1:
            og_mins=check4starttime[:index] #getting everything b4 the colon
            newtime= (int(og_mins) * 60) + int(check4starttime[index+1:])
            #print("The total amount of seconds is "+ str(newtime))
            allurls[x]=allurls[x] + "?start=" + str(newtime)
        x+=1

    print(totalsongs)
    print(thenotes)
    
    if request.form.get("checkdraftbut")=="notclicked":   #Officially start the game
        return render_template('gametime.html',totalusers = int(request.form.get("numofusers")),allnames=allthenames,utubeurls=allurls,
                               thenotes=json.dumps(thenotes),songnum4user=songnum4user,totalsongs=totalsongs,optstarttime=json.dumps(optstarttime)) 
        #,songspereach=request.form.get("songspereach")
    
    elif request.form.get("checkdraftbut")=="createnewdraft": #Create new draft
            iterthrsongs=0                  
            cursor = dbsetup.cursor()
            
            #Create an alert to get the drafts name 
            newdraftname = request.form.get("newdraftname").replace(" ","_")
            print(newdraftname)
            
            cursor.execute(f"""CREATE TABLE "{newdraftname}"(UserNum int IDENTITY(1,1) PRIMARY KEY,Name nvarchar(50) NOT NULL,SongURL nvarchar(255),Notes nvarchar(255),EntryNum int,SongsperUser int,NumofUsers int,DraftTitle nvarchar(255),SpecificUserSongNum int,StartTime nvarchar(255));""")
            cursor.commit()
            
            for x in range(int(request.form.get("numofusers"))):
                          songsperuser = songnum4user[x]#totalsongs//len(allthenames) # Double /:To prevent float TypeError
                          for y in range(int(songsperuser)):
                              cursor.execute(f"""INSERT INTO "{newdraftname}"(Name,SongURL,Notes,EntryNum,SongsperUser,NumofUsers,DraftTitle,StartTime)VALUES(?, ?, ?, ?, ?, ?,?,?)""",
                                             (allthenames[x], allurls[iterthrsongs], thenotes[iterthrsongs],int(iterthrsongs+1), songsperuser, len(allthenames),newdraftname,optstarttime[iterthrsongs]))
                              iterthrsongs+=1

            placement=1
            for x in songnum4user:
                print(placement)
                cursor.execute(f"""UPDATE "{newdraftname}" SET SpecificUserSongNum={x} WHERE EntryNum={placement};""")
                placement+=1
                
            cursor.commit()
            cursor.close()
            return redirect('/')
        
    elif request.form.get("checkdraftbut")=="deletethisdraft":
        print(request.form.get("checkdraftbut"))
        cursor=dbsetup.cursor()
        deletedraftname = request.form.get("newdraftname").replace(" ","_")
        print(deletedraftname)
        cursor.execute(f"""DROP TABLE {deletedraftname};""")
        cursor.commit()
        cursor.close()                       
        return redirect('/')
            
    else:  #Update original draft
        iterthrsongs=0
        entrynum=1
        print("Draft save button Clicked")
        newdraftname = request.form.get("newdraftname").replace(" ","_")
        cursor = dbsetup.cursor()
        #cursor.execute(f"""DELETE FROM {newdraftname};""")
        #cursor.commit()
        print(newdraftname)
        print("Let see the time stamps:")
        print(allthenames)

        for x in range(len(allthenames)):
            print(optstarttime[iterthrsongs])
            songsperuser =  songnum4user[x]# totalsongs//len(allthenames) # Double /:To prevent float TypeError
            for y in range(int(songsperuser)):
                query = f"""
                UPDATE [{newdraftname}] 
                SET 
                Name = ?, 
                SongURL = ?, 
                Notes = ?, 
                EntryNum = ?, 
                SongsperUser = ?, 
                NumofUsers = ?, 
                DraftTitle = ?,
                StartTime =?
                WHERE EntryNum = ?
""".format(newdraftname)

            #Parameterized values > f-strings due to possible SQL injection attack
                cursor.execute(query, (
                allthenames[x], 
                allurls[iterthrsongs], 
                thenotes[iterthrsongs], 
                int(iterthrsongs + 1), 
                songsperuser, 
                len(allthenames), 
                newdraftname, 
                optstarttime[iterthrsongs],
                int(iterthrsongs + 1)
            ))

                iterthrsongs+=1
                
                
        cursor.commit()    
        cursor.close()
        return redirect('/')
        
            
            
        
        
        
        
 
@app.route('/showresults',methods=['GET','POST'])       
def showresults():
    print("Going to results page")
    #print(request.form.get('winnertiers'))
    #print(request.form.get("bottomtier"))
    eachtier = request.form.get('winnertiers')
    '''for x in request.form.get('winnertiers'):
        print(x)'''
    return render_template('resultspage.html',listoftiers=eachtier,namesintiers=request.form.get('winnernames'),
                           bottomtier=request.form.get("bottomtier"),lowtiernames=request.form.get("bottomnames"),
                           allnotes=request.form.get("notesforresults"),losernotes=request.form.get('losernotes'));   

    


if __name__ == "__main__":
    #Testing version
    #app.run(debug=True)
    
    #Production version
    from waitress import serve
    print("Running on http://localhost:8000/")
    serve(app, host="localhost", port=8000)