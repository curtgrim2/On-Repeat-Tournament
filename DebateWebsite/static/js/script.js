

var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
let numofusers = document.getElementById("showusernum");
/*changingvalue = 2;
numofusers.innerHTML=changingvalue;*/

var gamespecs = document.getElementById("startup");

var slide2 = document.getElementById("slide2");
slide2.style.display = "none";
var slide1 = document.getElementById("slide1");

function toslide2(showusernum){
    console.log(showusernum.value);
    slide1.style.display = "none";
    slide2.style.display ="block";
    

    for(x=0; x<showusernum.value; x++){
        var node  = document.createElement("input");
        node.type = "text";
       // node.name = "allnames";
       node.name = `name${x}`;
        node.className = "allnames2";
        node.placeholder="Enter name here";
        document.getElementById("enternames").appendChild(node);
    } 
}

/*
function sendtoFlask(){
    
    var allnames = document.querySelectorAll('.allnames');
    var nameslist = [];

    allnames.forEach(function (input){
        nameslist.push(input.value);
        console.log(input.value);
    });


    fetch('/startgame',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({allnames: nameslist})
    })
    .then(response=> response.json())
    .then(data=> {
        console.log('Success',data);
    })
    .catch((error)=>{
        console.log('Error',error);
    }) 

}
*/



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


