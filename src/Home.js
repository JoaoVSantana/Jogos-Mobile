import { StyleSheet, View, Button, Text } from "react-native";

export default function Home({ changeScreen, nextScreen }){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogos Bacanas</Text>
            <Button title="Jogo da Velha" color="#087E8B" onPress={() => {changeScreen("homeVelha")}} ></Button>
            <Button title="Jogo da Forca" color="#C81D25" onPress={() => {changeScreen("homeForca")}} />
            <Button title="Jogo da Memória" color="#7D5BA6" onPress={() => {nextScreen("memoria"); changeScreen}} ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        width: '100%',
        backgroundColor: '#A29C9B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 32, 
        fontWeight: 'bold',
    }
});
