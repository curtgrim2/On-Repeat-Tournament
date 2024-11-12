
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
            var orderusernames=[];
            var users_namessongs=[]
            var totalsongs = allusers.length;
            var onlyone=18;
            console.log();
            for(x=0;x<allusers.length;x++){ //Each array
                var usersongnum=0; 
                while(usersongnum<songsperuser){
                    //console.log(utubeurls[songiter]);
                    allusers[x][usersongnum]= utubeurls[songiter++];
                    users_name[x]=testnames[x].innerHTML; //Will use to display the name underneath video
                    orderusernames[x]=testnames[x].innerHTML;

                   // users_name[x][usersongnum]=allusers[x][usersongnum];               
                   /*allusers[x][usersongnum][0]=users_name[x];
                   console.log(allusers[x][usersongnum][0]);*/
                   
                    usersongnum++;
                }
            }

            
          //console.log(users_name[0] + " vs " + users_name[1]);  //console.log(allusers[0][0] + "vs" + allusers[1][0]); //How we will display the names per the last comment

          //console.log(allusers[0][usersongnum][0]);
          //console.log( allusers[x][usersongnum]);

            //users_name.sort();
            console.log( allusers);
            console.log(users_name);
            //const orderusernames=users_name;
            console.log(orderusernames);


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

            //Set up initial First Matchup

            var usersongs1 = Math.floor(Math.random()*allusers2.length);
            var usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }

                var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
                var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);

                setSong1(songselector1);
            setSong2(songselector2);

                console.log(allusers2[usersongs1][songselector1] + " vs " + allusers2[usersongs2][songselector2]);

                var leftvidID=createvideoID(String(allusers2[usersongs1][songselector1]));
                var rightvidID=createvideoID(String(allusers2[usersongs2][songselector2]));
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                console.log("usersongs1:" + usersongs1 + "usersongs2" + usersongs2);
                document.getElementById("leftname").innerHTML = users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];


                


            //Continuing Tournament


            function thewinneris(theanswer){
                //console.log(allusers2[usersongs2]);
                thelogic(theanswer,getSong1(),getSong2());//
                
                
            }



            function thelogic(theanswer,songselector1,songselector2){ // function thelogic(theanswer,songselector1,songselector2)
                counter=counter+2; //Keeping track of how many songs we went through in the round
                console.log("AllUsers");
                console.log(allusers2);
            console.log("Counter:" + counter + ", Current Round:" +currround);
                if(counter<=currround) { //Going through each round
                    //console.log("Left number:"+ usersongs1 + " Right number:"+ usersongs2);
                if(theanswer == "left"){
                    //console.log(allusers2[usersongs1]);
                    console.log("LEFT");
                    console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                    var eliminated = allusers2[usersongs2][songselector2];//var eliminated = allusers2[usersongs2][songselector2].shift(); // Remove the first element
                    var tempwinner = allusers2[usersongs1][songselector1];
                    
                     onlyone = usersongs2;
                     console.log("ONLYONE:"+onlyone);

                    winners.push(tempwinner); /*winners.push(allusers2[usersongs1][songselector1].shift()); */
                    
                    allusers2[usersongs1].splice(songselector1,1); /*winners.push(allusers2[usersongs1][songselector1].shift()); */
                    allusers2[usersongs2].splice(songselector2,1);

                   /* users_name.splice(usersongs2,1);
                    users_name.splice(usersongs1,1); */


                    //allusers2 = allusers2.filter(arr => arr.length > 0);

                console.log( "Winner: " +  tempwinner + ", Eliminated: " + eliminated); //console.log("Eliminated: " + eliminated + ", Winner: " +  allusers2[usersongs1][0]);
                console.log(winners);
                console.log("AllUsers");
                console.log(allusers2);
                //console.log(allusers);
                }
                else if (theanswer == "right"){
                    console.log("RIGHT");
                    console.log(allusers2[usersongs2]);
                    console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                    var eliminated = allusers2[usersongs1][songselector1]; // Remove the first element
                    var tempwinner = allusers2[usersongs2][songselector2];

                    onlyone = usersongs1;
                    console.log("ONLYONE:"+onlyone);
                    winners.push(tempwinner);
                    allusers2[usersongs2].splice(songselector2,1)
                    allusers2[usersongs1].splice(songselector1,1);
  

                    //allusers2 = allusers2.filter(arr => arr.length > 0);


                console.log("Eliminated: " + eliminated + ", Winner: " +  tempwinner);
                console.log("The winners are display below:");
                console.log(winners);
                console.log("AllUsers");
                console.log(allusers2);
                    }

                if(currround!=counter){
                    document.getElementById("displayround").innerHTML = "Round of " + currround;
                   // console.log("Number of songs remaining is " + numofsongsleft);                                                      
                       
                    //allusers2 = allusers2.filter(arr => arr.length > 0);
                    console.log("AllUsers");
                    console.log(allusers2);
                    console.log("Check length: " +allusers2.length);
                    
             usersongs1 = Math.floor(Math.random()*allusers2.length);
             usersongs2 = Math.floor(Math.random()*allusers2.length);
    
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                
                if(allusers2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                }
                
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                }

                //console.log("Went past loop");
               var useifonly1=0;              
                //else{
                
                for(x=0;x<allusers2.length;x++){
                    if(allusers2[x].length==0 ){ //if(allusers2<2){
                        console.log("User "+users_name[x]+" has been eliminated");                       
                        users_name.splice(x,1);
                        //allusers2.splice(x,1);
                        //allusers2[x][0]=null;                       
                        //console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length: " + allusers2.length);                     
                    }
                    else{

                        useifonly1=x; 
                    }
                } 
                
           // }

           if(allusers2.length>1){
            //Normal Activities
            allusers2 = allusers2.filter(arr => arr.length > 0)
            console.log("AllUsers");
            console.log(allusers2);
            console.log(allusers2.length);


            usersongs1 = Math.floor(Math.random()*allusers2.length);
            usersongs2 = Math.floor(Math.random()*allusers2.length);
            while(usersongs2 == usersongs1 ){ //Makes sure the same user isn't going against themselves //&& usersongs1!=-1 && usersongs2 !=-1
                
                if(allusers2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                }
                
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
                //console.log("usersongs1:" + usersongs1 +"; ,usersongs2:" + usersongs2);
                }
           console.log("usersongs1:" + usersongs1 +"; ,usersongs2:" + usersongs2);
           console.log(allusers2[usersongs1]);
           console.log(allusers2[usersongs2]);
           console.log(allusers2[usersongs1].length);
            var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
             var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);
                
             if(allusers2.length<2){
                while(songselector1==songselector2){
                    var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
                    var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);

                    
                }

                setSong1(songselector1);
                setSong2(songselector2);
            }
             

             

           // while(songselector1==songselector2){
               // var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
                //var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);
           // }
           }
                
                

           else if(allusers2.length==1){
            //BUT if there's only one user left...

             songselector1=Math.floor(Math.random()*allusers2[0].length);
             songselector2=Math.floor(Math.random() * allusers2[0].length);

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
                console.log("AllUsers");
                console.log(allusers2);
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
               
                console.log(allusers2[usersongs1][songselector1] + " vs " + allusers2[usersongs2][songselector2]);
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
                setSong1(songselector1);
                setSong2(songselector2);

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

               /* if(allusers2.length==1){
                    //console.log("ONLYONE");
                    document.getElementById("leftname").innerHTML =onlyone;
                    document.getElementById("rightname").innerHTML =onlyone;
                }
                else{ */
                    document.getElementById("leftname").innerHTML =users_name[usersongs1];
                document.getElementById("rightname").innerHTML = users_name[usersongs2];
              //  }
                
    
            }

            else{
                console.log("To the next round?");
                numofsongsleft=numofsongsleft/2;
                //counter=2;
                currround = currround/2;
                document.getElementById("displayround").innerHTML = "Round of " + currround;
                //console.log("Counter:" + counter + ", Current Round:" +currround);
                

                var findsong=0;
                var iteratehelp=0;
                var winnersindex=0;
                var newusersindex=0;
                var theuser = 0;
                var findsonghelp=0;
                //users_name=orderusernames;
                console.log(users_name);
                var newusernames=[];
                var winners2 =[];

                console.log("Songs per user: " + songsperuser);


                    for(x=0;x<winners.length;x++){
                        allusers2[x]=[];
                    }

                    console.log(allusers2);


                    for(x=0;x<winners.length;x++){ //Each array
                        theuser=0;
                        findsong=0;

                        


                        var blah=0;
                        blah++;
                         while(findsong <totalsongs2){ //while(findsong<songsperuser){ /Assign winning song to winning user
                            if(winners[x]==utubeurls[findsong]){// if(winners[x]==allusers[finduser][findsong]){
                                
                                if(allusers2.length<=1){
                                    allusers2[0].push(winners[x]);
                                    newusernames.push(orderusernames[theuser]);
                                    //newusernames.push(orderusernames[theuser]);

                                    console.log("Only one array?");
                                    
                                    console.log("Winners Name:" + orderusernames[theuser] + "----- Winners Song:" + winners[x]);
                                    //console.log("Winners Name:" + users_name[theuser] + "----- Winners Song:" + winners[x]);
                                console.log("Song Order on the list: " + findsong);
                                console.log("theuser Num:" + theuser + " Winner iter:" + x);
                                console.log(newusernames);
                                }
                               else{
                                console.log("AllUsers");
                                console.log(allusers2);
                                console.log("Winners Name:" + orderusernames[theuser] + "----- Winners Song:" + winners[x]);
                                console.log("Song Order on the list: " + findsong);
                                console.log("theuser Num:" + theuser + " Winner iter:" + x);
                                console.log(winners[x]);
                                if (!Array.isArray(allusers2[theuser])) {
                                    allusers2[theuser] = []; // Initialize as an empty array if it isn’t
                                }
                                allusers2[theuser].push(winners[x]);
                                //newusernames[newusersindex++]=users_name[theuser];

                                if(newusernames.includes(orderusernames[theuser])){
                                    
                                }
                                else{
                                   newusernames.push(orderusernames[theuser]);
                                  // newusernames[theuser]=orderusernames[theuser]
                                }
                                //newusernames.push(users_name[theuser]);
                                console.log(winners);
                               }
                            }                       
                            findsong++;
                            findsonghelp++;
                            if(findsonghelp==songsperuser){ //For initial reapplication, evry (songperuser) is dedicated to a person
                                //Meaning go onto next user according to in utubeurls
                                
                                //console.log("findsonghelp: "+findsonghelp);                       
                                theuser++;
                                findsonghelp=0;   
                                //console.log("Switch to User number: " + theuser + "; findsong: "+ findsong);                            
                            }
                           }                                                      
                    }

                    //songsperuser=songsperuser/2;
                    winners=[]; //Need to store/record old winners before clearing this out (long term)
                    counter=0;
                    console.log(winners);

                //users_name=newusernames  //Change this?
                
                allusers2 = allusers2.filter(item => !(Array.isArray(item) && item.length === 0));
                console.log("Adding the winners to the next evaluated crop(allusers2)");
                console.log("AllUsers " + allusers2.length);
                console.log(allusers2);




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
                
                if(allusers2.length<2){
                    console.log("ONLY ONE LEFT");
                    break;
                }
                
                usersongs1 = Math.floor(Math.random()*allusers2.length);
                usersongs2 = Math.floor(Math.random()*allusers2.length);
    
                
                }

                var useifonly1=0;              
                //else{
                console.log("ALL USERS");
                console.log(allusers2);
                for(x=0;x<allusers2.length;x++){
                    if(allusers2[x].length==0 ){ //if(allusers2<2){
                       // console.log("THERE CAN BE ONLY ONE");
                        allusers2.splice(x,1);                       
                        //console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length: " + allusers2.length);                     
                    }
                    else{
                        /*while(usersongs2 == usersongs1 ){
                            usersongs1 = Math.floor(Math.random()*allusers2[x].length);
                            usersongs2 = Math.floor(Math.random()*allusers2[x].length);
                        }

                        console.log("OnlyArrayLeft Length:" + allusers2[x].length);
                        */
                        useifonly1=x; 
                    }
                } 
                
           // }

           //newusernames.sort();
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
           newusernames=orderusernames2


           if(allusers2.length==1){
            console.log("This is TRUEEEEEEEEE");
            users_name=newusernames;
        }
        
        users_name=newusernames;
        console.log(orderusernames2);
        console.log(newusernames);
        

           if(allusers2.length>1){
            //Normal Activities

           //console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length:" );
           console.log(usersongs1 +"," + usersongs2);
           console.log(allusers2[usersongs1].length);
           var songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
            var songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);

            setSong1(songselector1);
            setSong2(songselector2);

           // while(songselector1==songselector2){
                //songselector1=Math.floor(Math.random()*allusers2[usersongs1].length)
                //songselector2=Math.floor(Math.random() * allusers2[usersongs2].length);
           // }
           }
                
                

           else if(allusers2.length==1){
            //BUT if there's only one user left...
            console.log(useifonly1);
            console.log("AllUsers");
            console.log(allusers2);

           
            console.log(allusers2[0]);
           // var songselector1=Math.floor(Math.random()*all_users2[useifonly1].length);


            

                while(songselector1==songselector2){
                     var songselector1=Math.floor(Math.random()*allusers2[0].length)
                     var songselector2=Math.floor(Math.random() * allusers2[0].length);

                     setSong1(songselector1);
                    setSong2(songselector2);
                    }

                    usersongs1=0;
                    usersongs2=0;
                 }


                 

                console.log("usersongs1:" + usersongs1 +"; usersongs2:" + usersongs2 + "; allusers2.length:" );
                console.log("songselector1:" + songselector1 +"; songselector2:" + songselector2);
               
                console.log(allusers2[usersongs1][songselector1] + " vs " + allusers2[usersongs2][songselector2]);

                var leftvidID=createvideoID(String(allusers2[usersongs1][songselector1]));
                var rightvidID=createvideoID(String(allusers2[usersongs2][songselector2]));
               
                document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
                document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;
                getVideoDetails("left",leftvidID);
                getVideoDetails("right",rightvidID);
                console.log("usersongs1:" + usersongs1 + "usersongs2" + usersongs2);
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
