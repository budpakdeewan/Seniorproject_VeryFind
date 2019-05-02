import React, { Component } from 'react';
import { ImageBackground, Text, View, Image, Platform } from 'react-native';
import { Button } from 'native-base';
import ResultsFound from './src/ResultsFound';
import ResultsNotFound from './src/ResultsNotFound';
//import Verify from './src/Verify';
import MoreInformation from './src/MoreInformation';
import Welcome from './src/Welcome';
import ScanQRcode from './src/ScanQRcode';



//var img2 = require('./assets/found1.png');
export default class App extends React.Component {
  state = {
    //currentScreen: "ResultsFound"
    currentScreen: "ScanQRcode"
  }
  switchScreen = (currentScreen)=> {
    this.setState({currentScreen})
  }
  renderScreen = ()=>{
    if(this.state.currentScreen === "ScanQRcode"){
      return(
        <ScanQRcode switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "more"){
      return(
        <Welcome/>
      )
    }
  }
  render() {
    return (
      <View style={styles.container4}>
       {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container4: {
    flex: 1,
    marginTop: Platform.OS ==="android" ? 24 : 0 
  }
}

