import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import {
    addParentAChoice,
    addParentBChoice,
    addIfCommon
} from '../actions/choiceActions';
import styles from '../styles/styles';

// This is the swipeable screen which is accessible from ParentChoices.
// Displays parent X's choices and gives an option to remove them.
// A choice can either be removed by pressing the icon in this list
// or by reselecting the choice in ParentChoices.
class MyChoices extends React.Component {
    render() {
        // Selected choices of both parents are fetched, then the parent variable
        // is used to distinct between which one is used.
        const {
            parent,
            parentAChoices,
            parentBChoices,
            addParentAChoice,
            addParentBChoice,
            addIfCommon } = this.props;
        return (
            <View style={styles.rightSwipeItem}>
                <Text style={styles.textAlignLeftItalic}>
                    Swipe right to see available choices
                                </Text>
                <View>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={
                            <Text
                                style={styles.textAlignLeftBold}
                            >
                                My choices{'\n'}
                            </Text>
                        }
                        data={
                            parent ==
                                this.props.data.choice.parentA.name
                                ? parentAChoices
                                : parentBChoices
                        }
                        renderItem={({ item }) => (
                            <View style={styles.myChoicesItem}>
                                <View
                                    style={styles.myChoiceName}
                                >
                                    <Text
                                        style={
                                            styles.myChoicesItemName
                                        }
                                    >
                                        {item}
                                    </Text>
                                </View>
                                <View
                                    style={
                                        styles.mychoiceRemoveName
                                    }
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            parent ==
                                                this.props.data
                                                    .choice.parentA
                                                    .name
                                                ? addParentAChoice(
                                                    item
                                                )
                                                : addParentBChoice(
                                                    item
                                                );
                                            addIfCommon(item);
                                        }}
                                        style={
                                            styles.myChoicesItemButton
                                        }
                                    >
                                        <View>
                                            <Image
                                                style={
                                                    styles.removeImage
                                                }
                                                resizeMode={
                                                    'contain'
                                                }
                                                source={require('../assets/images/Flat_cross_icon.svg.png')}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        ListEmptyComponent={
                            <Text style={styles.text}>
                                No name chosen. Swipe back to
                                pick names.
                                            </Text>
                        }
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state,
        parentAChoices: state.choice.parentA.choices,
        parentBChoices: state.choice.parentB.choices
    };
};

export default connect(
    mapStateToProps,
    {
        addParentAChoice,
        addParentBChoice,
        addIfCommon
    }
)(MyChoices);
