import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
const UseStateComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Bạn đã click được: {count} lần</Text>
            <Button onPress={() => setCount(count + 1)}>
                Click me
            </Button>
        </View>
    );
}
 
export default UseStateComponent;