import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <View>
            <TouchableOpacity onPress={toggleDropdown} style={tailwind('flex flex-row items-center justify-between p-2 bg-gray-200 rounded')}>
                <Text className='text-sm text-gray-700'>{selectedOption || 'Select an option'}</Text>
                <ChevronDownIcon className='h-5 w-5 text-gray-700'/>
            </TouchableOpacity>
            {isOpen && (
                <View style={tailwind('mt-1 bg-white rounded shadow')}>
                    <RNPickerSelect
                        onValueChange={(value) => handleOptionSelect(value)}
                        items={options}
                    />
                </View>
            )}
        </View>
    );
};

export default Dropdown;

255, 245, 153
255, 238, 157
255, 243, 183
255, 247, 209

