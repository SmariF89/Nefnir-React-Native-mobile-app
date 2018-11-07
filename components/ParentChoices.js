import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SectionList,
    FlatList,
    ActivityIndicator,
    Dimensions
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import Swipeable from 'react-native-swipeable'

import ListItem from './ListItem'
import { sectionListForm } from '../utils/ListUtilities'
import {
    getAllChoices,
    addParentAChoice,
    addParentBChoice
} from '../actions/choiceActions'

import styles from '../styles/styles'

class ParentChoices extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			rightContentWidth: Dimensions.get('window').width
		};
	}

	componentDidMount() {
		// Data is loaded iff it has not been loaded before.
		const { choicesLoaded } = this.props.data.choice;
		const { getAllChoices } = this.props;
		if (!choicesLoaded) {
			getAllChoices();
		}
	}

	render() {
		// In order to follow the DRY-principle we reuse this component for both parents.
		// In order to distinct between parents the parent's name is sent in as a prop.
		// This parent name is in turn sent into ListItem as a prop as the distinction
		// between parents is important there as well.
		const parent = this.props.navigation.state.params;

		// filterText is the search string used when filtering the list.
		// rightContentWidth is the width of the Swipeable.
		const { filterText, rightContentWidth } = this.state;

		// Selected choices of both parents are fetched, then the parent variable
		// is used to distinct between which one is used.
		const {
			parentAChoices,
			parentBChoices,
			addParentAChoice,
			addParentBChoice
		} = this.props;

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
            {parent}'s choices
                    </Text>
        </View>
        <View style={styles.nameListContainer}>
          <Swipeable
            rightButtonWidth={rightContentWidth}
            rightButtons={[
            <View style={[styles.rightSwipeItem]}>
                <Text> swipe right to see awailable choices</Text>
                <Text>My choices</Text>
                <View>
                    <FlatList
                    data={
                        parent == this.props.data.choice.parentA.name
                            ? parentAChoices
                            : parentBChoices
                    }
                    renderItem={({ item }) => (
                        <View >
                            <CheckBox 
                                containerStyle={styles.CheckBoxStyle}
                                textStyle = {styles.textAlignLeft}
                                title= {item}
                                iconType='material'
                                uncheckedIcon='clear'
                                uncheckedColor='red'
                                checked={this.state.checked}
                                onPress={() => {parent ==this.props.data.choice.parentA.name
                                    ? addParentAChoice( item)
                                    : addParentBChoice(item);
                                }}
                            />
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
                placeholder={'Filter names...'}
                style={styles.input}
                underlineColorAndroid={'rgba(0,0,0,0)'}
                onChangeText={text =>
                                    this.setState({
                                      filterText: text,
                                      filter: true
                                    })}
                value={filterText}
                            />
                <SectionList
                    renderItem={({ item }) => (
                        <ListItem item={item} parent={parent} />
                    )}
                    renderSectionHeader={({
                        section: { title }
                    }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    sections={choiceData}
                    ListEmptyComponent={
                        choicesLoaded ? (
                            <Text>No match found</Text>
                        ) : (
                            <ActivityIndicator size="large" />
                        )
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
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state,
    parentAChoices: state.choice.parentA.choices,
    parentBChoices: state.choice.parentB.choices
  }
}

export default connect(mapStateToProps, {
  getAllChoices,
  addParentAChoice,
  addParentBChoice
})(ParentChoices)
