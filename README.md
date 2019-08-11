# React-Native-Recommendation
[![npm version](https://badge.fury.io/js/react-native-recommendation.svg)](https://badge.fury.io/js/react-native-recommendation)
![npm](https://img.shields.io/npm/dt/react-native-recommendation)
Features
--------

- Net Promoter Score (NPS) view for recommendation and add reviews ( Released :heavy_check_mark: :rocket: )
- Stars and custom images rating ( Released :heavy_check_mark: :rocket: )

Example
--
![](https://media.giphy.com/media/hR0H9YRIb2qVUSXj36/giphy.gif)

Installation
-
`npm i react-native-recommendation`
or
`yarn add react-native-recommendation`

Usage
-
```javascript
import { Recommendation , Rating } from 'react-native-recommendation'
...

 <Rating 
        titleText={"Rating Test"}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        selectedColor={'red'}
        max={5}
        selectedValue={(value)=> // returns selected value } 
        />
        
 <Recommendation 
        titleText={"Recomendation Test"}
        selectedColor={'red'}
        selectedTextColor={'white'}
        unSelectedTextColor={'black'}
        selectedSize={30}
        max={10}
        selectedValue={(value)=> // returns selected value }
        reactionsEnabled // Remove this to disable reaction icon and text
        />
```

**For customized icons and text do as the following**

```javascript
import { Recommendation } from 'react-native-recommendation'
...
// Add NPS reaction description texts in this order
textList=["FROM 9 -> 10","FROM 6 -> 8","FROM 5 -> 4","FROM 2 -> 3","FROM 0 -> 1"]

// Add NPS reaction icons same as text order
emojiList=[
  require('./assets/ic_love.png'),
  require('./assets/ic_happy.png'),
  require('./assets/ic_confused.png'),
  require('./assets/ic_sad.png'),
  require('./assets/ic_angry.png')
]

...

 <Rating 
        titleText={"Rating Test"}
        titleStyle={{ alignSelf: 'center', fontWeight: 'bold'}}
        selectedColor={'red'}
        max={5}
        currentValue={3} // Rating intial value default is 1
        selectedValue={(value)=> // returns selected value } 
        customSelected={require('./assets/ic_happy.png')}
        customUnSelected={require('./assets/ic_happy.png')} // default value as customSelected prop
        />

 <Recommendation 
        titleText={"Recomendation Test"}
        selectedColor={'red'}
        selectedTextColor={'white'}
        unSelectedTextColor={'black'}
        selectedSize={30}
        max={10}
        currentValue={3} // Recommendation intial value default is 0
        selectedValue={(value)=> // returns selected value }
        reactionsEnabled
         // Add these
        reactionTextList={textList}
        reactionList={emojiList}
        />
```

Components
--
`<Recommendation/>`

`<Rating/>`



Components Props 
-
`<Recommendation/>` 

| Prop        | Notes           | Type  | Signature (func) |
| ------------- |:-------------:| -----:|:-|
| titleText      | Recommendation upper title text| String||
| titleStyle      | Recommendation text style |   Style ||
| backgroundColor  | Recommendation view background color      |    Color ||
| width | Recommendation view width size (full width is recommended)      |    Number ||
| selectedColor | Selected option color      |    Color ||
| selectedTextColor | Selected option text color      |    Color ||
| selectedSize | width * height sizes and automatic adjust circular shape --- example: 30 means 30 height, 30 width, and 15 border radius     |    Number ||
| max | Recommendation option maximum numbers range      |    Number ||
| selectedValue | Returned selected value      |    Callback |selectedValue={ (value) => // your code }| 
| reactionsEnabled | Adding smile faces reactions to recommendation  (default false)   |    Boolean || 
| reactionTextList | Set reaction test relative to user selection       |    Array of Strings || 
| reactionList | Set reaction images relative to user selection      |    Array of require(images) || 
| disabled | Recommendation selecting disabled   |    Boolean || 
| currentValue | Recommendation initial value     |    Number || 


---

`<Rating/>` 

| Prop        | Notes           | Type  | Signature (func) |
| ------------- |:-------------:| -----:|:-|
| titleText      | Rating upper title text| String||
| titleStyle      | Rating text style |   Style ||
| backgroundColor  | Rating view background color      |    Color ||
| width | Rating view width size     |    Number ||
| selectedColor | Selected icon color      |    Color ||
| unSelectedColor | Unselected icon color      |    Color ||
| iconStyle | Rating icon style   |    Style ||
| max | Rating option maximum numbers range      |    Number ||
| selectedValue | Returned selected value      |    Callback |selectedValue={ (value) => // your code }| 
| customSelected | Set selected customized rating icon      |    require(image)  || 
| customUnSelected | Set unselected customized rating icon ( customSelected prop is the default value     |   require(image) ||
| disabled | Rating selecting disabled   |    Boolean || 
| currentValue | Rating initial value     |    Number ||  





