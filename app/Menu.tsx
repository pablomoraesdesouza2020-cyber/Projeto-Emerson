import { Image, SafeAreaView } from 'react-native';
import styles from './components/Styles';
import ViewFilmeUE from './components/ViewFilmeUE'; // Ou ViewFilme, dependendo do que quer mostrar

export default function App() {
  return (
    <SafeAreaView style={styles.containerApp}>
      {/* Certifique-se de que o caminho da logo esteja correto */}
      <Image style={styles.logo} source={require('./assets/filmemini.png')} />
      
      <ViewFilmeUE />
    </SafeAreaView>
  );
}