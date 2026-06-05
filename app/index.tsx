import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from '../components/Styles';

const listaFilmes = [
  { src: require('../assets/images/avatar.webp'), titulo: 'Avatar' },
  { src: require('../assets/images/backroom.jpg'), titulo: 'Backrooms' },
  { src: require('../assets/images/telepre2.webp'), titulo: 'Telefone Preto 2' },
  { src: require('../assets/images/tadc.webp'), titulo: 'The Amazing Digital Circus' },
];

export default function MenuPrincipal() {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const novoIndex = Math.floor(Math.random() * listaFilmes.length);
      setIndex(novoIndex);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const filmeAtual = listaFilmes[index];

  return (
    <SafeAreaView style={styles.container}>
      
      <Image 
        source={require('../assets/images/filmemini.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      <Text style={styles.tituloFilme}>{filmeAtual.titulo}</Text>

      <Image 
        source={filmeAtual.src} 
        style={styles.imagemDestaque} 
        resizeMode="contain"
      />

      <Text style={styles.textoAvalie}>AVALIE FILMES</Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => router.push('/MenuCategoria')}
      >
        <Text style={styles.textoBotao}>CATEGORIAS</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}