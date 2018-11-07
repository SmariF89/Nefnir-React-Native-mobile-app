import React from "react";
import { connect } from "react-redux";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SectionList,
    FlatList,
    ActivityIndicator,
    Dimensions
} from "react-native";
import Swipeable from "react-native-swipeable";
// import RadioForm, {
// 	RadioButton,
// 	RadioButtonInput,
// 	RadioButtonLabel
// } from 'react-native-simple-radio-button';

import ListItem from "./ListItem";
import { sectionListForm } from "../utils/ListUtilities";
import { getAllChoices } from "../actions/choiceActions";

//import styles from "../styles/styles";

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

    render() {
        const parent = this.props.navigation.state.params;
        const { filterText, isOrderedByCommon, rightContentWidth } = this.state;
        const { allChoices } = this.props.data.choice;
        const { parentAChoices, parentBChoices } = this.props;
        const choiceData = sectionListForm(
            allChoices.filter(name =>
                name.Nafn.toLowerCase().includes(filterText.toLowerCase())
            )
        );
        console.log("rightContentWidth: ", rightContentWidth);
        return (
            <View style={styles.container}>
                <Text>
                    {parent}
                    's choices
                </Text>
                <Swipeable
                    rightButtonWidth={rightContentWidth}
                    rightButtons={[
                        <View style={[styles.rightSwipeItem]}>
                            <Text>swipe right to see awailable choices</Text>
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
                                        <Text>{item}</Text>
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
                            renderSectionHeader={({ section: { title } }) => (
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 8,
        flex: 1,
        flexDirection: "column"
    },
    myChoices: {
        flex: 1,
        flexDirection: "column"
    },
    listContainer: {
        flex: 1,
        flexDirection: "row"
    },
    containerSections: {
        flex: 1
    },
    contactContainer: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 16
    },
    infoContainer: {
        paddingLeft: 8,
        justifyContent: "space-around",
        flex: 1
    },
    text: {
        fontSize: 24
    },
    header: {
        fontWeight: "bold",
        fontSize: 26,
        backgroundColor: "#f7f7f7",
        justifyContent: "space-around",
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
        flex: 1
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4
    },
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
    rightSwipeItem: {
        flex: 1,
        paddingLeft: 20
    }
});

const mapStateToProps = state => {
    return {
        data: state,
        parentAChoices: state.choice.parentA.choices,
        parentBChoices: state.choice.parentB.choices
    };
};

export default connect(
    mapStateToProps,
    { getAllChoices }
)(ParentChoices);
