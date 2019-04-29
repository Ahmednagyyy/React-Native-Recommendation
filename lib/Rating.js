import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
    Animated
} from "react-native";
import _ from "lodash";


class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingSelected: 1
        };
    }

    render() {

        return (
            <View style={styles.container}>

                {this.getRatingView()}

            </View>
        );
    }

    getRatingView() {
        let { width, titleStyle, titleText, backgroundColor, max } = this.props
        return (
            <View style={{ alignItems: "flex-start", width: width }}>
                <Text style={titleStyle}>{titleText}</Text>
                <View
                    style={[styles.ratingContainer,
                    { backgroundColor: backgroundColor, width: width }]}>
                    {this.getratingView(max)}
                </View>
            </View>
        );
    }

    getratingView(max) {
        let rating = _.range(max);

        let { iconStyle } = this.props

        return rating.map((item, index) => {
            return (
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => this.onRatingSelect(index + 1)}>
                        <Image
                            style={[iconStyle ? iconStyle : styles.ratingIcon,
                            { tintColor: this.getRatingIconColor(index + 1) }]}
                            source={this.getRatingIcon(index + 1)} />
                    </TouchableOpacity>
                </View>
            );
        });
    }

    getRatingIcon(index) {
        let { customSelected, customUnSelected } = this.props

        if (customSelected && customUnSelected) {
            return this.state.ratingSelected >= index ? customSelected : customUnSelected
        }
        else if (customSelected && !customUnSelected) {
            return this.state.ratingSelected >= index ? customSelected : customSelected
        }
        else if (!customSelected && customUnSelected) {
            return this.state.ratingSelected >= index ? customUnSelected : customUnSelected
        }
        else {
            return this.state.ratingSelected >= index ? require('./assets/selected-star.png')
                : require('./assets/un-selected-star.png')
        }
    }

    getRatingIconColor(index) {
        let { selectedColor, unSelectedColor , customUnSelected, customSelected} = this.props

        if (selectedColor && unSelectedColor && !customUnSelected) {
            return this.state.ratingSelected >= index ? selectedColor : unSelectedColor
        }
        else if (selectedColor && !unSelectedColor & customUnSelected) {
            return this.state.ratingSelected >= index ? selectedColor : 'black'
        }
        else if (selectedColor && !unSelectedColor & !customUnSelected) {
            return this.state.ratingSelected >= index ? selectedColor : selectedColor
        }
        else if (!selectedColor && unSelectedColor & !customSelected) {
            return this.state.ratingSelected >= index ? unSelectedColor : unSelectedColor
        }
        else if (!selectedColor && unSelectedColor & customSelected) {
            return this.state.ratingSelected >= index ? "gold" : unSelectedColor
        }
        else if (!selectedColor && !unSelectedColor ) {
            return  this.state.ratingSelected >= index ? "gold" : "black"
        }
        else if (!selectedColor && !unSelectedColor & !customUnSelected) {
            return "gold"
        }

    }

        onRatingSelect(index) {
            const { selectedValue } = this.props;
            if (selectedValue) {
                selectedValue(index)
            }
            this.setState({ ratingSelected: index });
        }
    }

    const styles = StyleSheet.create({
        container: {
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: 'center'
        },
        ratingContainer: {
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 10
        },
        ratingIcon: {
            margin: 5,
            width: 40,
            height: 40,

        }

    });

    export default Rating;
