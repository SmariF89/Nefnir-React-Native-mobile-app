import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>ABOUT</Text>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.goBack(null)}
                >
                    <Text
                        style={styles.btnText}
                    >GO BACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 70,
        marginRight: 70,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        backgroundColor: '#649cef'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    }
});
