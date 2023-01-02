import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';


export default function App(){
  return(
    <View style={styles.container}>

      <View style={styles.clientes}>

        <TouchableOpacity style={styles.pessoa}>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>Lucas Chavante</Text>
            <Text style={styles.texto}>BPM:71</Text>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>Idade: 21</Text>
            <Text style={styles.texto}>SaO2: 98%</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.addcliente}>
        <TouchableOpacity style={styles.add}>
          <Text style={{fontSize:30}}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#7161EF',
      
  },
  clientes:{
    alignItems:'center',
    width:'100%',
    height:'87%',
  },
  addcliente:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginRight:15
  },
  pessoa:{
    justifyContent:'flex-start',
    width:'85%',
    height:'15%',
    padding:20,
    backgroundColor:'#f5efff',
    borderRadius:15,
    marginTop:10,
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 24,
  },
  conteudo:{
    flexDirection:'column',
    justifyContent:'space-around',
    marginRight:30
  },
  texto:{
    fontSize:20,
  },
  add:{
    height:62,
    width:62,
    borderRadius:62/2,
    backgroundColor:'#f5efff',
    justifyContent:'center',
    alignItems:'center',
  },
  
});