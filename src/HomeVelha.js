import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function HomeVelha({
    mudarNomeJogadores,
    changeScreen
}) {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
  
    const handleClick = () => {
      if (!player1 && !player2) {
        alert("Digite os nomes dos players para jogar");
      }
      else if (!player1) {
        alert("digite um nome para o player 1");
      } else if (!player2) {
        alert("digite um nome para o player 2");
      } else if (player1 == player2){
        alert("digite nomes diferentes para os players")
      } else {
        alert("Partida: " + player1 + " X " + player2);
        if (mudarNomeJogadores) {
          mudarNomeJogadores(player1, player2);
          changeScreen("velha")
        }
      }
}
    const handleClick2 = () => {
      changeScreen("home")
    }
  return (
    
    <View style={styles.container}>
      <Button style={styles.botao} color ="#155CA2" title="Voltar" onPress={handleClick2}></Button>
      <Text>Nome Player 1: {player1}</Text>
      <TextInput style={styles.input} placeholder={'Player 1'} onChangeText={setPlayer1}></TextInput>
      <Text>Nome Player 2: {player2}</Text>
      <TextInput style={styles.input} placeholder={'Player 2'} onChangeText={setPlayer2}></TextInput>
      <Button style={styles.botao} color ="#155CA2" title={"Começar"} onPress={handleClick}>
      </Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A29C9B',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },

  input: {
    width: "80%",
    height: 20,
    backgroundColor: '#fff',
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },

  botao: {
    padding: '5'
  }
});

function myState(_state) {
  let state = _state;

  function setState(value) {
    state = value;
  }

  function getState() {
    return state;
  }
  
  return [state, setState, getState];
}
