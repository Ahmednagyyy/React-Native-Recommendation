# React-Native-Recommendation

Features
--------

- Net Promoter Score (NPS) view for recommendation and add reviews ( Released :heavy_check_mark: :rocket: )
- Stars and custom images rating ( Baking :cookie:  :hourglass: )

![](https://media.giphy.com/media/eguy2GVuThkcVC3UhO/giphy.gif)

Installation
-
`npm i react-native-recommendation`
or
`yarn add react-native-recommendation`



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




