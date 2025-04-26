import React from 'react'
import {Text,View,Button} from 'react-native'
import './style.css';



function receivevotes(thevote){
    console.log("The vote is for "+ thevote);

}

/*export default function App(){

    const userselected = () => {
        
    }

    return(
        <View style={{backgroundColor:'purple'}}>
            <Text style ={{color:black,fontWeight:bolder}}> Get your votes in! </Text>
            <Button class="whowon" title ="Left Video" onPress={userselected}/> 
            <Button class="whowon" title="Right Video" onPress={userselected}/>
        </View>
    );
}*/