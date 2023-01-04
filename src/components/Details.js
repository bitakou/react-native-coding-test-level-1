import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Details = ({ navigation, route }) => {
  const id = route.params.id
  const pokemonName = route.params.name
  const [pokemonType1, setPokemonType1] = useState('')
  const [pokemonType2, setPokemonType2] = useState('')
  const [pokemonWeight, setPokemonWeight] = useState(0)
  const [pokemonHeight, setPokemonHeight] = useState(0)

  const getPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(res => {
        setPokemonType1(res.types[0].type.name)
        setPokemonType2(res.types[1] ? res.types[1].type.name : '')
        setPokemonWeight(res.weight)
        setPokemonHeight(res.height)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <View style={styles.container}>
      <Text>{pokemonName}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params.id}.png`
        }}
      />
      <Text>{'Type: ' + (pokemonType2 ? pokemonType1 + ' and ' + pokemonType2 : pokemonType1)}</Text>
      <Text>{'Weight: '+ pokemonWeight}</Text>
      <Text>{'Height: '+ pokemonHeight}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: 20
  },
  image: {
    width: 100,
    height: 100
  }
})

export default Details