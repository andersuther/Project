import api from '../../../Services/api';
import Snackbar from 'react-native-snackbar';
//criar e importar snackbar

export const getList = async () => {
  try {
    const list = await api.get('/itens-list');
    return list;
  } catch (error) {
    return error;
    //chama o snabar e passa error.message
  }
};

export const DeleteItens = async (id, nome) => {
  try {
    const list = await api.delete(`/itens/${id}`);
    Snackbar.show({
      text: `Excluido com Sucesso!`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#14cf43',
      textColor: '#fff',
    });
    return list;
  } catch (error) {
    Snackbar.show({
      text: `Não foi possivel excluir`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#14cf43',
      textColor: '#fff',
    });
    return error;
  }
};

export const createIten = async (obj, recarrega, Mensagem) => {
  if (!obj.nome || obj.nome === '') {
    Mensagem.alert('Erro', 'Nome necessário!');
    return;
  }
  if (!obj.valor || obj.valor === '') {
    Mensagem.alert('Erro', 'Valor necessário!');
    return;
  }
  if (!obj.complemento || obj.complemento === '') {
    Mensagem.alert('Erro', 'Complemento necessário!');
    return;
  }
  try {
    await api.post('/itens', obj);
    recarrega();
    Snackbar.show({
      text: `Item criado com Sucesso!`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#14cf43',
      textColor: '#fff',
    });
    return 'success';
  } catch (error) {
    Mensagem.alert('Erro', error);
    Snackbar.show({
      text: `Não foi possivel criar seu novo Item!`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '',
      textColor: '#fff',
    });
    return error;
    //chama o snabar e passa error.message
  }
};
