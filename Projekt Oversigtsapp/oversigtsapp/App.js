import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Login from './Components/Login';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './Components/Home';
import Deltag from './Components/Deltag';
import Navi from './Components/Navi';


const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Navi} />
        <Stack.Group screenOptions={{headerShown: true}}>
          <Stack.Screen name='Deltag' component={Deltag} options={{headerStyle: { backgroundColor: 'rgb(255, 240, 204)'}}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*export default function App() {
  const [user, setUser] = useState(null);
  return (
    <View className='relative flex-auto text-center justify-center'>
      { user == null ? <Login setUser={setUser}/> : <Home setUser={setUser} user={user} />}
    </View>
  );
}*/
