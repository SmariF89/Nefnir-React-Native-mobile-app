import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
    addParentAChoice,
    addParentBChoice,
    addIfCommon
} from '../actions/choiceActions';

import styles from '../styles/styles';

// Renders and provides functionality of each item in the choice list of ParentChoices.
// Functionality is toggling selection.
// Parent variable passed in as prop is used to distinct whether the
// selection is applied for parentA or parentB.
class ListItem extends React.Component {
    toggleChoice(parent, name) {
        const { parentA, parentB } = this.props.data.choice;
        const { addParentAChoice, addParentBChoice, addIfCommon } = this.props;

        if (parentA.name === parent) {
            addParentAChoice(name);
        } else if (parentB.name === parent) {
            addParentBChoice(name);
        }
        addIfCommon(name);
    }

    render() {
        const { item, index, parent, showPopInfo } = this.props;
        const { parentA, parentB } = this.props.data.choice;
        let isCandidate = false;
        if (parentA.name == parent) {
            isCandidate = parentA.choices.includes(item.Nafn);
        } else if (parentB.name == parent) {
            isCandidate = parentB.choices.includes(item.Nafn);
        }
        return (
            <View
                style={[
                    index % 2 == 0 &&
                    parentA.name == parent &&
                    styles.infoContainerZebPA,
                    index % 2 == 0 &&
                    parentB.name == parent &&
                    styles.infoContainerZebPB,
                    index % 2 == 1 && styles.infoContainer,
                    isCandidate && styles.isCandidate
                ]}
            >
                <TouchableOpacity
                    style={styles.nameInfoContainer}
                    activeOpacity={0.5}
                    onPress={() => this.toggleChoice(parent, item.Nafn)}
                >
                    <Text key={item.key} style={styles.text}>
                        {showPopInfo
                            ? `${item.Nafn}\nFirst name: ${
                            item.Fjoldi1
                            } people\nSecond name: ${item.Fjoldi2} people`
                            : `${item.Nafn}`}
                    </Text>
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

export default connect(
    mapStateToProps,
    {
        addParentAChoice,
        addParentBChoice,
        addIfCommon
    }
)(ListItem);
