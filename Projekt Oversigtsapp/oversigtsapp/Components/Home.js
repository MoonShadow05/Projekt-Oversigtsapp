import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, Button, Alert, TouchableOpacity, Settings } from "react-native";
import Deltag from './Deltag';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Oversigtsside = ({ navigation }) => {
    const [isEvent, setIsEvent] = useState(false)
    const [isDatabase, setIsDatabase] = useState([
        {
            id: 1,
            Headline: 'Aktivitet: Galla Fest',
            Body: 'Antal tilmelde deltager: 5',
            Dato: '23-02-2024',
        },
        {
            id: 2,
            Headline: 'Aktivitet: Gokart',
            Body: 'Antal tilmelde deltager: 0',
            Dato: '23-03-2024',
        },
        {
            id: 3,
            Headline: 'Aktivitet: Fodbold turnering',
            Body: 'Antal tilmelde deltager: 2',
            Dato: '23-04-2024',
        },
        {
            id: 4,
            Headline: 'Aktivitet: Gokart',
            Body: 'Antal tilmelde deltager: 1',
            Dato: '23-05-2024',
        },
    ])

    const handleDeltag = (id) => {
        console.log(id)
        navigation.navigate('Deltag')
    }

    return (
        <View className='flex-1 bg-orange-100'>
            <View className='relative top-7'>
                <Text className='text-center font-bold pt-4 text-xl'>Kommende Events</Text>
                    {isDatabase.map(database => (
                        <TouchableOpacity key={database.id} onPress={() => handleDeltag(database.id)} >
                            <View className='flex flex-colm rounded mx-8 bg-amber-400 pb-1 space-y-1 my-2 border-2' >
                                <Text className='text-neutral left-2 font-bold text-lg'>{database.Headline}</Text>
                                <Text className='absolute pl-72 text-neutral'>{database.Deltager}</Text>
                                <Text className='text-neutral left-2'>{database.Body}</Text>
                                <Text className='text-neutral text-right right-2'>{database.Dato}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </View>
        </View>
    );
}

export default Oversigtsside;