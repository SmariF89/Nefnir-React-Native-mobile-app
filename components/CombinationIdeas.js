import React from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	SectionList,
	ActivityIndicator
} from 'react-native';
import { sectionListFormCombos } from '../utils/ListUtilities';
import { getAllCombinationIdeas } from '../actions/choiceActions';

import styles from '../styles/styles';

class CombinationIdeas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: ''
		};
	}

	componentDidMount() {
		// Data is loaded iff it has not been loaded before.
		const { combinationsLoaded } = this.props.data.choice;
		const { getAllCombinationIdeas } = this.props;
		if (!combinationsLoaded) {
			getAllCombinationIdeas();
		}
	}

	render() {
		// filterText is the search string used when filtering the list.
		const { filterText } = this.state;

		// All of the names fetched from the state, filtered and reformed to fit
		// the SectionList's requirements.
		const {
			allCombinationsIdeas,
			combinationsLoaded
		} = this.props.data.choice;
		console.log(allCombinationsIdeas);
		const comboIdeas = sectionListFormCombos(
			allCombinationsIdeas.filter(name =>
				name.Nafn.toLowerCase().includes(filterText.toLowerCase())
			)
		);

		//{ "Nafn": "X S", "AnnadNafn": "S", "Fjoldi": "3" }

		if (combinationsLoaded) {
			return (
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<Text style={styles.textAlignCenter}>
							Common combinations of names
						</Text>
					</View>
					<View style={styles.commonContainer}>
						<TextInput
							placeholder={'Filter names...'}
							style={styles.input}
							underlineColorAndroid={'rgba(0,0,0,0)'}
							onChangeText={text =>
								this.setState({
									filterText: text
								})
							}
							value={filterText}
						/>
						<SectionList
							renderItem={({ item }) => (
								<Text style={styles.commonChoiceText}>
									{`${item.Nafn}`}
								</Text>
							)}
							renderSectionHeader={({ section: { title } }) => (
								<Text style={styles.header}>{title}</Text>
							)}
							sections={comboIdeas}
							ListEmptyComponent={
								<ActivityIndicator size="large" />
							}
						/>
						<View style={styles.aboutContainer}>
							<TouchableOpacity
								style={styles.btn}
								activeOpacity={0.5}
								onPress={() =>
									this.props.navigation.goBack(null)
								}>
								<Text style={styles.btnText}>Go back</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			);
		} else {
			return <ActivityIndicator size="large" />;
		}
	}
}

const mapStateToProps = state => {
	return {
		data: state
	};
};

export default connect(
	mapStateToProps,
	{ getAllCombinationIdeas }
)(CombinationIdeas);
