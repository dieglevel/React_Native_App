
    import React, { useEffect, useState } from 'react';
    import { View, Text, Button } from 'react-native';

    const UseEffectDependencyComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count has changed:', count);
        return () => {
            console.log('Cleaning up...');
        };
    }, [count]);

    return (
        <View>
            <Text onPress={() => setCount(count + 1)}>Increment Count: {count}</Text>
        </View>
    );
};

export default UseEffectDependencyComponent;