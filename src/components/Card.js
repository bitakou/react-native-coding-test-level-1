import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native'

const Card = ({navigation}) => {
  const [pokemonList, setPokemonList] = useState([])
  const [offset, setOffset] = useState(0)
  const limit = 10

  const getPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}}`)
      .then(res => res.json())
      .then(res => {
        setPokemonList([...pokemonList, ...res?.results])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokemons()
  }, [offset])

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        onEndReached={() => setOffset(offset + limit)}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => (

          <View style={styles.pokemonContainer}>
            <View style={styles.pokemonTextContainer}>
              <Text>{item?.name}</Text>
              <Text>ID: {index + 1}</Text>

              <Image
                style={styles.image}
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Pokemon Details', { id: index + 1, name: item?.name })}>
              <Text>View</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  pokemonContainer: {
    backgroundColor: 'lavender',
    paddingBottom: 20
  },
  pokemonTextContainer: {
    backgroundColor: 'powderblue',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100
  }
})

export default Card