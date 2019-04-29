import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image
} from "react-native";
import _ from "lodash";




class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            npsSelected: 0,
            text: "",
        };
    }

    render() {
        let { reactionsEnabled} = this.props

        return (
            <View style={styles.container}>

                {this.getRecommendationView()}
                {reactionsEnabled && this.getEmojiView()}

            </View>
        );
    }

    getRecommendationView() {
        let { width, titleStyle, titleText, backgroundColor, max } = this.props
        return (
            <View style={{ alignItems: "flex-start", width: width }}>
                <Text style={titleStyle}>{titleText}</Text>
                <View
                    style={[styles.recommendationContainer,
                    { backgroundColor: backgroundColor, width: width }]}>
                    {this.getNpsView(max)}
                </View>
            </View>
        );
    }

    getNpsView(max) {
        let nps = _.range(max + 1);

        let { selectedColor, selectedTextColor, unSelectedTextColor, selectedSize } = this.props

        return nps.map((item, index) => {
            return (
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={[
                            this.state.npsSelected === index && {
                                borderRadius: selectedSize / 2,
                                backgroundColor: selectedColor
                            },
                            {
                                height: selectedSize,
                                width: selectedSize,
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ]}
                        onPress={() => this.onNpsSelect(index)}>
                        <Text style={[styles.npsText,
                        {
                            color: this.state.npsSelected === index ?
                                selectedTextColor : unSelectedTextColor
                        }]}>{index}</Text>
                    </TouchableOpacity>
                </View>
            );
        });
    }

    getEmojiView() {
        return (
            <View style={styles.container}>
                <Image style={styles.emojiStyle}
                source={this.getEmoji()}/>

                <Text>{this.getRecommendationText()}</Text>
            
            </View>
        )
    }

    onNpsSelect(index) {
        const { selectedValue } = this.props;
        if (selectedValue) {
            selectedValue(index)
        }
        this.setState({ npsSelected: index });
    }


    getEmoji() {
        let { reactionList } = this.props

        if (this.state.npsSelected > 8) {
            return reactionList ? reactionList[0] : require('./assets/in-love.png')
        }
        else if (8 >= this.state.npsSelected && 6 <= this.state.npsSelected  ) {
            return reactionList ? reactionList[1] : require('./assets/happy.png')
        }
        else if (5 >= this.state.npsSelected && 4 <= this.state.npsSelected  ) {
            return reactionList ? reactionList[2] : require('./assets/confused.png')
        }
        else if (3 >= this.state.npsSelected && 2 <= this.state.npsSelected  ) {
            return reactionList ? reactionList[3] : require('./assets/sad.png')
        }
        else if (1 >= this.state.npsSelected && 0 <= this.state.npsSelected  ) {
            return reactionList ? reactionList[4] : require('./assets/angry.png')
        }
         

    }

    getRecommendationText(){
        let { reactionTextList} = this.props

        if (this.state.npsSelected > 8) {
            return reactionTextList ? reactionTextList[0] : "IN LOVE !!"
        }
        else if (8 >= this.state.npsSelected && 6 <= this.state.npsSelected  ) {
            return reactionTextList ? reactionTextList[1]  : "HAPPY"
        }
        else if (5 >= this.state.npsSelected && 4 <= this.state.npsSelected  ) {
            return reactionTextList ? reactionTextList[2]  : "CONFUSED"
        }
        else if (3 >= this.state.npsSelected && 2 <= this.state.npsSelected  ) {
            return reactionTextList ? reactionTextList[3]  : "SAD"
        }
        else if (1 >= this.state.npsSelected && 0 <= this.state.npsSelected  ) {
            return reactionTextList ? reactionTextList[4]  : "ANGRY"
        }
    }

}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center'
    },
    recommendationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10
    },
    npsText: {
        textAlign: "center",
        fontSize: 20,
    },
    emojiStyle:{
        margin: 10,
        width:40,
        height:40
    }

});

export default Recommendation;
