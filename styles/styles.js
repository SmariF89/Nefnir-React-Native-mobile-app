import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const win = Dimensions.get("window");

export default StyleSheet.create({
    // -- Container Styles
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#E4F0FB"
    },
    logoContainer: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer: {
        flex: 5,
        alignItems: "center",
        width: "100%"
    },
    commonContainer: {
        flex: 8,
        justifyContent: "center",
        width: "80%"
    },
    nameListContainer: {
        height: "60%",
        width: "80%"
    },
    aboutContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        marginTop: 28,
        marginBottom: 28
    },
    mainListContainer: {
        flex: 4
    },
    myChoices: {
        flex: 1,
        flexDirection: "column"
    },
    listContainer: {
        height: "90%"
    },
    containerSections: {
        flex: 1
    },
    contactContainer: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 16
    },
    infoContainer: {
        paddingLeft: 8,
        justifyContent: "space-around",
        flex: 1
    },
    input: {
        height: 40,
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4
    },
    inputMain: {
        flex: 8,
        height: 40,
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4
    },
    btn: {
        marginTop: 0,
        marginBottom: 8,
        width: "80%",
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderBottomColor: "#3E2400",
        borderTopColor: "#FFD8A4",
        borderRightColor: "#FFD8A4",
        borderRadius: 6,
        backgroundColor: "#D97E00"
    },
    rightSwipeItem: {
        flex: 1,
        paddingLeft: 20
    },
    choiceControlContainer: {
        flexDirection: "row"
    },
    containerWrapper: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    swipeInfoContainer: {
        flex: 1
    },

    // -- checkColours
    isCandidate: {
        backgroundColor: "#D6FFA4"
    },

    check: {
        borderWidth: 1,
        flex: 2
    },

    // -- checkColours
    CheckBoxStyle: {
        backgroundColor: "#E4F0FB",
        margin: 0,
        paddingTop: 3,
        paddingBottom: 0
    },

    // -- Text Styles

    text: {
        flex: 8,
        fontSize: 18,
        margin: 3,
        textAlign: "left",
        justifyContent: "center"
    },
    textAlignLeft: {
        textAlign: "left",
        fontSize: 18
    },
    btnText: {
        textAlign: "center",
        fontSize: 18,
        color: "white"
    },
    textAlignCenter: {
        textAlign: "center",
        fontSize: 18
    },
    textAlignCenterBig: {
        textAlign: "center",
        fontSize: 32
    },
    header: {
        fontSize: 28
    },
    aboutTextAlignCenter: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 30
    },
    aboutSubHeader: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 40
    },
    aboutInfo: {
        textAlign: "justify",
        marginBottom: 40
    },
    aboutImage: {
        flex: 1,
        alignSelf: "center",
        width: win.width,
        height: win.width
    },
    nefnirImage: {
        flex: 1,
        alignSelf: "center",
        marginTop: 60
    },
    aboutAuthorsCaption: {
        textAlign: "center",
        overflow: "visible",
        fontSize: 12,
        marginTop: -30
    },
    aboutView: {
        width: "100%",
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "white"
    },
    aboutMarginMaker: {
        marginTop: 100
    },
    aboutAuthorsOfApp: {
        textAlign: "center",
        fontSize: 28,
        marginTop: 200
    }
});
