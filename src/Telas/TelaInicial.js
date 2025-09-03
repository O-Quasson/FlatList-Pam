import React from "react";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";

const Inimigos = [
    { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
    { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
    { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
    { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
    { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' }
]

export default TelaInicial = () => {
    return (
    <View>
        <FlatList 
            data={Inimigos} 
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({item}) =>{
                return (
                    <View>
                        
                    </View>
                );
            }}
        />    
        <Image source={item.Imagem}/>
    </View>
    );
}