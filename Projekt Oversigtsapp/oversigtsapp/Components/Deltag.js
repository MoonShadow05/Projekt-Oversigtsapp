import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, Button, Alert, TouchableOpacity, Animated } from "react-native";

const Deltag = ({ navigation }) => {
    const [isDeltag, setIsDeltag] = useState([{}]);
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        console.log("Entering Deltag component");
    }, []);

    const handleDeltag = () => {
        setIsDeltag([{ name: 'Oliver Elkjær-Pedersen' }]);
        startAnimation();
        console.log("Button pressed");
    };

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View className='flex-1 bg-orange-100'>
            <View className='top-12 max-h-20'>
                <View className='border-2 mx-2 rounded top-[25px]'>
                    <Text className='text-black text-center text-bold text-lg font-bold bg-amber-400 py-3'>Deltagere:</Text>

                    {isDeltag.map((deltag, index) => (
                        <Text key={index} className='text-black text-sm text-center bg-amber-400 py-6 '>{deltag.name}</Text>
                    ))}
                </View>
            </View>

            <View className='place-content-center top-[500px] border-2 py-2 px-6 rounded bg-amber-500 mx-[100px]'>
                <TouchableOpacity onPress={() => handleDeltag()}>
                    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                        <Text className='text-black text-base text-center font-bold rounded '>{'Deltag i aktivitet'}</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Deltag;