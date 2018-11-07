import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getSelectedChoices } from "../actions/choiceActions";

class CommonChoices extends React.Component {
    constructor(props) {
        super(props);
        console.log("props inside CommonChoices: ", this.props);

        this.state = {
            choices: []
        };
    }

    componentDidMount() {
        const { allChoices } = this.props.data.choice;
        const { getSelectedChoices } = this.props;
        getSelectedChoices();
        if (allChoices.length === 0) {
            getSelectedChoices();
        }
    }

    render() {
        // const listItems = this.state.choices.map(item => <Text>{item}</Text>);

        return (
            <View>
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
    console.log("map state to props: ", state);

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
    }
});

export default connect(
    mapStateToProps,
    { getSelectedChoices }
)(CommonChoices);
