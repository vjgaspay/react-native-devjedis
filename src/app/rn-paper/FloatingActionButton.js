import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const RNPaperFloatingActionButton = () => {
    const [ counter, setCounter ] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Counter: {counter}</Text>

            <FAB
                style={styles.fab}
                icon="plus"
                onPress={ () => setCounter(counter + 1) }
                label="Add"
                color="red"
                //loading
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
        backgroundColor: 'lightblue'
    }
});

export default RNPaperFloatingActionButton;