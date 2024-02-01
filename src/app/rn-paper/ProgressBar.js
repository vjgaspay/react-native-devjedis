import { Text, View, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

const RNPaperProgressBar = () => {
    return (
        <View style={styles.container}>
            <ProgressBar progress={0.5} />

            <ProgressBar
                indeterminate={true}
                style={{marginTop: 20}}
                color="red"
            />

            <ProgressBar
                style={{marginTop: 20, height: 20}}
                color="green"
                progress={0.8}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    }
});

export default RNPaperProgressBar;