import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const LoginModal = () => {
    return (
        <View>
            <Text>This is a modal.</Text>

            <Link href="../" style={{marginTop: 15, color: 'blue'}}>Dismiss modal</Link>
        </View>
    );
}

const styles = StyleSheet.create({});

export default LoginModal;