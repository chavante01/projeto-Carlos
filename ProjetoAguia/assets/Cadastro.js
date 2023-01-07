import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icone from './icone-cadastro.svg';

export default function Cadastro(){
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirm, setConfirm] = useState('');

    function cadastrar(){
        if(senha != confirm){
            alert("Senha escrita de forma incorreta!!!")
        }else{
            navigation.navigate('Login')
        }  
    }

    return(
        <View style={styles.container}>
            <View style={styles.cabeçalho}>
                <Icone width={225} height={225}/>
                <Text style={{fontSize:20, color:'#000'}}>Criando sua Conta !!!</Text>
            </View>
            <View style={styles.corpo}>
                <TextInput style={styles.inputs} placeholder='qualquer merda' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFD9CE'
    },
    cabeçalho:{
        flex:0.35,
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%',
        backgroundColor:'red'
    },
    corpo:{
        flex:0.65,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    inputs:{
        width:'85%',
        height:40,
        borderWidth:1,
        borderColor:'green'
    }
  })