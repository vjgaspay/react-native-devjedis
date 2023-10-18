import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Login = () => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Link href="/" style={{marginTop: 15, color: 'blue'}}>Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Login;