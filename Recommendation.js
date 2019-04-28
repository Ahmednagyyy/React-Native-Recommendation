import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from "react-native";
import _ from "lodash";



class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            npsSelected: null,
            text: "",
        };
    }

    render() {
        return (
            <View style={styles.container}>

                {this.getRecommendationView()}

            </View>
        );
    }

    getRecommendationView() {
        let { width, titleStyle, titleText, backgroundColor , max } = this.props
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

        let { selectedColor , selectedTextColor , selectedSize } = this.props

        return nps.map((item, index) => {
            return (
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={[
                            this.state.npsSelected === index && {
                                borderRadius: selectedSize/2,
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
                        <Text style={[styles.npsText,{color:selectedTextColor}]}>{index}</Text>
                    </TouchableOpacity>
                </View>
            );
        });
    }

    onNpsSelect(index) {
        const { selectedValue } = this.props;
        selectedValue(index)
        this.setState({ npsSelected: index });
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        alignItems: "center"
    },
    recommendationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10
    },
    npsText: {
        textAlign: "center",
        fontFamily: "TradeGothicLT-BoldCondTwenty",
        fontSize: 20,
        color: "#F8F8F8"
    }
});

export default Recommendation;
