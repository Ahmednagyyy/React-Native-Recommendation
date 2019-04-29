# React-Native-Recommendation

Features
--------

- Net Promoter Score (NPS) view for recommendation and add reviews ( Released :heavy_check_mark: :rocket: )
- Stars and custom images rating ( Baking :cookie:  :hourglass: )

Example
--
![](https://media.giphy.com/media/eguy2GVuThkcVC3UhO/giphy.gif)

Installation
-
`npm i react-native-recommendation`
or
`yarn add react-native-recommendation`

Usage
-
```javascript
import { Recommendation } from 'react-native-recommendation'
...

 <Recommendation 
        titleText={"Recomendation Test"}
        selectedColor={'red'}
        selectedTextColor={'white'}
        unSelectedTextColor={'black'}
        selectedSize={30}
        max={10}
        selectedValue={(value)=> // returns selected value }
        reactionsEnabled
        />
```

`For customized reaction icons and text do as the following`

```javascript
import { Recommendation } from 'react-native-recommendation'
...
// Add your reaction description texts in this order
textList=["FROM 9 -> 10","FROM 6 -> 8","FROM 5 -> 4","FROM 2 -> 3","FROM 0 -> 1"]

// Add reaction icons same as text order
emojiList=[
  require('./assets/ic_love.png'),
  require('./assets/ic_happy.png'),
  require('./assets/ic_confused.png'),
  require('./assets/ic_sad.png'),
  require('./assets/ic_angry.png')
]

 <Recommendation 
        titleText={"Recomendation Test"}
        selectedColor={'red'}
        selectedTextColor={'white'}
        unSelectedTextColor={'black'}
        selectedSize={30}
        max={10}
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

`<StarRating/>` ( Baking :cookie:  :hourglass: )



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




