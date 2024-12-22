const apiKey =  'AIzaSyBc9Y9VMDPAaILM7erb5kwBhJ_B8knnKQk'

var testusernum = 3;
            var num =0;
            //var everyuserssong = new Map();


            const ul_ = document.querySelector('#eachname');
            const all_li = ul_.querySelectorAll('li');
            const testnames = Array.from(all_li);
          /*  console.log(testnames[num].innerHTML);
            console.log('Total number of users: ' +totalusers);
            console.log('Total number of songs: ' + songsperuser);*/
            

            var tiers=[];
            var allnames=[];                
            var tiercounter=0;

            //Because of 6 hard coded arrays, Application will have no more than 6 users who can play
            var user1songs = [];
            var user2songs = [];
            var user3songs = [];
            var user4songs = [];
            var user5songs = [];
            var user6songs = [];
            var allusers = [user1songs,user2songs,user3songs,user4songs,user5songs,user6songs];


            var usersnotes =[[],[],[],[],[],[]];


            //Setting the amount of users that are playing the game (Maximum of 6)
            var setlength = allusers.length;
            for(x=totalusers;x<setlength;x++){
                allusers.pop();
                usersnotes.pop();
            }

            var z=0;
            console.log(thenotes);
            for(var x=0; x<totalusers;x++){
                var y=0;
                    while(y<songsperuser){
                        usersnotes[x][y]= thenotes[z];
                        //console.log( thenotes[z]);
                        y++;
                        z++;
                    }
            }


            console.log(usersnotes);
                var usersnotes2 = usersnotes;

            //Placing all the users songs into the arrays
            var songiter = 0;
            var users_name=[];
            var orderusernames=[];
            var users_namessongs=[]
            var totalsongs = allusers.length;
            var onlyone=18;
            for(x=0;x<allusers.length;x++){ //Each array
                var usersongnum=0; 
                while(usersongnum<songsperuser){
                    allusers[x][usersongnum]= utubeurls[songiter++];
                    users_name[x]=testnames[x].innerHTML; //Will use to display the name underneath video
                    orderusernames[x]=testnames[x].innerHTML;

                    usersongnum++;
                }
            }

            
          //console.log(users_name[0] + " vs " + users_name[1]);  //console.log(allusers[0][0] + "vs" + allusers[1][0]); //How we will display the names per the last comment


            //users_name.sort();
            console.log( allusers);
            console.log(users_name);
            //const orderusernames=users_name;
            console.log(orderusernames);


            var eliminated;
            var winners=[];
            var winnernotes=[];

            var losers=[];
            var losernames=[];
            //var keepwinnernotes=usersnotes;
            var keepwinnernotes=[];
            var losernotes=[];
            var counter=0;
            var numofsongsleft=totalusers*songsperuser;
            const totalsongs2 = numofsongsleft;
            var totalrounds = 3;
            var currround = 8; //Needs to be 64 on final versionS


            //Start of Round of 64

            var allusers2 = allusers;
            console.log(allusers2);

            document.getElementById("displayround").innerHTML = "Round of " + currround;

            //Set up initial First Matchup

            var usersongs1 = Math.floor(Math.random()*allusers2.length); //"usersongs1" will always be left video; This determines the user 
            var usersongs2 = Math.floor(Math.random()*allusers2.length);//Will always be right video;
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }

                var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)//songselector1 selects the song for usersongs1
                var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);


                //Test: User 2, song 1 per 4 songs (Song 5 of a list of 8) would mean we can add the usersong to the songper to get notes placement



                document.getElementById("leftnotes").innerHTML= usersnotes2[usersongs1][songselector1];
                document.getElementById("rightnotes").innerHTML= usersnotes2[usersongs2][songselector2];
                console.log(usersnotes2[usersongs1][songselector1] ,"vs", usersnotes2[usersongs2][songselector2]);


                setSong1(songselector1);
                setSong2(songselector2);//Will be needed throughout so program can have updated numbers

                console.log(allusers2[usersongs1][songselector1] + " vs " + allusers2[usersongs2][songselector2]);

                var leftvidID=createvideoID(String(allusers2[usersongs1][songselector1]));
                var rightvidID=createvideoID(String(allusers2[usersongs2][songselector2]));
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;

                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);//Uses Youtube API to show title of songs on the song selection buttons

                console.log("usersongs1:" + usersongs1 + "usersongs2" + usersongs2);

                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];//Show names on the page


                


            //Continuing Tournament

            function thewinneris(theanswer){ //Called whenever left or right song button is pressed
                thelogic(theanswer,getSong1(),getSong2());             
            }



            function thelogic(theanswer,songselector1,songselector2){ // function thelogic(theanswer,songselector1,songselector2)
                counter=counter+2; //Keeping track of how many songs we went through in the round
                console.log("AllUsers");
                console.log(allusers2);
            console.log("Counter:" + counter + ", Current Round:" +currround);
                if(counter<=currround) { //Going through each round
                    
                if(theanswer == "left"){
                    //console.log(allusers2[usersongs1]);
                    console.log("LEFT");
                    console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                    var eliminated = allusers2[usersongs2][songselector2];//var eliminated = allusers2[usersongs2][songselector2].shift(); // Remove the first element
                    var tempwinner = allusers2[usersongs1][songselector1];
                    var elimnotes =usersnotes2[usersongs2][songselector2];
                    var tempnoteswin = usersnotes2[usersongs1][songselector1];

                    winners.push(tempwinner); /*winners.push(allusers2[usersongs1][songselector1].shift()); */
                    losers.push(eliminated);
                    losernames.push(users_name[usersongs2]);
                    winnernotes.push(usersnotes2[usersongs1][songselector1]);
                    losernotes.push(usersnotes2[usersongs2][songselector2]);



                    
                    

                    allusers2[usersongs1].splice(allusers2[usersongs1].indexOf(tempwinner),1); //Get rid of both songs from current round selection pool but saves winner in "winners" array
                    allusers2[usersongs2].splice(allusers2[usersongs2].indexOf(eliminated),1); //Song locations change so use indexOf function to always pick right index
                    
                    usersnotes2[usersongs1].splice(usersnotes2[usersongs1].indexOf(tempnoteswin),1);
                    usersnotes2[usersongs2].splice(usersnotes2[usersongs2].indexOf(elimnotes),1);

                    console.log(usersnotes2);

                    //allusers2 = allusers2.filter(arr => arr.length > 0);

                console.log( "Winner: " +  tempwinner + ", Eliminated: " + eliminated);
                console.log(winners);
                console.log("AllUsers");
                console.log(allusers2);
                }


                else if (theanswer == "right"){
                    console.log("RIGHT");
                    console.log(allusers2[usersongs2]);
                    console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                    var eliminated = allusers2[usersongs1][songselector1]; // Remove the first element
                    var tempwinner = allusers2[usersongs2][songselector2];
                    var elimnotes =usersnotes2[usersongs1][songselector1];
                    var tempnoteswin = usersnotes2[usersongs2][songselector2];


                    winners.push(tempwinner);
                    losers.push(eliminated);
                    losernames.push(users_name[usersongs1]);
                    console.log(usersnotes2[usersongs2][songselector2]);
                    winnernotes.push(usersnotes2[usersongs2][songselector2]);
                    losernotes.push(usersnotes2[usersongs1][songselector1]);



                    

                    

                    allusers2[usersongs2].splice(allusers2[usersongs2].indexOf(tempwinner),1);
                    allusers2[usersongs1].splice(allusers2[usersongs1].indexOf(eliminated),1);

                    usersnotes2[usersongs2].splice(usersnotes2[usersongs2].indexOf(tempnoteswin),1);
                    usersnotes2[usersongs1].splice(usersnotes2[usersongs1].indexOf(elimnotes),1);
                    console.log(usersnotes2);

                console.log("Eliminated: " + eliminated + ", Winner: " +  tempwinner);
                console.log("The winners are display below:");
                console.log(winners);
                console.log("AllUsers");
                console.log(allusers2);
                    }

                if(currround!=counter){ //To move on to the next round
                    document.getElementById("displayround").innerHTML = "Round of " + currround;
                   /* console.log("Number of songs remaining is " + numofsongsleft);                                                      
                    console.log("AllUsers");
                    console.log(allusers2);
                    console.log("Check length: " +allusers2.length);*/
                    
             usersongs1 = Math.floor(Math.random()*allusers2.length);
             usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves 
                
                if(allusers2.length<2){
                    console.log("ONLY ONE LEFT"); 
                    break;//Stop while loop;No need to randomize users with only one left
                }
                
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }

               
                //Checking the user arrays that has no more songs in them
                var toeliminate =[];
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

                users_name = users_name.filter(arr => arr.length > 0);



              /*  for(){
                    users_name.replace(toeliminate[x],)

                }*/
                


           if(allusers2.length>1){
            //(Normal Activities) Setting up new versus as long as theres still multiple users 
            allusers2 = allusers2.filter(arr => arr.length > 0);
            usersnotes2 = usersnotes2.filter(arr  => arr.length>0);
            console.log("AllUsers");
            console.log(allusers2);
            //console.log(allusers2.length);


            usersongs1 = Math.floor(Math.random()*allusers2.length);
            usersongs2 = Math.floor(Math.random()*allusers2.length);
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                
                if(allusers2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                    //Isn't this redundent due to "if(allusers2.length>1)" If statement? Might not be due to possibilty of last versus forcibily being the same user
                }
                
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }

            var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
             var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);
                
             if(allusers2.length<2){
                while(songselector1==songselector2){
                    var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
                    var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);                  
                }

                document.getElementById("leftnotes").innerHTML= usersnotes2[usersongs1][songselector1];
                document.getElementById("rightnotes").innerHTML= usersnotes2[usersongs2][songselector2];
                console.log(usersnotes2[usersongs1][songselector1] ,"vs", usersnotes2[usersongs2][songselector2]);

                


                setSong1(songselector1);
                setSong2(songselector2);
            }
             

           }
                
                

           else if(allusers2.length==1){
            //BUT if there's only one user left...

             songselector1=Math.floor(Math.random()*allusers2[0].length);
             songselector2=Math.floor(Math.random() * allusers2[0].length); //"allusers2[0].length);" is the main reason why we have this Else If statement

                while(songselector1==songselector2){
                     songselector1=Math.floor(Math.random()*allusers2[0].length)
                     songselector2=Math.floor(Math.random() * allusers2[0].length);
                     setSong1(songselector1);
                     setSong2(songselector2);
                   }

                   //users_name.splice(onlyone,1); //Remove name that has been eliminated
                   console.log(users_name);
                    usersongs1=0;
                    usersongs2=0;
                 }


                console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length:" + allusers2.length);
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
               /* console.log("AllUsers");
                console.log(allusers2);*/
               
                console.log(allusers2[usersongs1][songselector1] + " vs " + allusers2[usersongs2][songselector2]);

                console.log(usersnotes2)

                setSong1(songselector1);
                setSong2(songselector2);

                document.getElementById("leftnotes").innerHTML= usersnotes2[usersongs1][songselector1];
                document.getElementById("rightnotes").innerHTML= usersnotes2[usersongs2][songselector2];
                console.log(usersnotes2[usersongs1][songselector1] ,"vs", usersnotes2[usersongs2][songselector2]);


                var leftvidID=createvideoID(String(allusers2[usersongs1][songselector1]));
                var rightvidID=createvideoID(String(allusers2[usersongs2][songselector2]));

               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                /*document.getElementById("leftname").innerHTML = newusernames[usersongs1];
                document.getElementById("rightname").innerHTML = newusernames[usersongs2];*/
                
                console.log(users_name);
                console.log("usersongs1:" + usersongs1 + "; usersongs2 " + usersongs2);


                document.getElementById("leftname").innerHTML =users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];
   
            }

            else{ //When there's no songs left in allusers2, it's  time to go to the next round
                console.log("TO THE NEXT ROUND");
                numofsongsleft=numofsongsleft/2;
                currround = currround/2;
                document.getElementById("displayround").innerHTML = "Round of " + currround;                

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

                    for(x=0;x<allusers.length;x++){  
                        //Need allusers2 to have the amount of original users so songs can be place with their respective person
                        allusers2[x]=[];
                        usersnotes2[x]=[];
                        
                    }

                    console.log(usersnotes2);
                    console.log(allusers2);

                    for(x=0;x<winners.length;x++){ 
                        theuser=0;
                        findsong=0; //Song iterator for original list

                         while(findsong <totalsongs2){ //Assign winning song to winning user

                            if(winners[x]==utubeurls[findsong]){                    
                                if(allusers2.length<=1){ //Put in the first song of allusers2
                                    allusers2[0].push(winners[x]);
                                    newusernames.push(orderusernames[theuser]);
                                    usersnotes2[0].push(winnernotes[x]);
                                    //winnernotes.push(thenotes[findsong]);


                                    console.log("Winners Name:" + orderusernames[theuser] + "----- Winners Song:" + winners[x]);
                                console.log("Song Order on the list: " + findsong);
                                console.log("theuser Num:" + theuser + " Winner iter:" + x);
                                console.log(newusernames);
                                //console.log(thenotes[findsong]);
                                }
                               else{
                                console.log("AllUsers");
                                console.log(allusers2);
                                console.log("Winners Name:" + orderusernames[theuser] + "----- Winners Song:" + winners[x]);
                                console.log("Song Order on the list: " + findsong);
                                console.log("theuser Num:" + theuser + " Winner iter:" + x);

                                allusers2[theuser].push(winners[x]);
                                usersnotes2[theuser].push(winnernotes[x]);


                                if (!Array.isArray(allusers2[theuser])) {
                                    allusers2[theuser] = []; // Initialize as an empty array if it isn’t
                                }
                                

                                //Lets put the winner names here
                                if (!Array.isArray(allnames[tiercounter])) {
                                    allnames[tiercounter] = [];
                                }


                                
                                
                                console.log(orderusernames[theuser]);
                                allnames[tiercounter][x]=orderusernames[theuser];
                                //tiercounter++;

                                if(newusernames.includes(orderusernames[theuser])){
                                    /*The Else statement adds the name of the user to the names list only if it isn't already in there;
                                    Purpose is for the userssong1/userssong2 and names to match
                                    */
                                }
                                else{
                                   newusernames.push(orderusernames[theuser]);
                                }
                                console.log(winners);
                               }
                            }                       
                            findsong++;
                            findsonghelp++;
                            if(findsonghelp==songsperuser){ //For initial reapplication, every (songperuser) is dedicated to a person
                                //Meaning go onto next user according to in utubeurls                              
                                theuser++;
                                findsonghelp=0;   
                            }
                           }                                                      
                    }

                    console.log(usersnotes2);

                    
                    tiers[tiercounter]=winners; //Saving results via tiers that will be displayed on Results page
                    tiercounter++;
                    document.getElementById("tiers").value = JSON.stringify(tiers);
                    console.log(tiers);



                    winners=[]; //Need to store/record old winners before clearing this out (long term)
                    counter=0;

                //users_name=newusernames  //Change this?
                
                allusers2 = allusers2.filter(item => !(Array.isArray(item) && item.length === 0));
                usersnotes2 = usersnotes2.filter(item => !(Array.isArray(item) && item.length === 0));

                console.log("Adding the winners to the next evaluated crop(allusers2)");
                console.log("AllUsers " + allusers2.length);
                console.log(allusers2);


                //newusernames.sort();

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

           console.log(allnames);
           document.getElementById("allnames").value = JSON.stringify(allnames);
           document.getElementById("losers").value = JSON.stringify(losers);
           document.getElementById("losernames").value= JSON.stringify(losernames);
           document.getElementById("notesforresults").value = JSON.stringify(keepwinnernotes);
           document.getElementById("losernotes").value = JSON.stringify(losernotes);

          /* allnames[tiercounter++]=newusernames;//Save names for results
           console.log(allnames);
           document.getElementById("allnames").value = JSON.stringify(allnames);*/


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

            //winnernotes=[];
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
                    //console.log("TOURNAMENT FINISHED");
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


                    console.log(     losers                );
                    console.log(losernames);


                   /* allnames[tiercounter]=orderusernames2;
                    console.log(allnames);
                    document.getElementById("allnames").value = JSON.stringify(allnames);*/

                }
                else{ //The Song selection process starts again if there isn't a winning song

                    console.log("Reapply winners");

                console.log("ALL USERS");
                console.log(allusers2);
                //Getting rid of the empty arrays/users that don't have any songs in them
                for(x=0;x<allusers2.length;x++){
                    if(allusers2[x].length==0 ){ 
                        allusers2.splice(x,1);                       
                    }
                } 
                
              
           //Where the ordered names used to be
        

           if(allusers2.length>1){
            //Normal Activities

            usersongs1 = Math.floor(Math.random()*allusers2.length);
            usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){  
                if(allusers2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                }    
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);  
                }

           console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length:" );
           var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
            var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);

            setSong1(songselector1);
            setSong2(songselector2);

            console.log(usersnotes2);
            document.getElementById("leftnotes").innerHTML= usersnotes2[usersongs1][songselector1];
            document.getElementById("rightnotes").innerHTML= usersnotes2[usersongs2][songselector2];
            console.log(usersnotes2[usersongs1][songselector1] ,"vs", usersnotes2[usersongs2][songselector2]);


           }         

           else if(allusers2.length==1){
            //BUT if there's only one user left...
            console.log("AllUsers");
            console.log(allusers2);

                while(songselector1==songselector2){
                     var songselector1=Math.floor(Math.random()*allusers2[0].length)
                     var songselector2=Math.floor(Math.random() * allusers2[0].length);

                     setSong1(songselector1);
                    setSong2(songselector2);
                    }
                    usersongs1=0;
                    usersongs2=0;
                 }

                 document.getElementById("leftnotes").innerHTML= usersnotes2[usersongs1][songselector1];
                 document.getElementById("rightnotes").innerHTML= usersnotes2[usersongs2][songselector2];
                 console.log(usersnotes2[usersongs1][songselector1] ,"vs", usersnotes2[usersongs2][songselector2]);



                 

                console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length:",allusers2.length );
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
               
               
                console.log(allusers2[usersongs1][songselector1] + " vs " + allusers2[usersongs2][songselector2]);

                var leftvidID=createvideoID(String(allusers2[usersongs1][songselector1]));
                var rightvidID=createvideoID(String(allusers2[usersongs2][songselector2]));
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                console.log("usersongs1: " + usersongs1 + ";usersongs2: " + usersongs2);
                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];

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
            
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/; 
                const match = theurl.match(regExp); 
                /*match[0] is the entire url,  match[1] is which exxpression contained the video ID, match[2] is the ID itself*/
            
                return (match && match[2].length === 11) ? match[2] : null; /*Youtube ID's are always 11 characters long*/ 
            
        }


          
          async function getVideoDetails(whichside,videoId){
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

            try{
                const response = await fetch(apiUrl);
                if(!response.ok){
                    throw new Error("Network status isn't ok:" + response.statusText);
                }
                const data = await response.json();
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
            coinflip();
          }

          
          var showtheflip = document.getElementById("showthecoinflip"); 
          var flipcounter=1;

          function coinflip(){
           if(flipcounter<=3){
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
            flipattemptresult.style.display="block";
            flipattemptresult.style.borderRight="1px black solid";
            flipattemptresult.style.borderRadius="50%";
            flipattemptresult.style.height="2vh";
            flipattemptresult.style.padding="1vh";
           // flipattemptresult.style.boxSizing="border-box";
           flipattemptresult.style.margin="5% auto 5% auto";
           flipattemptresult.style.textAlign="center";
           flipattemptresult.style.fontSize="2vw";
           flipattemptresult.style.aspectRatio="1";
            document.getElementById("trackflips").appendChild(flipattemptresult);

            
            if(flipcounter>=3){
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
                            changecolor.style.backgroundColor="green";
                        }
                        else{
                            changecolor.style.backgroundColor="red";
                        }
                    });
                }
                else{
                    showtheflip.innerHTML="Tails Win!";
                    getwinner.forEach(changecolor=>{
                        if(changecolor.innerHTML=="Tails"){
                            changecolor.style.backgroundColor="green";
                        }
                        else{
                            changecolor.style.backgroundColor="red";
                        }
                    });

                }

            }
            flipcounter++;
           }
           else{

           }

          }

          function closecoinflip(){
            var closecoinflip = document.getElementById("coinflip_contain");
            closecoinflip.style.display="none";
            flipcounter=1;
            var trackflips = document.getElementById("trackflips");
            var clearthese = trackflips.querySelectorAll("div");
            clearthese.forEach(clearthese=>{
                trackflips.removeChild(clearthese);
            });
          }
