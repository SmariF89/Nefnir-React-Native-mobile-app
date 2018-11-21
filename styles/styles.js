import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

export default StyleSheet.create({
    // -- Container Styles
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#E4F0FB'
    },
    logoContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 5,
        alignItems: 'center',
        width: '100%'
    },
    commonContainer: {
        flex: 8,
        justifyContent: 'center',
        width: '80%'
    },
    nameListContainer: {
        height: '60%',
        width: '80%'
    },
    aboutContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 28,
        marginBottom: 28
    },
    myChoices: {
        flex: 1,
        flexDirection: 'column'
    },
    listContainer: {
        height: '90%'
    },
    infoContainerCC: {
        backgroundColor: '#d9dde0',
        paddingLeft: 8,
        justifyContent: 'space-around',
        flex: 1
    },
    infoContainer: {
        paddingLeft: 8,
        justifyContent: 'space-around',
        flex: 1
    },
    infoContainerZebPA: {
        backgroundColor: '#bcd1f2',
        paddingLeft: 8,
        justifyContent: 'space-around',
        flex: 1
    },
    infoContainerZebPB: {
        backgroundColor: '#f0d2f2',
        paddingLeft: 8,
        justifyContent: 'space-around',
        flex: 1
    },
    input: {
        height: 40,
        borderColor: 'gray',
        width: '100%',
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4
    },
    inputMain: {
        flex: 8,
        height: 40,
        borderColor: 'gray',
        width: '100%',
        borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 4,
        borderRadius: 6
    },
    btn: {
        marginTop: 0,
        marginBottom: 8,
        width: '80%',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderBottomColor: '#3E2400',
        borderTopColor: '#FFD8A4',
        borderRightColor: '#FFD8A4',
        borderRadius: 6,
        backgroundColor: '#D97E00'
    },
    btnPopularity: {
        flex: 2,
        height: 40,
        borderWidth: 1,
        borderBottomColor: '#3E2400',
        borderTopColor: '#FFD8A4',
        borderRightColor: '#FFD8A4',
        borderRadius: 6,
        backgroundColor: '#D97E00',
        marginLeft: 6,
        marginRight: 6
    },
    btnPopularityText: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        padding: 4
    },
    rightSwipeItem: {
        flex: 1,
        paddingLeft: 20
    },
    choiceControlContainer: {
        flexDirection: 'row'
    },
    containerWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    // -- checkColours
    isCandidate: {
        backgroundColor: '#D6FFA4'
    },
    // -- Text Styles
    text: {
        flex: 8,
        fontSize: 18,
        margin: 3,
        textAlign: 'left',
        justifyContent: 'center'
    },
    textAlignLeft: {
        textAlign: 'left',
        fontSize: 18
    },
    textAlignLeftBold: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textAlignLeftItalic: {
        textAlign: 'left',
        fontSize: 18,
        fontStyle: 'italic',
        marginBottom: 10
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
    textAlignCenter: {
        textAlign: 'center',
        fontSize: 18
    },
    textAlignCenterBig: {
        textAlign: 'center',
        fontSize: 32
    },
    header: {
        fontSize: 28
    },
    headerCombo: {
        fontSize: 24,
        fontStyle: 'italic'
    },
    aboutSubHeader: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 40
    },
    aboutInfo: {
        textAlign: 'justify',
        marginBottom: 40
    },
    aboutImage: {
        flex: 1,
        alignSelf: 'center',
        width: win.width,
        height: win.width
    },
    nefnirImage: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 60
    },
    aboutAuthorsCaption: {
        textAlign: 'center',
        overflow: 'visible',
        fontSize: 12,
        marginTop: -30
    },
    aboutView: {
        width: '100%',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'white'
    },
    aboutMarginMaker: {
        marginTop: 100
    },
    aboutAuthorsOfApp: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 200
    },
    myChoicesItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0, 0, 255, 0.3)',
        borderBottomWidth: 2
    },
    myChoicesItemName: {
        fontSize: 18
    },
    mychoiceRemoveName: {},
    removeImage: {
        height: 18,
        width: 18
    }
});
