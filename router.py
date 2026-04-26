from flask import Flask,render_template,request,jsonify,session,redirect
import pyodbc
import json

#It all starts here...

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Required for session management
app.config['SESSION_TYPE'] = 'filesystem'  # Store session data on the server's filesystem

dbsetup = pyodbc.connect("Driver={ODBC Driver 17 for SQL Server};" 
                         "Server=localhost\SQLEXPRESS2;"  #"Server=LAPTIZZY\SQLEXPRESS;" 
                         "Database=o_r_tournament;"
                         "Trusted_Connection=yes;") #Format must be exactly like this, down to the spacing and new lines

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
        #print(table_name)
        cursor.execute(f"SELECT * FROM {table_name} ORDER BY EntryNum;")
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
    #print(names5)

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
            #print(songnum4user)
            print(request.form.get(f'user{personnum}songtotal'))
            totalsongs+=int(request.form.get(f'user{personnum}songtotal'))
            personnum += 1 

            
            
    for x in range(totalsongs):
        allurls.append(request.form.get(f'namenum{x}')) #We need to change namenum variable name
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

    #print("Total Amount of Songs:",totalsongs)
    
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
        
        '''print("Here is the checkbox result: ")
        zzz=1
        print(request.form.get(f"checkbox-{zzz}"))
        print(totalsongs)'''
        
        
                
        print(allurls)
        
        
        iterthrsongs=0
        iterthrurls=0
        entrynum=1
        print("Draft save button Clicked")
        newdraftname = request.form.get("newdraftname").replace(" ","_")
        cursor = dbsetup.cursor()
        
        songreference = request.form["oldsongsperuser"]
        songreference =json.loads(songreference)
        #print(songreference[0])
        
        checkbox= request.form["checkboxtrack"]
        allcheckbox=json.loads(checkbox)
        try:
            print("")
            print("Deleted song index:",allcheckbox[0])
            
        except:
            print("")
            
            
        info4delete =[]
        print(allthenames)
        
        #Comparing Old song amounts to the new total
        for x in range(len(allthenames)):#for each user
            songsperuser =  songnum4user[x] # Double /:To prevent float TypeError
            print("")
            print(allthenames[x],"'s ",int(songsperuser))

            for y in range(int(songsperuser)): #For each new song for user x
                for z in range(len(allcheckbox)): #For total amount of songs to be "deleted"
                    if iterthrurls == (int(allcheckbox[z])):  #if current song number/total songs == checked index/song selected
                        
                        #Above used to be iterthrsongs but now I need to find a way to make sure iterthrsongs does an extra one 
                        
                        if songreference[x]> int(songsperuser): #if old song amount for user is greater than new song amount   
                            #When user is losing a song, skip the the next url on the url list  
                                        
                            #if songreference[x]> int(songsperuser)#iterthrsongs> int(songsperuser) or
                            
                            print("Old Song reference:",songreference[x],' ; New Song Total:',int(songsperuser))
                            print("Checkbox selected:",allcheckbox[0],"; iterthrsongs:",iterthrsongs,"; Current User Song",y )
                            #print(songreference[x], " - ", int(songsperuser))
                            
                            temp2= songreference[x] - int(songsperuser) #Wpuldn't this always be skipping just 1?
                            #iterthrsongs=temp2+ int(songsperuser)
                            
                            iterthrurls=iterthrurls+1;#iterthrurls=iterthrurls+abs(temp2)
                            print("(Skipping URL)URL increased to ",iterthrurls)
                            print("Skip 1")#print("Skip ",temp2)
                            
                        if songreference[x]< int(songsperuser) and songreference[x]!="None": #gaining a song
                            print("ALTERNATE")
                            print("Old Song reference:",songreference[x],' ; New Song Total:',int(songsperuser))
                            print("Checkbox selected:",allcheckbox[0],"; iterthrsongs:",iterthrsongs,"; Current User Song",y )
                            
                            temp2= songreference[x] - int(songsperuser) #Wouldn't this always be skipping just 1?
                            
                            iterthrurls=iterthrurls+1#iterthrurls=iterthrurls+abs(temp2) #temp2 will be a negative value
                            print("(Skipping URL)URL increased to ",iterthrurls)
                            print("Skip 1")#print("Skip ",temp2)
       
                        if songreference[x]==int(songsperuser):#if we are on the next user but the current itersongs has a song that nexts to be deleted from previous
                            print("")
                            iterthrurls=iterthrurls+1 
                            print("(Skipping URL)URL increased to ",iterthrurls)
                            print("Skip ",1)
                                             
                if y>= songreference[x] and y<= (int(songsperuser)-1) and ( "z" in locals() and iterthrurls != int(allcheckbox[z])): #if current song is the last song for current user x #The last song for user
                    
                    #Protection potentially against putting in a song that the user actually wanted deleted but would we then have to turn the corresponding else statemnent into a 
                    #if to protect against it also? 
                    #The ""z" in locals()" checksif z exists/has been used
                    
                    if songreference[x]< int(songsperuser): #if new song amount for user is bigger than the old song amount 
                        #Conversely, When user gains a song = Put in a blank entry
                        
                        #This nested if statement ensures every new/blank entry will be the last entry in for the user in the database
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
            """#.format(newdraftname)
                        #print(str(allthenames[x]) + "; Song number: "+ str(y))
                    #Parameterized values > f-strings due to possible SQL injection attack
                        cursor.execute(query, (
                        allthenames[x], #
                        "", ##
                        "", ##
                        int(iterthrsongs + 1), 
                        songsperuser, 
                        len(allthenames), 
                        newdraftname, 
                        "", ##
                        int(iterthrsongs + 1)
                    ))
                        
                        print("")
                        print(f"""Blank Song for {allthenames[x]} at EntryNum={iterthrsongs+1}""")
                        
                        iterthrsongs+=1
                        #iterthrurls+=1
                        
                        #There might need to be another if condition for an empty url string?
                        
                        #iterthrurls-=1 #Had to get rid of this because the url  should be staying in place; Previous turn already progressed the url to the next song/user
                        
                        
                    else: #The last song for user
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
            """#.format(newdraftname)
                        #print(str(allthenames[x]) + "; Song number: "+ str(y))
                    #Parameterized values > f-strings due to possible SQL injection attack
                        cursor.execute(query, (
                        allthenames[x], #
                        allurls[iterthrurls], ##
                        thenotes[iterthrsongs], ##
                        int(iterthrsongs + 1), 
                        songsperuser, 
                        len(allthenames), 
                        newdraftname, 
                        optstarttime[iterthrsongs], ##
                        int(iterthrsongs + 1)
                    ))
                        
                        print(f"""SET Name={allthenames[x]} WHERE EntryNum={int(iterthrsongs + 1)} AND URL={allurls[iterthrurls]} """)
                        
                        iterthrsongs+=1
                        iterthrurls+=1 
                        print("(Last Update 4 this User) URL increased to ",iterthrurls)

                else: #Put the actually update in this else statement
                    #print("Current Name:",allthenames[x],"Song Amount=",y)
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
        """#.format(newdraftname)
                    #print(str(allthenames[x]) + "; Song number: "+ str(y))
                #Parameterized values > f-strings due to possible SQL injection attack
                    cursor.execute(query, (
                    allthenames[x], #
                    allurls[iterthrurls], ##
                    thenotes[iterthrsongs], ##
                    int(iterthrsongs + 1), 
                    songsperuser, 
                    len(allthenames), 
                    newdraftname, 
                    optstarttime[iterthrsongs], ##
                    int(iterthrsongs + 1)
                ))
                    
                    print(f"""SET Name={allthenames[x]} WHERE EntryNum={int(iterthrsongs + 1)} AND URL={allurls[iterthrurls]}""")
                    
                    iterthrsongs+=1
                    iterthrurls+=1
                    print("(Main Update)URL increased to ",iterthrurls)
                
  
        insertnum=0      
        print("")
        print("CHECK RIGHT HERE")
        testthis=request.form['pyinsert']
        addnewrow = json.loads(testthis)
        
        if addnewrow==True:
            print(addnewrow[0])
        
        
       
        print("Let see the time stamps:")
        print(allthenames)
        
        checkbox= request.form["checkboxtrack"]
        allcheckbox=json.loads(checkbox)
        
        for x in allcheckbox:
            temp = int(x)
           # cursor.execute(f"""UPDATE "{newdraftname}" SET SongURL='',Notes='' WHERE EntryNum={temp +1};""")
            
            print(f"""DELETE(Update) FROM "{newdraftname}" WHERE EntryNum ={temp+1};""")
        
        cursor.execute(f""";WITH CTE AS(SELECT "EntryNum",ROW_NUMBER() OVER (ORDER BY "EntryNum") AS "ReSeq" FROM "{newdraftname}")
        UPDATE CTE SET "EntryNum" = "ReSeq" """) #Re listing Entry Num so that there are no gaps'''
                
                
        spuarray = []
        counter=1
        cursor.execute(f"""SELECT EntryNum FROM {newdraftname} ORDER BY EntryNum """) 
        for row in cursor:
            if counter <= int(len(allthenames)):
                #print("Row Result",row[0])
                spuarray.append(row[0])
            counter+=1
        
        #print(spuarray)
        
        
        cursor.execute(f"""UPDATE "{newdraftname}" SET SpecificUserSongNum=NULL""") #Need to clear it out first due to extras left over
        placement = 0          
        for x in songnum4user: #Refreshing number of songs per user
                cursor.execute(f"""UPDATE "{newdraftname}" SET SpecificUserSongNum={x} WHERE EntryNum={spuarray[placement]};""")              
                placement+=1         
                #Try selecting all UserNums, put it in a array and then update the first 4 specificusernum based off of first 4 UserNums (aka in WHERE UserNums="", the "" will 
                # be an array value fromthe one we just created )'''
                  
                    
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