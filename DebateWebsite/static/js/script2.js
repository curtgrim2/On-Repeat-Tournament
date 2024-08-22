            var testusernum = 3;
            var num =0;
            //var everyuserssong = new Map();


            const ul_ = document.querySelector('#eachname');
            const all_li = ul_.querySelectorAll('li');
            const testnames = Array.from(all_li);
            console.log(testnames[num].innerHTML);
            

            console.log('Total number of users: ' +totalusers);
            console.log('Total number of songs: ' + songsperuser);
            

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
            for(x=0;x<allusers.length;x++){ //Each array
                var usersongnum=0; 
                while(usersongnum<songsperuser){
                    //console.log(utubeurls[songiter]);
                    allusers[x][usersongnum]= utubeurls[songiter++];
                    usersongnum++;
                }
            }

            console.log( allusers[0]);

            var eliminated;
            var winners=[];
            var counter=0;
            var numofsongsleft=totalusers*songsperuser;
            var totalrounds = 3;
            var currround = 8; //Needs to be 64 on final versionS


            //Start of Round of 64

            var allusers2 = allusers;
            console.log(allusers2);


           



            //Initial First Matchup












            //Continuing Tournament



            function thewinneris(theanswer){

                    console.log("Round of " + currround);
                   // console.log("Number of songs remaining is " + numofsongsleft);                                                      
                       
                    allusers2 = allusers2.filter(arr => arr.length > 0);
                    console.log(allusers2);
                if (allusers2.length < 2) {
                    console.log("Not enough people left to continue the tournament.");
                    console.log(allusers2[0]);                   
                }
    
            var usersongs1 = Math.floor(Math.random()*allusers2.length);
            var usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }
    
                
               // console.log(allusers2[usersongs1][0] + " vs " + allusers2[usersongs2][0]);
                
                
                var leftvidID=createvideoID(allusers2[usersongs1][0]);
                var rightvidID=createvideoID(allusers2[usersongs2][0]);
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
    
                
    
                if(theanswer == "left"){
                    var eliminated = allusers2[usersongs2].shift(); // Remove the first element
                winners.push(allusers2[usersongs1][0]);
                console.log("Eliminated: " + eliminated + ", Winner: " +  allusers2[usersongs1][0]);
                }
                else{
                    var eliminated = allusers2[usersongs1].shift(); // Remove the first element
                winners.push(allusers2[usersongs2][0]);
                console.log("Eliminated: " + eliminated + ", Winner: " +  allusers2[usersongs2][0]);
                    }
      


                counter=counter+2; //Keeping track of how many songs we went through in the round
                if(counter==numofsongsleft){
                    numofsongsleft=numofsongsleft/2;
                    counter=0;
                    currround = currround/2;
                    if(currround<2){ //Overall rounds checker; Once we past the one on one (last tournament) the game ends
                        console.log("TOURNAMENT FINISHED");
                        console.log(winners);
                    }
                }    
            }



            function createvideoID(theurl){
            
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                const match = theurl.match(regExp);
            
                return (match && match[2].length === 11)
                  ? match[2]
                  : null;
            
        }
