import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView,TouchableOpacity, Button, Alert, Image } from "react-native";

const Login = ({ navigation }) => {
  const [isBrugernavn, setIsBrugernavn] = useState('NEXT')
  const [isPassword, setIsPassword] = useState('')
  const correctUser = {
      Username: 'NEXT',
      Password: '',
      RealName: 'Oliver Elkjær-Pedersen'
  }

const handleLogin = () => {
    console.log("handleLogin called");
    console.log("isBrugernavn:", isBrugernavn);
    console.log("isPassword:", isPassword);

    if (correctUser.Username === isBrugernavn && correctUser.Password === isPassword) {
        console.log("Login successful!");
        navigation.navigate('Home');
    } else {
        console.log("Invalid username or password");
        Alert.alert('Error', 'Invalid username or password');
    }
}

  return (
      <View className='flex-1 items-center bg-orange-100'>
          <StatusBar style="auto" />


          <View className='top-[50px] flex items-center'>
                <Image className='rounded-lg' source={{uri: 'https://cdn.discordapp.com/attachments/1020337279727837245/1233465678393118850/VGA_eventhub_logo-modified.png?ex=662d31ee&is=662be06e&hm=5ff16a4a2d7517e8dd280d52ed56f245a7483e92f5ae3ef1422a49573d54f79c&'}}
                style={{width: 250, height: 250} } /> 
            </View>

          <SafeAreaView>
              <TextInput
                  className='top-[100px] border-2 py-2 px-16 rounded bg-amber-400 text-center text-md font-semibold'
                  onChangeText={setIsBrugernavn}
                  placeholder='Brugernavn'
                  value={isBrugernavn}
              />
              <TextInput
                  className='top-[100px] border-2 mt-6 py-2 px-12 rounded bg-amber-400 text-center text-md font-semibold'
                  onChangeText={setIsPassword}
                  value={isPassword}
                  secureTextEntry={true}
                  placeholder="Password"
              />


            <View className='top-[150px] box-border h-12 w-60 border-2 mt-12 py-2 px-13 rounded-full bg-amber-500'>
                <TouchableOpacity onPress={() => handleLogin()} >
                    <View >
                        <Text className=' text-center text-base font-medium'>{'           Login           '}</Text>
                    </View>
                </TouchableOpacity>
            </View>




          </SafeAreaView>
      </View>
  );
}

export default Login