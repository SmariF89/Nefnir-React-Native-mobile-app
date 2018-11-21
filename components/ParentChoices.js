import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SectionList,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import MyChoices from './MyChoices';
import ListItem from './ListItem';
import { sectionListForm } from '../utils/ListUtilities';
import { getAllChoices } from '../actions/choiceActions';
import styles from '../styles/styles';


// In order to follow the DRY-principle we reuse this component for both parents.
// This applies for ListItem and MyChoices as well since they are passed the parent
// variable of this component as a prop.
class ParentChoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            popularityInfo: false,
            rightContentWidth: Dimensions.get('window').width
        };
    }

    componentDidMount() {
        // Data is loaded if it has not been loaded before.
        const { choicesLoaded } = this.props.data.choice;
        const { getAllChoices } = this.props;
        if (!choicesLoaded) {
            getAllChoices();
        }
    }

    render() {
        // In order to distinct between parents the parent's name is sent in as a prop.
        // This parent name is in turn sent into ListItem as a prop as the distinction
        // between parents is important there as well. That applies for MyChoices as
        // well.
        const parent = this.props.navigation.state.params;

        // filterText is the search string used when filtering the list.
        // rightContentWidth is the width of the Swipeable.
        // popularityInfo determines if numbers that show popularity of names
        // should be displayed or not.
        const { filterText, rightContentWidth, popularityInfo } = this.state;

        // All of the names fetched from the state, filtered and reformed to fit
        // the SectionList's requirements.
        const { allChoices, choicesLoaded } = this.props.data.choice;
        const choiceData = sectionListForm(
            allChoices.filter(name =>
                name.Nafn.toLowerCase().includes(filterText.toLowerCase())
            )
        );

        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.textAlignCenterBig}>
                        {parent}
                        's choices
                    </Text>
                </View>
                <View style={styles.nameListContainer}>
                    <Swipeable
                        rightButtonWidth={rightContentWidth}
                        rightButtons={[<MyChoices parent={parent} />]}
                    >
                        <View style={styles.containerWrapper}>
                            <View>
                                <Text style={styles.textAlignLeftItalic}>
                                    Swipe left to view your choices
                                </Text>
                            </View>
                            <View style={styles.choiceControlContainer}>
                                <TextInput
                                    placeholder={'Filter names...'}
                                    style={styles.inputMain}
                                    underlineColorAndroid={'rgba(0,0,0,0)'}
                                    onChangeText={text =>
                                        this.setState({
                                            filterText: text
                                        })
                                    }
                                    value={filterText}
                                />
                                <TouchableOpacity
                                    style={styles.btnPopularity}
                                    activeOpacity={0.5}
                                    onPress={() =>
                                        this.setState({
                                            popularityInfo: !popularityInfo
                                        })
                                    }
                                >
                                    <Text style={styles.btnPopularityText}>
                                        {popularityInfo
                                            ? 'Hide popularity'
                                            : 'Show popularity'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listContainer}>
                                <SectionList
                                    renderItem={({ item, index }) => (
                                        <ListItem
                                            index={index}
                                            item={item}
                                            parent={parent}
                                            showPopInfo={popularityInfo}
                                        />
                                    )}
                                    renderSectionHeader={({
                                        section: { title }
                                    }) => (
                                            <Text style={styles.header}>
                                                {title}
                                            </Text>
                                        )}
                                    sections={choiceData}
                                    ListEmptyComponent={
                                        choicesLoaded ? (
                                            <Text>No match found</Text>
                                        ) : (
                                                <ActivityIndicator size='large' />
                                            )
                                    }
                                />
                            </View>
                        </View>
                    </Swipeable>
                </View>
                <View style={styles.aboutContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Text style={styles.btnText}>Go back</Text>
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
    { getAllChoices }
)(ParentChoices);
