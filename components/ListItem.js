import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addParentAChoice, addParentBChoice } from '../actions/choiceActions'

import styles from '../styles/styles'

class ListItem extends React.Component {
  toggleChoice (parent, name) {
    const { parentA, parentB } = this.props.data.choice
    const { addParentAChoice, addParentBChoice } = this.props
        // console.warn(parent);

    if (parentA.name === parent) {
      addParentAChoice(name)
      console.log(parentA.choices)
    } else if (parentB.name === parent) {
      addParentBChoice(name)
    }
  }

  render () {
    const { item, parent, isOrderedByCommon } = this.props
    const { parentA, parentB } = this.props.data.choice
    let isCandidate = false
    if (parentA.name == parent) {
      isCandidate = parentA.choices.includes(item.Nafn)
    } else if (parentB.name == parent) {
      isCandidate = parentB.choices.includes(item.Nafn)
    }

    if (isOrderedByCommon) {
      return (
        <View
          style={[
            styles.infoContainer,
            isCandidate && styles.isCandidate
          ]}
                >

          <TouchableOpacity
            style={styles.nameInfoContainer}
            activeOpacity={0.5}
            onPress={() => this.toggleChoice(parent, item.Nafn)}
                    >
            <Text key={item.key} style={styles.text}>
              {`${item.Nafn} \nFyrsta nafn: ${item.Fjoldi1} einstaklingar\nAnnað nafn: ${item.Fjoldi2} einstaklingar`}
            </Text>
          </TouchableOpacity>

        </View>
      )
    } else {
      return (
        <View
          style={[
            styles.infoContainer,
            isCandidate && styles.isCandidate
          ]}
                >

          <TouchableOpacity
            style={styles.nameInfoContainer}
            activeOpacity={0.5}
            onPress={() => this.toggleChoice(parent, item.Nafn)}
                    >
            <Text key={item.key} style={styles.text}>
              {`${item.Nafn}`}
            </Text>
          </TouchableOpacity>

        </View>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, {
  addParentAChoice,
  addParentBChoice
})(ListItem)
