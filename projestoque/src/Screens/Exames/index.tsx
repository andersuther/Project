import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return <View>
    <View>
    <Text>Exames</Text>
    </View>

    <View style={{flexDirection:'row',padding:10}}>
      <Text>Data</Text> 
    </View>

    <View>
      <Text>Status</Text>
    </View>

  <View>
  </View>
  </View>;
}

export default Dashboard;