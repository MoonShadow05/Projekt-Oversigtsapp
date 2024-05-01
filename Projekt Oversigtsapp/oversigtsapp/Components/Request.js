import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Alert } from "react-native";

const Request = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isBeskrivelse, setIsBeskrivelse] = useState('')

    const vælgBegivenhed = {
        label: "Vælg begivenhed",
        value: null
    };

    const presets = [
        { label: "Tema Tirsdag", value: "TemaTirsdag" },
        { label: "Fredags bar", value: "FredagsBar" },
        { label: "Fest", value: "Fest" },
        { label: "Ny ide", value: "NyIde" }
    ];
    const handleIndsend = () => {
        if (selectedValue === null) {
            console.log("Vælg begivenhed før du fortsætter");
        } else if (isBeskrivelse.trim() === '') {
            console.log("Indtast en beskrivelse før du fortsætter");
        } else {
            console.log("Indsender ide");
            setSelectedValue(null);
            setIsBeskrivelse('');
            Alert.alert("Din ide er blevet indsendt");
        }
    } 

return (
    
    <View className='flex-1 bg-orange-100 p-8 justify-center'>
        <Text className=" text-center font-bold pt-4 text-xl  bottom-[100px]">
            Hvilke aktiviteter kunne du godt tænke dig?
        </Text>

        <View className='border-2 rounded-full bg-neutral-100  bottom-[50px] '>
            <RNPickerSelect
                placeholder={vælgBegivenhed}
                items={presets}
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            />
        </View>
        
        <TextInput
            className='border-2 rounded-lg bg-neutral-100 py-20 text-center'
            placeholder="Beskriv din ide"
            onChangeText={setIsBeskrivelse}
            multiline={true}
            value={isBeskrivelse}
        />
        
        <View className='top-[100px] left-[47px] box-border h-12 w-60 border-2 mt-12 py-2 px-13 rounded-full bg-amber-500'>
                <TouchableOpacity onPress={() => handleIndsend()} >
                    <View >
                        <Text className=' text-center text-base font-medium'>{'           Indsend           '}</Text>
                    </View>
                </TouchableOpacity>
            </View>

    </View>
);
};

export default Request;