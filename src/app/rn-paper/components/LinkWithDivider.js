import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Divider } from "react-native-paper";

const LinkWithDivider = ({ resourcePath, title }) => {
    return (
        <View>
            <Link href={ "/rn-paper/" + resourcePath } style={styles.link}>{ title }</Link>
            <Divider bold={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    link:  {
        margin: 10,
        fontSize: 20,
        color: "#0d6efd"
    }
});

export default LinkWithDivider;