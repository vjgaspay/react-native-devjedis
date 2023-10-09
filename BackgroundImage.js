import { Text, View, StyleSheet, ImageBackground } from "react-native";

const image = require("./assets/images/background-image.png");

const BackgroundImage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Text element in front of background image</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 14,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#00000055'
    }
});

export default BackgroundImage;
