import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import styles from '../styles/styles'

class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  onPress = (destination, data) => {
    const { navigate } = this.props.navigation
    data ? navigate(destination, data) : navigate(destination)
  }

  render () {
    const { parentA, parentB } = this.props.data.choice
    const missingNames = parentA.name === '' || parentB.name === ''
    console.log(missingNames)
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/name-logo.png')} />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() =>
                            (missingNames
                                ? this.onPress('Options')
                                : this.onPress(
                                      'ChoiceSelection',
                                      parentA.name
                                  ))}
                    >
            <Text style={styles.btnText}>
              {parentA.name === ''
                                ? 'Select name for Parent #1'
                                : `${parentA.name}'s choices`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() =>
                            (missingNames
                                ? this.onPress('Options')
                                : this.onPress(
                                      'ChoiceSelection',
                                      parentB.name
                                  ))}
                    >
            <Text style={styles.btnText}>
              {parentB.name === ''
                                ? 'Select name for Parent #2'
                                : `${parentB.name}'s choices`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => this.onPress('Commons')}
                    >
            <Text style={styles.btnText}>COMMON CHOICES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => this.onPress('Options')}
                    >
            <Text style={styles.btnText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() =>
                            console.log(
                                this.props.data.choice.parentA.choices,
                                this.props.data.choice.parentB.choices
                            )}
                    >
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.aboutContainer}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => this.onPress('About')}
                    >
            <Text style={styles.btnText}>ABOUT</Text>
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

export default connect(mapStateToProps, null)(Home)
