import api from '../../../Services/api';
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

export const DeleteItens = async id => {
  try {
    const list = await api.delete(`/itens/${id}`);
    return list;
  } catch (error) {
    return error;
    //chama o snabar e passa error.message
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
    return 'success';
  } catch (error) {
    Mensagem.alert('Erro', error);
    return error;
    //chama o snabar e passa error.message
  }
};
