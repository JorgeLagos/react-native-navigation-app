import { Text, View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';

import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
]

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  return (
    <View style={ globalStyle.container }>
      <Text style={{ marginBottom:10, fontSize: 20 }}>Productos</Text>
      <FlatList
        data={ products }
        renderItem={ ({ item }) => (<PrimaryButton label={ item.name } onPress={ () => navigation.navigate('Product', item) } />) }
      ></FlatList>

      <Text style={{ marginBottom:10, fontSize: 20 }}>Ajustes</Text>
      <PrimaryButton
        label="Settings"
        onPress={ () => navigation.navigate('Settings') }
      ></PrimaryButton>
    </View>
  )
}