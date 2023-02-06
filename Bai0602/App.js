import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Manager from './Navigation/Manager';
import About from './Navigation/About';

const list = [
      { id: 1, name: 'A', desc: 'A', imageUrl: 'https://picsum.photos/64' },
      { id: 2, name: 'B', desc: 'B', imageUrl: 'https://picsum.photos/64' },
      { id: 3, name: 'C', desc: 'C', imageUrl: 'https://picsum.photos/64' },
      { id: 4, name: 'D', desc: 'D', imageUrl: 'https://picsum.photos/64' },
];

const aboutOfMe = { name: 'Vương Tất Cường', msv: 'PH28111' };

const Stack = createNativeStackNavigator();

const Home = (props) => {
      return (
            <View style={styles.container}>
                  <Image style={styles.logo} source={{ uri: 'https://picsum.photos/200' }} />
                  <View style={{ margin: 16, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        <Button title="Manager" onPress={() => props.navigation.navigate('Manager', { list })} />
                        <Button title="About" onPress={() => props.navigation.navigate('About', { aboutOfMe })} />
                  </View>
            </View>
      );
};

export default function App() {
      return (
            <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Manager" component={Manager} />
                        <Stack.Screen name="About" component={About} />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
      logo: {
            width: 200,
            height: 200,
      },
});
