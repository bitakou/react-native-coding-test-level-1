import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Form')}>
        <Text>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button, {backgroundColor: 'pink'}]}
      onPress={() => navigation.navigate('Catalog')}>
      <Text>View Catalog</Text>
    </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'lavender',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20
  }
})

export default MainScreen