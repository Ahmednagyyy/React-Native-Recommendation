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
        selectedColor={'orange'}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        currentValue={2} // default is 1
        max={5}
        />

        <View style={styles.separator}/>

        <Recommendation 
        titleText={"Customized NPS"}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        selectedColor={'black'}
        selectedTextColor={'white'}
        unSelectedTextColor={'black'}
        selectedSize={30}
        currentValue={7} // default is 0
        reactionTextList={textList}
        reactionList={emojiList}
        max={10} // max is not more than 10 ( Recommended )
        reactionsEnabled/>

        <View style={styles.separator}/>

        <Recommendation 
        titleText={"Package NPS"}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        selectedColor={'red'}
        selectedTextColor={'white'}
        selectedSize={30}
        currentValue={5} // default is 0
        max={10} // max is not more than 10 ( Recommended )
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
