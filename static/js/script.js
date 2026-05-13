 const apiKey =  'AIzaSyBc9Y9VMDPAaILM7erb5kwBhJ_B8knnKQk'



var checkboxtrack = [];
var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
let numofusers = document.getElementById("showusernum");
var errorbox = document.getElementById("errorbox");
var deletedraftbutton =  document.getElementById("deletedraft");
    var firstsongindex = [];

/*changingvalue = 2;
numofusers.innerHTML=changingvalue;*/

var gamespecs = document.getElementById("startup");

var slide2 = document.getElementById("slide2");
slide2.style.display = "none";
var slide1 = document.getElementById("slide1");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");

slide3.style.display ="none";
slide4.style.display="none";

var olddrafts = document.getElementById("olddrafts");
var draftscontainer = document.getElementById("draftscontainer");
var draftslabel = document.getElementById("draftslabel");
var updatebutt = document.getElementById("updatedraft");
updatebutt.style.display="none";

var totalsongs;
var remainingsongs = document.getElementById("remainingsongs");

function toslide2(showusernum){

   // var songperuser = document.getElementById("songsperuser").value
    totalsongs =  document.getElementById("totalsongs").value;  //parseInt(document.getElementById("songsperuser").value) * parseInt(showusernum.value);
    
    remainingsongs.innerHTML="Remaining songs to be applied: "+ totalsongs;

     if(showusernum.value  ==""){
        errorbox.style.display = "block";
        errorbox.innerHTML = "Values cannot be empty!";
   }

    else if(showusernum.value>10){
    errorbox.style.display = "block";
    errorbox.innerHTML = "TOO MANY USERS - Maximum of 10";
   }

   else if(showusernum.value <= 0){
    errorbox.style.display = "block";
    errorbox.innerHTML = "Must have at least 1 user";
   }

  
   else { //If there are no errors, we can proceed with slide 2's creation
    console.log(showusernum.value);
    slide1.style.display = "none";
    slide2.style.display ="block";
    errorbox.style.display = "none";

    

    for(x=0; x<showusernum.value; x++){ 

        var node  = document.createElement("input");
        node.type = "text";
       node.name = `name${x}`;
       node.id=`nameid${x}`; //Dynamically hard coding unique names and id(Not used) for each user
        node.className = "allnames2";
        node.placeholder="Enter name here";
        document.getElementById("enternames").appendChild(node);

        var songnum4user = document.createElement('input');
        songnum4user.type="text";
        songnum4user.id=`user${x}songtotal`;
        songnum4user.name=`user${x}songtotal`;
        songnum4user.style.width="3.5vw";
        songnum4user.style.textAlign="center";
        document.getElementById(node.id).insertAdjacentElement('afterend',songnum4user);

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
        errorbox.style.display="block";
        errorbox.innerHTML = "Please check and make sure all songs are allocated correctly";
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
    draftscontainer.style.display="none";
    draftslabel.style.display="none";
    errorbox.style.display = "none";
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


    firstsongindex.push(eacheverysong);

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
        utubeURLs.className=x;

        document.getElementById(`namenumid2${iterhelp2}`).appendChild(utubeURLs); 

        var ordiv = document.createElement("div");
        ordiv.innerHTML = "OR";
        ordiv.style.display="block";
        ordiv.style.color="black";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(ordiv);

        var entertitle = document.createElement("input");
        entertitle.type = "text";
        entertitle.placeholder="Enter Song name + Artist";
        entertitle.style.display="block";
        entertitle.style.width="60%";
        entertitle.id=`titlenum${eacheverysong}`;
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(entertitle); 

        var search4title = document.createElement("input");
         search4title.type="button";
         search4title.value="Search Title";
         search4title.id=eacheverysong;
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(search4title); 



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
        notes.style.backgroundColor="white";
        notes.style.color="black";
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
      document.getElementById(`optcontain${eacheverysong}`).appendChild(optstarttime);

        var fortitledisplay = titleclass.className.substring(titleclass.className.length-1,titleclass.className.length)
        showsongtitle("",`namenum${eacheverysong}`,fortitledisplay);

        //EVENT LISTENERS
     
        utubeURLs.addEventListener('input',function(event){
            var neednameid = event.target.id;
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            console.log(fortitledisplay2);
            showsongtitle(event.target.value,event.target.id,fortitledisplay2);
            colorChange(event.target.id,event.target.className);

        });

        search4title.addEventListener('click',function (event){
            var neednameid = event.target.id;
            var thetitle = document.getElementById(`titlenum${event.target.id}`);
            console.log(thetitle);
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            getVideoTitle(thetitle.value,event.target.id,fortitledisplay2);
            colorChange(event.target.id);
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

function colorChange(thesong,thename){
    console.log("I hope it reached here:"+ thesong);
    //console.log( document.getElementById(`#namenumid${classof${x}}`));
        var songtmp = firstsongindex[thename];

        console.log(firstsongindex)

    for(var y=0; y<draftsong4user[thename];y++){
        console.log(document.getElementById(`namenum${songtmp}`).value);
         if(document.getElementById(`namenum${songtmp++}`).value!=""){//if(drafturls[y]!= "") {
            document.getElementById(`#namenumid${thename}`).style.backgroundColor="white";
            console.log("Good to go");
        }
        else{
             document.getElementById(`#namenumid${thename}`).style.backgroundColor="red";
            console.log("RED!!!");
            break;
   
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


    if(whichdraft==4){
        draftnames = draftnames4;
        draftnumofusers = draftnumofusers4;
        draftsongsperuser =draftsongsperuser4;
        drafturls = drafturls4;
        draftnotes = draftnotes4;
        drafttitle = drafttitle4;
        document.getElementsByName("newdraftname")[0].value=drafttitle4[0];
        draftsong4user=draftsong4user4;
        draftstarttime=draftstarttime4;
    }

    if(whichdraft==5){
        draftnames = draftnames5;
        draftnumofusers = draftnumofusers5;
        draftsongsperuser =draftsongsperuser5;
        drafturls = drafturls5;
        draftnotes = draftnotes5;
        drafttitle = drafttitle5;
        document.getElementsByName("newdraftname")[0].value=drafttitle5[0];
        draftsong4user=draftsong4user5;
        draftstarttime=draftstarttime5;
    }
        console.log(draftsongsperuser);


   /* console.log(whichdraft);
    console.log(draftnames1);
    console.log(draftnumofusers);
    console.log(draftsongsperuser);
    console.log(drafturls);
    console.log(draftnotes);
    console.log(draftsong4user);
    console.log(draftstarttime);*/


     var foroldsongsperuser = JSON.stringify(draftsong4user);
    document.querySelector("input[name=oldsongsperuser]").value=foroldsongsperuser; 
            //document.querySelector("input[name='checkboxtrack']").value= jsonstring;


    var gothrnames=0;
    totalsongs = parseInt(draftnumofusers) * parseInt(draftsongsperuser); //CHANGE THIS?!!?!?
    //console.log(totalsongs," = ",draftnumofusers,"*",draftsongsperuser);
    totalsongs=0;
    for(let x=0;x<draftsong4user.length;x++){
        if(draftsong4user[x]!=null){
            totalsongs=totalsongs+ parseInt(draftsong4user[x]);
        }
    }

    console.log(totalsongs);

    //var firstsongindex = [];

    for(x=0; x<draftnumofusers[0]; x++){ 
        var node  = document.createElement("input");
        node.type = "text";
       node.name = `name${x}`;
       node.id=`nameid${x}`; //Dynamically hard coding unique names and id(Not used) for each user
        node.className = "allnames2";
        node.placeholder="Enter name here";

        console.log(draftnames);
        console.log(draftnames[gothrnames] + "Total users:" + draftnumofusers[0]); 
        node.value = draftnames[gothrnames]; //node.value = draftnames[x];
        console.log(draftnotes);
        document.getElementById("enternames").appendChild(node);

       
        var quickfind = document.createElement("a"); //Names on the side
        quickfind.href=`#namenumid${x}`;
        quickfind.id=`#namenumid${x}`;
        quickfind.innerHTML= draftnames[gothrnames];
        quickfind.style.display="inline-block";
        quickfind.style.textDecoration="none";
        quickfind.style.fontWeight="bold";
       document.getElementById("navmenu").appendChild(quickfind);

        var songnum4user = document.createElement('input'); //Inputs for potentially changing song number
        songnum4user.type="text";
        songnum4user.id=`user${x}songtotal`;
        songnum4user.name=`user${x}songtotal`;
        songnum4user.value=draftsong4user[x];
        songnum4user.style.textAlign='center';
        songnum4user.style.width='4vw';
        songnum4user.style.display='inline-block';
        document.getElementById('navmenu').appendChild(songnum4user);//document.getElementById('form').appendChild(song4thisuser);


       var linebreak = document.createElement("br");
       document.getElementById("navmenu").appendChild(linebreak);

        gothrnames+=draftsong4user[x];


    } 

    /*var changecolor=0;
    while(changecolor<draftnames.length){

        for(xx=0; xx<draftsong4user[changecolor];xx++){
            if(drafturls[]){ //url==null
            document.getElementById(`#namenumid${changecolor}`).style.backgroundColor="red";
                break;
    }
        }
    }*/

    gothrnames=0;

    
    document.getElementById("showusernum").value=draftnumofusers[0];
    //document.getElementById("songsperuser").value=draftsongsperuser[0];
    console.log(document.getElementById("showusernum").value);


    //Beginning of "Slide 3" section
    slide1.style.display = "none";
    slide2.style.display ="none";
    slide3.style.display ="block";
    olddrafts.style.display="none";
    draftscontainer.style.display="none";
    draftslabel.style.display="none";
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
       newdiv.style.width="50%";

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

      /* var quickfind = document.createElement("a");
        quickfind.href=`#namenumid${x}`;
        quickfind.innerHTML= draftnames[gothrnames];
        quickfind.style.display="inline-block";
        quickfind.style.textDecoration="none";
        quickfind.style.fontWeight="bold";
       document.getElementById("navmenu").appendChild(quickfind);*/

       gothrnames+=draftsong4user[x];

        firstsongindex.push(eacheverysong);

       for(y=0; y<draftsong4user[x]; y++){ 

        //document.getElementById(`#namenumid${x}`).style.backgroundColor="green";
       
        if(drafturls[iterhelp]== "") {
            document.getElementById(`#namenumid${x}`).style.backgroundColor="red";
        }

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
        utubeURLs.className=x;
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.backgroundColor="black";
        utubeURLs.style.color="white";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="60%";
        utubeURLs.value = drafturls[iterhelp];
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(utubeURLs);

         var ordiv = document.createElement("div");
        ordiv.innerHTML = "OR";
        ordiv.style.display="block";
        ordiv.style.color="black";
        ordiv.style.textShadow="0px 0px 2px white";
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(ordiv);

        var entertitle = document.createElement("input");
        entertitle.type = "text";
        entertitle.placeholder="Enter Song name + Artist";
        entertitle.style.display="block";
        entertitle.style.width="60%";
        entertitle.id=`titlenum${eacheverysong}`;
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(entertitle); 

        var search4title = document.createElement("input");
         search4title.type="button";
         search4title.value="Search Title";
         search4title.id=eacheverysong;
        document.getElementById(`namenumid2${iterhelp2}`).appendChild(search4title); 


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
        songid.id=`Song#${eacheverysong}-id`;
        songid.style.color="black";
        songid.style.fontSize="1.5vw";
        //songid.style.backgroundColor="pink";
        songid.style.width="90%";
        songid.style.textAlign="right";
        songid.style.position="sticky";
        songid.style.top="0";
        songid.style.right="0";
        //document.getElementById(`namenumid${x}`).appendChild(songid);
        //document.getElementById(`namenumid2${iterhelp2}`).appendChild(songid);
        document.getElementById(`namenumid2${iterhelp2}`).insertAdjacentElement('afterbegin',songid);


         var selectsong = document.createElement('input');
         selectsong.type = "checkbox";
         selectsong.id= `checkbox-${eacheverysong}`;
        selectsong.name= `checkbox-${eacheverysong}`;
         selectsong.style.position="relative";
         selectsong.style.float="left"; // THE KEY
         //selectsong.style.textAlign="left";
         document.getElementById(`Song#${eacheverysong}-id`).insertAdjacentElement('afterbegin',selectsong);



         //var checkboxtrack = [];
         const checkboxclick = document.getElementById(`checkbox-${eacheverysong}`);

         checkboxclick.addEventListener('click',function(event){

                var getcheckboxnum = event.target.id;
                var dashindex = getcheckboxnum.indexOf('-');
                var whichsongnum =getcheckboxnum.substring(dashindex+1,getcheckboxnum.length);
                //getcheckboxnum.substring(dashindex,getcheckboxnum.length);
                console.log(whichsongnum);

              /*  for(){
                    if(document.getElementsByName(`checkbox-${whichsongnum}`)[0].checked==false){

                    }
                } */

                if(document.getElementsByName(`checkbox-${whichsongnum}`)[0].checked==true){
            checkboxtrack.push(whichsongnum);
            checkboxtrack = [...new Set(checkboxtrack)]; //Removes duplicates
            //console.log("Checked");
            console.log(document.getElementsByName(`checkbox-${whichsongnum}`)[0].checked);

                }
                else{
                        console.log("UnChecked");
                        checkboxtrack.pop(whichsongnum);
                }


                 console.log(checkboxtrack);
                 //console.log(document.getElementsByName(`checkbox-${whichsongnum}`));

                 //Get rid of
                
         });


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
        notes.style.backgroundColor="white";
        notes.style.color="black";
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
            console.log(event.target.value,event.target.id,fortitledisplay2);
            console.log(event.target.className);
            colorChange(event.target.id,event.target.className);
        });

         search4title.addEventListener('click',function (event){
            var neednameid = event.target.id;
            var thetitle = document.getElementById(`titlenum${event.target.id}`)
            console.log("This is the title ",thetitle.value);
            var fortitledisplay2=neednameid.substring(neednameid.length-1,neednameid.length);
            getVideoTitle(thetitle.value,event.target.id,fortitledisplay2);
        });

        eacheverysong++;//console.log(document.getElementById(`namenum${eacheverysong++}`));
        iterhelp++;
        iterhelp2++;
                            
       }
    } 
}






//Error checking before starting game
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Select the form
    form.addEventListener("submit", function (event) {

    var isthisauto = document.getElementById("autooption").checked;
        if(isthisauto==true){
            event.preventDefault();
            toslide4();
    }
        
        //Starting the game
        if(document.getElementById("isthesavebuttonclicked").value!="createnewdraft" && document.getElementById("isthesavebuttonclicked").value!="clicked"){
            console.log("Let me see something");

            console.log(document.getElementsByName("checkdraftbut")[0].value);
        var totalempty = 0; // Reset totalempty for this submission
        for (var x = 0; x < totalsongs; x++) {
            const inputElement = document.getElementsByName(`namenum${x}`)[0]; // Select the input element by name

            if (inputElement && document.getElementsByName("checkdraftbut")[0].value!="deletethisdraft") {
                const inputValue = inputElement.value; // Get the value of the input
                if (inputValue === "") {
                    totalempty++;
                    event.preventDefault(); 

                }
            } else {
                //console.warn(`Input element with name="namenum${x}" not found.`);
            }
        }
        
        if(totalempty>0 && document.getElementsByName("checkdraftbut")[0].value!="deletethisdraft") { //deletethisdraft
            errorbox.style.display = "block";
            errorbox.innerHTML = `No empty URL boxes. There are ${totalempty} empty boxes`;  
        }

        for (var x = 0; x < totalsongs; x++) {
            var y = document.getElementById(`starttimenum${x}`);
            
        }
    }

        //Update existing draft if statement
    else if(document.getElementById("isthesavebuttonclicked").value=="clicked" && document.getElementById("isthesavebuttonclicked").value!="createnewdraft"){

      // event.preventDefault();
    var songsaccountedfor=0;
    for(x=0; x<showusernum.value; x++){ 
        songsaccountedfor=songsaccountedfor + Number(document.getElementById(`user${x}songtotal`).value);
   
    }
    remainingsongs.innerHTML= Number(totalsongs-songsaccountedfor);
    
    if(songsaccountedfor>totalsongs){
        errorbox.innerHTML="YOU ARE USING TOO MANY SONGS. REMOVE "+ Math.abs(remainingsongs.innerHTML) + " SONG(S)";
        errorbox.style.display="block";
        //remainingsongs.style.display="block";
        event.preventDefault();
        console.log(totalsongs);
    }

    if(Number(songsaccountedfor)<totalsongs){
        errorbox.innerHTML="MORE SONGS NEEDED; Please increase song count by "+remainingsongs.innerHTML;
        errorbox.style.display="block";
        //remainingsongs.style.display="block";
        event.preventDefault();
    }

    /* I'm thinking we could compare the number of names on the side with the songs that were selected and see if they match up;
    Maybe we can do this by:
     Iterating through the applicable draftnames variable and iterating through the amount of times a name shows up and then removing the selected indexs of the songs that match
     with the names positioned where the songs would be (checkbox)
      vs  
      Getting the songs on the sides total by using applicable draftnumofusers to then go through each song amount input to create new list to compare with */


console.log("checkboxtrack");
console.log(checkboxtrack);

console.log(draftnames);
var newnames_songs=[];
newnames_songs= [...draftnames];
var itrhelp3=0;
for(let z=0; z<checkboxtrack.length;z++){
    for(let x=0;x<draftnumofusers[0];x++){ //For each user?
        //console.log(draftnames);

if(draftnames[checkboxtrack[itrhelp3]]==undefined){

}

else{
    console.log(draftnames[checkboxtrack[itrhelp3]]);

    console.log(draftnames.indexOf(draftnames[checkboxtrack[itrhelp3]]));
    newnames_songs.splice(draftnames.indexOf(draftnames[checkboxtrack[itrhelp3]]),1);
}
itrhelp3++;
    }
}
console.log(newnames_songs);

var jsonstring=JSON.stringify(checkboxtrack);
document.querySelector("input[name='checkboxtrack']").value= jsonstring;

//vs

    var navsongamount = []; 
   for(let x=0; x<draftnumofusers[0];x++){ //Need to actually get access to the array
        navsongamount[x]=document.getElementById(`user${x}songtotal`).value;
        console.log(navsongamount[x]);
   }

   var nametotals = [];
//Continuation of part 1
var totaloccurences = newnames_songs.reduce((alloccur,thename)=>{ //Counts the amout the amount of occurences of each name in updated draftnames copy
    alloccur[thename]=(alloccur[thename]||+0)+1;

//nametotals.push((alloccur[thename]||+0)+1);

    return alloccur
},{});

console.log(nametotals);

console.log(totaloccurences);
/*
totaloccurences = Object.values(totaloccurences);
console.log(totaloccurences); */



var iterhelp4=0;
var toJson = [];
for(let y=0; y<draftnumofusers[0];y++){
    if(draftsong4user[y]<navsongamount[y]){

        console.log("Need more songs for user:",draftnames[iterhelp4]);
        toJson.push(draftnames[iterhelp4]);
        console.log(toJson);
        //forpyinsert.value=draftnames[iterhelp4];

        //We need to now take draftnames[iterhelp4] and put each value of it into a hidden array list to then access it on the python side for line 343 in a where statement;
        //The issue is, 

        var moresongsneeded = navsongamount[y]-draftsong4user[y];

        totaloccurences[draftnames[iterhelp4]]=totaloccurences[draftnames[iterhelp4]]+moresongsneeded;
        //var addsong = Number(navsongamount[y])-Number(draftsong4user[y]);        
    }

    iterhelp4+=draftsong4user[y];
}

 jsonstring = JSON.stringify(toJson);
/*var forpyinsert = document.createElement('input');
forpyinsert.type= "hidden";
forpyinsert.name=`pyinsert#${y}`;
forpyinsert.value=jsonstring;
document.getElementById("form").appendChild(forpyinsert);*/

document.querySelector("input[name='pyinsert']").value= jsonstring; //"document.getElementsByName("pyinsert").value"does not work!!
console.log(document.getElementsByName("pyinsert").value);
//event.preventDefault();

console.log(totaloccurences);

   //Now Compare! (navsongamount vs totaloccurences)

   
totaloccurences = Object.values(totaloccurences);

console.log(totaloccurences); 
console.log(navsongamount);

for(let x=0; x<navsongamount.length;x++){
    if(navsongamount[x]!=totaloccurences[x]){
        event.preventDefault();
        console.log("Index ",x);
        console.log(navsongamount[x]," vs ", totaloccurences[x]);
        console.log("Incorrect user removal; Please try again");

        errorbox.innerHTML="Incorrect User Removal/Song Allocation";
        errorbox.style.display="block";
    }
}

   //event.preventDefault();

    if(Number(remainingsongs.innerHTML)==0){
       // remainingsongs.innerHTML="GOOD TO GO";
    }    }
    });
});



 async function updatedraft1(){ //Don't think this needs to be double spaced

    document.getElementById("isthesavebuttonclicked").value="clicked"; //This triggers first before getting sent to python router


}

document.getElementById("savedraft").addEventListener('click',(event)=>{
    if(totaltitles==5){ //5 = Max number of slots
        alert("FULL DRAFT SLOT; Please delete a draft");
        event.preventDefault();
    }

document.getElementById("updatedraft").addEventListener('click',(event)=>{
        var songsaccountedfor=0;
    for(x=0; x<showusernum.value; x++){ 
        songsaccountedfor=songsaccountedfor + Number(document.getElementById(`user${x}songtotal`).value);
   
    }
    remainingsongs.innerHTML= Number(totalsongs-songsaccountedfor);
    //console.log(Number(remainingsongs.innerHTML),songsaccountedfor);
    
    if(Number(remainingsongs.innerHTML)<0){
        //remainingsongs.innerHTML="YOU ARE USING TOO MANY SONGS. REMOVE "+ Math.abs(remainingsongs.innerHTML) + " songs";
        event.preventDefault();
        errorbox.style.display="block";
        errorbox.innerHTML="TOO MANY SONGS";
    }

    if(Number(remainingsongs.innerHTML)==0){
    }
})


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
    }
    else{
        topython();
    }

});


  function topython(){
    document.getElementById("isthesavebuttonclicked").value="deletethisdraft";
    console.log("Has reached back here");
}

function showsongtitle(theurl,usethisid,fortitledisplay,urlvideoid){
            //console.log("theurl:",theurl,";  usethisid: ",usethisid ,"; fortitledisplay:",fortitledisplay );

            //colorChange();

            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/; 
        if(theurl==undefined){
           theurl="";
        }
            const match = theurl.match(regExp); 

        /*match[0] is the entire url,  match[1] is which exxpression contained the video ID, match[2] is the ID itself*/                                                
        //console.log(match[2]);

        (match && match[2].length === 11) ? 
        getVideoDetails(match[2],usethisid,fortitledisplay,urlvideoid) : 
        document.getElementsByClassName(usethisid)[0].innerHTML="PLEASE ENTER VALID YOUTUBE URL"; 
        /*Youtube ID's are always 11 characters long*/ 

}

async function getVideoTitle(query,usethisidnum,fortitledisplay){
    const apiUrl2=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=1&type=video`;
    try{
        const response = await fetch(apiUrl2);
        if(!response.ok){
            throw new Error("Network status isn't ok:"+response.statusText);
        }
        const results = await response.json();
        console.log("Title should be here"); //        showsongtitle("",`namenum${eacheverysong}`,fortitledisplay);
        document.getElementsByClassName(`namenum${usethisidnum}`)[0].innerHTML=results.items[0].snippet.title;

        console.log("fortitledisplay",fortitledisplay,"--usethisid",usethisidnum);

        document.getElementById(`video${fortitledisplay}`).src ="https://www.youtube.com/embed/" +  results.items[0].id.videoId;
        document.getElementById(`namenum${usethisidnum}`).value = "https://www.youtube.com/watch?v=" +  results.items[0].id.videoId;

        console.log(results.items[0].snippet.title);
        //results.items[0].id.videoId
        //document.getElementsByClassName(usethisid)[0].innerHTML=results.items[0].snippet.title;
        console.log( document.getElementsByClassName(usethisid)[0].innerHTML);

        //var forurl = 'https://www.youtube.com/watch?v=${results.items[0].id.videoId}';
    }
    catch{

    }
}

async function getVideoDetails(videoId,usethisid,fortitledisplay,urlvideoid){
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

    try{

        //colorChange(videoId);
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("Network status isn't ok:" + response.statusText);
        }
        const data = await response.json();

       document.getElementsByClassName(usethisid)[0].innerHTML=data.items[0].snippet.title;

       document.getElementById(`video${fortitledisplay}`).src ="https://www.youtube.com/embed/" +  videoId;//www.youtube.com/embed/zm6gHJ3SQIM";
    
    }
    catch(error){
        console.error('Fetch error:',error);
    }

  }

  function b4send(){
    errorbox.style.display="none";
    document.getElementById("isthesavebuttonclicked").value="notclicked";
  }

  function toslide4_1(){
    var joingame = document.getElementById("joingame");
    joingame.style.display="block";
    console.log("enter code");
  }

  function toslide4_2(){
    var creategame = document.getElementById("creategame");
    creategame.style.display="block";
    console.log("create code");
  }

  function matchcode(){
     var socket = io('http://localhost:3000');
    var checkcode =document.getElementById("entercode").value;
    console.log(checkcode);
    socket.emit("check code",checkcode);

    socket.on("code checked",function(status){
        console.log(status);
    });

    socket.on("connect_error", (err) => {
    console.log("Connection failed:", err.message);
});



    
   /* socket.on("code status",function(status){
        console.log(status);*/
     /*   if(status=="ok"){
            console.log("Code is correct");
            //Redirect to game page
        }*/
   /* }); */
   //Remember to also send the user name and then have the server send back the applicable draft based on the code and then redirect to game page with that draft
   //We can also have the server send back an error if the code is wrong and then display that error on the page
   //Also remember to set isthisauto to false here as well
   //We can also have a timer for the code so that it expires after a certain amount of time or after it's been used a certain amount of times
   //We can also have the option to have a password for the code as well for added security
   //Remember to also have the server emit an event when the game starts so that all players can be redirected to the game page at the same time
  }

  function  toslide4(){
    var socket = io('http://localhost:3000');
    slide4.style.display="block"; //Have this be a popup instead of a whole new page?
    slide4.style.zIndex="100";

    var joincode = Math.floor(100000 + Math.random() * 900000);
    console.log(joincode);
    document.getElementById("groupcode").innerHTML=joincode;

    socket.emit("create code", joincode);
    

   /* 
   errorbox.style.display="none";
    document.getElementById("isthesavebuttonclicked").value="notclicked";
   
   slide3.style.display="none";
    document.getElementById("form").submit(); */
  
    //Remember we'll have to set isthisauto to false
    
  }










