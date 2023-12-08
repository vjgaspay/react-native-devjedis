import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const RNPaperAvatar = () => {
    const img = require("../../../assets/images/logo.jpg");

    return (
        <View>
            <Avatar.Icon icon="baby-face-outline" size={60} color="gold" style={styles.avatar} />

            <Avatar.Image source={img} size={60} style={styles.avatar} />

            <Avatar.Text label="VG" size={60} color="gold" style={styles.avatar} />
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: "brown",
        margin: 10
    }
});

export default RNPaperAvatar;