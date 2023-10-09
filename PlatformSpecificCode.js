import { Text, View, StyleSheet, Platform } from "react-native";

const PlatformSpecificCode = () => {
    const text = ( Platform.OS === 'android' ) ? 'This is android.'
        : ( Platform.OS === 'ios' ) ? 'This is iOS.'
        : 'This is web'
    ;

    return (
        <View style={styles.container}>
            <Text>PlatformSpecificCode</Text>
            <Text>{ text }</Text>
            <Text>Version: { Platform.Version }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PlatformSpecificCode;