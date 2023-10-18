import { View, StyleSheet, Text, TextInput, Button } from "react-native-web";

export default function HomeForca({ changeScreen, palavraForca, setPalavraForca }) {

    const handleClick = () => {
        if (changeScreen && setPalavraForca) {
            let palavraForcaT = palavraForca;
            if (palavraForcaT.match('[A-z\s]+')) {
                changeScreen("forca")
            } else {
                alert("Deve conter apenas letras e espaços!")
            }
        }
      }

      const handleClick2 = () => {
        changeScreen("home")
      }

      return (
        <View style={styles.container}>
            <Text>Jogo da Forca</Text>
            <Text>A palavra escolhida é: {palavraForca}</Text>
            <TextInput placeholder='Palavra para a forca' onChangeText={setPalavraForca} style={styles.input} />

            <Button color="#155CA2" title='Iniciar' onPress={handleClick} />
            <Button style={styles.botao} color="#155CA2" title="Voltar" onPress={handleClick2}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    input: {
        width: '60%',
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        color: 'black',
    },

    titulo: {
        color: 'black',
        width: '40',
        height: 10,
    },
});