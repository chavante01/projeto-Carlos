import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://10.0.0.151:3000');



export default function Pessoa() {
  var test = 'carlos';
  socket.on('data', function (data) {
    test = data;
  });
  return (




    <TouchableOpacity style={styles.pessoa}>
      <View style={styles.conteudo}>
        <Text style={styles.texto}>Lucas Chavante</Text>
        <Text style={styles.texto}>{test}</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.texto}>Idade: 21</Text>
        <Text style={styles.texto}>SaO2: 98%</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pessoa: {
    justifyContent: 'flex-start',
    width: '85%',
    height: '15%',
    padding: 20,
    backgroundColor: '#f5efff',
    borderRadius: 15,
    marginTop: 10,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 24,
  },
  texto: {
    fontSize: 20,
  },
  conteudo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: 30
  },
})
