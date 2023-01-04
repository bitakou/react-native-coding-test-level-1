import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const MainScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Form')}>
      <Text>Contact Us</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "lavender",
    padding: 10
  }
})

export default MainScreen