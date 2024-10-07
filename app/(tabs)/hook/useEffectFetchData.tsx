
    import React, { useEffect, useState } from 'react';
    import { View, Text, Button } from 'react-native';

interface Idata {
    fact: string;
    length: number;
}

const useEffectFetchDataComponent = () => {
    const [data, setData] = useState<Idata>();

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('https://catfact.ninja/fact');
                const data: Idata = await response.json();
                setData(data);
            };

            fetchData();
        }, []);


    return (
        <View>
            <Text>{data?.fact}</Text>
            <Text>{data?.length}</Text>
        </View>
    );
};

export default useEffectFetchDataComponent;