import { connect } from 'react-redux';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/styles';

// This component displays choices that both parents have in common.
// This screen is read only and data can not be modified.
class CommonChoices extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choices: []
        };
    }

    componentDidMount() {
        this.setState({ choices: this.props.data.choice.commonChoices });
    }

    render() {
        const { choices } = this.state;
        console.log(choices);
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.textAlignCenterBig}>
                        Here are the names you both agreed on
                    </Text>
                </View>
                <View style={styles.commonContainer}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={choices}
                        renderItem={({ item, index }) => (
                            <View
                                style={[
                                    index % 2 === 0 && styles.infoContainerCC,
                                    index % 2 === 1 && styles.infoContainer
                                ]}
                            >
                                <Text style={styles.text}>{`${item}`}</Text>
                            </View>
                        )}
                        ListEmptyComponent={
                            <Text>You have not selected any common names</Text>
                        }
                    />
                </View>
                <View style={styles.aboutContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Text style={styles.btnText}>Go back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(
    mapStateToProps,
    null
)(CommonChoices);
