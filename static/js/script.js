const apiKey =  'AIzaSyBc9Y9VMDPAaILM7erb5kwBhJ_B8knnKQk'


var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
let numofusers = document.getElementById("showusernum");
var error = document.getElementById("errorbox");
/*changingvalue = 2;
numofusers.innerHTML=changingvalue;*/

var gamespecs = document.getElementById("startup");

var slide2 = document.getElementById("slide2");
slide2.style.display = "none";
var slide1 = document.getElementById("slide1");
var slide3 = document.getElementById("slide3");
slide3.style.display ="none";

var olddrafts = document.getElementById("olddrafts") ;

var totalsongs;

function toslide2(showusernum){
    var songperuser = document.getElementById("songsperuser").value
    totalsongs =   parseInt(document.getElementById("songsperuser").value) * parseInt(showusernum.value);
     if(songperuser == "" || showusernum.value  ==""){
        error.style.display = "block";
        error.innerHTML = "Values cannot be empty!";
   }

   else if(totalsongs%2!==0){
    error.style.display = "block";
    error.innerHTML = "TOTAL AMOUNT OF SONGS MUST BE EVEN";

    if(showusernum.value %2!=0){
        error.innerHTML = "Make songs per user an even number";
    }
   }

   else if(showusernum.value>6){
    error.style.display = "block";
    error.innerHTML = "TOO MANY USERS - Maximum of 6";
   }

   else if(showusernum.value < 0){
    error.style.display = "block";
    error.innerHTML = "Must have at least 1 user";
   }

   
  
   else {
    

    console.log(showusernum.value);
    slide1.style.display = "none";
    slide2.style.display ="block";
    error.style.display = "none";

    

    for(x=0; x<showusernum.value; x++){ 
        var node  = document.createElement("input");
        node.type = "text";
       // node.name = "allnames";
       node.name = `name${x}`;
       node.id=`nameid${x}`; //Dynamically hard coding unique names and id(Not used) for each user
        node.className = "allnames2";
        node.placeholder="Enter name here";
        document.getElementById("enternames").appendChild(node);
    } 
}
}

function toslide3(showusernum,enternames){ /*For Youtube URLs */
    slide1.style.display = "none";
    slide2.style.display ="none";
    slide3.style.display ="block";
    olddrafts.style.display="none";
    error.style.display = "none";

    //document.getElementById("startup").style.display = "none";
    eacheverysong=0;

 /*For each name, take the number of songs and ask them to insert Youtube URL into each textbox */
      for( x=0; x<showusernum.value; x++){ //For loop for each user
       var newdiv = document.createElement("div");
       newdiv.id = `namenumid${x}`;
       newdiv.style.backgroundColor = "grey";
       //newdiv.style.minWidth="400px";
       newdiv.style.display="block";
       newdiv.style.margin="10px";
       newdiv.style.width="50%";
       //newdiv.style.height="100%"; //No height added to have it adjust to the amount of input elements
       newdiv.style.paddingBottom ="5%";
       newdiv.style.position ="relative";
       document.getElementById("s3").appendChild(newdiv);
       
       newdiv.innerHTML = document.getElementById(`nameid${x}`).value;

      /* document.getElementById("s3").appendChild(document.createElement('br')); */

       for(y=0; y<songsperuser.value; y++){ //Each user gets a certain amount of songs. Here we display them.
        var utubeURLs  = document.createElement("input");
        utubeURLs.type = "text";
        utubeURLs.id=`namenum${eacheverysong}`;
        utubeURLs.name = `namenum${eacheverysong}`; //Ids ALL songs; Used in Python router
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="90%";
        console.log(`namenum${eacheverysong}`);
        document.getElementById(`namenumid${x}`).appendChild(utubeURLs); 


        var titleclass = document.createElement("div");
        titleclass.className = `namenum${eacheverysong}`;
        titleclass.innerHTML ="Test";
        document.getElementById(`namenumid${x}`).appendChild(titleclass);

        var notes = document.createElement("input");
        notes.type="text";
        notes.id = `notes4song${eacheverysong}`;
        notes.name = `notes4song${eacheverysong}`;
        notes.placeholder="Optional notes goes here";
        notes.style.marginBottom="5%";
        document.getElementById(`namenumid${x}`).appendChild(notes);

        var fortitledisplay = titleclass.className.substring(titleclass.className.length-1,titleclass.className.length)
        //console.log(fortitledisplay);
        showsongtitle("",`namenum${eacheverysong}`,fortitledisplay);


        utubeURLs.addEventListener('input',function(event){
            var neednameid = event.target.id;
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            showsongtitle(event.target.value,event.target.id,fortitledisplay);
        });

        eacheverysong++;
                            
       }
    }   
}


var currentpage = 1;
var totalpages =3;
var startingpage = document.getElementById("startup");
function prev(){
    if(currentpage==1){
        //Don't do anything
    }
    else{
        currentpage-=1;
    }
}
function next(){
    if((currentpage+1)>totalpages){
        //Go to router.py
    }
    else{
        currentpage+=1;
    }
}



function changenumofusers(addorsubtract){
    if(addorsubtract=="add"){ //Let's determine a max
        numofusers.innerHTML=++changingvalue;
        console.log("Increased");
    }
    else if(addorsubtract=="sub"){

        if(changingvalue<=2){
            console.log("Can't be lower than current number");          
        }
            else{
                numofusers.innerHTML=--changingvalue;
                console.log("Decreased");
            }      
    }
}

function inputdraft(){


    var gothrnames=0;
    totalsongs = parseInt(draftnumofusers) * parseInt(draftsongsperuser);

    for(x=0; x<draftnumofusers[0]; x++){ 
        var node  = document.createElement("input");
        node.type = "text";
        console.log("HELLO");
       node.name = `name${x}`;
       node.id=`nameid${x}`; //Dynamically hard coding unique names and id(Not used) for each user
        node.className = "allnames2";
        node.placeholder="Enter name here";
        //if(x%draftsongsperuser==0){
        console.log(draftsongsperuser);
            node.value = draftnames[gothrnames];
            console.log(gothrnames);
            gothrnames+=draftsongsperuser[0];
        //}
        document.getElementById("enternames").appendChild(node);
    } 



    
    document.getElementById("showusernum").value=draftnumofusers[0];
    document.getElementById("songsperuser").value=draftsongsperuser[0];
    console.log(document.getElementById("showusernum").value);

    console.log(draftnames);
    slide1.style.display = "none";
    slide2.style.display ="none";
    slide3.style.display ="block";
    olddrafts.style.display="none";
    eacheverysong=0;
    console.log(draftnumofusers[0]);

    var iterhelp=0;

      for( x=0; x<draftnumofusers[0]; x++){ 
       var newdiv = document.createElement("div");
       newdiv.id = `namenumid${x}`;
       newdiv.style.backgroundColor = "grey";
       newdiv.style.display="block";
       newdiv.style.margin="10px";
       newdiv.style.width="50%";
      // newdiv.style.height="30%";
       newdiv.style.paddingBottom ="5%";


       document.getElementById("s3").appendChild(newdiv);
       
       if(iterhelp%draftsongsperuser[0]==0){
        newdiv.innerHTML=draftnames[iterhelp];//Name of the user
       }
       //console.log(iterhelp);

       for(y=0; y<draftsongsperuser[0]; y++){ 
       // console.log(drafturls[iterhelp]);
        var utubeURLs  = document.createElement("input");
        utubeURLs.type = "text";
        utubeURLs.name = `namenum${eacheverysong}`; 
        utubeURLs.id = `namenum${eacheverysong}`; 
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="90%";
        
        
        utubeURLs.value = drafturls[iterhelp];


        document.getElementById(`namenumid${x}`).appendChild(utubeURLs);

        var titleclass = document.createElement("div");
        titleclass.className = `namenum${eacheverysong}`;
        titleclass.innerHTML ="TEst";
        document.getElementById(`namenumid${x}`).appendChild(titleclass);

        var notes = document.createElement("input");
        notes.type="text";
        notes.id = `notes4song${eacheverysong}`;
        notes.name = `notes4song${eacheverysong}`;
        notes.placeholder="Optional notes goes here";
        notes.style.marginBottom="5%";
        notes.value = draftnotes[iterhelp];
        document.getElementById(`namenumid${x}`).appendChild(notes);

        var fortitledisplay = titleclass.className.substring(titleclass.className.length-1,titleclass.className.length)
        //console.log(fortitledisplay);
        showsongtitle(drafturls[iterhelp],`namenum${eacheverysong}`,fortitledisplay);





        utubeURLs.addEventListener('input',function(event){
            var neednameid = event.target.id;
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            showsongtitle(event.target.value,event.target.id,fortitledisplay);
        });



        eacheverysong++;//console.log(document.getElementById(`namenum${eacheverysong++}`));
        iterhelp++;
                            
       }
    } 

}


/*
var inputs = document.querySelectorAll('input'); // Select all input elements

inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
        console.log("jendek");
    console.log(event.target.value);
    //showsongtitle(event.target.value,`namenum${eacheverysong}`);
    });
});
*/



//Error checking before starting game
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Select the form
    form.addEventListener("submit", function (event) {
        var totalempty = 0; // Reset totalempty for this submission
        for (var x = 0; x < totalsongs; x++) {
            const inputElement = document.getElementsByName(`namenum${x}`)[0]; // Select the input element by name

            if (inputElement) {
                const inputValue = inputElement.value; // Get the value of the input
                console.log(`Input value for namenum${x}:`, inputValue);

                if (inputValue === "") {
                    totalempty++;
                    console.log(`namenum${x} is empty.`);
                    event.preventDefault(); // Prevent default form submission behavior

                }
            } else {
                console.warn(`Input element with name="namenum${x}" not found.`);
            }
        }
        
        if(totalempty>0){
            error.style.display = "block";
            error.innerHTML = `No empty URL boxes. There are ${totalempty} empty boxes`;  
        }

         
    });
});


function urlscantbeempty(){

  
    

/*    var totalempty=0;
console.log(totalsongs);
for(var x=0; x<totalsongs; x++){  
    console.log(document.getElementsByName(`namenum${x}`));
    if(document.getElementsByName(`namenum${x}`).value==""){
        totalempty++;
    }
    error.innerHTML =  "No empty URL boxes. There are " + totalempty + " empty boxes";
    console.log("No empty URL boxes. There are " + totalempty + " empty boxes");
    return false;
}
return true*/
}

async function savethisdraft(){ //Don't think this needs to be double spaced

    document.getElementById("isthesavebuttonclicked").value="clicked"; //This triggers first before getting sent to python router
    

}

function showsongtitle(theurl,usethisid,fortitledisplay){
    //console.log(theurl);



    //function createvideoID(theurl){ //Right here is where we need to have utube values and maybe a for loop with it
            
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/; 
        const match = theurl.match(regExp); 
        /*match[0] is the entire url,  match[1] is which exxpression contained the video ID, match[2] is the ID itself*/
                                                    //true    //false
        (match && match[2].length === 11) ? 
        getVideoDetails(match[2],usethisid,fortitledisplay) : 
        document.getElementsByClassName(usethisid)[0].innerHTML="PLEASE ENTER VALID YOUTUBE URL"; 
        /*Youtube ID's are always 11 characters long*/ 
    
    //Check above

}

async function getVideoDetails(videoId,usethisid,fortitledisplay){
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("Network status isn't ok:" + response.statusText);
        }
        const data = await response.json();
       console.log(document.getElementsByClassName(usethisid)[0]);

       document.getElementsByClassName(usethisid)[0].innerHTML=data.items[0].snippet.title;

      /* var titledisplayed = document.createElement("span");
       titledisplayed.innerHTML=data.items[0].snippet.title;
       titledisplayed.id="";

     
        document.getElementById(usethisid).insertAdjacentElement('afterend',titledisplayed);
        console.log( document.getElementById(usethisid));*/

    
    }
    catch(error){
        console.error('Fetch error:',error);
    }

  }

  function b4send(){
    error.style.display="none";
    document.getElementById("isthesavebuttonclicked").value="notclicked";
    
  }






