import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SectionList, FlatList, ActivityIndicator } from 'react-native';

import ListItem from './ListItem';
import { sectionListForm, flatListForm } from '../utils/ListUtilities';
import { getAllChoices } from '../actions/choiceActions';

class ParentChoices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filter: false,
            isOrderedByCommon: false,
            candidates: []
        };
    }

    componentDidMount() {
        const { allChoices } = this.props.data.choice;
        const { getAllChoices } = this.props;
        getAllChoices();
        if (allChoices.length === 0) { getAllChoices(); }
    }

    render() {
        const parent = this.props.navigation.state.params;
        const { filterText, filter, isOrderedByCommon } = this.state;
        const { allChoices } = this.props.data.choice;
        const dataSectioned = sectionListForm(allChoices);
        const dataForFilter = flatListForm(allChoices);

        if (!filter) {
            return (
                <View style={styles.container}>
                    <Text>{parent}'s choices</Text>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.5}
                        onPress={() => console.log(this.props.data.choice.parentA, this.props.data.choice.parentB)}>
                        <Text style={styles.btnText}>Test</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder={'Filter names...'}
                        style={styles.input}
                        onChangeText={text =>
                            this.setState({
                                filterText: text,
                                filter: true
                            })
                        }
                        value={filterText}
                    />
                    <SectionList
                        renderItem={({ item }) => <ListItem item={item} isOrderedByCommon={isOrderedByCommon} parent={parent} />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                        sections={dataSectioned}
                        ListEmptyComponent={<ActivityIndicator size="large" />}
                    />
                </View>
            );
        } else {
            const filteredData = dataForFilter.filter(
                name =>
                    name.Nafn
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
            );
            return (
                <View style={styles.container}>
                    <TextInput
                        placeholder={'Search contacts'}
                        style={styles.input}
                        onChangeText={text => {
                            this.setState({
                                filterText: text,
                                filter: true
                            });
                            {
                                /* Back to SectionList if input is empty */
                            }
                            text === ''
                                ? this.setState({ filter: false })
                                : this.setState({ filter: true });
                        }}
                        value={filterText}
                    />
                    <FlatList
                        renderItem={({ item }) => <ListItem item={item} isOrderedByCommon={isOrderedByCommon} parent={parent} />}
                        data={filteredData}
                        ListEmptyComponent={<ActivityIndicator size="large" />}
                    />
                </View>
            );
        }

        // return (
        //     <View>
        //         <Text>{parent}'s CHOICES</Text>
        //         <TouchableOpacity
        //             style={styles.btn}
        //             activeOpacity={0.5}
        //             onPress={() => this.props.navigation.goBack(null)}
        //         >
        //             <Text
        //                 style={styles.btnText}
        //             >GO BACK</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity
        //             style={styles.btn}
        //             activeOpacity={0.5}
        //             onPress={() => console.log(allChoices)}
        //         >
        //             <Text
        //                 style={styles.btnText}
        //             >CONFIRM</Text>
        //         </TouchableOpacity>
        //     </View>
        // );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8
    },
    contactContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    infoContainer: {
        paddingLeft: 8,
        justifyContent: 'space-around',
        flex: 1
    },
    text: {
        fontSize: 24
    },
    header: {
        fontWeight: 'bold',
        fontSize: 26,
        backgroundColor: '#f7f7f7',
        justifyContent: 'space-around',
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
        flex: 1
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4
    },
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
    }
});

const mapStateToProps = state => {
    return {
        data: state
    };
};

//const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ getAllChoices }, dispatch) });

export default connect(
    mapStateToProps,
    { getAllChoices }
)(ParentChoices);