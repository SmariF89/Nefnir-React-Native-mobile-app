import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SectionList,
    FlatList,
    ActivityIndicator
} from 'react-native'
// import RadioForm, {
// 	RadioButton,
// 	RadioButtonInput,
// 	RadioButtonLabel
// } from 'react-native-simple-radio-button';

import ListItem from './ListItem'
import { sectionListForm } from '../utils/ListUtilities'
import { getAllChoices } from '../actions/choiceActions'

import styles from '../styles/styles'

class ParentChoices extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      isOrderedByCommon: false
    }
  }

  componentDidMount () {
    const { allChoices } = this.props.data.choice
    const { getAllChoices } = this.props
    getAllChoices()
    if (allChoices.length === 0) {
      getAllChoices()
    }
  }

  render () {
    const parent = this.props.navigation.state.params
    const { filterText, isOrderedByCommon } = this.state
    const { allChoices } = this.props.data.choice
    const { parentAChoices, parentBChoices } = this.props
    const choiceData = sectionListForm(
            allChoices.filter(name =>
                name.Nafn.toLowerCase().includes(filterText.toLowerCase())
            )
        )

    return (
      <View style={styles.container}>
        <Text>
          {parent}
                    's choices
                </Text>
        <View style={styles.listContainer}>
          <View style={styles.myChoices}>
            <TextInput
              placeholder={'Filter names...'}
              style={styles.input}
              onChangeText={text =>
                                this.setState({
                                  filterText: text,
                                  filter: true
                                })}
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
                <ActivityIndicator size='large' />
                            }
                        />
          </View>
          <View style={styles.containerSections}>
            <FlatList
              data={
                                parent == this.props.data.choice.parentA.name
                                    ? parentAChoices
                                    : parentBChoices
                            }
              renderItem={({ item }) => <Text>{item}</Text>}
                        />
          </View>
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

export default connect(mapStateToProps, { getAllChoices })(ParentChoices)
