import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
interface IProps {
    numbers: number[];
}


const UseMemoComponent = () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return (
        <View>
            <Text>Sum: {sum}</Text>
        </View>
    );

};

export default UseMemoComponent;