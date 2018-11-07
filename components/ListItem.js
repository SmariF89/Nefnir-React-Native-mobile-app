import React from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { addParentAChoice, addParentBChoice } from '../actions/choiceActions';

class ListItem extends React.Component {
	toggleChoice(parent, name) {
		const { parentA, parentB } = this.props.data.choice;
		const { addParentAChoice, addParentBChoice } = this.props;
		if (parentA.name === parent) {
			addParentAChoice(name);
		} else if (parentB.name === parent) {
			addParentBChoice(name);
		}
	}

	render() {
		const { item, parent, isOrderedByPopularity } = this.props;
		const { parentA, parentB } = this.props.data.choice;
		let isCandidate = false;
		if (parentA.name == parent) {
			isCandidate = parentA.choices.includes(item.Nafn);
		} else if (parentB.name == parent) {
			isCandidate = parentB.choices.includes(item.Nafn);
		}
		return (
			<View style={styles.infoContainer}>
				<CheckBox
					style={styles.check}
					onValueChange={() => this.toggleChoice(parent, item.Nafn)}
					value={isCandidate}
				/>
				<Text key={item.key} style={styles.text}>
					{isOrderedByPopularity
						? `${item.Nafn} - ${item.Fjoldi} individuals\n`
						: `${item.Nafn}`}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	todoItemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderColor: 'gray'
	},
	infoContainer: {
		paddingLeft: 8,
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	text: {
		flex: 8,
		fontSize: 24,
		marginTop: 5,
		alignSelf: 'flex-start'
	},
	check: {
		borderWidth: 1,
		flex: 1
	}
});

const mapStateToProps = state => {
	return {
		data: state
	};
};

export default connect(
	mapStateToProps,
	{
		addParentAChoice,
		addParentBChoice
	}
)(ListItem);
