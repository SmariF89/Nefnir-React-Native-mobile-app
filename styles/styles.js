import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center',
    width: '100%'
  },
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 36
  },
  myChoices: {
    flex: 1,
    flexDirection: 'column'
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  containerSections: {
    flex: 1
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
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  }
})
