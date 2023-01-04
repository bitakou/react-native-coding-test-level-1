import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'

const FormScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      birthday: '',
    }
  })
  const today = new Date()
  const formatToday = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
  const [date, setDate] = useState(today)
  const [formatDate, setFormatDate] = useState('')
  const screenWidth = Dimensions.get('screen').width
  const onSubmit = data => alert('Your name is ' + data.name + '\nYour email is ' + (data.email ? data.email : 'not input') + '\nYour birthday is ' + (formatDate ? formatDate : formatToday))

  const setSelectedDate = (event, selectedDate) => {
    setDate(selectedDate)
    setFormatDate(selectedDate.getDate() + '/' + (selectedDate.getMonth() + 1) + '/' + selectedDate.getFullYear())
  }

  const handleError = (errors) => {
    const fieldName = errors.ref.name.charAt(0).toUpperCase() + errors.ref.name.slice(1)

    switch (errors.type) {
      case 'required':
        return fieldName + ' is required'
      case 'pattern':
        return 'Please enter a valid ' + fieldName + '\'s pattern'
      case 'maxLength':
        return 'Please enter no more than 50 characters'
      default:
        return 'Validation error'
    }
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-z]+$/,
          maxLength: 50,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Text style={styles.title}>Input your name:</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name='name'
      />
      {errors.name ? <Text style={styles.errorInput}>{handleError(errors.name)}</Text> : <Text style={styles.errorContainer}>Validation</Text>}

      <Controller
        control={control}
        rules={{
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Text style={styles.title}>Input your email:</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name='email'
      />
      {errors.email ? <Text style={styles.errorInput}>{handleError(errors.email)}</Text> : <Text style={styles.errorContainer}>Validation</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Text style={styles.title}>Select your birthday:</Text>
            <View style={{marginRight: screenWidth/3}}>
              <DateTimePicker
                value={date}
                display='default'
                maximumDate={new Date()}
                onChange={setSelectedDate}
              />
            </View>
          </View>
        )}
        name='birthday'
      />

      <TouchableOpacity
        style={styles.button}
        title='Submit'
        onPress={handleSubmit(onSubmit)}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  title: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  input: {
    alignItems: 'center',
    backgroundColor: 'lavender',
    padding: 10,
    marginHorizontal: 10
  },
  errorInput: {
    color: 'red',
    marginLeft: 10
  },
  errorContainer: {
    opacity: 0
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    padding: 10,
    marginTop: 30
  }
})

export default FormScreen