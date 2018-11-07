import React from "react";
import { connect } from "react-redux";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SectionList,
    FlatList,
    ActivityIndicator,
    Dimensions
} from "react-native";
import Swipeable from "react-native-swipeable";

import ListItem from "./ListItem";
import { sectionListForm } from "../utils/ListUtilities";
import {
    getAllChoices,
    removeParentAChoice,
    removeParentBChoice,
    addParentAChoice,
    addParentBChoice
} from "../actions/choiceActions";

import styles from "../styles/styles";

class ParentChoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            isOrderedByCommon: false,
            rightContentWidth: Dimensions.get("window").width
        };
    }

    componentDidMount() {
        const { allChoices } = this.props.data.choice;
        const { getAllChoices } = this.props;
        getAllChoices();
        if (allChoices.length === 0) {
            getAllChoices();
        }
    }

    removeFromMyChoices(item) {
        console.log("remove!");
        const { removeParentAChoice, removeParentBChoice } = this.props;
        if (this.state.parent == this.props.data.choice.parentA.name) {
            removeParentAChoice(item);
        } else {
            removeParentBChoice(item);
        }
    }

    render() {
        const parent = this.props.navigation.state.params;
        const { filterText, isOrderedByCommon, rightContentWidth } = this.state;
        const { allChoices } = this.props.data.choice;
        const {
            parentAChoices,
            parentBChoices,
            addParentAChoice,
            addParentBChoice
        } = this.props;
        const choiceData = sectionListForm(
            allChoices.filter(name =>
                name.Nafn.toLowerCase().includes(filterText.toLowerCase())
            )
        );
        console.log("rightContentWidth: ", rightContentWidth);
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.textAlignCenter}>
                        {parent}
                        's choices
                    </Text>
                </View>
                <View style={styles.commonContainer}>
                    <Swipeable
                        rightButtonWidth={rightContentWidth}
                        rightButtons={[
                            <View style={[styles.rightSwipeItem]}>
                                <Text>
                                    Swipe right to see available choices
                                </Text>
                                <Text>My choices</Text>
                                <View>
                                    <FlatList
                                        data={
                                            parent ==
                                            this.props.data.choice.parentA.name
                                                ? parentAChoices
                                                : parentBChoices
                                        }
                                        renderItem={({ item }) => (
                                            <View style={styles.myChoicesItem}>
                                                <Text
                                                    style={
                                                        styles.myChoicesItemName
                                                    }
                                                >
                                                    {item}
                                                </Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        parent ==
                                                        this.props.data.choice
                                                            .parentA.name
                                                            ? addParentAChoice(
                                                                  item
                                                              )
                                                            : addParentBChoice(
                                                                  item
                                                              );
                                                    }}
                                                    style={
                                                        styles.myChoicesItemButton
                                                    }
                                                >
                                                    <Text>remove</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                        ]}
                    >
                        <View>
                            <Text>swipe left to see current choices</Text>
                            <TextInput
                                placeholder={"Filter names..."}
                                style={styles.input}
                                underlineColorAndroid={"rgba(0,0,0,0)"}
                                onChangeText={text =>
                                    this.setState({
                                        filterText: text,
                                        filter: true
                                    })
                                }
                                value={filterText}
                            />
                            <SectionList
                                renderItem={({ item }) => (
                                    <ListItem
                                        item={item}
                                        isOrderedByCommon={isOrderedByCommon}
                                        parent={parent}
                                    />
                                )}
                                renderSectionHeader={({
                                    section: { title }
                                }) => (
                                    <Text style={styles.header}>{title}</Text>
                                )}
                                sections={choiceData}
                                ListEmptyComponent={
                                    <ActivityIndicator size="large" />
                                }
                            />
                        </View>
                    </Swipeable>
                </View>
                <View style={styles.aboutContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Text style={styles.btnText}>GO BACK</Text>
                    </TouchableOpacity>
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
    { getAllChoices, addParentAChoice, addParentBChoice }
)(ParentChoices);
