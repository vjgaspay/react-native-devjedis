import { useState } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Switch } from "react-native-paper";

const RNPaperSwitch = () => {
    const [ showMyName, setShowMyName ] = useState(false);

    const onToggleSwitch = () => setShowMyName( !showMyName );

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Switch value={showMyName} onValueChange={ onToggleSwitch } />
                <Text style={styles.text}>Show my name</Text>
            </View>

            { showMyName && <Text style={styles.text}>Vincent</Text> }
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 6
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
});

export default RNPaperSwitch;