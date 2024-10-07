
    import React, { useEffect, useState } from 'react';
    import { View, Text, Button } from 'react-native';

    const UseEffectComponent = () => {
        const [count, setCount] = useState(0)
        const countEvery3 = Math.floor(count / 3)

        useEffect(() => {
            console.log(countEvery3)
        })
        return (
            <Button
                title={`Increment ${count}`}
                onPress={() => {
                    setCount(count + 1)
                }}
            />
        )

    };
 
export default UseEffectComponent;