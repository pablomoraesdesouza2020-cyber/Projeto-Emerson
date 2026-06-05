import { StyleSheet } from 'react-native';

export const cores = {
  fundo: '#121212',
  destaque: '#E50914', 
  texto: '#FFFFFF',
  textoSecundario: '#AAAAAA'
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 120,
    marginBottom: 30,
    transform: [{ rotate: '-15deg' }],
  },
  tituloFilme: {
    color: cores.texto,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagemDestaque: {
    width: '100%',
    height: 350,
    marginBottom: 10,
  },
  textoAvalie: {
    color: cores.textoSecundario,
    fontSize: 18,
    marginBottom: 40,
    fontStyle: 'italic'
  },
  botao: {
    backgroundColor: cores.destaque,
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  textoBotao: {
    color: cores.texto,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imagemLista: {
    width: '90%',    
    height: 250,     
    borderRadius: 15, 
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center', 
},
});