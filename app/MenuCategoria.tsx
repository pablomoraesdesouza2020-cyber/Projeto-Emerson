import { useRouter } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../components/Styles';

export default function MenuCategoria() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.tituloFilme}>ESCOLHA UMA CATEGORIA</Text>
      
      <View style={{ width: '80%', alignItems: 'center' }}>
        
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => router.push('/MenuSuspense')}
        >
          <Text style={styles.textoBotao}>SUSPENSE</Text>
        </TouchableOpacity>
        
        <View style={{ height: 20 }} />
        
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => router.push('/MenuAventura')}
        >
          <Text style={styles.textoBotao}>AVENTURA</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView>
  );
}