import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Recommendation, Rating } from 'react-native-recommendation'

textList=["FROM 9 -> 10","FROM 6 -> 8","FROM 5 -> 4","FROM 2 -> 3","FROM 0 -> 1"]

emojiList=[
  require('./assets/ic_love.png'),
  require('./assets/ic_happy.png'),
  require('./assets/ic_confused.png'),
  require('./assets/ic_sad.png'),
  require('./assets/ic_angry.png')
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Rating 
        titleText={"Rating Test"}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        selectedColor={'orange'}
        max={5}/>

        <View style={styles.separator}/>

        <Recommendation 
        titleText={"NPS Test"}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        selectedColor={'orange'}
        selectedTextColor={'white'}
        unSelectedTextColor={'black'}
        selectedSize={30}
        // reactionTextList={textList}
        // reactionList={emojiList}
        max={10}
        reactionsEnabled/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  separator:{
    marginVertical: 30,
    width: '100%',
    backgroundColor:'rgba(0,0,0,0.1)',
    height: 1
  }
});
