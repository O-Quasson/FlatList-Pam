import React from "react";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";
import  bolas  from "../imagens/bolas.jpeg";

const imagens = {
    
};
const Inimigos = [
    { id: '1', nome: 'Maconha', descricao: 'Folha', imagem: bolas},
    { id: '2', nome: 'Maconha', descricao: 'Folha', imagem: bolas },
    { id: '3', nome: 'Maconha', descricao: 'Folha', imagem: bolas },
    { id: '4', nome: 'Maconha', descricao: 'Folha', imagem: bolas },
    { id: '5', nome: 'Maconha', descricao: 'Folha', imagem: bolas }
]

export default TelaInicial = () => {
    return (
    <View style={[{flexDirection: 'column'}]}>
        <FlatList 
            data={Inimigos} 
            renderItem={(item) => {
                    <View style={[{flexDirection: 'row', backgroundColor: '#89b8f5'}]}>
                        <View>
                            <Image source={item.imagem} style={{width: 200, height: 200}}/>
                        </View>
                        <View style={[{flexDirection: "column"}]}>
                            <Text>{item.nome}</Text>
                            <Text>{item.descricao}</Text>
                        </View>
                    </View>
            }}
            keyExtractor={(item, index) => item.id.toString()}
        />    
    </View>
    );
}

const style = StyleSheet.create({

});