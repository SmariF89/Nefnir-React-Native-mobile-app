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
        <View style={styles.commonContainer}>
          <Text style={styles.textAlignCenter}>
            {`This is a small page that should contain all of the information regarding this application \n \n \n`}

          </Text>
          <Text style={styles.textAlignCenter}>
                        - Authors of this application -
                    </Text>
          <Text style={styles.textAlignCenter}>
                        Bjarki - Janus - Leifur - Smári
                    </Text>
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
