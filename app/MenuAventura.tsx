import { Link } from 'expo-router';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const filmes = [
  {
    id: 1,
    titulo: 'Avatar',
    imagem: require('../assets/images/avatar.webp'),
    rota: '/avatar',
  },
  {
    id: 2,
    titulo: 'Digital Circus',
    imagem: require('../assets/images/tadc.webp'),
    rota: '/TADC',
  },
];

export default function MenuAventura() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.tituloCategoria}>AVENTURA</Text>

        {filmes.map((filme) => (
          <View key={filme.id} style={styles.cardFilme}>
            <Text style={styles.tituloFilme}>{filme.titulo}</Text>
            
            <Image source={filme.imagem} style={styles.imagem} />
            
            <View style={styles.botaoContainer}>
              <Link href={filme.rota as any} asChild>
                <TouchableOpacity style={styles.botaoAcessar}>
                  <Text style={styles.textoBotao}>Acessar Filme</Text>
                </TouchableOpacity>
              </Link>
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
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  tituloCategoria: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8b0000',
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
  cardFilme: {
    alignItems: 'center',
    marginBottom: 40,
    width: '40%',
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
  },
  botaoAcessar: {
    backgroundColor: '#8b0000',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});