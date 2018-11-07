import React from "react";
import { View, Text, StyleSheet, CheckBox } from "react-native";
import { connect } from "react-redux";
import { addParentAChoice, addParentBChoice, addIfCommon } from "../actions/choiceActions";

class ListItem extends React.Component {
    toggleChoice(parent, name) {
        const { parentA, parentB } = this.props.data.choice;

        const { addParentAChoice, addParentBChoice } = this.props;
        //console.warn(parent);

        if (parentA.name === parent) {
            if (!parentA.choices.includes(name)) {
                addParentAChoice(name);
            }
            addIfCommon(name);
        } else if (parentB.name === parent) {
            if (!parentB.choices.includes(name)) {
                addParentBChoice(name);
            }
            addIfCommon(name);
        }
    }

    render() {
        const { item, parent, isOrderedByCommon } = this.props;
        const { parentA, parentB } = this.props.data.choice;
        let isCandidate = false;
        if (parentA.name == parent) {
            isCandidate = parentA.choices.includes(item.Nafn);
        } else if (parentB.name == parent) {
            isCandidate = parentB.choices.includes(item.Nafn);
        }
        if (isOrderedByCommon) {
            return (
                <View style={styles.infoContainer}>
                    <CheckBox
                        style={styles.cuuidheck}
                        key={item.key}
                        onValueChange={() =>
                            this.toggleChoice(parent, item.Nafn)
                        }
                        value={isCandidate}
                    />
                    <Text key={item.key} style={styles.text}>
                        {`${item.Nafn} \nFyrsta nafn: ${
                            item.Fjoldi1
                        } einstaklingar\nAnnað nafn: ${
                            item.Fjoldi2
                        } einstaklingar`}
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.infoContainer}>
                    <CheckBox
                        style={styles.check}
                        key={item.key + "1"}
                        onValueChange={() =>
                            this.toggleChoice(parent, item.Nafn)
                        }
                        value={isCandidate}
                    />
                    <Text key={item.key} style={styles.text}>
                        {`${item.Nafn}`}
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    todoItemContainer: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    infoContainer: {
        paddingLeft: 8,
        justifyContent: "space-around",
        flexDirection: "row"
    },
    text: {
        flex: 8,
        fontSize: 24,
        marginTop: 5,
        alignSelf: "flex-start"
    },
    check: {
        borderWidth: 1,
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(
    mapStateToProps,
    {
        addParentAChoice,
        addParentBChoice,
        addIfCommon
    }
)(ListItem);
