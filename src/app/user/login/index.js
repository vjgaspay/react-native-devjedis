import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Login = () => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Link href="/user/login/forgot-password" style={{marginTop: 15, color: 'blue'}}>Forgot Password</Link>

            <Link href="/user/login/modal" style={{marginTop: 15, color: 'blue'}}>Show Modal</Link>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Login;