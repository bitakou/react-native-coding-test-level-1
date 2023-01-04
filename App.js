import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './src/screens/MainScreen'
import FormScreen from './src/screens/FormScreen'
import CatalogScreen from './src/screens/CatalogScreen'
import PokemonScreen from './src/screens/PokemonScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Form' component={FormScreen} />
        <Stack.Screen name='Catalog' component={CatalogScreen} />
        <Stack.Screen name='Pokemon Details' component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App