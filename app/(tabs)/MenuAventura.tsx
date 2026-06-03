import {
    Alert,
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const filmes = [
  {
    id: 1,
    titulo: 'Avatar',
    imagem: require('./assets/avatar.webp'), 
  },
  {
    id: 2,
    titulo: 'Digital Circus',
    imagem: require('./assets/tadc.webp'), 
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Título da Categoria */}
        <Text style={styles.tituloCategoria}>AVENTURA</Text>

        {/* Listagem dos Filmes */}
        {filmes.map((filme) => (
          <View key={filme.id} style={styles.cardFilme}>
            <Text style={styles.tituloFilme}>{filme.titulo}</Text>
            
            <Image source={filme.imagem} style={styles.imagem} />
            
            <View style={styles.botaoContainer}>
              <Button 
                title="Avalie" 
                color="#00008b" // Azul escuro para Aventura
                onPress={() => Alert.alert("Sucesso", `Avaliado: ${filme.titulo}`)} 
              />
            </View>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fundo preto
  },
  scrollContent: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  tituloCategoria: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00008b', 
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
  cardFilme: {
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  tituloFilme: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  imagem: {
    width: '80%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  botaoContainer: {
    width: '50%',
  }
});