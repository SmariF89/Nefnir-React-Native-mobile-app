import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'

import { setParentAName, setParentBName } from '../actions/choiceActions'

import styles from '../styles/styles'

class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      parentAName: '',
      parentBName: ''
    }
  }

  componentDidMount () {
    const { parentA, parentB } = this.props.data.choice
    this.setState({
      parentAName: parentA.name,
      parentBName: parentB.name
    })
  }

  confirmNames (nameA, nameB) {
    const { setParentAName, setParentBName } = this.props
    setParentAName(nameA)
    setParentBName(nameB)
    this.props.navigation.goBack(null)
  }

  render () {
    const { parentAName, parentBName } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.commonContainer}>
          <Text style={styles.textAlignCenter}>
                        Set or change names
                    </Text>
          <Text style={styles.textAlignLeft}>Parent #1</Text>
          <TextInput
            style={styles.input}
            placeholder={'Enter your name...'}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            onChangeText={text =>
                            this.setState({ parentAName: text })}
            value={parentAName}
            onFocus={() => this.setState({ parentAName: '' })}
                    />
          <Text style={styles.textAlignLeft}>Parent #2</Text>
          <TextInput
            style={styles.input}
            placeholder={'Enter your name...'}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            onChangeText={text =>
                            this.setState({ parentBName: text })}
            value={parentBName}
            onFocus={() => this.setState({ parentBName: '' })}
                    />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() =>
                            this.confirmNames(parentAName, parentBName)}
                    >
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
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
    data: state
  }
}

export default connect(mapStateToProps, { setParentAName, setParentBName })(
    Settings
)
