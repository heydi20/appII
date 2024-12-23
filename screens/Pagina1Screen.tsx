import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina1Screen() {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [ciudad, setCiudad] = useState("")

  function datosAlert(){
    Alert.alert("Mensaje", "El nombre del usuario es: "+ nombre)
    setNombre("")
  }


  return (
    <ImageBackground
      source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/20145.jpg" }}
      style={styles.img}
    >
      <View style={styles.contenedor}>
        <TextInput
          placeholder='INGRESAR NOMBRE'
          placeholderTextColor={'white'}
          style={styles.input}
          onChangeText={ (texto)=> setNombre(texto) }
          value= {nombre}
        />

        <TextInput
          placeholder='INGRESAR EDAD'
          style={styles.input}
          placeholderTextColor={'white'}
          keyboardType='numeric'
        />

        <TextInput
          placeholder='INGRESAR CIUDAD'
          style={styles.input}
          placeholderTextColor={'white'}
        />

        <Button 
          title='ACEPTAR' 
          onPress={()=> datosAlert()}
          color={'green'}
        />
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1
  },
  input: {
    fontSize: 30,
    height: 55,
    width: "80%",
    color: '#00cc29',
    backgroundColor: "#222a24",
    opacity: 0.95,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal:20
    
  },
  contenedor:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:"99%"
  }
})