import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Recommendation } from 'react-native-recommendation'

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
        <Recommendation 
        titleText={"Recomendation Test"}
        selectedColor={'red'}
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
  }
});
