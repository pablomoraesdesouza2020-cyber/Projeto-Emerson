import { useEffect, useState } from 'react';
import { Alert, Button, Image, ScrollView, Text, View } from 'react-native';
import { filmes } from './Filmes';
import styles from './Styles';

export default function ViewFilmeUE() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % filmes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const item = filmes[index];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subtitulo}>AVALIA</Text>
        <Text style={styles.titulo}>{item.titulo}</Text>
        
        <Image source={item.imagem} style={styles.imagem} />
        
        <View style={styles.botaoContainer}>
          <Button 
            title="Avalie" 
            color="#b22222" 
            onPress={() => Alert.alert("Avaliado!", "Obrigado por votar no " + item.titulo)} 
          />
        </View>
      </View>
    </ScrollView>
  );
}