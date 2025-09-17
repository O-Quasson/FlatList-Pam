import React from "react";
import { View, FlatList, StyleSheet, Image, Text, Dimensions } from "react-native";

import matt from "../imagens/matt.png"

import bubblebee from "../imagens/bubblebee.png";
import cerberus from "../imagens/cerberus.png";
import pukeko from "../imagens/pukeko.png";
import leavi from "../imagens/leavi.png";
import stealler from "../imagens/stealler.png";

import coelhorandom from "../imagens/coelhorandom.png";
import gray from "../imagens/gray.png";
import formilicia from "../imagens/formilicia.png";
import AM from "../imagens/AM.png"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Inimigos = [
    { id: '1', nome: 'Cerberus', descricao: 'É um cachorro selvagem. Por algum motivo ele tem 3 cabeças. Eu não acho que ele tenha tomado vacina para raiva...', imagem: cerberus},
    { id: '2', nome: 'Bubblebee', descricao: 'É uma abelha e uma bolha ao mesmo tempo. Não me pergunte como isso funciona. Como que ela pega pólen se bolhas estouram fácil fácil?', imagem: bubblebee },
    { id: '3', nome: 'Pukeko', descricao: 'DAAAAAAAAAMMMMMMMMMNNNNNNNNNNNNNN!!!!!!!!!!!!', imagem: pukeko },
    { id: '4', nome: 'Leavi', descricao: 'Uma folha que criou vida. Ela conseguiu arranjar um lápis (não se sabe de onde) e desenhou o próprio rosto. Ela é uma péssima artista', imagem: leavi },
    { id: '5', nome: 'Stealler', descricao: 'Um ladrão que ronda os arredores da vila e usa uma máscara de coruja. Ele usa roupas grandes e largas achando que tá arrasando, mas na verdade ele só tem um senso de moda horrível', imagem: stealler }
]

const NPCs = [
    { id: '1', nome: 'Matthew', descricao: 'Um simples moleque que acabou indo parar em outro mundo. Tomara que ele consiga voltar para o mundo dele antes das 7 da manhã, o chefe dele iria matar ele se ele faltasse do trabalho', imagem: matt },
    { id: '2', nome: 'Gray Child', descricao: 'O futuro herói do mundo. Ele é destinado a se tornar o salvador de todo o mundo, porém acabou sendo selado dentro de um espelho. E ele come sabonete', imagem: gray},
    { id: '3', nome: 'Bunysell', descricao: 'Não sei quem ele é. Ele simplesmente apareceu com uma conversa de "vender items por um preço mais baixo". Eu não confiaria nele se fosse você', imagem: coelhorandom },
    { id: '4', nome: 'Formilícia', descricao: 'Uma formiga operária que trabalha como guarda da cidade. A rainha dele é sua esposa, então isso faz dele um rei? Bem, pelo menos ele é uma formiga feliz, mesmo ganhando 1/2 salário mínimo', imagem: formilicia },
    { id: '5', nome: 'Allied Librarian Computer', descricao: "Um mega computador que trabalha na biblioteca. Ele é bem mais eficaz para te dizer se a biblioteca tem um livro mais específico, mas infelizmente ele não pode te mostrar onde o livro está na prateleira, já que ele é gigante", imagem: AM }
]

const TelaInicial = () => {
    return (
    <View style={[{flexDirection: 'column', flex: 1, padding: 20}]}>
        <Text style={[{fontSize: 40}]}>Inimigos</Text>
        <FlatList 
            data={Inimigos} 
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                    <View style={[{flexDirection: 'row', backgroundColor: '#89b8f5', marginBottom: windowHeight*0.02, padding: 10, width: "100%"}]}>
                        <View style={[{marginRight: 10}]}>
                            <Image source={item.imagem} style={{width: windowWidth*0.3, height: windowWidth*0.3, resizeMode: 'contain'}}/>
                        </View>
                        <View style={[{flexDirection: "column", flex: 1}]}>
                            <Text style={[{fontSize: 40}]}>{item.nome}</Text>
                            <Text style={[{flexWrap: "wrap"}]}>{item.descricao}</Text>
                        </View>
                    </View>
            )}
            style={[{marginBottom: windowHeight*0.05}]}
        />    
        <Text style={[{fontSize: 40}]}>Personagens</Text>
        <FlatList 
            data={NPCs} 
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                    <View style={[{flexDirection: 'row', backgroundColor: '#89b8f5', marginBottom: windowHeight*0.02, padding: 10, width: "100%"}]}>
                        <View style={[{marginRight: 10}]}>
                            <Image source={item.imagem} style={{width: windowWidth*0.3, height: windowWidth*0.3, resizeMode: 'contain'}}/>
                        </View>
                        <View style={[{flexDirection: "column", flex: 1}]}>
                            <Text style={[{fontSize: 40}]}>{item.nome}</Text>
                            <Text style={[{flexWrap: "wrap"}]}>{item.descricao}</Text>
                        </View>
                    </View>
            )}
        />    
    </View>
    );
};

const style = StyleSheet.create({

});

export { TelaInicial }