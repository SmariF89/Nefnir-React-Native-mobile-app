import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
	addParentAChoice,
	addParentBChoice,
	addIfCommon
} from '../actions/choiceActions';

import styles from '../styles/styles';

class ListItem extends React.Component {
	toggleChoice(parent, name) {
		const { parentA, parentB } = this.props.data.choice;
		const { addParentAChoice, addParentBChoice, addIfCommon } = this.props;

		if (parentA.name === parent) {
			addParentAChoice(name);
		} else if (parentB.name === parent) {
			addParentBChoice(name);
		}
		addIfCommon(name);
	}

	render() {
		const { item, parent, showPopInfo } = this.props;
		const { parentA, parentB } = this.props.data.choice;
		let isCandidate = false;
		if (parentA.name == parent) {
			isCandidate = parentA.choices.includes(item.Nafn);
		} else if (parentB.name == parent) {
			isCandidate = parentB.choices.includes(item.Nafn);
		}
		return (
			<View
				style={[
					styles.infoContainer,
					isCandidate && styles.isCandidate
				]}>
				<TouchableOpacity
					style={styles.nameInfoContainer}
					activeOpacity={0.5}
					onPress={() => this.toggleChoice(parent, item.Nafn)}>
					<Text key={item.key} style={styles.text}>
						{showPopInfo
							? `${item.Nafn}\nFirst name: ${
									item.Fjoldi1
							  } people\nSecond name: ${item.Fjoldi2} people`
							: `${item.Nafn}`}
					</Text>
				</TouchableOpacity>
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
	{
		addParentAChoice,
		addParentBChoice,
		addIfCommon
	}
)(ListItem);
