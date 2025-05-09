import React from 'react'
import {Text,View,Button} from 'react-native'
//import{totalusers2} from 'C:/Users/dgrea/DebateWebsite/static/js/script2.js'


//npx expo start

var votes4left=0;
var votes4right=0;
var totalusernum=0;
//totalusernum= totalusers2.totalusers;

export function receivevotes(thevote){
    console.log("The vote is for "+ thevote);
    console.log(totalusernum);
    if(thevote=="Left"){
        votes4left++;
        console.log("Number of votes for right: " + votes4left);
    } 

    else if(thevote=="Right"){
        votes4right++;
        console.log("Number of votes for right: " + votes4right);
    }

    else{

    }

}

