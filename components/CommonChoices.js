import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getSelectedChoices } from '../actions/choiceActions'

import styles from '../styles/styles'

class CommonChoices extends React.Component {
  constructor (props) {
    super(props)
    console.log('props inside CommonChoices: ', this.props)

    this.state = {
      choices: []
    }
  }

  componentDidMount () {
    const { allChoices } = this.props.data.choice
    const { getSelectedChoices } = this.props
    getSelectedChoices()
    if (allChoices.length === 0) {
      getSelectedChoices()
    }
  }

  render () {
        // const listItems = this.state.choices.map(item => <Text>{item}</Text>);

    return (
      <View style={styles.container}>
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
  console.log('map state to props: ', state)

  return {
    data: state
  }
}

export default connect(mapStateToProps, { getSelectedChoices })(CommonChoices)
