import React from 'react';
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { setParentAName, setParentBName } from '../actions/choiceActions';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentAName: '',
            parentBName: ''
        }
    }

    componentDidMount() {
        const { parentA, parentB } = this.props.data.choice;
        this.setState({
            parentAName: parentA.name,
            parentBName: parentB.name
        });
    }

    confirmNames(nameA, nameB) {
        const { setParentAName, setParentBName } = this.props;
        setParentAName(nameA);
        setParentBName(nameB);
        this.props.navigation.goBack(null);
    }

    render() {
        const { parentAName, parentBName } = this.state;
        return (
            <View>
                <Text>Settings</Text>
                <Text>Parent #1</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter your name...'}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    onChangeText={text => this.setState({ parentAName: text })}
                    value={parentAName}
                    onFocus={() => this.setState({ parentAName: '' })}
                />
                <Text>Parent #2</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter your name...'}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    onChangeText={text => this.setState({ parentBName: text })}
                    value={parentBName}
                    onFocus={() => this.setState({ parentBName: '' })}
                />
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.goBack(null)}
                >
                    <Text
                        style={styles.btnText}
                    >GO BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.5}
                    onPress={() => this.confirmNames(parentAName, parentBName)}
                >
                    <Text
                        style={styles.btnText}
                    >Confirm</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 70,
        marginRight: 70,
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4
    }
});

const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(
    mapStateToProps,
    { setParentAName, setParentBName }
)(Settings);

