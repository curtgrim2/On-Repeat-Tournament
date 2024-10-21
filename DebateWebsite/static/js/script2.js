
const apiKey = 'AIzaSyBc9Y9VMDPAaILM7erb5kwBhJ_B8knnKQk';
var testusernum = 3;
            var num =0;
            //var everyuserssong = new Map();


            const ul_ = document.querySelector('#eachname');
            const all_li = ul_.querySelectorAll('li');
            const testnames = Array.from(all_li);
          /*  console.log(testnames[num].innerHTML);
            

            console.log('Total number of users: ' +totalusers);
            console.log('Total number of songs: ' + songsperuser);*/
            

            var user1songs = [];//,"User 1 Song 1","User 1 Song "];
            var user2songs = [];//,"User 2 Song 3", "User 2 Song 4"];
            var user3songs = [];//,"User 3 Song 3", "User 3 Song 4"];
            var user4songs = [];
            var user5songs = [];
            var user6songs = [];

            var allusers = [user1songs,user2songs,user3songs,user4songs,user5songs,user6songs];


            //Setting the amount of users that are playing the game (Maximum of 6)
            var setlength = allusers.length;
            for(x=totalusers;x<setlength;x++){
                allusers.pop();
            }


            //Placing all the users songs into the arrays
            var songiter = 0;
            
            var users_name=[];
            var users_namessongs=[]
            var totalsongs = allusers.length
            console.log();
            for(x=0;x<allusers.length;x++){ //Each array
                var usersongnum=0; 
                while(usersongnum<songsperuser){
                    //console.log(utubeurls[songiter]);
                    allusers[x][usersongnum]= utubeurls[songiter++];
                    users_name[x]=testnames[x].innerHTML; //Will use to display the name underneath video


                   // users_name[x][usersongnum]=allusers[x][usersongnum];               
                   /*allusers[x][usersongnum][0]=users_name[x];
                   console.log(allusers[x][usersongnum][0]);*/
                   
                    usersongnum++;
                }
            }

            
          //console.log(users_name[0] + " vs " + users_name[1]);  //console.log(allusers[0][0] + "vs" + allusers[1][0]); //How we will display the names per the last comment

          //console.log(allusers[0][usersongnum][0]);
          //console.log( allusers[x][usersongnum]);

            console.log( allusers);

            var eliminated;
            var winners=[];
            var counter=0;
            var numofsongsleft=totalusers*songsperuser;
            const totalsongs2 = numofsongsleft;
            var totalrounds = 3;
            var currround = 8; //Needs to be 64 on final versionS


            //Start of Round of 64

            var allusers2 = allusers;
            console.log(allusers2);


           

            document.getElementById("displayround").innerHTML = "Round of " + currround;

            //Initial First Matchup

            var usersongs1 = Math.floor(Math.random()*allusers2.length);
            var usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }
                console.log(allusers2[usersongs1][0] + " vs " + allusers2[usersongs2][0]);

                var leftvidID=createvideoID(allusers2[usersongs1][0]);
                var rightvidID=createvideoID(allusers2[usersongs2][0]);
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];


                


            //Continuing Tournament


            function thewinneris(theanswer){
                //console.log(allusers2[usersongs2]);
                thelogic(theanswer);
            }



            function thelogic(theanswer){
                counter=counter+2; //Keeping track of how many songs we went through in the round
            
                console.log(allusers2);
            console.log("Counter:" + counter + ", Current Round:" +currround);
                if(counter<=currround) { //Going through each round
                    //console.log("Left number:"+ usersongs1 + " Right number:"+ usersongs2);
                if(theanswer == "left"){
                    console.log(allusers2[usersongs1]);
                    var eliminated = allusers2[usersongs2].shift(); // Remove the first element
                    var tempwinner = allusers2[usersongs1][0];
                    winners.push(allusers2[usersongs1].shift());

                //allusers2[usersongs1].shift();

                console.log( "Winner: " +  tempwinner + ", Eliminated: " + eliminated); //console.log("Eliminated: " + eliminated + ", Winner: " +  allusers2[usersongs1][0]);
                console.log(winners);
                }
                else if (theanswer == "right"){
                    console.log(allusers2[usersongs2]);
                    var eliminated = allusers2[usersongs1].shift(); // Remove the first element
                    var tempwinner = allusers2[usersongs2][0];
                    winners.push(allusers2[usersongs2].shift());

                //allusers2[usersongs2].shift();

                console.log("Eliminated: " + eliminated + ", Winner: " +  tempwinner);
                console.log("The winners are display below:");
                console.log(winners);
                    }

                if(currround!=counter){
                    document.getElementById("displayround").innerHTML = "Round of " + currround;
                   // console.log("Number of songs remaining is " + numofsongsleft);                                                      
                       
                    //allusers2 = allusers2.filter(arr => arr.length > 0);

                    
             usersongs1 = Math.floor(Math.random()*allusers2.length);
             usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                
                if(allusers2<2){
                    console.log("Next round?");
                    break;
                }
                
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }
    
                
                console.log(allusers2[usersongs1][0] + " vs " + allusers2[usersongs2][0]);
                //console.log("Left number:"+ usersongs1 + " Right number:"+ usersongs2);


               //if(counter!=currround) { //Going through each round
                var leftvidID=createvideoID(allusers2[usersongs1][0]);
                var rightvidID=createvideoID(allusers2[usersongs2][0]);
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];
    
            }

            else{
                console.log("To the next round?");
                numofsongsleft=numofsongsleft/2;
                //counter=2;
                currround = currround/2;
                document.getElementById("displayround").innerHTML = "Round of " + currround;
                //console.log("Counter:" + counter + ", Current Round:" +currround);
                

                var finduser=0;
                var findsong=0;
                var iteratehelp=0;
                var newusersindex=0;
                var theuser =0;
                newusernames=[];

                    for(x=0;x<winners.length;x++){ //Each array
                        //finduser=0;
                        theuser=0;
                        findsong=0;
                        //allusers2[x]=winners[x];
                        //allusers[x][usersongnum]= utubeurls[songiter++];


                         while(findsong <totalsongs2){ //while(findsong<songsperuser){ /Assign winning song to winning user
                            if(winners[x]==utubeurls[findsong]){// if(winners[x]==allusers[finduser][findsong]){
                                
                                //console.log( winners[x] + " , " + utubeurls[findsong]);
                                //console.log(users_name[theuser]);
                                newusernames[newusersindex++]=users_name[theuser];
                                console.log(allusers2);
                                allusers2[theuser].push(winners[x]);

                            }
                        
                            findsong++;
                            if(findsong==songsperuser){ //For initial reapplication, evry (songperuser) is dedicated to a person
                                theuser++;
                                
                            }
                           }   
                           
                           
                    }

                    winners=[]; //Need to store/record old winners before clearing this out (long term)
                    counter=0;
                    console.log(winners);

                //users_name=newusernames // I did this intentional in case I need to keep the old user name winners in the future
                console.log(newusernames);
                console.log("Adding the winners to the next evaluated crop(allusers2)");
                console.log(allusers2);


               // allusers2[0] = allusers2[0].filter(arr => arr.length > 0);
                //allusers2[1] = allusers2[1].filter(arr => arr.length > 0);
                console.log(allusers2);
               /* if(allusers2<2){
                    console.log("THERE CAN BE ONLY ONE");
                    
                }*/

                if(currround<2){ //Overall rounds checker; Once we past the one on one (last tournament) the game ends
                    console.log("TOURNAMENT FINISHED");
                    console.log(winners);
                    //Will need more to prevent the overall action loop from starting; Redirect page here?
                }
                else{

                    console.log("Reapply winners");
                        usersongs1 = Math.floor(Math.random()*allusers2.length);
                        usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ 
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }

               
                console.log(allusers2[usersongs1][0] + " vs " + allusers2[usersongs2][0]);

                var leftvidID=createvideoID(allusers2[usersongs1][0]);
                var rightvidID=createvideoID(allusers2[usersongs2][0]);
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];

                }
            }
    
               //Where the first if statement used to be

                
                }
              
            }



            function createvideoID(theurl){
            
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                const match = theurl.match(regExp);
            
                return (match && match[2].length === 11)
                  ? match[2]
                  : null;
            
        }


          
          async function getVideoDetails(whichside,videoId){
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

            try{
                const response = await fetch(apiUrl);
                if(!response.ok){
                    throw new Error("NNetwork status isn't ok:" + response.statusText);
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
