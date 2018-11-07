import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import styles from '../styles/styles'

export default class About extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>ABOUT</Text>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.goBack(null)}
                >
          <Text style={styles.btnText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
