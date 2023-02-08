import { LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Navigation/HomeScreen';
import ProfileScreen from './src/Navigation/ProfileScreen';
import EditScreen from './src/Navigation/EditScreen';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const Stack = createNativeStackNavigator();

const App = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="Edit" component={EditScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      );
};

export default App;

const styles = StyleSheet.create({});
