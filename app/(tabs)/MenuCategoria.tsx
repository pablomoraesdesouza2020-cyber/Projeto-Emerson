import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.titulo}>ESCOLHA UMA CATEGORIA</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="SUSPENSE" 
          color="#8b0000" 
          onPress={() => Alert.alert("Selecionado", "Você escolheu Suspense")} 
        />
        
        <View style={{ height: 20 }} />
        
        <Button 
          title="AVENTURA" 
          color="#00008b" 
          onPress={() => Alert.alert("Selecionado", "Você escolheu Aventura")} 
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fundo preto
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '80%',
  },
});