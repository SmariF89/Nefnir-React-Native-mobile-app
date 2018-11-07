import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Home from '../components/Home'
import ParentChoices from '../components/ParentChoices'
import CommonChoices from '../components/CommonChoices'
import Settings from '../components/Settings'
import About from '../components/About'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  ChoiceSelection: {
    screen: ParentChoices,
    navigationOptions: {
      header: null
    }
  },
  Commons: {
    screen: CommonChoices,
    navigationOptions: {
      header: null
    }
  },
  Options: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      header: null
    }
  }
})

export default class App extends React.Component {
  static navigationProps = {
    headerMode: 'none'
  }

  render () {
    return <HomeStack />
  }
}
