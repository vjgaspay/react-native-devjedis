import { Text, View, StyleSheet, useColorScheme } from "react-native";

const ColorThemes = () => {
    const colorScheme = useColorScheme();

    const themeTextStyle = ( colorScheme === 'light' ) ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = ( colorScheme === 'light' ) ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Text style={themeTextStyle}>ColorThemes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightContainer: {
        backgroundColor: 'white'
    },
    lightThemeText: {
        color: 'black'
    },
    darkContainer: {
        backgroundColor: '#333'
    },
    darkThemeText: {
        color: 'white'
    },
});

export default ColorThemes;