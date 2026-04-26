const apiKey =  'AIzaSyBc9Y9VMDPAaILM7erb5kwBhJ_B8knnKQk'

console.log(songnum4user);

var body1 = document.getElementsByTagName("body");
body1[0].style.backgroundColor = "#4a4a4a";

var testusernum = 3;
var num =0;


            const ul_ = document.querySelector('#eachname');
            const all_li = ul_.querySelectorAll('li');
            const testnames = Array.from(all_li); //Using this instead of "allnames"
          
            /*  console.log(testnames[num].innerHTML);
            console.log('Total number of users: ' +totalusers);
            console.log('Total number of songs: ' + songsperuser);*/
            

            var tiers=[];
            var winnernames=[];   
            var alllosenames=[];  //if I ever want to list out the losers in the "Defeated By" section of the results page, this will be useful  
            var tiercounter=0;

            //Because of 10 hard coded arrays, Application will have no more than 10 users who can play
            /*var user1songs = [];
            var user2songs = [];
            var user3songs = [];
            var user4songs = [];
            var user5songs = [];
            var user6songs = [];
            var user7songs =[];
            var user8songs =[];
            var user9songs =[];
            var user10songs =[];*/

            //var allusers = [user1songs,user2songs,user3songs,user4songs,user5songs,user6songs,user7songs,user8songs,user9songs,user10songs];
            var usersnotes =[[],[],[],[],[],[],[],[],[],[]];


            var users =[
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []}
            ];

            //Setting the amount of users that are playing the game (Maximum of 10)
            var setlength = users.length;
            for(x=totalusers; x<setlength; x++){
                //allusers.pop();
                //usersnotes.pop();
                users.pop();
            }

            var z=0;
            console.log(thenotes);
            var forcurrround=0;
            for(var x=0; x<totalusers;x++){
                forcurrround+=Number(songnum4user[x]);

                var y=0;
                    while(y<songnum4user[x]){
                        //usersnotes[x][y]= thenotes[z];
                        users[x].notes[y]= thenotes[z];
                        y++;
                        z++;
                    }
            }

            console.log(usersnotes);
                var usersnotes2 = usersnotes;

            //Placing all the users songs into the arrays/objects
            var songiter = 0;
            var users_name=[]; //Names to match song (?)
            var orderusernames=[];
            var users_namessongs=[]
            var totalsongs = users.length;
            var onlyone=18;

            for(x=0;x<users.length;x++){ 
                var usersongnum=0; 
                while(usersongnum<songnum4user[x]){
                    //allusers[x][usersongnum]= utubeurls[songiter++];
                    users_name[x]=testnames[x].innerHTML; //Will use to display the name underneath video
                    orderusernames[x]=testnames[x].innerHTML;


                    users[x].songs.push(utubeurls[songiter++]);
                    users[x].name=testnames[x].innerHTML;

                    usersongnum++;
                }
            }

            
            console.log(users_name);
            console.log(orderusernames);


            var eliminated;
            var winners=[];
            var winnernotes=[];
            var winnames =[];
            var losers=[];
            var losernames=[];
            var keepwinnernotes=[];
            var losernotes=[];
            var counter=0;
            var counter2=1; //Current round matchup tracker
            var numofsongsleft=forcurrround;//var numofsongsleft=totalusers*songsperuser;
            const totalsongs2 = forcurrround;
            var totalrounds = 3;
            var currround = forcurrround;//64; //Needs to be 64 on final versions
            


            //Start of Round of 64


            var users2 =users;

            console.log(users2);

            document.getElementById("displayround").innerHTML = "Round of " + currround + " (" + counter2 +"/"+currround/2 + ")";

            //Set up initial First Matchup

            var usersongs1 = Math.floor(Math.random()*users2.length); //"usersongs1" will always be left video; This determines the user 
            var usersongs2 = Math.floor(Math.random()*users2.length);//Will always be right video;
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves 
                usersongs1 = Math.floor(Math.random()*users2.length);
                usersongs2 = Math.floor(Math.random()*users2.length);
                }

                var songselector1=Math.floor(Math.random()*users2[usersongs1].songs.length)//songselector1 selects the song for usersongs1
                var songselector2=Math.floor(Math.random() * users2[usersongs2].songs.length);


                //Test: User 2, song 1 per 4 songs (Song 5 of a list of 8) would mean we can add the usersong to the songper to get notes placement



                document.getElementById("leftnotes").innerHTML= users2[usersongs1].notes[songselector1];
                document.getElementById("rightnotes").innerHTML= users2[usersongs2].notes[songselector2];
                console.log(users2[usersongs1].notes[songselector1] ,"vs", users2[usersongs2].notes[songselector2]);


                setSong1(songselector1);
                setSong2(songselector2);//Will be needed throughout so program can have updated numbers

                console.log(users2[usersongs1].songs[songselector1] + " vs " + users2[usersongs2].songs[songselector2]);

                var leftvidID=createvideoID(String(users2[usersongs1].songs[songselector1]));
                var rightvidID=createvideoID(String(users2[usersongs2].songs[songselector2]));
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;

                var takeoutstart1 = leftvidID.indexOf("?");
                var takeoutstart2 = rightvidID.indexOf("?");

                 var leftvidID2 = takeoutstart1!==-1 ? leftvidID.substring(0,takeoutstart1): leftvidID;
                 var rightvidID2 = takeoutstart2!==-1 ? rightvidID.substring(0,takeoutstart2): rightvidID;



                getVideoDetails("left",leftvidID2);
                getVideoDetails("right",rightvidID2);//Uses Youtube API to show title of songs on the song selection buttons

                console.log("usersongs1:" + usersongs1 + "usersongs2" + usersongs2);

                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];//Show names on the page


                


            //Continuing Tournament

            //Called whenever left or right song button is pressed
            //OR for automation, call this whenever you get all the votes from users; 
            //the data we get back should be left or right/total amount of voters who voted
            function thewinneris(theanswer){  
                thelogic(theanswer,getSong1(),getSong2());             
            }



            function thelogic(theanswer,songselector1,songselector2){ 
                counter=counter+2; //Keeping track of how many songs we went through in the round
                counter2++;
                console.log("AllUsers");
                console.log(users2);
            console.log("Counter:" + counter + ", Current Round:" +currround);
                if(counter<=currround) { //Going through each round
                    
                if(theanswer == "left"){
                    console.log("LEFT");
                    console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                    var eliminated = users2[usersongs2].songs[songselector2];//var eliminated = allusers2[usersongs2][songselector2].shift(); 
                    var tempwinner = users2[usersongs1].songs[songselector1];
                    var elimnotes =users2[usersongs2].notes[songselector2];
                    var tempnoteswin = users2[usersongs1].notes[songselector1];

                    winners.push(tempwinner); /*winners.push(allusers2[usersongs1][songselector1].shift()); */
                    winnames.push(users2[usersongs1].name);
                    losers.push(eliminated);
                    losernames.push(users2[usersongs2].name);
                    console.log(users2[usersongs2].name);

                    winnernotes.push(tempnoteswin);
                    losernotes.push(elimnotes);

                    var winindex =users2[usersongs1].songs.indexOf(tempwinner);
                    var elimindex = users2[usersongs2].songs.indexOf(eliminated);


                    users2[usersongs1].songs.splice(users2[usersongs1].songs.indexOf(tempwinner),1);
                    users2[usersongs2].songs.splice(users2[usersongs2].songs.indexOf(eliminated),1);
                     //Get rid of both songs from current round selection pool but saves winner in "winners" array
                     //Song locations change so use indexOf function to always pick right index

                    users2[usersongs1].notes.splice(winindex,1);
                    users2[usersongs2].notes.splice(elimindex,1);
                    //usersnotes2[usersongs1].splice(winindex,1);
                    //usersnotes2[usersongs2].splice(elimindex,1); 

                    //users2[usersongs1].songs[winindex]="";
                    users2 = users2.filter(users=>users.songs.length>0); //Gets rid of users remaining with no songs remaining

                    console.log(users2);
                    console.log(users2.notes);


                console.log( "Winner: " +  tempwinner + ", Eliminated: " + eliminated);
                console.log(winners);
                console.log("AllUsers");
                console.log(users2);
                }


                else if (theanswer == "right"){
                    console.log("RIGHT");
                    console.log(users2[usersongs2]);
                    console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                    var eliminated = users2[usersongs1].songs[songselector1]; // Remove the first element
                    var tempwinner = users2[usersongs2].songs[songselector2];
                    var elimnotes =users2[usersongs1].notes[songselector1];
                    var tempnoteswin = users2[usersongs2].notes[songselector2];


                    winners.push(tempwinner);
                    winnames.push(users2[usersongs2].name);
                    losers.push(eliminated);
                    losernames.push(users2[usersongs1].name);
                    console.log(users2[usersongs2].notes[songselector2]);
                    winnernotes.push(tempnoteswin);
                    losernotes.push(elimnotes);


                    var winindex = users2[usersongs2].songs.indexOf(tempwinner);
                    var elimindex  = users2[usersongs1].songs.indexOf(eliminated);     
                    
                    users2[usersongs2].songs.splice(winindex,1);
                    users2[usersongs1].songs.splice(elimindex,1);

                    users2[usersongs2].notes.splice(winindex,1);
                    users2[usersongs1].notes.splice(elimindex,1);

                    users2 = users2.filter(users => users.songs.length>0);
                    console.log(users2.notes);

                console.log("Eliminated: " + eliminated + ", Winner: " +  tempwinner);
                console.log("The winners are display below:");
                console.log(winners);
                console.log("AllUsers");
                console.log(users2);
                    }

                if(currround!=counter){ //To move on to the next round
                    document.getElementById("displayround").innerHTML = "Round of " + currround + " (" + counter2 +"/"+currround/2 + ")";
                    /* console.log("Number of songs remaining is " + numofsongsleft);                                                      
                    console.log("AllUsers");
                    console.log(allusers2);
                    console.log("Check length: " +allusers2.length);*/
                    
             usersongs1 = Math.floor(Math.random()*users2.length);
             usersongs2 = Math.floor(Math.random()*users2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves 
                
                if(users2.length<2){
                    console.log("ONLY ONE LEFT"); 
                    break;//Stop while loop;No need to randomize users with only one left
                }
                
                usersongs1 = Math.floor(Math.random()*users2.length);
                usersongs2 = Math.floor(Math.random()*users2.length);
                }

               
                //Checking the user arrays that has no more songs in them
               /* var toeliminate =[];
                var elimcount =0;
                for(x=0;x<allusers2.length;x++){
                    if(allusers2[x].length==0 ){ 
                        console.log(x);
                        console.log("User "+users_name[x]+" has been eliminated");   
                        toeliminate[elimcount++] = users_name[x];  
                        delete users_name[x];  
                        //Remove the user names that got eliminate (aim for he names not index bc of movement)    
                                 
                       // users_name.splice(x,1);       
                       // allusers2[x]=null;                       
                    }
                    else{

                    }
                } 
*/
                users_name = users_name.filter(arr => arr.length > 0);



                


           if(users2.length>1){
            //(Normal Activities) Setting up new versus as long as theres still multiple users 

                        console.log(users2);


            usersnotes2 = usersnotes2.filter(arr  => arr.length>0);
            console.log("AllUsers");
            console.log(users2);


            usersongs1 = Math.floor(Math.random()*users2.length);
            usersongs2 = Math.floor(Math.random()*users2.length);
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                
                if(users2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                    //Isn't this redundent due to "if(allusers2.length>1)" If statement? Might not be due to possibilty of last versus forcibily being the same user
                }
                
                usersongs1 = Math.floor(Math.random()*users2.length);
                usersongs2 = Math.floor(Math.random()*users2.length);
                }

            var songselector1=Math.floor(Math.random()*users2[usersongs1].songs.length)
             var songselector2=Math.floor(Math.random() * users2[usersongs2].songs.length);
                
             if(users2.length<2){
                while(songselector1==songselector2){
                    var songselector1=Math.floor(Math.random()*users2[usersongs1].songs.length)
                    var songselector2=Math.floor(Math.random() * users2[usersongs2].songs.length);                  
                }

                document.getElementById("leftnotes").innerHTML= users2[usersongs1].notes[songselector1];
                document.getElementById("rightnotes").innerHTML= users2[usersongs2].notes[songselector2];
                console.log(users2[usersongs1].songs[songselector1] ,"vs", users2[usersongs2].songs[songselector2]);

                setSong1(songselector1);
                setSong2(songselector2);
            }
           }
                
                

           else if(users2.length==1){
            //BUT if there's only one user left...

             songselector1=Math.floor(Math.random()*users2[0].songs.length);
             songselector2=Math.floor(Math.random() * users2[0].songs.length); //"users2[0].songs.length);" is the main reason why we have this Else If statement

                while(songselector1==songselector2){
                     songselector1=Math.floor(Math.random()*users2[0].songs.length)
                     songselector2=Math.floor(Math.random() * users2[0].songs.length);
                     setSong1(songselector1);
                     setSong2(songselector2);
                   }

                   //users_name.splice(onlyone,1); //Remove name that has been eliminated
                   console.log(users_name);
                    usersongs1=0;
                    usersongs2=0;
                 }


                console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; users2.length:" + users2.length);
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
               /* console.log("AllUsers");
                console.log(allusers2);*/
               
                console.log(users2[usersongs1].songs[songselector1] + " vs " + users2[usersongs2].songs[songselector2]);

                setSong1(songselector1);
                setSong2(songselector2);

                document.getElementById("leftnotes").innerHTML= users2[usersongs1].notes[songselector1];
                document.getElementById("rightnotes").innerHTML= users2[usersongs2].notes[songselector2];
                console.log(users2[usersongs1].songs[songselector1] ,"vs", users2[usersongs2].songs[songselector2]);


                var leftvidID=createvideoID(String(users2[usersongs1].songs[songselector1]));
                var rightvidID=createvideoID(String(users2[usersongs2].songs[songselector2]));

               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;

                var takeoutstart1 = leftvidID.indexOf("?");
                var takeoutstart2 = rightvidID.indexOf("?");

                 var leftvidID2 = takeoutstart1!==-1 ? leftvidID.substring(0,takeoutstart1): leftvidID;
                 var rightvidID2 = takeoutstart2!==-1 ? rightvidID.substring(0,takeoutstart2): rightvidID;


                getVideoDetails("left",leftvidID2);
                getVideoDetails("right",rightvidID2);
                /*document.getElementById("leftname").innerHTML = newusernames[usersongs1];
                document.getElementById("rightname").innerHTML = newusernames[usersongs2];*/
                
                console.log(users_name);
                console.log("usersongs1:" + usersongs1 + "; usersongs2: " + usersongs2);


                document.getElementById("leftname").innerHTML =users2[usersongs1].name;  //document.getElementById("leftname").innerHTML =users_name[usersongs1];

                document.getElementById("rightname").innerHTML = users2[usersongs2].name;
   
            }

            else{ //When there's no songs left in allusers2, it's  time to go to the next round
                console.log("TO THE NEXT ROUND");
                numofsongsleft=numofsongsleft/2;
                currround = currround/2;
                counter2=1;
                document.getElementById("displayround").innerHTML = "Round of " + currround + " (" + counter2 +"/"+currround/2 + ")";

                var findsong=0;
                var theuser = 0;
                var findsonghelp=0;
                //users_name=orderusernames;
                console.log(users_name);
                var newusernames=[];


                if (!Array.isArray(keepwinnernotes[tiercounter])) {
                    keepwinnernotes[tiercounter] = [];
                }
        
                    var  y = keepwinnernotes.length;
                   for(var x=0;x<winnernotes.length;x++){
                    console.log(winnernotes[x]);
                    keepwinnernotes[tiercounter][x]=winnernotes[x];
                   }
        
                console.log(keepwinnernotes);

                    //Preperation; Needed for next batch that will be insert (Makes sure the array stays an array)

                  //  for(x=0;x<allusers.length;x++){  
                        //Need allusers2 to have the amount of original users so songs can be place with their respective person
                     /*   allusers2[x]=[];
                        usersnotes2[x]=[];
                        
                    }*/

                    console.log(usersnotes2);
                    //console.log(allusers2);

                    console.log(winners.length);


                users2 =[
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []},
                {name: "", songs: [], notes: []}
            ];

            for(x=0;x<winners.length;x++){
                var finduser = users2.some(user => user.name===winnames[x]);
                if (!finduser){
                    users2[x].name=winnames[x];
                    users2[x].songs.push(winners[x]);
                    users2[x].notes.push(winnernotes[x]);
                    console.log(x);

                }
                else{
                    users2.forEach(user => {
                        if(user.name===winnames[x]){
                            user.songs.push(winners[x]);
                            user.notes.push(winnernotes[x]);
                        }
                    })
                    
                    console.log(x);
                }               
            }

            users2 = users2.filter(users => users.songs.length>0);

            console.log(users2);

                    console.log(usersnotes2);

                    
                    tiers[tiercounter]=winners; //Saving results via tiers that will be displayed on Results page
                    document.getElementById("tiers").value = JSON.stringify(tiers);
                    console.log(winnames);
                    winnernames[tiercounter]=winnames;
                    console.log(winnernames);
                    document.getElementById("winnernames").value = JSON.stringify(winnernames); //This should solve the results page problem.
                     document.getElementById("losers").value = JSON.stringify(losers);
                     //alllosenames[tiercounter]=losernames;
                     document.getElementById("losernames").value= JSON.stringify(losernames);
                    document.getElementById("notesforresults").value = JSON.stringify(keepwinnernotes);
                    document.getElementById("losernotes").value = JSON.stringify(losernotes);

                    tiercounter++;
                    console.log(tiers);

                    winners=[]; //Need to store/record old winners before clearing this out (long term)
                    winnames=[];
                    alllosenames=[];
                    counter=0;
                
                users2 = users2.filter(item => !(Array.isArray(item) && item.length === 0));
                usersnotes2 = usersnotes2.filter(item => !(Array.isArray(item) && item.length === 0));

                console.log("Adding the winners to the next evaluated crop(users2)");
                console.log("Users2 " + users2.length);
                console.log(users2);


           //Ordering the user names so that  songs allign with the users
           var orderusernames2=[];
           var ouhelp=0;
           for(x=0;x<orderusernames.length;x++){
            var y =0;
            while(y<orderusernames.length){
                if(newusernames[y]==orderusernames[x]){
                    orderusernames2[ouhelp++]=newusernames[y];
                }
                y++;
            }
           }
   


          /* if (!Array.isArray(keepwinnernotes[tiercounter])) {
            keepwinnernotes[tiercounter] = [];
        }


            var  y = keepwinnernotes.length;
           for(var x=0;x<winnernotes.length;x++){
            console.log(winnernotes[x]);
            keepwinnernotes[tiercounter][x]=winnernotes[x];
           }

        console.log(keepwinnernotes);
        tiercounter++;*/

while(winnernotes.length>0){
    winnernotes.pop();
}
           console.log(usersnotes2);
           console.log(newusernames);


           newusernames=orderusernames2
           users_name=newusernames; //Lol just combine


          //thenotes=winnernotes;

           

        console.log(orderusernames2);
        console.log(newusernames);




                if(currround<2){ //Overall rounds checker; Once we past the one on one (last tournament) the game ends

                    //Tournament is Over

                    console.log(winners);
                    document.getElementById("leftvid").style.display="none";
                    document.getElementById("rightvid").style.display="none";
                    document.getElementById("toresultspage").style.display="block";
                    document.getElementById("leftbutt").style.display="none";
                    document.getElementById("rightbutt").style.display="none";
                    document.getElementById("leftname").style.display="none";
                    document.getElementById("rightname").style.display="none";
                    document.getElementById("leftnotes").style.display="none";
                    document.getElementById("rightnotes").style.display="none";
                    document.getElementById("clickfortie").style.display="none";

                    //document.getElementById("vs").style.display="none";
                    document.getElementById("displayround").innerHTML="1 OF 1";
                    document.getElementById("vs").innerHTML="TOURNAMENT FINISHED";
                    document.getElementById("vs").style.right="33%";
                    document.getElementById("vs").style.textDecoration="underline";
                    document.getElementById("vs").style.fontSize="3vw";

                    console.log(winnames);
                    console.log(losers);
                    console.log(losernames);

                }
                else{ //The Song selection process starts again if there isn't a winning song

                    console.log("Reapply winners");

                console.log("ALL USERS");
                console.log(users2);
                //Getting rid of the empty arrays/users that don't have any songs in them
                for(x=0;x<users2.length;x++){
                    if(users2[x].songs.length==0 ){ 
                        users2.splice(x,1);                       
                    }
                } 
                
                      
           if(users2.length>1){
            //Normal Activities

            usersongs1 = Math.floor(Math.random()*users2.length);
            usersongs2 = Math.floor(Math.random()*users2.length);
    
            while(usersongs2 == usersongs1 ){  
                if(users2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                }    
                usersongs1 = Math.floor(Math.random()*users2.length);
                usersongs2 = Math.floor(Math.random()*users2.length);  
                }

           console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2);
           var songselector1=Math.floor(Math.random()*users2[usersongs1].songs.length)
            var songselector2=Math.floor(Math.random() * users2[usersongs2].songs.length);

            setSong1(songselector1);
            setSong2(songselector2);

            console.log(usersnotes2);
            document.getElementById("leftnotes").innerHTML= users2[usersongs1].notes[songselector1];
            document.getElementById("rightnotes").innerHTML= users2[usersongs2].notes[songselector2];
            console.log(users2[usersongs1].notes[songselector1] ,"vs", users2[usersongs2].notes[songselector2]);


           }         

           else if(users2.length==1){
            //BUT if there's only one user left...
            console.log("Users2");
            console.log(users2);

                while(songselector1==songselector2){
                     var songselector1=Math.floor(Math.random()*users2[0].songs.length)
                     var songselector2=Math.floor(Math.random() * users2[0].songs.length);

                     setSong1(songselector1);
                    setSong2(songselector2);
                    }
                    usersongs1=0;
                    usersongs2=0;
                 }

                 document.getElementById("leftnotes").innerHTML= users2[usersongs1].notes[songselector1];
                 document.getElementById("rightnotes").innerHTML= users2[usersongs2].notes[songselector2];

                console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; users2.length:",users2.length );
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);               
                console.log(users2[usersongs1].songs[songselector1] + " vs " + users2[usersongs2].songs[songselector2]);
                console.log(users2[usersongs1].notes[songselector1] ,"vs", users2[usersongs2].notes[songselector2]);                


                var leftvidID=createvideoID(String(users2[usersongs1].songs[songselector1]));
                var rightvidID=createvideoID(String(users2[usersongs2].songs[songselector2]));
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;


                var takeoutstart1 = leftvidID.indexOf("?");
                var takeoutstart2 = rightvidID.indexOf("?");

                 var leftvidID2 = takeoutstart1!==-1 ? leftvidID.substring(0,takeoutstart1): leftvidID;
                 var rightvidID2 = takeoutstart2!==-1 ? rightvidID.substring(0,takeoutstart2): rightvidID;

                getVideoDetails("left",leftvidID2);
                getVideoDetails("right",rightvidID2);
                console.log("usersongs1: " + usersongs1 + ";usersongs2: " + usersongs2);
                document.getElementById("leftname").innerHTML = users2[usersongs1].name;
                document.getElementById("rightname").innerHTML = users2[usersongs2].name;

                }
            }
    
                
                }
              
            }



            function setSong1(songselector1){
                returnsong1 = songselector1;
            }

            function getSong1(){
                return returnsong1;
            }

            function setSong2(songselector2){
                returnsong2 = songselector2;
            }

            function getSong2(){
                return returnsong2;
            }



            function createvideoID(theurl){
            
                const regExp =  /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:.*?[?&]start=(\d+))?/;
                // /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/; 
                const match = theurl.match(regExp); 
                /*match[0] is the entire url,  match[1] is which exxpression contained the video ID, match[2] is the ID itself*/
                //console.log(match[2]);
                if (match && match[1].length === 11) {

                var returnthis="";
                if(match[2]!=undefined){
                     returnthis = match[1] + "?start=" + match[2];
                     //console.log("String added");
                }
                else{
                     returnthis=match[1];
                     //console.log("Left alone");
                }
            
                return (match && match[1].length === 11) ? returnthis : null; /*Youtube ID's are always 11 characters long*/ //return (match && match[2].length === 11)
            }
            
        }


          
          async function getVideoDetails(whichside,videoId){
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

            try{
                const response = await fetch(apiUrl);
                const data = await response.json();

               /* if(!response.ok){
                    throw new Error("Network status isn't ok:" + response.statusText);
                }*/

                 if (!response.ok) {
                    console.error("Full API error:", data);
                    throw new Error(`Network status isn't ok: ${response.status}`);
    }

                getVideoDetails2(whichside,data);

            }
            catch(error){
                console.error('Fetch error:',error);
            }

          }

          function getVideoDetails2(whichside,data){
            if(whichside=="left"){
                document.getElementById("leftbutt").innerHTML= data.items[0].snippet.title;

            }
            
            
            else{
                document.getElementById("rightbutt").innerHTML= data.items[0].snippet.title;

            }
          }

          function clickfortie(){
            document.getElementById("coinflip_contain").style.display="block";
            document.getElementById("coinflipbackground").style.display="block";
            coinflip();
          }

          
          var showtheflip = document.getElementById("currentflip"); 
          var flipcounter=0;

          function coinflip(){
           if(flipcounter<=2){
            var theflip = Math.floor(Math.random()*2);
            if(theflip==0){
                showtheflip.innerHTML = "Heads";
            }
            else{
                showtheflip.innerHTML = "Tails";
            }

            var flipattemptresult = document.createElement("div");
            flipattemptresult.innerHTML=showtheflip.innerHTML;
            flipattemptresult.style.backgroundColor="white";
            flipattemptresult.style.color="black";

            flipattemptresult.style.border="ridge black 2px";

            flipattemptresult.style.display="flex";
            flipattemptresult.style.justifyContent="center";
            flipattemptresult.style.alignContent="center";
            flipattemptresult.style.aspectRatio="1";
            flipattemptresult.style.borderRight="1px black solid";
            flipattemptresult.style.borderRadius="50%";
            flipattemptresult.style.height="12%";
            flipattemptresult.style.padding="4%";
            flipattemptresult.style.position="absolute";
            flipattemptresult.style.top=flipcounter*30+"%";
            flipattemptresult.style.left="15%";
           //flipattemptresult.style.boxSizing="border-box";
           flipattemptresult.style.margin="5% auto 5% auto";
           flipattemptresult.style.fontSize="2.5vw";
           flipattemptresult.style.overflow="hidden";
           flipattemptresult.style.transition="transform 1s ease";

           flipattemptresult.id=flipcounter;


            document.getElementById("trackflips").appendChild(flipattemptresult);

            setTimeout(()=>{
                flipattemptresult.style.transform="rotateY(360deg)";

            },5);

            
            if(flipcounter==2){
                var itsheads=0;
                var itstails=0;

                var trackflips = document.getElementById("trackflips");
                var getwinner = trackflips.querySelectorAll("div");
                getwinner.forEach(getwinner=>{
                    if(getwinner.innerHTML=="Heads"){
                        itsheads++;
                    }
                    else{
                        itstails++;
                    }
                });

                if(itsheads>itstails){
                    showtheflip.innerHTML="Heads Win!";
                    getwinner.forEach(changecolor=>{
                        if(changecolor.innerHTML=="Heads"){
                            //changecolor.style.backgroundColor="green";
                        }
                        else{
                            //changecolor.style.backgroundColor="red";
                            changecolor.style.opacity=".1";
                        }
                    });
                }
                else{
                    showtheflip.innerHTML="Tails Win!";
                    getwinner.forEach(changecolor=>{
                        if(changecolor.innerHTML=="Tails"){
                            //changecolor.style.backgroundColor="green";
                        }
                        else{
                            //changecolor.style.backgroundColor="red";
                            changecolor.style.opacity=".1";

                        }
                    });

                }

                var flipcoinbutton = document.getElementById("flipcoinagain");
                flipcoinbutton.style.display = "none";

            }
            flipcounter++;
           }
           else{
     
            /*
                flipcoinbutton.style.border = "10px red solid";
                flipcoinbutton.style.borderTopLeftRadius="20%";
                flipcoinbutton.style.borderTopRightRadius="10%";
                flipcoinbutton.style.borderRightRadius="0%";
                flipcoinbutton.style.borderBottomRightRadius="10%";
                flipcoinbutton.style.borderBottomRadius="10%";
                flipcoinbutton.style.borderBottomLeftRadius="10%";
*/


           }

          }


          function closecoinflip(){
            document.getElementById("coinflip_contain").style.display="none";
            document.getElementById("coinflipbackground").style.display="none";
            flipcounter=0;
            var trackflips = document.getElementById("trackflips");
            var clearthese = trackflips.querySelectorAll("div");
            clearthese.forEach(clearthese=>{
                trackflips.removeChild(clearthese);
            });

            var flipcoinbutton = document.getElementById("flipcoinagain");
                flipcoinbutton.style.display = "flex";
          }

          
