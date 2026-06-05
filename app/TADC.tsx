import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Logo = require('../assets/images/tadc.webp');
const MiniLogo = require('../assets/images/filmemini.png');

interface Avaliacao {
  id: string;
  filme: string;
  comentario: string;
  nota: string;
}

interface ItemProps {
  dado: Avaliacao;
}

const ItemAvaliacao = ({ dado }: ItemProps) => (
  <View style={styles.itemContainer}>
    <Text style={styles.tituloFilme}>{dado.filme}</Text>
    <Text style={styles.textoComentario}>"{dado.comentario}"</Text>
    <Text style={styles.notaTexto}>{dado.nota}</Text>
  </View>
);

export default function TelePre() {
  const router = useRouter();
  const [comentario, setComentario] = useState('');
  const [nota, setNota] = useState<string | null>(null);
  const [listaAvaliacoes, setListaAvaliacoes] = useState<Avaliacao[]>([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  const opcoesNota = ['0⭐', '1⭐', '2⭐', '3⭐', '4⭐', '5⭐'];

  const adicionarAvaliacao = () => {
    if (nota !== null && comentario.trim() !== '') {
      const novaAvaliacao: Avaliacao = {
        id: Date.now().toString(),
        filme: "The Amazing Digital Circus",
        comentario: comentario,
        nota: nota
      };

      setListaAvaliacoes([...listaAvaliacoes, novaAvaliacao]);
      setNota(null);
      setComentario('');
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.caixaInput}>
        
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
           <Text style={{color: '#fff', fontSize: 16}}>← Voltar</Text>
        </TouchableOpacity>

        <View style={styles.containerPoster}>
          <Image source={Logo} style={styles.logo} />
          <Image source={MiniLogo} style={styles.miniLogo} />
        </View>

        <Text style={styles.tituloExibicao}>The Amazing Digital Circus</Text>

        <TextInput
          style={styles.input}
          placeholder="Deixe seu comentário"
          placeholderTextColor="#888"
          value={comentario}
          onChangeText={setComentario}
        />

        <View style={styles.linha}>
          <TouchableOpacity style={styles.botaoNota} onPress={() => setModalVisivel(true)}>
            <Text style={{ color: '#fff' }}>{nota ? nota : "Avalie ⭐"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botaoAdd} onPress={adicionarAvaliacao}>
          <Text style={styles.textoBotao}>PUBLICAR AVALIAÇÃO</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listaAvaliacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Avaliacao }) => <ItemAvaliacao dado={item} />}
      />

      <Modal visible={modalVisivel} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.fundoModal} onPress={() => setModalVisivel(false)}>
          <View style={styles.menuModal}>
            <ScrollView>
              {opcoesNota.map((opcao) => (
                <TouchableOpacity key={opcao} style={styles.opcao} onPress={() => { setNota(opcao); setModalVisivel(false); }}>
                  <Text style={styles.textoOpcao}>{opcao}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  botaoVoltar: {
    marginBottom: 10,
    paddingVertical: 5,
  },
  containerPoster: {
    position: 'relative',
    marginBottom: 5,
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  tituloExibicao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  miniLogo: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  caixaInput: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#444',
    padding: 8,
    marginBottom: 15,
    color: '#fff',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  botaoNota: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  botaoAdd: {
    backgroundColor: '#b71c1c',
    padding: 12,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#FFD700',
  },
  tituloFilme: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  textoComentario: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
  notaTexto: {
    marginTop: 5,
    color: '#ccc',
  },
  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuModal: {
    backgroundColor: '#2c2c2c',
    width: '70%',
    maxHeight: '40%',
    borderRadius: 10,
    padding: 10,
  },
  opcao: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  textoOpcao: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});