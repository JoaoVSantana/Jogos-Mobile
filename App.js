import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/Home'
import HomeVelha from './src/homeVelha';
import Velha from './src/velha';
import HomeForca from './src/HomeForca';
import Forca from './src/Forca'

export default function App() {
  const [screen, setScreen] = useState("home");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [palavraForca, setPalavraForca] = useState("");


  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("home") && (
        <Home
          mudarNomeJogadores={setJogadores}
          changeScreen={changeScreen} />)}

      {checkScreen("homeVelha") && (
      <HomeVelha changeScreen={changeScreen} mudarNomeJogadores={setJogadores} player1 = {player1} player2 = {player2} />)}

      {checkScreen("velha") && (
      <Velha changeScreen={changeScreen} player1 = {player1} player2 = {player2} />)}

      {checkScreen("homeForca") && (
      <HomeForca changeScreen={changeScreen} palavraForca={palavraForca} setPalavraForca={setPalavraForca}
      />)}

      {checkScreen("forca") && (
      <Forca changeScreen={changeScreen} palavraForca={palavraForca} setPalavraForca={setPalavraForca}
      />)}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A29C9B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    height: 20,
    backgroundColor: '#fff',
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
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


