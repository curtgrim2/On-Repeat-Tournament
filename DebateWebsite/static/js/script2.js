var testusernum = 3;
            var num =0;
            //var everyuserssong = new Map();
            //console.log('{{utubeurls | tojson}}');
            //var totalusers = Number('{{totalusers}}');
            //var songsperuser = Number('{{songspereach}}');

            //var utubeurls = JSON.parse('{{ utubeurls | tojson | safe }}');
            //var usernames = JSON.parse('{{allnames | tojson | safe}}');


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

        /*    var y=0;
            for(iterate=0; iterate<testusernum; iterate++){
                
               // while(y<2){
                    everyuserssong.set(testnames[iterate],allusers[iterate]);
                   // y++;
              //  }
                y=0;               
            }
                */

            //var userKeys = Array.from(everyuserssong.keys());

            //console.log(everyuserssong);

            var eliminated;
            var winners=[];
            var counter=0;
            var numofsongsleft=totalusers*songsperuser;
            var totalrounds = 3;



            //Start of Round of 64

            var allusers2 = allusers;
            console.log(allusers2);
           
            for(x=8; x>=1;x=x/2){ //6 rounds in Round of 64  // for(x=0;x<6;x+
                console.log("Round of " + x);
                console.log("Number of songs remaining is " + numofsongsleft);
                thelogic(numofsongsleft);             
                numofsongsleft=numofsongsleft/2;
        }
        console.log("Tournament Over");
        console.log(winners);






        async function thelogic(numofsongsleft){
            for(y=0; y<numofsongsleft;y+=2){
                   
                allusers2 = allusers2.filter(arr => arr.length > 0);
                console.log(allusers2);
            if (allusers2.length < 2) {
                console.log("Not enough people left to continue the tournament.");
                break;
            }

        var randomarr = Math.floor(Math.random()*allusers2.length);
        var randomarr2 = Math.floor(Math.random()*allusers2.length);

        while(randomarr2 == randomarr ){ //Makes sure the same user isn't going against themselves //&& randomarr!=-1 && randomarr2 !=-1
            randomarr = Math.floor(Math.random()*allusers2.length);
            randomarr2 = Math.floor(Math.random()*allusers2.length);
            }

            
            console.log(allusers2[randomarr][0] + " vs " + allusers2[randomarr2][0]);
            
            var leftvidID=createvideoID(allusers2[randomarr][0]);
            var rightvidID=createvideoID(allusers2[randomarr2][0]);
           
            document.getElementById("leftvid").src = "//www.youtube.com/embed/" + leftvidID;
            document.getElementById("rightvid").src = "//www.youtube.com/embed/" + rightvidID;

            var thechoice = await thewinneris('leftbutt','rightbutt');

            if(thechoice == "Left"){
                var eliminated = allusers2[randomarr2].shift(); // Remove the first element
            winners.push(allusers2[randomarr][0]);
            console.log("Eliminated: " + eliminated + ", Winner: " +  allusers2[randomarr][0]);
            }
            else{
                var eliminated = allusers2[randomarr].shift(); // Remove the first element
            winners.push(allusers2[randomarr2][0]);
            console.log("Eliminated: " + eliminated + ", Winner: " +  allusers2[randomarr2][0]);
                }
            }
        }

        function thewinneris(leftop,rightop){
            
            return new Promise(resolve=>{
                var left_op = document.getElementById(leftop);
                var right_op = document.getElementById(rightop);


                if(left_op && right_op){
                    left_op.addEventListener('click',returnAnswer);
                right_op.addEventListener('click',returnAnswer);
                }
                

                function returnAnswer(event){
                    console.log("XXXXXXXX");
                    if(event.target.id==leftop){
                        resolve('Left');
                    }
                    else{
                        resolve('Right');
                    }
                    left_op.removeEventListener('click',returnAnswer);
                    right_op.removeEventListener('click',returnAnswer);
                }
                
            });
        }



        function createvideoID(theurl){
            
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                const match = theurl.match(regExp);
            
                return (match && match[2].length === 11)
                  ? match[2]
                  : null;
            
        }
