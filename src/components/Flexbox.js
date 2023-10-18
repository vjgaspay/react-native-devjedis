import { Text, View, StyleSheet } from "react-native";

const Flexbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>1</Text>
            <Text style={styles.box2}>2</Text>
            <Text style={styles.box3}>3</Text>
            <Text style={styles.box4}>4</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around', //for main axis
        alignItems: 'flex-end', //for cross axis
        paddingTop: 50,
        backgroundColor: 'lightgray'
    },
    box1: {
        flex: 2,
        backgroundColor: 'red',
        paddingVertical: 10
    },
    box2: {
        flex: 1,
        backgroundColor: 'green',
        paddingVertical: 20
    },
    box3: {
        flex: 1,
        backgroundColor: 'blue',
        paddingVertical: 30
    },
    box4: {
        flex: 1,
        backgroundColor: 'yellow',
        paddingVertical: 40
    },
});

export default Flexbox;