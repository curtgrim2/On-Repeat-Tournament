var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
let numofusers = document.getElementById("showusernum");
/*changingvalue = 2;
numofusers.innerHTML=changingvalue;*/

var gamespecs = document.getElementById("startup");

var slide2 = document.getElementById("slide2");
slide2.style.display = "none";
var slide1 = document.getElementById("slide1");
var slide3 = document.getElementById("slide3");
slide3.style.display ="none";

var olddrafts = document.getElementById("olddrafts") ;



function toslide2(showusernum){
    console.log(showusernum.value);
    slide1.style.display = "none";
    slide2.style.display ="block";
    

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

function toslide3(showusernum,enternames){ /*For Youtube URLs */
    slide1.style.display = "none";
    slide2.style.display ="none";
    slide3.style.display ="block";
    olddrafts.style.display="none";
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
       newdiv.style.height="30%";
       document.getElementById("s3").appendChild(newdiv);
       
       newdiv.innerHTML = document.getElementById(`nameid${x}`).value;
       console.log(document.getElementById(`nameid${x}`).value + " checking in");
      /* document.getElementById("s3").appendChild(document.createElement('br'));
       console.log("SPACE"); */

       for(y=0; y<songsperuser.value; y++){ //Each user gets a certain amount of songs. Here we display them.
        var utubeURLs  = document.createElement("input");
        utubeURLs.type = "text";
        utubeURLs.name = `namenum${eacheverysong}`; //Ids ALL songs; Used in Python router
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="90%";
        console.log(`namenum${eacheverysong++}`);
        document.getElementById(`namenumid${x}`).appendChild(utubeURLs); 
                            
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
       newdiv.style.height="30%";

       document.getElementById("s3").appendChild(newdiv);
       
       if(iterhelp%draftsongsperuser[0]==0){
        newdiv.innerHTML=draftnames[iterhelp];
       }
       console.log(draftsongsperuser[0]);

       for(y=0; y<draftsongsperuser[0]; y++){ 
       // console.log(drafturls[iterhelp]);
        var utubeURLs  = document.createElement("input");
        utubeURLs.type = "text";
        utubeURLs.name = `namenum${eacheverysong}`; 
        utubeURLs.placeholder="Enter the URL";
        utubeURLs.style.display ="block";
        utubeURLs.style.width="90%";

        utubeURLs.value = drafturls[iterhelp++];
        console.log(utubeURLs.value);

        console.log(`namenum${eacheverysong++}`);
        document.getElementById(`namenumid${x}`).appendChild(utubeURLs); 
                            
       }
    } 

}

async function savethisdraft(){

    document.getElementById("isthesavebuttonclicked").value="clicked"; //This triggers first before getting sent to python router
    

}






