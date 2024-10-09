import { Context, IContextDataProps } from "@/types/context/context";
import { useContext } from "react";
import { Text, View } from "react-native";

const UseContext = () => {
    const context = useContext<IContextDataProps>(Context)


    return ( <View>
        <Text>{context.data.title}</Text>
        <Text>{context.data.name}</Text>
    </View> );
}
 
export default UseContext;