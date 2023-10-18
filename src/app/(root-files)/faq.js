import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const FAQ = () => {
    return (
        <View>
            <Text>FAQ Screen</Text>
            <Link href="/" style={{marginTop: 15, color: 'blue'}}>Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({});

export default FAQ;