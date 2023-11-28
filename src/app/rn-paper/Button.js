import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const RNPaperButton = () => {
    return (
        <View style={styles.container}>
            <Button mode="text" icon="ab-testing" onPress={() => {}}>Text</Button>

            <Button mode="outlined" icon="camera" onPress={() => {}}>Outlined</Button>

            <Button mode="contained" icon="camera" onPress={() => {}}>Contained</Button>

            <Button mode="elevated" icon="camera" onPress={() => {}}>Elevated</Button>

            <Button mode="contained-tonal" icon="camera" onPress={() => {}}>Contained-tonal</Button>

            <Button mode="contained" icon="camera" onPress={() => {}}
                buttonColor="lightblue"
                textColor="gray"
                rippleColor="blue"
            >Set Color</Button>

            <Button mode="elevated" icon="camera" loading={true} onPress={() => {}}>Loading</Button>

            <Button mode="contained" icon="camera" disabled={true} onPress={() => {}}>Disabled</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: "space-around"
    }
});

export default RNPaperButton;