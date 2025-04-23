var height4tiers = 100/listoftiers.length+1; //Plus one is for bottom tier

var body2 = document.getElementsByTagName("body");
    body2[0].style.backgroundColor = "#333333";
    
listoftiers.unshift(bottomtier); //Makes all the losers the last/bottom tier 
namesintiers.unshift(lowtiernames);
allnotes.unshift(losernotes);

/*for(var x=losernotes.length-1; x>=0;x--){
    //console.log(losernotes[x]);
    allnotes.unshift(losernotes[x]);
}*/

console.log(listoftiers);
console.log(namesintiers);
console.log(allnotes);

//Here is where the tier slots are made
 for(x=1; x<=listoftiers.length; x++){ // for(x=0; listoftiers.length-1>=x; x++){
    var createtier = document.createElement("div");
    createtier.style.margin="0 auto";
    createtier.id=`Tier_${x}`;
    //createtier.style.border = "black 1px solid";
    createtier.style.borderLeft="white 2px solid";
    createtier.style.borderRight="white 2px solid";
    createtier.style.borderBottom="white 2px solid";
    createtier.style.paddingLeft="1%";


    if(x==1){
        createtier.style.backgroundImage="linear-gradient(blue,#242323)";//createtier.style.backgroundImage="linear-gradient( grey,blue)";
        createtier.style.borderTop="white 2px solid";
        createtier.style.borderTopLeftRadius="20%";
        createtier.style.borderTopRightRadius="20%";
        createtier.style.borderTopLeft="white 2px solid";
        createtier.style.borderTopRight="white 2px solid";
        createtier.style.paddingTop="6%";


    }
    else if(x==listoftiers.length){
        createtier.style.backgroundImage="linear-gradient(#242323,red 99%)";
        createtier.style.borderBottomLeftRadius="8%";
        createtier.style.borderBottomRightRadius="8%";
        createtier.style.paddingBottom="2%";

    }
    else{
        //createtier.style.border = "black 1px solid";
    }

    //createtier.style.height = "70%";//createtier.style.height = height4tiers +"%";
    createtier.style.width = "75%";
    createtier.style.position="relative";
    createtier.style.block="block";
    createtier.style.backgroundColor ="#242323";
    document.getElementById("results").appendChild(createtier);

 }


 const splashScreen = document.getElementById('splashscreen');
const mainContent = document.getElementById('results');
splashScreen.style.display = 'flex'; // Show the splash screen
mainContent.style.display = 'none'; // Hide the main content

console.log(listoftiers);
videoDetails(listoftiers);


 //Where the magic happens
  async function videoDetails(listoftiers) { 
    var urltitles =[];
           console.log(listoftiers);
           var tiernumber=1;

    for(let x=listoftiers.length-1; x>=0; --x){ //Must declare x via let or variable
        if (listoftiers[x]) {
             //console.log("Tier at index: "+ x);
        } 
        else {
             console.log("No such tier at index: " + x);
            continue; // Skip this iteration
         }
    var tierlength = listoftiers[x].length;
    var y=0;
    if (listoftiers && listoftiers[x] && listoftiers[x][y]) {

        while(y<tierlength){


    var url =listoftiers[x][y];
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/; 
    var vid_id = url.match(regExp);

    const apiCall = `https://www.googleapis.com/youtube/v3/videos?id=${vid_id[2]}&part=snippet,contentDetails,statistics&key=${apiKey}`;
    
    //var urlindex =0;
    
    try{

        var response = await fetch(apiCall);
        if(!response.ok){
      throw new Error("Network status isn't okay " + response.statusText);
        }
        const video = await response.json();

        var newtieritem = document.createElement("div");

        //urltitles[urlindex++] =video.items[0].snippet.title; //This won't work with API call; "Returns only once"
        if(y==0 && tierlength==1 &&  x==listoftiers.length-1){//Winning tier
            console.log("Winning Tier",y);
            var tiertitle = document.createElement("div");
            tiertitle.innerHTML ="AND THE WINNER IS...";
            document.getElementById(`Tier_${tiernumber}`).appendChild(tiertitle);
            console.log(namesintiers[namesintiers.length-1]);
            newtieritem.innerHTML = video.items[0].snippet.title;// + " ["+ namesintiers[x][y] +"]";

            //namesintiers[namesintiers.length-1][0] +"]";

            //newtieritem.style.textDecoration="underline";
            newtieritem.style.textDecorationColor = "red";
            newtieritem.id=video.items[0].snippet.title + x;
            console.log(newtieritem.id);
            newtieritem.className="SongsDiv"; 
            //newtieritem.style.backgroundColor="pink";
            newtieritem.style.width="75%";
            newtieritem.style.marginTop="2%";
            newtieritem.style.display="inline-block";
            newtieritem.style.color ="gold";
            document.getElementById(`Tier_${tiernumber}`).appendChild(newtieritem);

            var nametag = document.createElement("span");
            nametag.innerHTML =  namesintiers[x][y];
            nametag.style.backgroundColor = "black";
            nametag.style.borderRadius = "50%";
            nametag.style.padding=".5% 2%";
            nametag.style.margin="0 2%";
            nametag.style.fontSize="2.5vh";
            //nametag.style.textDecoration="none";
            document.getElementById(newtieritem.id).appendChild(nametag);


            var thumbnail = document.createElement("img");
            thumbnail.crossOrigin="anonymous";
            thumbnail.src= video.items[0].snippet.thumbnails.high.url;
            console.log(video.items[0].snippet.thumbnails.high.url);

            thumbnail.style.aspectRatio="1";
            thumbnail.style.height = "30%";
            thumbnail.style.display="block";
            //thumbnail.style.margin="0 auto";
            document.getElementById(newtieritem.id).appendChild(thumbnail);//document.getElementById(`Tier_${tiernumber}`).appendChild(thumbnail);
            y++;


        }
        else if(y==0){ //Start of a new tier (Not Winning tier)

            var tiertitle = document.createElement("div");
            tiertitle.style.fontSize="2.7vh";
            tiertitle.style.maxWidth = "50%";

            //tiertitle.style.fontSize="100%";
            
            if(x==0){
                tiertitle.innerHTML = "COMPLETE LOSERS";
                //tiertitle.style.width="30%";
            }
            else{
                tiertitle.innerHTML = "Tier "+ tiernumber;
               // tiertitle.style.width="10%";

            }
            tiertitle.style.color="black";
            //tiertitle.style.textShadow ="2px 2px 5px gold";
            tiertitle.style.backgroundColor="white";
            tiertitle.style.textAlign="center";
            document.getElementById(`Tier_${tiernumber}`).appendChild(tiertitle);

            newtieritem.innerHTML = video.items[0].snippet.title;// + " ["+ namesintiers[x][y] +"]";
           // newtieritem.style.backgroundColor="pink";
            newtieritem.style.width="75%";
            newtieritem.style.marginTop="2%";
            //newtieritem.style.textDecoration="underline";
            newtieritem.style.display="inline-block";

            


            if(x==0){
                newtieritem.style.textDecorationColor = "blue";

            }                
            else{
                newtieritem.style.textDecorationColor = "red";

            }
            newtieritem.id=video.items[0].snippet.title + x;
            newtieritem.style.position="relative";
            newtieritem.style.textAlign="center";
            newtieritem.className="SongsDiv";
            document.getElementById(`Tier_${tiernumber}`).appendChild(newtieritem);

            var nametag = document.createElement("span");
            nametag.innerHTML = namesintiers[x][y];
            nametag.style.backgroundColor = "black";
            nametag.style.borderRadius = "50%";
            nametag.style.padding=".5% 2%";
            nametag.style.margin="0 2%";
            nametag.style.fontSize="2.5vh";

            //nametag.style.textDecoration="none";
            document.getElementById(newtieritem.id).appendChild(nametag);
            //document.getElementById(`Tier_${tiernumber}`).appendChild(nametag);

            var thumbnail = document.createElement("img");
            thumbnail.crossOrigin="anonymous";
            thumbnail.src= video.items[0].snippet.thumbnails.high.url;
            thumbnail.style.aspectRatio="1";
            thumbnail.style.height = "30%";
            thumbnail.style.display="block";
            document.getElementById(newtieritem.id).appendChild(thumbnail);//document.getElementById(`Tier_${tiernumber}`).appendChild(thumbnail);
            y++;

        }
        else{ //Inside existing tier

            newtieritem.innerHTML = video.items[0].snippet.title;// + " ["+ namesintiers[x][y] +"]";

            //newtieritem.style.textDecoration="underline";
            if(x==0){
                newtieritem.style.textDecorationColor = "blue";

            }  
            else{
                newtieritem.style.textDecorationColor = "red";

            }
            newtieritem.id=video.items[0].snippet.title + x;
            newtieritem.style.display="block";
            newtieritem.style.position="relative";
            newtieritem.style.textAlign="center";
            //newtieritem.style.backgroundColor="pink";
            newtieritem.style.width="75%";
            newtieritem.style.marginTop="2%";
            newtieritem.style.display="inline-block";
            newtieritem.className="SongsDiv";
            document.getElementById(`Tier_${tiernumber}`).appendChild(newtieritem);

            var nametag = document.createElement("span");
            nametag.innerHTML = namesintiers[x][y];
            nametag.style.backgroundColor = "black";
            nametag.style.borderRadius = "50%";
            nametag.style.padding=".5% 2%";
            nametag.style.margin="0 2%";
            nametag.style.fontSize="2.5vh";

            //nametag.style.textDecoration="none";
            document.getElementById(newtieritem.id).appendChild(nametag);
            //document.getElementById(`Tier_${tiernumber}`).appendChild(nametag);

            var thumbnail = document.createElement("img");
            thumbnail.crossOrigin="anonymous";
            thumbnail.src= video.items[0].snippet.thumbnails.high.url;
            thumbnail.style.aspectRatio="1";
            thumbnail.style.height = "30%";
            thumbnail.style.objectFit="cover";
            thumbnail.style.objectPosition="center";
            thumbnail.style.display="block";
            thumbnail.style.position="relative";

            document.getElementById(newtieritem.id).appendChild(thumbnail);//document.getElementById(`Tier_${tiernumber}`).appendChild(thumbnail);
            y++;


        }           
// return video.items[0].snippet.title;

}   
    catch(error){
     console.error("Fetch error:",error);
}   
    //y++;
    console.log("Y checker: ",y);
}
console.log("Y Final: ",y);

}

else {
console.error("Variable is not defined or is not an array:", variable);
}
tiernumber++;

}

for(x=0; x<document.getElementsByClassName("SongsDiv").length-listoftiers[0].length;x++){
//The "-listoftiers[0].length" takes away the losers tier who haven't beaten any songs

   urltitles[x]= document.getElementsByClassName("SongsDiv")[x].id; //The id are the song names themselves
   urltitles[x]=urltitles[x].slice(0,-1); //Removed the id number indicator that I added previously
}
console.log(urltitles);


var iterhelp=0;
var everydiv = document.getElementsByClassName("SongsDiv");


var tracktier=allnotes.length-1;
for(var x=0; x<everydiv.length;x++){
var addnotes= document.createElement('span');
addnotes.innerHTML= allnotes[tracktier][iterhelp];
addnotes.className ="NoteNum";
if(allnotes[tracktier][iterhelp]!=""){
    addnotes.style.backgroundColor="black";
}
addnotes.style.display="inline-block";
addnotes.style.position="absolute";
addnotes.style.right="0";
addnotes.style.padding="1%";
addnotes.style.margin="10px 10px";
/*addnotes.style.paddingTop="1%";
addnotes.style.paddingBottom="1%";
addnotes.style.paddingLeft="1%";*/
addnotes.style.fontSize="1.5vw";
addnotes.style.maxWidth="20%";
//addnotes.style.width="2.5vw";

//document.getElementById(everydiv[x].id).appendChild(addnotes);
document.getElementById(everydiv[x].id).insertAdjacentElement('afterend',addnotes);



if(iterhelp==allnotes[tracktier].length-1){
    tracktier--;
    iterhelp=0;
}
else{
    iterhelp++;
}

}




//Removing repeats
var songdivs = document.getElementsByClassName("SongsDiv");
var songdivindex=0
const songdivlength =songdivs.length;

console.log(songdivlength);
for(var x=0; x<songdivs.length;x++){ //for(var x=0; x<songdivs.length;x++){//for(var x=listoftiers.length-1; x>=0;x--){//Covers total amount of songs
//Make songdivs.length the total amount of songs (thats why we have 8)

var iter=0;
var firstapperance=0;

while(iter<songdivlength){
//console.log(everydiv[iter],iter);
if(everydiv[iter].innerText.includes(songdivs[x].innerText)){
if(firstapperance<1){
    
    firstapperance++;
}
else{
   //console.log("FOUND",everydiv[iter].innerText);
   //console.log("REMOVE");

     everydiv[iter].innerHTML = everydiv[iter].innerHTML.replace(songdivs[x].innerHTML,"");

}
}
   iter++;


}
}


/*for(x=0; x<everydiv.length;x++){
urltitles[x]= everydiv[x].id;
}
console.log(urltitles);

*/



//Add what songs got defeated by what


var everydiv = document.getElementsByClassName("SongsDiv");
var everynote = document.getElementsByClassName("NoteNum");

for(var x= everydiv.length-1; x>=0; x--){ 
// Iterate in reverse to avoid issues with shifting indices
var mightdelete = everydiv[x].querySelectorAll("img");

if(mightdelete.length==0){
everydiv[x].remove();
everynote[x].remove();
}

}




var getindex=listoftiers.length-1;
var titlecounter=0;
var getsong = listoftiers[getindex].length-1;
iterhelp=1;
var tmp=0
//Added defeatedby additions here because it won't work within API calls
for(var x=1; x<everydiv.length; x++){  //skip x=0 because the winner didn't lose to anybody




var defeatedby = document.createElement("div");
defeatedby.style.marginBottom="5%";
defeatedby.style.textAlign="left";
defeatedby.innerHTML = "Defeated By "+ "\"" +urltitles[titlecounter++] + "\""; 
defeatedby.style.textDecoration="underline";
defeatedby.className="thedefeated";
//defeatedby.style.textDecoration="none";
//Have to go backwards because urltitles tier results are in reverse? (FALSE but is it changing?)


document.getElementsByClassName("NoteNum")[x].insertAdjacentElement('afterend',defeatedby); //document.getElementById(everydiv[x].id).insertAdjacentElement('afterend',defeatedby); 
//Have to put it AFTER parent element so we dont inherit text decoration

if(getsong==listoftiers[getindex].length){ //if(getsong==0){ 

   /* titlecounter=tmp + listoftiers[--getindex].length; //Go to the next tier
    tmp=titlecounter;*/
    getindex--;
    getsong=0;//getsong = listoftiers[getindex].length-1;
    console.log(titlecounter);
}
else{
getsong++;

}

//var removeunderline = everydiv[x].

}

/*
var removeunderline = document.querySelectorAll(".thedefeated");
removeunderline.forEach(element => {
//element.style.color="red";
element.classList.add('thedefeated2');
});*/


//Finally remove splash screen and reveal results

const splashScreen = document.getElementById('splashscreen');
const mainContent = document.getElementById('results');

splashScreen.style.display = 'none'; // Hide the splash screen
mainContent.style.display = 'block'; // Show the main content


}

//Screenshot section


function screenshot(){
//document.getElementById("screenshot").
var resultstitle = prompt("Screenshot Title?","fullresults");

if(resultstitle!=null){
html2canvas(document.body,{useCORS:true}).then(canvas=>{
    var link = document.createElement("a");
    link.download = resultstitle + ".png";
    link.href = canvas.toDataURL();
    link.click();
}).catch(error=>{
    console.error("ERROR ON SCREENSHOT",error);
});
}

}