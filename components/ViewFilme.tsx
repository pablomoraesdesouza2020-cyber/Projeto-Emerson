import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', 
    },
    containerApp: {
        flex: 1,
        backgroundColor: '#121212', 
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff', 
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#b22222', 
        letterSpacing: 2,
        marginBottom: 5,
        marginTop: 10,
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    botaoContainer: {
        marginTop: 20,
        width: '80%',
    },
    logo: {
    width: '100%',
    height: 60, 
    resizeMode: 'contain', 
    marginBottom: 10,
},
});

export default styles;