import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Flatlist, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login(){
    const navigation = useNavigation();
    const [bloqueado, setBloqueado] = useState(true); 

    function irParaHomeScreen(){
        navigation.navigate('HomeScreen')
    }

    function irCadastrar(){
        navigation.navigate('Cadastro');
    }

    return(
        <View style={styles.container}>

            <View style={styles.areadosinput}>
                <View style={styles.inputMatricula}>
                    <TextInput
                    style={styles.input}
                    placeholder='número de matrícula'
                    onChangeText={(texto) => setMatricula(texto)}
                    />
                </View>

                <View style={styles.senhaArea}>    
                    <TextInput style={styles.input}
                    placeholder='senha'
                    secureTextEntry={bloqueado}
                    onChangeText={(texto) => setSenha(texto)}
                    />
                    <TouchableOpacity style={styles.icone} onPress={(() => setBloqueado(!bloqueado))}>
                        {bloqueado?
                        <Ionicons name="eye-off" size={20}/>
                        :
                        <Ionicons name="eye" size={20}/>
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.entrar} onPress={irParaHomeScreen}>
                    <Text style={{color:'#000', fontSize:15}}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.cadastramento}>
                <TouchableOpacity styles={{margin:10}}>
                    <Text style={{color:'#000', fontSize:15}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={irCadastrar}>
                    <Text style={{color:'#000', fontSize:15}}>Faça seu cadastro!!!</Text>
                </TouchableOpacity>  
                </View>        
            </View> 

      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:50,
      alignItems:'center',
      backgroundColor:'Blue',
    },
    areadosinput:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      position:'absolute',
      marginTop:250
    },
    inputMatricula:{
      width:'90%',
      height:50,
      borderWidth:1,
      borderRadius:5,
    },
    senhaArea:{
      marginTop: 10, 
      flexDirection:'row',
      width:'90%',
      height:50,
      borderWidth:1,
      borderRadius:5,
    },
    input:{
      width:'90%',
      height:50,
      padding:10,
      fontSize:15,
    },
    icone:{
      justifyContent:'center',
      width:'10%'
    },
    entrar:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:5,
      width:'90%',
      height:50,
      backgroundColor:'#51ad72',
      borderRadius:5,
    },
    cadastramento:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10,
      width:'100%',
      

    }
    
  });