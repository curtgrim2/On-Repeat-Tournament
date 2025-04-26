import { Image, StyleSheet, Platform, View, Text, Button,TouchableOpacity } from 'react-native';
import react from 'react'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {receivevotes} from './phoneapp.js';

export default function HomeScreen() {


const sendinvote = (thevote:string) =>{
  receivevotes(thevote);

};//style={{color:'black'}}

  return ( <View style={styles.body1}>
              <Text style={styles.label}> Get your votes in! </Text>


      <View style={styles.buttcont}>
          <TouchableOpacity style ={styles.leftbutton} onPress={()=>sendinvote("Left")}>
              <Text style={styles.buttontext}>Left</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.rightbutton}onPress={()=>sendinvote("Right")}>
              <Text style={styles.buttontext} > Right Video</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.bottomlabel}>

            <Text>
                Take back vote
            </Text>           
   </TouchableOpacity>
          </View>
    
  );
}

const styles = StyleSheet.create({
  buttcont:{
flexDirection:'row',
backgroundColor:'yellow',
height:"75%",
/*justifyContent:'center',
alignItems:'center'*/
},
  label:{
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    borderBottomRightRadius:'50%',
    borderBottomLeftRadius:'50%',
    fontSize:50,

  },
  bottomlabel:{
    backgroundColor:'grey',
    textAlign:'center'
  },
  body1:{
    width:'100%',
    backgroundColor:'purple',
    textAlign:'center',
    height:'100%',
  },
  leftbutton:{
    backgroundColor:'black',
    color:'white',
    /*borderRadius:500/2,*/
    width:400,
    height:300,
    position:'fixed',
    top:"20%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  
  },
  rightbutton:{
    backgroundColor:'black',
    color:'white',
   /* borderRadius:500/2,*/
    width:400,
    height:300,
    position:'fixed',
    right:0,
    top:"20%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  
  },
  buttontext:{
    color:'white',
    textAlign:'center',
    fontSize:25
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

/*<ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Testing!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>*/
