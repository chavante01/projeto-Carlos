import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
            <TextInput style={styles.input} placeholder='Nome' onChangeText={(text) => setNome(text)}/>
                
            <TextInput style={styles.input} placeholder='Sobrenome' onChangeText={(text) => setSobrenome(text)}/>
                
            <TextInput style={styles.input} placeholder='Senha' onChangeText={(text) => setSenha(text)}/>
                
            <TextInput style={styles.input} placeholder='Confirme a senha' onChangeText={(text) => setConfirm(text)}/>
                
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={{color:'#000'}}> Criar Conta</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    input:{
        width:'90%',
        height:50,
        borderWidth:1,
        borderRadius:18,
        marginTop:10,
        padding:10,
        fontSize:15,
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:50,
        borderRadius:18,
        marginTop:20,
        padding:10,
        fontSize:15,
        backgroundColor:'#51ad72',
    }

})