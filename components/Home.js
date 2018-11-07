import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

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
        <View style={styles.appLogo}>
          <Image source={require('../assets/images/name-logo.png')} />
          <Text>!Insert APP name here!</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() =>
              (missingNames
                ? this.onPress('Options')
                : this.onPress('ChoiceSelection', parentA.name))}
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
                : this.onPress('ChoiceSelection', parentB.name))}
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
        <View style={styles.aboutContainer} />
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={() => this.onPress('About')}
        >
          <Text style={styles.btnText}>ABOUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f4fff4'
  },
  btn: {
    marginTop: 8,
    marginBottom: 0,
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#649cef'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  },
  appLogo: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    flex: 5,
    alignItems: 'center',
    width: '100%'
  }
})

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, null)(Home)
