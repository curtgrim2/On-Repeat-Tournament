const apiKey =  'AIzaSyBc9Y9VMDPAaILM7erb5kwBhJ_B8knnKQk'


var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
let numofusers = document.getElementById("showusernum");
var error = document.getElementById("errorbox");
var deletedraftbutton =  document.getElementById("deletedraft");
/*changingvalue = 2;
numofusers.innerHTML=changingvalue;*/

var gamespecs = document.getElementById("startup");

var slide2 = document.getElementById("slide2");
slide2.style.display = "none";
var slide1 = document.getElementById("slide1");
var slide3 = document.getElementById("slide3");
slide3.style.display ="none";

//var olddrafts = document.getElementById("olddrafts") ;
var updatebutt = document.getElementById("updatedraft");
updatebutt.style.display="none";

var totalsongs;
var remainingsongs = document.getElementById("remainingsongs");

function toslide2(showusernum){

   // var songperuser = document.getElementById("songsperuser").value
    totalsongs =  document.getElementById("totalsongs").value;  //parseInt(document.getElementById("songsperuser").value) * parseInt(showusernum.value);

    
    remainingsongs.innerHTML="Remaining songs to be applied: "+ totalsongs;


     if(showusernum.value  ==""){
        error.style.display = "block";
        error.innerHTML = "Values cannot be empty!";
   }

   /* else if(totalsongs%2!==0){
    error.style.display = "block";
    error.innerHTML = "TOTAL AMOUNT OF SONGS MUST BE EVEN";

   }*/

    else if(showusernum.value>10){
    error.style.display = "block";
    error.innerHTML = "TOO MANY USERS - Maximum of 10";
   }

   else if(showusernum.value < 0){
    error.style.display = "block";
    error.innerHTML = "Must have at least 1 user";
   }

  
   else { //If there are no errors, we can proceed with slide 2's creation
    console.log(showusernum.value);
    slide1.style.display = "none";
    slide2.style.display ="block";
    error.style.display = "none";

    

    for(x=0; x<showusernum.value; x++){ 

       /*if(x!=1){ 
        var linebreak = document.createElement("br");
        document.getElementById("enternames").appendChild(linebreak);
    }*/

        var node  = document.createElement("input");
        node.type = "text";
       node.name = `name${x}`;
       node.id=`nameid${x}`; //Dynamically hard coding unique names and id(Not used) for each user
        node.className = "allnames2";
        node.placeholder="Enter name here";
        document.getElementById("enternames").appendChild(node);

        var song4thisuser = document.createElement('input');
        song4thisuser.type="text";
        song4thisuser.id=`user${x}songtotal`;
        song4thisuser.name=`user${x}songtotal`;
        song4thisuser.style.width="3.5vw";
        song4thisuser.style.textAlign="center";
        document.getElementById(node.id).insertAdjacentElement('afterend',song4thisuser);

        var linebreak = document.createElement("br");
        document.getElementById("enternames").appendChild(linebreak);

    document.getElementById(`user${x}songtotal`).addEventListener('input',showremainingsongs); //Checks if song total has been reached based on user input
    } 
}


}

function showremainingsongs(){
    var songsaccountedfor=0;
    for(x=0; x<showusernum.value; x++){ 
        songsaccountedfor=songsaccountedfor + Number(document.getElementById(`user${x}songtotal`).value);
   
    }
    remainingsongs.innerHTML= Number(totalsongs-songsaccountedfor);
    //console.log(Number(remainingsongs.innerHTML),songsaccountedfor);
    
    if(Number(remainingsongs.innerHTML)<0){
        remainingsongs.innerHTML="YOU ARE USING TOO MANY SONGS. REMOVE "+ Math.abs(remainingsongs.innerHTML) + " songs";
    }

    if(Number(remainingsongs.innerHTML)==0){
        remainingsongs.innerHTML="GOOD TO GO";
    }
}


var iterhelp2=0;
function toslide3(showusernum,enternames){ /*For Youtube URLs */

    if(remainingsongs.innerHTML!="GOOD TO GO"){
        error.style.display="block";
        error.innerHTML = "Please check and make sure all songs are allocated correctly";
    }
    else{

    document.getElementById("isthesavebuttonclicked").value="notclicked";


    var draftbox = document.querySelectorAll(".selectdrafts");
    draftbox.forEach(draftbox=>{
    draftbox.style.display="none";

});
    slide1.style.display = "none";
    slide2.style.display ="none";
    slide3.style.display ="block";
    olddrafts.style.display="none";
    error.style.display = "none";
    deletedraftbutton.style.display="none";

    eacheverysong=0;

 /*For each name, take the number of songs and ask them to insert Youtube URL into each textbox */
      for( x=0; x<showusernum.value; x++){ //For loop for each user




        
       var newdiv = document.createElement("div");
       newdiv.id = `namenumid${x}`;
       newdiv.style.backgroundColor = "grey";
       newdiv.style.display="block";
       newdiv.style.margin="10px auto 10px auto";
       newdiv.style.width="50%";
       newdiv.style.border="2px white solid";
       //No height added to have it adjust to the amount of input elements
       newdiv.style.paddingBottom ="2.5%";
       newdiv.style.position ="relative";
       document.getElementById("s3").appendChild(newdiv);
       //newdiv.innerHTML = document.getElementById(`nameid${x}`).value;


       var stickyname = document.createElement("div");
       stickyname.style.position="sticky";
       stickyname.style.color="black";
       stickyname.style.top="0";
       stickyname.style.left="0%";
       //stickyname.style.width="8vw";
       stickyname.style.height="3vh";
       stickyname.style.fontSize="2.5vh";
       stickyname.style.fontWeight="bolder";
       stickyname.style.textAlign="left";
       //stickyname.style.textShadow="0px 0px 10px black";
       stickyname.style.backgroundColor="rgba(255,255,255,.3)";


        //Name of the user
        stickyname.innerHTML=document.getElementById(`nameid${x}`).value;
        document.getElementById(`namenumid${x}`).appendChild(stickyname);
    



       var songstocreate=document.getElementById(`user${x}songtotal`).value;

       var quickfind = document.createElement("a");
        quickfind.href=`#namenumid${x}`;
        quickfind.innerHTML= document.getElementById(`nameid${x}`).value;
        quickfind.style.display="block";
        quickfind.style.textDecoration="none";
        quickfind.style.fontWeight="bold";
       document.getElementById("navmenu").appendChild(quickfind);

       for(y=0; y<songstocreate; y++){//for(y=0; y<songsperuser.value; y++){ //Each user gets a certain amount of songs. Here we display them.

        var newtotalsongs;
        newtotalsongs++;



        var songcontain = document.createElement("div"); //Song Container
       songcontain.id=`namenumid2${iterhelp2}`;
      songcontain.style.backgroundColor="#6b6b6b"; //#9d9e9d
      //songcontain.style.border="1px black solid";
       // songcontain.style.backgroundColor="silver";
       //songcontain.style.boxShadow="0px 0px 10px 1px black";
       songcontain.style.width="80%";
       songcontain.style.margin="0 auto 10px auto";
       songcontain.style.paddingTop="1%";
       songcontain.style.paddingBottom="2%";
       songcontain.style.border="2px white solid";
       songcontain.style.display="flex";
       songcontain.style.flexDirection="column";
       songcontain.style.alignItems="center"; //Shouldn't it be justify-content?
       document.getElementById(`namenumid${x}`).appendChild(songcontain);


        var utubeURLs  = document.createElement("input");
        utubeURLs.type = "text";
        utubeURLs.id=`namenum${eacheverysong}`;
        utubeURLs.name = `namenum${eacheverysong}`; //Ids ALL songs; Used in Python router
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="60%";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(utubeURLs); 

        //<iframe id="leftvid" width="100%" height="315" src="" title="YouTube video player" frameborder="0" 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        // allowfullscreen> </iframe> <!-- src="https://www.youtube.com/embed/zm6gHJ3SQIM"--><!--https://www.youtube.com/embed/EpV_WbjyY00-->

        var urlvideo = document.createElement('iframe');
        urlvideo.id=`video${iterhelp2}`;
        urlvideo.width="75%";
        urlvideo.height="25%";
        urlvideo.src="";
        urlvideo.title="Youtube Video Player";
        //Frameborder is depreciated?
        urlvideo.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ; web-share";
        urlvideo.referrerPolicy="strict-origin-when-cross-origin";
        urlvideo.allowFullscreen="true";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(urlvideo);


        var songid = document.createElement("div");
        songid.innerHTML = "#"+ (y+1);
        songid.style.color="black";
        songid.style.fontSize="1.5vw";
        //songid.style.backgroundColor="pink";
        songid.style.width="90%";
        songid.style.textAlign="right";
        songid.style.position="sticky";
        songid.style.top="0";
        songid.style.right="10";
        //document.getElementById(`namenumid${x}`).appendChild(songid);
        //document.getElementById(`namenumid2${iterhelp2}`).appendChild(songid);
        document.getElementById(`namenumid2${iterhelp2}`).insertAdjacentElement('afterbegin',songid);


       /* var dontuse = document.createElement('input');
        dontuse.type = "checkbox";
        dontuse.id=`ignoresong${iterhelp2}`;
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(dontuse); */


        var titleclass = document.createElement("div");
        titleclass.className = `namenum${eacheverysong}`;
        titleclass.style.textAlign="center";
        titleclass.innerHTML ="Test";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(titleclass);

        

        var notes = document.createElement("input");
        notes.type="text";
        notes.id = `notes4song${eacheverysong}`;
        notes.name = `notes4song${eacheverysong}`;
        notes.style.width="70%";
        notes.placeholder="Optional notes goes here";
        //notes.style.marginBottom="5%";
        //notes.style.margin="0 auto 5% auto";
        notes.style.backgroundColor="black";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(notes);

        var container = document.createElement("div");
        container.style.width="100%";
        container.id=`optcontain${eacheverysong}`;
        container.style.display="inline-block";
        container.style.textAlign="center";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(container);

        var opttimelabel = document.createElement("span");
        opttimelabel.innerHTML="Start Time?";
        opttimelabel.style.color="white";
        opttimelabel.style.textShadow="0px 0px 1px black";
        opttimelabel.style.fontSize="2vh";
        document.getElementById(`optcontain${eacheverysong}`).appendChild(opttimelabel);


        var optstarttime = document.createElement("input");
        optstarttime.type="text";
        optstarttime.id=`starttimenum${eacheverysong}`;
        optstarttime.name=`starttimenum${eacheverysong}`;
        optstarttime.style.width="10%";
        optstarttime.placeholder="0:00"; //"Start Time? (Format i.e. 0:00)";
        optstarttime.style.textAlign="center";
        optstarttime.className="optstarttime";
        /*optstarttime.textContent = `
        .optstarttime::before {
          content: "D C";
          color: blue;
        }
      `;*/
      document.getElementById(`optcontain${eacheverysong}`).appendChild(optstarttime)

        var fortitledisplay = titleclass.className.substring(titleclass.className.length-1,titleclass.className.length)
        showsongtitle("",`namenum${eacheverysong}`,fortitledisplay);

        //EVENT LISTENERS
      /*  dontuse.addEventListener('change',function(event){
                console.log(event.target.id,"was clicked");
        });*/
        utubeURLs.addEventListener('input',function(event){
            var neednameid = event.target.id;
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            console.log(fortitledisplay2);
            showsongtitle(event.target.value,event.target.id,fortitledisplay2);
        });

        eacheverysong++;
        iterhelp2++;
                            
       }
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

iterhelp2=0;
function inputdraft(whichdraft){  //REMEMBER: Changes in here apply to slide3()

    document.getElementById("isthesavebuttonclicked").value="notclicked";


    var draftbox = document.querySelectorAll(".selectdrafts");
    draftbox.forEach(draftbox=>{
    draftbox.style.display="none";

});

    if(whichdraft==1){
        draftnames=draftnames1;
        document.getElementsByName("newdraftname")[0].value=drafttitle1[0];
        draftsong4user=draftsong4user1;
        draftstarttime = draftstarttime1;


    }
    if(whichdraft==2){
        draftnames = draftnames2;
        draftnumofusers = draftnumofusers2;
        draftsongsperuser =draftsongsperuser2;
        drafturls = drafturls2;
        draftnotes = draftnotes2;
        drafttitle = drafttitle2;
        document.getElementsByName("newdraftname")[0].value=drafttitle2[0];
        draftsong4user=draftsong4user2;
        draftstarttime=draftstarttime2;


    }

    if(whichdraft==3){
        draftnames = draftnames3;
        draftnumofusers = draftnumofusers3;
        draftsongsperuser =draftsongsperuser3;
        drafturls = drafturls3;
        draftnotes = draftnotes3;
        drafttitle = drafttitle3;
        document.getElementsByName("newdraftname")[0].value=drafttitle3[0];
        draftsong4user=draftsong4user3;
        draftstarttime=draftstarttime3;



    }

   /* console.log(whichdraft);
    console.log(draftnames1);
    console.log(draftnumofusers);
    console.log(draftsongsperuser);
    console.log(drafturls);
    console.log(draftnotes);
    console.log(draftsong4user);
    console.log(draftstarttime);*/


    



    var gothrnames=0;
    totalsongs = parseInt(draftnumofusers) * parseInt(draftsongsperuser); //CHANGE THIS?!!?!?

    for(x=0; x<draftnumofusers[0]; x++){ 
        var node  = document.createElement("input");
        node.type = "text";
        //console.log("HELLO");
       node.name = `name${x}`;
       node.id=`nameid${x}`; //Dynamically hard coding unique names and id(Not used) for each user
        node.className = "allnames2";
        node.placeholder="Enter name here";

        node.value = draftnames[gothrnames]; //node.value = draftnames[x];
        gothrnames+=draftsong4user[x];
        //console.log(gothrnames);

        document.getElementById("enternames").appendChild(node);

        var song4thisuser = document.createElement('input');
        song4thisuser.type="hidden";
        song4thisuser.id=`user${x}songtotal`;
        song4thisuser.name=`user${x}songtotal`;
        song4thisuser.value=draftsong4user[x];
        document.getElementById('form').appendChild(song4thisuser);
        console.log(song4thisuser.value);
    } 

    gothrnames=0;

    
    document.getElementById("showusernum").value=draftnumofusers[0];
    //document.getElementById("songsperuser").value=draftsongsperuser[0];
    console.log(document.getElementById("showusernum").value);


    //Beginning of "Slide 3" section
    slide1.style.display = "none";
    slide2.style.display ="none";
    slide3.style.display ="block";
    olddrafts.style.display="none";
    errorbox.style.display="none";
    updatebutt.style.display="block";
    eacheverysong=0;
    console.log(draftnumofusers[0]);

    var iterhelp=0;

      for( x=0; x<draftnumofusers[0]; x++){  //For each user
        

       var newdiv = document.createElement("div"); //User container
       newdiv.id = `namenumid${x}`;
       newdiv.style.backgroundColor = "grey";
       newdiv.style.display="flex";
       newdiv.style.flexDirection="column";
       newdiv.style.boxShadow="0px 0px 10px 1px #4d4d4d";
        //newdiv.style.border="2px white solid"
       newdiv.style.width="50%";

       //newdiv.style.paddingLeft="2%";
       newdiv.style.margin="20px auto 20px auto";

     //No height so that it always adjusts to dynamic # of songs
       newdiv.style.paddingBottom ="2.5%";
       document.getElementById("s3").appendChild(newdiv);

       var stickyname = document.createElement("div");
       stickyname.style.position="sticky";
       stickyname.style.color="black";
       stickyname.style.top="0";
       stickyname.style.left="0%";
       //stickyname.style.width="8vw";
       stickyname.style.height="3vh";
       stickyname.style.fontSize="2.5vh";
       stickyname.style.fontWeight="bolder";
       stickyname.style.textAlign="left";
       //stickyname.style.textShadow="0px 0px 10px black";
       stickyname.style.backgroundColor="rgba(255,255,255,.3)";

       if(x==0){
        //Name of the user
        //newdiv.innerHTML=draftnames[0];
        stickyname.innerHTML=draftnames[0];
       }
       else{ 
        //Name of the user

        //Used to get each individual name as names repeat in database
        //newdiv.innerHTML=draftnames[gothrnames];

        stickyname.innerHTML=draftnames[gothrnames];

       }

       document.getElementById(`namenumid${x}`).appendChild(stickyname);



       var quickfind = document.createElement("a");
        quickfind.href=`#namenumid${x}`;
        quickfind.innerHTML= draftnames[gothrnames];
        quickfind.style.display="block";
        quickfind.style.textDecoration="none";
        quickfind.style.fontWeight="bold";
       document.getElementById("navmenu").appendChild(quickfind);

       gothrnames+=draftsong4user[x];

       for(y=0; y<draftsong4user[x]; y++){ 

       var songcontain = document.createElement("div"); //Song Container
       songcontain.id=`namenumid2${iterhelp2}`;
       //songcontain.style.backgroundColor= "#616161";
      songcontain.style.backgroundColor="#6b6b6b";
       songcontain.style.width="80%";
       songcontain.style.margin="0 auto 10px auto";
       songcontain.style.paddingTop="1%";
       songcontain.style.paddingBottom="2%";
       songcontain.style.border="2px white solid";
       //songcontain.style.border="7px #9fa19f groove";
       songcontain.style.display="flex";
       songcontain.style.flexDirection="column";
       songcontain.style.alignItems="center"; //Shouldn't it be justify-content?
       //songcontain.style.justifyContent="center";
       document.getElementById(`namenumid${x}`).appendChild(songcontain);

        var utubeURLs  = document.createElement("input");
        utubeURLs.type = "text";
        utubeURLs.name = `namenum${eacheverysong}`; 
        utubeURLs.id = `namenum${eacheverysong}`; 
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="60%";
        utubeURLs.value = drafturls[iterhelp];
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(utubeURLs);

        var urlvideo = document.createElement('iframe');
        urlvideo.id=`video${eacheverysong}`;
        urlvideo.width="75%";
        urlvideo.height="25%";
        urlvideo.src="";
        urlvideo.title="Youtube Video Player";
        //Frameborder is depreciated?
        urlvideo.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ; web-share";
        urlvideo.referrerPolicy="strict-origin-when-cross-origin";
        urlvideo.allowFullscreen="true";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(urlvideo);


        var songid = document.createElement("div");
        songid.innerHTML = "#"+ (y+1);
        songid.style.color="black";
        songid.style.fontSize="1.5vw";
        //songid.style.backgroundColor="pink";
        songid.style.width="90%";
        songid.style.textAlign="right";
        songid.style.position="sticky";
        songid.style.top="0";
        songid.style.right="10";
        //document.getElementById(`namenumid${x}`).appendChild(songid);
        //document.getElementById(`namenumid2${iterhelp2}`).appendChild(songid);
        document.getElementById(`namenumid2${iterhelp2}`).insertAdjacentElement('afterbegin',songid);


        var titleclass = document.createElement("div");
        titleclass.className = `namenum${eacheverysong}`;
        titleclass.style.textAlign="center";
        titleclass.innerHTML ="Searching for Song Title...";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(titleclass);

        var notes = document.createElement("input");
        notes.type="text";
        notes.id = `notes4song${eacheverysong}`;
        notes.name = `notes4song${eacheverysong}`;
        notes.style.width="70%";
        notes.style.backgroundColor="black";
        notes.style.color="white";
        notes.placeholder="Optional notes goes here";
        notes.value = draftnotes[iterhelp];
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(notes);

        var container = document.createElement("div");
        container.style.width="100%";
        container.id=`optcontain${eacheverysong}`;
        container.style.display="inline-block";
        container.style.textAlign="center";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(container);

        var opttimelabel = document.createElement("span");
        opttimelabel.innerHTML="Start Time?";
        opttimelabel.style.color="white";
        opttimelabel.style.textShadow="0px 0px 1px black";
        opttimelabel.style.fontSize="2vh";
        document.getElementById(`optcontain${eacheverysong}`).appendChild(opttimelabel);


        var optstarttime = document.createElement("input");
        optstarttime.type="text";
        optstarttime.id=`starttimenum${eacheverysong}`;
        optstarttime.name=`starttimenum${eacheverysong}`;
        optstarttime.style.width="10%";
        optstarttime.placeholder="0:00"; //"Start Time? (Format i.e. 0:00)";
      if(draftstarttime[eacheverysong]== 'undefined' || draftstarttime[eacheverysong]==null){ 
        }
        else{
            //console.log(draftstarttime[eacheverysong]);
            optstarttime.value = draftstarttime[eacheverysong];


        }
        optstarttime.style.textAlign="center";
        optstarttime.className="optstarttime";
        /*optstarttime.textContent = `
        .optstarttime::before {
          content: "D C";
          color: blue;
        }
      `;*/
      document.getElementById(`optcontain${eacheverysong}`).appendChild(optstarttime);
    //document.getElementById(`notes4song${eacheverysong}`).insertAdjacentElement('afterend',optstarttime); 




        var fortitledisplay = eacheverysong;//titleclass.className.substring(titleclass.className.length-1,titleclass.className.length);
        //console.log(fortitledisplay);
        //console.log(drafturls[iterhelp]);
        //console.log(iterhelp);
        //console.log(urlvideo.id);
       showsongtitle(drafturls[iterhelp],`namenum${eacheverysong}`,fortitledisplay,urlvideo.id);


        

        utubeURLs.addEventListener('input',function(event){
            var neednameid = event.target.id;
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            showsongtitle(event.target.value,event.target.id,fortitledisplay2);
        });



        eacheverysong++;//console.log(document.getElementById(`namenum${eacheverysong++}`));
        iterhelp++;
        iterhelp2++;
                            
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
        
        if(document.getElementById("isthesavebuttonclicked").value!="createnewdraft" && document.getElementById("isthesavebuttonclicked").value!="clicked"){

            console.log(document.getElementsByName("checkdraftbut")[0].value);
        var totalempty = 0; // Reset totalempty for this submission
        for (var x = 0; x < totalsongs; x++) {
            const inputElement = document.getElementsByName(`namenum${x}`)[0]; // Select the input element by name

            if (inputElement) {
                const inputValue = inputElement.value; // Get the value of the input
                //console.log(`Input value for namenum${x}:`, inputValue);

                if (inputValue === "") {
                    totalempty++;
                    //console.log(`namenum${x} is empty.`);
                    event.preventDefault(); // Prevent default form submission behavior

                }
            } else {
                //console.warn(`Input element with name="namenum${x}" not found.`);
            }
        }
        
        if(totalempty>0){
            error.style.display = "block";
            error.innerHTML = `No empty URL boxes. There are ${totalempty} empty boxes`;  
        }

        for (var x = 0; x < totalsongs; x++) {
            var y = document.getElementById(`starttimenum${x}`);
          /*  if(y.value==="string" && y.value!=""){
                event.preventDefault();
                error.style.display="block";
                error.innerHTML=`Incorrect format for timestamp #${x+1}`;
            }*/
            
        }



    }
    });
});



 async function updatedraft1(){ //Don't think this needs to be double spaced
    //var confirmation = confirm("Are you sure you want to delete this draft?");
    document.getElementById("isthesavebuttonclicked").value="clicked"; //This triggers first before getting sent to python router
    console.log("Hello?");
    

}

document.getElementById("savedraft").addEventListener('click',(event)=>{
    if(totaltitles==3){
        alert("FULL DRAFT SLOT; Please delete a draft");
        event.preventDefault();
    }
});

async function savenewdraft(){
    document.getElementById("isthesavebuttonclicked").value="createnewdraft";
    document.getElementsByName("newdraftname")[0].value= prompt("Name of the draft?");
}


var otherthing1 = document.getElementById("deletedraft");
otherthing1.addEventListener('click',(event)=>{
    var confirmation = confirm("Are you sure you want to delete this draft?");
    if(confirmation==false){
        event.preventDefault();
        console.log("STOP FIGHTING");
    }
    else{
        topython();
    }

});


  function topython(){
    document.getElementById("isthesavebuttonclicked").value="deletethisdraft";
    /*var confirmation = confirm("Are you sure you want to delete this draft?");
   
   if(confirmation==false){
        return false;
    }*/
}

function showsongtitle(theurl,usethisid,fortitledisplay,urlvideoid){
            //console.log("theurl:",theurl,";  usethisid: ",usethisid ,"; fortitledisplay:",fortitledisplay );
    //Right here is where we need to have utube values and maybe a for loop with it
            
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/; 
        if(theurl==undefined){
           theurl="";

        }
        //if(regExp!=null){
            const match = theurl.match(regExp); 

        //}
        /*match[0] is the entire url,  match[1] is which exxpression contained the video ID, match[2] is the ID itself*/
                                                    //true    //false
        //console.log(match[2]);

        (match && match[2].length === 11) ? 
        getVideoDetails(match[2],usethisid,fortitledisplay,urlvideoid) : 
        document.getElementsByClassName(usethisid)[0].innerHTML="PLEASE ENTER VALID YOUTUBE URL"; 
        /*Youtube ID's are always 11 characters long*/ 
    
    //Check above

}

async function getVideoDetails(videoId,usethisid,fortitledisplay,urlvideoid){
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("Network status isn't ok:" + response.statusText);
        }
        const data = await response.json();

       document.getElementsByClassName(usethisid)[0].innerHTML=data.items[0].snippet.title;

       document.getElementById(`video${fortitledisplay}`).src ="https://www.youtube.com/embed/" +  videoId;//www.youtube.com/embed/zm6gHJ3SQIM";
     

      /* var titledisplayed = document.createElement("span");
       titledisplayed.innerHTML=data.items[0].snippet.title;
       titledisplayed.id="";
        document.getElementById(usethisid).insertAdjacentElement('afterend',titledisplayed);
        */

    
    }
    catch(error){
        console.error('Fetch error:',error);
    }

  }

  function b4send(){
    error.style.display="none";
    document.getElementById("isthesavebuttonclicked").value="notclicked";
    
  }

  function cleareverything(){
    //To clear values in drafts to potentially create a new one
  }

  function tester(){
    console.log("Tesret");
  }

  function removesongs(){

  }






