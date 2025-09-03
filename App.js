import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TelaInicial from './src/Telas/TelaInicial';

const Inimigos = [
  // { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
  // { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
  // { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
  // { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' },
  // { ID: '1', Nome: 'Maconha', Descricao: 'Folha', Imagem: 'Insera o sprite aqui' }
  "maconha", "cocaína", "crack", "metanfetamina", "LSD", "Metal Gear Solid 4: Guns of the Patriots"
]

export default function App() {
  return (
    <View>
      <FlatList data={Inimigos} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Text style={[{fontSize: 200}]}>{item}</Text>}/>
      <Image source={item.Imagem}/>
    </View>
    //passa todo esse código para o TelaInicial.js
    //O terreno deve tá pronto
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
