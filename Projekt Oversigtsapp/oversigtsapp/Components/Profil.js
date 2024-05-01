import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, Button, Alert, TouchableOpacity, Image } from "react-native";
const Setting = ({ navigation }) => {

    const handleLogoutevent = () => {
        console.log("logger ud!")
        navigation.navigate('Login')
    }

    return (
        
        <View className="flex-1 bg-orange-100">
            <Text className='relative text-black text-center font-semibold top-[350px]'>{'Brugernavn: Oliver Elkjær-Pedersen'}</Text>
            <Text className='relative text-black text-center font-semibold top-[350px]'>{'Klasse: 2.V'}</Text>

            <View className='top-[100px] flex items-center'>
                <Image className='rounded-full' source={{uri: 'https://media.discordapp.net/attachments/1006539245491601459/1196396573832269904/IMG_3685.jpg?ex=662ccfa3&is=662b7e23&hm=89e141688289e51972ea2d40cd6660b9b5214d7303116ac74845d8a7ca5eabea&=&format=webp&width=496&height=662'}}
                style={{width: 200, height: 200} } /> 
            </View>



            <View className='top-[400px] box-border h-12 w-60 left-[80px] border-2 mt-12 py-2 px-13 rounded-full bg-red-400'>
                <TouchableOpacity onPress={() => handleLogoutevent()} >
                    <View >
                        <Text className=' text-center text-base font-medium'>{'           Logout           '}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Setting;