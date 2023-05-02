import React from 'react';
import { ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import {TabContent} from '../../Components/TabContent/TabContent';

const Login: React.FC = () => {

  const img5 = '../../images/manman.png';
  const img6 = '../../images/logot.png';

  const navigation = useNavigation();

  return (
 
     <Styled.Container>
      <ImageBackground
      source={require(img5)}
      style={{flex:1}}
      >  
        
        <Styled.Viewlogo> 
        <Image
        source={require(img6)}
        style={{width:'50%', height:'52%',position:'absolute'}}
        />
        </Styled.Viewlogo>

      <Styled.Viewtab>
      <TabContent
      titleTab1={'Cliente'}
      titleTab2={'Logistica'}
      />
      </Styled.Viewtab>


      <Styled.ViewButton>

       <BotaoHome
       onPress={()=> navigation.navigate('Exames')}
       height={'40px'}
       width={'50%'}
       title={'Entrar'}
       color={'#000'} 
       />
      
       </Styled.ViewButton>
      </ImageBackground>
      </Styled.Container>
  )
  
}

export default Login;