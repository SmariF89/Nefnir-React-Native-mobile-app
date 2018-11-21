import React from "react";
import { connect } from "react-redux";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	SectionList,
	FlatList,
	ActivityIndicator,
	Dimensions,
	CheckBox,
	Image
} from "react-native";
import Swipeable from "react-native-swipeable";
//import { CheckBox } from 'react-native-elements'

import ListItem from "./ListItem";
import { sectionListForm } from "../utils/ListUtilities";
import {
	getAllChoices,
	addParentAChoice,
	addParentBChoice,
	addIfCommon
} from "../actions/choiceActions";

import styles from "../styles/styles";

class ParentChoices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "",
			popularityInfo: false,
			rightContentWidth: Dimensions.get("window").width
		};
	}

	componentDidMount() {
		// Data is loaded iff it has not been loaded before.
		const { choicesLoaded } = this.props.data.choice;
		const { getAllChoices } = this.props;
		if (!choicesLoaded) {
			getAllChoices();
		}
	}

	render() {
		// In order to follow the DRY-principle we reuse this component for both parents.
		// In order to distinct between parents the parent's name is sent in as a prop.
		// This parent name is in turn sent into ListItem as a prop as the distinction
		// between parents is important there as well.
		const parent = this.props.navigation.state.params;

		// filterText is the search string used when filtering the list.
		// rightContentWidth is the width of the Swipeable.
		const { filterText, rightContentWidth, popularityInfo } = this.state;

		// Selected choices of both parents are fetched, then the parent variable
		// is used to distinct between which one is used.
		const {
			parentAChoices,
			parentBChoices,
			addParentAChoice,
			addParentBChoice,
			addIfCommon
		} = this.props;

		// All of the names fetched from the state, filtered and reformed to fit
		// the SectionList's requirements.
		const { allChoices, choicesLoaded } = this.props.data.choice;
		const choiceData = sectionListForm(
			allChoices.filter(name =>
				name.Nafn.toLowerCase().includes(filterText.toLowerCase())
			)
		);

		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.textAlignCenterBig}>
						{parent}
						's choices
                    </Text>
				</View>
				<View style={styles.nameListContainer}>
					<Swipeable
						rightButtonWidth={rightContentWidth}
						rightButtons={[
							<View style={styles.rightSwipeItem}>
								<Text style={styles.textAlignLeftItalic}>
									Swipe right to see available choices
                                </Text>
								<View>
									<FlatList
										ListHeaderComponent={<Text style={styles.textAlignLeftBold}>My choices{'\n'}</Text>}
										data={
											parent ==
												this.props.data.choice.parentA.name
												? parentAChoices
												: parentBChoices
										}
										renderItem={({ item }) => (
											<View style={styles.myChoicesItem}>
												<View
													style={styles.myChoiceName}
												>
													<Text
														style={
															styles.myChoicesItemName
														}
													>
														{item}
													</Text>
												</View>
												<View
													style={
														styles.mychoiceRemoveName
													}
												>
													<TouchableOpacity
														onPress={() => {
															parent ==
																this.props.data
																	.choice.parentA
																	.name
																? addParentAChoice(
																	item
																)
																: addParentBChoice(
																	item
																);
															addIfCommon(item);
														}}
														style={
															styles.myChoicesItemButton
														}
													>
														<View>
															<Image
																style={
																	styles.removeImage
																}
																resizeMode={
																	"contain"
																}
																source={require("../assets/images/Flat_cross_icon.svg.png")}
															/>
														</View>
													</TouchableOpacity>
												</View>
											</View>
										)}
										ListEmptyComponent={<Text style={styles.text}>No name chosen. Swipe back to pick names.</Text>}
									/>
								</View>
							</View>
						]}
					>
						<View style={styles.containerWrapper}>
							<View>
								<Text style={styles.textAlignLeftItalic}>
									Swipe left to view your choices
                                </Text>
							</View>
							<View style={styles.choiceControlContainer}>
								<TextInput
									placeholder={"Filter names..."}
									style={styles.inputMain}
									underlineColorAndroid={"rgba(0,0,0,0)"}
									onChangeText={text =>
										this.setState({
											filterText: text
										})
									}
									value={filterText}
								/>
								<TouchableOpacity
									style={styles.btnPopularity}
									activeOpacity={0.5}
									onPress={() =>
										this.setState({
											popularityInfo: !popularityInfo
										})
									}
								>
									<Text
										style={styles.btnPopularityText}
									>{popularityInfo ? 'Hide popularity' : 'Show popularity'}</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.listContainer}>
								<SectionList
									renderItem={({ item, index }) => (
										<ListItem
											index={index}
											item={item}
											parent={parent}
											showPopInfo={popularityInfo}
										/>
									)}
									renderSectionHeader={({
										section: { title }
									}) => (
											<Text style={styles.header}>
												{title}
											</Text>
										)}
									sections={choiceData}
									ListEmptyComponent={
										choicesLoaded ? (
											<Text>No match found</Text>
										) : (
												<ActivityIndicator size="large" />
											)
									}
								/>
							</View>
						</View>
					</Swipeable>
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
		data: state,
		parentAChoices: state.choice.parentA.choices,
		parentBChoices: state.choice.parentB.choices
	};
};

export default connect(
	mapStateToProps,
	{
		getAllChoices,
		addParentAChoice,
		addParentBChoice,
		addIfCommon
	}
)(ParentChoices);
