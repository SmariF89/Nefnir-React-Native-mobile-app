import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

class CommonChoices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choices: []
        };
    }

    componentDidMount() {
        this.setState({choices: this.props.data.choice.commonChoices});
    }

    render() {

        return (
            <View>
                <Text style = {styles.TitleToCommonChoices}>
                    Here are the names you both agreed on
                </Text>
                <View >
                      <FlatList
                          data={this.state.choices}
                          renderItem={({ item }) => <Text style = {styles.commonChoiceText}>{item}</Text>}
                      />
                </View>

                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.goBack(null)}
                >
                    <Text style={styles.btnText}>GO BACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
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
        borderColor: "gray",
        backgroundColor: "#649cef"
    },
    btnText: {
        textAlign: "center",
        fontSize: 18,
        color: "white"
    },
    commonChoiceText: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    TitleToCommonChoices: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: 40,
        color: "white",
        backgroundColor: "#649cef"
    }
});

export default connect(
    mapStateToProps,
    null
)(CommonChoices);
